import CameraBehavior from "../CameraBehavior";
import CharacterController from "../CharacterController";


/*
* name;
*/
export default class initscene extends Laya.Scene3D{

    public cameraObj      :Laya.MeshSprite3D;
    public characterObj   :Laya.MeshSprite3D;

    constructor(){
        super();
    }
    public initee():void
    {   
       
        this.cameraObj      = this.getChildByName("Main Camera") as Laya.MeshSprite3D;
        this.characterObj   = this.getChildByName("Target") as Laya.MeshSprite3D;
        this.addChild(this.cameraObj);
        this.addChild(this.characterObj);
        //this.cameraObj.addComponent(CameraBehavior);
        var cameraBehavior = this.cameraObj.addComponent(CameraBehavior)as CameraBehavior;
       // cameraBehavior.Gameobject = this.cameraObj;
       // cameraBehavior.Target = this.characterObj;
        let characterControll :CharacterController = this.characterObj.addComponent(CharacterController) as CharacterController;
        
        cameraBehavior.Gameobject = this.cameraObj;
        cameraBehavior.Target = this.characterObj;
        characterControll.Gameobject = this.characterObj;
       
        
       
        
   }
}