import CameraBehavior from "./CameraBehavior";
import ENTRANCE from "./script/ENTRANCE";

/*
* name;
*/
export default class CharacterController extends Laya.Script{

    private gameobject:Laya.Sprite3D;
    private character:Laya.Sprite3D;
    private camera:Laya.Camera;
    private moveSpeed = 0.07;

    private moveRatio:Laya.Point;
    private isMove:boolean;

    private animtor:Laya.Animator;
    public static JOYSTICK_START :string="start";
    public static JOYSTICK_MOVE  :string="move";
    public static JOYSTICK_END   :string="end";
    
    constructor(){
        super();
        
    }
    onEnable(){
        
        this.moveRatio = new Laya.Point();
        console.log("start behave");
        
        Laya.stage.on("move",this, this.ontouch);
         Laya.stage.on("start",this, ()=>
        {
            this.isMove = true;
            console.log("playwalk");
            this.animtor.play("Walk");
        });
        Laya.stage.on("end",this, this.onTouchstop);



    }

 
    public set Gameobject( tar:Laya.Sprite3D ){
       this.gameobject = tar;
       this.character  = this.gameobject.getChildAt(0) as Laya.Sprite3D;
       this.animtor    = this.character.getComponent(Laya.Animator) as Laya.Animator;
       console.log("setobject");
       

    }

    public set Camera_char( tar:Laya.Camera ){
        this.camera = tar;
      
        
 
     }


    private onTouchstop():void
    {
        
        this.isMove = false;
         console.log("playidle");
        this.animtor.play("Idle");

    }

    private ontouch(move:Laya.Point) :void
    {
        this.moveRatio = move;
      
    }
    public onUpdate(): void
    {
        //this.gameobject.transform.rotationEuler=new Laya.Vector3(0, 180+this.camera.transform.rotationEuler.y,0);
        //this.gameobject.transform.rotate (new Laya.Vector3(0,0.1,0))
        if( this.isMove )
        {  
            //if(!ENTRANCE.view_lock)
            //{
                this.gameobject.transform.rotationEuler=new Laya.Vector3(0, 180+this.camera.transform.rotationEuler.y,0);
           // }
            let angel =   Math.atan2(this.moveRatio.x, this.moveRatio.y) * 180 / Math.PI -180; 
            if(angel < 0) angel += 360;
            this.character.transform.localRotationEuler =  new Laya.Vector3( 0, angel,0);
            this.gameobject.transform.translate( new Laya.Vector3( -this.moveSpeed*this.moveRatio.x, 0,-this.moveSpeed*this.moveRatio.y));
     
            //this.gameobject.transform.rotate ( new Laya.Vector3(0, Math.atan2(this.moveRatio.y, this.moveRatio.x)  ,0),true,false );
             //this.angle = Math.atan2(this.deltaX,this.deltaY) * 180 / Math.PI; 
            // if(this.angle < 0) this.angle += 360;
            // //对角度取整
            // this.angle = Math.round(this.angle);
           
        
            // let angel = Math.atan( this.moveRatio.x/ this.moveRatio.y)* 180 / Math.PI;
            // console.log(" angel:"+ angel);
        }
     
 
    }

    public _lateUpdate():void
    {
        //this.character.transform.localPosition = new Laya.Vector3(this.character.transform.localPosition.x,this.character.transform.localPosition.y,0);
    }
}