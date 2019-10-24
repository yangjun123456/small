// JavaScript Documentvar canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var canvas, stage, container, stage, loadPic, exportRoot, loadingView, stageWidth, stageHeight, stageScale, bitmap;
var currentView;
var r, loaded, loadNum;
var pagePd = {};
var pageCu = {};
var currentNum = 1;

modelAction = new createjs.EventDispatcher();

function init() {
    loaded = false;
    loadNum = 0;

    pagePd = [0, 6, 1, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 100, 0, 0, 0, 0, 1];
    pageCu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    canvas = document.getElementById("mainView");
    stage = new createjs.Stage(canvas);
    stage.autoClear = false;
    container = new createjs.Container();
    mainContainer = new createjs.Container();
    pageContainer = new createjs.Container();

    stage.addChild(container);

    container.addChild(pageContainer);
    container.addChild(mainContainer);

    createjs.Touch.enable(stage);
    stage.enableMouseOver();

    loadingView = new lib.loadingViewAssets();
    container.addChild(loadingView);
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler);
    loader.loadManifest(lib.properties.manifest);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stageBreakHandler);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function loadProgressHandler(event) {

    var loadNum = Math.floor(event.progress * 99);
    //console.log(loadNum);
    loadingView.bar.visible = false;
    if (loadNum > 0) {
        loadingView.bar.visible = true;
        loadingView.bar.gotoAndStop(loadNum);
    }
    //document.body.style.backgroundColor = "#ff5436";
}

function loadCompleteHandler(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler);
    container.removeChild(loadingView);

    var queue = event.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            "images": [queue.getResult(ssMetadata[i].name)],
            "frames": ssMetadata[i].frames
        })
    }
    loaded = true;

    pageViewS = new View.PageViewS();
    // pageView0 = new View.PageView0();
    //pageView1 = new View.PageView1();
    //pageView2 = new View.PageView2();
    // pageView3 = new View.PageView3();
    //pageView4 = new View.PageView4();
    //pageView5 = new View.PageView5();
    //pageView6 = new View.PageView6();
    //pageView7 = new View.PageView7();
    //pageView8 = new View.PageView8();
    //pageView9 = new View.PageView9();
    // pageView10 = new View.PageView10();
    // pageView11 = new View.PageView11();
    // //pageView12 = new View.PageView12();
    // pageView13 = new View.PageView13();
    // pageView14 = new View.PageView14();
    // pageView15 = new View.PageView15();
    // pageView16 = new View.PageView16();
    // //pageView17 = new View.PageView17();
    // //pageView18 = new View.PageView18();
    // //pageView19 = new View.PageView19();
    // //pageView20 = new View.PageView20();
    // pageView21 = new View.PageView21();
    // pageView22 = new View.PageView22();
    // pageView23 = new View.PageView23();
    // pageView24 = new View.PageView24();
    // pageView25 = new View.PageView25();
    // pageView26 = new View.PageView26();
    // pageView27 = new View.PageView27();
    // pageView28 = new View.PageView28();

    // mainContainer.addChild(pageMainView);
    pageContainer.addChild(pageViewS);

    currentView = pageViewS;
    // loading3dpage1();
    loading3d1();
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    fnStartAnimation();
}

// function loading3dpage1() {
//     loadingView = new lib.loadingViewAssets3d();
//     container.addChild(loadingView);

//     var loader = new createjs.LoadQueue(false);
//     loader.addEventListener("fileload", handleFileLoad);
//     loader.addEventListener("progress", loadProgressHandler);
//     loader.addEventListener("complete", loadCompleteHandler3dpage1);
//     loader.loadManifest(lib3dpage1.properties.manifest);
// }


// function loadCompleteHandler3dpage1(event) {
//     //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
//     event.currentTarget.removeEventListener("fileload", handleFileLoad);
//     event.currentTarget.removeEventListener("progress", loadProgressHandler);
//     event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1);
//     container.removeChild(loadingView);
//     pageView1 = new View.PageView1();
//     loading3d1();
// }

function loading3d1() {
    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1);
    loader.loadManifest(lib3d1.properties.manifest);
}


function loadCompleteHandler3d1(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_2);
    pageMainView = new View.PageMainView();
    container.removeChild(loadingView);
    pageView2 = new View.PageView2();
    loading3d1_0();
}


function loading3d1_0() {
    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1_0);
    loader.loadManifest(lib3d1_0.properties.manifest);
}


function loadCompleteHandler3d1_0(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_0);
    container.removeChild(loadingView);
    pageView2_b = new View.PageView2_b();
    // loading3d1_1();

}

function loading3d1_1() {
    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1_1);
    loader.loadManifest(lib3d1_1.properties.manifest);
}


function loadCompleteHandler3d1_1(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_1);
    container.removeChild(loadingView);
    pageView2_1 = new View.PageView2_1();
    loading3d1_2();

}

function loading3d1_2() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1_2);
    loader.loadManifest(lib3d1_2.properties.manifest);
}


function loadCompleteHandler3d1_2(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_2);
    container.removeChild(loadingView);
    pageView2_2 = new View.PageView2_2();
    loading3d1_3();

}


function loading3d1_3() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1_3);
    loader.loadManifest(lib3d1_3.properties.manifest);
}


function loadCompleteHandler3d1_3(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_3);
    container.removeChild(loadingView);
    pageView2_3 = new View.PageView2_3();
    loading3d1_4();

}


function loading3d1_4() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1_4);
    loader.loadManifest(lib3d1_4.properties.manifest);
}


function loadCompleteHandler3d1_4(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_4);
    container.removeChild(loadingView);
    pageView2_4 = new View.PageView2_4();
    loading3d1_5();

}


function loading3d1_5() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d1_5);
    loader.loadManifest(lib3d1_5.properties.manifest);
}


function loadCompleteHandler3d1_5(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d1_5);
    container.removeChild(loadingView);
    pageView2_5 = new View.PageView2_5();
    loading3dpage4();

}


function loading3dpage4() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage4);
    loader.loadManifest(lib3dpage4.properties.manifest);
}


function loadCompleteHandler3dpage4(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage4);
    container.removeChild(loadingView);
    pageView4 = new View.PageView4();

    loading3dpage5();
}


function loading3dpage5() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage5);
    loader.loadManifest(lib3dpage5.properties.manifest);
}


function loadCompleteHandler3dpage5(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage5);
    container.removeChild(loadingView);
    pageView5 = new View.PageView5();

    loading3dpage6();
}


function loading3dpage6() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage6);
    loader.loadManifest(lib3dpage6.properties.manifest);
}


function loadCompleteHandler3dpage6(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage6);
    container.removeChild(loadingView);
    pageView6 = new View.PageView6();

    loading3dpage7();
}


function loading3dpage7() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage7);
    loader.loadManifest(lib3dpage7.properties.manifest);
}


function loadCompleteHandler3dpage7(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage7);
    container.removeChild(loadingView);
    pageView7 = new View.PageView7();

    loading3dpage8();
}


function loading3dpage8() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage8);
    loader.loadManifest(lib3dpage8.properties.manifest);
}


function loadCompleteHandler3dpage8(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage8);
    container.removeChild(loadingView);
    pageView8 = new View.PageView8();
    pageView18 = new View.PageView18();
    loading3dpage12();
}


function loading3dpage12() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage12);
    loader.loadManifest(lib3dpage12.properties.manifest);
}


function loadCompleteHandler3dpage12(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage12);
    container.removeChild(loadingView);
    pageView12 = new View.PageView12();
    loading3d2();
}


function loading3d2() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d2);
    loader.loadManifest(lib3d2.properties.manifest);
}


function loadCompleteHandler3d2(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d2);
    container.removeChild(loadingView);
    pageView9 = new View.PageView9();
    pageView9_b = new View.PageView9_b();

    loading3d3();
}

function loading3d3() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3d3);
    loader.loadManifest(lib3d3.properties.manifest);
}


function loadCompleteHandler3d3(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3d3);
    container.removeChild(loadingView);
    pageView19 = new View.PageView19();
    pageView19_b = new View.PageView19_b();

    loading3dpage17();
}

function loading3dpage17() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage17);
    loader.loadManifest(lib3dpage17.properties.manifest);
}


function loadCompleteHandler3dpage17(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage20);
    container.removeChild(loadingView);
    pageView17 = new View.PageView17();
    loading3dpage20();
}


function loading3dpage20() {

    loadingView = new lib.loadingViewAssets3d();
    container.addChild(loadingView);
    //loadingView.visible = false;

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", loadProgressHandler);
    loader.addEventListener("complete", loadCompleteHandler3dpage20);
    loader.loadManifest(lib3dpage20.properties.manifest);
}


function loadCompleteHandler3dpage20(event) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    event.currentTarget.removeEventListener("fileload", handleFileLoad);
    event.currentTarget.removeEventListener("progress", loadProgressHandler);
    event.currentTarget.removeEventListener("complete", loadCompleteHandler3dpage20);
    container.removeChild(loadingView);
    pageView20 = new View.PageView20();
    //loading3d2();
}


function stageBreakHandler(event) {

    stageWidth = document.documentElement.clientWidth;
    stageHeight = document.documentElement.clientHeight;

    canvas.width = stageWidth;
    canvas.height = stageHeight;

    if (stageWidth < stageHeight) {
        stageScale = stageHeight / 1366; //锁屏的强制横屏标题栏在左边所以要减去128
        console.log(stageScale);
        container.rotation = 90;
        //r = stageWidth / stageHeight;
        container.x = 960;
        container.scaleX = stageScale;
        container.scaleY = stageScale;

    } else {
        //stageScale = stageHeight / 768;
        //console.log(stageScale);
        container.rotation = 0;
        if (stageWidth > 1366) {

            container.x = (stageWidth - 1366) / 2;
            container.y = (stageHeight - 768) / 2;
        } else {
            container.scaleX = 0.85;
            container.scaleY = 0.85;
            container.x = (stageWidth - 1366 * 0.85) / 2;
            container.y = (stageHeight - 768 * 0.85) / 2;
        }
        // r = stageHeight / stageWidth;
    }

    stage.update();
}

function fypd() {

    if (pagePd[currentNum - 1] <= pageCu[currentNum - 1]) {
        pageMainView.content.fanye.nextBtnF.visible = false;
    } else {
        pageMainView.content.fanye.nextBtnF.visible = true;
    }
    pageMainView.content.fanye.currentP.text = String(currentNum);
}


//View
var View = {};

//main
(function () {
    function PageMainView() {
        this.Container_constructor();

        this.content = new lib.pageMain();

        //本页面控制代码
        var _this = this.content;

        _this.ml.visible = false;
        _this.exit.visible = false;
        _this.help.visible = false;
        _this.fanye.visible = false;
        _this.fanye.prevBtnF.visible = false;


        // _this.fanye.lastBtn.addEventListener("click", lastBtnClickAction);
        // _this.fanye.nextBtn.addEventListener("click", nextBtnClickAction);

        // _this.exit.btn1.addEventListener("click", exitBtn1ClickAction);
        // _this.exit.btn2.addEventListener("click", exitBtn2ClickAction);


        _this.ml.mlCloseBtn.addEventListener('click', function (e) {
            _this.ml.visible = false;
        });

        _this.help.bjBtn.addEventListener('click', function (e) {
            _this.help.visible = false;

        });

        _this.exit.bjBtn.addEventListener('click', function (e) {
            _this.exit.visible = false;

        });

        console.log(_this);
        for (var i = 1; i <= 4; i++) {
            _this["mlBtn" + i]._id = i;
            _this["mlBtn" + i].addEventListener("click", mlBtnClickAction);
        }

        function showPic() {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2);

            _this.fanye.visible = false;

            _this.fanye.currentP.text = "2";
            _this.fanye.totalP.text = "23";
            currentNum = 2;

            fypd();
            currentView = pageView2;
            _this.fanye.nextBtnF.visible = false;
            console.log(currentView);
            currentView.content.gotoAndPlay(0);
            _this.ml5MC.gotoAndStop(1);
            _this.ml6MC.gotoAndStop(0);
        }
        setTimeout(() => {
            showPic();
        }, 1000)

        function mlBtnClickAction(e) {

            var n = e.currentTarget._id;


            if (n == 1) {
                createjs.Sound.removeAllSounds();
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageViewS);

                _this.fanye.visible = false;

                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.ml5MC.gotoAndStop(0);
                _this.ml6MC.gotoAndStop(0);
            }
            if (n == 2) {
                if (_this.ml.visible == true) {
                    _this.ml.visible = false;
                } else {
                    _this.ml.visible = true;
                }
            }
            if (n == 3) {

                _this.exit.visible = true;

            }
            if (n == 4) {
                _this.help.visible = true;

            }

        }

        function exitBtn1ClickAction(e) {
            window.close();
        }

        function exitBtn2ClickAction(e) {
            _this.exit.visible = false;
        }

        function lastBtnClickAction(e) {

            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            if (currentNum > 1) {
                currentNum--;
            }
            fypd();
            currentView = this["pageView" + currentNum];
            pageContainer.addChild(currentView);
            currentView.content.gotoAndPlay(0);
            if (currentNum == 5 || currentNum == 6 || currentNum == 7) {
                currentView.content.animate.gotoAndPlay(0);

            }
            //_this.gotoAndStop(currentNum);

            if (currentNum <= 23) {
                _this.fanye.currentP.text = String(currentNum);
            } else {

                _this.fanye.currentP.text = String(currentNum - 23);
            }

            if (currentNum == 24) {
                _this.fanye.prevBtnF.visible = true;

            }
        }

        function nextBtnClickAction(e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageMainView.content.fanye.prevBtnF.visible = false;
            console.log(currentNum);
            if (currentNum < 28) {
                currentNum++;
            }
            if (currentNum == 5) {

                pageMainView.content.ml.menuBtn6.visible = true;
                pageMainView.content.ml.jd6.bar.scaleX = 1;
            }
            if (currentNum == 6) {

                pageMainView.content.ml.menuBtn7.visible = true;
                pageMainView.content.ml.jd7.bar.scaleX = 1;
            }
            if (currentNum == 7) {

                pageMainView.content.ml.menuBtn8.visible = true;
                pageMainView.content.ml.jd8.bar.scaleX = 1;
            }
            if (currentNum == 17) {

                pageMainView.content.ml.menuBtn9.visible = true;
                pageMainView.content.ml.jd9.bar.scaleX = 1;
            }
            if (currentNum == 20) {

                pageMainView.content.ml.menuBtn10.visible = true;
                pageMainView.content.ml.jd10.bar.scaleX = 1;
            }
            if (currentNum == 22) {

                pageMainView.content.ml.menuBtn11.visible = true;
                pageMainView.content.ml.jd11.bar.scaleX = 1;
            }
            if (currentNum == 23) {
                pageMainView.content.ml.menuBtn12.visible = true;
                pageMainView.content.ml.jd12.bar.scaleX = 1;

                pageMainView.content.ml.menuBtn12.visible = true;
                pageMainView.content.ml.jd12.bar.scaleX = 1;
            }

            if (currentNum == 25) {

                pageMainView.content.ml.menuBtn13.visible = true;
                pageMainView.content.ml.jd13.bar.scaleX = 1;
            }
            if (currentNum == 26) {

                pageMainView.content.ml.menuBtn14.visible = true;
                pageMainView.content.ml.jd14.bar.scaleX = 1;
            }
            if (currentNum == 27) {

                pageMainView.content.ml.menuBtn15.visible = true;
                pageMainView.content.ml.jd15.bar.scaleX = 1;
            }
            if (currentNum == 28) {

                pageMainView.content.ml.menuBtn16.visible = true;
                pageMainView.content.ml.jd16.bar.scaleX = 1;
            }

            console.log(currentNum);
            // fypd();
            currentView = this["pageView" + currentNum];
            console.log(currentView);
            pageContainer.addChild(currentView);
            currentView.content.gotoAndPlay(0);
            if (currentNum == 2) {
                currentView.content.model.gotoAndPlay(0);
            }

            if (currentNum == 5 || currentNum == 6 || currentNum == 7) {
                currentView.content.animate.gotoAndPlay(0);

            }
            if (currentNum <= 23) {
                _this.fanye.currentP.text = String(currentNum);
            } else {
                _this.fanye.currentP.text = String(currentNum - 23);
            }


        }


        for (var i = 1; i <= 16; i++) {
            _this.ml["menuBtn" + i]._id = i;
            _this.ml["menuBtn" + i].addEventListener("click", menuBtnClickAction);

            _this.ml["menuBtn" + i].visible = false;

        }

        function menuBtnClickAction(e) {

            var n = e.currentTarget._id;
            createjs.Sound.removeAllSounds();
            console.log("ok");



            //_this.fanye.nextBtnF.visible = false;
            _this.ml.visible = false;
            fypd();
            if (n == 1) {
                console.log(n);
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_1);
                currentNum = 2;
                _this.fanye.visible = false;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";

                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);

                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);


            }
            if (n == 2) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_2);
                currentNum = 2;
                _this.fanye.visible = false;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
            }
            if (n == 3) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_3);
                currentNum = 2;
                _this.fanye.visible = false;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);

            }
            if (n == 4) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_4);
                currentNum = 2;
                _this.fanye.visible = false;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);

            }
            if (n == 5) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_5);
                currentNum = 2;
                _this.fanye.visible = false;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);

            }
            if (n == 6) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView4);
                pageView4.content.gotoAndPlay(0);
                currentNum = 4;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";

                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;
                _this.fanye.nextBtnF.visible = false;
            }
            if (n == 7) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView6);
                currentNum = 6;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";

                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;
                _this.fanye.nextBtnF.visible = false;

            }
            if (n == 8) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView7);
                currentNum = 7;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;

            }
            if (n == 9) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView9);
                currentNum = 9;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);

                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;
                _this.fanye.nextBtnF.visible = false;

            }
            if (n == 10) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView19);
                currentNum = 19;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);

                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;
                _this.fanye.nextBtnF.visible = false;
            }
            if (n == 11) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView21);
                currentNum = 21;
                _this.fanye.currentP.text = String(currentNum);
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);

                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;
                _this.fanye.nextBtnF.visible = false;

            }
            if (n == 12) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView23);
                currentNum = 23;
                _this.fanye.currentP.text = "1";
                _this.fanye.totalP.text = "23";
                _this.ml5MC.gotoAndStop(1);
                _this.ml6MC.gotoAndStop(0);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;

            }
            if (n == 13) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView25);
                currentNum = 25;
                _this.fanye.currentP.text = "2";
                _this.fanye.totalP.text = "5";
                _this.ml5MC.gotoAndStop(0);
                _this.ml6MC.gotoAndStop(1);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;

            }
            if (n == 14) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView26);
                currentNum = 26;
                _this.fanye.currentP.text = "3";
                _this.fanye.totalP.text = "5";
                _this.ml5MC.gotoAndStop(0);
                _this.ml6MC.gotoAndStop(1);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;
            }
            if (n == 15) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView27);
                currentNum = 27;
                _this.fanye.currentP.text = "4";
                _this.fanye.totalP.text = "5";
                _this.ml5MC.gotoAndStop(0);
                _this.ml6MC.gotoAndStop(1);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;

            }
            if (n == 16) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView28);
                currentNum = 28;
                _this.fanye.currentP.text = "5";
                _this.fanye.totalP.text = "5";
                _this.ml5MC.gotoAndStop(0);
                _this.ml6MC.gotoAndStop(1);
                currentView = pageViewS;
                currentView.content.gotoAndPlay(0);
                _this.fanye.visible = true;

            }

        }


        // this.addChild(this.content);
    }

    var p = createjs.extend(PageMainView, createjs.Container);
    View.PageMainView = createjs.promote(PageMainView, "Container");
}());


//pageS
(function () {
    function PageViewS() {
        this.Container_constructor();
        this.content = new lib.pageS();

        var _this = this.content;

        _this.startBtn.addEventListener("click", srartBtnClickAction);

        function srartBtnClickAction(e) {

            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView0);
            currentView = pageView0;
            currentView.content.gotoAndPlay(0);

        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageViewS, createjs.Container);
    View.PageViewS = createjs.promote(PageViewS, "Container");
}());


//page0
(function () {
    function PageView0() {
        this.Container_constructor();
        this.content = new lib.page0();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView0, createjs.Container);
    View.PageView0 = createjs.promote(PageView0, "Container");
}());


//page1模型
(function () {
    function PageView1() {
        this.Container_constructor();
        this.content = new lib3dpage1.page1();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView1, createjs.Container);
    View.PageView1 = createjs.promote(PageView1, "Container");
}());

//page2模型
(function () {
    function PageView2() {
        this.Container_constructor();
        this.content = new lib3d1.page2();

        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;
        loadingView.visible = true;
        // currentView.content.model.play();
        _this.baozhaBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2_b);
            currentView = pageView2_b;
            currentView.content.gotoAndPlay(0);
            pageMainView.content.fanye.visible = false;
            pageCu[currentNum - 1]++;

        });


        _this.nextBtn.addEventListener('click', function (e) {


            _this.model.gotoAndStop(_this.model.currentFrame + 2)
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.prevBtn.addEventListener('click', function (e) {


            _this.model.gotoAndStop(_this.model.currentFrame - 2)
            // _this.animate.sound.paused=true;

        });

        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2, createjs.Container);
    View.PageView2 = createjs.promote(PageView2, "Container");
}());


//page2_b爆炸
(function () {
    function PageView2_b() {
        this.Container_constructor();
        this.content = new lib3d1_0.page2_b();

        var _this = this.content;
        _this.btn2.visible = false;
        _this.btn3.visible = false;
        _this.btn4.visible = false;
        _this.btn5.visible = false;

        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            currentView.content.play();

            modelAction.addEventListener("complete", function () {

                //alert("complete");
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2);
                currentView = pageView2;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                pageMainView.content.fanye.visible = true;
                fypd();

            })

        });


        for (var i = 1; i <= 5; i++) {
            _this["btn" + i]._id = i;
            _this["btn" + i].addEventListener("click", btnClickAction);

        }

        function btnClickAction(e) {

            var n = e.currentTarget._id;

            pageCu[currentNum - 1]++;

            console.log(pageCu[currentNum - 1]);
            createjs.Sound.removeAllSounds();

            if (n == 1) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_1);
                currentView = pageView2_1;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                _this.btn2.visible = true;

                pageMainView.content.ml.menuBtn1.visible = true;
                pageMainView.content.ml.jd1.bar.scaleX = 1;

            }
            if (n == 2) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_2);
                currentView = pageView2_2;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                _this.btn3.visible = true;

                pageMainView.content.ml.menuBtn2.visible = true;
                pageMainView.content.ml.jd2.bar.scaleX = 1;
            }
            if (n == 3) {

                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_3);
                currentView = pageView2_3;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                _this.btn4.visible = true;

                pageMainView.content.ml.menuBtn3.visible = true;
                pageMainView.content.ml.jd3.bar.scaleX = 1;
            }
            if (n == 4) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_4);
                currentView = pageView2_4;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                _this.btn5.visible = true;

                pageMainView.content.ml.menuBtn4.visible = true;
                pageMainView.content.ml.jd4.bar.scaleX = 1;
            }
            if (n == 5) {
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView2_5);
                currentView = pageView2_5;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();

                pageMainView.content.ml.menuBtn5.visible = true;
                pageMainView.content.ml.jd5.bar.scaleX = 1;

            }

        }

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2_b, createjs.Container);
    View.PageView2_b = createjs.promote(PageView2_b, "Container");
}());

//page2_1泵轮
(function () {
    function PageView2_1() {
        this.Container_constructor();
        this.content = new lib3d1_1.page2_1();

        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;


        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }

        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2_b);
            currentView = pageView2_b;
            currentView.content.gotoAndPlay(0);

        });


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2_1, createjs.Container);
    View.PageView2_1 = createjs.promote(PageView2_1, "Container");
}());


//page2_2导轮
(function () {
    function PageView2_2() {
        this.Container_constructor();
        this.content = new lib3d1_2.page2_2();


        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;


        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }

        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2_b);
            currentView = pageView2_b;
            currentView.content.gotoAndPlay(0);

        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2_2, createjs.Container);
    View.PageView2_2 = createjs.promote(PageView2_2, "Container");
}());


//page2_3涡轮
(function () {
    function PageView2_3() {
        this.Container_constructor();
        this.content = new lib3d1_3.page2_3();

        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;
        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }


        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2_b);
            currentView = pageView2_b;
            currentView.content.gotoAndPlay(0);

        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2_3, createjs.Container);
    View.PageView2_3 = createjs.promote(PageView2_3, "Container");
}());


//page2_4离合器
(function () {
    function PageView2_4() {
        this.Container_constructor();
        this.content = new lib3d1_4.page2_4();

        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;
        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }


        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2_b);
            currentView = pageView2_b;
            currentView.content.gotoAndPlay(0);

        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2_4, createjs.Container);
    View.PageView2_4 = createjs.promote(PageView2_4, "Container");
}());


//page2_5前壳体
(function () {
    function PageView2_5() {
        this.Container_constructor();
        this.content = new lib3d1_5.page2_5();

        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;
        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }

        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView2_b);
            currentView = pageView2_b;
            currentView.content.gotoAndPlay(0);

        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView2_5, createjs.Container);
    View.PageView2_5 = createjs.promote(PageView2_5, "Container");
}());


//page3
(function () {
    function PageView3() {
        this.Container_constructor();
        this.content = new lib.page3();
        var _this = this.content;
        var a = 0,
            b = 0,
            c = 0;

        for (var i = 1; i <= 8; i++) {
            _this["pd" + i].btn._id = i;
            _this["pd" + i].btn.addEventListener("click", pdBtnClickAction);

        }


        function pdBtnClickAction(e) {


            var n = e.currentTarget._id;

            if (n == 1) {
                a++;

                _this.pd1.gotoAndStop(1);
                _this.pd2.gotoAndStop(0);

            }
            if (n == 2) {
                a++;

                _this.pd1.gotoAndStop(0);
                _this.pd2.gotoAndStop(1);

            }
            if (n == 3) {
                b++;
                _this.pd3.gotoAndStop(1);
                _this.pd4.gotoAndStop(0);
                _this.pd5.gotoAndStop(0);
                _this.pd6.gotoAndStop(0);


            }
            if (n == 4) {
                b++;
                _this.pd3.gotoAndStop(0);
                _this.pd4.gotoAndStop(1);
                _this.pd5.gotoAndStop(0);
                _this.pd6.gotoAndStop(0);


            }
            if (n == 5) {
                b++;
                _this.pd3.gotoAndStop(0);
                _this.pd4.gotoAndStop(0);
                _this.pd5.gotoAndStop(1);
                _this.pd6.gotoAndStop(0);

            }
            if (n == 6) {
                b++;
                _this.pd3.gotoAndStop(0);
                _this.pd4.gotoAndStop(0);
                _this.pd5.gotoAndStop(0);
                _this.pd6.gotoAndStop(1);


            }
            if (n == 7) {
                c++;
                _this.pd7.gotoAndStop(1);
                _this.pd8.gotoAndStop(0);


            }
            if (n == 8) {
                c++;
                _this.pd7.gotoAndStop(0);
                _this.pd8.gotoAndStop(1);

            }

            if (a > 0 && b > 0 && c > 0) {
                pageCu[currentNum - 1] = 1;
                fypd();
            }

        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView3, createjs.Container);
    View.PageView3 = createjs.promote(PageView3, "Container");
}());


//page4模型
(function () {
    function PageView4() {
        this.Container_constructor();
        this.content = new lib3dpage4.page4();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView4, createjs.Container);
    View.PageView4 = createjs.promote(PageView4, "Container");
}());

//page5模型
(function () {
    function PageView5() {
        this.Container_constructor();
        this.content = new lib3dpage5.page5();
        var _this = this.content;

        /*  var _this = this.content;


          _this.controlMC.playMC.playBtn.addEventListener('click', function (e) {

              _this.controlMC.playMC.gotoAndStop(1);
              _this.animate.play();


              //Sound.curSound.paused = false;
              //createjs.Sound.paused=false;
              //_this.animate.sound.paused=false;
          });

          _this.controlMC.playMC.stopBtn.addEventListener('click', function (e) {

              _this.controlMC.playMC.gotoAndStop(0);
              _this.animate.stop();
              //Sound.curSound.paused = true;
              // _this.animate.sound.paused=true;

          });


          _this.controlMC.nextBtn.addEventListener('click', function (e) {


              _this.animate.gotoAndStop(_this.animate.currentFrame + 5)
              //createjs.Sound.paused=false;
              //_this.animate.sound.paused=false;
          });

          _this.controlMC.prevBtn.addEventListener('click', function (e) {


              _this.animate.gotoAndStop(_this.animate.currentFrame - 5)
              // _this.animate.sound.paused=true;

          });*/


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView5, createjs.Container);
    View.PageView5 = createjs.promote(PageView5, "Container");
}());

//page6
(function () {
    function PageView6() {
        this.Container_constructor();
        this.content = new lib3dpage6.page6();

        /*var _this = this.content;


        _this.controlMC.playMC.playBtn.addEventListener('click', function (e) {

            _this.controlMC.playMC.gotoAndStop(1);
            _this.animate.play();
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.controlMC.playMC.stopBtn.addEventListener('click', function (e) {

            _this.controlMC.playMC.gotoAndStop(0);
            _this.animate.stop();
            // _this.animate.sound.paused=true;

        });


        _this.controlMC.nextBtn.addEventListener('click', function (e) {


            _this.animate.gotoAndStop(_this.animate.currentFrame + 5)
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.controlMC.prevBtn.addEventListener('click', function (e) {


            _this.animate.gotoAndStop(_this.animate.currentFrame - 5)
            // _this.animate.sound.paused=true;

        });*/
        this.addChild(this.content);
    }

    var p = createjs.extend(PageView6, createjs.Container);
    View.PageView6 = createjs.promote(PageView6, "Container");
}());

//page7
(function () {
    function PageView7() {
        this.Container_constructor();
        this.content = new lib3dpage7.page7();
        /*var _this = this.content;


        _this.controlMC.playMC.playBtn.addEventListener('click', function (e) {

            _this.controlMC.playMC.gotoAndStop(1);
            _this.animate.play();
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.controlMC.playMC.stopBtn.addEventListener('click', function (e) {

            _this.controlMC.playMC.gotoAndStop(0);
            _this.animate.stop();
            // _this.animate.sound.paused=true;

        });


        _this.controlMC.nextBtn.addEventListener('click', function (e) {


            _this.animate.gotoAndStop(_this.animate.currentFrame + 5)
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.controlMC.prevBtn.addEventListener('click', function (e) {


            _this.animate.gotoAndStop(_this.animate.currentFrame - 5)
            // _this.animate.sound.paused=true;

        });*/

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView7, createjs.Container);
    View.PageView7 = createjs.promote(PageView7, "Container");
}());

//page8模型
(function () {
    function PageView8() {
        this.Container_constructor();
        this.content = new lib3dpage8.page8();
        var _this = this.content;

        _this.dan.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView9);
            currentView = pageView9;
            currentView.content.gotoAndPlay(0);
            currentNum = 9;
            fypd();
        });


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView8, createjs.Container);
    View.PageView8 = createjs.promote(PageView8, "Container");
}());

//page9模型
(function () {
    function PageView9() {
        this.Container_constructor();
        this.content = new lib3d2.page9();


        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;
        loadingView.visible = true;
        // currentView.content.model.play();
        _this.baozhaBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView9_b);
            currentView = pageView9_b;
            currentView.content.gotoAndPlay(0);
            pageCu[currentNum - 1]++;

        });


        _this.nextBtn.addEventListener('click', function (e) {


            _this.model.gotoAndStop(_this.model.currentFrame + 2)
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.prevBtn.addEventListener('click', function (e) {


            _this.model.gotoAndStop(_this.model.currentFrame - 2)
            // _this.animate.sound.paused=true;

        });

        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView9, createjs.Container);
    View.PageView9 = createjs.promote(PageView9, "Container");
}());

//page9_b爆炸
(function () {
    function PageView9_b() {
        this.Container_constructor();
        this.content = new lib3d2.page9_b();

        var _this = this.content;
        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            currentView.content.play();

            modelAction.addEventListener("complete", function () {

                //alert("complete");
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView9);
                currentView = pageView9;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                pageMainView.content.fanye.visible = true;
                fypd();

            })

        });

        this.addChild(this.content);


    }

    var p = createjs.extend(PageView9_b, createjs.Container);
    View.PageView9_b = createjs.promote(PageView9_b, "Container");
}());


//page10
(function () {
    function PageView10() {
        this.Container_constructor();
        this.content = new lib.page10();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView10, createjs.Container);
    View.PageView10 = createjs.promote(PageView10, "Container");
}());

//page11
(function () {
    function PageView11() {
        this.Container_constructor();
        this.content = new lib.page11();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView11, createjs.Container);
    View.PageView11 = createjs.promote(PageView11, "Container");
}());

//page12模型
(function () {
    function PageView12() {
        this.Container_constructor();
        this.content = new lib3dpage12.page12();
        var _this = this.content;
        _this.kuai.visible = false;
        _this.man.gotoAndStop(0);
        _this.btn1.addEventListener('click', function (e) {
            _this.kuai.visible = false;
            _this.man.visible = true;
            _this.xian.gotoAndStop(1);
            if (pageCu[currentNum - 1] < 2) {
                pageCu[currentNum - 1]++;
            }

            fypd();
        });
        _this.btn2.addEventListener('click', function (e) {

            _this.kuai.visible = true;
            _this.man.visible = false;

            _this.xian.gotoAndStop(2);
            if (pageCu[currentNum - 1] < 2) {
                pageCu[currentNum - 1]++;
            }

            fypd();
        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView12, createjs.Container);
    View.PageView12 = createjs.promote(PageView12, "Container");
}());

//page13
(function () {
    function PageView13() {
        this.Container_constructor();
        this.content = new lib.page13();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView13, createjs.Container);
    View.PageView13 = createjs.promote(PageView13, "Container");
}());

//page14
(function () {
    function PageView14() {
        this.Container_constructor();
        this.content = new lib.page14();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView14, createjs.Container);
    View.PageView14 = createjs.promote(PageView14, "Container");
}());

//page15
(function () {
    function PageView15() {
        this.Container_constructor();
        this.content = new lib.page15();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView15, createjs.Container);
    View.PageView15 = createjs.promote(PageView15, "Container");
}());

//page16
(function () {
    function PageView16() {
        this.Container_constructor();
        this.content = new lib.page16();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView16, createjs.Container);
    View.PageView16 = createjs.promote(PageView16, "Container");
}());

//page17模型
(function () {
    function PageView17() {
        this.Container_constructor();
        this.content = new lib3dpage17.page17();
        var _this = this.content;
        var c, w, h;
        var scaleFactor = 1;
        var oldX, oldY, tempR, tempRF, tempScaleX, tempScaleY, tempScaleXF, tempScaleYF;
        var hand;
        var num = 0;

        var tempRF = [];
        var tempScaleX = [];


        var g2l;


        hand = 0;
        tempR = 0;


        for (var i = 1; i <= 4; i++) {
            _this["dwx" + i] = _this["s" + i].x;
            _this["dwy" + i] = _this["s" + i].y;
            _this["dws" + i] = _this["s" + i].scaleX;
            _this["s" + i]._id = i;

            _this["s" + i].addEventListener("mousedown", mousedownAction);
            _this["s" + i].addEventListener("pressmove", pressmoveAction);
            _this["s" + i].addEventListener("pressup", pressupAction)
        }


        _this.board.addEventListener("mousedown", linedownAction);

        //_this.board.addEventListener("pressmove", linemoveAction);


        function linedownAction(e) {

            for (var i = 1; i <= num; i++) {
                _this.getChildByName("sm" + i).gotoAndStop(0);
            }

        }


        function mousedownAction(e) {
            draw = false;
            _this.setChildIndex(e.currentTarget, _this.getNumChildren() - 1);
            g2l = _this.globalToLocal(stage.mouseX, stage.mouseY);
            oldX = g2l.x;
            oldY = g2l.y;
        }

        function pressmoveAction(e) {
            g2l = _this.globalToLocal(stage.mouseX, stage.mouseY);

            e.currentTarget.scaleX = 0.5;
            e.currentTarget.scaleY = 0.5;
            e.currentTarget.x += g2l.x - oldX;
            e.currentTarget.y += g2l.y - oldY;
            oldX = g2l.x;
            oldY = g2l.y;

            n = e.currentTarget._id;
        }


        function pressupAction(e) {
            num++;
            var tempsm = new lib3dpage17["sm" + n]();
            _this.addChild(tempsm);
            tempsm.name = ("sm" + num);
            tempsm.x = oldX;
            tempsm.y = oldY;
            tempsm.scaleX = 0.5;
            tempsm.scaleY = 0.5;
            newAction(num);


            e.currentTarget.x = _this["dwx" + n];
            e.currentTarget.y = _this["dwy" + n];
            e.currentTarget.scaleX = _this["dws" + n];
            e.currentTarget.scaleY = _this["dws" + n];

        }

        function newAction(a) {


            _this.getChildByName("sm" + a).btn.addEventListener("mousedown", tempsmmousedownAction);
            _this.getChildByName("sm" + a).btn.addEventListener("pressmove", tempsmpressmoveAction);
            _this.getChildByName("sm" + a).btn.addEventListener("pressup", tempsmupAction);

            stage.addEventListener('stagemousemove', function (e) {
                if (hand == 1) {
                    minuteAct();
                }

            });

            stage.addEventListener('stagemouseup', function (e) {
                hand = 0;
            });

            _this.getChildByName("sm" + a).xuanzhuan.addEventListener('mousedown', function (e) {
                //console.log(_this.getChildByName("sm" + num));
                //_this.getChildByName("sm" + a)._id = num;
                hand = 1;
                //console.log(a);
                currentNum = a;

                if (_this.getChildByName("sm" + a).rotation == 0) {
                    g2l = _this.globalToLocal(stage.mouseX, stage.mouseY);

                    var dx = g2l.x - _this.getChildByName("sm" + a).x;
                    var dy = g2l.y - _this.getChildByName("sm" + a).y;

                    var angel = Math.atan2(dy, dx);
                    //console.log(angel);
                    //console.log(angel * 180 / Math.PI);
                    tempRF[a - 1] = Math.round(angel * 180 / Math.PI);
                    //console.log("tempRF=" + tempRF);

                    var juli = Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
                    tempScaleX[a - 1] = juli;
                }


            });

            function minuteAct() {

                g2l = _this.globalToLocal(stage.mouseX, stage.mouseY);

                var dx = g2l.x - _this.getChildByName("sm" + currentNum).x;
                var dy = g2l.y - _this.getChildByName("sm" + currentNum).y;
                var angel = Math.atan2(dy, dx);

                _this.getChildByName("sm" + currentNum).rotation += Math.round(angel * 180 / Math.PI) - tempR - tempRF[currentNum - 1];

                tempR = _this.getChildByName("sm" + currentNum).rotation;


                var juli = Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));


                _this.getChildByName("sm" + currentNum).scaleX = _this.getChildByName("sm" + currentNum).scaleX * (juli / tempScaleX[currentNum - 1]);
                _this.getChildByName("sm" + currentNum).scaleY = _this.getChildByName("sm" + currentNum).scaleX;

                tempScaleX[currentNum - 1] = juli;

            }


            function tempsmmousedownAction(e) {
                _this.setChildIndex(_this.getChildByName("sm" + a), _this.getNumChildren() - 1);
                g2l = _this.globalToLocal(stage.mouseX, stage.mouseY);
                oldX = g2l.x;
                oldY = g2l.y;

                for (var i = 1; i <= num; i++) {
                    _this.getChildByName("sm" + i).gotoAndStop(0);
                }
            }

            function tempsmpressmoveAction(e) {

                g2l = _this.globalToLocal(stage.mouseX, stage.mouseY);

                //alert(stage.getChildIndex(event.target.parent));
                _this.getChildByName("sm" + a).x += g2l.x - oldX;
                _this.getChildByName("sm" + a).y += g2l.y - oldY;
                oldX = g2l.x;
                oldY = g2l.y;


                n = e.currentTarget._id;
            }

            function tempsmupAction(e) {
                _this.getChildByName("sm" + a).gotoAndStop(1);
            }

        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView17, createjs.Container);
    View.PageView17 = createjs.promote(PageView17, "Container");
}());

//page18
(function () {
    function PageView18() {
        this.Container_constructor();
        this.content = new lib3dpage8.page18();
        var _this = this.content;
        _this.dan.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView9);
            currentView = pageView9;
            currentView.content.gotoAndPlay(0);
            currentNum = 9;
            fypd();
        });
        _this.shuang.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView19);
            currentView = pageView19;
            currentView.content.gotoAndPlay(0);
            currentNum = 19;
            fypd();
        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView18, createjs.Container);
    View.PageView18 = createjs.promote(PageView18, "Container");
}());


//page19模型
(function () {
    function PageView19() {
        this.Container_constructor();
        this.content = new lib3d3.page19();
        var _this = this.content;
        var tempZuobiao, tempFrame;
        var tuoframe;
        var drag = 0;
        loadingView.visible = true;
        // currentView.content.model.play();
        _this.baozhaBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            pageContainer.removeChild(currentView);
            pageContainer.addChild(pageView19_b);
            currentView = pageView19_b;
            currentView.content.gotoAndPlay(0);
            pageCu[currentNum - 1]++;

        });
        _this.nextBtn.addEventListener('click', function (e) {


            _this.model.gotoAndStop(_this.model.currentFrame + 2)
            //createjs.Sound.paused=false;
            //_this.animate.sound.paused=false;
        });

        _this.prevBtn.addEventListener('click', function (e) {


            _this.model.gotoAndStop(_this.model.currentFrame - 2)
            // _this.animate.sound.paused=true;

        });

        _this.dragBtn.addEventListener('mousedown', function (e) {
            drag = 1;
            tempZuobiao = stage.mouseX;

        });

        stage.addEventListener('stagemousemove', function (e) {
            tuoframe = _this.model.currentFrame;
            tuoAct();
        });

        stage.addEventListener('stagemouseup', function (e) {
            drag = 0;
        });

        function tuoAct() {

            if (drag) {
                if (stage.mouseX > tempZuobiao) {
                    tempFrame = stage.mouseX % tempZuobiao;
                    if (tuoframe <= 200) {
                        tuoframe = tuoframe + tempFrame;
                    }
                    if (tuoframe > 200) {
                        tuoframe = 1;
                    }
                }
                if (stage.mouseX < tempZuobiao) {
                    tempFrame = tempZuobiao % stage.mouseX;
                    tuoframe = tuoframe - tempFrame;
                    if (tuoframe <= 1) {
                        tuoframe = 200;
                    }
                }

                //console.log("frame=" + frame);
                _this.model.gotoAndStop(tuoframe);
                tempZuobiao = stage.mouseX;

            }
        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView19, createjs.Container);
    View.PageView19 = createjs.promote(PageView19, "Container");
}());


//page19_b模型
(function () {
    function PageView19_b() {
        this.Container_constructor();
        this.content = new lib3d3.page19_b();

        var _this = this.content;
        _this.backBtn.addEventListener('click', function (e) {
            createjs.Sound.removeAllSounds();
            currentView.content.play();

            modelAction.addEventListener("complete", function () {

                //alert("complete");
                pageContainer.removeChild(currentView);
                pageContainer.addChild(pageView19);
                currentView = pageView19;
                currentView.content.gotoAndPlay(0);
                currentView.content.model.play();
                pageMainView.content.fanye.visible = true;
                fypd();

            })

        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView19_b, createjs.Container);
    View.PageView19_b = createjs.promote(PageView19_b, "Container");
}());


//page20模型
(function () {
    function PageView20() {
        this.Container_constructor();
        this.content = new lib3dpage20.page20();

        var _this = this.content;

        _this.btn1.addEventListener('click', function (e) {
            pageCu[currentNum - 1]++;
            _this.gotoAndStop(1);
            fypd();
        });
        _this.btn2.addEventListener('click', function (e) {
            pageCu[currentNum - 1]++;
            _this.gotoAndStop(2);
            fypd();
        });

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView20, createjs.Container);
    View.PageView20 = createjs.promote(PageView20, "Container");
}());

//page21
(function () {
    function PageView21() {
        this.Container_constructor();
        this.content = new lib.page21();
        var _this = this.content;


        for (var i = 1; i <= 3; i++) {
            _this["btn" + i]._id = i;
            _this["btn" + i].addEventListener("click", soundBtnClickAction);

        }


        function soundBtnClickAction(e) {
            createjs.Sound.removeAllSounds();
            var n = e.currentTarget._id;

            if (n == 1) {

                var queue = new createjs.LoadQueue();
                queue.installPlugin(createjs.Sound);
                queue.on("complete", handleComplete, this);
                queue.loadFile({
                    id: "sound",
                    src: "sounds/s21_3.mp3"
                });

                function handleComplete() {
                    createjs.Sound.play("sound");

                }


            }
            if (n == 2) {
                var queue = new createjs.LoadQueue();
                queue.installPlugin(createjs.Sound);
                queue.on("complete", handleComplete, this);
                queue.loadFile({
                    id: "sound",
                    src: "sounds/s21_4.mp3"
                });

                function handleComplete() {
                    createjs.Sound.play("sound");

                }


            }
            if (n == 3) {
                var queue = new createjs.LoadQueue();
                queue.installPlugin(createjs.Sound);
                queue.on("complete", handleComplete, this);
                queue.loadFile({
                    id: "sound",
                    src: "sounds/s21_2.mp3"
                });

                function handleComplete() {
                    createjs.Sound.play("sound");

                }

            }


        }


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView21, createjs.Container);
    View.PageView21 = createjs.promote(PageView21, "Container");
}());

//page22
(function () {
    function PageView22() {
        this.Container_constructor();
        this.content = new lib.page22();

        var _this = this.content;
        for (var i = 1; i <= 3; i++) {
            _this["btn" + i]._id = i;
            _this["btn" + i].addEventListener("click", soundBtnClickAction);

        }


        function soundBtnClickAction(e) {
            createjs.Sound.removeAllSounds();
            var n = e.currentTarget._id;

            if (n == 1) {

                var queue = new createjs.LoadQueue();
                queue.installPlugin(createjs.Sound);
                queue.on("complete", handleComplete, this);
                queue.loadFile({
                    id: "sound",
                    src: "sounds/s22_4.mp3"
                });

                function handleComplete() {
                    createjs.Sound.play("sound");

                }


            }
            if (n == 2) {
                var queue = new createjs.LoadQueue();
                queue.installPlugin(createjs.Sound);
                queue.on("complete", handleComplete, this);
                queue.loadFile({
                    id: "sound",
                    src: "sounds/s22_3.mp3"
                });

                function handleComplete() {
                    createjs.Sound.play("sound");

                }


            }
            if (n == 3) {
                var queue = new createjs.LoadQueue();
                queue.installPlugin(createjs.Sound);
                queue.on("complete", handleComplete, this);
                queue.loadFile({
                    id: "sound",
                    src: "sounds/s22_2.mp3"
                });

                function handleComplete() {
                    createjs.Sound.play("sound");

                }

            }


        }

        this.addChild(this.content);
    }

    var p = createjs.extend(PageView22, createjs.Container);
    View.PageView22 = createjs.promote(PageView22, "Container");
}());

//page23
(function () {
    function PageView23() {
        this.Container_constructor();
        this.content = new lib.page23();

        var _this = this.content;
        for (var i = 2; i <= 8; i++) {
            _this["dang" + i].visible = false;

        }
        _this.kuang.visible = false;

        _this.dang1.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(11);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang1.gotoAndStop(1);
            _this.dang2.visible = true;
            pageCu[currentNum - 1]++;

        });

        _this.dang2.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(12);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang2.gotoAndStop(1);
            _this.dang3.visible = true;
            pageCu[currentNum - 1]++;
        });

        _this.dang3.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(13);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang3.gotoAndStop(1);
            _this.dang4.visible = true;
            pageCu[currentNum - 1]++;
        });

        _this.dang4.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(14);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang4.gotoAndStop(1);
            _this.dang5.visible = true;
            pageCu[currentNum - 1]++;
        });
        _this.dang5.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(15);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang5.gotoAndStop(1);
            _this.dang6.visible = true;
            pageCu[currentNum - 1]++;
        });
        _this.dang6.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(16);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang6.gotoAndStop(1);
            _this.dang7.visible = true;
            pageCu[currentNum - 1]++;
        });
        _this.dang7.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(17);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang7.gotoAndStop(1);
            _this.dang8.visible = true;
            pageCu[currentNum - 1]++;
        });
        _this.dang8.btn.addEventListener('click', function (e) {
            _this.gotoAndStop(18);
            for (var i = 1; i <= 8; i++) {
                _this["dang" + i].gotoAndStop(0);
            }
            _this.dang8.gotoAndStop(1);
            pageCu[currentNum - 1]++;
            fypd();

        });

        _this.btn.addEventListener('click', function (e) {
            if (_this.kuang.visible) {
                _this.kuang.visible = false;
            } else {
                _this.kuang.visible = true;
            }
        });


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView23, createjs.Container);
    View.PageView23 = createjs.promote(PageView23, "Container");
}());

//page24
(function () {
    function PageView24() {
        this.Container_constructor();
        this.content = new lib.page24();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView24, createjs.Container);
    View.PageView24 = createjs.promote(PageView24, "Container");
}());

//page25
(function () {
    function PageView25() {
        this.Container_constructor();
        this.content = new lib.page25();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView25, createjs.Container);
    View.PageView25 = createjs.promote(PageView25, "Container");
}());

//page26
(function () {
    function PageView26() {
        this.Container_constructor();
        this.content = new lib.page26();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView26, createjs.Container);
    View.PageView26 = createjs.promote(PageView26, "Container");
}());

//page27
(function () {
    function PageView27() {
        this.Container_constructor();
        this.content = new lib.page27();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView27, createjs.Container);
    View.PageView27 = createjs.promote(PageView27, "Container");
}());

//page28
(function () {
    function PageView28() {
        this.Container_constructor();
        this.content = new lib.page28();


        this.addChild(this.content);
    }

    var p = createjs.extend(PageView28, createjs.Container);
    View.PageView28 = createjs.promote(PageView28, "Container");
}());