import { ui } from "../ui/layaMaxUI";
import Joystick from "./Joystick";

/*
* name;
*/
export default class UIManager extends ui.test.mainUI{
    constructor(){
        super();   
        let joystick:Joystick = new  Joystick();
        
        this.addChild(joystick);
        joystick.x = 200;
        joystick.y =  this.height - joystick.height - 200;
        let uiManager:UIManager = new UIManager();
            Laya.stage.addChild(uiManager);
            
    }

    //public initJoystick():void
    //{
      //  let joystick:Joystick = new  Joystick();
        
       // this.addChild(joystick);
       // joystick.x = 200;
        //joystick.y =  this.height - joystick.height - 200;
       // let uiManager:UIManager = new UIManager();
       //     Laya.stage.addChild(uiManager);
       //     uiManager.initJoystick();
    //}
}