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



	(lib.ylbjq_dl_zz0000 = function () {
		this.initialize(img.ylbjq_dl_zz0000);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0001 = function () {
		this.initialize(img.ylbjq_dl_zz0001);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0002 = function () {
		this.initialize(img.ylbjq_dl_zz0002);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0003 = function () {
		this.initialize(img.ylbjq_dl_zz0003);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0004 = function () {
		this.initialize(img.ylbjq_dl_zz0004);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0005 = function () {
		this.initialize(img.ylbjq_dl_zz0005);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0006 = function () {
		this.initialize(img.ylbjq_dl_zz0006);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0007 = function () {
		this.initialize(img.ylbjq_dl_zz0007);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0008 = function () {
		this.initialize(img.ylbjq_dl_zz0008);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0009 = function () {
		this.initialize(img.ylbjq_dl_zz0009);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0010 = function () {
		this.initialize(img.ylbjq_dl_zz0010);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0011 = function () {
		this.initialize(img.ylbjq_dl_zz0011);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0012 = function () {
		this.initialize(img.ylbjq_dl_zz0012);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0013 = function () {
		this.initialize(img.ylbjq_dl_zz0013);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0014 = function () {
		this.initialize(img.ylbjq_dl_zz0014);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0015 = function () {
		this.initialize(img.ylbjq_dl_zz0015);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0016 = function () {
		this.initialize(img.ylbjq_dl_zz0016);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0017 = function () {
		this.initialize(img.ylbjq_dl_zz0017);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0018 = function () {
		this.initialize(img.ylbjq_dl_zz0018);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0019 = function () {
		this.initialize(img.ylbjq_dl_zz0019);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0020 = function () {
		this.initialize(img.ylbjq_dl_zz0020);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0021 = function () {
		this.initialize(img.ylbjq_dl_zz0021);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0022 = function () {
		this.initialize(img.ylbjq_dl_zz0022);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0023 = function () {
		this.initialize(img.ylbjq_dl_zz0023);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0024 = function () {
		this.initialize(img.ylbjq_dl_zz0024);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0025 = function () {
		this.initialize(img.ylbjq_dl_zz0025);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0026 = function () {
		this.initialize(img.ylbjq_dl_zz0026);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0027 = function () {
		this.initialize(img.ylbjq_dl_zz0027);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0028 = function () {
		this.initialize(img.ylbjq_dl_zz0028);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0029 = function () {
		this.initialize(img.ylbjq_dl_zz0029);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0030 = function () {
		this.initialize(img.ylbjq_dl_zz0030);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0031 = function () {
		this.initialize(img.ylbjq_dl_zz0031);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0032 = function () {
		this.initialize(img.ylbjq_dl_zz0032);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0033 = function () {
		this.initialize(img.ylbjq_dl_zz0033);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0034 = function () {
		this.initialize(img.ylbjq_dl_zz0034);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0035 = function () {
		this.initialize(img.ylbjq_dl_zz0035);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0036 = function () {
		this.initialize(img.ylbjq_dl_zz0036);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0037 = function () {
		this.initialize(img.ylbjq_dl_zz0037);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0038 = function () {
		this.initialize(img.ylbjq_dl_zz0038);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0039 = function () {
		this.initialize(img.ylbjq_dl_zz0039);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0040 = function () {
		this.initialize(img.ylbjq_dl_zz0040);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0041 = function () {
		this.initialize(img.ylbjq_dl_zz0041);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0042 = function () {
		this.initialize(img.ylbjq_dl_zz0042);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0043 = function () {
		this.initialize(img.ylbjq_dl_zz0043);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0044 = function () {
		this.initialize(img.ylbjq_dl_zz0044);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0045 = function () {
		this.initialize(img.ylbjq_dl_zz0045);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0046 = function () {
		this.initialize(img.ylbjq_dl_zz0046);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0047 = function () {
		this.initialize(img.ylbjq_dl_zz0047);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0048 = function () {
		this.initialize(img.ylbjq_dl_zz0048);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0049 = function () {
		this.initialize(img.ylbjq_dl_zz0049);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0050 = function () {
		this.initialize(img.ylbjq_dl_zz0050);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0051 = function () {
		this.initialize(img.ylbjq_dl_zz0051);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0052 = function () {
		this.initialize(img.ylbjq_dl_zz0052);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0053 = function () {
		this.initialize(img.ylbjq_dl_zz0053);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0054 = function () {
		this.initialize(img.ylbjq_dl_zz0054);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0055 = function () {
		this.initialize(img.ylbjq_dl_zz0055);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0056 = function () {
		this.initialize(img.ylbjq_dl_zz0056);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0057 = function () {
		this.initialize(img.ylbjq_dl_zz0057);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0058 = function () {
		this.initialize(img.ylbjq_dl_zz0058);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0059 = function () {
		this.initialize(img.ylbjq_dl_zz0059);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0060 = function () {
		this.initialize(img.ylbjq_dl_zz0060);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0061 = function () {
		this.initialize(img.ylbjq_dl_zz0061);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0062 = function () {
		this.initialize(img.ylbjq_dl_zz0062);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0063 = function () {
		this.initialize(img.ylbjq_dl_zz0063);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0064 = function () {
		this.initialize(img.ylbjq_dl_zz0064);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0065 = function () {
		this.initialize(img.ylbjq_dl_zz0065);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0066 = function () {
		this.initialize(img.ylbjq_dl_zz0066);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0067 = function () {
		this.initialize(img.ylbjq_dl_zz0067);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0068 = function () {
		this.initialize(img.ylbjq_dl_zz0068);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0069 = function () {
		this.initialize(img.ylbjq_dl_zz0069);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0070 = function () {
		this.initialize(img.ylbjq_dl_zz0070);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0071 = function () {
		this.initialize(img.ylbjq_dl_zz0071);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0072 = function () {
		this.initialize(img.ylbjq_dl_zz0072);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0073 = function () {
		this.initialize(img.ylbjq_dl_zz0073);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0074 = function () {
		this.initialize(img.ylbjq_dl_zz0074);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0075 = function () {
		this.initialize(img.ylbjq_dl_zz0075);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0076 = function () {
		this.initialize(img.ylbjq_dl_zz0076);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0077 = function () {
		this.initialize(img.ylbjq_dl_zz0077);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0078 = function () {
		this.initialize(img.ylbjq_dl_zz0078);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0079 = function () {
		this.initialize(img.ylbjq_dl_zz0079);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0080 = function () {
		this.initialize(img.ylbjq_dl_zz0080);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0081 = function () {
		this.initialize(img.ylbjq_dl_zz0081);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0082 = function () {
		this.initialize(img.ylbjq_dl_zz0082);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0083 = function () {
		this.initialize(img.ylbjq_dl_zz0083);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0084 = function () {
		this.initialize(img.ylbjq_dl_zz0084);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0085 = function () {
		this.initialize(img.ylbjq_dl_zz0085);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0086 = function () {
		this.initialize(img.ylbjq_dl_zz0086);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0087 = function () {
		this.initialize(img.ylbjq_dl_zz0087);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0088 = function () {
		this.initialize(img.ylbjq_dl_zz0088);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0089 = function () {
		this.initialize(img.ylbjq_dl_zz0089);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0090 = function () {
		this.initialize(img.ylbjq_dl_zz0090);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0091 = function () {
		this.initialize(img.ylbjq_dl_zz0091);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0092 = function () {
		this.initialize(img.ylbjq_dl_zz0092);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0093 = function () {
		this.initialize(img.ylbjq_dl_zz0093);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0094 = function () {
		this.initialize(img.ylbjq_dl_zz0094);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0095 = function () {
		this.initialize(img.ylbjq_dl_zz0095);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0096 = function () {
		this.initialize(img.ylbjq_dl_zz0096);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0097 = function () {
		this.initialize(img.ylbjq_dl_zz0097);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0098 = function () {
		this.initialize(img.ylbjq_dl_zz0098);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0099 = function () {
		this.initialize(img.ylbjq_dl_zz0099);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0100 = function () {
		this.initialize(img.ylbjq_dl_zz0100);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0101 = function () {
		this.initialize(img.ylbjq_dl_zz0101);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0102 = function () {
		this.initialize(img.ylbjq_dl_zz0102);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0103 = function () {
		this.initialize(img.ylbjq_dl_zz0103);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0104 = function () {
		this.initialize(img.ylbjq_dl_zz0104);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0105 = function () {
		this.initialize(img.ylbjq_dl_zz0105);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0106 = function () {
		this.initialize(img.ylbjq_dl_zz0106);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0107 = function () {
		this.initialize(img.ylbjq_dl_zz0107);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0108 = function () {
		this.initialize(img.ylbjq_dl_zz0108);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0109 = function () {
		this.initialize(img.ylbjq_dl_zz0109);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0110 = function () {
		this.initialize(img.ylbjq_dl_zz0110);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0111 = function () {
		this.initialize(img.ylbjq_dl_zz0111);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0112 = function () {
		this.initialize(img.ylbjq_dl_zz0112);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0113 = function () {
		this.initialize(img.ylbjq_dl_zz0113);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0114 = function () {
		this.initialize(img.ylbjq_dl_zz0114);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0115 = function () {
		this.initialize(img.ylbjq_dl_zz0115);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0116 = function () {
		this.initialize(img.ylbjq_dl_zz0116);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0117 = function () {
		this.initialize(img.ylbjq_dl_zz0117);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0118 = function () {
		this.initialize(img.ylbjq_dl_zz0118);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0119 = function () {
		this.initialize(img.ylbjq_dl_zz0119);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0120 = function () {
		this.initialize(img.ylbjq_dl_zz0120);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0121 = function () {
		this.initialize(img.ylbjq_dl_zz0121);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0122 = function () {
		this.initialize(img.ylbjq_dl_zz0122);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0123 = function () {
		this.initialize(img.ylbjq_dl_zz0123);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0124 = function () {
		this.initialize(img.ylbjq_dl_zz0124);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0125 = function () {
		this.initialize(img.ylbjq_dl_zz0125);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0126 = function () {
		this.initialize(img.ylbjq_dl_zz0126);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0127 = function () {
		this.initialize(img.ylbjq_dl_zz0127);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0128 = function () {
		this.initialize(img.ylbjq_dl_zz0128);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0129 = function () {
		this.initialize(img.ylbjq_dl_zz0129);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0130 = function () {
		this.initialize(img.ylbjq_dl_zz0130);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0131 = function () {
		this.initialize(img.ylbjq_dl_zz0131);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0132 = function () {
		this.initialize(img.ylbjq_dl_zz0132);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0133 = function () {
		this.initialize(img.ylbjq_dl_zz0133);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0134 = function () {
		this.initialize(img.ylbjq_dl_zz0134);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0135 = function () {
		this.initialize(img.ylbjq_dl_zz0135);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0136 = function () {
		this.initialize(img.ylbjq_dl_zz0136);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0137 = function () {
		this.initialize(img.ylbjq_dl_zz0137);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0138 = function () {
		this.initialize(img.ylbjq_dl_zz0138);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0139 = function () {
		this.initialize(img.ylbjq_dl_zz0139);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0140 = function () {
		this.initialize(img.ylbjq_dl_zz0140);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0141 = function () {
		this.initialize(img.ylbjq_dl_zz0141);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0142 = function () {
		this.initialize(img.ylbjq_dl_zz0142);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0143 = function () {
		this.initialize(img.ylbjq_dl_zz0143);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0144 = function () {
		this.initialize(img.ylbjq_dl_zz0144);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0145 = function () {
		this.initialize(img.ylbjq_dl_zz0145);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0146 = function () {
		this.initialize(img.ylbjq_dl_zz0146);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0147 = function () {
		this.initialize(img.ylbjq_dl_zz0147);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0148 = function () {
		this.initialize(img.ylbjq_dl_zz0148);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0149 = function () {
		this.initialize(img.ylbjq_dl_zz0149);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0150 = function () {
		this.initialize(img.ylbjq_dl_zz0150);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0151 = function () {
		this.initialize(img.ylbjq_dl_zz0151);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0152 = function () {
		this.initialize(img.ylbjq_dl_zz0152);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0153 = function () {
		this.initialize(img.ylbjq_dl_zz0153);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0154 = function () {
		this.initialize(img.ylbjq_dl_zz0154);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0155 = function () {
		this.initialize(img.ylbjq_dl_zz0155);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0156 = function () {
		this.initialize(img.ylbjq_dl_zz0156);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0157 = function () {
		this.initialize(img.ylbjq_dl_zz0157);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0158 = function () {
		this.initialize(img.ylbjq_dl_zz0158);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0159 = function () {
		this.initialize(img.ylbjq_dl_zz0159);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0160 = function () {
		this.initialize(img.ylbjq_dl_zz0160);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0161 = function () {
		this.initialize(img.ylbjq_dl_zz0161);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0162 = function () {
		this.initialize(img.ylbjq_dl_zz0162);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0163 = function () {
		this.initialize(img.ylbjq_dl_zz0163);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0164 = function () {
		this.initialize(img.ylbjq_dl_zz0164);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0165 = function () {
		this.initialize(img.ylbjq_dl_zz0165);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0166 = function () {
		this.initialize(img.ylbjq_dl_zz0166);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0167 = function () {
		this.initialize(img.ylbjq_dl_zz0167);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0168 = function () {
		this.initialize(img.ylbjq_dl_zz0168);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0169 = function () {
		this.initialize(img.ylbjq_dl_zz0169);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0170 = function () {
		this.initialize(img.ylbjq_dl_zz0170);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0171 = function () {
		this.initialize(img.ylbjq_dl_zz0171);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0172 = function () {
		this.initialize(img.ylbjq_dl_zz0172);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0173 = function () {
		this.initialize(img.ylbjq_dl_zz0173);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0174 = function () {
		this.initialize(img.ylbjq_dl_zz0174);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0175 = function () {
		this.initialize(img.ylbjq_dl_zz0175);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0176 = function () {
		this.initialize(img.ylbjq_dl_zz0176);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0177 = function () {
		this.initialize(img.ylbjq_dl_zz0177);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0178 = function () {
		this.initialize(img.ylbjq_dl_zz0178);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0179 = function () {
		this.initialize(img.ylbjq_dl_zz0179);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0180 = function () {
		this.initialize(img.ylbjq_dl_zz0180);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0181 = function () {
		this.initialize(img.ylbjq_dl_zz0181);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0182 = function () {
		this.initialize(img.ylbjq_dl_zz0182);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0183 = function () {
		this.initialize(img.ylbjq_dl_zz0183);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0184 = function () {
		this.initialize(img.ylbjq_dl_zz0184);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0185 = function () {
		this.initialize(img.ylbjq_dl_zz0185);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0186 = function () {
		this.initialize(img.ylbjq_dl_zz0186);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0187 = function () {
		this.initialize(img.ylbjq_dl_zz0187);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0188 = function () {
		this.initialize(img.ylbjq_dl_zz0188);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0189 = function () {
		this.initialize(img.ylbjq_dl_zz0189);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0190 = function () {
		this.initialize(img.ylbjq_dl_zz0190);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0191 = function () {
		this.initialize(img.ylbjq_dl_zz0191);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0192 = function () {
		this.initialize(img.ylbjq_dl_zz0192);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0193 = function () {
		this.initialize(img.ylbjq_dl_zz0193);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0194 = function () {
		this.initialize(img.ylbjq_dl_zz0194);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0195 = function () {
		this.initialize(img.ylbjq_dl_zz0195);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0196 = function () {
		this.initialize(img.ylbjq_dl_zz0196);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0197 = function () {
		this.initialize(img.ylbjq_dl_zz0197);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0198 = function () {
		this.initialize(img.ylbjq_dl_zz0198);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0199 = function () {
		this.initialize(img.ylbjq_dl_zz0199);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


	(lib.ylbjq_dl_zz0200 = function () {
		this.initialize(img.ylbjq_dl_zz0200);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1000, 563);


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

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
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
		}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 128.1, 39);


	(lib.tab2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["#FF9900", "#FFB600", "#FFE800", "#FFF050", "#FFB100"], [0.584, 0.671, 0.749, 0.875, 1], -0.3, 0.2, 0, -0.3, 0.2, 22.7).s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQAQAQAMASQAmA3AABFQAABGgmA3QgMASgQAQQhCBChdAAQhcAAhChCgAhkhjQgpApAAA7QAAA6ApAqQAqApA6AAQA7AAApgpQAqgqAAg6QAAg7gqgpQgpgqg7AAQg6AAgqAqg");

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-22.5, -22.5, 45, 45);


	(lib.tab1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["rgba(255,255,0,0)", "#FFFF00", "rgba(255,255,0,0)"], [0.267, 0.588, 0.941], -0.3, 0.2, 0, -0.3, 0.2, 30.9).s().p("AjkDlQhfhfAAiGQAAiFBfhfQBfhfCFAAQCGAABfBfQAXAXARAZQA3BPAABlQAABmg3BPQgRAYgXAYQhfBfiGAAQiFAAhfhfgAguguQgTAUAAAaQAAAbATAUQATATAbAAQAbAAATgTQAUgUAAgbQAAgagUgUQgTgTgbAAQgbAAgTATg");

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1, -1, 198.9, 50.8);


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

		this.timeline.addTween(cjs.Tween.get(this.instance).to({
			startPosition: 0
		}, 14).to({
			startPosition: 0
		}, 15).wait(1));

		// 图层 3
		this.instance_1 = new lib.tab1("synched", 0);
		this.instance_1.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
			alpha: 0
		}, 14).to({
			alpha: 1
		}, 15).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-32.4, -32.4, 64.8, 64.8);


	(lib.dl = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 3
		this.instance = new lib.tabMC();
		this.instance.parent = this;
		this.instance.setTransform(668.1, 396.9, 0.611, 0.611, 0, 0, 0, 1.8, 2.4);

		this.instance_1 = new lib.tabMC();
		this.instance_1.parent = this;
		this.instance_1.setTransform(463, 311.7, 0.611, 0.611, 0, 0, 0, 2.3, 2.6);

		this.instance_2 = new lib.tabMC();
		this.instance_2.parent = this;
		this.instance_2.setTransform(481.2, 140.4, 0.611, 0.611, 0, 0, 0, 2.7, 1.7);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AA7BSIAAgGIhAAAIAAAGIgMAAIAAg9IBXAAIAAA9gAgFBBIBAAAIAAgNIhAAAgAgFAsIBAAAIAAgNIhAAAgAg6BSIAAhcQgJAegKARIgFgOQAOgZAJgiIgVAAIAAgLIAWAAIAAgiIALAAIAAAiIATAAIAAALIgTAAIAAAYIAHgFIAQASIgJAHQgGgIgIgIIAABagABCANIAAgFIhOAAIAAAFIgLAAIAAg5IAdAAIAAgNIgjAAIAAgKIAjAAIAAgOIAKAAIAAAOIAUAAIAAgOIALAAIAAAOIAkAAIAAAKIgkAAIAAANIAdAAIAAA5gAAvAAIATAAIAAgNIgTAAgAAQAAIAUAAIAAgNIgUAAgAgMAAIASAAIAAgNIgSAAgAAvgVIATAAIAAgOIgTAAgAAQgVIAUAAIAAgOIgUAAgAgMgVIASAAIAAgOIgSAAgAAQgsIAUAAIAAgNIgUAAg");
		this.shape.setTransform(433, 106.8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgcBSIAAiFIAvAAIAAgeIAOAAIAAAeIAwAAIAACFIgNAAIAAgKIhSAAIAAAKgAAhA7IAjAAIAAguIgjAAgAgOA7IAhAAIAAguIghAAgAAhACIAjAAIAAgqIgjAAgAgOACIAhAAIAAgqIghAAgAhLBLQALgdAIggIANAHIgTA9gAhQgYIAIgKIAdAWIgKAMIgbgYgAhJhEIAJgJIAdAXIgKALQgMgNgQgMg");
		this.shape_1.setTransform(415.6, 106.8);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AhRBMIAAgOIAeAAIAAhqIAOAAIAABqIAoAAIAAiJIAOAAIAAAxIA4AAIAAAOIg4AAIAABKIBBAAIAAAOg");
		this.shape_2.setTransform(398.8, 106.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AghBIQA1gNACgpIABgfIAMAAQABAogEAKQAbAQAZASIgKALQgXgSgYgQQgPAZgkALIgJgMgAhABCQAGgFAAgIIAAgkIgXAAIAAgMIAXAAIAAgVIgLAAIAAgMIAqAAIAAAMIgTAAIAAAVIAWAAIAAAMIgWAAIAAAoIAWgNIABAOIgZAOIgHAFgAA/AsIAAhCIhDAAIAABCIgNAAIAAhOIAnAAIAAgwIANAAIAAAwIApAAIAABOgAhTgfQAQgXAKgdIANAEIgKAWIAfAAIAAALIglAAQgHAOgIAMIgIgLgAAxgtQALgOAJgPIAMAHIgWAegAgXhDIALgGIATAcIgKAHQgJgQgLgNg");
		this.shape_3.setTransform(381.5, 106.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AA5BNIAAgJIgkAAIAAAJIgMAAIAAg0IA1AAQgwgHgNgVIgCAAQgJATg0AJIA2AAIAAA0IgMAAIAAgJIgjAAIAAAJIgMAAIAAgzIgJACIgHgMQA4gHAMgMIg9AAIAAgLIBEAAQACgHABgIIALACIgDANIAlAAIgPgKIAHgIIgLAAIAAAFIgMAAIAAgxIA7AAIAAAyIgLAAIAAgGIgZAAIAUANIgDAFIAfAAIAAALIhBAAQATASAygBIgHAMIgJAAIAAAzgAAVA5IAkAAIAAgWIgkAAgAg3A5IAjAAIAAgWIgjAAgAAVgqIAkAAIAAgXIgkAAgAhDgZIAAgzIA7AAIAAAxIgMAAIAAgFIgjAAIAAAHgAg3gqIAjAAIAAgXIgjAAg");
		this.shape_4.setTransform(364.3, 107.1);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BSIAAhLIB0AAIAABLIgOAAIAAgLIhZAAIAAALgAgsA6IBZAAIAAgmIhZAAgAhTgSQA0gaAbglIASAAIgEAFQAcAkAuASIgJAOQgOgGgMgJIAAAKIhhAAIAAgJIgaAQIgJgMgAgrgZIBZAAQgagSgTgYQgQAXgcATg");
		this.shape_5.setTransform(347.2, 107);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("AhFBTIAAhDIA3AAIAHgQIg4AAIAAgvIAMAAIAAAmIBmAAIAAgmIAMAAIAAA2IgMAAIAAgHIgsAAIgHAQIBGAAIAAAwQAAASgRAAIgSAAIgCgNIARABQAHAAAAgIIAAgkIhAAAQgGANgIAJIAngBIgJgKIAIgGIAaAaIgJAIIgHgIIguADIgQACIgEgMQAGgFAFgGIAIgNIgkAAIAAA5gAgtgVQASgFARgGIgggLIAFgIIAnAOQARgHAQgIIAFAIIgYALIAaAKIgFAKIghgOQgUAJgWAHIgHgKgAhQg2IAAgLIBJAAIgGgMIANgFIAJARIBHAAIAAALg");
		this.shape_6.setTransform(330, 106.7);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("AhRBMIAAgOIAeAAIAAhqIAOAAIAABqIAoAAIAAiJIAOAAIAAAxIA4AAIAAAOIg4AAIAABKIBBAAIAAAOg");
		this.shape_7.setTransform(312.9, 106.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AghBIQA1gNABgpIABgfIAOAAQgBAogDAKQAbAQAYASIgJALQgXgSgYgQQgPAZglALIgIgMgAg/BCQAFgFAAgIIAAgkIgWAAIAAgMIAWAAIAAgVIgMAAIAAgMIAsAAIAAAMIgUAAIAAAVIAWAAIAAAMIgWAAIAAAoIAWgNIABAOIgYAOIgHAFgAA/AsIAAhCIhEAAIAABCIgMAAIAAhOIAnAAIAAgwIANAAIAAAwIAoAAIAABOgAhSgfQAQgXAKgdIAMAEIgKAWIAeAAIAAALIgkAAQgHAOgJAMIgGgLgAAwgtQAMgOAKgPIALAHIgWAegAgXhDIAKgGIAVAcIgLAHQgJgQgLgNg");
		this.shape_8.setTransform(295.6, 106.9);

		this.instance_3 = new lib.tabKuang("synched", 0);
		this.instance_3.parent = this;
		this.instance_3.setTransform(282.2, 87.8, 1.399, 1.145, 0, 0, 0, 1.1, 1.4);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AhPBGQAQgQAEgQQAGgPAAggIAAhFIAOAAIAAAtIA8AAIAAgwIAOAAIAAAwIAtAAIAAANIh3AAIgBAcIBTAAIAABJIgPAAIAAg8IhFAAQgDAkgZAZIgKgMg");
		this.shape_9.setTransform(781.6, 378.2);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AAWBSIAAhbIgnAAIAAgOIAnAAIAAg6IAPAAIAAA6IApAAIAAAOIgpAAIAABbgAhNA5IAAh4IA1AAIAAB1IgOAAIAAgMIgaAAIAAAPgAhAAdIAaAAIAAhPIgaAAg");
		this.shape_10.setTransform(764.7, 378.2);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFFFF").s().p("AguBTIAAgkIgjAFIgBgMIAkgFIAAgYIghAAIAAgKIAQgtIgSAAIAAgLIAVAAIAHgbIANADIgHAYIAlAAIAAALIgpAAIgPAsIAUAAIAAgkIALAAIAAAkIAWAAIAAALIgWAAIAAAXIAYgDIAAANIgYACIAAAlgAATBOQgTAAAAgUIAAhLIALAAIAAAkQAXgMASgRIALAIQgaAWgaANIAAAWQAAALANgBIAWAAQAMABACgLIACgYIANAEIgDAYQgDATgVAAgAgYgVQAegWARglIAQAAIgDAFQATAkAcAOIgJAMQgbgQgTgiQgTAggYAUIgJgKg");
		this.shape_11.setTransform(747.1, 378.2);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFFFF").s().p("AAABNIgDgOIAYABQANAAAAgKIAAgYIh0AAIAAgMIB0AAIAAgMIANAAIAAAMIAkAAIAAAMIgkAAIAAAbQAAAUgVAAIgaAAgAgzAnIAIgJIAcAYIgKAKIgagZgAgpABQgWAAAAgVIAAg4IB3AAIAAAzIgMAAIAAgGIheAAIAAAKQAAALAMAAIBXAAQAOAAABgIIAEgTIANAFIgFATQgDAOgVAAgAgygrIBeAAIAAgVIheAAg");
		this.shape_12.setTransform(729.9, 378.4);

		this.instance_4 = new lib.tabKuang("synched", 0);
		this.instance_4.parent = this;
		this.instance_4.setTransform(834.8, 359.3, 1.145, 1.145, 0, 0, 180, -1.2, 1.4);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AgqBKQANgMAIgPQgIgNgGgSIAKgEQAEAMAFAJQAFgQABgUIgVAAIAAgLIAVgoIgUAAIAAgLIAfAAIAAALIgUApIATAAIAAAJQAAAbgIAWQAOATAXABQAUABAjgBIgFAMQgcABgVgCQgbAAgRgTQgHAOgMAMIgJgJgAhFA9QAGgGAAgIIAAgjIgSAAIAAgKIASAAIAAgSIgJAAIAAgIIgDAGIgIgKQAOgYAHgeIALADIgGAWIAXAAIAAALIgcAAIgIATIAiAAIAAALIgQAAIAAASIAVAAIAAAKIgVAAIAAAlIAQgMIACAMIgRAPIgJAIgAAfA8IAAgTIgeAAIAAgKIAeAAIAAgPIgaAAIAAgKIAaAAIAAgNIgXAAIAAgKIAXAAIAAgPIgfAAIAAgJIAfAAIAAgOIgYAAIAAgKIAYAAIAAgRIALAAIAAARIAdAAIAAAYIALAAIAAAJIgLAAIAAAcIgLAAIAAgDIgSAAIAAANIAeAAIAAAKIgeAAIAAAPIAfAAIAAAKIgfAAIAAATgAAqgRIASAAIAAgPIgSAAgAAqgpIASAAIAAgOIgSAAg");
		this.shape_13.setTransform(379.6, 291.7);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BSIAAhFQgMANgMAMIgHgNQAbgXAVgiIALAGIgPAXIAABVgAAaBOQgUAAAAgWIAAgWIgfAQIgIgLQAWgJARgLIAAgvIAOAAIAAAnQAZgPATgUIAKALQgYAVgeATIAAAcQgBALALAAIAYAAQAKAAACgKQACgJABgRIAOAFIgDAZQgEASgTAAgAAWggIAAgRIgsAAIAAAPIgNAAIAAgPIguAAIAAgLIAuAAIAAgVIANAAIAAAVIAsAAIAAgVIAOAAIAAAVIAvAAIAAALIgvAAIAAARg");
		this.shape_14.setTransform(345.4, 291.7);

		this.instance_5 = new lib.tabKuang("synched", 0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(296.6, 271.9, 1.145, 1.145, 0, 0, 0, 1.3, 1.2);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFFFF").s().p("AA5BNIAAgJIgkAAIAAAJIgMAAIAAg0IA2AAQgwgHgOgVIgCAAQgJATg0AJIA2AAIAAA0IgMAAIAAgJIgjAAIAAAJIgMAAIAAgzIgJACIgHgMQA4gIAMgLIg9AAIAAgMIBEAAQACgGABgIIALACIgDAMIAlAAIgOgJIAGgIIgLAAIAAAFIgMAAIAAgxIA7AAIAAAyIgLAAIAAgGIgZAAQAMAHAIAGIgDAEIAfAAIAAAMIhBAAQAUASAxgBIgHAMIgIAAIAAAzgAAVA5IAkAAIAAgWIgkAAgAg3A5IAjAAIAAgWIgjAAgAAVgqIAkAAIAAgXIgkAAgAhDgZIAAgzIA7AAIAAAxIgMAAIAAgFIgjAAIAAAHgAg3gqIAjAAIAAgXIgjAAg");
		this.shape_15.setTransform(683, 302.3);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FFFFFF").s().p("Ag5BSIAAhLIB0AAIAABLIgOAAIAAgLIhZAAIAAALgAgsA6IBZAAIAAgmIhZAAgAhTgSQA0gaAbglIASAAIgEAFQAcAkAuASIgJAOQgOgGgMgJIAAAKIhhAAIAAgJIgaARIgJgNgAgrgZIBZAAQgagRgTgZQgQAXgcATg");
		this.shape_16.setTransform(665.8, 302.2);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFFFFF").s().p("AhFBTIAAhDIA3AAIAHgPIg4AAIAAgwIANAAIAAAmIBlAAIAAgmIAMAAIAAA2IgMAAIAAgGIgsAAIgHAPIBGAAIAAAxQAAARgRAAIgSAAIgCgNIARABQAHAAAAgHIAAgkIhAAAQgGAMgIAKIAngCIgJgJIAIgHIAaAaIgKAIIgGgIIguADIgQACIgEgMQAGgEAFgHIAIgMIgkAAIAAA4gAgtgVIAigLIgegKIAEgJIAoAOIAggPIAFAJIgYALIAaAKIgFAJIghgNQgUAIgWAGIgHgJgAhQg1IAAgMIBJAAIgGgLIAMgGIAKARIBHAAIAAAMg");
		this.shape_17.setTransform(648.7, 301.9);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFFFFF").s().p("AhGBSIAAiJIAyAAIAIgaIANAEIgIAWIBOAAIAAB1QAAATgTAAIgaAAIgCgNIAZABQAIAAABgKIAAhlIhzAAIAAB8gAgiAzIAAhFIBFAAIAAA6Ig4AAIAAALgAgVAcIArAAIAAgiIgrAAg");
		this.shape_18.setTransform(631.5, 301.9);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFFFFF").s().p("AgGBUIAAgkIhLAAIAAgMIBLAAIAAgTIguAAIAAAIIgNAAIAAhRIAjAAIgRgTIAJgIIAWAXIgGAEIAmAAIATgaIANAHIgQATIAiAAIAABRIgNAAIAAgIIguAAIAAATIBLAAIAAAMIhLAAIAAAkgAAHAFIAuAAIAAgSIguAAgAg0AFIAuAAIAAgSIguAAgAAHgYIAuAAIAAgTIguAAgAg0gYIAuAAIAAgTIguAAg");
		this.shape_19.setTransform(614.3, 302);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_5
			}, {
				t: this.shape_14
			}, {
				t: this.shape_13
			}, {
				t: this.instance_4
			}, {
				t: this.shape_12
			}, {
				t: this.shape_11
			}, {
				t: this.shape_10
			}, {
				t: this.shape_9
			}, {
				t: this.instance_3,
				p: {
					regX: 1.1,
					regY: 1.4,
					scaleX: 1.399,
					scaleY: 1.145,
					skewY: 0,
					x: 282.2,
					y: 87.8
				}
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
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance,
				p: {
					regX: 1.8,
					regY: 2.4,
					scaleX: 0.611,
					scaleY: 0.611,
					x: 668.1,
					y: 396.9
				}
			}]
		}).to({
			state: []
		}, 21).to({
			state: [{
				t: this.instance_3,
				p: {
					regX: 0,
					regY: 0,
					scaleX: 1.146,
					scaleY: 1.146,
					skewY: 180,
					x: 718,
					y: 281.8
				}
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
				t: this.instance,
				p: {
					regX: 0.1,
					regY: 0.1,
					scaleX: 0.612,
					scaleY: 0.612,
					x: 556.5,
					y: 332.3
				}
			}]
		}, 61).to({
			state: []
		}, 29).to({
			state: [{
				t: this.instance_5
			}, {
				t: this.shape_14
			}, {
				t: this.shape_13
			}, {
				t: this.instance_4
			}, {
				t: this.shape_12
			}, {
				t: this.shape_11
			}, {
				t: this.shape_10
			}, {
				t: this.shape_9
			}, {
				t: this.instance_3,
				p: {
					regX: 1.1,
					regY: 1.4,
					scaleX: 1.399,
					scaleY: 1.145,
					skewY: 0,
					x: 282.2,
					y: 87.8
				}
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
			}, {
				t: this.instance_2
			}, {
				t: this.instance_1
			}, {
				t: this.instance,
				p: {
					regX: 1.8,
					regY: 2.4,
					scaleX: 0.611,
					scaleY: 0.611,
					x: 668.1,
					y: 396.9
				}
			}]
		}, 66).wait(24));

		// 图层 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("EgudAqGMAAAhULMBc7AAAMAAABULg");
		mask.setTransform(503.7, 293.6);

		// 图层 1
		this.instance_6 = new lib.ylbjq_dl_zz0200();
		this.instance_6.parent = this;

		this.instance_7 = new lib.ylbjq_dl_zz0199();
		this.instance_7.parent = this;

		this.instance_8 = new lib.ylbjq_dl_zz0198();
		this.instance_8.parent = this;

		this.instance_9 = new lib.ylbjq_dl_zz0197();
		this.instance_9.parent = this;

		this.instance_10 = new lib.ylbjq_dl_zz0196();
		this.instance_10.parent = this;

		this.instance_11 = new lib.ylbjq_dl_zz0195();
		this.instance_11.parent = this;

		this.instance_12 = new lib.ylbjq_dl_zz0194();
		this.instance_12.parent = this;

		this.instance_13 = new lib.ylbjq_dl_zz0193();
		this.instance_13.parent = this;

		this.instance_14 = new lib.ylbjq_dl_zz0192();
		this.instance_14.parent = this;

		this.instance_15 = new lib.ylbjq_dl_zz0191();
		this.instance_15.parent = this;

		this.instance_16 = new lib.ylbjq_dl_zz0190();
		this.instance_16.parent = this;

		this.instance_17 = new lib.ylbjq_dl_zz0189();
		this.instance_17.parent = this;

		this.instance_18 = new lib.ylbjq_dl_zz0188();
		this.instance_18.parent = this;

		this.instance_19 = new lib.ylbjq_dl_zz0187();
		this.instance_19.parent = this;

		this.instance_20 = new lib.ylbjq_dl_zz0186();
		this.instance_20.parent = this;

		this.instance_21 = new lib.ylbjq_dl_zz0185();
		this.instance_21.parent = this;

		this.instance_22 = new lib.ylbjq_dl_zz0184();
		this.instance_22.parent = this;

		this.instance_23 = new lib.ylbjq_dl_zz0183();
		this.instance_23.parent = this;

		this.instance_24 = new lib.ylbjq_dl_zz0182();
		this.instance_24.parent = this;

		this.instance_25 = new lib.ylbjq_dl_zz0181();
		this.instance_25.parent = this;

		this.instance_26 = new lib.ylbjq_dl_zz0180();
		this.instance_26.parent = this;

		this.instance_27 = new lib.ylbjq_dl_zz0179();
		this.instance_27.parent = this;

		this.instance_28 = new lib.ylbjq_dl_zz0178();
		this.instance_28.parent = this;

		this.instance_29 = new lib.ylbjq_dl_zz0177();
		this.instance_29.parent = this;

		this.instance_30 = new lib.ylbjq_dl_zz0176();
		this.instance_30.parent = this;

		this.instance_31 = new lib.ylbjq_dl_zz0175();
		this.instance_31.parent = this;

		this.instance_32 = new lib.ylbjq_dl_zz0174();
		this.instance_32.parent = this;

		this.instance_33 = new lib.ylbjq_dl_zz0173();
		this.instance_33.parent = this;

		this.instance_34 = new lib.ylbjq_dl_zz0172();
		this.instance_34.parent = this;

		this.instance_35 = new lib.ylbjq_dl_zz0171();
		this.instance_35.parent = this;

		this.instance_36 = new lib.ylbjq_dl_zz0170();
		this.instance_36.parent = this;

		this.instance_37 = new lib.ylbjq_dl_zz0169();
		this.instance_37.parent = this;

		this.instance_38 = new lib.ylbjq_dl_zz0168();
		this.instance_38.parent = this;

		this.instance_39 = new lib.ylbjq_dl_zz0167();
		this.instance_39.parent = this;

		this.instance_40 = new lib.ylbjq_dl_zz0166();
		this.instance_40.parent = this;

		this.instance_41 = new lib.ylbjq_dl_zz0165();
		this.instance_41.parent = this;

		this.instance_42 = new lib.ylbjq_dl_zz0164();
		this.instance_42.parent = this;

		this.instance_43 = new lib.ylbjq_dl_zz0163();
		this.instance_43.parent = this;

		this.instance_44 = new lib.ylbjq_dl_zz0162();
		this.instance_44.parent = this;

		this.instance_45 = new lib.ylbjq_dl_zz0161();
		this.instance_45.parent = this;

		this.instance_46 = new lib.ylbjq_dl_zz0160();
		this.instance_46.parent = this;

		this.instance_47 = new lib.ylbjq_dl_zz0159();
		this.instance_47.parent = this;

		this.instance_48 = new lib.ylbjq_dl_zz0158();
		this.instance_48.parent = this;

		this.instance_49 = new lib.ylbjq_dl_zz0157();
		this.instance_49.parent = this;

		this.instance_50 = new lib.ylbjq_dl_zz0156();
		this.instance_50.parent = this;

		this.instance_51 = new lib.ylbjq_dl_zz0155();
		this.instance_51.parent = this;

		this.instance_52 = new lib.ylbjq_dl_zz0154();
		this.instance_52.parent = this;

		this.instance_53 = new lib.ylbjq_dl_zz0153();
		this.instance_53.parent = this;

		this.instance_54 = new lib.ylbjq_dl_zz0152();
		this.instance_54.parent = this;

		this.instance_55 = new lib.ylbjq_dl_zz0151();
		this.instance_55.parent = this;

		this.instance_56 = new lib.ylbjq_dl_zz0150();
		this.instance_56.parent = this;

		this.instance_57 = new lib.ylbjq_dl_zz0149();
		this.instance_57.parent = this;

		this.instance_58 = new lib.ylbjq_dl_zz0148();
		this.instance_58.parent = this;

		this.instance_59 = new lib.ylbjq_dl_zz0147();
		this.instance_59.parent = this;

		this.instance_60 = new lib.ylbjq_dl_zz0146();
		this.instance_60.parent = this;

		this.instance_61 = new lib.ylbjq_dl_zz0145();
		this.instance_61.parent = this;

		this.instance_62 = new lib.ylbjq_dl_zz0144();
		this.instance_62.parent = this;

		this.instance_63 = new lib.ylbjq_dl_zz0143();
		this.instance_63.parent = this;

		this.instance_64 = new lib.ylbjq_dl_zz0142();
		this.instance_64.parent = this;

		this.instance_65 = new lib.ylbjq_dl_zz0141();
		this.instance_65.parent = this;

		this.instance_66 = new lib.ylbjq_dl_zz0140();
		this.instance_66.parent = this;

		this.instance_67 = new lib.ylbjq_dl_zz0139();
		this.instance_67.parent = this;

		this.instance_68 = new lib.ylbjq_dl_zz0138();
		this.instance_68.parent = this;

		this.instance_69 = new lib.ylbjq_dl_zz0137();
		this.instance_69.parent = this;

		this.instance_70 = new lib.ylbjq_dl_zz0136();
		this.instance_70.parent = this;

		this.instance_71 = new lib.ylbjq_dl_zz0135();
		this.instance_71.parent = this;

		this.instance_72 = new lib.ylbjq_dl_zz0134();
		this.instance_72.parent = this;

		this.instance_73 = new lib.ylbjq_dl_zz0133();
		this.instance_73.parent = this;

		this.instance_74 = new lib.ylbjq_dl_zz0132();
		this.instance_74.parent = this;

		this.instance_75 = new lib.ylbjq_dl_zz0131();
		this.instance_75.parent = this;

		this.instance_76 = new lib.ylbjq_dl_zz0130();
		this.instance_76.parent = this;

		this.instance_77 = new lib.ylbjq_dl_zz0129();
		this.instance_77.parent = this;

		this.instance_78 = new lib.ylbjq_dl_zz0128();
		this.instance_78.parent = this;

		this.instance_79 = new lib.ylbjq_dl_zz0127();
		this.instance_79.parent = this;

		this.instance_80 = new lib.ylbjq_dl_zz0126();
		this.instance_80.parent = this;

		this.instance_81 = new lib.ylbjq_dl_zz0125();
		this.instance_81.parent = this;

		this.instance_82 = new lib.ylbjq_dl_zz0124();
		this.instance_82.parent = this;

		this.instance_83 = new lib.ylbjq_dl_zz0123();
		this.instance_83.parent = this;

		this.instance_84 = new lib.ylbjq_dl_zz0122();
		this.instance_84.parent = this;

		this.instance_85 = new lib.ylbjq_dl_zz0121();
		this.instance_85.parent = this;

		this.instance_86 = new lib.ylbjq_dl_zz0120();
		this.instance_86.parent = this;

		this.instance_87 = new lib.ylbjq_dl_zz0119();
		this.instance_87.parent = this;

		this.instance_88 = new lib.ylbjq_dl_zz0118();
		this.instance_88.parent = this;

		this.instance_89 = new lib.ylbjq_dl_zz0117();
		this.instance_89.parent = this;

		this.instance_90 = new lib.ylbjq_dl_zz0116();
		this.instance_90.parent = this;

		this.instance_91 = new lib.ylbjq_dl_zz0115();
		this.instance_91.parent = this;

		this.instance_92 = new lib.ylbjq_dl_zz0114();
		this.instance_92.parent = this;

		this.instance_93 = new lib.ylbjq_dl_zz0113();
		this.instance_93.parent = this;

		this.instance_94 = new lib.ylbjq_dl_zz0112();
		this.instance_94.parent = this;

		this.instance_95 = new lib.ylbjq_dl_zz0111();
		this.instance_95.parent = this;

		this.instance_96 = new lib.ylbjq_dl_zz0110();
		this.instance_96.parent = this;

		this.instance_97 = new lib.ylbjq_dl_zz0109();
		this.instance_97.parent = this;

		this.instance_98 = new lib.ylbjq_dl_zz0108();
		this.instance_98.parent = this;

		this.instance_99 = new lib.ylbjq_dl_zz0107();
		this.instance_99.parent = this;

		this.instance_100 = new lib.ylbjq_dl_zz0106();
		this.instance_100.parent = this;

		this.instance_101 = new lib.ylbjq_dl_zz0105();
		this.instance_101.parent = this;

		this.instance_102 = new lib.ylbjq_dl_zz0104();
		this.instance_102.parent = this;

		this.instance_103 = new lib.ylbjq_dl_zz0103();
		this.instance_103.parent = this;

		this.instance_104 = new lib.ylbjq_dl_zz0102();
		this.instance_104.parent = this;

		this.instance_105 = new lib.ylbjq_dl_zz0101();
		this.instance_105.parent = this;

		this.instance_106 = new lib.ylbjq_dl_zz0100();
		this.instance_106.parent = this;

		this.instance_107 = new lib.ylbjq_dl_zz0099();
		this.instance_107.parent = this;

		this.instance_108 = new lib.ylbjq_dl_zz0098();
		this.instance_108.parent = this;

		this.instance_109 = new lib.ylbjq_dl_zz0097();
		this.instance_109.parent = this;

		this.instance_110 = new lib.ylbjq_dl_zz0096();
		this.instance_110.parent = this;

		this.instance_111 = new lib.ylbjq_dl_zz0095();
		this.instance_111.parent = this;

		this.instance_112 = new lib.ylbjq_dl_zz0094();
		this.instance_112.parent = this;

		this.instance_113 = new lib.ylbjq_dl_zz0093();
		this.instance_113.parent = this;

		this.instance_114 = new lib.ylbjq_dl_zz0092();
		this.instance_114.parent = this;

		this.instance_115 = new lib.ylbjq_dl_zz0091();
		this.instance_115.parent = this;

		this.instance_116 = new lib.ylbjq_dl_zz0090();
		this.instance_116.parent = this;

		this.instance_117 = new lib.ylbjq_dl_zz0089();
		this.instance_117.parent = this;

		this.instance_118 = new lib.ylbjq_dl_zz0088();
		this.instance_118.parent = this;

		this.instance_119 = new lib.ylbjq_dl_zz0087();
		this.instance_119.parent = this;

		this.instance_120 = new lib.ylbjq_dl_zz0086();
		this.instance_120.parent = this;

		this.instance_121 = new lib.ylbjq_dl_zz0085();
		this.instance_121.parent = this;

		this.instance_122 = new lib.ylbjq_dl_zz0084();
		this.instance_122.parent = this;

		this.instance_123 = new lib.ylbjq_dl_zz0083();
		this.instance_123.parent = this;

		this.instance_124 = new lib.ylbjq_dl_zz0082();
		this.instance_124.parent = this;

		this.instance_125 = new lib.ylbjq_dl_zz0081();
		this.instance_125.parent = this;

		this.instance_126 = new lib.ylbjq_dl_zz0080();
		this.instance_126.parent = this;

		this.instance_127 = new lib.ylbjq_dl_zz0079();
		this.instance_127.parent = this;

		this.instance_128 = new lib.ylbjq_dl_zz0078();
		this.instance_128.parent = this;

		this.instance_129 = new lib.ylbjq_dl_zz0077();
		this.instance_129.parent = this;

		this.instance_130 = new lib.ylbjq_dl_zz0076();
		this.instance_130.parent = this;

		this.instance_131 = new lib.ylbjq_dl_zz0075();
		this.instance_131.parent = this;

		this.instance_132 = new lib.ylbjq_dl_zz0074();
		this.instance_132.parent = this;

		this.instance_133 = new lib.ylbjq_dl_zz0073();
		this.instance_133.parent = this;

		this.instance_134 = new lib.ylbjq_dl_zz0072();
		this.instance_134.parent = this;

		this.instance_135 = new lib.ylbjq_dl_zz0071();
		this.instance_135.parent = this;

		this.instance_136 = new lib.ylbjq_dl_zz0070();
		this.instance_136.parent = this;

		this.instance_137 = new lib.ylbjq_dl_zz0069();
		this.instance_137.parent = this;

		this.instance_138 = new lib.ylbjq_dl_zz0068();
		this.instance_138.parent = this;

		this.instance_139 = new lib.ylbjq_dl_zz0067();
		this.instance_139.parent = this;

		this.instance_140 = new lib.ylbjq_dl_zz0066();
		this.instance_140.parent = this;

		this.instance_141 = new lib.ylbjq_dl_zz0065();
		this.instance_141.parent = this;

		this.instance_142 = new lib.ylbjq_dl_zz0064();
		this.instance_142.parent = this;

		this.instance_143 = new lib.ylbjq_dl_zz0063();
		this.instance_143.parent = this;

		this.instance_144 = new lib.ylbjq_dl_zz0062();
		this.instance_144.parent = this;

		this.instance_145 = new lib.ylbjq_dl_zz0061();
		this.instance_145.parent = this;

		this.instance_146 = new lib.ylbjq_dl_zz0060();
		this.instance_146.parent = this;

		this.instance_147 = new lib.ylbjq_dl_zz0059();
		this.instance_147.parent = this;

		this.instance_148 = new lib.ylbjq_dl_zz0058();
		this.instance_148.parent = this;

		this.instance_149 = new lib.ylbjq_dl_zz0057();
		this.instance_149.parent = this;

		this.instance_150 = new lib.ylbjq_dl_zz0056();
		this.instance_150.parent = this;

		this.instance_151 = new lib.ylbjq_dl_zz0055();
		this.instance_151.parent = this;

		this.instance_152 = new lib.ylbjq_dl_zz0054();
		this.instance_152.parent = this;

		this.instance_153 = new lib.ylbjq_dl_zz0053();
		this.instance_153.parent = this;

		this.instance_154 = new lib.ylbjq_dl_zz0052();
		this.instance_154.parent = this;

		this.instance_155 = new lib.ylbjq_dl_zz0051();
		this.instance_155.parent = this;

		this.instance_156 = new lib.ylbjq_dl_zz0050();
		this.instance_156.parent = this;

		this.instance_157 = new lib.ylbjq_dl_zz0049();
		this.instance_157.parent = this;

		this.instance_158 = new lib.ylbjq_dl_zz0048();
		this.instance_158.parent = this;

		this.instance_159 = new lib.ylbjq_dl_zz0047();
		this.instance_159.parent = this;

		this.instance_160 = new lib.ylbjq_dl_zz0046();
		this.instance_160.parent = this;

		this.instance_161 = new lib.ylbjq_dl_zz0045();
		this.instance_161.parent = this;

		this.instance_162 = new lib.ylbjq_dl_zz0044();
		this.instance_162.parent = this;

		this.instance_163 = new lib.ylbjq_dl_zz0043();
		this.instance_163.parent = this;

		this.instance_164 = new lib.ylbjq_dl_zz0042();
		this.instance_164.parent = this;

		this.instance_165 = new lib.ylbjq_dl_zz0041();
		this.instance_165.parent = this;

		this.instance_166 = new lib.ylbjq_dl_zz0040();
		this.instance_166.parent = this;

		this.instance_167 = new lib.ylbjq_dl_zz0039();
		this.instance_167.parent = this;

		this.instance_168 = new lib.ylbjq_dl_zz0038();
		this.instance_168.parent = this;

		this.instance_169 = new lib.ylbjq_dl_zz0037();
		this.instance_169.parent = this;

		this.instance_170 = new lib.ylbjq_dl_zz0036();
		this.instance_170.parent = this;

		this.instance_171 = new lib.ylbjq_dl_zz0035();
		this.instance_171.parent = this;

		this.instance_172 = new lib.ylbjq_dl_zz0034();
		this.instance_172.parent = this;

		this.instance_173 = new lib.ylbjq_dl_zz0033();
		this.instance_173.parent = this;

		this.instance_174 = new lib.ylbjq_dl_zz0032();
		this.instance_174.parent = this;

		this.instance_175 = new lib.ylbjq_dl_zz0031();
		this.instance_175.parent = this;

		this.instance_176 = new lib.ylbjq_dl_zz0030();
		this.instance_176.parent = this;

		this.instance_177 = new lib.ylbjq_dl_zz0029();
		this.instance_177.parent = this;

		this.instance_178 = new lib.ylbjq_dl_zz0028();
		this.instance_178.parent = this;

		this.instance_179 = new lib.ylbjq_dl_zz0027();
		this.instance_179.parent = this;

		this.instance_180 = new lib.ylbjq_dl_zz0026();
		this.instance_180.parent = this;

		this.instance_181 = new lib.ylbjq_dl_zz0025();
		this.instance_181.parent = this;

		this.instance_182 = new lib.ylbjq_dl_zz0024();
		this.instance_182.parent = this;

		this.instance_183 = new lib.ylbjq_dl_zz0023();
		this.instance_183.parent = this;

		this.instance_184 = new lib.ylbjq_dl_zz0022();
		this.instance_184.parent = this;

		this.instance_185 = new lib.ylbjq_dl_zz0021();
		this.instance_185.parent = this;

		this.instance_186 = new lib.ylbjq_dl_zz0020();
		this.instance_186.parent = this;

		this.instance_187 = new lib.ylbjq_dl_zz0019();
		this.instance_187.parent = this;

		this.instance_188 = new lib.ylbjq_dl_zz0018();
		this.instance_188.parent = this;

		this.instance_189 = new lib.ylbjq_dl_zz0017();
		this.instance_189.parent = this;

		this.instance_190 = new lib.ylbjq_dl_zz0016();
		this.instance_190.parent = this;

		this.instance_191 = new lib.ylbjq_dl_zz0015();
		this.instance_191.parent = this;

		this.instance_192 = new lib.ylbjq_dl_zz0014();
		this.instance_192.parent = this;

		this.instance_193 = new lib.ylbjq_dl_zz0013();
		this.instance_193.parent = this;

		this.instance_194 = new lib.ylbjq_dl_zz0012();
		this.instance_194.parent = this;

		this.instance_195 = new lib.ylbjq_dl_zz0011();
		this.instance_195.parent = this;

		this.instance_196 = new lib.ylbjq_dl_zz0010();
		this.instance_196.parent = this;

		this.instance_197 = new lib.ylbjq_dl_zz0009();
		this.instance_197.parent = this;

		this.instance_198 = new lib.ylbjq_dl_zz0008();
		this.instance_198.parent = this;

		this.instance_199 = new lib.ylbjq_dl_zz0007();
		this.instance_199.parent = this;

		this.instance_200 = new lib.ylbjq_dl_zz0006();
		this.instance_200.parent = this;

		this.instance_201 = new lib.ylbjq_dl_zz0005();
		this.instance_201.parent = this;

		this.instance_202 = new lib.ylbjq_dl_zz0004();
		this.instance_202.parent = this;

		this.instance_203 = new lib.ylbjq_dl_zz0003();
		this.instance_203.parent = this;

		this.instance_204 = new lib.ylbjq_dl_zz0002();
		this.instance_204.parent = this;

		this.instance_205 = new lib.ylbjq_dl_zz0001();
		this.instance_205.parent = this;

		this.instance_206 = new lib.ylbjq_dl_zz0000();
		this.instance_206.parent = this;

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
	p.nominalBounds = new cjs.Rectangle(206.3, 24.2, 636.8, 538.8);


	(lib.backBtn = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// 图层 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgzA7IAAgEIABgUIAAgvIgBgSQAEABARAAIAUAAIAEgRIggAAIgXAAIgCAAIAAgMIACABIAXAAIBOAAIAWAAIABgBIAAANIgBAAIgXgBIghAAIgGARIAfAAQASAAADgCQgBAFAAAQIAAAtIABAWIAAABIgNAAIABgJIhPAAQgBAIACACgAAWAoIASAAIAAg7IgSAAgAgLAoIAWAAIAAgQIgWAAgAgnAoIARAAIAAg7IgRAAgAgLAQIAWAAIAAgOIgWAAgAgLgFIAWAAIAAgOIgWAAg");
		this.shape.setTransform(-50.6, 61.5);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("Ag1AyQAigBgDgmQgQAKgQAIQgDgGgIgFQAYgEAVgQIgKAAIgQABIABgHIAAgIIAAghIgBgLIAJABIAKAAIA0AAQAEABAIgBIAKgBIgBAMIAAAgQAAAHABAJIgGgCIgHAAIgMAAQALANAhADQgGAGgCAIQgRgFgOgIIAAAhIABAMIgMAAIAAgMIAAgbIAAgJIAIAAQgIgFgGgJIgRAAIgDACQgEAFgGAEIADAAQAKAAgBACIgBABQgCADAAAEQAAAgggAKQgDgGgHgFgAAGgLIAdAAIAAgPIgdAAgAgigLIAdAAIAAgPIgdAAgAAGgiIAdAAIAAgQIgdAAgAgigiIAdAAIAAgQIgdAAg");
		this.shape_1.setTransform(-64.6, 61.4);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgIBAQACgHAAgNIAAguIgCgMIAAgEIALAAIAFABIgBACQgCADAAAGIAAAyQAAANABAHgAhAgDQAsgTAPgpIANAFIgBACIgCACQAPAiAtAKQgGADgGAJQgogRgNggQgOAcgmAYQgHgFgFgDg");
		this.shape_2.setTransform(-78.8, 61.3);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#000000").s().p("AAjAGIhEAAIgaABIAAgNIAZABIBEAAIAagBIAAANIgZgBg");
		this.shape_3.setTransform(-92.7, 61.2);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AAnA6IhPAAIgOAAIgJAAIAAgLIAXAAIAeAAIAAhcIAAgCIgBgLQAPABAAACIAAADIgCAFIAAAeIAWAAQAUAAAHAAIAAALIgbAAIgWAAIAAA1IAlAAQASABAHgBIAAALQgGgBgTABg");
		this.shape_4.setTransform(-106.6, 61.2);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AApA6IAAgHIAAgEIhRAAIAAALIgMAAIABgWIAAhKIgBgRIAAgCQAFACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBRAAIAAhSIhRAAgAALATIgVAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAQABIAPAAIAOgBIADAAIgBAQIAAAQIABARIgOgBgAgNAKIAaAAIAAgdIgaAAg");
		this.shape_5.setTransform(-120.6, 61.5);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#000000").s().p("AAXA5IgVgBQgSgBgGgEIgGgCQgIgFgEABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAGAAIAKgBIgCAKIAAArQARALAsAAIAIAAIAMgBIAPgCQgDAFgDAIIgigBgAgJAfQARgFAPgMQgMgLgMgIIAKgGIAUARQAGgLACgMIgnAAQABAhgRAXQgGgDgGgCQARgOABgmIAAgUIgBgHIAAgGQANABARgCQARgCANgDQAHAJAAADQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgDAAIgHAAQgdADgPgBIAAARIAlAAIAQgBQgDAagLAOIASATIgKAIQgEgIgKgLQgMAKgQAKIgLgKgAg0g2IANgDQAFALAEAQIgMADQgEgPgGgMg");
		this.shape_6.setTransform(-134.6, 61.3);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#000000").s().p("AgiAwQAjgEAPgZQALgSABg2IgBgFIAAgCQASADgBACIgBACIgBAHQgEAugIATIAdAaIgLAKIgDgEIAAgCIgFgEIgPgRQgQAVgfALQgFgHgHgFgAg6ApIACgDQAEgEAAgEIAAhFIgBgFIAAgJQAOABABACIgBAEIgCAEIAABFIAQgRIAGgIQABAIAGAEQgTARgRAWgAgZglIAKgIQANALALARIgKAIQgNgTgLgJg");
		this.shape_7.setTransform(-148.3, 61.4);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#000000").s().p("AAHArQATAEAAgGIAAhXIg+AAIgbABIAAgMIAMABIAPAAIBQAAIAUgBIAAAMIgUgBIgFAAIAABfQgCAJgYAAQgBgHgFgIgAgtAjIAAgEIABgHIAAgpIAAgFIgBgHIANAAIAZAAIANAAIAAAMIAAAjIAAAMIgNAAIABgNIgaAAIAAAGQAAAIACAEgAggAHIAbAAIAAgZIgbAAg");
		this.shape_8.setTransform(19.4, 44.8);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#000000").s().p("AgYAyIAAgNIgBgMIAPABIAAACQgDAEAAAFIAAAKQgCAFAMAAIAMAAQASACAAgQQAEAHAIACQgEAKgFADQgEACgLAAIgVAAIgDABQgSAAADgNgAg7A1QAKgJADgSIANADIgBABIgCAFIgJAXIgOgFgAAeAbIAKgGIAYAbIgMAHQgHgMgPgQgAgEAZIAJgEQAHAJAFAJIgMAFQgEgKgFgJgAADATQAAgGgDgHQAOAEgBgKIAAgVIgBgJIALAAIAFABIgBACQgDAEAAAFIAAAWQADAPgWAAIgCAAgAgsATIABgTIAAgaIgJANIgCAEQgEgFgFgFQATgPAKgaQAPAGgCABIgBABQgDADgHAIIAAApQAAANABAGgAAegKIAIgHQAKAIAMALIgKAIQgIgKgMgKgAgZAGQAOgJAFgPIALAGIgCACQgCACgCADIgGAIIgGAHIgMgEgAgagZQATgKALgbQALAFACACIgBABQgEACgHAJIAfAAIAZgBIgLAZIgMgDQAEgFAEgHIguAAIgLANIgEADIgLgHg");
		this.shape_9.setTransform(5.3, 44.5);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#000000").s().p("AAgA9QABgCAAgGIgxAAIgdACIABgHIAAgUIAAgRIAKAAIAEACIgBABIgBAGIAAAYIAbAAIAAgqIgeAAIgZABIAAgMQAEACAWAAIAdAAIAAgVIgRAAIgTABIgHAAIAAgMQABACAZgBIARAAIAAgMIgBgHIAAgDIANABIgBACQgCADABAFIAAALIARAAQAaABADgCIAAAMIgJAAIgUgBIgRAAIAAAVIAgAAQARAAAHgCIAAAMIgYgBIggAAIAAAqIAcAAIAAgWIAAgEIAAgFIAOAAIgBACQgCADABADIAAAVQgBAQACADg");
		this.shape_10.setTransform(-8.7, 44.6);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#000000").s().p("Ag+A7QAMgMAEgQQAKADADACIgBACIgEAFIgMAVQgHgEgFgBgAAhAiIAMgEIASAaIgOAGQgFgNgLgPgAgXAlIANgCIAGAZIgOABQgBgMgEgMgAAEAkIANgDIAJAaIgOABQgCgNgGgLgAAjAZIgRgBIgeAAIgUABIgKAAQACgBAAgVIgBgNIgBgIQAJACARgBIAIAAIAAgkIgBgKQAQABgBABIgBACQgCADAAAFIAAAIIAaAAIARAAIAKgCIAAANIgIAAIgTgBIgaAAIAAAQIAOAAIAbgBQgBAFAAAQIgBAOIACAJIgJgBgAgdAOIA8AAIAAgVIg8AAg");
		this.shape_11.setTransform(-22.9, 44.6);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#000000").s().p("AAbA9QgSAAgMgCQgRgFgKgFIgGgEQgGAAgJAPIgKgHQACgDAFgCQAIgKAEgBIAAgnIgUACIAAgMQAQACAQgCQgBAFAAAFIAAAnQAQALATACQAaABAhgCQgFAGAAAGIgOABIgRgBgAAQArQgBgHgDgGQAMABADgDIABgJIAAgrIgdAAIgVABIAAgLIAVABIAdAAIAAgSIgBgKIAJABIAEABIgBACIgBAGIAAASIAFAAQAKAAAJAAIAAAKIgTgBIgFAAIAAApIAAASQgEAIgQAAIgCAAgAgJgJIAKgDIALAYIgLAEQgGgQgEgJgAg5gwIALgHQALANAIAMIgMAIQgHgOgLgMg");
		this.shape_12.setTransform(-36.6, 44.6);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#000000").s().p("AgJA6QgHgBgMgGIgMgDQgFAAgJALIgJgKIASgLIAAgpIgQABIAAgMIALABIAQgBIABAAIgCARIAAAjQAPAJAWADIAcgBQASAAAQgDQgGAFgBAJIgVAAQgYAAgVgCgAAeAfQAIACAEgDIAAgKIgWAAIAAAHIAAAPIgKAAIABgPIAAgHIgTAAIAAAKQAAAIAAAEIgLAAIAAgDIABgIIAAgxIgBgHIAAgCQAAABALgBIARAAQgFgFgFgEIAIgHIAKAKQAGgEAIgIIghAAIgSAAIAAgLQADABAPAAIArAAQAIAAAHgBQgPASgSALIATAAQAHABAEgBQgBABABAIIAAASQAAApgBgBQgFAEgNAAQgBgGgDgHgAAUAMIAWAAIAAgLIgWAAgAgJAMIAUAAIAAgLIgUAAgAAUgHIAWAAIAAgLIgWAAgAgJgHIAUAAIAAgLIgUAAgAg1g1IALgGIAOAaIgNAGQgFgOgHgMg");
		this.shape_13.setTransform(-50.8, 44.5);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#000000").s().p("AgIAMQAIgCgBgJIgJAAIAAgUIAUAAIAAAUQgCASgQACg");
		this.shape_14.setTransform(-68.1, 49.3);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("AgpA7IgFgHIACgCQADgEAAgCIAAgbIgEAAIgQACIAAgMIAPAAIAFAAIAAgNIgMABIAAgIIgFAHQgCgGgFgDQARgPAHgfQAQACgBACIgBABIgEAGIgCADIgDAIIAHAAQAKgBAHgBIAAALIgRgBIgMAAIgBAEIgIALQACABAIAAIAKAAIARgBIAAALIgRgBIAAANIAFAAIAPgBIAAAMIgHAAIgIgBIgFAAIAAAYIAQgQIAEAMQgaATgCAEIgBACIgCgDgAgOAqIATABIAEgnIgKAAIgGAAIAAgLIARABIACgjIgLABIgIABIAAgNQAGABANABIAQAAQAQAAALgCIAAADIgCAWIgFBGQALAAAHgBIAAALIgJAAIgJAAIgnAAIgXABgAAQArIAVAAIADgoIgTAAgAAVgGIATAAIACgjIgTAAg");
		this.shape_15.setTransform(-78.6, 44.6);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#000000").s().p("AgXAzQAXgCAQgLIgagKIAMgUIgCAAIgQABIAAgKIAQABIAFAAQAFgJADgPQAOAFgBACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDADIgFAKIgBACIAfAAQAJAAAIgBIAAAKIgRgBIgDAAQgEAPgIANIAcAOIgJALQgKgKgPgIQgOANgcAHQgCgHgFgFgAAEAWIANAGIAGADQAHgKADgNIgVAAIgIAOgAg4AxQAMABADgCIAAggQgPAIgEABIgDgMIAWgIIAAgaIgDAAIgJAAIgJAAIAAgLIAJABIAJAAIADAAIAAgUIgCgKQAOABAAABIgBADIgBAEIAAAVIACAAIAGAAIAFgBIAAALIgFAAIgGAAIgCAAIAAAWIANgEIAAAKIgNAFIAAApQAAAHgUACQgBgIgEgFgAgPgPIABgMIAAgDIgBgGIAAgGIANABIAwAAIAIAAIAGgBIgBAGIAAAGIAAACIABANIgMAAIABgQIg1AAQAAAMABAEgAALg8IAMgCIAGASIgMABQgDgKgDgHg");
		this.shape_16.setTransform(-92.7, 44.6);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#000000").s().p("AgRBEQAVgeABgjIAAgEQgEgkgPgeIAfAAIAACHg");
		this.shape_17.setTransform(-107.7, 44.6);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AApA6IAAgHIAAgEIhRAAIAAALIgMAAIABgWIAAhKIgBgRIAAgCQAFACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBRAAIAAhSIhRAAgAALATIgVAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAQABIAPAAIAOgBIADAAIgBAQIAAAQIABARIgOgBgAgNAKIAaAAIAAgdIgaAAg");
		this.shape_18.setTransform(-120.6, 44.7);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#000000").s().p("AAXA5IgVgBQgSgBgGgEIgGgCQgIgFgEABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAGAAIAKgBIgCAKIAAArQARALAsAAIAIAAIAMgBIAPgCQgDAFgDAIIgigBgAgJAfQARgFAPgMQgMgLgMgIIAKgGIAUARQAGgLACgMIgnAAQABAhgRAXQgGgDgGgCQARgOABgmIAAgUIgBgHIAAgGQANABARgCQARgCANgDQAHAJAAADQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgDAAIgHAAQgdADgPgBIAAARIAlAAIAQgBQgDAagLAOIASATIgKAIQgEgIgKgLQgMAKgQAKIgLgKgAg0g2IANgDQAFALAEAQIgMADQgEgPgGgMg");
		this.shape_19.setTransform(-134.6, 44.6);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#000000").s().p("AgRBEIAAiHIAhAAQgQAegDAkIAAAEQAAAjAUAeg");
		this.shape_20.setTransform(-147.5, 44.6);

		this.instance = new lib.shuomingBg("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(-161, 28.8);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: []
		}).to({
			state: [{
				t: this.instance
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
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#333F48").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#5E7485").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#5E7485").s().p("AjLDLQhUhUAAh3QAAh1BUhWQBWhUB1AAQB3AABUBUQBVBWAAB1QAAB3hVBUQhUBVh3AAQh1AAhWhVg");

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


	(lib.page2_2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_4 = function () {
			createjs.Sound.removeAllSounds();
			var queue = new createjs.LoadQueue();
			queue.installPlugin(createjs.Sound);
			queue.on("complete", handleComplete, this);
			queue.loadFile({
				id: "sound",
				src: "sounds/s2_2.mp3"
			});

			function handleComplete() {
				createjs.Sound.play("sound");

			}
		}
		this.frame_14 = function () {
			this.stop();
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(1));

		// 图层 4
		this.dragBtn = new lib.dragBtn();
		this.dragBtn.parent = this;
		this.dragBtn.setTransform(230.7, 223, 0.763, 0.763);
		new cjs.ButtonHelper(this.dragBtn, 0, 1, 2, false, new lib.dragBtn(), 3);

		this.timeline.addTween(cjs.Tween.get(this.dragBtn).wait(15));

		// 图层 2
		this.model = new lib.dl();
		this.model.parent = this;
		this.model.setTransform(407.8, 405.7, 0.634, 0.634, 0, 0, 0, 500.1, 281.6);

		this.timeline.addTween(cjs.Tween.get(this.model).wait(15));

		// 三维部分
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#333F48").s().p("AiOBkIAdgZIAAhVIgfAAIAAglIBFAAIAAB6QAXAZAwAAQCAAAAVgCQgIAXgEAQIhcABIguAAQgcAAgWgHQgWgHgPgOIgiAigAARBbIAAhdQgZAmgfAfIgegeQAygkAegzIhDAAIAAgjIBJAAIAAg6IAnAAIAAA6IArAAIghgcIAZgYIAmAjIgTARIAZAAIAAAjIhPAAIAAAiIAWgSIBDBFIgdAaIg8hGIAABkgAiFh4IAfgTQAWAcASAaIgiAXQgSgfgTgbg");
		this.shape.setTransform(947, 232.6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#333F48").s().p("AgJB4QAVgRAQgWIgRALIgFgLQgjAZgQASIgXgaQALgKAAgUIAAhGIgKAYIgMgMIAACEIgiAAIAAh4QgKAjgMAZIgKgzQARgjAMgzIgZAAIAAgkIAcAAIAAg1IAiAAIAAA1IARAAIAAAkIgRAAIAAAbIAWAQIAAh3IBPAAIAACRIgxAAIAAA0IATgOIgLgVIAZgNQARAaANAaQAVgdAHgfIglAAIAIhfIAcAAIgEA/IAMAAQAFgfAAguIgrAAIAAghIBnAAIAAAhIgaAAQAAApgGAkIAlAAIAAAgIgrAAIgFASIAQAAIAABAQAAAKAFAAQAFAAACgLQACgMAAgWIAXAMQAABHgiAAIgIAAQgdAAAAgsIAAgWQgVApggAeIgfgZgAgbgOIAVAAIAAgeIgVAAgAgbhIIAVAAIAAgeIgVAAg");
		this.shape_1.setTransform(915.9, 232.6);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
		this.shape_2.setTransform(363, 61.7);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#333F48").s().p("AgMBZIAnABQAUAAAAgUIAAgMIhdAAIAYAWIgXAYIgnglIAIgJIg2AAIAAggICxAAIAAgMIAlAAIAAAMIAvAAIAAAgIgvAAIAAAXQAAATgKALQgKAKgRACQgSABggAAQgEgVgFgOgAg3AIQgzAAAAgtIAAhWIDHAAIAABQIiiAAIAAADQAAASAVAAIB1AAQALAAAGgEQAGgEACgHIAEgaIAgAKQgFAdgDAJQgDAJgGAFQgGAEgKADQgJACgNAAgAhFhIIB9AAIAAgUIh9AAg");
		this.shape_3.setTransform(335.9, 61.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#333F48").s().p("AiRAPIAAgdIEjAAIAAAdg");
		this.shape_4.setTransform(307.5, 63.2);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#333F48").s().p("ABTB8IAAgKIgrAAIAAAJIgeAAIAAhVIA3AAQgsgKgVgWQgSAWg0AKIA8AAIAABWIgeAAIAAgKIgqAAIAAAKIgfAAIAAhRIgLABQgCgMgEgPQBSgCARgTIhgAAIAAgbIBsAAIACgNIAkAAIgCANIAjAAIgEgKIAigFIAGAPIAoAAIAAAbIhoAAQAcAUBPACIgHAbIgLgBIAABQgAAoBXIArAAIAAgWIgrAAgAhSBXIAqAAIAAgWIgqAAgAALgwIAAhLIBmAAIAABLgAAqhLIAnAAIAAgVIgnAAgAhxgwIAAhLIBnAAIAABLgAhQhLIAnAAIAAgVIgnAAg");
		this.shape_5.setTransform(279.1, 62);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#333F48").s().p("AiCBhQAlggAIg0IgrAAIAAggIAtAAIAAgqIgGAAQgJAVgMATQgKgQgLgOQAUgjAJgsIAhAGIgIAeIA1AAIAAAhIgaAAIAAAqIAgAAIAAAgIgiAAIgCAPIAqA2IAAjIICOAAIAAAhIhsAAIAAAkIBkAAIAABlIhkAAIAAAlIBuAAIAAAhIiQAAIAAgiIgYAUIgcgrQgPAlgeAdQgLgTgKgPgAAWAUIBBAAIAAglIhBAAg");
		this.shape_6.setTransform(251.7, 61.5);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
		this.shape_7.setTransform(224.5, 61.6);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#333F48").s().p("Ah8BhQBRgwAChbIhFAAIAAgjIBHAAIABg1IAoAAIgBA1IB9AAIgDBNQgBAqgCAaQgCAbgOAOQgOAOgXABIg6AAQgDgXgFgSQAVACAbAAQAOAAAHgFQAGgFADgIQACgIACgeIAChHIhVAAQgDBuhbA/QgOgRgQgRg");
		this.shape_8.setTransform(196.4, 61.7);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#333F48").s().p("AgTBoIAAAbIggAAIAAhvIgTAcIgEgNQgKAogMA2IgigMQANgqAMg8IAeANIgHgUQAggpALgmIgaAAIAAggIBRAAIgKgUIAogIIANAcIBGAAIAAAgIhpAAIAdAHIgFAOIBJAAIAAAcQgIA1ghAnQAWAPAeAKIgTAjQgkgQgWgTQgVASghATQgKgPgKgNgAgTBlQAfgRATgOQgOgSgLgXIgLAUIgOgegAAagDQAMAdASAWQAYgeAGglIg0AAIgIAQgAgEhDIgPAfIAAAuQAZglAQgsIgrAAgAAigIIAWgLIASAgIgWALIgSgggAiDgeIAVgbIAoAhIgZAcQgSgSgSgQgAiChmIAWgZQAUAQAUARIgZAbIglgjg");
		this.shape_9.setTransform(170, 61.6);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#858C91").s().p("AgEArIAJgPIAaANIARgUIgxAAIAAgOIADgPIgMAAIAAgPIAQAAIADgOIgNAAIAAgQIARAAIADgSIAVAAIgDASIAiAAIAAAQIgmAAIgDAOIAuAAIAAAPIgyAAIgEANIAzAAIAAAPIgXAeIANAGIgLAQQgbgPgagOgAgrBIIAAgbIgbAEIgCgUIAdgDIAAgNIgcAAIAAgQQAGgPAEgSIgKAAIAAgRIAOAAIADgTIATACIgEARIAdAAIAAARIghAAIgKAhIAKAAIAAgZIASAAIAAAZIAQAAIAAAQIgQAAIAAAMIASgCIgBASIgRACIAAAdg");
		this.shape_10.setTransform(1150.4, 379.2);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#858C91").s().p("AgTA9QAIgMADgMQADgMAAgZIAPAAQAAASgCAOQAGAIAHAEIAAg3IgcAAIAAgKIgJgIIgbAAIAAAQIAdAAIgCArQgBAVgDAGQgCAFgDADQgEADgTAAIgEgRQgEAMgGAJIgKgVQAMgVAAghIAAgaIgKAAIAAgTIAXAAIgIgSIASgGIAJAVIgIADIAWAAIAAAMQAMgPAHgVIATAFIgFALIA1AAIAAARIg+AAIgIAMIBFAAIAAAQIgJARIgRgGIAGgLIgMAAIAAAWIAcAAIAAAQIgcAAIAAAYIAiAAIgDASIgbAAQgQAAgJgFQgIgFgGgHQgEAMgFAJIgOgMgAgzAxIALAAQAGAAABgIIABglIgLAAQgBAagHATg");
		this.shape_11.setTransform(1135.4, 379.1);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#858C91").s().p("AAKBIIgGgVIATAAIAOgBQAEgBACgDQACgDAAgFIAAhEIhZAAIAABmIgVAAIAAh6IAsAAIAFgVIAVADIgFASIBCAAIAABeQAAANgHAIQgGAGgNABIgeAAgAggAvIAAhBIBBAAIAAA4IgtAAIAAAJgAgMATIAZAAIAAgTIgZAAg");
		this.shape_12.setTransform(1120.4, 379);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#858C91").s().p("AgJBIIAAgVIg+AAIAAgSIA+AAIAAgKIgzAAIAAhIIAbAAIgKgOIARgIIAPARIgJAFIAdAAIAPgXIAXAJIgOAOIAcAAIAABIIgyAAIAAAKIA+AAIAAASIg+AAIAAAVgAALAGIAeAAIAAgMIgeAAgAgpAGIAgAAIAAgMIggAAgAALgUIAeAAIAAgMIgeAAgAgpgUIAgAAIAAgMIggAAg");
		this.shape_13.setTransform(1105.4, 379.1);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#858C91").s().p("AgoA3IAMAAQAGAAABgCQABgCAAgDIAAgDIgaAAIAAAbIgSAAIAAhXIA/AAIAABDQAAAJgEAFQgDAEgGACIgVAAIgFgRgAguAeIAaAAIAAgIIgaAAgAguAIIAaAAIAAgIIgaAAgAAfBGQgWAAAAgWIAAguIASAAIAAASQARgIAOgJIANAQIgsATIAAAHQAAAJAJAAIAGAAQAGAAADgDQACgDABgRIATAIQgDAQgDAFQgCAFgFACQgGADgHAAgAAggCQgXABAAgWIAAguIASAAIAAAVQATgHAMgIIANAPQgQAHgcALIAAAFQAAAHAKABIAFAAQAIAAABgFIADgQQALAGAHACIgEAQQgCAGgFADQgGADgIAAgAgKgYIg5ADIgFgQQAKgFATgdIATAHIgWAaIAbgBIgHgLIAOgIIAUAgIgOAJg");
		this.shape_14.setTransform(1090.4, 379);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#858C91").s().p("AhHA2QAWgQAVgWIARAOQgXAYgXAPgAANAdIAOgOQAaAUAUATIgRAPIgrgogAg4AMIAAhQIBxAAIAABQgAgigFIBGAAIAAgtIhGAAg");
		this.shape_15.setTransform(1075.4, 379.5);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#858C91").s().p("AgOAUIAJgnIAUAAIgMAng");
		this.shape_16.setTransform(1056.3, 384.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		this.shape_17.setTransform(1045.4, 379.4);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#858C91").s().p("AAiBIIAAgGIhEAAIAAAGIgUAAIAAhDIBsAAIAABDgAgiAuIBEAAIAAgWIhEAAgAhIgVQAtgYASgbIAbAAIgFAHQAVAZAnASIgOARIgSgKIAAAIIhRAAIAAgJIgTAMQgGgJgHgIgAgbgaIA1AAQgOgKgMgOQgJAMgSAMg");
		this.shape_18.setTransform(1030.4, 379.2);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAEgJIgwAAIAAgrIATAAIAAAeIBFAAIgcgMIghALIgFgMIAWgGIgTgHIAGgKIAdALQANgFAKgGIhgAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAJAAIAAgeIATAAIAAArIg0AAIgFAJIA/AAIAAAnQAAAJgDAFQgEAEgGABQgGABgXgBIgDgPIAHAAIgEgFQgpABgPADIgHgOQAGgCAJgMIgTAAIAAAtgAArAxIgLAIQAKAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAAgYIgXAAIAUAWgAgPAnIAcgBIgFgHIAFgEIgTAAIgJAMg");
		this.shape_19.setTransform(1015.4, 379.1);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#858C91").s().p("AAKBIIgGgVIATAAIAOgBQAEgBACgDQACgDAAgFIAAhEIhZAAIAABmIgVAAIAAh6IAsAAIAFgVIAVADIgFASIBCAAIAABeQAAANgHAIQgGAGgNABIgeAAgAggAvIAAhBIBBAAIAAA4IgtAAIAAAJgAgMATIAZAAIAAgTIgZAAg");
		this.shape_20.setTransform(1000.4, 379);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#858C91").s().p("AgJBIIAAgVIg/AAIAAgSIA/AAIAAgKIgzAAIAAhIIAbAAIgLgOIASgIIAPARIgJAFIAcAAIAQgXIAXAJIgOAOIAcAAIAABIIgyAAIAAAKIA9AAIAAASIg9AAIAAAVgAALAGIAeAAIAAgMIgeAAgAgoAGIAfAAIAAgMIgfAAgAALgUIAeAAIAAgMIgeAAgAgogUIAfAAIAAgMIgfAAg");
		this.shape_21.setTransform(985.4, 379.1);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#858C91").s().p("AAGA0IAXABQAIAAAAgIIAAgCIg9AAIAAAdIgVAAIAAhBIgVATIgFgWQAWgSANgXIgiAAIAAgSIAsAAIAFgRIAXAEIgEANIBKAAIAAASIhUAAIgGAKIBMAAIAABPQAAAJgEAFQgEAFgIAAQgIABgXAAIgFgUgAgYAaIA9AAIAAgKIg9AAgAgYAAIA9AAIAAgKIg9AAg");
		this.shape_22.setTransform(970.3, 379.1);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#858C91").s().p("AgpA4QAFgEABgEIAAgDQgMAHgQAFIgJgSQAggKAUgOIgzAAIAAgPIA/AAIgCgGIATgCIADAIIA8AAIAAAPIgTAAIAJAQIgWAJQANAHAUADIgNATQgegJgQgPIgCARQgiAFgKAGgAgQAhIAAAPIAagHQgHgIgGgLIgNALgAAYAeQAQgIALgHIgoAAQAGAJAHAGgAhIgZIAlgPIAAgfIATAAIAABBIgTAAIAAgOIgfAOgAgIgLIAAgQIAbAAIAAgNIgfAAIAAgQIAfAAIAAgPIATAAIAAAPIAgAAIAAAQIggAAIAAANIAcAAIAAAQgAhEg5IANgLIATARIgPANQgKgNgHgGg");
		this.shape_23.setTransform(955.4, 379.1);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#858C91").s().p("AhGBEIAAgVIA3AAIAAhyIAWAAIAAApIA2AAIAAAVIg2AAIAAA0IBAAAIAAAVg");
		this.shape_24.setTransform(940.4, 378.8);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_25.setTransform(925.5, 379.2);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#858C91").s().p("AgGAxIAVACQALAAAAgMIAAgGIgzAAIAOAMIgOAMIgVgUIAEgEIgeAAIAAgSIBiAAIAAgHIAVAAIAAAHIAaAAIAAASIgaAAIAAAMQAAAKgFAHQgGAFgKACIgbAAIgFgUgAgeAEQgcAAAAgYIAAgwIBuAAIAAAsIhZAAIAAACQAAAKALAAIBAAAQAHAAADgCQADgCACgEIABgOIASAFQgCAQgCAFQgCAFgDADQgEACgFABIgMABgAglgoIBFAAIAAgLIhFAAg");
		this.shape_26.setTransform(910.4, 379.3);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#858C91").s().p("Ag2BIIAAg+QgGARgHANIgEgbQAJgSAGgWIgOAAIAAgRIAQAAIAAgbIASAAIAAAbIAKAAIAAARIgKAAIAAANIAOAOIAAgpIAYAAIAAgHIgbAAIAAgNIAbAAIAAgJIARAAIAAAJIAJAAIAAgKIAQAAIAAAKIAdAAIAAANIgdAAIAAAHIAZAAIAAA0IhbAAIAAgFIgIAIIgGgJIAABDgAAsAAIAJAAIAAgJIgJAAgAATAAIAJAAIAAgJIgJAAgAgGAAIAIAAIAAgJIgIAAgAAsgUIAJAAIAAgJIgJAAgAATgUIAJAAIAAgJIgJAAgAgGgUIAIAAIAAgJIgIAAgAATgpIAJAAIAAgHIgJAAgAAvBIIAAgFIgvAAIAAAFIgSAAIAAg2IBTAAIAAA2gAAAA3IAvAAIAAgHIgvAAgAAAAlIAvAAIAAgHIgvAAg");
		this.shape_27.setTransform(1165.4, 331);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#858C91").s().p("AhDBAQAJgbAIgdIAUAHIgRA4IgUgHgAAzBHIAAgKIg3AAIAAAKIgUAAIAAh4IAmAAIAAgVIASAAIAAAVIAmAAIAAB4gAAgApIATAAIAAgbIgTAAgAgEApIASAAIAAgbIgSAAgAAggDIATAAIAAgbIgTAAgAgEgDIASAAIAAgbIgSAAgAhFgRIANgOQANAJALAJIgOAOQgJgIgOgKgAhDg5IAMgNQAMAIANALIgNAPIgYgVg");
		this.shape_28.setTransform(1150.1, 331.1);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#858C91").s().p("AAKAxIAWABIAHgBIAEgCIACgEIABgSIABgdIAAgXIgaAAIgKAUQgGgEgKgFIAABWIgUAAIAAgKIgVAAIAAALIgVAAIAAh2IAQAAIAGgXIAWADIgHAUIAZAAIAAAdQALgUAKggIAVAFIgHATIAlAAIgBBTQgBAOgBAFQgCAGgFADQgEAEgGABQgIABgYAAQgCgNgDgJgAguApIAVAAIAAgZIgVAAgAgugDIAVAAIAAgZIgVAAgAAAACIARgLQALALAMATIgTAMQgLgSgKgNg");
		this.shape_29.setTransform(1135.5, 330.9);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#858C91").s().p("AAWAyIATABQAIAAAAgIIAAhxIAUAAIAAB2QAAALgFAGQgEAFgLABIgWABIgFgWgAhEAvIAhgBIAAgRIgcAAIAAgSIAcAAIAAgNIATAAIAAANIAZAAIAAASIgZAAIAAAQIAdgDIgBAUQgsACgiADgAATAlIAAhdIATAAIAABdgAgCgHIgcABIgWABIgJACIgGgQQAJgFANgWIgVAAIAAgSIBQAAIAAASIgkAAIgSAXIAcgBIgHgLIAPgIIAVAiIgPAJg");
		this.shape_30.setTransform(1120, 331.1);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#858C91").s().p("AhDA5QAMgQAAgpIAAhEIB6AAIAAByQABAJgFAFQgEAFgJABIgXABIgGgWIAQABQAKAAAAgJIAAgNIgeAAIAAApIgVAAIAAgpIgfAAQgCAggLANQgIgHgLgFgAARAFIAeAAIAAgRIgeAAgAgiAFIAeAAIAAgRIgeAAgAARgfIAeAAIAAgSIgeAAgAgigfIAeAAIAAgSIgeAAg");
		this.shape_31.setTransform(1105.1, 331.4);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#858C91").s().p("AAIBHIgGgVIAYAAQAKAAAAgLIAAhBIgrAAIAAgTIArAAIAAgZIAVAAIAAAZIANAAIAAATIgNAAIAABIQAAAMgFAGQgGAHgJAAIgdAAgAhFBBIAAh+IA7AAIAAB9IgUAAIAAgKIgTAAIAAALgAgxAjIATAAIAAgeIgTAAgAgxgNIATAAIAAgdIgTAAgAgIgIIAOgKIAaAjIgSALQgNgWgJgOg");
		this.shape_32.setTransform(1090.8, 331);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#858C91").s().p("AAEBIIAAhlIgEAAQgJAUgLAOIgLgSQAQgZAKghIASAEIgGATIBBAAIAAATIgwAAIAAASIAoAAIAAARIgoAAIAAASIAsAAIAAATIgsAAIAAAdgAg2BIIAAhGIgMATIgGgaQASgcALglIAUAFQgFAPgGAOIAABsg");
		this.shape_33.setTransform(1075.4, 331);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#858C91").s().p("AhGA/IAAgVIA6AAIAAhTIgzAAIAAgVIB/AAIAAAVIg1AAIAABTIA8AAIAAAVg");
		this.shape_34.setTransform(1060.4, 331.2);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#858C91").s().p("AhHBEIAAgUIAWAAIAAhXIAWAAIAABXIAbAAIAAhzIAVAAIAAAtIAqAAIAAATIgqAAIAAAzIAyAAIAAAUg");
		this.shape_35.setTransform(1045.4, 330.7);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#858C91").s().p("AgXA4QAMgEAKgIQAJgHAEgLQADgMAAgVIAUAAQAAATgCAOIAOAKIAAgzIgrAAIAAAzIgSAAIAAhFIAdAAIAAgmIAUAAIAAAmIAfAAIAABFIgTAAIAaAUIgOAPQgPgOgSgOQgLASgaAMIgMgRgAg7A6QAFgGAAgIIAAgYIgSAAIAAgQIASAAIAAgOIgFAAIgHAJIgGgXQAMgVAGgbIAUAEIgFAOIATAAIAAARIgZAAIgFAKIAcAAIAAARIgOAAIAAAOIARAAIAAAQIgRAAIAAAWIAPgMIACAUIgdAWgAAogtIAPgWIARALIgSAVgAgVg5IAQgKQAGAJAJAMIgOALIgRgWg");
		this.shape_36.setTransform(1030.4, 331);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
		this.shape_37.setTransform(1015.4, 331.3);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#858C91").s().p("AAjBJIAAgIIhFAAIAAAIIgTAAIAAhFIBrAAIAABFgAgiAuIBFAAIAAgXIhFAAgAhIgWQAugXASgaIAaAAIgFAGQAUAaAoAQIgNASIgSgKIAAAIIhTAAIAAgJIgSAMQgGgJgHgJgAgbgZIA1AAQgPgMgLgOQgKANgRANg");
		this.shape_38.setTransform(1000.4, 331.1);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAEgJIgvAAIAAgrIATAAIAAAeIBEAAIgcgMIggALIgGgMIAWgGIgUgHIAHgKIAdALQANgFAKgGIhgAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAJAAIAAgeIATAAIAAArIg0AAIgFAJIA/AAIAAAnQAAAJgEAFQgDAEgGABQgGABgXgBIgDgPIAHAAIgEgFQgpABgPADIgHgOQAGgCAJgMIgTAAIAAAtgAArAxIgLAIQAKAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgYIgWAAIAUAWgAgOAnIAcgBIgHgHIAGgEIgTAAIgIAMg");
		this.shape_39.setTransform(985.4, 331);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#858C91").s().p("AhGBEIAAgUIAVAAIAAhXIAWAAIAABXIAbAAIAAhzIAVAAIAAAtIArAAIAAATIgrAAIAAAzIAzAAIAAAUg");
		this.shape_40.setTransform(970.4, 330.7);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#858C91").s().p("AgYA4QANgEALgIQAIgHAEgLQADgMABgVIAUAAQAAATgDAOIAOAKIAAgzIgrAAIAAAzIgSAAIAAhFIAdAAIAAgmIAVAAIAAAmIAeAAIAABFIgTAAIAaAUIgOAPQgPgOgSgOQgKASgbAMIgNgRgAg7A6QAFgGAAgIIAAgYIgSAAIAAgQIASAAIAAgOIgGAAIgGAJIgGgXQAMgVAHgbIATAEIgEAOIASAAIAAARIgZAAIgFAKIAbAAIAAARIgNAAIAAAOIASAAIAAAQIgSAAIAAAWIAQgMIABAUIgdAWgAAngtIAQgWIARALIgSAVgAgUg5IAOgKQAIAJAIAMIgOALIgQgWg");
		this.shape_41.setTransform(955.4, 331);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#858C91").s().p("AAGA1IAXAAQAIAAAAgIIAAgDIg9AAIAAAeIgVAAIAAhAIgVATIgFgYQAWgRANgXIgiAAIAAgTIAsAAIAFgPIAXADIgEAMIBKAAIAAATIhUAAIgGALIBMAAIAABOQAAAJgEAFQgEAFgIABQgIABgXAAIgFgUgAgYAbIA9AAIAAgLIg9AAgAgYABIA9AAIAAgKIg9AAg");
		this.shape_42.setTransform(940.3, 331);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#858C91").s().p("AgjA1QAVgEAPgIQgLgMgKgOIANgJIgQAAIAAgRIAKAAIgPgQQAQgLAAgSIAAgKIBAAAIAAAXQAAAGAEAAIAQABIgEASIgUAAQgQAAAAgQIAAgOIgZAAQAAAUgTARIBKAAIAAARQgLATgOAPQAQAIAUADQgGAJgFALQgYgFgTgMQgTANgXAFQgEgIgIgLgAATAeQAMgLAHgNIgpAAQAJAOANAKgAg9A0QAEgFgBgGIAAgrIgOAAIAAgUIAiAAIAAA0IAOgOQABALADAMQgVARgJAMgAhBg9IARgLQAMAOAJAMIgSANQgLgRgJgLg");
		this.shape_43.setTransform(925.4, 331);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#858C91").s().p("AhIBCIAAgTIASAAIAAhwIBtAAIAABwIASAAIAAATgAghAvIBDAAIAAgUIhDAAgAghAJIBDAAIAAgSIhDAAgAghgbIBDAAIAAgTIhDAAg");
		this.shape_44.setTransform(910.4, 331.1);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#858C91").s().p("Ag/A8QAVgPADgaIggAAIAAgTIAhAAIAAgbIgaAAIAAgTIAhAAIgMgOIARgMIASATIgKAHIAcAAIARgaIAVALIgNAPIAfAAIAAATIgYAAIAAAbIAfAAIAAATIgfAAIAAAzIgVAAIAAgzIgmAAQgDAkgXASIgUgNgAgQAAIAlAAIAAgbIglAAg");
		this.shape_45.setTransform(1274.1, 306.9);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#858C91").s().p("AgNAUIAIgnIAUAAIgMAng");
		this.shape_46.setTransform(1254.8, 312.2);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#858C91").s().p("AhGBEIAAgVIA3AAIAAhyIAWAAIAAApIA2AAIAAAVIg2AAIAAA0IBAAAIAAAVg");
		this.shape_47.setTransform(1243.7, 306.6);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_48.setTransform(1228.6, 307);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#858C91").s().p("AArBIIAAgFIhoAAIAAhHIAUAAIAAAeQAjgOAAgYIhBAAIAAgRIAUAAIAAgiIAUAAIAAAiIAZAAIAAgqIATAAIAAANIAwAAIAAARIgwAAIAAAMIA7AAIAAARIg7AAQAAAJgCAGIAgAUIAAgbIAVAAIAABMgAgpAyIBUAAIAAgWIgKAOIgfgXQgJAMgWAMIgMgRg");
		this.shape_49.setTransform(1213.4, 306.9);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
		this.shape_50.setTransform(1198.2, 307.2);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#858C91").s().p("AhEBAQAKgaAIgfIAUAIIgSA4IgUgHgAAyBGIAAgKIg3AAIAAAKIgTAAIAAh3IAlAAIAAgVIASAAIAAAVIAnAAIAAB3gAAfApIATAAIAAgbIgTAAgAgFApIASAAIAAgbIgSAAgAAfgDIATAAIAAgbIgTAAgAgFgDIASAAIAAgbIgSAAgAhFgRIANgOQANAJALAJIgOAPQgJgJgOgKgAhDg5IANgNQALAHANAMIgNAOIgYgUg");
		this.shape_51.setTransform(1182.8, 307);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#858C91").s().p("AgzBJIAAg1IgLALIgJgXQAWgTAOgYIggAAIAAgUIApAAIAFgRIAWACIgEAPIBLAAIAAAUIhTAAQgIASgNAQIAABKgAgbBCIAAgTIAnAAIAAghIgfAAIAAgTIAfAAIAAgaIAVAAIAAAaIAhAAIAAATIghAAIAAAhIAnAAIAAATg");
		this.shape_52.setTransform(1167.9, 306.9);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#858C91").s().p("AhIA4QATgTAFgiIATACIgFAVQAIAUATADIAAg0Ig9AAIAAgSICJAAIAAASIg4AAIAAAPIAwAAIAAASIgwAAIAAAUIA8gBIgGAUQg0AAgXgBQgYgCgJgSQgIAPgKAKIgNgRgAAvgaIAAgLIhdAAIAAALIgTAAIAAgdIA4AAIgEgLIAVgGIAGARIA1AAIAAAdg");
		this.shape_53.setTransform(1152.8, 306.9);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#858C91").s().p("AAuBFIAAgFIhbAAIAAAFIgUAAIAAiJICDAAIAACJgAgtAvIBbAAIAAhiIhbAAgAgjAlIAAgvIAaAAIAAgLIggAAIAAgQIAgAAIAAgKIATAAIAAAKIAgAAIAAAQIggAAIAAALIAaAAIAAAvgAgRAVIAjAAIAAgPIgjAAg");
		this.shape_54.setTransform(1137.7, 307.2);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#858C91").s().p("AgpA+QAOgMAFgJQgGgMgEgOIgLAAIAAAYIALgJIACARQgNAJgLAMIgKgNQAEgFAAgIIAAgbIgLAAIAAgPIALAAIAAgMIgDAAIgEAGIgFgXQAJgSAGgZIARADIgEAQIAOAAIAAAPIgUAAIgFALIAYAAIAAAPIgMAAIAAAMIAQAAIAAAMIAGgDQADAJADAIQADgMAAgPIgRAAIAAgQIAPgeIgNAAIAAgPIAdAAIAAAPIgNAeIAOAAIAAALQAAAagHAUQANAMAbAAIAlgBIgFASIgeAAQghAAgQgPQgGAKgIAJIgQgLgAAXAxIAAgMIgUAAIAAgNIAUAAIAAgIIgSAAIAAgOIASAAIAAgHIgRAAIAAgNIARAAIAAgIIgWAAIAAgNIAWAAIAAgJIgRAAIAAgNIARAAIAAgKIARAAIAAAKIAaAAIAAAWIAGAAIAAANIgGAAIAAAVIgaAAIAAAHIAaAAIAAAOIgaAAIAAAIIAcAAIAAANIgcAAIAAAMgAAogSIANAAIAAgIIgNAAgAAognIANAAIAAgJIgNAAg");
		this.shape_55.setTransform(1122.5, 307);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#858C91").s().p("AgyBIIAAgyIgPAQIgIgVQAUgSARgbIATAFIgNAWIAABJgAAXBFQgXAAAAgXIAAgLIgTAJIgLgSQARgHANgHIAAglIAVAAIAAAaQASgKAQgMIANAPQgWAQgZAOIAAASQAAAIAKABIAIAAQAFAAAEgDQACgBABgDIADgWIAUAIQgEAegIAEQgHAFgIAAgAATgcIAAgLIglAAIAAAKIgUAAIAAgKIghAAIAAgSIAhAAIAAgOIAUAAIAAAOIAlAAIAAgOIAVAAIAAAOIAgAAIAAASIggAAIAAALg");
		this.shape_56.setTransform(1107.4, 307);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#858C91").s().p("AAHBJIAAhCIgOAAIAABCIgTAAIAAgJIgtAAIAAgMIAtAAIAAgHIgpAAIAAgMIApAAIAAgHIgrAAIAAgMIArAAIAAgHIgeAAIAAgeIBwAAIAAAeIgeAAIAAAHIAsAAIAAAMIgsAAIAAAHIApAAIAAAMIgpAAIAAAHIAuAAIAAAMIguAAIAAAJgAgkgDIBIAAIAAgIIhIAAgAhGgdIAAgNIAQAAIgIgFQALgLAHgOIAUACIgFAJIAUAAIAAgLIATAAIAAALIAzAAIAAAMIgzAAIAAAHIA9AAIAAANgAgqgqIAhAAIAAgHIgcAAIgFAHg");
		this.shape_57.setTransform(1092.2, 306.9);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#858C91").s().p("AgNAUIAIgnIAUAAIgMAng");
		this.shape_58.setTransform(1073, 312.2);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#858C91").s().p("AANA0IAYAAQAKAAAAgJIAAhaIg6AAIAAgSIBOAAIAABuQAAAKgEAHQgDAGgIACQgIACgbABQgBgMgDgJgAhCBIIAAh8IAUAAIAAB8gAggAyIAAhUIBBAAIAABLIguAAIAAAJgAgNAZIAbAAIAAgNIgbAAgAgNgEIAbAAIAAgOIgbAAgAgwhBIASgHIAPAYIgVAIIgMgZg");
		this.shape_59.setTransform(1061.9, 306.9);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#858C91").s().p("AhIAxIAMgLQAIgHACgBIAFgBIAEAAQAqgbAcgaIhcAAIAAgUIA3AAQgEgIgHgKIATgKIAOAXIgLAFIA5AAIAAATQglAmguAeQAKAFANAAIBJgBIgHAVIgrAAIgXAAQggAAgMgSIgTAXg");
		this.shape_60.setTransform(1046.8, 306.9);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_61.setTransform(1031.7, 307);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#858C91").s().p("AAXAzIATABQAJAAAAgJIAAgLIgMAPIgTgRQgGALgNAKIgKgLIAAAfIgTAAIAAhOIAmAAIABgJIggAAIAAgxIBUAAIAAAxIgiAAIAAAJIApAAIAAA5QAAAJgEAGQgFAFgLAAIgXABIgEgUgAgJAjQAPgMADgNIgSAAgAAbAOIAYARIAAgVIgXAAIgBAEgAgCghIAuAAIAAgPIguAAgAhDBBIAQg4QAKAEAJACIgQA4gAhFgSIAMgOIAbAWIgOAOIgZgWgAhAg5IAMgNQASANAHAHIgNAOIgYgVg");
		this.shape_62.setTransform(1016.2, 307);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#858C91").s().p("AgCBGIgFgVIAcABQAQAAABgKQACgJAAgeIhbAAIAFhGIAWAAIgBAQIBfAAIAAATIhgAAIgBAQIBaAAIgCA6QgBARgIAHQgJAGgPAAgAhFAjIAAgTIBjAAIAAATg");
		this.shape_63.setTransform(1001.2, 306.9);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_64.setTransform(986.2, 307);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
		this.shape_65.setTransform(971, 307.2);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#858C91").s().p("AguAsQANABAMABQAMAAAAgNIAAgdIg9AAIAAgUIA9AAIAAgcIgzAAIAAgWIB5AAIAAAWIgwAAIAAAcIA6AAIAAAUIg6AAIAAAhQAAAOgGAHQgGAIgLAAIgfAAIgFgWg");
		this.shape_66.setTransform(955.9, 307.2);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#858C91").s().p("Ag2BJIAAhEIgMASIgGgYQAPgZAPgtIASAGIgLAdIAABtgAgdBCIAAgTIAxAAQAMgiAIgkIAYAGIgYBAIAhAAIAAATgAgVgQIATgGIATA3IgUAGQgJgjgJgUgAgZgcIAAgTIAlAAIgIgTIAWgGIAKAVIgNAEIAtAAIAAATg");
		this.shape_67.setTransform(940.7, 307);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
		this.shape_68.setTransform(925.6, 307);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#858C91").s().p("AgGAyIAVABQALAAAAgMIAAgGIgzAAIAOALIgOAOIgVgVIAEgEIgeAAIAAgSIBiAAIAAgHIAVAAIAAAHIAaAAIAAASIgaAAIAAAMQAAALgFAFQgGAHgKABIgbAAIgFgTgAgeAFQgcgBAAgYIAAgwIBuAAIAAAtIhZAAIAAABQAAAKALAAIBAAAQAHAAADgCQADgCACgEIABgPIASAGQgCAQgCAFQgCAFgDADQgEACgFACIgMABgAglgnIBFAAIAAgLIhFAAg");
		this.shape_69.setTransform(910.4, 307.2);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_69
			}, {
				t: this.shape_68
			}, {
				t: this.shape_67
			}, {
				t: this.shape_66
			}, {
				t: this.shape_65
			}, {
				t: this.shape_64
			}, {
				t: this.shape_63
			}, {
				t: this.shape_62
			}, {
				t: this.shape_61
			}, {
				t: this.shape_60
			}, {
				t: this.shape_59
			}, {
				t: this.shape_58
			}, {
				t: this.shape_57
			}, {
				t: this.shape_56
			}, {
				t: this.shape_55
			}, {
				t: this.shape_54
			}, {
				t: this.shape_53
			}, {
				t: this.shape_52
			}, {
				t: this.shape_51
			}, {
				t: this.shape_50
			}, {
				t: this.shape_49
			}, {
				t: this.shape_48
			}, {
				t: this.shape_47
			}, {
				t: this.shape_46
			}, {
				t: this.shape_45
			}, {
				t: this.shape_44
			}, {
				t: this.shape_43
			}, {
				t: this.shape_42
			}, {
				t: this.shape_41
			}, {
				t: this.shape_40
			}, {
				t: this.shape_39
			}, {
				t: this.shape_38
			}, {
				t: this.shape_37
			}, {
				t: this.shape_36
			}, {
				t: this.shape_35
			}, {
				t: this.shape_34
			}, {
				t: this.shape_33
			}, {
				t: this.shape_32
			}, {
				t: this.shape_31
			}, {
				t: this.shape_30
			}, {
				t: this.shape_29
			}, {
				t: this.shape_28
			}, {
				t: this.shape_27
			}, {
				t: this.shape_26
			}, {
				t: this.shape_25
			}, {
				t: this.shape_24
			}, {
				t: this.shape_23
			}, {
				t: this.shape_22
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
		}).wait(15));

		// 图层 3
		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#999999").s().p("AgYAtIgZAMQgDgHgEgHQAQgFAPgHIAIALIgGACIANABQAFAAAAgFIAAgJIgUAAIgKAAIAAgKIgOAJIgIgNIANgHIgFgFIAJgHIAGAGIAFgEIgHgFIAJgHIAGAFIAHgHIgRAAQgIAIgKAHIgJgKQASgLALgPIAMAFIgEAFIAVAAIAAAMIgLANIAbAAQgLgMgFgQIALgEIADAGIAlAAIAAALIgOAQQAJAIANAEIgJANIgMgHIAAAMIgcAAIAAAOQAAAFgDADQgCADgEACIgWAAIgDgNgAAlASQgJgFgHgIIAAAHIgmAAIAAgGQgHAHgIAFIBFAAIAAAAgAAbgHIAIgJIgPAAIAHAJgAASArIAGgLIAhALIgHANIgggNgAgXAsIAGgCIgIgLIAUAAIAAAJQAAAFgFAAIgNgBgAgZAfgAg1gbIAAgUIAuAAIgDgIIAQgCIAEAKIAtAAIAAATIgPAAIAAgHIhOAAIAAAIg");
		this.shape_70.setTransform(761.2, 736.9);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#999999").s().p("AgWAqQAWgLAHgPQAGgPAAghIAPAAQABAYgEAQIAIAAIAAAaQAAAFAFAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQACgDABgOIAOAHQgCAUgFADQgFADgFAAIgJAAQgOAAAAgOIAAgMQgJARgVAMIgLgOgAg6AfQALgMAGgOIgPgcIAMgGIAKASQAEgLABgNIgbAAIAAgPIAqAAQgBAfgKAYIAOAZIgNAIIgIgRQgIAOgKALIgIgPgAgKAQIAAhHIA+AAIAABHIgQAAIAAg4IggAAIAAA4g");
		this.shape_71.setTransform(749.2, 737.2);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#999999").s().p("AgmAuQATgBAPgFQgKgGgIgLIgHAAIAAgNIBMAAIAAANQgKAKgJAHQANACASABIgHAOQgagDgQgGQgPAGgZAEIgIgMgAALAjQALgFAHgHIgiAAQAGAHAKAFgAg6AvQAKgSAAgjIAAgoIAuAAIgDgIIASgEIAFAMIAoAAIAAAMIhbAAIAAAeQAAAsgMASIgNgLgAgSAEIAAgSIgNAAIAAgMIANAAIAAgFIAPAAIAAAFIAcAAIAAgFIAPAAIAAAFIAQAAIAAAMIgQAAIAAASgAgDgGIAcAAIAAgIIgcAAg");
		this.shape_72.setTransform(737.1, 737);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#999999").s().p("AggABQAAgWAJgNQAJgMAPAAQAfAAAAAuQABAXgJAMQgJAMgPAAQggAAAAgugAgNABQAAAgANAAQANAAAAghQAAgggMAAQgOAAAAAhg");
		this.shape_73.setTransform(727.5, 736.6);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#999999").s().p("AgWAkQgJgLAAgUQAAgWALgPQALgOASAAQAKAAAHACIAAARQgIgFgHAAQgLAAgGAJQgGAIAAAOIAAAAQAHgKAMAAQALgBAHAIQAGAHAAANQAAANgIAJQgJAJgNAAQgPAAgIgLgAgHAGQgEADAAAHQAAAHAEAEQADAFAFABQAFAAAEgFQADgFAAgGQAAgPgMgBQgFAAgDAFg");
		this.shape_74.setTransform(720.2, 736.6);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#999999").s().p("AgcArIAAgRQAKAHAMAAQAGAAAFgEQAEgDAAgHQAAgGgFgEQgFgDgJAAIgJAAIAAgNIAIAAQARAAAAgMQAAgNgMAAQgKABgIAGIAAgQQAJgFAMAAQANAAAHAGQAIAGAAAKQABATgTAEIAAABQAKAAAGAGQAGAFAAAIQAAANgKAIQgKAHgOAAQgOAAgJgEg");
		this.shape_75.setTransform(712.8, 736.6);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#999999").s().p("AgKAwIAGgHIggADQgHAAgFACIgGgOQAGgFAIgfIgOAAIAAgOIA2AAIAAAOIgXAAIgLAgIATgBIgIgWIANgEIALAdQAJgOgBgmIgLAAIAAgPIAMAAIAAgUIAPAAIAAAUIAeAAIAABBIgCARQgBAEgCACQgCACgEACQgEABgSAAIgDgSIAMABQAEAAACgBIABgEIABgSIABgmIgPAAQgBAZgCAMQgBALgFAMQgFALgIAJIgNgKgAgxghIAAgPIAtAAIAAAPg");
		this.shape_76.setTransform(702.8, 737);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#999999").s().p("Ag5AqIAJABQADAAAAgFIAAgXIgLAFIgBgRIAMgDIAAgTIgLAAIAAgPIALAAIAAgWIAPAAIAAAWIAKAAIAAAJQALgOAHgSIAOADIgFAKIAvAAIAAAOIg1AAIgJAOIAIAAIAAAJIALgCIAAgSIAOAAIAAAPIAbgGIgBAhQgCAFgCACQgDADgNABIgEgPQAJABABgCIABgLIgNACIAAAkIgOAAIAAghIgLACIAAAeQAAAHAHAAIAYAAQAEAAADgCIADgDIACgNIAQAGQgEAQgEAEQgFAEgHABIgjAAQgSAAAAgSIAAgcIgFABIgBgNIAGgCIAAgKIgHgFIgJAAIAAAPIAKgDIgBAPIgJADIAAAhQAAAGgCADQgCADgEABIgPABQgBgHgDgJg");
		this.shape_77.setTransform(691, 736.9);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#999999").s().p("AgCAjIASABQAKAAAAgJIAAhAIhSAAIAAgQIBxAAIAAAQIgNAAIAABIQAAAHgDAEQgEAFgGABQgGACgXgBIgEgSgAgsAfIAAg4IA2AAIAAAxIglAAIAAAHgAgbAKIAWAAIAAgVIgWAAg");
		this.shape_78.setTransform(679, 737.3);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#7A7A7A").s().p("Ag4BHIA4giIA7AhIg7AjgAAFAiIA3ggIA6AiIg3AggAh0AlIA7gjIA3AgIg7AigAiyAAIA7ghIA5AhIg6AigABAAAIA6ggIA5AgIg5AhgAg2AAIA2gfIA4AfIg4AggAAFgiIA5giIAHAEIACACIAdAQIAQAKIABABIg5AhgAh0gjIADgCIAAgBIA1geIA6AiIg3AggAg4hGIA4giIA6AiIg6Ahg");
		this.shape_79.setTransform(718.3, 708);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#CCCCCC").s().p("AhYBZIA6giIAABCIg6AigAgaA0IA2ggIAABCIgzAfIAAAAIgDACgAAgASIA6ghIAABBIg6AigAhYAUIA6ghIAAA/Ig6AigAgagPIA2ggIAAA+Ig2AggAhYgyIA6giIAABDIg6AhgAAggyIA6ghIAABAIg6AggAgahWIA2ggIAABCIg2AggAAgh5IA6ghIAABCIg6Aig");
		this.shape_80.setTransform(709.1, 692.1);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#9C9C9C").s().p("AAfB5IAAhCIA7AiIAABCgAAaB2IgQgJIgcgRIgCgCIgIgEIAAhCIA3AgIAABCgAAfAyIAAg/IA7AhIAABAgAhZAyIAAhBIA6AhIAABCgAgcAPIAAg+IA3AgIAAA+gAAfgRIAAhDIA7AiIAABCgAhZgTIAAhAIA6AhIAAA/gAgcg0IAAhCIA3AgIAABCgAhZhYIAAhCIA6AhIAABDg");
		this.shape_81.setTransform(727.4, 692.1);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#FFFFFF").s().p("AAABCIAAgdIBGAAIAAgtIh3AAIAAARIg0gkIA0gmIAAAXICXAAIAABsg");
		this.shape_82.setTransform(1313.9, 44.2);

		this.backBtn = new lib.backBtn();
		this.backBtn.parent = this;
		this.backBtn.setTransform(1314.7, 44.8);
		new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.backBtn(), 3);

		this.instance = new lib.tabKuang("synched", 0);
		this.instance.parent = this;
		this.instance.setTransform(309.5, 382);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#F2F6F8").s().p("Eg9oA8AMAAAh3/MB7RAAAMAAAB3/g");
		this.shape_83.setTransform(394.5, 384);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#FFFFFF").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
		this.shape_84.setTransform(683, 384);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_84
			}, {
				t: this.shape_83
			}, {
				t: this.instance
			}, {
				t: this.backBtn
			}, {
				t: this.shape_82
			}, {
				t: this.shape_81
			}, {
				t: this.shape_80
			}, {
				t: this.shape_79
			}, {
				t: this.shape_78
			}, {
				t: this.shape_77
			}, {
				t: this.shape_76
			}, {
				t: this.shape_75
			}, {
				t: this.shape_74
			}, {
				t: this.shape_73
			}, {
				t: this.shape_72
			}, {
				t: this.shape_71
			}, {
				t: this.shape_70
			}]
		}).wait(15));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 1366, 768);


	// stage content:
	(lib._3d1_2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(704.4, -485.2, 1366, 768);
	// library properties:
	lib.properties = {
		width: 1366,
		height: 768,
		fps: 24,
		color: "#F1F9F7",
		opacity: 1.00,
		webfonts: {},
		manifest: [{
				src: "images/3d1_2/ylbjq_dl_zz0000.jpg",
				id: "ylbjq_dl_zz0000"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0001.jpg",
				id: "ylbjq_dl_zz0001"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0002.jpg",
				id: "ylbjq_dl_zz0002"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0003.jpg",
				id: "ylbjq_dl_zz0003"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0004.jpg",
				id: "ylbjq_dl_zz0004"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0005.jpg",
				id: "ylbjq_dl_zz0005"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0006.jpg",
				id: "ylbjq_dl_zz0006"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0007.jpg",
				id: "ylbjq_dl_zz0007"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0008.jpg",
				id: "ylbjq_dl_zz0008"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0009.jpg",
				id: "ylbjq_dl_zz0009"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0010.jpg",
				id: "ylbjq_dl_zz0010"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0011.jpg",
				id: "ylbjq_dl_zz0011"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0012.jpg",
				id: "ylbjq_dl_zz0012"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0013.jpg",
				id: "ylbjq_dl_zz0013"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0014.jpg",
				id: "ylbjq_dl_zz0014"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0015.jpg",
				id: "ylbjq_dl_zz0015"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0016.jpg",
				id: "ylbjq_dl_zz0016"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0017.jpg",
				id: "ylbjq_dl_zz0017"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0018.jpg",
				id: "ylbjq_dl_zz0018"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0019.jpg",
				id: "ylbjq_dl_zz0019"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0020.jpg",
				id: "ylbjq_dl_zz0020"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0021.jpg",
				id: "ylbjq_dl_zz0021"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0022.jpg",
				id: "ylbjq_dl_zz0022"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0023.jpg",
				id: "ylbjq_dl_zz0023"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0024.jpg",
				id: "ylbjq_dl_zz0024"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0025.jpg",
				id: "ylbjq_dl_zz0025"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0026.jpg",
				id: "ylbjq_dl_zz0026"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0027.jpg",
				id: "ylbjq_dl_zz0027"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0028.jpg",
				id: "ylbjq_dl_zz0028"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0029.jpg",
				id: "ylbjq_dl_zz0029"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0030.jpg",
				id: "ylbjq_dl_zz0030"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0031.jpg",
				id: "ylbjq_dl_zz0031"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0032.jpg",
				id: "ylbjq_dl_zz0032"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0033.jpg",
				id: "ylbjq_dl_zz0033"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0034.jpg",
				id: "ylbjq_dl_zz0034"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0035.jpg",
				id: "ylbjq_dl_zz0035"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0036.jpg",
				id: "ylbjq_dl_zz0036"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0037.jpg",
				id: "ylbjq_dl_zz0037"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0038.jpg",
				id: "ylbjq_dl_zz0038"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0039.jpg",
				id: "ylbjq_dl_zz0039"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0040.jpg",
				id: "ylbjq_dl_zz0040"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0041.jpg",
				id: "ylbjq_dl_zz0041"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0042.jpg",
				id: "ylbjq_dl_zz0042"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0043.jpg",
				id: "ylbjq_dl_zz0043"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0044.jpg",
				id: "ylbjq_dl_zz0044"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0045.jpg",
				id: "ylbjq_dl_zz0045"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0046.jpg",
				id: "ylbjq_dl_zz0046"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0047.jpg",
				id: "ylbjq_dl_zz0047"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0048.jpg",
				id: "ylbjq_dl_zz0048"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0049.jpg",
				id: "ylbjq_dl_zz0049"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0050.jpg",
				id: "ylbjq_dl_zz0050"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0051.jpg",
				id: "ylbjq_dl_zz0051"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0052.jpg",
				id: "ylbjq_dl_zz0052"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0053.jpg",
				id: "ylbjq_dl_zz0053"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0054.jpg",
				id: "ylbjq_dl_zz0054"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0055.jpg",
				id: "ylbjq_dl_zz0055"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0056.jpg",
				id: "ylbjq_dl_zz0056"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0057.jpg",
				id: "ylbjq_dl_zz0057"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0058.jpg",
				id: "ylbjq_dl_zz0058"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0059.jpg",
				id: "ylbjq_dl_zz0059"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0060.jpg",
				id: "ylbjq_dl_zz0060"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0061.jpg",
				id: "ylbjq_dl_zz0061"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0062.jpg",
				id: "ylbjq_dl_zz0062"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0063.jpg",
				id: "ylbjq_dl_zz0063"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0064.jpg",
				id: "ylbjq_dl_zz0064"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0065.jpg",
				id: "ylbjq_dl_zz0065"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0066.jpg",
				id: "ylbjq_dl_zz0066"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0067.jpg",
				id: "ylbjq_dl_zz0067"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0068.jpg",
				id: "ylbjq_dl_zz0068"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0069.jpg",
				id: "ylbjq_dl_zz0069"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0070.jpg",
				id: "ylbjq_dl_zz0070"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0071.jpg",
				id: "ylbjq_dl_zz0071"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0072.jpg",
				id: "ylbjq_dl_zz0072"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0073.jpg",
				id: "ylbjq_dl_zz0073"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0074.jpg",
				id: "ylbjq_dl_zz0074"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0075.jpg",
				id: "ylbjq_dl_zz0075"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0076.jpg",
				id: "ylbjq_dl_zz0076"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0077.jpg",
				id: "ylbjq_dl_zz0077"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0078.jpg",
				id: "ylbjq_dl_zz0078"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0079.jpg",
				id: "ylbjq_dl_zz0079"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0080.jpg",
				id: "ylbjq_dl_zz0080"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0081.jpg",
				id: "ylbjq_dl_zz0081"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0082.jpg",
				id: "ylbjq_dl_zz0082"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0083.jpg",
				id: "ylbjq_dl_zz0083"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0084.jpg",
				id: "ylbjq_dl_zz0084"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0085.jpg",
				id: "ylbjq_dl_zz0085"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0086.jpg",
				id: "ylbjq_dl_zz0086"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0087.jpg",
				id: "ylbjq_dl_zz0087"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0088.jpg",
				id: "ylbjq_dl_zz0088"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0089.jpg",
				id: "ylbjq_dl_zz0089"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0090.jpg",
				id: "ylbjq_dl_zz0090"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0091.jpg",
				id: "ylbjq_dl_zz0091"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0092.jpg",
				id: "ylbjq_dl_zz0092"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0093.jpg",
				id: "ylbjq_dl_zz0093"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0094.jpg",
				id: "ylbjq_dl_zz0094"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0095.jpg",
				id: "ylbjq_dl_zz0095"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0096.jpg",
				id: "ylbjq_dl_zz0096"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0097.jpg",
				id: "ylbjq_dl_zz0097"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0098.jpg",
				id: "ylbjq_dl_zz0098"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0099.jpg",
				id: "ylbjq_dl_zz0099"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0100.jpg",
				id: "ylbjq_dl_zz0100"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0101.jpg",
				id: "ylbjq_dl_zz0101"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0102.jpg",
				id: "ylbjq_dl_zz0102"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0103.jpg",
				id: "ylbjq_dl_zz0103"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0104.jpg",
				id: "ylbjq_dl_zz0104"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0105.jpg",
				id: "ylbjq_dl_zz0105"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0106.jpg",
				id: "ylbjq_dl_zz0106"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0107.jpg",
				id: "ylbjq_dl_zz0107"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0108.jpg",
				id: "ylbjq_dl_zz0108"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0109.jpg",
				id: "ylbjq_dl_zz0109"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0110.jpg",
				id: "ylbjq_dl_zz0110"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0111.jpg",
				id: "ylbjq_dl_zz0111"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0112.jpg",
				id: "ylbjq_dl_zz0112"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0113.jpg",
				id: "ylbjq_dl_zz0113"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0114.jpg",
				id: "ylbjq_dl_zz0114"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0115.jpg",
				id: "ylbjq_dl_zz0115"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0116.jpg",
				id: "ylbjq_dl_zz0116"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0117.jpg",
				id: "ylbjq_dl_zz0117"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0118.jpg",
				id: "ylbjq_dl_zz0118"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0119.jpg",
				id: "ylbjq_dl_zz0119"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0120.jpg",
				id: "ylbjq_dl_zz0120"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0121.jpg",
				id: "ylbjq_dl_zz0121"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0122.jpg",
				id: "ylbjq_dl_zz0122"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0123.jpg",
				id: "ylbjq_dl_zz0123"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0124.jpg",
				id: "ylbjq_dl_zz0124"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0125.jpg",
				id: "ylbjq_dl_zz0125"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0126.jpg",
				id: "ylbjq_dl_zz0126"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0127.jpg",
				id: "ylbjq_dl_zz0127"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0128.jpg",
				id: "ylbjq_dl_zz0128"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0129.jpg",
				id: "ylbjq_dl_zz0129"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0130.jpg",
				id: "ylbjq_dl_zz0130"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0131.jpg",
				id: "ylbjq_dl_zz0131"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0132.jpg",
				id: "ylbjq_dl_zz0132"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0133.jpg",
				id: "ylbjq_dl_zz0133"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0134.jpg",
				id: "ylbjq_dl_zz0134"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0135.jpg",
				id: "ylbjq_dl_zz0135"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0136.jpg",
				id: "ylbjq_dl_zz0136"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0137.jpg",
				id: "ylbjq_dl_zz0137"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0138.jpg",
				id: "ylbjq_dl_zz0138"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0139.jpg",
				id: "ylbjq_dl_zz0139"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0140.jpg",
				id: "ylbjq_dl_zz0140"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0141.jpg",
				id: "ylbjq_dl_zz0141"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0142.jpg",
				id: "ylbjq_dl_zz0142"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0143.jpg",
				id: "ylbjq_dl_zz0143"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0144.jpg",
				id: "ylbjq_dl_zz0144"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0145.jpg",
				id: "ylbjq_dl_zz0145"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0146.jpg",
				id: "ylbjq_dl_zz0146"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0147.jpg",
				id: "ylbjq_dl_zz0147"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0148.jpg",
				id: "ylbjq_dl_zz0148"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0149.jpg",
				id: "ylbjq_dl_zz0149"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0150.jpg",
				id: "ylbjq_dl_zz0150"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0151.jpg",
				id: "ylbjq_dl_zz0151"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0152.jpg",
				id: "ylbjq_dl_zz0152"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0153.jpg",
				id: "ylbjq_dl_zz0153"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0154.jpg",
				id: "ylbjq_dl_zz0154"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0155.jpg",
				id: "ylbjq_dl_zz0155"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0156.jpg",
				id: "ylbjq_dl_zz0156"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0157.jpg",
				id: "ylbjq_dl_zz0157"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0158.jpg",
				id: "ylbjq_dl_zz0158"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0159.jpg",
				id: "ylbjq_dl_zz0159"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0160.jpg",
				id: "ylbjq_dl_zz0160"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0161.jpg",
				id: "ylbjq_dl_zz0161"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0162.jpg",
				id: "ylbjq_dl_zz0162"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0163.jpg",
				id: "ylbjq_dl_zz0163"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0164.jpg",
				id: "ylbjq_dl_zz0164"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0165.jpg",
				id: "ylbjq_dl_zz0165"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0166.jpg",
				id: "ylbjq_dl_zz0166"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0167.jpg",
				id: "ylbjq_dl_zz0167"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0168.jpg",
				id: "ylbjq_dl_zz0168"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0169.jpg",
				id: "ylbjq_dl_zz0169"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0170.jpg",
				id: "ylbjq_dl_zz0170"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0171.jpg",
				id: "ylbjq_dl_zz0171"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0172.jpg",
				id: "ylbjq_dl_zz0172"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0173.jpg",
				id: "ylbjq_dl_zz0173"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0174.jpg",
				id: "ylbjq_dl_zz0174"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0175.jpg",
				id: "ylbjq_dl_zz0175"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0176.jpg",
				id: "ylbjq_dl_zz0176"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0177.jpg",
				id: "ylbjq_dl_zz0177"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0178.jpg",
				id: "ylbjq_dl_zz0178"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0179.jpg",
				id: "ylbjq_dl_zz0179"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0180.jpg",
				id: "ylbjq_dl_zz0180"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0181.jpg",
				id: "ylbjq_dl_zz0181"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0182.jpg",
				id: "ylbjq_dl_zz0182"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0183.jpg",
				id: "ylbjq_dl_zz0183"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0184.jpg",
				id: "ylbjq_dl_zz0184"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0185.jpg",
				id: "ylbjq_dl_zz0185"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0186.jpg",
				id: "ylbjq_dl_zz0186"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0187.jpg",
				id: "ylbjq_dl_zz0187"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0188.jpg",
				id: "ylbjq_dl_zz0188"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0189.jpg",
				id: "ylbjq_dl_zz0189"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0190.jpg",
				id: "ylbjq_dl_zz0190"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0191.jpg",
				id: "ylbjq_dl_zz0191"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0192.jpg",
				id: "ylbjq_dl_zz0192"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0193.jpg",
				id: "ylbjq_dl_zz0193"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0194.jpg",
				id: "ylbjq_dl_zz0194"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0195.jpg",
				id: "ylbjq_dl_zz0195"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0196.jpg",
				id: "ylbjq_dl_zz0196"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0197.jpg",
				id: "ylbjq_dl_zz0197"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0198.jpg",
				id: "ylbjq_dl_zz0198"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0199.jpg",
				id: "ylbjq_dl_zz0199"
			},
			{
				src: "images/3d1_2/ylbjq_dl_zz0200.jpg",
				id: "ylbjq_dl_zz0200"
			}
		],
		preloads: []
	};




})(lib3d1_2 = lib3d1_2 || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib3d1_2, images, createjs, ss, AdobeAn;