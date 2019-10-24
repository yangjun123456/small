(function (lib, img, cjs, ss, an) {

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



	(lib.ylbjq_zz_00000 = function () {
		this.initialize(img.ylbjq_zz_00000);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00001 = function () {
		this.initialize(img.ylbjq_zz_00001);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00002 = function () {
		this.initialize(img.ylbjq_zz_00002);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00003 = function () {
		this.initialize(img.ylbjq_zz_00003);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00004 = function () {
		this.initialize(img.ylbjq_zz_00004);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00005 = function () {
		this.initialize(img.ylbjq_zz_00005);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00006 = function () {
		this.initialize(img.ylbjq_zz_00006);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00007 = function () {
		this.initialize(img.ylbjq_zz_00007);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00008 = function () {
		this.initialize(img.ylbjq_zz_00008);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00009 = function () {
		this.initialize(img.ylbjq_zz_00009);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00010 = function () {
		this.initialize(img.ylbjq_zz_00010);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00011 = function () {
		this.initialize(img.ylbjq_zz_00011);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00012 = function () {
		this.initialize(img.ylbjq_zz_00012);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00013 = function () {
		this.initialize(img.ylbjq_zz_00013);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00014 = function () {
		this.initialize(img.ylbjq_zz_00014);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00015 = function () {
		this.initialize(img.ylbjq_zz_00015);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00016 = function () {
		this.initialize(img.ylbjq_zz_00016);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00017 = function () {
		this.initialize(img.ylbjq_zz_00017);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00018 = function () {
		this.initialize(img.ylbjq_zz_00018);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00019 = function () {
		this.initialize(img.ylbjq_zz_00019);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00020 = function () {
		this.initialize(img.ylbjq_zz_00020);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00021 = function () {
		this.initialize(img.ylbjq_zz_00021);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00022 = function () {
		this.initialize(img.ylbjq_zz_00022);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00023 = function () {
		this.initialize(img.ylbjq_zz_00023);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00024 = function () {
		this.initialize(img.ylbjq_zz_00024);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00025 = function () {
		this.initialize(img.ylbjq_zz_00025);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00026 = function () {
		this.initialize(img.ylbjq_zz_00026);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00027 = function () {
		this.initialize(img.ylbjq_zz_00027);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00028 = function () {
		this.initialize(img.ylbjq_zz_00028);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00029 = function () {
		this.initialize(img.ylbjq_zz_00029);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00030 = function () {
		this.initialize(img.ylbjq_zz_00030);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00031 = function () {
		this.initialize(img.ylbjq_zz_00031);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00032 = function () {
		this.initialize(img.ylbjq_zz_00032);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00033 = function () {
		this.initialize(img.ylbjq_zz_00033);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00034 = function () {
		this.initialize(img.ylbjq_zz_00034);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00035 = function () {
		this.initialize(img.ylbjq_zz_00035);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00036 = function () {
		this.initialize(img.ylbjq_zz_00036);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00037 = function () {
		this.initialize(img.ylbjq_zz_00037);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00038 = function () {
		this.initialize(img.ylbjq_zz_00038);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00039 = function () {
		this.initialize(img.ylbjq_zz_00039);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00040 = function () {
		this.initialize(img.ylbjq_zz_00040);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00041 = function () {
		this.initialize(img.ylbjq_zz_00041);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00042 = function () {
		this.initialize(img.ylbjq_zz_00042);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00043 = function () {
		this.initialize(img.ylbjq_zz_00043);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00044 = function () {
		this.initialize(img.ylbjq_zz_00044);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00045 = function () {
		this.initialize(img.ylbjq_zz_00045);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00046 = function () {
		this.initialize(img.ylbjq_zz_00046);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00047 = function () {
		this.initialize(img.ylbjq_zz_00047);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00048 = function () {
		this.initialize(img.ylbjq_zz_00048);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00049 = function () {
		this.initialize(img.ylbjq_zz_00049);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00050 = function () {
		this.initialize(img.ylbjq_zz_00050);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00051 = function () {
		this.initialize(img.ylbjq_zz_00051);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00052 = function () {
		this.initialize(img.ylbjq_zz_00052);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00053 = function () {
		this.initialize(img.ylbjq_zz_00053);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00054 = function () {
		this.initialize(img.ylbjq_zz_00054);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00055 = function () {
		this.initialize(img.ylbjq_zz_00055);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00056 = function () {
		this.initialize(img.ylbjq_zz_00056);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00057 = function () {
		this.initialize(img.ylbjq_zz_00057);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00058 = function () {
		this.initialize(img.ylbjq_zz_00058);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00059 = function () {
		this.initialize(img.ylbjq_zz_00059);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00060 = function () {
		this.initialize(img.ylbjq_zz_00060);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00061 = function () {
		this.initialize(img.ylbjq_zz_00061);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00062 = function () {
		this.initialize(img.ylbjq_zz_00062);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00063 = function () {
		this.initialize(img.ylbjq_zz_00063);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00064 = function () {
		this.initialize(img.ylbjq_zz_00064);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00065 = function () {
		this.initialize(img.ylbjq_zz_00065);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00066 = function () {
		this.initialize(img.ylbjq_zz_00066);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00067 = function () {
		this.initialize(img.ylbjq_zz_00067);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00068 = function () {
		this.initialize(img.ylbjq_zz_00068);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00069 = function () {
		this.initialize(img.ylbjq_zz_00069);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00070 = function () {
		this.initialize(img.ylbjq_zz_00070);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00071 = function () {
		this.initialize(img.ylbjq_zz_00071);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00072 = function () {
		this.initialize(img.ylbjq_zz_00072);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00073 = function () {
		this.initialize(img.ylbjq_zz_00073);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00074 = function () {
		this.initialize(img.ylbjq_zz_00074);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00075 = function () {
		this.initialize(img.ylbjq_zz_00075);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00076 = function () {
		this.initialize(img.ylbjq_zz_00076);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00077 = function () {
		this.initialize(img.ylbjq_zz_00077);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00078 = function () {
		this.initialize(img.ylbjq_zz_00078);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00079 = function () {
		this.initialize(img.ylbjq_zz_00079);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00080 = function () {
		this.initialize(img.ylbjq_zz_00080);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00081 = function () {
		this.initialize(img.ylbjq_zz_00081);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00082 = function () {
		this.initialize(img.ylbjq_zz_00082);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00083 = function () {
		this.initialize(img.ylbjq_zz_00083);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00084 = function () {
		this.initialize(img.ylbjq_zz_00084);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00085 = function () {
		this.initialize(img.ylbjq_zz_00085);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00086 = function () {
		this.initialize(img.ylbjq_zz_00086);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00087 = function () {
		this.initialize(img.ylbjq_zz_00087);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00088 = function () {
		this.initialize(img.ylbjq_zz_00088);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00089 = function () {
		this.initialize(img.ylbjq_zz_00089);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00090 = function () {
		this.initialize(img.ylbjq_zz_00090);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00091 = function () {
		this.initialize(img.ylbjq_zz_00091);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00092 = function () {
		this.initialize(img.ylbjq_zz_00092);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00093 = function () {
		this.initialize(img.ylbjq_zz_00093);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00094 = function () {
		this.initialize(img.ylbjq_zz_00094);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00095 = function () {
		this.initialize(img.ylbjq_zz_00095);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00096 = function () {
		this.initialize(img.ylbjq_zz_00096);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00097 = function () {
		this.initialize(img.ylbjq_zz_00097);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00098 = function () {
		this.initialize(img.ylbjq_zz_00098);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00099 = function () {
		this.initialize(img.ylbjq_zz_00099);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00100 = function () {
		this.initialize(img.ylbjq_zz_00100);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00101 = function () {
		this.initialize(img.ylbjq_zz_00101);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00102 = function () {
		this.initialize(img.ylbjq_zz_00102);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00103 = function () {
		this.initialize(img.ylbjq_zz_00103);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00104 = function () {
		this.initialize(img.ylbjq_zz_00104);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00105 = function () {
		this.initialize(img.ylbjq_zz_00105);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00106 = function () {
		this.initialize(img.ylbjq_zz_00106);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00107 = function () {
		this.initialize(img.ylbjq_zz_00107);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00108 = function () {
		this.initialize(img.ylbjq_zz_00108);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00109 = function () {
		this.initialize(img.ylbjq_zz_00109);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00110 = function () {
		this.initialize(img.ylbjq_zz_00110);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00111 = function () {
		this.initialize(img.ylbjq_zz_00111);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00112 = function () {
		this.initialize(img.ylbjq_zz_00112);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00113 = function () {
		this.initialize(img.ylbjq_zz_00113);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00114 = function () {
		this.initialize(img.ylbjq_zz_00114);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00115 = function () {
		this.initialize(img.ylbjq_zz_00115);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00116 = function () {
		this.initialize(img.ylbjq_zz_00116);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00117 = function () {
		this.initialize(img.ylbjq_zz_00117);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00118 = function () {
		this.initialize(img.ylbjq_zz_00118);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00119 = function () {
		this.initialize(img.ylbjq_zz_00119);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00120 = function () {
		this.initialize(img.ylbjq_zz_00120);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00121 = function () {
		this.initialize(img.ylbjq_zz_00121);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00122 = function () {
		this.initialize(img.ylbjq_zz_00122);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00123 = function () {
		this.initialize(img.ylbjq_zz_00123);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00124 = function () {
		this.initialize(img.ylbjq_zz_00124);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00125 = function () {
		this.initialize(img.ylbjq_zz_00125);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00126 = function () {
		this.initialize(img.ylbjq_zz_00126);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00127 = function () {
		this.initialize(img.ylbjq_zz_00127);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00128 = function () {
		this.initialize(img.ylbjq_zz_00128);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00129 = function () {
		this.initialize(img.ylbjq_zz_00129);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00130 = function () {
		this.initialize(img.ylbjq_zz_00130);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00131 = function () {
		this.initialize(img.ylbjq_zz_00131);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00132 = function () {
		this.initialize(img.ylbjq_zz_00132);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00133 = function () {
		this.initialize(img.ylbjq_zz_00133);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00134 = function () {
		this.initialize(img.ylbjq_zz_00134);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00135 = function () {
		this.initialize(img.ylbjq_zz_00135);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00136 = function () {
		this.initialize(img.ylbjq_zz_00136);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00137 = function () {
		this.initialize(img.ylbjq_zz_00137);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00138 = function () {
		this.initialize(img.ylbjq_zz_00138);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00139 = function () {
		this.initialize(img.ylbjq_zz_00139);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00140 = function () {
		this.initialize(img.ylbjq_zz_00140);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00141 = function () {
		this.initialize(img.ylbjq_zz_00141);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00142 = function () {
		this.initialize(img.ylbjq_zz_00142);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00143 = function () {
		this.initialize(img.ylbjq_zz_00143);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00144 = function () {
		this.initialize(img.ylbjq_zz_00144);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00145 = function () {
		this.initialize(img.ylbjq_zz_00145);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00146 = function () {
		this.initialize(img.ylbjq_zz_00146);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00147 = function () {
		this.initialize(img.ylbjq_zz_00147);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00148 = function () {
		this.initialize(img.ylbjq_zz_00148);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00149 = function () {
		this.initialize(img.ylbjq_zz_00149);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00150 = function () {
		this.initialize(img.ylbjq_zz_00150);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00151 = function () {
		this.initialize(img.ylbjq_zz_00151);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00152 = function () {
		this.initialize(img.ylbjq_zz_00152);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00153 = function () {
		this.initialize(img.ylbjq_zz_00153);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00154 = function () {
		this.initialize(img.ylbjq_zz_00154);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00155 = function () {
		this.initialize(img.ylbjq_zz_00155);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00156 = function () {
		this.initialize(img.ylbjq_zz_00156);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00157 = function () {
		this.initialize(img.ylbjq_zz_00157);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00158 = function () {
		this.initialize(img.ylbjq_zz_00158);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00159 = function () {
		this.initialize(img.ylbjq_zz_00159);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00160 = function () {
		this.initialize(img.ylbjq_zz_00160);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00161 = function () {
		this.initialize(img.ylbjq_zz_00161);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00162 = function () {
		this.initialize(img.ylbjq_zz_00162);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00163 = function () {
		this.initialize(img.ylbjq_zz_00163);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00164 = function () {
		this.initialize(img.ylbjq_zz_00164);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00165 = function () {
		this.initialize(img.ylbjq_zz_00165);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00166 = function () {
		this.initialize(img.ylbjq_zz_00166);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00167 = function () {
		this.initialize(img.ylbjq_zz_00167);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00168 = function () {
		this.initialize(img.ylbjq_zz_00168);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00169 = function () {
		this.initialize(img.ylbjq_zz_00169);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00170 = function () {
		this.initialize(img.ylbjq_zz_00170);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00171 = function () {
		this.initialize(img.ylbjq_zz_00171);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00172 = function () {
		this.initialize(img.ylbjq_zz_00172);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00173 = function () {
		this.initialize(img.ylbjq_zz_00173);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00174 = function () {
		this.initialize(img.ylbjq_zz_00174);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00175 = function () {
		this.initialize(img.ylbjq_zz_00175);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00176 = function () {
		this.initialize(img.ylbjq_zz_00176);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00177 = function () {
		this.initialize(img.ylbjq_zz_00177);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00178 = function () {
		this.initialize(img.ylbjq_zz_00178);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00179 = function () {
		this.initialize(img.ylbjq_zz_00179);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00180 = function () {
		this.initialize(img.ylbjq_zz_00180);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00181 = function () {
		this.initialize(img.ylbjq_zz_00181);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00182 = function () {
		this.initialize(img.ylbjq_zz_00182);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00183 = function () {
		this.initialize(img.ylbjq_zz_00183);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00184 = function () {
		this.initialize(img.ylbjq_zz_00184);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00185 = function () {
		this.initialize(img.ylbjq_zz_00185);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00186 = function () {
		this.initialize(img.ylbjq_zz_00186);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00187 = function () {
		this.initialize(img.ylbjq_zz_00187);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00188 = function () {
		this.initialize(img.ylbjq_zz_00188);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00189 = function () {
		this.initialize(img.ylbjq_zz_00189);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00190 = function () {
		this.initialize(img.ylbjq_zz_00190);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00191 = function () {
		this.initialize(img.ylbjq_zz_00191);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00192 = function () {
		this.initialize(img.ylbjq_zz_00192);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00193 = function () {
		this.initialize(img.ylbjq_zz_00193);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00194 = function () {
		this.initialize(img.ylbjq_zz_00194);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00195 = function () {
		this.initialize(img.ylbjq_zz_00195);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00196 = function () {
		this.initialize(img.ylbjq_zz_00196);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00197 = function () {
		this.initialize(img.ylbjq_zz_00197);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00198 = function () {
		this.initialize(img.ylbjq_zz_00198);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00199 = function () {
		this.initialize(img.ylbjq_zz_00199);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_zz_00200 = function () {
		this.initialize(img.ylbjq_zz_00200);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);

	// 图片提示文字
	(lib.tabKuang = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3F5158").s().p("ADtCfICpk9IBeAAIipE9gAjcCfICpk9IBcAAIinE9gAnzCfICpk9IBSAAIipE9g");
		this.shape.setTransform(53.5, 18);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#56646B").s().p("AEVCfICpk9IB6AAIipE9gAotCfQgKAAAAgKIAAkpQAAgKAKAAICtAAIipE9g");
		this.shape_1.setTransform(58.9, 18);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#2A3A43").s().p("AH8CVIgDAAIjHAAICpk+IAyAAQALAAAAAKIAAESIABAFIAcAygAkRCVICok+IFsAAIipE+gAo0CVICpk+IDFAAIipE+g");
		this.shape_2.setTransform(68.2, 19.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#CF8D2C").s().p("AJzDCIhSgdIyBAAIgHAAQgYgDAAgcIAAkpQAAgfAfAAISXAAQAfAAAAAfIAAEPIApBHQACADgBADIgCAGQgCADgEABIgCAAIgDgBgAp5ijIAAEpQAAAXAVACIAEAAISBAAIACAAIBSAeIAAAAIACAAIACgBIABgEIAAgCIgphHIgBgDIAAkPQAAgZgZAAIyXAAQgZAAAAAZg");
		this.shape_3.setTransform(64, 19.5);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFCC00").s().p("AJ2C9IgBAAIhSgdIgCgBIyBAAIgDAAQgWgCAAgXIAAkpQAAgZAZAAISXAAQAZAAAAAZIAAEPIABAEIApBGIAAADIgBADIgCABIgBAAgAJeCqIADAAIADgBIABgDIgBgDIgcgxIgCgDIAAkSQAAgQgPAAIyXAAQgQAAAAAQIAAEpQAAAQAQAAISCAAIADABIAAAAg");
		this.shape_4.setTransform(64, 19.5);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#BD8228").s().p("AJkCvIg5gUIAAAAIgDgBIyCAAQgQAAAAgPIAAkqQAAgPAQAAISXAAQAPAAAAAPIAAETIACACIAcAyIABACIgBADIgDACIgDAAgApkifIAAEqQAAAKAKAAIAEAAIBRAAIDGAAIBeAAIFqAAIBfAAIB6AAIDGAAIAEABIA5AUIgcgxIgBgFIAAkTQAAgJgLgBIgyAAIh7AAIhdAAIlsAAIhdAAIjGAAIhRAAIitAAQgKABAAAJg");
		this.shape_5.setTransform(63.4, 19.1);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: [{
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
		// }).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 128.1, 39);


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
		this.shape.graphics.f().s("#000000").ss(1, 1, 1, 3, true).p("A05ldMApzAAAIAAK7MgpzAAAg");
		this.shape.setTransform(98.4, 24.4, 0.736, 0.697);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("A05FeIAAq7MApzAAAIAAK7g");
		this.shape_1.setTransform(98.4, 24.4, 0.736, 0.697);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: [{
		// 		t: this.shape_1
		// 	}, {
		// 		t: this.shape
		// 	}]
		// }).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1, -1, 198.9, 50.8);


	// 前后翻页
	(lib.fanBtn = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#333F48").s().p("AhPiIICfCFIifCMg");

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-8, -13.6, 16.1, 27.3);


	// 拖动
	(lib.dragBtn = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#00CC00").s().p("Egk5AkYMAAAhIvMBJzAAAMAAABIvg");
		this.shape.setTransform(236.2, 232.8);
		this.shape._off = true;

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({
			_off: false
		}, 0).wait(1));

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


	(lib.baozhaBtn = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgUAsQARACAAgHIAAgzIggAAIgYAAIAAgMIAZABIBJAAIAVgBIAAANIgVgBIgfAAIAAAzQABASgYAAQgCgIgDgFgAg9AnQAQgOAPgWIAMAFIgDAEIgGAHIgVAZQgFgDgIgCgAAXAHIALgFIAcAiIgOAHQgNgWgMgOgAAdgtIg3AAIgRABIAAgMIARAAIA3AAIARAAIAAAMIgRgBg");
		this.shape.setTransform(29.2, -40.5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AgcA0IACgCQAEgDABgCIAAgeIgRAAQgEAbgJAPQgGgFgGAAQAKgKAEgaIACgdQABgRgBgeQAFABARAAIA8AAQAPAAAEgBIgBAPIAAACQgBAOABABIgFAAIgLgBIgHAAIAAANIAGAAIAQgBIACAAIAAALIgDAAIgOgBIgHAAIAAAMIAPAAIAPAAIAEgBIAAALIgDAAIgQAAIghAAQAEAKAIAHQAFgDAKgMQAKAEACADIgBABQgIADgLAKQANAHAUABQgIAGgBAHQgtgNgHgfIgOAAIAAAdIAQgKIACALQgXAMgEADIgBABgAgCAFIAWAAIAAgMIgWAAgAglAFIAZAAIAAgMIgCAAIgQABIgBAAIAAgLIABAAIAPABIADAAIAAgNIgYAAIgBAigAgCgQIAWAAIAAgNIgWAAgAgkgmIBOAAIAAgMIhOAAg");
		this.shape_1.setTransform(15, -40.5);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgGA8IABgKIAAgiIgBAAQgJAUgkAQQgEgFgHgFQAagFAVgWIgcAAIgPABIAAgLQALACAEgBIAmAAIAAgJIgeAAIgJAAIABgPIAAgeIgBgKIANABIA+AAIAQgCIgBALIAAAkIAAAJIgKAAIgeAAIAAAKIAkAAIATgBIAAALIgHgBIgFAAIgHAAIgZAAQAOATAgAFQgIAGgBAFQgigJgMgaIgCAAIAAAhIAAAGIABAFgAAFgMIAdAAIAAgOIgdAAgAgggMIAbAAIAAgOIgbAAgAAFgiIAdAAIAAgOIgdAAgAgggiIAbAAIAAgOIgbAAg");
		this.shape_2.setTransform(1.1, -40.6);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#000000").s().p("AgGA+QgEgGgGgDQAVgEAQgQQgFgIgIgaIALgDQADANAGAQQAKgYAAgZIgSAAIgJAQQgFgEgGgBQAPgVAHgdQAPAEAAABIgBACIgDADIgCAEIgHAQIAbAAIAOgCIAAAMIgNgBIgDAAQgCAlgMAUQAKANAVAHQgHACgEAIQgVgNgGgIQgKAIgXANIgBgBgAg5A4QgEgEgEgCQAUgHAPgSQgKgKgKgGIAJgHIAGAGIALAIIAGgSQANAEgBACIgBABIgCADIgDAFIgFALIARAQIgLAHIgMgOQgKAOgVAMIgDgDgAhAACQAOgMAKgPIAKAGQgRAWgIAFQgDgDgGgDgAgYgTIAJgGIAVAVIgJAGQgJgLgMgKgAgPgdIgZAAQgMgBgGACIAAgLIASABIAZAAIALAAIAJgBIAAALIgUgBgAghg7IALgCIAHAQIgMACQgDgIgDgIg");
		this.shape_3.setTransform(-12.8, -40.8);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AAHA/IABgOIAAhKIgPAcQgEgDgIgDQAVgTAKgoIAOAGIgBABIgDADIgEAFIgEAJIAgAAIAQAAIAAALIgQgCIgbAAIAAAWIATAAIASAAIAAAJIgGAAIgMAAIgTAAIAAAVIAbAAIAQgBIAAAKIgIAAIgIAAIgbAAIAAARIABAOgAg9A2QATgQADgfIABghIgBgjIALABIAEABIgBABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBARAAARIAPgTIAKAJIgBABIgGADIgKAIIgIAIIgBAVQAIAJATAOIgKAJQgKgNgJgJQgFAVgMASQgGgEgHgCgAg9AEQAFgLAAgZQALAAABABIgBABQgBACAAAEIgCAcIgNAAg");
		this.shape_4.setTransform(-26.8, -40.8);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AACA0QAJABACgCIABgGIAAgEIgEACQgTAIgFADQgBgDgFgFIAVgGIgHgJIAIgEIABACIAFAHIACAAIAEgCIAAgLIgBgIQALABABABIAAABIgBADIAAAKIAHADQAEgCAEgGIAIAGIgIAGIATALIgIAIQgNgLgNgGIAAAIIAAABQADALgUADQgBgGgEgFgAhAAxQAWgUgCgqIAAgjIgBgOIAPABIAAABQgCADAAACQgCANABAQQAHgHAEgHIAIAJIgBABIgEACIgPANIAAAHIAAAHIAAAGQALAIAFAGIgJAHIgJgLQgGAZgKAOQgGgEgGgBgAgeAeQAVgHAJgOIgJAAIgOABIAAgJQABABAOgBIAIAAIAAgHIgDAAIgPABIAAgKIAPABIADAAIAAgHIgOABIABgJIAAgUIgBgMIAOABIApAAQAIABAGgCQgCAEABAHIAAATIABALIgNgBIgDAAIAAAHIADAAIAOgBIAAAKIgOgBIgDAAIAAAHIAIAAIAPgBIAAALIgPgCIgNAAQAKALAVAFQgFAFgCAGQgVgKgMgRIgPAAQgKARgTALQgEgEgHgDgAAJABIAUAAIAAgHIgUAAgAAKgOIATAAIAAgHIgTAAgAgDgdIAuAAIAAgIIguAAgAgDgsIAuAAIAAgHIguAAgAg/ABIACgRIAAgRIAMABIAAABIgBAGIgCAaIgLAAg");
		this.shape_5.setTransform(-40.8, -40.7);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#000000").s().p("AAfA+IABgKIgzAAIABAKIgNAAIAAgGIAAgTIAAgaQgGAIgSANQgCgFgHgFQAagNAOgTIgQAAIgUABIAAgMIAUABIAUAAIAFgIIgJAAIgVABIAAgLIAIAAIAOABIALAAIABgFIABgFQgKACgcgBIgGgMQAVADAdAAQAbgBAYgFQAIAMgBABIgLABIgqAAIgDAKIAYAAIANAAIAKgBIAAALIgKAAIgNAAIgaAAIgCAGIgBABIAvAAIAMAAIANgBIAAAMIgZgBIg0AAIgFAHIAPABIAWAAIANAAIALgBIACABIAAABIgCASIAAAWQAAAPACAIgAgTAtIAzAAIAAgIIgzAAgAgTAeIAzAAIAAgJIgzAAgAgTAOIAzAAIAAgJIgzAAg");
		this.shape_6.setTransform(-54.9, -40.8);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#000000").s().p("AAZAyIAAgpQgCAegkAUQgGgGgGgEQAbgKAIgPQAIgOgBgpIAKAAIAEABIgBADIgBAEIgBAGIgDAaQAMABACACIgCADIgBABIAAAVQgCAOAKgCQALACgBgOQAGAGAGABQgEALgDABQgDADgMAAIgDAAQgSAAACgJgAhBAlQAVgOAJgUQgJgLgNgOIAKgGIARAVQAEgQACgRIgiABIAAgLIAVABIAZgBQgFAhgGATIAPAWIgKAGQgFgLgFgGIAAgBQgMAVgMAMQgFgEgIgEgAgGANIABgTIAAggIgBgTQAGABAGgBIAfAAQANABAFgCIgBANIAAAuQAAAHABAFIgNAAIAAgGIABgHIAAgwIglAAIAAAqQgBAOABAFg");
		this.shape_7.setTransform(-68.8, -40.8);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#000000").s().p("AgiAxQAjgGAPgYQALgRABg3IgBgEIAAgCQASACgBACIgBACIgBAHQgEAugIATIAdAaIgLAJIgDgDIAAgBIgFgFIgPgSQgQAWgfALQgFgHgHgEgAg6ApIACgDQAEgEAAgEIAAhFIgBgGIAAgIQAOACABABIgBAEIgCAEIAABFIAQgSIAGgGQABAHAGAFQgTAQgRAVgAgZglIAKgJQANAMALARIgKAIQgNgUgLgIg");
		this.shape_8.setTransform(-82.5, -40.7);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#000000").s().p("AAHAsQATADAAgGIAAhWIg+AAIgbAAIAAgMIAMABIAPAAIBQAAIAUgBIAAANIgUgBIgFAAIAABdQgCAKgYAAQgBgHgFgHgAgtAkIAAgGIABgGIAAgpIAAgGIgBgGIANABIAZAAIANgBIAAAMIAAAjIAAALIgNAAIABgLIgaAAIAAAEQAAAJACAFgAggAHIAbAAIAAgZIgbAAg");
		this.shape_9.setTransform(85.2, -57.3);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#000000").s().p("AgYAyIAAgNIgBgMIAPABIgBACQgCAEAAAFIAAAKQgCAFAMAAIAMAAQARACAAgQQAFAHAJACQgFAKgFADQgDACgMAAIgVAAIgDABQgSAAADgNgAg6A1QAJgJADgSIAOADIgBABIgEAFIgJAXIgMgFgAAeAbIALgGIAXAbIgNAHQgGgMgPgQgAgEAZIAJgEQAIAJADAJIgLAFQgEgKgFgJgAAEATQgBgGgDgHQAOAEgBgKIAAgVIAAgJIAKAAIAFABIgCACQgCAEAAAFIAAAWQADAPgWAAIgBAAgAgsATIACgTIAAgaIgJANIgEAEQgDgFgFgFQATgPAKgaQAPAGgCABIgBABQgEADgFAIIAAApQgBANABAGgAAegKIAIgHQALAIALALIgKAIQgIgKgMgKgAgZAGQANgJAHgPIAKAGIgBACQgEACgCADIgFAIIgGAHIgMgEgAgagZQASgKAMgbQALAFACACIgBABQgEACgHAJIAeAAIAagBIgLAZIgMgDQAEgFAEgHIguAAIgLANIgEADIgLgHg");
		this.shape_10.setTransform(71.1, -57.6);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#000000").s().p("AAgA+QABgCAAgHIgxAAIgdABIABgHIAAgUIAAgRIAKABIAEABIgBACIgBAGIAAAYIAbAAIAAgrIgeAAIgZABIAAgLQAEACAWgBIAdAAIAAgTIgRAAIgTAAIgHAAIAAgMQABABAZAAIARAAIAAgMIgBgGIAAgFIANACIgBACQgCADABAEIAAAMIARAAQAaAAADgBIAAAMIgJAAIgUAAIgRAAIAAATIAgAAQARABAHgCIAAALIgYgBIggAAIAAArIAcAAIAAgVIAAgFIAAgGIAOACIgBABQgCADABACIAAAXQgBAQACADg");
		this.shape_11.setTransform(57.2, -57.5);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#000000").s().p("Ag+A7QAMgMAEgQQAKADADACIgBACIgEAFIgMAVQgHgEgFgBgAAhAiIAMgEIASAaIgOAGQgFgNgLgPgAgXAlIANgCIAGAZIgOABQgBgMgEgMgAAEAkIANgDIAJAaIgOABQgCgNgGgLgAAjAZIgRgBIgeAAIgUABIgKAAQACgBAAgVIgBgNIgBgIQAJACARgBIAIAAIAAgkIgBgKQAQABgBABIgBACQgCADAAAFIAAAIIAaAAIARAAIAKgCIAAANIgIAAIgTgBIgaAAIAAAQIAOAAIAbgBQgBAFAAAQIgBAOIACAJIgJgBgAgdAOIA8AAIAAgVIg8AAg");
		this.shape_12.setTransform(43, -57.5);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#000000").s().p("AAaA+QgRgBgMgCQgSgFgJgFIgHgEQgFABgIAPIgKgIQACgDADgDQAJgIAFgDIAAglIgVABIAAgMQAQACAQgCQgBAEABAHIgBAmQAQAKATADQAaABAhgDQgEAHgBAHIgOAAIgSAAgAAQArQgBgIgDgFQAMABADgEIABgIIAAgrIgeAAIgUABIAAgMIAUACIAeAAIAAgSIgCgKIAKAAIAEABIAAAEIgBAFIAAASIADAAQAKAAAKgBIAAALIgUgBIgDAAIAAApIgBASQgEAIgQAAIgCAAgAgKgJIALgDIAMAYIgMAFQgFgRgGgJgAg5gwIALgHQALANAIAMIgMAIQgHgOgLgMg");
		this.shape_13.setTransform(29.3, -57.5);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#000000").s().p("AgIA6QgIgBgNgGIgLgDQgFAAgIALIgKgKIASgLIAAgpIgPABIAAgMIAKABIARgBIAAAAIgBARIAAAjQAOAJAWADIAcgBQASAAAQgDQgGAFgBAJIgVAAQgYAAgUgCgAAeAfQAIACADgDIAAgKIgUAAIAAAHIAAAPIgKAAIAAgPIAAgHIgTAAIAAAKQAAAIABAEIgMAAIAAgDIABgIIAAgxIgBgHIAAgCQAAABALgBIARAAQgFgFgFgEIAIgHIAKAKQAHgEAHgIIgiAAIgRAAIAAgLQADABAOAAIArAAQAJAAAHgBQgPASgTALIAUAAQAHABAEgBQgBABABAIIAAASQAAApgCgBQgEAEgNAAQgBgGgDgHgAAVAMIAVAAIAAgLIgVAAgAgIAMIATAAIAAgLIgTAAgAAVgHIAUAAIAAgLIgUAAgAgIgHIATAAIAAgLIgTAAgAg0g1IAKgGIAOAaIgNAGQgFgOgGgMg");
		this.shape_14.setTransform(15.1, -57.6);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("AgIAMQAIgDAAgIIgJAAIAAgUIATAAIAAAUQgCASgQABg");
		this.shape_15.setTransform(-2.3, -52.8);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#000000").s().p("AgpA7IgFgHIABgCQAEgEABgCIAAgbIgFAAIgRABIAAgLIAQABIAGAAIAAgPIgNABIAAgHIgFAGQgCgEgFgEQARgPAIgfQAPADgBABIgBACIgDAFIgDADIgDAIIAHAAQAKAAAIgCIAAAMIgSgBIgLAAIgDADIgHALQACABAJAAIAJAAIARgBIAAAKIgRgBIAAAPIAFAAIAPgBIAAALIgHAAIgIgBIgFAAIAAAZIAQgQIAEALQgZATgDAEIgBACIgCgDgAgOArIAUABIADgpIgKABIgGAAIAAgLIARABIADgjIgNAAIgHACIAAgNQAGABAOAAIAPAAQAQAAALgCIgBADIgBAXIgEBHQAKgBAHgBIAAALIgIAAIgKAAIgnAAIgXABgAAQAsIAVAAIADgpIgTAAgAAWgGIATAAIABgjIgSAAg");
		this.shape_16.setTransform(-12.8, -57.5);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#000000").s().p("AgXAzQAXgCAQgLIgagKIAMgUIgCAAIgQABIAAgKIAQABIAFAAQAFgJADgPQAOAFgBACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDADIgFAKIgBACIAfAAQAJAAAIgBIAAAKIgRgBIgDAAQgEAPgIANIAcAOIgJALQgKgKgPgIQgOANgcAHQgCgHgFgFgAAEAWIANAGIAGADQAHgKADgNIgVAAIgIAOgAg4AxQAMABADgCIAAggQgPAIgEABIgDgMIAWgIIAAgaIgDAAIgJAAIgJAAIAAgLIAJABIAJAAIADAAIAAgUIgCgKQAOABAAABIgBADIgBAEIAAAVIACAAIAGAAIAFgBIAAALIgFAAIgGAAIgCAAIAAAWIANgEIAAAKIgNAFIAAApQAAAHgUACQgBgIgEgFgAgPgPIABgMIAAgDIgBgGIAAgGIANABIAwAAIAIAAIAGgBIgBAGIAAAGIAAACIABANIgMAAIABgQIg1AAIABAQgAALg8IAMgCIAGASIgMABQgDgKgDgHg");
		this.shape_17.setTransform(-26.9, -57.5);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AgRBEQAVgdAAglIAAgDQgDgkgPgeIAgAAIAACHg");
		this.shape_18.setTransform(-41.9, -57.5);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#000000").s().p("AAIA/IAAgOIAAhKIgPAcQgFgDgGgDQATgTALgoIAOAGIgBABIgDADIgEAFIgEAJIAgAAIAQAAIAAALIgQgCIgbAAIAAAWIATAAIASAAIAAAJIgGAAIgMAAIgTAAIAAAVIAbAAIAQgBIAAAKIgIAAIgIAAIgbAAIAAARIABAOgAg9A2QATgQADgfIABghIgBgjIALABIAEABIgBABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBARAAARIAOgTIALAJIgCABIgFADIgKAIIgIAIIgBAVQAIAJATAOIgKAJQgKgNgJgJQgFAVgMASQgGgEgHgCgAg9AEQAFgLAAgZQAKAAACABIgBABQgBACAAAEIgCAcIgNAAg");
		this.shape_19.setTransform(-54.8, -57.6);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#000000").s().p("AACA0QAJABACgCIABgGIAAgEIgEACQgTAIgFADQgBgDgFgFIAVgGIgHgJIAIgEIABACIAFAHIACAAIAEgCIAAgLIgBgIQALABABABIAAABIgBADIAAAKIAHADQAEgCAEgGIAIAGIgIAGIATALIgIAIQgNgLgNgGIAAAIIAAABQADALgUADQgBgGgEgFgAhAAxQAWgUgCgqIAAgjIgBgOIAPABIAAABQgCADAAACQgCANABAQQAHgHAEgHIAIAJIgBABIgEACIgPANIAAAHIAAAHIAAAGQALAIAFAGIgJAHIgJgLQgGAZgKAOQgGgEgGgBgAgeAeQAVgHAJgOIgJAAIgOABIAAgJQABABAOgBIAIAAIAAgHIgDAAIgPABIAAgKIAPABIADAAIAAgHIgOABIABgJIAAgUIgBgMIAOABIApAAQAIABAGgCQgCAEABAHIAAATIABALIgNgBIgDAAIAAAHIADAAIAOgBIAAAKIgOgBIgDAAIAAAHIAIAAIAPgBIAAALIgPgCIgNAAQAKALAVAFQgFAFgCAGQgVgKgMgRIgPAAQgKARgTALQgEgEgHgDgAAJABIAUAAIAAgHIgUAAgAAKgOIATAAIAAgHIgTAAgAgDgdIAuAAIAAgIIguAAgAgDgsIAuAAIAAgHIguAAgAg/ABIACgRIAAgRIAMABIAAABIgBAGIgCAaIgLAAg");
		this.shape_20.setTransform(-68.8, -57.4);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#000000").s().p("AgQBEIAAiHIAfAAQgQAegDAkIAAADQABAlAVAdg");
		this.shape_21.setTransform(-81.7, -57.5);

		this.instance = new lib.shuomingBg("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(-95.2, -73.3);

		// 划上爆炸按钮的文字提示--杨俊
		this.timeline.addTween(cjs.Tween.get({}).to({
			state: []
		}).to({
			state: [{
				t: this.instance
			}, {
				t: this.shape_21
			}, {
				t: this.shape_20
			}, {
				t: this.shape_19
			}, {
				t: this.shape_18
			}, {
				t: this.shape_17
			}, {
				t: this.shape_16
			}, {
				t: this.shape_15
			}, {
				t: this.shape_14
			}, {
				t: this.shape_13
			}, {
				t: this.shape_12
			}, {
				t: this.shape_11
			}, {
				t: this.shape_10
			}, {
				t: this.shape_9
			}, {
				t: this.shape_8
			}, {
				t: this.shape_7
			}, {
				t: this.shape_6
			}, {
				t: this.shape_5
			}, {
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}, 1).to({
			state: []
		}, 2).wait(1));

		// 图层 1
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#333F48").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#5E7485").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#5E7485").s().p("AjLDLQhUhUAAh3QAAh1BUhWQBWhUB1AAQB3AABUBUQBVBWAAB1QAAB3hVBUQhUBVh3AAQh1AAhWhVg");

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_22
			}]
		}).to({
			state: [{
				t: this.shape_23
			}]
		}, 1).to({
			state: [{
				t: this.shape_24
			}]
		}, 2).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-17, -17, 34, 34);


	(lib.modelMC = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 5
		this.instance = new lib.tabMC();
		this.instance.parent = this;
		this.instance.setTransform(103.4, 175.7, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AgVBCQARgXAAgqIAJAAQAAARgCAOQAJAQALAFIAAhEIgaAAIAAgKIBHAAIAAAKIgJATIgKgEIAIgPIgXAAIAAAbIAgAAIAAAKIggAAIAAAhQAMACAbgBIgDALIgeAAQgUAAgLgKQgFgFgEgGQgEAPgIAMIgJgHgAhIA9QAOgTABgoIABgnIgNAAIAAgLIAdAAQgGgKgGgIIAJgGIANATIgJAFIAYAAIAAALIgfAAIAAAVIAaAAIgCA7QAAAXgRAAIgNAAIgCgMIAMABQAJAAABgMIABgwIgPAAIgBAHQgBAtgRAWIgHgIgAgTgZQAQgUAHgbIALAEIgGAPIA/AAIAAAKIhEAAQgGAPgIAMIgJgJg");
		this.shape.setTransform(45.3, 148.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AACBIIgCgMIANABQAJAAAAgJIAAgQIgVABIgLACIgEgMIAOgEIAVgMIgUABIgHABIgDgLQAGgBADgCIARgLIgTAAIAAAFIgKAAIAAg5IBOAAIAAA5IgJAAIAAgFIgdAAIACACIgYANIAegBIARgKIAHAHQgeARgaAMIAvgDIgKgKIAHgGQAKAKAOAPIgIAHIgHgHIgYABIAAATQAAASgQAAIgPAAgAAfgUIAaAAIAAgNIgaAAgAgCgUIAYAAIAAgNIgYAAgAAfgqIAaAAIAAgNIgaAAgAgCgqIAYAAIAAgNIgYAAgAgWA7QARgJAMgKIAGAIQgOAMgPAIIgGgJgAAmAwIAGgIQAOAIAPAKIgGAKQgNgKgQgKgAgaAxIgtAHIgBgLIAYgDIAAgfIgKAAIAAAIIgJAAIAAg/IATAAIAAgbIAJAAIAAAbIATAAIAAA3IgTAAIAAAeIALgCIgEgQIAIgCIAJAgIgJADIgCgHgAgnABIAKAAIAAgkIgKAAgAg6ABIAKAAIAAgkIgKAAg");
		this.shape_1.setTransform(30.1, 148);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AggA+QAdgFARgJIgcgNIALgRIgYAAIAAgJIAdAAIAJgPIALAFIgHAKIA4AAIAAAJIgTAAQgGARgLALIAkAQIgGAKIgngTQgUAOggAGIgGgLgAAAAfIAYALQALgKAFgOIgfAAIgJANgAhEBHIgCgNIAMABQAHAAAAgHIAAgnIgTAGIgBgMIAUgGIAAghIgTAAIAAgKIATAAIAAgcIALAAIAAAcIAQAAIAAAKIgQAAIAAAfIANgFIABAKIgOAFIAAAtQAAAQgPABIgGAAIgHAAgAgagIIAAgKIA4AAIAQgYIALAGIgPASIAeAAIAAAKgAgIgkIAIgGIANARIgJAHQgFgKgHgIgAgVgsIAAgJIApAAIgIgOIAKgEIAJAQIgEACIAqAAIAAAJg");
		this.shape_2.setTransform(14.7, 148);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AhIA7IASgQIAAgyIgRAAIAAgKIAdAAIAAA/QAKANAUAAIAdABIA4gCIgFAMIgzABIgegBQgYgBgLgQQgFADgNAQgAARA4IAAgZIgvAAIAAgKIAvAAIAAgUIgpAAIAAgJQAJgQAHgSIgVAAIAAgKIAaAAIAFgSIAMACIgGAQIA8AAIAAAKIhAAAIgPAiIAcAAIAAgaIANAAIAAAaIAlAAIAAAJIglAAIAAAUIApAAIAAAKIgpAAIAAAZgAhAg9IAKgGIATAaIgKAHIgTgbg");
		this.shape_3.setTransform(-0.5, 147.9);

		this.instance_1 = new lib.tabKuang("synched", 0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(-36.7, 130.3);

		this.instance_2 = new lib.tabMC();
		this.instance_2.parent = this;
		this.instance_2.setTransform(295.8, 345.1, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AALBIIAAgfIgVAAIAAgLIAVAAIAAg8IAAAAQgNAxgfAdIgIgKQAcgaANgqIghAAIAAgLIAsAAIAAgdIALAAIAAAdIAvAAIAAALIgmAAQAOAtAdATIgJALQgdgXgOg0IAAA8IAVAAIAAALIgVAAIAAAfgAg2BIIAAhTIgOAWIgFgMQAVgfALgnIALADQgGATgHAQIAABpg");
		this.shape_4.setTransform(258.2, 322.8);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AhHA+QAXgGAHgIQAJgHgBgRIAAgMIA8AAIAAAjQAAAKAKAAIALAAQAIAAACgIIADgUIALAEIgEAVQgCAOgQAAIgQAAQgTAAABgTIAAgbIglAAIAAAEQAAASgKALQgJALgXAHIgIgLgAA4ARIAAgRIhuAAIAAARIgMAAIAAgbICGAAIAAAbgAg6gWIAAgKIA1AAIAAgOIhAAAIAAgKIBAAAIAAgQIALAAIAAAQIBAAAIAAAKIhAAAIAAAOIA0AAIAAAKg");
		this.shape_5.setTransform(242.9, 322.8);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("AAyBDIAAgIIggAAIAAAIIgKAAIAAguIAuAAQgpgFgMgTIgCAAQgIARgtAHIAvAAIAAAuIgKAAIAAgIIgfAAIAAAIIgKAAIAAgtIgIACIgGgLQAwgFALgLIg1AAIAAgKIA6AAQADgFABgIIAJACQgBAGgBAFIAfAAIgMgIIAGgGQAKAFAHAGIgCADIAaAAIAAAKIg4AAQARAPArAAIgGALIgHgBIAAAtgAASAyIAgAAIAAgTIggAAgAgwAyIAfAAIAAgTIgfAAgAg6gWIAAgsIAzAAIAAAqIgLAAIAAgEIgeAAIAAAGgAgwglIAeAAIAAgUIgeAAgAAygXIAAgFIggAAIAAAEIgLAAIAAgqIA1AAIAAArgAASglIAgAAIAAgUIggAAg");
		this.shape_6.setTransform(227.5, 323.1);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("AhIA/QAYgVADgoIgaAAIAAgKIAbAAIAAgeIgJAAQgFANgGAKIgHgJQALgUAFgbIALACIgGAVIAlAAIAAAKIgUAAIAAAeIAWAAIAAAKIgXAAIgDAUIAHgEQAMARAJAQIgKAGIgSggQgHAegUARIgIgJgAgHBEIAAiBIBPAAIAAALIhEAAIAAAZIA7AAIAAA+IgLAAIAAgIIgwAAIAAAcIBFAAIAAALgAAEATIAwAAIAAgiIgwAAg");
		this.shape_7.setTransform(212.2, 322.6);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AhIA+QAngGAXgLQgQgMgMgTIgRAAIAAgKIBjAAIAAAKQgOASgTANQAXAMAnACIgJANQgngGgZgPQgZAOgnAIIgIgLgAAAAnQARgKANgPIg3AAQALAQAOAJgAhHgEQAPgNAOgRIAJAIQgPARgPANIgIgIgAAggbIAIgHQASARAMANIgJAHQgOgPgPgPgAALgCIAAgoIgWAAIAAAoIgLAAIAAgoIgvAAIAAgLIBDAAIgIgOIAKgFIAJAQIgGADIBDAAIAAALIgvAAIAAAog");
		this.shape_8.setTransform(197, 322.8);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AhCA8QAggRAKgTQAKgQACgiIgvAAIAAgMIAvAAIABghIALAAIAAAhIBDAAIgDBQQgCAZgZAAIgdAAIgDgOIABAAIAdACQAPgBABgPIADhBIg2AAQgBAlgLATQgLAWgiAUIgJgMg");
		this.shape_9.setTransform(181.1, 322.7);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AgKA/QATgKAOgMQgLgOgHgVIgJAOIgFgLQASgZAHgZIALACIgGAQIAqAAIAAAKQgHAigSAUQANAMAWAIIgIAKQgVgJgNgNQgOANgTALIgIgKgAAMgFQAHAYALAOQAQgSAFgdIgiAAIgFAJgAgXBIIAAhEQgGALgIAIIgEgMQAUgZAJgbIAKACQgEAOgGAMIAABVgAhDBDQAJgaAGgfIALAFIgOA4gAAUgDIAJgEIAKARIgJAEIgKgRgAhIgWIAIgJIAZATIgJAKIgYgUgAhCg8IAHgIIAaAUIgJAJQgPgOgJgHgAgegrIAAgKIAvAAIgIgOIALgFIAJAQIgHADIAxAAIAAAKg");
		this.shape_10.setTransform(166.3, 322.8);

		this.instance_3 = new lib.tabKuang("synched", 0);
		this.instance_3.parent = this;
		this.instance_3.setTransform(150.4, 305.9);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFFFF").s().p("AALBSIAAgTIAAgJIAAgHIgHAAIgNABIgIAAIAAgOIgPATQgEgHgIgFIAAAHQgBADABAKIABATIgQAAIABgfIAAhFIgNAWIgDAGIgKgOQAXgXAQg0QATAGAAADIgDADIgEAFIgLAUIAABTQAigZAJgwIgMAAIgXABIAAgOIALABIAMAAIAYAAIAAgXIgBgMIACAAQAQACAAABIgBAEIgCAEIAAAYIAcAAQASAAAKgCIAAAPIgbgBIgRAAQAFAxArAXQgMAKgCAFQgLgIgHgLIAAAOIgLAAIgIgBIgIAAIAAAHQgBAJADATgAAZAiIAHAAIATgBQgVgbgCgoIgDAAgAgQAhIATABIAIAAIAAhEIgCAAQgGApgTAag");
		this.shape_11.setTransform(552.9, 212.6);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFFFF").s().p("AhNBBQArAAADgWIAAgaQAQACAMgBIAIAAQAQAAAKgBQgBAEgBATIAAAKQgDAQAMgCIASAAQAGgEAAgOQAHAJAJACQgFAOgFADQgEADgPABQgqADAHgRIAAgJIABgZIgfAAQABAagKAIQgIAKgfAHQgFgKgIgGgAhIAZIAAgCQACgGAAgIIAAgEQAAgIgCgFQAMACAMAAIBiAAIASgBIAEgBQgCAFABAIIAAADQAAALABAFIgRAAIAAgCQABgGAAgHIAAgEIhwAAIAAADIABAOIAAADgAAlgSIhOAAQgOAAgJACIAAgPQADACAUAAIAjAAIAAgSIgxAAIgOABIgGAAIAAgOIAFABIAPAAIAxAAIAAgFIgCgQIASABIAAADQgDAGAAAGIAAAFIAqAAQAOAAALgBIAAAOIgCAAQgKgBgNAAIgqAAIAAASIAeAAQANAAAKgCIAAAPQgIgCgPAAg");
		this.shape_12.setTransform(534.9, 212.5);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AANBQIACgfIAAhxQAAgHgCgGIAAgCQAUABAAACIgCACQgCAFAAAIIAABuQAAAZACAGgAhQA8QAfgNATgYQgJgMgNgKIAMgKIARASQAEgGAEgiIgcAAQgQAfgIAKQgGgFgJgDQAbgWAJg4IADABQASADAAABIgCAEQgEAEgCAFQgDAIgBAHIAWAAQAIAAAHgCIgBAPQgDBFg9AhQgGgIgJgEgAAigfIAOgHIAjA0IgQALQgNgfgUgZg");
		this.shape_13.setTransform(516.6, 212.6);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AguBSIABgTIAAgOIgiAHIgFgPQAMgCAbgFIAAgXIgTAAIgOADIgEgPQAHAAANgiIACgEIgGAAIgQABIAAgOQAHABALgBIAIAAQAGgOACgPIACAAIATAHIgDACIgEAHIgHANIAQAAIAVAAIAAAOQgEgBgPAAIgWAAQgJAXgJAQIASAAIAAgQIgBgLIAEABQAPABAAABIgBACQgEAGAAAQIAJAAIAPgBIAAAOIgPgCIgJAAIAAAWIAcgGIgBAQIgbADIAAARIACATgAAxBPIgVAAQgQAAgCgGQgEgCABgXIAAgwIgBgMIAAgGIANABQAFABABAAIgBAEQgEAEAAAHIAAAVQAagOAJgGQAMAMAAADIgEABIgKACIghAPIAAAQQgDAQATgCQAWAEgBgXIABABQABADAPAFQgFAagTAAIgBAAgAAbg3QgaApgMAJQgIgHgGgBQAlgdAHglIAWAHIgBADQgDACgBADQAQAjAhALIgCAEQgDACgJALQgegTgOgjg");
		this.shape_14.setTransform(498.4, 212.6);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFFFF").s().p("AgUA+IgBgCQASACABgIIAAg7IgVAAIgRACQABgFAAgKIAAgIQgKAJgTAMQgEgGgKgIQAigKAbggIgNAAQgiAAgHABIAAgPQAEABAMAAIAZABIBBAAIAYAAIAUgCIAAAPIgsgBIgjAAIgHAIIgGAHIA8AAQAMABAFgCQgCAFABAMIAAAIQgBAOACAFIgQgCIgZAAQADAIAIASIADgDQALgFAPgNQAMAJABAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgHACIgPAIQgGAEgGACQAMASAjAFQgJAIgDAIQgxgMgKg5IAAA8QgBAHgEACQgDADgSAFQgBgHgFgIgAgbgQIBIAAIAAgTIhIAAgAhQA7QAngIANgcIgTAAIgKAAIgLACIAAgQQAJADAMAAIANAAIANAAIALgDQgKAugvAQQgEgJgJgDg");
		this.shape_15.setTransform(480, 212.8);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FFFFFF").s().p("AA3BOIABgKIhvAAIABAJIgRAAIAAgCIABgMIAAh5IgBgKIAAgJQAHABAPgBIBkAAIAVAAIgBATIAAB8IABAMgAg3A5IBvAAIAAgyIAAhJIhvAAgAAPAvIgWAAQgYACADgNIAAgcQgMAKgFADIgKgLQASgGAQgPIgIAAIgHABIgOAAIAAgLQAEACARgCIAOAAIAEgKIgTAAQgMAAgDABIAAgLIAFABIAJAAIACAAQgFgJgFgFIAKgGIAMAOIgJAGIARAAIABgJQABgCAAgKIAMABQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgBADIgCAKIgBADIAJAAIABgBQAIgMADgIQAOAFAAADIgEADIgLAKIADAAIAJAAIAIgBIAAALIgIAAIgJgBIgZAAIgDAKIAeAAIAVAAIAAALIgIAAIgNgBIgMAAQAPANAZAEQgHAGgEAHQgJgDgMgLQAAAPgFAFQgFAEgNABIgFgMQAKACADgCQADgCAAgHIgcAAIAAAUQgDAKAPgCIAQAAQASADAAgTIANAHQgDATgTAAIgFAAgAgVABIAlAAQgGgEgEgIIgQAAIgLAMg");
		this.shape_16.setTransform(72.4, 84.9);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFFFFF").s().p("AAvBSIAAgLIhTAAIgWACQACgFAAgOIAAgqIgBgHIAAgFIAOAAQAEAAAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQgCAEAAAGIAAAuIBZAAIAAguIgBgPIAJAAIAJABIgCACIgBAMIAAAuIABAWgAgnArQAbgTAJghQASADAAADIgCACIgDABIgFAJIgBABQAaARANAKIgNANQgGgJgZgUQgIAPgPAQQgIgIgHgBgAA7gMIgGAAIhvAAIgOABIgIABIAAgRIADABQAKACAKgBIAJAAIAAgcQABgKgCgEQAVAAgBABIgCADQgCAEAAAFIAAAdIAcAAIAAgrIgBgGIAAgHIAMAAQAGABABABIgBACQgDAEgBAEIAAALIAiAAIAZgCIAAAQIgYgCIgjAAIAAAVIArAAQAKABAHgBIANgCIAAARQgJgCgNAAg");
		this.shape_17.setTransform(54, 84.6);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFFFFF").s().p("AggBFQA0gMABhTIgIAAIgOABIgBAAIAAAPIgCAAQgIgBgNAAIgFAAQgNAkgKAPIAjgJIgJgSIANgGQAKARAGATIgNAJIgCgJQgoALgJADQgGADAAgBIgIgQIABAAQAOgFAPgxIgHAAQgMAAgLABIgBAAIAAgQIABABQAFABASAAIAaAAQALAAAGgBIADgBIAAgPIADABIARABIAJAAIgBgbIAAgOQATABADADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgBAFQgCAIgBAQIAAAFIATAAQAOAAAGgCQAAAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQgHBsgFgFQgEAJgZADQABgIgHgJQATACADgGQAFgFADhNIgZAAQgCBWgxAWQgFgHgMgFgAgHgvQgIgCgPAAIgQAAQgMAAgJACIgCAAIAAgQIABAAQAFABASAAIAOAAQATAAAFgBIACAAIAAAQIgCAAg");
		this.shape_18.setTransform(35.6, 84.6);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFFFFF").s().p("AgZBRIACgPIAAgmIgCgRQADABATAAIA6AAQANAAAJgBQgDADABAMIAAAoQAAAKACADIgTAAIACgNIhFAAQABAKABAFgAgIA2IBEAAIAAgdIhEAAgAhLBCQAZgVADgxIAAgmIgBgGIgBgLQAGABAQAAIAjAAIgJgRIARgFIAIAWIAeAAQAPAAAHgBQgCAFAAAMIAAAUQAAAMACAFIgUgBIhZAAQgCAxgaAiQgHgIgHgDgAghgUIBdAAIAAgZIhdAAg");
		this.shape_19.setTransform(16.5, 84.6);

		this.instance_4 = new lib.tabMC();
		this.instance_4.parent = this;
		this.instance_4.setTransform(246.8, 298.4, 0.534, 0.534, 0, 0, 0, 0, 0.1);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#FFFFFF").s().p("AA1BTIABgKIg5AAQAAAFACAEIgQAAIAAgEIABgKIAAggQAAgNgBgCIAGABIALAAIA0AAIAKAAIAGgBQgBAAgBAFIAAAKIAAAiIAAAGIACAHgAgDA/IA5AAIAAgKIg5AAgAgDAqIA5AAIAAgJIg5AAgAg4BSQAAgEABgaIAAg2QgGAQgLAbQgEgMgFgFQASgYAGghIgUABIAAgOIAMACIAKAAIAAgYIgBgOIAMAAIAGACIAAABQgEAFAAAGIAAAYQALAAAEgCIAAAOIgPgBIAABVIAAAYIABAGgAA7AMIhCAAIgOACIgDAAIAAgDQABgFAAgGIAAgbIgBgPIAJABIAHAAIAOAAIAAgLIgQAAIgSABIAAgOIAFACIAMAAIARAAIAAgIIgCgLIAQACIgBACQgCAFAAAEIAAAGIARAAIAAgJIgCgKQAOAAACABIgBACQgDAEABAFIAAAHIAVAAIALAAIAFgCIAAAOIgQgBIgVAAIAAALIAPAAQAFABAMgCQgDAKABAGIAAAYQgBAGADAKIgSgCgAAtACIARAAIAAgLIgRAAgAARACIARAAIAAgLIgRAAgAgKACIAQAAIAAgLIgQAAgAAtgUIARAAIAAgKIgRAAgAARgUIARAAIAAgKIgRAAgAgKgUIAQAAIAAgKIgQAAgAARgpIARAAIAAgLIgRAAgAgpgHIAIgGIAJATIgKAGQgDgKgEgJg");
		this.shape_20.setTransform(172.4, 277.4);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#FFFFFF").s().p("AhFBIQACgHAAgZIAAhHQAAgcgCgMQAHACAXAAQARAAALgCQgCAFAAAbIAAAfIAZAAIAAggIgBgfQAEACAbAAQAVAAAHgCQgCAJABAfIAABHQgBASACANIgSAAQABgDAAgKIhpAAIAAADIABALgAg0AsIBpAAIAAhlIgaAAIAAAbIAAAZIABALQgGgBgWAAIgdABIACgiIAAgdIgZAAg");
		this.shape_21.setTransform(154.4, 277.7);

		this.instance_5 = new lib.tabKuang("synched", 0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(101.5, 259.2);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#FFFFFF").s().p("AADBIIgCgMIAMABQAKAAgBgJIAAgQIgUABIgMACIgDgMIAMgEIAWgMIgTABIgHABIgEgLQAFgBAEgCIARgLIgTAAIAAAFIgKAAIAAg5IBOAAIAAA5IgJAAIAAgFIgdAAIACACIgZANIAfgBIARgKIAHAHQgeARgaAMIAugDIgJgKIAIgGQAKAKANAPIgIAHIgHgHIgYABIAAATQAAASgRAAIgNAAgAAfgUIAaAAIAAgNIgaAAgAgCgUIAYAAIAAgNIgYAAgAAfgqIAaAAIAAgNIgaAAgAgCgqIAYAAIAAgNIgYAAgAgWA7QARgJAMgKIAGAIQgOAMgPAIIgGgJgAAnAwIAFgIQAPAIAPAKIgHAKQgNgKgPgKgAgZAxIguAHIgCgLIAZgDIAAgfIgKAAIAAAIIgJAAIAAg/IATAAIAAgbIAJAAIAAAbIASAAIAAA3IgSAAIAAAeIALgCIgEgQIAJgCIAJAgIgJADIgCgHgAgnABIAKAAIAAgkIgKAAgAg6ABIAKAAIAAgkIgKAAg");
		this.shape_22.setTransform(33.4, 148);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#FFFFFF").s().p("AhIA7IASgQIAAgyIgRAAIAAgKIAcAAIAAA/QAMANATAAIAdABIA4gCIgEAMIg0ABIgegBQgYgBgLgQQgFADgMAQgAARA4IAAgZIgvAAIAAgKIAvAAIAAgUIgpAAIAAgJQAJgQAHgSIgVAAIAAgKIAaAAIAFgSIAMACIgGAQIA8AAIAAAKIhBAAIgOAiIAcAAIAAgaIAMAAIAAAaIAmAAIAAAJIgmAAIAAAUIAqAAIAAAKIgqAAIAAAZgAg/g9IAJgGIATAaIgKAHIgSgbg");
		this.shape_23.setTransform(2.8, 147.9);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#FFFFFF").s().p("AALBIIAAgfIgVAAIAAgLIAVAAIAAg8IAAAAQgNAygfAbIgIgJQAcgZANgrIghAAIAAgLIAsAAIAAgdIALAAIAAAdIAvAAIAAALIgmAAQAOAsAdAVIgJAKQgdgWgOg1IAAA8IAVAAIAAALIgVAAIAAAfgAg2BIIAAhSIgOAUIgFgKQAVggALgnIALADQgGATgHAQIAABpg");
		this.shape_24.setTransform(257.1, 323.9);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFFFF").s().p("AhHA+QAXgGAHgIQAJgHAAgRIAAgMIA7AAIAAAjQAAAKAKAAIALAAQAIAAACgIIADgUIALAEIgEAVQgDAOgPAAIgRAAQgSAAAAgTIAAgbIgkAAIAAAEQAAASgKALQgJALgYAHIgHgLgAA4ARIAAgRIhuAAIAAARIgMAAIAAgbICGAAIAAAbgAg6gWIAAgKIA1AAIAAgOIg/AAIAAgKIA/AAIAAgQIALAAIAAAQIBAAAIAAAKIhAAAIAAAOIA0AAIAAAKg");
		this.shape_25.setTransform(241.8, 323.9);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#FFFFFF").s().p("AAyBDIAAgIIggAAIAAAIIgKAAIAAgtIAuAAQgpgGgMgTIgBAAQgJAQgtAJIAvAAIAAAtIgKAAIAAgIIgfAAIAAAIIgLAAIAAgsIgHABIgGgKQAxgHAJgKIg0AAIAAgJIA6AAQADgGAAgIIAKACQgBAGgCAGIAhAAIgNgJIAGgHQAKAGAHAGIgCAEIAbAAIAAAJIg5AAQARAPArAAIgGALIgHAAIAAAsgAASAyIAgAAIAAgTIggAAgAgwAyIAfAAIAAgTIgfAAgAg7gWIAAgsIA0AAIAAAqIgKAAIAAgEIgfAAIAAAGgAgwglIAfAAIAAgUIgfAAgAAygWIAAgGIggAAIAAAEIgKAAIAAgqIA0AAIAAAsgAASglIAgAAIAAgUIggAAg");
		this.shape_26.setTransform(226.4, 324.2);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AhIA+QAngGAXgLQgQgMgMgTIgRAAIAAgKIBjAAIAAAKQgOASgTANQAXALAnADIgJANQgngFgZgPQgZANgnAIIgIgLgAAAAnQARgLANgOIg3AAQALAQAOAJgAhHgEQAPgNAOgRIAJAIQgPAQgPANIgIgHgAAggbIAIgHQASARAMANIgJAHQgOgPgPgPgAALgBIAAgqIgWAAIAAAqIgLAAIAAgqIgvAAIAAgKIBDAAIgIgOIAKgFIAJARIgGACIBDAAIAAAKIgvAAIAAAqg");
		this.shape_27.setTransform(195.9, 323.9);


		// 图片上的显示文字
		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: [{
		// 		t: this.instance_3,
		// 		p: {
		// 			x: 150.4,
		// 			y: 305.9
		// 		}
		// 	}, {
		// 		t: this.shape_10,
		// 		p: {
		// 			x: 166.3,
		// 			y: 322.8
		// 		}
		// 	}, {
		// 		t: this.shape_9,
		// 		p: {
		// 			x: 181.1,
		// 			y: 322.7
		// 		}
		// 	}, {
		// 		t: this.shape_8
		// 	}, {
		// 		t: this.shape_7,
		// 		p: {
		// 			x: 212.2,
		// 			y: 322.6
		// 		}
		// 	}, {
		// 		t: this.shape_6
		// 	}, {
		// 		t: this.shape_5
		// 	}, {
		// 		t: this.shape_4
		// 	}, {
		// 		t: this.instance_2,
		// 		p: {
		// 			x: 295.8,
		// 			y: 345.1
		// 		}
		// 	}, {
		// 		t: this.instance_1,
		// 		p: {
		// 			skewY: 0,
		// 			x: -36.7,
		// 			y: 130.3
		// 		}
		// 	}, {
		// 		t: this.shape_3
		// 	}, {
		// 		t: this.shape_2,
		// 		p: {
		// 			x: 14.7
		// 		}
		// 	}, {
		// 		t: this.shape_1
		// 	}, {
		// 		t: this.shape,
		// 		p: {
		// 			x: 45.3
		// 		}
		// 	}, {
		// 		t: this.instance,
		// 		p: {
		// 			x: 103.4,
		// 			y: 175.7
		// 		}
		// 	}]
		// }).to({
		// 	state: []
		// }, 8).to({
		// 	state: [{
		// 		t: this.instance_5
		// 	}, {
		// 		t: this.shape_21
		// 	}, {
		// 		t: this.shape_20
		// 	}, {
		// 		t: this.instance_4
		// 	}, {
		// 		t: this.instance_3,
		// 		p: {
		// 			x: -15.9,
		// 			y: 66.6
		// 		}
		// 	}, {
		// 		t: this.shape_19
		// 	}, {
		// 		t: this.shape_18
		// 	}, {
		// 		t: this.shape_17
		// 	}, {
		// 		t: this.shape_16
		// 	}, {
		// 		t: this.instance_2,
		// 		p: {
		// 			x: 124.3,
		// 			y: 112
		// 		}
		// 	}, {
		// 		t: this.instance_1,
		// 		p: {
		// 			skewY: 180,
		// 			x: 577.3,
		// 			y: 194.4
		// 		}
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
		// 		t: this.instance,
		// 		p: {
		// 			x: 438.5,
		// 			y: 241.9
		// 		}
		// 	}]
		// }, 86).to({
		// 	state: []
		// }, 21).to({
		// 	state: [{
		// 		t: this.instance_3,
		// 		p: {
		// 			x: 150.4,
		// 			y: 305.9
		// 		}
		// 	}, {
		// 		t: this.shape_10,
		// 		p: {
		// 			x: 165.2,
		// 			y: 323.9
		// 		}
		// 	}, {
		// 		t: this.shape_9,
		// 		p: {
		// 			x: 180,
		// 			y: 323.8
		// 		}
		// 	}, {
		// 		t: this.shape_27
		// 	}, {
		// 		t: this.shape_7,
		// 		p: {
		// 			x: 211.1,
		// 			y: 323.7
		// 		}
		// 	}, {
		// 		t: this.shape_26
		// 	}, {
		// 		t: this.shape_25
		// 	}, {
		// 		t: this.shape_24
		// 	}, {
		// 		t: this.instance_2,
		// 		p: {
		// 			x: 295.8,
		// 			y: 345.1
		// 		}
		// 	}, {
		// 		t: this.instance_1,
		// 		p: {
		// 			skewY: 0,
		// 			x: -36.7,
		// 			y: 130.3
		// 		}
		// 	}, {
		// 		t: this.shape_23
		// 	}, {
		// 		t: this.shape_2,
		// 		p: {
		// 			x: 18
		// 		}
		// 	}, {
		// 		t: this.shape_22
		// 	}, {
		// 		t: this.shape,
		// 		p: {
		// 			x: 48.6
		// 		}
		// 	}, {
		// 		t: this.instance,
		// 		p: {
		// 			x: 103.4,
		// 			y: 175.7
		// 		}
		// 	}]
		// }, 78).wait(8));

		// 图层 4 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("EgpZApaMAAAhSzMBSzAAAMAAABSzg");
		mask.setTransform(265, 265);

		// 图层 3
		this.instance_6 = new lib.ylbjq_zz_00200();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-233, -12);

		this.instance_7 = new lib.ylbjq_zz_00199();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-233, -12);

		this.instance_8 = new lib.ylbjq_zz_00198();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-233, -12);

		this.instance_9 = new lib.ylbjq_zz_00197();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-233, -12);

		this.instance_10 = new lib.ylbjq_zz_00196();
		this.instance_10.parent = this;
		this.instance_10.setTransform(-233, -12);

		this.instance_11 = new lib.ylbjq_zz_00195();
		this.instance_11.parent = this;
		this.instance_11.setTransform(-233, -12);

		this.instance_12 = new lib.ylbjq_zz_00194();
		this.instance_12.parent = this;
		this.instance_12.setTransform(-233, -12);

		this.instance_13 = new lib.ylbjq_zz_00193();
		this.instance_13.parent = this;
		this.instance_13.setTransform(-233, -12);

		this.instance_14 = new lib.ylbjq_zz_00192();
		this.instance_14.parent = this;
		this.instance_14.setTransform(-233, -12);

		this.instance_15 = new lib.ylbjq_zz_00191();
		this.instance_15.parent = this;
		this.instance_15.setTransform(-233, -12);

		this.instance_16 = new lib.ylbjq_zz_00190();
		this.instance_16.parent = this;
		this.instance_16.setTransform(-233, -12);

		this.instance_17 = new lib.ylbjq_zz_00189();
		this.instance_17.parent = this;
		this.instance_17.setTransform(-233, -12);

		this.instance_18 = new lib.ylbjq_zz_00188();
		this.instance_18.parent = this;
		this.instance_18.setTransform(-233, -12);

		this.instance_19 = new lib.ylbjq_zz_00187();
		this.instance_19.parent = this;
		this.instance_19.setTransform(-233, -12);

		this.instance_20 = new lib.ylbjq_zz_00186();
		this.instance_20.parent = this;
		this.instance_20.setTransform(-233, -12);

		this.instance_21 = new lib.ylbjq_zz_00185();
		this.instance_21.parent = this;
		this.instance_21.setTransform(-233, -12);

		this.instance_22 = new lib.ylbjq_zz_00184();
		this.instance_22.parent = this;
		this.instance_22.setTransform(-233, -12);

		this.instance_23 = new lib.ylbjq_zz_00183();
		this.instance_23.parent = this;
		this.instance_23.setTransform(-233, -12);

		this.instance_24 = new lib.ylbjq_zz_00182();
		this.instance_24.parent = this;
		this.instance_24.setTransform(-233, -12);

		this.instance_25 = new lib.ylbjq_zz_00181();
		this.instance_25.parent = this;
		this.instance_25.setTransform(-233, -12);

		this.instance_26 = new lib.ylbjq_zz_00180();
		this.instance_26.parent = this;
		this.instance_26.setTransform(-233, -12);

		this.instance_27 = new lib.ylbjq_zz_00179();
		this.instance_27.parent = this;
		this.instance_27.setTransform(-233, -12);

		this.instance_28 = new lib.ylbjq_zz_00178();
		this.instance_28.parent = this;
		this.instance_28.setTransform(-233, -12);

		this.instance_29 = new lib.ylbjq_zz_00177();
		this.instance_29.parent = this;
		this.instance_29.setTransform(-233, -12);

		this.instance_30 = new lib.ylbjq_zz_00176();
		this.instance_30.parent = this;
		this.instance_30.setTransform(-233, -12);

		this.instance_31 = new lib.ylbjq_zz_00175();
		this.instance_31.parent = this;
		this.instance_31.setTransform(-233, -12);

		this.instance_32 = new lib.ylbjq_zz_00174();
		this.instance_32.parent = this;
		this.instance_32.setTransform(-233, -12);

		this.instance_33 = new lib.ylbjq_zz_00173();
		this.instance_33.parent = this;
		this.instance_33.setTransform(-233, -12);

		this.instance_34 = new lib.ylbjq_zz_00172();
		this.instance_34.parent = this;
		this.instance_34.setTransform(-233, -12);

		this.instance_35 = new lib.ylbjq_zz_00171();
		this.instance_35.parent = this;
		this.instance_35.setTransform(-233, -12);

		this.instance_36 = new lib.ylbjq_zz_00170();
		this.instance_36.parent = this;
		this.instance_36.setTransform(-233, -12);

		this.instance_37 = new lib.ylbjq_zz_00169();
		this.instance_37.parent = this;
		this.instance_37.setTransform(-233, -12);

		this.instance_38 = new lib.ylbjq_zz_00168();
		this.instance_38.parent = this;
		this.instance_38.setTransform(-233, -12);

		this.instance_39 = new lib.ylbjq_zz_00167();
		this.instance_39.parent = this;
		this.instance_39.setTransform(-233, -12);

		this.instance_40 = new lib.ylbjq_zz_00166();
		this.instance_40.parent = this;
		this.instance_40.setTransform(-233, -12);

		this.instance_41 = new lib.ylbjq_zz_00165();
		this.instance_41.parent = this;
		this.instance_41.setTransform(-233, -12);

		this.instance_42 = new lib.ylbjq_zz_00164();
		this.instance_42.parent = this;
		this.instance_42.setTransform(-233, -12);

		this.instance_43 = new lib.ylbjq_zz_00163();
		this.instance_43.parent = this;
		this.instance_43.setTransform(-233, -12);

		this.instance_44 = new lib.ylbjq_zz_00162();
		this.instance_44.parent = this;
		this.instance_44.setTransform(-233, -12);

		this.instance_45 = new lib.ylbjq_zz_00161();
		this.instance_45.parent = this;
		this.instance_45.setTransform(-233, -12);

		this.instance_46 = new lib.ylbjq_zz_00160();
		this.instance_46.parent = this;
		this.instance_46.setTransform(-233, -12);

		this.instance_47 = new lib.ylbjq_zz_00159();
		this.instance_47.parent = this;
		this.instance_47.setTransform(-233, -12);

		this.instance_48 = new lib.ylbjq_zz_00158();
		this.instance_48.parent = this;
		this.instance_48.setTransform(-233, -12);

		this.instance_49 = new lib.ylbjq_zz_00157();
		this.instance_49.parent = this;
		this.instance_49.setTransform(-233, -12);

		this.instance_50 = new lib.ylbjq_zz_00156();
		this.instance_50.parent = this;
		this.instance_50.setTransform(-233, -12);

		this.instance_51 = new lib.ylbjq_zz_00155();
		this.instance_51.parent = this;
		this.instance_51.setTransform(-233, -12);

		this.instance_52 = new lib.ylbjq_zz_00154();
		this.instance_52.parent = this;
		this.instance_52.setTransform(-233, -12);

		this.instance_53 = new lib.ylbjq_zz_00153();
		this.instance_53.parent = this;
		this.instance_53.setTransform(-233, -12);

		this.instance_54 = new lib.ylbjq_zz_00152();
		this.instance_54.parent = this;
		this.instance_54.setTransform(-233, -12);

		this.instance_55 = new lib.ylbjq_zz_00151();
		this.instance_55.parent = this;
		this.instance_55.setTransform(-233, -12);

		this.instance_56 = new lib.ylbjq_zz_00150();
		this.instance_56.parent = this;
		this.instance_56.setTransform(-233, -12);

		this.instance_57 = new lib.ylbjq_zz_00149();
		this.instance_57.parent = this;
		this.instance_57.setTransform(-233, -12);

		this.instance_58 = new lib.ylbjq_zz_00148();
		this.instance_58.parent = this;
		this.instance_58.setTransform(-233, -12);

		this.instance_59 = new lib.ylbjq_zz_00147();
		this.instance_59.parent = this;
		this.instance_59.setTransform(-233, -12);

		this.instance_60 = new lib.ylbjq_zz_00146();
		this.instance_60.parent = this;
		this.instance_60.setTransform(-233, -12);

		this.instance_61 = new lib.ylbjq_zz_00145();
		this.instance_61.parent = this;
		this.instance_61.setTransform(-233, -12);

		this.instance_62 = new lib.ylbjq_zz_00144();
		this.instance_62.parent = this;
		this.instance_62.setTransform(-233, -12);

		this.instance_63 = new lib.ylbjq_zz_00143();
		this.instance_63.parent = this;
		this.instance_63.setTransform(-233, -12);

		this.instance_64 = new lib.ylbjq_zz_00142();
		this.instance_64.parent = this;
		this.instance_64.setTransform(-233, -12);

		this.instance_65 = new lib.ylbjq_zz_00141();
		this.instance_65.parent = this;
		this.instance_65.setTransform(-233, -12);

		this.instance_66 = new lib.ylbjq_zz_00140();
		this.instance_66.parent = this;
		this.instance_66.setTransform(-233, -12);

		this.instance_67 = new lib.ylbjq_zz_00139();
		this.instance_67.parent = this;
		this.instance_67.setTransform(-233, -12);

		this.instance_68 = new lib.ylbjq_zz_00138();
		this.instance_68.parent = this;
		this.instance_68.setTransform(-233, -12);

		this.instance_69 = new lib.ylbjq_zz_00137();
		this.instance_69.parent = this;
		this.instance_69.setTransform(-233, -12);

		this.instance_70 = new lib.ylbjq_zz_00136();
		this.instance_70.parent = this;
		this.instance_70.setTransform(-233, -12);

		this.instance_71 = new lib.ylbjq_zz_00135();
		this.instance_71.parent = this;
		this.instance_71.setTransform(-233, -12);

		this.instance_72 = new lib.ylbjq_zz_00134();
		this.instance_72.parent = this;
		this.instance_72.setTransform(-233, -12);

		this.instance_73 = new lib.ylbjq_zz_00133();
		this.instance_73.parent = this;
		this.instance_73.setTransform(-233, -12);

		this.instance_74 = new lib.ylbjq_zz_00132();
		this.instance_74.parent = this;
		this.instance_74.setTransform(-233, -12);

		this.instance_75 = new lib.ylbjq_zz_00131();
		this.instance_75.parent = this;
		this.instance_75.setTransform(-233, -12);

		this.instance_76 = new lib.ylbjq_zz_00130();
		this.instance_76.parent = this;
		this.instance_76.setTransform(-233, -12);

		this.instance_77 = new lib.ylbjq_zz_00129();
		this.instance_77.parent = this;
		this.instance_77.setTransform(-233, -12);

		this.instance_78 = new lib.ylbjq_zz_00128();
		this.instance_78.parent = this;
		this.instance_78.setTransform(-233, -12);

		this.instance_79 = new lib.ylbjq_zz_00127();
		this.instance_79.parent = this;
		this.instance_79.setTransform(-233, -12);

		this.instance_80 = new lib.ylbjq_zz_00126();
		this.instance_80.parent = this;
		this.instance_80.setTransform(-233, -12);

		this.instance_81 = new lib.ylbjq_zz_00125();
		this.instance_81.parent = this;
		this.instance_81.setTransform(-233, -12);

		this.instance_82 = new lib.ylbjq_zz_00124();
		this.instance_82.parent = this;
		this.instance_82.setTransform(-233, -12);

		this.instance_83 = new lib.ylbjq_zz_00123();
		this.instance_83.parent = this;
		this.instance_83.setTransform(-233, -12);

		this.instance_84 = new lib.ylbjq_zz_00122();
		this.instance_84.parent = this;
		this.instance_84.setTransform(-233, -12);

		this.instance_85 = new lib.ylbjq_zz_00121();
		this.instance_85.parent = this;
		this.instance_85.setTransform(-233, -12);

		this.instance_86 = new lib.ylbjq_zz_00120();
		this.instance_86.parent = this;
		this.instance_86.setTransform(-233, -12);

		this.instance_87 = new lib.ylbjq_zz_00119();
		this.instance_87.parent = this;
		this.instance_87.setTransform(-233, -12);

		this.instance_88 = new lib.ylbjq_zz_00118();
		this.instance_88.parent = this;
		this.instance_88.setTransform(-233, -12);

		this.instance_89 = new lib.ylbjq_zz_00117();
		this.instance_89.parent = this;
		this.instance_89.setTransform(-233, -12);

		this.instance_90 = new lib.ylbjq_zz_00116();
		this.instance_90.parent = this;
		this.instance_90.setTransform(-233, -12);

		this.instance_91 = new lib.ylbjq_zz_00115();
		this.instance_91.parent = this;
		this.instance_91.setTransform(-233, -12);

		this.instance_92 = new lib.ylbjq_zz_00114();
		this.instance_92.parent = this;
		this.instance_92.setTransform(-233, -12);

		this.instance_93 = new lib.ylbjq_zz_00113();
		this.instance_93.parent = this;
		this.instance_93.setTransform(-233, -12);

		this.instance_94 = new lib.ylbjq_zz_00112();
		this.instance_94.parent = this;
		this.instance_94.setTransform(-233, -12);

		this.instance_95 = new lib.ylbjq_zz_00111();
		this.instance_95.parent = this;
		this.instance_95.setTransform(-233, -12);

		this.instance_96 = new lib.ylbjq_zz_00110();
		this.instance_96.parent = this;
		this.instance_96.setTransform(-233, -12);

		this.instance_97 = new lib.ylbjq_zz_00109();
		this.instance_97.parent = this;
		this.instance_97.setTransform(-233, -12);

		this.instance_98 = new lib.ylbjq_zz_00108();
		this.instance_98.parent = this;
		this.instance_98.setTransform(-233, -12);

		this.instance_99 = new lib.ylbjq_zz_00107();
		this.instance_99.parent = this;
		this.instance_99.setTransform(-233, -12);

		this.instance_100 = new lib.ylbjq_zz_00106();
		this.instance_100.parent = this;
		this.instance_100.setTransform(-233, -12);

		this.instance_101 = new lib.ylbjq_zz_00105();
		this.instance_101.parent = this;
		this.instance_101.setTransform(-233, -12);

		this.instance_102 = new lib.ylbjq_zz_00104();
		this.instance_102.parent = this;
		this.instance_102.setTransform(-233, -12);

		this.instance_103 = new lib.ylbjq_zz_00103();
		this.instance_103.parent = this;
		this.instance_103.setTransform(-233, -12);

		this.instance_104 = new lib.ylbjq_zz_00102();
		this.instance_104.parent = this;
		this.instance_104.setTransform(-233, -12);

		this.instance_105 = new lib.ylbjq_zz_00101();
		this.instance_105.parent = this;
		this.instance_105.setTransform(-233, -12);

		this.instance_106 = new lib.ylbjq_zz_00100();
		this.instance_106.parent = this;
		this.instance_106.setTransform(-233, -12);

		this.instance_107 = new lib.ylbjq_zz_00099();
		this.instance_107.parent = this;
		this.instance_107.setTransform(-233, -12);

		this.instance_108 = new lib.ylbjq_zz_00098();
		this.instance_108.parent = this;
		this.instance_108.setTransform(-233, -12);

		this.instance_109 = new lib.ylbjq_zz_00097();
		this.instance_109.parent = this;
		this.instance_109.setTransform(-233, -12);

		this.instance_110 = new lib.ylbjq_zz_00096();
		this.instance_110.parent = this;
		this.instance_110.setTransform(-233, -12);

		this.instance_111 = new lib.ylbjq_zz_00095();
		this.instance_111.parent = this;
		this.instance_111.setTransform(-233, -12);

		this.instance_112 = new lib.ylbjq_zz_00094();
		this.instance_112.parent = this;
		this.instance_112.setTransform(-233, -12);

		this.instance_113 = new lib.ylbjq_zz_00093();
		this.instance_113.parent = this;
		this.instance_113.setTransform(-233, -12);

		this.instance_114 = new lib.ylbjq_zz_00092();
		this.instance_114.parent = this;
		this.instance_114.setTransform(-233, -12);

		this.instance_115 = new lib.ylbjq_zz_00091();
		this.instance_115.parent = this;
		this.instance_115.setTransform(-233, -12);

		this.instance_116 = new lib.ylbjq_zz_00090();
		this.instance_116.parent = this;
		this.instance_116.setTransform(-233, -12);

		this.instance_117 = new lib.ylbjq_zz_00089();
		this.instance_117.parent = this;
		this.instance_117.setTransform(-233, -12);

		this.instance_118 = new lib.ylbjq_zz_00088();
		this.instance_118.parent = this;
		this.instance_118.setTransform(-233, -12);

		this.instance_119 = new lib.ylbjq_zz_00087();
		this.instance_119.parent = this;
		this.instance_119.setTransform(-233, -12);

		this.instance_120 = new lib.ylbjq_zz_00086();
		this.instance_120.parent = this;
		this.instance_120.setTransform(-233, -12);

		this.instance_121 = new lib.ylbjq_zz_00085();
		this.instance_121.parent = this;
		this.instance_121.setTransform(-233, -12);

		this.instance_122 = new lib.ylbjq_zz_00084();
		this.instance_122.parent = this;
		this.instance_122.setTransform(-233, -12);

		this.instance_123 = new lib.ylbjq_zz_00083();
		this.instance_123.parent = this;
		this.instance_123.setTransform(-233, -12);

		this.instance_124 = new lib.ylbjq_zz_00082();
		this.instance_124.parent = this;
		this.instance_124.setTransform(-233, -12);

		this.instance_125 = new lib.ylbjq_zz_00081();
		this.instance_125.parent = this;
		this.instance_125.setTransform(-233, -12);

		this.instance_126 = new lib.ylbjq_zz_00080();
		this.instance_126.parent = this;
		this.instance_126.setTransform(-233, -12);

		this.instance_127 = new lib.ylbjq_zz_00079();
		this.instance_127.parent = this;
		this.instance_127.setTransform(-233, -12);

		this.instance_128 = new lib.ylbjq_zz_00078();
		this.instance_128.parent = this;
		this.instance_128.setTransform(-233, -12);

		this.instance_129 = new lib.ylbjq_zz_00077();
		this.instance_129.parent = this;
		this.instance_129.setTransform(-233, -12);

		this.instance_130 = new lib.ylbjq_zz_00076();
		this.instance_130.parent = this;
		this.instance_130.setTransform(-233, -12);

		this.instance_131 = new lib.ylbjq_zz_00075();
		this.instance_131.parent = this;
		this.instance_131.setTransform(-233, -12);

		this.instance_132 = new lib.ylbjq_zz_00074();
		this.instance_132.parent = this;
		this.instance_132.setTransform(-233, -12);

		this.instance_133 = new lib.ylbjq_zz_00073();
		this.instance_133.parent = this;
		this.instance_133.setTransform(-233, -12);

		this.instance_134 = new lib.ylbjq_zz_00072();
		this.instance_134.parent = this;
		this.instance_134.setTransform(-233, -12);

		this.instance_135 = new lib.ylbjq_zz_00071();
		this.instance_135.parent = this;
		this.instance_135.setTransform(-233, -12);

		this.instance_136 = new lib.ylbjq_zz_00070();
		this.instance_136.parent = this;
		this.instance_136.setTransform(-233, -12);

		this.instance_137 = new lib.ylbjq_zz_00069();
		this.instance_137.parent = this;
		this.instance_137.setTransform(-233, -12);

		this.instance_138 = new lib.ylbjq_zz_00068();
		this.instance_138.parent = this;
		this.instance_138.setTransform(-233, -12);

		this.instance_139 = new lib.ylbjq_zz_00067();
		this.instance_139.parent = this;
		this.instance_139.setTransform(-233, -12);

		this.instance_140 = new lib.ylbjq_zz_00066();
		this.instance_140.parent = this;
		this.instance_140.setTransform(-233, -12);

		this.instance_141 = new lib.ylbjq_zz_00065();
		this.instance_141.parent = this;
		this.instance_141.setTransform(-233, -12);

		this.instance_142 = new lib.ylbjq_zz_00064();
		this.instance_142.parent = this;
		this.instance_142.setTransform(-233, -12);

		this.instance_143 = new lib.ylbjq_zz_00063();
		this.instance_143.parent = this;
		this.instance_143.setTransform(-233, -12);

		this.instance_144 = new lib.ylbjq_zz_00062();
		this.instance_144.parent = this;
		this.instance_144.setTransform(-233, -12);

		this.instance_145 = new lib.ylbjq_zz_00061();
		this.instance_145.parent = this;
		this.instance_145.setTransform(-233, -12);

		this.instance_146 = new lib.ylbjq_zz_00060();
		this.instance_146.parent = this;
		this.instance_146.setTransform(-233, -12);

		this.instance_147 = new lib.ylbjq_zz_00059();
		this.instance_147.parent = this;
		this.instance_147.setTransform(-233, -12);

		this.instance_148 = new lib.ylbjq_zz_00058();
		this.instance_148.parent = this;
		this.instance_148.setTransform(-233, -12);

		this.instance_149 = new lib.ylbjq_zz_00057();
		this.instance_149.parent = this;
		this.instance_149.setTransform(-233, -12);

		this.instance_150 = new lib.ylbjq_zz_00056();
		this.instance_150.parent = this;
		this.instance_150.setTransform(-233, -12);

		this.instance_151 = new lib.ylbjq_zz_00055();
		this.instance_151.parent = this;
		this.instance_151.setTransform(-233, -12);

		this.instance_152 = new lib.ylbjq_zz_00054();
		this.instance_152.parent = this;
		this.instance_152.setTransform(-233, -12);

		this.instance_153 = new lib.ylbjq_zz_00053();
		this.instance_153.parent = this;
		this.instance_153.setTransform(-233, -12);

		this.instance_154 = new lib.ylbjq_zz_00052();
		this.instance_154.parent = this;
		this.instance_154.setTransform(-233, -12);

		this.instance_155 = new lib.ylbjq_zz_00051();
		this.instance_155.parent = this;
		this.instance_155.setTransform(-233, -12);

		this.instance_156 = new lib.ylbjq_zz_00050();
		this.instance_156.parent = this;
		this.instance_156.setTransform(-233, -12);

		this.instance_157 = new lib.ylbjq_zz_00049();
		this.instance_157.parent = this;
		this.instance_157.setTransform(-233, -12);

		this.instance_158 = new lib.ylbjq_zz_00048();
		this.instance_158.parent = this;
		this.instance_158.setTransform(-233, -12);

		this.instance_159 = new lib.ylbjq_zz_00047();
		this.instance_159.parent = this;
		this.instance_159.setTransform(-233, -12);

		this.instance_160 = new lib.ylbjq_zz_00046();
		this.instance_160.parent = this;
		this.instance_160.setTransform(-233, -12);

		this.instance_161 = new lib.ylbjq_zz_00045();
		this.instance_161.parent = this;
		this.instance_161.setTransform(-233, -12);

		this.instance_162 = new lib.ylbjq_zz_00044();
		this.instance_162.parent = this;
		this.instance_162.setTransform(-233, -12);

		this.instance_163 = new lib.ylbjq_zz_00043();
		this.instance_163.parent = this;
		this.instance_163.setTransform(-233, -12);

		this.instance_164 = new lib.ylbjq_zz_00042();
		this.instance_164.parent = this;
		this.instance_164.setTransform(-233, -12);

		this.instance_165 = new lib.ylbjq_zz_00041();
		this.instance_165.parent = this;
		this.instance_165.setTransform(-233, -12);

		this.instance_166 = new lib.ylbjq_zz_00040();
		this.instance_166.parent = this;
		this.instance_166.setTransform(-233, -12);

		this.instance_167 = new lib.ylbjq_zz_00039();
		this.instance_167.parent = this;
		this.instance_167.setTransform(-233, -12);

		this.instance_168 = new lib.ylbjq_zz_00038();
		this.instance_168.parent = this;
		this.instance_168.setTransform(-233, -12);

		this.instance_169 = new lib.ylbjq_zz_00037();
		this.instance_169.parent = this;
		this.instance_169.setTransform(-233, -12);

		this.instance_170 = new lib.ylbjq_zz_00036();
		this.instance_170.parent = this;
		this.instance_170.setTransform(-233, -12);

		this.instance_171 = new lib.ylbjq_zz_00035();
		this.instance_171.parent = this;
		this.instance_171.setTransform(-233, -12);

		this.instance_172 = new lib.ylbjq_zz_00034();
		this.instance_172.parent = this;
		this.instance_172.setTransform(-233, -12);

		this.instance_173 = new lib.ylbjq_zz_00033();
		this.instance_173.parent = this;
		this.instance_173.setTransform(-233, -12);

		this.instance_174 = new lib.ylbjq_zz_00032();
		this.instance_174.parent = this;
		this.instance_174.setTransform(-233, -12);

		this.instance_175 = new lib.ylbjq_zz_00031();
		this.instance_175.parent = this;
		this.instance_175.setTransform(-233, -12);

		this.instance_176 = new lib.ylbjq_zz_00030();
		this.instance_176.parent = this;
		this.instance_176.setTransform(-233, -12);

		this.instance_177 = new lib.ylbjq_zz_00029();
		this.instance_177.parent = this;
		this.instance_177.setTransform(-233, -12);

		this.instance_178 = new lib.ylbjq_zz_00028();
		this.instance_178.parent = this;
		this.instance_178.setTransform(-233, -12);

		this.instance_179 = new lib.ylbjq_zz_00027();
		this.instance_179.parent = this;
		this.instance_179.setTransform(-233, -12);

		this.instance_180 = new lib.ylbjq_zz_00026();
		this.instance_180.parent = this;
		this.instance_180.setTransform(-233, -12);

		this.instance_181 = new lib.ylbjq_zz_00025();
		this.instance_181.parent = this;
		this.instance_181.setTransform(-233, -12);

		this.instance_182 = new lib.ylbjq_zz_00024();
		this.instance_182.parent = this;
		this.instance_182.setTransform(-233, -12);

		this.instance_183 = new lib.ylbjq_zz_00023();
		this.instance_183.parent = this;
		this.instance_183.setTransform(-233, -12);

		this.instance_184 = new lib.ylbjq_zz_00022();
		this.instance_184.parent = this;
		this.instance_184.setTransform(-233, -12);

		this.instance_185 = new lib.ylbjq_zz_00021();
		this.instance_185.parent = this;
		this.instance_185.setTransform(-233, -12);

		this.instance_186 = new lib.ylbjq_zz_00020();
		this.instance_186.parent = this;
		this.instance_186.setTransform(-233, -12);

		this.instance_187 = new lib.ylbjq_zz_00019();
		this.instance_187.parent = this;
		this.instance_187.setTransform(-233, -12);

		this.instance_188 = new lib.ylbjq_zz_00018();
		this.instance_188.parent = this;
		this.instance_188.setTransform(-233, -12);

		this.instance_189 = new lib.ylbjq_zz_00017();
		this.instance_189.parent = this;
		this.instance_189.setTransform(-233, -12);

		this.instance_190 = new lib.ylbjq_zz_00016();
		this.instance_190.parent = this;
		this.instance_190.setTransform(-233, -12);

		this.instance_191 = new lib.ylbjq_zz_00015();
		this.instance_191.parent = this;
		this.instance_191.setTransform(-233, -12);

		this.instance_192 = new lib.ylbjq_zz_00014();
		this.instance_192.parent = this;
		this.instance_192.setTransform(-233, -12);

		this.instance_193 = new lib.ylbjq_zz_00013();
		this.instance_193.parent = this;
		this.instance_193.setTransform(-233, -12);

		this.instance_194 = new lib.ylbjq_zz_00012();
		this.instance_194.parent = this;
		this.instance_194.setTransform(-233, -12);

		this.instance_195 = new lib.ylbjq_zz_00011();
		this.instance_195.parent = this;
		this.instance_195.setTransform(-233, -12);

		this.instance_196 = new lib.ylbjq_zz_00010();
		this.instance_196.parent = this;
		this.instance_196.setTransform(-233, -12);

		this.instance_197 = new lib.ylbjq_zz_00009();
		this.instance_197.parent = this;
		this.instance_197.setTransform(-233, -12);

		this.instance_198 = new lib.ylbjq_zz_00008();
		this.instance_198.parent = this;
		this.instance_198.setTransform(-233, -12);

		this.instance_199 = new lib.ylbjq_zz_00007();
		this.instance_199.parent = this;
		this.instance_199.setTransform(-233, -12);

		this.instance_200 = new lib.ylbjq_zz_00006();
		this.instance_200.parent = this;
		this.instance_200.setTransform(-233, -12);

		this.instance_201 = new lib.ylbjq_zz_00005();
		this.instance_201.parent = this;
		this.instance_201.setTransform(-233, -12);

		this.instance_202 = new lib.ylbjq_zz_00004();
		this.instance_202.parent = this;
		this.instance_202.setTransform(-233, -12);

		this.instance_203 = new lib.ylbjq_zz_00003();
		this.instance_203.parent = this;
		this.instance_203.setTransform(-233, -12);

		this.instance_204 = new lib.ylbjq_zz_00002();
		this.instance_204.parent = this;
		this.instance_204.setTransform(-233, -12);

		this.instance_205 = new lib.ylbjq_zz_00001();
		this.instance_205.parent = this;
		this.instance_205.setTransform(-233, -12);

		this.instance_206 = new lib.ylbjq_zz_00000();
		this.instance_206.parent = this;
		this.instance_206.setTransform(-233, -12);

		var maskedShapeInstanceList = [this.instance_6, this.instance_7, this.instance_8, this.instance_9, this.instance_10, this.instance_11, this.instance_12, this.instance_13, this.instance_14, this.instance_15, this.instance_16, this.instance_17, this.instance_18, this.instance_19, this.instance_20, this.instance_21, this.instance_22, this.instance_23, this.instance_24, this.instance_25, this.instance_26, this.instance_27, this.instance_28, this.instance_29, this.instance_30, this.instance_31, this.instance_32, this.instance_33, this.instance_34, this.instance_35, this.instance_36, this.instance_37, this.instance_38, this.instance_39, this.instance_40, this.instance_41, this.instance_42, this.instance_43, this.instance_44, this.instance_45, this.instance_46, this.instance_47, this.instance_48, this.instance_49, this.instance_50, this.instance_51, this.instance_52, this.instance_53, this.instance_54, this.instance_55, this.instance_56, this.instance_57, this.instance_58, this.instance_59, this.instance_60, this.instance_61, this.instance_62, this.instance_63, this.instance_64, this.instance_65, this.instance_66, this.instance_67, this.instance_68, this.instance_69, this.instance_70, this.instance_71, this.instance_72, this.instance_73, this.instance_74, this.instance_75, this.instance_76, this.instance_77, this.instance_78, this.instance_79, this.instance_80, this.instance_81, this.instance_82, this.instance_83, this.instance_84, this.instance_85, this.instance_86, this.instance_87, this.instance_88, this.instance_89, this.instance_90, this.instance_91, this.instance_92, this.instance_93, this.instance_94, this.instance_95, this.instance_96, this.instance_97, this.instance_98, this.instance_99, this.instance_100, this.instance_101, this.instance_102, this.instance_103, this.instance_104, this.instance_105, this.instance_106, this.instance_107, this.instance_108, this.instance_109, this.instance_110, this.instance_111, this.instance_112, this.instance_113, this.instance_114, this.instance_115, this.instance_116, this.instance_117, this.instance_118, this.instance_119, this.instance_120, this.instance_121, this.instance_122, this.instance_123, this.instance_124, this.instance_125, this.instance_126, this.instance_127, this.instance_128, this.instance_129, this.instance_130, this.instance_131, this.instance_132, this.instance_133, this.instance_134, this.instance_135, this.instance_136, this.instance_137, this.instance_138, this.instance_139, this.instance_140, this.instance_141, this.instance_142, this.instance_143, this.instance_144, this.instance_145, this.instance_146, this.instance_147, this.instance_148, this.instance_149, this.instance_150, this.instance_151, this.instance_152, this.instance_153, this.instance_154, this.instance_155, this.instance_156, this.instance_157, this.instance_158, this.instance_159, this.instance_160, this.instance_161, this.instance_162, this.instance_163, this.instance_164, this.instance_165, this.instance_166, this.instance_167, this.instance_168, this.instance_169, this.instance_170, this.instance_171, this.instance_172, this.instance_173, this.instance_174, this.instance_175, this.instance_176, this.instance_177, this.instance_178, this.instance_179, this.instance_180, this.instance_181, this.instance_182, this.instance_183, this.instance_184, this.instance_185, this.instance_186, this.instance_187, this.instance_188, this.instance_189, this.instance_190, this.instance_191, this.instance_192, this.instance_193, this.instance_194, this.instance_195, this.instance_196, this.instance_197, this.instance_198, this.instance_199, this.instance_200, this.instance_201, this.instance_202, this.instance_203, this.instance_204, this.instance_205, this.instance_206];

		for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_6
			}]
		}).to({
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
				t: this.instance_51
			}]
		}, 1).to({
			state: [{
				t: this.instance_52
			}]
		}, 1).to({
			state: [{
				t: this.instance_53
			}]
		}, 1).to({
			state: [{
				t: this.instance_54
			}]
		}, 1).to({
			state: [{
				t: this.instance_55
			}]
		}, 1).to({
			state: [{
				t: this.instance_56
			}]
		}, 1).to({
			state: [{
				t: this.instance_57
			}]
		}, 1).to({
			state: [{
				t: this.instance_58
			}]
		}, 1).to({
			state: [{
				t: this.instance_59
			}]
		}, 1).to({
			state: [{
				t: this.instance_60
			}]
		}, 1).to({
			state: [{
				t: this.instance_61
			}]
		}, 1).to({
			state: [{
				t: this.instance_62
			}]
		}, 1).to({
			state: [{
				t: this.instance_63
			}]
		}, 1).to({
			state: [{
				t: this.instance_64
			}]
		}, 1).to({
			state: [{
				t: this.instance_65
			}]
		}, 1).to({
			state: [{
				t: this.instance_66
			}]
		}, 1).to({
			state: [{
				t: this.instance_67
			}]
		}, 1).to({
			state: [{
				t: this.instance_68
			}]
		}, 1).to({
			state: [{
				t: this.instance_69
			}]
		}, 1).to({
			state: [{
				t: this.instance_70
			}]
		}, 1).to({
			state: [{
				t: this.instance_71
			}]
		}, 1).to({
			state: [{
				t: this.instance_72
			}]
		}, 1).to({
			state: [{
				t: this.instance_73
			}]
		}, 1).to({
			state: [{
				t: this.instance_74
			}]
		}, 1).to({
			state: [{
				t: this.instance_75
			}]
		}, 1).to({
			state: [{
				t: this.instance_76
			}]
		}, 1).to({
			state: [{
				t: this.instance_77
			}]
		}, 1).to({
			state: [{
				t: this.instance_78
			}]
		}, 1).to({
			state: [{
				t: this.instance_79
			}]
		}, 1).to({
			state: [{
				t: this.instance_80
			}]
		}, 1).to({
			state: [{
				t: this.instance_81
			}]
		}, 1).to({
			state: [{
				t: this.instance_82
			}]
		}, 1).to({
			state: [{
				t: this.instance_83
			}]
		}, 1).to({
			state: [{
				t: this.instance_84
			}]
		}, 1).to({
			state: [{
				t: this.instance_85
			}]
		}, 1).to({
			state: [{
				t: this.instance_86
			}]
		}, 1).to({
			state: [{
				t: this.instance_87
			}]
		}, 1).to({
			state: [{
				t: this.instance_88
			}]
		}, 1).to({
			state: [{
				t: this.instance_89
			}]
		}, 1).to({
			state: [{
				t: this.instance_90
			}]
		}, 1).to({
			state: [{
				t: this.instance_91
			}]
		}, 1).to({
			state: [{
				t: this.instance_92
			}]
		}, 1).to({
			state: [{
				t: this.instance_93
			}]
		}, 1).to({
			state: [{
				t: this.instance_94
			}]
		}, 1).to({
			state: [{
				t: this.instance_95
			}]
		}, 1).to({
			state: [{
				t: this.instance_96
			}]
		}, 1).to({
			state: [{
				t: this.instance_97
			}]
		}, 1).to({
			state: [{
				t: this.instance_98
			}]
		}, 1).to({
			state: [{
				t: this.instance_99
			}]
		}, 1).to({
			state: [{
				t: this.instance_100
			}]
		}, 1).to({
			state: [{
				t: this.instance_101
			}]
		}, 1).to({
			state: [{
				t: this.instance_102
			}]
		}, 1).to({
			state: [{
				t: this.instance_103
			}]
		}, 1).to({
			state: [{
				t: this.instance_104
			}]
		}, 1).to({
			state: [{
				t: this.instance_105
			}]
		}, 1).to({
			state: [{
				t: this.instance_106
			}]
		}, 1).to({
			state: [{
				t: this.instance_107
			}]
		}, 1).to({
			state: [{
				t: this.instance_108
			}]
		}, 1).to({
			state: [{
				t: this.instance_109
			}]
		}, 1).to({
			state: [{
				t: this.instance_110
			}]
		}, 1).to({
			state: [{
				t: this.instance_111
			}]
		}, 1).to({
			state: [{
				t: this.instance_112
			}]
		}, 1).to({
			state: [{
				t: this.instance_113
			}]
		}, 1).to({
			state: [{
				t: this.instance_114
			}]
		}, 1).to({
			state: [{
				t: this.instance_115
			}]
		}, 1).to({
			state: [{
				t: this.instance_116
			}]
		}, 1).to({
			state: [{
				t: this.instance_117
			}]
		}, 1).to({
			state: [{
				t: this.instance_118
			}]
		}, 1).to({
			state: [{
				t: this.instance_119
			}]
		}, 1).to({
			state: [{
				t: this.instance_120
			}]
		}, 1).to({
			state: [{
				t: this.instance_121
			}]
		}, 1).to({
			state: [{
				t: this.instance_122
			}]
		}, 1).to({
			state: [{
				t: this.instance_123
			}]
		}, 1).to({
			state: [{
				t: this.instance_124
			}]
		}, 1).to({
			state: [{
				t: this.instance_125
			}]
		}, 1).to({
			state: [{
				t: this.instance_126
			}]
		}, 1).to({
			state: [{
				t: this.instance_127
			}]
		}, 1).to({
			state: [{
				t: this.instance_128
			}]
		}, 1).to({
			state: [{
				t: this.instance_129
			}]
		}, 1).to({
			state: [{
				t: this.instance_130
			}]
		}, 1).to({
			state: [{
				t: this.instance_131
			}]
		}, 1).to({
			state: [{
				t: this.instance_132
			}]
		}, 1).to({
			state: [{
				t: this.instance_133
			}]
		}, 1).to({
			state: [{
				t: this.instance_134
			}]
		}, 1).to({
			state: [{
				t: this.instance_135
			}]
		}, 1).to({
			state: [{
				t: this.instance_136
			}]
		}, 1).to({
			state: [{
				t: this.instance_137
			}]
		}, 1).to({
			state: [{
				t: this.instance_138
			}]
		}, 1).to({
			state: [{
				t: this.instance_139
			}]
		}, 1).to({
			state: [{
				t: this.instance_140
			}]
		}, 1).to({
			state: [{
				t: this.instance_141
			}]
		}, 1).to({
			state: [{
				t: this.instance_142
			}]
		}, 1).to({
			state: [{
				t: this.instance_143
			}]
		}, 1).to({
			state: [{
				t: this.instance_144
			}]
		}, 1).to({
			state: [{
				t: this.instance_145
			}]
		}, 1).to({
			state: [{
				t: this.instance_146
			}]
		}, 1).to({
			state: [{
				t: this.instance_147
			}]
		}, 1).to({
			state: [{
				t: this.instance_148
			}]
		}, 1).to({
			state: [{
				t: this.instance_149
			}]
		}, 1).to({
			state: [{
				t: this.instance_150
			}]
		}, 1).to({
			state: [{
				t: this.instance_151
			}]
		}, 1).to({
			state: [{
				t: this.instance_152
			}]
		}, 1).to({
			state: [{
				t: this.instance_153
			}]
		}, 1).to({
			state: [{
				t: this.instance_154
			}]
		}, 1).to({
			state: [{
				t: this.instance_155
			}]
		}, 1).to({
			state: [{
				t: this.instance_156
			}]
		}, 1).to({
			state: [{
				t: this.instance_157
			}]
		}, 1).to({
			state: [{
				t: this.instance_158
			}]
		}, 1).to({
			state: [{
				t: this.instance_159
			}]
		}, 1).to({
			state: [{
				t: this.instance_160
			}]
		}, 1).to({
			state: [{
				t: this.instance_161
			}]
		}, 1).to({
			state: [{
				t: this.instance_162
			}]
		}, 1).to({
			state: [{
				t: this.instance_163
			}]
		}, 1).to({
			state: [{
				t: this.instance_164
			}]
		}, 1).to({
			state: [{
				t: this.instance_165
			}]
		}, 1).to({
			state: [{
				t: this.instance_166
			}]
		}, 1).to({
			state: [{
				t: this.instance_167
			}]
		}, 1).to({
			state: [{
				t: this.instance_168
			}]
		}, 1).to({
			state: [{
				t: this.instance_169
			}]
		}, 1).to({
			state: [{
				t: this.instance_170
			}]
		}, 1).to({
			state: [{
				t: this.instance_171
			}]
		}, 1).to({
			state: [{
				t: this.instance_172
			}]
		}, 1).to({
			state: [{
				t: this.instance_173
			}]
		}, 1).to({
			state: [{
				t: this.instance_174
			}]
		}, 1).to({
			state: [{
				t: this.instance_175
			}]
		}, 1).to({
			state: [{
				t: this.instance_176
			}]
		}, 1).to({
			state: [{
				t: this.instance_177
			}]
		}, 1).to({
			state: [{
				t: this.instance_178
			}]
		}, 1).to({
			state: [{
				t: this.instance_179
			}]
		}, 1).to({
			state: [{
				t: this.instance_180
			}]
		}, 1).to({
			state: [{
				t: this.instance_181
			}]
		}, 1).to({
			state: [{
				t: this.instance_182
			}]
		}, 1).to({
			state: [{
				t: this.instance_183
			}]
		}, 1).to({
			state: [{
				t: this.instance_184
			}]
		}, 1).to({
			state: [{
				t: this.instance_185
			}]
		}, 1).to({
			state: [{
				t: this.instance_186
			}]
		}, 1).to({
			state: [{
				t: this.instance_187
			}]
		}, 1).to({
			state: [{
				t: this.instance_188
			}]
		}, 1).to({
			state: [{
				t: this.instance_189
			}]
		}, 1).to({
			state: [{
				t: this.instance_190
			}]
		}, 1).to({
			state: [{
				t: this.instance_191
			}]
		}, 1).to({
			state: [{
				t: this.instance_192
			}]
		}, 1).to({
			state: [{
				t: this.instance_193
			}]
		}, 1).to({
			state: [{
				t: this.instance_194
			}]
		}, 1).to({
			state: [{
				t: this.instance_195
			}]
		}, 1).to({
			state: [{
				t: this.instance_196
			}]
		}, 1).to({
			state: [{
				t: this.instance_197
			}]
		}, 1).to({
			state: [{
				t: this.instance_198
			}]
		}, 1).to({
			state: [{
				t: this.instance_199
			}]
		}, 1).to({
			state: [{
				t: this.instance_200
			}]
		}, 1).to({
			state: [{
				t: this.instance_201
			}]
		}, 1).to({
			state: [{
				t: this.instance_202
			}]
		}, 1).to({
			state: [{
				t: this.instance_203
			}]
		}, 1).to({
			state: [{
				t: this.instance_204
			}]
		}, 1).to({
			state: [{
				t: this.instance_205
			}]
		}, 1).to({
			state: [{
				t: this.instance_206
			}]
		}, 1).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.7, 0, 566.8, 530);


	(lib.page2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_4 = function () {
			createjs.Sound.removeAllSounds();
			var queue = new createjs.LoadQueue();
			queue.installPlugin(createjs.Sound);
			queue.on("complete", handleComplete, this);
			queue.loadFile({
				id: "sound",
				src: "sounds/s2.mp3"
			});

			function handleComplete() {
				createjs.Sound.play("sound");

			}
		}
		this.frame_14 = function () {
			this.stop();
		}

		// actions tween:
		// this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(1));

		// 图层 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AgUAWIAAgqIApAAIAAAqg");
		this.shape.setTransform(1259.1, 687.8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIArAAIAAAqg");
		this.shape_1.setTransform(1253.4, 687.8);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIAqAAIAAAqg");
		this.shape_2.setTransform(1247.7, 687.8);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AgUAWIAAgqIApAAIAAAqg");
		this.shape_3.setTransform(1259.1, 682.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIArAAIAAAqg");
		this.shape_4.setTransform(1253.4, 682.1);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIAqAAIAAAqg");
		this.shape_5.setTransform(1247.7, 682.1);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
		this.shape_6.setTransform(1259.1, 676.4);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("AgVAVIAAgpIArAAIAAApg");
		this.shape_7.setTransform(1253.4, 676.4);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AgVAVIAAgpIAqAAIAAApg");
		this.shape_8.setTransform(1247.7, 676.4);

		this.prevBtn = new lib.fanBtn();
		this.prevBtn.parent = this;
		this.prevBtn.setTransform(1215.4, 682.3, 1, 1, 180);
		new cjs.ButtonHelper(this.prevBtn, 0, 1, 1);

		this.nextBtn = new lib.fanBtn();
		this.nextBtn.parent = this;
		this.nextBtn.setTransform(1289.9, 681.3);
		new cjs.ButtonHelper(this.nextBtn, 0, 1, 1);

		this.baozhaBtn = new lib.baozhaBtn();
		this.baozhaBtn.parent = this;
		this.baozhaBtn.setTransform(1253.3, 681.7);
		new cjs.ButtonHelper(this.baozhaBtn, 0, 1, 2, false, new lib.baozhaBtn(), 3);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.baozhaBtn
			}, {
				t: this.nextBtn
			}, {
				t: this.prevBtn
			}, {
				t: this.shape_8
			}, {
				t: this.shape_7
			}, {
				t: this.shape_6
			}, {
				t: this.shape_5
			}, {
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}).wait(15));

		// // 图层 4
		// this.shape_9 = new cjs.Shape();
		// this.shape_9.graphics.f("#333F48").s().p("AiOBkIAdgZIAAhVIgfAAIAAglIBFAAIAAB6QAXAZAwAAQCAAAAVgCQgIAXgEAQIhcABIguAAQgcAAgWgHQgWgHgPgOIgiAigAARBbIAAhdQgZAmgfAfIgegeQAygkAegzIhDAAIAAgjIBJAAIAAg6IAnAAIAAA6IArAAIghgcIAZgYIAmAjIgTARIAZAAIAAAjIhPAAIAAAiIAWgSIBDBFIgdAaIg8hGIAABkgAiFh4IAfgTQAWAcASAaIgiAXQgSgfgTgbg");
		// this.shape_9.setTransform(947, 232.6);

		// this.shape_10 = new cjs.Shape();
		// this.shape_10.graphics.f("#333F48").s().p("AgJB4QAVgRAQgWIgRALIgFgLQgjAZgQASIgXgaQALgKAAgUIAAhGIgKAYIgMgMIAACEIgiAAIAAh4QgKAjgMAZIgKgzQARgjAMgzIgZAAIAAgkIAcAAIAAg1IAiAAIAAA1IARAAIAAAkIgRAAIAAAbIAWAQIAAh3IBPAAIAACRIgxAAIAAA0IATgOIgLgVIAZgNQARAaANAaQAVgdAHgfIglAAIAIhfIAcAAIgEA/IAMAAQAFgfAAguIgrAAIAAghIBnAAIAAAhIgaAAQAAApgGAkIAlAAIAAAgIgrAAIgFASIAQAAIAABAQAAAKAFAAQAFAAACgLQACgMAAgWIAXAMQAABHgiAAIgIAAQgdAAAAgsIAAgWQgVApggAeIgfgZgAgbgOIAVAAIAAgeIgVAAgAgbhIIAVAAIAAgeIgVAAg");
		// this.shape_10.setTransform(915.9, 232.6);

		// this.shape_11 = new cjs.Shape();
		// this.shape_11.graphics.f("#999999").s().p("AgYAtIgZAMQgDgHgEgHQAQgFAPgHIAIALIgGACIANABQAFAAAAgFIAAgJIgUAAIgKAAIAAgKIgOAJIgIgNIANgHIgFgFIAJgHIAGAGIAFgEIgHgFIAJgHIAGAFIAHgHIgRAAQgIAIgKAHIgJgKQASgLALgPIAMAFIgEAFIAVAAIAAAMIgLANIAbAAQgLgMgFgQIALgEIADAGIAlAAIAAALIgOAQQAJAIANAEIgJANIgMgHIAAAMIgcAAIAAAOQAAAFgDADQgCADgEACIgWAAIgDgNgAAlASQgJgFgHgIIAAAHIgmAAIAAgGQgHAHgIAFIBFAAIAAAAgAAbgHIAIgJIgPAAIAHAJgAASArIAGgLIAhALIgHANIgggNgAgXAsIAGgCIgIgLIAUAAIAAAJQAAAFgFAAIgNgBgAgZAfgAg1gbIAAgUIAuAAIgDgIIAQgCIAEAKIAtAAIAAATIgPAAIAAgHIhOAAIAAAIg");
		// this.shape_11.setTransform(761.2, 736.9);

		// this.shape_12 = new cjs.Shape();
		// this.shape_12.graphics.f("#999999").s().p("AgWAqQAWgLAHgPQAGgPAAghIAPAAQABAYgEAQIAIAAIAAAaQAAAFAFAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQACgDABgOIAOAHQgCAUgFADQgFADgFAAIgJAAQgOAAAAgOIAAgMQgJARgVAMIgLgOgAg6AfQALgMAGgOIgPgcIAMgGIAKASQAEgLABgNIgbAAIAAgPIAqAAQgBAfgKAYIAOAZIgNAIIgIgRQgIAOgKALIgIgPgAgKAQIAAhHIA+AAIAABHIgQAAIAAg4IggAAIAAA4g");
		// this.shape_12.setTransform(749.2, 737.2);

		// this.shape_13 = new cjs.Shape();
		// this.shape_13.graphics.f("#999999").s().p("AgmAuQATgBAPgFQgKgGgIgLIgHAAIAAgNIBMAAIAAANQgKAKgJAHQANACASABIgHAOQgagDgQgGQgPAGgZAEIgIgMgAALAjQALgFAHgHIgiAAQAGAHAKAFgAg6AvQAKgSAAgjIAAgoIAuAAIgDgIIASgEIAFAMIAoAAIAAAMIhbAAIAAAeQAAAsgMASIgNgLgAgSAEIAAgSIgNAAIAAgMIANAAIAAgFIAPAAIAAAFIAcAAIAAgFIAPAAIAAAFIAQAAIAAAMIgQAAIAAASgAgDgGIAcAAIAAgIIgcAAg");
		// this.shape_13.setTransform(737.1, 737);

		// this.shape_14 = new cjs.Shape();
		// this.shape_14.graphics.f("#999999").s().p("AggABQAAgWAJgNQAJgMAPAAQAfAAAAAuQABAXgJAMQgJAMgPAAQggAAAAgugAgNABQAAAgANAAQANAAAAghQAAgggMAAQgOAAAAAhg");
		// this.shape_14.setTransform(727.5, 736.6);

		// this.shape_15 = new cjs.Shape();
		// this.shape_15.graphics.f("#999999").s().p("AgWAkQgJgLAAgUQAAgWALgPQALgOASAAQAKAAAHACIAAARQgIgFgHAAQgLAAgGAJQgGAIAAAOIAAAAQAHgKAMAAQALgBAHAIQAGAHAAANQAAANgIAJQgJAJgNAAQgPAAgIgLgAgHAGQgEADAAAHQAAAHAEAEQADAFAFABQAFAAAEgFQADgFAAgGQAAgPgMgBQgFAAgDAFg");
		// this.shape_15.setTransform(720.2, 736.6);

		// this.shape_16 = new cjs.Shape();
		// this.shape_16.graphics.f("#999999").s().p("AgcArIAAgRQAKAHAMAAQAGAAAFgEQAEgDAAgHQAAgGgFgEQgFgDgJAAIgJAAIAAgNIAIAAQARAAAAgMQAAgNgMAAQgKABgIAGIAAgQQAJgFAMAAQANAAAHAGQAIAGAAAKQABATgTAEIAAABQAKAAAGAGQAGAFAAAIQAAANgKAIQgKAHgOAAQgOAAgJgEg");
		// this.shape_16.setTransform(712.8, 736.6);

		// this.shape_17 = new cjs.Shape();
		// this.shape_17.graphics.f("#999999").s().p("AgKAwIAGgHIggADQgHAAgFACIgGgOQAGgFAIgfIgOAAIAAgOIA2AAIAAAOIgXAAIgLAgIATgBIgIgWIANgEIALAdQAJgOgBgmIgLAAIAAgPIAMAAIAAgUIAPAAIAAAUIAeAAIAABBIgCARQgBAEgCACQgCACgEACQgEABgSAAIgDgSIAMABQAEAAACgBIABgEIABgSIABgmIgPAAQgBAZgCAMQgBALgFAMQgFALgIAJIgNgKgAgxghIAAgPIAtAAIAAAPg");
		// this.shape_17.setTransform(702.8, 737);

		// this.shape_18 = new cjs.Shape();
		// this.shape_18.graphics.f("#999999").s().p("Ag5AqIAJABQADAAAAgFIAAgXIgLAFIgBgRIAMgDIAAgTIgLAAIAAgPIALAAIAAgWIAPAAIAAAWIAKAAIAAAJQALgOAHgSIAOADIgFAKIAvAAIAAAOIg1AAIgJAOIAIAAIAAAJIALgCIAAgSIAOAAIAAAPIAbgGIgBAhQgCAFgCACQgDADgNABIgEgPQAJABABgCIABgLIgNACIAAAkIgOAAIAAghIgLACIAAAeQAAAHAHAAIAYAAQAEAAADgCIADgDIACgNIAQAGQgEAQgEAEQgFAEgHABIgjAAQgSAAAAgSIAAgcIgFABIgBgNIAGgCIAAgKIgHgFIgJAAIAAAPIAKgDIgBAPIgJADIAAAhQAAAGgCADQgCADgEABIgPABQgBgHgDgJg");
		// this.shape_18.setTransform(691, 736.9);

		// this.shape_19 = new cjs.Shape();
		// this.shape_19.graphics.f("#999999").s().p("AgCAjIASABQAKAAAAgJIAAhAIhSAAIAAgQIBxAAIAAAQIgNAAIAABIQAAAHgDAEQgEAFgGABQgGACgXgBIgEgSgAgsAfIAAg4IA2AAIAAAxIglAAIAAAHgAgbAKIAWAAIAAgVIgWAAg");
		// this.shape_19.setTransform(679, 737.3);

		// this.shape_20 = new cjs.Shape();
		// this.shape_20.graphics.f("#7A7A7A").s().p("Ag4BHIA4giIA7AhIg7AjgAAFAiIA3ggIA6AiIg3AggAh0AlIA7gjIA3AgIg7AigAiyAAIA7ghIA5AhIg6AigABAAAIA6ggIA5AgIg5AhgAg2AAIA2gfIA4AfIg4AggAAFgiIA5giIAHAEIACACIAdAQIAQAKIABABIg5AhgAh0gjIADgCIAAgBIA1geIA6AiIg3AggAg4hGIA4giIA6AiIg6Ahg");
		// this.shape_20.setTransform(718.3, 708);

		// this.shape_21 = new cjs.Shape();
		// this.shape_21.graphics.f("#CCCCCC").s().p("AhYBZIA6giIAABCIg6AigAgaA0IA2ggIAABCIgzAfIAAAAIgDACgAAgASIA6ghIAABBIg6AigAhYAUIA6ghIAAA/Ig6AigAgagPIA2ggIAAA+Ig2AggAhYgyIA6giIAABDIg6AhgAAggyIA6ghIAABAIg6AggAgahWIA2ggIAABCIg2AggAAgh5IA6ghIAABCIg6Aig");
		// this.shape_21.setTransform(709.1, 692.1);

		// this.shape_22 = new cjs.Shape();
		// this.shape_22.graphics.f("#9C9C9C").s().p("AAfB5IAAhCIA7AiIAABCgAAaB2IgQgJIgcgRIgCgCIgIgEIAAhCIA3AgIAABCgAAfAyIAAg/IA7AhIAABAgAhZAyIAAhBIA6AhIAABCgAgcAPIAAg+IA3AgIAAA+gAAfgRIAAhDIA7AiIAABCgAhZgTIAAhAIA6AhIAAA/gAgcg0IAAhCIA3AgIAABCgAhZhYIAAhCIA6AhIAABDg");
		// this.shape_22.setTransform(727.4, 692.1);

		// this.shape_23 = new cjs.Shape();
		// this.shape_23.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
		// this.shape_23.setTransform(1088.9, 397.7);

		// this.shape_24 = new cjs.Shape();
		// this.shape_24.graphics.f("#858C91").s().p("AhDBAQAJgaAIgfIAUAIIgRA4IgUgHgAAzBGIAAgKIg3AAIAAAKIgUAAIAAh3IAmAAIAAgVIASAAIAAAVIAmAAIAAB3gAAgApIATAAIAAgbIgTAAgAgEApIASAAIAAgbIgSAAgAAggDIATAAIAAgbIgTAAgAgEgDIASAAIAAgbIgSAAgAhFgRIANgOQANAJALAJIgOAPQgJgJgOgKgAhDg5IAMgNQAMAHANAMIgNAOIgYgUg");
		// this.shape_24.setTransform(1073.6, 397.5);

		// this.shape_25 = new cjs.Shape();
		// this.shape_25.graphics.f("#858C91").s().p("AgHBJIAAhjIAPAAIgKgNQAKgLAKgWIAVAAIgFALIAlAAIAAAQIgaAAIAJAKIgMAJIAYAAIAABiIgTAAIAAgGIgkAAIAAAHgAALAyIAkAAIAAgLIgkAAgAALAYIAkAAIAAgJIgkAAgAALAAIAkAAIAAgJIgkAAgAAKgaIAcAAIgLgOIAIgFIgLAAQgGAKgIAJgAguBJIAAgwQgGAPgKAPQgDgLgFgLQAPgPAHgRIgSAAIAAgRIAUAAIAAgQIASAAIAAAQIARAAIAAARIgRAAIAAAHIAUAQIgKAPIgKgLIAAAtgAhGglQARgQAIgTIATAAIgFALIAgAAIAAAQIgQAAIAIALIgOAIQgGgKgGgHIAEgCIgLAAQgHAKgKAKQgGgHgHgFg");
		// this.shape_25.setTransform(1058.7, 397.4);

		// this.shape_26 = new cjs.Shape();
		// this.shape_26.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
		// this.shape_26.setTransform(1043.9, 397.5);

		// this.shape_27 = new cjs.Shape();
		// this.shape_27.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgMgKgOIgKAAIAAgRIBmAAIAAAQQgLAPgQAMQAVAGAeACIgLAVQglgEgZgNQgZAMgkAGQgFgJgGgKgAABAiQAOgHALgKIgwAAQAKAKANAHgAAdgVIAKgNQAQAJASAOIgNANIgfgXgAhIgNQASgKAPgMIANANQgRAMgSALIgLgOgAAIgDIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgRIA6AAIgFgMIAUgGIAHASIA5AAIAAARIgqAAIAAAig");
		// this.shape_27.setTransform(1028.9, 397.4);

		// this.shape_28 = new cjs.Shape();
		// this.shape_28.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
		// this.shape_28.setTransform(1013.6, 397.4);

		// this.shape_29 = new cjs.Shape();
		// this.shape_29.graphics.f("#858C91").s().p("Ag9AvIAVACQAHgBAAgFIACgiIgmAAIAFg1IASAAIgEAlIAKAAIADgpIgfAAIAAgRIAzAAIgFA6IAJAAIgCAwQgBALgCAFQgCAEgDACQgEADgEAAIgbABIgDgUgAgJBAIAAiBIBPAAIAAATIg8AAIAAALIANgIIAQAbQAHgOAGgPIAQAHQgJAVgKARIATAhIgQAJIgNgXQgIAMgIAMIgNgKIAAANIA+AAIAAASgAAKAfQAKgPAJgPIgTghgAhHAWIAigEIAAARIggAFg");
		// this.shape_29.setTransform(998.8, 397.6);

		// this.shape_30 = new cjs.Shape();
		// this.shape_30.graphics.f("#858C91").s().p("AgKBIIAAgxQgSAYgeARIgNgRQAcgNAUgVIguAAIAAgSIAhAAQgGgIgLgMIAOgLIgXAAIAAgTIA0AAIAAgQIAVAAIAAAQIA0AAIAAATIgYAAIAPALQgKAMgIAIIAjAAIAAASIgwAAQAUAVAdALIgNASQgfgRgRgXIAAAxgAALgFIAXAAIgNgLQAJgJAJgLIgcAAgAgUgQIgOALIAYAAIAAgfIgcAAIASAUg");
		// this.shape_30.setTransform(983.9, 397.4);

		// this.shape_31 = new cjs.Shape();
		// this.shape_31.graphics.f("#858C91").s().p("AhCA5QAMgQgBgpIAAhEIB7AAIAAByQAAAJgFAFQgEAFgJABIgXABIgGgWIAQABQAKAAAAgJIAAgNIgeAAIAAApIgUAAIAAgpIggAAQgCAggKANQgKgHgJgFgAARAFIAeAAIAAgRIgeAAgAgjAFIAgAAIAAgRIggAAgAARgfIAeAAIAAgSIgeAAgAgjgfIAgAAIAAgSIggAAg");
		// this.shape_31.setTransform(968.6, 397.8);

		// this.shape_32 = new cjs.Shape();
		// this.shape_32.graphics.f("#858C91").s().p("Ag2BIIAAg+QgGARgHANIgEgbQAJgSAGgWIgOAAIAAgRIAQAAIAAgbIASAAIAAAbIAKAAIAAARIgKAAIAAANIAOAOIAAgpIAYAAIAAgHIgbAAIAAgNIAbAAIAAgJIARAAIAAAJIAJAAIAAgKIAQAAIAAAKIAdAAIAAANIgdAAIAAAHIAZAAIAAA0IhbAAIAAgFIgIAIIgGgJIAABDgAAsAAIAJAAIAAgJIgJAAgAATAAIAJAAIAAgJIgJAAgAgGAAIAIAAIAAgJIgIAAgAAsgUIAJAAIAAgJIgJAAgAATgUIAJAAIAAgJIgJAAgAgGgUIAIAAIAAgJIgIAAgAATgpIAJAAIAAgHIgJAAgAAvBIIAAgFIgvAAIAAAFIgSAAIAAg2IBTAAIAAA2gAAAA3IAvAAIAAgHIgvAAgAAAAlIAvAAIAAgHIgvAAg");
		// this.shape_32.setTransform(953.9, 397.4);

		// this.shape_33 = new cjs.Shape();
		// this.shape_33.graphics.f("#858C91").s().p("AAtBDIAAgJIhYAAIAAAJIgWAAIAAiGIA6AAIAAA3IAPAAIAAg3IA6AAIAACGgAgrAmIBYAAIAAhVIgRAAIAAA2Ig2AAIAAg2IgRAAg");
		// this.shape_33.setTransform(938.9, 397.8);

		// this.shape_34 = new cjs.Shape();
		// this.shape_34.graphics.f("#858C91").s().p("AAKAxIAWABIAHgBIAEgCIACgEIABgSIABgdIAAgXIgaAAIgKAUQgGgEgKgFIAABWIgUAAIAAgKIgVAAIAAALIgVAAIAAh2IAQAAIAGgXIAWADIgHAUIAZAAIAAAdQALgUAKggIAVAFIgHATIAlAAIgBBTQgBAOgBAFQgCAGgEADQgFAEgGABQgIABgYAAQgCgNgDgJgAguApIAVAAIAAgZIgVAAgAgugDIAVAAIAAgZIgVAAgAAAACIARgLQALALALATIgSAMQgLgSgKgNg");
		// this.shape_34.setTransform(924, 397.3);

		// this.shape_35 = new cjs.Shape();
		// this.shape_35.graphics.f("#858C91").s().p("AgDA4IgQABIAAAPIgSAAIAAgPIghADIgBgRIAigBIAAgIIgeAAIAAgNIAIgMIgKAAIAAgMIASAAIAEgIIAUAAIgFAIIAhAAIAAAMIgpAAIgJAMIAMAAIAAgJIASAAIAAAJIATAAIAAANIgTAAIAAAHIAWgBIgBAMQAMgFAIgGQgJgMgGgQIAOgHIgOAAIAAgRIA7AAIAAARQgEAUgNAQQALAHANAEIgKATQgPgHgMgJQgMAJgRAIQgFgKgFgHgAAkAeQAJgLACgNIgZAAQAGANAIALgAgNgGIAAgIIgnAAIAAAIIgSAAIAAgVIBJAAQAIgIAAgXIAAgIIAyAAIAAAZQgBAGAGAAIAHAAIgDAQIgNAAQgNAAAAgOIAAgPIgQAAQAAAWgMANIgNgJIAAAQgAhAggIAAgMIAWAAIAAgGIgcAAIAAgOIAcAAIAAgHIATAAIAAAHIAbAAIAAAOIgbAAIAAAGIAXAAIAAAMg");
		// this.shape_35.setTransform(909, 397.5);

		// this.shape_36 = new cjs.Shape();
		// this.shape_36.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		// this.shape_36.setTransform(1272.5, 373.6);

		// this.shape_37 = new cjs.Shape();
		// this.shape_37.graphics.f("#858C91").s().p("AhIA2QAVgSAEgdIgXAAIAAgRIAYAAIAAgYIgDAAQgFAMgGALQgGgJgHgIQAMgUAFgYIASAEIgEAQIAdAAIAAASIgPAAIAAAYIASAAIAAARIgSAAIgCAIIAYAfIAAhvIBOAAIAAASIg7AAIAAAUIA2AAIAAA4Ig2AAIAAAUIA9AAIAAATIhQAAIAAgTIgOALIgQgYQgIAVgQAQIgMgTgAANALIAkAAIAAgUIgkAAg");
		// this.shape_37.setTransform(1257.3, 373.3);

		// this.shape_38 = new cjs.Shape();
		// this.shape_38.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgLgKgPIgKAAIAAgRIBmAAIAAAQQgLAPgQAMQAVAGAeABIgMAWQgjgEgagNQgZAMgkAGQgFgJgGgKgAABAiQAOgIALgJIgwAAQAKAJANAIgAAdgVIAKgNQAQAJASANIgNAOIgfgXgAhIgNQASgKAPgMIANANQgRANgSAKIgLgOgAAIgEIAAghIgPAAIAAAhIgTAAIAAghIgrAAIAAgRIA7AAIgFgNIAUgFIAHASIA5AAIAAARIgqAAIAAAhg");
		// this.shape_38.setTransform(1242.2, 373.4);

		// this.shape_39 = new cjs.Shape();
		// this.shape_39.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjQgHgKgKgJg");
		// this.shape_39.setTransform(1226.6, 373.4);

		// this.shape_40 = new cjs.Shape();
		// this.shape_40.graphics.f("#858C91").s().p("AgKA6IAAAPIgSAAIAAg+IgLAQIgCgIIgMA1IgTgHQAIgYAGggIARAHIgEgMQARgWAHgVIgOAAIAAgSIAsAAIgGgLIAWgEIAIAPIAmAAIAAASIg6AAIARAEIgEAIIApAAIAAAPQgFAegRAVQALAIASAGIgMAUQgTgKgMgKQgMAKgSAKIgLgPgAgKA4QARgJAKgIQgHgKgHgNIgGALIgHgRgAAOgBQAHAQAKAMQAOgRADgUIgdAAIgFAJgAgCgkIgIARIAAAYQAOgTAIgZIgXAAgAATgEIAMgFIAKARIgMAFIgKgRgAhJgQIANgPIAVASIgNAPIgVgSgAhIg5IANgNIAVASIgNAPIgVgUg");
		// this.shape_40.setTransform(1212, 373.4);

		// this.shape_41 = new cjs.Shape();
		// this.shape_41.graphics.f("#858C91").s().p("AgNAOQgGgFgBgJQAAgIAHgFQAGgHAHAAQAJAAAFAHQAHAFAAAIQAAAJgHAGQgFAFgJABQgHAAgGgHgAgEgEQgCADAAACQAAAAAAABQAAAAAAABQABAAAAABQAAABABAAQACACACAAQABAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDQAAgCgCgCQgCgCgDAAQgCAAgCACg");
		// this.shape_41.setTransform(1192.1, 378.5);

		// this.shape_42 = new cjs.Shape();
		// this.shape_42.graphics.f("#858C91").s().p("AhGBEIAAgVIA2AAIAAhyIAXAAIAAApIA2AAIAAAVIg2AAIAAA0IBAAAIAAAVg");
		// this.shape_42.setTransform(1181.6, 373);

		// this.shape_43 = new cjs.Shape();
		// this.shape_43.graphics.f("#858C91").s().p("AAGBIIAAgZIgXAAIAAgPQgGAJgGAHIgLgRIAAApIgSAAIAAhAIgKAPIgEgbQALgVANguIATAFQgFATgGAQIAAA7QAYgZALggIgbAAIAAgSIAmAAIAAgYIATAAIAAAYIAqAAIAAASIggAAQAMAeAaAYIgNAVIgLgOIAAAPIgYAAIAAAZgAAZAdIAWAAQgNgUgJgdgAgPAdIAVAAIAAgyQgHAcgOAWg");
		// this.shape_43.setTransform(1166.5, 373.4);

		// this.shape_44 = new cjs.Shape();
		// this.shape_44.graphics.f("#858C91").s().p("AhHA1QATgEAHgIQAHgHAAgNIAAgJIBGAAIAAAhQAAAGAHAAIAEAAQAGAAABgDQABgEABgSIATAHIgDAUQgCAIgGAEQgFADgJABIgRAAQgRgBAAgSIAAgVIgeAAQgBAfgoAMIgMgTgAAxASIAAgOIhjAAIAAAOIgTAAIAAgeICJAAIAAAegAg7gUIAAgQIAwAAIAAgIIg7AAIAAgRIA7AAIAAgLIATAAIAAALIA8AAIAAARIg8AAIAAAIIAxAAIAAAQg");
		// this.shape_44.setTransform(1151.5, 373.4);

		// this.shape_45 = new cjs.Shape();
		// this.shape_45.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		// this.shape_45.setTransform(1136.2, 373.6);

		// this.shape_46 = new cjs.Shape();
		// this.shape_46.graphics.f("#858C91").s().p("AhIA2QAVgSAEgdIgXAAIAAgRIAYAAIAAgYIgDAAQgFAMgGALQgGgJgHgIQAMgUAFgYIASAEIgEAQIAdAAIAAASIgPAAIAAAYIASAAIAAARIgSAAIgCAIIAYAfIAAhvIBOAAIAAASIg7AAIAAAUIA2AAIAAA4Ig2AAIAAAUIA9AAIAAATIhQAAIAAgTIgOALIgQgYQgIAVgQAQIgMgTgAANALIAkAAIAAgUIgkAAg");
		// this.shape_46.setTransform(1121, 373.3);

		// this.shape_47 = new cjs.Shape();
		// this.shape_47.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgLgKgPIgKAAIAAgRIBmAAIAAAQQgLAPgQAMQAVAGAeABIgLAWQglgEgZgNQgZAMgkAGQgFgJgGgKgAABAiQAOgIALgJIgwAAQAKAJANAIgAAdgVIAKgNQAQAJASANIgNAOIgfgXgAhIgNQASgKAPgMIANANQgRANgSAKIgLgOgAAIgEIAAghIgPAAIAAAhIgTAAIAAghIgqAAIAAgRIA6AAIgFgNIAUgFIAHASIA5AAIAAARIgqAAIAAAhg");
		// this.shape_47.setTransform(1105.9, 373.4);

		// this.shape_48 = new cjs.Shape();
		// this.shape_48.graphics.f("#858C91").s().p("Ag0BJIAAg1IgLALIgIgXQAWgTAOgYIggAAIAAgUIApAAIAGgRIAUACIgDAPIBLAAIAAAUIhTAAQgJASgMAQIAABKgAgbBCIAAgTIAoAAIAAghIggAAIAAgTIAgAAIAAgaIAUAAIAAAaIAhAAIAAATIghAAIAAAhIAnAAIAAATg");
		// this.shape_48.setTransform(1090.6, 373.3);

		// this.shape_49 = new cjs.Shape();
		// this.shape_49.graphics.f("#858C91").s().p("AgfA3QAXgCAOgHIgZgKIAJgQIgPAAIAAgFIgLABIAAAlQAAAIgDAFQgEAEgHABIgRABQgBgKgEgJIAKAAQAFAAABgCQABgBAAgEIAAgaIgOADIgDgVIARgCIAAgZIgOAAIAAgSIAOAAIAAgcIATAAIAAAcIANAAIAAASIgNAAIAAAXIAMgCIAAAIIAWAAIAEgLIgbAAIAAgRIAVAAIgIgMIAMgFIgUAAIAAgRIAgAAIgFgKIAWgEIAFAOIAiAAIAAARIgWAAIAOAFIgKAMIAXAAIAAARIhCAAIAQAEIgFAHIA1AAIAAAQIgOAAQgFANgKAKIAdAMIgKARIgigQQgTAMgdAFIgKgSgAAEAdIAUAHQAIgHAEgJIgbAAgAARgcIgJAEIAUAAIALgRIgfAAIAJANg");
		// this.shape_49.setTransform(1075.5, 373.3);

		// this.shape_50 = new cjs.Shape();
		// this.shape_50.graphics.f("#858C91").s().p("AhHA5QARgSADgnIgNACIgHgtIANgCIAHAtQABgNAAgQIAAgqIARAAIgBAlIAJgNIAIAJIAAgdIBRAAIAAA+IhRAAIAAgaIgRASQAAAPgCAOIAPARIAAgFIAiAAIAAgKIgcAAIAAgRIBPAAIAAARIgfAAIAAAKIAnAAIAAAQIgnAAIAAAbIgUAAIAAgbIgbAAIgOAMIgMgTQgGATgLAQIgOgPgAAAgUIAvAAIAAgJIgvAAgAAAgqIAvAAIAAgKIgvAAg");
		// this.shape_50.setTransform(1060.3, 373.5);

		// this.shape_51 = new cjs.Shape();
		// this.shape_51.graphics.f("#858C91").s().p("AAwBFIAAgGIhfAAIAAAGIgSAAIAAiJICDAAIAACJgAgvAwIBfAAIAAgpIgGAJQgLgDgIgHQAAANgCACIgFAEQgDACgSgBIgEgKIAJAAIAFAAQACgBAAgFIgVAAIAAAPQAAAHAHAAIAXAAQAEAAADgDQACgDABgJIAQAFQgDAKgCAEQgCAEgFACQgGABgIABIgdAAQgRgBAAgQIAAgNIgLAGIgGgHgAgvAFQAOgFAIgIIgTAAIAAgLIAeAAIADgHIgeAAIAAgLIALAAIgHgIIAPgFIAJANIAFAAIACgNIAPAAIgBANIAHAAIAIgMIARAEIgIAIIALAAIAAALIgmAAIgCAHIApAAIAAALIgUAAQALAIANABIAAg2IhfAAgAgLAAIAaAAIgIgIIgKAAIgIAIg");
		// this.shape_51.setTransform(1045.3, 373.7);

		// this.shape_52 = new cjs.Shape();
		// this.shape_52.graphics.f("#858C91").s().p("AArBIIAAgFIhoAAIAAhHIAUAAIAAAeQAjgOAAgXIhBAAIAAgRIAUAAIAAgjIAUAAIAAAjIAZAAIAAgrIATAAIAAANIAwAAIAAARIgwAAIAAANIA7AAIAAARIg7AAQgBAIgCAGIAhAUIAAgbIAUAAIAABMgAgpAyIBUAAIAAgXIgKAPIgfgYQgJANgVAMIgNgRg");
		// this.shape_52.setTransform(1030.1, 373.3);

		// this.shape_53 = new cjs.Shape();
		// this.shape_53.graphics.f("#858C91").s().p("AAJAxIAYABIAGgBIAEgCIACgEIABgSIAAgdIABgXIgZAAIgLAUQgGgEgKgFIAABWIgVAAIAAgKIgUAAIAAALIgUAAIAAh2IAPAAIAGgXIAWADIgHAUIAZAAIAAAdQAKgUALggIAUAFIgGATIAmAAIgCBTQgBAOgCAFQgBAGgEADQgFAEgHABQgGABgZAAQgCgNgEgJgAguApIAUAAIAAgZIgUAAgAgugDIAUAAIAAgZIgUAAgAAAACIARgLQAKALANATIgTAMQgLgSgKgNg");
		// this.shape_53.setTransform(1015, 373.3);

		// this.shape_54 = new cjs.Shape();
		// this.shape_54.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
		// this.shape_54.setTransform(999.5, 373.4);

		// this.shape_55 = new cjs.Shape();
		// this.shape_55.graphics.f("#858C91").s().p("Ag9AvIAVABQAHAAAAgFIACgiIgmAAIAFg1IASAAIgEAlIAKAAIADgpIgfAAIAAgRIAzAAIgFA6IAJAAIgCAwQgBALgCAEQgCAFgDACQgEADgEAAIgbAAIgDgTgAgJBAIAAiAIBPAAIAAASIg8AAIAAALIANgIIAQAbQAHgOAGgOIAQAGQgJAVgKARIATAhIgQAJIgNgXQgIANgIALIgNgKIAAANIA+AAIAAASgAAKAeQAKgOAJgPIgTghgAhHAVIAigDIAAASIggAEg");
		// this.shape_55.setTransform(984.6, 373.6);

		// this.shape_56 = new cjs.Shape();
		// this.shape_56.graphics.f("#858C91").s().p("AgeA3QAMgNAEgOQADgNAAgfIAAgwIA9AAIAABtQAAAFADAAIADgBIABgKIABgZIAPAGQgCAegBAHQgCAGgDADQgEACgGAAIgMAAQgOAAAAgRIAAhfIgVAAIAAApQAAAfgFAPQgEAOgNAPIgQgRgAg2BIIAAg0QgFALgHAKIgGgaQAMgRAGgXIgRAAIAAgUIARAAIAAgaIAUAAIAAAaIARAAIAAAUIgRAAIAAANIAUAMIgKAQIgKgHIAAA/g");
		// this.shape_56.setTransform(969.5, 373.4);

		// this.shape_57 = new cjs.Shape();
		// this.shape_57.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
		// this.shape_57.setTransform(954, 373.4);

		// this.shape_58 = new cjs.Shape();
		// this.shape_58.graphics.f("#858C91").s().p("AhIA4QAJgTAAgkIATAAIgBAYQAEAKAGAFIAAgrIgkAAIAAgSIAcAAIAAgOIgXAAIAAgSIAXAAIAAgTIAUAAIAAATIAWAAIAAASIgWAAIAAAOIAZAAIAAASIgSAAIAAAPIAQAAIAAASIgQAAIAAASQAIABAWAAIA7gBQgEAKgDALQg6AAgXgBQgYgCgJgQQgEANgEAKIgQgRgAAaApQgUAAABgVIAAgtIAlAAIAAgVIgpAAIAAgSIA8AAIAAA5IglAAIAAAXQAAAHAIAAIAHAAQAFAAACgDQACgDABgSIAUAHQgCARgDAFQgEANgSAAg");
		// this.shape_58.setTransform(939.2, 373.3);

		// this.shape_59 = new cjs.Shape();
		// this.shape_59.graphics.f("#858C91").s().p("AgNAOQgGgFgBgJQAAgIAHgFQAGgHAHAAQAJAAAFAHQAHAFAAAIQAAAJgHAGQgFAFgIABQgIAAgGgHgAgEgEQgCADAAACQAAAAAAABQAAAAAAABQABAAAAABQAAABABAAQACACADAAQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQACgCAAgDQAAgCgCgCQgCgCgDAAQgCAAgCACg");
		// this.shape_59.setTransform(919.4, 378.5);

		// this.shape_60 = new cjs.Shape();
		// this.shape_60.graphics.f("#858C91").s().p("AhHA2QAUgSAFgdIgYAAIAAgRIAZAAIAAgYIgEAAQgFAMgGALQgGgJgGgIQALgUAFgYIASAEIgFAQIAeAAIAAASIgOAAIAAAYIASAAIAAARIgTAAIgCAIIAYAfIAAhvIBOAAIAAASIg8AAIAAAUIA3AAIAAA4Ig3AAIAAAUIA+AAIAAATIhQAAIAAgTIgNALIgQgYQgJAVgQAQIgLgTgAAMALIAkAAIAAgUIgkAAg");
		// this.shape_60.setTransform(908.9, 373.3);

		// this.shape_61 = new cjs.Shape();
		// this.shape_61.graphics.f("#858C91").s().p("AgEArIAJgPIAaANIARgUIgxAAIAAgOIADgPIgMAAIAAgQIAQAAIADgMIgNAAIAAgRIARAAIADgSIAVAAIgDASIAiAAIAAARIgmAAIgDAMIAuAAIAAAQIgyAAIgEANIAzAAIAAAPIgXAeIANAGIgLAQQgbgPgagOgAgrBIIAAgbIgbAEIgCgUIAdgDIAAgNIgcAAIAAgQQAGgPAEgSIgKAAIAAgRIAOAAIADgTIATACIgEARIAdAAIAAARIghAAIgKAhIAKAAIAAgZIASAAIAAAZIAQAAIAAAQIgQAAIAAAMIASgCIgBASIgRACIAAAdg");
		// this.shape_61.setTransform(1272.3, 349.4);

		// this.shape_62 = new cjs.Shape();
		// this.shape_62.graphics.f("#858C91").s().p("AhFA0QASgbABg1IgRAAIAAgTIASAAIAAgZIATAAIgBAZIAhAAIgBA5IgBAjQAAAKgEAGQgEAGgFABQgGABgRAAIgFgWIAPAAQADAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIACgXIABgvIgPAAQAABEgaAgIgMgUgAALBFIAAiBIA6AAIAACAIgTAAIAAgMIgUAAIAAANgAAeAkIAUAAIAAhMIgUAAg");
		// this.shape_62.setTransform(1256.2, 349.4);

		// this.shape_63 = new cjs.Shape();
		// this.shape_63.graphics.f("#858C91").s().p("AAtBJIAAgGIgsAAIAAAGIgSAAIAAhCIBQAAIAABCgAABA0IAsAAIAAgIIgsAAgAABAeIAsAAIAAgJIgsAAgAhFAnIANgDIAAgxIgLAAIAAgUIALAAIAAglIATAAIAAAlIAJAAIAAAUIgJAAIAAArIANgEIgBAKIABALIgpAOgAgXAAIAAg3IAUAAIgHgKIAQgGIAKAQIAPAAIAJgRIASAGIgHALIATAAIAAA3gAAfgOIAXAAIAAgaIgXAAgAgHgOIAWAAIAAgaIgWAAgAAggVIAKgRIAKAFIgKASIgKgGgAgGghIAKgFIAJARIgLAGIgIgSg");
		// this.shape_63.setTransform(1240.4, 349.3);

		// this.shape_64 = new cjs.Shape();
		// this.shape_64.graphics.f("#858C91").s().p("Ag/BIIAAh4IA3AAIAAgXIASAAIAAAXIA2AAIAABfQAAALgFAGQgFAGgKAAQgKABgRAAIgEgTIATAAIAHAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgCAAgEIAAhHIgjAAQAAALgCAJQAPAKAVARIgPAOQgKgKgSgQQgIAQgTAMIgPgPQAfgTACgdIgiAAIAABkg");
		// this.shape_64.setTransform(1224.9, 349.2);

		// this.shape_65 = new cjs.Shape();
		// this.shape_65.graphics.f("#858C91").s().p("AAvBFIAAgFIhdAAIAAAFIgUAAIAAiJICEAAIAACJgAguAwIBdAAIAAhkIhdAAgAgMAsIAAgZIggAAIAAgPIAgAAIAAgHIgZAAIAAgPIAZAAIAAgJIgfAAIAAgPIAfAAIAAgGIARAAIAAAGIAmAAIAAAPIgmAAIAAAJIAhAAIAAAPIghAAIAAAHIAnAAIgBAUQAAAGgEAEQgCAEgFABQgEABgRAAIgDgNIAMAAQAFAAAAgDIABgFIgVAAIAAAZg");
		// this.shape_65.setTransform(1209.1, 349.5);

		// this.shape_66 = new cjs.Shape();
		// this.shape_66.graphics.f("#858C91").s().p("Ag/BAQAKgZAGgWIASAIIgOAvIgUgIgAAEBFQgaAAAAgaIAAhFIBPAAIgBAgQgBAOgFAGQgFAIgKAAIgWAAIgFgTIARAAQAHAAACgCQACgDAAgSIglAAIAAAxQAAAIALABIAXAAQAIAAAEgDQAEgBABgEIACgRIAVAJQgDAPgDAHQgCAHgJACQgIAEgNAAgAhIABIALgMIAXAQIgMAPIgWgTgAg8gXIALgOQASAMAGAGIgMAOIgXgSgAARghIAAgKIggAAIAAAKIgUAAIAAgKIgkAAIAAgSIAkAAIAAgLIAUAAIAAALIAgAAIAAgLIAUAAIAAALIAkAAIAAASIgkAAIAAAKg");
		// this.shape_66.setTransform(1193.3, 349.4);

		// this.shape_67 = new cjs.Shape();
		// this.shape_67.graphics.f("#858C91").s().p("AghA2QAhgHAIgQIgoAAIAAgRIAMAAIAAgoIgHgEQAUgXAHgTIAVADIgGAKIAqAAIAAAQIgLAOIASAAIAAArIAJAAIAAARIgnAAQALAQAcAFIgMAUQgagIgNgVQgLATggALQgFgJgHgKgAAeAOIAQAAIAAgaIgPAAIgBAagAgCAOIAOAAIABgaIgPAAgAgEgdIAbAAIALgOIgcAAIgKAOgAhHA0IAKAAQAFAAAAgGIAAgdIgPAFIgBgVIAQgDIAAgXIgOAAIAAgTIAOAAIAAgaIASAAIAAAaIALAAIAAAOIAAAFIgLAAIAAARIAMgDIgBASIgLAEIAAArQAAAHgCAEQgDAEgFABIgTABIgEgTg");
		// this.shape_67.setTransform(1177.5, 349.3);

		// this.shape_68 = new cjs.Shape();
		// this.shape_68.graphics.f("#858C91").s().p("AgEArIAJgPIAaANIARgUIgxAAIAAgOIADgPIgMAAIAAgQIAQAAIADgMIgNAAIAAgRIARAAIADgSIAVAAIgDASIAiAAIAAARIgmAAIgDAMIAuAAIAAAQIgyAAIgEANIAzAAIAAAPIgXAeIANAGIgLAQQgbgPgagOgAgrBIIAAgbIgbAEIgCgUIAdgDIAAgNIgcAAIAAgQQAGgPAEgSIgKAAIAAgRIAOAAIADgTIATACIgEARIAdAAIAAARIghAAIgKAhIAKAAIAAgZIASAAIAAAZIAQAAIAAAQIgQAAIAAAMIASgCIgBASIgRACIAAAdg");
		// this.shape_68.setTransform(1161.7, 349.4);

		// this.shape_69 = new cjs.Shape();
		// this.shape_69.graphics.f("#858C91").s().p("AgzBJIAAg1IgMALIgIgXQAWgTAOgYIggAAIAAgUIApAAIAFgRIAWACIgEAPIBLAAIAAAUIhTAAQgIASgNAQIAABKgAgaBCIAAgTIAmAAIAAghIgfAAIAAgTIAfAAIAAgaIAVAAIAAAaIAhAAIAAATIghAAIAAAhIAnAAIAAATg");
		// this.shape_69.setTransform(1145.8, 349.2);

		// this.shape_70 = new cjs.Shape();
		// this.shape_70.graphics.f("#858C91").s().p("Ag/A8QAVgPADgaIggAAIAAgTIAhAAIAAgbIgaAAIAAgTIAhAAIgMgOIARgMIASATIgJAHIAbAAIARgaIAVALIgNAPIAfAAIAAATIgYAAIAAAbIAfAAIAAATIgfAAIAAAzIgVAAIAAgzIgmAAQgDAkgXASIgUgNgAgQAAIAlAAIAAgbIglAAg");
		// this.shape_70.setTransform(1130.2, 349.3);

		// this.shape_71 = new cjs.Shape();
		// this.shape_71.graphics.f("#858C91").s().p("AgOAUIAJgnIAUAAIgMAng");
		// this.shape_71.setTransform(1110.2, 354.6);

		// this.shape_72 = new cjs.Shape();
		// this.shape_72.graphics.f("#858C91").s().p("AASBIIAAgvIguAAIAAgTIAuAAIAAgbIgUAAQgEAOgFAKIgSgIQAJgXAIgiIATAFIgFARIAQAAIAAgfIAUAAIAAAfIAfAAIAAATIgfAAIAAAbIAjAAIAAATIgjAAIAAAvgAg2BIIAAhDIgMAUIgGgaQAPgdAMgpIAVAGIgLAdIAABsg");
		// this.shape_72.setTransform(1098.5, 349.3);

		// this.shape_73 = new cjs.Shape();
		// this.shape_73.graphics.f("#858C91").s().p("AhIAyQAkgRACglIgkAAIAAgUICNAAIAAAUIgrAAIAAAoQAAALAJAAIAFAAQAEgBACgDQACgEACgSIAVAHIgFAWQgDAJgGAEQgGADgJAAIgOAAQgXAAAAgXIAAgvIgUAAQgCAzgpAVIgQgSgAg6gvIAAgUIB1AAIAAAUg");
		// this.shape_73.setTransform(1082.7, 349.8);

		// this.shape_74 = new cjs.Shape();
		// this.shape_74.graphics.f("#858C91").s().p("AgIBJIAAgdIgOAQIgLgNQgLAPgPALIgOgRQAPgJAKgNIgVgTQAFgRAEgXIgMAAIAAgSIAPAAIADgdIAUACIgEAbIAaAAIgBASQANgOAPghIAWAGQgNAWgQATIAjgDIgKgUIAQgHQAMAVANAZIgSAIIgFgMQgsAEgPACIgFgOQgCAggJATIAQAOIAAgpIBJAAIAABFIgUAAIAAgIIgiAAIAAAJgAALAtIAiAAIAAgXIgiAAgAgxALIAKAHQAHgSABgZIgKAAIgIAkg");
		// this.shape_74.setTransform(1067, 349.3);

		// this.shape_75 = new cjs.Shape();
		// this.shape_75.graphics.f("#858C91").s().p("AhIA4QAJgTAAgkIATAAIgBAYQAEAKAGAFIAAgrIglAAIAAgSIAdAAIAAgOIgXAAIAAgSIAXAAIAAgTIAUAAIAAATIAWAAIAAASIgWAAIAAAOIAZAAIAAASIgSAAIAAAPIAQAAIAAASIgQAAIAAASQAIABAWAAIA7gBQgEAKgDALQg6AAgXgBQgXgCgKgQQgEANgFAKIgPgRgAAaApQgTAAgBgVIAAgtIAlAAIAAgVIgnAAIAAgSIA7AAIAAA5IglAAIAAAXQABAHAGAAIAIAAQAFAAADgDQABgDABgSIAUAHQgCARgDAFQgEANgSAAg");
		// this.shape_75.setTransform(1051.1, 349.3);

		// this.shape_76 = new cjs.Shape();
		// this.shape_76.graphics.f("#858C91").s().p("AgKBHIAAhYIAVAAIAABYgAhIgIQArgZAVglIAWAAIgDAEQAVAiApAWIgOATQgogWgTgiQgRAggpAaIgOgTg");
		// this.shape_76.setTransform(1035.3, 349.4);

		// this.shape_77 = new cjs.Shape();
		// this.shape_77.graphics.f("#858C91").s().p("AhGALIAAgVICNAAIAAAVg");
		// this.shape_77.setTransform(1019.5, 349.3);

		// this.shape_78 = new cjs.Shape();
		// this.shape_78.graphics.f("#858C91").s().p("AhEA5QAugcAGgwIgxAAIAAgUIAaAAIgSgVIAPgMIAUAUIgNANIAVAAIACghIAVAAIgCAhIA+AAIgDA4QgCAcgBAFQgBAFgEAFQgEAFgGACQgGACgPABIgXAAQgBgIgEgOIAcABQAIAAADgCQADgBACgDIACgUIADgqIgrAAQgBAMgEALIAOgMIAYAWIgPAOQgNgOgKgJQgLAqgoAZIgRgPg");
		// this.shape_78.setTransform(1003.4, 349.4);

		// this.shape_79 = new cjs.Shape();
		// this.shape_79.graphics.f("#858C91").s().p("AAEBIIAAhlIgEAAQgJAUgLAOIgLgSQAQgZAKghIASAEIgGATIBBAAIAAATIgvAAIAAASIAnAAIAAARIgnAAIAAASIArAAIAAATIgrAAIAAAdgAg2BIIAAhGIgMATIgGgaQASgcALglIATAFQgEAPgGAOIAABsg");
		// this.shape_79.setTransform(987.9, 349.3);

		// this.shape_80 = new cjs.Shape();
		// this.shape_80.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		// this.shape_80.setTransform(972.1, 349.6);

		// this.shape_81 = new cjs.Shape();
		// this.shape_81.graphics.f("#858C91").s().p("AhIA2QAVgSAEgdIgXAAIAAgRIAYAAIAAgYIgDAAQgFAMgGALQgGgJgHgIQAMgUAFgYIASAEIgEAQIAdAAIAAASIgPAAIAAAYIASAAIAAARIgSAAIgCAIIAYAfIAAhvIBOAAIAAASIg7AAIAAAUIA3AAIAAA4Ig3AAIAAAUIA9AAIAAATIhQAAIAAgTIgOALIgQgYQgIAVgQAQIgMgTgAANALIAkAAIAAgUIgkAAg");
		// this.shape_81.setTransform(956.3, 349.3);

		// this.shape_82 = new cjs.Shape();
		// this.shape_82.graphics.f("#858C91").s().p("AhIA2QAegDAXgJQgOgKgKgQIgKAAIAAgQIBmAAIAAAQQgKAPgRALQAVAHAeABIgMAWQgjgEgagNQgZANgkAFQgFgJgGgKgAABAiQAOgIALgKIgwAAQAJAKAOAIgAAdgVIALgNQAPAJASANIgNAOIgfgXgAhIgNQASgKAPgMIAMANQgQAMgSAMIgLgPgAAIgEIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgRIA6AAIgFgMIAUgFIAIARIA4AAIAAARIgqAAIAAAig");
		// this.shape_82.setTransform(940.5, 349.3);

		// this.shape_83 = new cjs.Shape();
		// this.shape_83.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjQgHgKgKgJg");
		// this.shape_83.setTransform(924.3, 349.4);

		// this.shape_84 = new cjs.Shape();
		// this.shape_84.graphics.f("#858C91").s().p("AgKA6IAAAPIgSAAIAAg9IgKAPIgDgHIgMA0IgTgHQAHgXAHghIAQAGIgDgLQARgWAHgVIgOAAIAAgSIAsAAIgGgLIAXgEIAHAPIAnAAIAAASIg7AAIAQAEIgCAHIAoAAIAAAQQgEAdgSAWQAMAJAQAFIgKAUQgUgJgNgLQgLAKgTAKIgKgPgAgKA4QAQgJAMgIQgIgJgHgOIgFALIgIgQgAAPgCQAGARAKAMQAOgRADgUIgdAAIgEAIgAgBglIgJASIAAAYQANgUAJgYIgXAAgAATgEIAMgGIAKARIgMAGIgKgRgAhIgQIALgPIAXASIgPAPIgTgSgAhIg5IAMgNIAXASIgOAPIgVgUg");
		// this.shape_84.setTransform(909, 349.3);

		// this.shape_85 = new cjs.Shape();
		// this.shape_85.graphics.f("#858C91").s().p("AhIA4QATgTAEgiIAVACIgGAVQAIAUATADIAAg0Ig9AAIAAgSICKAAIAAASIg6AAIAAAPIAyAAIAAASIgyAAIAAAUIA9gBIgHAUQgzAAgXgBQgYgCgKgSQgHAPgLAKIgMgRgAAvgaIAAgLIhcAAIAAALIgUAAIAAgdIA4AAIgFgLIAWgGIAGARIA1AAIAAAdg");
		// this.shape_85.setTransform(1148.9, 301.2);

		// this.shape_86 = new cjs.Shape();
		// this.shape_86.graphics.f("#858C91").s().p("AAuBFIAAgFIhbAAIAAAFIgVAAIAAiJICFAAIAACJgAgtAvIBbAAIAAhiIhbAAgAgjAlIAAgvIAZAAIAAgLIgfAAIAAgQIAfAAIAAgKIAUAAIAAAKIAgAAIAAAQIggAAIAAALIAaAAIAAAvgAgRAVIAiAAIAAgPIgiAAg");
		// this.shape_86.setTransform(1133.9, 301.4);

		// this.shape_87 = new cjs.Shape();
		// this.shape_87.graphics.f("#858C91").s().p("AgeA2QAMgNAEgNQADgMAAggIAAgwIA9AAIAABtQAAAFADAAIADgBIABgJIABgaIAPAGQgCAfgBAGQgCAGgDADQgEACgGABIgMAAQgOAAAAgSIAAhfIgVAAIAAApQAAAggFAOQgEAPgOAOIgPgSgAg2BHIAAgzQgFALgHAKIgGgaQAMgRAFgYIgQAAIAAgTIARAAIAAgaIAUAAIAAAaIARAAIAAATIgRAAIAAAOIATAMIgJAQIgKgIIAAA/g");
		// this.shape_87.setTransform(1118.9, 301.2);

		// this.shape_88 = new cjs.Shape();
		// this.shape_88.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
		// this.shape_88.setTransform(1103.6, 301.2);

		// this.shape_89 = new cjs.Shape();
		// this.shape_89.graphics.f("#858C91").s().p("AgzA2QAYgHATgJQgKgKgJgNQgQAbgXATIgGgYQAdgbANgjIgkAAIAAgRIAHgaIAUADIgGAWIAVAAIAHgdIAUACIgFAbIAoAAIgRgQIANgMIAXATIgJAJIAYAAIAAASIhQAAIgEAOIBGAAIAAAPQgMATgRAPQAQAIAcAEIgNAVQgdgHgWgNQgUANgdAJIgLgTgAAJAcQAPgLAJgMIgsAAQAJANALAKg");
		// this.shape_89.setTransform(1088.9, 301.2);

		// this.shape_90 = new cjs.Shape();
		// this.shape_90.graphics.f("#858C91").s().p("AgCBGIgFgVIAcABQAQAAABgKQACgJAAgeIhaAAIAEhGIAWAAIgBAQIBfAAIAAATIhgAAIgBARIBaAAIgDA5QAAARgJAHQgIAGgOAAgAhFAjIAAgTIBjAAIAAATg");
		// this.shape_90.setTransform(1073.8, 301.2);

		// this.shape_91 = new cjs.Shape();
		// this.shape_91.graphics.f("#858C91").s().p("Ag2BIIAAg9QgGAOgIANIgEgbQAKgRAHgVIgQAAIAAgTIARAAIAAgZIATAAIAAAZIAQAAIAAAOQATgQANgXIAWAAIgCAEQAQAcAYANQgFAJgEAKIgIgGIAAAJIgYAAIAAAQIAeAAIAAASIgeAAIAAATIAlAAIAAARIheAAIAAgRIAlAAIAAgTIgfAAIAAgSIAfAAIAAgQIgYAAIAAgHIgHAFIgKgTIACgCIgIAAIAAAMIAUAQIgMAOIgIgJIAABCgAAAgWIAuAAQgNgMgLgQQgLAQgLAMg");
		// this.shape_91.setTransform(1058.9, 301.3);

		// this.shape_92 = new cjs.Shape();
		// this.shape_92.graphics.f("#858C91").s().p("AABA4IgRAOIgDgGIgFADIgCgNIgtAIIgCgUIAWgBIAAgaIgHAAIAAAIIgLAAIAAhHIASAAIAAgXIAPAAIAAAXIARAAIAAA/IgRAAIAAAXIAGAAIgDgKIAMgDIAGAZQAJgFAHgHIgKACIgFgQQAMgFAMgHIgQACIgFgOQALgEAJgGIgWAAIAAg4IBQAAIAAA4IgQAAIAKAJQgWAMgZAOIAegDIgFgGIAMgJIAXAaIgOAKIgGgJIgTABIAAATQAAAPgNACIgTABIgCgQgAADAmIAJAKIgJAHIALAAQAFABAAgHIAAgMIgQABgAAggKIgUAKIATAAIAPgKIgPAAgAgkAAIAGAAIAAghIgGAAgAg6AAIAHAAIAAghIgHAAgAAjgYIAQAAIAAgJIgQAAgAACgYIAQAAIAAgJIgQAAgAAjgsIAQAAIAAgJIgQAAgAACgsIAQAAIAAgJIgQAAgAAlAxIAJgMIAcATIgKAOQgLgKgQgLg");
		// this.shape_92.setTransform(1044, 301.2);

		// this.shape_93 = new cjs.Shape();
		// this.shape_93.graphics.f("#858C91").s().p("AgfA3QAXgCAOgHIgZgKIAJgQIgPAAIAAgFIgLABIAAAlQAAAIgDAFQgEAEgHABIgRABQgBgKgEgJIAKAAQAFAAABgCQABgBAAgEIAAgaIgOADIgDgVIARgCIAAgZIgOAAIAAgSIAOAAIAAgcIATAAIAAAcIANAAIAAASIgNAAIAAAXIAMgCIAAAIIAWAAIAEgLIgbAAIAAgRIAVAAIgIgMIAMgFIgUAAIAAgRIAgAAIgFgKIAWgEIAFAOIAiAAIAAARIgWAAIAOAFIgKAMIAXAAIAAARIhCAAIAQAEIgFAHIA1AAIAAAQIgOAAQgFANgKAKIAdAMIgKARIgigQQgTAMgdAFIgKgSgAAEAdIAUAHQAIgHAEgJIgbAAgAARgcIgJAEIAUAAIALgRIgfAAIAJANg");
		// this.shape_93.setTransform(1028.9, 301.2);

		// this.shape_94 = new cjs.Shape();
		// this.shape_94.graphics.f("#858C91").s().p("AhHAyIAPgMIAAglIgOAAIAAgRIAhAAIAAA3QALAMAZAAQAzAAAWgCIgGAUIglAAQgoAAgHgBIgOgDQgHgDgHgGIgRARgAAOAxIAAgRIgtAAIAAgRIAtAAIAAgNIgpAAIAAgPQAHgMAGgOIgOAAIAAgRIAVAAIAGgPIAUADIgFAMIA0AAIAAARIg8AAIgKAYIASAAIAAgSIAUAAIAAASIAfAAIAAARIgfAAIAAANIAkAAIAAARIgkAAIAAARgAhCg7IAPgJIAUAbIgRALIgSgdg");
		// this.shape_94.setTransform(1014, 301.2);

		// this.shape_95 = new cjs.Shape();
		// this.shape_95.graphics.f("#858C91").s().p("AhDA5QANgQgBgpIAAhEIB6AAIAAByQAAAJgEAFQgEAFgJABIgXABIgGgWIARABQAJAAAAgJIAAgNIgfAAIAAApIgUAAIAAgpIgfAAQgCAggLANQgJgHgKgFgAAQAFIAfAAIAAgRIgfAAgAgiAFIAeAAIAAgRIgeAAgAAQgfIAfAAIAAgSIgfAAgAgigfIAeAAIAAgSIgeAAg");
		// this.shape_95.setTransform(998.6, 301.6);

		// this.shape_96 = new cjs.Shape();
		// this.shape_96.graphics.f("#858C91").s().p("AgmBIIAAg0QgKASgNAQIgIgYQAUgWAKgTIgdAAIAAgTIAeAAIAAgQIgaADIgDgTQAhgCAlgEIADASIgYACIAAASIAaAAIAAATIgaAAIAAAPIAEgEIAaAWIgNAOIgRgRIAAA1gAAZBGQgCgLgDgJIAOABIAIAAQAEAAACgDQACgCAAgFIAAhwIAUAAIAAB5QAAAMgJAFQgHADgXAAIgGAAgAAOAlIAAheIATAAIAABeg");
		// this.shape_96.setTransform(983.6, 301.3);

		// this.shape_97 = new cjs.Shape();
		// this.shape_97.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		// this.shape_97.setTransform(968.9, 301.5);

		// this.shape_98 = new cjs.Shape();
		// this.shape_98.graphics.f("#858C91").s().p("AhHA2QAUgSAFgdIgYAAIAAgRIAZAAIAAgYIgEAAQgFAMgGALQgGgJgGgIQALgUAFgYIASAEIgFAQIAeAAIAAASIgOAAIAAAYIASAAIAAARIgTAAIgCAIIAYAfIAAhvIBOAAIAAASIg8AAIAAAUIA3AAIAAA4Ig3AAIAAAUIA+AAIAAATIhQAAIAAgTIgNALIgQgYQgJAVgQAQIgLgTgAAMALIAkAAIAAgUIgkAAg");
		// this.shape_98.setTransform(953.9, 301.2);

		// this.shape_99 = new cjs.Shape();
		// this.shape_99.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgMgKgOIgKAAIAAgRIBmAAIAAAQQgLAPgQAMQAVAGAeACIgLAVQglgEgZgNQgZAMgkAGQgFgJgGgKgAABAiQAOgHALgKIgwAAQAKAKANAHgAAdgVIAKgNQAQAJASAOIgNANIgfgXgAhIgNQASgKAPgMIANANQgRAMgSALIgLgOgAAIgDIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgSIA6AAIgFgLIAUgGIAHARIA5AAIAAASIgqAAIAAAig");
		// this.shape_99.setTransform(938.9, 301.2);

		// this.shape_100 = new cjs.Shape();
		// this.shape_100.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjIgRgTg");
		// this.shape_100.setTransform(923.5, 301.3);

		// this.shape_101 = new cjs.Shape();
		// this.shape_101.graphics.f("#858C91").s().p("AgKA6IAAAPIgSAAIAAg+IgKAQIgDgIIgMA1IgTgHQAHgXAHgiIAQAIIgDgLQARgXAHgVIgOAAIAAgRIAsAAIgGgMIAXgEIAHAQIAnAAIAAARIg7AAIAQAEIgCAIIAoAAIAAAQQgEAcgSAWQAMAJAQAFIgKATQgUgIgNgLQgLAKgTAKIgKgPgAgKA4QAQgJAMgIQgIgKgHgNIgFALIgIgRgAAPgBQAGAQAKALQAOgQADgUIgdAAIgEAJgAgBglIgJASIAAAZQANgVAJgYIgXAAgAATgEIAMgGIAKARIgMAHIgKgSgAhIgQIALgPIAXASIgPAPIgTgSgAhIg4IAMgOIAXASIgOAPIgVgTg");
		// this.shape_101.setTransform(909, 301.2);

		// this.shape_102 = new cjs.Shape();
		// this.shape_102.graphics.f("#333F48").s().p("ABTB8IAAgKIgrAAIAAAJIgeAAIAAhVIA3AAQgsgKgVgWQgSAWg0AKIA8AAIAABWIgeAAIAAgKIgqAAIAAAKIgfAAIAAhRIgLABQgCgMgEgPQBSgCARgTIhgAAIAAgbIBsAAIACgNIAkAAIgCANIAjAAIgEgKIAigFIAGAPIAoAAIAAAbIhoAAQAcAUBPACIgHAbIgLgBIAABQgAAoBXIArAAIAAgWIgrAAgAhSBXIAqAAIAAgWIgqAAgAALgwIAAhLIBmAAIAABLgAAqhLIAnAAIAAgVIgnAAgAhxgwIAAhLIBnAAIAABLgAhQhLIAnAAIAAgVIgnAAg");
		// this.shape_102.setTransform(279.1, 62);

		// this.shape_103 = new cjs.Shape();
		// this.shape_103.graphics.f("#333F48").s().p("AiCBhQAlggAIg0IgrAAIAAggIAtAAIAAgqIgGAAQgJAVgMATQgKgQgLgOQAUgjAJgsIAhAGIgIAeIA1AAIAAAhIgaAAIAAAqIAgAAIAAAgIgiAAIgCAPIAqA2IAAjIICOAAIAAAhIhsAAIAAAkIBkAAIAABlIhkAAIAAAlIBuAAIAAAhIiQAAIAAgiIgYAUIgcgrQgPAlgeAdQgLgTgKgPgAAWAUIBBAAIAAglIhBAAg");
		// this.shape_103.setTransform(251.7, 61.5);

		// this.shape_104 = new cjs.Shape();
		// this.shape_104.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
		// this.shape_104.setTransform(224.5, 61.6);

		// this.shape_105 = new cjs.Shape();
		// this.shape_105.graphics.f("#333F48").s().p("Ah8BhQBRgwAChbIhFAAIAAgjIBHAAIABg1IAoAAIgBA1IB9AAIgDBNQgBAqgCAaQgCAbgOAOQgOAOgXABIg6AAQgDgXgFgSQAVACAbAAQAOAAAHgFQAGgFADgIQACgIACgeIAChHIhVAAQgDBuhbA/QgOgRgQgRg");
		// this.shape_105.setTransform(196.4, 61.7);

		// this.shape_106 = new cjs.Shape();
		// this.shape_106.graphics.f("#333F48").s().p("AgTBoIAAAbIggAAIAAhvIgTAcIgEgNQgKAogMA2IgigMQANgqAMg8IAeANIgHgUQAggpALgmIgaAAIAAggIBRAAIgKgUIAogIIANAcIBGAAIAAAgIhpAAIAdAHIgFAOIBJAAIAAAcQgIA1ghAnQAWAPAeAKIgTAjQgkgQgWgTQgVASghATQgKgPgKgNgAgTBlQAfgRATgOQgOgSgLgXIgLAUIgOgegAAagDQAMAdASAWQAYgeAGglIg0AAIgIAQgAgEhDIgPAfIAAAuQAZglAQgsIgrAAgAAigIIAWgLIASAgIgWALIgSgggAiDgeIAVgbIAoAhIgZAcQgSgSgSgQgAiChmIAWgZQAUAQAUARIgZAbIglgjg");
		// this.shape_106.setTransform(170, 61.6);

		// this.timeline.addTween(cjs.Tween.get({}).to({
		// 	state: [{
		// 		t: this.shape_106
		// 	}, {
		// 		t: this.shape_105
		// 	}, {
		// 		t: this.shape_104
		// 	}, {
		// 		t: this.shape_103
		// 	}, {
		// 		t: this.shape_102
		// 	}, {
		// 		t: this.shape_101
		// 	}, {
		// 		t: this.shape_100
		// 	}, {
		// 		t: this.shape_99
		// 	}, {
		// 		t: this.shape_98
		// 	}, {
		// 		t: this.shape_97
		// 	}, {
		// 		t: this.shape_96
		// 	}, {
		// 		t: this.shape_95
		// 	}, {
		// 		t: this.shape_94
		// 	}, {
		// 		t: this.shape_93
		// 	}, {
		// 		t: this.shape_92
		// 	}, {
		// 		t: this.shape_91
		// 	}, {
		// 		t: this.shape_90
		// 	}, {
		// 		t: this.shape_89
		// 	}, {
		// 		t: this.shape_88
		// 	}, {
		// 		t: this.shape_87
		// 	}, {
		// 		t: this.shape_86
		// 	}, {
		// 		t: this.shape_85
		// 	}, {
		// 		t: this.shape_84
		// 	}, {
		// 		t: this.shape_83
		// 	}, {
		// 		t: this.shape_82
		// 	}, {
		// 		t: this.shape_81
		// 	}, {
		// 		t: this.shape_80
		// 	}, {
		// 		t: this.shape_79
		// 	}, {
		// 		t: this.shape_78
		// 	}, {
		// 		t: this.shape_77
		// 	}, {
		// 		t: this.shape_76
		// 	}, {
		// 		t: this.shape_75
		// 	}, {
		// 		t: this.shape_74
		// 	}, {
		// 		t: this.shape_73
		// 	}, {
		// 		t: this.shape_72
		// 	}, {
		// 		t: this.shape_71
		// 	}, {
		// 		t: this.shape_70
		// 	}, {
		// 		t: this.shape_69
		// 	}, {
		// 		t: this.shape_68
		// 	}, {
		// 		t: this.shape_67
		// 	}, {
		// 		t: this.shape_66
		// 	}, {
		// 		t: this.shape_65
		// 	}, {
		// 		t: this.shape_64
		// 	}, {
		// 		t: this.shape_63
		// 	}, {
		// 		t: this.shape_62
		// 	}, {
		// 		t: this.shape_61
		// 	}, {
		// 		t: this.shape_60
		// 	}, {
		// 		t: this.shape_59
		// 	}, {
		// 		t: this.shape_58
		// 	}, {
		// 		t: this.shape_57
		// 	}, {
		// 		t: this.shape_56
		// 	}, {
		// 		t: this.shape_55
		// 	}, {
		// 		t: this.shape_54
		// 	}, {
		// 		t: this.shape_53
		// 	}, {
		// 		t: this.shape_52
		// 	}, {
		// 		t: this.shape_51
		// 	}, {
		// 		t: this.shape_50
		// 	}, {
		// 		t: this.shape_49
		// 	}, {
		// 		t: this.shape_48
		// 	}, {
		// 		t: this.shape_47
		// 	}, {
		// 		t: this.shape_46
		// 	}, {
		// 		t: this.shape_45
		// 	}, {
		// 		t: this.shape_44
		// 	}, {
		// 		t: this.shape_43
		// 	}, {
		// 		t: this.shape_42
		// 	}, {
		// 		t: this.shape_41
		// 	}, {
		// 		t: this.shape_40
		// 	}, {
		// 		t: this.shape_39
		// 	}, {
		// 		t: this.shape_38
		// 	}, {
		// 		t: this.shape_37
		// 	}, {
		// 		t: this.shape_36
		// 	}, {
		// 		t: this.shape_35
		// 	}, {
		// 		t: this.shape_34
		// 	}, {
		// 		t: this.shape_33
		// 	}, {
		// 		t: this.shape_32
		// 	}, {
		// 		t: this.shape_31
		// 	}, {
		// 		t: this.shape_30
		// 	}, {
		// 		t: this.shape_29
		// 	}, {
		// 		t: this.shape_28
		// 	}, {
		// 		t: this.shape_27
		// 	}, {
		// 		t: this.shape_26
		// 	}, {
		// 		t: this.shape_25
		// 	}, {
		// 		t: this.shape_24
		// 	}, {
		// 		t: this.shape_23
		// 	}, {
		// 		t: this.shape_22
		// 	}, {
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
		// 	}]
		// }).wait(15));

		// 图层 7
		this.dragBtn = new lib.dragBtn();
		this.dragBtn.parent = this;
		this.dragBtn.setTransform(214.7, 141);
		new cjs.ButtonHelper(this.dragBtn, 0, 1, 2, false, new lib.dragBtn(), 3);

		this.timeline.addTween(cjs.Tween.get(this.dragBtn).wait(15));

		// 图层 5
		this.model = new lib.modelMC();
		this.model.parent = this;
		this.model.setTransform(192.9, 116.2, 0.959, 0.959);

		this.timeline.addTween(cjs.Tween.get(this.model).wait(15));

		// 图层 6
		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#F2F8F8").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
		this.shape_107.setTransform(394.5, 384);

		this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(15));

		// 图层 3
		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#FFFFFF").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
		this.shape_108.setTransform(683, 384);

		this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(15));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1366.6, 768);


	// stage content:
	(lib._3d1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(552.3, -474.6, 1396.6, 768);
	// library properties:
	lib.properties = {
		width: 1366,
		height: 768,
		fps: 24,
		color: "#F1F9F7",
		opacity: 1.00,
		webfonts: {},
		manifest: [{
				src: "images/3d1/ylbjq_zz_00000.jpg",
				id: "ylbjq_zz_00000"
			},
			{
				src: "images/3d1/ylbjq_zz_00001.jpg",
				id: "ylbjq_zz_00001"
			},
			{
				src: "images/3d1/ylbjq_zz_00002.jpg",
				id: "ylbjq_zz_00002"
			},
			{
				src: "images/3d1/ylbjq_zz_00003.jpg",
				id: "ylbjq_zz_00003"
			},
			{
				src: "images/3d1/ylbjq_zz_00004.jpg",
				id: "ylbjq_zz_00004"
			},
			{
				src: "images/3d1/ylbjq_zz_00005.jpg",
				id: "ylbjq_zz_00005"
			},
			{
				src: "images/3d1/ylbjq_zz_00006.jpg",
				id: "ylbjq_zz_00006"
			},
			{
				src: "images/3d1/ylbjq_zz_00007.jpg",
				id: "ylbjq_zz_00007"
			},
			{
				src: "images/3d1/ylbjq_zz_00008.jpg",
				id: "ylbjq_zz_00008"
			},
			{
				src: "images/3d1/ylbjq_zz_00009.jpg",
				id: "ylbjq_zz_00009"
			},
			{
				src: "images/3d1/ylbjq_zz_00010.jpg",
				id: "ylbjq_zz_00010"
			},
			{
				src: "images/3d1/ylbjq_zz_00011.jpg",
				id: "ylbjq_zz_00011"
			},
			{
				src: "images/3d1/ylbjq_zz_00012.jpg",
				id: "ylbjq_zz_00012"
			},
			{
				src: "images/3d1/ylbjq_zz_00013.jpg",
				id: "ylbjq_zz_00013"
			},
			{
				src: "images/3d1/ylbjq_zz_00014.jpg",
				id: "ylbjq_zz_00014"
			},
			{
				src: "images/3d1/ylbjq_zz_00015.jpg",
				id: "ylbjq_zz_00015"
			},
			{
				src: "images/3d1/ylbjq_zz_00016.jpg",
				id: "ylbjq_zz_00016"
			},
			{
				src: "images/3d1/ylbjq_zz_00017.jpg",
				id: "ylbjq_zz_00017"
			},
			{
				src: "images/3d1/ylbjq_zz_00018.jpg",
				id: "ylbjq_zz_00018"
			},
			{
				src: "images/3d1/ylbjq_zz_00019.jpg",
				id: "ylbjq_zz_00019"
			},
			{
				src: "images/3d1/ylbjq_zz_00020.jpg",
				id: "ylbjq_zz_00020"
			},
			{
				src: "images/3d1/ylbjq_zz_00021.jpg",
				id: "ylbjq_zz_00021"
			},
			{
				src: "images/3d1/ylbjq_zz_00022.jpg",
				id: "ylbjq_zz_00022"
			},
			{
				src: "images/3d1/ylbjq_zz_00023.jpg",
				id: "ylbjq_zz_00023"
			},
			{
				src: "images/3d1/ylbjq_zz_00024.jpg",
				id: "ylbjq_zz_00024"
			},
			{
				src: "images/3d1/ylbjq_zz_00025.jpg",
				id: "ylbjq_zz_00025"
			},
			{
				src: "images/3d1/ylbjq_zz_00026.jpg",
				id: "ylbjq_zz_00026"
			},
			{
				src: "images/3d1/ylbjq_zz_00027.jpg",
				id: "ylbjq_zz_00027"
			},
			{
				src: "images/3d1/ylbjq_zz_00028.jpg",
				id: "ylbjq_zz_00028"
			},
			{
				src: "images/3d1/ylbjq_zz_00029.jpg",
				id: "ylbjq_zz_00029"
			},
			{
				src: "images/3d1/ylbjq_zz_00030.jpg",
				id: "ylbjq_zz_00030"
			},
			{
				src: "images/3d1/ylbjq_zz_00031.jpg",
				id: "ylbjq_zz_00031"
			},
			{
				src: "images/3d1/ylbjq_zz_00032.jpg",
				id: "ylbjq_zz_00032"
			},
			{
				src: "images/3d1/ylbjq_zz_00033.jpg",
				id: "ylbjq_zz_00033"
			},
			{
				src: "images/3d1/ylbjq_zz_00034.jpg",
				id: "ylbjq_zz_00034"
			},
			{
				src: "images/3d1/ylbjq_zz_00035.jpg",
				id: "ylbjq_zz_00035"
			},
			{
				src: "images/3d1/ylbjq_zz_00036.jpg",
				id: "ylbjq_zz_00036"
			},
			{
				src: "images/3d1/ylbjq_zz_00037.jpg",
				id: "ylbjq_zz_00037"
			},
			{
				src: "images/3d1/ylbjq_zz_00038.jpg",
				id: "ylbjq_zz_00038"
			},
			{
				src: "images/3d1/ylbjq_zz_00039.jpg",
				id: "ylbjq_zz_00039"
			},
			{
				src: "images/3d1/ylbjq_zz_00040.jpg",
				id: "ylbjq_zz_00040"
			},
			{
				src: "images/3d1/ylbjq_zz_00041.jpg",
				id: "ylbjq_zz_00041"
			},
			{
				src: "images/3d1/ylbjq_zz_00042.jpg",
				id: "ylbjq_zz_00042"
			},
			{
				src: "images/3d1/ylbjq_zz_00043.jpg",
				id: "ylbjq_zz_00043"
			},
			{
				src: "images/3d1/ylbjq_zz_00044.jpg",
				id: "ylbjq_zz_00044"
			},
			{
				src: "images/3d1/ylbjq_zz_00045.jpg",
				id: "ylbjq_zz_00045"
			},
			{
				src: "images/3d1/ylbjq_zz_00046.jpg",
				id: "ylbjq_zz_00046"
			},
			{
				src: "images/3d1/ylbjq_zz_00047.jpg",
				id: "ylbjq_zz_00047"
			},
			{
				src: "images/3d1/ylbjq_zz_00048.jpg",
				id: "ylbjq_zz_00048"
			},
			{
				src: "images/3d1/ylbjq_zz_00049.jpg",
				id: "ylbjq_zz_00049"
			},
			{
				src: "images/3d1/ylbjq_zz_00050.jpg",
				id: "ylbjq_zz_00050"
			},
			{
				src: "images/3d1/ylbjq_zz_00051.jpg",
				id: "ylbjq_zz_00051"
			},
			{
				src: "images/3d1/ylbjq_zz_00052.jpg",
				id: "ylbjq_zz_00052"
			},
			{
				src: "images/3d1/ylbjq_zz_00053.jpg",
				id: "ylbjq_zz_00053"
			},
			{
				src: "images/3d1/ylbjq_zz_00054.jpg",
				id: "ylbjq_zz_00054"
			},
			{
				src: "images/3d1/ylbjq_zz_00055.jpg",
				id: "ylbjq_zz_00055"
			},
			{
				src: "images/3d1/ylbjq_zz_00056.jpg",
				id: "ylbjq_zz_00056"
			},
			{
				src: "images/3d1/ylbjq_zz_00057.jpg",
				id: "ylbjq_zz_00057"
			},
			{
				src: "images/3d1/ylbjq_zz_00058.jpg",
				id: "ylbjq_zz_00058"
			},
			{
				src: "images/3d1/ylbjq_zz_00059.jpg",
				id: "ylbjq_zz_00059"
			},
			{
				src: "images/3d1/ylbjq_zz_00060.jpg",
				id: "ylbjq_zz_00060"
			},
			{
				src: "images/3d1/ylbjq_zz_00061.jpg",
				id: "ylbjq_zz_00061"
			},
			{
				src: "images/3d1/ylbjq_zz_00062.jpg",
				id: "ylbjq_zz_00062"
			},
			{
				src: "images/3d1/ylbjq_zz_00063.jpg",
				id: "ylbjq_zz_00063"
			},
			{
				src: "images/3d1/ylbjq_zz_00064.jpg",
				id: "ylbjq_zz_00064"
			},
			{
				src: "images/3d1/ylbjq_zz_00065.jpg",
				id: "ylbjq_zz_00065"
			},
			{
				src: "images/3d1/ylbjq_zz_00066.jpg",
				id: "ylbjq_zz_00066"
			},
			{
				src: "images/3d1/ylbjq_zz_00067.jpg",
				id: "ylbjq_zz_00067"
			},
			{
				src: "images/3d1/ylbjq_zz_00068.jpg",
				id: "ylbjq_zz_00068"
			},
			{
				src: "images/3d1/ylbjq_zz_00069.jpg",
				id: "ylbjq_zz_00069"
			},
			{
				src: "images/3d1/ylbjq_zz_00070.jpg",
				id: "ylbjq_zz_00070"
			},
			{
				src: "images/3d1/ylbjq_zz_00071.jpg",
				id: "ylbjq_zz_00071"
			},
			{
				src: "images/3d1/ylbjq_zz_00072.jpg",
				id: "ylbjq_zz_00072"
			},
			{
				src: "images/3d1/ylbjq_zz_00073.jpg",
				id: "ylbjq_zz_00073"
			},
			{
				src: "images/3d1/ylbjq_zz_00074.jpg",
				id: "ylbjq_zz_00074"
			},
			{
				src: "images/3d1/ylbjq_zz_00075.jpg",
				id: "ylbjq_zz_00075"
			},
			{
				src: "images/3d1/ylbjq_zz_00076.jpg",
				id: "ylbjq_zz_00076"
			},
			{
				src: "images/3d1/ylbjq_zz_00077.jpg",
				id: "ylbjq_zz_00077"
			},
			{
				src: "images/3d1/ylbjq_zz_00078.jpg",
				id: "ylbjq_zz_00078"
			},
			{
				src: "images/3d1/ylbjq_zz_00079.jpg",
				id: "ylbjq_zz_00079"
			},
			{
				src: "images/3d1/ylbjq_zz_00080.jpg",
				id: "ylbjq_zz_00080"
			},
			{
				src: "images/3d1/ylbjq_zz_00081.jpg",
				id: "ylbjq_zz_00081"
			},
			{
				src: "images/3d1/ylbjq_zz_00082.jpg",
				id: "ylbjq_zz_00082"
			},
			{
				src: "images/3d1/ylbjq_zz_00083.jpg",
				id: "ylbjq_zz_00083"
			},
			{
				src: "images/3d1/ylbjq_zz_00084.jpg",
				id: "ylbjq_zz_00084"
			},
			{
				src: "images/3d1/ylbjq_zz_00085.jpg",
				id: "ylbjq_zz_00085"
			},
			{
				src: "images/3d1/ylbjq_zz_00086.jpg",
				id: "ylbjq_zz_00086"
			},
			{
				src: "images/3d1/ylbjq_zz_00087.jpg",
				id: "ylbjq_zz_00087"
			},
			{
				src: "images/3d1/ylbjq_zz_00088.jpg",
				id: "ylbjq_zz_00088"
			},
			{
				src: "images/3d1/ylbjq_zz_00089.jpg",
				id: "ylbjq_zz_00089"
			},
			{
				src: "images/3d1/ylbjq_zz_00090.jpg",
				id: "ylbjq_zz_00090"
			},
			{
				src: "images/3d1/ylbjq_zz_00091.jpg",
				id: "ylbjq_zz_00091"
			},
			{
				src: "images/3d1/ylbjq_zz_00092.jpg",
				id: "ylbjq_zz_00092"
			},
			{
				src: "images/3d1/ylbjq_zz_00093.jpg",
				id: "ylbjq_zz_00093"
			},
			{
				src: "images/3d1/ylbjq_zz_00094.jpg",
				id: "ylbjq_zz_00094"
			},
			{
				src: "images/3d1/ylbjq_zz_00095.jpg",
				id: "ylbjq_zz_00095"
			},
			{
				src: "images/3d1/ylbjq_zz_00096.jpg",
				id: "ylbjq_zz_00096"
			},
			{
				src: "images/3d1/ylbjq_zz_00097.jpg",
				id: "ylbjq_zz_00097"
			},
			{
				src: "images/3d1/ylbjq_zz_00098.jpg",
				id: "ylbjq_zz_00098"
			},
			{
				src: "images/3d1/ylbjq_zz_00099.jpg",
				id: "ylbjq_zz_00099"
			},
			{
				src: "images/3d1/ylbjq_zz_00100.jpg",
				id: "ylbjq_zz_00100"
			},
			{
				src: "images/3d1/ylbjq_zz_00101.jpg",
				id: "ylbjq_zz_00101"
			},
			{
				src: "images/3d1/ylbjq_zz_00102.jpg",
				id: "ylbjq_zz_00102"
			},
			{
				src: "images/3d1/ylbjq_zz_00103.jpg",
				id: "ylbjq_zz_00103"
			},
			{
				src: "images/3d1/ylbjq_zz_00104.jpg",
				id: "ylbjq_zz_00104"
			},
			{
				src: "images/3d1/ylbjq_zz_00105.jpg",
				id: "ylbjq_zz_00105"
			},
			{
				src: "images/3d1/ylbjq_zz_00106.jpg",
				id: "ylbjq_zz_00106"
			},
			{
				src: "images/3d1/ylbjq_zz_00107.jpg",
				id: "ylbjq_zz_00107"
			},
			{
				src: "images/3d1/ylbjq_zz_00108.jpg",
				id: "ylbjq_zz_00108"
			},
			{
				src: "images/3d1/ylbjq_zz_00109.jpg",
				id: "ylbjq_zz_00109"
			},
			{
				src: "images/3d1/ylbjq_zz_00110.jpg",
				id: "ylbjq_zz_00110"
			},
			{
				src: "images/3d1/ylbjq_zz_00111.jpg",
				id: "ylbjq_zz_00111"
			},
			{
				src: "images/3d1/ylbjq_zz_00112.jpg",
				id: "ylbjq_zz_00112"
			},
			{
				src: "images/3d1/ylbjq_zz_00113.jpg",
				id: "ylbjq_zz_00113"
			},
			{
				src: "images/3d1/ylbjq_zz_00114.jpg",
				id: "ylbjq_zz_00114"
			},
			{
				src: "images/3d1/ylbjq_zz_00115.jpg",
				id: "ylbjq_zz_00115"
			},
			{
				src: "images/3d1/ylbjq_zz_00116.jpg",
				id: "ylbjq_zz_00116"
			},
			{
				src: "images/3d1/ylbjq_zz_00117.jpg",
				id: "ylbjq_zz_00117"
			},
			{
				src: "images/3d1/ylbjq_zz_00118.jpg",
				id: "ylbjq_zz_00118"
			},
			{
				src: "images/3d1/ylbjq_zz_00119.jpg",
				id: "ylbjq_zz_00119"
			},
			{
				src: "images/3d1/ylbjq_zz_00120.jpg",
				id: "ylbjq_zz_00120"
			},
			{
				src: "images/3d1/ylbjq_zz_00121.jpg",
				id: "ylbjq_zz_00121"
			},
			{
				src: "images/3d1/ylbjq_zz_00122.jpg",
				id: "ylbjq_zz_00122"
			},
			{
				src: "images/3d1/ylbjq_zz_00123.jpg",
				id: "ylbjq_zz_00123"
			},
			{
				src: "images/3d1/ylbjq_zz_00124.jpg",
				id: "ylbjq_zz_00124"
			},
			{
				src: "images/3d1/ylbjq_zz_00125.jpg",
				id: "ylbjq_zz_00125"
			},
			{
				src: "images/3d1/ylbjq_zz_00126.jpg",
				id: "ylbjq_zz_00126"
			},
			{
				src: "images/3d1/ylbjq_zz_00127.jpg",
				id: "ylbjq_zz_00127"
			},
			{
				src: "images/3d1/ylbjq_zz_00128.jpg",
				id: "ylbjq_zz_00128"
			},
			{
				src: "images/3d1/ylbjq_zz_00129.jpg",
				id: "ylbjq_zz_00129"
			},
			{
				src: "images/3d1/ylbjq_zz_00130.jpg",
				id: "ylbjq_zz_00130"
			},
			{
				src: "images/3d1/ylbjq_zz_00131.jpg",
				id: "ylbjq_zz_00131"
			},
			{
				src: "images/3d1/ylbjq_zz_00132.jpg",
				id: "ylbjq_zz_00132"
			},
			{
				src: "images/3d1/ylbjq_zz_00133.jpg",
				id: "ylbjq_zz_00133"
			},
			{
				src: "images/3d1/ylbjq_zz_00134.jpg",
				id: "ylbjq_zz_00134"
			},
			{
				src: "images/3d1/ylbjq_zz_00135.jpg",
				id: "ylbjq_zz_00135"
			},
			{
				src: "images/3d1/ylbjq_zz_00136.jpg",
				id: "ylbjq_zz_00136"
			},
			{
				src: "images/3d1/ylbjq_zz_00137.jpg",
				id: "ylbjq_zz_00137"
			},
			{
				src: "images/3d1/ylbjq_zz_00138.jpg",
				id: "ylbjq_zz_00138"
			},
			{
				src: "images/3d1/ylbjq_zz_00139.jpg",
				id: "ylbjq_zz_00139"
			},
			{
				src: "images/3d1/ylbjq_zz_00140.jpg",
				id: "ylbjq_zz_00140"
			},
			{
				src: "images/3d1/ylbjq_zz_00141.jpg",
				id: "ylbjq_zz_00141"
			},
			{
				src: "images/3d1/ylbjq_zz_00142.jpg",
				id: "ylbjq_zz_00142"
			},
			{
				src: "images/3d1/ylbjq_zz_00143.jpg",
				id: "ylbjq_zz_00143"
			},
			{
				src: "images/3d1/ylbjq_zz_00144.jpg",
				id: "ylbjq_zz_00144"
			},
			{
				src: "images/3d1/ylbjq_zz_00145.jpg",
				id: "ylbjq_zz_00145"
			},
			{
				src: "images/3d1/ylbjq_zz_00146.jpg",
				id: "ylbjq_zz_00146"
			},
			{
				src: "images/3d1/ylbjq_zz_00147.jpg",
				id: "ylbjq_zz_00147"
			},
			{
				src: "images/3d1/ylbjq_zz_00148.jpg",
				id: "ylbjq_zz_00148"
			},
			{
				src: "images/3d1/ylbjq_zz_00149.jpg",
				id: "ylbjq_zz_00149"
			},
			{
				src: "images/3d1/ylbjq_zz_00150.jpg",
				id: "ylbjq_zz_00150"
			},
			{
				src: "images/3d1/ylbjq_zz_00151.jpg",
				id: "ylbjq_zz_00151"
			},
			{
				src: "images/3d1/ylbjq_zz_00152.jpg",
				id: "ylbjq_zz_00152"
			},
			{
				src: "images/3d1/ylbjq_zz_00153.jpg",
				id: "ylbjq_zz_00153"
			},
			{
				src: "images/3d1/ylbjq_zz_00154.jpg",
				id: "ylbjq_zz_00154"
			},
			{
				src: "images/3d1/ylbjq_zz_00155.jpg",
				id: "ylbjq_zz_00155"
			},
			{
				src: "images/3d1/ylbjq_zz_00156.jpg",
				id: "ylbjq_zz_00156"
			},
			{
				src: "images/3d1/ylbjq_zz_00157.jpg",
				id: "ylbjq_zz_00157"
			},
			{
				src: "images/3d1/ylbjq_zz_00158.jpg",
				id: "ylbjq_zz_00158"
			},
			{
				src: "images/3d1/ylbjq_zz_00159.jpg",
				id: "ylbjq_zz_00159"
			},
			{
				src: "images/3d1/ylbjq_zz_00160.jpg",
				id: "ylbjq_zz_00160"
			},
			{
				src: "images/3d1/ylbjq_zz_00161.jpg",
				id: "ylbjq_zz_00161"
			},
			{
				src: "images/3d1/ylbjq_zz_00162.jpg",
				id: "ylbjq_zz_00162"
			},
			{
				src: "images/3d1/ylbjq_zz_00163.jpg",
				id: "ylbjq_zz_00163"
			},
			{
				src: "images/3d1/ylbjq_zz_00164.jpg",
				id: "ylbjq_zz_00164"
			},
			{
				src: "images/3d1/ylbjq_zz_00165.jpg",
				id: "ylbjq_zz_00165"
			},
			{
				src: "images/3d1/ylbjq_zz_00166.jpg",
				id: "ylbjq_zz_00166"
			},
			{
				src: "images/3d1/ylbjq_zz_00167.jpg",
				id: "ylbjq_zz_00167"
			},
			{
				src: "images/3d1/ylbjq_zz_00168.jpg",
				id: "ylbjq_zz_00168"
			},
			{
				src: "images/3d1/ylbjq_zz_00169.jpg",
				id: "ylbjq_zz_00169"
			},
			{
				src: "images/3d1/ylbjq_zz_00170.jpg",
				id: "ylbjq_zz_00170"
			},
			{
				src: "images/3d1/ylbjq_zz_00171.jpg",
				id: "ylbjq_zz_00171"
			},
			{
				src: "images/3d1/ylbjq_zz_00172.jpg",
				id: "ylbjq_zz_00172"
			},
			{
				src: "images/3d1/ylbjq_zz_00173.jpg",
				id: "ylbjq_zz_00173"
			},
			{
				src: "images/3d1/ylbjq_zz_00174.jpg",
				id: "ylbjq_zz_00174"
			},
			{
				src: "images/3d1/ylbjq_zz_00175.jpg",
				id: "ylbjq_zz_00175"
			},
			{
				src: "images/3d1/ylbjq_zz_00176.jpg",
				id: "ylbjq_zz_00176"
			},
			{
				src: "images/3d1/ylbjq_zz_00177.jpg",
				id: "ylbjq_zz_00177"
			},
			{
				src: "images/3d1/ylbjq_zz_00178.jpg",
				id: "ylbjq_zz_00178"
			},
			{
				src: "images/3d1/ylbjq_zz_00179.jpg",
				id: "ylbjq_zz_00179"
			},
			{
				src: "images/3d1/ylbjq_zz_00180.jpg",
				id: "ylbjq_zz_00180"
			},
			{
				src: "images/3d1/ylbjq_zz_00181.jpg",
				id: "ylbjq_zz_00181"
			},
			{
				src: "images/3d1/ylbjq_zz_00182.jpg",
				id: "ylbjq_zz_00182"
			},
			{
				src: "images/3d1/ylbjq_zz_00183.jpg",
				id: "ylbjq_zz_00183"
			},
			{
				src: "images/3d1/ylbjq_zz_00184.jpg",
				id: "ylbjq_zz_00184"
			},
			{
				src: "images/3d1/ylbjq_zz_00185.jpg",
				id: "ylbjq_zz_00185"
			},
			{
				src: "images/3d1/ylbjq_zz_00186.jpg",
				id: "ylbjq_zz_00186"
			},
			{
				src: "images/3d1/ylbjq_zz_00187.jpg",
				id: "ylbjq_zz_00187"
			},
			{
				src: "images/3d1/ylbjq_zz_00188.jpg",
				id: "ylbjq_zz_00188"
			},
			{
				src: "images/3d1/ylbjq_zz_00189.jpg",
				id: "ylbjq_zz_00189"
			},
			{
				src: "images/3d1/ylbjq_zz_00190.jpg",
				id: "ylbjq_zz_00190"
			},
			{
				src: "images/3d1/ylbjq_zz_00191.jpg",
				id: "ylbjq_zz_00191"
			},
			{
				src: "images/3d1/ylbjq_zz_00192.jpg",
				id: "ylbjq_zz_00192"
			},
			{
				src: "images/3d1/ylbjq_zz_00193.jpg",
				id: "ylbjq_zz_00193"
			},
			{
				src: "images/3d1/ylbjq_zz_00194.jpg",
				id: "ylbjq_zz_00194"
			},
			{
				src: "images/3d1/ylbjq_zz_00195.jpg",
				id: "ylbjq_zz_00195"
			},
			{
				src: "images/3d1/ylbjq_zz_00196.jpg",
				id: "ylbjq_zz_00196"
			},
			{
				src: "images/3d1/ylbjq_zz_00197.jpg",
				id: "ylbjq_zz_00197"
			},
			{
				src: "images/3d1/ylbjq_zz_00198.jpg",
				id: "ylbjq_zz_00198"
			},
			{
				src: "images/3d1/ylbjq_zz_00199.jpg",
				id: "ylbjq_zz_00199"
			},
			{
				src: "images/3d1/ylbjq_zz_00200.jpg",
				id: "ylbjq_zz_00200"
			}
		],
		preloads: []
	};




})(lib3d1 = lib3d1 || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib3d1, images, createjs, ss, AdobeAn;