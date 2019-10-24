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



(lib.sxxcl_yl03大太阳轮_00000 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00059 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00060 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00061 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00062 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00063 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00064 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00065 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00066 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00067 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00068 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00069 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00070 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00071 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00072 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00073 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00074 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00075 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00076 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00077 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00078 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00079 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00080 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00081 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00082 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00083 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00084 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00085 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00086 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00087 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00088 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00089 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00090 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00091 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00092 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00093 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00094 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00095 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00096 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00097 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00098 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00099 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00100 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00101 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00102 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00103 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00104 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00105 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00106 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00107 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00108 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00109 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00110 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00111 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00112 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00113 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00114 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00115 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00116 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00117 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00118 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00119 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00120 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00121 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00122 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00123 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00124 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00125 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00126 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00127 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00128 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00129 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00130 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00131 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00132 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00133 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00134 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00135 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00136 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00137 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00138 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00139 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00140 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00141 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00142 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00143 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00144 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00145 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00146 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00147 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00148 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00149 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00150 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00151 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00152 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00153 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00154 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00155 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00156 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00157 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00158 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00159 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00160 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00161 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00162 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00163 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00164 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00165 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00166 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00167 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00168 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00169 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00170 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00171 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00172 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00173 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00174 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00175 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00176 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00177 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00178 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00179 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00180 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00181 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00182 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00183 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00184 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00185 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00186 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00187 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00188 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00189 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00190 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00191 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00192 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00193 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00194 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00195 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00196 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00197 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00198 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00199 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00200 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00201 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00202 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00203 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00204 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00205 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00206 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00207 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00208 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00209 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00210 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00211 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00212 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00213 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00214 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00214);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00215 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00216 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00217 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00217);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00218 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00218);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00219 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00219);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00220 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00220);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00221 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00221);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00222 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00223 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00223);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00224 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00224);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00225 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00225);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00226 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00226);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00227 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl03大太阳轮_00228 = function() {
	this.initialize(img.sxxcl_yl03大太阳轮_00228);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,499);


(lib.sxxcl_yl4大太阳轮_00000 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00001 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00002 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00003 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00004 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00005 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00006 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00007 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00008 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00009 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00010 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00011 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00012 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00013 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00014 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00015 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00016 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00017 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00018 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00019 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00020 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00021 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00022 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00023 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00024 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00025 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00026 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00027 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00028 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00029 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00030 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00031 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00032 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00033 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00034 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00035 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00036 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00037 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00038 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00039 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00040 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00041 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00042 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00043 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00044 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00045 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00046 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00047 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00048 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00049 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00050 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00051 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00052 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00053 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00054 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00055 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00056 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00057 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00058 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00059 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00060 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00061 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00062 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00063 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00064 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00065 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00066 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00067 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00068 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00069 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00070 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00071 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00072 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00073 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00074 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00075 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00076 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00077 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00078 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00079 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00080 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00081 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00082 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00083 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00084 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00085 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00086 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00087 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00088 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00089 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00090 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00091 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00092 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00093 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00094 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00095 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00096 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00097 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00098 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00099 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00100 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00101 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00102 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00103 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00104 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00105 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00106 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00107 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00108 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00109 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00110 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00111 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00112 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00113 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00114 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00115 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00116 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00117 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00118 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00119 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00120 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00121 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00122 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00123 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00124 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00125 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00126 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00127 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00128 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00129 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00130 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00131 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00132 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00133 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00134 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00135 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00136 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00137 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00138 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00139 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00140 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00141 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00142 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00143 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00144 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00145 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00146 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00147 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00148 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00149 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00150 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00151 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00152 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00153 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00154 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.sxxcl_yl4大太阳轮_00155 = function() {
	this.initialize(img.sxxcl_yl4大太阳轮_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,514);


(lib.qianjin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_170 = function() {
		this.gotoAndPlay(45);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(170).call(this.frame_170).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgluAlMMAAAhKXMBLdAAAMAAABKXg");
	mask.setTransform(241.5,238);

	// 图层 3
	this.instance = new lib.sxxcl_yl03大太阳轮_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.sxxcl_yl03大太阳轮_00059();
	this.instance_1.parent = this;

	this.instance_2 = new lib.sxxcl_yl03大太阳轮_00060();
	this.instance_2.parent = this;

	this.instance_3 = new lib.sxxcl_yl03大太阳轮_00061();
	this.instance_3.parent = this;

	this.instance_4 = new lib.sxxcl_yl03大太阳轮_00062();
	this.instance_4.parent = this;

	this.instance_5 = new lib.sxxcl_yl03大太阳轮_00063();
	this.instance_5.parent = this;

	this.instance_6 = new lib.sxxcl_yl03大太阳轮_00064();
	this.instance_6.parent = this;

	this.instance_7 = new lib.sxxcl_yl03大太阳轮_00065();
	this.instance_7.parent = this;

	this.instance_8 = new lib.sxxcl_yl03大太阳轮_00066();
	this.instance_8.parent = this;

	this.instance_9 = new lib.sxxcl_yl03大太阳轮_00067();
	this.instance_9.parent = this;

	this.instance_10 = new lib.sxxcl_yl03大太阳轮_00068();
	this.instance_10.parent = this;

	this.instance_11 = new lib.sxxcl_yl03大太阳轮_00069();
	this.instance_11.parent = this;

	this.instance_12 = new lib.sxxcl_yl03大太阳轮_00070();
	this.instance_12.parent = this;

	this.instance_13 = new lib.sxxcl_yl03大太阳轮_00071();
	this.instance_13.parent = this;

	this.instance_14 = new lib.sxxcl_yl03大太阳轮_00072();
	this.instance_14.parent = this;

	this.instance_15 = new lib.sxxcl_yl03大太阳轮_00073();
	this.instance_15.parent = this;

	this.instance_16 = new lib.sxxcl_yl03大太阳轮_00074();
	this.instance_16.parent = this;

	this.instance_17 = new lib.sxxcl_yl03大太阳轮_00075();
	this.instance_17.parent = this;

	this.instance_18 = new lib.sxxcl_yl03大太阳轮_00076();
	this.instance_18.parent = this;

	this.instance_19 = new lib.sxxcl_yl03大太阳轮_00077();
	this.instance_19.parent = this;

	this.instance_20 = new lib.sxxcl_yl03大太阳轮_00078();
	this.instance_20.parent = this;

	this.instance_21 = new lib.sxxcl_yl03大太阳轮_00079();
	this.instance_21.parent = this;

	this.instance_22 = new lib.sxxcl_yl03大太阳轮_00080();
	this.instance_22.parent = this;

	this.instance_23 = new lib.sxxcl_yl03大太阳轮_00081();
	this.instance_23.parent = this;

	this.instance_24 = new lib.sxxcl_yl03大太阳轮_00082();
	this.instance_24.parent = this;

	this.instance_25 = new lib.sxxcl_yl03大太阳轮_00083();
	this.instance_25.parent = this;

	this.instance_26 = new lib.sxxcl_yl03大太阳轮_00084();
	this.instance_26.parent = this;

	this.instance_27 = new lib.sxxcl_yl03大太阳轮_00085();
	this.instance_27.parent = this;

	this.instance_28 = new lib.sxxcl_yl03大太阳轮_00086();
	this.instance_28.parent = this;

	this.instance_29 = new lib.sxxcl_yl03大太阳轮_00087();
	this.instance_29.parent = this;

	this.instance_30 = new lib.sxxcl_yl03大太阳轮_00088();
	this.instance_30.parent = this;

	this.instance_31 = new lib.sxxcl_yl03大太阳轮_00089();
	this.instance_31.parent = this;

	this.instance_32 = new lib.sxxcl_yl03大太阳轮_00090();
	this.instance_32.parent = this;

	this.instance_33 = new lib.sxxcl_yl03大太阳轮_00091();
	this.instance_33.parent = this;

	this.instance_34 = new lib.sxxcl_yl03大太阳轮_00092();
	this.instance_34.parent = this;

	this.instance_35 = new lib.sxxcl_yl03大太阳轮_00093();
	this.instance_35.parent = this;

	this.instance_36 = new lib.sxxcl_yl03大太阳轮_00094();
	this.instance_36.parent = this;

	this.instance_37 = new lib.sxxcl_yl03大太阳轮_00095();
	this.instance_37.parent = this;

	this.instance_38 = new lib.sxxcl_yl03大太阳轮_00096();
	this.instance_38.parent = this;

	this.instance_39 = new lib.sxxcl_yl03大太阳轮_00097();
	this.instance_39.parent = this;

	this.instance_40 = new lib.sxxcl_yl03大太阳轮_00098();
	this.instance_40.parent = this;

	this.instance_41 = new lib.sxxcl_yl03大太阳轮_00099();
	this.instance_41.parent = this;

	this.instance_42 = new lib.sxxcl_yl03大太阳轮_00100();
	this.instance_42.parent = this;

	this.instance_43 = new lib.sxxcl_yl03大太阳轮_00101();
	this.instance_43.parent = this;

	this.instance_44 = new lib.sxxcl_yl03大太阳轮_00102();
	this.instance_44.parent = this;

	this.instance_45 = new lib.sxxcl_yl03大太阳轮_00103();
	this.instance_45.parent = this;

	this.instance_46 = new lib.sxxcl_yl03大太阳轮_00104();
	this.instance_46.parent = this;

	this.instance_47 = new lib.sxxcl_yl03大太阳轮_00105();
	this.instance_47.parent = this;

	this.instance_48 = new lib.sxxcl_yl03大太阳轮_00106();
	this.instance_48.parent = this;

	this.instance_49 = new lib.sxxcl_yl03大太阳轮_00107();
	this.instance_49.parent = this;

	this.instance_50 = new lib.sxxcl_yl03大太阳轮_00108();
	this.instance_50.parent = this;

	this.instance_51 = new lib.sxxcl_yl03大太阳轮_00109();
	this.instance_51.parent = this;

	this.instance_52 = new lib.sxxcl_yl03大太阳轮_00110();
	this.instance_52.parent = this;

	this.instance_53 = new lib.sxxcl_yl03大太阳轮_00111();
	this.instance_53.parent = this;

	this.instance_54 = new lib.sxxcl_yl03大太阳轮_00112();
	this.instance_54.parent = this;

	this.instance_55 = new lib.sxxcl_yl03大太阳轮_00113();
	this.instance_55.parent = this;

	this.instance_56 = new lib.sxxcl_yl03大太阳轮_00114();
	this.instance_56.parent = this;

	this.instance_57 = new lib.sxxcl_yl03大太阳轮_00115();
	this.instance_57.parent = this;

	this.instance_58 = new lib.sxxcl_yl03大太阳轮_00116();
	this.instance_58.parent = this;

	this.instance_59 = new lib.sxxcl_yl03大太阳轮_00117();
	this.instance_59.parent = this;

	this.instance_60 = new lib.sxxcl_yl03大太阳轮_00118();
	this.instance_60.parent = this;

	this.instance_61 = new lib.sxxcl_yl03大太阳轮_00119();
	this.instance_61.parent = this;

	this.instance_62 = new lib.sxxcl_yl03大太阳轮_00120();
	this.instance_62.parent = this;

	this.instance_63 = new lib.sxxcl_yl03大太阳轮_00121();
	this.instance_63.parent = this;

	this.instance_64 = new lib.sxxcl_yl03大太阳轮_00122();
	this.instance_64.parent = this;

	this.instance_65 = new lib.sxxcl_yl03大太阳轮_00123();
	this.instance_65.parent = this;

	this.instance_66 = new lib.sxxcl_yl03大太阳轮_00124();
	this.instance_66.parent = this;

	this.instance_67 = new lib.sxxcl_yl03大太阳轮_00125();
	this.instance_67.parent = this;

	this.instance_68 = new lib.sxxcl_yl03大太阳轮_00126();
	this.instance_68.parent = this;

	this.instance_69 = new lib.sxxcl_yl03大太阳轮_00127();
	this.instance_69.parent = this;

	this.instance_70 = new lib.sxxcl_yl03大太阳轮_00128();
	this.instance_70.parent = this;

	this.instance_71 = new lib.sxxcl_yl03大太阳轮_00129();
	this.instance_71.parent = this;

	this.instance_72 = new lib.sxxcl_yl03大太阳轮_00130();
	this.instance_72.parent = this;

	this.instance_73 = new lib.sxxcl_yl03大太阳轮_00131();
	this.instance_73.parent = this;

	this.instance_74 = new lib.sxxcl_yl03大太阳轮_00132();
	this.instance_74.parent = this;

	this.instance_75 = new lib.sxxcl_yl03大太阳轮_00133();
	this.instance_75.parent = this;

	this.instance_76 = new lib.sxxcl_yl03大太阳轮_00134();
	this.instance_76.parent = this;

	this.instance_77 = new lib.sxxcl_yl03大太阳轮_00135();
	this.instance_77.parent = this;

	this.instance_78 = new lib.sxxcl_yl03大太阳轮_00136();
	this.instance_78.parent = this;

	this.instance_79 = new lib.sxxcl_yl03大太阳轮_00137();
	this.instance_79.parent = this;

	this.instance_80 = new lib.sxxcl_yl03大太阳轮_00138();
	this.instance_80.parent = this;

	this.instance_81 = new lib.sxxcl_yl03大太阳轮_00139();
	this.instance_81.parent = this;

	this.instance_82 = new lib.sxxcl_yl03大太阳轮_00140();
	this.instance_82.parent = this;

	this.instance_83 = new lib.sxxcl_yl03大太阳轮_00141();
	this.instance_83.parent = this;

	this.instance_84 = new lib.sxxcl_yl03大太阳轮_00142();
	this.instance_84.parent = this;

	this.instance_85 = new lib.sxxcl_yl03大太阳轮_00143();
	this.instance_85.parent = this;

	this.instance_86 = new lib.sxxcl_yl03大太阳轮_00144();
	this.instance_86.parent = this;

	this.instance_87 = new lib.sxxcl_yl03大太阳轮_00145();
	this.instance_87.parent = this;

	this.instance_88 = new lib.sxxcl_yl03大太阳轮_00146();
	this.instance_88.parent = this;

	this.instance_89 = new lib.sxxcl_yl03大太阳轮_00147();
	this.instance_89.parent = this;

	this.instance_90 = new lib.sxxcl_yl03大太阳轮_00148();
	this.instance_90.parent = this;

	this.instance_91 = new lib.sxxcl_yl03大太阳轮_00149();
	this.instance_91.parent = this;

	this.instance_92 = new lib.sxxcl_yl03大太阳轮_00150();
	this.instance_92.parent = this;

	this.instance_93 = new lib.sxxcl_yl03大太阳轮_00151();
	this.instance_93.parent = this;

	this.instance_94 = new lib.sxxcl_yl03大太阳轮_00152();
	this.instance_94.parent = this;

	this.instance_95 = new lib.sxxcl_yl03大太阳轮_00153();
	this.instance_95.parent = this;

	this.instance_96 = new lib.sxxcl_yl03大太阳轮_00154();
	this.instance_96.parent = this;

	this.instance_97 = new lib.sxxcl_yl03大太阳轮_00155();
	this.instance_97.parent = this;

	this.instance_98 = new lib.sxxcl_yl03大太阳轮_00156();
	this.instance_98.parent = this;

	this.instance_99 = new lib.sxxcl_yl03大太阳轮_00157();
	this.instance_99.parent = this;

	this.instance_100 = new lib.sxxcl_yl03大太阳轮_00158();
	this.instance_100.parent = this;

	this.instance_101 = new lib.sxxcl_yl03大太阳轮_00159();
	this.instance_101.parent = this;

	this.instance_102 = new lib.sxxcl_yl03大太阳轮_00160();
	this.instance_102.parent = this;

	this.instance_103 = new lib.sxxcl_yl03大太阳轮_00161();
	this.instance_103.parent = this;

	this.instance_104 = new lib.sxxcl_yl03大太阳轮_00162();
	this.instance_104.parent = this;

	this.instance_105 = new lib.sxxcl_yl03大太阳轮_00163();
	this.instance_105.parent = this;

	this.instance_106 = new lib.sxxcl_yl03大太阳轮_00164();
	this.instance_106.parent = this;

	this.instance_107 = new lib.sxxcl_yl03大太阳轮_00165();
	this.instance_107.parent = this;

	this.instance_108 = new lib.sxxcl_yl03大太阳轮_00166();
	this.instance_108.parent = this;

	this.instance_109 = new lib.sxxcl_yl03大太阳轮_00167();
	this.instance_109.parent = this;

	this.instance_110 = new lib.sxxcl_yl03大太阳轮_00168();
	this.instance_110.parent = this;

	this.instance_111 = new lib.sxxcl_yl03大太阳轮_00169();
	this.instance_111.parent = this;

	this.instance_112 = new lib.sxxcl_yl03大太阳轮_00170();
	this.instance_112.parent = this;

	this.instance_113 = new lib.sxxcl_yl03大太阳轮_00171();
	this.instance_113.parent = this;

	this.instance_114 = new lib.sxxcl_yl03大太阳轮_00172();
	this.instance_114.parent = this;

	this.instance_115 = new lib.sxxcl_yl03大太阳轮_00173();
	this.instance_115.parent = this;

	this.instance_116 = new lib.sxxcl_yl03大太阳轮_00174();
	this.instance_116.parent = this;

	this.instance_117 = new lib.sxxcl_yl03大太阳轮_00175();
	this.instance_117.parent = this;

	this.instance_118 = new lib.sxxcl_yl03大太阳轮_00176();
	this.instance_118.parent = this;

	this.instance_119 = new lib.sxxcl_yl03大太阳轮_00177();
	this.instance_119.parent = this;

	this.instance_120 = new lib.sxxcl_yl03大太阳轮_00178();
	this.instance_120.parent = this;

	this.instance_121 = new lib.sxxcl_yl03大太阳轮_00179();
	this.instance_121.parent = this;

	this.instance_122 = new lib.sxxcl_yl03大太阳轮_00180();
	this.instance_122.parent = this;

	this.instance_123 = new lib.sxxcl_yl03大太阳轮_00181();
	this.instance_123.parent = this;

	this.instance_124 = new lib.sxxcl_yl03大太阳轮_00182();
	this.instance_124.parent = this;

	this.instance_125 = new lib.sxxcl_yl03大太阳轮_00183();
	this.instance_125.parent = this;

	this.instance_126 = new lib.sxxcl_yl03大太阳轮_00184();
	this.instance_126.parent = this;

	this.instance_127 = new lib.sxxcl_yl03大太阳轮_00185();
	this.instance_127.parent = this;

	this.instance_128 = new lib.sxxcl_yl03大太阳轮_00186();
	this.instance_128.parent = this;

	this.instance_129 = new lib.sxxcl_yl03大太阳轮_00187();
	this.instance_129.parent = this;

	this.instance_130 = new lib.sxxcl_yl03大太阳轮_00188();
	this.instance_130.parent = this;

	this.instance_131 = new lib.sxxcl_yl03大太阳轮_00189();
	this.instance_131.parent = this;

	this.instance_132 = new lib.sxxcl_yl03大太阳轮_00190();
	this.instance_132.parent = this;

	this.instance_133 = new lib.sxxcl_yl03大太阳轮_00191();
	this.instance_133.parent = this;

	this.instance_134 = new lib.sxxcl_yl03大太阳轮_00192();
	this.instance_134.parent = this;

	this.instance_135 = new lib.sxxcl_yl03大太阳轮_00193();
	this.instance_135.parent = this;

	this.instance_136 = new lib.sxxcl_yl03大太阳轮_00194();
	this.instance_136.parent = this;

	this.instance_137 = new lib.sxxcl_yl03大太阳轮_00195();
	this.instance_137.parent = this;

	this.instance_138 = new lib.sxxcl_yl03大太阳轮_00196();
	this.instance_138.parent = this;

	this.instance_139 = new lib.sxxcl_yl03大太阳轮_00197();
	this.instance_139.parent = this;

	this.instance_140 = new lib.sxxcl_yl03大太阳轮_00198();
	this.instance_140.parent = this;

	this.instance_141 = new lib.sxxcl_yl03大太阳轮_00199();
	this.instance_141.parent = this;

	this.instance_142 = new lib.sxxcl_yl03大太阳轮_00200();
	this.instance_142.parent = this;

	this.instance_143 = new lib.sxxcl_yl03大太阳轮_00201();
	this.instance_143.parent = this;

	this.instance_144 = new lib.sxxcl_yl03大太阳轮_00202();
	this.instance_144.parent = this;

	this.instance_145 = new lib.sxxcl_yl03大太阳轮_00203();
	this.instance_145.parent = this;

	this.instance_146 = new lib.sxxcl_yl03大太阳轮_00204();
	this.instance_146.parent = this;

	this.instance_147 = new lib.sxxcl_yl03大太阳轮_00205();
	this.instance_147.parent = this;

	this.instance_148 = new lib.sxxcl_yl03大太阳轮_00206();
	this.instance_148.parent = this;

	this.instance_149 = new lib.sxxcl_yl03大太阳轮_00207();
	this.instance_149.parent = this;

	this.instance_150 = new lib.sxxcl_yl03大太阳轮_00208();
	this.instance_150.parent = this;

	this.instance_151 = new lib.sxxcl_yl03大太阳轮_00209();
	this.instance_151.parent = this;

	this.instance_152 = new lib.sxxcl_yl03大太阳轮_00210();
	this.instance_152.parent = this;

	this.instance_153 = new lib.sxxcl_yl03大太阳轮_00211();
	this.instance_153.parent = this;

	this.instance_154 = new lib.sxxcl_yl03大太阳轮_00212();
	this.instance_154.parent = this;

	this.instance_155 = new lib.sxxcl_yl03大太阳轮_00213();
	this.instance_155.parent = this;

	this.instance_156 = new lib.sxxcl_yl03大太阳轮_00214();
	this.instance_156.parent = this;

	this.instance_157 = new lib.sxxcl_yl03大太阳轮_00215();
	this.instance_157.parent = this;

	this.instance_158 = new lib.sxxcl_yl03大太阳轮_00216();
	this.instance_158.parent = this;

	this.instance_159 = new lib.sxxcl_yl03大太阳轮_00217();
	this.instance_159.parent = this;

	this.instance_160 = new lib.sxxcl_yl03大太阳轮_00218();
	this.instance_160.parent = this;

	this.instance_161 = new lib.sxxcl_yl03大太阳轮_00219();
	this.instance_161.parent = this;

	this.instance_162 = new lib.sxxcl_yl03大太阳轮_00220();
	this.instance_162.parent = this;

	this.instance_163 = new lib.sxxcl_yl03大太阳轮_00221();
	this.instance_163.parent = this;

	this.instance_164 = new lib.sxxcl_yl03大太阳轮_00222();
	this.instance_164.parent = this;

	this.instance_165 = new lib.sxxcl_yl03大太阳轮_00223();
	this.instance_165.parent = this;

	this.instance_166 = new lib.sxxcl_yl03大太阳轮_00224();
	this.instance_166.parent = this;

	this.instance_167 = new lib.sxxcl_yl03大太阳轮_00225();
	this.instance_167.parent = this;

	this.instance_168 = new lib.sxxcl_yl03大太阳轮_00226();
	this.instance_168.parent = this;

	this.instance_169 = new lib.sxxcl_yl03大太阳轮_00227();
	this.instance_169.parent = this;

	this.instance_170 = new lib.sxxcl_yl03大太阳轮_00228();
	this.instance_170.parent = this;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,482.9,476);


(lib.houtui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_155 = function() {
		this.gotoAndPlay(104);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(155).call(this.frame_155).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmCAnSMAAAhOjMBMFAAAMAAABOjg");
	mask.setTransform(243.5,251.4);

	// 图层 1
	this.instance = new lib.sxxcl_yl4大太阳轮_00000();
	this.instance.parent = this;

	this.instance_1 = new lib.sxxcl_yl4大太阳轮_00001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.sxxcl_yl4大太阳轮_00002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.sxxcl_yl4大太阳轮_00003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.sxxcl_yl4大太阳轮_00004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.sxxcl_yl4大太阳轮_00005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.sxxcl_yl4大太阳轮_00006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.sxxcl_yl4大太阳轮_00007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.sxxcl_yl4大太阳轮_00008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.sxxcl_yl4大太阳轮_00009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.sxxcl_yl4大太阳轮_00010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.sxxcl_yl4大太阳轮_00011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.sxxcl_yl4大太阳轮_00012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.sxxcl_yl4大太阳轮_00013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.sxxcl_yl4大太阳轮_00014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.sxxcl_yl4大太阳轮_00015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.sxxcl_yl4大太阳轮_00016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.sxxcl_yl4大太阳轮_00017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.sxxcl_yl4大太阳轮_00018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.sxxcl_yl4大太阳轮_00019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.sxxcl_yl4大太阳轮_00020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.sxxcl_yl4大太阳轮_00021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.sxxcl_yl4大太阳轮_00022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.sxxcl_yl4大太阳轮_00023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.sxxcl_yl4大太阳轮_00024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.sxxcl_yl4大太阳轮_00025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.sxxcl_yl4大太阳轮_00026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.sxxcl_yl4大太阳轮_00027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.sxxcl_yl4大太阳轮_00028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.sxxcl_yl4大太阳轮_00029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.sxxcl_yl4大太阳轮_00030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.sxxcl_yl4大太阳轮_00031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.sxxcl_yl4大太阳轮_00032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.sxxcl_yl4大太阳轮_00033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.sxxcl_yl4大太阳轮_00034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.sxxcl_yl4大太阳轮_00035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.sxxcl_yl4大太阳轮_00036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.sxxcl_yl4大太阳轮_00037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.sxxcl_yl4大太阳轮_00038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.sxxcl_yl4大太阳轮_00039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.sxxcl_yl4大太阳轮_00040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.sxxcl_yl4大太阳轮_00041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.sxxcl_yl4大太阳轮_00042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.sxxcl_yl4大太阳轮_00043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.sxxcl_yl4大太阳轮_00044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.sxxcl_yl4大太阳轮_00045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.sxxcl_yl4大太阳轮_00046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.sxxcl_yl4大太阳轮_00047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.sxxcl_yl4大太阳轮_00048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.sxxcl_yl4大太阳轮_00049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.sxxcl_yl4大太阳轮_00050();
	this.instance_50.parent = this;

	this.instance_51 = new lib.sxxcl_yl4大太阳轮_00051();
	this.instance_51.parent = this;

	this.instance_52 = new lib.sxxcl_yl4大太阳轮_00052();
	this.instance_52.parent = this;

	this.instance_53 = new lib.sxxcl_yl4大太阳轮_00053();
	this.instance_53.parent = this;

	this.instance_54 = new lib.sxxcl_yl4大太阳轮_00054();
	this.instance_54.parent = this;

	this.instance_55 = new lib.sxxcl_yl4大太阳轮_00055();
	this.instance_55.parent = this;

	this.instance_56 = new lib.sxxcl_yl4大太阳轮_00056();
	this.instance_56.parent = this;

	this.instance_57 = new lib.sxxcl_yl4大太阳轮_00057();
	this.instance_57.parent = this;

	this.instance_58 = new lib.sxxcl_yl4大太阳轮_00058();
	this.instance_58.parent = this;

	this.instance_59 = new lib.sxxcl_yl4大太阳轮_00059();
	this.instance_59.parent = this;

	this.instance_60 = new lib.sxxcl_yl4大太阳轮_00060();
	this.instance_60.parent = this;

	this.instance_61 = new lib.sxxcl_yl4大太阳轮_00061();
	this.instance_61.parent = this;

	this.instance_62 = new lib.sxxcl_yl4大太阳轮_00062();
	this.instance_62.parent = this;

	this.instance_63 = new lib.sxxcl_yl4大太阳轮_00063();
	this.instance_63.parent = this;

	this.instance_64 = new lib.sxxcl_yl4大太阳轮_00064();
	this.instance_64.parent = this;

	this.instance_65 = new lib.sxxcl_yl4大太阳轮_00065();
	this.instance_65.parent = this;

	this.instance_66 = new lib.sxxcl_yl4大太阳轮_00066();
	this.instance_66.parent = this;

	this.instance_67 = new lib.sxxcl_yl4大太阳轮_00067();
	this.instance_67.parent = this;

	this.instance_68 = new lib.sxxcl_yl4大太阳轮_00068();
	this.instance_68.parent = this;

	this.instance_69 = new lib.sxxcl_yl4大太阳轮_00069();
	this.instance_69.parent = this;

	this.instance_70 = new lib.sxxcl_yl4大太阳轮_00070();
	this.instance_70.parent = this;

	this.instance_71 = new lib.sxxcl_yl4大太阳轮_00071();
	this.instance_71.parent = this;

	this.instance_72 = new lib.sxxcl_yl4大太阳轮_00072();
	this.instance_72.parent = this;

	this.instance_73 = new lib.sxxcl_yl4大太阳轮_00073();
	this.instance_73.parent = this;

	this.instance_74 = new lib.sxxcl_yl4大太阳轮_00074();
	this.instance_74.parent = this;

	this.instance_75 = new lib.sxxcl_yl4大太阳轮_00075();
	this.instance_75.parent = this;

	this.instance_76 = new lib.sxxcl_yl4大太阳轮_00076();
	this.instance_76.parent = this;

	this.instance_77 = new lib.sxxcl_yl4大太阳轮_00077();
	this.instance_77.parent = this;

	this.instance_78 = new lib.sxxcl_yl4大太阳轮_00078();
	this.instance_78.parent = this;

	this.instance_79 = new lib.sxxcl_yl4大太阳轮_00079();
	this.instance_79.parent = this;

	this.instance_80 = new lib.sxxcl_yl4大太阳轮_00080();
	this.instance_80.parent = this;

	this.instance_81 = new lib.sxxcl_yl4大太阳轮_00081();
	this.instance_81.parent = this;

	this.instance_82 = new lib.sxxcl_yl4大太阳轮_00082();
	this.instance_82.parent = this;

	this.instance_83 = new lib.sxxcl_yl4大太阳轮_00083();
	this.instance_83.parent = this;

	this.instance_84 = new lib.sxxcl_yl4大太阳轮_00084();
	this.instance_84.parent = this;

	this.instance_85 = new lib.sxxcl_yl4大太阳轮_00085();
	this.instance_85.parent = this;

	this.instance_86 = new lib.sxxcl_yl4大太阳轮_00086();
	this.instance_86.parent = this;

	this.instance_87 = new lib.sxxcl_yl4大太阳轮_00087();
	this.instance_87.parent = this;

	this.instance_88 = new lib.sxxcl_yl4大太阳轮_00088();
	this.instance_88.parent = this;

	this.instance_89 = new lib.sxxcl_yl4大太阳轮_00089();
	this.instance_89.parent = this;

	this.instance_90 = new lib.sxxcl_yl4大太阳轮_00090();
	this.instance_90.parent = this;

	this.instance_91 = new lib.sxxcl_yl4大太阳轮_00091();
	this.instance_91.parent = this;

	this.instance_92 = new lib.sxxcl_yl4大太阳轮_00092();
	this.instance_92.parent = this;

	this.instance_93 = new lib.sxxcl_yl4大太阳轮_00093();
	this.instance_93.parent = this;

	this.instance_94 = new lib.sxxcl_yl4大太阳轮_00094();
	this.instance_94.parent = this;

	this.instance_95 = new lib.sxxcl_yl4大太阳轮_00095();
	this.instance_95.parent = this;

	this.instance_96 = new lib.sxxcl_yl4大太阳轮_00096();
	this.instance_96.parent = this;

	this.instance_97 = new lib.sxxcl_yl4大太阳轮_00097();
	this.instance_97.parent = this;

	this.instance_98 = new lib.sxxcl_yl4大太阳轮_00098();
	this.instance_98.parent = this;

	this.instance_99 = new lib.sxxcl_yl4大太阳轮_00099();
	this.instance_99.parent = this;

	this.instance_100 = new lib.sxxcl_yl4大太阳轮_00100();
	this.instance_100.parent = this;

	this.instance_101 = new lib.sxxcl_yl4大太阳轮_00101();
	this.instance_101.parent = this;

	this.instance_102 = new lib.sxxcl_yl4大太阳轮_00102();
	this.instance_102.parent = this;

	this.instance_103 = new lib.sxxcl_yl4大太阳轮_00103();
	this.instance_103.parent = this;

	this.instance_104 = new lib.sxxcl_yl4大太阳轮_00104();
	this.instance_104.parent = this;

	this.instance_105 = new lib.sxxcl_yl4大太阳轮_00105();
	this.instance_105.parent = this;

	this.instance_106 = new lib.sxxcl_yl4大太阳轮_00106();
	this.instance_106.parent = this;

	this.instance_107 = new lib.sxxcl_yl4大太阳轮_00107();
	this.instance_107.parent = this;

	this.instance_108 = new lib.sxxcl_yl4大太阳轮_00108();
	this.instance_108.parent = this;

	this.instance_109 = new lib.sxxcl_yl4大太阳轮_00109();
	this.instance_109.parent = this;

	this.instance_110 = new lib.sxxcl_yl4大太阳轮_00110();
	this.instance_110.parent = this;

	this.instance_111 = new lib.sxxcl_yl4大太阳轮_00111();
	this.instance_111.parent = this;

	this.instance_112 = new lib.sxxcl_yl4大太阳轮_00112();
	this.instance_112.parent = this;

	this.instance_113 = new lib.sxxcl_yl4大太阳轮_00113();
	this.instance_113.parent = this;

	this.instance_114 = new lib.sxxcl_yl4大太阳轮_00114();
	this.instance_114.parent = this;

	this.instance_115 = new lib.sxxcl_yl4大太阳轮_00115();
	this.instance_115.parent = this;

	this.instance_116 = new lib.sxxcl_yl4大太阳轮_00116();
	this.instance_116.parent = this;

	this.instance_117 = new lib.sxxcl_yl4大太阳轮_00117();
	this.instance_117.parent = this;

	this.instance_118 = new lib.sxxcl_yl4大太阳轮_00118();
	this.instance_118.parent = this;

	this.instance_119 = new lib.sxxcl_yl4大太阳轮_00119();
	this.instance_119.parent = this;

	this.instance_120 = new lib.sxxcl_yl4大太阳轮_00120();
	this.instance_120.parent = this;

	this.instance_121 = new lib.sxxcl_yl4大太阳轮_00121();
	this.instance_121.parent = this;

	this.instance_122 = new lib.sxxcl_yl4大太阳轮_00122();
	this.instance_122.parent = this;

	this.instance_123 = new lib.sxxcl_yl4大太阳轮_00123();
	this.instance_123.parent = this;

	this.instance_124 = new lib.sxxcl_yl4大太阳轮_00124();
	this.instance_124.parent = this;

	this.instance_125 = new lib.sxxcl_yl4大太阳轮_00125();
	this.instance_125.parent = this;

	this.instance_126 = new lib.sxxcl_yl4大太阳轮_00126();
	this.instance_126.parent = this;

	this.instance_127 = new lib.sxxcl_yl4大太阳轮_00127();
	this.instance_127.parent = this;

	this.instance_128 = new lib.sxxcl_yl4大太阳轮_00128();
	this.instance_128.parent = this;

	this.instance_129 = new lib.sxxcl_yl4大太阳轮_00129();
	this.instance_129.parent = this;

	this.instance_130 = new lib.sxxcl_yl4大太阳轮_00130();
	this.instance_130.parent = this;

	this.instance_131 = new lib.sxxcl_yl4大太阳轮_00131();
	this.instance_131.parent = this;

	this.instance_132 = new lib.sxxcl_yl4大太阳轮_00132();
	this.instance_132.parent = this;

	this.instance_133 = new lib.sxxcl_yl4大太阳轮_00133();
	this.instance_133.parent = this;

	this.instance_134 = new lib.sxxcl_yl4大太阳轮_00134();
	this.instance_134.parent = this;

	this.instance_135 = new lib.sxxcl_yl4大太阳轮_00135();
	this.instance_135.parent = this;

	this.instance_136 = new lib.sxxcl_yl4大太阳轮_00136();
	this.instance_136.parent = this;

	this.instance_137 = new lib.sxxcl_yl4大太阳轮_00137();
	this.instance_137.parent = this;

	this.instance_138 = new lib.sxxcl_yl4大太阳轮_00138();
	this.instance_138.parent = this;

	this.instance_139 = new lib.sxxcl_yl4大太阳轮_00139();
	this.instance_139.parent = this;

	this.instance_140 = new lib.sxxcl_yl4大太阳轮_00140();
	this.instance_140.parent = this;

	this.instance_141 = new lib.sxxcl_yl4大太阳轮_00141();
	this.instance_141.parent = this;

	this.instance_142 = new lib.sxxcl_yl4大太阳轮_00142();
	this.instance_142.parent = this;

	this.instance_143 = new lib.sxxcl_yl4大太阳轮_00143();
	this.instance_143.parent = this;

	this.instance_144 = new lib.sxxcl_yl4大太阳轮_00144();
	this.instance_144.parent = this;

	this.instance_145 = new lib.sxxcl_yl4大太阳轮_00145();
	this.instance_145.parent = this;

	this.instance_146 = new lib.sxxcl_yl4大太阳轮_00146();
	this.instance_146.parent = this;

	this.instance_147 = new lib.sxxcl_yl4大太阳轮_00147();
	this.instance_147.parent = this;

	this.instance_148 = new lib.sxxcl_yl4大太阳轮_00148();
	this.instance_148.parent = this;

	this.instance_149 = new lib.sxxcl_yl4大太阳轮_00149();
	this.instance_149.parent = this;

	this.instance_150 = new lib.sxxcl_yl4大太阳轮_00150();
	this.instance_150.parent = this;

	this.instance_151 = new lib.sxxcl_yl4大太阳轮_00151();
	this.instance_151.parent = this;

	this.instance_152 = new lib.sxxcl_yl4大太阳轮_00152();
	this.instance_152.parent = this;

	this.instance_153 = new lib.sxxcl_yl4大太阳轮_00153();
	this.instance_153.parent = this;

	this.instance_154 = new lib.sxxcl_yl4大太阳轮_00154();
	this.instance_154.parent = this;

	this.instance_155 = new lib.sxxcl_yl4大太阳轮_00155();
	this.instance_155.parent = this;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,487,502.8);


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


(lib.Page20_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s20_4.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(30).call(this.frame_39).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EAiHAcKIAAsEMBCDAAAIAAMEg");
	var mask_graphics_10 = new cjs.Graphics().p("EAiHAcYIAAsgMBCDAAAIAAMgg");
	var mask_graphics_11 = new cjs.Graphics().p("EAiHAcmIAAs8MBCDAAAIAAM8g");
	var mask_graphics_12 = new cjs.Graphics().p("EAiHAc1IAAtaMBCDAAAIAANag");
	var mask_graphics_13 = new cjs.Graphics().p("EAiHAdDIAAt2MBCDAAAIAAN2g");
	var mask_graphics_14 = new cjs.Graphics().p("EAiHAdSIAAuTMBCDAAAIAAOTg");
	var mask_graphics_15 = new cjs.Graphics().p("EAiHAdgIAAuwMBCDAAAIAAOwg");
	var mask_graphics_16 = new cjs.Graphics().p("EAiHAduIAAvMMBCDAAAIAAPMg");
	var mask_graphics_17 = new cjs.Graphics().p("EAiHAd9IAAvqMBCDAAAIAAPqg");
	var mask_graphics_18 = new cjs.Graphics().p("EAiHAeLIAAwGMBCDAAAIAAQGg");
	var mask_graphics_19 = new cjs.Graphics().p("EAiHAeaIAAwjMBCDAAAIAAQjg");
	var mask_graphics_20 = new cjs.Graphics().p("EAiHAeoIAAxAMBCDAAAIAARAg");
	var mask_graphics_21 = new cjs.Graphics().p("EAiHAe2IAAxcMBCDAAAIAARcg");
	var mask_graphics_22 = new cjs.Graphics().p("EAiHAfFIAAx6MBCDAAAIAAR6g");
	var mask_graphics_23 = new cjs.Graphics().p("EAiHAfTIAAyWMBCDAAAIAASWg");
	var mask_graphics_24 = new cjs.Graphics().p("EAiHAfiIAAyzMBCDAAAIAASzg");
	var mask_graphics_25 = new cjs.Graphics().p("EAiHAfwIAAzQMBCDAAAIAATQg");
	var mask_graphics_26 = new cjs.Graphics().p("EAiHAf+IAAzsMBCDAAAIAATsg");
	var mask_graphics_27 = new cjs.Graphics().p("EAiHAgNIAA0KMBCDAAAIAAUKg");
	var mask_graphics_28 = new cjs.Graphics().p("EAiHAgbIAA0mMBCDAAAIAAUmg");
	var mask_graphics_29 = new cjs.Graphics().p("EAiHAgqIAA1DMBCDAAAIAAVDg");
	var mask_graphics_30 = new cjs.Graphics().p("EAiHAg4IAA1gMBCDAAAIAAVgg");
	var mask_graphics_31 = new cjs.Graphics().p("EAiHAhHIAA19MBCDAAAIAAV9g");
	var mask_graphics_32 = new cjs.Graphics().p("EAiHAhVIAA2aMBCDAAAIAAWag");
	var mask_graphics_33 = new cjs.Graphics().p("EAiHAhjIAA22MBCDAAAIAAW2g");
	var mask_graphics_34 = new cjs.Graphics().p("EAiHAhyIAA3UMBCDAAAIAAXUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:641,y:180.2}).wait(1).to({graphics:mask_graphics_10,x:641,y:181.6}).wait(1).to({graphics:mask_graphics_11,x:641,y:183}).wait(1).to({graphics:mask_graphics_12,x:641,y:184.5}).wait(1).to({graphics:mask_graphics_13,x:641,y:185.9}).wait(1).to({graphics:mask_graphics_14,x:641,y:187.4}).wait(1).to({graphics:mask_graphics_15,x:641,y:188.8}).wait(1).to({graphics:mask_graphics_16,x:641,y:190.2}).wait(1).to({graphics:mask_graphics_17,x:641,y:191.7}).wait(1).to({graphics:mask_graphics_18,x:641,y:193.1}).wait(1).to({graphics:mask_graphics_19,x:641,y:194.6}).wait(1).to({graphics:mask_graphics_20,x:641,y:196}).wait(1).to({graphics:mask_graphics_21,x:641,y:197.4}).wait(1).to({graphics:mask_graphics_22,x:641,y:198.9}).wait(1).to({graphics:mask_graphics_23,x:641,y:200.3}).wait(1).to({graphics:mask_graphics_24,x:641,y:201.8}).wait(1).to({graphics:mask_graphics_25,x:641,y:203.2}).wait(1).to({graphics:mask_graphics_26,x:641,y:204.6}).wait(1).to({graphics:mask_graphics_27,x:641,y:206.1}).wait(1).to({graphics:mask_graphics_28,x:641,y:207.5}).wait(1).to({graphics:mask_graphics_29,x:641,y:209}).wait(1).to({graphics:mask_graphics_30,x:641,y:210.4}).wait(1).to({graphics:mask_graphics_31,x:641,y:211.9}).wait(1).to({graphics:mask_graphics_32,x:641,y:213.3}).wait(1).to({graphics:mask_graphics_33,x:641,y:214.7}).wait(1).to({graphics:mask_graphics_34,x:641,y:216.2}).wait(6));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858C91").s().p("AhHA0IAIABQAGgBABgBIABgGIAAgYIgMAFIgDgUIAPgFIAAgcIgOAAIAAgTIAOAAIAAgYIATAAIAAAYIANAAIAAATIgNAAIAAAXIAOgEIAAATIgOAEIAAAlQAAALgFAEQgEAEgVABIgFgUgAAxBHIAAgHIhKAAIAAgTIBKAAIAAgSIhBAAIAAgRIBBAAIAAgRIhEAAIAAgSIAfAAIAAgtIATAAIAAAtIAlAAIAABggAAiglQAMgOAKgPIAQALIgYAcgAgag4IAOgKIAUAbIgOALIgUgcg");
	this.shape.setTransform(938.3,421.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858C91").s().p("AgEBJIAAgcIhCAAIAAgSIBCAAIAAgPIg1AAIAAgQQAKgQAHgQIgaAAIAAgSIAjAAIAHgSIAWADIgGAPIBJAAIAAASIhSAAIgQAeIAdAAIAAgXIATAAIAAAXIAqAAIAAASIgqAAIAAAPIA4AAIAAASIg4AAIAAAcg");
	this.shape_1.setTransform(923.5,421.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858C91").s().p("Ag4BJIAAhDIgIAQIgFgaQANgdAHgnIATAEIgIAgIAABtgAAeBGIgCgSIARABQAHAAAAgHIAAh0IASAAIAAB6QAAAMgHAEQgGACgQAAIgLAAgAgiAvIAVgDIAAgTIgSAAIAAgQIASAAIAAgNIAQAAIAAANIASAAIAAAQIgSAAIAAARIAVgDIgBASIg2AIgAAdAmIAAhYIAOAAIAABYgAAJgJIgmAEIgFgOQAGgFAJgWIgKAAIAAgRIAyAAIAAARIgWAAIgNAYIARgCIgEgMIANgFIAOAjIgOAGg");
	this.shape_2.setTransform(908.2,421.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858C91").s().p("AgNA5QAQgMANgPQgFgWgCgmIgyAAIAAASIApAAIAAAYQgBAXgDAGQgDAFgFAEQgEADgVgBIgDgVIALABQAIAAABgIIABgUIgWAAQAAAugOAWQgIgHgJgHQAMgUAAglIAAgwIBEAAIgBgYIAVAAIAAAYIAUAAIgMgQIAPgIIAPASIgLAGIAQAAIAAARIgqAAQAAAXADAQQAJgOAIgSIASAJQgNAbgQAWQAFAOAFAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBIACgKIABgPIATAJQAAAIgEANQgDANgFADQgFAEgGAAQgQAAgKgUQgLALgLAJQgGgIgJgHg");
	this.shape_3.setTransform(893.5,421.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858C91").s().p("AAEA2QAfgPAXgaIAPANQgaAegeARIgNgTgAhIA4QAPgRABgjIgPAAIAAgRIAQAAIAAghIgMAAIAAgRIBQAAIAAARIgNAAIAAAhIAQAAIAAAQQAXgNASgUIAOANQgVAWgbASQgGgHgIgJIAGgDIgPAAIAABCIgTAAIAAhCIgRAAQgCAugSAXIgQgRgAgkgNIARAAIAAghIgRAAgAAIgnQAbgOASgSIAPALQgUAVgZARQgHgJgIgIg");
	this.shape_4.setTransform(1257.1,397.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858C91").s().p("AgNAUIAIgnIATAAIgLAng");
	this.shape_5.setTransform(1237.9,402.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858C91").s().p("AAtBIIAAgHIhtAAIAAg3IAVAAIAAAkIAhAAIAAgwIgxAAIAAg4IAUAAIAAAlIAdAAIAAgyIAVAAIAAAyIAcAAIAAglIAUAAIAAA4IgwAAIAAAwIAiAAIAAgkIAUAAIAAA+g");
	this.shape_6.setTransform(1226.8,397.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858C91").s().p("AgSBIIAAhXIArAAIAABIQAAAOgOAAIgKAAIgBgQIAGAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAIAAgJIgNAAIAAAdgAgDAdIANAAIAAgJIgNAAgAgDAGIANAAIAAgHIgNAAgAgwBIIAAgaIgXADIgBgTIAYgBIAAgNIgXAAIAAgUQAEgOADgRIgIAAIAAgSIALAAIADgSIARABIgDARIAZAAIAAARQAWgOALgUIAYAAIgDAFQAQAWAWALIgLAQIgPgKIAAAFIgyAAIAAgEIgMAIIgLgPIAFgDIgbAAIgHAiIAHAAIAAgaIARAAIAAAaIAIAAIAAARIgIAAIAAALIAJAAIAAARIgJABIAAAbgAAKglIAZAAIgNgOIgMAOgAAiBHIgEgSIANABQAGAAgBgJIAAg7IARAAIAABCQAAATgPAAIgQAAgAAdArIAAgzIANAAIAAAzg");
	this.shape_7.setTransform(1211.7,397.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858C91").s().p("Ag1A6QAFgEAAgKIAAgXIgVAAIAAgRIAVAAIAAgOIgLAAIgHAJIgGgYQANgUAGgbIAUAEIgFAOIAhAAIAAARIgnAAIgFAKIAkAAIAAARIgPAAIAAAOIAXAAIAAARIgXAAIAAAWIAWgNIABAUIgbAPQgFADgFAFgAAVBIIAAhQIgcAAIAAgUIAcAAIAAgsIAWAAIAAAsIAeAAIAAAUIgeAAIAABQg");
	this.shape_8.setTransform(1196.5,397.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858C91").s().p("AAHBHIgEgVIAWAAQALABAAgMIAAhBIgqAAIAAgUIAqAAIAAgYIAVAAIAAAYIAMAAIAAAUIgMAAIAABIQAAAMgGAGQgFAHgKAAIgdAAgAhEBBIAAh+IA5AAIAAB9IgTAAIAAgKIgTAAIAAALgAgxAiIATAAIAAgdIgTAAgAgxgNIATAAIAAgcIgTAAgAgJgIIAOgKIAbAiIgSAMQgNgWgKgOg");
	this.shape_9.setTransform(1181.7,397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AhHAzIAPgNIAAglIgOAAIAAgRIAhAAIAAA2QAMANAZAAQBGAAACgBIgGAUQgxAAgYgBQgZAAgNgNIgRARgAgRAjQAOgHAFgMIgaAAIAAgoIATAAIAAAZIAOAAQABgIAAgYIgmAAIAAgPIAXAAIgNgPIANgLQAIAHAKAMIgIAHIASAAIAQgaIASAKIgMAQIAXAAIAAAPIgnAAIgBAgIARAAIAAgZIATAAIAAAxIgTAAIAAgJIgUAAQgHAVgVANIgOgPgAhEg7IAQgJIATAbIgRALIgSgdg");
	this.shape_10.setTransform(1166.3,397);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AAvBFIAAgFIhdAAIAAAFIgTAAIAAiJICDAAIAACJgAguAwIBdAAIAAgpIgGAJQgJgEgKgGQAAANgCACIgEAEQgCABgUAAIgDgKIAJAAIAFAAQABgBABgFIgVAAIAAAPQAAAGAHAAIAXAAQAEAAADgCQACgCACgKIAPAFQgCALgDADQgDAEgFABQgFACgIAAIgeAAQgQAAAAgPIAAgPIgMAHIgEgHgAguAEQANgEAIgHIgTAAIAAgNIAeAAIADgFIgfAAIAAgMIAMAAIgGgIIAOgFIAJANIAFAAIABgNIAQAAIgBANIAHAAIAJgMIAPADIgIAJIAMAAIAAAMIgmAAIgCAFIAqAAIAAANIgUAAQAJAGANADIAAg2IhdAAgAgLAAIAaAAIgHgHIgMAAIgHAHg");
	this.shape_11.setTransform(1151.1,397.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AArBIIAAgGIhoAAIAAhHIAUAAIAAAfQAjgOAAgYIhBAAIAAgRIAUAAIAAghIAUAAIAAAhIAZAAIAAgqIATAAIAAANIAwAAIAAARIgwAAIAAAMIA7AAIAAARIg7AAQgBAJgBAGIAgAUIAAgcIAVAAIAABNgAgpAxIBUAAIAAgVIgKAOIgfgXQgJAMgWAMIgMgQg");
	this.shape_12.setTransform(1135.9,397);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("AgOAUIAJgnIATAAIgLAng");
	this.shape_13.setTransform(1116.7,402.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("AhIA4QATgTAEgiIAVACIgGAVQAIAUATADIAAg0Ig9AAIAAgSICKAAIAAASIg6AAIAAAPIAyAAIAAASIgyAAIAAAUIA9gBIgHAUQg0AAgWgBQgYgCgKgSQgHAPgLAKIgMgRgAAvgaIAAgLIhcAAIAAALIgVAAIAAgdIA5AAIgFgLIAWgGIAGARIA1AAIAAAdg");
	this.shape_14.setTransform(1105.6,397);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AAuBFIAAgFIhbAAIAAAFIgVAAIAAiJICEAAIAACJgAgtAvIBbAAIAAhiIhbAAgAgjAlIAAgvIAZAAIAAgLIgfAAIAAgQIAfAAIAAgKIAVAAIAAAKIAfAAIAAAQIgfAAIAAALIAZAAIAAAvgAgQAVIAhAAIAAgPIghAAg");
	this.shape_15.setTransform(1090.5,397.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AgEA5QgDAKgEAGIgSgMQAIgMADgTIgIAHIgMgQIAAA0IgRAAIAAgzIgMAMIgFgXQAQgPAJgTIgWAAIAAgTIAYAAIgOgVIARgIIAQAUIgQAJIARAAIAAAQQgGANgHALIAAAMIANgUIAJAHIAAgyIAiAAIAAgTIATAAIAAATIAhAAIAAAQIgDARIgSAAIACgQIgOAAIAAAWIAeAAIAAARQgHAVgOARQAMAHAPAEIgNAUQgQgGgMgLQgMALgPAHIgJgQgAgCA1QALgFAJgHQgKgMgGgQIANgKIgOAAQAAAhgDARgAAgAcQAKgLAEgOIgdAAQAGAOAJALgAgbAPIAKAJQABgKAAgNgAABgOIARAAIAAgWIgRAAg");
	this.shape_16.setTransform(1075.3,397);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AgJBIIAAgmQgTAWgiAOQgEgJgGgIQAagJAUgRIgsAAIAAgQIA9AAIAAgLIATAAIAAALIA9AAIAAAQIguAAQASAQAeAJQgGAJgEAJQgggMgVgYIAAAmgAhIgGQATgPACgWIgQAAIAAgQIARAAIAAgMIASAAIAAAMIAgAAQgBAtgDAFQgCAFgDADQgFACgWAAIgGgPQgFAMgMAHQgEgFgJgGgAgpgPIAOAAQAFAAABgDQABgDABgWIgPAAQgBASgGAKgAAIgEIAAg6IA4AAIAAA6gAAbgTIASAAIAAgbIgSAAg");
	this.shape_17.setTransform(1060.2,397.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AhEBDIAAgPIA/AAIAAgKIgrAAIAAgPIgJALIgOgLQAOgQAJgRIgIAAIAAg8IBzAAIAAA8IgsAAIAAAIIAzAAIAAAQIgzAAIAAAJIAvAAIAAAPIgvAAIAAAKIA5AAIAAAPgAgvAbIAqAAIAAgJIgkAAIgGAJgAgdgCIgDAEIAbAAIAAgIIggAAgAgjgVIBKAAIAAgIIhKAAgAgjgqIBKAAIAAgIIhKAAg");
	this.shape_18.setTransform(1044.9,397.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AgFA0IAXABQALAAAAgMIAAgpIgqAAIAAgTIBWAAIAAATIgXAAIAAAuQAAAMgGAGQgFAHgKAAIgdABIgFgUgAgyBHIAAg1IgOAMIgIgUQAWgTASgYIAQALIgNATIAABKgAhIgmQAZgSAMgPIARANQgPARgZAVQgGgIgIgKgAgJgqIAAgTIBMAAIAAATg");
	this.shape_19.setTransform(1029.9,397);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("AgNAUIAIgnIATAAIgLAng");
	this.shape_20.setTransform(1010.6,402.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858C91").s().p("AhIA0QAtggARgwQgKgRgQgPIATgLQAQANAUAqQAVAqAhAYIgTAVQgggfgVgqQgRArgnAfIgRgUg");
	this.shape_21.setTransform(999.5,397.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858C91").s().p("AgSBIIAAhXIArAAIAABIQAAAOgOAAIgKAAIgBgQIAHAAQAAAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAIAAgJIgNAAIAAAdgAgDAdIANAAIAAgJIgNAAgAgDAGIANAAIAAgHIgNAAgAgwBIIAAgaIgXADIgBgTIAYgBIAAgNIgXAAIAAgUQAEgOADgRIgIAAIAAgSIALAAIADgSIARABIgDARIAZAAIAAARQAWgOALgUIAYAAIgDAFQAQAWAWALIgLAQIgPgKIAAAFIgyAAIAAgEIgMAIIgLgPIAFgDIgbAAIgHAiIAHAAIAAgaIARAAIAAAaIAIAAIAAARIgIAAIAAALIAJAAIAAARIgJABIAAAbgAAKglIAZAAIgNgOIgMAOgAAiBHIgEgSIANABQAFAAAAgJIAAg7IARAAIAABCQAAATgPAAIgQAAgAAdArIAAgzIAOAAIAAAzg");
	this.shape_22.setTransform(984.5,397.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858C91").s().p("Ag1A6QAFgEAAgKIAAgXIgVAAIAAgRIAVAAIAAgOIgLAAIgHAJIgGgYQANgUAGgbIAUAEIgFAOIAhAAIAAARIgnAAIgFAKIAkAAIAAARIgPAAIAAAOIAXAAIAAARIgXAAIAAAWIAWgNIABAUIgbAPQgFADgFAFgAAVBIIAAhQIgcAAIAAgUIAcAAIAAgsIAWAAIAAAsIAeAAIAAAUIgeAAIAABQg");
	this.shape_23.setTransform(969.2,397.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858C91").s().p("AAHBHIgEgVIAWAAQALABAAgMIAAhBIgqAAIAAgUIAqAAIAAgYIAVAAIAAAYIAMAAIAAAUIgMAAIAABIQAAAMgGAGQgFAHgJAAIgeAAgAhEBBIAAh+IA5AAIAAB9IgTAAIAAgKIgTAAIAAALgAgxAiIATAAIAAgdIgTAAgAgxgNIATAAIAAgcIgTAAgAgJgIIAOgKIAbAiIgSAMQgNgWgKgOg");
	this.shape_24.setTransform(954.5,397);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858C91").s().p("AAiAvQgKAQgXAJIgIgPIAAAMIgPAAIAAiLIAPAAIAAB+QAUgJAGgKQAGgLAAgVIAAgWIARAAIAAAYQAAAOgCAKIAhAXIgLASIgcgZgAhIA3QAFgLACgPQACgPgBgYIAAg8IARAAIAAA8QAAAhgDARQgCARgJAPIgLgRgAgpA5IAAh5IAMAAIAAB5gAAyAlIAAg7IgiAAIAAA7IgQAAIAAhMIAVAAIABgLIgYAAIAAgSIBJAAIAAASIgeAAIgBALIAbAAIAABMg");
	this.shape_25.setTransform(939,397.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#858C91").s().p("AhEA5QAugcAGgxIgxAAIAAgTIAaAAIgSgVIAPgLIAUAUIgNAMIAVAAIACggIAVAAIgCAgIA+AAIgDA4QgCAbgBAGQgBAFgEAFQgEAFgGACQgGACgPAAIgXABQgBgJgEgNIAcABQAIAAADgBQADgCACgDIACgUIADgrIgrAAQgBANgEALIAOgLIAYAUIgPAQQgNgQgKgIQgLAqgoAaIgRgQg");
	this.shape_26.setTransform(923.5,397.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_27.setTransform(908.7,397.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858C91").s().p("AhCBFIAAiJIA0AAIAAAOIgLApQANAOgBAYQABANgIAGQgGAGgQAAQgCgMgCgKIAGABQAIAAAAgHQAAgTgNgOIALgoIgNAAIAAB4gAAvBFIAAgKIgkAAIAAAKIgTAAIAAiHIBKAAIAACHgAALAoIAkAAIAAgjIgkAAgAALgNIAkAAIAAgjIgkAAg");
	this.shape_28.setTransform(893.5,397.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#858C91").s().p("AhIA0QAzgdAGgpIg3AAIAAgUIA6AAQACgPAAgSIAVAAIgCAhIA9AAIAAAUIg6AAQAQAxAtATIgRAVQgngYgRgwQgKAlgtAkIgRgUgAgSAqIANgLIAVAXIgQANIgSgZg");
	this.shape_29.setTransform(1257.3,373.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#858C91").s().p("AhHA1QA1gYAEgrIg3AAIAAgUIA6AAQABgQgBgVIAWAAIgBAlIA9AAIAAAUIg8AAQANAwAxARIgRAUQgpgTgPgpQgLAmgsAXIgQgTg");
	this.shape_30.setTransform(1241.9,373);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#858C91").s().p("AglA6IAAgJQAAgJADgHQAEgHAFgGQAGgHAMgIQAKgIAEgGQAFgGAAgHQAAgQgQAAQgPAAgNAMIAAgVQAPgKASAAQARAAAJAJQAKAJAAAPQAAAIgDAHQgCAHgGAFQgFAGgMAJQgLAIgEAEQgEAFAAADIAwAAIAAAUg");
	this.shape_31.setTransform(1229.3,372.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#858C91").s().p("AglA0IAAgYQANAMASAAQAJAAAFgEQAFgDAAgGQAAgEgEgEQgEgEgQgHQgbgLABgVQgBgQAMgJQAMgJAUAAQAQAAAMAFIAAAWQgMgHgPAAQgIAAgGADQgFADAAAGQAAAEADAEQAEADANAHQASAHAGAHQAHAIgBALQAAARgLAIQgMAJgUAAQgUAAgMgHg");
	this.shape_32.setTransform(1220,372.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858C91").s().p("AgNAUIAIgnIAUAAIgMAng");
	this.shape_33.setTransform(1203.5,378.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#858C91").s().p("AgkA5QATgMAJgTIgOgNIgGAJIgJgSQANgVADgdIgIAAIAAgSIAyAAIAAASIgYAAIgCAOIAZAAQAABKgpAeIgPgPgAgOgBIANAJQACgKABgMIgMAAIgEANgAg3BIIAAhFIgJASIgFgaQAPggAHgiIARADQgDAPgFAOIAABvgAAeBGIgDgUIARABQAHAAAAgKIAAhuIATAAIAAB1QAAAKgFAGQgEAFgIABIgOAAIgJAAgAAaAnIAAhhIAQAAIAABhg");
	this.shape_34.setTransform(1191.9,373);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#858C91").s().p("AhEA5QAugcAGgxIgxAAIAAgTIAaAAIgSgUIAPgNIAUAVIgNAMIAVAAIACghIAVAAIgCAhIA+AAIgDA4QgCAbgBAGQgBAFgEAFQgEAFgGACQgGADgPgBIgXABQgBgJgEgNIAcABQAIAAADgBQADgCACgDIACgUIADgrIgrAAQgBANgEALIAOgLIAYAUIgPAQQgNgQgKgIQgLAqgoAaIgRgQg");
	this.shape_35.setTransform(1176.5,373.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858C91").s().p("AhHA0IAIAAQAGAAABgBIABgFIAAgZIgMAEIgDgUIAPgEIAAgdIgOAAIAAgSIAOAAIAAgYIATAAIAAAYIANAAIAAASIgNAAIAAAZIAOgEIAAASIgOAEIAAAlQAAALgFAEQgEAFgVgBIgFgTgAAxBHIAAgHIhKAAIAAgSIBKAAIAAgSIhBAAIAAgSIBBAAIAAgRIhEAAIAAgSIAfAAIAAgtIATAAIAAAtIAlAAIAABggAAigmQAMgNAKgPIAQAKIgYAdgAgag4IAOgKIAUAbIgOALIgUgcg");
	this.shape_36.setTransform(1161.3,373.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858C91").s().p("Ag4BJIAAhDIgIAQIgFgaQANgdAIgnIASAEIgIAgIAABtgAAfBGIgDgSIARABQAHAAAAgHIAAh0IASAAIAAB6QAAAMgHAEQgGACgQAAIgKAAgAgiAvIAVgDIAAgTIgRAAIAAgQIARAAIAAgNIAQAAIAAANIARAAIAAAQIgRAAIAAARIAWgDIgCASIg3AIgAAcAmIAAhYIAPAAIAABYgAAIgJIglAEIgFgOQAGgFAJgWIgKAAIAAgRIAzAAIAAARIgXAAIgMAYIAQgCIgEgMIAMgFIAPAjIgOAGg");
	this.shape_37.setTransform(1145.9,373);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#858C91").s().p("AgWA3QATgKAKgJQALgJAFgKQAFgKACgNQABgOABgxIAWAAIgCAzQgBAVgFAPIAZAiIgOASIgWgfQgPAUgbANQgFgHgKgKgAhGAzQAFgGAAgKIAAhnIAVAAIAABkQANgIAWgQIAFAWQgwAhgEAFgAgfg9IASgKIAYApIgSALQgMgXgMgTg");
	this.shape_38.setTransform(1131,373.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#858C91").s().p("AgOAUIAJgnIATAAIgLAng");
	this.shape_39.setTransform(1111.4,378.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858C91").s().p("AgaBCIAAgPIgqANIgEgVIASgEIAAgkIgPAAIAAgRIAPAAIAAgfIgQAAIAAgTIAwAAIAAATIgOAAIAAAfIANAAIAAARIgNAAIAAAfIAPgEIAAAUIAjAAIAAgNIggAAIAAgRIAgAAIAAgKIgfAAIAAhLIBTAAIAABLIghAAIAAAKIAhAAIAAARIghAAIAAANIAoAAIAAAQgAAhgGIAOAAIAAgOIgOAAgAAAgGIAOAAIAAgOIgOAAgAAhgjIAOAAIAAgOIgOAAgAAAgjIAOAAIAAgOIgOAAg");
	this.shape_40.setTransform(1100.1,373.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#858C91").s().p("AhIA4QAPgUAAgvIAAg6ICBAAIAAARIgzAAIgFAMIAvAAIAAA8IgjAAIAAAcQAAAJgEAFQgEAFgJAAIgVAAQgBgJgDgJIgOAPIgPgNQAQgOALgPIAQALIgNAPIANABQAIAAAAgGIAAgXIgkAAIAAg8IAZAAIADgMIglAAIAAAsQAAA0gTAaQgHgIgJgGgAgJAFIA1AAIAAgIIg1AAgAgJgRIA1AAIAAgJIg1AAgAAfAfIAQgKQANAOANAQIgQANIgaghg");
	this.shape_41.setTransform(1084.7,373.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_42.setTransform(1069.1,373);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#858C91").s().p("AgTAsIAJgPIAeALIASgSIg2AAIAAgQIAEgNIgSAAIAAgQIAXAAIAEgNIgUAAIAAgRIAXAAIAFgRIAVAAIgEARIAuAAIAAARIgyAAIgEANIA7AAIAAAQIhAAAIgEAMIA9AAIAAAQIgbAbIATAIIgLARQgagMgogRgAg3BIIAAhEIgMAVIgFgbQASgdALgpIATAFQgFASgHAQIAABpg");
	this.shape_43.setTransform(1054,373);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjIgRgTg");
	this.shape_44.setTransform(1038.3,373.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_45.setTransform(1023,373);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#858C91").s().p("AgHBJIAAhjIAPAAIgKgNQAKgLAKgWIAVAAIgFALIAlAAIAAAQIgaAAIAJAKIgMAJIAYAAIAABiIgTAAIAAgGIgkAAIAAAHgAALAyIAkAAIAAgLIgkAAgAALAYIAkAAIAAgJIgkAAgAALAAIAkAAIAAgJIgkAAgAAKgaIAcAAIgLgOIAIgFIgLAAIgOATgAguBJIAAgwQgGAPgKAPQgDgLgFgLQAPgPAHgRIgSAAIAAgRIAUAAIAAgQIASAAIAAAQIARAAIAAARIgRAAIAAAHIAUAQIgKAPIgKgLIAAAtgAhGglQARgQAIgTIATAAIgFALIAgAAIAAAQIgQAAIAIALIgOAIQgGgKgGgHIAEgCIgLAAQgHAKgKAKQgGgHgHgFg");
	this.shape_46.setTransform(1007.8,373);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
	this.shape_47.setTransform(992.7,373.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgLgKgPIgKAAIAAgRIBmAAIAAAQQgKAPgRAMQAWAGAcACIgLAVQgjgEgagNQgZAMglAGQgEgJgGgKgAAAAiQAPgHALgKIgvAAQAJAJAMAIgAAdgVIALgNQAPAJASAOIgNANIgfgXgAhIgNQASgKAPgMIAMANQgQAMgSALIgLgOgAAIgEIAAghIgPAAIAAAhIgTAAIAAghIgqAAIAAgRIA6AAIgFgNIAUgFIAIASIA4AAIAAARIgqAAIAAAhg");
	this.shape_48.setTransform(977.3,373);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#858C91").s().p("AgoACQAAgdALgPQALgQAUAAQAnAAAAA6QAAAcgLAPQgKAQgUAAQgoAAAAg5gAgQABQAAAoAQAAQARAAAAgpQAAgngQAAQgRAAAAAog");
	this.shape_49.setTransform(964.8,372.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#858C91").s().p("AgcAtQgLgOAAgZQAAgcAOgSQANgSAYAAQAMAAAIADIAAAUQgJgEgKAAQgNAAgHAKQgIAKAAAQIABAAQAHgMAPAAQAPAAAIAKQAJAJAAAPQgBARgKAMQgLALgRAAQgSAAgLgOgAgKAHQgEAFAAAHQAAAJAEAGQAFAHAGAAQAHAAAEgGQAFgGgBgIQAAgTgPAAQgHAAgEAFg");
	this.shape_50.setTransform(955.4,372.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#858C91").s().p("AABA6IAAhZQgDAFgIACIgOAFIAAgVQAUgGAOgLIAPAAIAABzg");
	this.shape_51.setTransform(944.9,372.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#858C91").s().p("AAaBBIgQgPQgIACgHAAQgZAAgPgQQgPgQAAgYQAAgbAQgRQAPgRAZAAQAYABAPAQQAOAQAAAaQAAAZgPARIgBACIAcAbgAgaghQgJALABARQgBAPAJAKQAHALAOAAQANAAAJgKQAHgKABgQQgBgSgHgKQgIgKgNAAQgOAAgIAKg");
	this.shape_52.setTransform(935.1,373.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#858C91").s().p("AAdA5IgJgaIgoAAIgIAaIgaAAIAphxIAcAAIAoBxgAgCgbIgNAnIAeAAIgNgmIgCgKIAAAAIgCAJg");
	this.shape_53.setTransform(922.3,372.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#858C91").s().p("AAvBHIAAgHIghAAIAAAHIgQAAIAAg0IAXAAIAAgMIgZAAQgCAogQAYIgOgQQAPgaAAgqIAAg1IBYAAIAAAtIgcAAIAAANIAiAAIAAAPIgiAAIAAAMIAZAAIAAA0gAAOAxIAhAAIAAgOIghAAgAgDgIIAYAAIAAgNIgYAAgAgDgkIA0AAIAAgQIg0AAgAhCBGIgFgTIAKABQAFAAAAgIIAAgaIgOADIgCgVIAQgBIAAgZIgOAAIAAgTIAOAAIAAgaIASAAIAAAaIAMAAIAAATIgMAAIAAAUIANgDIAAASIgNAEIAAAoQAAAQgNABIgKAAIgFAAg");
	this.shape_54.setTransform(908.8,373.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#858C91").s().p("AgTA5QAEgGAAgIIAAhtIBOAAIAABLIgEAAIALAPIgXAOQALAIAPAEIgLATQgWgIgNgRIAAASQggAHgGAEgAADAwIAXgFQgLgOgEgUIgIAAgAAkAaIAVgRIgcAAQADAJAEAIgAADgIIAqAAIAAgMIgqAAgAADgkIAqAAIAAgMIgqAAgAg2BHIAAg8QgGAOgHANIgFgbQAMgSAFgUIgQAAIAAgTIARAAIAAgaIASAAIAAAaIARAAIAAATIgRAAIAAAPIAUAMIgLAPIgJgHIAAA/g");
	this.shape_55.setTransform(893.5,373.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(31));

	// 图层 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333F48").s().p("Ag2CFIAAgfQgmAKgtAPIgIgqIAjgIIAAhIIgcAAIAAgjIAcAAIAAg+IgdAAIAAglIBfAAIAAAlIgdAAIAAA+IAbAAIAAAjIgbAAIAAA/IAegJQgBAVABATIBIAAIAAgZIhCAAIAAgiIBCAAIAAgVIhBAAIAAiXICoAAIAACXIhBAAIAAAVIBCAAIAAAiIhCAAIAAAZIBPAAIAAAigABDgMIAcAAIAAgdIgcAAgAAAgMIAdAAIAAgdIgdAAgABDhHIAcAAIAAgcIgcAAgAAAhHIAdAAIAAgcIgdAAg");
	this.shape_56.setTransform(997.5,308.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333F48").s().p("AiSBvQAegnAAheIAAh0IEDAAIAAAiIhkAAIgLAWIBeAAIAAB6IhFAAIAAA5QAAARgJAKQgJAJgSABQgTACgXgBQgDgTgFgSIgdAfIgegaQAggdAWgfIAhAWQgMAQgOAPIAbACQAPAAAAgNIAAgtIhIAAIAAh6IAxAAIAIgWIhMAAIAABXQAABpgkAzQgQgPgSgNgAgTAKIBrAAIAAgRIhrAAgAgTgiIBrAAIAAgSIhrAAgAA/A/IAegVQAaAbAcAiIgiAYQgXgggbggg");
	this.shape_57.setTransform(966.4,308.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333F48").s().p("AAICRIAAjNIgIAAQgSApgWAdQgJgPgOgWQAhgzAThBIAlAJIgMAlICEAAIAAAlIhhAAIAAAkIBQAAIAAAkIhQAAIAAAkIBWAAIAAAlIhWAAIAAA8gAhtCRIAAiNQgMAUgOASQgCgWgIgfQAkg4AWhKIAnALQgJAegMAbIAADag");
	this.shape_58.setTransform(935.5,308);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333F48").s().p("AiOB+IAAgqIB2AAIAAinIhlAAIAAgpID8AAIAAApIhnAAIAACnIB3AAIAAAqg");
	this.shape_59.setTransform(904.5,308.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhHBBQAKgNAKgSIAKAGQgLAUgJAMgAArAnIAKgGQAMASAHAOIgLAGIgSgggAgbAmIAKgEQAHAPAFAQIgMAEQgEgQgGgPgAAHAlIAKgEQAHAOAGAQIgMAFQgEgOgHgRgAAtAeIAAgGIhVAAIAAAGIgMAAIAAg3IAuAAIAAguIALAAIAAASIBCAAIAAAKIhCAAIAAASIA0AAIAAA3gAgoANIBVAAIAAgbIhVAAg");
	this.shape_60.setTransform(663.6,502);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNBGQgWAAAAgWIAAhYIANAAIAABWQAAAMALABIAfAAQAMAAACgLQACgJABgNIANAFIgFAWQgEARgSAAgAhIAiQAJgbAHgfIALADQgGAegKAegAAkgXIALgGQANAZANAcIgMAHQgLgdgOgZgAgMhAIAKgFIAXAqIgNAGQgJgWgLgVg");
	this.shape_61.setTransform(648.7,501.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGBJIAAg3IgsAAIAAAIIgMAAIAAhCIA4AAIAAggIAMAAIAAAgIA5AAIAABCIgMAAIAAgIIgtAAIAAA3gAAGAHIAtAAIAAgkIgtAAgAgyAHIAsAAIAAgkIgsAAg");
	this.shape_62.setTransform(633.7,502.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgoBIIAAgfIgfAEIgBgLIAggEIAAgUIgcAAIAAgJIANgoIgQAAIAAgKIASAAIAHgWIALACIgGAUIAgAAIAAAKIgkAAIgNAnIASAAIAAggIAKAAIAAAgIATAAIAAAKIgTAAIAAATIAUgCIAAAKIgUADIAAAggAARBDQgRAAAAgQIAAhCIALAAIAAAgQASgMAQgOIAKAHQgXATgVALIAAATQAAAKAKgBIAUAAQAKAAABgIQACgJAAgMIAMADIgDAWQgDAPgSAAgAgVgSQAagVAPgfIAOAAIgCAEQAQAgAZAMIgIAKQgYgOgRgdQgQAcgUARIgJgIg");
	this.shape_63.setTransform(618.7,502.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhBBFIAAiIIAuAAIAAAKIgOAoQAMARACALQAEAcgSAEQgIABgIgBIgDgMQAIACAGgBQAKgCgDgUQgCgKgLgOIANgrIgWAAIAAB+gAA2BEIAAgJIg1AAIAAAJIgKAAIAAiGIBLAAIAACGgAABAwIA1AAIAAgwIg1AAgAABgKIA1AAIAAgtIg1AAg");
	this.shape_64.setTransform(603.7,502.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhIA8QA5geAHg1Ig+AAIAAgMIA/AAIABgkIAMAAIAAAkIBAAAIAAAMIhAAAQAPA6A0AWIgLAMQgvgbgPgzQgLAyg0AeIgJgLgAgQApIAJgHIAUAXIgKAIIgTgYg");
	this.shape_65.setTransform(588.7,502.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghBGIgDgOIAWABQAKAAAAgJIAAh1IAMAAIAAB4QAAATgUAAIgVAAgAhIAjQARgcAQgsIAMAEQgOAngTAkIgMgHgAAaggIALgFQASAiASAkIgNAHQgSgpgQgfg");
	this.shape_66.setTransform(573.7,502.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AggA1IAAgPQALAJAPAAQALAAAHgGQAGgGAAgJQAAgWgdAAIgKAAIAAgLIAJAAQAaAAAAgUQAAgTgTAAQgMAAgLAIIAAgNQALgHAPAAQAOAAAIAIQAJAIAAAMQAAAWgXAGIAAABQANABAHAGQAHAIAAALQAAAPgLAJQgLAKgRAAQgQAAgKgGg");
	this.shape_67.setTransform(561.7,501.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgaAmIAAgPQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgHQAAgLAJgHQAJgGAMgBQAKABAJADIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADACQADAEAKADQAOAFAEAFQAFAFAAAJQAAALgJAGQgJAHgOgBQgMAAgJgEg");
	this.shape_68.setTransform(554,503.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAoAoIAKgGIASAcIgNAGQgEgLgLgRgAhCA/QAHgKAHgVQAGADAHABIgPAgQgFgDgHgCgAAFAoIAKgGIAOAbIgLAGQgFgLgIgQgAgbApQAEgCAGgDIALAaIgMAFQgBgGgIgUgAguAaIAAgXIAAgYIAlAAIAAgeIAAgQIAMAAIgBATIAmAAIATAAIAAALIgTgBIgmAAIAAARIAtAAIAAAYIAAAXgAgiAQIBFAAIAAgbIhFAAg");
	this.shape_69.setTransform(756.5,392.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgsBEIAAgbIAAgdIBYAAIgBAbIABAcIgNAAIAAgMIhAAAIAAANgAghAuIBAAAIAAgZIhAAAgAhDgFQAMgGALgIQALgIALgNQAMgNAHgOIAKAGIgDAEQARAUALAIQAKAHAJAFIARAGQgGAGgBAFQgMgEgJgGQgKgGgKgJQgJgJgMgQQgLAQgKAKIgTARIgRAKIgJgIgAASgBIggAAIgUABIAAgMIAUABIAfAAIARgBIAAAMIgQgBg");
	this.shape_70.setTransform(741.2,392.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAvBCIAAgHIg/ACIAAgTIAAgdIAAgOIALAAIAAANIAAAoIA0gCIAAgmIgBgNIAMAAIAAAOIAAAjIAAASgAhCAtIABgYIAAgvIgBgZIAmAAIAAAZIAAAlIAAAXIgKAAIAAgMIgQAAIAAAXgAg2ANIAQAAIAAg3IgQAAgAgFAjQALgKAEgKQAEgKABgNIAOADQgCABgDAOIAWARQgFADgEAGIgRgRIgGAJQgEAHgFAFIgKgFgAAxgMIgzAAIgVABIAAgKIALAAIAAgSIAAgQIALAAIAAAOIAAAUIASAAIAAgfIgBgNIAMAAIgBAQIARAAIARAAIAAAKIgRgBIgRAAIAAATIAWAAIASAAIAAAKIgSgBg");
	this.shape_71.setTransform(726.2,392.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAzBCIAAgJIhkAAIAAAJIgLAAIAAglIAAg+IAAggIB5AAIAAAgIAAA/IAAAkgAgxAwIBkAAIAAhpIhkAAgAgXAeIAAgWIgRAMQgCgGgFgDQAIgEAIgFQAHgEAFgGIgXAAIAAgJIAcABIAEgKIgbABIAAgJIANABQgDgHgFgFQADgCAEgEIAJAMIgHAGIAQAAIACgTIALABQgCAEgDAOIAKAAQAGgMADgGIALAEQgFADgGALIAPgBIAAAJIgPgBIgUAAIgEAKIAaAAIATgBIAAAJIgZAAQADAFAIADQAIAFAMADQgFAFgBAFQgNgFgJgHIAAAIQAAAGgEADQgEADgJACIgDgKQAKAAABgFIAAgDIgXAAIAAASQgBAGALAAIASAAQAGAAACgCQACgCABgHQAEADAHABQgDAJgDADQgDADgHAAIgeAAIgCAAQgMAAAAgMgAgRACIAfAAIgJgKIgMAAIgKAKg");
	this.shape_72.setTransform(710.6,393.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAoBEIAAgIIhaAAIAAgiIAAgbIALAAIAAAzIBPAAIAAgyIAMAAIgBAfIABAlgAgjAoQANgKAJgMQAIgNADgLQAGAEAGABIgHANIAQALIARANIgJALIgPgOIgNgLIgJALIgPAQIgKgJgAgBgLIhCAAIAAgKIAcABIAAgVIgBgPIANAAIgBARIAAATIAcAAIAAgdIAAgRIALAAIgBARIAfAAIAPAAIAAAKIgPgBIgfAAIAAAUIA6gBIAAAKIhFAAg");
	this.shape_73.setTransform(695.3,392.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEBJIAAguQgZAbgiAOIgJgKQAhgMAagWIg5AAIAAgKIBCAAIAAgPIAKAAIAAAPIBBAAIAAAKIg5AAQAXAXAkAIIgJALQglgMgVgbIAAAugAhIgBQAWgRADgbIgUAAIAAgKIAVAAIAAgRIALAAIgBARIAiAAIgCAhQgBANgFAFQgDAEgLAAIgMAAIgCgLIANABQAJAAAAgJIADgaIgXAAQgCAfgZAVIgJgIgAA0gBIAAgHIggAAIAAAHIgLAAIAAg6IA1AAIAAA6gAAUgSIAgAAIAAgfIggAAg");
	this.shape_74.setTransform(657.2,286.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhDBCIAAgKIBCAAIAAgPIgwAAIAAgKIAwAAIAAgOIgqAAQgJANgKAKIgIgIQAQgRAMgVIALAEIgGAJIAkAAIAAgMIALAAIAAAMIA3AAIAAAKIg3AAIAAAOIAzAAIAAAKIgzAAIAAAPIA9AAIAAAKgAAtgEIAAgFIhiAAIAAg4IBuAAIAAA9gAgqgTIBXAAIAAgNIhXAAgAgqgqIBXAAIAAgNIhXAAg");
	this.shape_75.setTransform(642.2,286.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgwBIIAAg+IgTASIgFgMQAXgRASgiIALAGQgIANgIAMIAABMgAABBGIgBgNIAWABQAKAAAAgKIAAg1IgzAAIAAgLIBcAAIAAALIgdAAIAAA5QAAASgSAAIgZAAgAhHgdQAXgSAOgYIALAGQgRAagZAVIgGgLgAgKgxIAAgLIBLAAIAAALg");
	this.shape_76.setTransform(627.2,286.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhHBBQAKgNAKgSIAKAGQgLAUgJAMgAArAnIAKgGQAMASAHAOIgLAGIgSgggAgbAmIAKgEQAHAPAFAQIgMAEQgEgQgGgPgAAHAlIAKgEQAHAOAGAQIgMAFQgEgOgHgRgAAtAeIAAgGIhVAAIAAAGIgMAAIAAg3IAuAAIAAguIALAAIAAASIBCAAIAAAKIhCAAIAAASIA0AAIAAA3gAgoANIBVAAIAAgbIhVAAg");
	this.shape_77.setTransform(657.1,241.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgOBGQgVAAABgWIAAhXIALAAIAABUQAAAOAMAAIAfAAQAMAAACgLQACgJABgNIAMAFIgDAWQgFARgTAAgAhIAiQAJgbAHgfIAMAEQgHAegJAdgAAkgXIALgFQAMAYAOAdIgMAGQgMgdgNgZgAgNhAIAKgFIAYAqIgMAGQgJgWgNgVg");
	this.shape_78.setTransform(642.3,240.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGBJIAAg3IgsAAIAAAIIgMAAIAAhCIA4AAIAAggIAMAAIAAAgIA5AAIAABCIgMAAIAAgIIgtAAIAAA3gAAGAHIAtAAIAAgkIgtAAgAgyAHIAsAAIAAgkIgsAAg");
	this.shape_79.setTransform(627.3,241.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgpBJIAAggIgeAEIgBgLIAfgEIAAgUIgcAAIAAgJIAOgoIgPAAIAAgKIASAAIAGgWIAMACIgHAUIAgAAIAAAKIgjAAIgOAnIARAAIAAgfIALAAIAAAfIATAAIAAAKIgTAAIAAAUIAVgDIAAALIgVACIAAAhgAARBDQgRAAAAgRIAAhAIALAAIAAAeQASgKARgPIAJAGQgWAUgWAMIAAATQgBAJAKAAIAUAAQALAAABgJQACgKABgLIAKADIgCAVQgCARgTgBgAgVgTQAagTAPggIAOAAIgDAEQARAgAZAMIgIAKQgXgNgSgfQgQAdgVARIgIgJg");
	this.shape_80.setTransform(612.2,241.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhABFIAAiJIAtAAIAAAKIgOApQAMAQACAMQAEAcgSAEQgHAAgJAAIgDgNQAIADAHgCQAJgBgDgUQgCgKgLgPIANgrIgXAAIAAB/gAA2BEIAAgKIg1AAIAAAKIgKAAIAAiGIBKAAIAACGgAABAvIA1AAIAAgvIg1AAgAABgJIA1AAIAAguIg1AAg");
	this.shape_81.setTransform(597.2,241.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhIA9QA5gfAHg2Ig9AAIAAgLIA/AAIAAgkIALAAIAAAkIBBAAIAAALIhAAAQAPA7A0AWIgLAMQgvgbgPgyQgLAxg0AeIgJgKgAgQAqIAKgIIATAWIgKAJIgTgXg");
	this.shape_82.setTransform(582.2,241.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhIA8QA8gbAFg0Ig/AAIAAgMIA/AAIABgoIAMAAIgBAoIBBAAIAAAMIhBAAQAKA5A6ATQgHAHgEAFQgwgUgOgxQgLAtg0AbIgJgMg");
	this.shape_83.setTransform(567.2,241.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgjA6IAAgGQAAgKADgHQADgGAGgHQAGgGANgJQAMgJAFgHQAFgHAAgJQAAgJgGgFQgFgGgJAAQgHAAgIAEQgHAEgGAGIAAgOQAGgFAHgEQAHgDAJAAQAPAAAJAJQAJAIAAAOQAAAMgFAKQgGAIgOAJIgSAOQgFAFgCAEQgCADAAAGIA4AAIAAANg");
	this.shape_84.setTransform(555.3,240.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgaAmIAAgPQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgIQAAgKAJgHQAJgHAMABQAKgBAJAEIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADACQADADAKAFQAOAEAEAFQAFAGAAAHQAAALgJAHQgJAGgOAAQgMAAgJgEg");
	this.shape_85.setTransform(547.5,242.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#006FC0").s().p("Ag0gCIBpgzIAABrg");
	this.shape_86.setTransform(574.1,524.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4F8330").s().p("Ag0g1IBpAzIhpA4g");
	this.shape_87.setTransform(707.1,235.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZAbQgLgLAAgQQAAgOALgLQAKgLAPAAQAPAAAMALQAKALABAOQgBAQgKALQgMAKgPAAQgPAAgKgKg");
	this.shape_88.setTransform(678.4,395.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("Ag0gCIBpgzIAABrg");
	this.shape_89.setTransform(638.2,393.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgZAaQgLgLAAgPQAAgOALgMQALgLAPABQAPgBALALQAKAMABAOQgBAPgKALQgLALgPAAQgPAAgLgLg");
	this.shape_90.setTransform(678.4,523.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgaAbQgLgLAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLALQgLAKgPAAQgOAAgMgKg");
	this.shape_91.setTransform(677.9,304.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgZAbQgLgLAAgQQAAgPALgKQAKgMAPAAQAPAAAMAMQAKAKABAPQgBAQgKALQgMALgPAAQgPAAgKgLg");
	this.shape_92.setTransform(678.4,234.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("ACuAPIlqAAQgGAAgFgEQgEgFAAgGQAAgFAEgFQAFgEAGAAIFqAAIAPAAQAGAAAFAEQAEAFAAAFIAAABQAAAFgEAFQgFAEgGAAg");
	this.shape_93.setTransform(659.4,393.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AALWqQgFgEgGAAIgIAAIgGABIAAz9IAOAAQAGAAAFgFQAEgEAAgGIAAUZQAAgGgEgEgAALCQQgFgEgGAAIgOAAIAAs3IAXgvQACgGgCgFQgCgGgFgDQgFgDgGACIgFADIAAqaIAdAAIAAJcIgCAFQgDAGACAGIADAFIAAOuQAAgGgEgEgAgK2vQAFgEAFAAQAGAAAFAEQAEAFAAAGIgdAAQAAgGAEgFg");
	this.shape_94.setTransform(678.3,378.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#006FC0").s().p("ADkW4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA8AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgABYW4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA8AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgAgzW4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA7AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgAi/W4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA8AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgAlLW4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA8AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgAnXW4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA8AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgApjW4QgHAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAHAAIA8AAQAGAAAEAEQAEAFABAGQgBAGgEAEQgEAFgGAAgAFwW3QgHAAgEgEQgEgFAAgGQAAgGAEgEIAFgDIAGgCIAJAAQAGAAAEAFQAEAEABAGIAAAAQgBAGgEAFQgEAEgGAAgArUWzQgFgDgCgFQgCgGADgGIAbg2QACgGAGgBQAGgCAGACQAFADACAGQACAGgCAGIgbA2QgDAFgGACIgFABQgDAAgEgCgAqVU1QgFgDgCgFQgCgGADgGIAbg2QACgGAGgBQAGgCAGACQAFADACAGQACAGgCAGIgbA2QgDAFgGACIgFABQgDAAgEgCgApWS3QgFgDgCgFQgCgGADgGIAbg2QACgGAGgBQAGgCAGACQAFADACAGQACAGgCAGIgbA2QgDAFgGACIgFABQgDAAgEgCgAoXQ5QgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAnYO7QgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAmaM9QgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAlbK/QgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAkdJBQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAjeHDQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAigFFQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAhiDHQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAgjBJQgGgDgCgFQgCgGADgGIAbg1QADgGAGgBQAGgCAEACQAGADACAFQACAGgDAGIgaA2QgDAFgGACIgFABQgDAAgDgCgAAag0QgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgABZiyQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgACXkwQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgADVmuQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAEUosQgGgDgCgFQgCgGADgGIAbg2QADgGAGgBQAGgCAFACQAGADACAGQACAGgDAGIgbA2QgDAFgGACIgFABQgDAAgDgCgAFSqqQgGgDgCgFQgCgGADgGIAbg2IAEgEIAFgDQAGgCAFACQAGADACAGQACAGgDAGIgXAvIgEAHQgDAFgGACIgFABQgDAAgDgCgAGMsdIgEgDIgEgGQgCgGADgFIADgFIAYgxQADgGAGgCQAGgCAFADQAGADACAGQACAFgDAGIgbA2QgDAGgGACIgFAAQgDAAgDgBgAHKubQgFgDgCgGQgCgGADgFIAbg2QACgGAGgCQAGgCAGADQAFADACAGQACAFgCAGIgbA2QgDAGgGACIgFAAQgDAAgEgBgAIIwZQgFgDgCgGQgCgGADgFIAbg2QACgGAGgCQAGgCAGADQAFADACAGQACAFgCAGIgbA2QgDAGgGACIgFAAQgDAAgEgBgAJHyXQgFgDgCgGQgCgGADgFIAbg2QACgGAGgCQAGgCAGADQAFADACAGQACAFgCAGIgbA2QgDAGgGACIgFAAQgDAAgEgBgAKF0VQgFgDgCgGQgCgGADgFIAbg2QACgGAGgCQAGgCAGADQAFADACAGQACAFgCAGIgbA2QgDAGgGACIgFAAQgDAAgEgBgALD2UQgGgDgBgGQgCgGADgFIAEgHQADgGAGgBQAGgCAGADQAFADACAGQABAGgDAGIgEAHQgDAFgGACIgEAAQgEAAgDgCg");
	this.shape_95.setTransform(640.6,379.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4F8330").s().p("AiHAMQgEgFAAgGQAAgFAEgFQAFgEAGAAIAeAAIDbgCQAGAAAFAEQAEAFAAAGQAAAFgEAEQgEAFgGAAIjcACIgeAAQgGAAgFgEg");
	this.shape_96.setTransform(689.3,235.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AA0BKIAAgFIh1AAIAAg5IAOAAIAAAtIAtAAIAAg8Ig2AAIAAg4IANAAIAAAsIApAAIAAg6IAMAAIAAA6IAqAAIAAgsIANAAIAAA9IgNAAIAAgFIgqAAIAAA8IAuAAIAAgtIAOAAIAAA+g");
	this.shape_97.setTransform(647.5,625.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTBNIAAhbIApAAIAABLQAAAOgOABIgKAAIgCgKIAKAAQAGAAgBgGIAAgTIgUAAIAAAkgAgJAhIAUAAIAAgPIgUAAgAgJAJIAUAAIAAgNIgUAAgAgyBNIAAghIgZAEIgCgMIAbgDIAAgWIgZAAIAAgLQAGgQAGgaIgNAAIAAgKIAQAAIAGgYIALACIgGAWIAdAAIAAAKIggAAIgMAqIAOAAIAAgcIALAAIAAAcIAOAAIAAALIgOAAIAAAVIARgCIgCAKIgPACIAAAjgAAkBMIgCgNIARACQAHAAABgIIAAhKIAKAAIAABLQAAASgPAAIgSAAgAAjAvIAAg5IAJAAIAAA5gAgegdQAegTASgbIARAAIgCADQARAcAcAMIgIALQgLgGgIgIIAAAIIg2AAIAAgGIgTANIgIgJgAAAglIAwAAQgNgMgKgPQgMAPgNAMg");
	this.shape_98.setTransform(631.5,625.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AA6BKIAAgHIhzAAIAAAHIgLAAIAAiTICJAAIAACTgAg5A4IBzAAIAAh2IhzAAIAABHQAUgJAMgMIgbAAIAAgJIAjAAIAGgKIgkAAIAAgKIAUAAIgOgMIAIgHIAPANIgHAGIASAAIAFgTIAJAAIgEATIAWAAIgGgFQAJgHAGgIIAIAHIgNANIASAAIAAAKIgvAAQgBAFgDAFIA6AAIAAAJIgdAAQALANAVAFIgIALQgPgGgKgLIgBARQgCANgOAAIgOAAIgCgKIANABQAIAAABgGIAAgHIgiAAIAAAYQAAAIAJAAIAeAAQALAAACgHQACgGABgIIAKAEIgDAOQgEANgRAAIghAAQgSAAAAgRIAAgaIgTAMIgHgKgAgVAAIAsAAQgGgFgEgHIgXAAIgLAMg");
	this.shape_99.setTransform(615.4,625.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AA0BNIAAgIIhyAAIAAhMIAMAAIAABBIBmAAIAAhCIAMAAIAABVgAgvAnQAqgRADghIALAAQgBAKgDAHIAqAfIgJALIgmgfQgMAVgcAMIgHgLgAhLgPIAAgMIAXAAIAAgoIANAAIAAAoIAlAAIAAgxIALAAIAAARIA4AAIAAALIg4AAIAAAVIBEAAIAAAMg");
	this.shape_100.setTransform(599.5,625.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgLAVIAKgpIANAAIgMApg");
	this.shape_101.setTransform(579.1,631.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhNBBQAagWAEgrIANACQgBAOgEANQAMAaAZADIAAhDIhHAAIAAgMICTAAIAAAMIhAAAIAAAYIA3AAIAAALIg3AAIAAAhIBEAAIgFANQgmAAgcgBQgjAAgQgcQgJAUgPAPIgJgNgAA5gcIAAgSIhwAAIAAASIgMAAIAAgdIBCAAIgKgOIALgGIAOAQIgHAEIA/AAIAAAdg");
	this.shape_102.setTransform(567.4,625.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AA4BJIAAgJIhwAAIAAAJIgMAAIAAiRICIAAIAACRgAg4A1IBwAAIAAhyIhwAAgAAWApIAAgHIgrAAIAAAHIgMAAIAAgyIAcAAIAAgTIgpAAIAAgKIApAAIAAgSIAKAAIAAASIAqAAIAAAKIgqAAIAAATIAcAAIAAAygAgVAZIArAAIAAgYIgrAAg");
	this.shape_103.setTransform(551.5,625.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFBNIAAgwQgaAcglAPIgJgKQAjgMAcgYIg8AAIAAgLIBFAAIAAgQIALAAIAAAQIBGAAIAAALIg9AAQAYAYAnAIIgKAMQgngNgXgcIAAAwgAhNgBQAZgSABgdIgVAAIAAgLIAWAAIABgSIAMAAIgBASIAkAAIgDAjQAAAOgFAFQgEAFgMAAIgLAAIgEgMIAPABQAJAAABgKIABgbIgXAAQgCAggcAXIgJgIgAAJgBIAAg+IA5AAIAAA+IgLAAIAAgIIgiAAIAAAIgAAVgUIAiAAIAAggIgiAAg");
	this.shape_104.setTransform(535.5,625.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhIBGIAAgLIBHAAIAAgQIgzAAIAAgLIAzAAIAAgOIgtAAQgKANgKALIgJgJQARgRAMgXIAMAFIgFAJIAmAAIAAgNIALAAIAAANIA7AAIAAALIg7AAIAAAOIA3AAIAAALIg3AAIAAAQIBDAAIAAALgAAwgEIAAgGIhoAAIAAg7IB0AAIAABBgAgtgVIBdAAIAAgOIhdAAgAgtgtIBdAAIAAgNIhdAAg");
	this.shape_105.setTransform(519.5,625.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("Ag0BNIAAhDIgTAUIgGgNQAYgTAUgjIALAGQgIAOgJAMIAABSgAABBKIgBgOIAXACQALAAAAgLIAAg4Ig2AAIAAgMIBiAAIAAAMIgfAAIAAA8QAAATgTAAIgbAAgAhMgfQAZgTAPgaIALAHQgSAcgbAWIgGgMgAgLg0IAAgMIBQAAIAAAMg");
	this.shape_106.setTransform(503.5,625.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgLAVIAKgpIANAAIgMApg");
	this.shape_107.setTransform(483.1,631.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhNA+QAzgfAShFQgNgVgMgHIAKgHQASALATAtQAeA+AiAOIgLAOQgigUgdhBIgEgKQgSA+gyAiQgEgHgFgFg");
	this.shape_108.setTransform(471.5,625.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgTBNIAAhbIAoAAIAABLQABAOgNABIgMAAIgCgKIALAAQAFAAABgGIAAgTIgVAAIAAAkgAgJAhIAVAAIAAgPIgVAAgAgJAJIAVAAIAAgNIgVAAgAgyBNIAAghIgaAEIgBgMIAbgDIAAgWIgZAAIAAgLQAGgQAHgaIgOAAIAAgKIAQAAIAFgYIAMACIgGAWIAcAAIAAAKIgeAAIgNAqIAOAAIAAgcIAKAAIAAAcIAQAAIAAALIgQAAIAAAVIARgCIAAAKIgRACIAAAjgAAkBMIgDgNIARACQAJAAgBgIIAAhKIALAAIAABLQAAASgPAAIgSAAgAAiAvIAAg5IALAAIAAA5gAgfgdQAfgTATgbIAQAAIgDADQATAcAbAMIgIALQgKgGgKgIIAAAIIg1AAIAAgGIgTANIgJgJgAAAglIAwAAQgOgMgKgPQgLAPgNAMg");
	this.shape_109.setTransform(455.5,625.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgrBNIAAghIggAEIgCgMIAigDIAAgWIgeAAIAAgKIAOgqIgQAAIAAgLIATAAIAHgYIAMACIgHAWIAiAAIAAALIglAAIgPApIATAAIAAghIALAAIAAAhIAUAAIAAALIgUAAIAAAVIAWgDIgBALIgVADIAAAigAASBIQgSAAAAgSIAAhGIALAAIAAAiQAUgMASgQIAKAIQgYAVgYAMIAAAUQAAAKALAAIAVAAQALAAABgKQADgKAAgNIAMAFIgDAWQgCARgUAAgAgWgUQAbgVAQgiIAPAAIgDAFQASAiAbANIgJALQgYgPgTggQgSAegVASQgEgFgFgEg");
	this.shape_110.setTransform(439.5,625.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhFBJIAAiRIAwAAIAAALIgOArQANARABANQAEAegTADQgHACgJgBIgEgOQAJADAHgBQAKgCgDgVQgCgLgMgQIAOgtIgYAAIAACGgAA6BIIAAgKIg5AAIAAAKIgLAAIAAiOIBQAAIAACOgAABAzIA5AAIAAgzIg5AAgAABgKIA5AAIAAgxIg5AAg");
	this.shape_111.setTransform(423.5,625.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhNBAQA9ggAIg5IhCAAIAAgMIBDAAIABgnIAMAAIAAAnIBFAAIAAAMIhEAAQAQA+A3AYIgLANQgzgdgQg2QgMA1g3AgIgKgMgAgRAsIAKgIIAVAZIgLAJIgUgag");
	this.shape_112.setTransform(407.4,625.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhNBAQBAgcAFg5IhCAAIAAgMIBDAAIAAgqIANAAIAAAqIBFAAIAAAMIhGAAQALA+A+AUIgMAMQgzgUgPg1QgLAwg4AcIgKgMg");
	this.shape_113.setTransform(391.5,625.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AglA+IAAgGQAAgLACgHQAEgHAGgIQAGgGAPgKQANgJAFgHQAFgIAAgKQAAgKgGgFQgGgGgKAAQgIAAgHAEQgIAEgGAHIAAgPQAFgGAIgEQAHgCALAAQAPgBAKAKQALAIgBAPQAAANgGAKQgGAJgPAKIgTAPQgFAFgCAEQgDAEABAGIA7AAIAAAOg");
	this.shape_114.setTransform(378.8,624.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgWA9QgKgDgEgCIAAgSQAFAFAKADQAJADAIAAQAZAAAAgTQAAgFgDgEQgDgDgFgEIgQgJQgTgIgFgIQgGgIAAgKQAAgPAMgIQAMgKARABQATAAAIAEIAAARQgLgIgRAAQgKAAgHAFQgHAFAAAIQAAAHAFAFQAFAFAPAHQASAIAHAJQAHAIAAAKQAAARgLAIQgMAJgUAAQgHAAgJgCg");
	this.shape_115.setTransform(369.5,624.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgGAqQgDgCAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAQgDAAgDgDgAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_116.setTransform(352.8,626.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhKBIQAKgaAJgjIANAGIgSA8gAgmBEIAAgMIAzAAIAAgsIgnAAIAAgLIAnAAIAAglIgsAAIAAgNIAyAAIgPgUIAKgHQAKAMAGAKIgJAFIA0AAIAAANIguAAIAAAlIAoAAIAAALIgoAAIAAAsIAyAAIAAAMgAhNgYIAJgJIAbAWIgJAKQgQgPgLgIgAhGhBIAIgIQAPAMAMALIgKAJIgZgYg");
	this.shape_117.setTransform(340.8,625.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(40));

	// 图层 7
	this.instance = new lib.houtui();
	this.instance.parent = this;
	this.instance.setTransform(146.6,183,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.6,183,869.1,454.2);


(lib.Page20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s20_2.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(31).call(this.frame_40).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EAiHAcKIAAsEMBCDAAAIAAMEg");
	var mask_graphics_10 = new cjs.Graphics().p("EAiHAcWIAAscMBCDAAAIAAMcg");
	var mask_graphics_11 = new cjs.Graphics().p("EAiHAciIAAs0MBCDAAAIAAM0g");
	var mask_graphics_12 = new cjs.Graphics().p("EAiHAcuIAAtMMBCDAAAIAANMg");
	var mask_graphics_13 = new cjs.Graphics().p("EAiHAc6IAAtkMBCDAAAIAANkg");
	var mask_graphics_14 = new cjs.Graphics().p("EAiHAdGIAAt8MBCDAAAIAAN8g");
	var mask_graphics_15 = new cjs.Graphics().p("EAiHAdTIAAuWMBCDAAAIAAOWg");
	var mask_graphics_16 = new cjs.Graphics().p("EAiHAdfIAAuuMBCDAAAIAAOug");
	var mask_graphics_17 = new cjs.Graphics().p("EAiHAdrIAAvGMBCDAAAIAAPGg");
	var mask_graphics_18 = new cjs.Graphics().p("EAiHAd3IAAveMBCDAAAIAAPeg");
	var mask_graphics_19 = new cjs.Graphics().p("EAiHAeDIAAv2MBCDAAAIAAP2g");
	var mask_graphics_20 = new cjs.Graphics().p("EAiHAePIAAwOMBCDAAAIAAQOg");
	var mask_graphics_21 = new cjs.Graphics().p("EAiHAecIAAwoMBCDAAAIAAQog");
	var mask_graphics_22 = new cjs.Graphics().p("EAiHAeoIAAxAMBCDAAAIAARAg");
	var mask_graphics_23 = new cjs.Graphics().p("EAiHAe0IAAxYMBCDAAAIAARYg");
	var mask_graphics_24 = new cjs.Graphics().p("EAiHAfAIAAxwMBCDAAAIAARwg");
	var mask_graphics_25 = new cjs.Graphics().p("EAiHAfMIAAyIMBCDAAAIAASIg");
	var mask_graphics_26 = new cjs.Graphics().p("EAiHAfYIAAygMBCDAAAIAASgg");
	var mask_graphics_27 = new cjs.Graphics().p("EAiHAflIAAy6MBCDAAAIAAS6g");
	var mask_graphics_28 = new cjs.Graphics().p("EAiHAfxIAAzSMBCDAAAIAATSg");
	var mask_graphics_29 = new cjs.Graphics().p("EAiHAf9IAAzqMBCDAAAIAATqg");
	var mask_graphics_30 = new cjs.Graphics().p("EAiHAgJIAA0CMBCDAAAIAAUCg");
	var mask_graphics_31 = new cjs.Graphics().p("EAiHAgVIAA0aMBCDAAAIAAUag");
	var mask_graphics_32 = new cjs.Graphics().p("EAiHAghIAA0yMBCDAAAIAAUyg");
	var mask_graphics_33 = new cjs.Graphics().p("EAiHAguIAA1MMBCDAAAIAAVMg");
	var mask_graphics_34 = new cjs.Graphics().p("EAiHAg6IAA1kMBCDAAAIAAVkg");
	var mask_graphics_35 = new cjs.Graphics().p("EAiHAhGIAA18MBCDAAAIAAV8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:641,y:180.2}).wait(1).to({graphics:mask_graphics_10,x:641,y:181.4}).wait(1).to({graphics:mask_graphics_11,x:641,y:182.6}).wait(1).to({graphics:mask_graphics_12,x:641,y:183.8}).wait(1).to({graphics:mask_graphics_13,x:641,y:185}).wait(1).to({graphics:mask_graphics_14,x:641,y:186.2}).wait(1).to({graphics:mask_graphics_15,x:641,y:187.5}).wait(1).to({graphics:mask_graphics_16,x:641,y:188.7}).wait(1).to({graphics:mask_graphics_17,x:641,y:189.9}).wait(1).to({graphics:mask_graphics_18,x:641,y:191.1}).wait(1).to({graphics:mask_graphics_19,x:641,y:192.3}).wait(1).to({graphics:mask_graphics_20,x:641,y:193.5}).wait(1).to({graphics:mask_graphics_21,x:641,y:194.8}).wait(1).to({graphics:mask_graphics_22,x:641,y:196}).wait(1).to({graphics:mask_graphics_23,x:641,y:197.2}).wait(1).to({graphics:mask_graphics_24,x:641,y:198.4}).wait(1).to({graphics:mask_graphics_25,x:641,y:199.6}).wait(1).to({graphics:mask_graphics_26,x:641,y:200.8}).wait(1).to({graphics:mask_graphics_27,x:641,y:202.1}).wait(1).to({graphics:mask_graphics_28,x:641,y:203.3}).wait(1).to({graphics:mask_graphics_29,x:641,y:204.5}).wait(1).to({graphics:mask_graphics_30,x:641,y:205.7}).wait(1).to({graphics:mask_graphics_31,x:641,y:206.9}).wait(1).to({graphics:mask_graphics_32,x:641,y:208.1}).wait(1).to({graphics:mask_graphics_33,x:641,y:209.4}).wait(1).to({graphics:mask_graphics_34,x:641,y:210.6}).wait(1).to({graphics:mask_graphics_35,x:641,y:211.8}).wait(6));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858C91").s().p("AAtBIIAAgHIhtAAIAAg3IAUAAIAAAkIAiAAIAAgwIgxAAIAAg4IAUAAIAAAlIAdAAIAAgyIAVAAIAAAyIAcAAIAAglIAUAAIAAA4IgwAAIAAAwIAiAAIAAgkIAUAAIAAA+g");
	this.shape.setTransform(1215.4,397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858C91").s().p("AgSBIIAAhXIArAAIAABIQAAAOgOAAIgKAAIgBgQIAGAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAIAAgJIgNAAIAAAdgAgDAdIANAAIAAgJIgNAAgAgDAGIANAAIAAgHIgNAAgAgwBIIAAgaIgXADIgBgTIAYgBIAAgNIgXAAIAAgUQAEgOADgRIgIAAIAAgSIALAAIADgSIARABIgDARIAZAAIAAARQAWgOALgUIAYAAIgDAFQAQAWAWALIgLAQIgPgKIAAAFIgyAAIAAgEIgMAIIgLgPIAFgDIgbAAIgHAiIAHAAIAAgaIARAAIAAAaIAIAAIAAARIgIAAIAAALIAJAAIAAARIgJABIAAAbgAAKglIAZAAIgNgOIgMAOgAAiBHIgEgSIANABQAGAAgBgJIAAg7IARAAIAABCQAAATgPAAIgQAAgAAdArIAAgzIANAAIAAAzg");
	this.shape_1.setTransform(1200.5,397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858C91").s().p("AAwBFIAAgGIhfAAIAAAGIgSAAIAAiJICDAAIAACJgAgvAwIBfAAIAAgpIgHAJQgKgEgJgGQAAAMgBADIgFAEQgDABgSAAIgEgKIAKAAIAEAAQACgBAAgFIgVAAIAAAPQAAAGAHABIAXAAQAEgBADgCQACgDACgJIAPAFQgDALgCADQgDAEgEABQgGACgIAAIgeAAQgQABAAgRIAAgNIgLAGIgGgHgAgvAFQAOgGAJgHIgTAAIAAgMIAdAAIADgGIgeAAIAAgLIALAAIgHgIIAPgFIAJANIAFAAIACgNIAPAAIgBANIAHAAIAIgMIAQADIgIAJIAMAAIAAALIgmAAIgCAGIApAAIAAAMIgUAAQALAHANADIAAg3IhfAAgAgLAAIAaAAIgIgIIgLAAIgHAIg");
	this.shape_2.setTransform(1185.4,397.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858C91").s().p("AArBIIAAgFIhoAAIAAhHIAUAAIAAAeQAjgOAAgYIhBAAIAAgRIAUAAIAAgiIAUAAIAAAiIAZAAIAAgqIATAAIAAANIAwAAIAAARIgwAAIAAAMIA7AAIAAARIg7AAQgBAJgCAGIAhAUIAAgbIAUAAIAABMgAgpAyIBUAAIAAgWIgKAOIgfgXQgJAMgVAMIgNgRg");
	this.shape_3.setTransform(1170.4,396.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858C91").s().p("AgVgGIAOgOQAMAKARAQIgPAPQgKgMgSgPg");
	this.shape_4.setTransform(1150.6,402.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858C91").s().p("AhIA4QASgTAFgiIAUACIgEAVQAHAUATADIAAg0Ig9AAIAAgSICJAAIAAASIg4AAIAAAPIAwAAIAAASIgwAAIAAAUIA8gBIgHAUQg0AAgWgBQgYgCgJgSQgIAPgKAKIgNgRgAAvgaIAAgLIhdAAIAAALIgUAAIAAgdIA5AAIgFgLIAWgGIAGARIA1AAIAAAdg");
	this.shape_5.setTransform(1140.4,396.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858C91").s().p("AAuBFIAAgFIhbAAIAAAFIgUAAIAAiJICDAAIAACJgAgtAvIBbAAIAAhiIhbAAgAgjAlIAAgvIAaAAIAAgLIggAAIAAgQIAgAAIAAgKIATAAIAAAKIAgAAIAAAQIggAAIAAALIAaAAIAAAvgAgQAVIAiAAIAAgPIgiAAg");
	this.shape_6.setTransform(1125.4,397.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858C91").s().p("AglA6IAAgJQAAgJADgHQAEgHAFgGQAGgHAMgIQAKgIAEgGQAFgGAAgHQAAgQgQAAQgPAAgNAMIAAgVQAPgKASAAQARAAAJAJQAKAJAAAPQAAAIgDAHQgCAHgGAFQgFAGgMAJQgLAIgEAEQgEAFAAADIAwAAIAAAUg");
	this.shape_7.setTransform(1113.2,396.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858C91").s().p("AglA0IAAgYQANAMASAAQAJAAAFgEQAFgDAAgGQAAgEgEgEQgEgEgQgHQgagLAAgVQAAgQALgJQAMgJAUAAQAQAAAMAFIAAAWQgMgHgPAAQgJAAgFADQgFADAAAGQAAAEAEAEQADADAOAHQARAHAGAHQAGAIAAALQABARgMAIQgMAJgUAAQgUAAgMgHg");
	this.shape_8.setTransform(1104.3,396.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_9.setTransform(1092.2,397);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AhBBFIAAiJIAzAAIAAAOIgMApQANAOABAYQAAANgIAGQgGAGgRAAQgBgMgCgKIAGABQAIAAAAgHQAAgTgNgOIALgoIgNAAIAAB4gAAvBFIAAgKIglAAIAAAKIgTAAIAAiHIBMAAIAACHgAAKAoIAlAAIAAgjIglAAgAAKgNIAlAAIAAgjIglAAg");
	this.shape_10.setTransform(1077.1,397.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AhJA0QAzgdAIgpIg3AAIAAgUIA5AAQABgPAAgSIAWAAIgBAhIA8AAIAAAUIg6AAQAPAxAvATIgSAVQgngYgQgwQgKAlgvAkIgRgUgAgSAqIANgLIAVAXIgQANIgSgZg");
	this.shape_11.setTransform(1062.2,397);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AhIA1QA2gYAFgrIg4AAIAAgUIA6AAQABgQgBgVIAWAAIgBAlIA8AAIAAAUIg6AAQAMAwAxARIgRAUQgpgTgPgpQgLAmgsAXIgRgTg");
	this.shape_12.setTransform(1047.2,397);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("AgNAUIAIgnIAUAAIgMAng");
	this.shape_13.setTransform(1028.1,402.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjQgHgKgKgJg");
	this.shape_14.setTransform(1016.7,397);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_15.setTransform(1001.8,397);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AhIA1QAtghARgwQgKgRgQgPIATgLQAQAMAUArQAVAqAhAYIgTAVQgggfgVgqQgRAsgnAeIgRgTg");
	this.shape_16.setTransform(987.1,397);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AgSBIIAAhXIArAAIAABIQAAAOgOAAIgKAAIgBgQIAGAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAIAAgJIgNAAIAAAdgAgDAdIANAAIAAgJIgNAAgAgDAGIANAAIAAgHIgNAAgAgwBIIAAgaIgXADIgBgTIAYgBIAAgNIgXAAIAAgUQAEgOADgRIgIAAIAAgSIAMAAIACgSIARABIgDARIAZAAIAAARQAWgOALgUIAYAAIgDAFQAQAWAWALIgLAQIgPgKIAAAFIgyAAIAAgEIgMAIIgLgPIAFgDIgbAAIgIAiIAIAAIAAgaIARAAIAAAaIAIAAIAAARIgIAAIAAALIAJAAIAAARIgJABIAAAbgAAKglIAZAAIgNgOIgMAOgAAhBHIgDgSIANABQAFAAAAgJIAAg7IARAAIAABCQAAATgPAAIgRAAgAAdArIAAgzIANAAIAAAzg");
	this.shape_17.setTransform(972.2,397);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_18.setTransform(957.2,397);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AhBBFIAAiJIAzAAIAAAOIgMApQANAOABAYQgBANgHAGQgGAGgRAAQgBgMgCgKIAGABQAIAAAAgHQAAgTgNgOIALgoIgNAAIAAB4gAAvBFIAAgKIglAAIAAAKIgTAAIAAiHIBMAAIAACHgAAKAoIAlAAIAAgjIglAAgAAKgNIAlAAIAAgjIglAAg");
	this.shape_19.setTransform(942.1,397.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("AhIA0QAygdAHgpIg2AAIAAgUIA5AAQABgPAAgSIAWAAIgBAhIA8AAIAAAUIg6AAQAPAxAvATIgSAVQgngYgQgwQgKAlgvAkIgQgUgAgSAqIANgLIAVAXIgQANIgSgZg");
	this.shape_20.setTransform(927.2,397);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858C91").s().p("AgoAwIAUABQALAAAAgMIAAhrIAVAAIAABuQAAAPgEAGQgFAHgGABQgHACgZAAIgFgXgAhIAeQANggAJgkIAWAFQgKAngMAggAAagfIAUgHQAOAgANAiIgXAJQgMglgMgfg");
	this.shape_21.setTransform(912.2,396.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858C91").s().p("AgjA1IAAgVQAMAJAPAAQAIAAAGgFQAGgEAAgIQAAgIgHgEQgGgEgMAAIgKAAIAAgSIAJAAQAWAAAAgPQAAgOgQAAQgMAAgKAHIAAgUQALgGAQAAQAPAAAKAIQAKAHAAANQAAAXgWAFIAAABQAMABAHAHQAHAHAAAKQAAARgMAJQgMAJgSAAQgSAAgLgGg");
	this.shape_22.setTransform(900.1,396.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858C91").s().p("AglA0IAAgYQAOAMARAAQAJAAAFgEQAFgDAAgGQAAgEgEgEQgEgEgQgHQgbgLAAgVQABgQAMgJQALgJATAAQARAAALAFIAAAWQgLgHgQAAQgHAAgFADQgGADAAAGQAAAEADAEQAFADAMAHQASAHAGAHQAGAIABALQgBARgMAIQgLAJgUAAQgTAAgNgHg");
	this.shape_23.setTransform(891,396.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858C91").s().p("AgOAUIAJgnIATAAIgLAng");
	this.shape_24.setTransform(1253.7,378.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858C91").s().p("AgkA5QATgMAJgTIgOgNIgGAJIgJgSQANgVADgdIgIAAIAAgSIAyAAIAAASIgYAAIgCAOIAZAAQAABKgpAeIgPgPgAgOgBIANAJQACgKABgMIgMAAIgEANgAg3BIIAAhFIgJASIgFgaQAPggAHgiIARADQgDAPgFAOIAABvgAAeBGIgDgUIARAAQAHABAAgKIAAhuIATAAIAAB1QAAAKgFAGQgEAFgIABIgOAAIgJAAgAAaAnIAAhhIAQAAIAABhg");
	this.shape_25.setTransform(1242,372.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#858C91").s().p("AhEA5QAugcAGgxIgxAAIAAgTIAaAAIgSgUIAPgNIAUAVIgNAMIAVAAIACghIAVAAIgCAhIA+AAIgDA4QgCAcgBAFQgBAFgEAFQgEAFgGACQgGACgPAAIgXABQgBgJgEgNIAcABQAIAAADgBQADgCACgDIACgUIADgrIgrAAQgBANgEALIAOgMIAYAWIgPAPQgNgQgKgIQgLAqgoAZIgRgPg");
	this.shape_26.setTransform(1226.4,373);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#858C91").s().p("AhHA0IAIAAQAGABABgCIABgGIAAgYIgMAEIgDgUIAPgEIAAgdIgOAAIAAgSIAOAAIAAgZIATAAIAAAZIANAAIAAASIgNAAIAAAZIAOgFIAAATIgOAEIAAAlQAAAKgFAFQgEAFgVgBIgFgTgAAxBHIAAgIIhKAAIAAgSIBKAAIAAgSIhBAAIAAgSIBBAAIAAgQIhEAAIAAgTIAfAAIAAgtIATAAIAAAtIAlAAIAABhgAAigmQAMgNAKgPIAQAKIgYAdgAgag4IAOgKIAUAbIgOALIgUgcg");
	this.shape_27.setTransform(1211.1,373);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858C91").s().p("AhFA4IAAgVICLAAIAAAVgAg7giIAAgVIB3AAIAAAVg");
	this.shape_28.setTransform(1195.8,372.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#858C91").s().p("AhHA0IAIAAQAGABABgCIABgGIAAgYIgMAEIgDgUIAPgEIAAgdIgOAAIAAgSIAOAAIAAgZIATAAIAAAZIANAAIAAASIgNAAIAAAZIAOgFIAAATIgOAEIAAAlQAAAKgFAFQgEAFgVgBIgFgTgAAxBHIAAgIIhKAAIAAgSIBKAAIAAgSIhBAAIAAgSIBBAAIAAgQIhEAAIAAgTIAfAAIAAgtIATAAIAAAtIAlAAIAABhgAAigmQAMgNAKgPIAQAKIgYAdgAgag4IAOgKIAUAbIgOALIgUgcg");
	this.shape_29.setTransform(1180.1,373);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#858C91").s().p("AhIAyIAQgPIAAgkIgPAAIAAgTIAiAAIAAA6QALALAXABQA+AAAOgBIgGATIgsAAIgZAAQgPAAgLgDQgLgDgHgIIgSASgAgZAhQAHgJAFgNIgSAAIAAgRIAVAAIAAgZIgQAAIAAgRIAQAAIAAgXIASAAIAAAXIAXAAIAAgXIATAAIAAAXIAPAAIAAARIgPAAIAAAZIAVAAIAAARIgVAAIAAAiIgTAAIAAgiIgZAAQgDAVgJAQIgTgPgAAIgGIAXAAIAAgZIgXAAIAAAZgAhCg8IAPgKIAUAbIgRAMQgJgQgJgNg");
	this.shape_30.setTransform(1164.8,373);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#858C91").s().p("AAQAzIAUABQAJAAAAgKIAAhJIATAAIAABQQAAAKgEAGQgEAFgIABIgcABIgEgVgAgiA1IANAAQAIAAgBgIIAAgFIgeAAIAAAgIgTAAIAAhlIBFAAIAABQQAAAKgFAFQgEAEgHACIgUAAIgEgTgAgsAYIAeAAIAAgKIgeAAgAgsgBIAeAAIAAgLIgeAAgAAQAqIAAhEIASAAIAABEgAhHgmIAAgQIAeAAIgGgLIAVgGIALARIAdAAIALgRIAXAGIgIALIAhAAIAAAQg");
	this.shape_31.setTransform(1149.3,372.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#858C91").s().p("AgWA3QATgKAKgJQALgJAFgKQAFgKACgNQABgOABgxIAWAAIgCA0QgBATgFARIAZAhIgOASIgWgfQgPAVgbAMQgFgHgKgKgAhGAzQAFgGAAgKIAAhnIAVAAIAABjQANgHAWgQIAFAWQgwAhgEAFgAgfg9IASgKIAYAoIgSAMQgMgXgMgTg");
	this.shape_32.setTransform(1133.9,373);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858C91").s().p("AgOAUIAJgnIATAAIgLAng");
	this.shape_33.setTransform(1114.2,378.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#858C91").s().p("AgbBCIAAgPIgpANIgEgVIARgEIAAgkIgNAAIAAgRIANAAIAAgfIgPAAIAAgTIAxAAIAAATIgPAAIAAAfIAOAAIAAARIgOAAIAAAfIAQgEIgBAUIAkAAIAAgNIghAAIAAgRIAhAAIAAgKIggAAIAAhLIBTAAIAABLIghAAIAAAKIAiAAIAAARIgiAAIAAANIAoAAIAAAQgAAhgGIAPAAIAAgOIgPAAgAAAgGIAPAAIAAgOIgPAAgAAhgjIAPAAIAAgOIgPAAgAAAgjIAPAAIAAgOIgPAAg");
	this.shape_34.setTransform(1102.8,373);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#858C91").s().p("AhIA4QAPgUAAgvIAAg6ICBAAIAAARIgzAAIgFAMIAvAAIAAA8IgjAAIAAAcQAAAJgEAFQgEAFgJAAIgVAAQgBgJgDgJIgOAPIgPgNQAQgOALgPIAQALIgNAPIANABQAIAAAAgGIAAgXIgkAAIAAg8IAZAAIADgMIglAAIAAAsQAAA0gTAaQgHgIgJgGgAgJAFIA1AAIAAgIIg1AAgAgJgRIA1AAIAAgJIg1AAgAAfAfIAQgKQANAOANAQIgQANIgaghg");
	this.shape_35.setTransform(1087.2,373.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_36.setTransform(1071.4,372.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858C91").s().p("AgTAsIAJgPIAeALIASgSIg2AAIAAgQIAEgNIgSAAIAAgQIAXAAIAEgNIgUAAIAAgRIAXAAIAFgRIAVAAIgEARIAuAAIAAARIgyAAIgEANIA7AAIAAAQIhAAAIgEAMIA9AAIAAAQIgbAbIATAIIgLARQgagMgogRgAg3BIIAAhEIgMAVIgFgbQASgdALgpIATAFQgFASgHAQIAABpg");
	this.shape_37.setTransform(1056.2,372.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#858C91").s().p("AhFA2QAtgbACgyIgnAAIAAgUIAoAAIAAgdIAWAAIgBAdIBGAAIgCArIgBAmQgBAPgIAIQgIAHgNABIggAAIgFgXQAMABAPAAQAIAAAEgDQADgDACgEIACgVIABgnIgvAAQgBA9gzAjIgRgTg");
	this.shape_38.setTransform(1040.3,373);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_39.setTransform(1024.9,372.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858C91").s().p("AgHBJIAAhjIAPAAIgKgNQAKgLAKgWIAVAAIgFALIAlAAIAAAQIgaAAIAJAKIgMAJIAYAAIAABiIgTAAIAAgGIgkAAIAAAHgAALAyIAkAAIAAgLIgkAAgAALAYIAkAAIAAgJIgkAAgAALAAIAkAAIAAgJIgkAAgAAKgaIAcAAIgLgOIAIgFIgLAAQgGAKgIAJgAguBJIAAgwQgGAPgKAPQgDgLgFgLQAPgPAHgRIgSAAIAAgRIAUAAIAAgQIASAAIAAAQIARAAIAAARIgRAAIAAAHIAUAQIgKAPIgKgLIAAAtgAhGglQARgQAIgTIATAAIgFALIAgAAIAAAQIgQAAIAIALIgOAIQgGgKgGgHIAEgCIgLAAQgHAKgKAKQgGgHgHgFg");
	this.shape_40.setTransform(1009.6,372.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
	this.shape_41.setTransform(994.3,373);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgLgKgPIgKAAIAAgRIBmAAIAAAQQgKAPgRAMQAVAGAeABIgMAWQgjgEgagNQgZAMgkAGQgFgJgGgKgAABAiQAOgIALgJIgwAAQAJAJAOAIgAAdgVIALgNQAPAJASANIgNAOIgfgXgAhIgNQASgKAPgMIAMANQgQANgSAKIgLgOgAAIgEIAAghIgPAAIAAAhIgTAAIAAghIgqAAIAAgRIA6AAIgFgNIAUgFIAIASIA4AAIAAARIgqAAIAAAhg");
	this.shape_42.setTransform(978.8,372.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#858C91").s().p("AgoACQAAgdALgPQALgQAUAAQAnAAAAA6QAAAcgLAPQgKAQgUAAQgoAAAAg5gAgQABQAAAoAQAAQARAAAAgpQAAgngQAAQgRAAAAAog");
	this.shape_43.setTransform(966.1,372.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#858C91").s().p("AgcAtQgKgOAAgZQAAgcANgSQAOgSAXAAQAMAAAIADIAAAUQgJgEgKAAQgNAAgHAKQgIAKAAAQIABAAQAHgMAPAAQAPAAAIAKQAJAJAAAPQAAARgMAMQgKALgRAAQgTAAgKgOgAgKAHQgEAFAAAHQAAAJAEAGQAEAHAHAAQAHAAAEgGQAEgGAAgIQAAgTgQAAQgFAAgFAFg");
	this.shape_44.setTransform(956.5,372.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#858C91").s().p("AABA6IAAhZQgDAFgIACIgOAEIAAgUQAUgGAOgLIAPAAIAABzg");
	this.shape_45.setTransform(945.9,372.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#858C91").s().p("AAZBCIgOgQQgIACgIAAQgZAAgPgQQgPgQAAgYQAAgbAPgRQAQgRAaAAQAXAAAPARQAPAQAAAaQAAAZgQARIgCACIAdAcgAgbghQgHALgBARQABAPAHALQAJAKAOAAQANAAAHgKQAJgKgBgQQABgSgJgKQgHgKgNAAQgOAAgJAKg");
	this.shape_46.setTransform(935.9,373.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#858C91").s().p("AAdA5IgJgaIgoAAIgIAaIgaAAIAphxIAcAAIAoBxgAgCgbIgNAnIAeAAIgNgmIgCgKIAAAAIgCAJg");
	this.shape_47.setTransform(923,372.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#858C91").s().p("AAvBIIAAgIIghAAIAAAIIgQAAIAAg1IAXAAIAAgMIgZAAQgCAogQAYIgOgQQAPgaAAgqIAAg2IBYAAIAAAuIgcAAIAAANIAiAAIAAAPIgiAAIAAAMIAZAAIAAA1gAAOAxIAhAAIAAgOIghAAgAgDgIIAYAAIAAgNIgYAAgAgDgkIA0AAIAAgQIg0AAgAhCBGIgFgTIAKABQAFAAAAgIIAAgaIgOADIgCgVIAQgBIAAgZIgOAAIAAgSIAOAAIAAgaIASAAIAAAaIAMAAIAAASIgMAAIAAAUIANgCIAAARIgNAEIAAAoQAAAQgNABIgKAAIgFAAg");
	this.shape_48.setTransform(909.4,373);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#858C91").s().p("AgTA5QAEgGAAgIIAAhuIBPAAIAABMIgGAAIAMAPIgXAOQAKAIAQADIgLAUQgVgIgNgQIgBARQggAHgGAEgAACAwIAYgFQgKgOgFgUIgJAAgAAlAaIAUgRIgcAAQADAJAFAIgAACgIIArAAIAAgMIgrAAgAACgkIArAAIAAgMIgrAAgAg2BHIAAg8QgFAOgJANIgEgbQAMgSAFgUIgQAAIAAgTIARAAIAAgaIATAAIAAAaIAQAAIAAATIgQAAIAAAOIAUANIgMAPIgIgGIAAA+g");
	this.shape_49.setTransform(893.9,373);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(32));

	// 图层 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333F48").s().p("Ag2CFIAAgfQgmAKgtAPIgIgqIAjgIIAAhIIgcAAIAAgjIAcAAIAAg+IgdAAIAAglIBfAAIAAAlIgdAAIAAA+IAbAAIAAAjIgbAAIAAA/IAegJQgBAVABATIBIAAIAAgZIhCAAIAAgiIBCAAIAAgVIhBAAIAAiXICoAAIAACXIhBAAIAAAVIBCAAIAAAiIhCAAIAAAZIBPAAIAAAigABDgMIAcAAIAAgdIgcAAgAAAgMIAdAAIAAgdIgdAAgABDhHIAcAAIAAgcIgcAAgAAAhHIAdAAIAAgcIgdAAg");
	this.shape_50.setTransform(997.5,308.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333F48").s().p("AiSBvQAegnAAheIAAh0IEDAAIAAAiIhkAAIgLAWIBeAAIAAB6IhFAAIAAA5QAAARgJAKQgJAJgSABQgTACgXgBQgDgTgFgSIgdAfIgegaQAggdAWgfIAhAWQgMAQgOAPIAbACQAPAAAAgNIAAgtIhIAAIAAh6IAxAAIAIgWIhMAAIAABXQAABpgkAzQgQgPgSgNgAgTAKIBrAAIAAgRIhrAAgAgTgiIBrAAIAAgSIhrAAgAA/A/IAegVQAaAbAcAiIgiAYQgXgggbggg");
	this.shape_51.setTransform(966.4,308.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333F48").s().p("AAICRIAAjNIgIAAQgSApgWAdQgJgPgOgWQAhgzAThBIAlAJIgMAlICEAAIAAAlIhhAAIAAAkIBQAAIAAAkIhQAAIAAAkIBWAAIAAAlIhWAAIAAA8gAhtCRIAAiNQgMAUgOASQgCgWgIgfQAkg4AWhKIAnALQgJAegMAbIAADag");
	this.shape_52.setTransform(935.5,308);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333F48").s().p("AiOB+IAAgqIB2AAIAAinIhlAAIAAgpID8AAIAAApIhnAAIAACnIB3AAIAAAqg");
	this.shape_53.setTransform(904.5,308.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#006FC0").s().p("Ag0g1IBpAzIhpA4g");
	this.shape_54.setTransform(665,303.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4F8330").s().p("Ag0g1IBpAzIhpA4g");
	this.shape_55.setTransform(762.6,530.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgaAbQgMgLAAgQQAAgOAMgMQALgLAPAAQAQAAALALQAMAMAAAOQAAAQgMALQgLAMgQgBQgPABgLgMg");
	this.shape_56.setTransform(635.8,380.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("Ag0g1IBpAzIhpA4g");
	this.shape_57.setTransform(695.1,380.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgaAcQgMgMAAgQQAAgPAMgMQALgKAPgBQAQABALAKQAMAMAAAPQAAAQgMAMQgLAKgQABQgPgBgLgKg");
	this.shape_58.setTransform(635.3,530.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgLAPAAQAQAAALALQAMALAAAPQAAAQgMALQgLALgQAAQgPAAgLgLg");
	this.shape_59.setTransform(635.3,303.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgLgLg");
	this.shape_60.setTransform(635.8,232.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOgCQAAAEAEAEQAFAFAFAAIAPAAIAAXAIgPAAQgFABgFAEQgEAEAAAGgAgOpXQAAgGAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAGIAAJFIgPAAQgFAAgFAFQgEAEAAAGgAgKpuQgEgEAAgGIAAthIABAFIARApQADAFAGADIACAAIAAKOQgDABgDADQgEAEAAAGQAAAGAEAEQADADADABIAACBQAAAGgFAEQgEAEgGABQgFgBgFgEg");
	this.shape_61.setTransform(635.1,381.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4F8330").s().p("ApsAPIgDgFIgCgFIAAgBQAAgFAEgEQAFgEAGgBIAPAAIS2gJQAGAAAEAFQAFAEAAAHQAAAFgFAEQgEAEgGAAIzFAJIAAAAQgGAAgEgEg");
	this.shape_62.setTransform(696.2,530.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AkRAPIgPAAQgGAAgEgFQgFgEAAgFIAAgBQAAgFAFgEQAEgFAGAAIAPAAIIyAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAg");
	this.shape_63.setTransform(664,381);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#006FC0").s().p("AKSXiQgGgCgCgGIgYg3QgDgFADgGQACgGAGgDQAFgCAGACQAGADACAFIAYA3QADAGgCAGQgDAGgFACIgGABIgGgBgAJZViQgGgCgCgGIgYg3QgDgFADgGQACgGAGgCQAFgDAGACQAGADACAFIAYA3QADAGgCAGQgDAGgFACIgGABIgGgBgAIgTiQgGgCgCgGIgYg3QgDgFADgGQACgGAGgCQAFgDAGACQAGADACAFIAYA3QADAGgCAGQgDAGgFACIgGABIgGgBgAHnRiQgGgCgCgGIgYg3QgDgFADgGQACgGAGgCQAFgDAGACQAGADACAFIAYA3QADAGgCAGQgDAGgFACIgGABIgGgBgAGuPiQgGgCgCgGIgYg3QgDgFADgGQACgGAGgCQAFgDAGACQAGADACAFIAYA3QADAGgCAGQgDAGgFACIgGABIgGgBgAF2NiQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAE9LiQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAEEJiQgGgCgDgGIgYg3QgCgFACgGQACgGAGgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgADLHiQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgACSFiQgGgCgDgGIgYg3QgCgFACgGQADgGAFgDQAGgCAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgABZDiQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAAgBiQgGgCgDgGIgXg3QgCgFACgGQACgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAgYgdQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAhRidQgGgCgDgGIgYg3QgCgFACgGQACgGAGgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAiKkdQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAjDmdQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAj8odQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAk1qdQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAqIryQgDgBgDgDQgEgEAAgGQAAgGAEgFQADgCADgBIAFgBIAogBQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAIgoABIgFgBgAnjryQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIAoAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAozryQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIAoAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAlusdQgGgCgDgGIgYg3QgCgFACgGQADgGAFgDQAGgCAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAmmudQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAnfwdQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAoYydQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgApR0dQgGgCgDgGIgYg3QgCgFACgGQADgGAFgCQAGgDAGACQAFADADAFIAYA3QACAGgCAGQgCAGgGACIgGABIgFgBgAqI2cIgCgBQgGgCgDgGIgSgoIgBgFIAAgBIABgFIAAgBQADgGAFgCIAAAAQAFgCAEABIADABQAFACADAGIAAAAIAAABIASAnQACAGgCAGQgCAGgGACIgGABIgDAAg");
	this.shape_64.setTransform(701.5,380.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhHBBQAKgNAKgSIAKAGQgLAUgJAMgAArAnIAKgGQAMASAHAOIgLAGIgSgggAgbAmIAKgEQAHAPAFAQIgMAEQgEgQgGgPgAAHAlIAKgEQAHAOAGAQIgMAFQgEgOgHgRgAAtAeIAAgGIhVAAIAAAGIgMAAIAAg3IAuAAIAAguIALAAIAAASIBCAAIAAAKIhCAAIAAASIA0AAIAAA3gAgoANIBVAAIAAgbIhVAAg");
	this.shape_65.setTransform(613.2,528.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNBGQgWAAAAgWIAAhYIANAAIAABWQAAAMALABIAfAAQAMgBACgKQACgJABgNIANAFIgFAWQgEARgSAAgAhIAiQAJgbAHgfIALADQgGAegKAegAAkgXIALgGQANAZANAcIgMAHQgLgdgOgZgAgMhAIAKgFIAXAqIgNAGQgJgWgLgVg");
	this.shape_66.setTransform(598.3,527.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBJIAAg3IgsAAIAAAIIgMAAIAAhCIA4AAIAAggIAMAAIAAAgIA5AAIAABCIgMAAIAAgIIgtAAIAAA3gAAGAHIAtAAIAAgkIgtAAgAgyAHIAsAAIAAgkIgsAAg");
	this.shape_67.setTransform(583.3,528.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgoBJIAAggIgfAEIgBgLIAggEIAAgUIgcAAIAAgKIANgnIgQAAIAAgKIASAAIAHgWIALACIgGAUIAgAAIAAAKIgkAAIgNAnIASAAIAAggIAKAAIAAAgIATAAIAAAKIgTAAIAAATIAUgCIAAAKIgUADIAAAhgAARBDQgRAAAAgQIAAhCIALAAIAAAgQASgMAQgOIAKAHQgXATgVALIAAATQAAAKAKgBIAUAAQAKAAABgIQACgJAAgMIAMADIgDAWQgDAPgSAAgAgVgSQAagVAPggIAOAAIgCAFQAQAgAZAMIgIAKQgYgOgRgdQgQAcgUARIgJgIg");
	this.shape_68.setTransform(568.3,528.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhBBFIAAiIIAuAAIAAAKIgOAoQAMAQACAMQAEAcgSADQgIACgIgBIgDgMQAIACAGgBQAKgCgDgUQgCgKgLgOIANgrIgWAAIAAB+gAA2BEIAAgJIg1AAIAAAJIgKAAIAAiGIBKAAIAACGgAABAwIA1AAIAAgwIg1AAgAABgKIA1AAIAAgtIg1AAg");
	this.shape_69.setTransform(553.3,528.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhIA8QA5geAHg1Ig+AAIAAgMIA/AAIABgkIAMAAIAAAkIBAAAIAAAMIhAAAQAPA6A0AWIgLAMQgvgbgPgzQgLAyg0AeIgJgLgAgQApIAJgHIAUAXIgKAIIgTgYg");
	this.shape_70.setTransform(538.3,528.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AghBGIgDgOIAWABQAKAAAAgJIAAh1IAMAAIAAB4QAAATgUAAIgVAAgAhIAjQARgcAQgsIAMAEQgOAngTAkIgMgHgAAaggIALgFQASAiASAkIgNAHQgSgpgQgfg");
	this.shape_71.setTransform(523.3,528.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AggA1IAAgPQALAJAPAAQALAAAHgGQAGgGAAgJQAAgWgdAAIgKAAIAAgLIAJAAQAaAAAAgUQAAgTgTAAQgMAAgLAIIAAgNQALgHAPAAQAOAAAIAIQAJAIAAAMQAAAWgXAGIAAABQANABAHAGQAHAIAAALQAAAPgLAJQgLAKgRAAQgQAAgKgGg");
	this.shape_72.setTransform(511.3,527.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaAmIAAgPQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgHQAAgLAJgHQAJgGAMgBQAKABAJADIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADACQADAEAKADQAOAFAEAFQAFAFAAAJQAAALgJAGQgJAHgOgBQgMAAgJgEg");
	this.shape_73.setTransform(503.6,529.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAoAoIAKgGIARAcIgMAGQgEgLgLgRgAhDA/QAIgKAHgVQAGADAHABIgPAgQgGgDgHgCgAAEAoIAKgGIAPAbIgLAGQgEgLgKgQgAgbApQAEgCAGgDIALAaIgMAFQgBgGgIgUgAguAaIAAgXIAAgYIAlAAIAAgeIAAgQIAMAAIgBATIAmAAIATAAIAAALIgTgBIgmAAIAAARIAtAAIAAAYIAAAXgAgiAQIBFAAIAAgbIhFAAg");
	this.shape_74.setTransform(612.8,376.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgsBEIAAgbIAAgdIBYAAIgBAbIABAcIgNAAIAAgMIhAAAIAAANgAghAuIBAAAIAAgZIhAAAgAhDgFQAMgGALgIQALgIALgNQAMgNAHgOIAKAGIgDAEQARAUALAIQAKAHAJAFIARAGQgGAGgBAFQgMgEgJgGQgKgGgKgJQgJgJgMgQQgLAQgKAKIgTARIgRAKIgJgIgAASgBIggAAIgUABIAAgMIAUABIAfAAIARgBIAAAMIgQgBg");
	this.shape_75.setTransform(597.4,376.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAvBCIAAgHIg/ACIAAgTIAAgdIAAgOIALAAIAAANIAAAoIA0gCIAAgmIgBgNIAMAAIAAAOIAAAjIAAASgAhCAtIABgYIAAgvIgBgZIAmAAIAAAZIAAAlIAAAXIgKAAIAAgMIgQAAIAAAXgAg2ANIAQAAIAAg3IgQAAgAgFAjQALgKAEgKQAEgKABgNIAOADQgCABgDAOIAWARQgFADgEAGIgRgRIgGAJQgEAHgFAFIgKgFgAAxgMIgzAAIgVABIAAgKIALAAIAAgSIAAgQIALAAIAAAOIAAAUIASAAIAAgfIgBgNIAMAAIgBAQIARAAIARAAIAAAKIgRgBIgRAAIAAATIAWAAIASAAIAAAKIgSgBg");
	this.shape_76.setTransform(582.4,376.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAzBCIAAgJIhkAAIAAAJIgLAAIAAgmIAAg9IAAggIB5AAIAAAgIAAA+IAAAlgAgxAwIBkAAIAAhpIhkAAgAgXAeIAAgWIgRALQgCgEgFgFQAIgCAIgGQAHgEAFgHIgXABIAAgJIAcAAIAEgJIgbAAIAAgIIANAAQgDgGgFgFQADgCAEgEIAJAMIgHAFIAQAAIACgTIALACQgCAEgDANIAKAAQAGgKADgIIALAFQgFADgGAKIAPAAIAAAIIgPAAIgUAAIgEAJIAaAAIATAAIAAAJIgZgBQADAFAIAEQAIAFAMADQgFAFgBAEQgNgDgJgIIAAAIQAAAHgEACQgEADgJABIgDgJQAKAAABgEIAAgEIgXAAIAAARQgBAIALgBIASAAQAGAAACgBQACgDABgHQAEADAHABQgDAJgDADQgDADgHAAIgeAAIgCAAQgMAAAAgMgAgRACIAfAAIgJgLIgMAAIgKALg");
	this.shape_77.setTransform(566.9,376.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAoBDIAAgHIhaAAIAAghIAAgbIALAAIAAAyIBPAAIAAgyIAMAAIgBAeIABAlgAgjAoQANgJAJgNQAIgNADgLQAGAEAGACIgHALIAQAMIARANIgJAKIgPgNIgNgMIgJAMIgPAPIgKgIgAgBgLIhCABIAAgLIAcABIAAgVIgBgPIANAAIgBARIAAATIAcAAIAAgeIAAgRIALAAIgBASIAfAAIAPgBIAAALIgPgBIgfAAIAAAUIA6gBIAAALIhFgBg");
	this.shape_78.setTransform(551.6,376.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEBJIAAguQgZAbgjAOIgIgKQAigMAZgWIg4AAIAAgKIBBAAIAAgPIAJAAIAAAPIBCAAIAAAKIg6AAQAYAXAkAIIgJALQglgMgWgbIAAAugAhIgBQAWgRADgbIgUAAIAAgKIAUAAIABgRIALAAIgBARIAhAAIgBAhQgBANgFAFQgDAEgLAAIgMAAIgCgLIAOABQAIAAABgJIACgaIgXAAQgCAfgaAVIgIgIgAAzgBIAAgHIgfAAIAAAHIgLAAIAAg6IA1AAIAAA6gAAUgSIAfAAIAAgfIgfAAg");
	this.shape_79.setTransform(611.6,301.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhEBCIAAgKIBDAAIAAgPIgwAAIAAgKIAwAAIAAgOIgqAAQgJANgKAKIgIgIQAQgRAMgVIAKAEIgFAJIAkAAIAAgMIALAAIAAAMIA3AAIAAAKIg3AAIAAAOIAzAAIAAAKIgzAAIAAAPIA+AAIAAAKgAAtgEIAAgFIhiAAIAAg4IBtAAIAAA9gAgqgTIBXAAIAAgNIhXAAgAgqgqIBXAAIAAgNIhXAAg");
	this.shape_80.setTransform(596.6,301.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgwBIIAAg+IgTASIgFgMQAXgRASgiIALAGQgIANgIAMIAABMgAABBGIgBgNIAWABQAKAAAAgKIAAg1IgzAAIAAgLIBcAAIAAALIgdAAIAAA5QAAASgSAAIgZAAgAhHgdQAXgSAOgYIALAGQgRAagZAVIgGgLgAgKgxIAAgLIBLAAIAAALg");
	this.shape_81.setTransform(581.6,301.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhHBBQAKgNAKgSIAKAGQgLAUgJAMgAArAnIAKgGQAMASAHAOIgLAGIgSgggAgbAmIAKgEQAHAPAFAQIgMAEQgEgQgGgPgAAHAlIAKgEQAHAOAGAQIgMAFQgEgOgHgRgAAtAeIAAgGIhVAAIAAAGIgMAAIAAg3IAuAAIAAguIALAAIAAASIBCAAIAAAKIhCAAIAAASIA0AAIAAA3gAgoANIBVAAIAAgbIhVAAg");
	this.shape_82.setTransform(613.2,235);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNBGQgWAAAAgWIAAhYIANAAIAABWQAAAMALAAIAfAAQAMAAACgKQACgJABgNIANAEIgFAYQgEAQgSAAgAhIAjQAJgcAHgfIALADQgGAegKAegAAkgXIALgFQANAXANAeIgMAFQgLgcgOgZgAgMg/IAKgGIAXAqIgNAGQgJgXgLgTg");
	this.shape_83.setTransform(598.3,234.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGBJIAAg3IgsAAIAAAIIgMAAIAAhCIA4AAIAAggIAMAAIAAAgIA5AAIAABCIgMAAIAAgIIgtAAIAAA3gAAGAHIAtAAIAAgkIgtAAgAgyAHIAsAAIAAgkIgsAAg");
	this.shape_84.setTransform(583.3,235.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgoBIIAAgfIgfAEIgBgLIAggDIAAgWIgcAAIAAgJIANgnIgQAAIAAgJIASAAIAHgYIALADIgGAVIAgAAIAAAJIgkAAIgNAnIASAAIAAgfIAKAAIAAAfIATAAIAAAJIgTAAIAAAVIAUgEIAAALIgUADIAAAggAARBEQgRgBAAgQIAAhBIALAAIAAAeQASgLAQgOIAKAHQgXATgVALIAAAUQAAAIAKABIAUAAQAKAAABgJQACgKAAgMIAMAFIgDAVQgDAPgSABgAgVgTQAagTAPghIAOAAIgCAFQAQAgAZANIgIAJQgYgOgRgeQgQAdgUARIgJgJg");
	this.shape_85.setTransform(568.3,235.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhBBEIAAiIIAuAAIAAAKIgOAqQAMAPACAMQAEAcgSADQgIABgIAAIgDgMQAIABAGgBQAKgCgDgSQgCgLgLgOIANgsIgWAAIAAB+gAA2BEIAAgKIg1AAIAAAKIgKAAIAAiGIBKAAIAACGgAABAwIA1AAIAAgwIg1AAgAABgKIA1AAIAAgtIg1AAg");
	this.shape_86.setTransform(553.3,235.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhIA8QA5geAHg2Ig+AAIAAgLIA/AAIABgjIAMAAIAAAjIBAAAIAAALIhAAAQAPA7A0AWIgLAMQgvgbgPgyQgLAxg0AfIgJgMgAgQApIAJgHIAUAXIgKAIIgTgYg");
	this.shape_87.setTransform(538.3,235.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhIA8QA8gbAFg0Ig/AAIAAgMIA/AAIABgoIAMAAIgBAoIBBAAIAAAMIhBAAQAKA5A6ATQgHAHgEAFQgwgUgOgxQgLAtg0AbIgJgMg");
	this.shape_88.setTransform(523.3,235.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgjA6IAAgGQAAgKADgHQADgGAGgHQAGgGANgJQAMgJAFgHQAFgHAAgJQAAgJgGgFQgFgGgJAAQgHAAgIAEQgHAEgGAGIAAgOQAGgFAHgEQAHgDAJAAQAPAAAJAJQAJAIAAAOQAAAMgFAKQgGAIgOAJIgSAOQgFAFgCAEQgCADAAAGIA4AAIAAANg");
	this.shape_89.setTransform(511.4,234.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgaAlIAAgOQAKAIANAAQAQAAAAgLQAAgFgEgDQgEgDgKgEQgNgFgEgFQgEgFAAgIQAAgLAJgGQAJgHAMAAQAKAAAJAEIAAAOQgJgGgLAAQgGAAgEADQgFADAAAFQAAAFADADQADACAKAEQAOAFAEAFQAFAGAAAHQAAALgJAHQgJAGgOABQgMAAgJgGg");
	this.shape_90.setTransform(503.6,236.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AA0BKIAAgFIh0AAIAAg5IANAAIAAAtIAtAAIAAg8Ig2AAIAAg4IANAAIAAAsIApAAIAAg6IANAAIAAA6IAoAAIAAgsIAOAAIAAA8IgOAAIAAgEIgoAAIAAA8IAtAAIAAgtIANAAIAAA+g");
	this.shape_91.setTransform(682.5,623.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgTBNIAAhbIApAAIAABLQgBAOgMABIgMAAIgBgKIAKAAQAFAAABgGIAAgTIgVAAIAAAkgAgJAhIAVAAIAAgPIgVAAgAgJAJIAVAAIAAgNIgVAAgAgyBNIAAghIgaAEIgBgLIAbgEIAAgWIgZAAIAAgLQAGgQAHgaIgOAAIAAgKIAQAAIAFgYIAMACIgGAWIAcAAIAAAKIgeAAIgNAqIAOAAIAAgcIAKAAIAAAcIAQAAIAAALIgQAAIAAAVIASgCIgBAKIgRACIAAAjgAAkBMIgDgMIARABQAJAAgBgIIAAhKIALAAIAABLQAAASgPAAIgSAAgAAiAvIAAg5IALAAIAAA5gAgfgdQAfgTATgbIAQAAIgDADQATAcAbAMIgIALQgKgGgKgHIAAAHIg1AAIAAgGIgTANIgJgJgAAAglIAwAAQgOgMgKgPQgLAPgNAMg");
	this.shape_92.setTransform(666.6,623.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AA6BKIAAgHIhzAAIAAAHIgLAAIAAiTICJAAIAACTgAg5A4IBzAAIAAh2IhzAAIAABHQAUgJAMgMIgbAAIAAgJIAjAAIAGgKIgkAAIAAgKIAUAAIgOgMIAIgHIAPANIgHAGIASAAIAFgTIAJAAIgEATIAWAAIgGgFQAJgHAGgIIAIAHIgNANIASAAIAAAKIgvAAQgBAFgDAFIA6AAIAAAJIgdAAQALANAVAFIgIALQgPgGgKgLIgBARQgCANgOAAIgOAAIgCgKIANABQAIAAABgGIAAgHIgiAAIAAAYQAAAIAJAAIAeAAQALAAACgHQACgGABgIIAKAEIgDAOQgEANgRAAIghAAQgSAAAAgRIAAgaIgTAMIgHgKgAgVAAIAsAAQgGgFgEgHIgXAAIgLAMg");
	this.shape_93.setTransform(650.5,623.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AA0BNIAAgIIhyAAIAAhMIANAAIAABBIBlAAIAAhCIANAAIAABVgAgwAnQAqgRAEghIAMAAQgCAKgDAIIArAeIgJALIgngfQgMAVgcAMIgIgLgAhMgQIAAgLIAZAAIAAgoIAMAAIAAAoIAlAAIAAgxIALAAIAAARIA5AAIAAALIg5AAIAAAVIBDAAIAAALg");
	this.shape_94.setTransform(634.5,623.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgLAVIAKgpIANAAIgMApg");
	this.shape_95.setTransform(614.1,629.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhNBBQAagWAEgrIANACQgBAOgEANQAMAaAZADIAAhDIhHAAIAAgMICTAAIAAAMIhAAAIAAAYIA3AAIAAALIg3AAIAAAhIBEAAIgFANQgmAAgcgBQgjAAgQgcQgJAUgPAPIgJgNgAA5gcIAAgSIhwAAIAAASIgMAAIAAgdIBCAAIgKgOIALgGIAOAQIgHAEIA/AAIAAAdg");
	this.shape_96.setTransform(602.5,623.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AA4BJIAAgIIhvAAIAAAIIgMAAIAAiRICIAAIAACRgAg3A1IBvAAIAAhxIhvAAgAAWApIAAgHIgrAAIAAAHIgMAAIAAgyIAcAAIAAgTIgpAAIAAgKIApAAIAAgSIALAAIAAASIApAAIAAAKIgpAAIAAATIAcAAIAAAygAgVAYIArAAIAAgXIgrAAg");
	this.shape_97.setTransform(586.5,624.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AglA+IAAgHQAAgKADgHQADgIAGgHQAHgGANgKQAOgJAFgHQAFgIAAgKQAAgJgGgGQgGgGgKAAQgHAAgIAEQgIAEgGAHIAAgPQAFgGAIgEQAHgDALABQAQgBAJAJQAKAJAAAPQABANgHAKQgGAJgPAKIgTAPQgFAEgCAFQgCAEgBAGIA8AAIAAAOg");
	this.shape_98.setTransform(573.9,623.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWA9QgKgDgEgDIAAgRQAFAFAKACQAJAEAIAAQAZAAAAgTQAAgEgDgFQgDgDgFgDIgQgKQgTgIgFgIQgGgIAAgKQAAgPAMgJQAMgJARABQATAAAIAEIAAARQgLgIgRABQgKgBgHAFQgHAEAAAJQAAAHAFAFQAFAFAPAHQASAIAHAIQAHAJAAAKQAAARgLAIQgMAJgUAAQgHAAgJgCg");
	this.shape_99.setTransform(564.6,623.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgrBNIAAghIggAEIgCgMIAigDIAAgWIgeAAIAAgKIAOgqIgQAAIAAgLIATAAIAHgYIAMACIgHAWIAiAAIAAALIglAAIgPApIATAAIAAghIALAAIAAAhIAUAAIAAALIgUAAIAAAVIAWgDIAAALIgWADIAAAigAASBIQgSAAAAgSIAAhGIALAAIAAAiQAUgMASgQIAKAIQgYAVgYAMIAAAUQAAAKALAAIAVAAQALAAABgKQACgKABgNIAMAFIgDAWQgCARgUAAgAgWgUQAbgVAQgiIAPAAIgCAFQARAiAbANIgIALQgagPgSggQgSAegVASQgEgFgFgEg");
	this.shape_100.setTransform(551.9,623.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhFBJIAAiRIAxAAIAAALIgPArQANARACANQADAegTADQgHACgJgBIgEgOQAJADAHgBQAKgCgDgVQgCgLgMgQIAOgtIgYAAIAACGgAA6BIIAAgKIg5AAIAAAKIgLAAIAAiOIBQAAIAACOgAABAzIA5AAIAAgzIg5AAgAABgKIA5AAIAAgxIg5AAg");
	this.shape_101.setTransform(535.9,624);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhNBAQA9ggAIg5IhCAAIAAgMIBDAAIABgnIAMAAIAAAnIBFAAIAAAMIhEAAQAQA+A3AYIgLAMQgzgcgQg2QgMA1g3AgIgKgMgAgRAsIAKgIIAVAZIgLAJIgUgag");
	this.shape_102.setTransform(519.8,623.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AhNBAQBAgcAFg5IhCAAIAAgMIBDAAIAAgqIANAAIAAAqIBFAAIAAAMIhGAAQALA+A+AUIgMAMQgzgUgPg1QgLAwg4AcIgKgMg");
	this.shape_103.setTransform(503.9,623.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgLAVIAKgpIANAAIgMApg");
	this.shape_104.setTransform(483.5,629.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhNA+QAzgfARhFQgMgVgMgHIAKgHQARALAVAtQAdA+AiAOIgLAOQgigUgdhBIgEgKQgSA+gxAiQgFgGgFgGg");
	this.shape_105.setTransform(471.9,623.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgTBNIAAhbIAoAAIAABLQAAAOgMABIgLAAIgDgKIALAAQAGAAgBgGIAAgTIgUAAIAAAkgAgJAhIAUAAIAAgPIgUAAgAgJAJIAUAAIAAgNIgUAAgAgyBNIAAghIgZAEIgCgLIAbgEIAAgWIgZAAIAAgLQAGgQAGgaIgNAAIAAgKIAQAAIAGgYIALACIgGAWIAdAAIAAAKIggAAIgMAqIAOAAIAAgcIALAAIAAAcIAOAAIAAALIgOAAIAAAVIAQgCIgBAKIgPACIAAAjgAAkBMIgCgMIARABQAHAAABgIIAAhKIAKAAIAABLQAAASgPAAIgSAAgAAjAvIAAg5IAKAAIAAA5gAgegdQAegTASgbIARAAIgCADQARAcAcAMIgIALQgKgGgJgHIAAAHIg2AAIAAgGIgTANIgIgJgAAAglIAwAAQgNgMgKgPQgMAPgNAMg");
	this.shape_106.setTransform(455.9,623.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgrBNIAAghIghAEIgBgMIAigDIAAgWIgfAAIAAgKIAPgqIgQAAIAAgLIATAAIAHgYIAMACIgHAWIAjAAIAAALIgnAAIgOApIATAAIAAghIALAAIAAAhIAUAAIAAALIgUAAIAAAVIAWgDIgBALIgVADIAAAigAASBIQgSAAAAgSIAAhGIALAAIAAAiQAUgMASgQIAJAIQgYAVgXAMIAAAUQAAAKALAAIAVAAQALAAACgKQACgKAAgNIAMAFIgDAWQgDARgSAAgAgWgUQAbgVAQgiIAQAAIgEAFQASAiAbANIgJALQgYgPgSggQgTAegWASQgDgFgFgEg");
	this.shape_107.setTransform(439.9,623.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhFBJIAAiRIAxAAIAAALIgPArQAMARADANQADAegSADQgIACgJgBIgDgOQAIADAHgBQALgCgEgVQgCgLgMgQIAOgtIgYAAIAACGgAA5BIIAAgKIg4AAIAAAKIgLAAIAAiOIBQAAIAACOgAABAzIA4AAIAAgzIg4AAgAABgKIA4AAIAAgxIg4AAg");
	this.shape_108.setTransform(423.9,624);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhNBAQA9ggAIg5IhCAAIAAgMIBDAAIABgnIAMAAIAAAnIBFAAIAAAMIhEAAQAQA+A3AYIgLAMQgzgcgQg2QgMA1g3AgIgKgMgAgRAsIAKgIIAVAZIgLAJIgUgag");
	this.shape_109.setTransform(407.8,623.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgkBKIgCgOIAWABQALAAAAgKIAAh9IAOAAIAACBQAAAUgWAAIgXgBgAhNAlQATgeAQgvIANAFQgPAqgUAlIgNgHgAAbgiIALgFQAVAkATAnIgOAGQgUgrgRghg");
	this.shape_110.setTransform(391.9,623.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgiA4IAAgQQAMAKAQAAQALAAAHgGQAIgGAAgKQAAgYggAAIgKAAIAAgMIAJAAQAcABAAgWQABgUgWAAQgNAAgLAJIAAgOQAMgIAQABQAOgBAKAJQAJAHAAANQABAZgZAGIAAABQANABAIAHQAIAHAAAMQAAARgNAKQgLAKgSAAQgSgBgKgGg");
	this.shape_111.setTransform(379.1,623.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgWA9QgKgDgEgDIAAgRQAFAFAKACQAJAEAIAAQAZAAAAgTQAAgEgDgFQgDgDgFgDIgQgKQgTgIgFgIQgGgIAAgKQAAgPAMgJQAMgJARABQATAAAIAEIAAARQgLgIgRABQgKgBgHAFQgHAEAAAJQAAAHAFAFQAFAFAPAHQASAIAHAIQAHAJAAAKQAAARgLAIQgMAJgUAAQgHAAgJgCg");
	this.shape_112.setTransform(369.9,623.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgGAqQgDgCAAgFQAAgEADgDQADgDADAAQAFAAADADQACADAAAEQAAAFgCACQgDADgFAAQgDAAgDgDgAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQACADAAAEQAAAEgCADQgDADgFAAQgDAAgDgDg");
	this.shape_113.setTransform(353.2,624.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhJBIQAJgaAKgjIAMAGIgSA8gAgmBEIAAgMIA0AAIAAgsIgoAAIAAgLIAoAAIAAglIgsAAIAAgNIAwAAIgPgUIALgHQALAMAFAKIgKAFIA1AAIAAANIguAAIAAAlIApAAIAAALIgpAAIAAAsIAzAAIAAAMgAhNgYIAIgJIAcAWIgJAKQgQgPgLgIgAhHhAIAIgJQAPAMANALIgKAJIgagXg");
	this.shape_114.setTransform(341.2,623.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(41));

	// 图层 6
	this.instance = new lib.qianjin();
	this.instance.parent = this;
	this.instance.setTransform(139.3,183.2,0.775,0.775,0,0,0,-0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.4,183,876.3,452.5);


(lib.page20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 6
	this.btn2 = new lib.btn();
	this.btn2.parent = this;
	this.btn2.setTransform(458.5,663.1,1.191,0.664,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn(), 3);

	this.btn1 = new lib.btn();
	this.btn1.parent = this;
	this.btn1.setTransform(238.3,666.1,1.191,0.664,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2}]}).wait(3));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333F48").s().p("AgxB3IAAgcIhKAXIgIglIAggHIAAhBIgZAAIAAggIAZAAIAAg3IgaAAIAAgiIBWAAIAAAiIgbAAIAAA3IAZAAIAAAgIgZAAIAAA4IAcgIIgBAlIBBAAIAAgYIg7AAIAAgeIA7AAIAAgSIg5AAIAAiIICWAAIAACIIg7AAIAAASIA8AAIAAAeIg8AAIAAAYIBHAAIAAAdgAA8gLIAZAAIAAgZIgZAAgAABgLIAZAAIAAgZIgZAAgAA8hAIAZAAIAAgZIgZAAgAABhAIAZAAIAAgZIgZAAg");
	this.shape.setTransform(400.6,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333F48").s().p("AiDBkQAbgjAAhVIAAhpIDpAAIAAAfIhbAAIgJAUIBVAAIAABtIg/AAIAAA0QgBAQgHAIQgIAJgRABIgmABQgCgTgEgOIgbAbIgagYQAcgaAVgbIAdAUIgYAcIAZABQAOAAAAgLIAAgqIhCAAIAAhtIAtAAIAHgUIhEAAIAABOQgBBgggAtQgPgOgPgLgAgRAIIBfAAIAAgPIhfAAgAgRgfIBfAAIAAgQIhfAAgAA4A4IAcgTQAYAZAYAeIgeAWQgVgdgZgdg");
	this.shape_1.setTransform(373.3,62.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333F48").s().p("AAHCCIAAi3IgHAAQgQAkgUAaQgIgOgMgTQAeguAQg7IAiAIIgLAhIB2AAIAAAjIhWAAIAAAgIBHAAIAAAgIhHAAIAAAhIBNAAIAAAhIhNAAIAAA1gAhiCCIAAh+QgKARgNARQgDgUgGgcQAggyAThDIAkAKQgJAbgKAYIAADEg");
	this.shape_2.setTransform(346,61.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333F48").s().p("Ah/BxIAAglIBqAAIAAiXIhcAAIAAglIDkAAIAAAlIheAAIAACXIBrAAIAAAlg");
	this.shape_3.setTransform(318.7,61.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333F48").s().p("AgnB+IAAgPIhUANIgHgjQAvgFAygIIAAAQIANAAIAAiWQgdAxgbAlIAugGIgDAgQhEAHgMAEIgNggQAOgHAbgoQgaABgJAEIgLggQAPgJAjhLIAhANQgWAngTAfIAWgBIARggIAeAPIAAg0ICHAAIAADMIAQAAIAAAigAAQBcIA+AAIAAgkIg+AAgAAQAXIA+AAIAAghIg+AAgAAQgrIA+AAIAAgjIg+AAg");
	this.shape_4.setTransform(291.4,61);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_5.setTransform(264.2,61.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333F48").s().p("ABNCCIAAgKIi8AAIAAiBIAlAAIAAA4QA+gZAAgrIh1AAIAAgfIAkAAIAAg9IAlAAIAAA9IAsAAIAAhNIAkAAIAAAYIBWAAIAAAeIhWAAIAAAXIBpAAIAAAfIhqAAQgBAOgDAMQAeASAcASIAAgyIAlAAIAACLgAhKBZICXAAIAAgoIgSAbQgbgXgdgUQgQAYgmAUIgXgdg");
	this.shape_6.setTransform(236.8,61.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333F48").s().p("Ah7B5IAAgcIByAAIAAgRIhNAAIAAgaIgRATQgLgJgPgKQAbgeAPgfIgOAAIAAhtIDQAAIAABtIhQAAIAAAPIBcAAIAAAcIhcAAIAAARIBUAAIAAAbIhUAAIAAARIBnAAIAAAcgAhWAxIBNAAIAAgRIhCAAIgLARgAg0gFIgGAJIAxAAIAAgPIg6AAgAhBgoICIAAIAAgOIiIAAgAhBhNICIAAIAAgOIiIAAg");
	this.shape_7.setTransform(209.4,61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333F48").s().p("AgJBdIAqACQATAAAAgVIAAhKIhNAAIAAgjICdAAIAAAjIgqAAIAABTQAAAWgJALQgLALgRABIg1ACQgEgSgFgTgAhbCBIAAhiIgZAXIgPgkQApgiAegsIAfAUQgMARgNAQIAACIgAiChEQAtgiAVgbIAgAXQgcAgguAlQgKgPgOgQgAgRhMIAAgiICIAAIAAAig");
	this.shape_8.setTransform(182.2,61.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333F48").s().p("AAzBIQgZAcgiAWQgMgSgMgPQAjgWAZgdQgagsgIg6IAigHQAIApARAgQAWgmAFgyIhbAAIAAgjICDAAQgCBegqBBQAXAdAhAWIgdAhQgegXgWgbgAiDBUQAfgdAUgmIgvhMIAcgTIAjA2QAJgdADghIhLAAIAAgjIBwAAQAABNgXA6IAcAsIggAXIgQgbQgWAkggAdIgTgjg");
	this.shape_9.setTransform(154.9,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// 图层 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAoIAAhPIALAAIAABPg");
	this.shape_10.setTransform(568.8,695.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWgoIAtAnIgtAqg");
	this.shape_11.setTransform(573.8,696);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWgoIAtAnIgtAqg");
	this.shape_12.setTransform(578.4,696);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhSBKQALAAAFgBQAHgCgBgKIAAgpIgYAKIgFgQIAdgJIAAglIgdABIAAgNQAHABAWAAIAAgUIgBgaIARAAIgBAaIAAAUIAVgBIAAAMIgVAAIAAAgIAUgHIAAAOQgLADgJAEIAAA2QAAANgHAEQgGACgRAFQgCgKgFgIgABGBaIAAgQIhCAAIgYAAIAAgOIAVABIBFAAIAAgeIg3AAIgXABIAAgPIASABIA8AAIAAgZIhBAAIgTAAIAAgOIARABIAWAAIAAgwIAAgXIARAAIgBAbIAAAsIAtAAIgBAmIAAArIABAdgAA3gqQAKgPAJgWQAHAFAKAEIgWAkQgFgEgJgEgAgWhJQAIgCAHgFIASAkIgQAHQgHgSgKgSg");
	this.shape_13.setTransform(546,695.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCBcIAAgoIg1AAIgiAAIAAgQIAiABIA1AAIAAgeIgnABQgLABgMADIgIgRQALgEAKgMQALgNAHgNIgvABIAAgPIA2ABQAKgTADgMIARAIIgNAXIA1AAIAcgBIAAAPIgcgBIg8AAQgJAOgUAcIArAAIAAgfIAQAAIgBAfIAaAAIAfgBIAAAOIgfgBIgaAAIAAAeIArAAIAhgBIAAAQIghAAIgrAAIABAog");
	this.shape_14.setTransform(521.2,695.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag/BcIABgcIAAhWQgEAKgKAPIgNgLQAIgKALgVQALgVAHgfIAVAIQgGAGgLAeIAABuIAAAdgAAxBGQALABAHgBQAIgCAAgJIAAh6IgBgZIAQAAIgBAZIAACGQgCAKgIADQgJADgOADQgBgIgGgMgAglA+QAHAAAXgDIAAgfIgYABIAAgQIAYABIAAgYQgOACgJADQgCgJgDgIQAIgCAGgLQAHgKAFgSIgVABIAAgQIAYAAIAQAAIAWAAIAAAQIgbgBQgMAggHAJIAegDIgIgPIAMgGQAOAaADAKIgNAHIgDgJIgPACIAAAYIAYgBIAAAQIgYgBIAAAcQAOgCAPgEQgBAIABAGIgpAJQgRAEgIADQgCgHgEgLgAAsArIAAgXIAAg6IAAgZIAQAAIgBAZIAAA6IABAXg");
	this.shape_15.setTransform(495.7,695.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFApIAAhQIALAAIAABQg");
	this.shape_16.setTransform(273.2,696.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWACIAtgqIAABRg");
	this.shape_17.setTransform(268.2,696.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWACIAugqIAABRg");
	this.shape_18.setTransform(263.5,696.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhSBKQAKAAAHgBQAGgCgBgKIAAgpIgXAKIgHgQIAegJIAAglIgdABIAAgNQAGABAXAAIAAgUIgBgaIAQAAIAAAaIAAAUIAVgBIAAAMIgVAAIAAAgIATgHIABAOQgLADgJAEIAAA2QAAANgHAEQgHACgQAFQgCgKgFgIgABHBaIAAgQIhDAAIgXAAIAAgOIATABIBHAAIAAgeIg4AAIgXABIAAgPIASABIA9AAIAAgZIhBAAIgUAAIAAgOIAQABIAYAAIAAgwIgBgXIARAAIAAAbIAAAsIAsAAIgBAmIAAArIABAdgAA2gqQALgPAJgWQAHAFAJAEIgUAkQgGgEgKgEgAgVhJQAHgCAGgFIATAkIgQAHQgHgSgJgSg");
	this.shape_19.setTransform(346.6,695.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAbBYQgZAAgSgFQgVgGgJgFQgKgGgIAGQgHAFgJAKQgFgHgGgFIAbgUIAAhCIgXACIAAgPIAYABIAPAAIgCAcIAAAwQAXAQAaADQAYACAZAAQAZgBATgDQgDAJgBAKIg9gBgAggA5QAQgNAEgMQAEgLADgPIgfAAIAAgNIAgABIACgjQgQAAgPACIAAgQIAgABIgBgjIAPACIgBAhIAaAAIAAgjIAQAAIAAAjIAfgBIAAAPIgfgBIAAAjIAkgBIAAANIgkAAIAAAgIAAAbIgQAAIAAgbIAAggIgdAAQgDAVgGANQgFANgLAOIgQgKgAAKgGIAcAAIAAgjIgaAAIgCAjgAhMhNIAPgHQANAZADALQgJABgHAFQgCgPgNgUg");
	this.shape_20.setTransform(321.6,695.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhLBdQACgOAAgRIAAg+IgBgdIBKAAIgBAdIAABNQAAAIgGADIgWAEQgCgJgDgIIAOAAQAEAAAAgFIAAgZIgqAAIAAAwgAg6AiIAqAAIAAgUIgqAAgAg6ACIAqAAIAAgUIgqAAgAAkBLIASAAQADgBAAgGIAAhRIgBgUIARAAIgBAUIAABWQAAAKgFAEQgFADgSABQgDgKgFgGgAASA2IABgUIAAgiIgBgXIAQAAIgBAXIAAAiIABAUgABBguIh7AAQgUAAgOACIAAgQIAiABIBOAAQAOgZACgIQAIAEAKADQgDADgFAHIgKAQIAgAAIAZgBIAAAQQgNgCgPAAgAgthVQAJgDAFgEQALAOAFAJIgPAIQgDgIgMgQg");
	this.shape_21.setTransform(296.8,695.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333F48").s().p("AHSD4Qg5gBAAg5IAAl7QAAg5A5AAIT2AAQA5AAAAA5IAAF7QAAA5g5ABgA7HD4Qg5gBAAg5IAAl7QAAg5A5AAIT2AAQA5AAAAA5IAAF7QAAA5g5ABg");
	this.shape_22.setTransform(417.6,696.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333F48").s().p("Ap6D4Qg5gBAAg5IAAl7QAAg5A5AAIT1AAQA5AAAAA5IAAF7QAAA5g5ABg");
	this.shape_23.setTransform(527.7,696.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00B5E2").s().p("Ap6D4Qg5gBAAg5IAAl7QAAg5A5AAIT1AAQA5AAAAA5IAAF7QAAA5g5ABg");
	this.shape_24.setTransform(307.5,696.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_24,p:{x:307.5}},{t:this.shape_23,p:{x:527.7}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_24,p:{x:527.7}},{t:this.shape_23,p:{x:307.5}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// 图层 1
	this.instance = new lib.sxxcl_yl03大太阳轮_00000();
	this.instance.parent = this;
	this.instance.setTransform(140,183,0.775,0.775);

	this.instance_1 = new lib.Page20_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_2 = new lib.Page20_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// 图层 4
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F0F9F6").s().p("EhAfA8AMAAAh3/MCA/AAAMAAAB3/g");
	this.shape_25.setTransform(412.8,384);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_26.setTransform(683,384);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2F6F8").s().p("Eg18A8AMAAAh3/MBr5AAAMAAAB3/g");
	this.shape_27.setTransform(430.3,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3dpage20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(554.8,-501.3,1366,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00000.jpg", id:"sxxcl_yl03大太阳轮_00000"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00059.jpg", id:"sxxcl_yl03大太阳轮_00059"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00060.jpg", id:"sxxcl_yl03大太阳轮_00060"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00061.jpg", id:"sxxcl_yl03大太阳轮_00061"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00062.jpg", id:"sxxcl_yl03大太阳轮_00062"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00063.jpg", id:"sxxcl_yl03大太阳轮_00063"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00064.jpg", id:"sxxcl_yl03大太阳轮_00064"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00065.jpg", id:"sxxcl_yl03大太阳轮_00065"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00066.jpg", id:"sxxcl_yl03大太阳轮_00066"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00067.jpg", id:"sxxcl_yl03大太阳轮_00067"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00068.jpg", id:"sxxcl_yl03大太阳轮_00068"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00069.jpg", id:"sxxcl_yl03大太阳轮_00069"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00070.jpg", id:"sxxcl_yl03大太阳轮_00070"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00071.jpg", id:"sxxcl_yl03大太阳轮_00071"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00072.jpg", id:"sxxcl_yl03大太阳轮_00072"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00073.jpg", id:"sxxcl_yl03大太阳轮_00073"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00074.jpg", id:"sxxcl_yl03大太阳轮_00074"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00075.jpg", id:"sxxcl_yl03大太阳轮_00075"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00076.jpg", id:"sxxcl_yl03大太阳轮_00076"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00077.jpg", id:"sxxcl_yl03大太阳轮_00077"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00078.jpg", id:"sxxcl_yl03大太阳轮_00078"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00079.jpg", id:"sxxcl_yl03大太阳轮_00079"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00080.jpg", id:"sxxcl_yl03大太阳轮_00080"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00081.jpg", id:"sxxcl_yl03大太阳轮_00081"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00082.jpg", id:"sxxcl_yl03大太阳轮_00082"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00083.jpg", id:"sxxcl_yl03大太阳轮_00083"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00084.jpg", id:"sxxcl_yl03大太阳轮_00084"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00085.jpg", id:"sxxcl_yl03大太阳轮_00085"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00086.jpg", id:"sxxcl_yl03大太阳轮_00086"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00087.jpg", id:"sxxcl_yl03大太阳轮_00087"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00088.jpg", id:"sxxcl_yl03大太阳轮_00088"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00089.jpg", id:"sxxcl_yl03大太阳轮_00089"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00090.jpg", id:"sxxcl_yl03大太阳轮_00090"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00091.jpg", id:"sxxcl_yl03大太阳轮_00091"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00092.jpg", id:"sxxcl_yl03大太阳轮_00092"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00093.jpg", id:"sxxcl_yl03大太阳轮_00093"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00094.jpg", id:"sxxcl_yl03大太阳轮_00094"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00095.jpg", id:"sxxcl_yl03大太阳轮_00095"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00096.jpg", id:"sxxcl_yl03大太阳轮_00096"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00097.jpg", id:"sxxcl_yl03大太阳轮_00097"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00098.jpg", id:"sxxcl_yl03大太阳轮_00098"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00099.jpg", id:"sxxcl_yl03大太阳轮_00099"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00100.jpg", id:"sxxcl_yl03大太阳轮_00100"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00101.jpg", id:"sxxcl_yl03大太阳轮_00101"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00102.jpg", id:"sxxcl_yl03大太阳轮_00102"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00103.jpg", id:"sxxcl_yl03大太阳轮_00103"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00104.jpg", id:"sxxcl_yl03大太阳轮_00104"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00105.jpg", id:"sxxcl_yl03大太阳轮_00105"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00106.jpg", id:"sxxcl_yl03大太阳轮_00106"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00107.jpg", id:"sxxcl_yl03大太阳轮_00107"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00108.jpg", id:"sxxcl_yl03大太阳轮_00108"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00109.jpg", id:"sxxcl_yl03大太阳轮_00109"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00110.jpg", id:"sxxcl_yl03大太阳轮_00110"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00111.jpg", id:"sxxcl_yl03大太阳轮_00111"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00112.jpg", id:"sxxcl_yl03大太阳轮_00112"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00113.jpg", id:"sxxcl_yl03大太阳轮_00113"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00114.jpg", id:"sxxcl_yl03大太阳轮_00114"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00115.jpg", id:"sxxcl_yl03大太阳轮_00115"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00116.jpg", id:"sxxcl_yl03大太阳轮_00116"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00117.jpg", id:"sxxcl_yl03大太阳轮_00117"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00118.jpg", id:"sxxcl_yl03大太阳轮_00118"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00119.jpg", id:"sxxcl_yl03大太阳轮_00119"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00120.jpg", id:"sxxcl_yl03大太阳轮_00120"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00121.jpg", id:"sxxcl_yl03大太阳轮_00121"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00122.jpg", id:"sxxcl_yl03大太阳轮_00122"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00123.jpg", id:"sxxcl_yl03大太阳轮_00123"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00124.jpg", id:"sxxcl_yl03大太阳轮_00124"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00125.jpg", id:"sxxcl_yl03大太阳轮_00125"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00126.jpg", id:"sxxcl_yl03大太阳轮_00126"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00127.jpg", id:"sxxcl_yl03大太阳轮_00127"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00128.jpg", id:"sxxcl_yl03大太阳轮_00128"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00129.jpg", id:"sxxcl_yl03大太阳轮_00129"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00130.jpg", id:"sxxcl_yl03大太阳轮_00130"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00131.jpg", id:"sxxcl_yl03大太阳轮_00131"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00132.jpg", id:"sxxcl_yl03大太阳轮_00132"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00133.jpg", id:"sxxcl_yl03大太阳轮_00133"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00134.jpg", id:"sxxcl_yl03大太阳轮_00134"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00135.jpg", id:"sxxcl_yl03大太阳轮_00135"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00136.jpg", id:"sxxcl_yl03大太阳轮_00136"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00137.jpg", id:"sxxcl_yl03大太阳轮_00137"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00138.jpg", id:"sxxcl_yl03大太阳轮_00138"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00139.jpg", id:"sxxcl_yl03大太阳轮_00139"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00140.jpg", id:"sxxcl_yl03大太阳轮_00140"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00141.jpg", id:"sxxcl_yl03大太阳轮_00141"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00142.jpg", id:"sxxcl_yl03大太阳轮_00142"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00143.jpg", id:"sxxcl_yl03大太阳轮_00143"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00144.jpg", id:"sxxcl_yl03大太阳轮_00144"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00145.jpg", id:"sxxcl_yl03大太阳轮_00145"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00146.jpg", id:"sxxcl_yl03大太阳轮_00146"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00147.jpg", id:"sxxcl_yl03大太阳轮_00147"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00148.jpg", id:"sxxcl_yl03大太阳轮_00148"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00149.jpg", id:"sxxcl_yl03大太阳轮_00149"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00150.jpg", id:"sxxcl_yl03大太阳轮_00150"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00151.jpg", id:"sxxcl_yl03大太阳轮_00151"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00152.jpg", id:"sxxcl_yl03大太阳轮_00152"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00153.jpg", id:"sxxcl_yl03大太阳轮_00153"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00154.jpg", id:"sxxcl_yl03大太阳轮_00154"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00155.jpg", id:"sxxcl_yl03大太阳轮_00155"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00156.jpg", id:"sxxcl_yl03大太阳轮_00156"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00157.jpg", id:"sxxcl_yl03大太阳轮_00157"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00158.jpg", id:"sxxcl_yl03大太阳轮_00158"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00159.jpg", id:"sxxcl_yl03大太阳轮_00159"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00160.jpg", id:"sxxcl_yl03大太阳轮_00160"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00161.jpg", id:"sxxcl_yl03大太阳轮_00161"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00162.jpg", id:"sxxcl_yl03大太阳轮_00162"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00163.jpg", id:"sxxcl_yl03大太阳轮_00163"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00164.jpg", id:"sxxcl_yl03大太阳轮_00164"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00165.jpg", id:"sxxcl_yl03大太阳轮_00165"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00166.jpg", id:"sxxcl_yl03大太阳轮_00166"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00167.jpg", id:"sxxcl_yl03大太阳轮_00167"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00168.jpg", id:"sxxcl_yl03大太阳轮_00168"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00169.jpg", id:"sxxcl_yl03大太阳轮_00169"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00170.jpg", id:"sxxcl_yl03大太阳轮_00170"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00171.jpg", id:"sxxcl_yl03大太阳轮_00171"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00172.jpg", id:"sxxcl_yl03大太阳轮_00172"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00173.jpg", id:"sxxcl_yl03大太阳轮_00173"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00174.jpg", id:"sxxcl_yl03大太阳轮_00174"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00175.jpg", id:"sxxcl_yl03大太阳轮_00175"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00176.jpg", id:"sxxcl_yl03大太阳轮_00176"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00177.jpg", id:"sxxcl_yl03大太阳轮_00177"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00178.jpg", id:"sxxcl_yl03大太阳轮_00178"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00179.jpg", id:"sxxcl_yl03大太阳轮_00179"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00180.jpg", id:"sxxcl_yl03大太阳轮_00180"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00181.jpg", id:"sxxcl_yl03大太阳轮_00181"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00182.jpg", id:"sxxcl_yl03大太阳轮_00182"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00183.jpg", id:"sxxcl_yl03大太阳轮_00183"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00184.jpg", id:"sxxcl_yl03大太阳轮_00184"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00185.jpg", id:"sxxcl_yl03大太阳轮_00185"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00186.jpg", id:"sxxcl_yl03大太阳轮_00186"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00187.jpg", id:"sxxcl_yl03大太阳轮_00187"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00188.jpg", id:"sxxcl_yl03大太阳轮_00188"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00189.jpg", id:"sxxcl_yl03大太阳轮_00189"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00190.jpg", id:"sxxcl_yl03大太阳轮_00190"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00191.jpg", id:"sxxcl_yl03大太阳轮_00191"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00192.jpg", id:"sxxcl_yl03大太阳轮_00192"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00193.jpg", id:"sxxcl_yl03大太阳轮_00193"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00194.jpg", id:"sxxcl_yl03大太阳轮_00194"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00195.jpg", id:"sxxcl_yl03大太阳轮_00195"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00196.jpg", id:"sxxcl_yl03大太阳轮_00196"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00197.jpg", id:"sxxcl_yl03大太阳轮_00197"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00198.jpg", id:"sxxcl_yl03大太阳轮_00198"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00199.jpg", id:"sxxcl_yl03大太阳轮_00199"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00200.jpg", id:"sxxcl_yl03大太阳轮_00200"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00201.jpg", id:"sxxcl_yl03大太阳轮_00201"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00202.jpg", id:"sxxcl_yl03大太阳轮_00202"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00203.jpg", id:"sxxcl_yl03大太阳轮_00203"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00204.jpg", id:"sxxcl_yl03大太阳轮_00204"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00205.jpg", id:"sxxcl_yl03大太阳轮_00205"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00206.jpg", id:"sxxcl_yl03大太阳轮_00206"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00207.jpg", id:"sxxcl_yl03大太阳轮_00207"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00208.jpg", id:"sxxcl_yl03大太阳轮_00208"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00209.jpg", id:"sxxcl_yl03大太阳轮_00209"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00210.jpg", id:"sxxcl_yl03大太阳轮_00210"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00211.jpg", id:"sxxcl_yl03大太阳轮_00211"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00212.jpg", id:"sxxcl_yl03大太阳轮_00212"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00213.jpg", id:"sxxcl_yl03大太阳轮_00213"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00214.jpg", id:"sxxcl_yl03大太阳轮_00214"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00215.jpg", id:"sxxcl_yl03大太阳轮_00215"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00216.jpg", id:"sxxcl_yl03大太阳轮_00216"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00217.jpg", id:"sxxcl_yl03大太阳轮_00217"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00218.jpg", id:"sxxcl_yl03大太阳轮_00218"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00219.jpg", id:"sxxcl_yl03大太阳轮_00219"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00220.jpg", id:"sxxcl_yl03大太阳轮_00220"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00221.jpg", id:"sxxcl_yl03大太阳轮_00221"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00222.jpg", id:"sxxcl_yl03大太阳轮_00222"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00223.jpg", id:"sxxcl_yl03大太阳轮_00223"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00224.jpg", id:"sxxcl_yl03大太阳轮_00224"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00225.jpg", id:"sxxcl_yl03大太阳轮_00225"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00226.jpg", id:"sxxcl_yl03大太阳轮_00226"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00227.jpg", id:"sxxcl_yl03大太阳轮_00227"},
		{src:"images/3dpage20/sxxcl_yl03大太阳轮_00228.jpg", id:"sxxcl_yl03大太阳轮_00228"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00000.jpg", id:"sxxcl_yl4大太阳轮_00000"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00001.jpg", id:"sxxcl_yl4大太阳轮_00001"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00002.jpg", id:"sxxcl_yl4大太阳轮_00002"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00003.jpg", id:"sxxcl_yl4大太阳轮_00003"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00004.jpg", id:"sxxcl_yl4大太阳轮_00004"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00005.jpg", id:"sxxcl_yl4大太阳轮_00005"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00006.jpg", id:"sxxcl_yl4大太阳轮_00006"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00007.jpg", id:"sxxcl_yl4大太阳轮_00007"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00008.jpg", id:"sxxcl_yl4大太阳轮_00008"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00009.jpg", id:"sxxcl_yl4大太阳轮_00009"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00010.jpg", id:"sxxcl_yl4大太阳轮_00010"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00011.jpg", id:"sxxcl_yl4大太阳轮_00011"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00012.jpg", id:"sxxcl_yl4大太阳轮_00012"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00013.jpg", id:"sxxcl_yl4大太阳轮_00013"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00014.jpg", id:"sxxcl_yl4大太阳轮_00014"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00015.jpg", id:"sxxcl_yl4大太阳轮_00015"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00016.jpg", id:"sxxcl_yl4大太阳轮_00016"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00017.jpg", id:"sxxcl_yl4大太阳轮_00017"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00018.jpg", id:"sxxcl_yl4大太阳轮_00018"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00019.jpg", id:"sxxcl_yl4大太阳轮_00019"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00020.jpg", id:"sxxcl_yl4大太阳轮_00020"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00021.jpg", id:"sxxcl_yl4大太阳轮_00021"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00022.jpg", id:"sxxcl_yl4大太阳轮_00022"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00023.jpg", id:"sxxcl_yl4大太阳轮_00023"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00024.jpg", id:"sxxcl_yl4大太阳轮_00024"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00025.jpg", id:"sxxcl_yl4大太阳轮_00025"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00026.jpg", id:"sxxcl_yl4大太阳轮_00026"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00027.jpg", id:"sxxcl_yl4大太阳轮_00027"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00028.jpg", id:"sxxcl_yl4大太阳轮_00028"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00029.jpg", id:"sxxcl_yl4大太阳轮_00029"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00030.jpg", id:"sxxcl_yl4大太阳轮_00030"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00031.jpg", id:"sxxcl_yl4大太阳轮_00031"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00032.jpg", id:"sxxcl_yl4大太阳轮_00032"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00033.jpg", id:"sxxcl_yl4大太阳轮_00033"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00034.jpg", id:"sxxcl_yl4大太阳轮_00034"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00035.jpg", id:"sxxcl_yl4大太阳轮_00035"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00036.jpg", id:"sxxcl_yl4大太阳轮_00036"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00037.jpg", id:"sxxcl_yl4大太阳轮_00037"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00038.jpg", id:"sxxcl_yl4大太阳轮_00038"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00039.jpg", id:"sxxcl_yl4大太阳轮_00039"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00040.jpg", id:"sxxcl_yl4大太阳轮_00040"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00041.jpg", id:"sxxcl_yl4大太阳轮_00041"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00042.jpg", id:"sxxcl_yl4大太阳轮_00042"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00043.jpg", id:"sxxcl_yl4大太阳轮_00043"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00044.jpg", id:"sxxcl_yl4大太阳轮_00044"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00045.jpg", id:"sxxcl_yl4大太阳轮_00045"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00046.jpg", id:"sxxcl_yl4大太阳轮_00046"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00047.jpg", id:"sxxcl_yl4大太阳轮_00047"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00048.jpg", id:"sxxcl_yl4大太阳轮_00048"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00049.jpg", id:"sxxcl_yl4大太阳轮_00049"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00050.jpg", id:"sxxcl_yl4大太阳轮_00050"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00051.jpg", id:"sxxcl_yl4大太阳轮_00051"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00052.jpg", id:"sxxcl_yl4大太阳轮_00052"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00053.jpg", id:"sxxcl_yl4大太阳轮_00053"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00054.jpg", id:"sxxcl_yl4大太阳轮_00054"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00055.jpg", id:"sxxcl_yl4大太阳轮_00055"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00056.jpg", id:"sxxcl_yl4大太阳轮_00056"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00057.jpg", id:"sxxcl_yl4大太阳轮_00057"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00058.jpg", id:"sxxcl_yl4大太阳轮_00058"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00059.jpg", id:"sxxcl_yl4大太阳轮_00059"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00060.jpg", id:"sxxcl_yl4大太阳轮_00060"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00061.jpg", id:"sxxcl_yl4大太阳轮_00061"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00062.jpg", id:"sxxcl_yl4大太阳轮_00062"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00063.jpg", id:"sxxcl_yl4大太阳轮_00063"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00064.jpg", id:"sxxcl_yl4大太阳轮_00064"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00065.jpg", id:"sxxcl_yl4大太阳轮_00065"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00066.jpg", id:"sxxcl_yl4大太阳轮_00066"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00067.jpg", id:"sxxcl_yl4大太阳轮_00067"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00068.jpg", id:"sxxcl_yl4大太阳轮_00068"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00069.jpg", id:"sxxcl_yl4大太阳轮_00069"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00070.jpg", id:"sxxcl_yl4大太阳轮_00070"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00071.jpg", id:"sxxcl_yl4大太阳轮_00071"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00072.jpg", id:"sxxcl_yl4大太阳轮_00072"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00073.jpg", id:"sxxcl_yl4大太阳轮_00073"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00074.jpg", id:"sxxcl_yl4大太阳轮_00074"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00075.jpg", id:"sxxcl_yl4大太阳轮_00075"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00076.jpg", id:"sxxcl_yl4大太阳轮_00076"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00077.jpg", id:"sxxcl_yl4大太阳轮_00077"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00078.jpg", id:"sxxcl_yl4大太阳轮_00078"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00079.jpg", id:"sxxcl_yl4大太阳轮_00079"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00080.jpg", id:"sxxcl_yl4大太阳轮_00080"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00081.jpg", id:"sxxcl_yl4大太阳轮_00081"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00082.jpg", id:"sxxcl_yl4大太阳轮_00082"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00083.jpg", id:"sxxcl_yl4大太阳轮_00083"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00084.jpg", id:"sxxcl_yl4大太阳轮_00084"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00085.jpg", id:"sxxcl_yl4大太阳轮_00085"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00086.jpg", id:"sxxcl_yl4大太阳轮_00086"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00087.jpg", id:"sxxcl_yl4大太阳轮_00087"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00088.jpg", id:"sxxcl_yl4大太阳轮_00088"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00089.jpg", id:"sxxcl_yl4大太阳轮_00089"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00090.jpg", id:"sxxcl_yl4大太阳轮_00090"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00091.jpg", id:"sxxcl_yl4大太阳轮_00091"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00092.jpg", id:"sxxcl_yl4大太阳轮_00092"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00093.jpg", id:"sxxcl_yl4大太阳轮_00093"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00094.jpg", id:"sxxcl_yl4大太阳轮_00094"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00095.jpg", id:"sxxcl_yl4大太阳轮_00095"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00096.jpg", id:"sxxcl_yl4大太阳轮_00096"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00097.jpg", id:"sxxcl_yl4大太阳轮_00097"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00098.jpg", id:"sxxcl_yl4大太阳轮_00098"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00099.jpg", id:"sxxcl_yl4大太阳轮_00099"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00100.jpg", id:"sxxcl_yl4大太阳轮_00100"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00101.jpg", id:"sxxcl_yl4大太阳轮_00101"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00102.jpg", id:"sxxcl_yl4大太阳轮_00102"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00103.jpg", id:"sxxcl_yl4大太阳轮_00103"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00104.jpg", id:"sxxcl_yl4大太阳轮_00104"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00105.jpg", id:"sxxcl_yl4大太阳轮_00105"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00106.jpg", id:"sxxcl_yl4大太阳轮_00106"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00107.jpg", id:"sxxcl_yl4大太阳轮_00107"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00108.jpg", id:"sxxcl_yl4大太阳轮_00108"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00109.jpg", id:"sxxcl_yl4大太阳轮_00109"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00110.jpg", id:"sxxcl_yl4大太阳轮_00110"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00111.jpg", id:"sxxcl_yl4大太阳轮_00111"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00112.jpg", id:"sxxcl_yl4大太阳轮_00112"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00113.jpg", id:"sxxcl_yl4大太阳轮_00113"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00114.jpg", id:"sxxcl_yl4大太阳轮_00114"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00115.jpg", id:"sxxcl_yl4大太阳轮_00115"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00116.jpg", id:"sxxcl_yl4大太阳轮_00116"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00117.jpg", id:"sxxcl_yl4大太阳轮_00117"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00118.jpg", id:"sxxcl_yl4大太阳轮_00118"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00119.jpg", id:"sxxcl_yl4大太阳轮_00119"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00120.jpg", id:"sxxcl_yl4大太阳轮_00120"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00121.jpg", id:"sxxcl_yl4大太阳轮_00121"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00122.jpg", id:"sxxcl_yl4大太阳轮_00122"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00123.jpg", id:"sxxcl_yl4大太阳轮_00123"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00124.jpg", id:"sxxcl_yl4大太阳轮_00124"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00125.jpg", id:"sxxcl_yl4大太阳轮_00125"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00126.jpg", id:"sxxcl_yl4大太阳轮_00126"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00127.jpg", id:"sxxcl_yl4大太阳轮_00127"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00128.jpg", id:"sxxcl_yl4大太阳轮_00128"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00129.jpg", id:"sxxcl_yl4大太阳轮_00129"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00130.jpg", id:"sxxcl_yl4大太阳轮_00130"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00131.jpg", id:"sxxcl_yl4大太阳轮_00131"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00132.jpg", id:"sxxcl_yl4大太阳轮_00132"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00133.jpg", id:"sxxcl_yl4大太阳轮_00133"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00134.jpg", id:"sxxcl_yl4大太阳轮_00134"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00135.jpg", id:"sxxcl_yl4大太阳轮_00135"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00136.jpg", id:"sxxcl_yl4大太阳轮_00136"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00137.jpg", id:"sxxcl_yl4大太阳轮_00137"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00138.jpg", id:"sxxcl_yl4大太阳轮_00138"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00139.jpg", id:"sxxcl_yl4大太阳轮_00139"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00140.jpg", id:"sxxcl_yl4大太阳轮_00140"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00141.jpg", id:"sxxcl_yl4大太阳轮_00141"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00142.jpg", id:"sxxcl_yl4大太阳轮_00142"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00143.jpg", id:"sxxcl_yl4大太阳轮_00143"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00144.jpg", id:"sxxcl_yl4大太阳轮_00144"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00145.jpg", id:"sxxcl_yl4大太阳轮_00145"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00146.jpg", id:"sxxcl_yl4大太阳轮_00146"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00147.jpg", id:"sxxcl_yl4大太阳轮_00147"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00148.jpg", id:"sxxcl_yl4大太阳轮_00148"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00149.jpg", id:"sxxcl_yl4大太阳轮_00149"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00150.jpg", id:"sxxcl_yl4大太阳轮_00150"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00151.jpg", id:"sxxcl_yl4大太阳轮_00151"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00152.jpg", id:"sxxcl_yl4大太阳轮_00152"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00153.jpg", id:"sxxcl_yl4大太阳轮_00153"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00154.jpg", id:"sxxcl_yl4大太阳轮_00154"},
		{src:"images/3dpage20/sxxcl_yl4大太阳轮_00155.jpg", id:"sxxcl_yl4大太阳轮_00155"}
	],
	preloads: []
};




})(lib3dpage20 = lib3dpage20||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3dpage20, images, createjs, ss, AdobeAn;