
    //var camera = this.newScene.addChild(new Laya.Camera(0, 0.1, 100)) as Laya.Camera;
    
    export default class ModelViewer extends Laya.Script {
    
    // Text m_debugTip;
    
    public canRotation_X: boolean = true;
    
    public canRotation_Y: boolean = true;
    
    public canScale: boolean = true;

    
    public AroundPos: Laya.Vector3 = new Laya.Vector3();
    public mouseSettings: MouseSettings = new MouseSettings(0, 1, 0.3);
    public angleRange: MyRange = new MyRange(5, 90);
    public distanceRange: MyRange = new MyRange(1, 10);
    public damper: number = 5;
    public CurrentAngles: Laya.Vector3 = new Laya.Vector3();
    public CurrentAnglesTemp: Laya.Vector3 = new Laya.Vector3();
    public CurrentDistance: number;
    protected targetAngles: Laya.Vector3 = new Laya.Vector3();
    protected targetDistance: number;
    constructor() {
    
    super();
    
    }
    
    public transform: Laya.Transform3D;
    
    onStart(): void {
    
    this.transform = (this.owner as Laya.Sprite3D).transform;
    
    this.CurrentAngles = new Laya.Vector3(-this.transform.rotationEuler.x, this.transform.rotationEuler.y, 0);
    
    this.targetAngles = new Laya.Vector3(-this.transform.rotationEuler.x, this.transform.rotationEuler.y, 0);
    
    this.CurrentDistance = Laya.Vector3.distance(this.transform.position, this.AroundPos);
    
    this.targetDistance = Laya.Vector3.distance(this.transform.position, this.AroundPos);
    
    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
    
    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    
    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
    
    Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, this.mouseWheel)
    
    }
    
    onUpdate(): void {
    
    if (Laya.Browser.onMobile) {
    
    this.AroundByMobileInput();
    
    } else {
    
    this.AroundByMouseInput();
    
    }
    
    if (!this.canRotation_X) this.targetAngles.y = 0;
    
    if (!this.canRotation_Y) this.targetAngles.x = 0;
    
    //Lerp.
    
    this.CurrentAngles = this.LerpVector3(this.CurrentAngles, this.targetAngles, this.deltaTime * this.damper);
    
    this.CurrentDistance = this.LerpNum(this.CurrentDistance, this.targetDistance, this.deltaTime * this.damper);
    
    //Update transform position and rotation.
    
    // Quaternion.createFromYawPitchRoll(this.CurrentAngles.y,this.CurrentAngles.x,this.CurrentAngles.z,this.tempRotationZ)
    
    // this.transform.rotation = this.tempRotationZ;
    
    this.CurrentAnglesTemp.x = -this.CurrentAngles.x;
    
    this.CurrentAnglesTemp.y = this.CurrentAngles.y;
    
    this.CurrentAnglesTemp.z = this.CurrentAngles.z;
    
    this.transform.rotationEuler = this.CurrentAnglesTemp;
    
    Laya.Vector3.scale(this.GetForward, this.CurrentDistance, this.tempV)
    
    Laya.Vector3.subtract(this.AroundPos, this.tempV, this.tempV1)
    
    this.transform.position = this.tempV1;
    
    this.lastMouseX = Laya.stage.mouseX;
    
    this.lastMouseY = Laya.stage.mouseY;
    
    }
    
    //记录上一次手机触摸位置判断用户是在左放大还是缩小手势
    
    private oldPosition1: Laya.Vector3 = new Laya.Vector3();
    
    private oldPosition2: Laya.Vector3 = new Laya.Vector3();
    
    private m_IsSingleFinger: boolean;
    
    /*
    
    private void ScaleCamera()
    
    {
    
    //计算出当前两点触摸点的位置
    
    var tempPosition1 = Input.GetTouch(0).position;
    
    var tempPosition2 = Input.GetTouch(1).position;
    
    float currentTouchDistance = Vector3.Distance(tempPosition1, tempPosition2);
    
    float lastTouchDistance = Vector3.Distance(oldPosition1, oldPosition2);
    
    //计算上次和这次双指触摸之间的距离差距
    
    //然后去更改摄像机的距离
    
    distance -= ( currentTouchDistance - lastTouchDistance ) * scaleFactor * Time.deltaTime;
    
    //把距离限制住在min和max之间
    
    distance = Mathf.Clamp(distance, minDistance, maxDistance);
    
    //备份上一次触摸点的位置，用于对比
    
    oldPosition1 = tempPosition1;
    
    oldPosition2 = tempPosition2;
    
    }
    
    */
    
    public get TouchCount(): number {
    
    if (Laya.TouchManager.I._event.touches == null) {
    
    return 0;
    
    } else {
    
    return this.myevent.touches.length;
    
    }
    
    }
    
    public get Touchs(): Array {
    
    return this.myevent.touches
    
    }
    
    public get GetAxisX(): number {
    
    return Laya.stage.mouseX - this.lastMouseX;
    
    }
    
    public get GetAxisY(): number {
    
    return Laya.stage.mouseY - this.lastMouseY;
    
    }
    
    public get deltaTime(): number {
    
    return Laya.timer.delta / 1000;
    
    }
    
    public deltaWheel: number = 0;
    
    public FORWORD: Vector3 = new Vector3();
    
    public get GetForward(): Vector3 {
    
    this.transform.getForward(this.FORWORD);
    
    return this.FORWORD
    
    }
    
    protected lastMouseX: number = 0;
    
    protected lastMouseY: number = 0;
    
    protected mouseRunning: boolean = false;
    
    protected mouseDown(e: Laya.Event): void {
    
    this.mouseRunning = true;
    
    }
    
    myevent: Laya.Event;
    
    protected mouseMove(e: Laya.Event): void {
    
    this.myevent = e;
    
    }
    
    protected mouseWheel(e: Laya.Event): void {
    
    this.deltaWheel = e.delta;
    
    }
    
    protected mouseUp(e: Laya.Event): void {
    
    this.mouseRunning = false;
    
    }
    
    protected Clamp(num, min, max): number {
    
    if (num < min) {
    
    return min;
    
    } else if (num > max) {
    
    return max;
    
    } else {
    
    return num;
    
    }
    
    }
    
    protected LerpVector3(min: Vector3, max: Vector3, t: number): Vector3 {
    
    var vec: Vector3 = new Vector3();
    
    vec.x = min.x + t * (max.x - min.x);
    
    vec.y = min.y + t * (max.y - min.y);
    
    vec.z = min.z + t * (max.z - min.z);
    
    return vec;
    
    }
    
    protected LerpNum(min: number, max: number, t: number): number {
    
    return min + t * (max - min);
    
    }
    
    protected AroundByMobileInput(): void {
    
    if (this.TouchCount == 1) {
    
    console.log(this.targetAngles);
    
    this.targetAngles.y -= this.GetAxisX * this.mouseSettings.pointerSensitivity;
    
    this.targetAngles.x += this.GetAxisY * this.mouseSettings.pointerSensitivity;
    
    //Range.
    
    this.targetAngles.y = this.Clamp(this.targetAngles.y, this.angleRange.min, this.angleRange.max);
    
    //Mouse pointer.
    
    this.m_IsSingleFinger = true;
    
    }
    
    //Mouse scrollwheel.
    
    if (this.canScale) {
    
    if (this.TouchCount > 1) {
    
    //计算出当前两点触摸点的位置
    
    if (this.m_IsSingleFinger) {
    
    this.oldPosition1 = new Vector3(this.Touchs[0].stageX, this.Touchs[0].stageY);
    
    this.oldPosition2 = new Vector3(this.Touchs[1].stageX, this.Touchs[1].stageY);
    
    }
    
    var tempPosition1 = new Vector3(this.Touchs[0].stageX, this.Touchs[0].stageY);
    
    var tempPosition2 = new Vector3(this.Touchs[1].stageX, this.Touchs[1].stageY);
    
    var currentTouchDistance = Vector3.distance(tempPosition1, tempPosition2);
    
    var lastTouchDistance = Vector3.distance(this.oldPosition1, this.oldPosition2);
    
    //计算上次和这次双指触摸之间的距离差距
    
    //然后去更改摄像机的距离
    
    this.targetDistance -= (currentTouchDistance - lastTouchDistance) * this.deltaTime * this.mouseSettings.wheelSensitivity;
    
    // m_debugTip.text = ( currentTouchDistance - lastTouchDistance ).ToString() + " + " + targetDistance.ToString();
    
    //把距离限制住在min和max之间
    
    //备份上一次触摸点的位置，用于对比
    
    this.oldPosition1 = tempPosition1;
    
    this.oldPosition2 = tempPosition2;
    
    this.m_IsSingleFinger = false;
    
    this.targetDistance = this.Clamp(this.targetDistance, this.distanceRange.min, this.distanceRange.max);
    
    }
    
    }
    
    }
    
    tempRotationZ: Quaternion = new Quaternion();
    
    tempV: Vector3 = new Vector3();
    
    tempV1: Vector3 = new Vector3();
    
    ///
    
    /// Camera around target by mouse input.
    
    ///
    
    protected AroundByMouseInput(): void {
    
    if (this.mouseRunning) {
    
    //Mouse pointer.
    
    this.targetAngles.y -= (this.GetAxisX * this.mouseSettings.pointerSensitivity);
    
    this.targetAngles.x += (this.GetAxisY * this.mouseSettings.pointerSensitivity);
    
    //Range.
    
    this.targetAngles.x = this.Clamp(this.targetAngles.x, this.angleRange.min, this.angleRange.max);
    
    }
    
    //Mouse scrollwheel.
    
    if (this.canScale) {
    
    this.targetDistance -= this.deltaWheel * this.mouseSettings.wheelSensitivity;
    
    this.deltaWheel = 0;
    
    this.targetDistance = this.Clamp(this.targetDistance, this.distanceRange.min, this.distanceRange.max);
    
    }
    
    }
    
    }
    
    class MouseSettings {
    
    ///
    
    /// ID of mouse button.
    
    ///
    
    public mouseButtonID: number;
    
    ///
    
    /// Sensitivity of mouse pointer.
    
    ///
    
    public pointerSensitivity: number;
    
    ///
    
    /// Sensitivity of mouse ScrollWheel.
    
    ///
    
    public wheelSensitivity: number;
    
    ///
    
    /// Constructor.
    
    ///
    
    /// ID of mouse button.
    
    /// Sensitivity of mouse pointer.
    
    /// Sensitivity of mouse ScrollWheel.
    
    constructor(mouseButtonID: number, pointerSensitivity: number, wheelSensitivity: number) {
    
    this.mouseButtonID = mouseButtonID;
    
    this.pointerSensitivity = pointerSensitivity;
    
    this.wheelSensitivity = wheelSensitivity;
    
    }
    
    }
    
    ///
    
    /// Range form min to max.
    
    ///
    
    class MyRange {
    
    ///
    
    /// Min value of range.
    
    ///
    
    public min: number;
    
    ///
    
    /// Max value of range.
    
    ///
    
    public max: number;
    
    ///
    
    /// Constructor.
    
    ///
    
    /// Min value of range.
    
    /// Max value of range.
    
    constructor(min: number, max: number) {
    
    this.min = min;
    
    this.max = max;
    
    }
    
    }
    
    ///
    
    /// Rectangle area on plane.
    
    ///
    
    class PlaneArea {
    
    ///
    
    /// Center of area.
    
    ///
    
    public center: Transform3D;
    
    ///
    
    /// Width of area.
    
    ///
    
    public width: number;
    
    ///
    
    /// Length of area.
    
    ///
    
    public length: number;
    
    ///
    
    /// Constructor.
    
    ///
    
    /// Center of area.
    
    /// Width of area.
    
    /// Length of area.
    
    constructor(center: Transform3D, width: number, length: number) {
    
    this.center = center;
    
    this.width = width;
    
    this.length = length;
    
    }
    
    }
