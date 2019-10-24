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



(lib.dxxcl_yl02_00000 = function() {
	this.initialize(img.dxxcl_yl02_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00001 = function() {
	this.initialize(img.dxxcl_yl02_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00002 = function() {
	this.initialize(img.dxxcl_yl02_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00003 = function() {
	this.initialize(img.dxxcl_yl02_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00004 = function() {
	this.initialize(img.dxxcl_yl02_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00005 = function() {
	this.initialize(img.dxxcl_yl02_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00006 = function() {
	this.initialize(img.dxxcl_yl02_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00007 = function() {
	this.initialize(img.dxxcl_yl02_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00008 = function() {
	this.initialize(img.dxxcl_yl02_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00009 = function() {
	this.initialize(img.dxxcl_yl02_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00010 = function() {
	this.initialize(img.dxxcl_yl02_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00011 = function() {
	this.initialize(img.dxxcl_yl02_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00012 = function() {
	this.initialize(img.dxxcl_yl02_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00013 = function() {
	this.initialize(img.dxxcl_yl02_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00014 = function() {
	this.initialize(img.dxxcl_yl02_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00015 = function() {
	this.initialize(img.dxxcl_yl02_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00016 = function() {
	this.initialize(img.dxxcl_yl02_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00017 = function() {
	this.initialize(img.dxxcl_yl02_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00018 = function() {
	this.initialize(img.dxxcl_yl02_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00019 = function() {
	this.initialize(img.dxxcl_yl02_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00020 = function() {
	this.initialize(img.dxxcl_yl02_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00021 = function() {
	this.initialize(img.dxxcl_yl02_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00022 = function() {
	this.initialize(img.dxxcl_yl02_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00023 = function() {
	this.initialize(img.dxxcl_yl02_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00024 = function() {
	this.initialize(img.dxxcl_yl02_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00025 = function() {
	this.initialize(img.dxxcl_yl02_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00026 = function() {
	this.initialize(img.dxxcl_yl02_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00027 = function() {
	this.initialize(img.dxxcl_yl02_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00028 = function() {
	this.initialize(img.dxxcl_yl02_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00029 = function() {
	this.initialize(img.dxxcl_yl02_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00030 = function() {
	this.initialize(img.dxxcl_yl02_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00031 = function() {
	this.initialize(img.dxxcl_yl02_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00032 = function() {
	this.initialize(img.dxxcl_yl02_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00033 = function() {
	this.initialize(img.dxxcl_yl02_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00034 = function() {
	this.initialize(img.dxxcl_yl02_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00035 = function() {
	this.initialize(img.dxxcl_yl02_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00036 = function() {
	this.initialize(img.dxxcl_yl02_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00037 = function() {
	this.initialize(img.dxxcl_yl02_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00038 = function() {
	this.initialize(img.dxxcl_yl02_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00039 = function() {
	this.initialize(img.dxxcl_yl02_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00040 = function() {
	this.initialize(img.dxxcl_yl02_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00041 = function() {
	this.initialize(img.dxxcl_yl02_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00042 = function() {
	this.initialize(img.dxxcl_yl02_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00043 = function() {
	this.initialize(img.dxxcl_yl02_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00044 = function() {
	this.initialize(img.dxxcl_yl02_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00045 = function() {
	this.initialize(img.dxxcl_yl02_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00046 = function() {
	this.initialize(img.dxxcl_yl02_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00047 = function() {
	this.initialize(img.dxxcl_yl02_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00048 = function() {
	this.initialize(img.dxxcl_yl02_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00049 = function() {
	this.initialize(img.dxxcl_yl02_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00050 = function() {
	this.initialize(img.dxxcl_yl02_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00051 = function() {
	this.initialize(img.dxxcl_yl02_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00052 = function() {
	this.initialize(img.dxxcl_yl02_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00053 = function() {
	this.initialize(img.dxxcl_yl02_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00054 = function() {
	this.initialize(img.dxxcl_yl02_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00055 = function() {
	this.initialize(img.dxxcl_yl02_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00056 = function() {
	this.initialize(img.dxxcl_yl02_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00057 = function() {
	this.initialize(img.dxxcl_yl02_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00058 = function() {
	this.initialize(img.dxxcl_yl02_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00059 = function() {
	this.initialize(img.dxxcl_yl02_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00060 = function() {
	this.initialize(img.dxxcl_yl02_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00061 = function() {
	this.initialize(img.dxxcl_yl02_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00062 = function() {
	this.initialize(img.dxxcl_yl02_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00063 = function() {
	this.initialize(img.dxxcl_yl02_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00064 = function() {
	this.initialize(img.dxxcl_yl02_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00065 = function() {
	this.initialize(img.dxxcl_yl02_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00066 = function() {
	this.initialize(img.dxxcl_yl02_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00067 = function() {
	this.initialize(img.dxxcl_yl02_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00068 = function() {
	this.initialize(img.dxxcl_yl02_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00069 = function() {
	this.initialize(img.dxxcl_yl02_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00070 = function() {
	this.initialize(img.dxxcl_yl02_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00071 = function() {
	this.initialize(img.dxxcl_yl02_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00072 = function() {
	this.initialize(img.dxxcl_yl02_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00073 = function() {
	this.initialize(img.dxxcl_yl02_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00074 = function() {
	this.initialize(img.dxxcl_yl02_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00075 = function() {
	this.initialize(img.dxxcl_yl02_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00076 = function() {
	this.initialize(img.dxxcl_yl02_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00077 = function() {
	this.initialize(img.dxxcl_yl02_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00078 = function() {
	this.initialize(img.dxxcl_yl02_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00079 = function() {
	this.initialize(img.dxxcl_yl02_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00080 = function() {
	this.initialize(img.dxxcl_yl02_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00081 = function() {
	this.initialize(img.dxxcl_yl02_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00082 = function() {
	this.initialize(img.dxxcl_yl02_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00083 = function() {
	this.initialize(img.dxxcl_yl02_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00084 = function() {
	this.initialize(img.dxxcl_yl02_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00085 = function() {
	this.initialize(img.dxxcl_yl02_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00086 = function() {
	this.initialize(img.dxxcl_yl02_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00087 = function() {
	this.initialize(img.dxxcl_yl02_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00088 = function() {
	this.initialize(img.dxxcl_yl02_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00089 = function() {
	this.initialize(img.dxxcl_yl02_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00090 = function() {
	this.initialize(img.dxxcl_yl02_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00091 = function() {
	this.initialize(img.dxxcl_yl02_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00092 = function() {
	this.initialize(img.dxxcl_yl02_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00093 = function() {
	this.initialize(img.dxxcl_yl02_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00094 = function() {
	this.initialize(img.dxxcl_yl02_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00095 = function() {
	this.initialize(img.dxxcl_yl02_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00096 = function() {
	this.initialize(img.dxxcl_yl02_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00097 = function() {
	this.initialize(img.dxxcl_yl02_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00098 = function() {
	this.initialize(img.dxxcl_yl02_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00099 = function() {
	this.initialize(img.dxxcl_yl02_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00100 = function() {
	this.initialize(img.dxxcl_yl02_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00101 = function() {
	this.initialize(img.dxxcl_yl02_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00102 = function() {
	this.initialize(img.dxxcl_yl02_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00103 = function() {
	this.initialize(img.dxxcl_yl02_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00104 = function() {
	this.initialize(img.dxxcl_yl02_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00105 = function() {
	this.initialize(img.dxxcl_yl02_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00106 = function() {
	this.initialize(img.dxxcl_yl02_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00107 = function() {
	this.initialize(img.dxxcl_yl02_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00108 = function() {
	this.initialize(img.dxxcl_yl02_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00109 = function() {
	this.initialize(img.dxxcl_yl02_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00110 = function() {
	this.initialize(img.dxxcl_yl02_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00111 = function() {
	this.initialize(img.dxxcl_yl02_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00112 = function() {
	this.initialize(img.dxxcl_yl02_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00113 = function() {
	this.initialize(img.dxxcl_yl02_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00114 = function() {
	this.initialize(img.dxxcl_yl02_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00115 = function() {
	this.initialize(img.dxxcl_yl02_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00116 = function() {
	this.initialize(img.dxxcl_yl02_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00117 = function() {
	this.initialize(img.dxxcl_yl02_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00118 = function() {
	this.initialize(img.dxxcl_yl02_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00119 = function() {
	this.initialize(img.dxxcl_yl02_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00120 = function() {
	this.initialize(img.dxxcl_yl02_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00121 = function() {
	this.initialize(img.dxxcl_yl02_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00122 = function() {
	this.initialize(img.dxxcl_yl02_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00123 = function() {
	this.initialize(img.dxxcl_yl02_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00124 = function() {
	this.initialize(img.dxxcl_yl02_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00125 = function() {
	this.initialize(img.dxxcl_yl02_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00126 = function() {
	this.initialize(img.dxxcl_yl02_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00127 = function() {
	this.initialize(img.dxxcl_yl02_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00128 = function() {
	this.initialize(img.dxxcl_yl02_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00129 = function() {
	this.initialize(img.dxxcl_yl02_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00130 = function() {
	this.initialize(img.dxxcl_yl02_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00131 = function() {
	this.initialize(img.dxxcl_yl02_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00132 = function() {
	this.initialize(img.dxxcl_yl02_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00133 = function() {
	this.initialize(img.dxxcl_yl02_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00134 = function() {
	this.initialize(img.dxxcl_yl02_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00135 = function() {
	this.initialize(img.dxxcl_yl02_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00136 = function() {
	this.initialize(img.dxxcl_yl02_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00137 = function() {
	this.initialize(img.dxxcl_yl02_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00138 = function() {
	this.initialize(img.dxxcl_yl02_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00139 = function() {
	this.initialize(img.dxxcl_yl02_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00140 = function() {
	this.initialize(img.dxxcl_yl02_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00141 = function() {
	this.initialize(img.dxxcl_yl02_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00142 = function() {
	this.initialize(img.dxxcl_yl02_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00143 = function() {
	this.initialize(img.dxxcl_yl02_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00144 = function() {
	this.initialize(img.dxxcl_yl02_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00145 = function() {
	this.initialize(img.dxxcl_yl02_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00146 = function() {
	this.initialize(img.dxxcl_yl02_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00147 = function() {
	this.initialize(img.dxxcl_yl02_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00148 = function() {
	this.initialize(img.dxxcl_yl02_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00149 = function() {
	this.initialize(img.dxxcl_yl02_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00150 = function() {
	this.initialize(img.dxxcl_yl02_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00151 = function() {
	this.initialize(img.dxxcl_yl02_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00152 = function() {
	this.initialize(img.dxxcl_yl02_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00153 = function() {
	this.initialize(img.dxxcl_yl02_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00154 = function() {
	this.initialize(img.dxxcl_yl02_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00155 = function() {
	this.initialize(img.dxxcl_yl02_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00156 = function() {
	this.initialize(img.dxxcl_yl02_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00157 = function() {
	this.initialize(img.dxxcl_yl02_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00158 = function() {
	this.initialize(img.dxxcl_yl02_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00159 = function() {
	this.initialize(img.dxxcl_yl02_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00160 = function() {
	this.initialize(img.dxxcl_yl02_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00161 = function() {
	this.initialize(img.dxxcl_yl02_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00162 = function() {
	this.initialize(img.dxxcl_yl02_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00163 = function() {
	this.initialize(img.dxxcl_yl02_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00164 = function() {
	this.initialize(img.dxxcl_yl02_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00165 = function() {
	this.initialize(img.dxxcl_yl02_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00166 = function() {
	this.initialize(img.dxxcl_yl02_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00167 = function() {
	this.initialize(img.dxxcl_yl02_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00168 = function() {
	this.initialize(img.dxxcl_yl02_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00169 = function() {
	this.initialize(img.dxxcl_yl02_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00170 = function() {
	this.initialize(img.dxxcl_yl02_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00171 = function() {
	this.initialize(img.dxxcl_yl02_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00172 = function() {
	this.initialize(img.dxxcl_yl02_00172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00173 = function() {
	this.initialize(img.dxxcl_yl02_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00174 = function() {
	this.initialize(img.dxxcl_yl02_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00175 = function() {
	this.initialize(img.dxxcl_yl02_00175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00176 = function() {
	this.initialize(img.dxxcl_yl02_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00177 = function() {
	this.initialize(img.dxxcl_yl02_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00178 = function() {
	this.initialize(img.dxxcl_yl02_00178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00179 = function() {
	this.initialize(img.dxxcl_yl02_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00180 = function() {
	this.initialize(img.dxxcl_yl02_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00181 = function() {
	this.initialize(img.dxxcl_yl02_00181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00182 = function() {
	this.initialize(img.dxxcl_yl02_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00183 = function() {
	this.initialize(img.dxxcl_yl02_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00184 = function() {
	this.initialize(img.dxxcl_yl02_00184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00185 = function() {
	this.initialize(img.dxxcl_yl02_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00186 = function() {
	this.initialize(img.dxxcl_yl02_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00187 = function() {
	this.initialize(img.dxxcl_yl02_00187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00188 = function() {
	this.initialize(img.dxxcl_yl02_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00189 = function() {
	this.initialize(img.dxxcl_yl02_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00190 = function() {
	this.initialize(img.dxxcl_yl02_00190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00191 = function() {
	this.initialize(img.dxxcl_yl02_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00192 = function() {
	this.initialize(img.dxxcl_yl02_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00193 = function() {
	this.initialize(img.dxxcl_yl02_00193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00194 = function() {
	this.initialize(img.dxxcl_yl02_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00195 = function() {
	this.initialize(img.dxxcl_yl02_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00196 = function() {
	this.initialize(img.dxxcl_yl02_00196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00197 = function() {
	this.initialize(img.dxxcl_yl02_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00198 = function() {
	this.initialize(img.dxxcl_yl02_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00199 = function() {
	this.initialize(img.dxxcl_yl02_00199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00200 = function() {
	this.initialize(img.dxxcl_yl02_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00201 = function() {
	this.initialize(img.dxxcl_yl02_00201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00202 = function() {
	this.initialize(img.dxxcl_yl02_00202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00203 = function() {
	this.initialize(img.dxxcl_yl02_00203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00204 = function() {
	this.initialize(img.dxxcl_yl02_00204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00205 = function() {
	this.initialize(img.dxxcl_yl02_00205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00206 = function() {
	this.initialize(img.dxxcl_yl02_00206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00207 = function() {
	this.initialize(img.dxxcl_yl02_00207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00208 = function() {
	this.initialize(img.dxxcl_yl02_00208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00209 = function() {
	this.initialize(img.dxxcl_yl02_00209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00210 = function() {
	this.initialize(img.dxxcl_yl02_00210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00211 = function() {
	this.initialize(img.dxxcl_yl02_00211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl02_00212 = function() {
	this.initialize(img.dxxcl_yl02_00212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.xuanzhuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6,2).p("ADNgGQAABUg8A8Qg8A8hVAAQhUAAg8g8Qg8g8AAhUQAAhBAmg1QAcgoApgW");
	this.shape.setTransform(-1.5,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOADIgGhhICqBUIidBpg");
	this.shape_1.setTransform(-3.4,-17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AkMENQhvhwAAidQAAicBvhwQBwhvCcAAQCeAABvBvQBvBwAACcQAACdhvBwQhvBvieAAQicAAhwhvg");
	this.shape_2.setTransform(-0.9,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-38.9,76.1,76.1);


(lib.Btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF99").s().p("Ak/HhIAAvBIJ/AAIAAPBg");
	this.shape.setTransform(0,0,0.913,0.882);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bsxyl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoPAkwMAAAhJfMBQfAAAMAAABJfg");
	mask.setTransform(257.6,235.2);

	// 图层 1
	this.instance = new lib.dxxcl_yl02_00000();
	this.instance.parent = this;
	this.instance.setTransform(-244,-56);

	this.instance_1 = new lib.dxxcl_yl02_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-244,-56);

	this.instance_2 = new lib.dxxcl_yl02_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-244,-56);

	this.instance_3 = new lib.dxxcl_yl02_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-244,-56);

	this.instance_4 = new lib.dxxcl_yl02_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-244,-56);

	this.instance_5 = new lib.dxxcl_yl02_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-244,-56);

	this.instance_6 = new lib.dxxcl_yl02_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-244,-56);

	this.instance_7 = new lib.dxxcl_yl02_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-244,-56);

	this.instance_8 = new lib.dxxcl_yl02_00008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-244,-56);

	this.instance_9 = new lib.dxxcl_yl02_00009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-244,-56);

	this.instance_10 = new lib.dxxcl_yl02_00010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-244,-56);

	this.instance_11 = new lib.dxxcl_yl02_00011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-244,-56);

	this.instance_12 = new lib.dxxcl_yl02_00012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-244,-56);

	this.instance_13 = new lib.dxxcl_yl02_00013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-244,-56);

	this.instance_14 = new lib.dxxcl_yl02_00014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-244,-56);

	this.instance_15 = new lib.dxxcl_yl02_00015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-244,-56);

	this.instance_16 = new lib.dxxcl_yl02_00016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-244,-56);

	this.instance_17 = new lib.dxxcl_yl02_00017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-244,-56);

	this.instance_18 = new lib.dxxcl_yl02_00018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-244,-56);

	this.instance_19 = new lib.dxxcl_yl02_00019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-244,-56);

	this.instance_20 = new lib.dxxcl_yl02_00020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-244,-56);

	this.instance_21 = new lib.dxxcl_yl02_00021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-244,-56);

	this.instance_22 = new lib.dxxcl_yl02_00022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-244,-56);

	this.instance_23 = new lib.dxxcl_yl02_00023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-244,-56);

	this.instance_24 = new lib.dxxcl_yl02_00024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-244,-56);

	this.instance_25 = new lib.dxxcl_yl02_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-244,-56);

	this.instance_26 = new lib.dxxcl_yl02_00026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-244,-56);

	this.instance_27 = new lib.dxxcl_yl02_00027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-244,-56);

	this.instance_28 = new lib.dxxcl_yl02_00028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-244,-56);

	this.instance_29 = new lib.dxxcl_yl02_00029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-244,-56);

	this.instance_30 = new lib.dxxcl_yl02_00030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-244,-56);

	this.instance_31 = new lib.dxxcl_yl02_00031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-244,-56);

	this.instance_32 = new lib.dxxcl_yl02_00032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-244,-56);

	this.instance_33 = new lib.dxxcl_yl02_00033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-244,-56);

	this.instance_34 = new lib.dxxcl_yl02_00034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-244,-56);

	this.instance_35 = new lib.dxxcl_yl02_00035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-244,-56);

	this.instance_36 = new lib.dxxcl_yl02_00036();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-244,-56);

	this.instance_37 = new lib.dxxcl_yl02_00037();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-244,-56);

	this.instance_38 = new lib.dxxcl_yl02_00038();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-244,-56);

	this.instance_39 = new lib.dxxcl_yl02_00039();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-244,-56);

	this.instance_40 = new lib.dxxcl_yl02_00040();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-244,-56);

	this.instance_41 = new lib.dxxcl_yl02_00041();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-244,-56);

	this.instance_42 = new lib.dxxcl_yl02_00042();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-244,-56);

	this.instance_43 = new lib.dxxcl_yl02_00043();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-244,-56);

	this.instance_44 = new lib.dxxcl_yl02_00044();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-244,-56);

	this.instance_45 = new lib.dxxcl_yl02_00045();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-244,-56);

	this.instance_46 = new lib.dxxcl_yl02_00046();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-244,-56);

	this.instance_47 = new lib.dxxcl_yl02_00047();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-244,-56);

	this.instance_48 = new lib.dxxcl_yl02_00048();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-244,-56);

	this.instance_49 = new lib.dxxcl_yl02_00049();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-244,-56);

	this.instance_50 = new lib.dxxcl_yl02_00050();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-244,-56);

	this.instance_51 = new lib.dxxcl_yl02_00051();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-244,-56);

	this.instance_52 = new lib.dxxcl_yl02_00052();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-244,-56);

	this.instance_53 = new lib.dxxcl_yl02_00053();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-244,-56);

	this.instance_54 = new lib.dxxcl_yl02_00054();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-244,-56);

	this.instance_55 = new lib.dxxcl_yl02_00055();
	this.instance_55.parent = this;
	this.instance_55.setTransform(-244,-56);

	this.instance_56 = new lib.dxxcl_yl02_00056();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-244,-56);

	this.instance_57 = new lib.dxxcl_yl02_00057();
	this.instance_57.parent = this;
	this.instance_57.setTransform(-244,-56);

	this.instance_58 = new lib.dxxcl_yl02_00058();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-244,-56);

	this.instance_59 = new lib.dxxcl_yl02_00059();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-244,-56);

	this.instance_60 = new lib.dxxcl_yl02_00060();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-244,-56);

	this.instance_61 = new lib.dxxcl_yl02_00061();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-244,-56);

	this.instance_62 = new lib.dxxcl_yl02_00062();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-244,-56);

	this.instance_63 = new lib.dxxcl_yl02_00063();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-244,-56);

	this.instance_64 = new lib.dxxcl_yl02_00064();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-244,-56);

	this.instance_65 = new lib.dxxcl_yl02_00065();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-244,-56);

	this.instance_66 = new lib.dxxcl_yl02_00066();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-244,-56);

	this.instance_67 = new lib.dxxcl_yl02_00067();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-244,-56);

	this.instance_68 = new lib.dxxcl_yl02_00068();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-244,-56);

	this.instance_69 = new lib.dxxcl_yl02_00069();
	this.instance_69.parent = this;
	this.instance_69.setTransform(-244,-56);

	this.instance_70 = new lib.dxxcl_yl02_00070();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-244,-56);

	this.instance_71 = new lib.dxxcl_yl02_00071();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-244,-56);

	this.instance_72 = new lib.dxxcl_yl02_00072();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-244,-56);

	this.instance_73 = new lib.dxxcl_yl02_00073();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-244,-56);

	this.instance_74 = new lib.dxxcl_yl02_00074();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-244,-56);

	this.instance_75 = new lib.dxxcl_yl02_00075();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-244,-56);

	this.instance_76 = new lib.dxxcl_yl02_00076();
	this.instance_76.parent = this;
	this.instance_76.setTransform(-244,-56);

	this.instance_77 = new lib.dxxcl_yl02_00077();
	this.instance_77.parent = this;
	this.instance_77.setTransform(-244,-56);

	this.instance_78 = new lib.dxxcl_yl02_00078();
	this.instance_78.parent = this;
	this.instance_78.setTransform(-244,-56);

	this.instance_79 = new lib.dxxcl_yl02_00079();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-244,-56);

	this.instance_80 = new lib.dxxcl_yl02_00080();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-244,-56);

	this.instance_81 = new lib.dxxcl_yl02_00081();
	this.instance_81.parent = this;
	this.instance_81.setTransform(-244,-56);

	this.instance_82 = new lib.dxxcl_yl02_00082();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-244,-56);

	this.instance_83 = new lib.dxxcl_yl02_00083();
	this.instance_83.parent = this;
	this.instance_83.setTransform(-244,-56);

	this.instance_84 = new lib.dxxcl_yl02_00084();
	this.instance_84.parent = this;
	this.instance_84.setTransform(-244,-56);

	this.instance_85 = new lib.dxxcl_yl02_00085();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-244,-56);

	this.instance_86 = new lib.dxxcl_yl02_00086();
	this.instance_86.parent = this;
	this.instance_86.setTransform(-244,-56);

	this.instance_87 = new lib.dxxcl_yl02_00087();
	this.instance_87.parent = this;
	this.instance_87.setTransform(-244,-56);

	this.instance_88 = new lib.dxxcl_yl02_00088();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-244,-56);

	this.instance_89 = new lib.dxxcl_yl02_00089();
	this.instance_89.parent = this;
	this.instance_89.setTransform(-244,-56);

	this.instance_90 = new lib.dxxcl_yl02_00090();
	this.instance_90.parent = this;
	this.instance_90.setTransform(-244,-56);

	this.instance_91 = new lib.dxxcl_yl02_00091();
	this.instance_91.parent = this;
	this.instance_91.setTransform(-244,-56);

	this.instance_92 = new lib.dxxcl_yl02_00092();
	this.instance_92.parent = this;
	this.instance_92.setTransform(-244,-56);

	this.instance_93 = new lib.dxxcl_yl02_00093();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-244,-56);

	this.instance_94 = new lib.dxxcl_yl02_00094();
	this.instance_94.parent = this;
	this.instance_94.setTransform(-244,-56);

	this.instance_95 = new lib.dxxcl_yl02_00095();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-244,-56);

	this.instance_96 = new lib.dxxcl_yl02_00096();
	this.instance_96.parent = this;
	this.instance_96.setTransform(-244,-56);

	this.instance_97 = new lib.dxxcl_yl02_00097();
	this.instance_97.parent = this;
	this.instance_97.setTransform(-244,-56);

	this.instance_98 = new lib.dxxcl_yl02_00098();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-244,-56);

	this.instance_99 = new lib.dxxcl_yl02_00099();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-244,-56);

	this.instance_100 = new lib.dxxcl_yl02_00100();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-244,-56);

	this.instance_101 = new lib.dxxcl_yl02_00101();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-244,-56);

	this.instance_102 = new lib.dxxcl_yl02_00102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(-244,-56);

	this.instance_103 = new lib.dxxcl_yl02_00103();
	this.instance_103.parent = this;
	this.instance_103.setTransform(-244,-56);

	this.instance_104 = new lib.dxxcl_yl02_00104();
	this.instance_104.parent = this;
	this.instance_104.setTransform(-244,-56);

	this.instance_105 = new lib.dxxcl_yl02_00105();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-244,-56);

	this.instance_106 = new lib.dxxcl_yl02_00106();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-244,-56);

	this.instance_107 = new lib.dxxcl_yl02_00107();
	this.instance_107.parent = this;
	this.instance_107.setTransform(-244,-56);

	this.instance_108 = new lib.dxxcl_yl02_00108();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-244,-56);

	this.instance_109 = new lib.dxxcl_yl02_00109();
	this.instance_109.parent = this;
	this.instance_109.setTransform(-244,-56);

	this.instance_110 = new lib.dxxcl_yl02_00110();
	this.instance_110.parent = this;
	this.instance_110.setTransform(-244,-56);

	this.instance_111 = new lib.dxxcl_yl02_00111();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-244,-56);

	this.instance_112 = new lib.dxxcl_yl02_00112();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-244,-56);

	this.instance_113 = new lib.dxxcl_yl02_00113();
	this.instance_113.parent = this;
	this.instance_113.setTransform(-244,-56);

	this.instance_114 = new lib.dxxcl_yl02_00114();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-244,-56);

	this.instance_115 = new lib.dxxcl_yl02_00115();
	this.instance_115.parent = this;
	this.instance_115.setTransform(-244,-56);

	this.instance_116 = new lib.dxxcl_yl02_00116();
	this.instance_116.parent = this;
	this.instance_116.setTransform(-244,-56);

	this.instance_117 = new lib.dxxcl_yl02_00117();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-244,-56);

	this.instance_118 = new lib.dxxcl_yl02_00118();
	this.instance_118.parent = this;
	this.instance_118.setTransform(-244,-56);

	this.instance_119 = new lib.dxxcl_yl02_00119();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-244,-56);

	this.instance_120 = new lib.dxxcl_yl02_00120();
	this.instance_120.parent = this;
	this.instance_120.setTransform(-244,-56);

	this.instance_121 = new lib.dxxcl_yl02_00121();
	this.instance_121.parent = this;
	this.instance_121.setTransform(-244,-56);

	this.instance_122 = new lib.dxxcl_yl02_00122();
	this.instance_122.parent = this;
	this.instance_122.setTransform(-244,-56);

	this.instance_123 = new lib.dxxcl_yl02_00123();
	this.instance_123.parent = this;
	this.instance_123.setTransform(-244,-56);

	this.instance_124 = new lib.dxxcl_yl02_00124();
	this.instance_124.parent = this;
	this.instance_124.setTransform(-244,-56);

	this.instance_125 = new lib.dxxcl_yl02_00125();
	this.instance_125.parent = this;
	this.instance_125.setTransform(-244,-56);

	this.instance_126 = new lib.dxxcl_yl02_00126();
	this.instance_126.parent = this;
	this.instance_126.setTransform(-244,-56);

	this.instance_127 = new lib.dxxcl_yl02_00127();
	this.instance_127.parent = this;
	this.instance_127.setTransform(-244,-56);

	this.instance_128 = new lib.dxxcl_yl02_00128();
	this.instance_128.parent = this;
	this.instance_128.setTransform(-244,-56);

	this.instance_129 = new lib.dxxcl_yl02_00129();
	this.instance_129.parent = this;
	this.instance_129.setTransform(-244,-56);

	this.instance_130 = new lib.dxxcl_yl02_00130();
	this.instance_130.parent = this;
	this.instance_130.setTransform(-244,-56);

	this.instance_131 = new lib.dxxcl_yl02_00131();
	this.instance_131.parent = this;
	this.instance_131.setTransform(-244,-56);

	this.instance_132 = new lib.dxxcl_yl02_00132();
	this.instance_132.parent = this;
	this.instance_132.setTransform(-244,-56);

	this.instance_133 = new lib.dxxcl_yl02_00133();
	this.instance_133.parent = this;
	this.instance_133.setTransform(-244,-56);

	this.instance_134 = new lib.dxxcl_yl02_00134();
	this.instance_134.parent = this;
	this.instance_134.setTransform(-244,-56);

	this.instance_135 = new lib.dxxcl_yl02_00135();
	this.instance_135.parent = this;
	this.instance_135.setTransform(-244,-56);

	this.instance_136 = new lib.dxxcl_yl02_00136();
	this.instance_136.parent = this;
	this.instance_136.setTransform(-244,-56);

	this.instance_137 = new lib.dxxcl_yl02_00137();
	this.instance_137.parent = this;
	this.instance_137.setTransform(-244,-56);

	this.instance_138 = new lib.dxxcl_yl02_00138();
	this.instance_138.parent = this;
	this.instance_138.setTransform(-244,-56);

	this.instance_139 = new lib.dxxcl_yl02_00139();
	this.instance_139.parent = this;
	this.instance_139.setTransform(-244,-56);

	this.instance_140 = new lib.dxxcl_yl02_00140();
	this.instance_140.parent = this;
	this.instance_140.setTransform(-244,-56);

	this.instance_141 = new lib.dxxcl_yl02_00141();
	this.instance_141.parent = this;
	this.instance_141.setTransform(-244,-56);

	this.instance_142 = new lib.dxxcl_yl02_00142();
	this.instance_142.parent = this;
	this.instance_142.setTransform(-244,-56);

	this.instance_143 = new lib.dxxcl_yl02_00143();
	this.instance_143.parent = this;
	this.instance_143.setTransform(-244,-56);

	this.instance_144 = new lib.dxxcl_yl02_00144();
	this.instance_144.parent = this;
	this.instance_144.setTransform(-244,-56);

	this.instance_145 = new lib.dxxcl_yl02_00145();
	this.instance_145.parent = this;
	this.instance_145.setTransform(-244,-56);

	this.instance_146 = new lib.dxxcl_yl02_00146();
	this.instance_146.parent = this;
	this.instance_146.setTransform(-244,-56);

	this.instance_147 = new lib.dxxcl_yl02_00147();
	this.instance_147.parent = this;
	this.instance_147.setTransform(-244,-56);

	this.instance_148 = new lib.dxxcl_yl02_00148();
	this.instance_148.parent = this;
	this.instance_148.setTransform(-244,-56);

	this.instance_149 = new lib.dxxcl_yl02_00149();
	this.instance_149.parent = this;
	this.instance_149.setTransform(-244,-56);

	this.instance_150 = new lib.dxxcl_yl02_00150();
	this.instance_150.parent = this;
	this.instance_150.setTransform(-244,-56);

	this.instance_151 = new lib.dxxcl_yl02_00151();
	this.instance_151.parent = this;
	this.instance_151.setTransform(-244,-56);

	this.instance_152 = new lib.dxxcl_yl02_00152();
	this.instance_152.parent = this;
	this.instance_152.setTransform(-244,-56);

	this.instance_153 = new lib.dxxcl_yl02_00153();
	this.instance_153.parent = this;
	this.instance_153.setTransform(-244,-56);

	this.instance_154 = new lib.dxxcl_yl02_00154();
	this.instance_154.parent = this;
	this.instance_154.setTransform(-244,-56);

	this.instance_155 = new lib.dxxcl_yl02_00155();
	this.instance_155.parent = this;
	this.instance_155.setTransform(-244,-56);

	this.instance_156 = new lib.dxxcl_yl02_00156();
	this.instance_156.parent = this;
	this.instance_156.setTransform(-244,-56);

	this.instance_157 = new lib.dxxcl_yl02_00157();
	this.instance_157.parent = this;
	this.instance_157.setTransform(-244,-56);

	this.instance_158 = new lib.dxxcl_yl02_00158();
	this.instance_158.parent = this;
	this.instance_158.setTransform(-244,-56);

	this.instance_159 = new lib.dxxcl_yl02_00159();
	this.instance_159.parent = this;
	this.instance_159.setTransform(-244,-56);

	this.instance_160 = new lib.dxxcl_yl02_00160();
	this.instance_160.parent = this;
	this.instance_160.setTransform(-244,-56);

	this.instance_161 = new lib.dxxcl_yl02_00161();
	this.instance_161.parent = this;
	this.instance_161.setTransform(-244,-56);

	this.instance_162 = new lib.dxxcl_yl02_00162();
	this.instance_162.parent = this;
	this.instance_162.setTransform(-244,-56);

	this.instance_163 = new lib.dxxcl_yl02_00163();
	this.instance_163.parent = this;
	this.instance_163.setTransform(-244,-56);

	this.instance_164 = new lib.dxxcl_yl02_00164();
	this.instance_164.parent = this;
	this.instance_164.setTransform(-244,-56);

	this.instance_165 = new lib.dxxcl_yl02_00165();
	this.instance_165.parent = this;
	this.instance_165.setTransform(-244,-56);

	this.instance_166 = new lib.dxxcl_yl02_00166();
	this.instance_166.parent = this;
	this.instance_166.setTransform(-244,-56);

	this.instance_167 = new lib.dxxcl_yl02_00167();
	this.instance_167.parent = this;
	this.instance_167.setTransform(-244,-56);

	this.instance_168 = new lib.dxxcl_yl02_00168();
	this.instance_168.parent = this;
	this.instance_168.setTransform(-244,-56);

	this.instance_169 = new lib.dxxcl_yl02_00169();
	this.instance_169.parent = this;
	this.instance_169.setTransform(-244,-56);

	this.instance_170 = new lib.dxxcl_yl02_00170();
	this.instance_170.parent = this;
	this.instance_170.setTransform(-244,-56);

	this.instance_171 = new lib.dxxcl_yl02_00171();
	this.instance_171.parent = this;
	this.instance_171.setTransform(-244,-56);

	this.instance_172 = new lib.dxxcl_yl02_00172();
	this.instance_172.parent = this;
	this.instance_172.setTransform(-244,-56);

	this.instance_173 = new lib.dxxcl_yl02_00173();
	this.instance_173.parent = this;
	this.instance_173.setTransform(-244,-56);

	this.instance_174 = new lib.dxxcl_yl02_00174();
	this.instance_174.parent = this;
	this.instance_174.setTransform(-244,-56);

	this.instance_175 = new lib.dxxcl_yl02_00175();
	this.instance_175.parent = this;
	this.instance_175.setTransform(-244,-56);

	this.instance_176 = new lib.dxxcl_yl02_00176();
	this.instance_176.parent = this;
	this.instance_176.setTransform(-244,-56);

	this.instance_177 = new lib.dxxcl_yl02_00177();
	this.instance_177.parent = this;
	this.instance_177.setTransform(-244,-56);

	this.instance_178 = new lib.dxxcl_yl02_00178();
	this.instance_178.parent = this;
	this.instance_178.setTransform(-244,-56);

	this.instance_179 = new lib.dxxcl_yl02_00179();
	this.instance_179.parent = this;
	this.instance_179.setTransform(-244,-56);

	this.instance_180 = new lib.dxxcl_yl02_00180();
	this.instance_180.parent = this;
	this.instance_180.setTransform(-244,-56);

	this.instance_181 = new lib.dxxcl_yl02_00181();
	this.instance_181.parent = this;
	this.instance_181.setTransform(-244,-56);

	this.instance_182 = new lib.dxxcl_yl02_00182();
	this.instance_182.parent = this;
	this.instance_182.setTransform(-244,-56);

	this.instance_183 = new lib.dxxcl_yl02_00183();
	this.instance_183.parent = this;
	this.instance_183.setTransform(-244,-56);

	this.instance_184 = new lib.dxxcl_yl02_00184();
	this.instance_184.parent = this;
	this.instance_184.setTransform(-244,-56);

	this.instance_185 = new lib.dxxcl_yl02_00185();
	this.instance_185.parent = this;
	this.instance_185.setTransform(-244,-56);

	this.instance_186 = new lib.dxxcl_yl02_00186();
	this.instance_186.parent = this;
	this.instance_186.setTransform(-244,-56);

	this.instance_187 = new lib.dxxcl_yl02_00187();
	this.instance_187.parent = this;
	this.instance_187.setTransform(-244,-56);

	this.instance_188 = new lib.dxxcl_yl02_00188();
	this.instance_188.parent = this;
	this.instance_188.setTransform(-244,-56);

	this.instance_189 = new lib.dxxcl_yl02_00189();
	this.instance_189.parent = this;
	this.instance_189.setTransform(-244,-56);

	this.instance_190 = new lib.dxxcl_yl02_00190();
	this.instance_190.parent = this;
	this.instance_190.setTransform(-244,-56);

	this.instance_191 = new lib.dxxcl_yl02_00191();
	this.instance_191.parent = this;
	this.instance_191.setTransform(-244,-56);

	this.instance_192 = new lib.dxxcl_yl02_00192();
	this.instance_192.parent = this;
	this.instance_192.setTransform(-244,-56);

	this.instance_193 = new lib.dxxcl_yl02_00193();
	this.instance_193.parent = this;
	this.instance_193.setTransform(-244,-56);

	this.instance_194 = new lib.dxxcl_yl02_00194();
	this.instance_194.parent = this;
	this.instance_194.setTransform(-244,-56);

	this.instance_195 = new lib.dxxcl_yl02_00195();
	this.instance_195.parent = this;
	this.instance_195.setTransform(-244,-56);

	this.instance_196 = new lib.dxxcl_yl02_00196();
	this.instance_196.parent = this;
	this.instance_196.setTransform(-244,-56);

	this.instance_197 = new lib.dxxcl_yl02_00197();
	this.instance_197.parent = this;
	this.instance_197.setTransform(-244,-56);

	this.instance_198 = new lib.dxxcl_yl02_00198();
	this.instance_198.parent = this;
	this.instance_198.setTransform(-244,-56);

	this.instance_199 = new lib.dxxcl_yl02_00199();
	this.instance_199.parent = this;
	this.instance_199.setTransform(-244,-56);

	this.instance_200 = new lib.dxxcl_yl02_00200();
	this.instance_200.parent = this;
	this.instance_200.setTransform(-244,-56);

	this.instance_201 = new lib.dxxcl_yl02_00201();
	this.instance_201.parent = this;
	this.instance_201.setTransform(-244,-56);

	this.instance_202 = new lib.dxxcl_yl02_00202();
	this.instance_202.parent = this;
	this.instance_202.setTransform(-244,-56);

	this.instance_203 = new lib.dxxcl_yl02_00203();
	this.instance_203.parent = this;
	this.instance_203.setTransform(-244,-56);

	this.instance_204 = new lib.dxxcl_yl02_00204();
	this.instance_204.parent = this;
	this.instance_204.setTransform(-244,-56);

	this.instance_205 = new lib.dxxcl_yl02_00205();
	this.instance_205.parent = this;
	this.instance_205.setTransform(-244,-56);

	this.instance_206 = new lib.dxxcl_yl02_00206();
	this.instance_206.parent = this;
	this.instance_206.setTransform(-244,-56);

	this.instance_207 = new lib.dxxcl_yl02_00207();
	this.instance_207.parent = this;
	this.instance_207.setTransform(-244,-56);

	this.instance_208 = new lib.dxxcl_yl02_00208();
	this.instance_208.parent = this;
	this.instance_208.setTransform(-244,-56);

	this.instance_209 = new lib.dxxcl_yl02_00209();
	this.instance_209.parent = this;
	this.instance_209.setTransform(-244,-56);

	this.instance_210 = new lib.dxxcl_yl02_00210();
	this.instance_210.parent = this;
	this.instance_210.setTransform(-244,-56);

	this.instance_211 = new lib.dxxcl_yl02_00211();
	this.instance_211.parent = this;
	this.instance_211.setTransform(-244,-56);

	this.instance_212 = new lib.dxxcl_yl02_00212();
	this.instance_212.parent = this;
	this.instance_212.setTransform(-244,-56);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170,this.instance_171,this.instance_172,this.instance_173,this.instance_174,this.instance_175,this.instance_176,this.instance_177,this.instance_178,this.instance_179,this.instance_180,this.instance_181,this.instance_182,this.instance_183,this.instance_184,this.instance_185,this.instance_186,this.instance_187,this.instance_188,this.instance_189,this.instance_190,this.instance_191,this.instance_192,this.instance_193,this.instance_194,this.instance_195,this.instance_196,this.instance_197,this.instance_198,this.instance_199,this.instance_200,this.instance_201,this.instance_202,this.instance_203,this.instance_204,this.instance_205,this.instance_206,this.instance_207,this.instance_208,this.instance_209,this.instance_210,this.instance_211,this.instance_212];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).to({state:[{t:this.instance_210}]},1).to({state:[{t:this.instance_211}]},1).to({state:[{t:this.instance_212}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,515.2,470.4);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F7F8").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.board, new cjs.Rectangle(0,0,1366,768), null);


(lib.sm4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 4
	this.xuanzhuan = new lib.xuanzhuan();
	this.xuanzhuan.parent = this;
	this.xuanzhuan.setTransform(280.7,37);
	new cjs.ButtonHelper(this.xuanzhuan, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EgstgGiMBZbAAAIAANFMhZbAAAg");
	this.shape.setTransform(-0.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.xuanzhuan}]},1).wait(1));

	// 图层 5
	this.btn = new lib.Btn2();
	this.btn.parent = this;
	this.btn.setTransform(1.5,0.4,8.287,0.843);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#669900").ss(6,1,1).p("EgrBAAAMBWDAAA");
	this.shape_1.setTransform(-5.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.8,-35.3,556.8,71.5);


(lib.sm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 4
	this.xuanzhuan = new lib.xuanzhuan();
	this.xuanzhuan.parent = this;
	this.xuanzhuan.setTransform(280.7,37);
	new cjs.ButtonHelper(this.xuanzhuan, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EgstgGiMBZbAAAIAANFMhZbAAAg");
	this.shape.setTransform(-0.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.xuanzhuan}]},1).wait(1));

	// 图层 5
	this.btn = new lib.Btn2();
	this.btn.parent = this;
	this.btn.setTransform(1.5,0.4,8.287,0.843);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("EgrBAAAMBWDAAA");
	this.shape_1.setTransform(-5.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.8,-35.3,556.8,71.5);


(lib.sm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 4
	this.xuanzhuan = new lib.xuanzhuan();
	this.xuanzhuan.parent = this;
	this.xuanzhuan.setTransform(280.7,37);
	new cjs.ButtonHelper(this.xuanzhuan, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EgstgGiMBZbAAAIAANFMhZbAAAg");
	this.shape.setTransform(-0.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.xuanzhuan}]},1).wait(1));

	// 图层 5
	this.btn = new lib.Btn2();
	this.btn.parent = this;
	this.btn.setTransform(1.5,0.4,8.287,0.843);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4472C4").ss(6,1,1).p("EgrBAAAMBWDAAA");
	this.shape_1.setTransform(-5.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.8,-35.3,556.8,71.5);


(lib.sm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 4
	this.xuanzhuan = new lib.xuanzhuan();
	this.xuanzhuan.parent = this;
	this.xuanzhuan.setTransform(280.7,37);
	new cjs.ButtonHelper(this.xuanzhuan, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EgstgGiMBZbAAAIAANFMhZbAAAg");
	this.shape.setTransform(-0.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.xuanzhuan}]},1).wait(1));

	// 图层 5
	this.btn = new lib.Btn2();
	this.btn.parent = this;
	this.btn.setTransform(1.5,0.4,8.287,0.843);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(6,1,1).p("EgrBAAAMBWDAAA");
	this.shape_1.setTransform(-5.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.8,-35.3,556.8,71.5);


(lib.page17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s17_1.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(5).call(this.frame_11).wait(1));

	// 图层 4
	this.s4 = new lib.sm4();
	this.s4.parent = this;
	this.s4.setTransform(1197.4,526.3,0.3,0.3,0,0,0,0.5,0.1);

	this.s3 = new lib.sm3();
	this.s3.parent = this;
	this.s3.setTransform(1197.4,478.2,0.3,0.3,0,0,0,0.5,0);

	this.s2 = new lib.sm2();
	this.s2.parent = this;
	this.s2.setTransform(1197.4,430.3,0.3,0.3,0,0,0,0.5,0);

	this.s1 = new lib.sm1();
	this.s1.parent = this;
	this.s1.setTransform(1197.4,382.3,0.3,0.3,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4}]}).wait(12));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AA3BTIAAgHIhuAAIAAAHIgXAAIAAilICdAAIAAClgAAsAkIgFATIAQAAIAAg9IgJAOQgbgEgSgHQgJADgMADIA5AIIgEARQgdgFgjgFIACgNIgRAEIgJgOIAAA8IBeAAQglgIgxgGIAFgSQAuAGAoAHgAg3gHQAVgEAPgEQgHgFgFgGIgMAJIgMgLgAgFgzIA0AAIAAAOQgJAMgQAKQAPAEASACIAAg0Ig1AAIgHAKgAABgWQAMgHAHgHIgkAAQAGAHALAHgAg3geQAWgPALgQIghAAg");
	this.shape.setTransform(1275.4,586.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AA6BPQg5ACgSADIgIgVQANgIAOgZIgYAAIAAgVIBjAAIAAAVIgwAAQgLAQgNAQIAogCIgNgSIARgKQASAVAQAYIgSALIgHgJgAhWA1IA8gGIAAAXQgfACgbAFgAhUASQAKgLANgTIgUACIgGgUQAQgXAOgiIAXAJQgNAZgOAUIANgBIAKgTIAUAKIglA7IAbgEIgBAWQgjABgPADgAgegWQAcgbASglIAaAAIgDAGQATAgAeAUQgIAOgDAIIgRgNIAAAOIhDAAIAAgJIgJAJIgOgRgAADgZIAzAAQgRgQgLgRQgKAQgNARg");
	this.shape_1.setTransform(1257.1,586.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhQBOIAAibICbAAIAAAYIiCAAIAABrICIAAIAAAYgAAIARQgTAUgWAQIgSgSQAWgQATgTIgmghIARgSIAmAiQAPgRANgSIAVAOQgOAUgRASIAoAjIgVATIgkglg");
	this.shape_2.setTransform(1239.2,586.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AA3BTIAAgHIhuAAIAAAHIgXAAIAAilICdAAIAAClgAAsAkIgFATIAQAAIAAg9IgJAOQgbgEgSgHQgJADgMADIA5AIIgEARQgdgFgjgFIACgNIgRAEIgJgOIAAA8IBeAAQglgIgxgGIAFgSQAtAGApAHgAg3gHQAVgEAPgEQgHgFgFgGIgMAJIgMgLgAgFgzIA0AAIAAAOQgJAMgQAKQAPAEASACIAAg0Ig1AAIgHAKgAABgWQAMgHAHgHIgkAAQAGAHALAHgAg3geQAWgPALgQIghAAg");
	this.shape_3.setTransform(1220.5,586.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AALBDIgbAAIAAAIIgWAAIAAhSIAQAAIAAgaIgUAAIAAgVIAUAAIAAggIAYAAIAAAgIARAAIAAAUQAKgVAJgfIAXAEIgIAZIAiAAIAAAVIgHAAQgCArgOAfQAJAOAOAJIgLAZQgPgLgLgPQgKAPgQAMQgDgGgKgOgAACgHIAQAAIAABCQAMgJAIgMQgJgVgCgXIgFAGQgDgJgIgMQAEgFAEgHIgRAAgAgQAvIANAAIAAgjIgNAAgAArghQABAaAGAUQAIgVAAgcIgOAAIgBADgAhFBWIAAhTQgFALgGAJIgGgdQATgoAIgoIAWAFIgLAjIAACEg");
	this.shape_4.setTransform(1202.3,586.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag+BXIAAg/IgOANIgKgbQAbgXAQgeIglAAIAAgXIAwAAQAEgKADgKIAaACIgFASIBaAAIAAAXIhkAAQgKAWgPAUIAABYgAghBPIAAgXIAvAAIAAgoIglAAIAAgWIAlAAIAAgfIAZAAIAAAfIAoAAIAAAWIgoAAIAAAoIAvAAIAAAXg");
	this.shape_5.setTransform(1183.8,586.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgnA9IATABQAJAAAAgLIAAgUIgcAAIAQARIgxAhIgNgUQAYgNAVgRIglAAIAAgUIBCAAIAAgNIAZAAIAAANIBBAAIAAAUIhBAAIAAAcQAAALgEAGQgFAHgHABQgHACgYAAQgCgNgEgMgAAYAwIAOgQQAYAOAYAQIgPATgAhUgQQAggCAagGQgLgIgJgIQgMAJgMAIIgPgSQAjgUAQgYIAbAAIgLAPIBVAAIAAATQgPAPgWAMQAXAEAhACIgKAWQgwgEgcgLQggALgrAFIgJgVgAAAghQATgIANgJIg7AAQANAKAOAHg");
	this.shape_6.setTransform(1165.6,586.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAXA9QgVAMgXAHIgGgMIg3AKIgFgZIBBgJIgBAMQAVgGAQgKQgEgMgCgRIgdADIgDgUIAdgEIgBgRIgWACIgBgJQgRAdgPASIAbgEIgCAWQgmAEgNAEIgGgTQALgLANgUIgVADIgHgUQAPgSARgnIAWAIQgPAcgNATIAPgBIAKgRIARAIIgBgHIAXgCIgBgkIAXAAIABAiIAfgDIgYgQIALgPQAOAHAOAKIgKANIARgBIACAVIg2AFIACARIA2gGIADAUIgWADIAQAMQgRATgUAOQAIALAGAAQADAAACgEQACgEADgTIAVALQgHAbgGAIQgHAHgJAAQgWAAgOgZgAAfAIIAEAUQAPgLAMgNg");
	this.shape_7.setTransform(1147.3,586.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AhXA+QAHABAIgBQAFAAAAgIIAAghIgRAEIgDgYIAUgDIAAgfIgSAAIAAgXIASAAIAAgcIAYAAIAAAcIAOAAIAAAXIgOAAIAAAaIANgDIgBAVIgMADIAAAwQAAAVgQABQgLACgLAAIgGgYgAAhBMQgHgFgEgIQgXAJgcAGIgJgXQAcgEAYgHQgCgJAAgKIgRAAIAAAIIgVAAIAAhjIAlAAIAAgTIAXAAIAAATIArAAIAABbIgJAAIAJALIgGAEIARAIQgDAMgFAMQgGAMgOABQgPAAgMgJgAArA3QAEAEAFADQAIADAEgHIADgQIgYANgAAkAjIAVgKIgXAAIACAKgAAiAGIAWAAIAAgSIgWAAIAAASgAgFAGIAQAAIAAgSIgQAAgAAigcIAWAAIAAgTIgWAAIAAATgAgFgcIAQAAIAAgTIgQAAg");
	this.shape_8.setTransform(1129,586.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhWA/IANABQAGAAAAgIIAAghIgTAGIAAgZIATgFIAAgdIgSAAIAAgWIASAAIAAggIAWAAIAAAgIAOAAIAAAOQARgVAKgbIAVAEIgFAPIBGAAIAAAVIhRAAQgGAMgHAJIAMAAIAAAOIAQgEIAAgbIAWAAIAAAWIAogJQgBArgBAIQgCAHgEAEQgEAEgTACIgGgWQAOABABgEQABgDAAgOIgTAEIAAA3IgWAAIAAgzIgQAEIAAAtQAAAJALAAIAjAAQAHAAAEgBQADgCABgDIAEgVIAWAKQgEAYgHAGQgHAHgLAAIg1AAQgbAAAAgbIAAgqIgHACIgDgUIAKgCIAAgPIgKgJIgNAAIAAAXIANgEIAAAWIgNAFIAAAyQAAAJgEAEQgDAFgFABIgXACIgGgYg");
	this.shape_9.setTransform(1110.7,586.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AAOBDIAbACQAKAAAAgJIAAgCIg5AAIAAAdIgYAAIAAhbIBoAAIAABCQAAALgFAGQgFAFgIABIglACIgFgUgAgGArIA5AAIAAgIIg5AAgAgGAUIA5AAIAAgJIg5AAgAhNBFQAFgGAAgJIAAg4IgOAAIAAgXIAkAAIAABEIANgJIACAbQgSANgLALgAgqgKIAAgQIAyAAIAAgIIgpAAIAAgPIApAAIAAgHIgtAAIAAgPIAtAAIAAgPIAaAAIAAAPIAxAAIAAAPIgxAAIAAAHIAsAAIAAAPIgsAAIAAAIIA1AAIAAAQgAhShIIATgLIAXAfIgVANQgKgSgLgPg");
	this.shape_10.setTransform(1092.4,586.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhQBOIAAibICbAAIAAAYIiCAAIAABrICIAAIAAAYgAAIARQgTAUgWAQIgSgSQAWgQATgTIgmghIARgSIAmAiQAPgRANgSIAVAOQgOAUgRASIAoAjIgVATIgkglg");
	this.shape_11.setTransform(735.7,578.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AA3BTIAAgHIhuAAIAAAHIgXAAIAAilICdAAIAAClgAAtAkIgGATIAQAAIAAg+IgJAPQgbgEgSgHQgJADgMADIA5AIIgEARQgdgGgjgEIACgNIgRAEIgJgOIAAA8IBeAAQglgIgxgFIAFgTQAuAGApAHgAg3gHQAVgDAPgFQgHgFgFgGIgMAJIgMgLgAgFg0IA0AAIAAAPQgJAMgQAKQAPAEASACIAAg0Ig1AAIgHAJgAABgWQAMgHAHgHIgkAAQAGAHALAHgAg3geQAWgPALgQIghAAg");
	this.shape_12.setTransform(717,578.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AA6BPQg5ACgSADIgIgVQANgIAOgZIgYAAIAAgVIBjAAIAAAVIgwAAQgLARgNAPIAogCIgNgSIARgLQASAWAQAXIgSAMIgHgJgAhWA1IA8gGIAAAXQgfACgbAEgAhUASQAKgKANgVIgUADIgGgVQAQgWAOgiIAXAJQgNAZgOAUIANgBIAKgTIAUAKIglA7IAbgEIgBAWQgjACgPACgAgegWQAcgbASglIAaAAIgDAGQATAgAeAUQgIAOgDAIIgRgNIAAAOIhDAAIAAgJIgJAJIgOgRgAADgZIAzAAQgRgQgLgRQgKAQgNARg");
	this.shape_13.setTransform(698.7,578.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333F48").s().p("AgwB3IAAgcIhLAXIgHglIAfgHIAAhBIgaAAIAAggIAaAAIAAg3IgbAAIAAgiIBXAAIAAAiIgaAAIAAA3IAYAAIAAAgIgYAAIAAA4IAbgIIAAAlIBAAAIAAgYIg7AAIAAgeIA7AAIAAgSIg5AAIAAiIICVAAIAACIIg6AAIAAASIA8AAIAAAeIg8AAIAAAYIBIAAIAAAdgAA8gLIAaAAIAAgZIgaAAgAAAgLIAaAAIAAgZIgaAAgAA8hAIAaAAIAAgZIgaAAgAAAhAIAaAAIAAgZIgaAAg");
	this.shape_14.setTransform(415.2,61.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333F48").s().p("AiDBkQAbgjgBhVIAAhpIDpAAIAAAfIhaAAIgJAUIBVAAIAABtIg/AAIAAA0QAAAQgIAIQgIAJgRABIglABQgDgTgEgOIgbAbIgagYQAdgaATgbIAeAUIgYAcIAZABQANAAAAgLIAAgqIhBAAIAAhtIAtAAIAHgUIhFAAIAABOQAABgggAtQgPgOgPgLgAgRAIIBgAAIAAgPIhgAAgAgRgfIBgAAIAAgQIhgAAgAA4A4IAbgTQAYAZAZAeIgeAWQgWgdgYgdg");
	this.shape_15.setTransform(387.9,62.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333F48").s().p("AiCBcIAZgWIAAhJIgXAAIAAgiIA4AAIAABrQAQAWApAAQA0ACBegCIgNAhQhNAAhAgBQgoAAgXgaIgdAhgAAQBXIAAgsQgWAZgeAPQgJgOgNgQQAkgLAcgaIgzAAIAAhLIA9AAIAAgQIhGAAIAAggIBGAAIAAgWIAiAAIAAAWIBIAAIAAAgIhIAAIAAAQIA/AAIAABLIg/AAIAAAUIALgSQAjASAgASIgQAbQgigUgcgPIAAApgAAygKIAhAAIAAgVIghAAgAgQgKIAgAAIAAgVIggAAgAh7hyIAegQQASAcAOAYIghARQgNgbgQgag");
	this.shape_16.setTransform(360.6,61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
	this.shape_17.setTransform(333.2,61.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333F48").s().p("AgMCCIAAixIAbAAIgTgXQATgVASgnIAlAAIgJAUIBCAAIAAAcIguAAIARATIgXAQIAsAAIAACxIgiAAIAAgLIhBAAIAAALgAAUBaIBBAAIAAgTIhBAAgAAUAsIBBAAIAAgRIhBAAgAAUAAIBBAAIAAgQIhBAAgAASgvIAzAAQgJgNgLgMIAOgKIgTAAQgMASgOARgAhTCCIAAhVQgLAbgTAcQgEgUgJgWQAagaANgeIgfAAIAAggIAjAAIAAgcIAgAAIAAAcIAfAAIAAAgIgfAAIAAANQATAOASAPIgTAbIgSgVIAABQgAh+hEQAdgcAPgiIAjAAIgIAUIA5AAIAAAcIgdAAIAPAUIgbAOQgKgRgLgOIAHgDIgTAAQgNATgTARQgJgMgNgKg");
	this.shape_18.setTransform(305.6,61.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333F48").s().p("AiCBcIAZgWIAAhJIgXAAIAAgiIA4AAIAABrQAQAWApAAQA0ACBegCIgNAhQhNAAhAgBQgoAAgXgaIgdAhgAAQBXIAAgsQgWAZgeAPQgJgOgNgQQAkgLAcgaIgzAAIAAhLIA9AAIAAgQIhGAAIAAggIBGAAIAAgWIAiAAIAAAWIBIAAIAAAgIhIAAIAAAQIA/AAIAABLIg/AAIAAAUIALgSQAjASAgASIgQAbQgigUgcgPIAAApgAAygKIAhAAIAAgVIghAAgAgQgKIAgAAIAAgVIggAAgAh7hyIAegQQASAcAOAYIghARQgNgbgQgag");
	this.shape_19.setTransform(278.7,61.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
	this.shape_20.setTransform(251.3,61.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333F48").s().p("AhIADQAAgzAUgdQATgcAkAAQBGAAAABpQAAAygTAcQgTAcgjAAQhIAAAAhngAgdACQAABHAdAAQAdAAAAhJQAAhIgcAAQgeAAAABKg");
	this.shape_21.setTransform(229.3,60.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333F48").s().p("Ag0BQQgSgZAAgsQAAgzAYggQAYghAqAAQAXAAAOAGIAAAkQgQgJgSAAQgXAAgOASQgOATAAAdIABAAQAOgWAcAAQAaAAAPASQAPARAAAcQAAAegUAVQgTATgfABQgigBgTgZgAgTAMQgIAJAAAOQAAAQAIALQAIALAMAAQANAAAIgLQAHgKAAgPQAAgigcAAQgMAAgIAJg");
	this.shape_22.setTransform(212.5,60.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333F48").s().p("AACBoIAAifQgHAGgOAGQgNAFgMACIAAglQAkgKAagUIAbAAIAADPg");
	this.shape_23.setTransform(194,60.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333F48").s().p("AAtB1IgbgbQgNADgPABQgsgBgcgcQgbgdAAgtQAAgvAcgeQAcgfAuAAQArAAAbAeQAaAcAAAvQAAAugcAeIgDAEIA0AxgAgwg8QgPATAAAeQAAAdAOATQAPATAZAAQAYAAAOgSQAPgSAAgeQAAgggOgSQgOgTgYAAQgaAAgOATg");
	this.shape_24.setTransform(176.7,62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333F48").s().p("AA0BmIgPgvIhJAAIgPAvIgwAAIBLjLIAyAAIBKDLgAgEgwIgXBFIA1AAIgXhFQgCgHgBgLIAAAAQgBAJgDAJg");
	this.shape_25.setTransform(154.1,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

	// 图层 6
	this.instance = new lib.bsxyl();
	this.instance.parent = this;
	this.instance.setTransform(206,163.6,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// 图层 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("EgdggiEMA7BAAAMAAABEJMg7BAAAg");
	this.shape_26.setTransform(876,334.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgdgAiFMAAAhEJMA7BAAAMAAABEJg");
	this.shape_27.setTransform(876,334.2);

	this.board = new lib.board();
	this.board.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.board},{t:this.shape_27},{t:this.shape_26}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3dpage17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,1366,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3dpage17/dxxcl_yl02_00000.jpg", id:"dxxcl_yl02_00000"},
		{src:"images/3dpage17/dxxcl_yl02_00001.jpg", id:"dxxcl_yl02_00001"},
		{src:"images/3dpage17/dxxcl_yl02_00002.jpg", id:"dxxcl_yl02_00002"},
		{src:"images/3dpage17/dxxcl_yl02_00003.jpg", id:"dxxcl_yl02_00003"},
		{src:"images/3dpage17/dxxcl_yl02_00004.jpg", id:"dxxcl_yl02_00004"},
		{src:"images/3dpage17/dxxcl_yl02_00005.jpg", id:"dxxcl_yl02_00005"},
		{src:"images/3dpage17/dxxcl_yl02_00006.jpg", id:"dxxcl_yl02_00006"},
		{src:"images/3dpage17/dxxcl_yl02_00007.jpg", id:"dxxcl_yl02_00007"},
		{src:"images/3dpage17/dxxcl_yl02_00008.jpg", id:"dxxcl_yl02_00008"},
		{src:"images/3dpage17/dxxcl_yl02_00009.jpg", id:"dxxcl_yl02_00009"},
		{src:"images/3dpage17/dxxcl_yl02_00010.jpg", id:"dxxcl_yl02_00010"},
		{src:"images/3dpage17/dxxcl_yl02_00011.jpg", id:"dxxcl_yl02_00011"},
		{src:"images/3dpage17/dxxcl_yl02_00012.jpg", id:"dxxcl_yl02_00012"},
		{src:"images/3dpage17/dxxcl_yl02_00013.jpg", id:"dxxcl_yl02_00013"},
		{src:"images/3dpage17/dxxcl_yl02_00014.jpg", id:"dxxcl_yl02_00014"},
		{src:"images/3dpage17/dxxcl_yl02_00015.jpg", id:"dxxcl_yl02_00015"},
		{src:"images/3dpage17/dxxcl_yl02_00016.jpg", id:"dxxcl_yl02_00016"},
		{src:"images/3dpage17/dxxcl_yl02_00017.jpg", id:"dxxcl_yl02_00017"},
		{src:"images/3dpage17/dxxcl_yl02_00018.jpg", id:"dxxcl_yl02_00018"},
		{src:"images/3dpage17/dxxcl_yl02_00019.jpg", id:"dxxcl_yl02_00019"},
		{src:"images/3dpage17/dxxcl_yl02_00020.jpg", id:"dxxcl_yl02_00020"},
		{src:"images/3dpage17/dxxcl_yl02_00021.jpg", id:"dxxcl_yl02_00021"},
		{src:"images/3dpage17/dxxcl_yl02_00022.jpg", id:"dxxcl_yl02_00022"},
		{src:"images/3dpage17/dxxcl_yl02_00023.jpg", id:"dxxcl_yl02_00023"},
		{src:"images/3dpage17/dxxcl_yl02_00024.jpg", id:"dxxcl_yl02_00024"},
		{src:"images/3dpage17/dxxcl_yl02_00025.jpg", id:"dxxcl_yl02_00025"},
		{src:"images/3dpage17/dxxcl_yl02_00026.jpg", id:"dxxcl_yl02_00026"},
		{src:"images/3dpage17/dxxcl_yl02_00027.jpg", id:"dxxcl_yl02_00027"},
		{src:"images/3dpage17/dxxcl_yl02_00028.jpg", id:"dxxcl_yl02_00028"},
		{src:"images/3dpage17/dxxcl_yl02_00029.jpg", id:"dxxcl_yl02_00029"},
		{src:"images/3dpage17/dxxcl_yl02_00030.jpg", id:"dxxcl_yl02_00030"},
		{src:"images/3dpage17/dxxcl_yl02_00031.jpg", id:"dxxcl_yl02_00031"},
		{src:"images/3dpage17/dxxcl_yl02_00032.jpg", id:"dxxcl_yl02_00032"},
		{src:"images/3dpage17/dxxcl_yl02_00033.jpg", id:"dxxcl_yl02_00033"},
		{src:"images/3dpage17/dxxcl_yl02_00034.jpg", id:"dxxcl_yl02_00034"},
		{src:"images/3dpage17/dxxcl_yl02_00035.jpg", id:"dxxcl_yl02_00035"},
		{src:"images/3dpage17/dxxcl_yl02_00036.jpg", id:"dxxcl_yl02_00036"},
		{src:"images/3dpage17/dxxcl_yl02_00037.jpg", id:"dxxcl_yl02_00037"},
		{src:"images/3dpage17/dxxcl_yl02_00038.jpg", id:"dxxcl_yl02_00038"},
		{src:"images/3dpage17/dxxcl_yl02_00039.jpg", id:"dxxcl_yl02_00039"},
		{src:"images/3dpage17/dxxcl_yl02_00040.jpg", id:"dxxcl_yl02_00040"},
		{src:"images/3dpage17/dxxcl_yl02_00041.jpg", id:"dxxcl_yl02_00041"},
		{src:"images/3dpage17/dxxcl_yl02_00042.jpg", id:"dxxcl_yl02_00042"},
		{src:"images/3dpage17/dxxcl_yl02_00043.jpg", id:"dxxcl_yl02_00043"},
		{src:"images/3dpage17/dxxcl_yl02_00044.jpg", id:"dxxcl_yl02_00044"},
		{src:"images/3dpage17/dxxcl_yl02_00045.jpg", id:"dxxcl_yl02_00045"},
		{src:"images/3dpage17/dxxcl_yl02_00046.jpg", id:"dxxcl_yl02_00046"},
		{src:"images/3dpage17/dxxcl_yl02_00047.jpg", id:"dxxcl_yl02_00047"},
		{src:"images/3dpage17/dxxcl_yl02_00048.jpg", id:"dxxcl_yl02_00048"},
		{src:"images/3dpage17/dxxcl_yl02_00049.jpg", id:"dxxcl_yl02_00049"},
		{src:"images/3dpage17/dxxcl_yl02_00050.jpg", id:"dxxcl_yl02_00050"},
		{src:"images/3dpage17/dxxcl_yl02_00051.jpg", id:"dxxcl_yl02_00051"},
		{src:"images/3dpage17/dxxcl_yl02_00052.jpg", id:"dxxcl_yl02_00052"},
		{src:"images/3dpage17/dxxcl_yl02_00053.jpg", id:"dxxcl_yl02_00053"},
		{src:"images/3dpage17/dxxcl_yl02_00054.jpg", id:"dxxcl_yl02_00054"},
		{src:"images/3dpage17/dxxcl_yl02_00055.jpg", id:"dxxcl_yl02_00055"},
		{src:"images/3dpage17/dxxcl_yl02_00056.jpg", id:"dxxcl_yl02_00056"},
		{src:"images/3dpage17/dxxcl_yl02_00057.jpg", id:"dxxcl_yl02_00057"},
		{src:"images/3dpage17/dxxcl_yl02_00058.jpg", id:"dxxcl_yl02_00058"},
		{src:"images/3dpage17/dxxcl_yl02_00059.jpg", id:"dxxcl_yl02_00059"},
		{src:"images/3dpage17/dxxcl_yl02_00060.jpg", id:"dxxcl_yl02_00060"},
		{src:"images/3dpage17/dxxcl_yl02_00061.jpg", id:"dxxcl_yl02_00061"},
		{src:"images/3dpage17/dxxcl_yl02_00062.jpg", id:"dxxcl_yl02_00062"},
		{src:"images/3dpage17/dxxcl_yl02_00063.jpg", id:"dxxcl_yl02_00063"},
		{src:"images/3dpage17/dxxcl_yl02_00064.jpg", id:"dxxcl_yl02_00064"},
		{src:"images/3dpage17/dxxcl_yl02_00065.jpg", id:"dxxcl_yl02_00065"},
		{src:"images/3dpage17/dxxcl_yl02_00066.jpg", id:"dxxcl_yl02_00066"},
		{src:"images/3dpage17/dxxcl_yl02_00067.jpg", id:"dxxcl_yl02_00067"},
		{src:"images/3dpage17/dxxcl_yl02_00068.jpg", id:"dxxcl_yl02_00068"},
		{src:"images/3dpage17/dxxcl_yl02_00069.jpg", id:"dxxcl_yl02_00069"},
		{src:"images/3dpage17/dxxcl_yl02_00070.jpg", id:"dxxcl_yl02_00070"},
		{src:"images/3dpage17/dxxcl_yl02_00071.jpg", id:"dxxcl_yl02_00071"},
		{src:"images/3dpage17/dxxcl_yl02_00072.jpg", id:"dxxcl_yl02_00072"},
		{src:"images/3dpage17/dxxcl_yl02_00073.jpg", id:"dxxcl_yl02_00073"},
		{src:"images/3dpage17/dxxcl_yl02_00074.jpg", id:"dxxcl_yl02_00074"},
		{src:"images/3dpage17/dxxcl_yl02_00075.jpg", id:"dxxcl_yl02_00075"},
		{src:"images/3dpage17/dxxcl_yl02_00076.jpg", id:"dxxcl_yl02_00076"},
		{src:"images/3dpage17/dxxcl_yl02_00077.jpg", id:"dxxcl_yl02_00077"},
		{src:"images/3dpage17/dxxcl_yl02_00078.jpg", id:"dxxcl_yl02_00078"},
		{src:"images/3dpage17/dxxcl_yl02_00079.jpg", id:"dxxcl_yl02_00079"},
		{src:"images/3dpage17/dxxcl_yl02_00080.jpg", id:"dxxcl_yl02_00080"},
		{src:"images/3dpage17/dxxcl_yl02_00081.jpg", id:"dxxcl_yl02_00081"},
		{src:"images/3dpage17/dxxcl_yl02_00082.jpg", id:"dxxcl_yl02_00082"},
		{src:"images/3dpage17/dxxcl_yl02_00083.jpg", id:"dxxcl_yl02_00083"},
		{src:"images/3dpage17/dxxcl_yl02_00084.jpg", id:"dxxcl_yl02_00084"},
		{src:"images/3dpage17/dxxcl_yl02_00085.jpg", id:"dxxcl_yl02_00085"},
		{src:"images/3dpage17/dxxcl_yl02_00086.jpg", id:"dxxcl_yl02_00086"},
		{src:"images/3dpage17/dxxcl_yl02_00087.jpg", id:"dxxcl_yl02_00087"},
		{src:"images/3dpage17/dxxcl_yl02_00088.jpg", id:"dxxcl_yl02_00088"},
		{src:"images/3dpage17/dxxcl_yl02_00089.jpg", id:"dxxcl_yl02_00089"},
		{src:"images/3dpage17/dxxcl_yl02_00090.jpg", id:"dxxcl_yl02_00090"},
		{src:"images/3dpage17/dxxcl_yl02_00091.jpg", id:"dxxcl_yl02_00091"},
		{src:"images/3dpage17/dxxcl_yl02_00092.jpg", id:"dxxcl_yl02_00092"},
		{src:"images/3dpage17/dxxcl_yl02_00093.jpg", id:"dxxcl_yl02_00093"},
		{src:"images/3dpage17/dxxcl_yl02_00094.jpg", id:"dxxcl_yl02_00094"},
		{src:"images/3dpage17/dxxcl_yl02_00095.jpg", id:"dxxcl_yl02_00095"},
		{src:"images/3dpage17/dxxcl_yl02_00096.jpg", id:"dxxcl_yl02_00096"},
		{src:"images/3dpage17/dxxcl_yl02_00097.jpg", id:"dxxcl_yl02_00097"},
		{src:"images/3dpage17/dxxcl_yl02_00098.jpg", id:"dxxcl_yl02_00098"},
		{src:"images/3dpage17/dxxcl_yl02_00099.jpg", id:"dxxcl_yl02_00099"},
		{src:"images/3dpage17/dxxcl_yl02_00100.jpg", id:"dxxcl_yl02_00100"},
		{src:"images/3dpage17/dxxcl_yl02_00101.jpg", id:"dxxcl_yl02_00101"},
		{src:"images/3dpage17/dxxcl_yl02_00102.jpg", id:"dxxcl_yl02_00102"},
		{src:"images/3dpage17/dxxcl_yl02_00103.jpg", id:"dxxcl_yl02_00103"},
		{src:"images/3dpage17/dxxcl_yl02_00104.jpg", id:"dxxcl_yl02_00104"},
		{src:"images/3dpage17/dxxcl_yl02_00105.jpg", id:"dxxcl_yl02_00105"},
		{src:"images/3dpage17/dxxcl_yl02_00106.jpg", id:"dxxcl_yl02_00106"},
		{src:"images/3dpage17/dxxcl_yl02_00107.jpg", id:"dxxcl_yl02_00107"},
		{src:"images/3dpage17/dxxcl_yl02_00108.jpg", id:"dxxcl_yl02_00108"},
		{src:"images/3dpage17/dxxcl_yl02_00109.jpg", id:"dxxcl_yl02_00109"},
		{src:"images/3dpage17/dxxcl_yl02_00110.jpg", id:"dxxcl_yl02_00110"},
		{src:"images/3dpage17/dxxcl_yl02_00111.jpg", id:"dxxcl_yl02_00111"},
		{src:"images/3dpage17/dxxcl_yl02_00112.jpg", id:"dxxcl_yl02_00112"},
		{src:"images/3dpage17/dxxcl_yl02_00113.jpg", id:"dxxcl_yl02_00113"},
		{src:"images/3dpage17/dxxcl_yl02_00114.jpg", id:"dxxcl_yl02_00114"},
		{src:"images/3dpage17/dxxcl_yl02_00115.jpg", id:"dxxcl_yl02_00115"},
		{src:"images/3dpage17/dxxcl_yl02_00116.jpg", id:"dxxcl_yl02_00116"},
		{src:"images/3dpage17/dxxcl_yl02_00117.jpg", id:"dxxcl_yl02_00117"},
		{src:"images/3dpage17/dxxcl_yl02_00118.jpg", id:"dxxcl_yl02_00118"},
		{src:"images/3dpage17/dxxcl_yl02_00119.jpg", id:"dxxcl_yl02_00119"},
		{src:"images/3dpage17/dxxcl_yl02_00120.jpg", id:"dxxcl_yl02_00120"},
		{src:"images/3dpage17/dxxcl_yl02_00121.jpg", id:"dxxcl_yl02_00121"},
		{src:"images/3dpage17/dxxcl_yl02_00122.jpg", id:"dxxcl_yl02_00122"},
		{src:"images/3dpage17/dxxcl_yl02_00123.jpg", id:"dxxcl_yl02_00123"},
		{src:"images/3dpage17/dxxcl_yl02_00124.jpg", id:"dxxcl_yl02_00124"},
		{src:"images/3dpage17/dxxcl_yl02_00125.jpg", id:"dxxcl_yl02_00125"},
		{src:"images/3dpage17/dxxcl_yl02_00126.jpg", id:"dxxcl_yl02_00126"},
		{src:"images/3dpage17/dxxcl_yl02_00127.jpg", id:"dxxcl_yl02_00127"},
		{src:"images/3dpage17/dxxcl_yl02_00128.jpg", id:"dxxcl_yl02_00128"},
		{src:"images/3dpage17/dxxcl_yl02_00129.jpg", id:"dxxcl_yl02_00129"},
		{src:"images/3dpage17/dxxcl_yl02_00130.jpg", id:"dxxcl_yl02_00130"},
		{src:"images/3dpage17/dxxcl_yl02_00131.jpg", id:"dxxcl_yl02_00131"},
		{src:"images/3dpage17/dxxcl_yl02_00132.jpg", id:"dxxcl_yl02_00132"},
		{src:"images/3dpage17/dxxcl_yl02_00133.jpg", id:"dxxcl_yl02_00133"},
		{src:"images/3dpage17/dxxcl_yl02_00134.jpg", id:"dxxcl_yl02_00134"},
		{src:"images/3dpage17/dxxcl_yl02_00135.jpg", id:"dxxcl_yl02_00135"},
		{src:"images/3dpage17/dxxcl_yl02_00136.jpg", id:"dxxcl_yl02_00136"},
		{src:"images/3dpage17/dxxcl_yl02_00137.jpg", id:"dxxcl_yl02_00137"},
		{src:"images/3dpage17/dxxcl_yl02_00138.jpg", id:"dxxcl_yl02_00138"},
		{src:"images/3dpage17/dxxcl_yl02_00139.jpg", id:"dxxcl_yl02_00139"},
		{src:"images/3dpage17/dxxcl_yl02_00140.jpg", id:"dxxcl_yl02_00140"},
		{src:"images/3dpage17/dxxcl_yl02_00141.jpg", id:"dxxcl_yl02_00141"},
		{src:"images/3dpage17/dxxcl_yl02_00142.jpg", id:"dxxcl_yl02_00142"},
		{src:"images/3dpage17/dxxcl_yl02_00143.jpg", id:"dxxcl_yl02_00143"},
		{src:"images/3dpage17/dxxcl_yl02_00144.jpg", id:"dxxcl_yl02_00144"},
		{src:"images/3dpage17/dxxcl_yl02_00145.jpg", id:"dxxcl_yl02_00145"},
		{src:"images/3dpage17/dxxcl_yl02_00146.jpg", id:"dxxcl_yl02_00146"},
		{src:"images/3dpage17/dxxcl_yl02_00147.jpg", id:"dxxcl_yl02_00147"},
		{src:"images/3dpage17/dxxcl_yl02_00148.jpg", id:"dxxcl_yl02_00148"},
		{src:"images/3dpage17/dxxcl_yl02_00149.jpg", id:"dxxcl_yl02_00149"},
		{src:"images/3dpage17/dxxcl_yl02_00150.jpg", id:"dxxcl_yl02_00150"},
		{src:"images/3dpage17/dxxcl_yl02_00151.jpg", id:"dxxcl_yl02_00151"},
		{src:"images/3dpage17/dxxcl_yl02_00152.jpg", id:"dxxcl_yl02_00152"},
		{src:"images/3dpage17/dxxcl_yl02_00153.jpg", id:"dxxcl_yl02_00153"},
		{src:"images/3dpage17/dxxcl_yl02_00154.jpg", id:"dxxcl_yl02_00154"},
		{src:"images/3dpage17/dxxcl_yl02_00155.jpg", id:"dxxcl_yl02_00155"},
		{src:"images/3dpage17/dxxcl_yl02_00156.jpg", id:"dxxcl_yl02_00156"},
		{src:"images/3dpage17/dxxcl_yl02_00157.jpg", id:"dxxcl_yl02_00157"},
		{src:"images/3dpage17/dxxcl_yl02_00158.jpg", id:"dxxcl_yl02_00158"},
		{src:"images/3dpage17/dxxcl_yl02_00159.jpg", id:"dxxcl_yl02_00159"},
		{src:"images/3dpage17/dxxcl_yl02_00160.jpg", id:"dxxcl_yl02_00160"},
		{src:"images/3dpage17/dxxcl_yl02_00161.jpg", id:"dxxcl_yl02_00161"},
		{src:"images/3dpage17/dxxcl_yl02_00162.jpg", id:"dxxcl_yl02_00162"},
		{src:"images/3dpage17/dxxcl_yl02_00163.jpg", id:"dxxcl_yl02_00163"},
		{src:"images/3dpage17/dxxcl_yl02_00164.jpg", id:"dxxcl_yl02_00164"},
		{src:"images/3dpage17/dxxcl_yl02_00165.jpg", id:"dxxcl_yl02_00165"},
		{src:"images/3dpage17/dxxcl_yl02_00166.jpg", id:"dxxcl_yl02_00166"},
		{src:"images/3dpage17/dxxcl_yl02_00167.jpg", id:"dxxcl_yl02_00167"},
		{src:"images/3dpage17/dxxcl_yl02_00168.jpg", id:"dxxcl_yl02_00168"},
		{src:"images/3dpage17/dxxcl_yl02_00169.jpg", id:"dxxcl_yl02_00169"},
		{src:"images/3dpage17/dxxcl_yl02_00170.jpg", id:"dxxcl_yl02_00170"},
		{src:"images/3dpage17/dxxcl_yl02_00171.jpg", id:"dxxcl_yl02_00171"},
		{src:"images/3dpage17/dxxcl_yl02_00172.jpg", id:"dxxcl_yl02_00172"},
		{src:"images/3dpage17/dxxcl_yl02_00173.jpg", id:"dxxcl_yl02_00173"},
		{src:"images/3dpage17/dxxcl_yl02_00174.jpg", id:"dxxcl_yl02_00174"},
		{src:"images/3dpage17/dxxcl_yl02_00175.jpg", id:"dxxcl_yl02_00175"},
		{src:"images/3dpage17/dxxcl_yl02_00176.jpg", id:"dxxcl_yl02_00176"},
		{src:"images/3dpage17/dxxcl_yl02_00177.jpg", id:"dxxcl_yl02_00177"},
		{src:"images/3dpage17/dxxcl_yl02_00178.jpg", id:"dxxcl_yl02_00178"},
		{src:"images/3dpage17/dxxcl_yl02_00179.jpg", id:"dxxcl_yl02_00179"},
		{src:"images/3dpage17/dxxcl_yl02_00180.jpg", id:"dxxcl_yl02_00180"},
		{src:"images/3dpage17/dxxcl_yl02_00181.jpg", id:"dxxcl_yl02_00181"},
		{src:"images/3dpage17/dxxcl_yl02_00182.jpg", id:"dxxcl_yl02_00182"},
		{src:"images/3dpage17/dxxcl_yl02_00183.jpg", id:"dxxcl_yl02_00183"},
		{src:"images/3dpage17/dxxcl_yl02_00184.jpg", id:"dxxcl_yl02_00184"},
		{src:"images/3dpage17/dxxcl_yl02_00185.jpg", id:"dxxcl_yl02_00185"},
		{src:"images/3dpage17/dxxcl_yl02_00186.jpg", id:"dxxcl_yl02_00186"},
		{src:"images/3dpage17/dxxcl_yl02_00187.jpg", id:"dxxcl_yl02_00187"},
		{src:"images/3dpage17/dxxcl_yl02_00188.jpg", id:"dxxcl_yl02_00188"},
		{src:"images/3dpage17/dxxcl_yl02_00189.jpg", id:"dxxcl_yl02_00189"},
		{src:"images/3dpage17/dxxcl_yl02_00190.jpg", id:"dxxcl_yl02_00190"},
		{src:"images/3dpage17/dxxcl_yl02_00191.jpg", id:"dxxcl_yl02_00191"},
		{src:"images/3dpage17/dxxcl_yl02_00192.jpg", id:"dxxcl_yl02_00192"},
		{src:"images/3dpage17/dxxcl_yl02_00193.jpg", id:"dxxcl_yl02_00193"},
		{src:"images/3dpage17/dxxcl_yl02_00194.jpg", id:"dxxcl_yl02_00194"},
		{src:"images/3dpage17/dxxcl_yl02_00195.jpg", id:"dxxcl_yl02_00195"},
		{src:"images/3dpage17/dxxcl_yl02_00196.jpg", id:"dxxcl_yl02_00196"},
		{src:"images/3dpage17/dxxcl_yl02_00197.jpg", id:"dxxcl_yl02_00197"},
		{src:"images/3dpage17/dxxcl_yl02_00198.jpg", id:"dxxcl_yl02_00198"},
		{src:"images/3dpage17/dxxcl_yl02_00199.jpg", id:"dxxcl_yl02_00199"},
		{src:"images/3dpage17/dxxcl_yl02_00200.jpg", id:"dxxcl_yl02_00200"},
		{src:"images/3dpage17/dxxcl_yl02_00201.jpg", id:"dxxcl_yl02_00201"},
		{src:"images/3dpage17/dxxcl_yl02_00202.jpg", id:"dxxcl_yl02_00202"},
		{src:"images/3dpage17/dxxcl_yl02_00203.jpg", id:"dxxcl_yl02_00203"},
		{src:"images/3dpage17/dxxcl_yl02_00204.jpg", id:"dxxcl_yl02_00204"},
		{src:"images/3dpage17/dxxcl_yl02_00205.jpg", id:"dxxcl_yl02_00205"},
		{src:"images/3dpage17/dxxcl_yl02_00206.jpg", id:"dxxcl_yl02_00206"},
		{src:"images/3dpage17/dxxcl_yl02_00207.jpg", id:"dxxcl_yl02_00207"},
		{src:"images/3dpage17/dxxcl_yl02_00208.jpg", id:"dxxcl_yl02_00208"},
		{src:"images/3dpage17/dxxcl_yl02_00209.jpg", id:"dxxcl_yl02_00209"},
		{src:"images/3dpage17/dxxcl_yl02_00210.jpg", id:"dxxcl_yl02_00210"},
		{src:"images/3dpage17/dxxcl_yl02_00211.jpg", id:"dxxcl_yl02_00211"},
		{src:"images/3dpage17/dxxcl_yl02_00212.jpg", id:"dxxcl_yl02_00212"}
	],
	preloads: []
};




})(lib3dpage17 = lib3dpage17||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3dpage17, images, createjs, ss, AdobeAn;