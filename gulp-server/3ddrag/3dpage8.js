(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.xxclzdspcl0000 = function() {
	this.initialize(img.xxclzdspcl0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0001 = function() {
	this.initialize(img.xxclzdspcl0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0002 = function() {
	this.initialize(img.xxclzdspcl0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0003 = function() {
	this.initialize(img.xxclzdspcl0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0004 = function() {
	this.initialize(img.xxclzdspcl0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0005 = function() {
	this.initialize(img.xxclzdspcl0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0006 = function() {
	this.initialize(img.xxclzdspcl0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0007 = function() {
	this.initialize(img.xxclzdspcl0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0008 = function() {
	this.initialize(img.xxclzdspcl0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0009 = function() {
	this.initialize(img.xxclzdspcl0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0010 = function() {
	this.initialize(img.xxclzdspcl0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0011 = function() {
	this.initialize(img.xxclzdspcl0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0012 = function() {
	this.initialize(img.xxclzdspcl0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0013 = function() {
	this.initialize(img.xxclzdspcl0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0014 = function() {
	this.initialize(img.xxclzdspcl0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0015 = function() {
	this.initialize(img.xxclzdspcl0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0016 = function() {
	this.initialize(img.xxclzdspcl0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0017 = function() {
	this.initialize(img.xxclzdspcl0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0018 = function() {
	this.initialize(img.xxclzdspcl0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0019 = function() {
	this.initialize(img.xxclzdspcl0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0020 = function() {
	this.initialize(img.xxclzdspcl0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0021 = function() {
	this.initialize(img.xxclzdspcl0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0022 = function() {
	this.initialize(img.xxclzdspcl0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0023 = function() {
	this.initialize(img.xxclzdspcl0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0024 = function() {
	this.initialize(img.xxclzdspcl0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0025 = function() {
	this.initialize(img.xxclzdspcl0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0026 = function() {
	this.initialize(img.xxclzdspcl0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0027 = function() {
	this.initialize(img.xxclzdspcl0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0028 = function() {
	this.initialize(img.xxclzdspcl0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0029 = function() {
	this.initialize(img.xxclzdspcl0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0030 = function() {
	this.initialize(img.xxclzdspcl0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0031 = function() {
	this.initialize(img.xxclzdspcl0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0032 = function() {
	this.initialize(img.xxclzdspcl0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0033 = function() {
	this.initialize(img.xxclzdspcl0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0034 = function() {
	this.initialize(img.xxclzdspcl0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0035 = function() {
	this.initialize(img.xxclzdspcl0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0036 = function() {
	this.initialize(img.xxclzdspcl0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0037 = function() {
	this.initialize(img.xxclzdspcl0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0038 = function() {
	this.initialize(img.xxclzdspcl0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0039 = function() {
	this.initialize(img.xxclzdspcl0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0040 = function() {
	this.initialize(img.xxclzdspcl0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0041 = function() {
	this.initialize(img.xxclzdspcl0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0042 = function() {
	this.initialize(img.xxclzdspcl0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0043 = function() {
	this.initialize(img.xxclzdspcl0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0044 = function() {
	this.initialize(img.xxclzdspcl0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0045 = function() {
	this.initialize(img.xxclzdspcl0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0046 = function() {
	this.initialize(img.xxclzdspcl0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0047 = function() {
	this.initialize(img.xxclzdspcl0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0048 = function() {
	this.initialize(img.xxclzdspcl0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.xxclzdspcl0049 = function() {
	this.initialize(img.xxclzdspcl0049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,582);


(lib.modelMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_147 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(147).call(this.frame_147).wait(3));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr4AssMAAAhZXMBXxAAAMAAABZXg");
	mask.setTransform(280.9,285.9);

	// 图层 3
	this.instance = new lib.xxclzdspcl0000();
	this.instance.parent = this;

	this.instance_1 = new lib.xxclzdspcl0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.xxclzdspcl0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.xxclzdspcl0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.xxclzdspcl0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.xxclzdspcl0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.xxclzdspcl0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.xxclzdspcl0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.xxclzdspcl0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.xxclzdspcl0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.xxclzdspcl0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.xxclzdspcl0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.xxclzdspcl0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.xxclzdspcl0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.xxclzdspcl0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.xxclzdspcl0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.xxclzdspcl0016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.xxclzdspcl0017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.xxclzdspcl0018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.xxclzdspcl0019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.xxclzdspcl0020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.xxclzdspcl0021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.xxclzdspcl0022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.xxclzdspcl0023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.xxclzdspcl0024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.xxclzdspcl0025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.xxclzdspcl0026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.xxclzdspcl0027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.xxclzdspcl0028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.xxclzdspcl0029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.xxclzdspcl0030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.xxclzdspcl0031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.xxclzdspcl0032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.xxclzdspcl0033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.xxclzdspcl0034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.xxclzdspcl0035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.xxclzdspcl0036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.xxclzdspcl0037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.xxclzdspcl0038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.xxclzdspcl0039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.xxclzdspcl0040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.xxclzdspcl0041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.xxclzdspcl0042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.xxclzdspcl0043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.xxclzdspcl0044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.xxclzdspcl0045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.xxclzdspcl0046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.xxclzdspcl0047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.xxclzdspcl0048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.xxclzdspcl0049();
	this.instance_49.parent = this;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_48}]},3).to({state:[{t:this.instance_49}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,561.9,571.9);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ApEHhIAAvBISJAAIAAPBg");
	this.shape.setTransform(58.1,48.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.page18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s18.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_154 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(145).call(this.frame_154).wait(1));

	// 图层 1
	this.shuang = new lib.btn();
	this.shuang.parent = this;
	this.shuang.setTransform(419.9,690.3,1.072,0.316);
	new cjs.ButtonHelper(this.shuang, 0, 1, 2, false, new lib.btn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1388DC").s().p("Ag4BgIAAgiIgoADIAAgZIAogBIAAgSIgnAAIAAgYQAGgTAHgaIgOAAIAAgYIATAAIAEgWIAbABIgFAVIAmAAIAAAYIgsAAQgHAZgGAVIAOAAIAAgiIAXAAIAAAiIASAAIAAAXIgSAAIAAARIAUgBIAAAWIgUACIAAAjgAAWBcQgYAAgBgcIAAhTIgKAJQgFgJgKgOQAggZASglIAhAAIgFAHQASAeAdAUIgMAaQghgYgRgfQgQAagTAUIAWAAIAAAdQAUgLAQgOIATARQgZAUgeAPIAAAVQAAALAMAAIANAAQAMAAABgIIAEgcIAZAJQgBATgEAOQgFATgdAAg");
	this.shape.setTransform(532.4,706.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1388DC").s().p("AA6BgIAAgIIiMAAIAAheIAcAAIAAApQAtgTABgfIhXAAIAAgXIAaAAIAAgtIAbAAIAAAtIAhAAIAAg5IAbAAIAAARIA/AAIAAAXIg/AAIAAARIBOAAIAAAXIhPAAQAAAKgDAJIAsAaIAAgkIAbAAIAABmgAg2BCIBwAAIAAgeIgOAUIgqgfQgMARgcAPIgQgWg");
	this.shape_1.setTransform(512.3,706.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1388DC").s().p("AhbBZIAAgVIBUAAIAAgMIg5AAIAAgUIgMAPQgHgHgNgIQAVgVALgXIgLAAIAAhRICbAAIAABRIg8AAIAAALIBEAAIAAAVIhEAAIAAAMIA+AAIAAAUIg+AAIAAAMIBNAAIAAAVgAg/AkIA4AAIAAgMIgwAAIgIAMgAgngDIgEAGIAkAAIAAgLIgrAAgAgwgeIBlAAIAAgJIhlAAgAgwg5IBlAAIAAgKIhlAAg");
	this.shape_2.setTransform(492.2,706.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1388DC").s().p("AgHBFIAfABQAPAAAAgPIAAg3Ig5AAIAAgaIB0AAIAAAaIgfAAIAAA+QAAAQgIAIQgHAIgNABIgnABIgHgbgAhDBgIAAhIIgTARIgKgbQAegZAWgiIAXAQQgJAMgKAMIAABlgAhfgyQAggZAQgUIAXAQQgUAYgiAbIgRgWgAgMg4IAAgZIBlAAIAAAZg");
	this.shape_3.setTransform(472.3,706.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1388DC").s().p("AAjBgIAAi/IAZAAIAAAiIAiAAIAAAZIgiAAIAAAUIAeAAIAAAYIgeAAIAAAVIAlAAIAAAZIglAAIAAAqgAgHBgIAAgqIgiAAIAAgZIAiAAIAAgVIgZAAIAAgYIAZAAIAAgUIgZAAIAAgZIAZAAIAAgiIAYAAIAAC/gAhgBGIAPAAQAFAAAAgIIAAgjIgPAHIgFgdIAUgGIAAgiIgTAAIAAgYIATAAIAAgiIAZAAIAAAiIAPAAIAAAYIgPAAIAAAZIANgFIADAZIgQAGIAAA2QAAALgEAGQgEAGgIABQgJABgPAAIgFgZg");
	this.shape_4.setTransform(452.2,706.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1388DC").s().p("AAmA1QgTAUgYARIgSgYQAZgRATgVQgTghgGgqIAYgGQAGAfANAXQARgcAEglIhEAAIAAgZIBhAAQgCBFgfAwQARAWAZAPIgWAZQgWgRgQgUgAhhA9QAXgVAPgbIgjg5IAVgOIAaAoQAGgVACgZIg3AAIAAgZIBTAAQAAA5gRAqIAVAhIgYARIgMgUQgQAagYAWIgOgbg");
	this.shape_5.setTransform(432.3,707.1);

	this.dan = new lib.btn();
	this.dan.parent = this;
	this.dan.setTransform(224.1,690.3,1.072,0.316);
	new cjs.ButtonHelper(this.dan, 0, 1, 2, false, new lib.btn(), 3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1388DC").s().p("Ag4BgIAAgiIgoADIAAgZIAogBIAAgSIgnAAIAAgYQAGgTAHgaIgOAAIAAgYIATAAIAEgWIAbABIgFAVIAmAAIAAAYIgsAAQgGAZgIAVIAPAAIAAgiIAXAAIAAAiIASAAIAAAXIgSAAIAAARIAVgBIAAAWIgVACIAAAjgAAWBcQgZAAAAgcIAAhTIgKAJQgFgJgKgOQAggZASglIAhAAIgFAHQASAeAdAUIgMAaQghgYgRgfQgQAagTAUIAXAAIAAAdQATgLAQgOIAUARQgaAUgdAPIAAAVQAAALALAAIANAAQALAAACgIIADgcIAaAJQgCATgDAOQgEATgeAAg");
	this.shape_6.setTransform(336.5,706.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1388DC").s().p("AA5BgIAAgIIiLAAIAAheIAcAAIAAApQAtgTABgfIhXAAIAAgXIAaAAIAAgtIAbAAIAAAtIAhAAIAAg5IAbAAIAAARIA/AAIAAAXIg/AAIAAARIBOAAIAAAXIhPAAQAAAKgDAJIArAaIAAgkIAcAAIAABmgAg2BCIBvAAIAAgeIgNAUIgqgfQgMARgcAPIgQgWg");
	this.shape_7.setTransform(316.4,706.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1388DC").s().p("AhcBZIAAgVIBWAAIAAgMIg6AAIAAgUIgMAPQgHgHgNgIQAVgVAKgXIgKAAIAAhRICbAAIAABRIg8AAIAAALIBDAAIAAAVIhDAAIAAAMIA/AAIAAAUIg/AAIAAAMIBMAAIAAAVgAg/AkIA5AAIAAgMIgxAAIgIAMgAgngDIgDAGIAkAAIAAgLIgsAAgAgwgeIBlAAIAAgJIhlAAgAgwg5IBlAAIAAgKIhlAAg");
	this.shape_8.setTransform(296.3,706.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1388DC").s().p("AgHBFIAfABQAPAAAAgPIAAg3Ig6AAIAAgaIB0AAIAAAaIgeAAIAAA+QAAAQgIAIQgHAIgNABIgnABIgHgbgAhDBgIAAhIIgSARIgLgbQAdgZAXgiIAXAQQgJAMgKAMIAABlgAhfgyQAggZAQgUIAYAQQgVAYgiAbIgRgWgAgMg4IAAgZIBkAAIAAAZg");
	this.shape_9.setTransform(276.4,706.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1388DC").s().p("AAjBgIAAi/IAZAAIAAAiIAiAAIAAAZIgiAAIAAAUIAeAAIAAAYIgeAAIAAAVIAlAAIAAAZIglAAIAAAqgAgHBgIAAgqIgiAAIAAgZIAiAAIAAgVIgZAAIAAgYIAZAAIAAgUIgZAAIAAgZIAZAAIAAgiIAYAAIAAC/gAhgBGIAPAAQAFAAAAgIIAAgjIgPAHIgFgdIAUgGIAAgiIgTAAIAAgYIATAAIAAgiIAZAAIAAAiIAPAAIAAAYIgPAAIAAAZIANgFIADAZIgQAGIAAA2QAAALgEAGQgEAGgIABQgJABgPAAIgFgZg");
	this.shape_10.setTransform(256.4,706.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1388DC").s().p("AgMBhIAAgdIhUAAIAAgYIBUAAIAAgOIhEAAIAAhgIAjAAIgNgTIAXgKIAUAYIgMAFIAmAAQAMgPAKgPIAdALIgSATIAlAAIAABgIhDAAIAAAOIBTAAIAAAYIhTAAIAAAdgAAOAIIApAAIAAgPIgpAAgAg3AIIArAAIAAgPIgrAAgAAOgbIApAAIAAgQIgpAAgAg3gbIArAAIAAgQIgrAAg");
	this.shape_11.setTransform(236.4,706.3);

	this.instance = new lib.modelMC("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(395.6,71.2,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333F48").s().p("Ag5BaIAbABQALAAADgCQAEgDAAgGIAAgrQg7ADggAEIgJghQAtgPA0gbQg0ADgdAEIgKggQAdgLAfgSIhDACQgCgPgEgRQCAAABqgKIAEAdQg0AFg6ADQgaARggAOIBXgDIAogYIAZAZQhKAphSAeQA4gCA5gFIgTgRIAYgUQAVASArArIgZAYIgSgUIg/ADIAAA+QAAAMgIAIQgIAGgOACIgrAAQgDgUgEgQgAiCBcQAigTAcgbIAbAXQgdAcgkAXQgMgQgMgMgAArBCIAWgXQAdAUAlAdIgYAZQgcgZgkgag");
	this.shape_12.setTransform(262.2,61.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_13.setTransform(234.4,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333F48").s().p("ABOCCIAAgKIi9AAIAAiBIAlAAIAAA4QA/gZAAgrIh1AAIAAgfIAkAAIAAg9IAkAAIAAA9IAsAAIAAhNIAlAAIAAAYIBVAAIAAAeIhVAAIAAAXIBpAAIAAAfIhqAAQgBAOgFAMQAgASAcASIAAgyIAlAAIAACLgAhKBZICYAAIAAgoIgTAbQgbgXgcgUQgRAYgnAUIgWgdg");
	this.shape_14.setTransform(206.3,61.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333F48").s().p("Ah7B5IAAgcIByAAIAAgRIhNAAIAAgaIgQATQgLgJgQgKQAageAQgfIgOAAIAAhtIDQAAIAABtIhQAAIAAAPIBcAAIAAAcIhcAAIAAARIBUAAIAAAbIhUAAIAAARIBnAAIAAAcgAhWAxIBNAAIAAgRIhCAAIgLARgAg1gFIgEAJIAwAAIAAgPIg5AAgAhBgoICIAAIAAgOIiIAAgAhBhNICIAAIAAgOIiIAAg");
	this.shape_15.setTransform(178.1,61.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333F48").s().p("AgJBdIAqACQATAAAAgVIAAhKIhNAAIAAgjICdAAIAAAjIgqAAIAABTQAAAWgJALQgLALgRABIg1ACQgEgSgFgTgAhbCBIAAhiIgZAXIgPgkQApgiAegsIAfAUQgMARgNAQIAACIgAiChEQAtgiAVgbIAgAXQgcAgguAlQgKgPgOgQgAgRhMIAAgiICIAAIAAAig");
	this.shape_16.setTransform(150.3,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.dan},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shuang}]}).wait(155));

	// 图层 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EhqtAKPIAA0dMDVbAAAIAAUdg");
	this.shape_17.setTransform(683,702.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F8F8").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_18.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


(lib.page8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s8.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_154 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(145).call(this.frame_154).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag4BgIAAgiIgoACIAAgYIAogCIAAgSIgnAAIAAgXQAGgSAHgbIgOAAIAAgYIATAAIAEgXIAbACIgFAVIAmAAIAAAYIgsAAQgHAagGAUIAOAAIAAgiIAXAAIAAAiIASAAIAAAWIgSAAIAAARIAVgBIAAAYIgVABIAAAjgAAWBbQgYAAgBgcIAAhRIgKAJQgFgKgKgOQAggYASgmIAhAAIgFAHQASAeAdAUIgMAaQghgYgRgeQgQAZgTAUIAWAAIAAAdQAUgLAQgOIATARQgZAUgeAPIAAAUQABAMALAAIANAAQAMAAABgHIAEgdIAZAKQgBASgEANQgFATgdAAg");
	this.shape.setTransform(508.1,702.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AA6BgIAAgIIiMAAIAAheIAbAAIAAApQAugTABgfIhXAAIAAgXIAaAAIAAgtIAbAAIAAAtIAhAAIAAg5IAbAAIAAARIA/AAIAAAXIg/AAIAAARIBOAAIAAAXIhPAAQgBAKgCAJIAsAaIAAgkIAbAAIAABmgAg3BCIBxAAIAAgeIgOAUIgqgfQgMARgcAPIgRgWg");
	this.shape_1.setTransform(488,702.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhbBaIAAgVIBVAAIAAgNIg6AAIAAgUIgMAPQgHgHgNgIQAVgWALgWIgLAAIAAhQICbAAIAABQIg8AAIAAALIBEAAIAAAVIhEAAIAAAMIA/AAIAAAUIg/AAIAAANIBNAAIAAAVgAg/AkIA5AAIAAgMIgxAAIgIAMgAgngEIgEAHIAlAAIAAgLIgsAAgAgwgdIBlAAIAAgLIhlAAgAgwg4IBlAAIAAgLIhlAAg");
	this.shape_2.setTransform(467.9,702.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgHBFIAfABQAOAAAAgPIAAg3Ig4AAIAAgZIB0AAIAAAZIgfAAIAAA+QAAAPgIAJQgHAIgNABIgnABIgHgbgAhDBfIAAhIIgTARIgKgbQAegZAWggIAXAOQgJANgKAMIAABkgAhggzQAhgZAQgTIAYAQQgVAZgiAbIgSgYgAgMg4IAAgZIBlAAIAAAZg");
	this.shape_3.setTransform(448,702.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAjBgIAAi/IAZAAIAAAiIAiAAIAAAZIgiAAIAAAUIAeAAIAAAYIgeAAIAAAVIAlAAIAAAZIglAAIAAAqgAgHBgIAAgqIgiAAIAAgZIAiAAIAAgVIgZAAIAAgYIAZAAIAAgUIgZAAIAAgZIAZAAIAAgiIAYAAIAAC/gAhgBGIAPAAQAFAAAAgIIAAgjIgPAHIgFgdIAUgGIAAgiIgTAAIAAgYIATAAIAAgiIAZAAIAAAiIAPAAIAAAYIgPAAIAAAZIANgFIADAZIgQAGIAAA2QAAALgEAGQgEAGgIABQgJABgPAAIgFgZg");
	this.shape_4.setTransform(427.9,702.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAmA1QgTAVgYAQIgSgYQAZgRATgVQgTgggGgrIAYgFQAGAeANAYQARgdAEgkIhEAAIAAgaIBhAAQgCBFgfAwQARAWAZAPIgWAZQgWgQgQgVgAhhA+QAXgWAPgcIgjg4IAVgOIAaAoQAGgVACgYIg3AAIAAgaIBTAAQAAA4gRAsIAVAgIgYARIgMgUQgQAbgYAUIgOgZg");
	this.shape_5.setTransform(408,703.1);

	this.dan = new lib.btn();
	this.dan.parent = this;
	this.dan.setTransform(224.1,686.3,1.072,0.316);
	new cjs.ButtonHelper(this.dan, 0, 1, 2, false, new lib.btn(), 3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1388DC").s().p("Ag4BgIAAgiIgoACIAAgYIAogCIAAgSIgnAAIAAgXQAGgSAHgbIgOAAIAAgYIATAAIAEgXIAbACIgFAVIAmAAIAAAYIgsAAQgGAagIAUIAPAAIAAgiIAXAAIAAAiIASAAIAAAWIgSAAIAAARIAVgBIAAAYIgVABIAAAjgAAWBbQgZAAAAgcIAAhRIgKAJQgFgKgKgOQAggYASgmIAhAAIgFAHQASAeAdAUIgMAaQghgYgRgeQgQAZgTAUIAXAAIAAAdQATgLAQgOIAUARQgaAUgdAPIAAAUQAAAMALAAIANAAQALAAACgHIADgdIAaAKQgCASgDANQgEATgeAAg");
	this.shape_6.setTransform(336.5,702.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1388DC").s().p("AA5BgIAAgIIiLAAIAAheIAcAAIAAApQAtgTABgfIhXAAIAAgXIAaAAIAAgtIAbAAIAAAtIAhAAIAAg5IAbAAIAAARIA/AAIAAAXIg/AAIAAARIBOAAIAAAXIhPAAQAAAKgDAJIArAaIAAgkIAcAAIAABmgAg2BCIBvAAIAAgeIgNAUIgqgfQgMARgcAPIgQgWg");
	this.shape_7.setTransform(316.4,702.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1388DC").s().p("AhcBaIAAgVIBWAAIAAgNIg6AAIAAgUIgMAPQgHgHgNgIQAVgWAKgWIgKAAIAAhQICbAAIAABQIg8AAIAAALIBDAAIAAAVIhDAAIAAAMIA/AAIAAAUIg/AAIAAANIBMAAIAAAVgAg/AkIA5AAIAAgMIgxAAIgIAMgAgngEIgDAHIAkAAIAAgLIgsAAgAgwgdIBlAAIAAgLIhlAAgAgwg4IBlAAIAAgLIhlAAg");
	this.shape_8.setTransform(296.3,702.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1388DC").s().p("AgHBFIAfABQAPAAAAgPIAAg3Ig6AAIAAgZIB0AAIAAAZIgeAAIAAA+QAAAPgIAJQgHAIgNABIgnABIgHgbgAhDBfIAAhIIgSARIgLgbQAdgZAXggIAXAOQgJANgKAMIAABkgAhfgzQAggZAQgTIAYAQQgVAZgiAbIgRgYgAgMg4IAAgZIBkAAIAAAZg");
	this.shape_9.setTransform(276.4,702.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1388DC").s().p("AAjBgIAAi/IAZAAIAAAiIAiAAIAAAZIgiAAIAAAUIAeAAIAAAYIgeAAIAAAVIAlAAIAAAZIglAAIAAAqgAgHBgIAAgqIgiAAIAAgZIAiAAIAAgVIgZAAIAAgYIAZAAIAAgUIgZAAIAAgZIAZAAIAAgiIAYAAIAAC/gAhgBGIAPAAQAFAAAAgIIAAgjIgPAHIgFgdIAUgGIAAgiIgTAAIAAgYIATAAIAAgiIAZAAIAAAiIAPAAIAAAYIgPAAIAAAZIANgFIADAZIgQAGIAAA2QAAALgEAGQgEAGgIABQgJABgPAAIgFgZg");
	this.shape_10.setTransform(256.4,702.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1388DC").s().p("AgMBhIAAgdIhUAAIAAgYIBUAAIAAgOIhEAAIAAhgIAjAAIgNgTIAXgKIAUAYIgMAFIAmAAQAMgPAKgPIAdALIgSATIAlAAIAABgIhDAAIAAAOIBTAAIAAAYIhTAAIAAAdgAAOAIIApAAIAAgPIgpAAgAg3AIIArAAIAAgPIgrAAgAAOgbIApAAIAAgQIgpAAgAg3gbIArAAIAAgQIgrAAg");
	this.shape_11.setTransform(236.4,702.3);

	this.instance = new lib.modelMC("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(395.6,71.2,0.9,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333F48").s().p("Ag5BaIAbABQALAAADgCQAEgDAAgGIAAgrQg7ADggAEIgJghQAtgPA0gbQg0ADgdAEIgKggQAdgLAfgSIhDACQgCgPgEgRQCAAABqgKIAEAdQg0AFg6ADQgaARggAOIBXgDIAogYIAZAZQhKAphSAeQA4gCA5gFIgTgRIAYgUQAVASArArIgZAYIgSgUIg/ADIAAA+QAAAMgIAIQgIAGgOACIgrAAQgDgUgEgQgAiCBcQAigTAcgbIAbAXQgdAcgkAXQgMgQgMgMgAArBCIAWgXQAdAUAlAdIgYAZQgcgZgkgag");
	this.shape_12.setTransform(262.2,61.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_13.setTransform(234.4,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333F48").s().p("ABOCCIAAgKIi9AAIAAiBIAlAAIAAA4QA/gZAAgrIh1AAIAAgfIAkAAIAAg9IAkAAIAAA9IAsAAIAAhNIAlAAIAAAYIBVAAIAAAeIhVAAIAAAXIBpAAIAAAfIhqAAQgBAOgFAMQAgASAcASIAAgyIAlAAIAACLgAhKBZICYAAIAAgoIgTAbQgbgXgcgUQgRAYgnAUIgWgdg");
	this.shape_14.setTransform(206.3,61.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333F48").s().p("Ah7B5IAAgcIByAAIAAgRIhNAAIAAgaIgQATQgLgJgQgKQAageAQgfIgOAAIAAhtIDQAAIAABtIhQAAIAAAPIBcAAIAAAcIhcAAIAAARIBUAAIAAAbIhUAAIAAARIBnAAIAAAcgAhWAxIBNAAIAAgRIhCAAIgLARgAg1gFIgEAJIAwAAIAAgPIg5AAgAhBgoICIAAIAAgOIiIAAgAhBhNICIAAIAAgOIiIAAg");
	this.shape_15.setTransform(178.1,61.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333F48").s().p("AgJBdIAqACQATAAAAgVIAAhKIhNAAIAAgjICdAAIAAAjIgqAAIAABTQAAAWgJALQgLALgRABIg1ACQgEgSgFgTgAhbCBIAAhiIgZAXIgPgkQApgiAegsIAfAUQgMARgNAQIAACIgAiChEQAtgiAVgbIAgAXQgcAgguAlQgKgPgOgQgAgRhMIAAgiICIAAIAAAig");
	this.shape_16.setTransform(150.3,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.dan},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(155));

	// 图层 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EhqtAKPIAA0dMDVbAAAIAAUdg");
	this.shape_17.setTransform(683,702.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F8F8").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_18.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3dpage8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(491.8,-465.2,2927.7,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3dpage8/xxclzdspcl0000.jpg", id:"xxclzdspcl0000"},
		{src:"images/3dpage8/xxclzdspcl0001.jpg", id:"xxclzdspcl0001"},
		{src:"images/3dpage8/xxclzdspcl0002.jpg", id:"xxclzdspcl0002"},
		{src:"images/3dpage8/xxclzdspcl0003.jpg", id:"xxclzdspcl0003"},
		{src:"images/3dpage8/xxclzdspcl0004.jpg", id:"xxclzdspcl0004"},
		{src:"images/3dpage8/xxclzdspcl0005.jpg", id:"xxclzdspcl0005"},
		{src:"images/3dpage8/xxclzdspcl0006.jpg", id:"xxclzdspcl0006"},
		{src:"images/3dpage8/xxclzdspcl0007.jpg", id:"xxclzdspcl0007"},
		{src:"images/3dpage8/xxclzdspcl0008.jpg", id:"xxclzdspcl0008"},
		{src:"images/3dpage8/xxclzdspcl0009.jpg", id:"xxclzdspcl0009"},
		{src:"images/3dpage8/xxclzdspcl0010.jpg", id:"xxclzdspcl0010"},
		{src:"images/3dpage8/xxclzdspcl0011.jpg", id:"xxclzdspcl0011"},
		{src:"images/3dpage8/xxclzdspcl0012.jpg", id:"xxclzdspcl0012"},
		{src:"images/3dpage8/xxclzdspcl0013.jpg", id:"xxclzdspcl0013"},
		{src:"images/3dpage8/xxclzdspcl0014.jpg", id:"xxclzdspcl0014"},
		{src:"images/3dpage8/xxclzdspcl0015.jpg", id:"xxclzdspcl0015"},
		{src:"images/3dpage8/xxclzdspcl0016.jpg", id:"xxclzdspcl0016"},
		{src:"images/3dpage8/xxclzdspcl0017.jpg", id:"xxclzdspcl0017"},
		{src:"images/3dpage8/xxclzdspcl0018.jpg", id:"xxclzdspcl0018"},
		{src:"images/3dpage8/xxclzdspcl0019.jpg", id:"xxclzdspcl0019"},
		{src:"images/3dpage8/xxclzdspcl0020.jpg", id:"xxclzdspcl0020"},
		{src:"images/3dpage8/xxclzdspcl0021.jpg", id:"xxclzdspcl0021"},
		{src:"images/3dpage8/xxclzdspcl0022.jpg", id:"xxclzdspcl0022"},
		{src:"images/3dpage8/xxclzdspcl0023.jpg", id:"xxclzdspcl0023"},
		{src:"images/3dpage8/xxclzdspcl0024.jpg", id:"xxclzdspcl0024"},
		{src:"images/3dpage8/xxclzdspcl0025.jpg", id:"xxclzdspcl0025"},
		{src:"images/3dpage8/xxclzdspcl0026.jpg", id:"xxclzdspcl0026"},
		{src:"images/3dpage8/xxclzdspcl0027.jpg", id:"xxclzdspcl0027"},
		{src:"images/3dpage8/xxclzdspcl0028.jpg", id:"xxclzdspcl0028"},
		{src:"images/3dpage8/xxclzdspcl0029.jpg", id:"xxclzdspcl0029"},
		{src:"images/3dpage8/xxclzdspcl0030.jpg", id:"xxclzdspcl0030"},
		{src:"images/3dpage8/xxclzdspcl0031.jpg", id:"xxclzdspcl0031"},
		{src:"images/3dpage8/xxclzdspcl0032.jpg", id:"xxclzdspcl0032"},
		{src:"images/3dpage8/xxclzdspcl0033.jpg", id:"xxclzdspcl0033"},
		{src:"images/3dpage8/xxclzdspcl0034.jpg", id:"xxclzdspcl0034"},
		{src:"images/3dpage8/xxclzdspcl0035.jpg", id:"xxclzdspcl0035"},
		{src:"images/3dpage8/xxclzdspcl0036.jpg", id:"xxclzdspcl0036"},
		{src:"images/3dpage8/xxclzdspcl0037.jpg", id:"xxclzdspcl0037"},
		{src:"images/3dpage8/xxclzdspcl0038.jpg", id:"xxclzdspcl0038"},
		{src:"images/3dpage8/xxclzdspcl0039.jpg", id:"xxclzdspcl0039"},
		{src:"images/3dpage8/xxclzdspcl0040.jpg", id:"xxclzdspcl0040"},
		{src:"images/3dpage8/xxclzdspcl0041.jpg", id:"xxclzdspcl0041"},
		{src:"images/3dpage8/xxclzdspcl0042.jpg", id:"xxclzdspcl0042"},
		{src:"images/3dpage8/xxclzdspcl0043.jpg", id:"xxclzdspcl0043"},
		{src:"images/3dpage8/xxclzdspcl0044.jpg", id:"xxclzdspcl0044"},
		{src:"images/3dpage8/xxclzdspcl0045.jpg", id:"xxclzdspcl0045"},
		{src:"images/3dpage8/xxclzdspcl0046.jpg", id:"xxclzdspcl0046"},
		{src:"images/3dpage8/xxclzdspcl0047.jpg", id:"xxclzdspcl0047"},
		{src:"images/3dpage8/xxclzdspcl0048.jpg", id:"xxclzdspcl0048"},
		{src:"images/3dpage8/xxclzdspcl0049.jpg", id:"xxclzdspcl0049"}
	],
	preloads: []
};




})(lib3dpage8 = lib3dpage8||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3dpage8, images, createjs, ss, AdobeAn;