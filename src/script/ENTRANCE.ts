
import Joystick from "./Joystick";
import { ui } from "../ui/layaMaxUI";
import initscene from "./initscene";
import CameraBehavior from "../CameraBehavior";
import CharacterController from "../CharacterController";
import menu from "./menu";
import preview from "./preview";
import CameraBehavior02 from "./CameraBehavior02";
import CameraBehavior03 from "./CameraBehavior03";

// 程序入口
export default class ENTRANCE extends ui.test.ENTRANCEUI {
    public scene_s:Laya.Scene3D;
	private sprite3D:Laya.Sprite3D;
    public cameraObj:Laya.Camera;
    public characterObj:Laya.Sprite3D;
    public static touchCount: number;
    vec0:Laya.Vector3;
    rotat0:Laya.Vector3;
    public static view_lock:boolean;
   
    constructor() {
        super();
        //初始化引擎
        this.scene_s =null;
        this.sprite3D =null;
       
        Laya3D.init(1000, 1000);
        //适配模式
        Laya.stage.scaleMode    = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH       = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV       = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_HORIZONTAL;
 


       // this.btn_return.on(Laya.Event.CLICK, this, this.click_the_btn_return); 
        //开启统计信息
        Laya.Stat.show();

        var resArray : Array<any> = [
             "res/atlas/comp.atlas",    
             "res/atlas/UI.atlas",                             
             "res/unityscene04/DemoScene.ls",
             "res/naturescene/DemoDay.ls",
             "res/targets_p/targets.lh",
             "res/lab/outpost.ls"
             
        ];
        
        ENTRANCE.view_lock=false;
        Laya.loader.create(resArray, Laya.Handler.create(this,this.onCompelt),Laya.Handler.create(this, this.onProgress));
        

    }

    //加载完成
    public onCompelt(){
         console.log("onCompelt");
         this.scene_s =Laya.Loader.getRes("res/naturescene/DemoDay.ls")as Laya.Scene3D;
         switch(menu.scene_to_load)
         {
            case "Nature":this.scene_s =Laya.Loader.getRes("res/naturescene/DemoDay.ls")as Laya.Scene3D;break;
            case "Scifiroom":this.scene_s =Laya.Loader.getRes("res/unityscene04/DemoScene.ls")as Laya.Scene3D;break;
            case "Lab":this.scene_s =Laya.Loader.getRes("res/lab/outpost.ls")as Laya.Scene3D;break;
         }
         Laya.stage.addChildAt(this.scene_s,0);
         //this.scene_s =Laya.stage.addChild(Laya.Loader.getRes("res/naturescene/DemoDay.ls"))as initscene;
         var sp = Laya.Loader.getRes("res/targets_p/targets.lh") as Laya.Sprite3D;
         var ps= this.scene_s.getChildByName("PS") as Laya.Sprite3D;
         var vec=ps.transform.position as Laya.Vector3;
         var rotat=ps.transform.rotationEuler as Laya.Vector3;
         this.characterObj   = sp.getChildByName("Target1") as Laya.Sprite3D;
         switch(menu.target_to_load)
         {
            case "Astronaut": this.characterObj   = sp.getChildByName("Target1") as Laya.Sprite3D;break;
            case "Robort": this.characterObj   = sp.getChildByName("Target") as Laya.Sprite3D;break;
            case "Girl": this.characterObj   = sp.getChildByName("girl") as Laya.Sprite3D;break;
         }
         this.scene_s.addChild(this.characterObj);
         this.cameraObj      = this.scene_s.getChildByName("Camera") as Laya.Camera;
         //cameraObj.addChild(characterObj);
         this.characterObj.transform.position=vec;
         if(menu.target_to_load=="Girl"){
            this.characterObj.transform.translate(new Laya.Vector3(0,0.5,0));

         }
        //characterObj.transform.translate(new Laya.Vector3(-9,-1.8,49) ); 
         //characterObj.transform.rotate(new Laya.Vector3(0,-160,0) ); 
         //characterObj.transform.rotate(rotatd,true,false);
         this.characterObj.transform.rotationEuler=rotat;
        
         this.vec0=this.cameraObj.transform.position as Laya.Vector3;
         this.rotat0=this.cameraObj.transform.rotationEuler as Laya.Vector3;
         //this.characterObj.getChildAt(0).addChild(this.cameraObj);
         //this.cameraObj.transform.position=vec0;
         //this.cameraObj.transform.rotationEuler=rotat0;
         this.scene_s.addChild(this.cameraObj);

         //导入摇杆UI
         let joystick:Joystick = new Joystick();
         joystick.x = 100;
         joystick.y = Laya.stage.height - joystick.height - 50;
         Laya.stage.addChildAt(joystick,1);
         joystick.mouseThrough=false;


         /*var btn:Laya.Button = new Laya.Button("comp/button.png");
         //将Button添加到舞台上
         btn.x = 1500;
         btn.y = Laya.stage.height - joystick.height - 50;
         Laya.stage.addChildAt(btn,2);
         //设置Button相关属性
         btn.width = 100;
         btn.height = 50;
         btn.label = "视角锁定";
         btn.on(Laya.Event.CLICK, this, this.click_the_btn);
         */ 


         

         
         var cameraBehavior:CameraBehavior03 = this.cameraObj.addComponent(CameraBehavior03)as CameraBehavior03;
         let characterControll :CharacterController = this.characterObj.addComponent(CharacterController) as CharacterController;
         cameraBehavior.Gameobject = this.cameraObj;
         cameraBehavior.Target = this.characterObj;
         characterControll.Gameobject = this.characterObj;
         characterControll.Camera_char = this.cameraObj;
        
        
            
            //characterObj.addComponent(CharacterController);
            
           
          
            
 
    }
    click_the_btn(CLICK: string, arg1: this, click_the_btn: any) {
        ENTRANCE.view_lock=true;
        console.log("clicked");
        this.cameraObj.getComponent(CameraBehavior).destroy();
        this.characterObj.getChildAt(0).addChild(this.cameraObj);
        this.cameraObj.transform.position=this.vec0;
        this.cameraObj.transform.rotationEuler=this.rotat0;
        
    }

     //加载进度
    private onProgress(pro:number):void
    {
        console.log("加载进度："+pro);
    }

    onUpdate(){
        ENTRANCE.touchCount = this.scene_s.input.touchCount();
    }

   

   
    //public onMouseDown(e:Laya.Event):void {
      //  var curTouchId = e.touchId;
      //  console.log(curTouchId );
        
      //  Laya.stage.event(CharacterController.JOYSTICK_START);
        
    //}
     


}
//new ENTRANCE();
