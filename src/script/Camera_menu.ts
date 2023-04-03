import menu from "./menu";

export default class Camera_menu extends Laya.Script {
    public gameobject:Laya.Sprite3D;
    //摄像机目标物体
    private target:Laya.Sprite3D;
  
    
    constructor() { super(); 
    
        
    
    }
    
    onEnable(): void {


    }

    onDisable(): void {
    }
    public onUpdate(): void {  


        switch(menu.target_to_load)
    {

    }
        


    }

    public set Gameobject( tar:Laya.Sprite3D ){
        this.gameobject = tar


    }
}