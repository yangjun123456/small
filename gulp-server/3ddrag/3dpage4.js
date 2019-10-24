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



(lib.ylbjqyl01_00000 = function() {
	this.initialize(img.ylbjqyl01_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00001 = function() {
	this.initialize(img.ylbjqyl01_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00002 = function() {
	this.initialize(img.ylbjqyl01_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00003 = function() {
	this.initialize(img.ylbjqyl01_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00004 = function() {
	this.initialize(img.ylbjqyl01_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00005 = function() {
	this.initialize(img.ylbjqyl01_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00006 = function() {
	this.initialize(img.ylbjqyl01_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00007 = function() {
	this.initialize(img.ylbjqyl01_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00008 = function() {
	this.initialize(img.ylbjqyl01_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00009 = function() {
	this.initialize(img.ylbjqyl01_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00010 = function() {
	this.initialize(img.ylbjqyl01_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00011 = function() {
	this.initialize(img.ylbjqyl01_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00012 = function() {
	this.initialize(img.ylbjqyl01_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00013 = function() {
	this.initialize(img.ylbjqyl01_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00014 = function() {
	this.initialize(img.ylbjqyl01_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00015 = function() {
	this.initialize(img.ylbjqyl01_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00016 = function() {
	this.initialize(img.ylbjqyl01_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00017 = function() {
	this.initialize(img.ylbjqyl01_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00018 = function() {
	this.initialize(img.ylbjqyl01_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00019 = function() {
	this.initialize(img.ylbjqyl01_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00020 = function() {
	this.initialize(img.ylbjqyl01_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00021 = function() {
	this.initialize(img.ylbjqyl01_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00022 = function() {
	this.initialize(img.ylbjqyl01_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00023 = function() {
	this.initialize(img.ylbjqyl01_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00024 = function() {
	this.initialize(img.ylbjqyl01_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00025 = function() {
	this.initialize(img.ylbjqyl01_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00026 = function() {
	this.initialize(img.ylbjqyl01_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00027 = function() {
	this.initialize(img.ylbjqyl01_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00028 = function() {
	this.initialize(img.ylbjqyl01_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00029 = function() {
	this.initialize(img.ylbjqyl01_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00030 = function() {
	this.initialize(img.ylbjqyl01_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00031 = function() {
	this.initialize(img.ylbjqyl01_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00032 = function() {
	this.initialize(img.ylbjqyl01_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00033 = function() {
	this.initialize(img.ylbjqyl01_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00034 = function() {
	this.initialize(img.ylbjqyl01_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00035 = function() {
	this.initialize(img.ylbjqyl01_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00036 = function() {
	this.initialize(img.ylbjqyl01_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00037 = function() {
	this.initialize(img.ylbjqyl01_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00038 = function() {
	this.initialize(img.ylbjqyl01_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00039 = function() {
	this.initialize(img.ylbjqyl01_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00040 = function() {
	this.initialize(img.ylbjqyl01_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00041 = function() {
	this.initialize(img.ylbjqyl01_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00042 = function() {
	this.initialize(img.ylbjqyl01_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00043 = function() {
	this.initialize(img.ylbjqyl01_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00044 = function() {
	this.initialize(img.ylbjqyl01_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00045 = function() {
	this.initialize(img.ylbjqyl01_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00046 = function() {
	this.initialize(img.ylbjqyl01_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00047 = function() {
	this.initialize(img.ylbjqyl01_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00048 = function() {
	this.initialize(img.ylbjqyl01_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00049 = function() {
	this.initialize(img.ylbjqyl01_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00050 = function() {
	this.initialize(img.ylbjqyl01_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00051 = function() {
	this.initialize(img.ylbjqyl01_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00052 = function() {
	this.initialize(img.ylbjqyl01_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00053 = function() {
	this.initialize(img.ylbjqyl01_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00054 = function() {
	this.initialize(img.ylbjqyl01_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00055 = function() {
	this.initialize(img.ylbjqyl01_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00056 = function() {
	this.initialize(img.ylbjqyl01_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00057 = function() {
	this.initialize(img.ylbjqyl01_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00058 = function() {
	this.initialize(img.ylbjqyl01_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00059 = function() {
	this.initialize(img.ylbjqyl01_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00060 = function() {
	this.initialize(img.ylbjqyl01_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00061 = function() {
	this.initialize(img.ylbjqyl01_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00062 = function() {
	this.initialize(img.ylbjqyl01_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00063 = function() {
	this.initialize(img.ylbjqyl01_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00064 = function() {
	this.initialize(img.ylbjqyl01_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00065 = function() {
	this.initialize(img.ylbjqyl01_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00066 = function() {
	this.initialize(img.ylbjqyl01_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00067 = function() {
	this.initialize(img.ylbjqyl01_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00068 = function() {
	this.initialize(img.ylbjqyl01_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00069 = function() {
	this.initialize(img.ylbjqyl01_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00070 = function() {
	this.initialize(img.ylbjqyl01_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00071 = function() {
	this.initialize(img.ylbjqyl01_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00072 = function() {
	this.initialize(img.ylbjqyl01_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00073 = function() {
	this.initialize(img.ylbjqyl01_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00074 = function() {
	this.initialize(img.ylbjqyl01_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00075 = function() {
	this.initialize(img.ylbjqyl01_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00076 = function() {
	this.initialize(img.ylbjqyl01_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00077 = function() {
	this.initialize(img.ylbjqyl01_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00078 = function() {
	this.initialize(img.ylbjqyl01_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00079 = function() {
	this.initialize(img.ylbjqyl01_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00080 = function() {
	this.initialize(img.ylbjqyl01_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00081 = function() {
	this.initialize(img.ylbjqyl01_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00082 = function() {
	this.initialize(img.ylbjqyl01_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00083 = function() {
	this.initialize(img.ylbjqyl01_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00084 = function() {
	this.initialize(img.ylbjqyl01_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00085 = function() {
	this.initialize(img.ylbjqyl01_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00086 = function() {
	this.initialize(img.ylbjqyl01_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00087 = function() {
	this.initialize(img.ylbjqyl01_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00088 = function() {
	this.initialize(img.ylbjqyl01_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00089 = function() {
	this.initialize(img.ylbjqyl01_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00090 = function() {
	this.initialize(img.ylbjqyl01_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00091 = function() {
	this.initialize(img.ylbjqyl01_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00092 = function() {
	this.initialize(img.ylbjqyl01_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00093 = function() {
	this.initialize(img.ylbjqyl01_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00094 = function() {
	this.initialize(img.ylbjqyl01_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00095 = function() {
	this.initialize(img.ylbjqyl01_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00096 = function() {
	this.initialize(img.ylbjqyl01_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00097 = function() {
	this.initialize(img.ylbjqyl01_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00098 = function() {
	this.initialize(img.ylbjqyl01_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00099 = function() {
	this.initialize(img.ylbjqyl01_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00100 = function() {
	this.initialize(img.ylbjqyl01_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00101 = function() {
	this.initialize(img.ylbjqyl01_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00102 = function() {
	this.initialize(img.ylbjqyl01_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00103 = function() {
	this.initialize(img.ylbjqyl01_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00104 = function() {
	this.initialize(img.ylbjqyl01_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00105 = function() {
	this.initialize(img.ylbjqyl01_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00106 = function() {
	this.initialize(img.ylbjqyl01_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00107 = function() {
	this.initialize(img.ylbjqyl01_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00108 = function() {
	this.initialize(img.ylbjqyl01_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00109 = function() {
	this.initialize(img.ylbjqyl01_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00110 = function() {
	this.initialize(img.ylbjqyl01_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00111 = function() {
	this.initialize(img.ylbjqyl01_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00112 = function() {
	this.initialize(img.ylbjqyl01_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00113 = function() {
	this.initialize(img.ylbjqyl01_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00114 = function() {
	this.initialize(img.ylbjqyl01_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00115 = function() {
	this.initialize(img.ylbjqyl01_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00116 = function() {
	this.initialize(img.ylbjqyl01_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00117 = function() {
	this.initialize(img.ylbjqyl01_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00118 = function() {
	this.initialize(img.ylbjqyl01_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00119 = function() {
	this.initialize(img.ylbjqyl01_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00120 = function() {
	this.initialize(img.ylbjqyl01_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00121 = function() {
	this.initialize(img.ylbjqyl01_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00122 = function() {
	this.initialize(img.ylbjqyl01_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00123 = function() {
	this.initialize(img.ylbjqyl01_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00124 = function() {
	this.initialize(img.ylbjqyl01_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00125 = function() {
	this.initialize(img.ylbjqyl01_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00126 = function() {
	this.initialize(img.ylbjqyl01_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00127 = function() {
	this.initialize(img.ylbjqyl01_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00128 = function() {
	this.initialize(img.ylbjqyl01_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00129 = function() {
	this.initialize(img.ylbjqyl01_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00130 = function() {
	this.initialize(img.ylbjqyl01_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00131 = function() {
	this.initialize(img.ylbjqyl01_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00132 = function() {
	this.initialize(img.ylbjqyl01_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00133 = function() {
	this.initialize(img.ylbjqyl01_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00134 = function() {
	this.initialize(img.ylbjqyl01_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00135 = function() {
	this.initialize(img.ylbjqyl01_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00136 = function() {
	this.initialize(img.ylbjqyl01_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00137 = function() {
	this.initialize(img.ylbjqyl01_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00138 = function() {
	this.initialize(img.ylbjqyl01_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00139 = function() {
	this.initialize(img.ylbjqyl01_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00140 = function() {
	this.initialize(img.ylbjqyl01_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00141 = function() {
	this.initialize(img.ylbjqyl01_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00142 = function() {
	this.initialize(img.ylbjqyl01_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00143 = function() {
	this.initialize(img.ylbjqyl01_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00144 = function() {
	this.initialize(img.ylbjqyl01_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00145 = function() {
	this.initialize(img.ylbjqyl01_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00146 = function() {
	this.initialize(img.ylbjqyl01_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00147 = function() {
	this.initialize(img.ylbjqyl01_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00148 = function() {
	this.initialize(img.ylbjqyl01_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00149 = function() {
	this.initialize(img.ylbjqyl01_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00150 = function() {
	this.initialize(img.ylbjqyl01_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00151 = function() {
	this.initialize(img.ylbjqyl01_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00152 = function() {
	this.initialize(img.ylbjqyl01_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00153 = function() {
	this.initialize(img.ylbjqyl01_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00154 = function() {
	this.initialize(img.ylbjqyl01_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00155 = function() {
	this.initialize(img.ylbjqyl01_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00156 = function() {
	this.initialize(img.ylbjqyl01_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00157 = function() {
	this.initialize(img.ylbjqyl01_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00158 = function() {
	this.initialize(img.ylbjqyl01_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00159 = function() {
	this.initialize(img.ylbjqyl01_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00160 = function() {
	this.initialize(img.ylbjqyl01_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00161 = function() {
	this.initialize(img.ylbjqyl01_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00162 = function() {
	this.initialize(img.ylbjqyl01_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00163 = function() {
	this.initialize(img.ylbjqyl01_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00164 = function() {
	this.initialize(img.ylbjqyl01_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00165 = function() {
	this.initialize(img.ylbjqyl01_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00166 = function() {
	this.initialize(img.ylbjqyl01_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00167 = function() {
	this.initialize(img.ylbjqyl01_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00168 = function() {
	this.initialize(img.ylbjqyl01_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00169 = function() {
	this.initialize(img.ylbjqyl01_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00170 = function() {
	this.initialize(img.ylbjqyl01_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00171 = function() {
	this.initialize(img.ylbjqyl01_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00172 = function() {
	this.initialize(img.ylbjqyl01_00172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00173 = function() {
	this.initialize(img.ylbjqyl01_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00174 = function() {
	this.initialize(img.ylbjqyl01_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00175 = function() {
	this.initialize(img.ylbjqyl01_00175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00176 = function() {
	this.initialize(img.ylbjqyl01_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00177 = function() {
	this.initialize(img.ylbjqyl01_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00178 = function() {
	this.initialize(img.ylbjqyl01_00178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00179 = function() {
	this.initialize(img.ylbjqyl01_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00180 = function() {
	this.initialize(img.ylbjqyl01_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00181 = function() {
	this.initialize(img.ylbjqyl01_00181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00182 = function() {
	this.initialize(img.ylbjqyl01_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00183 = function() {
	this.initialize(img.ylbjqyl01_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00184 = function() {
	this.initialize(img.ylbjqyl01_00184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00185 = function() {
	this.initialize(img.ylbjqyl01_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00186 = function() {
	this.initialize(img.ylbjqyl01_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00187 = function() {
	this.initialize(img.ylbjqyl01_00187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00188 = function() {
	this.initialize(img.ylbjqyl01_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00189 = function() {
	this.initialize(img.ylbjqyl01_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00190 = function() {
	this.initialize(img.ylbjqyl01_00190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00191 = function() {
	this.initialize(img.ylbjqyl01_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00192 = function() {
	this.initialize(img.ylbjqyl01_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00193 = function() {
	this.initialize(img.ylbjqyl01_00193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00194 = function() {
	this.initialize(img.ylbjqyl01_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00195 = function() {
	this.initialize(img.ylbjqyl01_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00196 = function() {
	this.initialize(img.ylbjqyl01_00196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00197 = function() {
	this.initialize(img.ylbjqyl01_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00198 = function() {
	this.initialize(img.ylbjqyl01_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00199 = function() {
	this.initialize(img.ylbjqyl01_00199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00200 = function() {
	this.initialize(img.ylbjqyl01_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00201 = function() {
	this.initialize(img.ylbjqyl01_00201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00202 = function() {
	this.initialize(img.ylbjqyl01_00202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00203 = function() {
	this.initialize(img.ylbjqyl01_00203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00204 = function() {
	this.initialize(img.ylbjqyl01_00204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00205 = function() {
	this.initialize(img.ylbjqyl01_00205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00206 = function() {
	this.initialize(img.ylbjqyl01_00206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00207 = function() {
	this.initialize(img.ylbjqyl01_00207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00208 = function() {
	this.initialize(img.ylbjqyl01_00208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00209 = function() {
	this.initialize(img.ylbjqyl01_00209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00210 = function() {
	this.initialize(img.ylbjqyl01_00210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00211 = function() {
	this.initialize(img.ylbjqyl01_00211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00212 = function() {
	this.initialize(img.ylbjqyl01_00212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00213 = function() {
	this.initialize(img.ylbjqyl01_00213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00214 = function() {
	this.initialize(img.ylbjqyl01_00214);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00215 = function() {
	this.initialize(img.ylbjqyl01_00215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00216 = function() {
	this.initialize(img.ylbjqyl01_00216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00217 = function() {
	this.initialize(img.ylbjqyl01_00217);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00218 = function() {
	this.initialize(img.ylbjqyl01_00218);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00219 = function() {
	this.initialize(img.ylbjqyl01_00219);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00220 = function() {
	this.initialize(img.ylbjqyl01_00220);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00221 = function() {
	this.initialize(img.ylbjqyl01_00221);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00222 = function() {
	this.initialize(img.ylbjqyl01_00222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00223 = function() {
	this.initialize(img.ylbjqyl01_00223);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00224 = function() {
	this.initialize(img.ylbjqyl01_00224);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00225 = function() {
	this.initialize(img.ylbjqyl01_00225);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00226 = function() {
	this.initialize(img.ylbjqyl01_00226);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00227 = function() {
	this.initialize(img.ylbjqyl01_00227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00228 = function() {
	this.initialize(img.ylbjqyl01_00228);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00229 = function() {
	this.initialize(img.ylbjqyl01_00229);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00230 = function() {
	this.initialize(img.ylbjqyl01_00230);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00231 = function() {
	this.initialize(img.ylbjqyl01_00231);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00232 = function() {
	this.initialize(img.ylbjqyl01_00232);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00233 = function() {
	this.initialize(img.ylbjqyl01_00233);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00234 = function() {
	this.initialize(img.ylbjqyl01_00234);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00235 = function() {
	this.initialize(img.ylbjqyl01_00235);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00236 = function() {
	this.initialize(img.ylbjqyl01_00236);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00237 = function() {
	this.initialize(img.ylbjqyl01_00237);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00238 = function() {
	this.initialize(img.ylbjqyl01_00238);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00239 = function() {
	this.initialize(img.ylbjqyl01_00239);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00240 = function() {
	this.initialize(img.ylbjqyl01_00240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00241 = function() {
	this.initialize(img.ylbjqyl01_00241);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00242 = function() {
	this.initialize(img.ylbjqyl01_00242);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00243 = function() {
	this.initialize(img.ylbjqyl01_00243);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00244 = function() {
	this.initialize(img.ylbjqyl01_00244);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00245 = function() {
	this.initialize(img.ylbjqyl01_00245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00246 = function() {
	this.initialize(img.ylbjqyl01_00246);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00247 = function() {
	this.initialize(img.ylbjqyl01_00247);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00248 = function() {
	this.initialize(img.ylbjqyl01_00248);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00249 = function() {
	this.initialize(img.ylbjqyl01_00249);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00250 = function() {
	this.initialize(img.ylbjqyl01_00250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00251 = function() {
	this.initialize(img.ylbjqyl01_00251);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00252 = function() {
	this.initialize(img.ylbjqyl01_00252);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00253 = function() {
	this.initialize(img.ylbjqyl01_00253);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00254 = function() {
	this.initialize(img.ylbjqyl01_00254);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00255 = function() {
	this.initialize(img.ylbjqyl01_00255);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00256 = function() {
	this.initialize(img.ylbjqyl01_00256);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00257 = function() {
	this.initialize(img.ylbjqyl01_00257);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00258 = function() {
	this.initialize(img.ylbjqyl01_00258);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00259 = function() {
	this.initialize(img.ylbjqyl01_00259);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00260 = function() {
	this.initialize(img.ylbjqyl01_00260);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00261 = function() {
	this.initialize(img.ylbjqyl01_00261);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00262 = function() {
	this.initialize(img.ylbjqyl01_00262);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00263 = function() {
	this.initialize(img.ylbjqyl01_00263);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00264 = function() {
	this.initialize(img.ylbjqyl01_00264);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00265 = function() {
	this.initialize(img.ylbjqyl01_00265);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00266 = function() {
	this.initialize(img.ylbjqyl01_00266);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00267 = function() {
	this.initialize(img.ylbjqyl01_00267);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00268 = function() {
	this.initialize(img.ylbjqyl01_00268);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00269 = function() {
	this.initialize(img.ylbjqyl01_00269);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00270 = function() {
	this.initialize(img.ylbjqyl01_00270);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00271 = function() {
	this.initialize(img.ylbjqyl01_00271);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00272 = function() {
	this.initialize(img.ylbjqyl01_00272);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00273 = function() {
	this.initialize(img.ylbjqyl01_00273);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00274 = function() {
	this.initialize(img.ylbjqyl01_00274);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00275 = function() {
	this.initialize(img.ylbjqyl01_00275);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00276 = function() {
	this.initialize(img.ylbjqyl01_00276);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00277 = function() {
	this.initialize(img.ylbjqyl01_00277);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00278 = function() {
	this.initialize(img.ylbjqyl01_00278);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00279 = function() {
	this.initialize(img.ylbjqyl01_00279);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00280 = function() {
	this.initialize(img.ylbjqyl01_00280);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00281 = function() {
	this.initialize(img.ylbjqyl01_00281);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00282 = function() {
	this.initialize(img.ylbjqyl01_00282);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00283 = function() {
	this.initialize(img.ylbjqyl01_00283);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00284 = function() {
	this.initialize(img.ylbjqyl01_00284);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00285 = function() {
	this.initialize(img.ylbjqyl01_00285);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00286 = function() {
	this.initialize(img.ylbjqyl01_00286);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00287 = function() {
	this.initialize(img.ylbjqyl01_00287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00288 = function() {
	this.initialize(img.ylbjqyl01_00288);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00289 = function() {
	this.initialize(img.ylbjqyl01_00289);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00290 = function() {
	this.initialize(img.ylbjqyl01_00290);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00291 = function() {
	this.initialize(img.ylbjqyl01_00291);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00292 = function() {
	this.initialize(img.ylbjqyl01_00292);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00293 = function() {
	this.initialize(img.ylbjqyl01_00293);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00294 = function() {
	this.initialize(img.ylbjqyl01_00294);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00295 = function() {
	this.initialize(img.ylbjqyl01_00295);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00296 = function() {
	this.initialize(img.ylbjqyl01_00296);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00297 = function() {
	this.initialize(img.ylbjqyl01_00297);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00298 = function() {
	this.initialize(img.ylbjqyl01_00298);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00299 = function() {
	this.initialize(img.ylbjqyl01_00299);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.ylbjqyl01_00300 = function() {
	this.initialize(img.ylbjqyl01_00300);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,606);


(lib.page4dMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg2FAtgMAAAha/MBsLAAAMAAABa/g");
	mask.setTransform(346.2,291.2);

	// 图层 4
	this.instance = new lib.ylbjqyl01_00000();
	this.instance.parent = this;
	this.instance.setTransform(-5,0);

	this.instance_1 = new lib.ylbjqyl01_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,0);

	this.instance_2 = new lib.ylbjqyl01_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5,0);

	this.instance_3 = new lib.ylbjqyl01_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5,0);

	this.instance_4 = new lib.ylbjqyl01_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5,0);

	this.instance_5 = new lib.ylbjqyl01_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5,0);

	this.instance_6 = new lib.ylbjqyl01_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5,0);

	this.instance_7 = new lib.ylbjqyl01_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-5,0);

	this.instance_8 = new lib.ylbjqyl01_00008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-5,0);

	this.instance_9 = new lib.ylbjqyl01_00009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-5,0);

	this.instance_10 = new lib.ylbjqyl01_00010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5,0);

	this.instance_11 = new lib.ylbjqyl01_00011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-5,0);

	this.instance_12 = new lib.ylbjqyl01_00012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-5,0);

	this.instance_13 = new lib.ylbjqyl01_00013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-5,0);

	this.instance_14 = new lib.ylbjqyl01_00014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-5,0);

	this.instance_15 = new lib.ylbjqyl01_00015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-5,0);

	this.instance_16 = new lib.ylbjqyl01_00016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-5,0);

	this.instance_17 = new lib.ylbjqyl01_00017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-5,0);

	this.instance_18 = new lib.ylbjqyl01_00018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-5,0);

	this.instance_19 = new lib.ylbjqyl01_00019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-5,0);

	this.instance_20 = new lib.ylbjqyl01_00020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-5,0);

	this.instance_21 = new lib.ylbjqyl01_00021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-5,0);

	this.instance_22 = new lib.ylbjqyl01_00022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-5,0);

	this.instance_23 = new lib.ylbjqyl01_00023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-5,0);

	this.instance_24 = new lib.ylbjqyl01_00024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-5,0);

	this.instance_25 = new lib.ylbjqyl01_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-5,0);

	this.instance_26 = new lib.ylbjqyl01_00026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-5,0);

	this.instance_27 = new lib.ylbjqyl01_00027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-5,0);

	this.instance_28 = new lib.ylbjqyl01_00028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-5,0);

	this.instance_29 = new lib.ylbjqyl01_00029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-5,0);

	this.instance_30 = new lib.ylbjqyl01_00030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-5,0);

	this.instance_31 = new lib.ylbjqyl01_00031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-5,0);

	this.instance_32 = new lib.ylbjqyl01_00032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-5,0);

	this.instance_33 = new lib.ylbjqyl01_00033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-5,0);

	this.instance_34 = new lib.ylbjqyl01_00034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-5,0);

	this.instance_35 = new lib.ylbjqyl01_00035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-5,0);

	this.instance_36 = new lib.ylbjqyl01_00036();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-5,0);

	this.instance_37 = new lib.ylbjqyl01_00037();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-5,0);

	this.instance_38 = new lib.ylbjqyl01_00038();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-5,0);

	this.instance_39 = new lib.ylbjqyl01_00039();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-5,0);

	this.instance_40 = new lib.ylbjqyl01_00040();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-5,0);

	this.instance_41 = new lib.ylbjqyl01_00041();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-5,0);

	this.instance_42 = new lib.ylbjqyl01_00042();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-5,0);

	this.instance_43 = new lib.ylbjqyl01_00043();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-5,0);

	this.instance_44 = new lib.ylbjqyl01_00044();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-5,0);

	this.instance_45 = new lib.ylbjqyl01_00045();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-5,0);

	this.instance_46 = new lib.ylbjqyl01_00046();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-5,0);

	this.instance_47 = new lib.ylbjqyl01_00047();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-5,0);

	this.instance_48 = new lib.ylbjqyl01_00048();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-5,0);

	this.instance_49 = new lib.ylbjqyl01_00049();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-5,0);

	this.instance_50 = new lib.ylbjqyl01_00050();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-5,0);

	this.instance_51 = new lib.ylbjqyl01_00051();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-5,0);

	this.instance_52 = new lib.ylbjqyl01_00052();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-5,0);

	this.instance_53 = new lib.ylbjqyl01_00053();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-5,0);

	this.instance_54 = new lib.ylbjqyl01_00054();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-5,0);

	this.instance_55 = new lib.ylbjqyl01_00055();
	this.instance_55.parent = this;
	this.instance_55.setTransform(-5,0);

	this.instance_56 = new lib.ylbjqyl01_00056();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-5,0);

	this.instance_57 = new lib.ylbjqyl01_00057();
	this.instance_57.parent = this;
	this.instance_57.setTransform(-5,0);

	this.instance_58 = new lib.ylbjqyl01_00058();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-5,0);

	this.instance_59 = new lib.ylbjqyl01_00059();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-5,0);

	this.instance_60 = new lib.ylbjqyl01_00060();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-5,0);

	this.instance_61 = new lib.ylbjqyl01_00061();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-5,0);

	this.instance_62 = new lib.ylbjqyl01_00062();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-5,0);

	this.instance_63 = new lib.ylbjqyl01_00063();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-5,0);

	this.instance_64 = new lib.ylbjqyl01_00064();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-5,0);

	this.instance_65 = new lib.ylbjqyl01_00065();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-5,0);

	this.instance_66 = new lib.ylbjqyl01_00066();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-5,0);

	this.instance_67 = new lib.ylbjqyl01_00067();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-5,0);

	this.instance_68 = new lib.ylbjqyl01_00068();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-5,0);

	this.instance_69 = new lib.ylbjqyl01_00069();
	this.instance_69.parent = this;
	this.instance_69.setTransform(-5,0);

	this.instance_70 = new lib.ylbjqyl01_00070();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-5,0);

	this.instance_71 = new lib.ylbjqyl01_00071();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-5,0);

	this.instance_72 = new lib.ylbjqyl01_00072();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-5,0);

	this.instance_73 = new lib.ylbjqyl01_00073();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-5,0);

	this.instance_74 = new lib.ylbjqyl01_00074();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-5,0);

	this.instance_75 = new lib.ylbjqyl01_00075();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-5,0);

	this.instance_76 = new lib.ylbjqyl01_00076();
	this.instance_76.parent = this;
	this.instance_76.setTransform(-5,0);

	this.instance_77 = new lib.ylbjqyl01_00077();
	this.instance_77.parent = this;
	this.instance_77.setTransform(-5,0);

	this.instance_78 = new lib.ylbjqyl01_00078();
	this.instance_78.parent = this;
	this.instance_78.setTransform(-5,0);

	this.instance_79 = new lib.ylbjqyl01_00079();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-5,0);

	this.instance_80 = new lib.ylbjqyl01_00080();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-5,0);

	this.instance_81 = new lib.ylbjqyl01_00081();
	this.instance_81.parent = this;
	this.instance_81.setTransform(-5,0);

	this.instance_82 = new lib.ylbjqyl01_00082();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-5,0);

	this.instance_83 = new lib.ylbjqyl01_00083();
	this.instance_83.parent = this;
	this.instance_83.setTransform(-5,0);

	this.instance_84 = new lib.ylbjqyl01_00084();
	this.instance_84.parent = this;
	this.instance_84.setTransform(-5,0);

	this.instance_85 = new lib.ylbjqyl01_00085();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-5,0);

	this.instance_86 = new lib.ylbjqyl01_00086();
	this.instance_86.parent = this;
	this.instance_86.setTransform(-5,0);

	this.instance_87 = new lib.ylbjqyl01_00087();
	this.instance_87.parent = this;
	this.instance_87.setTransform(-5,0);

	this.instance_88 = new lib.ylbjqyl01_00088();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-5,0);

	this.instance_89 = new lib.ylbjqyl01_00089();
	this.instance_89.parent = this;
	this.instance_89.setTransform(-5,0);

	this.instance_90 = new lib.ylbjqyl01_00090();
	this.instance_90.parent = this;
	this.instance_90.setTransform(-5,0);

	this.instance_91 = new lib.ylbjqyl01_00091();
	this.instance_91.parent = this;
	this.instance_91.setTransform(-5,0);

	this.instance_92 = new lib.ylbjqyl01_00092();
	this.instance_92.parent = this;
	this.instance_92.setTransform(-5,0);

	this.instance_93 = new lib.ylbjqyl01_00093();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-5,0);

	this.instance_94 = new lib.ylbjqyl01_00094();
	this.instance_94.parent = this;
	this.instance_94.setTransform(-5,0);

	this.instance_95 = new lib.ylbjqyl01_00095();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-5,0);

	this.instance_96 = new lib.ylbjqyl01_00096();
	this.instance_96.parent = this;
	this.instance_96.setTransform(-5,0);

	this.instance_97 = new lib.ylbjqyl01_00097();
	this.instance_97.parent = this;
	this.instance_97.setTransform(-5,0);

	this.instance_98 = new lib.ylbjqyl01_00098();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-5,0);

	this.instance_99 = new lib.ylbjqyl01_00099();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-5,0);

	this.instance_100 = new lib.ylbjqyl01_00100();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-5,0);

	this.instance_101 = new lib.ylbjqyl01_00101();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-5,0);

	this.instance_102 = new lib.ylbjqyl01_00102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(-5,0);

	this.instance_103 = new lib.ylbjqyl01_00103();
	this.instance_103.parent = this;
	this.instance_103.setTransform(-5,0);

	this.instance_104 = new lib.ylbjqyl01_00104();
	this.instance_104.parent = this;
	this.instance_104.setTransform(-5,0);

	this.instance_105 = new lib.ylbjqyl01_00105();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-5,0);

	this.instance_106 = new lib.ylbjqyl01_00106();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-5,0);

	this.instance_107 = new lib.ylbjqyl01_00107();
	this.instance_107.parent = this;
	this.instance_107.setTransform(-5,0);

	this.instance_108 = new lib.ylbjqyl01_00108();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-5,0);

	this.instance_109 = new lib.ylbjqyl01_00109();
	this.instance_109.parent = this;
	this.instance_109.setTransform(-5,0);

	this.instance_110 = new lib.ylbjqyl01_00110();
	this.instance_110.parent = this;
	this.instance_110.setTransform(-5,0);

	this.instance_111 = new lib.ylbjqyl01_00111();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-5,0);

	this.instance_112 = new lib.ylbjqyl01_00112();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-5,0);

	this.instance_113 = new lib.ylbjqyl01_00113();
	this.instance_113.parent = this;
	this.instance_113.setTransform(-5,0);

	this.instance_114 = new lib.ylbjqyl01_00114();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-5,0);

	this.instance_115 = new lib.ylbjqyl01_00115();
	this.instance_115.parent = this;
	this.instance_115.setTransform(-5,0);

	this.instance_116 = new lib.ylbjqyl01_00116();
	this.instance_116.parent = this;
	this.instance_116.setTransform(-5,0);

	this.instance_117 = new lib.ylbjqyl01_00117();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-5,0);

	this.instance_118 = new lib.ylbjqyl01_00118();
	this.instance_118.parent = this;
	this.instance_118.setTransform(-5,0);

	this.instance_119 = new lib.ylbjqyl01_00119();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-5,0);

	this.instance_120 = new lib.ylbjqyl01_00120();
	this.instance_120.parent = this;
	this.instance_120.setTransform(-5,0);

	this.instance_121 = new lib.ylbjqyl01_00121();
	this.instance_121.parent = this;
	this.instance_121.setTransform(-5,0);

	this.instance_122 = new lib.ylbjqyl01_00122();
	this.instance_122.parent = this;
	this.instance_122.setTransform(-5,0);

	this.instance_123 = new lib.ylbjqyl01_00123();
	this.instance_123.parent = this;
	this.instance_123.setTransform(-5,0);

	this.instance_124 = new lib.ylbjqyl01_00124();
	this.instance_124.parent = this;
	this.instance_124.setTransform(-5,0);

	this.instance_125 = new lib.ylbjqyl01_00125();
	this.instance_125.parent = this;
	this.instance_125.setTransform(-5,0);

	this.instance_126 = new lib.ylbjqyl01_00126();
	this.instance_126.parent = this;
	this.instance_126.setTransform(-5,0);

	this.instance_127 = new lib.ylbjqyl01_00127();
	this.instance_127.parent = this;
	this.instance_127.setTransform(-5,0);

	this.instance_128 = new lib.ylbjqyl01_00128();
	this.instance_128.parent = this;
	this.instance_128.setTransform(-5,0);

	this.instance_129 = new lib.ylbjqyl01_00129();
	this.instance_129.parent = this;
	this.instance_129.setTransform(-5,0);

	this.instance_130 = new lib.ylbjqyl01_00130();
	this.instance_130.parent = this;
	this.instance_130.setTransform(-5,0);

	this.instance_131 = new lib.ylbjqyl01_00131();
	this.instance_131.parent = this;
	this.instance_131.setTransform(-5,0);

	this.instance_132 = new lib.ylbjqyl01_00132();
	this.instance_132.parent = this;
	this.instance_132.setTransform(-5,0);

	this.instance_133 = new lib.ylbjqyl01_00133();
	this.instance_133.parent = this;
	this.instance_133.setTransform(-5,0);

	this.instance_134 = new lib.ylbjqyl01_00134();
	this.instance_134.parent = this;
	this.instance_134.setTransform(-5,0);

	this.instance_135 = new lib.ylbjqyl01_00135();
	this.instance_135.parent = this;
	this.instance_135.setTransform(-5,0);

	this.instance_136 = new lib.ylbjqyl01_00136();
	this.instance_136.parent = this;
	this.instance_136.setTransform(-5,0);

	this.instance_137 = new lib.ylbjqyl01_00137();
	this.instance_137.parent = this;
	this.instance_137.setTransform(-5,0);

	this.instance_138 = new lib.ylbjqyl01_00138();
	this.instance_138.parent = this;
	this.instance_138.setTransform(-5,0);

	this.instance_139 = new lib.ylbjqyl01_00139();
	this.instance_139.parent = this;
	this.instance_139.setTransform(-5,0);

	this.instance_140 = new lib.ylbjqyl01_00140();
	this.instance_140.parent = this;
	this.instance_140.setTransform(-5,0);

	this.instance_141 = new lib.ylbjqyl01_00141();
	this.instance_141.parent = this;
	this.instance_141.setTransform(-5,0);

	this.instance_142 = new lib.ylbjqyl01_00142();
	this.instance_142.parent = this;
	this.instance_142.setTransform(-5,0);

	this.instance_143 = new lib.ylbjqyl01_00143();
	this.instance_143.parent = this;
	this.instance_143.setTransform(-5,0);

	this.instance_144 = new lib.ylbjqyl01_00144();
	this.instance_144.parent = this;
	this.instance_144.setTransform(-5,0);

	this.instance_145 = new lib.ylbjqyl01_00145();
	this.instance_145.parent = this;
	this.instance_145.setTransform(-5,0);

	this.instance_146 = new lib.ylbjqyl01_00146();
	this.instance_146.parent = this;
	this.instance_146.setTransform(-5,0);

	this.instance_147 = new lib.ylbjqyl01_00147();
	this.instance_147.parent = this;
	this.instance_147.setTransform(-5,0);

	this.instance_148 = new lib.ylbjqyl01_00148();
	this.instance_148.parent = this;
	this.instance_148.setTransform(-5,0);

	this.instance_149 = new lib.ylbjqyl01_00149();
	this.instance_149.parent = this;
	this.instance_149.setTransform(-5,0);

	this.instance_150 = new lib.ylbjqyl01_00150();
	this.instance_150.parent = this;
	this.instance_150.setTransform(-5,0);

	this.instance_151 = new lib.ylbjqyl01_00151();
	this.instance_151.parent = this;
	this.instance_151.setTransform(-5,0);

	this.instance_152 = new lib.ylbjqyl01_00152();
	this.instance_152.parent = this;
	this.instance_152.setTransform(-5,0);

	this.instance_153 = new lib.ylbjqyl01_00153();
	this.instance_153.parent = this;
	this.instance_153.setTransform(-5,0);

	this.instance_154 = new lib.ylbjqyl01_00154();
	this.instance_154.parent = this;
	this.instance_154.setTransform(-5,0);

	this.instance_155 = new lib.ylbjqyl01_00155();
	this.instance_155.parent = this;
	this.instance_155.setTransform(-5,0);

	this.instance_156 = new lib.ylbjqyl01_00156();
	this.instance_156.parent = this;
	this.instance_156.setTransform(-5,0);

	this.instance_157 = new lib.ylbjqyl01_00157();
	this.instance_157.parent = this;
	this.instance_157.setTransform(-5,0);

	this.instance_158 = new lib.ylbjqyl01_00158();
	this.instance_158.parent = this;
	this.instance_158.setTransform(-5,0);

	this.instance_159 = new lib.ylbjqyl01_00159();
	this.instance_159.parent = this;
	this.instance_159.setTransform(-5,0);

	this.instance_160 = new lib.ylbjqyl01_00160();
	this.instance_160.parent = this;
	this.instance_160.setTransform(-5,0);

	this.instance_161 = new lib.ylbjqyl01_00161();
	this.instance_161.parent = this;
	this.instance_161.setTransform(-5,0);

	this.instance_162 = new lib.ylbjqyl01_00162();
	this.instance_162.parent = this;
	this.instance_162.setTransform(-5,0);

	this.instance_163 = new lib.ylbjqyl01_00163();
	this.instance_163.parent = this;
	this.instance_163.setTransform(-5,0);

	this.instance_164 = new lib.ylbjqyl01_00164();
	this.instance_164.parent = this;
	this.instance_164.setTransform(-5,0);

	this.instance_165 = new lib.ylbjqyl01_00165();
	this.instance_165.parent = this;
	this.instance_165.setTransform(-5,0);

	this.instance_166 = new lib.ylbjqyl01_00166();
	this.instance_166.parent = this;
	this.instance_166.setTransform(-5,0);

	this.instance_167 = new lib.ylbjqyl01_00167();
	this.instance_167.parent = this;
	this.instance_167.setTransform(-5,0);

	this.instance_168 = new lib.ylbjqyl01_00168();
	this.instance_168.parent = this;
	this.instance_168.setTransform(-5,0);

	this.instance_169 = new lib.ylbjqyl01_00169();
	this.instance_169.parent = this;
	this.instance_169.setTransform(-5,0);

	this.instance_170 = new lib.ylbjqyl01_00170();
	this.instance_170.parent = this;
	this.instance_170.setTransform(-5,0);

	this.instance_171 = new lib.ylbjqyl01_00171();
	this.instance_171.parent = this;
	this.instance_171.setTransform(-5,0);

	this.instance_172 = new lib.ylbjqyl01_00172();
	this.instance_172.parent = this;
	this.instance_172.setTransform(-5,0);

	this.instance_173 = new lib.ylbjqyl01_00173();
	this.instance_173.parent = this;
	this.instance_173.setTransform(-5,0);

	this.instance_174 = new lib.ylbjqyl01_00174();
	this.instance_174.parent = this;
	this.instance_174.setTransform(-5,0);

	this.instance_175 = new lib.ylbjqyl01_00175();
	this.instance_175.parent = this;
	this.instance_175.setTransform(-5,0);

	this.instance_176 = new lib.ylbjqyl01_00176();
	this.instance_176.parent = this;
	this.instance_176.setTransform(-5,0);

	this.instance_177 = new lib.ylbjqyl01_00177();
	this.instance_177.parent = this;
	this.instance_177.setTransform(-5,0);

	this.instance_178 = new lib.ylbjqyl01_00178();
	this.instance_178.parent = this;
	this.instance_178.setTransform(-5,0);

	this.instance_179 = new lib.ylbjqyl01_00179();
	this.instance_179.parent = this;
	this.instance_179.setTransform(-5,0);

	this.instance_180 = new lib.ylbjqyl01_00180();
	this.instance_180.parent = this;
	this.instance_180.setTransform(-5,0);

	this.instance_181 = new lib.ylbjqyl01_00181();
	this.instance_181.parent = this;
	this.instance_181.setTransform(-5,0);

	this.instance_182 = new lib.ylbjqyl01_00182();
	this.instance_182.parent = this;
	this.instance_182.setTransform(-5,0);

	this.instance_183 = new lib.ylbjqyl01_00183();
	this.instance_183.parent = this;
	this.instance_183.setTransform(-5,0);

	this.instance_184 = new lib.ylbjqyl01_00184();
	this.instance_184.parent = this;
	this.instance_184.setTransform(-5,0);

	this.instance_185 = new lib.ylbjqyl01_00185();
	this.instance_185.parent = this;
	this.instance_185.setTransform(-5,0);

	this.instance_186 = new lib.ylbjqyl01_00186();
	this.instance_186.parent = this;
	this.instance_186.setTransform(-5,0);

	this.instance_187 = new lib.ylbjqyl01_00187();
	this.instance_187.parent = this;
	this.instance_187.setTransform(-5,0);

	this.instance_188 = new lib.ylbjqyl01_00188();
	this.instance_188.parent = this;
	this.instance_188.setTransform(-5,0);

	this.instance_189 = new lib.ylbjqyl01_00189();
	this.instance_189.parent = this;
	this.instance_189.setTransform(-5,0);

	this.instance_190 = new lib.ylbjqyl01_00190();
	this.instance_190.parent = this;
	this.instance_190.setTransform(-5,0);

	this.instance_191 = new lib.ylbjqyl01_00191();
	this.instance_191.parent = this;
	this.instance_191.setTransform(-5,0);

	this.instance_192 = new lib.ylbjqyl01_00192();
	this.instance_192.parent = this;
	this.instance_192.setTransform(-5,0);

	this.instance_193 = new lib.ylbjqyl01_00193();
	this.instance_193.parent = this;
	this.instance_193.setTransform(-5,0);

	this.instance_194 = new lib.ylbjqyl01_00194();
	this.instance_194.parent = this;
	this.instance_194.setTransform(-5,0);

	this.instance_195 = new lib.ylbjqyl01_00195();
	this.instance_195.parent = this;
	this.instance_195.setTransform(-5,0);

	this.instance_196 = new lib.ylbjqyl01_00196();
	this.instance_196.parent = this;
	this.instance_196.setTransform(-5,0);

	this.instance_197 = new lib.ylbjqyl01_00197();
	this.instance_197.parent = this;
	this.instance_197.setTransform(-5,0);

	this.instance_198 = new lib.ylbjqyl01_00198();
	this.instance_198.parent = this;
	this.instance_198.setTransform(-5,0);

	this.instance_199 = new lib.ylbjqyl01_00199();
	this.instance_199.parent = this;
	this.instance_199.setTransform(-5,0);

	this.instance_200 = new lib.ylbjqyl01_00200();
	this.instance_200.parent = this;
	this.instance_200.setTransform(-5,0);

	this.instance_201 = new lib.ylbjqyl01_00201();
	this.instance_201.parent = this;
	this.instance_201.setTransform(-5,0);

	this.instance_202 = new lib.ylbjqyl01_00202();
	this.instance_202.parent = this;
	this.instance_202.setTransform(-5,0);

	this.instance_203 = new lib.ylbjqyl01_00203();
	this.instance_203.parent = this;
	this.instance_203.setTransform(-5,0);

	this.instance_204 = new lib.ylbjqyl01_00204();
	this.instance_204.parent = this;
	this.instance_204.setTransform(-5,0);

	this.instance_205 = new lib.ylbjqyl01_00205();
	this.instance_205.parent = this;
	this.instance_205.setTransform(-5,0);

	this.instance_206 = new lib.ylbjqyl01_00206();
	this.instance_206.parent = this;
	this.instance_206.setTransform(-5,0);

	this.instance_207 = new lib.ylbjqyl01_00207();
	this.instance_207.parent = this;
	this.instance_207.setTransform(-5,0);

	this.instance_208 = new lib.ylbjqyl01_00208();
	this.instance_208.parent = this;
	this.instance_208.setTransform(-5,0);

	this.instance_209 = new lib.ylbjqyl01_00209();
	this.instance_209.parent = this;
	this.instance_209.setTransform(-5,0);

	this.instance_210 = new lib.ylbjqyl01_00210();
	this.instance_210.parent = this;
	this.instance_210.setTransform(-5,0);

	this.instance_211 = new lib.ylbjqyl01_00211();
	this.instance_211.parent = this;
	this.instance_211.setTransform(-5,0);

	this.instance_212 = new lib.ylbjqyl01_00212();
	this.instance_212.parent = this;
	this.instance_212.setTransform(-5,0);

	this.instance_213 = new lib.ylbjqyl01_00213();
	this.instance_213.parent = this;
	this.instance_213.setTransform(-5,0);

	this.instance_214 = new lib.ylbjqyl01_00214();
	this.instance_214.parent = this;
	this.instance_214.setTransform(-5,0);

	this.instance_215 = new lib.ylbjqyl01_00215();
	this.instance_215.parent = this;
	this.instance_215.setTransform(-5,0);

	this.instance_216 = new lib.ylbjqyl01_00216();
	this.instance_216.parent = this;
	this.instance_216.setTransform(-5,0);

	this.instance_217 = new lib.ylbjqyl01_00217();
	this.instance_217.parent = this;
	this.instance_217.setTransform(-5,0);

	this.instance_218 = new lib.ylbjqyl01_00218();
	this.instance_218.parent = this;
	this.instance_218.setTransform(-5,0);

	this.instance_219 = new lib.ylbjqyl01_00219();
	this.instance_219.parent = this;
	this.instance_219.setTransform(-5,0);

	this.instance_220 = new lib.ylbjqyl01_00220();
	this.instance_220.parent = this;
	this.instance_220.setTransform(-5,0);

	this.instance_221 = new lib.ylbjqyl01_00221();
	this.instance_221.parent = this;
	this.instance_221.setTransform(-5,0);

	this.instance_222 = new lib.ylbjqyl01_00222();
	this.instance_222.parent = this;
	this.instance_222.setTransform(-5,0);

	this.instance_223 = new lib.ylbjqyl01_00223();
	this.instance_223.parent = this;
	this.instance_223.setTransform(-5,0);

	this.instance_224 = new lib.ylbjqyl01_00224();
	this.instance_224.parent = this;
	this.instance_224.setTransform(-5,0);

	this.instance_225 = new lib.ylbjqyl01_00225();
	this.instance_225.parent = this;
	this.instance_225.setTransform(-5,0);

	this.instance_226 = new lib.ylbjqyl01_00226();
	this.instance_226.parent = this;
	this.instance_226.setTransform(-5,0);

	this.instance_227 = new lib.ylbjqyl01_00227();
	this.instance_227.parent = this;
	this.instance_227.setTransform(-5,0);

	this.instance_228 = new lib.ylbjqyl01_00228();
	this.instance_228.parent = this;
	this.instance_228.setTransform(-5,0);

	this.instance_229 = new lib.ylbjqyl01_00229();
	this.instance_229.parent = this;
	this.instance_229.setTransform(-5,0);

	this.instance_230 = new lib.ylbjqyl01_00230();
	this.instance_230.parent = this;
	this.instance_230.setTransform(-5,0);

	this.instance_231 = new lib.ylbjqyl01_00231();
	this.instance_231.parent = this;
	this.instance_231.setTransform(-5,0);

	this.instance_232 = new lib.ylbjqyl01_00232();
	this.instance_232.parent = this;
	this.instance_232.setTransform(-5,0);

	this.instance_233 = new lib.ylbjqyl01_00233();
	this.instance_233.parent = this;
	this.instance_233.setTransform(-5,0);

	this.instance_234 = new lib.ylbjqyl01_00234();
	this.instance_234.parent = this;
	this.instance_234.setTransform(-5,0);

	this.instance_235 = new lib.ylbjqyl01_00235();
	this.instance_235.parent = this;
	this.instance_235.setTransform(-5,0);

	this.instance_236 = new lib.ylbjqyl01_00236();
	this.instance_236.parent = this;
	this.instance_236.setTransform(-5,0);

	this.instance_237 = new lib.ylbjqyl01_00237();
	this.instance_237.parent = this;
	this.instance_237.setTransform(-5,0);

	this.instance_238 = new lib.ylbjqyl01_00238();
	this.instance_238.parent = this;
	this.instance_238.setTransform(-5,0);

	this.instance_239 = new lib.ylbjqyl01_00239();
	this.instance_239.parent = this;
	this.instance_239.setTransform(-5,0);

	this.instance_240 = new lib.ylbjqyl01_00240();
	this.instance_240.parent = this;
	this.instance_240.setTransform(-5,0);

	this.instance_241 = new lib.ylbjqyl01_00241();
	this.instance_241.parent = this;
	this.instance_241.setTransform(-5,0);

	this.instance_242 = new lib.ylbjqyl01_00242();
	this.instance_242.parent = this;
	this.instance_242.setTransform(-5,0);

	this.instance_243 = new lib.ylbjqyl01_00243();
	this.instance_243.parent = this;
	this.instance_243.setTransform(-5,0);

	this.instance_244 = new lib.ylbjqyl01_00244();
	this.instance_244.parent = this;
	this.instance_244.setTransform(-5,0);

	this.instance_245 = new lib.ylbjqyl01_00245();
	this.instance_245.parent = this;
	this.instance_245.setTransform(-5,0);

	this.instance_246 = new lib.ylbjqyl01_00246();
	this.instance_246.parent = this;
	this.instance_246.setTransform(-5,0);

	this.instance_247 = new lib.ylbjqyl01_00247();
	this.instance_247.parent = this;
	this.instance_247.setTransform(-5,0);

	this.instance_248 = new lib.ylbjqyl01_00248();
	this.instance_248.parent = this;
	this.instance_248.setTransform(-5,0);

	this.instance_249 = new lib.ylbjqyl01_00249();
	this.instance_249.parent = this;
	this.instance_249.setTransform(-5,0);

	this.instance_250 = new lib.ylbjqyl01_00250();
	this.instance_250.parent = this;
	this.instance_250.setTransform(-5,0);

	this.instance_251 = new lib.ylbjqyl01_00251();
	this.instance_251.parent = this;
	this.instance_251.setTransform(-5,0);

	this.instance_252 = new lib.ylbjqyl01_00252();
	this.instance_252.parent = this;
	this.instance_252.setTransform(-5,0);

	this.instance_253 = new lib.ylbjqyl01_00253();
	this.instance_253.parent = this;
	this.instance_253.setTransform(-5,0);

	this.instance_254 = new lib.ylbjqyl01_00254();
	this.instance_254.parent = this;
	this.instance_254.setTransform(-5,0);

	this.instance_255 = new lib.ylbjqyl01_00255();
	this.instance_255.parent = this;
	this.instance_255.setTransform(-5,0);

	this.instance_256 = new lib.ylbjqyl01_00256();
	this.instance_256.parent = this;
	this.instance_256.setTransform(-5,0);

	this.instance_257 = new lib.ylbjqyl01_00257();
	this.instance_257.parent = this;
	this.instance_257.setTransform(-5,0);

	this.instance_258 = new lib.ylbjqyl01_00258();
	this.instance_258.parent = this;
	this.instance_258.setTransform(-5,0);

	this.instance_259 = new lib.ylbjqyl01_00259();
	this.instance_259.parent = this;
	this.instance_259.setTransform(-5,0);

	this.instance_260 = new lib.ylbjqyl01_00260();
	this.instance_260.parent = this;
	this.instance_260.setTransform(-5,0);

	this.instance_261 = new lib.ylbjqyl01_00261();
	this.instance_261.parent = this;
	this.instance_261.setTransform(-5,0);

	this.instance_262 = new lib.ylbjqyl01_00262();
	this.instance_262.parent = this;
	this.instance_262.setTransform(-5,0);

	this.instance_263 = new lib.ylbjqyl01_00263();
	this.instance_263.parent = this;
	this.instance_263.setTransform(-5,0);

	this.instance_264 = new lib.ylbjqyl01_00264();
	this.instance_264.parent = this;
	this.instance_264.setTransform(-5,0);

	this.instance_265 = new lib.ylbjqyl01_00265();
	this.instance_265.parent = this;
	this.instance_265.setTransform(-5,0);

	this.instance_266 = new lib.ylbjqyl01_00266();
	this.instance_266.parent = this;
	this.instance_266.setTransform(-5,0);

	this.instance_267 = new lib.ylbjqyl01_00267();
	this.instance_267.parent = this;
	this.instance_267.setTransform(-5,0);

	this.instance_268 = new lib.ylbjqyl01_00268();
	this.instance_268.parent = this;
	this.instance_268.setTransform(-5,0);

	this.instance_269 = new lib.ylbjqyl01_00269();
	this.instance_269.parent = this;
	this.instance_269.setTransform(-5,0);

	this.instance_270 = new lib.ylbjqyl01_00270();
	this.instance_270.parent = this;
	this.instance_270.setTransform(-5,0);

	this.instance_271 = new lib.ylbjqyl01_00271();
	this.instance_271.parent = this;
	this.instance_271.setTransform(-5,0);

	this.instance_272 = new lib.ylbjqyl01_00272();
	this.instance_272.parent = this;
	this.instance_272.setTransform(-5,0);

	this.instance_273 = new lib.ylbjqyl01_00273();
	this.instance_273.parent = this;
	this.instance_273.setTransform(-5,0);

	this.instance_274 = new lib.ylbjqyl01_00274();
	this.instance_274.parent = this;
	this.instance_274.setTransform(-5,0);

	this.instance_275 = new lib.ylbjqyl01_00275();
	this.instance_275.parent = this;
	this.instance_275.setTransform(-5,0);

	this.instance_276 = new lib.ylbjqyl01_00276();
	this.instance_276.parent = this;
	this.instance_276.setTransform(-5,0);

	this.instance_277 = new lib.ylbjqyl01_00277();
	this.instance_277.parent = this;
	this.instance_277.setTransform(-5,0);

	this.instance_278 = new lib.ylbjqyl01_00278();
	this.instance_278.parent = this;
	this.instance_278.setTransform(-5,0);

	this.instance_279 = new lib.ylbjqyl01_00279();
	this.instance_279.parent = this;
	this.instance_279.setTransform(-5,0);

	this.instance_280 = new lib.ylbjqyl01_00280();
	this.instance_280.parent = this;
	this.instance_280.setTransform(-5,0);

	this.instance_281 = new lib.ylbjqyl01_00281();
	this.instance_281.parent = this;
	this.instance_281.setTransform(-5,0);

	this.instance_282 = new lib.ylbjqyl01_00282();
	this.instance_282.parent = this;
	this.instance_282.setTransform(-5,0);

	this.instance_283 = new lib.ylbjqyl01_00283();
	this.instance_283.parent = this;
	this.instance_283.setTransform(-5,0);

	this.instance_284 = new lib.ylbjqyl01_00284();
	this.instance_284.parent = this;
	this.instance_284.setTransform(-5,0);

	this.instance_285 = new lib.ylbjqyl01_00285();
	this.instance_285.parent = this;
	this.instance_285.setTransform(-5,0);

	this.instance_286 = new lib.ylbjqyl01_00286();
	this.instance_286.parent = this;
	this.instance_286.setTransform(-5,0);

	this.instance_287 = new lib.ylbjqyl01_00287();
	this.instance_287.parent = this;
	this.instance_287.setTransform(-5,0);

	this.instance_288 = new lib.ylbjqyl01_00288();
	this.instance_288.parent = this;
	this.instance_288.setTransform(-5,0);

	this.instance_289 = new lib.ylbjqyl01_00289();
	this.instance_289.parent = this;
	this.instance_289.setTransform(-5,0);

	this.instance_290 = new lib.ylbjqyl01_00290();
	this.instance_290.parent = this;
	this.instance_290.setTransform(-5,0);

	this.instance_291 = new lib.ylbjqyl01_00291();
	this.instance_291.parent = this;
	this.instance_291.setTransform(-5,0);

	this.instance_292 = new lib.ylbjqyl01_00292();
	this.instance_292.parent = this;
	this.instance_292.setTransform(-5,0);

	this.instance_293 = new lib.ylbjqyl01_00293();
	this.instance_293.parent = this;
	this.instance_293.setTransform(-5,0);

	this.instance_294 = new lib.ylbjqyl01_00294();
	this.instance_294.parent = this;
	this.instance_294.setTransform(-5,0);

	this.instance_295 = new lib.ylbjqyl01_00295();
	this.instance_295.parent = this;
	this.instance_295.setTransform(-5,0);

	this.instance_296 = new lib.ylbjqyl01_00296();
	this.instance_296.parent = this;
	this.instance_296.setTransform(-5,0);

	this.instance_297 = new lib.ylbjqyl01_00297();
	this.instance_297.parent = this;
	this.instance_297.setTransform(-5,0);

	this.instance_298 = new lib.ylbjqyl01_00298();
	this.instance_298.parent = this;
	this.instance_298.setTransform(-5,0);

	this.instance_299 = new lib.ylbjqyl01_00299();
	this.instance_299.parent = this;
	this.instance_299.setTransform(-5,0);

	this.instance_300 = new lib.ylbjqyl01_00300();
	this.instance_300.parent = this;
	this.instance_300.setTransform(-5,0);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170,this.instance_171,this.instance_172,this.instance_173,this.instance_174,this.instance_175,this.instance_176,this.instance_177,this.instance_178,this.instance_179,this.instance_180,this.instance_181,this.instance_182,this.instance_183,this.instance_184,this.instance_185,this.instance_186,this.instance_187,this.instance_188,this.instance_189,this.instance_190,this.instance_191,this.instance_192,this.instance_193,this.instance_194,this.instance_195,this.instance_196,this.instance_197,this.instance_198,this.instance_199,this.instance_200,this.instance_201,this.instance_202,this.instance_203,this.instance_204,this.instance_205,this.instance_206,this.instance_207,this.instance_208,this.instance_209,this.instance_210,this.instance_211,this.instance_212,this.instance_213,this.instance_214,this.instance_215,this.instance_216,this.instance_217,this.instance_218,this.instance_219,this.instance_220,this.instance_221,this.instance_222,this.instance_223,this.instance_224,this.instance_225,this.instance_226,this.instance_227,this.instance_228,this.instance_229,this.instance_230,this.instance_231,this.instance_232,this.instance_233,this.instance_234,this.instance_235,this.instance_236,this.instance_237,this.instance_238,this.instance_239,this.instance_240,this.instance_241,this.instance_242,this.instance_243,this.instance_244,this.instance_245,this.instance_246,this.instance_247,this.instance_248,this.instance_249,this.instance_250,this.instance_251,this.instance_252,this.instance_253,this.instance_254,this.instance_255,this.instance_256,this.instance_257,this.instance_258,this.instance_259,this.instance_260,this.instance_261,this.instance_262,this.instance_263,this.instance_264,this.instance_265,this.instance_266,this.instance_267,this.instance_268,this.instance_269,this.instance_270,this.instance_271,this.instance_272,this.instance_273,this.instance_274,this.instance_275,this.instance_276,this.instance_277,this.instance_278,this.instance_279,this.instance_280,this.instance_281,this.instance_282,this.instance_283,this.instance_284,this.instance_285,this.instance_286,this.instance_287,this.instance_288,this.instance_289,this.instance_290,this.instance_291,this.instance_292,this.instance_293,this.instance_294,this.instance_295,this.instance_296,this.instance_297,this.instance_298,this.instance_299,this.instance_300];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},2).to({state:[{t:this.instance_65}]},2).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_70}]},2).to({state:[{t:this.instance_71}]},2).to({state:[{t:this.instance_72}]},2).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).to({state:[{t:this.instance_76}]},2).to({state:[{t:this.instance_77}]},2).to({state:[{t:this.instance_78}]},2).to({state:[{t:this.instance_79}]},2).to({state:[{t:this.instance_80}]},2).to({state:[{t:this.instance_81}]},2).to({state:[{t:this.instance_82}]},2).to({state:[{t:this.instance_83}]},2).to({state:[{t:this.instance_84}]},2).to({state:[{t:this.instance_85}]},2).to({state:[{t:this.instance_86}]},2).to({state:[{t:this.instance_87}]},2).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},2).to({state:[{t:this.instance_90}]},2).to({state:[{t:this.instance_91}]},2).to({state:[{t:this.instance_92}]},2).to({state:[{t:this.instance_93}]},2).to({state:[{t:this.instance_94}]},2).to({state:[{t:this.instance_95}]},2).to({state:[{t:this.instance_96}]},2).to({state:[{t:this.instance_97}]},2).to({state:[{t:this.instance_98}]},2).to({state:[{t:this.instance_99}]},2).to({state:[{t:this.instance_100}]},2).to({state:[{t:this.instance_101}]},2).to({state:[{t:this.instance_102}]},2).to({state:[{t:this.instance_103}]},2).to({state:[{t:this.instance_104}]},2).to({state:[{t:this.instance_105}]},2).to({state:[{t:this.instance_106}]},2).to({state:[{t:this.instance_107}]},2).to({state:[{t:this.instance_108}]},2).to({state:[{t:this.instance_109}]},2).to({state:[{t:this.instance_110}]},2).to({state:[{t:this.instance_111}]},2).to({state:[{t:this.instance_112}]},2).to({state:[{t:this.instance_113}]},2).to({state:[{t:this.instance_114}]},2).to({state:[{t:this.instance_115}]},2).to({state:[{t:this.instance_116}]},2).to({state:[{t:this.instance_117}]},2).to({state:[{t:this.instance_118}]},2).to({state:[{t:this.instance_119}]},2).to({state:[{t:this.instance_120}]},2).to({state:[{t:this.instance_121}]},2).to({state:[{t:this.instance_122}]},2).to({state:[{t:this.instance_123}]},2).to({state:[{t:this.instance_124}]},2).to({state:[{t:this.instance_125}]},2).to({state:[{t:this.instance_126}]},2).to({state:[{t:this.instance_127}]},2).to({state:[{t:this.instance_128}]},2).to({state:[{t:this.instance_129}]},2).to({state:[{t:this.instance_130}]},2).to({state:[{t:this.instance_131}]},2).to({state:[{t:this.instance_132}]},2).to({state:[{t:this.instance_133}]},2).to({state:[{t:this.instance_134}]},2).to({state:[{t:this.instance_135}]},2).to({state:[{t:this.instance_136}]},2).to({state:[{t:this.instance_137}]},2).to({state:[{t:this.instance_138}]},2).to({state:[{t:this.instance_139}]},2).to({state:[{t:this.instance_140}]},2).to({state:[{t:this.instance_141}]},2).to({state:[{t:this.instance_142}]},2).to({state:[{t:this.instance_143}]},2).to({state:[{t:this.instance_144}]},2).to({state:[{t:this.instance_145}]},2).to({state:[{t:this.instance_146}]},2).to({state:[{t:this.instance_147}]},2).to({state:[{t:this.instance_148}]},2).to({state:[{t:this.instance_149}]},2).to({state:[{t:this.instance_150}]},2).to({state:[{t:this.instance_151}]},2).to({state:[{t:this.instance_152}]},2).to({state:[{t:this.instance_153}]},2).to({state:[{t:this.instance_154}]},2).to({state:[{t:this.instance_155}]},2).to({state:[{t:this.instance_156}]},2).to({state:[{t:this.instance_157}]},2).to({state:[{t:this.instance_158}]},2).to({state:[{t:this.instance_159}]},2).to({state:[{t:this.instance_160}]},2).to({state:[{t:this.instance_161}]},2).to({state:[{t:this.instance_162}]},2).to({state:[{t:this.instance_163}]},2).to({state:[{t:this.instance_164}]},2).to({state:[{t:this.instance_165}]},2).to({state:[{t:this.instance_166}]},2).to({state:[{t:this.instance_167}]},2).to({state:[{t:this.instance_168}]},2).to({state:[{t:this.instance_169}]},2).to({state:[{t:this.instance_170}]},2).to({state:[{t:this.instance_171}]},2).to({state:[{t:this.instance_172}]},2).to({state:[{t:this.instance_173}]},2).to({state:[{t:this.instance_174}]},2).to({state:[{t:this.instance_175}]},2).to({state:[{t:this.instance_176}]},2).to({state:[{t:this.instance_177}]},2).to({state:[{t:this.instance_178}]},2).to({state:[{t:this.instance_179}]},2).to({state:[{t:this.instance_180}]},2).to({state:[{t:this.instance_181}]},2).to({state:[{t:this.instance_182}]},2).to({state:[{t:this.instance_183}]},2).to({state:[{t:this.instance_184}]},2).to({state:[{t:this.instance_185}]},2).to({state:[{t:this.instance_186}]},2).to({state:[{t:this.instance_187}]},2).to({state:[{t:this.instance_188}]},2).to({state:[{t:this.instance_189}]},2).to({state:[{t:this.instance_190}]},2).to({state:[{t:this.instance_191}]},2).to({state:[{t:this.instance_192}]},2).to({state:[{t:this.instance_193}]},2).to({state:[{t:this.instance_194}]},2).to({state:[{t:this.instance_195}]},2).to({state:[{t:this.instance_196}]},2).to({state:[{t:this.instance_197}]},2).to({state:[{t:this.instance_198}]},2).to({state:[{t:this.instance_199}]},2).to({state:[{t:this.instance_200}]},2).to({state:[{t:this.instance_201}]},2).to({state:[{t:this.instance_202}]},2).to({state:[{t:this.instance_203}]},2).to({state:[{t:this.instance_204}]},2).to({state:[{t:this.instance_205}]},2).to({state:[{t:this.instance_206}]},2).to({state:[{t:this.instance_207}]},2).to({state:[{t:this.instance_208}]},2).to({state:[{t:this.instance_209}]},2).to({state:[{t:this.instance_210}]},2).to({state:[{t:this.instance_211}]},2).to({state:[{t:this.instance_212}]},2).to({state:[{t:this.instance_213}]},2).to({state:[{t:this.instance_214}]},2).to({state:[{t:this.instance_215}]},2).to({state:[{t:this.instance_216}]},2).to({state:[{t:this.instance_217}]},2).to({state:[{t:this.instance_218}]},2).to({state:[{t:this.instance_219}]},2).to({state:[{t:this.instance_220}]},2).to({state:[{t:this.instance_221}]},2).to({state:[{t:this.instance_222}]},2).to({state:[{t:this.instance_223}]},2).to({state:[{t:this.instance_224}]},2).to({state:[{t:this.instance_225}]},2).to({state:[{t:this.instance_226}]},2).to({state:[{t:this.instance_227}]},2).to({state:[{t:this.instance_228}]},2).to({state:[{t:this.instance_229}]},2).to({state:[{t:this.instance_230}]},2).to({state:[{t:this.instance_231}]},2).to({state:[{t:this.instance_232}]},2).to({state:[{t:this.instance_233}]},2).to({state:[{t:this.instance_234}]},2).to({state:[{t:this.instance_235}]},2).to({state:[{t:this.instance_236}]},2).to({state:[{t:this.instance_237}]},2).to({state:[{t:this.instance_238}]},2).to({state:[{t:this.instance_239}]},2).to({state:[{t:this.instance_240}]},2).to({state:[{t:this.instance_241}]},2).to({state:[{t:this.instance_242}]},2).to({state:[{t:this.instance_243}]},2).to({state:[{t:this.instance_244}]},2).to({state:[{t:this.instance_245}]},2).to({state:[{t:this.instance_246}]},2).to({state:[{t:this.instance_247}]},2).to({state:[{t:this.instance_248}]},2).to({state:[{t:this.instance_249}]},2).to({state:[{t:this.instance_250}]},2).to({state:[{t:this.instance_251}]},2).to({state:[{t:this.instance_252}]},2).to({state:[{t:this.instance_253}]},2).to({state:[{t:this.instance_254}]},2).to({state:[{t:this.instance_255}]},2).to({state:[{t:this.instance_256}]},2).to({state:[{t:this.instance_257}]},2).to({state:[{t:this.instance_258}]},2).to({state:[{t:this.instance_259}]},2).to({state:[{t:this.instance_260}]},2).to({state:[{t:this.instance_261}]},2).to({state:[{t:this.instance_262}]},2).to({state:[{t:this.instance_263}]},2).to({state:[{t:this.instance_264}]},2).to({state:[{t:this.instance_265}]},2).to({state:[{t:this.instance_266}]},2).to({state:[{t:this.instance_267}]},2).to({state:[{t:this.instance_268}]},2).to({state:[{t:this.instance_269}]},2).to({state:[{t:this.instance_270}]},2).to({state:[{t:this.instance_271}]},2).to({state:[{t:this.instance_272}]},2).to({state:[{t:this.instance_273}]},2).to({state:[{t:this.instance_274}]},2).to({state:[{t:this.instance_275}]},2).to({state:[{t:this.instance_276}]},2).to({state:[{t:this.instance_277}]},2).to({state:[{t:this.instance_278}]},2).to({state:[{t:this.instance_279}]},2).to({state:[{t:this.instance_280}]},2).to({state:[{t:this.instance_281}]},2).to({state:[{t:this.instance_282}]},2).to({state:[{t:this.instance_283}]},2).to({state:[{t:this.instance_284}]},2).to({state:[{t:this.instance_285}]},2).to({state:[{t:this.instance_286}]},2).to({state:[{t:this.instance_287}]},2).to({state:[{t:this.instance_288}]},2).to({state:[{t:this.instance_289}]},2).to({state:[{t:this.instance_290}]},2).to({state:[{t:this.instance_291}]},2).to({state:[{t:this.instance_292}]},2).to({state:[{t:this.instance_293}]},2).to({state:[{t:this.instance_294}]},2).to({state:[{t:this.instance_295}]},2).to({state:[{t:this.instance_296}]},2).to({state:[{t:this.instance_297}]},2).to({state:[{t:this.instance_298}]},2).to({state:[{t:this.instance_299}]},2).to({state:[{t:this.instance_300}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,692.5,582.5);


(lib.page4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s4_1.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_611 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(602).call(this.frame_611).wait(1));

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EAjSAcKIAAsEMBCDAAAIAAMEg");
	var mask_graphics_10 = new cjs.Graphics().p("EAjSAcWIAAscMBCDAAAIAAMcg");
	var mask_graphics_11 = new cjs.Graphics().p("EAjSAcjIAAs2MBCDAAAIAAM2g");
	var mask_graphics_12 = new cjs.Graphics().p("EAjSAcvIAAtOMBCDAAAIAANOg");
	var mask_graphics_13 = new cjs.Graphics().p("EAjSAc8IAAtoMBCDAAAIAANog");
	var mask_graphics_14 = new cjs.Graphics().p("EAjSAdJIAAuCMBCDAAAIAAOCg");
	var mask_graphics_15 = new cjs.Graphics().p("EAjSAdVIAAuaMBCDAAAIAAOag");
	var mask_graphics_16 = new cjs.Graphics().p("EAjSAdiIAAu0MBCDAAAIAAO0g");
	var mask_graphics_17 = new cjs.Graphics().p("EAjSAdvIAAvOMBCDAAAIAAPOg");
	var mask_graphics_18 = new cjs.Graphics().p("EAjSAd7IAAvmMBCDAAAIAAPmg");
	var mask_graphics_19 = new cjs.Graphics().p("EAjSAeIIAAwAMBCDAAAIAAQAg");
	var mask_graphics_20 = new cjs.Graphics().p("EAjSAeVIAAwZMBCDAAAIAAQZg");
	var mask_graphics_21 = new cjs.Graphics().p("EAjSAehIAAwyMBCDAAAIAAQyg");
	var mask_graphics_22 = new cjs.Graphics().p("EAjSAeuIAAxMMBCDAAAIAARMg");
	var mask_graphics_23 = new cjs.Graphics().p("EAjSAe7IAAxlMBCDAAAIAARlg");
	var mask_graphics_24 = new cjs.Graphics().p("EAjSAfHIAAx+MBCDAAAIAAR+g");
	var mask_graphics_25 = new cjs.Graphics().p("EAjSAfUIAAyYMBCDAAAIAASYg");
	var mask_graphics_26 = new cjs.Graphics().p("EAjSAfhIAAyxMBCDAAAIAASxg");
	var mask_graphics_27 = new cjs.Graphics().p("EAjSAftIAAzKMBCDAAAIAATKg");
	var mask_graphics_28 = new cjs.Graphics().p("EAjSAf6IAAzjMBCDAAAIAATjg");
	var mask_graphics_29 = new cjs.Graphics().p("EAjSAgHIAAz9MBCDAAAIAAT9g");
	var mask_graphics_30 = new cjs.Graphics().p("EAjSAgTIAA0WMBCDAAAIAAUWg");
	var mask_graphics_31 = new cjs.Graphics().p("EAjSAggIAA0vMBCDAAAIAAUvg");
	var mask_graphics_32 = new cjs.Graphics().p("EAjSAgtIAA1JMBCDAAAIAAVJg");
	var mask_graphics_33 = new cjs.Graphics().p("EAjSAg5IAA1iMBCDAAAIAAVig");
	var mask_graphics_34 = new cjs.Graphics().p("EAjSAhGIAA18MBCDAAAIAAV8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:648.5,y:180.2}).wait(1).to({graphics:mask_graphics_10,x:648.5,y:181.4}).wait(1).to({graphics:mask_graphics_11,x:648.5,y:182.7}).wait(1).to({graphics:mask_graphics_12,x:648.5,y:183.9}).wait(1).to({graphics:mask_graphics_13,x:648.5,y:185.2}).wait(1).to({graphics:mask_graphics_14,x:648.5,y:186.5}).wait(1).to({graphics:mask_graphics_15,x:648.5,y:187.7}).wait(1).to({graphics:mask_graphics_16,x:648.5,y:189}).wait(1).to({graphics:mask_graphics_17,x:648.5,y:190.3}).wait(1).to({graphics:mask_graphics_18,x:648.5,y:191.5}).wait(1).to({graphics:mask_graphics_19,x:648.5,y:192.8}).wait(1).to({graphics:mask_graphics_20,x:648.5,y:194.1}).wait(1).to({graphics:mask_graphics_21,x:648.5,y:195.3}).wait(1).to({graphics:mask_graphics_22,x:648.5,y:196.6}).wait(1).to({graphics:mask_graphics_23,x:648.5,y:197.9}).wait(1).to({graphics:mask_graphics_24,x:648.5,y:199.1}).wait(1).to({graphics:mask_graphics_25,x:648.5,y:200.4}).wait(1).to({graphics:mask_graphics_26,x:648.5,y:201.7}).wait(1).to({graphics:mask_graphics_27,x:648.5,y:202.9}).wait(1).to({graphics:mask_graphics_28,x:648.5,y:204.2}).wait(1).to({graphics:mask_graphics_29,x:648.5,y:205.5}).wait(1).to({graphics:mask_graphics_30,x:648.5,y:206.7}).wait(1).to({graphics:mask_graphics_31,x:648.5,y:208}).wait(1).to({graphics:mask_graphics_32,x:648.5,y:209.3}).wait(1).to({graphics:mask_graphics_33,x:648.5,y:210.5}).wait(1).to({graphics:mask_graphics_34,x:648.5,y:211.8}).wait(578));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858C91").s().p("AgoA2IAMABQAGAAABgCQABgCAAgDIAAgEIgaAAIAAAcIgSAAIAAhYIA/AAIAABEQAAAJgEAFQgDAEgGABIgVABIgFgSgAguAfIAaAAIAAgJIgaAAgAguAIIAaAAIAAgIIgaAAgAAfBGQgWABAAgXIAAgvIASAAIAAATQARgIAOgJIANAPIgsAUIAAAHQAAAJAJAAIAGAAQAGAAADgDQACgCABgSIATAIQgDARgDAEQgCAFgFADQgGACgHAAgAAggBQgXgBAAgVIAAgvIASAAIAAAXQATgJAMgHIANAPQgQAIgcAKIAAAEQAAAJAKgBIAFAAQAIABABgFIADgQQALAGAHACIgEAQQgCAGgFAEQgGACgIABgAgKgZIg5AFIgFgRQAKgFATgdIATAHIgWAaIAbgBIgHgLIAOgIIAUAfIgOAJg");
	this.shape.setTransform(1258.9,397.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_1.setTransform(1243.6,397.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858C91").s().p("AAKAxIAWABIAHgBIAEgCIACgEIABgSIABgdIAAgXIgZAAIgLAUQgGgEgKgFIAABWIgUAAIAAgKIgVAAIAAALIgVAAIAAh2IAQAAIAGgXIAWADIgHAUIAZAAIAAAdQALgUAKggIAUAFIgGATIAlAAIgBBTQgBAOgBAFQgCAGgEADQgEAEgHABQgIABgYAAQgCgNgDgJgAguApIAVAAIAAgZIgVAAgAgugDIAVAAIAAgZIgVAAgAAAACIARgLQALALAMATIgTAMQgLgSgKgNg");
	this.shape_2.setTransform(1229,397.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858C91").s().p("AAGBIIAAgYIgXAAIAAgQQgGAJgGAHIgLgQIAAAoIgRAAIAAhBIgKAQIgFgaQAMgWAMguIATAFQgFATgGAQIAAA6QAXgYAMggIgaAAIAAgSIAlAAIAAgYIATAAIAAAYIAqAAIAAASIggAAQALAeAbAYIgNAVIgLgOIAAAQIgYAAIAAAYgAAZAdIAWAAQgOgUgIgdgAgPAdIAVAAIAAgyQgHAbgOAXg");
	this.shape_3.setTransform(1213.9,397.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858C91").s().p("AgKA6IAAAPIgSAAIAAg9IgKAPIgCgHIgNA0IgTgHQAIgYAGghIAQAHIgDgKQASgXAGgVIgPAAIAAgSIAtAAIgFgLIAWgEIAHAPIAmAAIAAASIg5AAIAPAEIgDAHIApAAIAAAQQgEAegSAVQALAIARAGIgLATQgTgIgMgLQgMAKgTAKIgKgPgAgKA4QARgJAKgIQgHgJgGgOIgGALIgIgQgAAPgCQAGARAKALQAOgQADgUIgdAAIgEAIgAgBglIgJASIAAAZQANgVAJgYIgXAAgAATgEIAMgGIAKARIgMAHIgKgSgAhJgQIAMgPIAXASIgPAPIgUgSgAhIg5IAMgNIAXASIgOAPIgVgUg");
	this.shape_4.setTransform(1199,397.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858C91").s().p("AhEA5QAugcAGgwIgxAAIAAgUIAaAAIgSgVIAPgLIAUATIgNANIAVAAIACggIAVAAIgCAgIA+AAIgDA4QgCAcgBAFQgBAFgEAFQgEAFgGACQgGADgPAAIgXAAQgBgIgEgOIAcABQAIAAADgCQADgBACgDIACgUIADgqIgrAAQgBAMgEALIAOgMIAYAVIgPAPQgNgOgKgJQgLAqgoAaIgRgQg");
	this.shape_5.setTransform(1183.6,397.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858C91").s().p("AgzBHIAAhGQgHAKgIAJIgGgZQAXgdANgkIAVAGQgHARgIAPIAABngAAaBGQgaAAAAgaIAAgUIgRALIgNgTQAQgJAOgJIAAhEIAVAAIAAAzQASgOAOgRIASAOQgVAYgdAUIAAAeQAAALAKAAIAGAAQAIAAACgFQACgFACgYIAWAHIgFAeQgCAJgHAEQgHAFgOAAg");
	this.shape_6.setTransform(1168.9,397.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858C91").s().p("AgEAsIAJgQIAaANIARgUIgxAAIAAgOIADgPIgMAAIAAgQIAQAAIADgMIgNAAIAAgRIARAAIADgSIAVAAIgDASIAiAAIAAARIgmAAIgDAMIAuAAIAAAQIgyAAIgEANIAzAAIAAAPIgXAdIANAHIgLARQgbgQgagNgAgrBIIAAgbIgbADIgCgTIAdgCIAAgOIgcAAIAAgRQAGgOAEgSIgKAAIAAgRIAOAAIADgSIATABIgEARIAdAAIAAARIghAAIgKAhIAKAAIAAgZIASAAIAAAZIAQAAIAAAQIgQAAIAAAMIASgCIgBASIgRACIAAAdg");
	this.shape_7.setTransform(1153.9,397.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858C91").s().p("AgoA2IAMABQAGAAABgCQABgCAAgDIAAgEIgaAAIAAAcIgSAAIAAhYIA/AAIAABEQAAAJgEAFQgDAEgGABIgVABIgFgSgAguAfIAaAAIAAgJIgaAAgAguAIIAaAAIAAgIIgaAAgAAfBGQgWABAAgXIAAgvIASAAIAAATQARgIAOgJIANAPIgsAUIAAAHQAAAJAJAAIAGAAQAGAAADgDQACgCABgSIATAIQgDARgDAEQgCAFgFADQgGACgHAAgAAggBQgXgBAAgVIAAgvIASAAIAAAXQATgJAMgHIANAPQgQAIgcAKIAAAEQAAAJAKgBIAFAAQAIABABgFIADgQQALAGAHACIgEAQQgCAGgFAEQgGACgIABgAgKgZIg5AFIgFgRQAKgFATgdIATAHIgWAaIAbgBIgHgLIAOgIIAUAfIgOAJg");
	this.shape_8.setTransform(1138.9,397.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858C91").s().p("AAiA0IgLAMIgIgMIAAAPIgPAAIAAgxIgGAAQgCAhgLATQgHgHgIgFQALgQACgYIgIAAIAAgRIgDAFIgGgGIAABHIgRAAIAAhBQgEARgHAOIgGgaQAJgRAHgVIgOAAIAAgSIAPAAIAAgaIARAAIAAAaIALAAIAAASIgLAAIAAAGIAQAMIgHAKIAIAAIAAgZIAPAAIAAAZIAGAAIAAgZIAPAAIAAAZIAHAAIAAARIgHAAIAAAcQAHgHAGgIQgEgXAAgnIgvAAIAAgRIAvAAIAAgXIASAAIAAAXIAMAAIgLgQIAMgHIAOAQIgLAHIAMAAIAAARIgcAAIABAmQAHgOAEgRIAQAEQgIAegPAYQADAQAEAAQAEAAACgZIANAHQgCAXgEAJQgFAIgIAAQgNAAgHgUg");
	this.shape_9.setTransform(1123.9,397.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AgeA2QAMgNAEgMQAEgNgBgfIAAgyIA9AAIAABuQAAAFADAAIADgBIACgJIAAgaIAPAGQgCAfgBAGQgCAHgDACQgEACgGAAIgMAAQgOAAAAgRIAAhfIgVAAIAAApQAAAggFAOQgEAPgNAOIgQgSgAg2BHIAAgzQgFALgHAKIgGgaQAMgSAFgXIgQAAIAAgTIARAAIAAgaIAUAAIAAAaIARAAIAAATIgRAAIAAAOIAUAMIgKAQIgKgIIAAA/g");
	this.shape_10.setTransform(1108.9,397.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AAKAxIAWABIAHgBIAEgCIACgEIABgSIABgdIAAgXIgZAAIgLAUQgGgEgKgFIAABWIgUAAIAAgKIgVAAIAAALIgVAAIAAh2IAQAAIAGgXIAWADIgHAUIAZAAIAAAdQALgUAKggIAUAFIgGATIAlAAIgBBTQgBAOgBAFQgCAGgEADQgEAEgHABQgIABgYAAQgCgNgDgJgAguApIAVAAIAAgZIgVAAgAgugDIAVAAIAAgZIgVAAgAAAACIARgLQALALAMATIgTAMQgLgSgKgNg");
	this.shape_11.setTransform(1094,397.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AgeA2QAMgNAEgMQADgNAAgfIAAgyIA9AAIAABuQAAAFADAAIADgBIACgJIABgaIAOAGQgBAfgCAGQgCAHgEACQgDACgHAAIgLAAQgOAAAAgRIAAhfIgVAAIAAApQAAAggFAOQgEAPgOAOIgPgSgAg2BHIAAgzQgFALgGAKIgHgaQAMgSAFgXIgQAAIAAgTIARAAIAAgaIATAAIAAAaIARAAIAAATIgRAAIAAAOIAUAMIgJAQIgLgIIAAA/g");
	this.shape_12.setTransform(1078.9,397.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_13.setTransform(1063.6,397.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("Ag0A2QAZgHATgJQgKgKgIgNQgSAbgVATIgHgYQAcgbAPgjIglAAIAAgRIAHgaIAUADIgGAWIAVAAIAHgdIAUACIgFAbIAoAAIgRgQIANgMIAXATIgJAJIAZAAIAAASIhRAAIgFAOIBGAAIAAAPQgLATgSAPQARAIAcAEIgMAVQgfgHgVgNQgUANgeAJIgLgTgAAJAcQAPgLAJgMIgrAAQAIANALAKg");
	this.shape_14.setTransform(1048.9,397.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AhIA0IAMAAQAEAAAAgHIAAgcIgOAEIgCgUIAQgCIAAgaIgPAAIAAgUIAPAAIAAgYIAUAAIAAAYIAMAAIAAAUIgMAAIAAAVIALgCIgBARIgKADIAAAoQAAAKgEAFQgGAFgVAAIgFgUgAAABFQgUAAAAgVIAAhxIBTAAIAABJIhAAAIAAAjQAAAHAHAAIAeAAQAEAAADgBIAEgDIADgKQACgIAAgIIAVAKQgEAagIAHQgHAGgNAAgAAfgJIAMAAIAAgmIgMAAgAgBgJIANAAIAAgmIgNAAg");
	this.shape_15.setTransform(1033.9,397.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AgOAUIAJgnIAUAAIgMAng");
	this.shape_16.setTransform(1014.8,403);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AAtBIIAAgHIhtAAIAAg3IAVAAIAAAkIAhAAIAAgwIgxAAIAAg4IAVAAIAAAlIAcAAIAAgyIAVAAIAAAyIAcAAIAAglIAVAAIAAA4IgxAAIAAAwIAiAAIAAgkIAUAAIAAA+g");
	this.shape_17.setTransform(1003.9,397.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AhIA3QANgUAAggIAAhHIB3AAIAABTIgCAIIAPAFIgCARQgEAVgTAAIgoAAQgTAAAAgVIAAghIgcAAQgBAigOAXIgSgOgAAIAsQAAAFAHAAIAbAAQAKAAAAgJIABgJQgDAEgHABQgHABgTAAQgBgIgDgKIAUABQAFAAACgIIggAAgAAIgFIAgAAIAAgOIggAAgAgngFIAcAAIAAgOIgcAAgAAIgkIAgAAIAAgPIggAAgAgngkIAcAAIAAgPIgcAAg");
	this.shape_18.setTransform(988.9,398.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AglA4QAcgSAAgnIAAgkIANAAIAAAsQgBAQgEAOIAIgHIAZAaIgQALQgIgLgKgNQgIAQgPANIgMgQgAg4BIIAAhHIgJAQIgEgfQAOgeAGgbIASAEIgIAbIAABwgAAkBHIgEgVIAPABQAGAAAAgKIAAhuIARAAIAAB1QAAALgDAFQgEAGgJAAIgMABIgGAAgAAgAnIAAhhIAOAAIAABhgAgeAdIAAhcIA2AAIAABbIgPAAIAAhMIgYAAIAABNg");
	this.shape_19.setTransform(973.6,397.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("AhFA5QAVgQAOgTIgSgQIAMgOIAQAMQAHgPADgSIgWAAQgKAagRAUQgGgOgEgGQAVgcAIgpIAUAEIgFAUIAiAAIAAASQgIBCgzAlIgPgQgAANBIIAAiPIAVAAIAAAuIAHgGQAUAWANAQIgRAOIgXggIAABTg");
	this.shape_20.setTransform(958.9,397.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858C91").s().p("AhHA3QAXgUAAgxIAAg3IAVAAIAAAjIAqAAIAAgmIAWAAIAAAmIAjAAIAAATIhjAAIAAATIBIAAIAABDIgWAAIAAgwIg1AAQgGAfgTATIgQgSg");
	this.shape_21.setTransform(943.8,397.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858C91").s().p("AATBIIAAhOIgcAAIAAgUIAcAAIAAgtIAVAAIAAAtIAdAAIAAAUIgdAAIAABOgAhEA5IAAh1IA1AAIAAB0IgSAAIAAgNIgRAAIAAAOgAgyAZIARAAIAAhCIgRAAg");
	this.shape_22.setTransform(929.2,397.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858C91").s().p("AAZAQQgHAZgaAeIgRgNIASgYQAMgRAEgUQAFgWgBguIAVAAQAAAcgCAVQAMA0AdAbIgSAPQgSgRgMgngAhIAzQATgaAFgWQAEgWAAg0IAVAAQAAAegCAVIAbAfIgOAOIgQgUQgGAhgYAgIgOgTg");
	this.shape_23.setTransform(913.9,397.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858C91").s().p("AhEBAQAKgaAIgeIAUAHIgRA4IgVgHgAAzBHIAAgKIg4AAIAAAKIgTAAIAAh4IAlAAIAAgVIASAAIAAAVIAnAAIAAB4gAAfAqIAUAAIAAgcIgUAAgAgFAqIASAAIAAgcIgSAAgAAfgCIAUAAIAAgbIgUAAgAgFgCIASAAIAAgbIgSAAgAhFgRIANgOQANAJALAJIgOAOQgJgIgOgKgAhDg5IANgNQALAHAOAMIgOAPIgYgVg");
	this.shape_24.setTransform(898.6,397.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858C91").s().p("AggA5IAAhxIBBAAIAAAUIgoAAIAAAdIAkAAIAAATIgkAAIAAAtg");
	this.shape_25.setTransform(1294.4,372.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#858C91").s().p("AgLA5IAAhdIghAAIAAgUIBYAAIAAAUIggAAIAABdg");
	this.shape_26.setTransform(1285,372.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#858C91").s().p("AAdA5IgJgaIgoAAIgIAaIgaAAIAphxIAcAAIAoBxgAgCgbIgNAnIAeAAIgNgmIgCgKIAAAAIgCAJg");
	this.shape_27.setTransform(1274.5,372.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858C91").s().p("AgtBIIAAgqIgVAQIgGgXIAbgTIAAgQIgPAGQgGgXgGgQIAQgGIALAgIAAg0IATAAIAACPgAAOBIIgEgTIARABQAHAAADgCQACgCAAgFIAAgUIghAAIAOAPIgQANQgIgNgIgHIAKgIIgUAAIAAgRIA9AAIAAgPIAUAAIAAAPIAOAAIAAARIgOAAIAAAcQAAAIgFAFQgFAEgKABIgPABIgKAAgAgWgHQATgEANgFIgKgLIANgKIAOANQANgHAIgKIgoAAQgIAKgKAHIgNgMQATgOAMgVIAVACIgIALIAwAAIAAATQgOAVgUAKQgTAIgbAHIgLgOg");
	this.shape_28.setTransform(1261.3,372.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_29.setTransform(1246.3,373);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#858C91").s().p("AgfAzIAQABQAIAAAAgJIAAgsIgVAAIAAACIgUAAIAAgXIgPAKIgKgUQAUgIAQgNIgfAAIAAgQICKAAIAAAQIhTAAIgJAKIBOAAIAAAqIgrAAIAAABQAGAKAHAIQASgJAOgJIAMAPIgdAOQAOALATAEIgNAUQgegMgSgYIAAAUQAAAUgSABIgWABIgEgTgAgcgPIBBAAIAAgOIhBAAgAhIAvQAYgJANgPIgfAAIAAgQIA0AAIAAAPQgOAcggAPIgMgSg");
	this.shape_30.setTransform(1231.1,373.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#858C91").s().p("AgOAUIAJgnIAUAAIgMAng");
	this.shape_31.setTransform(1211.9,378.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#858C91").s().p("AgQBEIAAhyIg2AAIAAgVICNAAIAAAVIhAAAIAAAdIANgNQAYARAXASIgPASQgZgWgUgOIAABRg");
	this.shape_32.setTransform(1200.9,373.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858C91").s().p("AhCA5QALgQAAgpIAAhEIB7AAIAAByQAAAJgFAFQgEAFgJABIgXABIgGgWIAQABQAKAAAAgJIAAgNIgfAAIAAApIgTAAIAAgpIggAAQgCAggKANQgKgHgJgFgAAQAFIAfAAIAAgRIgfAAgAgjAFIAgAAIAAgRIggAAgAAQgfIAfAAIAAgSIgfAAgAgjgfIAgAAIAAgSIggAAg");
	this.shape_33.setTransform(1185.5,373.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#858C91").s().p("AAEBIIAAhlIgEAAQgIAUgMAOIgLgSQAQgZAKghIASAEIgGATIBBAAIAAATIgvAAIAAASIAnAAIAAARIgnAAIAAASIArAAIAAATIgrAAIAAAdgAg2BIIAAhGIgMATIgGgaQASgcALglIAUAFQgFAPgGAOIAABsg");
	this.shape_34.setTransform(1170.7,372.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#858C91").s().p("AAJAxIAYABIAFgBIAFgCIACgEIABgSIAAgdIABgXIgaAAIgKAUQgHgEgJgFIAABWIgVAAIAAgKIgUAAIAAALIgUAAIAAh2IAPAAIAGgXIAVADIgGAUIAZAAIAAAdQALgUALggIATAFIgGATIAmAAIgCBTQgBAOgCAFQgBAGgFADQgDAEgIABQgGABgZAAQgCgNgEgJgAguApIAUAAIAAgZIgUAAgAgugDIAUAAIAAgZIgUAAgAAAACIARgLQALALALATIgSAMQgLgSgKgNg");
	this.shape_35.setTransform(1155.7,372.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjIgRgTg");
	this.shape_36.setTransform(1140.1,373);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858C91").s().p("AgIBHQgZAAAAgZIAAhTIAWAAIAABMQAAANAMAAIAIAAQAGAAADgCQAEgDABgEIADgVIAWAIIgEATQgDAMgEADQgDADgGACQgFACgIAAgAhIAiQAIgbAIgiIAUAEQgGAigLAegAAigRIATgIQAMAYAIAXIgUAJQgIgYgLgYgAgRg7IARgLQALAQAPAWIgTAMQgMgWgMgRg");
	this.shape_37.setTransform(1125.4,372.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAFgJIgxAAIAAgrIAUAAIAAAeIBEAAIgcgMIggALIgGgMIAVgGIgTgHIAHgKIAdALQANgFALgGIhhAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAKAAIAAgeIASAAIAAArIg0AAIgGAJIA/AAIAAAnQAAAJgDAFQgCAEgHABQgGABgXgBIgEgPIAIAAIgEgFQgpABgPADIgHgOQAGgCAIgMIgSAAIAAAtgAArAxIgKAIQAJAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgYIgVAAIATAWgAgPAnIAdgBIgHgHIAGgEIgTAAIgJAMg");
	this.shape_38.setTransform(1110.3,372.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#858C91").s().p("Ag0BJIAAg1IgLALIgIgXQAWgTAOgYIggAAIAAgUIApAAIAGgRIAUACIgDAPIBLAAIAAAUIhTAAQgJASgMAQIAABKgAgbBCIAAgTIAoAAIAAghIggAAIAAgTIAgAAIAAgaIAUAAIAAAaIAhAAIAAATIghAAIAAAhIAnAAIAAATg");
	this.shape_39.setTransform(1095.1,372.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858C91").s().p("AgOAUIAJgnIAUAAIgMAng");
	this.shape_40.setTransform(1076,378.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#858C91").s().p("AgEArIAJgPIAaANIARgUIgxAAIAAgOIADgPIgMAAIAAgPIAQAAIADgOIgNAAIAAgQIARAAIADgSIAVAAIgDASIAiAAIAAAQIgmAAIgDAOIAuAAIAAAPIgyAAIgEANIAzAAIAAAPIgXAeIANAGIgLAQQgbgPgagOgAgrBIIAAgbIgbAEIgCgUIAdgDIAAgNIgcAAIAAgQQAGgPAEgSIgKAAIAAgRIAOAAIADgTIATACIgEARIAdAAIAAARIghAAIgKAhIAKAAIAAgZIASAAIAAAZIAQAAIAAAQIgQAAIAAAMIASgCIgBASIgRACIAAAdg");
	this.shape_41.setTransform(1065,373);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#858C91").s().p("AgTA9QAIgMADgMQADgMAAgZIAPAAQAAASgCAOQAGAIAHAEIAAg3IgcAAIAAgKIgJgIIgbAAIAAAQIAdAAIgCArQgBAVgDAGQgCAFgDADQgEADgTAAIgEgRQgEAMgGAJIgKgVQAMgVAAghIAAgaIgKAAIAAgTIAXAAIgIgSIASgGIAJAVIgIADIAWAAIAAAMQAMgPAHgVIATAFIgFALIA1AAIAAARIg+AAIgIAMIBFAAIAAAQIgJARIgRgGIAGgLIgMAAIAAAWIAcAAIAAAQIgcAAIAAAYIAiAAIgDASIgbAAQgQAAgJgFQgIgFgGgHQgEAMgFAJIgOgMgAgzAxIALAAQAGAAABgIIABglIgLAAQgBAagHATg");
	this.shape_42.setTransform(1049.9,372.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
	this.shape_43.setTransform(1034.8,373.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#858C91").s().p("AhHA2QAUgSAFgdIgYAAIAAgRIAZAAIAAgYIgEAAQgFAMgHALQgFgJgGgIQALgUAFgYIASAEIgFAQIAeAAIAAASIgOAAIAAAYIASAAIAAARIgTAAIgBAIIAXAfIAAhvIBOAAIAAASIg8AAIAAAUIA3AAIAAA4Ig3AAIAAAUIA9AAIAAATIhPAAIAAgTIgNALIgQgYQgJAVgQAQIgLgTgAAMALIAkAAIAAgUIgkAAg");
	this.shape_44.setTransform(1019.7,372.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgLgKgPIgKAAIAAgRIBmAAIAAAQQgLAPgQAMQAVAGAeABIgLAWQglgEgZgNQgZAMgkAGQgFgJgGgKgAABAiQAOgIALgJIgwAAQAKAJANAIgAAdgVIAKgNQAQAJASANIgNAOIgfgXgAhIgNQASgKAPgMIANANQgRANgSAKIgLgOgAAIgEIAAghIgPAAIAAAhIgTAAIAAghIgrAAIAAgRIA7AAIgFgNIAUgFIAHASIA5AAIAAARIgqAAIAAAhg");
	this.shape_45.setTransform(1004.6,372.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjQgHgKgKgJg");
	this.shape_46.setTransform(989.1,373);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#858C91").s().p("AgKA6IAAAPIgSAAIAAg+IgLAQIgCgHIgMA0IgTgHQAIgYAGggIARAHIgEgMQARgWAHgVIgOAAIAAgSIAsAAIgGgLIAXgEIAHAPIAnAAIAAASIg7AAIAQAEIgCAIIAoAAIAAAPQgFAegRAVQAMAIARAGIgLAUQgUgKgNgKQgLAKgSAKIgLgPgAgKA4QAQgJAMgIQgIgKgHgNIgGALIgHgRgAAOgBQAHAQAKAMQAOgRADgUIgdAAIgFAJgAgCgkIgIARIAAAYQANgTAJgZIgXAAgAATgEIAMgFIAKARIgMAFIgKgRgAhIgQIAMgPIAVASIgNAPIgUgSgAhIg5IAMgNIAWASIgNAPIgVgUg");
	this.shape_47.setTransform(974.5,372.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_48.setTransform(959,372.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#858C91").s().p("AgKBIIAAgvIgZAAIAAAlIgUAAIAAg1IAtAAIAAgJIAVAAIAAAJIAuAAIAAAgQAAAIgDAEQgEAEgGACQgGACgSAAIgEgTIAOABQAIAAAAgHIAAgLIgbAAIAAAvgAAxAIIAAgNIhhAAIAAANIgUAAIAAgdICJAAIAAAdgAAcgZIAAgPIgSAAIAAAPIgSAAIAAgPIgSAAIAAAPIgUAAIAAgPIgZAAIAAgQIAZAAIAAgPIAUAAIAAAPIASAAIAAgPIASAAIAAAPIASAAIAAgPIATAAIAAAPIAZAAIAAAQIgZAAIAAAPg");
	this.shape_49.setTransform(944.2,372.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#858C91").s().p("AgeA3QAMgNAEgNQAEgOAAgeIAAgxIA8AAIAABtQAAAFADAAIADgBIABgKIABgZIAPAGQgCAegBAHQgCAGgEADQgDACgGAAIgMAAQgOAAAAgRIAAhfIgVAAIAAApQAAAfgFAPQgEAOgOAPIgPgRgAg2BIIAAg0QgFALgHAKIgGgaQAMgRAGgXIgRAAIAAgUIARAAIAAgaIAUAAIAAAaIARAAIAAAUIgRAAIAAANIATAMIgJAQIgKgHIAAA/g");
	this.shape_50.setTransform(929.1,372.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_51.setTransform(913.7,372.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#858C91").s().p("Ag0A2QAZgHATgJQgKgKgJgNQgQAbgWATIgHgYQAdgbAOgjIglAAIAAgRIAHgaIAUADIgGAWIAVAAIAHgdIAUACIgFAbIAoAAIgRgQIANgMIAXATIgJAJIAYAAIAAASIhQAAIgEAOIBGAAIAAAPQgLATgTAPQARAIAcAEIgMAVQgegHgWgNQgUANgdAJIgMgTgAAJAcQAQgLAIgMIgsAAQAJANALAKg");
	this.shape_52.setTransform(898.9,372.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(603));

	// 图层 1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333F48").s().p("Ag2CFIAAgfQgnAKgsAPIgIgqIAigIIAAhIIgcAAIAAgjIAcAAIAAg+IgcAAIAAglIBgAAIAAAlIgeAAIAAA+IAbAAIAAAjIgbAAIAAA/IAfgJQgBAVABATIBHAAIAAgZIhCAAIAAgiIBCAAIAAgVIhBAAIAAiXICoAAIAACXIhBAAIAAAVIBCAAIAAAiIhCAAIAAAZIBPAAIAAAigABDgMIAcAAIAAgdIgcAAgAABgMIAcAAIAAgdIgcAAgABDhHIAcAAIAAgcIgcAAgAABhHIAcAAIAAgcIgcAAg");
	this.shape_53.setTransform(995.9,307.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333F48").s().p("AiSBvQAegmAAhgIAAhzIEDAAIAAAhIhkAAIgLAXIBeAAIAAB6IhFAAIAAA5QAAASgJAJQgJAKgSAAQgTACgXgBQgDgUgFgRIgdAeIgegaQAggdAWgdIAhAVQgMAQgOAQIAbABQAPAAAAgNIAAgtIhIAAIAAh6IAxAAIAIgXIhMAAIAABYQAABpgkA0QgQgRgSgMgAgTAKIBrAAIAAgSIhrAAgAgTgiIBrAAIAAgSIhrAAgAA/A/IAegVQAaAbAcAhIgiAZQgXgggbggg");
	this.shape_54.setTransform(964.8,308.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333F48").s().p("AAICQIAAjLIgIAAQgSAogWAdQgJgQgOgVQAhgzAThCIAlAKIgMAkICEAAIAAAnIhhAAIAAAkIBQAAIAAAkIhQAAIAAAkIBXAAIAAAlIhXAAIAAA6gAhtCQIAAiMQgMAUgNATQgEgXgHgfQAkg4AWhLIAnAMQgKAdgLAcIAADZg");
	this.shape_55.setTransform(933.9,307.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333F48").s().p("AiOB9IAAgpIB2AAIAAinIhmAAIAAgqID9AAIAAAqIhnAAIAACnIB2AAIAAApg");
	this.shape_56.setTransform(902.9,308);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333F48").s().p("AgwB3IAAgcIhLAXIgHglIAfgHIAAhBIgaAAIAAggIAaAAIAAg3IgbAAIAAgiIBXAAIAAAiIgbAAIAAA3IAZAAIAAAgIgZAAIAAA4IAcgIQgBATABASIBAAAIAAgYIg7AAIAAgeIA7AAIAAgSIg5AAIAAiIICWAAIAACIIg7AAIAAASIA8AAIAAAeIg8AAIAAAYIBIAAIAAAdgAA8gLIAaAAIAAgZIgaAAgAAAgLIAaAAIAAgZIgaAAgAA8hAIAaAAIAAgZIgaAAgAAAhAIAaAAIAAgZIgaAAg");
	this.shape_57.setTransform(500.3,61.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333F48").s().p("AiDBkQAbgjAAhVIAAhpIDpAAIAAAfIhbAAIgJAUIBVAAIAABtIg/AAIAAA0QgBAQgHAIQgIAJgRABIgmABQgCgTgEgOIgbAbIgagYQAcgaAVgbIAdAUIgYAcIAZABQAOAAAAgLIAAgqIhCAAIAAhtIAtAAIAHgUIhEAAIAABOQgBBgggAtQgPgOgPgLgAgRAIIBfAAIAAgPIhfAAgAgRgfIBfAAIAAgQIhfAAgAA4A4IAcgTQAYAZAYAeIgeAWQgVgdgZgdg");
	this.shape_58.setTransform(472.3,62.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333F48").s().p("AAHCCIAAi3IgHAAQgQAkgVAaQgHgOgMgTQAdguARg7IAiAIIgLAhIB2AAIAAAjIhXAAIAAAgIBIAAIAAAgIhIAAIAAAhIBOAAIAAAhIhOAAIAAA1gAhiCCIAAh+QgLARgMARQgCgUgHgcQAggyAThDIAkAKQgJAbgKAYIAADEg");
	this.shape_59.setTransform(444.3,61.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333F48").s().p("Ah/BxIAAglIBqAAIAAiXIhcAAIAAglIDkAAIAAAlIheAAIAACXIBrAAIAAAlg");
	this.shape_60.setTransform(416.3,61.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333F48").s().p("AiCBiQANgPANgMIAAhMIgYAAIAAggIA5AAIAABvQASAVAnAAQBQAABBgCQgFARgEAPIiWgBQgngBgTgZIgdAhgAAMBZIAAgwQgTAYggAUQgKgOgMgMQAjgOAXgUIg0AAIAHhHIA8AAIAAgTIhDAAIAAgbIAoAAIgVgUIAagSQANANAPAQIgMAJIAlAAQAPgWAJgQIAgAOIgSAYIAgAAIAABIIhDAAIAAATIBNAAQgBAzgFAJQgEAHgIAGQgIAFgpAAQgCgOgFgPQAOABAOABQAFAAADgDQADgDAAgFIABgOIgrAAIAABAgAgVgBIAhAAIAAgTIgeAAgAAuguIAiAAIAAgTIgiAAgAh9hvIAcgSQASAUASAaIgfAUQgOgXgTgZg");
	this.shape_61.setTransform(388.3,61.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333F48").s().p("AgkBQIASgdIA1AVIAighIhjAAIAAgdIAIgXIghAAIAAgeIArAAIAGgYIgjAAIAAgdIAqAAIAHggIAoAAIgIAgIBSAAIAAAdIhaAAIgHAYIBrAAIAAAeIh0AAIgIAXIBwAAIAAAbIgxAyIAhANIgTAgQgvgXhKgdgAhkCCIAAh6IgVAkIgJgwQAgg2AThJIAjAJQgJAggNAdIAAC/g");
	this.shape_62.setTransform(360.3,61.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333F48").s().p("Ah8BhQBRgwAChbIhFAAIAAgjIBHAAIACg1IAnAAIgBA1IB9AAIgDBNQgBAqgCAaQgCAbgOAOQgOAOgXABIg6AAQgDgXgFgSQAVACAbAAQAOAAAHgFQAHgFACgIQACgIACgeIAChHIhVAAQgDBuhbA/QgOgRgQgRg");
	this.shape_63.setTransform(331.5,61.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333F48").s().p("AgYBtQAIgIAGgJIhJAGQgQACgJAEIgQggQAOgLAUhHIghAAIAAgiIB6AAIAAAiIgzAAQgMAlgOAkIArgCIgSgxIAdgKIAbBDQASghAAhWIgaAAIAAgjIAaAAIABgtIAjAAIgBAtIBFAAIgDCUQAAAegCAIQgCAHgFAGQgGAGgJADQgJACgmABQgEgUgGgUIAdABQAIAAAEgDQAEgDABgFIACgpIABhVIgiAAQgBA6gEAZQgEAagLAaQgLAagRAUQgOgMgSgKgAhwhMIAAgiIBlAAIAAAig");
	this.shape_64.setTransform(303.7,61.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333F48").s().p("AgmAPIAAgdIBNAAIAAAdg");
	this.shape_65.setTransform(283.9,63.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333F48").s().p("ABTB8IAAgKIgqAAIAAAJIgfAAIAAhVIA3AAQgsgKgVgWQgRAWg1AKIA8AAIAABWIgeAAIAAgKIgqAAIAAAKIgeAAIAAhRIgMABQgCgMgEgPQBRgCASgTIhgAAIAAgbIBsAAIACgNIAjAAIgBANIAjAAIgDgKIAhgFIAGAPIAoAAIAAAbIhoAAQAcAUBPACIgHAbIgKgBIAABQgAApBXIAqAAIAAgWIgqAAgAhSBXIAqAAIAAgWIgqAAgAAKgwIAAhLIBoAAIAABLgAArhLIAmAAIAAgVIgmAAgAhwgwIAAhLIBmAAIAABLgAhRhLIAoAAIAAgVIgoAAg");
	this.shape_66.setTransform(263.5,62);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333F48").s().p("AiCBhQAlggAIg0IgrAAIAAggIAtAAIAAgqIgGAAQgJAVgMATQgKgQgLgOQAUgjAJgsIAhAGIgIAeIA1AAIAAAhIgaAAIAAAqIAgAAIAAAgIgiAAIgCAPIAqA2IAAjIICOAAIAAAhIhsAAIAAAkIBkAAIAABlIhkAAIAAAlIBuAAIAAAhIiQAAIAAgiIgYAUIgcgrQgPAlgeAdQgLgTgKgPgAAWAUIBBAAIAAglIhBAAg");
	this.shape_67.setTransform(235.4,61.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
	this.shape_68.setTransform(207.5,61.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333F48").s().p("Ah9BhQBSgwAChbIhFAAIAAgjIBIAAIABg1IAnAAIgCA1IB+AAIgDBNQgBAqgCAaQgBAbgOAOQgPAOgWABIg7AAQgEgXgEgSQAVACAcAAQANAAAHgFQAHgFACgIQACgIABgeIADhHIhVAAQgDBuhaA/QgPgRgRgRg");
	this.shape_69.setTransform(178.7,61.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333F48").s().p("AgTBoIAAAbIghAAIAAhvIgSAcIgDgNQgLAogMA2IgjgMQANgqANg8IAdANIgFgUQAegpAMgmIgaAAIAAggIBRAAIgJgUIAngIIANAcIBFAAIAAAgIhoAAIAeAHIgGAOIBIAAIAAAcQgHA1ggAnQAVAPAfAKIgVAjQgjgQgWgTQgVASghATQgJgPgLgNgAgTBlQAfgRATgOQgOgSgKgXIgNAUIgNgegAAagDQAMAdARAWQAageAFglIg0AAIgIAQgAgEhDIgPAfIAAAuQAZglAPgsIgpAAgAAjgIIAVgLIASAgIgWALIgRgggAiEgeIAXgbIAnAhIgZAcQgSgSgTgQgAiDhmIAXgZQAVAQASARIgYAbIgmgjg");
	this.shape_70.setTransform(151.6,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(612));

	// 图层 2
	this.instance = new lib.page4dMC("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(208.3,169.4,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(612));

	// bg
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2F8F8").s().p("Eg9tA8AMAAAh3/MB7bAAAMAAAB3/g");
	this.shape_71.setTransform(395,384);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_72.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71}]}).wait(612));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3dpage4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,-612.9,1366,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 12,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3dpage4/ylbjqyl01_00000.jpg", id:"ylbjqyl01_00000"},
		{src:"images/3dpage4/ylbjqyl01_00001.jpg", id:"ylbjqyl01_00001"},
		{src:"images/3dpage4/ylbjqyl01_00002.jpg", id:"ylbjqyl01_00002"},
		{src:"images/3dpage4/ylbjqyl01_00003.jpg", id:"ylbjqyl01_00003"},
		{src:"images/3dpage4/ylbjqyl01_00004.jpg", id:"ylbjqyl01_00004"},
		{src:"images/3dpage4/ylbjqyl01_00005.jpg", id:"ylbjqyl01_00005"},
		{src:"images/3dpage4/ylbjqyl01_00006.jpg", id:"ylbjqyl01_00006"},
		{src:"images/3dpage4/ylbjqyl01_00007.jpg", id:"ylbjqyl01_00007"},
		{src:"images/3dpage4/ylbjqyl01_00008.jpg", id:"ylbjqyl01_00008"},
		{src:"images/3dpage4/ylbjqyl01_00009.jpg", id:"ylbjqyl01_00009"},
		{src:"images/3dpage4/ylbjqyl01_00010.jpg", id:"ylbjqyl01_00010"},
		{src:"images/3dpage4/ylbjqyl01_00011.jpg", id:"ylbjqyl01_00011"},
		{src:"images/3dpage4/ylbjqyl01_00012.jpg", id:"ylbjqyl01_00012"},
		{src:"images/3dpage4/ylbjqyl01_00013.jpg", id:"ylbjqyl01_00013"},
		{src:"images/3dpage4/ylbjqyl01_00014.jpg", id:"ylbjqyl01_00014"},
		{src:"images/3dpage4/ylbjqyl01_00015.jpg", id:"ylbjqyl01_00015"},
		{src:"images/3dpage4/ylbjqyl01_00016.jpg", id:"ylbjqyl01_00016"},
		{src:"images/3dpage4/ylbjqyl01_00017.jpg", id:"ylbjqyl01_00017"},
		{src:"images/3dpage4/ylbjqyl01_00018.jpg", id:"ylbjqyl01_00018"},
		{src:"images/3dpage4/ylbjqyl01_00019.jpg", id:"ylbjqyl01_00019"},
		{src:"images/3dpage4/ylbjqyl01_00020.jpg", id:"ylbjqyl01_00020"},
		{src:"images/3dpage4/ylbjqyl01_00021.jpg", id:"ylbjqyl01_00021"},
		{src:"images/3dpage4/ylbjqyl01_00022.jpg", id:"ylbjqyl01_00022"},
		{src:"images/3dpage4/ylbjqyl01_00023.jpg", id:"ylbjqyl01_00023"},
		{src:"images/3dpage4/ylbjqyl01_00024.jpg", id:"ylbjqyl01_00024"},
		{src:"images/3dpage4/ylbjqyl01_00025.jpg", id:"ylbjqyl01_00025"},
		{src:"images/3dpage4/ylbjqyl01_00026.jpg", id:"ylbjqyl01_00026"},
		{src:"images/3dpage4/ylbjqyl01_00027.jpg", id:"ylbjqyl01_00027"},
		{src:"images/3dpage4/ylbjqyl01_00028.jpg", id:"ylbjqyl01_00028"},
		{src:"images/3dpage4/ylbjqyl01_00029.jpg", id:"ylbjqyl01_00029"},
		{src:"images/3dpage4/ylbjqyl01_00030.jpg", id:"ylbjqyl01_00030"},
		{src:"images/3dpage4/ylbjqyl01_00031.jpg", id:"ylbjqyl01_00031"},
		{src:"images/3dpage4/ylbjqyl01_00032.jpg", id:"ylbjqyl01_00032"},
		{src:"images/3dpage4/ylbjqyl01_00033.jpg", id:"ylbjqyl01_00033"},
		{src:"images/3dpage4/ylbjqyl01_00034.jpg", id:"ylbjqyl01_00034"},
		{src:"images/3dpage4/ylbjqyl01_00035.jpg", id:"ylbjqyl01_00035"},
		{src:"images/3dpage4/ylbjqyl01_00036.jpg", id:"ylbjqyl01_00036"},
		{src:"images/3dpage4/ylbjqyl01_00037.jpg", id:"ylbjqyl01_00037"},
		{src:"images/3dpage4/ylbjqyl01_00038.jpg", id:"ylbjqyl01_00038"},
		{src:"images/3dpage4/ylbjqyl01_00039.jpg", id:"ylbjqyl01_00039"},
		{src:"images/3dpage4/ylbjqyl01_00040.jpg", id:"ylbjqyl01_00040"},
		{src:"images/3dpage4/ylbjqyl01_00041.jpg", id:"ylbjqyl01_00041"},
		{src:"images/3dpage4/ylbjqyl01_00042.jpg", id:"ylbjqyl01_00042"},
		{src:"images/3dpage4/ylbjqyl01_00043.jpg", id:"ylbjqyl01_00043"},
		{src:"images/3dpage4/ylbjqyl01_00044.jpg", id:"ylbjqyl01_00044"},
		{src:"images/3dpage4/ylbjqyl01_00045.jpg", id:"ylbjqyl01_00045"},
		{src:"images/3dpage4/ylbjqyl01_00046.jpg", id:"ylbjqyl01_00046"},
		{src:"images/3dpage4/ylbjqyl01_00047.jpg", id:"ylbjqyl01_00047"},
		{src:"images/3dpage4/ylbjqyl01_00048.jpg", id:"ylbjqyl01_00048"},
		{src:"images/3dpage4/ylbjqyl01_00049.jpg", id:"ylbjqyl01_00049"},
		{src:"images/3dpage4/ylbjqyl01_00050.jpg", id:"ylbjqyl01_00050"},
		{src:"images/3dpage4/ylbjqyl01_00051.jpg", id:"ylbjqyl01_00051"},
		{src:"images/3dpage4/ylbjqyl01_00052.jpg", id:"ylbjqyl01_00052"},
		{src:"images/3dpage4/ylbjqyl01_00053.jpg", id:"ylbjqyl01_00053"},
		{src:"images/3dpage4/ylbjqyl01_00054.jpg", id:"ylbjqyl01_00054"},
		{src:"images/3dpage4/ylbjqyl01_00055.jpg", id:"ylbjqyl01_00055"},
		{src:"images/3dpage4/ylbjqyl01_00056.jpg", id:"ylbjqyl01_00056"},
		{src:"images/3dpage4/ylbjqyl01_00057.jpg", id:"ylbjqyl01_00057"},
		{src:"images/3dpage4/ylbjqyl01_00058.jpg", id:"ylbjqyl01_00058"},
		{src:"images/3dpage4/ylbjqyl01_00059.jpg", id:"ylbjqyl01_00059"},
		{src:"images/3dpage4/ylbjqyl01_00060.jpg", id:"ylbjqyl01_00060"},
		{src:"images/3dpage4/ylbjqyl01_00061.jpg", id:"ylbjqyl01_00061"},
		{src:"images/3dpage4/ylbjqyl01_00062.jpg", id:"ylbjqyl01_00062"},
		{src:"images/3dpage4/ylbjqyl01_00063.jpg", id:"ylbjqyl01_00063"},
		{src:"images/3dpage4/ylbjqyl01_00064.jpg", id:"ylbjqyl01_00064"},
		{src:"images/3dpage4/ylbjqyl01_00065.jpg", id:"ylbjqyl01_00065"},
		{src:"images/3dpage4/ylbjqyl01_00066.jpg", id:"ylbjqyl01_00066"},
		{src:"images/3dpage4/ylbjqyl01_00067.jpg", id:"ylbjqyl01_00067"},
		{src:"images/3dpage4/ylbjqyl01_00068.jpg", id:"ylbjqyl01_00068"},
		{src:"images/3dpage4/ylbjqyl01_00069.jpg", id:"ylbjqyl01_00069"},
		{src:"images/3dpage4/ylbjqyl01_00070.jpg", id:"ylbjqyl01_00070"},
		{src:"images/3dpage4/ylbjqyl01_00071.jpg", id:"ylbjqyl01_00071"},
		{src:"images/3dpage4/ylbjqyl01_00072.jpg", id:"ylbjqyl01_00072"},
		{src:"images/3dpage4/ylbjqyl01_00073.jpg", id:"ylbjqyl01_00073"},
		{src:"images/3dpage4/ylbjqyl01_00074.jpg", id:"ylbjqyl01_00074"},
		{src:"images/3dpage4/ylbjqyl01_00075.jpg", id:"ylbjqyl01_00075"},
		{src:"images/3dpage4/ylbjqyl01_00076.jpg", id:"ylbjqyl01_00076"},
		{src:"images/3dpage4/ylbjqyl01_00077.jpg", id:"ylbjqyl01_00077"},
		{src:"images/3dpage4/ylbjqyl01_00078.jpg", id:"ylbjqyl01_00078"},
		{src:"images/3dpage4/ylbjqyl01_00079.jpg", id:"ylbjqyl01_00079"},
		{src:"images/3dpage4/ylbjqyl01_00080.jpg", id:"ylbjqyl01_00080"},
		{src:"images/3dpage4/ylbjqyl01_00081.jpg", id:"ylbjqyl01_00081"},
		{src:"images/3dpage4/ylbjqyl01_00082.jpg", id:"ylbjqyl01_00082"},
		{src:"images/3dpage4/ylbjqyl01_00083.jpg", id:"ylbjqyl01_00083"},
		{src:"images/3dpage4/ylbjqyl01_00084.jpg", id:"ylbjqyl01_00084"},
		{src:"images/3dpage4/ylbjqyl01_00085.jpg", id:"ylbjqyl01_00085"},
		{src:"images/3dpage4/ylbjqyl01_00086.jpg", id:"ylbjqyl01_00086"},
		{src:"images/3dpage4/ylbjqyl01_00087.jpg", id:"ylbjqyl01_00087"},
		{src:"images/3dpage4/ylbjqyl01_00088.jpg", id:"ylbjqyl01_00088"},
		{src:"images/3dpage4/ylbjqyl01_00089.jpg", id:"ylbjqyl01_00089"},
		{src:"images/3dpage4/ylbjqyl01_00090.jpg", id:"ylbjqyl01_00090"},
		{src:"images/3dpage4/ylbjqyl01_00091.jpg", id:"ylbjqyl01_00091"},
		{src:"images/3dpage4/ylbjqyl01_00092.jpg", id:"ylbjqyl01_00092"},
		{src:"images/3dpage4/ylbjqyl01_00093.jpg", id:"ylbjqyl01_00093"},
		{src:"images/3dpage4/ylbjqyl01_00094.jpg", id:"ylbjqyl01_00094"},
		{src:"images/3dpage4/ylbjqyl01_00095.jpg", id:"ylbjqyl01_00095"},
		{src:"images/3dpage4/ylbjqyl01_00096.jpg", id:"ylbjqyl01_00096"},
		{src:"images/3dpage4/ylbjqyl01_00097.jpg", id:"ylbjqyl01_00097"},
		{src:"images/3dpage4/ylbjqyl01_00098.jpg", id:"ylbjqyl01_00098"},
		{src:"images/3dpage4/ylbjqyl01_00099.jpg", id:"ylbjqyl01_00099"},
		{src:"images/3dpage4/ylbjqyl01_00100.jpg", id:"ylbjqyl01_00100"},
		{src:"images/3dpage4/ylbjqyl01_00101.jpg", id:"ylbjqyl01_00101"},
		{src:"images/3dpage4/ylbjqyl01_00102.jpg", id:"ylbjqyl01_00102"},
		{src:"images/3dpage4/ylbjqyl01_00103.jpg", id:"ylbjqyl01_00103"},
		{src:"images/3dpage4/ylbjqyl01_00104.jpg", id:"ylbjqyl01_00104"},
		{src:"images/3dpage4/ylbjqyl01_00105.jpg", id:"ylbjqyl01_00105"},
		{src:"images/3dpage4/ylbjqyl01_00106.jpg", id:"ylbjqyl01_00106"},
		{src:"images/3dpage4/ylbjqyl01_00107.jpg", id:"ylbjqyl01_00107"},
		{src:"images/3dpage4/ylbjqyl01_00108.jpg", id:"ylbjqyl01_00108"},
		{src:"images/3dpage4/ylbjqyl01_00109.jpg", id:"ylbjqyl01_00109"},
		{src:"images/3dpage4/ylbjqyl01_00110.jpg", id:"ylbjqyl01_00110"},
		{src:"images/3dpage4/ylbjqyl01_00111.jpg", id:"ylbjqyl01_00111"},
		{src:"images/3dpage4/ylbjqyl01_00112.jpg", id:"ylbjqyl01_00112"},
		{src:"images/3dpage4/ylbjqyl01_00113.jpg", id:"ylbjqyl01_00113"},
		{src:"images/3dpage4/ylbjqyl01_00114.jpg", id:"ylbjqyl01_00114"},
		{src:"images/3dpage4/ylbjqyl01_00115.jpg", id:"ylbjqyl01_00115"},
		{src:"images/3dpage4/ylbjqyl01_00116.jpg", id:"ylbjqyl01_00116"},
		{src:"images/3dpage4/ylbjqyl01_00117.jpg", id:"ylbjqyl01_00117"},
		{src:"images/3dpage4/ylbjqyl01_00118.jpg", id:"ylbjqyl01_00118"},
		{src:"images/3dpage4/ylbjqyl01_00119.jpg", id:"ylbjqyl01_00119"},
		{src:"images/3dpage4/ylbjqyl01_00120.jpg", id:"ylbjqyl01_00120"},
		{src:"images/3dpage4/ylbjqyl01_00121.jpg", id:"ylbjqyl01_00121"},
		{src:"images/3dpage4/ylbjqyl01_00122.jpg", id:"ylbjqyl01_00122"},
		{src:"images/3dpage4/ylbjqyl01_00123.jpg", id:"ylbjqyl01_00123"},
		{src:"images/3dpage4/ylbjqyl01_00124.jpg", id:"ylbjqyl01_00124"},
		{src:"images/3dpage4/ylbjqyl01_00125.jpg", id:"ylbjqyl01_00125"},
		{src:"images/3dpage4/ylbjqyl01_00126.jpg", id:"ylbjqyl01_00126"},
		{src:"images/3dpage4/ylbjqyl01_00127.jpg", id:"ylbjqyl01_00127"},
		{src:"images/3dpage4/ylbjqyl01_00128.jpg", id:"ylbjqyl01_00128"},
		{src:"images/3dpage4/ylbjqyl01_00129.jpg", id:"ylbjqyl01_00129"},
		{src:"images/3dpage4/ylbjqyl01_00130.jpg", id:"ylbjqyl01_00130"},
		{src:"images/3dpage4/ylbjqyl01_00131.jpg", id:"ylbjqyl01_00131"},
		{src:"images/3dpage4/ylbjqyl01_00132.jpg", id:"ylbjqyl01_00132"},
		{src:"images/3dpage4/ylbjqyl01_00133.jpg", id:"ylbjqyl01_00133"},
		{src:"images/3dpage4/ylbjqyl01_00134.jpg", id:"ylbjqyl01_00134"},
		{src:"images/3dpage4/ylbjqyl01_00135.jpg", id:"ylbjqyl01_00135"},
		{src:"images/3dpage4/ylbjqyl01_00136.jpg", id:"ylbjqyl01_00136"},
		{src:"images/3dpage4/ylbjqyl01_00137.jpg", id:"ylbjqyl01_00137"},
		{src:"images/3dpage4/ylbjqyl01_00138.jpg", id:"ylbjqyl01_00138"},
		{src:"images/3dpage4/ylbjqyl01_00139.jpg", id:"ylbjqyl01_00139"},
		{src:"images/3dpage4/ylbjqyl01_00140.jpg", id:"ylbjqyl01_00140"},
		{src:"images/3dpage4/ylbjqyl01_00141.jpg", id:"ylbjqyl01_00141"},
		{src:"images/3dpage4/ylbjqyl01_00142.jpg", id:"ylbjqyl01_00142"},
		{src:"images/3dpage4/ylbjqyl01_00143.jpg", id:"ylbjqyl01_00143"},
		{src:"images/3dpage4/ylbjqyl01_00144.jpg", id:"ylbjqyl01_00144"},
		{src:"images/3dpage4/ylbjqyl01_00145.jpg", id:"ylbjqyl01_00145"},
		{src:"images/3dpage4/ylbjqyl01_00146.jpg", id:"ylbjqyl01_00146"},
		{src:"images/3dpage4/ylbjqyl01_00147.jpg", id:"ylbjqyl01_00147"},
		{src:"images/3dpage4/ylbjqyl01_00148.jpg", id:"ylbjqyl01_00148"},
		{src:"images/3dpage4/ylbjqyl01_00149.jpg", id:"ylbjqyl01_00149"},
		{src:"images/3dpage4/ylbjqyl01_00150.jpg", id:"ylbjqyl01_00150"},
		{src:"images/3dpage4/ylbjqyl01_00151.jpg", id:"ylbjqyl01_00151"},
		{src:"images/3dpage4/ylbjqyl01_00152.jpg", id:"ylbjqyl01_00152"},
		{src:"images/3dpage4/ylbjqyl01_00153.jpg", id:"ylbjqyl01_00153"},
		{src:"images/3dpage4/ylbjqyl01_00154.jpg", id:"ylbjqyl01_00154"},
		{src:"images/3dpage4/ylbjqyl01_00155.jpg", id:"ylbjqyl01_00155"},
		{src:"images/3dpage4/ylbjqyl01_00156.jpg", id:"ylbjqyl01_00156"},
		{src:"images/3dpage4/ylbjqyl01_00157.jpg", id:"ylbjqyl01_00157"},
		{src:"images/3dpage4/ylbjqyl01_00158.jpg", id:"ylbjqyl01_00158"},
		{src:"images/3dpage4/ylbjqyl01_00159.jpg", id:"ylbjqyl01_00159"},
		{src:"images/3dpage4/ylbjqyl01_00160.jpg", id:"ylbjqyl01_00160"},
		{src:"images/3dpage4/ylbjqyl01_00161.jpg", id:"ylbjqyl01_00161"},
		{src:"images/3dpage4/ylbjqyl01_00162.jpg", id:"ylbjqyl01_00162"},
		{src:"images/3dpage4/ylbjqyl01_00163.jpg", id:"ylbjqyl01_00163"},
		{src:"images/3dpage4/ylbjqyl01_00164.jpg", id:"ylbjqyl01_00164"},
		{src:"images/3dpage4/ylbjqyl01_00165.jpg", id:"ylbjqyl01_00165"},
		{src:"images/3dpage4/ylbjqyl01_00166.jpg", id:"ylbjqyl01_00166"},
		{src:"images/3dpage4/ylbjqyl01_00167.jpg", id:"ylbjqyl01_00167"},
		{src:"images/3dpage4/ylbjqyl01_00168.jpg", id:"ylbjqyl01_00168"},
		{src:"images/3dpage4/ylbjqyl01_00169.jpg", id:"ylbjqyl01_00169"},
		{src:"images/3dpage4/ylbjqyl01_00170.jpg", id:"ylbjqyl01_00170"},
		{src:"images/3dpage4/ylbjqyl01_00171.jpg", id:"ylbjqyl01_00171"},
		{src:"images/3dpage4/ylbjqyl01_00172.jpg", id:"ylbjqyl01_00172"},
		{src:"images/3dpage4/ylbjqyl01_00173.jpg", id:"ylbjqyl01_00173"},
		{src:"images/3dpage4/ylbjqyl01_00174.jpg", id:"ylbjqyl01_00174"},
		{src:"images/3dpage4/ylbjqyl01_00175.jpg", id:"ylbjqyl01_00175"},
		{src:"images/3dpage4/ylbjqyl01_00176.jpg", id:"ylbjqyl01_00176"},
		{src:"images/3dpage4/ylbjqyl01_00177.jpg", id:"ylbjqyl01_00177"},
		{src:"images/3dpage4/ylbjqyl01_00178.jpg", id:"ylbjqyl01_00178"},
		{src:"images/3dpage4/ylbjqyl01_00179.jpg", id:"ylbjqyl01_00179"},
		{src:"images/3dpage4/ylbjqyl01_00180.jpg", id:"ylbjqyl01_00180"},
		{src:"images/3dpage4/ylbjqyl01_00181.jpg", id:"ylbjqyl01_00181"},
		{src:"images/3dpage4/ylbjqyl01_00182.jpg", id:"ylbjqyl01_00182"},
		{src:"images/3dpage4/ylbjqyl01_00183.jpg", id:"ylbjqyl01_00183"},
		{src:"images/3dpage4/ylbjqyl01_00184.jpg", id:"ylbjqyl01_00184"},
		{src:"images/3dpage4/ylbjqyl01_00185.jpg", id:"ylbjqyl01_00185"},
		{src:"images/3dpage4/ylbjqyl01_00186.jpg", id:"ylbjqyl01_00186"},
		{src:"images/3dpage4/ylbjqyl01_00187.jpg", id:"ylbjqyl01_00187"},
		{src:"images/3dpage4/ylbjqyl01_00188.jpg", id:"ylbjqyl01_00188"},
		{src:"images/3dpage4/ylbjqyl01_00189.jpg", id:"ylbjqyl01_00189"},
		{src:"images/3dpage4/ylbjqyl01_00190.jpg", id:"ylbjqyl01_00190"},
		{src:"images/3dpage4/ylbjqyl01_00191.jpg", id:"ylbjqyl01_00191"},
		{src:"images/3dpage4/ylbjqyl01_00192.jpg", id:"ylbjqyl01_00192"},
		{src:"images/3dpage4/ylbjqyl01_00193.jpg", id:"ylbjqyl01_00193"},
		{src:"images/3dpage4/ylbjqyl01_00194.jpg", id:"ylbjqyl01_00194"},
		{src:"images/3dpage4/ylbjqyl01_00195.jpg", id:"ylbjqyl01_00195"},
		{src:"images/3dpage4/ylbjqyl01_00196.jpg", id:"ylbjqyl01_00196"},
		{src:"images/3dpage4/ylbjqyl01_00197.jpg", id:"ylbjqyl01_00197"},
		{src:"images/3dpage4/ylbjqyl01_00198.jpg", id:"ylbjqyl01_00198"},
		{src:"images/3dpage4/ylbjqyl01_00199.jpg", id:"ylbjqyl01_00199"},
		{src:"images/3dpage4/ylbjqyl01_00200.jpg", id:"ylbjqyl01_00200"},
		{src:"images/3dpage4/ylbjqyl01_00201.jpg", id:"ylbjqyl01_00201"},
		{src:"images/3dpage4/ylbjqyl01_00202.jpg", id:"ylbjqyl01_00202"},
		{src:"images/3dpage4/ylbjqyl01_00203.jpg", id:"ylbjqyl01_00203"},
		{src:"images/3dpage4/ylbjqyl01_00204.jpg", id:"ylbjqyl01_00204"},
		{src:"images/3dpage4/ylbjqyl01_00205.jpg", id:"ylbjqyl01_00205"},
		{src:"images/3dpage4/ylbjqyl01_00206.jpg", id:"ylbjqyl01_00206"},
		{src:"images/3dpage4/ylbjqyl01_00207.jpg", id:"ylbjqyl01_00207"},
		{src:"images/3dpage4/ylbjqyl01_00208.jpg", id:"ylbjqyl01_00208"},
		{src:"images/3dpage4/ylbjqyl01_00209.jpg", id:"ylbjqyl01_00209"},
		{src:"images/3dpage4/ylbjqyl01_00210.jpg", id:"ylbjqyl01_00210"},
		{src:"images/3dpage4/ylbjqyl01_00211.jpg", id:"ylbjqyl01_00211"},
		{src:"images/3dpage4/ylbjqyl01_00212.jpg", id:"ylbjqyl01_00212"},
		{src:"images/3dpage4/ylbjqyl01_00213.jpg", id:"ylbjqyl01_00213"},
		{src:"images/3dpage4/ylbjqyl01_00214.jpg", id:"ylbjqyl01_00214"},
		{src:"images/3dpage4/ylbjqyl01_00215.jpg", id:"ylbjqyl01_00215"},
		{src:"images/3dpage4/ylbjqyl01_00216.jpg", id:"ylbjqyl01_00216"},
		{src:"images/3dpage4/ylbjqyl01_00217.jpg", id:"ylbjqyl01_00217"},
		{src:"images/3dpage4/ylbjqyl01_00218.jpg", id:"ylbjqyl01_00218"},
		{src:"images/3dpage4/ylbjqyl01_00219.jpg", id:"ylbjqyl01_00219"},
		{src:"images/3dpage4/ylbjqyl01_00220.jpg", id:"ylbjqyl01_00220"},
		{src:"images/3dpage4/ylbjqyl01_00221.jpg", id:"ylbjqyl01_00221"},
		{src:"images/3dpage4/ylbjqyl01_00222.jpg", id:"ylbjqyl01_00222"},
		{src:"images/3dpage4/ylbjqyl01_00223.jpg", id:"ylbjqyl01_00223"},
		{src:"images/3dpage4/ylbjqyl01_00224.jpg", id:"ylbjqyl01_00224"},
		{src:"images/3dpage4/ylbjqyl01_00225.jpg", id:"ylbjqyl01_00225"},
		{src:"images/3dpage4/ylbjqyl01_00226.jpg", id:"ylbjqyl01_00226"},
		{src:"images/3dpage4/ylbjqyl01_00227.jpg", id:"ylbjqyl01_00227"},
		{src:"images/3dpage4/ylbjqyl01_00228.jpg", id:"ylbjqyl01_00228"},
		{src:"images/3dpage4/ylbjqyl01_00229.jpg", id:"ylbjqyl01_00229"},
		{src:"images/3dpage4/ylbjqyl01_00230.jpg", id:"ylbjqyl01_00230"},
		{src:"images/3dpage4/ylbjqyl01_00231.jpg", id:"ylbjqyl01_00231"},
		{src:"images/3dpage4/ylbjqyl01_00232.jpg", id:"ylbjqyl01_00232"},
		{src:"images/3dpage4/ylbjqyl01_00233.jpg", id:"ylbjqyl01_00233"},
		{src:"images/3dpage4/ylbjqyl01_00234.jpg", id:"ylbjqyl01_00234"},
		{src:"images/3dpage4/ylbjqyl01_00235.jpg", id:"ylbjqyl01_00235"},
		{src:"images/3dpage4/ylbjqyl01_00236.jpg", id:"ylbjqyl01_00236"},
		{src:"images/3dpage4/ylbjqyl01_00237.jpg", id:"ylbjqyl01_00237"},
		{src:"images/3dpage4/ylbjqyl01_00238.jpg", id:"ylbjqyl01_00238"},
		{src:"images/3dpage4/ylbjqyl01_00239.jpg", id:"ylbjqyl01_00239"},
		{src:"images/3dpage4/ylbjqyl01_00240.jpg", id:"ylbjqyl01_00240"},
		{src:"images/3dpage4/ylbjqyl01_00241.jpg", id:"ylbjqyl01_00241"},
		{src:"images/3dpage4/ylbjqyl01_00242.jpg", id:"ylbjqyl01_00242"},
		{src:"images/3dpage4/ylbjqyl01_00243.jpg", id:"ylbjqyl01_00243"},
		{src:"images/3dpage4/ylbjqyl01_00244.jpg", id:"ylbjqyl01_00244"},
		{src:"images/3dpage4/ylbjqyl01_00245.jpg", id:"ylbjqyl01_00245"},
		{src:"images/3dpage4/ylbjqyl01_00246.jpg", id:"ylbjqyl01_00246"},
		{src:"images/3dpage4/ylbjqyl01_00247.jpg", id:"ylbjqyl01_00247"},
		{src:"images/3dpage4/ylbjqyl01_00248.jpg", id:"ylbjqyl01_00248"},
		{src:"images/3dpage4/ylbjqyl01_00249.jpg", id:"ylbjqyl01_00249"},
		{src:"images/3dpage4/ylbjqyl01_00250.jpg", id:"ylbjqyl01_00250"},
		{src:"images/3dpage4/ylbjqyl01_00251.jpg", id:"ylbjqyl01_00251"},
		{src:"images/3dpage4/ylbjqyl01_00252.jpg", id:"ylbjqyl01_00252"},
		{src:"images/3dpage4/ylbjqyl01_00253.jpg", id:"ylbjqyl01_00253"},
		{src:"images/3dpage4/ylbjqyl01_00254.jpg", id:"ylbjqyl01_00254"},
		{src:"images/3dpage4/ylbjqyl01_00255.jpg", id:"ylbjqyl01_00255"},
		{src:"images/3dpage4/ylbjqyl01_00256.jpg", id:"ylbjqyl01_00256"},
		{src:"images/3dpage4/ylbjqyl01_00257.jpg", id:"ylbjqyl01_00257"},
		{src:"images/3dpage4/ylbjqyl01_00258.jpg", id:"ylbjqyl01_00258"},
		{src:"images/3dpage4/ylbjqyl01_00259.jpg", id:"ylbjqyl01_00259"},
		{src:"images/3dpage4/ylbjqyl01_00260.jpg", id:"ylbjqyl01_00260"},
		{src:"images/3dpage4/ylbjqyl01_00261.jpg", id:"ylbjqyl01_00261"},
		{src:"images/3dpage4/ylbjqyl01_00262.jpg", id:"ylbjqyl01_00262"},
		{src:"images/3dpage4/ylbjqyl01_00263.jpg", id:"ylbjqyl01_00263"},
		{src:"images/3dpage4/ylbjqyl01_00264.jpg", id:"ylbjqyl01_00264"},
		{src:"images/3dpage4/ylbjqyl01_00265.jpg", id:"ylbjqyl01_00265"},
		{src:"images/3dpage4/ylbjqyl01_00266.jpg", id:"ylbjqyl01_00266"},
		{src:"images/3dpage4/ylbjqyl01_00267.jpg", id:"ylbjqyl01_00267"},
		{src:"images/3dpage4/ylbjqyl01_00268.jpg", id:"ylbjqyl01_00268"},
		{src:"images/3dpage4/ylbjqyl01_00269.jpg", id:"ylbjqyl01_00269"},
		{src:"images/3dpage4/ylbjqyl01_00270.jpg", id:"ylbjqyl01_00270"},
		{src:"images/3dpage4/ylbjqyl01_00271.jpg", id:"ylbjqyl01_00271"},
		{src:"images/3dpage4/ylbjqyl01_00272.jpg", id:"ylbjqyl01_00272"},
		{src:"images/3dpage4/ylbjqyl01_00273.jpg", id:"ylbjqyl01_00273"},
		{src:"images/3dpage4/ylbjqyl01_00274.jpg", id:"ylbjqyl01_00274"},
		{src:"images/3dpage4/ylbjqyl01_00275.jpg", id:"ylbjqyl01_00275"},
		{src:"images/3dpage4/ylbjqyl01_00276.jpg", id:"ylbjqyl01_00276"},
		{src:"images/3dpage4/ylbjqyl01_00277.jpg", id:"ylbjqyl01_00277"},
		{src:"images/3dpage4/ylbjqyl01_00278.jpg", id:"ylbjqyl01_00278"},
		{src:"images/3dpage4/ylbjqyl01_00279.jpg", id:"ylbjqyl01_00279"},
		{src:"images/3dpage4/ylbjqyl01_00280.jpg", id:"ylbjqyl01_00280"},
		{src:"images/3dpage4/ylbjqyl01_00281.jpg", id:"ylbjqyl01_00281"},
		{src:"images/3dpage4/ylbjqyl01_00282.jpg", id:"ylbjqyl01_00282"},
		{src:"images/3dpage4/ylbjqyl01_00283.jpg", id:"ylbjqyl01_00283"},
		{src:"images/3dpage4/ylbjqyl01_00284.jpg", id:"ylbjqyl01_00284"},
		{src:"images/3dpage4/ylbjqyl01_00285.jpg", id:"ylbjqyl01_00285"},
		{src:"images/3dpage4/ylbjqyl01_00286.jpg", id:"ylbjqyl01_00286"},
		{src:"images/3dpage4/ylbjqyl01_00287.jpg", id:"ylbjqyl01_00287"},
		{src:"images/3dpage4/ylbjqyl01_00288.jpg", id:"ylbjqyl01_00288"},
		{src:"images/3dpage4/ylbjqyl01_00289.jpg", id:"ylbjqyl01_00289"},
		{src:"images/3dpage4/ylbjqyl01_00290.jpg", id:"ylbjqyl01_00290"},
		{src:"images/3dpage4/ylbjqyl01_00291.jpg", id:"ylbjqyl01_00291"},
		{src:"images/3dpage4/ylbjqyl01_00292.jpg", id:"ylbjqyl01_00292"},
		{src:"images/3dpage4/ylbjqyl01_00293.jpg", id:"ylbjqyl01_00293"},
		{src:"images/3dpage4/ylbjqyl01_00294.jpg", id:"ylbjqyl01_00294"},
		{src:"images/3dpage4/ylbjqyl01_00295.jpg", id:"ylbjqyl01_00295"},
		{src:"images/3dpage4/ylbjqyl01_00296.jpg", id:"ylbjqyl01_00296"},
		{src:"images/3dpage4/ylbjqyl01_00297.jpg", id:"ylbjqyl01_00297"},
		{src:"images/3dpage4/ylbjqyl01_00298.jpg", id:"ylbjqyl01_00298"},
		{src:"images/3dpage4/ylbjqyl01_00299.jpg", id:"ylbjqyl01_00299"},
		{src:"images/3dpage4/ylbjqyl01_00300.jpg", id:"ylbjqyl01_00300"}
	],
	preloads: []
};




})(lib3dpage4 = lib3dpage4||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3dpage4, images, createjs, ss, AdobeAn;