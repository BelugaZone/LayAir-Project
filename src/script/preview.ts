import { ui } from "../ui/layaMaxUI";

export default class preview extends ui.test.previewUI {

    public scene_s:Laya.Scene3D;

    constructor() { super();
        Laya3D.init(100, 100);
        //适配模式
        Laya.stage.scaleMode    = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH       = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV       = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode   = Laya.Stage.SCREEN_HORIZONTAL;
 
        
        
        Laya.Stat.show();

        var resArray : Array<any> = [
             "res/targets/targets.lh",
             "res/lab/outpost.ls",
             "res/preview/preview.ls"
             
        ];

        Laya.loader.create(resArray, Laya.Handler.create(this,this.onCompelt),Laya.Handler.create(this, this.onProgress));
       
    
    }

    public onCompelt(){
        this.scene_s =Laya.stage.addChild(Laya.Loader.getRes("res/preview/preview.ls"))as Laya.Scene3D;
         //this.scene_s =Laya.stage.addChild(Laya.Loader.getRes("res/naturescene/DemoDay.ls"))as initscene;
         var sp = Laya.Loader.getRes("res/targets/targets.lh") as Laya.Sprite3D;
         var ps= this.scene_s.getChildByName("PS") as Laya.Sprite3D;
         var vec=ps.transform.position as Laya.Vector3;
         var rotat=ps.transform.rotationEuler as Laya.Vector3;
         var characterObj   = sp.getChildByName("Target") as Laya.Sprite3D;
         this.scene_s.addChild(characterObj);
         characterObj.transform.position=vec;
         characterObj.transform.rotationEuler=rotat;
         var cameraObj  = this.scene_s.getChildByName("Main Camera") as Laya.Sprite3D;
         this.scene_s.addChild(cameraObj);




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