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



(lib.dxxcl_yl01K_00000 = function() {
	this.initialize(img.dxxcl_yl01K_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00001 = function() {
	this.initialize(img.dxxcl_yl01K_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00002 = function() {
	this.initialize(img.dxxcl_yl01K_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00003 = function() {
	this.initialize(img.dxxcl_yl01K_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00004 = function() {
	this.initialize(img.dxxcl_yl01K_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00005 = function() {
	this.initialize(img.dxxcl_yl01K_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00006 = function() {
	this.initialize(img.dxxcl_yl01K_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00007 = function() {
	this.initialize(img.dxxcl_yl01K_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00008 = function() {
	this.initialize(img.dxxcl_yl01K_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00009 = function() {
	this.initialize(img.dxxcl_yl01K_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00010 = function() {
	this.initialize(img.dxxcl_yl01K_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00011 = function() {
	this.initialize(img.dxxcl_yl01K_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00012 = function() {
	this.initialize(img.dxxcl_yl01K_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00013 = function() {
	this.initialize(img.dxxcl_yl01K_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00014 = function() {
	this.initialize(img.dxxcl_yl01K_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00015 = function() {
	this.initialize(img.dxxcl_yl01K_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00016 = function() {
	this.initialize(img.dxxcl_yl01K_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00017 = function() {
	this.initialize(img.dxxcl_yl01K_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00018 = function() {
	this.initialize(img.dxxcl_yl01K_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00019 = function() {
	this.initialize(img.dxxcl_yl01K_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00020 = function() {
	this.initialize(img.dxxcl_yl01K_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00021 = function() {
	this.initialize(img.dxxcl_yl01K_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00022 = function() {
	this.initialize(img.dxxcl_yl01K_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00023 = function() {
	this.initialize(img.dxxcl_yl01K_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00024 = function() {
	this.initialize(img.dxxcl_yl01K_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00025 = function() {
	this.initialize(img.dxxcl_yl01K_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00026 = function() {
	this.initialize(img.dxxcl_yl01K_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00027 = function() {
	this.initialize(img.dxxcl_yl01K_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00028 = function() {
	this.initialize(img.dxxcl_yl01K_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00029 = function() {
	this.initialize(img.dxxcl_yl01K_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00030 = function() {
	this.initialize(img.dxxcl_yl01K_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00031 = function() {
	this.initialize(img.dxxcl_yl01K_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00032 = function() {
	this.initialize(img.dxxcl_yl01K_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00033 = function() {
	this.initialize(img.dxxcl_yl01K_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00034 = function() {
	this.initialize(img.dxxcl_yl01K_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00035 = function() {
	this.initialize(img.dxxcl_yl01K_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00036 = function() {
	this.initialize(img.dxxcl_yl01K_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00037 = function() {
	this.initialize(img.dxxcl_yl01K_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00038 = function() {
	this.initialize(img.dxxcl_yl01K_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00039 = function() {
	this.initialize(img.dxxcl_yl01K_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00040 = function() {
	this.initialize(img.dxxcl_yl01K_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00041 = function() {
	this.initialize(img.dxxcl_yl01K_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00042 = function() {
	this.initialize(img.dxxcl_yl01K_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00043 = function() {
	this.initialize(img.dxxcl_yl01K_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00044 = function() {
	this.initialize(img.dxxcl_yl01K_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00045 = function() {
	this.initialize(img.dxxcl_yl01K_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00046 = function() {
	this.initialize(img.dxxcl_yl01K_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00047 = function() {
	this.initialize(img.dxxcl_yl01K_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00048 = function() {
	this.initialize(img.dxxcl_yl01K_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00049 = function() {
	this.initialize(img.dxxcl_yl01K_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00050 = function() {
	this.initialize(img.dxxcl_yl01K_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00051 = function() {
	this.initialize(img.dxxcl_yl01K_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00052 = function() {
	this.initialize(img.dxxcl_yl01K_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00053 = function() {
	this.initialize(img.dxxcl_yl01K_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00054 = function() {
	this.initialize(img.dxxcl_yl01K_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00055 = function() {
	this.initialize(img.dxxcl_yl01K_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00056 = function() {
	this.initialize(img.dxxcl_yl01K_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00057 = function() {
	this.initialize(img.dxxcl_yl01K_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00058 = function() {
	this.initialize(img.dxxcl_yl01K_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00059 = function() {
	this.initialize(img.dxxcl_yl01K_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00060 = function() {
	this.initialize(img.dxxcl_yl01K_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00061 = function() {
	this.initialize(img.dxxcl_yl01K_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00062 = function() {
	this.initialize(img.dxxcl_yl01K_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00063 = function() {
	this.initialize(img.dxxcl_yl01K_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00064 = function() {
	this.initialize(img.dxxcl_yl01K_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00065 = function() {
	this.initialize(img.dxxcl_yl01K_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00066 = function() {
	this.initialize(img.dxxcl_yl01K_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00067 = function() {
	this.initialize(img.dxxcl_yl01K_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00068 = function() {
	this.initialize(img.dxxcl_yl01K_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00069 = function() {
	this.initialize(img.dxxcl_yl01K_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00070 = function() {
	this.initialize(img.dxxcl_yl01K_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00071 = function() {
	this.initialize(img.dxxcl_yl01K_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00072 = function() {
	this.initialize(img.dxxcl_yl01K_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00073 = function() {
	this.initialize(img.dxxcl_yl01K_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00074 = function() {
	this.initialize(img.dxxcl_yl01K_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00075 = function() {
	this.initialize(img.dxxcl_yl01K_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00076 = function() {
	this.initialize(img.dxxcl_yl01K_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00077 = function() {
	this.initialize(img.dxxcl_yl01K_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00078 = function() {
	this.initialize(img.dxxcl_yl01K_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00079 = function() {
	this.initialize(img.dxxcl_yl01K_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00080 = function() {
	this.initialize(img.dxxcl_yl01K_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00081 = function() {
	this.initialize(img.dxxcl_yl01K_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00082 = function() {
	this.initialize(img.dxxcl_yl01K_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00083 = function() {
	this.initialize(img.dxxcl_yl01K_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00084 = function() {
	this.initialize(img.dxxcl_yl01K_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00085 = function() {
	this.initialize(img.dxxcl_yl01K_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00086 = function() {
	this.initialize(img.dxxcl_yl01K_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00087 = function() {
	this.initialize(img.dxxcl_yl01K_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00088 = function() {
	this.initialize(img.dxxcl_yl01K_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00089 = function() {
	this.initialize(img.dxxcl_yl01K_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00090 = function() {
	this.initialize(img.dxxcl_yl01K_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00091 = function() {
	this.initialize(img.dxxcl_yl01K_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00092 = function() {
	this.initialize(img.dxxcl_yl01K_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00093 = function() {
	this.initialize(img.dxxcl_yl01K_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00094 = function() {
	this.initialize(img.dxxcl_yl01K_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00095 = function() {
	this.initialize(img.dxxcl_yl01K_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00096 = function() {
	this.initialize(img.dxxcl_yl01K_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00097 = function() {
	this.initialize(img.dxxcl_yl01K_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00098 = function() {
	this.initialize(img.dxxcl_yl01K_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00099 = function() {
	this.initialize(img.dxxcl_yl01K_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00100 = function() {
	this.initialize(img.dxxcl_yl01K_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00101 = function() {
	this.initialize(img.dxxcl_yl01K_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00102 = function() {
	this.initialize(img.dxxcl_yl01K_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00103 = function() {
	this.initialize(img.dxxcl_yl01K_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00104 = function() {
	this.initialize(img.dxxcl_yl01K_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00105 = function() {
	this.initialize(img.dxxcl_yl01K_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00106 = function() {
	this.initialize(img.dxxcl_yl01K_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00107 = function() {
	this.initialize(img.dxxcl_yl01K_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00108 = function() {
	this.initialize(img.dxxcl_yl01K_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00109 = function() {
	this.initialize(img.dxxcl_yl01K_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00110 = function() {
	this.initialize(img.dxxcl_yl01K_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00111 = function() {
	this.initialize(img.dxxcl_yl01K_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00112 = function() {
	this.initialize(img.dxxcl_yl01K_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00113 = function() {
	this.initialize(img.dxxcl_yl01K_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00114 = function() {
	this.initialize(img.dxxcl_yl01K_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00115 = function() {
	this.initialize(img.dxxcl_yl01K_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00116 = function() {
	this.initialize(img.dxxcl_yl01K_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00117 = function() {
	this.initialize(img.dxxcl_yl01K_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00118 = function() {
	this.initialize(img.dxxcl_yl01K_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00119 = function() {
	this.initialize(img.dxxcl_yl01K_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00120 = function() {
	this.initialize(img.dxxcl_yl01K_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00121 = function() {
	this.initialize(img.dxxcl_yl01K_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00122 = function() {
	this.initialize(img.dxxcl_yl01K_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00123 = function() {
	this.initialize(img.dxxcl_yl01K_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00124 = function() {
	this.initialize(img.dxxcl_yl01K_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00125 = function() {
	this.initialize(img.dxxcl_yl01K_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00126 = function() {
	this.initialize(img.dxxcl_yl01K_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01K_00127 = function() {
	this.initialize(img.dxxcl_yl01K_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00000 = function() {
	this.initialize(img.dxxcl_yl01m_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00001 = function() {
	this.initialize(img.dxxcl_yl01m_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00002 = function() {
	this.initialize(img.dxxcl_yl01m_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00003 = function() {
	this.initialize(img.dxxcl_yl01m_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00004 = function() {
	this.initialize(img.dxxcl_yl01m_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00005 = function() {
	this.initialize(img.dxxcl_yl01m_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00006 = function() {
	this.initialize(img.dxxcl_yl01m_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00007 = function() {
	this.initialize(img.dxxcl_yl01m_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00008 = function() {
	this.initialize(img.dxxcl_yl01m_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00009 = function() {
	this.initialize(img.dxxcl_yl01m_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00010 = function() {
	this.initialize(img.dxxcl_yl01m_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00011 = function() {
	this.initialize(img.dxxcl_yl01m_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00012 = function() {
	this.initialize(img.dxxcl_yl01m_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00013 = function() {
	this.initialize(img.dxxcl_yl01m_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00014 = function() {
	this.initialize(img.dxxcl_yl01m_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00015 = function() {
	this.initialize(img.dxxcl_yl01m_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00016 = function() {
	this.initialize(img.dxxcl_yl01m_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00017 = function() {
	this.initialize(img.dxxcl_yl01m_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00018 = function() {
	this.initialize(img.dxxcl_yl01m_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00019 = function() {
	this.initialize(img.dxxcl_yl01m_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00020 = function() {
	this.initialize(img.dxxcl_yl01m_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00021 = function() {
	this.initialize(img.dxxcl_yl01m_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00022 = function() {
	this.initialize(img.dxxcl_yl01m_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00023 = function() {
	this.initialize(img.dxxcl_yl01m_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00024 = function() {
	this.initialize(img.dxxcl_yl01m_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00025 = function() {
	this.initialize(img.dxxcl_yl01m_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00026 = function() {
	this.initialize(img.dxxcl_yl01m_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00027 = function() {
	this.initialize(img.dxxcl_yl01m_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00028 = function() {
	this.initialize(img.dxxcl_yl01m_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00029 = function() {
	this.initialize(img.dxxcl_yl01m_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00030 = function() {
	this.initialize(img.dxxcl_yl01m_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00031 = function() {
	this.initialize(img.dxxcl_yl01m_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00032 = function() {
	this.initialize(img.dxxcl_yl01m_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00033 = function() {
	this.initialize(img.dxxcl_yl01m_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00034 = function() {
	this.initialize(img.dxxcl_yl01m_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00035 = function() {
	this.initialize(img.dxxcl_yl01m_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00036 = function() {
	this.initialize(img.dxxcl_yl01m_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00037 = function() {
	this.initialize(img.dxxcl_yl01m_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00038 = function() {
	this.initialize(img.dxxcl_yl01m_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00039 = function() {
	this.initialize(img.dxxcl_yl01m_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00040 = function() {
	this.initialize(img.dxxcl_yl01m_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00041 = function() {
	this.initialize(img.dxxcl_yl01m_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00042 = function() {
	this.initialize(img.dxxcl_yl01m_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00043 = function() {
	this.initialize(img.dxxcl_yl01m_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00044 = function() {
	this.initialize(img.dxxcl_yl01m_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00045 = function() {
	this.initialize(img.dxxcl_yl01m_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00046 = function() {
	this.initialize(img.dxxcl_yl01m_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00047 = function() {
	this.initialize(img.dxxcl_yl01m_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00048 = function() {
	this.initialize(img.dxxcl_yl01m_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00049 = function() {
	this.initialize(img.dxxcl_yl01m_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00050 = function() {
	this.initialize(img.dxxcl_yl01m_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00051 = function() {
	this.initialize(img.dxxcl_yl01m_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00052 = function() {
	this.initialize(img.dxxcl_yl01m_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00053 = function() {
	this.initialize(img.dxxcl_yl01m_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00054 = function() {
	this.initialize(img.dxxcl_yl01m_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00055 = function() {
	this.initialize(img.dxxcl_yl01m_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00056 = function() {
	this.initialize(img.dxxcl_yl01m_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00057 = function() {
	this.initialize(img.dxxcl_yl01m_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00058 = function() {
	this.initialize(img.dxxcl_yl01m_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00059 = function() {
	this.initialize(img.dxxcl_yl01m_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00060 = function() {
	this.initialize(img.dxxcl_yl01m_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00061 = function() {
	this.initialize(img.dxxcl_yl01m_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00062 = function() {
	this.initialize(img.dxxcl_yl01m_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00063 = function() {
	this.initialize(img.dxxcl_yl01m_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00064 = function() {
	this.initialize(img.dxxcl_yl01m_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00065 = function() {
	this.initialize(img.dxxcl_yl01m_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00066 = function() {
	this.initialize(img.dxxcl_yl01m_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00067 = function() {
	this.initialize(img.dxxcl_yl01m_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00068 = function() {
	this.initialize(img.dxxcl_yl01m_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00069 = function() {
	this.initialize(img.dxxcl_yl01m_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00070 = function() {
	this.initialize(img.dxxcl_yl01m_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00071 = function() {
	this.initialize(img.dxxcl_yl01m_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00072 = function() {
	this.initialize(img.dxxcl_yl01m_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00073 = function() {
	this.initialize(img.dxxcl_yl01m_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00074 = function() {
	this.initialize(img.dxxcl_yl01m_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00075 = function() {
	this.initialize(img.dxxcl_yl01m_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00076 = function() {
	this.initialize(img.dxxcl_yl01m_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00077 = function() {
	this.initialize(img.dxxcl_yl01m_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00078 = function() {
	this.initialize(img.dxxcl_yl01m_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00079 = function() {
	this.initialize(img.dxxcl_yl01m_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00080 = function() {
	this.initialize(img.dxxcl_yl01m_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00081 = function() {
	this.initialize(img.dxxcl_yl01m_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00082 = function() {
	this.initialize(img.dxxcl_yl01m_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00083 = function() {
	this.initialize(img.dxxcl_yl01m_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00084 = function() {
	this.initialize(img.dxxcl_yl01m_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00085 = function() {
	this.initialize(img.dxxcl_yl01m_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00086 = function() {
	this.initialize(img.dxxcl_yl01m_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00087 = function() {
	this.initialize(img.dxxcl_yl01m_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00088 = function() {
	this.initialize(img.dxxcl_yl01m_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00089 = function() {
	this.initialize(img.dxxcl_yl01m_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00090 = function() {
	this.initialize(img.dxxcl_yl01m_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00091 = function() {
	this.initialize(img.dxxcl_yl01m_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00092 = function() {
	this.initialize(img.dxxcl_yl01m_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00093 = function() {
	this.initialize(img.dxxcl_yl01m_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00094 = function() {
	this.initialize(img.dxxcl_yl01m_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00095 = function() {
	this.initialize(img.dxxcl_yl01m_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00096 = function() {
	this.initialize(img.dxxcl_yl01m_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00097 = function() {
	this.initialize(img.dxxcl_yl01m_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00098 = function() {
	this.initialize(img.dxxcl_yl01m_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00099 = function() {
	this.initialize(img.dxxcl_yl01m_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00100 = function() {
	this.initialize(img.dxxcl_yl01m_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00101 = function() {
	this.initialize(img.dxxcl_yl01m_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00102 = function() {
	this.initialize(img.dxxcl_yl01m_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00103 = function() {
	this.initialize(img.dxxcl_yl01m_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00104 = function() {
	this.initialize(img.dxxcl_yl01m_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00105 = function() {
	this.initialize(img.dxxcl_yl01m_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00106 = function() {
	this.initialize(img.dxxcl_yl01m_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00107 = function() {
	this.initialize(img.dxxcl_yl01m_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00108 = function() {
	this.initialize(img.dxxcl_yl01m_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00109 = function() {
	this.initialize(img.dxxcl_yl01m_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00110 = function() {
	this.initialize(img.dxxcl_yl01m_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00111 = function() {
	this.initialize(img.dxxcl_yl01m_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00112 = function() {
	this.initialize(img.dxxcl_yl01m_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00113 = function() {
	this.initialize(img.dxxcl_yl01m_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00114 = function() {
	this.initialize(img.dxxcl_yl01m_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00115 = function() {
	this.initialize(img.dxxcl_yl01m_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00116 = function() {
	this.initialize(img.dxxcl_yl01m_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00117 = function() {
	this.initialize(img.dxxcl_yl01m_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00118 = function() {
	this.initialize(img.dxxcl_yl01m_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00119 = function() {
	this.initialize(img.dxxcl_yl01m_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00120 = function() {
	this.initialize(img.dxxcl_yl01m_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00121 = function() {
	this.initialize(img.dxxcl_yl01m_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00122 = function() {
	this.initialize(img.dxxcl_yl01m_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00123 = function() {
	this.initialize(img.dxxcl_yl01m_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00124 = function() {
	this.initialize(img.dxxcl_yl01m_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00125 = function() {
	this.initialize(img.dxxcl_yl01m_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00126 = function() {
	this.initialize(img.dxxcl_yl01m_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00127 = function() {
	this.initialize(img.dxxcl_yl01m_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00128 = function() {
	this.initialize(img.dxxcl_yl01m_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00129 = function() {
	this.initialize(img.dxxcl_yl01m_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00130 = function() {
	this.initialize(img.dxxcl_yl01m_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00131 = function() {
	this.initialize(img.dxxcl_yl01m_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00132 = function() {
	this.initialize(img.dxxcl_yl01m_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00133 = function() {
	this.initialize(img.dxxcl_yl01m_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00134 = function() {
	this.initialize(img.dxxcl_yl01m_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00135 = function() {
	this.initialize(img.dxxcl_yl01m_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00136 = function() {
	this.initialize(img.dxxcl_yl01m_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00137 = function() {
	this.initialize(img.dxxcl_yl01m_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00138 = function() {
	this.initialize(img.dxxcl_yl01m_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00139 = function() {
	this.initialize(img.dxxcl_yl01m_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00140 = function() {
	this.initialize(img.dxxcl_yl01m_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00141 = function() {
	this.initialize(img.dxxcl_yl01m_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00142 = function() {
	this.initialize(img.dxxcl_yl01m_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00143 = function() {
	this.initialize(img.dxxcl_yl01m_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00144 = function() {
	this.initialize(img.dxxcl_yl01m_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00145 = function() {
	this.initialize(img.dxxcl_yl01m_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00146 = function() {
	this.initialize(img.dxxcl_yl01m_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00147 = function() {
	this.initialize(img.dxxcl_yl01m_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00148 = function() {
	this.initialize(img.dxxcl_yl01m_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00149 = function() {
	this.initialize(img.dxxcl_yl01m_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00150 = function() {
	this.initialize(img.dxxcl_yl01m_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00151 = function() {
	this.initialize(img.dxxcl_yl01m_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00152 = function() {
	this.initialize(img.dxxcl_yl01m_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00153 = function() {
	this.initialize(img.dxxcl_yl01m_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00154 = function() {
	this.initialize(img.dxxcl_yl01m_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00155 = function() {
	this.initialize(img.dxxcl_yl01m_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00156 = function() {
	this.initialize(img.dxxcl_yl01m_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00157 = function() {
	this.initialize(img.dxxcl_yl01m_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00158 = function() {
	this.initialize(img.dxxcl_yl01m_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00159 = function() {
	this.initialize(img.dxxcl_yl01m_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00160 = function() {
	this.initialize(img.dxxcl_yl01m_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00161 = function() {
	this.initialize(img.dxxcl_yl01m_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00162 = function() {
	this.initialize(img.dxxcl_yl01m_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00163 = function() {
	this.initialize(img.dxxcl_yl01m_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00164 = function() {
	this.initialize(img.dxxcl_yl01m_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00165 = function() {
	this.initialize(img.dxxcl_yl01m_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00166 = function() {
	this.initialize(img.dxxcl_yl01m_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00167 = function() {
	this.initialize(img.dxxcl_yl01m_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00168 = function() {
	this.initialize(img.dxxcl_yl01m_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00169 = function() {
	this.initialize(img.dxxcl_yl01m_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00170 = function() {
	this.initialize(img.dxxcl_yl01m_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00171 = function() {
	this.initialize(img.dxxcl_yl01m_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00172 = function() {
	this.initialize(img.dxxcl_yl01m_00172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00173 = function() {
	this.initialize(img.dxxcl_yl01m_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00174 = function() {
	this.initialize(img.dxxcl_yl01m_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00175 = function() {
	this.initialize(img.dxxcl_yl01m_00175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00176 = function() {
	this.initialize(img.dxxcl_yl01m_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00177 = function() {
	this.initialize(img.dxxcl_yl01m_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00178 = function() {
	this.initialize(img.dxxcl_yl01m_00178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00179 = function() {
	this.initialize(img.dxxcl_yl01m_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00180 = function() {
	this.initialize(img.dxxcl_yl01m_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00181 = function() {
	this.initialize(img.dxxcl_yl01m_00181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00182 = function() {
	this.initialize(img.dxxcl_yl01m_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00183 = function() {
	this.initialize(img.dxxcl_yl01m_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00184 = function() {
	this.initialize(img.dxxcl_yl01m_00184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00185 = function() {
	this.initialize(img.dxxcl_yl01m_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00186 = function() {
	this.initialize(img.dxxcl_yl01m_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00187 = function() {
	this.initialize(img.dxxcl_yl01m_00187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00188 = function() {
	this.initialize(img.dxxcl_yl01m_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00189 = function() {
	this.initialize(img.dxxcl_yl01m_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00190 = function() {
	this.initialize(img.dxxcl_yl01m_00190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00191 = function() {
	this.initialize(img.dxxcl_yl01m_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00192 = function() {
	this.initialize(img.dxxcl_yl01m_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00193 = function() {
	this.initialize(img.dxxcl_yl01m_00193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00194 = function() {
	this.initialize(img.dxxcl_yl01m_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00195 = function() {
	this.initialize(img.dxxcl_yl01m_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00196 = function() {
	this.initialize(img.dxxcl_yl01m_00196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00197 = function() {
	this.initialize(img.dxxcl_yl01m_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00198 = function() {
	this.initialize(img.dxxcl_yl01m_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00199 = function() {
	this.initialize(img.dxxcl_yl01m_00199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00200 = function() {
	this.initialize(img.dxxcl_yl01m_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00201 = function() {
	this.initialize(img.dxxcl_yl01m_00201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00202 = function() {
	this.initialize(img.dxxcl_yl01m_00202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00203 = function() {
	this.initialize(img.dxxcl_yl01m_00203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00204 = function() {
	this.initialize(img.dxxcl_yl01m_00204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00205 = function() {
	this.initialize(img.dxxcl_yl01m_00205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00206 = function() {
	this.initialize(img.dxxcl_yl01m_00206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00207 = function() {
	this.initialize(img.dxxcl_yl01m_00207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00208 = function() {
	this.initialize(img.dxxcl_yl01m_00208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00209 = function() {
	this.initialize(img.dxxcl_yl01m_00209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00210 = function() {
	this.initialize(img.dxxcl_yl01m_00210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00211 = function() {
	this.initialize(img.dxxcl_yl01m_00211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dxxcl_yl01m_00212 = function() {
	this.initialize(img.dxxcl_yl01m_00212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.page12sc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAwIAAg4QAAgZgVAAQgXADAAAcIAAAyIgQAAIAAhcIAPAAIAAAMQALgPARAAQAfABABAfIAAA/g");
	this.shape.setTransform(1051.3,529.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBAIAAhdIAPAAIAABdgAgHguIAAgRIAPAAIAAARg");
	this.shape_1.setTransform(1044.1,527.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvAwIAAg7QAAgWgRAAQgVACgBAXIAAA4IgPAAIAAg/QgBgRgOgBQgYADAAAcIAAAyIgQAAIAAhcIAOAAIAAAMQALgPATAAQAPAAAHAOIABABQAMgPARAAQAdABABAfIAAA/g");
	this.shape_2.setTransform(1034.4,529.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBDIAqiFIALAAIgrCFg");
	this.shape_3.setTransform(1024.2,527.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBCIAAiAIAPAAIAAAMIAAAAIAAAAQALgPAQAAQAkACADAtQgCAwgnACQgQgBgIgLIgBAAIAAAugAgZgKQAAAdAZABQAXAAACgkQAAgigZgBQgZABAAAog");
	this.shape_4.setTransform(1016.5,531);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwAwIAAg7QAAgWgSAAQgUACgCAXIAAA4IgPAAIAAg/QgBgRgOgBQgZADAAAcIAAAyIgPAAIAAhcIAOAAIAAAMQAMgPARAAQAQAAAHAOIABABQAMgPARAAQAdABABAfIAAA/g");
	this.shape_5.setTransform(1003.6,529.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAwIAAhcIAPAAIAAAQQAKgUAQABIACAAIACAAIAAARIgGAAQgWACgBAWIAAA2g");
	this.shape_6.setTransform(993.6,529.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBAIgjg0IgjA0IgUAAIAuhBIgsg+IAWAAIAgAxIAhgxIAUAAIgrA+IAtBBg");
	this.shape_7.setTransform(983.7,527.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqA/QAAghAdgRIAQgKQAZgKgCgSQgCgWgXgBQgYAAAAAfIgRAAQAAgsArgBQAlADADAjQACAZgkAQIgNAIQgTAKgCANIBEAAIAAAPg");
	this.shape_8.setTransform(972.2,527.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXAwIAAg4QAAgZgVAAQgXADAAAcIAAAyIgQAAIAAhcIAPAAIAAAMQALgPARAAQAfABABAfIAAA/g");
	this.shape_9.setTransform(932,529.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBAIAAhdIAPAAIAABdgAgHguIAAgRIAPAAIAAARg");
	this.shape_10.setTransform(924.8,527.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAwAwIAAg7QgBgWgRAAQgUACgCAXIAAA4IgPAAIAAg/QgBgRgOgBQgZADAAAcIAAAyIgQAAIAAhcIAQAAIAAAMQALgPARAAQAQAAAIAOIAAABQAMgPARAAQAdABAAAfIAAA/g");
	this.shape_11.setTransform(915.1,529.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBDIApiFIAMAAIgqCFg");
	this.shape_12.setTransform(904.9,527.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBCIAAiAIAPAAIAAAMIAAAAIAAAAQALgPAQAAQAkACADAtQgCAwgnACQgQgBgIgLIgBAAIAAAugAgZgKQAAAdAZABQAXAAACgkQAAgigZgBQgZABAAAog");
	this.shape_13.setTransform(897.2,531);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAvAwIAAg7QAAgWgRAAQgUACgCAXIAAA4IgPAAIAAg/QgBgRgOgBQgZADABAcIAAAyIgQAAIAAhcIAPAAIAAAMQAKgPATAAQAPAAAIAOIAAABQAMgPARAAQAdABAAAfIAAA/g");
	this.shape_14.setTransform(884.3,529.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAwIAAhcIAPAAIAAAQQAKgUAQABIACAAIACAAIAAARIgGAAQgWACgBAWIAAA2g");
	this.shape_15.setTransform(874.3,529.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAjBAIgjg0IgjA0IgVAAIAvhBIgsg+IAWAAIAfAxIAhgxIAVAAIgrA+IAuBBg");
	this.shape_16.setTransform(864.4,527.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333F48").s().p("An6CsIAAlXIP1AAIAAFXg");
	this.shape_17.setTransform(1012.2,527.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333F48").s().p("An6CsIAAlXIP1AAIAAFXg");
	this.shape_18.setTransform(898.1,527.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00B5E2").s().p("An6CsIAAlXIP1AAIAAFXg");
	this.shape_19.setTransform(898.1,527.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17,p:{x:1012.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17,p:{x:1012.2}},{t:this.shape_19,p:{x:898.1}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_19,p:{x:1012.2}},{t:this.shape_17,p:{x:898.1}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 图层 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgLgLg");
	this.shape_20.setTransform(840.4,475.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgLgLg");
	this.shape_21.setTransform(840.4,306.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgLgLg");
	this.shape_22.setTransform(840.4,231.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AhFBuIAAjcIBBAAQAcAAASAOQARAOAAAXQAAASgKAPQgLANgSAHIAAAAQAXADANANQAOAPAAAWQAAAdgVARQgUASgfgBgAgoBVIAiAAQAVABANgLQAMgKAAgSQAAgmgzAAIgdAAgAgogPIAaAAQATAAAMgKQAMgKAAgSQAAgfgpgBIgcAAg");
	this.shape_23.setTransform(1050.9,453.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("ABEBvIgXg9IhbAAIgVA9IgfAAIBUjdIAdAAIBUDdgAgEhCIghBbIBJAAIghhbQgCgEgBgLIAAAAIgEAPg");
	this.shape_24.setTransform(1005.9,379.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("Ag2BUQgcgeAAgxQABg1AfghQAgggAxAAQAfAAAUAJIAAAeQgXgOgcAAQgkAAgYAZQgXAZAAApQAAAnAWAYQAVAXAiAAQAiAAAXgPIAAAcQgYAMgkAAQgvAAgdgeg");
	this.shape_25.setTransform(928.6,326.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AguA3QgVgUAAgjQAAgiAVgUQAUgUAcAAQAcAAARAPQARAPAAAVIgcAAQgCgQgJgGQgKgGgNAAQgPAAgNANQgNAMAAAaQAAAbANANQANAMAPAAQARAAAKgJQALgJAAgUIAcAAQAAAcgTARQgTAQgcAAQgcAAgUgUg");
	this.shape_26.setTransform(851.5,317.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgxgzIBkAxIhkA2g");
	this.shape_27.setTransform(932.6,306.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgygzIBlAyIhlA1g");
	this.shape_28.setTransform(1146.5,475.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#919386").s().p("A4LTOQgEgBgDgCQgDgDAAgEMAAAgmGQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAAPQADgCADABIABAAIABgBQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAQgEABgDgDIgggZIASAgQADADgBAEQgBAEgEACQgEACgEgBQgDgBgDgDIgagtIAAK8IGvAAIABgBQAEgDAEABQADABACACIHgAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAInUAAIATAfQACADgBAEQgBAEgDADQgEACgEgBQgEgBgCgEIgZgpImyAAIAAaIIWiAAIgWgkQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAcAvIYRAAQAFAAACACQADADAAAFQAAAEgDADQgCACgFABgAYGS8IgwgkQgDgCgBgFQgBgEADgDQACgDAEgBQAFgBADADIAwAkQADACABAEQAAAFgCADQgDADgEABIgBAAQgDAAgDgCgAWnRzIgwglQgDgDgBgEQgBgEADgDQADgDAEgBQAEgBADADIAwAlQADADABAEQAAAEgCADQgDADgEABIgBAAQgDAAgDgCgAiORnQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAVHQqIgwglQgDgDgBgEQgBgEADgEQADgDAEAAQAEgBADADIAwAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgCgAjMQBQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgATnPgIgwgmQgDgCgBgEQgBgEADgDQADgEAEgBQAEAAADADIAwAlQADACABAEQAAAEgCADQgDAEgEABIgBAAQgDAAgDgCgAkKObQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgASHOVIgwglQgDgCgBgEQgBgEADgDQADgEAEgBQAEAAADACIAwAmQADACABAEQAAAEgCADQgDAEgEABIgBAAQgDAAgDgDgAQnNLIgwglQgDgCgBgEQgBgEADgEQADgDAEgBQAEAAADACIAwAlQADADABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAlIM1QgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAPHMCIgwglQgDgDgBgEQgBgEADgEQADgDAEAAQAEgBADACIAwAlQADADABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgCgAmGLPQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgANnK3IgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAMIJtIgwglQgDgCgBgEQgBgEADgDQADgEAEgBQAEAAADADIAwAlQADACABAEQAAAEgCADQgDAEgEABIgBAAQgDAAgDgDgAnEJpQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAKpIjIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAoCIDQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDACQgDACgCAAIgDAAgAJLHZIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgApAGcQgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAHtGPIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAGPFFIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAp+E2QgEgBgCgEIgfg0QgCgEABgDQABgEADgDQAEgCAEABQAEABACAEIAfA0QACAEgBADQgBAEgEADQgCABgDAAIgCAAgAExD7IgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAq8DPQgEgBgCgEIgfg0QgCgEABgEQABgDADgCQAEgDAEABQAEABACAEIAfA0QACAEgBAEQgBADgEACQgCACgDAAIgCAAgADTCxIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAB1BnIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAr6BnQgEgBgCgEIgfg0QgCgEABgDQABgEADgDQAEgCAEABQAEABACAEIAfA0QACAEgBAEQgBADgEADQgCABgDAAIgCAAgAAXAdIgugkQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAuAkQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAs4AAQgEgBgCgEIgfg0QgCgEABgEQABgDADgDQAEgCAEABQAEABACAEIAfA0QACAEgBADQgBAEgEACQgCACgDAAIgCAAgAhGgsIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAt2hoQgEgBgCgEIgfg0QgCgEABgDQABgEADgCQAEgDAEABQAEABACAEIAfA0QACAEgBAEQgBADgEADQgCABgDAAIgCAAgAikh2IgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAkCjAIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAu0jQQgEgBgCgEIgfg0QgCgEABgEQABgDADgDQAEgCAEABQAEABACAEIAfA0QACAEgBADQgBAEgEACQgCACgDAAIgCAAgAlgkKIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAvyk4QgEgBgCgEIgfg0QgCgEABgEQABgDADgCQAEgDAEABQAEABACAEIAfA0QACAEgBAEQgBADgEACQgCACgDAAIgCAAgAm+lUIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAocmeIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAp6noIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAxsoEQgEgBgDgEIgfgzQgCgDABgEQABgEAEgDQADgCAEABQAEABACAEIAfAzQADADgBAEQgBAEgEADQgCABgDAAIgCAAgArYoyIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAyqpqQgEgBgDgEIgfgzQgCgDABgEQABgEAEgCQADgDAEABQAEABACAEIAfAzQADADgBAEQgBAEgEACQgCACgDAAIgCAAgAs2p8IgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAuUrGIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgAzprQQgDgBgDgEIgfg0QgCgDABgEQABgEAEgCQADgCAEABQAEABACAEIAfAzQADAEgBADQgBAEgEACQgDACgCAAIgDAAgAvysQIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgA0ms3QgEgBgDgDIgfgzQgCgEABgEQABgEAEgCQADgCAEABQAEABACADIAfAzQADAEgBAEQgBAEgEACQgCACgDAAIgCgBgAxQtaIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgA1lueQgDgBgDgDIgfg1QgCgDABgEQABgEAEgCQADgCAEABQAEABACADIAfA1QADADgBAEQgBAEgEACQgDACgCAAIgDgBgAyuukIgvglQgEgCAAgEQAAgEACgEQADgDAEAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgA0MvuIgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDgA2jwGQgDgBgDgEIgfgzQgCgEABgEQABgEAEgCQADgCAEABQAEABACADIAfA0QADAEgBAEQgBAEgEACQgDACgCAAIgDgBgA1qw4IgvglQgEgCAAgEQAAgEACgEQADgDAEgBQAEAAADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgDAAgDgDg");
	this.shape_29.setTransform(995.3,354.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgVBrQgJgFgJgMIAAATIgaAAIAAjcIAaAAIAABgQAJgMAJgGQALgFANAAQAaAAASATQASATABAlQgBAlgSATQgSATgaAAQgNAAgLgFgAgbgBQgMANAAAZQAAAYAMAOQAKAOAQAAQASAAALgOQAJgOAAgYQAAgZgJgNQgLgOgSAAQgQAAgKAOg");
	this.shape_30.setTransform(898.4,452.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("Ag0BBQgOgKAAgUQAAgTAMgMQANgLAcgEQARgCANgEQAOgEAAgGQAAgIgGgIQgGgIgTAAQgPAAgHAGQgHAGgCAKIgdAAQADgUAQgNQAQgMAZAAQAcAAAPANQAOANAAAXIAABHQAAAHADAHQACAGAFAHIgfAAQgCgDgCgEIgBgLQgJAKgNAFQgMAFgOAAQgVAAgOgKgAAQADIgXAFQgTADgGAGQgGAHAAAJQAAAHAGAGQAGAGALAAQAMAAANgGQANgHAIgOIAAgZIgPADg");
	this.shape_31.setTransform(907.4,376.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("ABEBuIgXg8IhbAAIgVA8IgfAAIBUjbIAdAAIBUDbgAgEhBIghBaIBJAAIghhaQgCgFgBgLIAAAAIgEAQg");
	this.shape_32.setTransform(1005.5,379.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("Ag2BUQgcgeAAgxQAAg1AgghQAgggAxAAQAfAAAVAJIAAAeQgYgOgcAAQglAAgXAZQgXAZAAApQAAAnAWAYQAWAXAhAAQAiAAAYgPIAAAcQgYAMglAAQgvAAgdgeg");
	this.shape_33.setTransform(928.4,326.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AguA3QgVgUAAgjQAAgiAVgUQAUgUAcAAQAcAAARAPQARAPAAAVIgcAAQgCgQgJgGQgKgGgNAAQgPAAgNANQgNAMAAAaQAAAbANANQANAMAPAAQARAAAKgJQALgJAAgUIAcAAQAAAcgTARQgTAQgcAAQgcAAgUgUg");
	this.shape_34.setTransform(852,318.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4F8330").s().p("AgUBrQgLgGgHgLIAAATIgaAAIAAjcIAaAAIAABgQAHgMALgGQAKgFANAAQAaAAASATQATATgBAlQABAlgTATQgSATgaAAQgNAAgKgFgAgbgBQgLANAAAZQAAAYALAOQALAOAPAAQATAAAJgOQAKgOAAgYQAAgZgKgNQgJgOgTAAQgPAAgLAOg");
	this.shape_35.setTransform(900.1,453.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2E75B6").s().p("Ag0BBQgOgKAAgUQAAgTAMgMQANgLAcgEQARgCANgEQAOgEAAgGQAAgIgGgIQgGgIgTAAQgPAAgHAGQgHAGgCAKIgdAAQADgUAQgNQAQgMAZAAQAcAAAPANQAOANAAAXIAABHQAAAHADAHQACAGAFAHIgfAAQgCgDgCgEIgBgLQgJAKgNAFQgMAFgOAAQgVAAgOgKgAAQADIgXAFQgTADgGAGQgGAHAAAJQAAAHAGAGQAGAGALAAQAMAAANgGQANgHAIgOIAAgZIgPADg");
	this.shape_36.setTransform(907.2,376.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgxgzIBjAxIhjA2g");
	this.shape_37.setTransform(881.1,306.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#548235").s().p("AgxgzIBjAyIhjA1g");
	this.shape_38.setTransform(984.1,475.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#548235").s().p("AreAKQgEAAgDgDQgDgDAAgEIAAAAQAAgDADgDQADgDAEAAIAKAAIWzAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_39.setTransform(913.6,475.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AjYAKIAAgTIGlAAIAIANIABABIADAFg");
	this.shape_40.setTransform(862.9,306.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2E75B6").s().p("ALVTCQgEgBgDgDIgeg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgEACIgFACIgCgBgAKXRaQgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAJZPyQgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAIbOKQgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAHdMjQgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAGfK7QgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAFhJTQgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAEjHrQgEgBgCgDIgfg0QgCgEABgEQABgEAEgCQADgCAEABQAEABACAEIAfA0QACADgBAEQgBAEgDACQgDACgCAAIgDgBgADlGEQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgACnEdQgEgBgCgDIgfg0QgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgABpC3QgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAArBRQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAgSgUQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAhQh6QgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAiOjgQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAjMlGQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAkKmsQgEgBgCgEIgMgTIgDgFIAAAAIgBgBIgIgOIgHgMQgCgDABgEQABgEAEgCQADgDAEABQAEACACADIANAWIADAFIAAAAIAKAPIAFAJQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAlIoTQgEgBgCgEIgfg0QgCgDABgEQABgEAEgCQADgDAEABQAEACACADIAfA0QACAEgBAEQgBAEgDACQgDABgCAAIgDAAgAmGp7QgEgBgCgEIgfg0QgCgDABgEQABgEAEgCQADgDAEABQAEACACADIAfA0QACAEgBAEQgBAEgDACQgDABgCAAIgDAAgAnErjQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgAoCtJQgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQgBAEgDADQgDABgCAAIgDAAgApAuwQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAp+wWQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAq8x8QgEgBgCgDIgMgVIgSgdIABABIAsAjIACADQACAEgBAEQgBAEgDACQgDACgCAAIgDgBgArSzAIgDgCIAEACg");
	this.shape_41.setTransform(913.1,352.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#919386").s().p("AhOTLQADgDAAgEQAAgFgDgCQgDgDgDAAIZngEQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAI5nAEQADgBADgCgA4czBIAAgBIAAAAIAAgCIAAgBIAAgBIACgDIABgBIACgBIADgBIACAAIACAAIABAAIADACIABAAIAuAlQADACABAEQAAAEgDAEQgCADgEABQgEAAgDgDIgEgCIgrgjIgCgBIASAdIAAK9IAAAUIAAaIIgKAAQgEAAgDADQgDACAAAEgAXkSoIgwgkQgDgCgBgEQAAgFACgDQADgDAEgBQAEgBADADIAwAkQAEACAAAFQABAEgDADQgCADgEABIgCAAQgDAAgDgCgAWERfIgvglQgDgDgBgEQAAgEADgDQACgDAEgBQAEAAADACIAvAlQAEADAAAEQABAEgDADQgCAEgEAAIgCAAQgDAAgDgCgAUlQVIgwgkQgDgDgBgEQAAgEACgDQADgEAEAAQAEgBADADIAwAkQAEACAAAFQABAEgDADQgCADgEABIgCAAQgDAAgDgCgATFPMIgwglQgDgDgBgEQAAgEACgDQADgEAEAAQAEgBADADIAwAlQAEACAAAEQABAEgDAEQgCADgEABIgCAAQgDAAgDgCgARlOCIgwglQgDgDgBgEQAAgEACgDQADgEAEAAQAEgBADADIAwAlQAEACAAAEQABAEgDAEQgCADgEABIgCAAQgDAAgDgCgAQFM4IgwglQgDgDgBgEQAAgEACgDQADgEAEAAQAEgBADADIAwAlQAEACAAAEQABAEgDAEQgCADgFABIgBAAQgDAAgDgCgAOlLtIgvglQgDgCgBgEQAAgEACgEQADgDAEAAQAEgBAEADIAuAlQAEACAAAEQABAEgDAEQgCADgFABIgBAAQgDAAgDgDgANGKkIgwglQgDgDgBgEQAAgEACgDQADgEAEAAQAEgBADADIAwAlQAEACAAAEQABAEgDAEQgCADgFABIgBAAQgDAAgDgCgALmJZIgvglQgDgCgBgEQAAgEACgEQADgDAEAAQAEgBAEADIAvAlQADACAAAEQABAEgDAEQgCADgFABIgBAAQgDAAgDgDgAKHIPIguglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgDgDgAIqHFIgwglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAHLF7IguglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAFuExIgwglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAEPDnIguglQgEgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgACyCdIgvglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgABTBTIgvglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAgJAJIgvgkQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAuAlQADACABADQAAAEgDAEQgCADgDABIgBAAQgEAAgCgDgAhohAIgvglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAjFiKIgvglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgCgDgAkjjUIgwglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAmCkeIguglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAnfloIgwglQgDgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAo+myIgngeQgCACgEAAInTAAIgKgPIAAAAIgDgFIHcAAIABgDQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAxanUIABABIAAAAIgBgBgAqbn8IgvglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAr6pGIgvglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAtXqQIgvglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAu2raIgvglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgDgDgAwUskIguglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgAxxtuIgwglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgAzQu4IguglQgEgCAAgEQgBgEADgEQACgDAEAAQAFgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDgA0twCIgwglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgDAEQgCADgEABIgBAAQgEAAgCgDgA2MxMIgvglQgDgCAAgEQgBgEADgEQACgDAFAAQAEgBADADIAvAlQADACABAEQAAAEgCAEQgDADgEABIgBAAQgEAAgDgDg");
	this.shape_42.setTransform(995.7,353.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#548235").s().p("AhFBuIAAjbIBBAAQAcAAASANQARAOAAAXQAAASgKAOQgLAOgSAGIAAABQAXACANAOQAOAOAAAXQAAAcgVASQgUARgfAAgAgoBVIAiAAQAVAAANgKQAMgKAAgTQAAgmgzAAIgdAAgAgogPIAaAAQATAAAMgKQAMgLAAgRQAAgggpAAIgcAAg");
	this.shape_43.setTransform(1050,453.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006FC0").s().p("ABEBuIgXg8IhbAAIgVA8IgfAAIBUjbIAdAAIBUDbgAgEhCIghBbIBJAAIghhbIgDgPIAAAAIgEAPg");
	this.shape_44.setTransform(1004.9,379.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("Ag2BUQgcgeAAgyQAAg0AgggQAgghAxAAQAfAAAVAJIAAAeQgYgNgcAAQglAAgXAZQgXAYAAApQAAAnAWAYQAWAXAhAAQAiAAAYgPIAAAcQgZAMgkAAQgvAAgdgeg");
	this.shape_45.setTransform(928.8,325.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AguA3QgVgUAAgjQAAgiAVgUQAVgUAbAAQAdAAAQAPQASAOgBAWIgcAAQgCgQgJgGQgKgGgNAAQgOAAgOANQgMAMAAAaQAAAbAMANQAOAMAOAAQARAAAKgKQAKgJAAgTIAdAAQAAAbgSASQgUAQgcAAQgbAAgVgUg");
	this.shape_46.setTransform(851.5,319);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgygzIBlAxIhlA2g");
	this.shape_47.setTransform(932.5,307.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#548235").s().p("AgygzIBlAyIhlA1g");
	this.shape_48.setTransform(1146.3,477);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgVBrQgKgFgIgMIAAAUIgaAAIAAjdIAaAAIAABgQAIgMAKgGQALgFANgBQAaABATATQARATAAAlQAAAmgRASQgTATgaAAQgNAAgLgFgAgbgBQgMAOAAAYQAAAZAMANQAKAOAQAAQASAAAKgOQAKgNAAgZQAAgYgKgOQgKgOgSAAQgQAAgKAOg");
	this.shape_49.setTransform(898,452.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("Ag0BBQgOgLAAgTQAAgUAMgLQANgLAcgEIAegGQAOgEAAgHQAAgHgGgIQgGgIgTAAQgPAAgHAGQgHAGgDAKIgcAAQADgVAQgMQAQgMAZAAQAcAAAPANQAOAMAAAYIAABHQAAAHACAGQADAHAFAHIgfAAQgCgDgCgEQgBgFAAgGQgJAJgNAGQgMAFgOAAQgVAAgOgKgAAQADIgXAEQgTAEgGAGQgGAHAAAIQAAAIAGAGQAGAGALAAQAMAAANgGQANgHAIgPIAAgZIgPAEg");
	this.shape_50.setTransform(907.2,376.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#548235").s().p("A3sAKQgEAAgDgDQgCgDAAgEIAAAAQAAgDACgDQADgDAEAAIAKAAMAvOAAAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAg");
	this.shape_51.setTransform(991.8,475.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgHAKIgJgOIAAAAIgDgFIHZAAIgBAEQABAEADABIAKAIQgDACgEAAgAnSAKIAAgTIGoAAIAJAOIAAAAIADAFg");
	this.shape_52.setTransform(887.8,306.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#919386").s().p("AgJzDIACAEIAAAAIARAeIAAK+IAAAUIAAaJIgKAAQgDABgDACQgDADAAAEg");
	this.shape_53.setTransform(840.2,353.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("ALWTCQgEgBgCgEIgfg0QgCgDAAgEQACgEADgCQAEgCAEABQAEABACADIAfA0QACAEgBAEQgBAEgEACQgCACgDAAIgCgBgAKYRaQgEgBgDgEIgegzQgCgEABgEQABgEAEgCQADgCAEABQAEABACADIAfA0QACAEgBAEQgBAEgEACIgFACIgCgBgAJaPyQgEgBgCgEIgfg0QgCgDABgEQABgEAEgCQADgCAEABQAEABACADIAfA1QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAIcOLQgEgBgCgEIgfgzQgCgEABgEQABgEAEgCQADgCAEABQAEABACADIAfA0QACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAHeMjQgEgBgCgEIgfg0QgCgDABgEQABgEAEgCQADgCAEABQAEABACADIAfA1QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAGgK7QgEgBgCgEIgfg0QgCgDABgEQABgEAEgCQADgCAEABQAEABACADIAfA0QACAEgBAEQgBAEgDACQgDACgCAAIgDgBgAFiJTQgEgBgCgDIgfg1QgCgDABgEQABgEAEgCQADgCAEABQAEABACADIAfA1QACADgBAEQgBAEgDACQgDACgCAAIgDgBgAEkHrQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgADmGFQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgACoEeQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgABqC4QgEgBgCgDIgfg0QgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgAAsBSQgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQAAAEgEACQgCACgDAAIgDAAgAgRgTQgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQAAAEgEADQgCABgDAAIgDAAgAhPh5QgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQAAAEgEACQgCACgDAAIgDAAgAiNjfQgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQAAAEgEACQgCACgDAAIgDAAgAjLlFQgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQAAAEgEADQgCABgDAAIgDAAgAkJmrQgEgBgCgEIgLgSIgDgFIAAAAIgJgPIgIgOQgCgEABgEQABgDAEgCQADgDAEABQAEABACAEIAOAYIADAFIAAAAIAJAPIAFAIQACADgBAEQAAAEgEACQgCACgDAAIgDAAgAlHoTQgEgBgCgEIgfg0QgCgEABgEQABgDAEgDQADgCAEABQAEABACAEIAfA0QACAEgBADQgBAEgDACQgDACgCAAIgDAAgAmFp7QgEgBgCgEIgfgzQgCgDABgEQABgEADgCQAEgDAEABQAEABACAEIAfAzQACADgBAEQAAAEgEACQgCACgDAAIgDAAgAnDriQgEgBgCgEIgfgzQgCgDABgEQABgEADgDQAEgCAEABQAEABACAEIAfAzQACADgBAEQAAAEgEACQgCACgDAAIgDAAgAoBtJQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgAo/uvQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgAp9wVQgEgBgCgDIgfgzQgCgEABgEQABgEADgCQAEgCAEABQAEABACADIAfAzQACAEgBAEQAAAEgEACQgCACgDAAIgDgBgAq7x7QgEgBgCgDIgMgVIgSgeIgBAAIgBgEIAAgCIAAgBIAAgBIACgEIAAAAIACgCIAEgBIACAAIACAAIABAAIAAAAIAEACIABACIAdAvIACAEQACAEgBAEQAAAEgEACQgCACgDAAIgDgBg");
	this.shape_54.setTransform(913,352.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#006FC0").s().p("AXxS5IgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAWSRvIgwglQgDgDgBgEQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgAUyQlIgwglQgDgCgBgFQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgATSPbIgwglQgDgDgBgEQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgARyORIgwglQgDgDgBgEQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgAQSNHIgwglQgDgDgBgEQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgAOyL9IgwglQgDgCgBgFQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgANSKzIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgALzJpIgwglQgDgDgBgEQgBgEADgDQADgDAEgBQAEAAADACIAwAlQADADABAEQABAEgDADQgDADgEABIgBAAQgDAAgDgCgAKTIfIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAI1HVIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAHXGLIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAF5FBIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAEbD3IgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAC9CtIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgABfBjIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAABAZIgugkQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAuAkQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAhcgwIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAi6h6IgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAkYjEIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAl2kOIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAnUlYIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAoymiIgmgeIgJgHQgEgDAAgEIAAgDIACgEQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAqQnsIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAruo2IgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAtMqAIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAuqrKIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAwIsUIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAxmteIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgAzEuoIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgA0ivyIgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgA2Aw8IgvglQgEgDAAgEQAAgEACgDQADgDAEgBQAEAAADACIAvAlQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCgA3eyGIgEgDIgdgvIgBgCIAuAkQADADABAEQAAAEgCADQgDAEgEAAIgBAAQgDAAgDgCg");
	this.shape_55.setTransform(994.6,351.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:1050.9}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_23,p:{x:1050.6}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).wait(1));

	// 图层 6
	this.instance = new lib.dxxcl_yl01m_00000();
	this.instance.parent = this;
	this.instance.setTransform(81,128,0.94,0.94);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(81,128,1070.6,529.2);


(lib.danmanMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dxxcl_yl01m_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.dxxcl_yl01m_00001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.dxxcl_yl01m_00002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.dxxcl_yl01m_00003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.dxxcl_yl01m_00004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.dxxcl_yl01m_00005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.dxxcl_yl01m_00006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.dxxcl_yl01m_00007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.dxxcl_yl01m_00008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.dxxcl_yl01m_00009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.dxxcl_yl01m_00010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.dxxcl_yl01m_00011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.dxxcl_yl01m_00012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.dxxcl_yl01m_00013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.dxxcl_yl01m_00014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.dxxcl_yl01m_00015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.dxxcl_yl01m_00016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.dxxcl_yl01m_00017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.dxxcl_yl01m_00018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.dxxcl_yl01m_00019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.dxxcl_yl01m_00020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.dxxcl_yl01m_00021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.dxxcl_yl01m_00022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.dxxcl_yl01m_00023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.dxxcl_yl01m_00024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.dxxcl_yl01m_00025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.dxxcl_yl01m_00026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.dxxcl_yl01m_00027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.dxxcl_yl01m_00028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.dxxcl_yl01m_00029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.dxxcl_yl01m_00030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.dxxcl_yl01m_00031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.dxxcl_yl01m_00032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.dxxcl_yl01m_00033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.dxxcl_yl01m_00034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.dxxcl_yl01m_00035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.dxxcl_yl01m_00036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.dxxcl_yl01m_00037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.dxxcl_yl01m_00038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.dxxcl_yl01m_00039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.dxxcl_yl01m_00040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.dxxcl_yl01m_00041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.dxxcl_yl01m_00042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.dxxcl_yl01m_00043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.dxxcl_yl01m_00044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.dxxcl_yl01m_00045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.dxxcl_yl01m_00046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.dxxcl_yl01m_00047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.dxxcl_yl01m_00048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.dxxcl_yl01m_00049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.dxxcl_yl01m_00050();
	this.instance_50.parent = this;

	this.instance_51 = new lib.dxxcl_yl01m_00051();
	this.instance_51.parent = this;

	this.instance_52 = new lib.dxxcl_yl01m_00052();
	this.instance_52.parent = this;

	this.instance_53 = new lib.dxxcl_yl01m_00053();
	this.instance_53.parent = this;

	this.instance_54 = new lib.dxxcl_yl01m_00054();
	this.instance_54.parent = this;

	this.instance_55 = new lib.dxxcl_yl01m_00055();
	this.instance_55.parent = this;

	this.instance_56 = new lib.dxxcl_yl01m_00056();
	this.instance_56.parent = this;

	this.instance_57 = new lib.dxxcl_yl01m_00057();
	this.instance_57.parent = this;

	this.instance_58 = new lib.dxxcl_yl01m_00058();
	this.instance_58.parent = this;

	this.instance_59 = new lib.dxxcl_yl01m_00059();
	this.instance_59.parent = this;

	this.instance_60 = new lib.dxxcl_yl01m_00060();
	this.instance_60.parent = this;

	this.instance_61 = new lib.dxxcl_yl01m_00061();
	this.instance_61.parent = this;

	this.instance_62 = new lib.dxxcl_yl01m_00062();
	this.instance_62.parent = this;

	this.instance_63 = new lib.dxxcl_yl01m_00063();
	this.instance_63.parent = this;

	this.instance_64 = new lib.dxxcl_yl01m_00064();
	this.instance_64.parent = this;

	this.instance_65 = new lib.dxxcl_yl01m_00065();
	this.instance_65.parent = this;

	this.instance_66 = new lib.dxxcl_yl01m_00066();
	this.instance_66.parent = this;

	this.instance_67 = new lib.dxxcl_yl01m_00067();
	this.instance_67.parent = this;

	this.instance_68 = new lib.dxxcl_yl01m_00068();
	this.instance_68.parent = this;

	this.instance_69 = new lib.dxxcl_yl01m_00069();
	this.instance_69.parent = this;

	this.instance_70 = new lib.dxxcl_yl01m_00070();
	this.instance_70.parent = this;

	this.instance_71 = new lib.dxxcl_yl01m_00071();
	this.instance_71.parent = this;

	this.instance_72 = new lib.dxxcl_yl01m_00072();
	this.instance_72.parent = this;

	this.instance_73 = new lib.dxxcl_yl01m_00073();
	this.instance_73.parent = this;

	this.instance_74 = new lib.dxxcl_yl01m_00074();
	this.instance_74.parent = this;

	this.instance_75 = new lib.dxxcl_yl01m_00075();
	this.instance_75.parent = this;

	this.instance_76 = new lib.dxxcl_yl01m_00076();
	this.instance_76.parent = this;

	this.instance_77 = new lib.dxxcl_yl01m_00077();
	this.instance_77.parent = this;

	this.instance_78 = new lib.dxxcl_yl01m_00078();
	this.instance_78.parent = this;

	this.instance_79 = new lib.dxxcl_yl01m_00079();
	this.instance_79.parent = this;

	this.instance_80 = new lib.dxxcl_yl01m_00080();
	this.instance_80.parent = this;

	this.instance_81 = new lib.dxxcl_yl01m_00081();
	this.instance_81.parent = this;

	this.instance_82 = new lib.dxxcl_yl01m_00082();
	this.instance_82.parent = this;

	this.instance_83 = new lib.dxxcl_yl01m_00083();
	this.instance_83.parent = this;

	this.instance_84 = new lib.dxxcl_yl01m_00084();
	this.instance_84.parent = this;

	this.instance_85 = new lib.dxxcl_yl01m_00085();
	this.instance_85.parent = this;

	this.instance_86 = new lib.dxxcl_yl01m_00086();
	this.instance_86.parent = this;

	this.instance_87 = new lib.dxxcl_yl01m_00087();
	this.instance_87.parent = this;

	this.instance_88 = new lib.dxxcl_yl01m_00088();
	this.instance_88.parent = this;

	this.instance_89 = new lib.dxxcl_yl01m_00089();
	this.instance_89.parent = this;

	this.instance_90 = new lib.dxxcl_yl01m_00090();
	this.instance_90.parent = this;

	this.instance_91 = new lib.dxxcl_yl01m_00091();
	this.instance_91.parent = this;

	this.instance_92 = new lib.dxxcl_yl01m_00092();
	this.instance_92.parent = this;

	this.instance_93 = new lib.dxxcl_yl01m_00093();
	this.instance_93.parent = this;

	this.instance_94 = new lib.dxxcl_yl01m_00094();
	this.instance_94.parent = this;

	this.instance_95 = new lib.dxxcl_yl01m_00095();
	this.instance_95.parent = this;

	this.instance_96 = new lib.dxxcl_yl01m_00096();
	this.instance_96.parent = this;

	this.instance_97 = new lib.dxxcl_yl01m_00097();
	this.instance_97.parent = this;

	this.instance_98 = new lib.dxxcl_yl01m_00098();
	this.instance_98.parent = this;

	this.instance_99 = new lib.dxxcl_yl01m_00099();
	this.instance_99.parent = this;

	this.instance_100 = new lib.dxxcl_yl01m_00100();
	this.instance_100.parent = this;

	this.instance_101 = new lib.dxxcl_yl01m_00101();
	this.instance_101.parent = this;

	this.instance_102 = new lib.dxxcl_yl01m_00102();
	this.instance_102.parent = this;

	this.instance_103 = new lib.dxxcl_yl01m_00103();
	this.instance_103.parent = this;

	this.instance_104 = new lib.dxxcl_yl01m_00104();
	this.instance_104.parent = this;

	this.instance_105 = new lib.dxxcl_yl01m_00105();
	this.instance_105.parent = this;

	this.instance_106 = new lib.dxxcl_yl01m_00106();
	this.instance_106.parent = this;

	this.instance_107 = new lib.dxxcl_yl01m_00107();
	this.instance_107.parent = this;

	this.instance_108 = new lib.dxxcl_yl01m_00108();
	this.instance_108.parent = this;

	this.instance_109 = new lib.dxxcl_yl01m_00109();
	this.instance_109.parent = this;

	this.instance_110 = new lib.dxxcl_yl01m_00110();
	this.instance_110.parent = this;

	this.instance_111 = new lib.dxxcl_yl01m_00111();
	this.instance_111.parent = this;

	this.instance_112 = new lib.dxxcl_yl01m_00112();
	this.instance_112.parent = this;

	this.instance_113 = new lib.dxxcl_yl01m_00113();
	this.instance_113.parent = this;

	this.instance_114 = new lib.dxxcl_yl01m_00114();
	this.instance_114.parent = this;

	this.instance_115 = new lib.dxxcl_yl01m_00115();
	this.instance_115.parent = this;

	this.instance_116 = new lib.dxxcl_yl01m_00116();
	this.instance_116.parent = this;

	this.instance_117 = new lib.dxxcl_yl01m_00117();
	this.instance_117.parent = this;

	this.instance_118 = new lib.dxxcl_yl01m_00118();
	this.instance_118.parent = this;

	this.instance_119 = new lib.dxxcl_yl01m_00119();
	this.instance_119.parent = this;

	this.instance_120 = new lib.dxxcl_yl01m_00120();
	this.instance_120.parent = this;

	this.instance_121 = new lib.dxxcl_yl01m_00121();
	this.instance_121.parent = this;

	this.instance_122 = new lib.dxxcl_yl01m_00122();
	this.instance_122.parent = this;

	this.instance_123 = new lib.dxxcl_yl01m_00123();
	this.instance_123.parent = this;

	this.instance_124 = new lib.dxxcl_yl01m_00124();
	this.instance_124.parent = this;

	this.instance_125 = new lib.dxxcl_yl01m_00125();
	this.instance_125.parent = this;

	this.instance_126 = new lib.dxxcl_yl01m_00126();
	this.instance_126.parent = this;

	this.instance_127 = new lib.dxxcl_yl01m_00127();
	this.instance_127.parent = this;

	this.instance_128 = new lib.dxxcl_yl01m_00128();
	this.instance_128.parent = this;

	this.instance_129 = new lib.dxxcl_yl01m_00129();
	this.instance_129.parent = this;

	this.instance_130 = new lib.dxxcl_yl01m_00130();
	this.instance_130.parent = this;

	this.instance_131 = new lib.dxxcl_yl01m_00131();
	this.instance_131.parent = this;

	this.instance_132 = new lib.dxxcl_yl01m_00132();
	this.instance_132.parent = this;

	this.instance_133 = new lib.dxxcl_yl01m_00133();
	this.instance_133.parent = this;

	this.instance_134 = new lib.dxxcl_yl01m_00134();
	this.instance_134.parent = this;

	this.instance_135 = new lib.dxxcl_yl01m_00135();
	this.instance_135.parent = this;

	this.instance_136 = new lib.dxxcl_yl01m_00136();
	this.instance_136.parent = this;

	this.instance_137 = new lib.dxxcl_yl01m_00137();
	this.instance_137.parent = this;

	this.instance_138 = new lib.dxxcl_yl01m_00138();
	this.instance_138.parent = this;

	this.instance_139 = new lib.dxxcl_yl01m_00139();
	this.instance_139.parent = this;

	this.instance_140 = new lib.dxxcl_yl01m_00140();
	this.instance_140.parent = this;

	this.instance_141 = new lib.dxxcl_yl01m_00141();
	this.instance_141.parent = this;

	this.instance_142 = new lib.dxxcl_yl01m_00142();
	this.instance_142.parent = this;

	this.instance_143 = new lib.dxxcl_yl01m_00143();
	this.instance_143.parent = this;

	this.instance_144 = new lib.dxxcl_yl01m_00144();
	this.instance_144.parent = this;

	this.instance_145 = new lib.dxxcl_yl01m_00145();
	this.instance_145.parent = this;

	this.instance_146 = new lib.dxxcl_yl01m_00146();
	this.instance_146.parent = this;

	this.instance_147 = new lib.dxxcl_yl01m_00147();
	this.instance_147.parent = this;

	this.instance_148 = new lib.dxxcl_yl01m_00148();
	this.instance_148.parent = this;

	this.instance_149 = new lib.dxxcl_yl01m_00149();
	this.instance_149.parent = this;

	this.instance_150 = new lib.dxxcl_yl01m_00150();
	this.instance_150.parent = this;

	this.instance_151 = new lib.dxxcl_yl01m_00151();
	this.instance_151.parent = this;

	this.instance_152 = new lib.dxxcl_yl01m_00152();
	this.instance_152.parent = this;

	this.instance_153 = new lib.dxxcl_yl01m_00153();
	this.instance_153.parent = this;

	this.instance_154 = new lib.dxxcl_yl01m_00154();
	this.instance_154.parent = this;

	this.instance_155 = new lib.dxxcl_yl01m_00155();
	this.instance_155.parent = this;

	this.instance_156 = new lib.dxxcl_yl01m_00156();
	this.instance_156.parent = this;

	this.instance_157 = new lib.dxxcl_yl01m_00157();
	this.instance_157.parent = this;

	this.instance_158 = new lib.dxxcl_yl01m_00158();
	this.instance_158.parent = this;

	this.instance_159 = new lib.dxxcl_yl01m_00159();
	this.instance_159.parent = this;

	this.instance_160 = new lib.dxxcl_yl01m_00160();
	this.instance_160.parent = this;

	this.instance_161 = new lib.dxxcl_yl01m_00161();
	this.instance_161.parent = this;

	this.instance_162 = new lib.dxxcl_yl01m_00162();
	this.instance_162.parent = this;

	this.instance_163 = new lib.dxxcl_yl01m_00163();
	this.instance_163.parent = this;

	this.instance_164 = new lib.dxxcl_yl01m_00164();
	this.instance_164.parent = this;

	this.instance_165 = new lib.dxxcl_yl01m_00165();
	this.instance_165.parent = this;

	this.instance_166 = new lib.dxxcl_yl01m_00166();
	this.instance_166.parent = this;

	this.instance_167 = new lib.dxxcl_yl01m_00167();
	this.instance_167.parent = this;

	this.instance_168 = new lib.dxxcl_yl01m_00168();
	this.instance_168.parent = this;

	this.instance_169 = new lib.dxxcl_yl01m_00169();
	this.instance_169.parent = this;

	this.instance_170 = new lib.dxxcl_yl01m_00170();
	this.instance_170.parent = this;

	this.instance_171 = new lib.dxxcl_yl01m_00171();
	this.instance_171.parent = this;

	this.instance_172 = new lib.dxxcl_yl01m_00172();
	this.instance_172.parent = this;

	this.instance_173 = new lib.dxxcl_yl01m_00173();
	this.instance_173.parent = this;

	this.instance_174 = new lib.dxxcl_yl01m_00174();
	this.instance_174.parent = this;

	this.instance_175 = new lib.dxxcl_yl01m_00175();
	this.instance_175.parent = this;

	this.instance_176 = new lib.dxxcl_yl01m_00176();
	this.instance_176.parent = this;

	this.instance_177 = new lib.dxxcl_yl01m_00177();
	this.instance_177.parent = this;

	this.instance_178 = new lib.dxxcl_yl01m_00178();
	this.instance_178.parent = this;

	this.instance_179 = new lib.dxxcl_yl01m_00179();
	this.instance_179.parent = this;

	this.instance_180 = new lib.dxxcl_yl01m_00180();
	this.instance_180.parent = this;

	this.instance_181 = new lib.dxxcl_yl01m_00181();
	this.instance_181.parent = this;

	this.instance_182 = new lib.dxxcl_yl01m_00182();
	this.instance_182.parent = this;

	this.instance_183 = new lib.dxxcl_yl01m_00183();
	this.instance_183.parent = this;

	this.instance_184 = new lib.dxxcl_yl01m_00184();
	this.instance_184.parent = this;

	this.instance_185 = new lib.dxxcl_yl01m_00185();
	this.instance_185.parent = this;

	this.instance_186 = new lib.dxxcl_yl01m_00186();
	this.instance_186.parent = this;

	this.instance_187 = new lib.dxxcl_yl01m_00187();
	this.instance_187.parent = this;

	this.instance_188 = new lib.dxxcl_yl01m_00188();
	this.instance_188.parent = this;

	this.instance_189 = new lib.dxxcl_yl01m_00189();
	this.instance_189.parent = this;

	this.instance_190 = new lib.dxxcl_yl01m_00190();
	this.instance_190.parent = this;

	this.instance_191 = new lib.dxxcl_yl01m_00191();
	this.instance_191.parent = this;

	this.instance_192 = new lib.dxxcl_yl01m_00192();
	this.instance_192.parent = this;

	this.instance_193 = new lib.dxxcl_yl01m_00193();
	this.instance_193.parent = this;

	this.instance_194 = new lib.dxxcl_yl01m_00194();
	this.instance_194.parent = this;

	this.instance_195 = new lib.dxxcl_yl01m_00195();
	this.instance_195.parent = this;

	this.instance_196 = new lib.dxxcl_yl01m_00196();
	this.instance_196.parent = this;

	this.instance_197 = new lib.dxxcl_yl01m_00197();
	this.instance_197.parent = this;

	this.instance_198 = new lib.dxxcl_yl01m_00198();
	this.instance_198.parent = this;

	this.instance_199 = new lib.dxxcl_yl01m_00199();
	this.instance_199.parent = this;

	this.instance_200 = new lib.dxxcl_yl01m_00200();
	this.instance_200.parent = this;

	this.instance_201 = new lib.dxxcl_yl01m_00201();
	this.instance_201.parent = this;

	this.instance_202 = new lib.dxxcl_yl01m_00202();
	this.instance_202.parent = this;

	this.instance_203 = new lib.dxxcl_yl01m_00203();
	this.instance_203.parent = this;

	this.instance_204 = new lib.dxxcl_yl01m_00204();
	this.instance_204.parent = this;

	this.instance_205 = new lib.dxxcl_yl01m_00205();
	this.instance_205.parent = this;

	this.instance_206 = new lib.dxxcl_yl01m_00206();
	this.instance_206.parent = this;

	this.instance_207 = new lib.dxxcl_yl01m_00207();
	this.instance_207.parent = this;

	this.instance_208 = new lib.dxxcl_yl01m_00208();
	this.instance_208.parent = this;

	this.instance_209 = new lib.dxxcl_yl01m_00209();
	this.instance_209.parent = this;

	this.instance_210 = new lib.dxxcl_yl01m_00210();
	this.instance_210.parent = this;

	this.instance_211 = new lib.dxxcl_yl01m_00211();
	this.instance_211.parent = this;

	this.instance_212 = new lib.dxxcl_yl01m_00212();
	this.instance_212.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).to({state:[{t:this.instance_210}]},1).to({state:[{t:this.instance_211}]},1).to({state:[{t:this.instance_212}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.dankuai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dxxcl_yl01K_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.dxxcl_yl01K_00001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.dxxcl_yl01K_00002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.dxxcl_yl01K_00003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.dxxcl_yl01K_00004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.dxxcl_yl01K_00005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.dxxcl_yl01K_00006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.dxxcl_yl01K_00007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.dxxcl_yl01K_00008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.dxxcl_yl01K_00009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.dxxcl_yl01K_00010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.dxxcl_yl01K_00011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.dxxcl_yl01K_00012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.dxxcl_yl01K_00013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.dxxcl_yl01K_00014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.dxxcl_yl01K_00015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.dxxcl_yl01K_00016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.dxxcl_yl01K_00017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.dxxcl_yl01K_00018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.dxxcl_yl01K_00019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.dxxcl_yl01K_00020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.dxxcl_yl01K_00021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.dxxcl_yl01K_00022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.dxxcl_yl01K_00023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.dxxcl_yl01K_00024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.dxxcl_yl01K_00025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.dxxcl_yl01K_00026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.dxxcl_yl01K_00027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.dxxcl_yl01K_00028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.dxxcl_yl01K_00029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.dxxcl_yl01K_00030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.dxxcl_yl01K_00031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.dxxcl_yl01K_00032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.dxxcl_yl01K_00033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.dxxcl_yl01K_00034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.dxxcl_yl01K_00035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.dxxcl_yl01K_00036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.dxxcl_yl01K_00037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.dxxcl_yl01K_00038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.dxxcl_yl01K_00039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.dxxcl_yl01K_00040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.dxxcl_yl01K_00041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.dxxcl_yl01K_00042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.dxxcl_yl01K_00043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.dxxcl_yl01K_00044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.dxxcl_yl01K_00045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.dxxcl_yl01K_00046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.dxxcl_yl01K_00047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.dxxcl_yl01K_00048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.dxxcl_yl01K_00049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.dxxcl_yl01K_00050();
	this.instance_50.parent = this;

	this.instance_51 = new lib.dxxcl_yl01K_00051();
	this.instance_51.parent = this;

	this.instance_52 = new lib.dxxcl_yl01K_00052();
	this.instance_52.parent = this;

	this.instance_53 = new lib.dxxcl_yl01K_00053();
	this.instance_53.parent = this;

	this.instance_54 = new lib.dxxcl_yl01K_00054();
	this.instance_54.parent = this;

	this.instance_55 = new lib.dxxcl_yl01K_00055();
	this.instance_55.parent = this;

	this.instance_56 = new lib.dxxcl_yl01K_00056();
	this.instance_56.parent = this;

	this.instance_57 = new lib.dxxcl_yl01K_00057();
	this.instance_57.parent = this;

	this.instance_58 = new lib.dxxcl_yl01K_00058();
	this.instance_58.parent = this;

	this.instance_59 = new lib.dxxcl_yl01K_00059();
	this.instance_59.parent = this;

	this.instance_60 = new lib.dxxcl_yl01K_00060();
	this.instance_60.parent = this;

	this.instance_61 = new lib.dxxcl_yl01K_00061();
	this.instance_61.parent = this;

	this.instance_62 = new lib.dxxcl_yl01K_00062();
	this.instance_62.parent = this;

	this.instance_63 = new lib.dxxcl_yl01K_00063();
	this.instance_63.parent = this;

	this.instance_64 = new lib.dxxcl_yl01K_00064();
	this.instance_64.parent = this;

	this.instance_65 = new lib.dxxcl_yl01K_00065();
	this.instance_65.parent = this;

	this.instance_66 = new lib.dxxcl_yl01K_00066();
	this.instance_66.parent = this;

	this.instance_67 = new lib.dxxcl_yl01K_00067();
	this.instance_67.parent = this;

	this.instance_68 = new lib.dxxcl_yl01K_00068();
	this.instance_68.parent = this;

	this.instance_69 = new lib.dxxcl_yl01K_00069();
	this.instance_69.parent = this;

	this.instance_70 = new lib.dxxcl_yl01K_00070();
	this.instance_70.parent = this;

	this.instance_71 = new lib.dxxcl_yl01K_00071();
	this.instance_71.parent = this;

	this.instance_72 = new lib.dxxcl_yl01K_00072();
	this.instance_72.parent = this;

	this.instance_73 = new lib.dxxcl_yl01K_00073();
	this.instance_73.parent = this;

	this.instance_74 = new lib.dxxcl_yl01K_00074();
	this.instance_74.parent = this;

	this.instance_75 = new lib.dxxcl_yl01K_00075();
	this.instance_75.parent = this;

	this.instance_76 = new lib.dxxcl_yl01K_00076();
	this.instance_76.parent = this;

	this.instance_77 = new lib.dxxcl_yl01K_00077();
	this.instance_77.parent = this;

	this.instance_78 = new lib.dxxcl_yl01K_00078();
	this.instance_78.parent = this;

	this.instance_79 = new lib.dxxcl_yl01K_00079();
	this.instance_79.parent = this;

	this.instance_80 = new lib.dxxcl_yl01K_00080();
	this.instance_80.parent = this;

	this.instance_81 = new lib.dxxcl_yl01K_00081();
	this.instance_81.parent = this;

	this.instance_82 = new lib.dxxcl_yl01K_00082();
	this.instance_82.parent = this;

	this.instance_83 = new lib.dxxcl_yl01K_00083();
	this.instance_83.parent = this;

	this.instance_84 = new lib.dxxcl_yl01K_00084();
	this.instance_84.parent = this;

	this.instance_85 = new lib.dxxcl_yl01K_00085();
	this.instance_85.parent = this;

	this.instance_86 = new lib.dxxcl_yl01K_00086();
	this.instance_86.parent = this;

	this.instance_87 = new lib.dxxcl_yl01K_00087();
	this.instance_87.parent = this;

	this.instance_88 = new lib.dxxcl_yl01K_00088();
	this.instance_88.parent = this;

	this.instance_89 = new lib.dxxcl_yl01K_00089();
	this.instance_89.parent = this;

	this.instance_90 = new lib.dxxcl_yl01K_00090();
	this.instance_90.parent = this;

	this.instance_91 = new lib.dxxcl_yl01K_00091();
	this.instance_91.parent = this;

	this.instance_92 = new lib.dxxcl_yl01K_00092();
	this.instance_92.parent = this;

	this.instance_93 = new lib.dxxcl_yl01K_00093();
	this.instance_93.parent = this;

	this.instance_94 = new lib.dxxcl_yl01K_00094();
	this.instance_94.parent = this;

	this.instance_95 = new lib.dxxcl_yl01K_00095();
	this.instance_95.parent = this;

	this.instance_96 = new lib.dxxcl_yl01K_00096();
	this.instance_96.parent = this;

	this.instance_97 = new lib.dxxcl_yl01K_00097();
	this.instance_97.parent = this;

	this.instance_98 = new lib.dxxcl_yl01K_00098();
	this.instance_98.parent = this;

	this.instance_99 = new lib.dxxcl_yl01K_00099();
	this.instance_99.parent = this;

	this.instance_100 = new lib.dxxcl_yl01K_00100();
	this.instance_100.parent = this;

	this.instance_101 = new lib.dxxcl_yl01K_00101();
	this.instance_101.parent = this;

	this.instance_102 = new lib.dxxcl_yl01K_00102();
	this.instance_102.parent = this;

	this.instance_103 = new lib.dxxcl_yl01K_00103();
	this.instance_103.parent = this;

	this.instance_104 = new lib.dxxcl_yl01K_00104();
	this.instance_104.parent = this;

	this.instance_105 = new lib.dxxcl_yl01K_00105();
	this.instance_105.parent = this;

	this.instance_106 = new lib.dxxcl_yl01K_00106();
	this.instance_106.parent = this;

	this.instance_107 = new lib.dxxcl_yl01K_00107();
	this.instance_107.parent = this;

	this.instance_108 = new lib.dxxcl_yl01K_00108();
	this.instance_108.parent = this;

	this.instance_109 = new lib.dxxcl_yl01K_00109();
	this.instance_109.parent = this;

	this.instance_110 = new lib.dxxcl_yl01K_00110();
	this.instance_110.parent = this;

	this.instance_111 = new lib.dxxcl_yl01K_00111();
	this.instance_111.parent = this;

	this.instance_112 = new lib.dxxcl_yl01K_00112();
	this.instance_112.parent = this;

	this.instance_113 = new lib.dxxcl_yl01K_00113();
	this.instance_113.parent = this;

	this.instance_114 = new lib.dxxcl_yl01K_00114();
	this.instance_114.parent = this;

	this.instance_115 = new lib.dxxcl_yl01K_00115();
	this.instance_115.parent = this;

	this.instance_116 = new lib.dxxcl_yl01K_00116();
	this.instance_116.parent = this;

	this.instance_117 = new lib.dxxcl_yl01K_00117();
	this.instance_117.parent = this;

	this.instance_118 = new lib.dxxcl_yl01K_00118();
	this.instance_118.parent = this;

	this.instance_119 = new lib.dxxcl_yl01K_00119();
	this.instance_119.parent = this;

	this.instance_120 = new lib.dxxcl_yl01K_00120();
	this.instance_120.parent = this;

	this.instance_121 = new lib.dxxcl_yl01K_00121();
	this.instance_121.parent = this;

	this.instance_122 = new lib.dxxcl_yl01K_00122();
	this.instance_122.parent = this;

	this.instance_123 = new lib.dxxcl_yl01K_00123();
	this.instance_123.parent = this;

	this.instance_124 = new lib.dxxcl_yl01K_00124();
	this.instance_124.parent = this;

	this.instance_125 = new lib.dxxcl_yl01K_00125();
	this.instance_125.parent = this;

	this.instance_126 = new lib.dxxcl_yl01K_00126();
	this.instance_126.parent = this;

	this.instance_127 = new lib.dxxcl_yl01K_00127();
	this.instance_127.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


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


(lib.page12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s12.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333F48").s().p("Ag2CFIAAgfQgmAKgtAPIgIgqIAjgIIAAhIIgcAAIAAgjIAcAAIAAg+IgdAAIAAglIBfAAIAAAlIgdAAIAAA+IAbAAIAAAjIgbAAIAAA/IAegJQgBAVABATIBIAAIAAgZIhCAAIAAgiIBCAAIAAgVIhBAAIAAiXICoAAIAACXIhBAAIAAAVIBCAAIAAAiIhCAAIAAAZIBPAAIAAAigABDgMIAcAAIAAgdIgcAAgAAAgMIAdAAIAAgdIgdAAgABDhHIAcAAIAAgcIgcAAgAAAhHIAdAAIAAgcIgdAAg");
	this.shape.setTransform(369.3,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333F48").s().p("AiSBvQAegnAAheIAAh1IEDAAIAAAjIhkAAIgLAWIBeAAIAAB6IhFAAIAAA5QAAARgJAKQgJAJgSABQgTACgXgBQgDgTgFgSIgdAfIgegaQAggdAWgfIAhAWQgMAQgOAPIAbACQAPAAAAgNIAAgtIhIAAIAAh6IAxAAIAIgWIhMAAIAABXQAABpgkAzQgQgPgSgNgAgTAKIBrAAIAAgRIhrAAgAgTgiIBrAAIAAgSIhrAAgAA/A/IAegVQAaAbAcAiIgiAYQgXgggbggg");
	this.shape_1.setTransform(338.9,64.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333F48").s().p("AiQBmIAbgYIAAhRIgaAAIAAgnIA/AAIAAB4QARAZAuAAQA6ABBogCIgOAlQhVAAhHgBQgtAAgagdIggAkgAASBhIAAgxQgZAbgiARQgJgPgPgSQApgMAfgdIg5AAIAAhTIBEAAIAAgSIhOAAIAAgkIBOAAIAAgZIAlAAIAAAZIBRAAIAAAkIhRAAIAAASIBGAAIAABTIhGAAIAAAXIANgUQAnATAkAUIgTAeQglgWgggRIAAAugAA3gLIAlAAIAAgYIglAAgAgRgLIAjAAIAAgYIgjAAgAiIh/IAggRQAVAfAPAaIgkATQgPgegRgdg");
	this.shape_2.setTransform(308.7,63.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333F48").s().p("AiQBsQA7gHAugQQgcgWgTgeIgVAAIAAgiIDOAAIAAAgQgWAfghAXQAsANA5ADIgWAqQhHgHg0gaQgzAYhIAMQgJgSgMgUgAABBEQAdgPAWgUIhgAAQATAUAaAPgAA5grIAWgaQAfATAkAaIgZAcQgfgXghgYgAiRgbQAkgVAegXIAZAZQggAaglAWQgLgPgLgOgAARgIIAAhEIggAAIAABEIgmAAIAAhEIhVAAIAAgjIB1AAIgJgYIApgKIAPAiIByAAIAAAjIhWAAIAABEg");
	this.shape_3.setTransform(278.3,63.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333F48").s().p("AhVCQIAAgzIg7AEIgBglIA8gDIAAgbIg6AAIAAgjQAKgcAJgnIgVAAIAAgjIAdAAIAHgkIAoADIgIAhIA5AAIAAAjIhCAAQgKAmgKAeIAVAAIAAgyIAkAAIAAAyIAaAAIAAAiIgaAAIAAAaIAegCIAAAkIgeABIAAA1gAAhCJQglAAAAgqIAAh7IgQANQgHgOgPgVQAxglAbg4IAxAAIgHAKQAaAuAsAdIgTAoQgxgkgYguQgYAmgeAeIAiAAIAAArQAegPAXgWIAdAaQgmAfgsAWIAAAeQAAARARAAIAUAAQARAAACgLQADgQACgbIAoAPQgEAdgFASQgGAdgsAAg");
	this.shape_4.setTransform(248.2,63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333F48").s().p("ABWCQIAAgLIjRAAIAAiOIApAAIAAA9QBFgcAAgwIiCAAIAAgiIAoAAIAAhEIApAAIAABEIAwAAIAAhVIApAAIAAAaIBgAAIAAAiIhgAAIAAAZIB1AAIAAAiIh2AAQgBARgFANQAjAUAfAUIAAg3IApAAIAACZgAhSBjICoAAIAAgsIgVAdQgegYgfgWQgSAZgsAXIgYghg");
	this.shape_5.setTransform(217.8,63.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333F48").s().p("AiKCGIAAgfIB/AAIAAgTIhVAAIAAgdIgSAVQgMgKgRgLQAdgiARghIgQAAIAAh5IDoAAIAAB5IhZAAIAAAQIBlAAIAAAgIhlAAIAAASIBdAAIAAAeIhdAAIAAATIBzAAIAAAfgAhgA2IBVAAIAAgSIhJAAIgMASgAg7gGIgGAKIA2AAIAAgQIhAAAgAhIgtICWAAIAAgPIiWAAgAhIhWICWAAIAAgPIiWAAg");
	this.shape_6.setTransform(187.3,63.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333F48").s().p("AgLBnIAwACQAUAAAAgWIAAhUIhVAAIAAgmICuAAIAAAmIguAAIAABeQAAAYgKAMQgLAMgVABIg6ACQgEgTgHgWgAhlCPIAAhsIgcAZIgQgoQAtgmAhgxIAjAWQgNATgPASIAACXgAiPhMQAwgmAYgdIAjAZQgeAkg0ApQgKgRgPgSgAgThUIAAgmICYAAIAAAmg");
	this.shape_7.setTransform(157.2,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// 图层 1
	this.btn2 = new lib.btn();
	this.btn2.parent = this;
	this.btn2.setTransform(961.8,503.4,0.87,0.468);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn(), 3);

	this.btn1 = new lib.btn();
	this.btn1.parent = this;
	this.btn1.setTransform(847.7,503.4,0.87,0.468);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btn(), 3);

	this.xian = new lib.page12sc();
	this.xian.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xian},{t:this.btn1},{t:this.btn2}]}).wait(10));

	// 图层 6
	this.man = new lib.danmanMC();
	this.man.parent = this;
	this.man.setTransform(81,127.6,0.94,0.94,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(10));

	// 图层 7
	this.kuai = new lib.dankuai();
	this.kuai.parent = this;
	this.kuai.setTransform(80.6,127.3,0.94,0.94);

	this.timeline.addTween(cjs.Tween.get(this.kuai).wait(10));

	// 图层 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EhqtAHaIAAuzMDVbAAAIAAOzg");
	this.shape_8.setTransform(683,720.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0F9F6").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_9.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3dpage12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(442.7,-613.4,1366,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3dpage12/dxxcl_yl01K_00000.jpg", id:"dxxcl_yl01K_00000"},
		{src:"images/3dpage12/dxxcl_yl01K_00001.jpg", id:"dxxcl_yl01K_00001"},
		{src:"images/3dpage12/dxxcl_yl01K_00002.jpg", id:"dxxcl_yl01K_00002"},
		{src:"images/3dpage12/dxxcl_yl01K_00003.jpg", id:"dxxcl_yl01K_00003"},
		{src:"images/3dpage12/dxxcl_yl01K_00004.jpg", id:"dxxcl_yl01K_00004"},
		{src:"images/3dpage12/dxxcl_yl01K_00005.jpg", id:"dxxcl_yl01K_00005"},
		{src:"images/3dpage12/dxxcl_yl01K_00006.jpg", id:"dxxcl_yl01K_00006"},
		{src:"images/3dpage12/dxxcl_yl01K_00007.jpg", id:"dxxcl_yl01K_00007"},
		{src:"images/3dpage12/dxxcl_yl01K_00008.jpg", id:"dxxcl_yl01K_00008"},
		{src:"images/3dpage12/dxxcl_yl01K_00009.jpg", id:"dxxcl_yl01K_00009"},
		{src:"images/3dpage12/dxxcl_yl01K_00010.jpg", id:"dxxcl_yl01K_00010"},
		{src:"images/3dpage12/dxxcl_yl01K_00011.jpg", id:"dxxcl_yl01K_00011"},
		{src:"images/3dpage12/dxxcl_yl01K_00012.jpg", id:"dxxcl_yl01K_00012"},
		{src:"images/3dpage12/dxxcl_yl01K_00013.jpg", id:"dxxcl_yl01K_00013"},
		{src:"images/3dpage12/dxxcl_yl01K_00014.jpg", id:"dxxcl_yl01K_00014"},
		{src:"images/3dpage12/dxxcl_yl01K_00015.jpg", id:"dxxcl_yl01K_00015"},
		{src:"images/3dpage12/dxxcl_yl01K_00016.jpg", id:"dxxcl_yl01K_00016"},
		{src:"images/3dpage12/dxxcl_yl01K_00017.jpg", id:"dxxcl_yl01K_00017"},
		{src:"images/3dpage12/dxxcl_yl01K_00018.jpg", id:"dxxcl_yl01K_00018"},
		{src:"images/3dpage12/dxxcl_yl01K_00019.jpg", id:"dxxcl_yl01K_00019"},
		{src:"images/3dpage12/dxxcl_yl01K_00020.jpg", id:"dxxcl_yl01K_00020"},
		{src:"images/3dpage12/dxxcl_yl01K_00021.jpg", id:"dxxcl_yl01K_00021"},
		{src:"images/3dpage12/dxxcl_yl01K_00022.jpg", id:"dxxcl_yl01K_00022"},
		{src:"images/3dpage12/dxxcl_yl01K_00023.jpg", id:"dxxcl_yl01K_00023"},
		{src:"images/3dpage12/dxxcl_yl01K_00024.jpg", id:"dxxcl_yl01K_00024"},
		{src:"images/3dpage12/dxxcl_yl01K_00025.jpg", id:"dxxcl_yl01K_00025"},
		{src:"images/3dpage12/dxxcl_yl01K_00026.jpg", id:"dxxcl_yl01K_00026"},
		{src:"images/3dpage12/dxxcl_yl01K_00027.jpg", id:"dxxcl_yl01K_00027"},
		{src:"images/3dpage12/dxxcl_yl01K_00028.jpg", id:"dxxcl_yl01K_00028"},
		{src:"images/3dpage12/dxxcl_yl01K_00029.jpg", id:"dxxcl_yl01K_00029"},
		{src:"images/3dpage12/dxxcl_yl01K_00030.jpg", id:"dxxcl_yl01K_00030"},
		{src:"images/3dpage12/dxxcl_yl01K_00031.jpg", id:"dxxcl_yl01K_00031"},
		{src:"images/3dpage12/dxxcl_yl01K_00032.jpg", id:"dxxcl_yl01K_00032"},
		{src:"images/3dpage12/dxxcl_yl01K_00033.jpg", id:"dxxcl_yl01K_00033"},
		{src:"images/3dpage12/dxxcl_yl01K_00034.jpg", id:"dxxcl_yl01K_00034"},
		{src:"images/3dpage12/dxxcl_yl01K_00035.jpg", id:"dxxcl_yl01K_00035"},
		{src:"images/3dpage12/dxxcl_yl01K_00036.jpg", id:"dxxcl_yl01K_00036"},
		{src:"images/3dpage12/dxxcl_yl01K_00037.jpg", id:"dxxcl_yl01K_00037"},
		{src:"images/3dpage12/dxxcl_yl01K_00038.jpg", id:"dxxcl_yl01K_00038"},
		{src:"images/3dpage12/dxxcl_yl01K_00039.jpg", id:"dxxcl_yl01K_00039"},
		{src:"images/3dpage12/dxxcl_yl01K_00040.jpg", id:"dxxcl_yl01K_00040"},
		{src:"images/3dpage12/dxxcl_yl01K_00041.jpg", id:"dxxcl_yl01K_00041"},
		{src:"images/3dpage12/dxxcl_yl01K_00042.jpg", id:"dxxcl_yl01K_00042"},
		{src:"images/3dpage12/dxxcl_yl01K_00043.jpg", id:"dxxcl_yl01K_00043"},
		{src:"images/3dpage12/dxxcl_yl01K_00044.jpg", id:"dxxcl_yl01K_00044"},
		{src:"images/3dpage12/dxxcl_yl01K_00045.jpg", id:"dxxcl_yl01K_00045"},
		{src:"images/3dpage12/dxxcl_yl01K_00046.jpg", id:"dxxcl_yl01K_00046"},
		{src:"images/3dpage12/dxxcl_yl01K_00047.jpg", id:"dxxcl_yl01K_00047"},
		{src:"images/3dpage12/dxxcl_yl01K_00048.jpg", id:"dxxcl_yl01K_00048"},
		{src:"images/3dpage12/dxxcl_yl01K_00049.jpg", id:"dxxcl_yl01K_00049"},
		{src:"images/3dpage12/dxxcl_yl01K_00050.jpg", id:"dxxcl_yl01K_00050"},
		{src:"images/3dpage12/dxxcl_yl01K_00051.jpg", id:"dxxcl_yl01K_00051"},
		{src:"images/3dpage12/dxxcl_yl01K_00052.jpg", id:"dxxcl_yl01K_00052"},
		{src:"images/3dpage12/dxxcl_yl01K_00053.jpg", id:"dxxcl_yl01K_00053"},
		{src:"images/3dpage12/dxxcl_yl01K_00054.jpg", id:"dxxcl_yl01K_00054"},
		{src:"images/3dpage12/dxxcl_yl01K_00055.jpg", id:"dxxcl_yl01K_00055"},
		{src:"images/3dpage12/dxxcl_yl01K_00056.jpg", id:"dxxcl_yl01K_00056"},
		{src:"images/3dpage12/dxxcl_yl01K_00057.jpg", id:"dxxcl_yl01K_00057"},
		{src:"images/3dpage12/dxxcl_yl01K_00058.jpg", id:"dxxcl_yl01K_00058"},
		{src:"images/3dpage12/dxxcl_yl01K_00059.jpg", id:"dxxcl_yl01K_00059"},
		{src:"images/3dpage12/dxxcl_yl01K_00060.jpg", id:"dxxcl_yl01K_00060"},
		{src:"images/3dpage12/dxxcl_yl01K_00061.jpg", id:"dxxcl_yl01K_00061"},
		{src:"images/3dpage12/dxxcl_yl01K_00062.jpg", id:"dxxcl_yl01K_00062"},
		{src:"images/3dpage12/dxxcl_yl01K_00063.jpg", id:"dxxcl_yl01K_00063"},
		{src:"images/3dpage12/dxxcl_yl01K_00064.jpg", id:"dxxcl_yl01K_00064"},
		{src:"images/3dpage12/dxxcl_yl01K_00065.jpg", id:"dxxcl_yl01K_00065"},
		{src:"images/3dpage12/dxxcl_yl01K_00066.jpg", id:"dxxcl_yl01K_00066"},
		{src:"images/3dpage12/dxxcl_yl01K_00067.jpg", id:"dxxcl_yl01K_00067"},
		{src:"images/3dpage12/dxxcl_yl01K_00068.jpg", id:"dxxcl_yl01K_00068"},
		{src:"images/3dpage12/dxxcl_yl01K_00069.jpg", id:"dxxcl_yl01K_00069"},
		{src:"images/3dpage12/dxxcl_yl01K_00070.jpg", id:"dxxcl_yl01K_00070"},
		{src:"images/3dpage12/dxxcl_yl01K_00071.jpg", id:"dxxcl_yl01K_00071"},
		{src:"images/3dpage12/dxxcl_yl01K_00072.jpg", id:"dxxcl_yl01K_00072"},
		{src:"images/3dpage12/dxxcl_yl01K_00073.jpg", id:"dxxcl_yl01K_00073"},
		{src:"images/3dpage12/dxxcl_yl01K_00074.jpg", id:"dxxcl_yl01K_00074"},
		{src:"images/3dpage12/dxxcl_yl01K_00075.jpg", id:"dxxcl_yl01K_00075"},
		{src:"images/3dpage12/dxxcl_yl01K_00076.jpg", id:"dxxcl_yl01K_00076"},
		{src:"images/3dpage12/dxxcl_yl01K_00077.jpg", id:"dxxcl_yl01K_00077"},
		{src:"images/3dpage12/dxxcl_yl01K_00078.jpg", id:"dxxcl_yl01K_00078"},
		{src:"images/3dpage12/dxxcl_yl01K_00079.jpg", id:"dxxcl_yl01K_00079"},
		{src:"images/3dpage12/dxxcl_yl01K_00080.jpg", id:"dxxcl_yl01K_00080"},
		{src:"images/3dpage12/dxxcl_yl01K_00081.jpg", id:"dxxcl_yl01K_00081"},
		{src:"images/3dpage12/dxxcl_yl01K_00082.jpg", id:"dxxcl_yl01K_00082"},
		{src:"images/3dpage12/dxxcl_yl01K_00083.jpg", id:"dxxcl_yl01K_00083"},
		{src:"images/3dpage12/dxxcl_yl01K_00084.jpg", id:"dxxcl_yl01K_00084"},
		{src:"images/3dpage12/dxxcl_yl01K_00085.jpg", id:"dxxcl_yl01K_00085"},
		{src:"images/3dpage12/dxxcl_yl01K_00086.jpg", id:"dxxcl_yl01K_00086"},
		{src:"images/3dpage12/dxxcl_yl01K_00087.jpg", id:"dxxcl_yl01K_00087"},
		{src:"images/3dpage12/dxxcl_yl01K_00088.jpg", id:"dxxcl_yl01K_00088"},
		{src:"images/3dpage12/dxxcl_yl01K_00089.jpg", id:"dxxcl_yl01K_00089"},
		{src:"images/3dpage12/dxxcl_yl01K_00090.jpg", id:"dxxcl_yl01K_00090"},
		{src:"images/3dpage12/dxxcl_yl01K_00091.jpg", id:"dxxcl_yl01K_00091"},
		{src:"images/3dpage12/dxxcl_yl01K_00092.jpg", id:"dxxcl_yl01K_00092"},
		{src:"images/3dpage12/dxxcl_yl01K_00093.jpg", id:"dxxcl_yl01K_00093"},
		{src:"images/3dpage12/dxxcl_yl01K_00094.jpg", id:"dxxcl_yl01K_00094"},
		{src:"images/3dpage12/dxxcl_yl01K_00095.jpg", id:"dxxcl_yl01K_00095"},
		{src:"images/3dpage12/dxxcl_yl01K_00096.jpg", id:"dxxcl_yl01K_00096"},
		{src:"images/3dpage12/dxxcl_yl01K_00097.jpg", id:"dxxcl_yl01K_00097"},
		{src:"images/3dpage12/dxxcl_yl01K_00098.jpg", id:"dxxcl_yl01K_00098"},
		{src:"images/3dpage12/dxxcl_yl01K_00099.jpg", id:"dxxcl_yl01K_00099"},
		{src:"images/3dpage12/dxxcl_yl01K_00100.jpg", id:"dxxcl_yl01K_00100"},
		{src:"images/3dpage12/dxxcl_yl01K_00101.jpg", id:"dxxcl_yl01K_00101"},
		{src:"images/3dpage12/dxxcl_yl01K_00102.jpg", id:"dxxcl_yl01K_00102"},
		{src:"images/3dpage12/dxxcl_yl01K_00103.jpg", id:"dxxcl_yl01K_00103"},
		{src:"images/3dpage12/dxxcl_yl01K_00104.jpg", id:"dxxcl_yl01K_00104"},
		{src:"images/3dpage12/dxxcl_yl01K_00105.jpg", id:"dxxcl_yl01K_00105"},
		{src:"images/3dpage12/dxxcl_yl01K_00106.jpg", id:"dxxcl_yl01K_00106"},
		{src:"images/3dpage12/dxxcl_yl01K_00107.jpg", id:"dxxcl_yl01K_00107"},
		{src:"images/3dpage12/dxxcl_yl01K_00108.jpg", id:"dxxcl_yl01K_00108"},
		{src:"images/3dpage12/dxxcl_yl01K_00109.jpg", id:"dxxcl_yl01K_00109"},
		{src:"images/3dpage12/dxxcl_yl01K_00110.jpg", id:"dxxcl_yl01K_00110"},
		{src:"images/3dpage12/dxxcl_yl01K_00111.jpg", id:"dxxcl_yl01K_00111"},
		{src:"images/3dpage12/dxxcl_yl01K_00112.jpg", id:"dxxcl_yl01K_00112"},
		{src:"images/3dpage12/dxxcl_yl01K_00113.jpg", id:"dxxcl_yl01K_00113"},
		{src:"images/3dpage12/dxxcl_yl01K_00114.jpg", id:"dxxcl_yl01K_00114"},
		{src:"images/3dpage12/dxxcl_yl01K_00115.jpg", id:"dxxcl_yl01K_00115"},
		{src:"images/3dpage12/dxxcl_yl01K_00116.jpg", id:"dxxcl_yl01K_00116"},
		{src:"images/3dpage12/dxxcl_yl01K_00117.jpg", id:"dxxcl_yl01K_00117"},
		{src:"images/3dpage12/dxxcl_yl01K_00118.jpg", id:"dxxcl_yl01K_00118"},
		{src:"images/3dpage12/dxxcl_yl01K_00119.jpg", id:"dxxcl_yl01K_00119"},
		{src:"images/3dpage12/dxxcl_yl01K_00120.jpg", id:"dxxcl_yl01K_00120"},
		{src:"images/3dpage12/dxxcl_yl01K_00121.jpg", id:"dxxcl_yl01K_00121"},
		{src:"images/3dpage12/dxxcl_yl01K_00122.jpg", id:"dxxcl_yl01K_00122"},
		{src:"images/3dpage12/dxxcl_yl01K_00123.jpg", id:"dxxcl_yl01K_00123"},
		{src:"images/3dpage12/dxxcl_yl01K_00124.jpg", id:"dxxcl_yl01K_00124"},
		{src:"images/3dpage12/dxxcl_yl01K_00125.jpg", id:"dxxcl_yl01K_00125"},
		{src:"images/3dpage12/dxxcl_yl01K_00126.jpg", id:"dxxcl_yl01K_00126"},
		{src:"images/3dpage12/dxxcl_yl01K_00127.jpg", id:"dxxcl_yl01K_00127"},
		{src:"images/3dpage12/dxxcl_yl01m_00000.jpg", id:"dxxcl_yl01m_00000"},
		{src:"images/3dpage12/dxxcl_yl01m_00001.jpg", id:"dxxcl_yl01m_00001"},
		{src:"images/3dpage12/dxxcl_yl01m_00002.jpg", id:"dxxcl_yl01m_00002"},
		{src:"images/3dpage12/dxxcl_yl01m_00003.jpg", id:"dxxcl_yl01m_00003"},
		{src:"images/3dpage12/dxxcl_yl01m_00004.jpg", id:"dxxcl_yl01m_00004"},
		{src:"images/3dpage12/dxxcl_yl01m_00005.jpg", id:"dxxcl_yl01m_00005"},
		{src:"images/3dpage12/dxxcl_yl01m_00006.jpg", id:"dxxcl_yl01m_00006"},
		{src:"images/3dpage12/dxxcl_yl01m_00007.jpg", id:"dxxcl_yl01m_00007"},
		{src:"images/3dpage12/dxxcl_yl01m_00008.jpg", id:"dxxcl_yl01m_00008"},
		{src:"images/3dpage12/dxxcl_yl01m_00009.jpg", id:"dxxcl_yl01m_00009"},
		{src:"images/3dpage12/dxxcl_yl01m_00010.jpg", id:"dxxcl_yl01m_00010"},
		{src:"images/3dpage12/dxxcl_yl01m_00011.jpg", id:"dxxcl_yl01m_00011"},
		{src:"images/3dpage12/dxxcl_yl01m_00012.jpg", id:"dxxcl_yl01m_00012"},
		{src:"images/3dpage12/dxxcl_yl01m_00013.jpg", id:"dxxcl_yl01m_00013"},
		{src:"images/3dpage12/dxxcl_yl01m_00014.jpg", id:"dxxcl_yl01m_00014"},
		{src:"images/3dpage12/dxxcl_yl01m_00015.jpg", id:"dxxcl_yl01m_00015"},
		{src:"images/3dpage12/dxxcl_yl01m_00016.jpg", id:"dxxcl_yl01m_00016"},
		{src:"images/3dpage12/dxxcl_yl01m_00017.jpg", id:"dxxcl_yl01m_00017"},
		{src:"images/3dpage12/dxxcl_yl01m_00018.jpg", id:"dxxcl_yl01m_00018"},
		{src:"images/3dpage12/dxxcl_yl01m_00019.jpg", id:"dxxcl_yl01m_00019"},
		{src:"images/3dpage12/dxxcl_yl01m_00020.jpg", id:"dxxcl_yl01m_00020"},
		{src:"images/3dpage12/dxxcl_yl01m_00021.jpg", id:"dxxcl_yl01m_00021"},
		{src:"images/3dpage12/dxxcl_yl01m_00022.jpg", id:"dxxcl_yl01m_00022"},
		{src:"images/3dpage12/dxxcl_yl01m_00023.jpg", id:"dxxcl_yl01m_00023"},
		{src:"images/3dpage12/dxxcl_yl01m_00024.jpg", id:"dxxcl_yl01m_00024"},
		{src:"images/3dpage12/dxxcl_yl01m_00025.jpg", id:"dxxcl_yl01m_00025"},
		{src:"images/3dpage12/dxxcl_yl01m_00026.jpg", id:"dxxcl_yl01m_00026"},
		{src:"images/3dpage12/dxxcl_yl01m_00027.jpg", id:"dxxcl_yl01m_00027"},
		{src:"images/3dpage12/dxxcl_yl01m_00028.jpg", id:"dxxcl_yl01m_00028"},
		{src:"images/3dpage12/dxxcl_yl01m_00029.jpg", id:"dxxcl_yl01m_00029"},
		{src:"images/3dpage12/dxxcl_yl01m_00030.jpg", id:"dxxcl_yl01m_00030"},
		{src:"images/3dpage12/dxxcl_yl01m_00031.jpg", id:"dxxcl_yl01m_00031"},
		{src:"images/3dpage12/dxxcl_yl01m_00032.jpg", id:"dxxcl_yl01m_00032"},
		{src:"images/3dpage12/dxxcl_yl01m_00033.jpg", id:"dxxcl_yl01m_00033"},
		{src:"images/3dpage12/dxxcl_yl01m_00034.jpg", id:"dxxcl_yl01m_00034"},
		{src:"images/3dpage12/dxxcl_yl01m_00035.jpg", id:"dxxcl_yl01m_00035"},
		{src:"images/3dpage12/dxxcl_yl01m_00036.jpg", id:"dxxcl_yl01m_00036"},
		{src:"images/3dpage12/dxxcl_yl01m_00037.jpg", id:"dxxcl_yl01m_00037"},
		{src:"images/3dpage12/dxxcl_yl01m_00038.jpg", id:"dxxcl_yl01m_00038"},
		{src:"images/3dpage12/dxxcl_yl01m_00039.jpg", id:"dxxcl_yl01m_00039"},
		{src:"images/3dpage12/dxxcl_yl01m_00040.jpg", id:"dxxcl_yl01m_00040"},
		{src:"images/3dpage12/dxxcl_yl01m_00041.jpg", id:"dxxcl_yl01m_00041"},
		{src:"images/3dpage12/dxxcl_yl01m_00042.jpg", id:"dxxcl_yl01m_00042"},
		{src:"images/3dpage12/dxxcl_yl01m_00043.jpg", id:"dxxcl_yl01m_00043"},
		{src:"images/3dpage12/dxxcl_yl01m_00044.jpg", id:"dxxcl_yl01m_00044"},
		{src:"images/3dpage12/dxxcl_yl01m_00045.jpg", id:"dxxcl_yl01m_00045"},
		{src:"images/3dpage12/dxxcl_yl01m_00046.jpg", id:"dxxcl_yl01m_00046"},
		{src:"images/3dpage12/dxxcl_yl01m_00047.jpg", id:"dxxcl_yl01m_00047"},
		{src:"images/3dpage12/dxxcl_yl01m_00048.jpg", id:"dxxcl_yl01m_00048"},
		{src:"images/3dpage12/dxxcl_yl01m_00049.jpg", id:"dxxcl_yl01m_00049"},
		{src:"images/3dpage12/dxxcl_yl01m_00050.jpg", id:"dxxcl_yl01m_00050"},
		{src:"images/3dpage12/dxxcl_yl01m_00051.jpg", id:"dxxcl_yl01m_00051"},
		{src:"images/3dpage12/dxxcl_yl01m_00052.jpg", id:"dxxcl_yl01m_00052"},
		{src:"images/3dpage12/dxxcl_yl01m_00053.jpg", id:"dxxcl_yl01m_00053"},
		{src:"images/3dpage12/dxxcl_yl01m_00054.jpg", id:"dxxcl_yl01m_00054"},
		{src:"images/3dpage12/dxxcl_yl01m_00055.jpg", id:"dxxcl_yl01m_00055"},
		{src:"images/3dpage12/dxxcl_yl01m_00056.jpg", id:"dxxcl_yl01m_00056"},
		{src:"images/3dpage12/dxxcl_yl01m_00057.jpg", id:"dxxcl_yl01m_00057"},
		{src:"images/3dpage12/dxxcl_yl01m_00058.jpg", id:"dxxcl_yl01m_00058"},
		{src:"images/3dpage12/dxxcl_yl01m_00059.jpg", id:"dxxcl_yl01m_00059"},
		{src:"images/3dpage12/dxxcl_yl01m_00060.jpg", id:"dxxcl_yl01m_00060"},
		{src:"images/3dpage12/dxxcl_yl01m_00061.jpg", id:"dxxcl_yl01m_00061"},
		{src:"images/3dpage12/dxxcl_yl01m_00062.jpg", id:"dxxcl_yl01m_00062"},
		{src:"images/3dpage12/dxxcl_yl01m_00063.jpg", id:"dxxcl_yl01m_00063"},
		{src:"images/3dpage12/dxxcl_yl01m_00064.jpg", id:"dxxcl_yl01m_00064"},
		{src:"images/3dpage12/dxxcl_yl01m_00065.jpg", id:"dxxcl_yl01m_00065"},
		{src:"images/3dpage12/dxxcl_yl01m_00066.jpg", id:"dxxcl_yl01m_00066"},
		{src:"images/3dpage12/dxxcl_yl01m_00067.jpg", id:"dxxcl_yl01m_00067"},
		{src:"images/3dpage12/dxxcl_yl01m_00068.jpg", id:"dxxcl_yl01m_00068"},
		{src:"images/3dpage12/dxxcl_yl01m_00069.jpg", id:"dxxcl_yl01m_00069"},
		{src:"images/3dpage12/dxxcl_yl01m_00070.jpg", id:"dxxcl_yl01m_00070"},
		{src:"images/3dpage12/dxxcl_yl01m_00071.jpg", id:"dxxcl_yl01m_00071"},
		{src:"images/3dpage12/dxxcl_yl01m_00072.jpg", id:"dxxcl_yl01m_00072"},
		{src:"images/3dpage12/dxxcl_yl01m_00073.jpg", id:"dxxcl_yl01m_00073"},
		{src:"images/3dpage12/dxxcl_yl01m_00074.jpg", id:"dxxcl_yl01m_00074"},
		{src:"images/3dpage12/dxxcl_yl01m_00075.jpg", id:"dxxcl_yl01m_00075"},
		{src:"images/3dpage12/dxxcl_yl01m_00076.jpg", id:"dxxcl_yl01m_00076"},
		{src:"images/3dpage12/dxxcl_yl01m_00077.jpg", id:"dxxcl_yl01m_00077"},
		{src:"images/3dpage12/dxxcl_yl01m_00078.jpg", id:"dxxcl_yl01m_00078"},
		{src:"images/3dpage12/dxxcl_yl01m_00079.jpg", id:"dxxcl_yl01m_00079"},
		{src:"images/3dpage12/dxxcl_yl01m_00080.jpg", id:"dxxcl_yl01m_00080"},
		{src:"images/3dpage12/dxxcl_yl01m_00081.jpg", id:"dxxcl_yl01m_00081"},
		{src:"images/3dpage12/dxxcl_yl01m_00082.jpg", id:"dxxcl_yl01m_00082"},
		{src:"images/3dpage12/dxxcl_yl01m_00083.jpg", id:"dxxcl_yl01m_00083"},
		{src:"images/3dpage12/dxxcl_yl01m_00084.jpg", id:"dxxcl_yl01m_00084"},
		{src:"images/3dpage12/dxxcl_yl01m_00085.jpg", id:"dxxcl_yl01m_00085"},
		{src:"images/3dpage12/dxxcl_yl01m_00086.jpg", id:"dxxcl_yl01m_00086"},
		{src:"images/3dpage12/dxxcl_yl01m_00087.jpg", id:"dxxcl_yl01m_00087"},
		{src:"images/3dpage12/dxxcl_yl01m_00088.jpg", id:"dxxcl_yl01m_00088"},
		{src:"images/3dpage12/dxxcl_yl01m_00089.jpg", id:"dxxcl_yl01m_00089"},
		{src:"images/3dpage12/dxxcl_yl01m_00090.jpg", id:"dxxcl_yl01m_00090"},
		{src:"images/3dpage12/dxxcl_yl01m_00091.jpg", id:"dxxcl_yl01m_00091"},
		{src:"images/3dpage12/dxxcl_yl01m_00092.jpg", id:"dxxcl_yl01m_00092"},
		{src:"images/3dpage12/dxxcl_yl01m_00093.jpg", id:"dxxcl_yl01m_00093"},
		{src:"images/3dpage12/dxxcl_yl01m_00094.jpg", id:"dxxcl_yl01m_00094"},
		{src:"images/3dpage12/dxxcl_yl01m_00095.jpg", id:"dxxcl_yl01m_00095"},
		{src:"images/3dpage12/dxxcl_yl01m_00096.jpg", id:"dxxcl_yl01m_00096"},
		{src:"images/3dpage12/dxxcl_yl01m_00097.jpg", id:"dxxcl_yl01m_00097"},
		{src:"images/3dpage12/dxxcl_yl01m_00098.jpg", id:"dxxcl_yl01m_00098"},
		{src:"images/3dpage12/dxxcl_yl01m_00099.jpg", id:"dxxcl_yl01m_00099"},
		{src:"images/3dpage12/dxxcl_yl01m_00100.jpg", id:"dxxcl_yl01m_00100"},
		{src:"images/3dpage12/dxxcl_yl01m_00101.jpg", id:"dxxcl_yl01m_00101"},
		{src:"images/3dpage12/dxxcl_yl01m_00102.jpg", id:"dxxcl_yl01m_00102"},
		{src:"images/3dpage12/dxxcl_yl01m_00103.jpg", id:"dxxcl_yl01m_00103"},
		{src:"images/3dpage12/dxxcl_yl01m_00104.jpg", id:"dxxcl_yl01m_00104"},
		{src:"images/3dpage12/dxxcl_yl01m_00105.jpg", id:"dxxcl_yl01m_00105"},
		{src:"images/3dpage12/dxxcl_yl01m_00106.jpg", id:"dxxcl_yl01m_00106"},
		{src:"images/3dpage12/dxxcl_yl01m_00107.jpg", id:"dxxcl_yl01m_00107"},
		{src:"images/3dpage12/dxxcl_yl01m_00108.jpg", id:"dxxcl_yl01m_00108"},
		{src:"images/3dpage12/dxxcl_yl01m_00109.jpg", id:"dxxcl_yl01m_00109"},
		{src:"images/3dpage12/dxxcl_yl01m_00110.jpg", id:"dxxcl_yl01m_00110"},
		{src:"images/3dpage12/dxxcl_yl01m_00111.jpg", id:"dxxcl_yl01m_00111"},
		{src:"images/3dpage12/dxxcl_yl01m_00112.jpg", id:"dxxcl_yl01m_00112"},
		{src:"images/3dpage12/dxxcl_yl01m_00113.jpg", id:"dxxcl_yl01m_00113"},
		{src:"images/3dpage12/dxxcl_yl01m_00114.jpg", id:"dxxcl_yl01m_00114"},
		{src:"images/3dpage12/dxxcl_yl01m_00115.jpg", id:"dxxcl_yl01m_00115"},
		{src:"images/3dpage12/dxxcl_yl01m_00116.jpg", id:"dxxcl_yl01m_00116"},
		{src:"images/3dpage12/dxxcl_yl01m_00117.jpg", id:"dxxcl_yl01m_00117"},
		{src:"images/3dpage12/dxxcl_yl01m_00118.jpg", id:"dxxcl_yl01m_00118"},
		{src:"images/3dpage12/dxxcl_yl01m_00119.jpg", id:"dxxcl_yl01m_00119"},
		{src:"images/3dpage12/dxxcl_yl01m_00120.jpg", id:"dxxcl_yl01m_00120"},
		{src:"images/3dpage12/dxxcl_yl01m_00121.jpg", id:"dxxcl_yl01m_00121"},
		{src:"images/3dpage12/dxxcl_yl01m_00122.jpg", id:"dxxcl_yl01m_00122"},
		{src:"images/3dpage12/dxxcl_yl01m_00123.jpg", id:"dxxcl_yl01m_00123"},
		{src:"images/3dpage12/dxxcl_yl01m_00124.jpg", id:"dxxcl_yl01m_00124"},
		{src:"images/3dpage12/dxxcl_yl01m_00125.jpg", id:"dxxcl_yl01m_00125"},
		{src:"images/3dpage12/dxxcl_yl01m_00126.jpg", id:"dxxcl_yl01m_00126"},
		{src:"images/3dpage12/dxxcl_yl01m_00127.jpg", id:"dxxcl_yl01m_00127"},
		{src:"images/3dpage12/dxxcl_yl01m_00128.jpg", id:"dxxcl_yl01m_00128"},
		{src:"images/3dpage12/dxxcl_yl01m_00129.jpg", id:"dxxcl_yl01m_00129"},
		{src:"images/3dpage12/dxxcl_yl01m_00130.jpg", id:"dxxcl_yl01m_00130"},
		{src:"images/3dpage12/dxxcl_yl01m_00131.jpg", id:"dxxcl_yl01m_00131"},
		{src:"images/3dpage12/dxxcl_yl01m_00132.jpg", id:"dxxcl_yl01m_00132"},
		{src:"images/3dpage12/dxxcl_yl01m_00133.jpg", id:"dxxcl_yl01m_00133"},
		{src:"images/3dpage12/dxxcl_yl01m_00134.jpg", id:"dxxcl_yl01m_00134"},
		{src:"images/3dpage12/dxxcl_yl01m_00135.jpg", id:"dxxcl_yl01m_00135"},
		{src:"images/3dpage12/dxxcl_yl01m_00136.jpg", id:"dxxcl_yl01m_00136"},
		{src:"images/3dpage12/dxxcl_yl01m_00137.jpg", id:"dxxcl_yl01m_00137"},
		{src:"images/3dpage12/dxxcl_yl01m_00138.jpg", id:"dxxcl_yl01m_00138"},
		{src:"images/3dpage12/dxxcl_yl01m_00139.jpg", id:"dxxcl_yl01m_00139"},
		{src:"images/3dpage12/dxxcl_yl01m_00140.jpg", id:"dxxcl_yl01m_00140"},
		{src:"images/3dpage12/dxxcl_yl01m_00141.jpg", id:"dxxcl_yl01m_00141"},
		{src:"images/3dpage12/dxxcl_yl01m_00142.jpg", id:"dxxcl_yl01m_00142"},
		{src:"images/3dpage12/dxxcl_yl01m_00143.jpg", id:"dxxcl_yl01m_00143"},
		{src:"images/3dpage12/dxxcl_yl01m_00144.jpg", id:"dxxcl_yl01m_00144"},
		{src:"images/3dpage12/dxxcl_yl01m_00145.jpg", id:"dxxcl_yl01m_00145"},
		{src:"images/3dpage12/dxxcl_yl01m_00146.jpg", id:"dxxcl_yl01m_00146"},
		{src:"images/3dpage12/dxxcl_yl01m_00147.jpg", id:"dxxcl_yl01m_00147"},
		{src:"images/3dpage12/dxxcl_yl01m_00148.jpg", id:"dxxcl_yl01m_00148"},
		{src:"images/3dpage12/dxxcl_yl01m_00149.jpg", id:"dxxcl_yl01m_00149"},
		{src:"images/3dpage12/dxxcl_yl01m_00150.jpg", id:"dxxcl_yl01m_00150"},
		{src:"images/3dpage12/dxxcl_yl01m_00151.jpg", id:"dxxcl_yl01m_00151"},
		{src:"images/3dpage12/dxxcl_yl01m_00152.jpg", id:"dxxcl_yl01m_00152"},
		{src:"images/3dpage12/dxxcl_yl01m_00153.jpg", id:"dxxcl_yl01m_00153"},
		{src:"images/3dpage12/dxxcl_yl01m_00154.jpg", id:"dxxcl_yl01m_00154"},
		{src:"images/3dpage12/dxxcl_yl01m_00155.jpg", id:"dxxcl_yl01m_00155"},
		{src:"images/3dpage12/dxxcl_yl01m_00156.jpg", id:"dxxcl_yl01m_00156"},
		{src:"images/3dpage12/dxxcl_yl01m_00157.jpg", id:"dxxcl_yl01m_00157"},
		{src:"images/3dpage12/dxxcl_yl01m_00158.jpg", id:"dxxcl_yl01m_00158"},
		{src:"images/3dpage12/dxxcl_yl01m_00159.jpg", id:"dxxcl_yl01m_00159"},
		{src:"images/3dpage12/dxxcl_yl01m_00160.jpg", id:"dxxcl_yl01m_00160"},
		{src:"images/3dpage12/dxxcl_yl01m_00161.jpg", id:"dxxcl_yl01m_00161"},
		{src:"images/3dpage12/dxxcl_yl01m_00162.jpg", id:"dxxcl_yl01m_00162"},
		{src:"images/3dpage12/dxxcl_yl01m_00163.jpg", id:"dxxcl_yl01m_00163"},
		{src:"images/3dpage12/dxxcl_yl01m_00164.jpg", id:"dxxcl_yl01m_00164"},
		{src:"images/3dpage12/dxxcl_yl01m_00165.jpg", id:"dxxcl_yl01m_00165"},
		{src:"images/3dpage12/dxxcl_yl01m_00166.jpg", id:"dxxcl_yl01m_00166"},
		{src:"images/3dpage12/dxxcl_yl01m_00167.jpg", id:"dxxcl_yl01m_00167"},
		{src:"images/3dpage12/dxxcl_yl01m_00168.jpg", id:"dxxcl_yl01m_00168"},
		{src:"images/3dpage12/dxxcl_yl01m_00169.jpg", id:"dxxcl_yl01m_00169"},
		{src:"images/3dpage12/dxxcl_yl01m_00170.jpg", id:"dxxcl_yl01m_00170"},
		{src:"images/3dpage12/dxxcl_yl01m_00171.jpg", id:"dxxcl_yl01m_00171"},
		{src:"images/3dpage12/dxxcl_yl01m_00172.jpg", id:"dxxcl_yl01m_00172"},
		{src:"images/3dpage12/dxxcl_yl01m_00173.jpg", id:"dxxcl_yl01m_00173"},
		{src:"images/3dpage12/dxxcl_yl01m_00174.jpg", id:"dxxcl_yl01m_00174"},
		{src:"images/3dpage12/dxxcl_yl01m_00175.jpg", id:"dxxcl_yl01m_00175"},
		{src:"images/3dpage12/dxxcl_yl01m_00176.jpg", id:"dxxcl_yl01m_00176"},
		{src:"images/3dpage12/dxxcl_yl01m_00177.jpg", id:"dxxcl_yl01m_00177"},
		{src:"images/3dpage12/dxxcl_yl01m_00178.jpg", id:"dxxcl_yl01m_00178"},
		{src:"images/3dpage12/dxxcl_yl01m_00179.jpg", id:"dxxcl_yl01m_00179"},
		{src:"images/3dpage12/dxxcl_yl01m_00180.jpg", id:"dxxcl_yl01m_00180"},
		{src:"images/3dpage12/dxxcl_yl01m_00181.jpg", id:"dxxcl_yl01m_00181"},
		{src:"images/3dpage12/dxxcl_yl01m_00182.jpg", id:"dxxcl_yl01m_00182"},
		{src:"images/3dpage12/dxxcl_yl01m_00183.jpg", id:"dxxcl_yl01m_00183"},
		{src:"images/3dpage12/dxxcl_yl01m_00184.jpg", id:"dxxcl_yl01m_00184"},
		{src:"images/3dpage12/dxxcl_yl01m_00185.jpg", id:"dxxcl_yl01m_00185"},
		{src:"images/3dpage12/dxxcl_yl01m_00186.jpg", id:"dxxcl_yl01m_00186"},
		{src:"images/3dpage12/dxxcl_yl01m_00187.jpg", id:"dxxcl_yl01m_00187"},
		{src:"images/3dpage12/dxxcl_yl01m_00188.jpg", id:"dxxcl_yl01m_00188"},
		{src:"images/3dpage12/dxxcl_yl01m_00189.jpg", id:"dxxcl_yl01m_00189"},
		{src:"images/3dpage12/dxxcl_yl01m_00190.jpg", id:"dxxcl_yl01m_00190"},
		{src:"images/3dpage12/dxxcl_yl01m_00191.jpg", id:"dxxcl_yl01m_00191"},
		{src:"images/3dpage12/dxxcl_yl01m_00192.jpg", id:"dxxcl_yl01m_00192"},
		{src:"images/3dpage12/dxxcl_yl01m_00193.jpg", id:"dxxcl_yl01m_00193"},
		{src:"images/3dpage12/dxxcl_yl01m_00194.jpg", id:"dxxcl_yl01m_00194"},
		{src:"images/3dpage12/dxxcl_yl01m_00195.jpg", id:"dxxcl_yl01m_00195"},
		{src:"images/3dpage12/dxxcl_yl01m_00196.jpg", id:"dxxcl_yl01m_00196"},
		{src:"images/3dpage12/dxxcl_yl01m_00197.jpg", id:"dxxcl_yl01m_00197"},
		{src:"images/3dpage12/dxxcl_yl01m_00198.jpg", id:"dxxcl_yl01m_00198"},
		{src:"images/3dpage12/dxxcl_yl01m_00199.jpg", id:"dxxcl_yl01m_00199"},
		{src:"images/3dpage12/dxxcl_yl01m_00200.jpg", id:"dxxcl_yl01m_00200"},
		{src:"images/3dpage12/dxxcl_yl01m_00201.jpg", id:"dxxcl_yl01m_00201"},
		{src:"images/3dpage12/dxxcl_yl01m_00202.jpg", id:"dxxcl_yl01m_00202"},
		{src:"images/3dpage12/dxxcl_yl01m_00203.jpg", id:"dxxcl_yl01m_00203"},
		{src:"images/3dpage12/dxxcl_yl01m_00204.jpg", id:"dxxcl_yl01m_00204"},
		{src:"images/3dpage12/dxxcl_yl01m_00205.jpg", id:"dxxcl_yl01m_00205"},
		{src:"images/3dpage12/dxxcl_yl01m_00206.jpg", id:"dxxcl_yl01m_00206"},
		{src:"images/3dpage12/dxxcl_yl01m_00207.jpg", id:"dxxcl_yl01m_00207"},
		{src:"images/3dpage12/dxxcl_yl01m_00208.jpg", id:"dxxcl_yl01m_00208"},
		{src:"images/3dpage12/dxxcl_yl01m_00209.jpg", id:"dxxcl_yl01m_00209"},
		{src:"images/3dpage12/dxxcl_yl01m_00210.jpg", id:"dxxcl_yl01m_00210"},
		{src:"images/3dpage12/dxxcl_yl01m_00211.jpg", id:"dxxcl_yl01m_00211"},
		{src:"images/3dpage12/dxxcl_yl01m_00212.jpg", id:"dxxcl_yl01m_00212"}
	],
	preloads: []
};




})(lib3dpage12 = lib3dpage12||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3dpage12, images, createjs, ss, AdobeAn;