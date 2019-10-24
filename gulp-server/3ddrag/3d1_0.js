(function (lib, img, cjs, ss, an) {
	console.log(img);

	var p; // shortcut to reference prototypes
	lib.webFontTxtInst = {};
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [];



	lib.updateListCache = function (cacheList) {
		for (var i = 0; i < cacheList.length; i++) {
			if (cacheList[i].cacheCanvas)
				cacheList[i].updateCache();
		}
	};

	lib.addElementsToCache = function (textInst, cacheList) {
		var cur = textInst;
		while (cur != exportRoot) {
			if (cacheList.indexOf(cur) != -1)
				break;
			cur = cur.parent;
		}
		if (cur != exportRoot) {
			var cur2 = textInst;
			var index = cacheList.indexOf(cur);
			while (cur2 != cur) {
				cacheList.splice(index, 0, cur2);
				cur2 = cur2.parent;
				index++;
			}
		} else {
			cur = textInst;
			while (cur != exportRoot) {
				cacheList.push(cur);
				cur = cur.parent;
			}
		}
	};

	lib.gfontAvailable = function (family, totalGoogleCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

		loadedGoogleCount++;
		if (loadedGoogleCount == totalGoogleCount) {
			lib.updateListCache(gFontsUpdateCacheList);
		}
	};

	lib.tfontAvailable = function (family, totalTypekitCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

		loadedTypekitCount++;
		if (loadedTypekitCount == totalTypekitCount) {
			lib.updateListCache(tFontsUpdateCacheList);
		}
	};
	// symbols:



	(lib.ylbjq_bzt_zk0000 = function () {
		this.initialize(img.ylbjq_bzt_zk0000);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0001 = function () {
		this.initialize(img.ylbjq_bzt_zk0001);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0002 = function () {
		this.initialize(img.ylbjq_bzt_zk0002);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0003 = function () {
		this.initialize(img.ylbjq_bzt_zk0003);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0004 = function () {
		this.initialize(img.ylbjq_bzt_zk0004);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0005 = function () {
		this.initialize(img.ylbjq_bzt_zk0005);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0006 = function () {
		this.initialize(img.ylbjq_bzt_zk0006);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0007 = function () {
		this.initialize(img.ylbjq_bzt_zk0007);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0008 = function () {
		this.initialize(img.ylbjq_bzt_zk0008);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0009 = function () {
		this.initialize(img.ylbjq_bzt_zk0009);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0010 = function () {
		this.initialize(img.ylbjq_bzt_zk0010);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0011 = function () {
		this.initialize(img.ylbjq_bzt_zk0011);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0012 = function () {
		this.initialize(img.ylbjq_bzt_zk0012);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0013 = function () {
		this.initialize(img.ylbjq_bzt_zk0013);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0014 = function () {
		this.initialize(img.ylbjq_bzt_zk0014);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0015 = function () {
		this.initialize(img.ylbjq_bzt_zk0015);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0016 = function () {
		this.initialize(img.ylbjq_bzt_zk0016);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0017 = function () {
		this.initialize(img.ylbjq_bzt_zk0017);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0018 = function () {
		this.initialize(img.ylbjq_bzt_zk0018);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0019 = function () {
		this.initialize(img.ylbjq_bzt_zk0019);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0020 = function () {
		this.initialize(img.ylbjq_bzt_zk0020);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0021 = function () {
		this.initialize(img.ylbjq_bzt_zk0021);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0022 = function () {
		this.initialize(img.ylbjq_bzt_zk0022);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0023 = function () {
		this.initialize(img.ylbjq_bzt_zk0023);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0024 = function () {
		this.initialize(img.ylbjq_bzt_zk0024);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0025 = function () {
		this.initialize(img.ylbjq_bzt_zk0025);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0026 = function () {
		this.initialize(img.ylbjq_bzt_zk0026);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0027 = function () {
		this.initialize(img.ylbjq_bzt_zk0027);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0028 = function () {
		this.initialize(img.ylbjq_bzt_zk0028);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0029 = function () {
		this.initialize(img.ylbjq_bzt_zk0029);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0030 = function () {
		this.initialize(img.ylbjq_bzt_zk0030);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0031 = function () {
		this.initialize(img.ylbjq_bzt_zk0031);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0032 = function () {
		this.initialize(img.ylbjq_bzt_zk0032);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0033 = function () {
		this.initialize(img.ylbjq_bzt_zk0033);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0034 = function () {
		this.initialize(img.ylbjq_bzt_zk0034);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0035 = function () {
		this.initialize(img.ylbjq_bzt_zk0035);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0036 = function () {
		this.initialize(img.ylbjq_bzt_zk0036);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0037 = function () {
		this.initialize(img.ylbjq_bzt_zk0037);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0038 = function () {
		this.initialize(img.ylbjq_bzt_zk0038);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0039 = function () {
		this.initialize(img.ylbjq_bzt_zk0039);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0040 = function () {
		this.initialize(img.ylbjq_bzt_zk0040);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0041 = function () {
		this.initialize(img.ylbjq_bzt_zk0041);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0042 = function () {
		this.initialize(img.ylbjq_bzt_zk0042);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0043 = function () {
		this.initialize(img.ylbjq_bzt_zk0043);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0044 = function () {
		this.initialize(img.ylbjq_bzt_zk0044);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0045 = function () {
		this.initialize(img.ylbjq_bzt_zk0045);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0046 = function () {
		this.initialize(img.ylbjq_bzt_zk0046);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0047 = function () {
		this.initialize(img.ylbjq_bzt_zk0047);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0048 = function () {
		this.initialize(img.ylbjq_bzt_zk0048);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0049 = function () {
		this.initialize(img.ylbjq_bzt_zk0049);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_bzt_zk0050 = function () {
		this.initialize(img.ylbjq_bzt_zk0050);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.tab2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["#FF9900", "#FFB600", "#FFE800", "#FFF050", "#FFB100"], [0.584, 0.671, 0.749, 0.875, 1], -0.3, 0.2, 0, -0.3, 0.2, 22.7).s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQAQAQAMASQAmA3AABFQAABGgmA3QgMASgQAQQhCBChdAAQhcAAhChCgAhkhjQgpApAAA7QAAA6ApAqQAqApA6AAQA7AAApgpQAqgqAAg6QAAg7gqgpQgpgqg7AAQg6AAgqAqg");

		// this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-22.5, -22.5, 45, 45);


	(lib.tab1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["rgba(255,255,0,0)", "#FFFF00", "rgba(255,255,0,0)"], [0.267, 0.588, 0.941], -0.3, 0.2, 0, -0.3, 0.2, 30.9).s().p("AjkDlQhfhfAAiGQAAiFBfhfQBfhfCFAAQCGAABfBfQAXAXARAZQA3BPAABlQAABmg3BPQgRAYgXAYQhfBfiGAAQiFAAhfhfgAguguQgTAUAAAaQAAAbATAUQATATAbAAQAbAAATgTQAUgUAAgbQAAgagUgUQgTgTgbAAQgbAAgTATg");

		// this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-32.4, -32.4, 64.8, 64.8);


	(lib.shuomingBg = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("AvXjzIevAAIAAHnI+vAAg");
		this.shape.setTransform(98.4, 24.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AvXD0IAAnnIevAAIAAHng");
		this.shape_1.setTransform(98.4, 24.4);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: [{
		// 		t: this.shape_1
		// 	}, {
		// 		t: this.shape
		// 	}]
		// }).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1, -1, 198.9, 50.8);


	(lib.model2MC = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.instance = new lib.ylbjq_bzt_zk0000();
		this.instance.parent = this;

		this.instance_1 = new lib.ylbjq_bzt_zk0001();
		this.instance_1.parent = this;

		this.instance_2 = new lib.ylbjq_bzt_zk0002();
		this.instance_2.parent = this;

		this.instance_3 = new lib.ylbjq_bzt_zk0003();
		this.instance_3.parent = this;

		this.instance_4 = new lib.ylbjq_bzt_zk0004();
		this.instance_4.parent = this;

		this.instance_5 = new lib.ylbjq_bzt_zk0005();
		this.instance_5.parent = this;

		this.instance_6 = new lib.ylbjq_bzt_zk0006();
		this.instance_6.parent = this;

		this.instance_7 = new lib.ylbjq_bzt_zk0007();
		this.instance_7.parent = this;

		this.instance_8 = new lib.ylbjq_bzt_zk0008();
		this.instance_8.parent = this;

		this.instance_9 = new lib.ylbjq_bzt_zk0009();
		this.instance_9.parent = this;

		this.instance_10 = new lib.ylbjq_bzt_zk0010();
		this.instance_10.parent = this;

		this.instance_11 = new lib.ylbjq_bzt_zk0011();
		this.instance_11.parent = this;

		this.instance_12 = new lib.ylbjq_bzt_zk0012();
		this.instance_12.parent = this;

		this.instance_13 = new lib.ylbjq_bzt_zk0013();
		this.instance_13.parent = this;

		this.instance_14 = new lib.ylbjq_bzt_zk0014();
		this.instance_14.parent = this;

		this.instance_15 = new lib.ylbjq_bzt_zk0015();
		this.instance_15.parent = this;

		this.instance_16 = new lib.ylbjq_bzt_zk0016();
		this.instance_16.parent = this;

		this.instance_17 = new lib.ylbjq_bzt_zk0017();
		this.instance_17.parent = this;

		this.instance_18 = new lib.ylbjq_bzt_zk0018();
		this.instance_18.parent = this;

		this.instance_19 = new lib.ylbjq_bzt_zk0019();
		this.instance_19.parent = this;

		this.instance_20 = new lib.ylbjq_bzt_zk0020();
		this.instance_20.parent = this;

		this.instance_21 = new lib.ylbjq_bzt_zk0021();
		this.instance_21.parent = this;

		this.instance_22 = new lib.ylbjq_bzt_zk0022();
		this.instance_22.parent = this;

		this.instance_23 = new lib.ylbjq_bzt_zk0023();
		this.instance_23.parent = this;

		this.instance_24 = new lib.ylbjq_bzt_zk0024();
		this.instance_24.parent = this;

		this.instance_25 = new lib.ylbjq_bzt_zk0025();
		this.instance_25.parent = this;

		this.instance_26 = new lib.ylbjq_bzt_zk0026();
		this.instance_26.parent = this;

		this.instance_27 = new lib.ylbjq_bzt_zk0027();
		this.instance_27.parent = this;

		this.instance_28 = new lib.ylbjq_bzt_zk0028();
		this.instance_28.parent = this;

		this.instance_29 = new lib.ylbjq_bzt_zk0029();
		this.instance_29.parent = this;

		this.instance_30 = new lib.ylbjq_bzt_zk0030();
		this.instance_30.parent = this;

		this.instance_31 = new lib.ylbjq_bzt_zk0031();
		this.instance_31.parent = this;

		this.instance_32 = new lib.ylbjq_bzt_zk0032();
		this.instance_32.parent = this;

		this.instance_33 = new lib.ylbjq_bzt_zk0033();
		this.instance_33.parent = this;

		this.instance_34 = new lib.ylbjq_bzt_zk0034();
		this.instance_34.parent = this;

		this.instance_35 = new lib.ylbjq_bzt_zk0035();
		this.instance_35.parent = this;

		this.instance_36 = new lib.ylbjq_bzt_zk0036();
		this.instance_36.parent = this;

		this.instance_37 = new lib.ylbjq_bzt_zk0037();
		this.instance_37.parent = this;

		this.instance_38 = new lib.ylbjq_bzt_zk0038();
		this.instance_38.parent = this;

		this.instance_39 = new lib.ylbjq_bzt_zk0039();
		this.instance_39.parent = this;

		this.instance_40 = new lib.ylbjq_bzt_zk0040();
		this.instance_40.parent = this;

		this.instance_41 = new lib.ylbjq_bzt_zk0041();
		this.instance_41.parent = this;

		this.instance_42 = new lib.ylbjq_bzt_zk0042();
		this.instance_42.parent = this;

		this.instance_43 = new lib.ylbjq_bzt_zk0043();
		this.instance_43.parent = this;

		this.instance_44 = new lib.ylbjq_bzt_zk0044();
		this.instance_44.parent = this;

		this.instance_45 = new lib.ylbjq_bzt_zk0045();
		this.instance_45.parent = this;

		this.instance_46 = new lib.ylbjq_bzt_zk0046();
		this.instance_46.parent = this;

		this.instance_47 = new lib.ylbjq_bzt_zk0047();
		this.instance_47.parent = this;

		this.instance_48 = new lib.ylbjq_bzt_zk0048();
		this.instance_48.parent = this;

		this.instance_49 = new lib.ylbjq_bzt_zk0049();
		this.instance_49.parent = this;

		this.instance_50 = new lib.ylbjq_bzt_zk0050();
		this.instance_50.parent = this;

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance
			}]
		}).to({
			state: [{
				t: this.instance_1
			}]
		}, 1).to({
			state: [{
				t: this.instance_2
			}]
		}, 1).to({
			state: [{
				t: this.instance_3
			}]
		}, 1).to({
			state: [{
				t: this.instance_4
			}]
		}, 1).to({
			state: [{
				t: this.instance_5
			}]
		}, 1).to({
			state: [{
				t: this.instance_6
			}]
		}, 1).to({
			state: [{
				t: this.instance_7
			}]
		}, 1).to({
			state: [{
				t: this.instance_8
			}]
		}, 1).to({
			state: [{
				t: this.instance_9
			}]
		}, 1).to({
			state: [{
				t: this.instance_10
			}]
		}, 1).to({
			state: [{
				t: this.instance_11
			}]
		}, 1).to({
			state: [{
				t: this.instance_12
			}]
		}, 1).to({
			state: [{
				t: this.instance_13
			}]
		}, 1).to({
			state: [{
				t: this.instance_14
			}]
		}, 1).to({
			state: [{
				t: this.instance_15
			}]
		}, 1).to({
			state: [{
				t: this.instance_16
			}]
		}, 1).to({
			state: [{
				t: this.instance_17
			}]
		}, 1).to({
			state: [{
				t: this.instance_18
			}]
		}, 1).to({
			state: [{
				t: this.instance_19
			}]
		}, 1).to({
			state: [{
				t: this.instance_20
			}]
		}, 1).to({
			state: [{
				t: this.instance_21
			}]
		}, 1).to({
			state: [{
				t: this.instance_22
			}]
		}, 1).to({
			state: [{
				t: this.instance_23
			}]
		}, 1).to({
			state: [{
				t: this.instance_24
			}]
		}, 1).to({
			state: [{
				t: this.instance_25
			}]
		}, 1).to({
			state: [{
				t: this.instance_26
			}]
		}, 1).to({
			state: [{
				t: this.instance_27
			}]
		}, 1).to({
			state: [{
				t: this.instance_28
			}]
		}, 1).to({
			state: [{
				t: this.instance_29
			}]
		}, 1).to({
			state: [{
				t: this.instance_30
			}]
		}, 1).to({
			state: [{
				t: this.instance_31
			}]
		}, 1).to({
			state: [{
				t: this.instance_32
			}]
		}, 1).to({
			state: [{
				t: this.instance_33
			}]
		}, 1).to({
			state: [{
				t: this.instance_34
			}]
		}, 1).to({
			state: [{
				t: this.instance_35
			}]
		}, 1).to({
			state: [{
				t: this.instance_36
			}]
		}, 1).to({
			state: [{
				t: this.instance_37
			}]
		}, 1).to({
			state: [{
				t: this.instance_38
			}]
		}, 1).to({
			state: [{
				t: this.instance_39
			}]
		}, 1).to({
			state: [{
				t: this.instance_40
			}]
		}, 1).to({
			state: [{
				t: this.instance_41
			}]
		}, 1).to({
			state: [{
				t: this.instance_42
			}]
		}, 1).to({
			state: [{
				t: this.instance_43
			}]
		}, 1).to({
			state: [{
				t: this.instance_44
			}]
		}, 1).to({
			state: [{
				t: this.instance_45
			}]
		}, 1).to({
			state: [{
				t: this.instance_46
			}]
		}, 1).to({
			state: [{
				t: this.instance_47
			}]
		}, 1).to({
			state: [{
				t: this.instance_48
			}]
		}, 1).to({
			state: [{
				t: this.instance_49
			}]
		}, 1).to({
			state: [{
				t: this.instance_50
			}]
		}, 1).to({
			state: [{
				t: this.instance_49
			}]
		}, 1).to({
			state: [{
				t: this.instance_48
			}]
		}, 1).to({
			state: [{
				t: this.instance_47
			}]
		}, 1).to({
			state: [{
				t: this.instance_46
			}]
		}, 1).to({
			state: [{
				t: this.instance_45
			}]
		}, 1).to({
			state: [{
				t: this.instance_44
			}]
		}, 1).to({
			state: [{
				t: this.instance_43
			}]
		}, 1).to({
			state: [{
				t: this.instance_42
			}]
		}, 1).to({
			state: [{
				t: this.instance_41
			}]
		}, 1).to({
			state: [{
				t: this.instance_40
			}]
		}, 1).to({
			state: [{
				t: this.instance_39
			}]
		}, 1).to({
			state: [{
				t: this.instance_38
			}]
		}, 1).to({
			state: [{
				t: this.instance_37
			}]
		}, 1).to({
			state: [{
				t: this.instance_36
			}]
		}, 1).to({
			state: [{
				t: this.instance_35
			}]
		}, 1).to({
			state: [{
				t: this.instance_34
			}]
		}, 1).to({
			state: [{
				t: this.instance_33
			}]
		}, 1).to({
			state: [{
				t: this.instance_32
			}]
		}, 1).to({
			state: [{
				t: this.instance_31
			}]
		}, 1).to({
			state: [{
				t: this.instance_30
			}]
		}, 1).to({
			state: [{
				t: this.instance_29
			}]
		}, 1).to({
			state: [{
				t: this.instance_28
			}]
		}, 1).to({
			state: [{
				t: this.instance_27
			}]
		}, 1).to({
			state: [{
				t: this.instance_26
			}]
		}, 1).to({
			state: [{
				t: this.instance_25
			}]
		}, 1).to({
			state: [{
				t: this.instance_24
			}]
		}, 1).to({
			state: [{
				t: this.instance_23
			}]
		}, 1).to({
			state: [{
				t: this.instance_22
			}]
		}, 1).to({
			state: [{
				t: this.instance_21
			}]
		}, 1).to({
			state: [{
				t: this.instance_20
			}]
		}, 1).to({
			state: [{
				t: this.instance_19
			}]
		}, 1).to({
			state: [{
				t: this.instance_18
			}]
		}, 1).to({
			state: [{
				t: this.instance_17
			}]
		}, 1).to({
			state: [{
				t: this.instance_16
			}]
		}, 1).to({
			state: [{
				t: this.instance_15
			}]
		}, 1).to({
			state: [{
				t: this.instance_14
			}]
		}, 1).to({
			state: [{
				t: this.instance_13
			}]
		}, 1).to({
			state: [{
				t: this.instance_12
			}]
		}, 1).to({
			state: [{
				t: this.instance_11
			}]
		}, 1).to({
			state: [{
				t: this.instance_10
			}]
		}, 1).to({
			state: [{
				t: this.instance_9
			}]
		}, 1).to({
			state: [{
				t: this.instance_8
			}]
		}, 1).to({
			state: [{
				t: this.instance_7
			}]
		}, 1).to({
			state: [{
				t: this.instance_6
			}]
		}, 1).to({
			state: [{
				t: this.instance_5
			}]
		}, 1).to({
			state: [{
				t: this.instance_4
			}]
		}, 1).to({
			state: [{
				t: this.instance_3
			}]
		}, 1).to({
			state: [{
				t: this.instance_2
			}]
		}, 1).to({
			state: [{
				t: this.instance_1
			}]
		}, 1).to({
			state: [{
				t: this.instance
			}]
		}, 1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.btn = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#333333").s().p("ApEHhIAAvBISJAAIAAPBg");
		this.shape.setTransform(58.1, 48.1);
		this.shape._off = true;

		// this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({
		// 	_off: false
		// }, 0).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = null;


	(lib.tabMC = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 2
		this.instance = new lib.tab2("synched", 0);
		this.instance.parent = this;

		// this.timeline.addTween(cjs.Tween.get(this.instance).to({
		// 	startPosition: 0
		// }, 14).to({
		// 	startPosition: 0
		// }, 15).wait(1));

		// 图层 3
		this.instance_1 = new lib.tab1("synched", 0);
		this.instance_1.parent = this;

		// this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
		// 	alpha: 0
		// }, 14).to({
		// 	alpha: 1
		// }, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-32.4, -32.4, 64.8, 64.8);


	(lib.mlBtn = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgzA7IAAgEIABgUIAAgvIgBgSQAFABAQAAIAUAAIAEgRIggAAIgXAAIgBAAIAAgMIABABIAXAAIBNAAIAXAAIABgBIAAANIgBAAIgXgBIghAAIgFARIAdAAQASAAAFgCQgCAFAAAQIAAAtIABAWIABABIgPAAIABgJIhOAAQgBAIACACgAAVAoIASAAIAAg7IgSAAgAgLAoIAWAAIAAgQIgWAAgAgnAoIARAAIAAg7IgRAAgAgLAQIAWAAIAAgOIgWAAgAgLgFIAWAAIAAgOIgWAAg");
		this.shape.setTransform(13.5, -41.5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AAGAiIAHgJIApAXIgJAKQgTgOgUgKgAg5AwQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABAAQA7AAgGg4IAPACIgDAIQgFAbgFAHQgIANgmAKQgGgIgCgBgAgpAcIAAgBIACgQIAAgbIgBgPIAQABIASAAIADgQIgjAAIgUABIAAgNIAUABIBMAAIAWgBIAAANIgWgBIgcAAIgGAQIAXAAIANAAIACgBIAAAPIAAAZQgBAHACALIgNAAIAAgIIAAgIIAAgeIg6AAIAAAdIABASg");
		this.shape_1.setTransform(-0.6, -41.5);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgIBAQACgHAAgNIAAguIgCgMIAAgEIALAAIAFABIgBACQgCADAAAGIAAAyQAAANABAHgAhAgDQAsgTAPgpIANAFIgBACIgCACQAPAiAtAKQgGADgGAJQgogRgNggQgOAcgmAYQgHgFgFgDg");
		this.shape_2.setTransform(-14.7, -41.7);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#000000").s().p("AAjAGIhEAAIgbABIAAgNIAaABIBEAAIAbgBIAAANIgagBg");
		this.shape_3.setTransform(-28.6, -41.8);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AAnA6IhPAAIgOAAIgJAAIAAgLIAXABIAeAAIAAhdIAAgCIAAgLQAOABABACIgBADIgCAFIAAAeIAWAAQAUABAIgCIAAANIgcgBIgWAAIAAA2IAkAAQATAAAGgBIAAALQgGgBgSABg");
		this.shape_4.setTransform(-42.6, -41.8);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AApA6IAAgHIABgEIhSAAIAAALIgNAAIABgWIAAhKIgBgRIAAgCQAGACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBSAAIAAhSIhSAAgAAKATIgUAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAPABIAQAAIAPgBIACAAIAAAQIAAAQIAAARIgPgBgAgNAKIAbAAIAAgdIgbAAg");
		this.shape_5.setTransform(-56.5, -41.5);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#000000").s().p("AAXA5IgWgBQgRgBgHgEIgEgCQgKgFgDABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAFAAIAKgBIgBAKIAAArQAQALAtAAIAIAAIAMgBIAPgCQgDAFgEAIIghgBgAgJAfQAQgFAQgMQgMgLgLgIIAJgGIATARQAGgLADgMIgmAAQABAhgSAXQgGgDgGgCQASgOAAgmIAAgUIgBgHIAAgGQANABARgCQASgCAMgDIAHAMQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEAAIgGAAQgeADgOgBIAAARIAlAAIAPgBQgEAagKAOIASATIgKAIQgEgIgLgLQgKAKgRAKIgLgKgAg0g2IANgDQAEALAGAQIgOADQgDgPgGgMg");
		this.shape_6.setTransform(-70.6, -41.7);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#000000").s().p("AgiAxQAjgGAPgYQALgRABg3IgBgEIAAgCQASACgBACIgBACIgBAHQgEAugIATIAdAaIgLAJIgDgDIAAgBIgFgFIgPgSQgQAWgfALQgFgHgHgEgAg6ApIACgDQAEgEAAgEIAAhFIgBgGIAAgIQAOACABABIgBAEIgCAEIAABFIAQgSIAGgGQABAHAGAFQgTAQgRAVgAgZglIAKgJQANAMALARIgKAIQgNgUgLgIg");
		this.shape_7.setTransform(-84.3, -41.6);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#000000").s().p("AAHAsQATADAAgGIAAhWIg+AAIgbAAIAAgMIAMABIAPAAIBQAAIAUgBIAAANIgUgBIgFAAIAABdQgCAKgYAAQgBgHgFgHgAgtAkIAAgGIABgGIAAgpIAAgGIgBgGIANABIAZAAIANgBIAAAMIAAAjIAAALIgNAAIABgLIgaAAIAAAEQAAAJACAFgAggAHIAbAAIAAgZIgbAAg");
		this.shape_8.setTransform(83.4, -58.2);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#000000").s().p("AgYAyIAAgNIgBgMIAPABIgBACQgCAEAAAFIAAAKQgCAFAMAAIAMAAQARACAAgQQAFAHAJACQgFAKgFADQgDACgMAAIgVAAIgDABQgSAAADgNgAg6A1QAJgJADgSIAOADIgBABIgEAFIgJAXIgMgFgAAeAbIAKgGIAYAbIgNAHQgGgMgPgQgAgEAZIAJgEQAIAJADAJIgLAFQgEgKgFgJgAAEATQgBgGgDgHQAOAEgBgKIAAgVIAAgJIAKAAIAFABIgCACQgCAEAAAFIAAAWQADAPgWAAIgBAAgAgsATIACgTIAAgaIgJANIgEAEQgDgFgFgFQATgPAKgaQAPAGgCABIgBABQgEADgFAIIAAApQgBANACAGgAAegKIAIgHQALAIALALIgKAIQgIgKgMgKgAgZAGQANgJAHgPIAKAGIgBACQgEACgCADIgFAIIgGAHIgMgEgAgagZQASgKANgbQAKAFACACIgBABQgEACgHAJIAeAAIAagBIgLAZIgMgDQAEgFAEgHIguAAIgLANIgEADIgLgHg");
		this.shape_9.setTransform(69.3, -58.5);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#000000").s().p("AAgA+QABgCAAgHIgxAAIgdABIABgHIAAgUIAAgRIAKABIAEABIgBACIgBAGIAAAYIAbAAIAAgrIgeAAIgZABIAAgLQAEACAWgBIAdAAIAAgTIgRAAIgTAAIgHAAIAAgMQABABAZAAIARAAIAAgMIgBgGIAAgFIANACIgBACQgCADABAEIAAAMIARAAQAaAAADgBIAAAMIgJAAIgUAAIgRAAIAAATIAgAAQARABAHgCIAAALIgYgBIggAAIAAArIAcAAIAAgVIAAgFIAAgGIAOACIgBABQgCADABACIAAAXQgBAQACADg");
		this.shape_10.setTransform(55.4, -58.4);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#000000").s().p("Ag+A7QAMgMAEgQQAKADADACIgBACIgEAFIgMAVQgHgEgFgBgAAhAiIAMgEIASAaIgOAGQgFgNgLgPgAgXAlIANgCIAGAZIgOABQgBgMgEgMgAAEAkIANgDIAJAaIgOABQgCgNgGgLgAAjAZIgRgBIgeAAIgUABIgKAAQACgBAAgVIgBgNIgBgIQAJACARgBIAIAAIAAgkIgBgKQAQABgBABIgBACQgCADAAAFIAAAIIAaAAIARAAIAKgCIAAANIgIAAIgTgBIgaAAIAAAQIAOAAIAbgBQgBAFAAAQIgBAOIACAJIgJgBgAgdAOIA8AAIAAgVIg8AAg");
		this.shape_11.setTransform(41.2, -58.4);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#000000").s().p("AAaA+QgRgBgMgCQgSgFgJgFIgHgEQgFABgIAPIgKgIQACgDADgDQAJgIAFgDIAAglIgVABIAAgMQAQACAQgCQgBAEAAAHIAAAmQAQAKATADQAaABAhgDQgEAHgBAHIgOAAIgSAAgAAQArQgBgIgDgFQAMABADgEIABgIIAAgrIgeAAIgUABIAAgMIAUACIAeAAIAAgSIgCgKIAKAAIAFABIgBAEIgBAFIAAASIADAAQAKAAAKgBIAAALIgUgBIgDAAIAAApIgBASQgEAIgQAAIgCAAgAgKgJIALgDIAMAYIgMAFQgFgRgGgJgAg5gwIALgHQALANAIAMIgMAIQgHgOgLgMg");
		this.shape_12.setTransform(27.5, -58.4);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#000000").s().p("AgIA6QgIgBgNgGIgLgDQgFAAgIALIgKgKIASgLIAAgpIgPABIAAgMIAKABIARgBIAAAAIgBARIAAAjQAOAJAWADIAcgBQASAAAQgDQgGAFgBAJIgVAAQgYAAgUgCgAAeAfQAIACADgDIAAgKIgUAAIAAAHIAAAPIgKAAIAAgPIAAgHIgTAAIAAAKQAAAIABAEIgMAAIAAgDIABgIIAAgxIgBgHIAAgCQAAABALgBIARAAQgFgFgFgEIAIgHIAKAKQAHgEAHgIIgiAAIgRAAIAAgLQADABAOAAIArAAQAJAAAHgBQgPASgTALIAUAAQAHABAEgBQgBABABAIIAAASQAAApgCgBQgEAEgNAAQgBgGgDgHgAAVAMIAVAAIAAgLIgVAAgAgIAMIATAAIAAgLIgTAAgAAVgHIAUAAIAAgLIgUAAgAgIgHIATAAIAAgLIgTAAgAg0g1IAKgGIAOAaIgNAGQgFgOgGgMg");
		this.shape_13.setTransform(13.3, -58.5);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#000000").s().p("AgIAMQAIgDAAgIIgJAAIAAgUIATAAIAAAUQgCASgQABg");
		this.shape_14.setTransform(-4.1, -53.7);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("AgpA7IgFgHIABgCQAEgEABgCIAAgbIgFAAIgRABIAAgLIAQABIAGAAIAAgPIgNABIAAgHIgFAGQgCgEgFgEQARgPAIgfQAPADgBABIgBACIgDAFIgDADIgDAIIAHAAQAKAAAIgCIAAAMIgSgBIgLAAIgDADIgHALQACABAJAAIAJAAIARgBIAAAKIgRgBIAAAPIAFAAIAPgBIAAALIgHAAIgIgBIgFAAIAAAZIAQgQIAEALQgZATgDAEIgBACIgCgDgAgOArIAUABIADgpIgKABIgGAAIAAgLIARABIADgjIgNAAIgHACIAAgNQAGABAOAAIAPAAQAQAAALgCIgBADIgBAXIgEBHQAKgBAHgBIAAALIgIAAIgKAAIgnAAIgXABgAAQAsIAVAAIADgpIgTAAgAAWgGIATAAIABgjIgSAAg");
		this.shape_15.setTransform(-14.6, -58.4);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#000000").s().p("AgXAzQAXgCAQgLIgagKIAMgUIgCAAIgQABIAAgKIAQABIAFAAQAFgJADgPQAOAFgBACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDADIgFAKIgBACIAfAAQAJAAAIgBIAAAKIgRgBIgDAAQgEAPgIANIAcAOIgJALQgKgKgPgIQgOANgcAHQgCgHgFgFgAAEAWIANAGIAGADQAHgKADgNIgVAAIgIAOgAg4AxQAMABADgCIAAggQgPAIgEABIgDgMIAWgIIAAgaIgDAAIgJAAIgJAAIAAgLIAJABIAJAAIADAAIAAgUIgCgKQAOABAAABIgBADIgBAEIAAAVIACAAIAGAAIAFgBIAAALIgFAAIgGAAIgCAAIAAAWIANgEIAAAKIgNAFIAAApQAAAHgUACQgBgIgEgFgAgPgPIABgMIAAgDIgBgGIAAgGIANABIAwAAIAIAAIAGgBIgBAGIAAAGIAAACIABANIgMAAIABgQIg1AAIABAQgAALg8IAMgCIAGASIgMABQgDgKgDgHg");
		this.shape_16.setTransform(-28.7, -58.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#000000").s().p("AgRBEQAVgdAAglIAAgDQgDgkgPgeIAgAAIAACHg");
		this.shape_17.setTransform(-43.7, -58.4);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AApA6IAAgHIABgEIhSAAIAAALIgNAAIABgWIAAhKIgBgRIAAgCQAGACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBSAAIAAhSIhSAAgAAKATIgUAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAPABIAQAAIAPgBIACAAIAAAQIAAAQIAAARIgPgBgAgNAKIAbAAIAAgdIgbAAg");
		this.shape_18.setTransform(-56.5, -58.3);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#000000").s().p("AAXA5IgWgBQgRgBgHgEIgEgCQgKgFgDABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAFAAIAKgBIgBAKIAAArQAQALAtAAIAIAAIAMgBIAPgCQgDAFgEAIIghgBgAgJAfQAQgFAQgMQgMgLgLgIIAJgGIATARQAGgLADgMIgmAAQABAhgSAXQgGgDgGgCQASgOAAgmIAAgUIgBgHIAAgGQANABARgCQASgCAMgDIAHAMQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEAAIgGAAQgeADgOgBIAAARIAlAAIAPgBQgEAagKAOIASATIgKAIQgEgIgLgLQgKAKgRAKIgLgKgAg0g2IANgDQAEALAGAQIgOADQgDgPgGgMg");
		this.shape_19.setTransform(-70.6, -58.4);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#000000").s().p("AgQBEIAAiHIAfAAQgQAegDAkIAAADQABAlAVAdg");
		this.shape_20.setTransform(-83.5, -58.4);

		this.instance = new lib.shuomingBg("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(-97, -74.2);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: []
		// }).to({
		// 	state: [{
		// 		t: this.instance
		// 	}, {
		// 		t: this.shape_20
		// 	}, {
		// 		t: this.shape_19
		// 	}, {
		// 		t: this.shape_18
		// 	}, {
		// 		t: this.shape_17
		// 	}, {
		// 		t: this.shape_16
		// 	}, {
		// 		t: this.shape_15
		// 	}, {
		// 		t: this.shape_14
		// 	}, {
		// 		t: this.shape_13
		// 	}, {
		// 		t: this.shape_12
		// 	}, {
		// 		t: this.shape_11
		// 	}, {
		// 		t: this.shape_10
		// 	}, {
		// 		t: this.shape_9
		// 	}, {
		// 		t: this.shape_8
		// 	}, {
		// 		t: this.shape_7
		// 	}, {
		// 		t: this.shape_6
		// 	}, {
		// 		t: this.shape_5
		// 	}, {
		// 		t: this.shape_4
		// 	}, {
		// 		t: this.shape_3
		// 	}, {
		// 		t: this.shape_2
		// 	}, {
		// 		t: this.shape_1
		// 	}, {
		// 		t: this.shape
		// 	}]
		// }, 1).to({
		// 	state: []
		// }, 2).wait(1));

		// 图层 1
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#333F48").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#5E7485").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#5E7485").s().p("AjLDLQhUhUAAh3QAAh1BUhWQBWhUB1AAQB3AABUBUQBVBWAAB1QAAB3hVBUQhUBVh3AAQh1AAhWhVg");

		// 爆炸图的返回
		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_21
			}]
		}).to({
			state: [{
				t: this.shape_22
			}]
		}, 1).to({
			state: [{
				t: this.shape_23
			}]
		}, 2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-17, -17, 34, 34);


	(lib.page2_b = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_50 = function () {
			this.stop();
		}
		this.frame_107 = function () {
			this.stop();

			if (modelAction) modelAction.dispatchEvent("complete");
		}

		// actions tween:
		// 爆炸图停止
		this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(57).call(this.frame_107).wait(1));

		// 图层 7
		this.btn5 = new lib.btn();
		this.btn5.parent = this;
		this.btn5.setTransform(881.6, 327.8, 0.604, 1);
		new cjs.ButtonHelper(this.btn5, 0, 1, 2, false, new lib.btn(), 3);

		this.btn4 = new lib.btn();
		this.btn4.parent = this;
		this.btn4.setTransform(766, 327.8, 0.604, 1);
		new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.btn(), 3);

		this.btn3 = new lib.btn();
		this.btn3.parent = this;
		this.btn3.setTransform(652.2, 327.8, 0.604, 1);
		new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.btn(), 3);

		this.btn2 = new lib.btn();
		this.btn2.parent = this;
		this.btn2.setTransform(535, 327.8, 0.604, 1);
		new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn(), 3);

		this.btn1 = new lib.btn();
		this.btn1.parent = this;
		this.btn1.setTransform(419.5, 327.8, 0.604, 1);
		new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btn(), 3);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: []
		// }).to({
		// 	state: [{
		// 		t: this.btn1
		// 	}, {
		// 		t: this.btn2
		// 	}, {
		// 		t: this.btn3
		// 	}, {
		// 		t: this.btn4
		// 	}, {
		// 		t: this.btn5
		// 	}]
		// }, 45).to({
		// 	state: []
		// }, 10).wait(53));

		// 图层 6
		this.instance = new lib.tabMC();
		this.instance.parent = this;
		this.instance.setTransform(916.6, 375.8, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.instance_1 = new lib.tabMC();
		this.instance_1.parent = this;
		this.instance_1.setTransform(801.1, 375.8, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.instance_2 = new lib.tabMC();
		this.instance_2.parent = this;
		this.instance_2.setTransform(685.6, 375.8, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.instance_3 = new lib.tabMC();
		this.instance_3.parent = this;
		this.instance_3.setTransform(570.1, 375.8, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.instance_4 = new lib.tabMC();
		this.instance_4.parent = this;
		this.instance_4.setTransform(454.6, 375.8, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#858C91").s().p("AAGBIIAAgYIgXAAIAAgQQgGAIgGAIIgLgRIAAApIgRAAIAAhBIgLAQIgEgbQALgVANguIATAFQgFASgGARIAAA7QAYgZALggIgbAAIAAgSIAmAAIAAgYIATAAIAAAYIAqAAIAAASIggAAQAMAeAaAYIgNAVIgLgOIAAAQIgYAAIAAAYgAAZAdIAWAAQgNgUgJgdgAgPAdIAVAAIAAgyQgHAcgOAWg");
		this.shape.setTransform(918.1, 148.2);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#858C91").s().p("AhHA1QATgEAHgHQAIgIAAgOIAAgJIBFAAIAAAiQAAAGAGABIAGAAQAEgBACgDQABgDACgTIASAHIgDAUQgCAIgFAEQgGADgJABIgRAAQgSgBAAgRIAAgXIgdAAQgBAggoAMIgMgTgAAwASIAAgOIhiAAIAAAOIgUAAIAAgdICKAAIAAAdgAg7gTIAAgRIAwAAIAAgIIg7AAIAAgRIA7AAIAAgLIATAAIAAALIA8AAIAAARIg8AAIAAAIIAwAAIAAARg");
		this.shape_1.setTransform(903.2, 148.2);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#858C91").s().p("AAQAzIAUABQAJAAAAgKIAAhJIAUAAIAABQQgBAKgEAGQgEAFgIABIgcABIgEgVgAgiA0IANABQAHAAAAgIIAAgFIgdAAIAAAgIgUAAIAAhlIBEAAIAABQQABAJgFAGQgDAEgJABIgTABIgEgUgAgrAYIAdAAIAAgKIgdAAgAgrgBIAdAAIAAgLIgdAAgAAPAqIAAhFIATAAIAABFgAhHgmIAAgRIAeAAIgHgKIAXgGIALAQIAcAAIALgQIAXAGIgIAKIAhAAIAAARg");
		this.shape_2.setTransform(888.1, 148.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#858C91").s().p("AgNA5QAQgMANgPQgFgWgCgmIgyAAIAAASIApAAIAAAYQgBAXgDAGQgDAFgFAEQgEADgVgBIgDgVIALABQAIAAABgIIABgUIgWAAQAAAugOAWQgIgHgJgHQAMgUAAglIAAgwIBEAAIgBgYIAVAAIAAAYIAUAAIgMgQIAPgIIAPASIgLAGIAQAAIAAARIgqAAQAAAXADAQQAJgOAIgSIASAJQgNAbgQAWQAFAOAFAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIACgKIABgPIATAJQAAAIgEANQgDANgFADQgFAEgGAAQgQAAgKgUQgLALgLAJQgGgIgJgHg");
		this.shape_3.setTransform(803.7, 182.8);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#858C91").s().p("AgQBIQgWAAAAgWIAAgfIATAAIAAAaQAAAIAKAAIAVAAQAFAAADgCQADgCABgEIACgMIATAKQgFAVgHAEQgHAEgKAAgAhIA4QAIgRAFgTIATAHIgOAlgAApAcIASgHIAOAjIgTAHQgGgTgHgQgAgNATIAJgHIgxAAIAAg6IAYAAIgKgSIASgHIAOAVIgKAEIAYAAIAQgYIAWAFIgPATIAYAAIAAA6IgzAAIASARIgPANIgTgXgAgfgFIBAAAIAAgXIhAAAg");
		this.shape_4.setTransform(788.7, 182.6);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		this.shape_5.setTransform(773.7, 183.1);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#858C91").s().p("AAjBIIAAgHIhFAAIAAAHIgTAAIAAhDIBrAAIAABDgAgiAuIBFAAIAAgWIhFAAgAhIgVQAugYASgbIAaAAIgFAHQAUAZAoASIgNARIgSgKIAAAIIhTAAIAAgJIgSAMQgGgKgHgHgAgagaIA0AAQgPgLgLgOQgJANgRAMg");
		this.shape_6.setTransform(758.7, 182.9);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAEgJIgvAAIAAgrIATAAIAAAeIBEAAIgcgMIggALIgGgMIAVgGIgTgHIAHgKIAdALQANgFAKgGIhgAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAKAAIAAgeIASAAIAAArIg0AAIgFAJIA/AAIAAAnQgBAJgDAFQgDAEgGABQgGABgXgBIgDgPIAHAAIgEgFQgpABgPADIgHgOQAGgCAIgMIgSAAIAAAtgAArAxIgKAIQAJAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgYIgVAAIATAWgAgOAnIAcgBIgHgHIAGgEIgTAAIgIAMg");
		this.shape_7.setTransform(743.7, 182.8);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_8.setTransform(666.3, 148.2);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#858C91").s().p("AAXAzIATABQAJAAAAgJIAAgLIgMAPIgTgRQgGALgNAKIgKgLIAAAfIgTAAIAAhOIAmAAIABgJIggAAIAAgxIBUAAIAAAxIgiAAIAAAJIApAAIAAA5QAAAJgEAGQgFAFgLAAIgXABIgEgUgAgJAjQAPgMADgNIgSAAgAAbAOIAYARIAAgVIgXAAIgBAEgAgCghIAuAAIAAgPIguAAgAhDBBIAQg4QAKAEAJACIgQA4gAhFgSIAMgOIAbAWIgOAOIgZgWgAhAg5IAMgNQASANAHAHIgNAOIgYgVg");
		this.shape_9.setTransform(651, 148.2);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		this.shape_10.setTransform(568.1, 208.4);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#858C91").s().p("AAiBIIAAgGIhDAAIAAAGIgVAAIAAhDIBtAAIAABDgAghAuIBDAAIAAgWIhDAAgAhIgVQAtgYASgbIAcAAIgGAHQAVAZAnASIgOARIgSgKIAAAIIhRAAIAAgJIgTAMQgGgJgHgIgAgbgaIA1AAQgOgKgMgOQgJAMgSAMg");
		this.shape_11.setTransform(553.1, 208.2);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAEgJIgvAAIAAgrIATAAIAAAeIBEAAIgcgMIggALIgGgMIAWgGIgTgHIAGgKIAdALQANgFAKgGIhgAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAJAAIAAgeIATAAIAAArIg0AAIgFAJIA/AAIAAAnQAAAJgEAFQgDAEgGABQgGABgXgBIgDgPIAHAAIgEgFQgpABgPADIgHgOQAGgCAJgMIgTAAIAAAtgAArAxIgLAIQAKAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAAgYIgXAAIAUAWgAgOAnIAbgBIgGgHIAGgEIgTAAIgIAMg");
		this.shape_12.setTransform(598.1, 187.3);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#858C91").s().p("AAKBIIgGgVIATAAIAOgBQAEgBACgDQACgDAAgFIAAhEIhZAAIAABlIgVAAIAAh5IAsAAIAFgVIAVAEIgFARIBCAAIAABeQAAANgHAIQgGAGgNABIgeAAgAggAvIAAhBIBBAAIAAA4IgtAAIAAAJgAgMATIAZAAIAAgTIgZAAg");
		this.shape_13.setTransform(583.1, 187.2);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#858C91").s().p("AgJBIIAAgVIg/AAIAAgSIA/AAIAAgKIgzAAIAAhIIAbAAIgLgOIASgIIAQASIgKAEIAcAAIARgXIAVAJIgMAOIAbAAIAABIIgzAAIAAAKIA+AAIAAASIg+AAIAAAVgAAKAGIAgAAIAAgMIggAAgAgoAGIAfAAIAAgMIgfAAgAAKgUIAgAAIAAgMIggAAgAgogUIAfAAIAAgMIgfAAg");
		this.shape_14.setTransform(568.1, 187.3);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#858C91").s().p("AhIA1QAgglAAg9IAAgDIgYAAIAAgUIBuAAIAAAPIgOAZIAdAAIAAAPQgLAYgSAUQASAKAXAFIgMAVQgagHgUgPQgSAPgZAIIgOgRQgFAJgHAJIgSgQgAgqAyQAYgJARgKQgNgPgJgRQgFAbgOAYgAgTgmQAPAlATASQANgMAHgPIgaAAIAAgSIAMgUIgoAAIAAAKg");
		this.shape_15.setTransform(553, 187.8);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_16.setTransform(538.1, 187.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#858C91").s().p("AgGAxIAVABQALABAAgMIAAgHIgzAAIAOANIgOAMIgVgUIAEgFIgeAAIAAgSIBiAAIAAgGIAVAAIAAAGIAaAAIAAASIgaAAIAAANQAAAKgFAHQgGAFgKABIgbABIgFgUgAgeAEQgcAAAAgYIAAgwIBuAAIAAAsIhZAAIAAACQAAAKALAAIBAAAQAHAAADgCQADgCABgEIACgOIASAFQgCAQgCAFQgCAFgDADQgEACgFABIgMABgAglgoIBFAAIAAgLIhFAAg");
		this.shape_17.setTransform(523.1, 187.5);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_18.setTransform(453.2, 148.2);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
		this.shape_19.setTransform(438.1, 148.4);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f().s("#333F48").ss(1, 1, 1).p("APxi1IAAGVEAj3gHZIAAKEAiRnvIAAJIAyRBNIAAG8Egj2gIIIAAG9");
		this.shape_20.setTransform(676.1, 211.6);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#333F48").s().p("AyuD9IAeAAIAdAAIgdBbgAPVgrIAdAAIAdAAIgcBagEAjbgBgIAdAAIAdAAIgcBbgAiviyIAfAAIAcAAIgdBbgEgkVgFXIAgAAIAbAAIgcBbg");
		this.shape_21.setTransform(676, 238.3);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: []
		// }).to({
		// 	state: [{
		// 		t: this.shape_21
		// 	}, {
		// 		t: this.shape_20
		// 	}, {
		// 		t: this.shape_19
		// 	}, {
		// 		t: this.shape_18
		// 	}, {
		// 		t: this.shape_17
		// 	}, {
		// 		t: this.shape_16
		// 	}, {
		// 		t: this.shape_15
		// 	}, {
		// 		t: this.shape_14
		// 	}, {
		// 		t: this.shape_13
		// 	}, {
		// 		t: this.shape_12
		// 	}, {
		// 		t: this.shape_11
		// 	}, {
		// 		t: this.shape_10
		// 	}, {
		// 		t: this.shape_9
		// 	}, {
		// 		t: this.shape_8
		// 	}, {
		// 		t: this.shape_7
		// 	}, {
		// 		t: this.shape_6
		// 	}, {
		// 		t: this.shape_5
		// 	}, {
		// 		t: this.shape_4
		// 	}, {
		// 		t: this.shape_3
		// 	}, {
		// 		t: this.shape_2
		// 	}, {
		// 		t: this.shape_1
		// 	}, {
		// 		t: this.shape
		// 	}, {
		// 		t: this.instance_4
		// 	}, {
		// 		t: this.instance_3
		// 	}, {
		// 		t: this.instance_2
		// 	}, {
		// 		t: this.instance_1
		// 	}, {
		// 		t: this.instance
		// 	}]
		// }, 45).to({
		// 	state: []
		// }, 10).wait(53));

		// 图层 4
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#333F48").s().p("ABTB8IAAgKIgqAAIAAAJIgfAAIAAhVIA3AAQgsgKgVgWQgRAWg1AKIA8AAIAABWIgeAAIAAgKIgqAAIAAAKIgeAAIAAhRIgMABQgCgMgEgPQBSgCARgTIhgAAIAAgbIBsAAIACgNIAjAAIgBANIAjAAIgDgKIAhgFIAGAPIAoAAIAAAbIhoAAQAcAUBPACIgHAbIgLgBIAABQgAApBXIAqAAIAAgWIgqAAgAhSBXIAqAAIAAgWIgqAAgAALgwIAAhLIBmAAIAABLgAAqhLIAnAAIAAgVIgnAAgAhwgwIAAhLIBmAAIAABLgAhRhLIAoAAIAAgVIgoAAg");
		this.shape_22.setTransform(259.1, 62);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#333F48").s().p("AiCBhQAlggAIg0IgrAAIAAggIAtAAIAAgqIgGAAQgJAVgMATQgKgQgLgOQAUgjAJgsIAhAGIgIAeIA1AAIAAAhIgaAAIAAAqIAgAAIAAAgIgiAAIgCAPIAqA2IAAjIICOAAIAAAhIhsAAIAAAkIBkAAIAABlIhkAAIAAAlIBuAAIAAAhIiQAAIAAgiIgYAUIgcgrQgPAlgeAdQgLgTgKgPgAAWAUIBBAAIAAglIhBAAg");
		this.shape_23.setTransform(231.7, 61.5);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
		this.shape_24.setTransform(204.5, 61.6);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#333F48").s().p("Ah8BhQBRgwADhbIhGAAIAAgjIBHAAIABg1IAoAAIgBA1IB8AAIgCBNQgBAqgCAaQgCAbgOAOQgNAOgYABIg6AAQgEgXgEgSQAVACAbAAQAOAAAHgFQAGgFADgIQACgIACgeIAChHIhWAAQgCBuhbA/QgNgRgRgRg");
		this.shape_25.setTransform(176.4, 61.7);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#333F48").s().p("AgTBoIAAAbIghAAIAAhvIgSAcIgDgNQgLAogMA2IgigMQANgqAMg8IAeANIgHgUQAfgpAMgmIgaAAIAAggIBRAAIgJgUIAngIIANAcIBFAAIAAAgIhoAAIAdAHIgFAOIBJAAIAAAcQgJA1ggAnQAWAPAfAKIgUAjQgkgQgWgTQgVASghATQgKgPgKgNgAgTBlQAfgRATgOQgNgSgLgXIgNAUIgNgegAAagDQAMAdARAWQAageAFglIg0AAIgIAQgAgEhDIgPAfIAAAuQAZglAQgsIgqAAgAAigIIAWgLIASAgIgWALIgSgggAiEgeIAXgbIAnAhIgZAcQgSgSgTgQgAiChmIAWgZQAUAQATARIgYAbIglgjg");
		this.shape_26.setTransform(150, 61.6);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: [{
		// 		t: this.shape_26
		// 	}, {
		// 		t: this.shape_25
		// 	}, {
		// 		t: this.shape_24
		// 	}, {
		// 		t: this.shape_23
		// 	}, {
		// 		t: this.shape_22
		// 	}]
		// }).wait(108));

		// 图层 3
		this.instance_5 = new lib.model2MC("synched", 0, false);
		this.instance_5.parent = this;
		this.instance_5.setTransform(155.2, 74.5);
		// 不能删
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108));

		// 图层 2
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AA4BjIAAgiIgrgrIgIAAIAAAiIAQAAIAAArIgqAAIAAgrIAPAAIAAgiIgIAAIgoAqIAAAjIgsAAIAAgrIAjAAIAqgqIAAgJIghAAIAAARIgsAAIAAgqIAsAAIAAAQIAhAAIAAgHIgsgrIghAAIAAgsIAsAAIAAAkIAqAqIAGAAIAAgiIgPAAIAAgsIAqAAIAAAsIgQAAIAAAiIAIAAIArgrIAAgjIArAAIAAAsIghAAIgtAqIAAAIIAjAAIAAgQIArAAIAAAqIgrAAIAAgRIgjAAIAAAKIAqApIAkAAIAAArg");
		this.shape_27.setTransform(1253.1, 681.5);

		this.backBtn = new lib.mlBtn();
		this.backBtn.parent = this;
		this.backBtn.setTransform(1253.3, 681.7);
		new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.mlBtn(), 3);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.backBtn
			}, {
				t: this.shape_27
			}]
		}).wait(108));
		
		// 图层 1
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F2F6F8").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
		this.shape_28.setTransform(0.2, 384, 1, 1, 0, 0, 0, -682.8, 0);

		this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(108));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1366, 768);


	// stage content:
	(lib._3d1_0 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(622.7, -550.7, 1366, 768);
	// library properties:
	lib.properties = {
		width: 1366,
		height: 768,
		fps: 24,
		color: "#F1F9F7",
		opacity: 1.00,
		webfonts: {},
		manifest: [{
				src: "images/3d1_0/ylbjq_bzt_zk0000.jpg",
				id: "ylbjq_bzt_zk0000"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0001.jpg",
				id: "ylbjq_bzt_zk0001"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0002.jpg",
				id: "ylbjq_bzt_zk0002"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0003.jpg",
				id: "ylbjq_bzt_zk0003"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0004.jpg",
				id: "ylbjq_bzt_zk0004"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0005.jpg",
				id: "ylbjq_bzt_zk0005"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0006.jpg",
				id: "ylbjq_bzt_zk0006"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0007.jpg",
				id: "ylbjq_bzt_zk0007"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0008.jpg",
				id: "ylbjq_bzt_zk0008"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0009.jpg",
				id: "ylbjq_bzt_zk0009"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0010.jpg",
				id: "ylbjq_bzt_zk0010"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0011.jpg",
				id: "ylbjq_bzt_zk0011"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0012.jpg",
				id: "ylbjq_bzt_zk0012"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0013.jpg",
				id: "ylbjq_bzt_zk0013"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0014.jpg",
				id: "ylbjq_bzt_zk0014"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0015.jpg",
				id: "ylbjq_bzt_zk0015"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0016.jpg",
				id: "ylbjq_bzt_zk0016"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0017.jpg",
				id: "ylbjq_bzt_zk0017"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0018.jpg",
				id: "ylbjq_bzt_zk0018"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0019.jpg",
				id: "ylbjq_bzt_zk0019"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0020.jpg",
				id: "ylbjq_bzt_zk0020"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0021.jpg",
				id: "ylbjq_bzt_zk0021"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0022.jpg",
				id: "ylbjq_bzt_zk0022"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0023.jpg",
				id: "ylbjq_bzt_zk0023"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0024.jpg",
				id: "ylbjq_bzt_zk0024"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0025.jpg",
				id: "ylbjq_bzt_zk0025"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0026.jpg",
				id: "ylbjq_bzt_zk0026"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0027.jpg",
				id: "ylbjq_bzt_zk0027"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0028.jpg",
				id: "ylbjq_bzt_zk0028"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0029.jpg",
				id: "ylbjq_bzt_zk0029"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0030.jpg",
				id: "ylbjq_bzt_zk0030"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0031.jpg",
				id: "ylbjq_bzt_zk0031"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0032.jpg",
				id: "ylbjq_bzt_zk0032"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0033.jpg",
				id: "ylbjq_bzt_zk0033"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0034.jpg",
				id: "ylbjq_bzt_zk0034"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0035.jpg",
				id: "ylbjq_bzt_zk0035"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0036.jpg",
				id: "ylbjq_bzt_zk0036"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0037.jpg",
				id: "ylbjq_bzt_zk0037"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0038.jpg",
				id: "ylbjq_bzt_zk0038"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0039.jpg",
				id: "ylbjq_bzt_zk0039"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0040.jpg",
				id: "ylbjq_bzt_zk0040"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0041.jpg",
				id: "ylbjq_bzt_zk0041"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0042.jpg",
				id: "ylbjq_bzt_zk0042"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0043.jpg",
				id: "ylbjq_bzt_zk0043"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0044.jpg",
				id: "ylbjq_bzt_zk0044"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0045.jpg",
				id: "ylbjq_bzt_zk0045"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0046.jpg",
				id: "ylbjq_bzt_zk0046"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0047.jpg",
				id: "ylbjq_bzt_zk0047"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0048.jpg",
				id: "ylbjq_bzt_zk0048"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0049.jpg",
				id: "ylbjq_bzt_zk0049"
			},
			{
				src: "images/3d1_0/ylbjq_bzt_zk0050.jpg",
				id: "ylbjq_bzt_zk0050"
			}
		],
		preloads: []
	};




})(lib3d1_0 = lib3d1_0 || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib3d1_0, images, createjs, ss, AdobeAn;