(function () {
    'use strict';

    var View = Laya.View;
    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class ENTRANCEUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(ENTRANCEUI.uiView);
                }
            }
            ENTRANCEUI.uiView = { "type": "Scene", "props": { "runtime": "script/ENTRANCE.ts", "hitTestPrior": false }, "compId": 2, "loadList": [], "loadList3D": [] };
            test.ENTRANCEUI = ENTRANCEUI;
            REG("ui.test.ENTRANCEUI", ENTRANCEUI);
            class JoystickUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(JoystickUI.uiView);
                }
            }
            JoystickUI.uiView = { "type": "View", "props": { "zOrder": 1, "width": 600, "runtime": "script/Joystick.ts", "mouseThrough": false, "height": 600 }, "compId": 1, "child": [{ "type": "Image", "props": { "y": 288, "x": 300, "width": 400, "var": "background", "skin": "UI/backGround.png", "height": 400, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 288, "x": 300, "width": 151, "visible": true, "var": "forground", "skin": "UI/forground.png", "mouseThrough": true, "mouseEnabled": true, "height": 156, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "loadList": ["UI/backGround.png", "UI/forground.png"], "loadList3D": [] };
            test.JoystickUI = JoystickUI;
            REG("ui.test.JoystickUI", JoystickUI);
            class mainUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(mainUI.uiView);
                }
            }
            mainUI.uiView = { "type": "Scene", "props": { "width": 1136, "name": "main", "height": 600 }, "compId": 2, "child": [{ "type": "Button", "props": { "y": 331, "x": 493, "var": "button", "skin": "comp/button.png", "name": "button", "label": "label" }, "compId": 3, "child": [{ "type": "Script", "props": { "runtime": "script/onload_s.ts" }, "compId": 4 }] }, { "type": "Script", "props": { "runtime": "CameraBehavior.ts" }, "compId": 22 }, { "type": "Script", "props": { "runtime": "CharacterController.ts" }, "compId": 23 }, { "type": "Script", "props": { "runtime": "script/ConstEvent.ts" }, "compId": 24 }], "loadList": ["comp/button.png"], "loadList3D": [] };
            test.mainUI = mainUI;
            REG("ui.test.mainUI", mainUI);
            class menuUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.createView(menuUI.uiView);
                }
            }
            menuUI.uiView = { "type": "Scene", "props": { "zOrder": 0, "runtime": "script/menu.ts" }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": -280, "x": -237, "width": 2262, "var": "back", "name": "back", "height": 1197 }, "compId": 18, "child": [{ "type": "Text", "props": { "y": 743.5, "x": 774, "width": 240, "var": "text1", "valign": "middle", "text": "Robort", "name": "text1", "labels": "astronaut,robort,girl", "labelSize": 60, "itemSize": 60, "height": 100, "fontSize": 60, "font": "SimHei", "color": "#0d25db", "bold": true, "align": "center", "runtime": "Laya.Text" }, "compId": 9 }, { "type": "Button", "props": { "y": 883, "x": 951, "width": 330, "var": "button_s", "skin": "comp/button.png", "name": "button_s", "labelSize": 60, "label": "开始逛展", "height": 108 }, "compId": 11 }, { "type": "Label", "props": { "y": 767, "x": 438, "width": 95, "valign": "middle", "text": "选择人物", "styleSkin": "comp/label.png", "italic": false, "height": 53, "fontSize": 60, "font": "Microsoft YaHei", "borderColor": "#903438", "bold": true, "align": "center" }, "compId": 14 }, { "type": "Label", "props": { "y": 620, "x": 439.5, "width": 187, "valign": "middle", "text": "选择场景", "styleSkin": "comp/label.png", "italic": false, "height": 69, "fontSize": 60, "font": "Microsoft YaHei", "color": "#000000", "borderColor": "#2a859c", "bold": true, "align": "center" }, "compId": 15 }, { "type": "Button", "props": { "y": 897.5, "x": 438, "width": 180, "var": "preview", "skin": "comp/button.png", "name": "preview", "labelSize": 40, "label": "切换人物", "height": 79 }, "compId": 21 }, { "type": "Button", "props": { "y": 896, "x": 670, "width": 173, "var": "btn_scene", "skin": "comp/button.png", "name": "btn_scene", "labelSize": 40, "label": "切换场景", "height": 78 }, "compId": 24 }, { "type": "Text", "props": { "y": 616, "x": 793.5, "width": 201, "var": "text2", "valign": "middle", "text": "Scifiroom", "name": "text2", "height": 77, "fontSize": 60, "font": "SimHei", "color": "#0fa109", "bold": true, "align": "center", "runtime": "Laya.Text" }, "compId": 25 }] }, { "type": "Image", "props": { "y": -8, "x": 206, "width": 582, "var": "image", "skin": "comp/scifi.jpg", "name": "image", "height": 308 }, "compId": 20 }], "loadList": ["comp/button.png", "comp/label.png", "comp/scifi.jpg"], "loadList3D": [] };
            test.menuUI = menuUI;
            REG("ui.test.menuUI", menuUI);
            class TestSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class Joystick extends ui.test.JoystickUI {
        constructor() {
            super();
            this.maxDistance = 90;
            this.moveRatio = new Laya.Point;
            this.moveTargrt = new Laya.Point;
            this.background.anchorX = 0.5;
            this.background.anchorY = 0.5;
            this.forground.anchorX = 0.5;
            this.forground.anchorY = 0.5;
            this.forground.pos(this.background.x, this.background.y);
            this.forground.mouseThrough = true;
            this.forground.mouseEnabled = false;
            this.maxDistance = 100;
            this.background.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            Joystick.joystick_touched = false;
        }
        onMouseDown(e) {
            e.stopPropagation();
            this.curTouchId = e.touchId;
            console.log("onMouseDown");
            if (Laya.Browser.onMobile) {
                if (e.touches[1]) {
                    Joystick.joystick_touched = false;
                }
                else {
                    Joystick.joystick_touched = true;
                }
            }
            Laya.stage.event("start");
            this.background.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
        }
        onTouchMove(e) {
            e.stopPropagation();
            if (e.touchId != this.curTouchId)
                return;
            console.log("onMouseMove");
            var locationPos = this.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), false);
            if (this.maxDistance >= this.distance(locationPos.x, locationPos.y, this.background.x, this.background.y)) {
                this.moveTargrt.x = locationPos.x;
                this.moveTargrt.y = locationPos.y;
            }
            else {
                let deltaX = locationPos.x - this.background.x;
                let deltaY = locationPos.y - this.background.y;
                let angle = Math.atan2(deltaY, deltaX);
                this.moveTargrt.x = this.background.x + Math.cos(angle) * this.maxDistance;
                this.moveTargrt.y = this.background.y + Math.sin(angle) * this.maxDistance;
            }
            this.forground.pos(this.moveTargrt.x, this.moveTargrt.y);
            this.moveRatio.x = (this.forground.x - this.background.x) / this.maxDistance;
            console.log("joystick.moveRatio.x:", this.moveRatio.x);
            this.moveRatio.y = (this.forground.y - this.background.y) / this.maxDistance;
            Laya.stage.event("move", this.moveRatio);
        }
        onMouseUp(e) {
            e.stopPropagation();
            if (e.touchId != this.curTouchId)
                return;
            Joystick.joystick_touched = false;
            console.log("ononMouseUp");
            this.background.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMove);
            this.forground.pos(this.background.x, this.background.y);
            Laya.stage.event("end");
        }
        distance(X, Y, mouseX, mouseY) {
            let dx = X - mouseX;
            let dy = Y - mouseY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            return distance;
        }
    }

    class CameraBehavior extends Laya.Script {
        constructor() {
            super();
            this.angel = 30;
            this.distance = 25;
            this.rotaionSpeed = 0.004;
            this.lastMouseX = 0;
            this.lastMouseY = 0;
            this.isMouseDown = false;
            this.finalVec = new Laya.Vector3();
            this.yawPitchRoll = new Laya.Vector3();
            this.canRotation_X = true;
            this.canRotation_Y = true;
            this.canScale = true;
            this.AroundPos = new Laya.Vector3();
            this.damper = 5;
            this.CurrentAngles = new Laya.Vector3();
            this.CurrentAnglesTemp = new Laya.Vector3();
            this.targetAngles = new Laya.Vector3();
            this.tempV = new Laya.Vector3();
            this.tempV1 = new Laya.Vector3();
            this.dis = new Laya.Vector3();
            this.FORWORD = new Laya.Vector3();
            this.mouseRunning = false;
            this.touchRunning = false;
            this.isTwoTouch = false;
            this.first = true;
            this.twoFirst = true;
        }
        ;
        _initialize() {
        }
        onStart() {
            this.AroundPos = this.target.transform.position;
            this.CurrentAngles = new Laya.Vector3(-this.gameobject.transform.rotationEuler.x, this.gameobject.transform.rotationEuler.y, 0);
            this.targetAngles = new Laya.Vector3(-this.gameobject.transform.rotationEuler.x, this.gameobject.transform.rotationEuler.y, 0);
            this.CurrentDistance = Laya.Vector3.distance(this.gameobject.transform.position, this.AroundPos);
            this.targetDistance = Laya.Vector3.distance(this.gameobject.transform.position, this.AroundPos) - 1;
            this._scene = this.owner.parent;
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            console.log("scene", this._scene);
        }
        onUpdate() {
            var elapsedTime = Laya.timer.delta;
            var vec = this.target.transform.position;
            var rote = this.target.transform.rotationEuler;
            let nowPos = new Laya.Vector3();
            nowPos.x = this.target.transform.position.x - this.dis.x;
            nowPos.y = this.target.transform.position.y - this.dis.y;
            nowPos.z = this.target.transform.position.z - this.dis.z;
            this.AroundPos.y = 1.5;
            if (Laya.Browser.onMobile) {
                this.AroundByMobileInput();
            }
            else {
                this.AroundByMouseInput();
            }
            if (!this.canRotation_X)
                this.targetAngles.y = 0;
            if (!this.canRotation_Y)
                this.targetAngles.x = 0;
            this.CurrentAngles = this.LerpVector3(this.CurrentAngles, this.targetAngles, this.deltaTime * this.damper);
            this.CurrentDistance = this.LerpNum(this.CurrentDistance, this.targetDistance, this.deltaTime * this.damper);
            this.CurrentAnglesTemp.x = -this.CurrentAngles.x;
            this.CurrentAnglesTemp.y = this.CurrentAngles.y;
            this.CurrentAnglesTemp.z = this.CurrentAngles.z;
            this.gameobject.transform.rotationEuler = this.CurrentAnglesTemp;
            Laya.Vector3.scale(this.GetForward, this.CurrentDistance, this.tempV);
            Laya.Vector3.subtract(this.AroundPos, this.tempV, this.tempV1);
            this.gameobject.transform.position = this.tempV1;
            if (Laya.Browser.onMobile) {
                this.lastMouseX = Laya.stage.mouseX;
                this.lastMouseY = Laya.stage.mouseY;
            }
            else {
                this.lastMouseX = Laya.stage.mouseX;
                this.lastMouseY = Laya.stage.mouseY;
            }
            if (this.isMouseDown) {
            }
        }
        set Gameobject(tar) {
            this.gameobject = tar;
        }
        set Target(tar) {
            this.target = tar;
            this.dis.x = this.target.transform.position.x - this.gameobject.transform.position.x;
            this.dis.y = this.target.transform.position.y - this.gameobject.transform.position.y;
            this.dis.z = this.target.transform.position.z - this.gameobject.transform.position.z;
            console.log(this.dis);
        }
        LerpVector3(min, max, t) {
            var vec = new Laya.Vector3();
            vec.x = min.x + t * (max.x - min.x);
            vec.y = min.y + t * (max.y - min.y);
            vec.z = min.z + t * (max.z - min.z);
            return vec;
        }
        LerpNum(min, max, t) {
            return min + t * (max - min);
        }
        get deltaTime() {
            return Laya.timer.delta / 1000;
        }
        get GetAxisX() {
            return Laya.stage.mouseX - this.lastMouseX;
        }
        get GetAxisY() {
            return Laya.stage.mouseY - this.lastMouseY;
        }
        get GetForward() {
            this.gameobject.transform.getForward(this.FORWORD);
            return this.FORWORD;
        }
        mouseDown(e) {
            this.curTouchId = e.touchId;
            this.mouseRunning = false;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
        mouseMove(e) {
            if (e.touchId != this.curTouchId) {
                return;
            }
            this.mouseRunning = true;
            this.myevent = e;
        }
        mouseUp(e) {
            if (e.touchId != this.curTouchId)
                return;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.mouseRunning = false;
        }
        Clamp(num, min, max) {
            if (num < min) {
                return min;
            }
            else if (num > max) {
                return max;
            }
            else {
                return num;
            }
        }
        AroundByMobileInput() {
            if (this.mouseRunning && this.myevent.touches && this.myevent.touches.length == 1) {
                this.targetAngles.y -= (this.GetAxisX * 1);
                this.targetAngles.x += (this.GetAxisY * 1);
                this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
            }
        }
        AroundByMouseInput() {
            if (this.mouseRunning) {
                this.targetAngles.y -= (this.GetAxisX * 1);
                this.targetAngles.x += (this.GetAxisY * 1);
                this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
            }
        }
    }

    class CharacterController extends Laya.Script {
        constructor() {
            super();
            this.moveSpeed = 0.07;
        }
        onEnable() {
            this.moveRatio = new Laya.Point();
            console.log("start behave");
            Laya.stage.on("move", this, this.ontouch);
            Laya.stage.on("start", this, () => {
                this.isMove = true;
                console.log("playwalk");
                this.animtor.play("Walk");
            });
            Laya.stage.on("end", this, this.onTouchstop);
        }
        set Gameobject(tar) {
            this.gameobject = tar;
            this.character = this.gameobject.getChildAt(0);
            this.animtor = this.character.getComponent(Laya.Animator);
            console.log("setobject");
        }
        set Camera_char(tar) {
            this.camera = tar;
        }
        onTouchstop() {
            this.isMove = false;
            console.log("playidle");
            this.animtor.play("Idle");
        }
        ontouch(move) {
            this.moveRatio = move;
        }
        onUpdate() {
            if (this.isMove) {
                this.gameobject.transform.rotationEuler = new Laya.Vector3(0, 180 + this.camera.transform.rotationEuler.y, 0);
                let angel = Math.atan2(this.moveRatio.x, this.moveRatio.y) * 180 / Math.PI - 180;
                if (angel < 0)
                    angel += 360;
                this.character.transform.localRotationEuler = new Laya.Vector3(0, angel, 0);
                this.gameobject.transform.translate(new Laya.Vector3(-this.moveSpeed * this.moveRatio.x, 0, -this.moveSpeed * this.moveRatio.y));
            }
        }
        _lateUpdate() {
        }
    }
    CharacterController.JOYSTICK_START = "start";
    CharacterController.JOYSTICK_MOVE = "move";
    CharacterController.JOYSTICK_END = "end";

    class menu extends ui.test.menuUI {
        constructor() {
            super();
            Laya3D.init(1000, 1000);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            console.log(this.m_btn);
            this.button_s.on(Laya.Event.CLICK, this, this.click_the_btn);
            this.preview.on(Laya.Event.CLICK, this, this.click_the_preview);
            this.btn_scene.on(Laya.Event.CLICK, this, this.click_the_btn_scene);
            this.preview_state = 0;
            this.scene_state = 0;
            Laya.Stat.show();
            var resArray = [
                "res/targets_p/targets.lh",
                "res/lab/outpost.ls",
                "res/preview/preview.ls",
            ];
            Laya.loader.create(resArray, Laya.Handler.create(this, this.onCompelt), Laya.Handler.create(this, this.onProgress));
        }
        click_the_btn() {
            menu.scene_to_load = this.text2.text;
            menu.target_to_load = this.text1.text;
            Laya.stage.removeChildren(0, 2);
            Laya.Scene.open("test/ENTRANCE.scene");
        }
        click_the_preview() {
            var ps2 = this.scene_c.getChildByName("Camera2");
            var ps1 = this.scene_c.getChildByName("Camera1");
            var ps0 = this.scene_c.getChildByName("Camera0");
            if (this.preview_state == 0) {
                var vec = ps2.transform.position;
                var rotat = ps2.transform.rotationEuler;
                console.log(rotat);
                this.cameraObj_c.transform.rotate(new Laya.Vector3(0, -70, 0));
                this.cameraObj_c.transform.position = vec;
                console.log(this.cameraObj_c.transform.rotationEuler);
                this.preview_state = this.preview_state + 1;
                this.text1.text = "Girl";
            }
            else if (this.preview_state == 1) {
                var vec = ps1.transform.position;
                var rotat = ps1.transform.rotationEuler;
                console.log(rotat);
                this.cameraObj_c.transform.position = vec;
                this.cameraObj_c.transform.rotationEuler = rotat;
                console.log(this.cameraObj_c.transform.rotationEuler);
                this.preview_state = this.preview_state + 1;
                this.text1.text = "Astronaut";
            }
            else if (this.preview_state == 2) {
                var vec = ps0.transform.position;
                var rotat = ps0.transform.rotationEuler;
                console.log(rotat);
                this.cameraObj_c.transform.position = vec;
                this.cameraObj_c.transform.rotationEuler = rotat;
                console.log(this.cameraObj_c.transform.rotationEuler);
                this.preview_state = 0;
                this.text1.text = "Robort";
            }
        }
        click_the_btn_scene() {
            if (this.scene_state == 0) {
                this.image.skin = "comp/nature.jpg";
                this.scene_state = this.scene_state + 1;
                this.text2.text = "Nature";
            }
            else if (this.scene_state == 1) {
                this.image.skin = "comp/lab.jpg";
                this.scene_state = this.scene_state + 1;
                this.text2.text = "Lab";
            }
            else if (this.scene_state == 2) {
                this.image.skin = "comp/scifi.jpg";
                this.scene_state = 0;
                this.text2.text = "Scifiroom";
            }
        }
        onCompelt() {
            this.scene_c = Laya.Loader.getRes("res/preview/preview.ls");
            Laya.stage.addChildAt(this.scene_c, 0);
            this.cameraObj_c = this.scene_c.getChildByName("Main Camera");
            this.cameraObj_c.clearFlag = Laya.CameraClearFlags.Sky;
            this.scene_c.addChild(this.cameraObj_c);
        }
        onEnable() {
        }
        onDisable() {
        }
        onProgress(pro) {
            console.log("preview加载进度：" + pro);
        }
    }

    class CameraBehavior03 extends Laya.Script {
        constructor() {
            super();
            this.angel = 30;
            this.distance = 25;
            this.rotaionSpeed = 0.004;
            this.lastMouseX = 0;
            this.lastMouseY = 0;
            this.isMouseDown = false;
            this.finalVec = new Laya.Vector3();
            this.yawPitchRoll = new Laya.Vector3();
            this.canRotation_X = true;
            this.canRotation_Y = true;
            this.canScale = true;
            this.AroundPos = new Laya.Vector3();
            this.damper = 5;
            this.CurrentAngles = new Laya.Vector3();
            this.CurrentAnglesTemp = new Laya.Vector3();
            this.targetAngles = new Laya.Vector3();
            this.tempV = new Laya.Vector3();
            this.tempV1 = new Laya.Vector3();
            this.dis = new Laya.Vector3();
            this.FORWORD = new Laya.Vector3();
            this.mouseRunning = false;
            this.touchRunning = false;
            this.isTwoTouch = false;
            this.first = true;
            this.twoFirst = true;
        }
        ;
        _initialize() {
        }
        onStart() {
            this.AroundPos = this.target.transform.position;
            this.CurrentAngles = new Laya.Vector3(-this.gameobject.transform.rotationEuler.x, this.gameobject.transform.rotationEuler.y, 0);
            this.targetAngles = new Laya.Vector3(-this.gameobject.transform.rotationEuler.x, this.gameobject.transform.rotationEuler.y, 0);
            this.CurrentDistance = Laya.Vector3.distance(this.gameobject.transform.position, this.AroundPos);
            this.targetDistance = Laya.Vector3.distance(this.gameobject.transform.position, this.AroundPos) - 1;
            this._scene = this.owner.parent;
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            console.log("scene", this._scene);
        }
        onUpdate() {
            var elapsedTime = Laya.timer.delta;
            var vec = this.target.transform.position;
            var rote = this.target.transform.rotationEuler;
            let nowPos = new Laya.Vector3();
            nowPos.x = this.target.transform.position.x - this.dis.x;
            nowPos.y = this.target.transform.position.y - this.dis.y;
            nowPos.z = this.target.transform.position.z - this.dis.z;
            this.AroundPos.y = 1.5;
            if (Laya.Browser.onMobile) {
                this.AroundByMobileInput();
            }
            else {
                this.AroundByMouseInput();
            }
            if (!this.canRotation_X)
                this.targetAngles.y = 0;
            if (!this.canRotation_Y)
                this.targetAngles.x = 0;
            this.CurrentAngles = this.LerpVector3(this.CurrentAngles, this.targetAngles, this.deltaTime * this.damper);
            this.CurrentDistance = this.LerpNum(this.CurrentDistance, this.targetDistance, this.deltaTime * this.damper);
            this.CurrentAnglesTemp.x = -this.CurrentAngles.x;
            this.CurrentAnglesTemp.y = this.CurrentAngles.y;
            this.CurrentAnglesTemp.z = this.CurrentAngles.z;
            this.gameobject.transform.rotationEuler = this.CurrentAnglesTemp;
            Laya.Vector3.scale(this.GetForward, this.CurrentDistance, this.tempV);
            Laya.Vector3.subtract(this.AroundPos, this.tempV, this.tempV1);
            this.gameobject.transform.position = this.tempV1;
            if (Laya.Browser.onPC) {
                this.lastMouseX = Laya.stage.mouseX;
                this.lastMouseY = Laya.stage.mouseY;
            }
        }
        set Gameobject(tar) {
            this.gameobject = tar;
        }
        set Target(tar) {
            this.target = tar;
            this.dis.x = this.target.transform.position.x - this.gameobject.transform.position.x;
            this.dis.y = this.target.transform.position.y - this.gameobject.transform.position.y;
            this.dis.z = this.target.transform.position.z - this.gameobject.transform.position.z;
            console.log(this.dis);
        }
        LerpVector3(min, max, t) {
            var vec = new Laya.Vector3();
            vec.x = min.x + t * (max.x - min.x);
            vec.y = min.y + t * (max.y - min.y);
            vec.z = min.z + t * (max.z - min.z);
            return vec;
        }
        LerpNum(min, max, t) {
            return min + t * (max - min);
        }
        get deltaTime() {
            return Laya.timer.delta / 1000;
        }
        get GetForward() {
            this.gameobject.transform.getForward(this.FORWORD);
            return this.FORWORD;
        }
        mouseDown(e) {
            this.curTouchId = e.touchId;
            this.myevent = e;
            if (Laya.Browser.onMobile) {
                if (Joystick.joystick_touched) {
                    this.lastMouseX = this.myevent.touches[1].stageX;
                    this.lastMouseY = this.myevent.touches[1].stageY;
                }
                else {
                    this.lastMouseX = this.myevent.touches[0].stageX;
                    this.lastMouseY = this.myevent.touches[0].stageY;
                }
            }
            this.mouseRunning = false;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
        mouseMove(e) {
            if (e.touchId != this.curTouchId) {
                return;
            }
            this.mouseRunning = true;
        }
        mouseUp(e) {
            if (e.touchId != this.curTouchId)
                return;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.mouseRunning = false;
        }
        Clamp(num, min, max) {
            if (num < min) {
                return min;
            }
            else if (num > max) {
                return max;
            }
            else {
                return num;
            }
        }
        AroundByMobileInput() {
            if (this.mouseRunning && this.myevent.touches) {
                if (Joystick.joystick_touched) {
                    this.GetAxisX = this.myevent.touches[1].stageX - this.lastMouseX;
                    this.GetAxisY = this.myevent.touches[1].stageY - this.lastMouseY;
                    this.lastMouseX = this.myevent.touches[1].stageX;
                    this.lastMouseY = this.myevent.touches[1].stageY;
                }
                else {
                    this.GetAxisX = this.myevent.touches[0].stageX - this.lastMouseX;
                    this.GetAxisY = this.myevent.touches[0].stageY - this.lastMouseY;
                    this.lastMouseX = this.myevent.touches[0].stageX;
                    this.lastMouseY = this.myevent.touches[0].stageY;
                }
                this.targetAngles.y -= (this.GetAxisX * 1);
                this.targetAngles.x += (this.GetAxisY * 1);
                this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
            }
        }
        AroundByMouseInput() {
            if (this.mouseRunning) {
                this.GetAxisX = Laya.stage.mouseX - this.lastMouseX;
                this.GetAxisY = Laya.stage.mouseY - this.lastMouseY;
                this.targetAngles.y -= (this.GetAxisX * 1);
                this.targetAngles.x += (this.GetAxisY * 1);
                this.targetAngles.x = this.Clamp(this.targetAngles.x, 5, 90);
            }
        }
    }

    class ENTRANCE extends ui.test.ENTRANCEUI {
        constructor() {
            super();
            this.scene_s = null;
            this.sprite3D = null;
            Laya3D.init(1000, 1000);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.Stat.show();
            var resArray = [
                "res/atlas/comp.atlas",
                "res/atlas/UI.atlas",
                "res/unityscene04/DemoScene.ls",
                "res/naturescene/DemoDay.ls",
                "res/targets_p/targets.lh",
                "res/lab/outpost.ls"
            ];
            ENTRANCE.view_lock = false;
            Laya.loader.create(resArray, Laya.Handler.create(this, this.onCompelt), Laya.Handler.create(this, this.onProgress));
        }
        onCompelt() {
            console.log("onCompelt");
            this.scene_s = Laya.Loader.getRes("res/naturescene/DemoDay.ls");
            switch (menu.scene_to_load) {
                case "Nature":
                    this.scene_s = Laya.Loader.getRes("res/naturescene/DemoDay.ls");
                    break;
                case "Scifiroom":
                    this.scene_s = Laya.Loader.getRes("res/unityscene04/DemoScene.ls");
                    break;
                case "Lab":
                    this.scene_s = Laya.Loader.getRes("res/lab/outpost.ls");
                    break;
            }
            Laya.stage.addChildAt(this.scene_s, 0);
            var sp = Laya.Loader.getRes("res/targets_p/targets.lh");
            var ps = this.scene_s.getChildByName("PS");
            var vec = ps.transform.position;
            var rotat = ps.transform.rotationEuler;
            this.characterObj = sp.getChildByName("Target1");
            switch (menu.target_to_load) {
                case "Astronaut":
                    this.characterObj = sp.getChildByName("Target1");
                    break;
                case "Robort":
                    this.characterObj = sp.getChildByName("Target");
                    break;
                case "Girl":
                    this.characterObj = sp.getChildByName("girl");
                    break;
            }
            this.scene_s.addChild(this.characterObj);
            this.cameraObj = this.scene_s.getChildByName("Camera");
            this.characterObj.transform.position = vec;
            if (menu.target_to_load == "Girl") {
                this.characterObj.transform.translate(new Laya.Vector3(0, 0.5, 0));
            }
            this.characterObj.transform.rotationEuler = rotat;
            this.vec0 = this.cameraObj.transform.position;
            this.rotat0 = this.cameraObj.transform.rotationEuler;
            this.scene_s.addChild(this.cameraObj);
            let joystick = new Joystick();
            joystick.x = 100;
            joystick.y = Laya.stage.height - joystick.height - 50;
            Laya.stage.addChildAt(joystick, 1);
            joystick.mouseThrough = false;
            var cameraBehavior = this.cameraObj.addComponent(CameraBehavior03);
            let characterControll = this.characterObj.addComponent(CharacterController);
            cameraBehavior.Gameobject = this.cameraObj;
            cameraBehavior.Target = this.characterObj;
            characterControll.Gameobject = this.characterObj;
            characterControll.Camera_char = this.cameraObj;
        }
        click_the_btn(CLICK, arg1, click_the_btn) {
            ENTRANCE.view_lock = true;
            console.log("clicked");
            this.cameraObj.getComponent(CameraBehavior).destroy();
            this.characterObj.getChildAt(0).addChild(this.cameraObj);
            this.cameraObj.transform.position = this.vec0;
            this.cameraObj.transform.rotationEuler = this.rotat0;
        }
        onProgress(pro) {
            console.log("加载进度：" + pro);
        }
        onUpdate() {
            ENTRANCE.touchCount = this.scene_s.input.touchCount();
        }
    }

    class On_Load extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        }
        onEnable() {
        }
        onDisable() {
        }
        onAwake() {
            console.log("onAwake!");
            this.m_btn = this.owner;
            console.log(this.m_btn);
            this.m_btn.on(Laya.Event.CLICK, this, this.click_the_btn);
        }
        click_the_btn() {
            Laya.Scene3D.load("res/unityscene/Lobby.ls", Laya.Handler.create(null, function (scene) {
                Laya.stage.addChild(scene);
                var camera = scene.getChildByName("Main Camera");
                var characterObj = scene.getChildByName("Target");
                let cameraBehavior = camera.addComponent(CameraBehavior);
                let characterControll = characterObj.addComponent(CharacterController);
                cameraBehavior.Gameobject = camera;
                cameraBehavior.Target = characterObj;
                characterControll.Gameobject = characterObj;
                let joystick = new Joystick();
                joystick.x = 200;
                joystick.y = Laya.stage.height - joystick.height - 200;
                Laya.stage.addChild(joystick);
            }));
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        onMouseDown() {
            Laya.stage.event(CharacterController.JOYSTICK_START);
        }
    }

    class ConstEvent extends Laya.Script {
        constructor() {
            super();
        }
    }

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            this.newScene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = this.newScene.addChild(new Laya.Camera(0, 0.1, 100));
            camera.transform.translate(new Laya.Vector3(0, 6, 9.5));
            camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
            var directionLight = new Laya.DirectionLight();
            this.newScene.addChild(directionLight);
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            var mat = directionLight.transform.worldMatrix;
            mat.setForward(new Laya.Vector3(-1.0, -1.0, -1.0));
            directionLight.transform.worldMatrix = mat;
            var plane = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(10, 10, 10, 10)));
            var planeMat = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/grass.png", Laya.Handler.create(this, function (tex) {
                planeMat.albedoTexture = tex;
            }));
            var tilingOffset = planeMat.tilingOffset;
            tilingOffset.setValue(5, 5, 0, 0);
            planeMat.tilingOffset = tilingOffset;
            plane.meshRenderer.material = planeMat;
            var planeStaticCollider = plane.addComponent(Laya.PhysicsCollider);
            var planeShape = new Laya.BoxColliderShape(10, 0, 10);
            planeStaticCollider.colliderShape = planeShape;
            planeStaticCollider.friction = 2;
            planeStaticCollider.restitution = 0.3;
            this.mat1 = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/wood.jpg", Laya.Handler.create(this, function (tex) {
                this.mat1.albedoTexture = tex;
                Laya.timer.once(100, this, function () {
                    this.addBox();
                });
            }));
        }
        addBox() {
            var box = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.75, 0.5, 0.5)));
            box.meshRenderer.material = this.mat1;
            var transform = box.transform;
            var pos = transform.position;
            pos.setValue(0, 10, 0);
            transform.position = pos;
            var rigidBody = box.addComponent(Laya.Rigidbody3D);
            var boxShape = new Laya.BoxColliderShape(0.75, 0.5, 0.5);
            rigidBody.colliderShape = boxShape;
            rigidBody.mass = 10;
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/ENTRANCE.ts", ENTRANCE);
            reg("script/Joystick.ts", Joystick);
            reg("script/onload_s.ts", On_Load);
            reg("CameraBehavior.ts", CameraBehavior);
            reg("CharacterController.ts", CharacterController);
            reg("script/ConstEvent.ts", ConstEvent);
            reg("script/menu.ts", menu);
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/menu.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height, null, Laya.Handler.create(this, this.initMain));
            else {
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
                this.initMain();
            }
        }
        initMain() {
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
