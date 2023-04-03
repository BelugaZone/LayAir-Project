import { ui } from "../ui/layaMaxUI";
import ENTRANCE from "./ENTRANCE";


export default class menu extends ui.test.menuUI {
    private m_btn: Laya.Button;
    static scene_to_load:string;
    static target_to_load:string;
    public scene_c:Laya.Scene3D;
    public characterObj_p:Laya.Sprite3D;
    public cameraObj_c:Laya.Camera;
    public preview_state:number;
    public scene_state:number;
    

  
    
    constructor() { super(); 
        Laya3D.init(1000, 1000);
        //适配模式
        Laya.stage.scaleMode    = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH       = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV       = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_HORIZONTAL;
        
        
        console.log(this.m_btn);
        // 绑定点击事件处理
        this.button_s.on(Laya.Event.CLICK, this, this.click_the_btn); 
        this.preview.on(Laya.Event.CLICK, this, this.click_the_preview); 
        this.btn_scene.on(Laya.Event.CLICK, this, this.click_the_btn_scene); 
        this.preview_state=0;
        this.scene_state=0;
        /*switch(this.combobox1.selectedLabel)
        {
            case "scifiroom":this.back.texture=Laya.loader.getRes("comp/scifi.jpg");break;
            case "nature":this.back.texture=Laya.loader.getRes("comp/nature.jpg");break;
           case "lab":this.back.texture=Laya.loader.getRes("comp/lab.jpg");break;
               

        }*/
        Laya.Stat.show();

        var resArray : Array<any> = [
             "res/targets_p/targets.lh",
             "res/lab/outpost.ls",
             "res/preview/preview.ls",
            // "res/preview/Day3.lmat"
             
        ];

        Laya.loader.create(resArray, Laya.Handler.create(this,this.onCompelt),Laya.Handler.create(this, this.onProgress));
        
    
    }
    
    
    click_the_btn() {
        
        //menu.scene_to_load=this.combobox1.selectedLabel;
        //menu.target_to_load=this.combobox2.selectedLabel;
        menu.scene_to_load=this.text2.text;
        menu.target_to_load=this.text1.text;
        Laya.stage.removeChildren(0, 2);
        Laya.Scene.open("test/ENTRANCE.scene");

        
    }
    click_the_preview() {
        
        
        var ps2 = this.scene_c.getChildByName("Camera2") as Laya.Sprite3D;
        var ps1 = this.scene_c.getChildByName("Camera1") as Laya.Sprite3D;
        var ps0 = this.scene_c.getChildByName("Camera0") as Laya.Sprite3D;
        if(this.preview_state==0){
        var vec=ps2.transform.position as Laya.Vector3;
        var rotat=ps2.transform.rotationEuler as Laya.Vector3;
         console.log(rotat) 
        this.cameraObj_c.transform.rotate(new Laya.Vector3(0,-70,0));
        this.cameraObj_c.transform.position=vec;
        //this.cameraObj.transform.rotationEuler=rotat;
        console.log(this.cameraObj_c.transform.rotationEuler)
        this.preview_state=this.preview_state+1;
        this.text1.text="Girl";
        }
        else if(this.preview_state==1){
            var vec=ps1.transform.position as Laya.Vector3;
            var rotat=ps1.transform.rotationEuler as Laya.Vector3;
             console.log(rotat) 
           // this.cameraObj.transform.rotate(new Laya.Vector3(0,-70,0));
            this.cameraObj_c.transform.position=vec;
            this.cameraObj_c.transform.rotationEuler=rotat;
            console.log(this.cameraObj_c.transform.rotationEuler)
            this.preview_state=this.preview_state+1;
            this.text1.text="Astronaut";
            }
        else if(this.preview_state==2){
            var vec=ps0.transform.position as Laya.Vector3;
            var rotat=ps0.transform.rotationEuler as Laya.Vector3;
            console.log(rotat) 
            //this.cameraObj.transform.rotate(new Laya.Vector3(0,-70,0));
            this.cameraObj_c.transform.position=vec;
            this.cameraObj_c.transform.rotationEuler=rotat;
            console.log(this.cameraObj_c.transform.rotationEuler)
            this.preview_state=0;
            this.text1.text="Robort";
            }
        
    }

    click_the_btn_scene() {
        if(this.scene_state==0)
        {
            this.image.skin="comp/nature.jpg";
            this.scene_state=this.scene_state+1;
            this.text2.text="Nature";

        }
        else if(this.scene_state==1)
        {
           this.image.skin="comp/lab.jpg";
           this.scene_state=this.scene_state+1;
           this.text2.text="Lab";
        }
        else if(this.scene_state==2)
        {
            this.image.skin="comp/scifi.jpg";
            this.scene_state=0;
            this.text2.text="Scifiroom";
        }






    }


    public onCompelt(){
        this.scene_c =Laya.Loader.getRes("res/preview/preview.ls")as Laya.Scene3D;
        Laya.stage.addChildAt(this.scene_c,0);
         
         //var sp_p = Laya.Loader.getRes("res/targets_p/targets.lh") as Laya.Sprite3D;
         //var ps= this.scene_c.getChildByName("PS") as Laya.Sprite3D;
         //var vec=ps.transform.position as Laya.Vector3;
         //var rotat=ps.transform.rotationEuler as Laya.Vector3;
         //this.characterObj_p   = sp_p.getChildByName("Target1") as Laya.Sprite3D;
        
         //this.scene_c.addChild(this.characterObj_p);
         //this.characterObj_p.transform.position=vec;
         //this.characterObj_p.transform.rotationEuler=rotat;
         this.cameraObj_c  = this.scene_c.getChildByName("Main Camera") as Laya.Camera;
         this.cameraObj_c.clearFlag = Laya.CameraClearFlags.Sky;
         this.scene_c.addChild( this.cameraObj_c);
        
        // var skyboxMaterial = Laya.Loader.getRes("res/preview/Day3.lmat") as Laya.Material;
         //var skyRenderer =  this.cameraObj_c.skyRenderer;
        // skyRenderer.mesh = Laya.SkyBox.instance;
        // skyRenderer.material = skyboxMaterial;
        // console.log("original",this.cameraObj_c.transform.rotationEuler)
         




    }
   
    
    
    onEnable(): void {
    }

    onDisable(): void {
    }
    private onProgress(pro:number):void
    {
        console.log("preview加载进度："+pro);
    }
}
