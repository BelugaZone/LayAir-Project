

/*
* name;
*/
export default class CameraBehavior02 extends Laya.Script{
    public gameobject:Laya.Sprite3D;
    //摄像机目标物体
    private target:Laya.Sprite3D;
    //摄像机的角度
    public angel:number     = 30;
    //摄像机和目标物体的距离
    public distance:number  = 25;
    private rotaionSpeed: number = 0.004;
    private lastMouseX: number = 0;
    // 鼠标上个位置y
    private lastMouseY: number = 0;
    private GetAxisX: number ;
    private GetAxisY: number ;
    // 是否按下
    private isMouseDown: boolean = false;
    private finalVec: Laya.Vector3 = new Laya.Vector3();
    // 旋转角度
    private yawPitchRoll: Laya.Vector3 = new Laya.Vector3();
   // private watchPoint:Laya.Transform3D;
   // private speed:number = 0.05; //旋转的速度
   // private radius:number = 50; //半径, 小球距离鼠标的距离
   // private angle:number=0;
   public canRotation_X: boolean = true;
    
   public canRotation_Y: boolean = true;
   
   public canScale: boolean = true;
   public AroundPos: Laya.Vector3 = new Laya.Vector3();
   public damper: number = 5;
   public CurrentAngles: Laya.Vector3 = new Laya.Vector3();
   public CurrentAnglesTemp: Laya.Vector3 = new Laya.Vector3();
   public CurrentDistance: number;
   protected targetAngles: Laya.Vector3 = new Laya.Vector3();
   protected targetDistance: number;
   public tempV: Laya.Vector3 = new Laya.Vector3();
   public tempV1: Laya.Vector3 = new Laya.Vector3();

   public dis:Laya.Vector3 =new  Laya.Vector3();camera: Laya.Camera;
    curTouchId: number;
    private isTwoTouch:boolean;
	private first:boolean;
	private twoFirst:boolean;
    
;

    constructor(){
        
        super();
        this.isTwoTouch = false;
		this.first = true;
		this.twoFirst = true;
        

        
       
    }

    public _initialize(): void {
        
        
        
    }   
    onStart(){
        // 注册监听
        this.AroundPos=this.target.transform.position;
        
        
        this.CurrentAngles = new Laya.Vector3(-this.gameobject.transform.rotationEuler.x, this.gameobject.transform.rotationEuler.y, 0);
    
        this.targetAngles = new Laya.Vector3(-this.gameobject.transform.rotationEuler.x, this.gameobject.transform.rotationEuler.y, 0);
    
        this.CurrentDistance = Laya.Vector3.distance(this.gameobject.transform.position, this.AroundPos);
    
        this.targetDistance = Laya.Vector3.distance(this.gameobject.transform.position, this.AroundPos)-1;
        
		
        
        // 获取对象
		//this.camera = this.target as Laya.Camera;
	}


    public onUpdate(): void
    {   
        
        var elapsedTime = Laya.timer.delta;
        var vec=this.target.transform.position;
        var rote=this.target.transform.rotationEuler;
        let nowPos :Laya.Vector3 = new  Laya.Vector3();
        
        nowPos.x = this.target.transform.position.x - this.dis.x ;
        nowPos.y = this.target.transform.position.y - this.dis.y ;
        nowPos.z = this.target.transform.position.z  -this.dis.z ;
        this.AroundPos.y=1.5;
        //this.gameobject.transform.position = nowPos;
        var _scene =  this.owner.parent as Laya.Scene3D;
        console.log("scene",_scene)
        var touchCount = _scene.input.touchCount();
        
		if (touchCount){
			//判断是否为两指触控，撤去一根手指后引发的touchCount===1
			//if(this.isTwoTouch){
				//return;
			//}
			
			//获取当前的触控点，数量为1
			var touch = _scene.input.getTouch(0);
			//是否为新一次触碰，并未发生移动
			if (this.first){
				//获取触碰点的位置
				this.lastMouseX = touch.position.x;
				this.lastMouseY = touch.position.y;
				this.first = false;
			}
			else{
				//移动触碰点
                this.GetAxisX=touch.position.x - this.lastMouseX;
                this.GetAxisY=touch.position.y - this.lastMouseY;
                this.lastMouseX = touch.position.x;
				this.lastMouseY = touch.position.y;
                this.targetAngles.y -= (this.GetAxisX * 1);
            
                this.targetAngles.x += (this.GetAxisY * 1);
                   
                   //Range.
                   
               this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
				
			}
		//}
       // else if (2 === touchCount){
            //this.isTwoTouch = true;
        }
        else if (0 === touchCount){
			
			this.first = true;
			this.twoFirst = true;
			this.lastMouseX = 0;
			this.lastMouseY = 0;
			this.isTwoTouch = false;
		}
 





       // if (Laya.Browser.onMobile) {
    
           // this.AroundByMobileInput();
            
           // } else {
            
           // this.AroundByMouseInput();
            
           // }
        if (!this.canRotation_X) this.targetAngles.y = 0;
    
        if (!this.canRotation_Y) this.targetAngles.x = 0;
    
    //Lerp.
    
                
        this.CurrentAngles = this.LerpVector3(this.CurrentAngles, this.targetAngles, this.deltaTime * this.damper);
    
        this.CurrentDistance = this.LerpNum(this.CurrentDistance, this.targetDistance, this.deltaTime * this.damper);
        this.CurrentAnglesTemp.x = -this.CurrentAngles.x;
    
        this.CurrentAnglesTemp.y = this.CurrentAngles.y;
    
        this.CurrentAnglesTemp.z = this.CurrentAngles.z;
    
        this.gameobject.transform.rotationEuler = this.CurrentAnglesTemp;
    
        Laya.Vector3.scale(this.GetForward, this.CurrentDistance, this.tempV)
    
        Laya.Vector3.subtract(this.AroundPos, this.tempV, this.tempV1)
    
        this.gameobject.transform.position = this.tempV1;
          
        //this.lastMouseX = touch.position.x;
		//this.lastMouseY = touch.position.y;
        
            

    
}
    public set Gameobject( tar:Laya.Sprite3D ){
        this.gameobject = tar


    }

    public set Target( tar:Laya.Sprite3D )
    {
        this.target = tar;
        this.dis.x =  this.target.transform.position.x - this.gameobject.transform.position.x;
        this.dis.y =  this.target.transform.position.y - this.gameobject.transform.position.y;
        this.dis.z =  this.target.transform.position.z - this.gameobject.transform.position.z;
        
        

        console.log(this.dis);
    }




    protected LerpVector3(min: Laya.Vector3, max: Laya.Vector3, t: number): Laya.Vector3 {
    
        var vec: Laya.Vector3 = new Laya.Vector3();
        
        vec.x = min.x + t * (max.x - min.x);
        
        vec.y = min.y + t * (max.y - min.y);
        
        vec.z = min.z + t * (max.z - min.z);
        
        return vec;
        
        }
        
    protected LerpNum(min: number, max: number, t: number): number {
        
        return min + t * (max - min);
        
        }

    public get deltaTime(): number {
    
            return Laya.timer.delta / 1000;
            
            }
    //public get GetAxisX(): number {
       
           // return Laya.stage.mouseX - this.lastMouseX;
        
                
           // }
                
   // public get GetAxisY(): number {
                
       
           // return Laya.stage.mouseY - this.lastMouseY;
        
                
        // }


    public FORWORD: Laya.Vector3 = new Laya.Vector3();      
    public get GetForward(): Laya.Vector3 {
    
            this.gameobject.transform.getForward(this.FORWORD);
            
            return this.FORWORD
                
         }
    protected mouseRunning: boolean = false;
    protected touchRunning: boolean = false;
    

         
    myevent: Laya.Event;
         
 
    protected Clamp(num, min, max): number {
         
         if (num < min) {
         
         return min;
         
         } else if (num > max) {
         
         return max;
         
         } else {
         
         return num;
         
         }
         
         }
         
    protected AroundByMobileInput(): void {
    
        if (this.mouseRunning) {
                
            //Mouse pointer.
         
         this.targetAngles.y -= (this.GetAxisX * 1);
            
         this.targetAngles.x += (this.GetAxisY * 1);
            
            //Range.
            
        this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
            
        }}
    protected AroundByMouseInput(): void {
    
            if (this.mouseRunning) {
                
                //Mouse pointer.
                
             this.targetAngles.y -= (this.GetAxisX * 1);
                
            this.targetAngles.x += (this.GetAxisY * 1);
                
                //Range.
                
            this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
                
            }}



     
}