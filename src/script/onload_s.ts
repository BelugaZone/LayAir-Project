import CameraBehavior from "../CameraBehavior";
import CharacterController from "../CharacterController";
import ConstEvent from "./ConstEvent";
import Joystick from "./Joystick";





export default class On_Load extends Laya.Script {
    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    public intType: number = 1000;
    /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
    public numType: number = 1000;
    /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
    public strType: string = "hello laya";
    /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
    public boolType: boolean = true;
    
    private m_btn: Laya.Button;
    
 
    constructor() { super(); 
        Laya.stage.scaleMode    = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH       = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV       = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_HORIZONTAL;
        
    }
    
    onEnable(): void {
    }
 
    onDisable(): void {
    }
 
    onAwake(): void{
        console.log("onAwake!");
        // 直接获取本身节点
        this.m_btn = this.owner as Laya.Button; 
        console.log(this.m_btn);
        // 绑定点击事件处理
        this.m_btn.on(Laya.Event.CLICK, this, this.click_the_btn); 
        
    }
 
    public click_the_btn(): void{
       
        // 官方代码修改 ---------
        Laya.Scene3D.load("res/unityscene/Lobby.ls",Laya.Handler.create(null,function(scene){
            
            //加载完成获取到了Scene3d
            Laya.stage.addChild(scene);
            //获取摄像机
            var camera = scene.getChildByName("Main Camera");
            var characterObj = scene.getChildByName("Target") as Laya.MeshSprite3D;
            let cameraBehavior : CameraBehavior = camera.addComponent(CameraBehavior) as CameraBehavior;
            let characterControll :CharacterController = characterObj.addComponent(CharacterController) as CharacterController;
            //characterObj.addComponent(CharacterController);
            cameraBehavior.Gameobject = camera;
            cameraBehavior.Target = characterObj;
            characterControll.Gameobject = characterObj;
            let joystick:Joystick = new Joystick();
            joystick.x = 200;
            joystick.y = Laya.stage.height - joystick.height - 200;
            Laya.stage.addChild(joystick);
            //Laya.stage.event(ConstEvent.JOYSTICK_START);
         
            
           
            
           // Laya.stage.on(CharacterController.JOYSTICK_START,this, ()=>
           // {
            
           // animtor.play("walk");
           // });
           
            }))
            Laya.stage.on(Laya.Event.MOUSE_DOWN,this, this.onMouseDown);
        
            
            //添加光照
            
    }
    public onMouseDown():void {
        Laya.stage.event(CharacterController.JOYSTICK_START);
        
    }
     
            
            

 }
 

