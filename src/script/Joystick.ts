import CharacterController from "../CharacterController";
import { ui } from "../ui/layaMaxUI";
import ConstEvent from "./ConstEvent";


/*
* name;
*/
export default class Joystick extends ui.test.JoystickUI{

    //当前事件ID
    private curTouchId:number;
    //摇杆最大移动距离
    private maxDistance:number  = 90;
    //摇杆移动的比例
    public moveRatio:Laya.Point    = new Laya.Point;
    //摇杆移动显示位置
    private moveTargrt:Laya.Point   = new Laya.Point;
    public static joystick_touched :boolean;
   

    constructor(){
        super();

        this.background.anchorX = 0.5;
        this.background.anchorY = 0.5;

        this.forground.anchorX  = 0.5;
        this.forground.anchorY  = 0.5;
        this.forground.pos(this.background.x,this.background.y);
        this.forground.mouseThrough = true;
        this.forground.mouseEnabled = false;

        this.maxDistance = 100 ; //摇杆最大距离实际上就是 虚拟摇杆的背景

        this.background.on(Laya.Event.MOUSE_DOWN,   this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP,     this,this.onMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT,   this,this.onMouseUp);
        Joystick.joystick_touched=false;
    }

    private onMouseDown(e:Laya.Event):void
    {
        e.stopPropagation();
        this.curTouchId = e.touchId;    
        console.log("onMouseDown");
        if (Laya.Browser.onMobile) {
            if(e.touches[1]){
                Joystick.joystick_touched=false;

            }
          else{Joystick.joystick_touched=true;}
        }
        Laya.stage.event("start");
        
        this.background.on(Laya.Event.MOUSE_MOVE,this,this.onTouchMove);
        
    }

    private onTouchMove(e:Laya.Event):void
    {
        e.stopPropagation();
        //如果不是上次的点击id，返回（避免多点抬起，以第一次按下id为准）
        if(e.touchId != this.curTouchId)    return;
        console.log("onMouseMove");
        //将移动时的鼠标屏幕坐标转化为摇杆局部坐标
        var locationPos:Laya.Point = this.globalToLocal(new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY),false);
        //更新摇杆控制点位置
        //摇杆移动位置在 背景里面
        if(this.maxDistance >= this.distance(locationPos.x,locationPos.y, this.background.x,this.background.y))
        {
            //this.forground.pos(locationPos.x,locationPos.y);
            this.moveTargrt.x  = locationPos.x;
            this.moveTargrt.y  = locationPos.y
        }else
        {
            //更新摇杆移动位置在 背景外边
            let  deltaX =  locationPos.x - this.background.x;
            let  deltaY =  locationPos.y - this.background.y;

            let angle = Math.atan2(deltaY, deltaX) 
            //this.forground.pos(this.background.x + Math.cos(angle)*this.maxDistance,   this.background.y + Math.sin(angle)*this.maxDistance);
            this.moveTargrt.x  = this.background.x + Math.cos(angle)*this.maxDistance;
            this.moveTargrt.y  = this.background.y + Math.sin(angle)*this.maxDistance;
        }

        //设置摇杆显示位置
        this.forground.pos(this.moveTargrt.x, this.moveTargrt.y);
        //计算摇杆移动比例
        this.moveRatio.x =  (this.forground.x - this.background.x)/this.maxDistance;
        console.log("joystick.moveRatio.x:",this.moveRatio.x);
        this.moveRatio.y =  (this.forground.y - this.background.y)/this.maxDistance;

        //console.log("this.moveRatio.x:"+this.moveRatio.x);
        //console.log("this.moveRatio.y:"+this.moveRatio.y);
        //发送摇杆移动比例事件
        Laya.stage.event("move", this.moveRatio);
    }

    private onMouseUp(e:Laya.Event):void
    {
        e.stopPropagation();
        //如果不是上次的点击id，返回（避免多点抬起，以第一次按下id为准）
        if(e.touchId != this.curTouchId)return;
        Joystick.joystick_touched=false;
        console.log("ononMouseUp");
        
        this.background.off(Laya.Event.MOUSE_MOVE,this,this.onTouchMove);
        this.forground.pos(this.background.x,this.background.y);
        
        Laya.stage.event("end");
    }

    ///计算两个点的距离
    private distance(X,Y,mouseX,mouseY) :number
    {
        let dx:number = X - mouseX;
        let dy:number = Y - mouseY;
        let distance:number = Math.sqrt(dx*dx+dy*dy);
        return distance;
    }


}