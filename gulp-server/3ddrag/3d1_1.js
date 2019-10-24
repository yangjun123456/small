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



(lib.ylbjq_bl_zz_00000 = function() {
	this.initialize(img.ylbjq_bl_zz_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00001 = function() {
	this.initialize(img.ylbjq_bl_zz_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00002 = function() {
	this.initialize(img.ylbjq_bl_zz_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00003 = function() {
	this.initialize(img.ylbjq_bl_zz_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00004 = function() {
	this.initialize(img.ylbjq_bl_zz_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00005 = function() {
	this.initialize(img.ylbjq_bl_zz_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00006 = function() {
	this.initialize(img.ylbjq_bl_zz_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00007 = function() {
	this.initialize(img.ylbjq_bl_zz_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00008 = function() {
	this.initialize(img.ylbjq_bl_zz_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00009 = function() {
	this.initialize(img.ylbjq_bl_zz_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00010 = function() {
	this.initialize(img.ylbjq_bl_zz_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00011 = function() {
	this.initialize(img.ylbjq_bl_zz_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00012 = function() {
	this.initialize(img.ylbjq_bl_zz_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00013 = function() {
	this.initialize(img.ylbjq_bl_zz_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00014 = function() {
	this.initialize(img.ylbjq_bl_zz_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00015 = function() {
	this.initialize(img.ylbjq_bl_zz_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00016 = function() {
	this.initialize(img.ylbjq_bl_zz_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00017 = function() {
	this.initialize(img.ylbjq_bl_zz_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00018 = function() {
	this.initialize(img.ylbjq_bl_zz_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00019 = function() {
	this.initialize(img.ylbjq_bl_zz_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00020 = function() {
	this.initialize(img.ylbjq_bl_zz_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00021 = function() {
	this.initialize(img.ylbjq_bl_zz_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00022 = function() {
	this.initialize(img.ylbjq_bl_zz_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00023 = function() {
	this.initialize(img.ylbjq_bl_zz_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00024 = function() {
	this.initialize(img.ylbjq_bl_zz_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00025 = function() {
	this.initialize(img.ylbjq_bl_zz_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00026 = function() {
	this.initialize(img.ylbjq_bl_zz_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00027 = function() {
	this.initialize(img.ylbjq_bl_zz_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00028 = function() {
	this.initialize(img.ylbjq_bl_zz_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00029 = function() {
	this.initialize(img.ylbjq_bl_zz_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00030 = function() {
	this.initialize(img.ylbjq_bl_zz_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00031 = function() {
	this.initialize(img.ylbjq_bl_zz_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00032 = function() {
	this.initialize(img.ylbjq_bl_zz_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00033 = function() {
	this.initialize(img.ylbjq_bl_zz_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00034 = function() {
	this.initialize(img.ylbjq_bl_zz_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00035 = function() {
	this.initialize(img.ylbjq_bl_zz_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00036 = function() {
	this.initialize(img.ylbjq_bl_zz_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00037 = function() {
	this.initialize(img.ylbjq_bl_zz_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00038 = function() {
	this.initialize(img.ylbjq_bl_zz_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00039 = function() {
	this.initialize(img.ylbjq_bl_zz_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00040 = function() {
	this.initialize(img.ylbjq_bl_zz_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00041 = function() {
	this.initialize(img.ylbjq_bl_zz_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00042 = function() {
	this.initialize(img.ylbjq_bl_zz_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00043 = function() {
	this.initialize(img.ylbjq_bl_zz_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00044 = function() {
	this.initialize(img.ylbjq_bl_zz_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00045 = function() {
	this.initialize(img.ylbjq_bl_zz_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00046 = function() {
	this.initialize(img.ylbjq_bl_zz_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00047 = function() {
	this.initialize(img.ylbjq_bl_zz_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00048 = function() {
	this.initialize(img.ylbjq_bl_zz_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00049 = function() {
	this.initialize(img.ylbjq_bl_zz_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00050 = function() {
	this.initialize(img.ylbjq_bl_zz_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00051 = function() {
	this.initialize(img.ylbjq_bl_zz_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00052 = function() {
	this.initialize(img.ylbjq_bl_zz_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00053 = function() {
	this.initialize(img.ylbjq_bl_zz_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00054 = function() {
	this.initialize(img.ylbjq_bl_zz_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00055 = function() {
	this.initialize(img.ylbjq_bl_zz_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00056 = function() {
	this.initialize(img.ylbjq_bl_zz_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00057 = function() {
	this.initialize(img.ylbjq_bl_zz_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00058 = function() {
	this.initialize(img.ylbjq_bl_zz_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00059 = function() {
	this.initialize(img.ylbjq_bl_zz_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00060 = function() {
	this.initialize(img.ylbjq_bl_zz_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00061 = function() {
	this.initialize(img.ylbjq_bl_zz_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00062 = function() {
	this.initialize(img.ylbjq_bl_zz_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00063 = function() {
	this.initialize(img.ylbjq_bl_zz_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00064 = function() {
	this.initialize(img.ylbjq_bl_zz_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00065 = function() {
	this.initialize(img.ylbjq_bl_zz_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00066 = function() {
	this.initialize(img.ylbjq_bl_zz_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00067 = function() {
	this.initialize(img.ylbjq_bl_zz_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00068 = function() {
	this.initialize(img.ylbjq_bl_zz_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00069 = function() {
	this.initialize(img.ylbjq_bl_zz_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00070 = function() {
	this.initialize(img.ylbjq_bl_zz_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00071 = function() {
	this.initialize(img.ylbjq_bl_zz_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00072 = function() {
	this.initialize(img.ylbjq_bl_zz_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00073 = function() {
	this.initialize(img.ylbjq_bl_zz_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00074 = function() {
	this.initialize(img.ylbjq_bl_zz_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00075 = function() {
	this.initialize(img.ylbjq_bl_zz_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00076 = function() {
	this.initialize(img.ylbjq_bl_zz_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00077 = function() {
	this.initialize(img.ylbjq_bl_zz_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00078 = function() {
	this.initialize(img.ylbjq_bl_zz_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00079 = function() {
	this.initialize(img.ylbjq_bl_zz_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00080 = function() {
	this.initialize(img.ylbjq_bl_zz_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00081 = function() {
	this.initialize(img.ylbjq_bl_zz_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00082 = function() {
	this.initialize(img.ylbjq_bl_zz_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00083 = function() {
	this.initialize(img.ylbjq_bl_zz_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00084 = function() {
	this.initialize(img.ylbjq_bl_zz_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00085 = function() {
	this.initialize(img.ylbjq_bl_zz_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00086 = function() {
	this.initialize(img.ylbjq_bl_zz_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00087 = function() {
	this.initialize(img.ylbjq_bl_zz_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00088 = function() {
	this.initialize(img.ylbjq_bl_zz_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00089 = function() {
	this.initialize(img.ylbjq_bl_zz_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00090 = function() {
	this.initialize(img.ylbjq_bl_zz_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00091 = function() {
	this.initialize(img.ylbjq_bl_zz_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00092 = function() {
	this.initialize(img.ylbjq_bl_zz_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00093 = function() {
	this.initialize(img.ylbjq_bl_zz_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00094 = function() {
	this.initialize(img.ylbjq_bl_zz_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00095 = function() {
	this.initialize(img.ylbjq_bl_zz_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00096 = function() {
	this.initialize(img.ylbjq_bl_zz_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00097 = function() {
	this.initialize(img.ylbjq_bl_zz_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00098 = function() {
	this.initialize(img.ylbjq_bl_zz_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00099 = function() {
	this.initialize(img.ylbjq_bl_zz_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00100 = function() {
	this.initialize(img.ylbjq_bl_zz_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00101 = function() {
	this.initialize(img.ylbjq_bl_zz_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00102 = function() {
	this.initialize(img.ylbjq_bl_zz_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00103 = function() {
	this.initialize(img.ylbjq_bl_zz_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00104 = function() {
	this.initialize(img.ylbjq_bl_zz_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00105 = function() {
	this.initialize(img.ylbjq_bl_zz_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00106 = function() {
	this.initialize(img.ylbjq_bl_zz_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00107 = function() {
	this.initialize(img.ylbjq_bl_zz_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00108 = function() {
	this.initialize(img.ylbjq_bl_zz_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00109 = function() {
	this.initialize(img.ylbjq_bl_zz_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00110 = function() {
	this.initialize(img.ylbjq_bl_zz_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00111 = function() {
	this.initialize(img.ylbjq_bl_zz_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00112 = function() {
	this.initialize(img.ylbjq_bl_zz_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00113 = function() {
	this.initialize(img.ylbjq_bl_zz_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00114 = function() {
	this.initialize(img.ylbjq_bl_zz_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00115 = function() {
	this.initialize(img.ylbjq_bl_zz_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00116 = function() {
	this.initialize(img.ylbjq_bl_zz_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00117 = function() {
	this.initialize(img.ylbjq_bl_zz_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00118 = function() {
	this.initialize(img.ylbjq_bl_zz_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00119 = function() {
	this.initialize(img.ylbjq_bl_zz_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00120 = function() {
	this.initialize(img.ylbjq_bl_zz_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00121 = function() {
	this.initialize(img.ylbjq_bl_zz_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00122 = function() {
	this.initialize(img.ylbjq_bl_zz_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00123 = function() {
	this.initialize(img.ylbjq_bl_zz_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00124 = function() {
	this.initialize(img.ylbjq_bl_zz_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00125 = function() {
	this.initialize(img.ylbjq_bl_zz_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00126 = function() {
	this.initialize(img.ylbjq_bl_zz_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00127 = function() {
	this.initialize(img.ylbjq_bl_zz_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00128 = function() {
	this.initialize(img.ylbjq_bl_zz_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00129 = function() {
	this.initialize(img.ylbjq_bl_zz_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00130 = function() {
	this.initialize(img.ylbjq_bl_zz_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00131 = function() {
	this.initialize(img.ylbjq_bl_zz_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00132 = function() {
	this.initialize(img.ylbjq_bl_zz_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00133 = function() {
	this.initialize(img.ylbjq_bl_zz_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00134 = function() {
	this.initialize(img.ylbjq_bl_zz_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00135 = function() {
	this.initialize(img.ylbjq_bl_zz_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00136 = function() {
	this.initialize(img.ylbjq_bl_zz_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00137 = function() {
	this.initialize(img.ylbjq_bl_zz_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00138 = function() {
	this.initialize(img.ylbjq_bl_zz_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00139 = function() {
	this.initialize(img.ylbjq_bl_zz_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00140 = function() {
	this.initialize(img.ylbjq_bl_zz_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00141 = function() {
	this.initialize(img.ylbjq_bl_zz_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00142 = function() {
	this.initialize(img.ylbjq_bl_zz_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00143 = function() {
	this.initialize(img.ylbjq_bl_zz_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00144 = function() {
	this.initialize(img.ylbjq_bl_zz_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00145 = function() {
	this.initialize(img.ylbjq_bl_zz_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00146 = function() {
	this.initialize(img.ylbjq_bl_zz_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00147 = function() {
	this.initialize(img.ylbjq_bl_zz_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00148 = function() {
	this.initialize(img.ylbjq_bl_zz_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00149 = function() {
	this.initialize(img.ylbjq_bl_zz_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00150 = function() {
	this.initialize(img.ylbjq_bl_zz_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00151 = function() {
	this.initialize(img.ylbjq_bl_zz_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00152 = function() {
	this.initialize(img.ylbjq_bl_zz_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00153 = function() {
	this.initialize(img.ylbjq_bl_zz_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00154 = function() {
	this.initialize(img.ylbjq_bl_zz_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00155 = function() {
	this.initialize(img.ylbjq_bl_zz_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00156 = function() {
	this.initialize(img.ylbjq_bl_zz_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00157 = function() {
	this.initialize(img.ylbjq_bl_zz_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00158 = function() {
	this.initialize(img.ylbjq_bl_zz_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00159 = function() {
	this.initialize(img.ylbjq_bl_zz_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00160 = function() {
	this.initialize(img.ylbjq_bl_zz_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00161 = function() {
	this.initialize(img.ylbjq_bl_zz_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00162 = function() {
	this.initialize(img.ylbjq_bl_zz_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00163 = function() {
	this.initialize(img.ylbjq_bl_zz_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00164 = function() {
	this.initialize(img.ylbjq_bl_zz_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00165 = function() {
	this.initialize(img.ylbjq_bl_zz_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00166 = function() {
	this.initialize(img.ylbjq_bl_zz_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00167 = function() {
	this.initialize(img.ylbjq_bl_zz_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00168 = function() {
	this.initialize(img.ylbjq_bl_zz_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00169 = function() {
	this.initialize(img.ylbjq_bl_zz_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00170 = function() {
	this.initialize(img.ylbjq_bl_zz_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00171 = function() {
	this.initialize(img.ylbjq_bl_zz_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00172 = function() {
	this.initialize(img.ylbjq_bl_zz_00172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00173 = function() {
	this.initialize(img.ylbjq_bl_zz_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00174 = function() {
	this.initialize(img.ylbjq_bl_zz_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00175 = function() {
	this.initialize(img.ylbjq_bl_zz_00175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00176 = function() {
	this.initialize(img.ylbjq_bl_zz_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00177 = function() {
	this.initialize(img.ylbjq_bl_zz_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00178 = function() {
	this.initialize(img.ylbjq_bl_zz_00178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00179 = function() {
	this.initialize(img.ylbjq_bl_zz_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00180 = function() {
	this.initialize(img.ylbjq_bl_zz_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00181 = function() {
	this.initialize(img.ylbjq_bl_zz_00181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00182 = function() {
	this.initialize(img.ylbjq_bl_zz_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00183 = function() {
	this.initialize(img.ylbjq_bl_zz_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00184 = function() {
	this.initialize(img.ylbjq_bl_zz_00184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00185 = function() {
	this.initialize(img.ylbjq_bl_zz_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00186 = function() {
	this.initialize(img.ylbjq_bl_zz_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00187 = function() {
	this.initialize(img.ylbjq_bl_zz_00187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00188 = function() {
	this.initialize(img.ylbjq_bl_zz_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00189 = function() {
	this.initialize(img.ylbjq_bl_zz_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00190 = function() {
	this.initialize(img.ylbjq_bl_zz_00190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00191 = function() {
	this.initialize(img.ylbjq_bl_zz_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00192 = function() {
	this.initialize(img.ylbjq_bl_zz_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00193 = function() {
	this.initialize(img.ylbjq_bl_zz_00193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00194 = function() {
	this.initialize(img.ylbjq_bl_zz_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00195 = function() {
	this.initialize(img.ylbjq_bl_zz_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00196 = function() {
	this.initialize(img.ylbjq_bl_zz_00196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00197 = function() {
	this.initialize(img.ylbjq_bl_zz_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00198 = function() {
	this.initialize(img.ylbjq_bl_zz_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00199 = function() {
	this.initialize(img.ylbjq_bl_zz_00199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.ylbjq_bl_zz_00200 = function() {
	this.initialize(img.ylbjq_bl_zz_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.tabKuang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F5158").s().p("ADtCfICpk9IBeAAIipE9gAjcCfICpk9IBcAAIinE9gAnzCfICpk9IBSAAIipE9g");
	this.shape.setTransform(53.5,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56646B").s().p("AEVCfICpk9IB6AAIipE9gAotCfQgKAAAAgKIAAkpQAAgKAKAAICtAAIipE9g");
	this.shape_1.setTransform(58.9,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3A43").s().p("AH8CVIgDAAIjHAAICpk+IAyAAQALAAAAAKIAAESIABAFIAcAygAkRCVICok+IFsAAIipE+gAo0CVICpk+IDFAAIipE+g");
	this.shape_2.setTransform(68.2,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF8D2C").s().p("AJzDCIhSgdIyBAAIgHAAQgYgDAAgcIAAkpQAAgfAfAAISXAAQAfAAAAAfIAAEPIApBHQACADgBADIgCAGQgCADgEABIgCAAIgDgBgAp5ijIAAEpQAAAXAVACIAEAAISBAAIACAAIBSAeIAAAAIACAAIACgBIABgEIAAgCIgphHIgBgDIAAkPQAAgZgZAAIyXAAQgZAAAAAZg");
	this.shape_3.setTransform(64,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AJ2C9IgBAAIhSgdIgCgBIyBAAIgDAAQgWgCAAgXIAAkpQAAgZAZAAISXAAQAZAAAAAZIAAEPIABAEIApBGIAAADIgBADIgCABIgBAAgAJeCqIADAAIADgBIABgDIgBgDIgcgxIgCgDIAAkSQAAgQgPAAIyXAAQgQAAAAAQIAAEpQAAAQAQAAISCAAIADABIAAAAg");
	this.shape_4.setTransform(64,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BD8228").s().p("AJkCvIg5gUIAAAAIgDgBIyCAAQgQAAAAgPIAAkqQAAgPAQAAISXAAQAPAAAAAPIAAETIACACIAcAyIABACIgBADIgDACIgDAAgApkifIAAEqQAAAKAKAAIAEAAIBRAAIDGAAIBeAAIFqAAIBfAAIB6AAIDGAAIAEABIA5AUIgcgxIgBgFIAAkTQAAgJgLgBIgyAAIh7AAIhdAAIlsAAIhdAAIjGAAIhRAAIitAAQgKABAAAJg");
	this.shape_5.setTransform(63.4,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.1,39);


(lib.tab2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF9900","#FFB600","#FFE800","#FFF050","#FFB100"],[0.584,0.671,0.749,0.875,1],-0.3,0.2,0,-0.3,0.2,22.7).s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQAQAQAMASQAmA3AABFQAABGgmA3QgMASgQAQQhCBChdAAQhcAAhChCgAhkhjQgpApAAA7QAAA6ApAqQAqApA6AAQA7AAApgpQAqgqAAg6QAAg7gqgpQgpgqg7AAQg6AAgqAqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.tab1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0)","#FFFF00","rgba(255,255,0,0)"],[0.267,0.588,0.941],-0.3,0.2,0,-0.3,0.2,30.9).s().p("AjkDlQhfhfAAiGQAAiFBfhfQBfhfCFAAQCGAABfBfQAXAXARAZQA3BPAABlQAABmg3BPQgRAYgXAYQhfBfiGAAQiFAAhfhfgAguguQgTAUAAAaQAAAbATAUQATATAbAAQAbAAATgTQAUgUAAgbQAAgagUgUQgTgTgbAAQgbAAgTATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.4,64.8,64.8);


(lib.shuomingBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("A05ldMApzAAAIAAK7MgpzAAAg");
	this.shape.setTransform(98.4,24.4,0.736,0.697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A05FeIAAq7MApzAAAIAAK7g");
	this.shape_1.setTransform(98.4,24.4,0.736,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,198.9,50.8);


(lib.dragBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("Egk5AkYMAAAhIvMBJzAAAMAAABIvg");
	this.shape.setTransform(236.2,232.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tabMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.tab2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},14).to({startPosition:0},15).wait(1));

	// 图层 3
	this.instance_1 = new lib.tab1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.4,64.8,64.8);


(lib.bl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.tabMC();
	this.instance.parent = this;
	this.instance.setTransform(157.1,135.4,0.611,0.611,0,0,0,7,7);

	this.instance_1 = new lib.tabMC();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-94.8,-78.8,0.611,0.611,0,0,0,-7.2,-5.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPBGQAPgQAFgQQAGgPAAggIAAhFIAOAAIAAAtIA8AAIAAgwIAOAAIAAAwIAtAAIAAANIh3AAIgBAcIBSAAIAABJIgOAAIAAg8IhFAAQgDAkgZAZIgKgMg");
	this.shape.setTransform(269.9,95.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBSIAAhbIgoAAIAAgOIAoAAIAAg6IAPAAIAAA6IAqAAIAAAOIgqAAIAABbgAhOA5IAAh4IA2AAIAAB1IgOAAIAAgMIgaAAIAAAPgAhAAdIAaAAIAAhPIgaAAg");
	this.shape_1.setTransform(252.7,95.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBQIAAhQIBYAAIAABQIgMAAIAAgLIhAAAIAAALgAgLA5IBAAAIAAgtIhAAAgAhMBLQALgeAJgkIANAGIgSBAgAhTgaIAIgKIAeAYIgKAKQgSgRgKgHgAglgOQANgIAFgIQAFgIAAgQIAAgWIBGAAIAAAqQAAAJAJAAIATAAIgDANIgSAAQgUgBAAgTIAAggIgsAAIAAALQAAAUgGAKQgGAKgPAKIgJgLgAhLhGIAIgKQAQALARANIgKALIgfgZg");
	this.shape_2.setTransform(234.7,95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBTIAAikIAPAAIAAA6IAGgHIArAhIgKAMIgngiIAABmgAhOBGQAggTARgdQgLgKgPgLIAJgJIAYARQAKgUAEgcIgmAAQgLAdgUAcIgHgOQAZglAMgxIAPAEIgJAaIAtAAIAAANQgHBShCAnIgJgMg");
	this.shape_3.setTransform(217.1,95.5);

	this.instance_2 = new lib.tabKuang("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(321.4,80.3,1.146,1.146,0,0,180,-4.1,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhPBGQAPgQAFgQQAGgPAAggIAAhFIAOAAIAAAtIA8AAIAAgwIAOAAIAAAwIAtAAIAAANIh3AAIgBAcIBSAAIAABJIgOAAIAAg8IhFAAQgDAkgZAZIgKgMg");
	this.shape_4.setTransform(-151.6,-113.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBTIAAhcIgoAAIAAgOIAoAAIAAg7IAPAAIAAA7IAqAAIAAAOIgqAAIAABcgAhOA5IAAh4IA2AAIAAB2IgOAAIAAgNIgaAAIAAAPgAhAAdIAaAAIAAhPIgaAAg");
	this.shape_5.setTransform(-168.9,-113.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBTIAAibIA8AAIAAAOQgGARgOAbQAYASAAAXQAAAdgXACQgJABgOgBIgCgPQAMACAJAAQAPAAgCgUQAAgSgZgSQALgWALgaIgiAAIAACOgAhGBSIAAhEIBIAAIAABEIgMAAIAAgMIgvAAIAAAMgAg5A6IAvAAIAAghIgvAAgAhSgDIAAgLIAdAAIgOgYIAKgHIAQAYIgMAHIAZAAQAKgRAGgPIAMAHIgPAZIAcAAIAAALgAhOgvIAAgLIAqAAQgDgIgHgLIALgFQAIAMADAIIgIAEIAqAAIAAALg");
	this.shape_6.setTransform(-186.9,-113.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEBRIAAiEIA+AAIAAgdIANAAIAAAdIA+AAIAABuQAAAVgVAAIgbgBIgDgOIAbABQAKABAAgLIAAheIgwAAQgBAPgDAMQAeAXASASIgKALQgSgUgXgVQgLAZggASIgKgMQAcgPAKgQQAIgNABgZIgwAAIAAB3g");
	this.shape_7.setTransform(-204.5,-113.3);

	this.instance_3 = new lib.tabKuang("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-254.4,-137.3,1.146,1.146,0,0,0,-3.4,-2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANBTIAAgjIgYAAIAAgMIAYAAIAAhGIgBAAQgOA4gkAhIgJgLQAggeAQgwIgnAAIAAgNIAzAAIAAgiIAMAAIAAAiIA2AAIAAANIgrAAQAQAzAhAWIgKANQgigagQg8IAABGIAZAAIAAAMIgZAAIAAAjgAg9BTIAAhfQgIAMgJAMIgGgMQAZgkAMgtIANADQgHAWgIASIAAB5g");
	this.shape_8.setTransform(244.9,69.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhSBHQAbgGAJgKQAJgJAAgSIAAgNIBEAAIAAAnQAAAMALAAIANAAQAKAAACgLIADgWIANAGQgCANgCAJQgEAQgRABIgTAAQgVAAAAgWIAAgfIgqAAIAAAFQAAAUgLANQgLANgbAIIgJgNgABBATIAAgTIh/AAIAAATIgNAAIAAgeICZAAIAAAegAhCgZIAAgMIA8AAIAAgQIhIAAIAAgLIBIAAIAAgSIANAAIAAASIBKAAIAAALIhKAAIAAAQIA8AAIAAAMg");
	this.shape_9.setTransform(227.3,69.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBTIAAikIAOAAIAAA7IAHgIIArAhIgKAMIgogiIAABmgAhPBGQAhgTASgdQgMgKgPgLIAJgJIAYARQALgUACgcIglAAQgLAegTAbIgIgOQAZglANgxIANAEIgIAaIAuAAIAAANQgIBShDAnIgJgMg");
	this.shape_10.setTransform(209.9,69.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBTIAAgkIgjAFIgBgNIAkgEIAAgYIghAAIAAgKIAPgtIgRAAIAAgMIAVAAIAHgaIANADIgHAXIAlAAIAAAMIgpAAIgPAsIAUAAIAAgkIALAAIAAAkIAWAAIAAALIgWAAIAAAXIAYgDIAAAMIgYADIAAAlgAATBNQgTAAAAgTIAAhLIALAAIAAAkQAXgNATgRIAKAIQgaAXgaANIAAAWQAAAKANAAIAWAAQAMAAACgKIACgZIANAFIgDAYQgDASgUAAgAgYgVQAdgXASglIAQAAIgDAFQATAlAcAOIgJALQgbgQgTghQgTAggYATIgJgJg");
	this.shape_11.setTransform(192.3,69.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBNIgDgNIAWABQAJAAAAgJIAAg8IgiAAIAAAFIgNAAIAAghIgXASIgIgMQAbgPATgYIgsAAIAAgLICeAAIAAALIhiAAIgOARIBeAAIAAAxIgNAAIAAgFIgnAAIAAAGQAJAPALALQAUgLAQgLIAIAKIgjAUQARANAdAJQgFAFgFAHQgsgRgVggIAAAlQAAATgRAAIgXAAgAglgPIBVAAIAAgWIhVAAgAhTA9QAjgOARgXIgqAAIAAgLIA3AAIAAALQgQAcgpAVQgDgGgFgGg");
	this.shape_12.setTransform(174.8,69.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA7BSIAAgHIhBAAIAAAHIgLAAIAAg9IBXAAIAAA9gAgGBBIBBAAIAAgMIhBAAgAgGAsIBBAAIAAgOIhBAAgAg6BSIAAhcQgJAegKARIgFgOQAOgZAIgiIgUAAIAAgLIAWAAIAAgiIAMAAIAAAiIASAAIAAALIgSAAIAAAYIAFgFIAQASIgJAHIgMgQIAABagABCAMIAAgEIhOAAIAAAEIgLAAIAAg4IAdAAIAAgNIgjAAIAAgKIAjAAIAAgOIALAAIAAAOIATAAIAAgOIAKAAIAAAOIAlAAIAAAKIglAAIAAANIAeAAIAAA4gAAuAAIAUAAIAAgNIgUAAgAARAAIATAAIAAgNIgTAAgAgMAAIASAAIAAgNIgSAAgAAugVIAUAAIAAgOIgUAAgAARgVIATAAIAAgOIgTAAgAgMgVIASAAIAAgOIgSAAgAARgsIATAAIAAgNIgTAAg");
	this.shape_13.setTransform(-108.5,-73.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA6BOIAAgNIhzAAIAAANIgNAAIAAibIA4AAIAABFIAdAAIAAhFIA4AAIAACbgAg5A0IBzAAIAAh0IgeAAIAABEIg3AAIAAhEIgeAAg");
	this.shape_14.setTransform(-126,-72.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:-254.4,y:-137.3}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2,p:{x:321.4,y:80.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{x:-94.8,y:-78.8}},{t:this.instance,p:{x:157.1,y:135.4}}]}).to({state:[]},15).to({state:[{t:this.instance_3,p:{x:-181.4,y:-97.3}},{t:this.shape_14},{t:this.shape_13},{t:this.instance_2,p:{x:279,y:54.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1,p:{x:-21.8,y:-38.8}},{t:this.instance,p:{x:114.7,y:109.5}}]},75).to({state:[]},28).to({state:[{t:this.instance_3,p:{x:-254.4,y:-137.3}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2,p:{x:321.4,y:80.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{x:-94.8,y:-78.8}},{t:this.instance,p:{x:157.1,y:135.4}}]},67).wait(16));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgudAqGMAAAhULMBc7AAAMAAABULg");
	mask.setTransform(-1.2,-4.7);

	// 图层 1
	this.instance_4 = new lib.ylbjq_bl_zz_00200();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-502,-284);

	this.instance_5 = new lib.ylbjq_bl_zz_00199();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-502,-284);

	this.instance_6 = new lib.ylbjq_bl_zz_00198();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-502,-284);

	this.instance_7 = new lib.ylbjq_bl_zz_00197();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-502,-284);

	this.instance_8 = new lib.ylbjq_bl_zz_00196();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-502,-284);

	this.instance_9 = new lib.ylbjq_bl_zz_00195();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-502,-284);

	this.instance_10 = new lib.ylbjq_bl_zz_00194();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-502,-284);

	this.instance_11 = new lib.ylbjq_bl_zz_00193();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-502,-284);

	this.instance_12 = new lib.ylbjq_bl_zz_00192();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-502,-284);

	this.instance_13 = new lib.ylbjq_bl_zz_00191();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-502,-284);

	this.instance_14 = new lib.ylbjq_bl_zz_00190();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-502,-284);

	this.instance_15 = new lib.ylbjq_bl_zz_00189();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-502,-284);

	this.instance_16 = new lib.ylbjq_bl_zz_00188();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-502,-284);

	this.instance_17 = new lib.ylbjq_bl_zz_00187();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-502,-284);

	this.instance_18 = new lib.ylbjq_bl_zz_00186();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-502,-284);

	this.instance_19 = new lib.ylbjq_bl_zz_00185();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-502,-284);

	this.instance_20 = new lib.ylbjq_bl_zz_00184();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-502,-284);

	this.instance_21 = new lib.ylbjq_bl_zz_00183();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-502,-284);

	this.instance_22 = new lib.ylbjq_bl_zz_00182();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-502,-284);

	this.instance_23 = new lib.ylbjq_bl_zz_00181();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-502,-284);

	this.instance_24 = new lib.ylbjq_bl_zz_00180();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-502,-284);

	this.instance_25 = new lib.ylbjq_bl_zz_00179();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-502,-284);

	this.instance_26 = new lib.ylbjq_bl_zz_00178();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-502,-284);

	this.instance_27 = new lib.ylbjq_bl_zz_00177();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-502,-284);

	this.instance_28 = new lib.ylbjq_bl_zz_00176();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-502,-284);

	this.instance_29 = new lib.ylbjq_bl_zz_00175();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-502,-284);

	this.instance_30 = new lib.ylbjq_bl_zz_00174();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-502,-284);

	this.instance_31 = new lib.ylbjq_bl_zz_00173();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-502,-284);

	this.instance_32 = new lib.ylbjq_bl_zz_00172();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-502,-284);

	this.instance_33 = new lib.ylbjq_bl_zz_00171();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-502,-284);

	this.instance_34 = new lib.ylbjq_bl_zz_00170();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-502,-284);

	this.instance_35 = new lib.ylbjq_bl_zz_00169();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-502,-284);

	this.instance_36 = new lib.ylbjq_bl_zz_00168();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-502,-284);

	this.instance_37 = new lib.ylbjq_bl_zz_00167();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-502,-284);

	this.instance_38 = new lib.ylbjq_bl_zz_00166();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-502,-284);

	this.instance_39 = new lib.ylbjq_bl_zz_00165();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-502,-284);

	this.instance_40 = new lib.ylbjq_bl_zz_00164();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-502,-284);

	this.instance_41 = new lib.ylbjq_bl_zz_00163();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-502,-284);

	this.instance_42 = new lib.ylbjq_bl_zz_00162();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-502,-284);

	this.instance_43 = new lib.ylbjq_bl_zz_00161();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-502,-284);

	this.instance_44 = new lib.ylbjq_bl_zz_00160();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-502,-284);

	this.instance_45 = new lib.ylbjq_bl_zz_00159();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-502,-284);

	this.instance_46 = new lib.ylbjq_bl_zz_00158();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-502,-284);

	this.instance_47 = new lib.ylbjq_bl_zz_00157();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-502,-284);

	this.instance_48 = new lib.ylbjq_bl_zz_00156();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-502,-284);

	this.instance_49 = new lib.ylbjq_bl_zz_00155();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-502,-284);

	this.instance_50 = new lib.ylbjq_bl_zz_00154();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-502,-284);

	this.instance_51 = new lib.ylbjq_bl_zz_00153();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-502,-284);

	this.instance_52 = new lib.ylbjq_bl_zz_00152();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-502,-284);

	this.instance_53 = new lib.ylbjq_bl_zz_00151();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-502,-284);

	this.instance_54 = new lib.ylbjq_bl_zz_00150();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-502,-284);

	this.instance_55 = new lib.ylbjq_bl_zz_00149();
	this.instance_55.parent = this;
	this.instance_55.setTransform(-502,-284);

	this.instance_56 = new lib.ylbjq_bl_zz_00148();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-502,-284);

	this.instance_57 = new lib.ylbjq_bl_zz_00147();
	this.instance_57.parent = this;
	this.instance_57.setTransform(-502,-284);

	this.instance_58 = new lib.ylbjq_bl_zz_00146();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-502,-284);

	this.instance_59 = new lib.ylbjq_bl_zz_00145();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-502,-284);

	this.instance_60 = new lib.ylbjq_bl_zz_00144();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-502,-284);

	this.instance_61 = new lib.ylbjq_bl_zz_00143();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-502,-284);

	this.instance_62 = new lib.ylbjq_bl_zz_00142();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-502,-284);

	this.instance_63 = new lib.ylbjq_bl_zz_00141();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-502,-284);

	this.instance_64 = new lib.ylbjq_bl_zz_00140();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-502,-284);

	this.instance_65 = new lib.ylbjq_bl_zz_00139();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-502,-284);

	this.instance_66 = new lib.ylbjq_bl_zz_00138();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-502,-284);

	this.instance_67 = new lib.ylbjq_bl_zz_00137();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-502,-284);

	this.instance_68 = new lib.ylbjq_bl_zz_00136();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-502,-284);

	this.instance_69 = new lib.ylbjq_bl_zz_00135();
	this.instance_69.parent = this;
	this.instance_69.setTransform(-502,-284);

	this.instance_70 = new lib.ylbjq_bl_zz_00134();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-502,-284);

	this.instance_71 = new lib.ylbjq_bl_zz_00133();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-502,-284);

	this.instance_72 = new lib.ylbjq_bl_zz_00132();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-502,-284);

	this.instance_73 = new lib.ylbjq_bl_zz_00131();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-502,-284);

	this.instance_74 = new lib.ylbjq_bl_zz_00130();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-502,-284);

	this.instance_75 = new lib.ylbjq_bl_zz_00129();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-502,-284);

	this.instance_76 = new lib.ylbjq_bl_zz_00128();
	this.instance_76.parent = this;
	this.instance_76.setTransform(-502,-284);

	this.instance_77 = new lib.ylbjq_bl_zz_00127();
	this.instance_77.parent = this;
	this.instance_77.setTransform(-502,-284);

	this.instance_78 = new lib.ylbjq_bl_zz_00126();
	this.instance_78.parent = this;
	this.instance_78.setTransform(-502,-284);

	this.instance_79 = new lib.ylbjq_bl_zz_00125();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-502,-284);

	this.instance_80 = new lib.ylbjq_bl_zz_00124();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-502,-284);

	this.instance_81 = new lib.ylbjq_bl_zz_00123();
	this.instance_81.parent = this;
	this.instance_81.setTransform(-502,-284);

	this.instance_82 = new lib.ylbjq_bl_zz_00122();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-502,-284);

	this.instance_83 = new lib.ylbjq_bl_zz_00121();
	this.instance_83.parent = this;
	this.instance_83.setTransform(-502,-284);

	this.instance_84 = new lib.ylbjq_bl_zz_00120();
	this.instance_84.parent = this;
	this.instance_84.setTransform(-502,-284);

	this.instance_85 = new lib.ylbjq_bl_zz_00119();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-502,-284);

	this.instance_86 = new lib.ylbjq_bl_zz_00118();
	this.instance_86.parent = this;
	this.instance_86.setTransform(-502,-284);

	this.instance_87 = new lib.ylbjq_bl_zz_00117();
	this.instance_87.parent = this;
	this.instance_87.setTransform(-502,-284);

	this.instance_88 = new lib.ylbjq_bl_zz_00116();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-502,-284);

	this.instance_89 = new lib.ylbjq_bl_zz_00115();
	this.instance_89.parent = this;
	this.instance_89.setTransform(-502,-284);

	this.instance_90 = new lib.ylbjq_bl_zz_00114();
	this.instance_90.parent = this;
	this.instance_90.setTransform(-502,-284);

	this.instance_91 = new lib.ylbjq_bl_zz_00113();
	this.instance_91.parent = this;
	this.instance_91.setTransform(-502,-284);

	this.instance_92 = new lib.ylbjq_bl_zz_00112();
	this.instance_92.parent = this;
	this.instance_92.setTransform(-502,-284);

	this.instance_93 = new lib.ylbjq_bl_zz_00111();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-502,-284);

	this.instance_94 = new lib.ylbjq_bl_zz_00110();
	this.instance_94.parent = this;
	this.instance_94.setTransform(-502,-284);

	this.instance_95 = new lib.ylbjq_bl_zz_00109();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-502,-284);

	this.instance_96 = new lib.ylbjq_bl_zz_00108();
	this.instance_96.parent = this;
	this.instance_96.setTransform(-502,-284);

	this.instance_97 = new lib.ylbjq_bl_zz_00107();
	this.instance_97.parent = this;
	this.instance_97.setTransform(-502,-284);

	this.instance_98 = new lib.ylbjq_bl_zz_00106();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-502,-284);

	this.instance_99 = new lib.ylbjq_bl_zz_00105();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-502,-284);

	this.instance_100 = new lib.ylbjq_bl_zz_00104();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-502,-284);

	this.instance_101 = new lib.ylbjq_bl_zz_00103();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-502,-284);

	this.instance_102 = new lib.ylbjq_bl_zz_00102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(-502,-284);

	this.instance_103 = new lib.ylbjq_bl_zz_00101();
	this.instance_103.parent = this;
	this.instance_103.setTransform(-502,-284);

	this.instance_104 = new lib.ylbjq_bl_zz_00100();
	this.instance_104.parent = this;
	this.instance_104.setTransform(-502,-284);

	this.instance_105 = new lib.ylbjq_bl_zz_00099();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-502,-284);

	this.instance_106 = new lib.ylbjq_bl_zz_00098();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-502,-284);

	this.instance_107 = new lib.ylbjq_bl_zz_00097();
	this.instance_107.parent = this;
	this.instance_107.setTransform(-502,-284);

	this.instance_108 = new lib.ylbjq_bl_zz_00096();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-502,-284);

	this.instance_109 = new lib.ylbjq_bl_zz_00095();
	this.instance_109.parent = this;
	this.instance_109.setTransform(-502,-284);

	this.instance_110 = new lib.ylbjq_bl_zz_00094();
	this.instance_110.parent = this;
	this.instance_110.setTransform(-502,-284);

	this.instance_111 = new lib.ylbjq_bl_zz_00093();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-502,-284);

	this.instance_112 = new lib.ylbjq_bl_zz_00092();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-502,-284);

	this.instance_113 = new lib.ylbjq_bl_zz_00091();
	this.instance_113.parent = this;
	this.instance_113.setTransform(-502,-284);

	this.instance_114 = new lib.ylbjq_bl_zz_00090();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-502,-284);

	this.instance_115 = new lib.ylbjq_bl_zz_00089();
	this.instance_115.parent = this;
	this.instance_115.setTransform(-502,-284);

	this.instance_116 = new lib.ylbjq_bl_zz_00088();
	this.instance_116.parent = this;
	this.instance_116.setTransform(-502,-284);

	this.instance_117 = new lib.ylbjq_bl_zz_00087();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-502,-284);

	this.instance_118 = new lib.ylbjq_bl_zz_00086();
	this.instance_118.parent = this;
	this.instance_118.setTransform(-502,-284);

	this.instance_119 = new lib.ylbjq_bl_zz_00085();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-502,-284);

	this.instance_120 = new lib.ylbjq_bl_zz_00084();
	this.instance_120.parent = this;
	this.instance_120.setTransform(-502,-284);

	this.instance_121 = new lib.ylbjq_bl_zz_00083();
	this.instance_121.parent = this;
	this.instance_121.setTransform(-502,-284);

	this.instance_122 = new lib.ylbjq_bl_zz_00082();
	this.instance_122.parent = this;
	this.instance_122.setTransform(-502,-284);

	this.instance_123 = new lib.ylbjq_bl_zz_00081();
	this.instance_123.parent = this;
	this.instance_123.setTransform(-502,-284);

	this.instance_124 = new lib.ylbjq_bl_zz_00080();
	this.instance_124.parent = this;
	this.instance_124.setTransform(-502,-284);

	this.instance_125 = new lib.ylbjq_bl_zz_00079();
	this.instance_125.parent = this;
	this.instance_125.setTransform(-502,-284);

	this.instance_126 = new lib.ylbjq_bl_zz_00078();
	this.instance_126.parent = this;
	this.instance_126.setTransform(-502,-284);

	this.instance_127 = new lib.ylbjq_bl_zz_00077();
	this.instance_127.parent = this;
	this.instance_127.setTransform(-502,-284);

	this.instance_128 = new lib.ylbjq_bl_zz_00076();
	this.instance_128.parent = this;
	this.instance_128.setTransform(-502,-284);

	this.instance_129 = new lib.ylbjq_bl_zz_00075();
	this.instance_129.parent = this;
	this.instance_129.setTransform(-502,-284);

	this.instance_130 = new lib.ylbjq_bl_zz_00074();
	this.instance_130.parent = this;
	this.instance_130.setTransform(-502,-284);

	this.instance_131 = new lib.ylbjq_bl_zz_00073();
	this.instance_131.parent = this;
	this.instance_131.setTransform(-502,-284);

	this.instance_132 = new lib.ylbjq_bl_zz_00072();
	this.instance_132.parent = this;
	this.instance_132.setTransform(-502,-284);

	this.instance_133 = new lib.ylbjq_bl_zz_00071();
	this.instance_133.parent = this;
	this.instance_133.setTransform(-502,-284);

	this.instance_134 = new lib.ylbjq_bl_zz_00070();
	this.instance_134.parent = this;
	this.instance_134.setTransform(-502,-284);

	this.instance_135 = new lib.ylbjq_bl_zz_00069();
	this.instance_135.parent = this;
	this.instance_135.setTransform(-502,-284);

	this.instance_136 = new lib.ylbjq_bl_zz_00068();
	this.instance_136.parent = this;
	this.instance_136.setTransform(-502,-284);

	this.instance_137 = new lib.ylbjq_bl_zz_00067();
	this.instance_137.parent = this;
	this.instance_137.setTransform(-502,-284);

	this.instance_138 = new lib.ylbjq_bl_zz_00066();
	this.instance_138.parent = this;
	this.instance_138.setTransform(-502,-284);

	this.instance_139 = new lib.ylbjq_bl_zz_00065();
	this.instance_139.parent = this;
	this.instance_139.setTransform(-502,-284);

	this.instance_140 = new lib.ylbjq_bl_zz_00064();
	this.instance_140.parent = this;
	this.instance_140.setTransform(-502,-284);

	this.instance_141 = new lib.ylbjq_bl_zz_00063();
	this.instance_141.parent = this;
	this.instance_141.setTransform(-502,-284);

	this.instance_142 = new lib.ylbjq_bl_zz_00062();
	this.instance_142.parent = this;
	this.instance_142.setTransform(-502,-284);

	this.instance_143 = new lib.ylbjq_bl_zz_00061();
	this.instance_143.parent = this;
	this.instance_143.setTransform(-502,-284);

	this.instance_144 = new lib.ylbjq_bl_zz_00060();
	this.instance_144.parent = this;
	this.instance_144.setTransform(-502,-284);

	this.instance_145 = new lib.ylbjq_bl_zz_00059();
	this.instance_145.parent = this;
	this.instance_145.setTransform(-502,-284);

	this.instance_146 = new lib.ylbjq_bl_zz_00058();
	this.instance_146.parent = this;
	this.instance_146.setTransform(-502,-284);

	this.instance_147 = new lib.ylbjq_bl_zz_00057();
	this.instance_147.parent = this;
	this.instance_147.setTransform(-502,-284);

	this.instance_148 = new lib.ylbjq_bl_zz_00056();
	this.instance_148.parent = this;
	this.instance_148.setTransform(-502,-284);

	this.instance_149 = new lib.ylbjq_bl_zz_00055();
	this.instance_149.parent = this;
	this.instance_149.setTransform(-502,-284);

	this.instance_150 = new lib.ylbjq_bl_zz_00054();
	this.instance_150.parent = this;
	this.instance_150.setTransform(-502,-284);

	this.instance_151 = new lib.ylbjq_bl_zz_00053();
	this.instance_151.parent = this;
	this.instance_151.setTransform(-502,-284);

	this.instance_152 = new lib.ylbjq_bl_zz_00052();
	this.instance_152.parent = this;
	this.instance_152.setTransform(-502,-284);

	this.instance_153 = new lib.ylbjq_bl_zz_00051();
	this.instance_153.parent = this;
	this.instance_153.setTransform(-502,-284);

	this.instance_154 = new lib.ylbjq_bl_zz_00050();
	this.instance_154.parent = this;
	this.instance_154.setTransform(-502,-284);

	this.instance_155 = new lib.ylbjq_bl_zz_00049();
	this.instance_155.parent = this;
	this.instance_155.setTransform(-502,-284);

	this.instance_156 = new lib.ylbjq_bl_zz_00048();
	this.instance_156.parent = this;
	this.instance_156.setTransform(-502,-284);

	this.instance_157 = new lib.ylbjq_bl_zz_00047();
	this.instance_157.parent = this;
	this.instance_157.setTransform(-502,-284);

	this.instance_158 = new lib.ylbjq_bl_zz_00046();
	this.instance_158.parent = this;
	this.instance_158.setTransform(-502,-284);

	this.instance_159 = new lib.ylbjq_bl_zz_00045();
	this.instance_159.parent = this;
	this.instance_159.setTransform(-502,-284);

	this.instance_160 = new lib.ylbjq_bl_zz_00044();
	this.instance_160.parent = this;
	this.instance_160.setTransform(-502,-284);

	this.instance_161 = new lib.ylbjq_bl_zz_00043();
	this.instance_161.parent = this;
	this.instance_161.setTransform(-502,-284);

	this.instance_162 = new lib.ylbjq_bl_zz_00042();
	this.instance_162.parent = this;
	this.instance_162.setTransform(-502,-284);

	this.instance_163 = new lib.ylbjq_bl_zz_00041();
	this.instance_163.parent = this;
	this.instance_163.setTransform(-502,-284);

	this.instance_164 = new lib.ylbjq_bl_zz_00040();
	this.instance_164.parent = this;
	this.instance_164.setTransform(-502,-284);

	this.instance_165 = new lib.ylbjq_bl_zz_00039();
	this.instance_165.parent = this;
	this.instance_165.setTransform(-502,-284);

	this.instance_166 = new lib.ylbjq_bl_zz_00038();
	this.instance_166.parent = this;
	this.instance_166.setTransform(-502,-284);

	this.instance_167 = new lib.ylbjq_bl_zz_00037();
	this.instance_167.parent = this;
	this.instance_167.setTransform(-502,-284);

	this.instance_168 = new lib.ylbjq_bl_zz_00036();
	this.instance_168.parent = this;
	this.instance_168.setTransform(-502,-284);

	this.instance_169 = new lib.ylbjq_bl_zz_00035();
	this.instance_169.parent = this;
	this.instance_169.setTransform(-502,-284);

	this.instance_170 = new lib.ylbjq_bl_zz_00034();
	this.instance_170.parent = this;
	this.instance_170.setTransform(-502,-284);

	this.instance_171 = new lib.ylbjq_bl_zz_00033();
	this.instance_171.parent = this;
	this.instance_171.setTransform(-502,-284);

	this.instance_172 = new lib.ylbjq_bl_zz_00032();
	this.instance_172.parent = this;
	this.instance_172.setTransform(-502,-284);

	this.instance_173 = new lib.ylbjq_bl_zz_00031();
	this.instance_173.parent = this;
	this.instance_173.setTransform(-502,-284);

	this.instance_174 = new lib.ylbjq_bl_zz_00030();
	this.instance_174.parent = this;
	this.instance_174.setTransform(-502,-284);

	this.instance_175 = new lib.ylbjq_bl_zz_00029();
	this.instance_175.parent = this;
	this.instance_175.setTransform(-502,-284);

	this.instance_176 = new lib.ylbjq_bl_zz_00028();
	this.instance_176.parent = this;
	this.instance_176.setTransform(-502,-284);

	this.instance_177 = new lib.ylbjq_bl_zz_00027();
	this.instance_177.parent = this;
	this.instance_177.setTransform(-502,-284);

	this.instance_178 = new lib.ylbjq_bl_zz_00026();
	this.instance_178.parent = this;
	this.instance_178.setTransform(-502,-284);

	this.instance_179 = new lib.ylbjq_bl_zz_00025();
	this.instance_179.parent = this;
	this.instance_179.setTransform(-502,-284);

	this.instance_180 = new lib.ylbjq_bl_zz_00024();
	this.instance_180.parent = this;
	this.instance_180.setTransform(-502,-284);

	this.instance_181 = new lib.ylbjq_bl_zz_00023();
	this.instance_181.parent = this;
	this.instance_181.setTransform(-502,-284);

	this.instance_182 = new lib.ylbjq_bl_zz_00022();
	this.instance_182.parent = this;
	this.instance_182.setTransform(-502,-284);

	this.instance_183 = new lib.ylbjq_bl_zz_00021();
	this.instance_183.parent = this;
	this.instance_183.setTransform(-502,-284);

	this.instance_184 = new lib.ylbjq_bl_zz_00020();
	this.instance_184.parent = this;
	this.instance_184.setTransform(-502,-284);

	this.instance_185 = new lib.ylbjq_bl_zz_00019();
	this.instance_185.parent = this;
	this.instance_185.setTransform(-502,-284);

	this.instance_186 = new lib.ylbjq_bl_zz_00018();
	this.instance_186.parent = this;
	this.instance_186.setTransform(-502,-284);

	this.instance_187 = new lib.ylbjq_bl_zz_00017();
	this.instance_187.parent = this;
	this.instance_187.setTransform(-502,-284);

	this.instance_188 = new lib.ylbjq_bl_zz_00016();
	this.instance_188.parent = this;
	this.instance_188.setTransform(-502,-284);

	this.instance_189 = new lib.ylbjq_bl_zz_00015();
	this.instance_189.parent = this;
	this.instance_189.setTransform(-502,-284);

	this.instance_190 = new lib.ylbjq_bl_zz_00014();
	this.instance_190.parent = this;
	this.instance_190.setTransform(-502,-284);

	this.instance_191 = new lib.ylbjq_bl_zz_00013();
	this.instance_191.parent = this;
	this.instance_191.setTransform(-502,-284);

	this.instance_192 = new lib.ylbjq_bl_zz_00012();
	this.instance_192.parent = this;
	this.instance_192.setTransform(-502,-284);

	this.instance_193 = new lib.ylbjq_bl_zz_00011();
	this.instance_193.parent = this;
	this.instance_193.setTransform(-502,-284);

	this.instance_194 = new lib.ylbjq_bl_zz_00010();
	this.instance_194.parent = this;
	this.instance_194.setTransform(-502,-284);

	this.instance_195 = new lib.ylbjq_bl_zz_00009();
	this.instance_195.parent = this;
	this.instance_195.setTransform(-502,-284);

	this.instance_196 = new lib.ylbjq_bl_zz_00008();
	this.instance_196.parent = this;
	this.instance_196.setTransform(-502,-284);

	this.instance_197 = new lib.ylbjq_bl_zz_00007();
	this.instance_197.parent = this;
	this.instance_197.setTransform(-502,-284);

	this.instance_198 = new lib.ylbjq_bl_zz_00006();
	this.instance_198.parent = this;
	this.instance_198.setTransform(-502,-284);

	this.instance_199 = new lib.ylbjq_bl_zz_00005();
	this.instance_199.parent = this;
	this.instance_199.setTransform(-502,-284);

	this.instance_200 = new lib.ylbjq_bl_zz_00004();
	this.instance_200.parent = this;
	this.instance_200.setTransform(-502,-284);

	this.instance_201 = new lib.ylbjq_bl_zz_00003();
	this.instance_201.parent = this;
	this.instance_201.setTransform(-502,-284);

	this.instance_202 = new lib.ylbjq_bl_zz_00002();
	this.instance_202.parent = this;
	this.instance_202.setTransform(-502,-284);

	this.instance_203 = new lib.ylbjq_bl_zz_00001();
	this.instance_203.parent = this;
	this.instance_203.setTransform(-502,-284);

	this.instance_204 = new lib.ylbjq_bl_zz_00000();
	this.instance_204.parent = this;
	this.instance_204.setTransform(-502,-284);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170,this.instance_171,this.instance_172,this.instance_173,this.instance_174,this.instance_175,this.instance_176,this.instance_177,this.instance_178,this.instance_179,this.instance_180,this.instance_181,this.instance_182,this.instance_183,this.instance_184,this.instance_185,this.instance_186,this.instance_187,this.instance_188,this.instance_189,this.instance_190,this.instance_191,this.instance_192,this.instance_193,this.instance_194,this.instance_195,this.instance_196,this.instance_197,this.instance_198,this.instance_199,this.instance_200,this.instance_201,this.instance_202,this.instance_203,this.instance_204];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298.6,-274.1,615.3,538.8);


(lib.backBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzA7IAAgEIABgUIAAgvIgBgSQAEABARAAIAUAAIAEgRIggAAIgXAAIgCAAIAAgMIACABIAXAAIBOAAIAWAAIABgBIAAANIgBAAIgXgBIghAAIgGARIAfAAQASAAADgCQgBAFAAAQIAAAtIABAWIAAABIgNAAIABgJIhPAAQgBAIACACgAAWAoIASAAIAAg7IgSAAgAgLAoIAWAAIAAgQIgWAAgAgnAoIARAAIAAg7IgRAAgAgLAQIAWAAIAAgOIgWAAgAgLgFIAWAAIAAgOIgWAAg");
	this.shape.setTransform(-50.6,61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1AyQAigBgDgmQgQAKgQAIQgDgGgIgFQAYgEAVgQIgKAAIgQABIABgHIAAgIIAAghIgBgLIAJABIAKAAIA0AAQAEABAIgBIAKgBIgBAMIAAAgQAAAHABAJIgGgCIgHAAIgMAAQALANAhADQgGAGgCAIQgRgFgOgIIAAAhIABAMIgMAAIAAgMIAAgbIAAgJIAIAAQgIgFgGgJIgRAAIgDACQgEAFgGAEIADAAQAKAAgBACIgBABQgCADAAAEQAAAgggAKQgDgGgHgFgAAGgLIAdAAIAAgPIgdAAgAgigLIAdAAIAAgPIgdAAgAAGgiIAdAAIAAgQIgdAAgAgigiIAdAAIAAgQIgdAAg");
	this.shape_1.setTransform(-64.6,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBAQACgHAAgNIAAguIgCgMIAAgEIALAAIAFABIgBACQgCADAAAGIAAAyQAAANABAHgAhAgDQAsgTAPgpIANAFIgBACIgCACQAPAiAtAKQgGADgGAJQgogRgNggQgOAcgmAYQgHgFgFgDg");
	this.shape_2.setTransform(-78.8,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjAGIhEAAIgaABIAAgNIAZABIBEAAIAagBIAAANIgZgBg");
	this.shape_3.setTransform(-92.7,61.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA6IhPAAIgOAAIgJAAIAAgLIAXAAIAeAAIAAhcIAAgCIgBgLQAPABAAACIAAADIgCAFIAAAeIAWAAQAUAAAHAAIAAALIgbAAIgWAAIAAA1IAlAAQASABAHgBIAAALQgGgBgTABg");
	this.shape_4.setTransform(-106.6,61.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AApA6IAAgHIAAgEIhRAAIAAALIgMAAIABgWIAAhKIgBgRIAAgCQAFACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBRAAIAAhSIhRAAgAALATIgVAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAQABIAPAAIAOgBIADAAIgBAQIAAAQIABARIgOgBgAgNAKIAaAAIAAgdIgaAAg");
	this.shape_5.setTransform(-120.6,61.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXA5IgVgBQgSgBgGgEIgGgCQgIgFgEABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAGAAIAKgBIgCAKIAAArQARALAsAAIAIAAIAMgBIAPgCQgDAFgDAIIgigBgAgJAfQARgFAPgMQgMgLgMgIIAKgGIAUARQAGgLACgMIgnAAQABAhgRAXQgGgDgGgCQARgOABgmIAAgUIgBgHIAAgGQANABARgCQARgCANgDQAHAJAAADQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgDAAIgHAAQgdADgPgBIAAARIAlAAIAQgBQgDAagLAOIASATIgKAIQgEgIgKgLQgMAKgQAKIgLgKgAg0g2IANgDQAFALAEAQIgMADQgEgPgGgMg");
	this.shape_6.setTransform(-134.6,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiAwQAjgEAPgZQALgSABg2IgBgFIAAgCQASADgBACIgBACIgBAHQgEAugIATIAdAaIgLAKIgDgEIAAgCIgFgEIgPgRQgQAVgfALQgFgHgHgFgAg6ApIACgDQAEgEAAgEIAAhFIgBgFIAAgJQAOABABACIgBAEIgCAEIAABFIAQgRIAGgIQABAIAGAEQgTARgRAWgAgZglIAKgIQANALALARIgKAIQgNgTgLgJg");
	this.shape_7.setTransform(-148.3,61.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAHArQATAEAAgGIAAhXIg+AAIgbABIAAgMIAMABIAPAAIBQAAIAUgBIAAAMIgUgBIgFAAIAABfQgCAJgYAAQgBgHgFgIgAgtAjIAAgEIABgHIAAgpIAAgFIgBgHIANAAIAZAAIANAAIAAAMIAAAjIAAAMIgNAAIABgNIgaAAIAAAGQAAAIACAEgAggAHIAbAAIAAgZIgbAAg");
	this.shape_8.setTransform(19.4,44.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAyIAAgNIgBgMIAPABIAAACQgDAEAAAFIAAAKQgCAFAMAAIAMAAQASACAAgQQAEAHAIACQgEAKgFADQgEACgLAAIgVAAIgDABQgSAAADgNgAg7A1QAKgJADgSIANADIgBABIgCAFIgJAXIgOgFgAAeAbIAKgGIAYAbIgMAHQgHgMgPgQgAgEAZIAJgEQAHAJAFAJIgMAFQgEgKgFgJgAADATQAAgGgDgHQAOAEgBgKIAAgVIgBgJIALAAIAFABIgBACQgDAEAAAFIAAAWQADAPgWAAIgCAAgAgsATIABgTIAAgaIgJANIgCAEQgEgFgFgFQATgPAKgaQAPAGgCABIgBABQgDADgHAIIAAApQAAANABAGgAAegKIAIgHQAKAIAMALIgKAIQgIgKgMgKgAgZAGQAOgJAFgPIALAGIgCACQgCACgCADIgGAIIgGAHIgMgEgAgagZQATgKALgbQALAFACACIgBABQgEACgHAJIAfAAIAZgBIgLAZIgMgDQAEgFAEgHIguAAIgLANIgEADIgLgHg");
	this.shape_9.setTransform(5.3,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAgA9QABgCAAgGIgxAAIgdACIABgHIAAgUIAAgRIAKAAIAEACIgBABIgBAGIAAAYIAbAAIAAgqIgeAAIgZABIAAgMQAEACAWAAIAdAAIAAgVIgRAAIgTABIgHAAIAAgMQABACAZgBIARAAIAAgMIgBgHIAAgDIANABIgBACQgCADABAFIAAALIARAAQAaABADgCIAAAMIgJAAIgUgBIgRAAIAAAVIAgAAQARAAAHgCIAAAMIgYgBIggAAIAAAqIAcAAIAAgWIAAgEIAAgFIAOAAIgBACQgCADABADIAAAVQgBAQACADg");
	this.shape_10.setTransform(-8.7,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag+A7QAMgMAEgQQAKADADACIgBACIgEAFIgMAVQgHgEgFgBgAAhAiIAMgEIASAaIgOAGQgFgNgLgPgAgXAlIANgCIAGAZIgOABQgBgMgEgMgAAEAkIANgDIAJAaIgOABQgCgNgGgLgAAjAZIgRgBIgeAAIgUABIgKAAQACgBAAgVIgBgNIgBgIQAJACARgBIAIAAIAAgkIgBgKQAQABgBABIgBACQgCADAAAFIAAAIIAaAAIARAAIAKgCIAAANIgIAAIgTgBIgaAAIAAAQIAOAAIAbgBQgBAFAAAQIgBAOIACAJIgJgBgAgdAOIA8AAIAAgVIg8AAg");
	this.shape_11.setTransform(-22.9,44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAbA9QgSAAgMgCQgRgFgKgFIgGgEQgGAAgJAPIgKgHQACgDAFgCQAIgKAEgBIAAgnIgUACIAAgMQAQACAQgCQgBAFAAAFIAAAnQAQALATACQAaABAhgCQgFAGAAAGIgOABIgRgBgAAQArQgBgHgDgGQAMABADgDIABgJIAAgrIgdAAIgVABIAAgLIAVABIAdAAIAAgSIgBgKIAJABIAEABIgBACIgBAGIAAASIAFAAQAKAAAJAAIAAAKIgTgBIgFAAIAAApIAAASQgEAIgQAAIgCAAgAgJgJIAKgDIALAYIgLAEQgGgQgEgJgAg5gwIALgHQALANAIAMIgMAIQgHgOgLgMg");
	this.shape_12.setTransform(-36.6,44.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJA6QgHgBgMgGIgMgDQgFAAgJALIgJgKIASgLIAAgpIgQABIAAgMIALABIAQgBIABAAIgCARIAAAjQAPAJAWADIAcgBQASAAAQgDQgGAFgBAJIgVAAQgYAAgVgCgAAeAfQAIACAEgDIAAgKIgWAAIAAAHIAAAPIgKAAIABgPIAAgHIgTAAIAAAKQAAAIAAAEIgLAAIAAgDIABgIIAAgxIgBgHIAAgCQAAABALgBIARAAQgFgFgFgEIAIgHIAKAKQAGgEAIgIIghAAIgSAAIAAgLQADABAPAAIArAAQAIAAAHgBQgPASgSALIATAAQAHABAEgBQgBABABAIIAAASQAAApgBgBQgFAEgNAAQgBgGgDgHgAAUAMIAWAAIAAgLIgWAAgAgJAMIAUAAIAAgLIgUAAgAAUgHIAWAAIAAgLIgWAAgAgJgHIAUAAIAAgLIgUAAgAg1g1IALgGIAOAaIgNAGQgFgOgHgMg");
	this.shape_13.setTransform(-50.8,44.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAMQAIgCgBgJIgJAAIAAgUIAUAAIAAAUQgCASgQACg");
	this.shape_14.setTransform(-68.1,49.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpA7IgFgHIACgCQADgEAAgCIAAgbIgEAAIgQACIAAgMIAPAAIAFAAIAAgNIgMABIAAgIIgFAHQgCgGgFgDQARgPAHgfQAQACgBACIgBABIgEAGIgCADIgDAIIAHAAQAKgBAHgBIAAALIgRgBIgMAAIgBAEIgIALQACABAIAAIAKAAIARgBIAAALIgRgBIAAANIAFAAIAPgBIAAAMIgHAAIgIgBIgFAAIAAAYIAQgQIAEAMQgaATgCAEIgBACIgCgDgAgOAqIATABIAEgnIgKAAIgGAAIAAgLIARABIACgjIgLABIgIABIAAgNQAGABANABIAQAAQAQAAALgCIAAADIgCAWIgFBGQALAAAHgBIAAALIgJAAIgJAAIgnAAIgXABgAAQArIAVAAIADgoIgTAAgAAVgGIATAAIACgjIgTAAg");
	this.shape_15.setTransform(-78.6,44.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAzQAXgCAQgLIgagKIAMgUIgCAAIgQABIAAgKIAQABIAFAAQAFgJADgPQAOAFgBACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDADIgFAKIgBACIAfAAQAJAAAIgBIAAAKIgRgBIgDAAQgEAPgIANIAcAOIgJALQgKgKgPgIQgOANgcAHQgCgHgFgFgAAEAWIANAGIAGADQAHgKADgNIgVAAIgIAOgAg4AxQAMABADgCIAAggQgPAIgEABIgDgMIAWgIIAAgaIgDAAIgJAAIgJAAIAAgLIAJABIAJAAIADAAIAAgUIgCgKQAOABAAABIgBADIgBAEIAAAVIACAAIAGAAIAFgBIAAALIgFAAIgGAAIgCAAIAAAWIANgEIAAAKIgNAFIAAApQAAAHgUACQgBgIgEgFgAgPgPIABgMIAAgDIgBgGIAAgGIANABIAwAAIAIAAIAGgBIgBAGIAAAGIAAACIABANIgMAAIABgQIg1AAQAAAMABAEgAALg8IAMgCIAGASIgMABQgDgKgDgHg");
	this.shape_16.setTransform(-92.7,44.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBEQAVgeABgjIAAgEQgEgkgPgeIAfAAIAACHg");
	this.shape_17.setTransform(-107.7,44.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AApA6IAAgHIAAgEIhRAAIAAALIgMAAIABgWIAAhKIgBgRIAAgCQAFACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBRAAIAAhSIhRAAgAALATIgVAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAQABIAPAAIAOgBIADAAIgBAQIAAAQIABARIgOgBgAgNAKIAaAAIAAgdIgaAAg");
	this.shape_18.setTransform(-120.6,44.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXA5IgVgBQgSgBgGgEIgGgCQgIgFgEABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAGAAIAKgBIgCAKIAAArQARALAsAAIAIAAIAMgBIAPgCQgDAFgDAIIgigBgAgJAfQARgFAPgMQgMgLgMgIIAKgGIAUARQAGgLACgMIgnAAQABAhgRAXQgGgDgGgCQARgOABgmIAAgUIgBgHIAAgGQANABARgCQARgCANgDQAHAJAAADQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgDAAIgHAAQgdADgPgBIAAARIAlAAIAQgBQgDAagLAOIASATIgKAIQgEgIgKgLQgMAKgQAKIgLgKgAg0g2IANgDQAFALAEAQIgMADQgEgPgGgMg");
	this.shape_19.setTransform(-134.6,44.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRBEIAAiHIAhAAQgQAegDAkIAAAEQAAAjAUAeg");
	this.shape_20.setTransform(-147.5,44.6);

	this.instance = new lib.shuomingBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-161,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// 图层 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333F48").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5E7485").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E7485").s().p("AjLDLQhUhUAAh3QAAh1BUhWQBWhUB1AAQB3AABUBUQBVBWAAB1QAAB3hVBUQhUBVh3AAQh1AAhWhVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.page2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s2_1.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(10).call(this.frame_14).wait(1));

	// 三维部分
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333F48").s().p("AiOBkIAdgZIAAhVIgfAAIAAglIBFAAIAAB6QAXAZAwAAQCAAAAVgCQgIAXgEAQIhcABIguAAQgcAAgWgHQgWgHgPgOIgiAigAARBbIAAhdQgZAmgfAfIgegeQAygkAegzIhDAAIAAgjIBJAAIAAg6IAnAAIAAA6IArAAIghgcIAZgYIAmAjIgTARIAZAAIAAAjIhPAAIAAAiIAWgSIBDBFIgdAaIg8hGIAABkgAiFh4IAfgTQAWAcASAaIgiAXQgSgfgTgbg");
	this.shape.setTransform(947,232.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333F48").s().p("AgJB4QAVgRAQgWIgRALIgFgLQgjAZgQASIgXgaQALgKAAgUIAAhGIgKAYIgMgMIAACEIgiAAIAAh4QgKAjgMAZIgKgzQARgjAMgzIgZAAIAAgkIAcAAIAAg1IAiAAIAAA1IARAAIAAAkIgRAAIAAAbIAWAQIAAh3IBPAAIAACRIgxAAIAAA0IATgOIgLgVIAZgNQARAaANAaQAVgdAHgfIglAAIAIhfIAcAAIgEA/IAMAAQAFgfAAguIgrAAIAAghIBnAAIAAAhIgaAAQAAApgGAkIAlAAIAAAgIgrAAIgFASIAQAAIAABAQAAAKAFAAQAFAAACgLQACgMAAgWIAXAMQAABHgiAAIgIAAQgdAAAAgsIAAgWQgVApggAeIgfgZgAgbgOIAVAAIAAgeIgVAAgAgbhIIAVAAIAAgeIgVAAg");
	this.shape_1.setTransform(915.9,232.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_2.setTransform(363,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333F48").s().p("Ag5BcIAcABQAQAAAAgPIAAhQIgmAAIAAAEIgkAAIAAgqIgbASQgJgUgJgPQAjgQAdgYIg4AAIAAgcID6AAIAAAcIiWAAIgRASICOAAIAABNIhPAAIAAADQAMARANAOQAhgQAZgRIAUAcQgYANgcANQAbASAhAJQgIALgPAYQg2gVgigsIAAAlQAAAkggABIgnACIgIgigAgzgcIB1AAIAAgZIh1AAgAiDBVQAsgRAYgbIg6AAIAAgcIBfAAIAAAbQgaAzg4AbQgHgMgQgVg");
	this.shape_3.setTransform(335.8,62);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333F48").s().p("AiRAPIAAgdIEjAAIAAAdg");
	this.shape_4.setTransform(307.5,63.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333F48").s().p("ABTB8IAAgKIgrAAIAAAJIgeAAIAAhVIA3AAQgsgKgVgWQgSAWg0AKIA8AAIAABWIgeAAIAAgKIgqAAIAAAKIgfAAIAAhRIgLABQgCgMgEgPQBSgCARgTIhgAAIAAgbIBsAAIACgNIAkAAIgCANIAjAAIgEgKIAigFIAGAPIAoAAIAAAbIhoAAQAcAUBPACIgHAbIgLgBIAABQgAAoBXIArAAIAAgWIgrAAgAhSBXIAqAAIAAgWIgqAAgAALgwIAAhLIBmAAIAABLgAAqhLIAnAAIAAgVIgnAAgAhxgwIAAhLIBnAAIAABLgAhQhLIAnAAIAAgVIgnAAg");
	this.shape_5.setTransform(279.1,62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333F48").s().p("AiCBhQAlggAIg0IgrAAIAAggIAtAAIAAgqIgGAAQgJAVgMATQgKgQgLgOQAUgjAJgsIAhAGIgIAeIA1AAIAAAhIgaAAIAAAqIAgAAIAAAgIgiAAIgCAPIAqA2IAAjIICOAAIAAAhIhsAAIAAAkIBkAAIAABlIhkAAIAAAlIBuAAIAAAhIiQAAIAAgiIgYAUIgcgrQgPAlgeAdQgLgTgKgPgAAWAUIBBAAIAAglIhBAAg");
	this.shape_6.setTransform(251.7,61.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
	this.shape_7.setTransform(224.5,61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333F48").s().p("Ah8BhQBRgwAChbIhFAAIAAgjIBHAAIABg1IAoAAIgBA1IB9AAIgDBNQgBAqgCAaQgCAbgOAOQgOAOgXABIg6AAQgDgXgFgSQAVACAbAAQAOAAAHgFQAGgFADgIQACgIACgeIAChHIhVAAQgDBuhbA/QgOgRgQgRg");
	this.shape_8.setTransform(196.4,61.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333F48").s().p("AgTBoIAAAbIggAAIAAhvIgTAcIgEgNQgKAogMA2IgigMQANgqAMg8IAeANIgHgUQAggpALgmIgaAAIAAggIBRAAIgKgUIAogIIANAcIBGAAIAAAgIhpAAIAdAHIgFAOIBJAAIAAAcQgIA1ghAnQAWAPAeAKIgTAjQgkgQgWgTQgVASghATQgKgPgKgNgAgTBlQAfgRATgOQgOgSgLgXIgLAUIgOgegAAagDQAMAdASAWQAYgeAGglIg0AAIgIAQgAgEhDIgPAfIAAAuQAZglAQgsIgrAAgAAigIIAWgLIASAgIgWALIgSgggAiDgeIAVgbIAoAhIgZAcQgSgSgSgQgAiChmIAWgZQAUAQAUARIgZAbIglgjg");
	this.shape_9.setTransform(170,61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_10.setTransform(1105.1,397.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AgEArIAJgPIAaANIARgUIgxAAIAAgOIADgOIgMAAIAAgQIAQAAIADgOIgNAAIAAgQIARAAIADgSIAVAAIgDASIAiAAIAAAQIgmAAIgDAOIAuAAIAAAQIgyAAIgEAMIAzAAIAAAPIgXAdIANAHIgLARQgbgQgagOgAgrBIIAAgbIgbAEIgCgUIAdgDIAAgNIgcAAIAAgRQAGgPAEgRIgKAAIAAgRIAOAAIADgTIATACIgEARIAdAAIAAARIghAAIgKAhIAKAAIAAgZIASAAIAAAZIAQAAIAAAQIgQAAIAAAMIASgCIgBASIgRACIAAAdg");
	this.shape_11.setTransform(1090.4,397.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AhIA4QAJgTAAgkIATAAIgBAYQAEAKAGAFIAAgrIglAAIAAgSIAdAAIAAgOIgXAAIAAgSIAXAAIAAgTIAUAAIAAATIAWAAIAAASIgWAAIAAAOIAZAAIAAASIgRAAIAAAPIAPAAIAAASIgPAAIAAASQAHABAWAAIA7gBQgEAKgDALQg6AAgXgBQgYgCgJgQQgEANgEAKIgQgRgAAaApQgTAAgBgVIAAgtIAlAAIAAgVIgnAAIAAgSIA7AAIAAA5IglAAIAAAXQABAHAGAAIAIAAQAFAAADgDQABgDABgSIAUAHQgCARgDAFQgEANgSAAg");
	this.shape_12.setTransform(1075.4,397.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("AhGALIAAgVICNAAIAAAVg");
	this.shape_13.setTransform(1060.4,397.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("AA0BIIAAgHIgtAAIAAAHIgRAAIAAh0IAfAAIAAgbIASAAIAAAbIAfAAIAAB0gAAnAvIANAAIAAgcIgNAAgAAHAvIAOAAIAAgcIgOAAgAAnABIANAAIAAgcIgNAAgAAHABIAOAAIAAgcIgOAAgAgrBIIAAgaIgaACIAAgSIAagBIAAgOIgZAAIAAgTQAFgOAEgSIgKAAIAAgRIAOAAIADgSIATACIgEAQIAYAAIAAARIgcAAIgKAjIAIAAIAAgaIASAAIAAAaIALAAIAAAQIgLAAIAAANIAMgBIAAASIgMAAIAAAbg");
	this.shape_14.setTransform(1045.2,397.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AAuBIIAAgJIhbAAIAAAJIgUAAIAAh7IAlAAIAAgUIAUAAIAAAUIARAAIAAgUIAUAAIAAAUIAlAAIAAB7gAAdAsIARAAIAAgeIgRAAgAgIAsIARAAIAAgeIgRAAgAgtAsIARAAIAAgeIgRAAgAAdgEIARAAIAAgcIgRAAgAgIgEIARAAIAAgcIgRAAgAgtgEIARAAIAAgcIgRAAg");
	this.shape_15.setTransform(1030.4,397.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AgqBGIAAg1QgIARgKAOIgIgYQAPgPAJgVIgXAAIAAgTIAZAAIAAgQIgUACIgDgSQAigCAcgEIADASIgWACIAAASIAWAAIAAATIgWAAIAAAQIAFgFIAUARIgLAPIgOgOIAAA1gAAFBAIAAh8IBAAAIAAB7IgTAAIAAgNIgaAAIAAAOgAAYAfIAaAAIAAhIIgaAAg");
	this.shape_16.setTransform(1015,397.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_17.setTransform(1000.5,397.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
	this.shape_18.setTransform(985.4,397.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AhIBBIAAgTIASAAIAAhuIBtAAIAABuIASAAIAAATgAghAuIBDAAIAAgTIhDAAgAghAJIBDAAIAAgSIhDAAgAghgbIBDAAIAAgSIhDAAg");
	this.shape_19.setTransform(970.4,397.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("Ag/A8QAVgPADgaIggAAIAAgTIAhAAIAAgbIgaAAIAAgTIAhAAIgMgOIARgMIASATIgJAHIAbAAIARgaIAVALIgNAPIAfAAIAAATIgYAAIAAAbIAfAAIAAATIgfAAIAAAzIgVAAIAAgzIgmAAQgDAkgXASIgUgNgAgQAAIAlAAIAAgbIglAAg");
	this.shape_20.setTransform(955.5,397.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858C91").s().p("AgOAUIAJgnIATAAIgLAng");
	this.shape_21.setTransform(936.3,402.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858C91").s().p("AAFBIIAAgZIgWAAIAAgPQgFAJgIAHIgKgRIAAApIgSAAIAAhAIgKAPIgEgbQAMgVAMguIASAFQgEASgGARIAAA6QAXgYAMggIgbAAIAAgSIAlAAIAAgYIAUAAIAAAYIAqAAIAAASIgfAAQAKAeAbAYIgNAVIgLgNIAAAOIgYAAIAAAZgAAZAdIAWAAQgNgUgJgdgAgPAdIAUAAIAAgxQgGAbgOAWg");
	this.shape_22.setTransform(925.4,397.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858C91").s().p("AhGALIAAgVICNAAIAAAVg");
	this.shape_23.setTransform(910.4,397.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858C91").s().p("AhEA5QAugcAGgxIgxAAIAAgTIAaAAIgSgUIAPgNIAUAUIgNANIAVAAIACghIAVAAIgCAhIA+AAIgDA4QgCAcgBAFQgBAFgEAFQgEAFgGACQgGACgPAAIgXABQgBgJgEgNIAcABQAIAAADgBQADgCACgDIACgUIADgrIgrAAQgBANgEALIAOgMIAYAWIgPAOQgNgPgKgIQgLAqgoAZIgRgPg");
	this.shape_24.setTransform(1273.7,373.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858C91").s().p("AgNA5QAQgMANgPQgFgWgCgmIgyAAIAAASIApAAIAAAYQgBAXgDAGQgDAFgFAEQgEADgVgBIgDgVIALABQAIAAABgIIABgUIgWAAQAAAugOAWQgIgHgJgHQAMgUAAglIAAgwIBEAAIgBgYIAVAAIAAAYIAUAAIgMgQIAPgIIAPASIgLAGIAQAAIAAARIgqAAQAAAXADAQQAJgOAIgSIASAJQgNAbgQAWQAFAOAFAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIACgKIABgPIATAJQAAAIgEANQgDANgFADQgFAEgGAAQgQAAgKgUQgLALgLAJQgGgIgJgHg");
	this.shape_25.setTransform(1258.9,373.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#858C91").s().p("AgfA3QAXgCAOgHIgZgKIAJgQIgPAAIAAgFIgLABIAAAlQAAAIgDAFQgEAEgHABIgRABQgBgKgEgJIAKAAQAFAAABgCQABgBAAgEIAAgaIgOADIgDgVIARgCIAAgZIgOAAIAAgSIAOAAIAAgcIATAAIAAAcIANAAIAAASIgNAAIAAAXIAMgCIAAAIIAWAAIAEgLIgbAAIAAgRIAVAAIgIgMIAMgFIgUAAIAAgRIAgAAIgFgKIAWgEIAFAOIAiAAIAAARIgWAAIAOAFIgKAMIAXAAIAAARIhCAAIAQAEIgFAHIA1AAIAAAQIgOAAQgFANgKAKIAdAMIgKARIgigQQgTAMgdAFIgKgSgAAEAdIAUAHQAIgHAEgJIgbAAgAARgcIgJAEIAUAAIALgRIgfAAIAJANg");
	this.shape_26.setTransform(1243.7,373.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#858C91").s().p("AhHA5QARgSADgnIgNACIgHgtIANgCIAHAtQABgNAAgQIAAgqIARAAIgBAlIAJgNIAIAJIAAgdIBRAAIAAA+IhRAAIAAgaIgRASQAAAPgCAOIAPARIAAgFIAiAAIAAgKIgcAAIAAgRIBPAAIAAARIgfAAIAAAKIAnAAIAAAQIgnAAIAAAbIgUAAIAAgbIgbAAIgOAMIgMgTQgGATgLAQIgOgPgAAAgUIAvAAIAAgJIgvAAgAAAgqIAvAAIAAgKIgvAAg");
	this.shape_27.setTransform(1228.5,373.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858C91").s().p("AAFBIIAAgYIgWAAIAAgQQgFAIgIAIIgKgRIAAApIgSAAIAAhAIgKAPIgEgbQAMgVAMguIASAFQgEASgGARIAAA7QAXgZAMggIgbAAIAAgSIAlAAIAAgYIAUAAIAAAYIAqAAIAAASIgfAAQAKAeAbAYIgNAVIgLgOIAAAQIgYAAIAAAYgAAZAdIAWAAQgOgUgIgdgAgPAdIAUAAIAAgyQgFAcgPAWg");
	this.shape_28.setTransform(1213.4,373.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#858C91").s().p("AhHA1QATgEAHgHQAIgIAAgNIAAgJIBFAAIAAAhQAAAGAGAAIAGAAQAEAAACgDQABgDACgTIASAHIgDAUQgCAIgFAEQgGADgJABIgRAAQgSgBAAgRIAAgXIgdAAQgBAggoAMIgMgTgAAwASIAAgOIhiAAIAAAOIgUAAIAAgdICKAAIAAAdgAg7gUIAAgQIAwAAIAAgIIg7AAIAAgRIA7AAIAAgLIATAAIAAALIA8AAIAAARIg8AAIAAAIIAwAAIAAAQg");
	this.shape_29.setTransform(1198.4,373.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
	this.shape_30.setTransform(1183.1,373.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#858C91").s().p("AhIA2QAVgSAFgdIgZAAIAAgRIAZAAIAAgYIgDAAQgFAMgHALQgFgJgHgIQAMgUAFgYIASAEIgFAQIAeAAIAAASIgPAAIAAAYIASAAIAAARIgSAAIgBAIIAXAfIAAhvIBOAAIAAASIg7AAIAAAUIA3AAIAAA4Ig3AAIAAAUIA8AAIAAATIhPAAIAAgTIgNALIgRgYQgIAVgQAQIgMgTgAANALIAkAAIAAgUIgkAAg");
	this.shape_31.setTransform(1167.9,373.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#858C91").s().p("AhIA2QAegDAXgJQgOgKgKgPIgKAAIAAgRIBmAAIAAAQQgKAPgRALQAVAHAdABIgLAWQgkgEgZgNQgZANglAFQgEgJgGgKgAAAAiQAPgIALgJIgvAAQAJAJAMAIgAAdgVIALgNQAPAJASANIgNAOIgfgXgAhIgNQASgKAPgMIAMANQgQANgSALIgLgPgAAIgEIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgQIA6AAIgFgNIAUgFIAIASIA4AAIAAAQIgqAAIAAAig");
	this.shape_32.setTransform(1152.8,373.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858C91").s().p("AgCBHIgFgWIAcABQAQAAABgJQACgJAAggIhbAAIAFhGIAWAAIgBARIBfAAIAAATIhgAAIgBAQIBaAAIgCA7QgBAQgIAGQgJAIgPAAgAhFAjIAAgTIBjAAIAAATg");
	this.shape_33.setTransform(1137.6,373.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_34.setTransform(1122.6,373.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
	this.shape_35.setTransform(1107.3,373.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858C91").s().p("AgNAOQgHgGAAgIQAAgIAGgFQAHgHAHAAQAJAAAFAHQAHAFgBAIQABAJgHAGQgGAGgHAAQgIgBgGgGgAgEgEQgCADAAABQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQACACADAAQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAQACgCAAgDQAAgCgCgCQgCgCgDAAQgCAAgCACg");
	this.shape_36.setTransform(1087.5,378.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858C91").s().p("Ag3BIIAAg+QgFARgHANIgFgbQAKgSAGgWIgOAAIAAgRIAPAAIAAgbIASAAIAAAbIALAAIAAARIgLAAIAAANIAPAOIAAgpIAYAAIAAgHIgbAAIAAgNIAbAAIAAgJIAQAAIAAAJIAJAAIAAgKIAQAAIAAAKIAdAAIAAANIgdAAIAAAHIAaAAIAAA0IhbAAIAAgFIgIAIIgHgJIAABDgAArAAIAKAAIAAgJIgKAAgAASAAIAJAAIAAgJIgJAAgAgGAAIAIAAIAAgJIgIAAgAArgUIAKAAIAAgJIgKAAgAASgUIAJAAIAAgJIgJAAgAgGgUIAIAAIAAgJIgIAAgAASgpIAJAAIAAgHIgJAAgAAvBIIAAgFIgwAAIAAAFIgRAAIAAg2IBTAAIAAA2gAgBA3IAwAAIAAgHIgwAAgAgBAlIAwAAIAAgHIgwAAg");
	this.shape_37.setTransform(1077,373.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#858C91").s().p("AAsBEIAAgKIhYAAIAAAKIgVAAIAAiGIA6AAIAAA2IAPAAIAAg2IA6AAIAACGgAgsAmIBYAAIAAhVIgRAAIAAA2Ig2AAIAAg2IgRAAg");
	this.shape_38.setTransform(1061.9,373.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#858C91").s().p("AAKAxIAWABIAHgBIAEgCIACgEIABgSIABgdIAAgXIgaAAIgKAUQgGgEgKgFIAABWIgUAAIAAgKIgVAAIAAALIgVAAIAAh2IAQAAIAGgXIAWADIgHAUIAZAAIAAAdQALgUAKggIAVAFIgHATIAlAAIgBBTQgBAOgBAFQgCAGgFADQgEAEgGABQgIABgYAAQgCgNgDgJgAguApIAVAAIAAgZIgVAAgAgugDIAVAAIAAgZIgVAAgAAAACIARgLQALALAMATIgTAMQgLgSgKgNg");
	this.shape_39.setTransform(1046.8,373.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
	this.shape_40.setTransform(1031.6,373.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#858C91").s().p("AhEBAQAKgbAIgeIAUAIIgRA4IgVgHgAAzBGIAAgJIg4AAIAAAJIgTAAIAAh2IAmAAIAAgWIASAAIAAAWIAmAAIAAB2gAAgAqIATAAIAAgcIgTAAgAgFAqIATAAIAAgcIgTAAgAAggCIATAAIAAgbIgTAAgAgFgCIATAAIAAgbIgTAAgAhFgSIANgNQANAJALAKIgOANQgJgHgOgMgAhDg5IANgNQALAHAOAMIgOAOIgYgUg");
	this.shape_41.setTransform(1016.2,373.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_42.setTransform(1001,373.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#858C91").s().p("Ag9AvIAVABQAHAAAAgFIACgiIgmAAIAFg1IASAAIgEAlIAKAAIADgpIgfAAIAAgRIAzAAIgFA6IAJAAIgCAvQgBAMgCAEQgCAFgDACQgEADgEAAIgbAAIgDgTgAgJBAIAAiAIBPAAIAAASIg8AAIAAALIANgIIAQAbQAHgOAGgOIAQAGQgJAVgKARIATAhIgQAJIgNgXQgIAMgIAMIgNgKIAAANIA+AAIAAASgAAKAeQAKgOAJgPIgTghgAhHAVIAigDIAAASIggAEg");
	this.shape_43.setTransform(986.1,373.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#858C91").s().p("AAGA0IAXABQAIAAAAgIIAAgCIg9AAIAAAdIgVAAIAAhBIgVATIgFgWQAWgSANgXIgiAAIAAgSIAsAAIAFgRIAXAEIgEANIBKAAIAAASIhUAAIgGAKIBMAAIAABPQAAAJgEAFQgEAFgIAAQgIABgXAAIgFgUgAgYAaIA9AAIAAgKIg9AAgAgYAAIA9AAIAAgKIg9AAg");
	this.shape_44.setTransform(970.9,373.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#858C91").s().p("AhGBEIAAgVIA2AAIAAhyIAYAAIAAApIA2AAIAAAVIg2AAIAAA0IA/AAIAAAVg");
	this.shape_45.setTransform(955.9,372.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#858C91").s().p("AA0BIIAAgHIgtAAIAAAHIgRAAIAAh0IAfAAIAAgbIASAAIAAAbIAfAAIAAB0gAAnAvIANAAIAAgcIgNAAgAAHAvIAOAAIAAgcIgOAAgAAnABIANAAIAAgcIgNAAgAAHABIAOAAIAAgcIgOAAgAgrBIIAAgaIgaACIAAgSIAagBIAAgOIgZAAIAAgTQAFgOAEgSIgKAAIAAgRIAOAAIADgSIATACIgEAQIAYAAIAAARIgcAAIgKAjIAIAAIAAgaIASAAIAAAaIALAAIAAAQIgLAAIAAANIAMgBIAAASIgMAAIAAAbg");
	this.shape_46.setTransform(940.5,373.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_47.setTransform(925.6,373.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
	this.shape_48.setTransform(910.4,373.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#858C91").s().p("AhIAyIAPgMIAAgnIgOAAIAAgTIAgAAIAAA7QAIAMAWAAIAhAAIAxAAIgHATIhNgBQgNAAgJgEQgJgEgGgGIgQASgAAdAgIALAAQAGAAAAgGIAAgDIgUAAIAAAWIgSAAIAAgWIgSAAIAAAWIgSAAIAAhOIAcAAIgQgJIAHgJIgUAAIAAgPIBdAAIAAAQIgeARIAeAAIAAA+QAAAHgDAEQgCAEgFACQgFABgRAAIgDgPgAAaAKIAUAAIAAgJIgUAAgAgKAKIASAAIAAgJIgSAAgAAagLIAUAAIAAgIIgUAAgAgKgLIASAAIAAgIIgSAAgAAQgnIAXgMIgqAAIATAMgAhEg9IAPgLQANAQAIALIgRAMIgTgcg");
	this.shape_49.setTransform(1075.4,325.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#858C91").s().p("AAyBIIAAgHIgpAAIAAAHIgTAAIAAiIIBQAAIAACIgAAJAuIApAAIAAgTIgpAAgAAJAJIApAAIAAgRIgpAAgAAJgbIApAAIAAgSIgpAAgAgxBHIAAg6QgHAPgIANIgFgaQANgUAHgUIgTAAIAAgTIATAAIAAgbIATAAIAAAbIARAAIAAATIgRAAIAAAOIATALIgJAPIgKgHIAAA/g");
	this.shape_50.setTransform(1060.1,325.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#858C91").s().p("AAgBGQgVAAAAgWIAAh1IAUAAIAAA0QAMgMAMgPIASAPIgqAmIAAAjQAAAIAHAAIAEAAQAGAAABgFQABgFACgbIAVAIQgDAhgHAHQgGAHgOAAgAhIAvIALgBIAAhaIAUAAIAABWIAMgCIAAhrIAUAAIAAAoIAQAAIAAAVIgQAAIAAAqIAQgDIgBAVIhKAPg");
	this.shape_51.setTransform(1045.4,325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#858C91").s().p("AgKA4QgDAKgFAHIgRgMQAOgVAAgtIAAgxIAkAAIAAgRIATAAIAAARIAkAAIAAARIgDASIgSgDIACgOIgRAAIAAAWIAfAAIAAARQgHAVgOARQANAHAQAEIgNAUQgRgHgNgKQgNAKgRAIIgKgRgAgJA1QANgFAKgHQgKgMgGgQIANgLIgOAAQAAAfgGAUgAAdAcQALgLADgPIgeAAQAFAPALALgAgDgOIASAAIAAgWIgSAAgAg4BHIAAgwIgKAKIgGgXQAVgUANgUIAPANQgGAKgIAIIAABGgAhHgmQAUgRAMgRIAQANQgSAYgXAUIgHgXg");
	this.shape_52.setTransform(1030.4,325.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#858C91").s().p("AAPBJIAAiJIA2AAIAAAOIgPAoQASASAAAVQAAAMgGAHQgHAHgUAAIgEgVIAIABQAJAAAAgJQAAgRgRgRQAIgSAGgVIgQAAIAAB4gAhBBFIAAg7IBEAAIAAA6IgRAAIAAgHIggAAIAAAIgAguAsIAgAAIAAgSIggAAgAhHAAIAAgRIARAAIgKgNIAPgJIgTAAIAAgQIAcAAIgFgNIAWgEIAGARIAXAAIAAAQIgSAAIAPAHIgJAPIAQAAIAAARgAgigWIgKAFIAQAAQAHgLAFgLIgfAAIANARg");
	this.shape_53.setTransform(1015.4,325.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#858C91").s().p("Ag/BIIAAh4IA3AAIAAgXIASAAIAAAXIA2AAIAABfQAAALgFAGQgFAGgKAAQgKABgRAAIgEgTIATAAIAHAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgCAAgEIAAhHIgjAAQAAALgCAJQAPAKAVARIgPAOQgKgKgSgQQgIAQgTAMIgPgPQAfgTACgdIgiAAIAABkg");
	this.shape_54.setTransform(1000.4,325.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#858C91").s().p("AhHA3QAXgUAAgxIAAg3IAVAAIAAAjIAqAAIAAgmIAWAAIAAAmIAjAAIAAATIhjAAIAAATIBIAAIAABDIgWAAIAAgwIg1AAQgGAfgTATIgQgSg");
	this.shape_55.setTransform(985.3,325.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#858C91").s().p("AATBIIAAhOIgcAAIAAgUIAcAAIAAgtIAVAAIAAAtIAdAAIAAAUIgdAAIAABOgAhEA5IAAh1IA1AAIAAB0IgSAAIAAgNIgRAAIAAAOgAgyAZIARAAIAAhCIgRAAg");
	this.shape_56.setTransform(970.7,325.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#858C91").s().p("AgNAUIAIgnIATAAIgLAng");
	this.shape_57.setTransform(951.3,330.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#858C91").s().p("AhHA3QAXgUAAgxIAAg3IAVAAIAAAjIAqAAIAAgmIAWAAIAAAmIAjAAIAAATIhjAAIAAATIBIAAIAABDIgWAAIAAgwIg1AAQgGAfgTATIgQgSg");
	this.shape_58.setTransform(940.3,325.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#858C91").s().p("AATBIIAAhOIgcAAIAAgUIAcAAIAAgtIAVAAIAAAtIAdAAIAAAUIgdAAIAABOgAhEA5IAAh1IA1AAIAAB0IgSAAIAAgNIgRAAIAAAOgAgyAZIARAAIAAhCIgRAAg");
	this.shape_59.setTransform(925.7,325.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#858C91").s().p("AAPBJIAAiJIA2AAIAAAOIgPAoQASASAAAVQAAAMgGAHQgHAHgUAAIgEgVIAIABQAJAAAAgJQAAgRgRgRQAIgSAGgVIgQAAIAAB4gAhBBFIAAg7IBEAAIAAA6IgRAAIAAgHIggAAIAAAIgAguAsIAgAAIAAgSIggAAgAhHAAIAAgRIARAAIgKgNIAPgJIgTAAIAAgQIAcAAIgFgNIAWgEIAGARIAXAAIAAAQIgSAAIAPAHIgJAPIAQAAIAAARgAgigWIgKAFIAQAAQAHgLAFgLIgfAAIANARg");
	this.shape_60.setTransform(910.4,325.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#858C91").s().p("Ag/BIIAAh4IA3AAIAAgXIASAAIAAAXIA2AAIAABfQAAALgFAGQgFAGgKAAQgKABgRAAIgEgTIATAAIAHAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgCAAgEIAAhHIgjAAQAAALgCAJQAPAKAVARIgPAOQgKgKgSgQQgIAQgTAMIgPgPQAfgTACgdIgiAAIAABkg");
	this.shape_61.setTransform(1274,301);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#858C91").s().p("AgqBGIAAg1QgIARgKAOIgIgYQAPgPAJgVIgXAAIAAgTIAZAAIAAgQIgUACIgDgSQAigCAcgEIADASIgWACIAAASIAWAAIAAATIgWAAIAAAQIAFgEIAUAQIgLAPIgOgOIAAA1gAAFBAIAAh8IBAAAIAAB7IgTAAIAAgNIgaAAIAAAOgAAYAfIAaAAIAAhIIgaAAg");
	this.shape_62.setTransform(1258.5,301.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#858C91").s().p("AhHA3QAXgUAAgxIAAg3IAVAAIAAAjIAqAAIAAgmIAWAAIAAAmIAjAAIAAATIhjAAIAAATIBIAAIAABDIgWAAIAAgwIg1AAQgGAfgTATIgQgSg");
	this.shape_63.setTransform(1243.6,301.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#858C91").s().p("AATBIIAAhOIgcAAIAAgUIAcAAIAAgtIAVAAIAAAtIAdAAIAAAUIgdAAIAABOgAhEA5IAAh1IA1AAIAAB0IgSAAIAAgNIgRAAIAAAOgAgyAZIARAAIAAhCIgRAAg");
	this.shape_64.setTransform(1228.9,301.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#858C91").s().p("AAqBIIAAgIIguAAIAAAIIgUAAIAAhIIBXAAIAABIgAgEAvIAuAAIAAgdIguAAgAhGA/QAKgZAJgfIASAHIgSA4IgTgHgAhIgSIAMgOQAOAJANALIgOAOIgZgUgAghgQQALgJADgJQAEgKAAgWIBCAAIAAAhQAAAHAFAAIARAAIgEASIgVABQgRAAAAgTIAAgWIgcAAQAAASgEALQgGAKgKAJIgQgQgAhGg6IAMgNQAWAOAHAGIgNAPQgLgKgRgMg");
	this.shape_65.setTransform(1213.4,301.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#858C91").s().p("AhFA5QAWgPANgVIgRgPIAMgOIAPAMQAHgPADgSIgWAAQgLAagQAUQgGgOgEgGQAUgcAJgpIAVADIgGAVIAiAAIAAASQgIBCg0AlIgOgQgAANBIIAAiPIAUAAIAAAuIAIgGQAUAWANARIgQANIgZgfIAABSg");
	this.shape_66.setTransform(1198.3,301.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#858C91").s().p("AAGA0IAXABQAIAAAAgIIAAgDIg9AAIAAAeIgVAAIAAhBIgVATIgFgWQAWgSANgXIgiAAIAAgTIAsAAIAFgQIAXAEIgEAMIBKAAIAAATIhUAAIgGAKIBMAAIAABPQAAAJgEAFQgEAFgIAAQgIACgXAAIgFgVgAgYAaIA9AAIAAgKIg9AAgAgYABIA9AAIAAgLIg9AAg");
	this.shape_67.setTransform(1183,301.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#858C91").s().p("AgNAUIAIgnIAUAAIgMAng");
	this.shape_68.setTransform(1163.9,306.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#858C91").s().p("AhHA3QAXgUAAgxIAAg3IAVAAIAAAjIAqAAIAAgmIAWAAIAAAmIAjAAIAAATIhjAAIAAATIBIAAIAABDIgWAAIAAgwIg1AAQgGAfgTATIgQgSg");
	this.shape_69.setTransform(1152.7,301.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#858C91").s().p("AATBIIAAhOIgcAAIAAgUIAcAAIAAgtIAVAAIAAAtIAdAAIAAAUIgdAAIAABOgAhEA5IAAh1IA1AAIAAB0IgSAAIAAgNIgRAAIAAAOgAgyAZIARAAIAAhCIgRAAg");
	this.shape_70.setTransform(1138,301.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#858C91").s().p("AAJAxIAYABIAGgBIAEgCIACgEIABgSIAAgdIABgXIgZAAIgLAUQgHgEgJgFIAABWIgVAAIAAgKIgUAAIAAALIgUAAIAAh2IAPAAIAGgXIAVADIgGAUIAZAAIAAAdQAKgUALggIAUAFIgGATIAmAAIgCBTQgBAOgCAFQgBAGgEADQgFAEgHABQgGABgZAAQgCgNgEgJgAguApIAUAAIAAgZIgUAAgAgugDIAUAAIAAgZIgUAAgAAAACIARgLQAKALANATIgTAMQgLgSgKgNg");
	this.shape_71.setTransform(1122.6,301);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#858C91").s().p("AhIBFIAAgPIAQAAIAAhXIAuAAIAAgKIg6AAIAAgQIA6AAIAAgJIAUAAIAAAJIA7AAIAAAQIg7AAIAAAKIAwAAIAABXIAOAAIAAAPgAgkA2IBKAAIAAgJIhKAAgAgkAgIBKAAIAAgIIhKAAgAgkALIBKAAIAAgJIhKAAgAgkgJIBKAAIAAgIIhKAAg");
	this.shape_72.setTransform(1107.4,300.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#858C91").s().p("AgLBFIAAguIg7AAIAAgTIA7AAIAAg1Ig1AAIAAgTICBAAIAAATIg2AAIAAA1IA8AAIAAATIg8AAIAAAugAARgJQARgSAOgTIARAMQgPATgSAQgAg+gjIAQgLIAdAlIgSAKQgPgVgMgPg");
	this.shape_73.setTransform(1092.2,301.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#858C91").s().p("AgTA2QAUgHAOgMQgJgOgGgRIAQgFQAFAMAHAJQAHgLAEgMIASAGQgHARgKAPQAOALATAGIgKAUQgVgJgOgOQgPAOgUAKIgMgTgAgrBIIAAgbIgbADIgCgSIAdgDIAAgOIgaAAIAAgQIAIggIgKAAIAAgRIANAAIAFgTIASACIgEARIAYAAIAAARIgcAAIgJAgIAJAAIAAgYIASAAIAAAYIAJAAQAMgMAMgTIgRAAIAAgSIAcAAIgIgOIATgGIAJARIgLADIAqAAIAAASIgYAAQAOANANAOIgOANIgCgDQgJgKgQgRIAMgKIgjAAIAOAKQgMARgQAPIgKgKIAAAPIgKAAIAAANIARgCQgBAFAAANIgQACIAAAcgAA5ADg");
	this.shape_74.setTransform(1077.1,301.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#858C91").s().p("AhEA2QAfgCAZgIIgMgPQgNAGgOAFIgMgSQAtgMAcgYQgdAOgoAJIgJgSQAZgEAVgHIgMgOIgSAKQgGgIgIgIQAegLAWgVIAXAAIgJAJIA8AAIAAAPQgUAUgdAOIAXAAIgLALIAuAAIAAAOQgqA0hVAKQgEgKgGgJgAgJAVIAOAQQAWgKAQgPIgoAAIgMAJgAgUgsIARARQARgHARgMIgwAAIgDACg");
	this.shape_75.setTransform(1061.7,301.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#858C91").s().p("AAOBIIAAg0IgnAAIAAgTIAnAAIAAgiIgOAAQgFAOgIAMIgSgKQASgcAGgaIATAEIgFAPIA8AAIAAATIggAAIAAAiIAmAAIAAATIgmAAIAAA0gAg8A5QADgFAAgIIAAgvIgOAAIAAgTIAhAAIAAA7IAUgPQAAAJADAMQgWAPgMANgAhAg9IARgKIAUAbIgTALQgHgNgLgPg");
	this.shape_76.setTransform(1046.8,301.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#858C91").s().p("AAGA0IAXABQAIAAAAgIIAAgDIg9AAIAAAeIgVAAIAAhBIgVATIgFgWQAWgSANgXIgiAAIAAgTIAsAAIAFgQIAXAEIgEAMIBKAAIAAATIhUAAIgGAKIBMAAIAABPQAAAJgEAFQgEAFgIAAQgIACgXAAIgFgVgAgYAaIA9AAIAAgKIg9AAgAgYABIA9AAIAAgLIg9AAg");
	this.shape_77.setTransform(1031.5,301.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#858C91").s().p("AgpA4QAGgDAAgGIAAgDQgNAIgPAFIgJgSQAfgKAVgNIgzAAIAAgQIA/AAIgCgGIATgDIADAJIA8AAIAAAQIgUAAIAKAPIgWAJQAOAGATAEIgNAUQgegKgQgQIgBASQgkAFgJAFgAgQAhIAAAOIAbgFQgIgJgGgKIgNAKgAAYAeQARgIAKgGIgnAAQAFAIAHAGgAhIgaIAlgNIAAggIAUAAIAABAIgUAAIAAgMIgfANgAgIgLIAAgQIAbAAIAAgMIgfAAIAAgQIAfAAIAAgQIATAAIAAAQIAgAAIAAAQIggAAIAAAMIAdAAIAAAQgAhEg5IANgLIATARIgOANIgSgTg");
	this.shape_78.setTransform(1016.5,301.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#858C91").s().p("AAKBIIgGgVIATABIAOgBQAEgCACgDQACgDAAgFIAAhEIhZAAIAABmIgVAAIAAh6IAsAAIAFgVIAVADIgFASIBCAAIAABeQAAAOgHAGQgGAIgNAAIgeAAgAggAuIAAhAIBBAAIAAA4IgtAAIAAAIgAgMATIAZAAIAAgTIgZAAg");
	this.shape_79.setTransform(1001.3,301);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#858C91").s().p("Ag4BIIAAgxIgKAKIgHgWQATgQARgZIAQALIgGAIQAogNAXgVIg4AAIAAgSIBQAAIAAASQgIAKgMAKIAiAPIgMAQIgngUQgSAMgYAIQgEgHgFgIIgJAKIAABHgAgdBEIAAgRIAoAAIAAgaIghAAIAAgRIBXAAIAAARIghAAIAAAaIAoAAIAAARgAhHglQASgQANgSIAQANQgRAXgXAVIgHgXg");
	this.shape_80.setTransform(986.2,301);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#858C91").s().p("AAqBIIAAgIIgtAAIAAAIIgUAAIAAhIIBVAAIAABIgAgDAvIAtAAIAAgdIgtAAgAhHA/QALgZAJgfIATAHIgSA4IgVgHgAhIgSIANgOQAOAJAMALIgOAOIgZgUgAghgQQALgJADgJQADgKABgWIBCAAIAAAhQABAHAEAAIARAAIgEASIgVABQgRAAAAgTIAAgWIgbAAQgBASgEALQgGAKgLAJIgPgQgAhGg6IANgNQAVAOAHAGIgNAPQgMgKgQgMg");
	this.shape_81.setTransform(971,301.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#858C91").s().p("AAPBJIAAiJIA2AAIAAAOIgPAoQASASAAAVQAAAMgGAHQgHAHgUAAIgEgVIAIABQAJAAAAgJQAAgRgRgRQAIgSAGgVIgQAAIAAB4gAhBBFIAAg7IBEAAIAAA6IgRAAIAAgHIggAAIAAAIgAguAsIAgAAIAAgSIggAAgAhHAAIAAgRIARAAIgKgNIAPgJIgTAAIAAgQIAcAAIgFgNIAWgEIAGARIAXAAIAAAQIgSAAIAPAHIgJAPIAQAAIAAARgAgigWIgKAFIAQAAQAHgLAFgLIgfAAIANARg");
	this.shape_82.setTransform(955.9,301.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#858C91").s().p("Ag/BIIAAh4IA3AAIAAgXIASAAIAAAXIA2AAIAABfQAAALgFAGQgFAGgKAAQgKABgRAAIgEgTIATAAIAHAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgCAAgEIAAhHIgjAAQAAALgCAJQAPAKAVARIgPAOQgKgKgSgQQgIAQgTAMIgPgPQAfgTACgdIgiAAIAABkg");
	this.shape_83.setTransform(940.7,301);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_84.setTransform(925.6,301.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
	this.shape_85.setTransform(910.4,301.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// 图层 2
	this.dragBtn = new lib.dragBtn();
	this.dragBtn.parent = this;
	this.dragBtn.setTransform(174.7,141);
	new cjs.ButtonHelper(this.dragBtn, 0, 1, 2, false, new lib.dragBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dragBtn).wait(15));

	// 图层 4
	this.model = new lib.bl();
	this.model.parent = this;
	this.model.setTransform(409,390.9,0.854,0.854,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.model).wait(15));

	// 图层 3
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AgYAtIgZAMQgDgHgEgHQAQgFAPgHIAIALIgGACIANABQAFAAAAgFIAAgJIgUAAIgKAAIAAgKIgOAJIgIgNIANgHIgFgFIAJgHIAGAGIAFgEIgHgFIAJgHIAGAFIAHgHIgRAAQgIAIgKAHIgJgKQASgLALgPIAMAFIgEAFIAVAAIAAAMIgLANIAbAAQgLgMgFgQIALgEIADAGIAlAAIAAALIgOAQQAJAIANAEIgJANIgMgHIAAAMIgcAAIAAAOQAAAFgDADQgCADgEACIgWAAIgDgNgAAlASQgJgFgHgIIAAAHIgmAAIAAgGQgHAHgIAFIBFAAIAAAAgAAbgHIAIgJIgPAAIAHAJgAASArIAGgLIAhALIgHANIgggNgAgXAsIAGgCIgIgLIAUAAIAAAJQAAAFgFAAIgNgBgAgZAfgAg1gbIAAgUIAuAAIgDgIIAQgCIAEAKIAtAAIAAATIgPAAIAAgHIhOAAIAAAIg");
	this.shape_86.setTransform(761.2,736.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("AgWAqQAWgLAHgPQAGgPAAghIAPAAQABAYgEAQIAIAAIAAAaQAAAFAFAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQACgDABgOIAOAHQgCAUgFADQgFADgFAAIgJAAQgOAAAAgOIAAgMQgJARgVAMIgLgOgAg6AfQALgMAGgOIgPgcIAMgGIAKASQAEgLABgNIgbAAIAAgPIAqAAQgBAfgKAYIAOAZIgNAIIgIgRQgIAOgKALIgIgPgAgKAQIAAhHIA+AAIAABHIgQAAIAAg4IggAAIAAA4g");
	this.shape_87.setTransform(749.2,737.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AgmAuQATgBAPgFQgKgGgIgLIgHAAIAAgNIBMAAIAAANQgKAKgJAHQANACASABIgHAOQgagDgQgGQgPAGgZAEIgIgMgAALAjQALgFAHgHIgiAAQAGAHAKAFgAg6AvQAKgSAAgjIAAgoIAuAAIgDgIIASgEIAFAMIAoAAIAAAMIhbAAIAAAeQAAAsgMASIgNgLgAgSAEIAAgSIgNAAIAAgMIANAAIAAgFIAPAAIAAAFIAcAAIAAgFIAPAAIAAAFIAQAAIAAAMIgQAAIAAASgAgDgGIAcAAIAAgIIgcAAg");
	this.shape_88.setTransform(737.1,737);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("AggABQAAgWAJgNQAJgMAPAAQAfAAAAAuQABAXgJAMQgJAMgPAAQggAAAAgugAgNABQAAAgANAAQANAAAAghQAAgggMAAQgOAAAAAhg");
	this.shape_89.setTransform(727.5,736.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("AgWAkQgJgLAAgUQAAgWALgPQALgOASAAQAKAAAHACIAAARQgIgFgHAAQgLAAgGAJQgGAIAAAOIAAAAQAHgKAMAAQALgBAHAIQAGAHAAANQAAANgIAJQgJAJgNAAQgPAAgIgLgAgHAGQgEADAAAHQAAAHAEAEQADAFAFABQAFAAAEgFQADgFAAgGQAAgPgMgBQgFAAgDAFg");
	this.shape_90.setTransform(720.2,736.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("AgcArIAAgRQAKAHAMAAQAGAAAFgEQAEgDAAgHQAAgGgFgEQgFgDgJAAIgJAAIAAgNIAIAAQARAAAAgMQAAgNgMAAQgKABgIAGIAAgQQAJgFAMAAQANAAAHAGQAIAGAAAKQABATgTAEIAAABQAKAAAGAGQAGAFAAAIQAAANgKAIQgKAHgOAAQgOAAgJgEg");
	this.shape_91.setTransform(712.8,736.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("AgKAwIAGgHIggADQgHAAgFACIgGgOQAGgFAIgfIgOAAIAAgOIA2AAIAAAOIgXAAIgLAgIATgBIgIgWIANgEIALAdQAJgOgBgmIgLAAIAAgPIAMAAIAAgUIAPAAIAAAUIAeAAIAABBIgCARQgBAEgCACQgCACgEACQgEABgSAAIgDgSIAMABQAEAAACgBIABgEIABgSIABgmIgPAAQgBAZgCAMQgBALgFAMQgFALgIAJIgNgKgAgxghIAAgPIAtAAIAAAPg");
	this.shape_92.setTransform(702.8,737);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("Ag5AqIAJABQADAAAAgFIAAgXIgLAFIgBgRIAMgDIAAgTIgLAAIAAgPIALAAIAAgWIAPAAIAAAWIAKAAIAAAJQALgOAHgSIAOADIgFAKIAvAAIAAAOIg1AAIgJAOIAIAAIAAAJIALgCIAAgSIAOAAIAAAPIAbgGIgBAhQgCAFgCACQgDADgNABIgEgPQAJABABgCIABgLIgNACIAAAkIgOAAIAAghIgLACIAAAeQAAAHAHAAIAYAAQAEAAADgCIADgDIACgNIAQAGQgEAQgEAEQgFAEgHABIgjAAQgSAAAAgSIAAgcIgFABIgBgNIAGgCIAAgKIgHgFIgJAAIAAAPIAKgDIgBAPIgJADIAAAhQAAAGgCADQgCADgEABIgPABQgBgHgDgJg");
	this.shape_93.setTransform(691,736.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AgCAjIASABQAKAAAAgJIAAhAIhSAAIAAgQIBxAAIAAAQIgNAAIAABIQAAAHgDAEQgEAFgGABQgGACgXgBIgEgSgAgsAfIAAg4IA2AAIAAAxIglAAIAAAHgAgbAKIAWAAIAAgVIgWAAg");
	this.shape_94.setTransform(679,737.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7A7A7A").s().p("Ag4BHIA4giIA7AhIg7AjgAAFAiIA3ggIA6AiIg3AggAh0AlIA7gjIA3AgIg7AigAiyAAIA7ghIA5AhIg6AigABAAAIA6ggIA5AgIg5AhgAg2AAIA2gfIA4AfIg4AggAAFgiIA5giIAHAEIACACIAdAQIAQAKIABABIg5AhgAh0gjIADgCIAAgBIA1geIA6AiIg3AggAg4hGIA4giIA6AiIg6Ahg");
	this.shape_95.setTransform(718.3,708);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCCCCC").s().p("AhYBZIA6giIAABCIg6AigAgaA0IA2ggIAABCIgzAfIAAAAIgDACgAAgASIA6ghIAABBIg6AigAhYAUIA6ghIAAA/Ig6AigAgagPIA2ggIAAA+Ig2AggAhYgyIA6giIAABDIg6AhgAAggyIA6ghIAABAIg6AggAgahWIA2ggIAABCIg2AggAAgh5IA6ghIAABCIg6Aig");
	this.shape_96.setTransform(709.1,692.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9C9C9C").s().p("AAfB5IAAhCIA7AiIAABCgAAaB2IgQgJIgcgRIgCgCIgIgEIAAhCIA3AgIAABCgAAfAyIAAg/IA7AhIAABAgAhZAyIAAhBIA6AhIAABCgAgcAPIAAg+IA3AgIAAA+gAAfgRIAAhDIA7AiIAABCgAhZgTIAAhAIA6AhIAAA/gAgcg0IAAhCIA3AgIAABCgAhZhYIAAhCIA6AhIAABDg");
	this.shape_97.setTransform(727.4,692.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAABCIAAgdIBGAAIAAgtIh3AAIAAARIg0gkIA0gmIAAAXICXAAIAABsg");
	this.shape_98.setTransform(1313.9,44.2);

	this.backBtn = new lib.backBtn();
	this.backBtn.parent = this;
	this.backBtn.setTransform(1314.7,44.8);
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.backBtn(), 3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F2F6F8").s().p("Eg9oA8AMAAAh3/MB7RAAAMAAAB3/g");
	this.shape_99.setTransform(394.5,384);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_100.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.backBtn},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,0,1385.8,768);


// stage content:
(lib._3d1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(663.2,-504.4,1385.8,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3d1_1/ylbjq_bl_zz_00000.jpg", id:"ylbjq_bl_zz_00000"},
		{src:"images/3d1_1/ylbjq_bl_zz_00001.jpg", id:"ylbjq_bl_zz_00001"},
		{src:"images/3d1_1/ylbjq_bl_zz_00002.jpg", id:"ylbjq_bl_zz_00002"},
		{src:"images/3d1_1/ylbjq_bl_zz_00003.jpg", id:"ylbjq_bl_zz_00003"},
		{src:"images/3d1_1/ylbjq_bl_zz_00004.jpg", id:"ylbjq_bl_zz_00004"},
		{src:"images/3d1_1/ylbjq_bl_zz_00005.jpg", id:"ylbjq_bl_zz_00005"},
		{src:"images/3d1_1/ylbjq_bl_zz_00006.jpg", id:"ylbjq_bl_zz_00006"},
		{src:"images/3d1_1/ylbjq_bl_zz_00007.jpg", id:"ylbjq_bl_zz_00007"},
		{src:"images/3d1_1/ylbjq_bl_zz_00008.jpg", id:"ylbjq_bl_zz_00008"},
		{src:"images/3d1_1/ylbjq_bl_zz_00009.jpg", id:"ylbjq_bl_zz_00009"},
		{src:"images/3d1_1/ylbjq_bl_zz_00010.jpg", id:"ylbjq_bl_zz_00010"},
		{src:"images/3d1_1/ylbjq_bl_zz_00011.jpg", id:"ylbjq_bl_zz_00011"},
		{src:"images/3d1_1/ylbjq_bl_zz_00012.jpg", id:"ylbjq_bl_zz_00012"},
		{src:"images/3d1_1/ylbjq_bl_zz_00013.jpg", id:"ylbjq_bl_zz_00013"},
		{src:"images/3d1_1/ylbjq_bl_zz_00014.jpg", id:"ylbjq_bl_zz_00014"},
		{src:"images/3d1_1/ylbjq_bl_zz_00015.jpg", id:"ylbjq_bl_zz_00015"},
		{src:"images/3d1_1/ylbjq_bl_zz_00016.jpg", id:"ylbjq_bl_zz_00016"},
		{src:"images/3d1_1/ylbjq_bl_zz_00017.jpg", id:"ylbjq_bl_zz_00017"},
		{src:"images/3d1_1/ylbjq_bl_zz_00018.jpg", id:"ylbjq_bl_zz_00018"},
		{src:"images/3d1_1/ylbjq_bl_zz_00019.jpg", id:"ylbjq_bl_zz_00019"},
		{src:"images/3d1_1/ylbjq_bl_zz_00020.jpg", id:"ylbjq_bl_zz_00020"},
		{src:"images/3d1_1/ylbjq_bl_zz_00021.jpg", id:"ylbjq_bl_zz_00021"},
		{src:"images/3d1_1/ylbjq_bl_zz_00022.jpg", id:"ylbjq_bl_zz_00022"},
		{src:"images/3d1_1/ylbjq_bl_zz_00023.jpg", id:"ylbjq_bl_zz_00023"},
		{src:"images/3d1_1/ylbjq_bl_zz_00024.jpg", id:"ylbjq_bl_zz_00024"},
		{src:"images/3d1_1/ylbjq_bl_zz_00025.jpg", id:"ylbjq_bl_zz_00025"},
		{src:"images/3d1_1/ylbjq_bl_zz_00026.jpg", id:"ylbjq_bl_zz_00026"},
		{src:"images/3d1_1/ylbjq_bl_zz_00027.jpg", id:"ylbjq_bl_zz_00027"},
		{src:"images/3d1_1/ylbjq_bl_zz_00028.jpg", id:"ylbjq_bl_zz_00028"},
		{src:"images/3d1_1/ylbjq_bl_zz_00029.jpg", id:"ylbjq_bl_zz_00029"},
		{src:"images/3d1_1/ylbjq_bl_zz_00030.jpg", id:"ylbjq_bl_zz_00030"},
		{src:"images/3d1_1/ylbjq_bl_zz_00031.jpg", id:"ylbjq_bl_zz_00031"},
		{src:"images/3d1_1/ylbjq_bl_zz_00032.jpg", id:"ylbjq_bl_zz_00032"},
		{src:"images/3d1_1/ylbjq_bl_zz_00033.jpg", id:"ylbjq_bl_zz_00033"},
		{src:"images/3d1_1/ylbjq_bl_zz_00034.jpg", id:"ylbjq_bl_zz_00034"},
		{src:"images/3d1_1/ylbjq_bl_zz_00035.jpg", id:"ylbjq_bl_zz_00035"},
		{src:"images/3d1_1/ylbjq_bl_zz_00036.jpg", id:"ylbjq_bl_zz_00036"},
		{src:"images/3d1_1/ylbjq_bl_zz_00037.jpg", id:"ylbjq_bl_zz_00037"},
		{src:"images/3d1_1/ylbjq_bl_zz_00038.jpg", id:"ylbjq_bl_zz_00038"},
		{src:"images/3d1_1/ylbjq_bl_zz_00039.jpg", id:"ylbjq_bl_zz_00039"},
		{src:"images/3d1_1/ylbjq_bl_zz_00040.jpg", id:"ylbjq_bl_zz_00040"},
		{src:"images/3d1_1/ylbjq_bl_zz_00041.jpg", id:"ylbjq_bl_zz_00041"},
		{src:"images/3d1_1/ylbjq_bl_zz_00042.jpg", id:"ylbjq_bl_zz_00042"},
		{src:"images/3d1_1/ylbjq_bl_zz_00043.jpg", id:"ylbjq_bl_zz_00043"},
		{src:"images/3d1_1/ylbjq_bl_zz_00044.jpg", id:"ylbjq_bl_zz_00044"},
		{src:"images/3d1_1/ylbjq_bl_zz_00045.jpg", id:"ylbjq_bl_zz_00045"},
		{src:"images/3d1_1/ylbjq_bl_zz_00046.jpg", id:"ylbjq_bl_zz_00046"},
		{src:"images/3d1_1/ylbjq_bl_zz_00047.jpg", id:"ylbjq_bl_zz_00047"},
		{src:"images/3d1_1/ylbjq_bl_zz_00048.jpg", id:"ylbjq_bl_zz_00048"},
		{src:"images/3d1_1/ylbjq_bl_zz_00049.jpg", id:"ylbjq_bl_zz_00049"},
		{src:"images/3d1_1/ylbjq_bl_zz_00050.jpg", id:"ylbjq_bl_zz_00050"},
		{src:"images/3d1_1/ylbjq_bl_zz_00051.jpg", id:"ylbjq_bl_zz_00051"},
		{src:"images/3d1_1/ylbjq_bl_zz_00052.jpg", id:"ylbjq_bl_zz_00052"},
		{src:"images/3d1_1/ylbjq_bl_zz_00053.jpg", id:"ylbjq_bl_zz_00053"},
		{src:"images/3d1_1/ylbjq_bl_zz_00054.jpg", id:"ylbjq_bl_zz_00054"},
		{src:"images/3d1_1/ylbjq_bl_zz_00055.jpg", id:"ylbjq_bl_zz_00055"},
		{src:"images/3d1_1/ylbjq_bl_zz_00056.jpg", id:"ylbjq_bl_zz_00056"},
		{src:"images/3d1_1/ylbjq_bl_zz_00057.jpg", id:"ylbjq_bl_zz_00057"},
		{src:"images/3d1_1/ylbjq_bl_zz_00058.jpg", id:"ylbjq_bl_zz_00058"},
		{src:"images/3d1_1/ylbjq_bl_zz_00059.jpg", id:"ylbjq_bl_zz_00059"},
		{src:"images/3d1_1/ylbjq_bl_zz_00060.jpg", id:"ylbjq_bl_zz_00060"},
		{src:"images/3d1_1/ylbjq_bl_zz_00061.jpg", id:"ylbjq_bl_zz_00061"},
		{src:"images/3d1_1/ylbjq_bl_zz_00062.jpg", id:"ylbjq_bl_zz_00062"},
		{src:"images/3d1_1/ylbjq_bl_zz_00063.jpg", id:"ylbjq_bl_zz_00063"},
		{src:"images/3d1_1/ylbjq_bl_zz_00064.jpg", id:"ylbjq_bl_zz_00064"},
		{src:"images/3d1_1/ylbjq_bl_zz_00065.jpg", id:"ylbjq_bl_zz_00065"},
		{src:"images/3d1_1/ylbjq_bl_zz_00066.jpg", id:"ylbjq_bl_zz_00066"},
		{src:"images/3d1_1/ylbjq_bl_zz_00067.jpg", id:"ylbjq_bl_zz_00067"},
		{src:"images/3d1_1/ylbjq_bl_zz_00068.jpg", id:"ylbjq_bl_zz_00068"},
		{src:"images/3d1_1/ylbjq_bl_zz_00069.jpg", id:"ylbjq_bl_zz_00069"},
		{src:"images/3d1_1/ylbjq_bl_zz_00070.jpg", id:"ylbjq_bl_zz_00070"},
		{src:"images/3d1_1/ylbjq_bl_zz_00071.jpg", id:"ylbjq_bl_zz_00071"},
		{src:"images/3d1_1/ylbjq_bl_zz_00072.jpg", id:"ylbjq_bl_zz_00072"},
		{src:"images/3d1_1/ylbjq_bl_zz_00073.jpg", id:"ylbjq_bl_zz_00073"},
		{src:"images/3d1_1/ylbjq_bl_zz_00074.jpg", id:"ylbjq_bl_zz_00074"},
		{src:"images/3d1_1/ylbjq_bl_zz_00075.jpg", id:"ylbjq_bl_zz_00075"},
		{src:"images/3d1_1/ylbjq_bl_zz_00076.jpg", id:"ylbjq_bl_zz_00076"},
		{src:"images/3d1_1/ylbjq_bl_zz_00077.jpg", id:"ylbjq_bl_zz_00077"},
		{src:"images/3d1_1/ylbjq_bl_zz_00078.jpg", id:"ylbjq_bl_zz_00078"},
		{src:"images/3d1_1/ylbjq_bl_zz_00079.jpg", id:"ylbjq_bl_zz_00079"},
		{src:"images/3d1_1/ylbjq_bl_zz_00080.jpg", id:"ylbjq_bl_zz_00080"},
		{src:"images/3d1_1/ylbjq_bl_zz_00081.jpg", id:"ylbjq_bl_zz_00081"},
		{src:"images/3d1_1/ylbjq_bl_zz_00082.jpg", id:"ylbjq_bl_zz_00082"},
		{src:"images/3d1_1/ylbjq_bl_zz_00083.jpg", id:"ylbjq_bl_zz_00083"},
		{src:"images/3d1_1/ylbjq_bl_zz_00084.jpg", id:"ylbjq_bl_zz_00084"},
		{src:"images/3d1_1/ylbjq_bl_zz_00085.jpg", id:"ylbjq_bl_zz_00085"},
		{src:"images/3d1_1/ylbjq_bl_zz_00086.jpg", id:"ylbjq_bl_zz_00086"},
		{src:"images/3d1_1/ylbjq_bl_zz_00087.jpg", id:"ylbjq_bl_zz_00087"},
		{src:"images/3d1_1/ylbjq_bl_zz_00088.jpg", id:"ylbjq_bl_zz_00088"},
		{src:"images/3d1_1/ylbjq_bl_zz_00089.jpg", id:"ylbjq_bl_zz_00089"},
		{src:"images/3d1_1/ylbjq_bl_zz_00090.jpg", id:"ylbjq_bl_zz_00090"},
		{src:"images/3d1_1/ylbjq_bl_zz_00091.jpg", id:"ylbjq_bl_zz_00091"},
		{src:"images/3d1_1/ylbjq_bl_zz_00092.jpg", id:"ylbjq_bl_zz_00092"},
		{src:"images/3d1_1/ylbjq_bl_zz_00093.jpg", id:"ylbjq_bl_zz_00093"},
		{src:"images/3d1_1/ylbjq_bl_zz_00094.jpg", id:"ylbjq_bl_zz_00094"},
		{src:"images/3d1_1/ylbjq_bl_zz_00095.jpg", id:"ylbjq_bl_zz_00095"},
		{src:"images/3d1_1/ylbjq_bl_zz_00096.jpg", id:"ylbjq_bl_zz_00096"},
		{src:"images/3d1_1/ylbjq_bl_zz_00097.jpg", id:"ylbjq_bl_zz_00097"},
		{src:"images/3d1_1/ylbjq_bl_zz_00098.jpg", id:"ylbjq_bl_zz_00098"},
		{src:"images/3d1_1/ylbjq_bl_zz_00099.jpg", id:"ylbjq_bl_zz_00099"},
		{src:"images/3d1_1/ylbjq_bl_zz_00100.jpg", id:"ylbjq_bl_zz_00100"},
		{src:"images/3d1_1/ylbjq_bl_zz_00101.jpg", id:"ylbjq_bl_zz_00101"},
		{src:"images/3d1_1/ylbjq_bl_zz_00102.jpg", id:"ylbjq_bl_zz_00102"},
		{src:"images/3d1_1/ylbjq_bl_zz_00103.jpg", id:"ylbjq_bl_zz_00103"},
		{src:"images/3d1_1/ylbjq_bl_zz_00104.jpg", id:"ylbjq_bl_zz_00104"},
		{src:"images/3d1_1/ylbjq_bl_zz_00105.jpg", id:"ylbjq_bl_zz_00105"},
		{src:"images/3d1_1/ylbjq_bl_zz_00106.jpg", id:"ylbjq_bl_zz_00106"},
		{src:"images/3d1_1/ylbjq_bl_zz_00107.jpg", id:"ylbjq_bl_zz_00107"},
		{src:"images/3d1_1/ylbjq_bl_zz_00108.jpg", id:"ylbjq_bl_zz_00108"},
		{src:"images/3d1_1/ylbjq_bl_zz_00109.jpg", id:"ylbjq_bl_zz_00109"},
		{src:"images/3d1_1/ylbjq_bl_zz_00110.jpg", id:"ylbjq_bl_zz_00110"},
		{src:"images/3d1_1/ylbjq_bl_zz_00111.jpg", id:"ylbjq_bl_zz_00111"},
		{src:"images/3d1_1/ylbjq_bl_zz_00112.jpg", id:"ylbjq_bl_zz_00112"},
		{src:"images/3d1_1/ylbjq_bl_zz_00113.jpg", id:"ylbjq_bl_zz_00113"},
		{src:"images/3d1_1/ylbjq_bl_zz_00114.jpg", id:"ylbjq_bl_zz_00114"},
		{src:"images/3d1_1/ylbjq_bl_zz_00115.jpg", id:"ylbjq_bl_zz_00115"},
		{src:"images/3d1_1/ylbjq_bl_zz_00116.jpg", id:"ylbjq_bl_zz_00116"},
		{src:"images/3d1_1/ylbjq_bl_zz_00117.jpg", id:"ylbjq_bl_zz_00117"},
		{src:"images/3d1_1/ylbjq_bl_zz_00118.jpg", id:"ylbjq_bl_zz_00118"},
		{src:"images/3d1_1/ylbjq_bl_zz_00119.jpg", id:"ylbjq_bl_zz_00119"},
		{src:"images/3d1_1/ylbjq_bl_zz_00120.jpg", id:"ylbjq_bl_zz_00120"},
		{src:"images/3d1_1/ylbjq_bl_zz_00121.jpg", id:"ylbjq_bl_zz_00121"},
		{src:"images/3d1_1/ylbjq_bl_zz_00122.jpg", id:"ylbjq_bl_zz_00122"},
		{src:"images/3d1_1/ylbjq_bl_zz_00123.jpg", id:"ylbjq_bl_zz_00123"},
		{src:"images/3d1_1/ylbjq_bl_zz_00124.jpg", id:"ylbjq_bl_zz_00124"},
		{src:"images/3d1_1/ylbjq_bl_zz_00125.jpg", id:"ylbjq_bl_zz_00125"},
		{src:"images/3d1_1/ylbjq_bl_zz_00126.jpg", id:"ylbjq_bl_zz_00126"},
		{src:"images/3d1_1/ylbjq_bl_zz_00127.jpg", id:"ylbjq_bl_zz_00127"},
		{src:"images/3d1_1/ylbjq_bl_zz_00128.jpg", id:"ylbjq_bl_zz_00128"},
		{src:"images/3d1_1/ylbjq_bl_zz_00129.jpg", id:"ylbjq_bl_zz_00129"},
		{src:"images/3d1_1/ylbjq_bl_zz_00130.jpg", id:"ylbjq_bl_zz_00130"},
		{src:"images/3d1_1/ylbjq_bl_zz_00131.jpg", id:"ylbjq_bl_zz_00131"},
		{src:"images/3d1_1/ylbjq_bl_zz_00132.jpg", id:"ylbjq_bl_zz_00132"},
		{src:"images/3d1_1/ylbjq_bl_zz_00133.jpg", id:"ylbjq_bl_zz_00133"},
		{src:"images/3d1_1/ylbjq_bl_zz_00134.jpg", id:"ylbjq_bl_zz_00134"},
		{src:"images/3d1_1/ylbjq_bl_zz_00135.jpg", id:"ylbjq_bl_zz_00135"},
		{src:"images/3d1_1/ylbjq_bl_zz_00136.jpg", id:"ylbjq_bl_zz_00136"},
		{src:"images/3d1_1/ylbjq_bl_zz_00137.jpg", id:"ylbjq_bl_zz_00137"},
		{src:"images/3d1_1/ylbjq_bl_zz_00138.jpg", id:"ylbjq_bl_zz_00138"},
		{src:"images/3d1_1/ylbjq_bl_zz_00139.jpg", id:"ylbjq_bl_zz_00139"},
		{src:"images/3d1_1/ylbjq_bl_zz_00140.jpg", id:"ylbjq_bl_zz_00140"},
		{src:"images/3d1_1/ylbjq_bl_zz_00141.jpg", id:"ylbjq_bl_zz_00141"},
		{src:"images/3d1_1/ylbjq_bl_zz_00142.jpg", id:"ylbjq_bl_zz_00142"},
		{src:"images/3d1_1/ylbjq_bl_zz_00143.jpg", id:"ylbjq_bl_zz_00143"},
		{src:"images/3d1_1/ylbjq_bl_zz_00144.jpg", id:"ylbjq_bl_zz_00144"},
		{src:"images/3d1_1/ylbjq_bl_zz_00145.jpg", id:"ylbjq_bl_zz_00145"},
		{src:"images/3d1_1/ylbjq_bl_zz_00146.jpg", id:"ylbjq_bl_zz_00146"},
		{src:"images/3d1_1/ylbjq_bl_zz_00147.jpg", id:"ylbjq_bl_zz_00147"},
		{src:"images/3d1_1/ylbjq_bl_zz_00148.jpg", id:"ylbjq_bl_zz_00148"},
		{src:"images/3d1_1/ylbjq_bl_zz_00149.jpg", id:"ylbjq_bl_zz_00149"},
		{src:"images/3d1_1/ylbjq_bl_zz_00150.jpg", id:"ylbjq_bl_zz_00150"},
		{src:"images/3d1_1/ylbjq_bl_zz_00151.jpg", id:"ylbjq_bl_zz_00151"},
		{src:"images/3d1_1/ylbjq_bl_zz_00152.jpg", id:"ylbjq_bl_zz_00152"},
		{src:"images/3d1_1/ylbjq_bl_zz_00153.jpg", id:"ylbjq_bl_zz_00153"},
		{src:"images/3d1_1/ylbjq_bl_zz_00154.jpg", id:"ylbjq_bl_zz_00154"},
		{src:"images/3d1_1/ylbjq_bl_zz_00155.jpg", id:"ylbjq_bl_zz_00155"},
		{src:"images/3d1_1/ylbjq_bl_zz_00156.jpg", id:"ylbjq_bl_zz_00156"},
		{src:"images/3d1_1/ylbjq_bl_zz_00157.jpg", id:"ylbjq_bl_zz_00157"},
		{src:"images/3d1_1/ylbjq_bl_zz_00158.jpg", id:"ylbjq_bl_zz_00158"},
		{src:"images/3d1_1/ylbjq_bl_zz_00159.jpg", id:"ylbjq_bl_zz_00159"},
		{src:"images/3d1_1/ylbjq_bl_zz_00160.jpg", id:"ylbjq_bl_zz_00160"},
		{src:"images/3d1_1/ylbjq_bl_zz_00161.jpg", id:"ylbjq_bl_zz_00161"},
		{src:"images/3d1_1/ylbjq_bl_zz_00162.jpg", id:"ylbjq_bl_zz_00162"},
		{src:"images/3d1_1/ylbjq_bl_zz_00163.jpg", id:"ylbjq_bl_zz_00163"},
		{src:"images/3d1_1/ylbjq_bl_zz_00164.jpg", id:"ylbjq_bl_zz_00164"},
		{src:"images/3d1_1/ylbjq_bl_zz_00165.jpg", id:"ylbjq_bl_zz_00165"},
		{src:"images/3d1_1/ylbjq_bl_zz_00166.jpg", id:"ylbjq_bl_zz_00166"},
		{src:"images/3d1_1/ylbjq_bl_zz_00167.jpg", id:"ylbjq_bl_zz_00167"},
		{src:"images/3d1_1/ylbjq_bl_zz_00168.jpg", id:"ylbjq_bl_zz_00168"},
		{src:"images/3d1_1/ylbjq_bl_zz_00169.jpg", id:"ylbjq_bl_zz_00169"},
		{src:"images/3d1_1/ylbjq_bl_zz_00170.jpg", id:"ylbjq_bl_zz_00170"},
		{src:"images/3d1_1/ylbjq_bl_zz_00171.jpg", id:"ylbjq_bl_zz_00171"},
		{src:"images/3d1_1/ylbjq_bl_zz_00172.jpg", id:"ylbjq_bl_zz_00172"},
		{src:"images/3d1_1/ylbjq_bl_zz_00173.jpg", id:"ylbjq_bl_zz_00173"},
		{src:"images/3d1_1/ylbjq_bl_zz_00174.jpg", id:"ylbjq_bl_zz_00174"},
		{src:"images/3d1_1/ylbjq_bl_zz_00175.jpg", id:"ylbjq_bl_zz_00175"},
		{src:"images/3d1_1/ylbjq_bl_zz_00176.jpg", id:"ylbjq_bl_zz_00176"},
		{src:"images/3d1_1/ylbjq_bl_zz_00177.jpg", id:"ylbjq_bl_zz_00177"},
		{src:"images/3d1_1/ylbjq_bl_zz_00178.jpg", id:"ylbjq_bl_zz_00178"},
		{src:"images/3d1_1/ylbjq_bl_zz_00179.jpg", id:"ylbjq_bl_zz_00179"},
		{src:"images/3d1_1/ylbjq_bl_zz_00180.jpg", id:"ylbjq_bl_zz_00180"},
		{src:"images/3d1_1/ylbjq_bl_zz_00181.jpg", id:"ylbjq_bl_zz_00181"},
		{src:"images/3d1_1/ylbjq_bl_zz_00182.jpg", id:"ylbjq_bl_zz_00182"},
		{src:"images/3d1_1/ylbjq_bl_zz_00183.jpg", id:"ylbjq_bl_zz_00183"},
		{src:"images/3d1_1/ylbjq_bl_zz_00184.jpg", id:"ylbjq_bl_zz_00184"},
		{src:"images/3d1_1/ylbjq_bl_zz_00185.jpg", id:"ylbjq_bl_zz_00185"},
		{src:"images/3d1_1/ylbjq_bl_zz_00186.jpg", id:"ylbjq_bl_zz_00186"},
		{src:"images/3d1_1/ylbjq_bl_zz_00187.jpg", id:"ylbjq_bl_zz_00187"},
		{src:"images/3d1_1/ylbjq_bl_zz_00188.jpg", id:"ylbjq_bl_zz_00188"},
		{src:"images/3d1_1/ylbjq_bl_zz_00189.jpg", id:"ylbjq_bl_zz_00189"},
		{src:"images/3d1_1/ylbjq_bl_zz_00190.jpg", id:"ylbjq_bl_zz_00190"},
		{src:"images/3d1_1/ylbjq_bl_zz_00191.jpg", id:"ylbjq_bl_zz_00191"},
		{src:"images/3d1_1/ylbjq_bl_zz_00192.jpg", id:"ylbjq_bl_zz_00192"},
		{src:"images/3d1_1/ylbjq_bl_zz_00193.jpg", id:"ylbjq_bl_zz_00193"},
		{src:"images/3d1_1/ylbjq_bl_zz_00194.jpg", id:"ylbjq_bl_zz_00194"},
		{src:"images/3d1_1/ylbjq_bl_zz_00195.jpg", id:"ylbjq_bl_zz_00195"},
		{src:"images/3d1_1/ylbjq_bl_zz_00196.jpg", id:"ylbjq_bl_zz_00196"},
		{src:"images/3d1_1/ylbjq_bl_zz_00197.jpg", id:"ylbjq_bl_zz_00197"},
		{src:"images/3d1_1/ylbjq_bl_zz_00198.jpg", id:"ylbjq_bl_zz_00198"},
		{src:"images/3d1_1/ylbjq_bl_zz_00199.jpg", id:"ylbjq_bl_zz_00199"},
		{src:"images/3d1_1/ylbjq_bl_zz_00200.jpg", id:"ylbjq_bl_zz_00200"}
	],
	preloads: []
};




})(lib3d1_1 = lib3d1_1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3d1_1, images, createjs, ss, AdobeAn;