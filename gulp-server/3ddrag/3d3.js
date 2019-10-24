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



(lib.sxxcl_bzt_zk0000 = function() {
	this.initialize(img.sxxcl_bzt_zk0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0001 = function() {
	this.initialize(img.sxxcl_bzt_zk0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0002 = function() {
	this.initialize(img.sxxcl_bzt_zk0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0003 = function() {
	this.initialize(img.sxxcl_bzt_zk0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0004 = function() {
	this.initialize(img.sxxcl_bzt_zk0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0005 = function() {
	this.initialize(img.sxxcl_bzt_zk0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0006 = function() {
	this.initialize(img.sxxcl_bzt_zk0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0007 = function() {
	this.initialize(img.sxxcl_bzt_zk0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0008 = function() {
	this.initialize(img.sxxcl_bzt_zk0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0009 = function() {
	this.initialize(img.sxxcl_bzt_zk0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0010 = function() {
	this.initialize(img.sxxcl_bzt_zk0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0011 = function() {
	this.initialize(img.sxxcl_bzt_zk0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0012 = function() {
	this.initialize(img.sxxcl_bzt_zk0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0013 = function() {
	this.initialize(img.sxxcl_bzt_zk0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0014 = function() {
	this.initialize(img.sxxcl_bzt_zk0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0015 = function() {
	this.initialize(img.sxxcl_bzt_zk0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0016 = function() {
	this.initialize(img.sxxcl_bzt_zk0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0017 = function() {
	this.initialize(img.sxxcl_bzt_zk0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0018 = function() {
	this.initialize(img.sxxcl_bzt_zk0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0019 = function() {
	this.initialize(img.sxxcl_bzt_zk0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0020 = function() {
	this.initialize(img.sxxcl_bzt_zk0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0021 = function() {
	this.initialize(img.sxxcl_bzt_zk0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0022 = function() {
	this.initialize(img.sxxcl_bzt_zk0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0023 = function() {
	this.initialize(img.sxxcl_bzt_zk0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0024 = function() {
	this.initialize(img.sxxcl_bzt_zk0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0025 = function() {
	this.initialize(img.sxxcl_bzt_zk0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0026 = function() {
	this.initialize(img.sxxcl_bzt_zk0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0027 = function() {
	this.initialize(img.sxxcl_bzt_zk0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0028 = function() {
	this.initialize(img.sxxcl_bzt_zk0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0029 = function() {
	this.initialize(img.sxxcl_bzt_zk0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0030 = function() {
	this.initialize(img.sxxcl_bzt_zk0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0031 = function() {
	this.initialize(img.sxxcl_bzt_zk0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0032 = function() {
	this.initialize(img.sxxcl_bzt_zk0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0033 = function() {
	this.initialize(img.sxxcl_bzt_zk0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0034 = function() {
	this.initialize(img.sxxcl_bzt_zk0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0035 = function() {
	this.initialize(img.sxxcl_bzt_zk0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0036 = function() {
	this.initialize(img.sxxcl_bzt_zk0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0037 = function() {
	this.initialize(img.sxxcl_bzt_zk0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0038 = function() {
	this.initialize(img.sxxcl_bzt_zk0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0039 = function() {
	this.initialize(img.sxxcl_bzt_zk0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0040 = function() {
	this.initialize(img.sxxcl_bzt_zk0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0041 = function() {
	this.initialize(img.sxxcl_bzt_zk0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0042 = function() {
	this.initialize(img.sxxcl_bzt_zk0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0043 = function() {
	this.initialize(img.sxxcl_bzt_zk0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0044 = function() {
	this.initialize(img.sxxcl_bzt_zk0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0045 = function() {
	this.initialize(img.sxxcl_bzt_zk0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0046 = function() {
	this.initialize(img.sxxcl_bzt_zk0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0047 = function() {
	this.initialize(img.sxxcl_bzt_zk0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0048 = function() {
	this.initialize(img.sxxcl_bzt_zk0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0049 = function() {
	this.initialize(img.sxxcl_bzt_zk0049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_bzt_zk0050 = function() {
	this.initialize(img.sxxcl_bzt_zk0050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,675);


(lib.sxxcl_yz0000 = function() {
	this.initialize(img.sxxcl_yz0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0001 = function() {
	this.initialize(img.sxxcl_yz0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0002 = function() {
	this.initialize(img.sxxcl_yz0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0003 = function() {
	this.initialize(img.sxxcl_yz0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0004 = function() {
	this.initialize(img.sxxcl_yz0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0005 = function() {
	this.initialize(img.sxxcl_yz0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0006 = function() {
	this.initialize(img.sxxcl_yz0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0007 = function() {
	this.initialize(img.sxxcl_yz0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0008 = function() {
	this.initialize(img.sxxcl_yz0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0009 = function() {
	this.initialize(img.sxxcl_yz0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0010 = function() {
	this.initialize(img.sxxcl_yz0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0011 = function() {
	this.initialize(img.sxxcl_yz0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0012 = function() {
	this.initialize(img.sxxcl_yz0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0013 = function() {
	this.initialize(img.sxxcl_yz0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0014 = function() {
	this.initialize(img.sxxcl_yz0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0015 = function() {
	this.initialize(img.sxxcl_yz0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0016 = function() {
	this.initialize(img.sxxcl_yz0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0017 = function() {
	this.initialize(img.sxxcl_yz0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0018 = function() {
	this.initialize(img.sxxcl_yz0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0019 = function() {
	this.initialize(img.sxxcl_yz0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0020 = function() {
	this.initialize(img.sxxcl_yz0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0021 = function() {
	this.initialize(img.sxxcl_yz0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0022 = function() {
	this.initialize(img.sxxcl_yz0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0023 = function() {
	this.initialize(img.sxxcl_yz0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0024 = function() {
	this.initialize(img.sxxcl_yz0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0025 = function() {
	this.initialize(img.sxxcl_yz0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0026 = function() {
	this.initialize(img.sxxcl_yz0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0027 = function() {
	this.initialize(img.sxxcl_yz0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0028 = function() {
	this.initialize(img.sxxcl_yz0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0029 = function() {
	this.initialize(img.sxxcl_yz0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0030 = function() {
	this.initialize(img.sxxcl_yz0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0031 = function() {
	this.initialize(img.sxxcl_yz0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0032 = function() {
	this.initialize(img.sxxcl_yz0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0033 = function() {
	this.initialize(img.sxxcl_yz0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0034 = function() {
	this.initialize(img.sxxcl_yz0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0035 = function() {
	this.initialize(img.sxxcl_yz0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0036 = function() {
	this.initialize(img.sxxcl_yz0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0037 = function() {
	this.initialize(img.sxxcl_yz0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0038 = function() {
	this.initialize(img.sxxcl_yz0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0039 = function() {
	this.initialize(img.sxxcl_yz0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0040 = function() {
	this.initialize(img.sxxcl_yz0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0041 = function() {
	this.initialize(img.sxxcl_yz0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0042 = function() {
	this.initialize(img.sxxcl_yz0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0043 = function() {
	this.initialize(img.sxxcl_yz0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0044 = function() {
	this.initialize(img.sxxcl_yz0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0045 = function() {
	this.initialize(img.sxxcl_yz0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0046 = function() {
	this.initialize(img.sxxcl_yz0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0047 = function() {
	this.initialize(img.sxxcl_yz0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0048 = function() {
	this.initialize(img.sxxcl_yz0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0049 = function() {
	this.initialize(img.sxxcl_yz0049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0050 = function() {
	this.initialize(img.sxxcl_yz0050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0051 = function() {
	this.initialize(img.sxxcl_yz0051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0052 = function() {
	this.initialize(img.sxxcl_yz0052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0053 = function() {
	this.initialize(img.sxxcl_yz0053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0054 = function() {
	this.initialize(img.sxxcl_yz0054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0055 = function() {
	this.initialize(img.sxxcl_yz0055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0056 = function() {
	this.initialize(img.sxxcl_yz0056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0057 = function() {
	this.initialize(img.sxxcl_yz0057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0058 = function() {
	this.initialize(img.sxxcl_yz0058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0059 = function() {
	this.initialize(img.sxxcl_yz0059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0060 = function() {
	this.initialize(img.sxxcl_yz0060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0061 = function() {
	this.initialize(img.sxxcl_yz0061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0062 = function() {
	this.initialize(img.sxxcl_yz0062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0063 = function() {
	this.initialize(img.sxxcl_yz0063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0064 = function() {
	this.initialize(img.sxxcl_yz0064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0065 = function() {
	this.initialize(img.sxxcl_yz0065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0066 = function() {
	this.initialize(img.sxxcl_yz0066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0067 = function() {
	this.initialize(img.sxxcl_yz0067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0068 = function() {
	this.initialize(img.sxxcl_yz0068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0069 = function() {
	this.initialize(img.sxxcl_yz0069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0070 = function() {
	this.initialize(img.sxxcl_yz0070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0071 = function() {
	this.initialize(img.sxxcl_yz0071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0072 = function() {
	this.initialize(img.sxxcl_yz0072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0073 = function() {
	this.initialize(img.sxxcl_yz0073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0074 = function() {
	this.initialize(img.sxxcl_yz0074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0075 = function() {
	this.initialize(img.sxxcl_yz0075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0076 = function() {
	this.initialize(img.sxxcl_yz0076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0077 = function() {
	this.initialize(img.sxxcl_yz0077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0078 = function() {
	this.initialize(img.sxxcl_yz0078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0079 = function() {
	this.initialize(img.sxxcl_yz0079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0080 = function() {
	this.initialize(img.sxxcl_yz0080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0081 = function() {
	this.initialize(img.sxxcl_yz0081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0082 = function() {
	this.initialize(img.sxxcl_yz0082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0083 = function() {
	this.initialize(img.sxxcl_yz0083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0084 = function() {
	this.initialize(img.sxxcl_yz0084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0085 = function() {
	this.initialize(img.sxxcl_yz0085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0086 = function() {
	this.initialize(img.sxxcl_yz0086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0087 = function() {
	this.initialize(img.sxxcl_yz0087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0088 = function() {
	this.initialize(img.sxxcl_yz0088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0089 = function() {
	this.initialize(img.sxxcl_yz0089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0090 = function() {
	this.initialize(img.sxxcl_yz0090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0091 = function() {
	this.initialize(img.sxxcl_yz0091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0092 = function() {
	this.initialize(img.sxxcl_yz0092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0093 = function() {
	this.initialize(img.sxxcl_yz0093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0094 = function() {
	this.initialize(img.sxxcl_yz0094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0095 = function() {
	this.initialize(img.sxxcl_yz0095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0096 = function() {
	this.initialize(img.sxxcl_yz0096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0097 = function() {
	this.initialize(img.sxxcl_yz0097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0098 = function() {
	this.initialize(img.sxxcl_yz0098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0099 = function() {
	this.initialize(img.sxxcl_yz0099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0100 = function() {
	this.initialize(img.sxxcl_yz0100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0101 = function() {
	this.initialize(img.sxxcl_yz0101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0102 = function() {
	this.initialize(img.sxxcl_yz0102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0103 = function() {
	this.initialize(img.sxxcl_yz0103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0104 = function() {
	this.initialize(img.sxxcl_yz0104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0105 = function() {
	this.initialize(img.sxxcl_yz0105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0106 = function() {
	this.initialize(img.sxxcl_yz0106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0107 = function() {
	this.initialize(img.sxxcl_yz0107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0108 = function() {
	this.initialize(img.sxxcl_yz0108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0109 = function() {
	this.initialize(img.sxxcl_yz0109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0110 = function() {
	this.initialize(img.sxxcl_yz0110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0111 = function() {
	this.initialize(img.sxxcl_yz0111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0112 = function() {
	this.initialize(img.sxxcl_yz0112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0113 = function() {
	this.initialize(img.sxxcl_yz0113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0114 = function() {
	this.initialize(img.sxxcl_yz0114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0115 = function() {
	this.initialize(img.sxxcl_yz0115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0116 = function() {
	this.initialize(img.sxxcl_yz0116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0117 = function() {
	this.initialize(img.sxxcl_yz0117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0118 = function() {
	this.initialize(img.sxxcl_yz0118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0119 = function() {
	this.initialize(img.sxxcl_yz0119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0120 = function() {
	this.initialize(img.sxxcl_yz0120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0121 = function() {
	this.initialize(img.sxxcl_yz0121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0122 = function() {
	this.initialize(img.sxxcl_yz0122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0123 = function() {
	this.initialize(img.sxxcl_yz0123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0124 = function() {
	this.initialize(img.sxxcl_yz0124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0125 = function() {
	this.initialize(img.sxxcl_yz0125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0126 = function() {
	this.initialize(img.sxxcl_yz0126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0127 = function() {
	this.initialize(img.sxxcl_yz0127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0128 = function() {
	this.initialize(img.sxxcl_yz0128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0129 = function() {
	this.initialize(img.sxxcl_yz0129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0130 = function() {
	this.initialize(img.sxxcl_yz0130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0131 = function() {
	this.initialize(img.sxxcl_yz0131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0132 = function() {
	this.initialize(img.sxxcl_yz0132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0133 = function() {
	this.initialize(img.sxxcl_yz0133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0134 = function() {
	this.initialize(img.sxxcl_yz0134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0135 = function() {
	this.initialize(img.sxxcl_yz0135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0136 = function() {
	this.initialize(img.sxxcl_yz0136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0137 = function() {
	this.initialize(img.sxxcl_yz0137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0138 = function() {
	this.initialize(img.sxxcl_yz0138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0139 = function() {
	this.initialize(img.sxxcl_yz0139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0140 = function() {
	this.initialize(img.sxxcl_yz0140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0141 = function() {
	this.initialize(img.sxxcl_yz0141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0142 = function() {
	this.initialize(img.sxxcl_yz0142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0143 = function() {
	this.initialize(img.sxxcl_yz0143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0144 = function() {
	this.initialize(img.sxxcl_yz0144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0145 = function() {
	this.initialize(img.sxxcl_yz0145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0146 = function() {
	this.initialize(img.sxxcl_yz0146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0147 = function() {
	this.initialize(img.sxxcl_yz0147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0148 = function() {
	this.initialize(img.sxxcl_yz0148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0149 = function() {
	this.initialize(img.sxxcl_yz0149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0150 = function() {
	this.initialize(img.sxxcl_yz0150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0151 = function() {
	this.initialize(img.sxxcl_yz0151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0152 = function() {
	this.initialize(img.sxxcl_yz0152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0153 = function() {
	this.initialize(img.sxxcl_yz0153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0154 = function() {
	this.initialize(img.sxxcl_yz0154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0155 = function() {
	this.initialize(img.sxxcl_yz0155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0156 = function() {
	this.initialize(img.sxxcl_yz0156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0157 = function() {
	this.initialize(img.sxxcl_yz0157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0158 = function() {
	this.initialize(img.sxxcl_yz0158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0159 = function() {
	this.initialize(img.sxxcl_yz0159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0160 = function() {
	this.initialize(img.sxxcl_yz0160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0161 = function() {
	this.initialize(img.sxxcl_yz0161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0162 = function() {
	this.initialize(img.sxxcl_yz0162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0163 = function() {
	this.initialize(img.sxxcl_yz0163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0164 = function() {
	this.initialize(img.sxxcl_yz0164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0165 = function() {
	this.initialize(img.sxxcl_yz0165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0166 = function() {
	this.initialize(img.sxxcl_yz0166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0167 = function() {
	this.initialize(img.sxxcl_yz0167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0168 = function() {
	this.initialize(img.sxxcl_yz0168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0169 = function() {
	this.initialize(img.sxxcl_yz0169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0170 = function() {
	this.initialize(img.sxxcl_yz0170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0171 = function() {
	this.initialize(img.sxxcl_yz0171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0172 = function() {
	this.initialize(img.sxxcl_yz0172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0173 = function() {
	this.initialize(img.sxxcl_yz0173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0174 = function() {
	this.initialize(img.sxxcl_yz0174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0175 = function() {
	this.initialize(img.sxxcl_yz0175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0176 = function() {
	this.initialize(img.sxxcl_yz0176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0177 = function() {
	this.initialize(img.sxxcl_yz0177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0178 = function() {
	this.initialize(img.sxxcl_yz0178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0179 = function() {
	this.initialize(img.sxxcl_yz0179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0180 = function() {
	this.initialize(img.sxxcl_yz0180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0181 = function() {
	this.initialize(img.sxxcl_yz0181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0182 = function() {
	this.initialize(img.sxxcl_yz0182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0183 = function() {
	this.initialize(img.sxxcl_yz0183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0184 = function() {
	this.initialize(img.sxxcl_yz0184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0185 = function() {
	this.initialize(img.sxxcl_yz0185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0186 = function() {
	this.initialize(img.sxxcl_yz0186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0187 = function() {
	this.initialize(img.sxxcl_yz0187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0188 = function() {
	this.initialize(img.sxxcl_yz0188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0189 = function() {
	this.initialize(img.sxxcl_yz0189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0190 = function() {
	this.initialize(img.sxxcl_yz0190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0191 = function() {
	this.initialize(img.sxxcl_yz0191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0192 = function() {
	this.initialize(img.sxxcl_yz0192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0193 = function() {
	this.initialize(img.sxxcl_yz0193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0194 = function() {
	this.initialize(img.sxxcl_yz0194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0195 = function() {
	this.initialize(img.sxxcl_yz0195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0196 = function() {
	this.initialize(img.sxxcl_yz0196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0197 = function() {
	this.initialize(img.sxxcl_yz0197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0198 = function() {
	this.initialize(img.sxxcl_yz0198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0199 = function() {
	this.initialize(img.sxxcl_yz0199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


(lib.sxxcl_yz0200 = function() {
	this.initialize(img.sxxcl_yz0200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,586);


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


(lib.sxxclbz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhbpAvzMAAAhflMC3TAAAMAAABflg");
	mask.setTransform(586.6,305.9);

	// 图层 3
	this.instance = new lib.sxxcl_bzt_zk0000();
	this.instance.parent = this;

	this.instance_1 = new lib.sxxcl_bzt_zk0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.sxxcl_bzt_zk0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.sxxcl_bzt_zk0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.sxxcl_bzt_zk0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.sxxcl_bzt_zk0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.sxxcl_bzt_zk0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.sxxcl_bzt_zk0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.sxxcl_bzt_zk0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.sxxcl_bzt_zk0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.sxxcl_bzt_zk0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.sxxcl_bzt_zk0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.sxxcl_bzt_zk0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.sxxcl_bzt_zk0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.sxxcl_bzt_zk0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.sxxcl_bzt_zk0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.sxxcl_bzt_zk0016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.sxxcl_bzt_zk0017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.sxxcl_bzt_zk0018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.sxxcl_bzt_zk0019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.sxxcl_bzt_zk0020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.sxxcl_bzt_zk0021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.sxxcl_bzt_zk0022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.sxxcl_bzt_zk0023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.sxxcl_bzt_zk0024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.sxxcl_bzt_zk0025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.sxxcl_bzt_zk0026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.sxxcl_bzt_zk0027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.sxxcl_bzt_zk0028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.sxxcl_bzt_zk0029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.sxxcl_bzt_zk0030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.sxxcl_bzt_zk0031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.sxxcl_bzt_zk0032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.sxxcl_bzt_zk0033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.sxxcl_bzt_zk0034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.sxxcl_bzt_zk0035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.sxxcl_bzt_zk0036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.sxxcl_bzt_zk0037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.sxxcl_bzt_zk0038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.sxxcl_bzt_zk0039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.sxxcl_bzt_zk0040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.sxxcl_bzt_zk0041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.sxxcl_bzt_zk0042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.sxxcl_bzt_zk0043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.sxxcl_bzt_zk0044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.sxxcl_bzt_zk0045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.sxxcl_bzt_zk0046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.sxxcl_bzt_zk0047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.sxxcl_bzt_zk0048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.sxxcl_bzt_zk0049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.sxxcl_bzt_zk0050();
	this.instance_50.parent = this;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1173.2,611.8);


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


(lib.fanBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333F48").s().p("AhPiIICfCFIifCMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-13.6,16.1,27.3);


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


(lib.sxxcl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.tabMC();
	this.instance.parent = this;
	this.instance.setTransform(132.6,317.7,0.534,0.534,0,0,0,0,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBAQATgOANgRQgKgPgGgXIgKATIgJgLQATgfAIgrIANABIgHAcIAmAAIAAAKQgDAlgSAcQANAPASAEQAWAEAsgCIgFAMQgoABgWgEQgWgEgPgQQgNARgRAMIgKgIgAgwgVQAHAbALARQAOgXADgfIgfAAIgEAKgAAPAwIAAh3IANAAIAAAxIAGgHQAVAOARANIgIAKQgPgNgVgPIAABEg");
	this.shape.setTransform(96.3,293.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA9QAdgDARgKIgcgNIALgRIgYAAIAAgJIAdAAIAJgPIALAFIgHAKIA4AAIAAAJIgTAAQgGARgLALIAkAPIgGALIgngTQgUAOggAFIgGgLgAAAAgIAYAKQALgKAFgOIgfAAIgJAOgAhEBHIgCgMIAMAAQAHAAAAgHIAAgnIgTAGIgBgMIAUgGIAAggIgTAAIAAgLIATAAIAAgcIALAAIAAAcIAQAAIAAALIgQAAIAAAeIANgFIABALIgOAEIAAAtQAAAQgPABIgGAAIgHAAgAgagIIAAgKIA4AAIAQgYIALAGIgPASIAeAAIAAAKgAgIglIAIgFIANARIgJAHQgFgKgHgJgAgVgsIAAgKIApAAIgIgNIAKgFIAJARIgEABIAqAAIAAAKg");
	this.shape_1.setTransform(81,293.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIA7IASgQIAAgyIgRAAIAAgKIAcAAIAAA+QAMANATABIAdABIA4gBIgEALIgzABIgfgBQgYAAgLgRQgFAEgMAPgAASA4IAAgYIgwAAIAAgLIAwAAIAAgUIgqAAIAAgKQAJgPAHgSIgVAAIAAgKIAaAAIAFgTIAMADIgGAQIA8AAIAAAKIhBAAIgOAiIAdAAIAAgaIALAAIAAAaIAmAAIAAAJIgmAAIAAAUIAqAAIAAALIgqAAIAAAYgAg/g9IAJgGIATAaIgKAHIgSgbg");
	this.shape_2.setTransform(65.8,293.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA6IAAgGQAAgKADgHQADgGAGgHQAGgGANgJQAMgJAFgHQAFgHAAgJQAAgJgGgFQgFgGgJAAQgHAAgIAEQgHAEgGAGIAAgOQAGgFAHgEQAHgDAJAAQAPAAAJAJQAJAIAAAOQAAAMgFAKQgGAIgOAJIgSAOQgFAFgCAEQgCADAAAGIA4AAIAAANg");
	this.shape_3.setTransform(53.6,293.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA5Igqg0IgDgEIAAA4IgPAAIAAhxIAPAAIAAA2IADgEIApgyIASAAIguA3IAxA6g");
	this.shape_4.setTransform(44.9,293.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAyBDIAAgIIggAAIAAAIIgKAAIAAguIAvAAQgrgFgLgTIgCAAQgIAQgtAIIAvAAIAAAuIgKAAIAAgIIgfAAIAAAIIgKAAIAAgsIgJABIgFgKQAwgHALgKIg2AAIAAgJIA8AAQACgGABgIIAJACQAAAGgCAGIAfAAIgMgJIAGgGQAKAFAIAGIgEAEIAbAAIAAAJIg4AAQARAPArAAIgGALIgIAAIAAAsgAASAyIAgAAIAAgTIggAAgAgwAyIAfAAIAAgTIgfAAgAg6gWIAAgsIAzAAIAAAqIgLAAIAAgEIgfAAIAAAGgAgxglIAfAAIAAgUIgfAAgAAygXIAAgFIggAAIAAAEIgLAAIAAgqIA0AAIAAArgAASglIAgAAIAAgUIggAAg");
	this.shape_5.setTransform(31.5,293.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnBHIAAgKIhNAAIAAAKIgMAAIAAhBIBlAAIAABBgAgmAzIBNAAIAAgiIhNAAgAhIgQQAtgXAYggIAOAAIgDAFQAZAfAoAQIgIAMQgMgFgKgIIAAAIIhVAAIAAgHIgXAOIgHgLgAglgWIBMAAQgWgPgRgVQgNAUgYAQg");
	this.shape_6.setTransform(16.3,293.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BJIAAg7IAwAAIAGgOIgwAAIAAgpIAKAAIAAAhIBZAAIAAghIAKAAIAAAvIgKAAIAAgGIgmAAIgHAOIA9AAIAAAqQAAAQgPAAIgPgBIgCgLIAPABQAGAAAAgHIAAgfIg4AAQgFALgHAIIAigBIgIgIIAIgGIAVAXIgIAHIgFgHIgpACIgNACIgFgKQAGgEAFgGIAHgLIggAAIAAAygAgmgSIAdgKIgbgJIADgIIAjANQAPgGANgHIAFAHIgUAKIAWAIIgEAJIgegMIglANIgEgIgAhGgvIAAgKIBAAAIgFgKIALgFIAIAPIA/AAIAAAKg");
	this.shape_7.setTransform(1,293.5);

	this.instance_1 = new lib.tabKuang("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.8,276.5);

	this.instance_2 = new lib.tabMC();
	this.instance_2.parent = this;
	this.instance_2.setTransform(261,312.8,0.534,0.534,0,0,0,0,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBAQATgOANgRQgKgPgGgXIgKATIgJgLQATgfAIgrIANABIgHAcIAmAAIAAAKQgDAlgSAcQANAPASAEQAWAEAsgCIgFAMQgoABgWgEQgWgEgPgQQgNARgRAMIgKgIgAgwgVQAHAbAKARQAPgXADgfIgfAAIgEAKgAAPAwIAAh3IANAAIAAAxIAGgHQAVAOARANIgIAKQgPgNgVgPIAABEg");
	this.shape_8.setTransform(381.6,280.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA9QAdgDARgKIgcgNIALgRIgYAAIAAgJIAdAAIAJgPIALAEIgHALIA4AAIAAAJIgTAAQgGARgLALIAkAPIgGALIgngTQgUAOggAFIgGgLgAAAAgIAYAKQALgKAFgOIgfAAIgJAOgAhEBGIgCgLIAMAAQAHAAAAgIIAAgmIgTAGIgBgMIAUgGIAAggIgTAAIAAgLIATAAIAAgcIALAAIAAAcIAQAAIAAALIgQAAIAAAeIANgEIABAKIgOAEIAAAtQAAAQgPAAIgGABIgHgBgAgagIIAAgKIA4AAIAQgYIALAGIgPASIAeAAIAAAKgAgIglIAIgFIANARIgJAGQgFgJgHgJgAgVgsIAAgKIApAAIgIgNIAKgFIAJARIgEABIAqAAIAAAKg");
	this.shape_9.setTransform(366.3,280.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIA7IASgQIAAgyIgRAAIAAgLIAcAAIAAA/QAMANATABIAdABIA4gBIgEALIg0ABIgegBQgYAAgLgRQgFAEgMAOgAARA4IAAgYIgvAAIAAgKIAvAAIAAgVIgpAAIAAgKQAJgPAHgSIgVAAIAAgKIAaAAIAFgTIAMADIgGAQIA8AAIAAAKIhBAAIgOAiIAcAAIAAgaIAMAAIAAAaIAmAAIAAAJIgmAAIAAAVIAqAAIAAAKIgqAAIAAAYgAg/g9IAJgGIATAbIgKAGIgSgbg");
	this.shape_10.setTransform(351.1,280.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcA5IAAhxIA5AAIAAANIgqAAIAAAmIAnAAIAAAMIgnAAIAAAyg");
	this.shape_11.setTransform(339.7,279.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBIIAAgfIgeAEIgBgLIAfgDIAAgWIgcAAIAAgJIAOgnIgQAAIAAgJIASAAIAHgYIALADIgGAVIAgAAIAAAJIgjAAIgOAnIARAAIAAgfIALAAIAAAfIATAAIAAAJIgTAAIAAAVIAVgEIAAAMIgVACIAAAggAARBEQgRgBAAgRIAAhAIAKAAIAAAeQAUgLAQgOIAJAGQgWAUgXAMIAAATQAAAIAKABIAUAAQAKAAACgJQACgKAAgMIALAFIgCAUQgDAQgRABgAgUgTQAZgTAPghIAOAAIgDAFQARAgAZANIgIAJQgYgOgQgeQgRAdgVARIgHgJg");
	this.shape_12.setTransform(327.6,280.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9BIIAAh4IArAAIAHgWIALADIgGATIBEAAIAABnQAAAQgRAAIgWAAIgCgMIAWABQAHAAABgJIAAhYIhlAAIAABtgAgdAtIAAg8IA7AAIAAAyIgwAAIAAAKgAgSAYIAlAAIAAgdIglAAg");
	this.shape_13.setTransform(312.3,280.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFBJIAAgfIhCAAIAAgKIBCAAIAAgRIgoAAIAAAHIgLAAIAAhGIAeAAIgPgRIAIgHIATATIgFAFIAhAAIAQgYIAMAHIgPARIAeAAIAABGIgLAAIAAgHIgoAAIAAARIBCAAIAAAKIhCAAIAAAfgAAGAFIAoAAIAAgQIgoAAgAgtAFIAoAAIAAgQIgoAAgAAGgVIAoAAIAAgRIgoAAgAgtgVIAoAAIAAgRIgoAAg");
	this.shape_14.setTransform(297,280.2);

	this.instance_3 = new lib.tabKuang("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(400.7,263.1,1,1,0,0,180);

	this.instance_4 = new lib.tabMC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.4,284.3,0.534,0.534,0,0,0,0,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhGBAQATgOANgRQgKgPgGgXIgKATIgJgLQATgfAIgrIANABIgIAcIAnAAIAAAKQgDAlgSAcQANAPATAEQAWAEArgCIgFAMQgoABgWgEQgWgEgPgQQgNARgRAMIgKgIgAgwgVQAHAbAKARQAPgXADgfIgfAAIgEAKgAAPAwIAAh3IANAAIAAAxIAGgHQAVAOARANIgIAKQgPgNgVgPIAABEg");
	this.shape_15.setTransform(169.8,246.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA+QAdgFARgJIgcgNIALgQIgYAAIAAgKIAdAAIAJgPIALAEIgHALIA4AAIAAAKIgTAAQgGAQgLALIAkAQIgGAKIgngTQgUANggAHIgGgLgAAAAfIAYAKQALgJAFgNIgfAAIgJAMgAhEBHIgCgNIAMABQAHAAAAgIIAAgmIgTAHIgBgNIAUgGIAAghIgTAAIAAgKIATAAIAAgbIALAAIAAAbIAQAAIAAAKIgQAAIAAAfIANgFIABAKIgOAGIAAAtQAAAQgPAAIgGAAIgHAAgAgagIIAAgKIA4AAIAQgYIALAGIgPASIAeAAIAAAKgAgIgkIAIgGIANARIgJAHQgFgKgHgIgAgVgsIAAgJIApAAIgIgOIAKgEIAJAPIgEADIAqAAIAAAJg");
	this.shape_16.setTransform(154.5,246.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIA7IASgQIAAgyIgRAAIAAgKIAcAAIAAA/QAMANATAAIAdABIA4gCIgEALIg0ABIgegBQgYAAgLgQQgFADgMAQgAARA4IAAgZIgvAAIAAgKIAvAAIAAgUIgpAAIAAgJQAJgQAHgRIgVAAIAAgKIAaAAIAFgTIAMACIgGARIA8AAIAAAKIhAAAIgPAhIAcAAIAAgZIAMAAIAAAZIAmAAIAAAJIgmAAIAAAUIAqAAIAAAKIgqAAIAAAZgAg/g8IAJgHIATAaIgKAIIgSgbg");
	this.shape_17.setTransform(139.2,246.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjA6IAAgGQAAgKADgHQADgGAGgHQAGgGANgJQAMgJAFgHQAFgHAAgJQAAgJgGgFQgFgGgJAAQgHAAgIAEQgHAEgGAGIAAgOQAGgFAHgEQAHgDAJAAQAPAAAJAJQAJAIAAAOQAAAMgFAKQgGAIgOAJIgSAOQgFAFgCAEQgCADAAAGIA4AAIAAANg");
	this.shape_18.setTransform(127,245.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjA5IAAhxIAiAAQAOAAAIAHQAJAIAAALQABAKgGAHQgFAHgKADQAMACAHAGQAHAIAAALQAAAPgKAJQgLAJgPAAgAgUAsIASAAQAKAAAGgFQAHgGgBgJQAAgUgZAAIgPAAgAgUgHIANAAQAJAAAHgFQAGgGAAgJQAAgQgVAAIgOAAg");
	this.shape_19.setTransform(118,246);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAxBDIAAgIIgfAAIAAAIIgKAAIAAguIAvAAQgqgFgMgTIgBAAQgJAQgtAIIAvAAIAAAuIgKAAIAAgIIgfAAIAAAIIgLAAIAAgtIgIACIgFgLQAwgFAKgLIg1AAIAAgKIA8AAQACgFAAgHIAKABQAAAHgDAEIAhAAIgNgIIAGgHQAKAGAIAGIgEADIAbAAIAAAKIg4AAQARAPArAAIgGALIgIgBIAAAtgAASAyIAfAAIAAgTIgfAAgAgwAyIAfAAIAAgTIgfAAgAg7gWIAAgsIA0AAIAAArIgKAAIAAgFIggAAIAAAGgAgxglIAgAAIAAgUIggAAgAAxgXIAAgFIgfAAIAAAFIgKAAIAAgrIAzAAIAAArgAASglIAfAAIAAgUIgfAAg");
	this.shape_20.setTransform(105.1,246.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNA/QAHgHAGgIQARgaABgoIAAgMIgUAAIAAgMIAUAAIAAgdIAMAAIAAAdIAoAAQgBA3gCAiQgBAUgTABIgTgBIgCgMIASABQALAAAAgMQACgkABgmIgcAAIAAANQgBA4ghAiIgJgKgAgOAvIgyAGIgFgNQAGgDAEgIQAHgPAIgVIgZAAIAAgLIBGAAIAAALIghAAQgMAegJARIAkgDIgKgYIAKgEIARAnIgLAFIgDgGgAg+gwIAAgLIA7AAIAAALg");
	this.shape_21.setTransform(89.6,246.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaBIIAAg3IgUAAIAAAsIgLAAIAAg2IAfAAIAAgPIgqAAIAAgKIAqAAIAAgUIgVAAQgEAIgFAIIgKgGQAMgRAEgUIALACIgEAPIARAAIAAgXIAMAAIAAAXIAfAAIAAAKIgfAAIAAAUIAlAAIAAAKIglAAIAAAPIAfAAIAAAjQAAAQgOAAIgMAAIgCgKIALAAQAGAAAAgHIAAgYIgUAAIAAA3gAAgBFIgDgNIATABQAJAAAAgKIAAh2IAMAAIAAB4QAAAUgSAAIgTAAgAAdAgIAAhZIALAAIAABZg");
	this.shape_22.setTransform(74.1,246.5);

	this.instance_5 = new lib.tabKuang("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(60.5,229.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_4},{t:this.instance_3},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},97).to({state:[]},10).wait(94));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpZAreMAAAhSzMBSzAAAMAAABSzg");
	mask.setTransform(262.8,278.2);

	// 图层 3
	this.instance_6 = new lib.sxxcl_yz0000();
	this.instance_6.parent = this;

	this.instance_7 = new lib.sxxcl_yz0001();
	this.instance_7.parent = this;

	this.instance_8 = new lib.sxxcl_yz0002();
	this.instance_8.parent = this;

	this.instance_9 = new lib.sxxcl_yz0003();
	this.instance_9.parent = this;

	this.instance_10 = new lib.sxxcl_yz0004();
	this.instance_10.parent = this;

	this.instance_11 = new lib.sxxcl_yz0005();
	this.instance_11.parent = this;

	this.instance_12 = new lib.sxxcl_yz0006();
	this.instance_12.parent = this;

	this.instance_13 = new lib.sxxcl_yz0007();
	this.instance_13.parent = this;

	this.instance_14 = new lib.sxxcl_yz0008();
	this.instance_14.parent = this;

	this.instance_15 = new lib.sxxcl_yz0009();
	this.instance_15.parent = this;

	this.instance_16 = new lib.sxxcl_yz0010();
	this.instance_16.parent = this;

	this.instance_17 = new lib.sxxcl_yz0011();
	this.instance_17.parent = this;

	this.instance_18 = new lib.sxxcl_yz0012();
	this.instance_18.parent = this;

	this.instance_19 = new lib.sxxcl_yz0013();
	this.instance_19.parent = this;

	this.instance_20 = new lib.sxxcl_yz0014();
	this.instance_20.parent = this;

	this.instance_21 = new lib.sxxcl_yz0015();
	this.instance_21.parent = this;

	this.instance_22 = new lib.sxxcl_yz0016();
	this.instance_22.parent = this;

	this.instance_23 = new lib.sxxcl_yz0017();
	this.instance_23.parent = this;

	this.instance_24 = new lib.sxxcl_yz0018();
	this.instance_24.parent = this;

	this.instance_25 = new lib.sxxcl_yz0019();
	this.instance_25.parent = this;

	this.instance_26 = new lib.sxxcl_yz0020();
	this.instance_26.parent = this;

	this.instance_27 = new lib.sxxcl_yz0021();
	this.instance_27.parent = this;

	this.instance_28 = new lib.sxxcl_yz0022();
	this.instance_28.parent = this;

	this.instance_29 = new lib.sxxcl_yz0023();
	this.instance_29.parent = this;

	this.instance_30 = new lib.sxxcl_yz0024();
	this.instance_30.parent = this;

	this.instance_31 = new lib.sxxcl_yz0025();
	this.instance_31.parent = this;

	this.instance_32 = new lib.sxxcl_yz0026();
	this.instance_32.parent = this;

	this.instance_33 = new lib.sxxcl_yz0027();
	this.instance_33.parent = this;

	this.instance_34 = new lib.sxxcl_yz0028();
	this.instance_34.parent = this;

	this.instance_35 = new lib.sxxcl_yz0029();
	this.instance_35.parent = this;

	this.instance_36 = new lib.sxxcl_yz0030();
	this.instance_36.parent = this;

	this.instance_37 = new lib.sxxcl_yz0031();
	this.instance_37.parent = this;

	this.instance_38 = new lib.sxxcl_yz0032();
	this.instance_38.parent = this;

	this.instance_39 = new lib.sxxcl_yz0033();
	this.instance_39.parent = this;

	this.instance_40 = new lib.sxxcl_yz0034();
	this.instance_40.parent = this;

	this.instance_41 = new lib.sxxcl_yz0035();
	this.instance_41.parent = this;

	this.instance_42 = new lib.sxxcl_yz0036();
	this.instance_42.parent = this;

	this.instance_43 = new lib.sxxcl_yz0037();
	this.instance_43.parent = this;

	this.instance_44 = new lib.sxxcl_yz0038();
	this.instance_44.parent = this;

	this.instance_45 = new lib.sxxcl_yz0039();
	this.instance_45.parent = this;

	this.instance_46 = new lib.sxxcl_yz0040();
	this.instance_46.parent = this;

	this.instance_47 = new lib.sxxcl_yz0041();
	this.instance_47.parent = this;

	this.instance_48 = new lib.sxxcl_yz0042();
	this.instance_48.parent = this;

	this.instance_49 = new lib.sxxcl_yz0043();
	this.instance_49.parent = this;

	this.instance_50 = new lib.sxxcl_yz0044();
	this.instance_50.parent = this;

	this.instance_51 = new lib.sxxcl_yz0045();
	this.instance_51.parent = this;

	this.instance_52 = new lib.sxxcl_yz0046();
	this.instance_52.parent = this;

	this.instance_53 = new lib.sxxcl_yz0047();
	this.instance_53.parent = this;

	this.instance_54 = new lib.sxxcl_yz0048();
	this.instance_54.parent = this;

	this.instance_55 = new lib.sxxcl_yz0049();
	this.instance_55.parent = this;

	this.instance_56 = new lib.sxxcl_yz0050();
	this.instance_56.parent = this;

	this.instance_57 = new lib.sxxcl_yz0051();
	this.instance_57.parent = this;

	this.instance_58 = new lib.sxxcl_yz0052();
	this.instance_58.parent = this;

	this.instance_59 = new lib.sxxcl_yz0053();
	this.instance_59.parent = this;

	this.instance_60 = new lib.sxxcl_yz0054();
	this.instance_60.parent = this;

	this.instance_61 = new lib.sxxcl_yz0055();
	this.instance_61.parent = this;

	this.instance_62 = new lib.sxxcl_yz0056();
	this.instance_62.parent = this;

	this.instance_63 = new lib.sxxcl_yz0057();
	this.instance_63.parent = this;

	this.instance_64 = new lib.sxxcl_yz0058();
	this.instance_64.parent = this;

	this.instance_65 = new lib.sxxcl_yz0059();
	this.instance_65.parent = this;

	this.instance_66 = new lib.sxxcl_yz0060();
	this.instance_66.parent = this;

	this.instance_67 = new lib.sxxcl_yz0061();
	this.instance_67.parent = this;

	this.instance_68 = new lib.sxxcl_yz0062();
	this.instance_68.parent = this;

	this.instance_69 = new lib.sxxcl_yz0063();
	this.instance_69.parent = this;

	this.instance_70 = new lib.sxxcl_yz0064();
	this.instance_70.parent = this;

	this.instance_71 = new lib.sxxcl_yz0065();
	this.instance_71.parent = this;

	this.instance_72 = new lib.sxxcl_yz0066();
	this.instance_72.parent = this;

	this.instance_73 = new lib.sxxcl_yz0067();
	this.instance_73.parent = this;

	this.instance_74 = new lib.sxxcl_yz0068();
	this.instance_74.parent = this;

	this.instance_75 = new lib.sxxcl_yz0069();
	this.instance_75.parent = this;

	this.instance_76 = new lib.sxxcl_yz0070();
	this.instance_76.parent = this;

	this.instance_77 = new lib.sxxcl_yz0071();
	this.instance_77.parent = this;

	this.instance_78 = new lib.sxxcl_yz0072();
	this.instance_78.parent = this;

	this.instance_79 = new lib.sxxcl_yz0073();
	this.instance_79.parent = this;

	this.instance_80 = new lib.sxxcl_yz0074();
	this.instance_80.parent = this;

	this.instance_81 = new lib.sxxcl_yz0075();
	this.instance_81.parent = this;

	this.instance_82 = new lib.sxxcl_yz0076();
	this.instance_82.parent = this;

	this.instance_83 = new lib.sxxcl_yz0077();
	this.instance_83.parent = this;

	this.instance_84 = new lib.sxxcl_yz0078();
	this.instance_84.parent = this;

	this.instance_85 = new lib.sxxcl_yz0079();
	this.instance_85.parent = this;

	this.instance_86 = new lib.sxxcl_yz0080();
	this.instance_86.parent = this;

	this.instance_87 = new lib.sxxcl_yz0081();
	this.instance_87.parent = this;

	this.instance_88 = new lib.sxxcl_yz0082();
	this.instance_88.parent = this;

	this.instance_89 = new lib.sxxcl_yz0083();
	this.instance_89.parent = this;

	this.instance_90 = new lib.sxxcl_yz0084();
	this.instance_90.parent = this;

	this.instance_91 = new lib.sxxcl_yz0085();
	this.instance_91.parent = this;

	this.instance_92 = new lib.sxxcl_yz0086();
	this.instance_92.parent = this;

	this.instance_93 = new lib.sxxcl_yz0087();
	this.instance_93.parent = this;

	this.instance_94 = new lib.sxxcl_yz0088();
	this.instance_94.parent = this;

	this.instance_95 = new lib.sxxcl_yz0089();
	this.instance_95.parent = this;

	this.instance_96 = new lib.sxxcl_yz0090();
	this.instance_96.parent = this;

	this.instance_97 = new lib.sxxcl_yz0091();
	this.instance_97.parent = this;

	this.instance_98 = new lib.sxxcl_yz0092();
	this.instance_98.parent = this;

	this.instance_99 = new lib.sxxcl_yz0093();
	this.instance_99.parent = this;

	this.instance_100 = new lib.sxxcl_yz0094();
	this.instance_100.parent = this;

	this.instance_101 = new lib.sxxcl_yz0095();
	this.instance_101.parent = this;

	this.instance_102 = new lib.sxxcl_yz0096();
	this.instance_102.parent = this;

	this.instance_103 = new lib.sxxcl_yz0097();
	this.instance_103.parent = this;

	this.instance_104 = new lib.sxxcl_yz0098();
	this.instance_104.parent = this;

	this.instance_105 = new lib.sxxcl_yz0099();
	this.instance_105.parent = this;

	this.instance_106 = new lib.sxxcl_yz0100();
	this.instance_106.parent = this;

	this.instance_107 = new lib.sxxcl_yz0101();
	this.instance_107.parent = this;

	this.instance_108 = new lib.sxxcl_yz0102();
	this.instance_108.parent = this;

	this.instance_109 = new lib.sxxcl_yz0103();
	this.instance_109.parent = this;

	this.instance_110 = new lib.sxxcl_yz0104();
	this.instance_110.parent = this;

	this.instance_111 = new lib.sxxcl_yz0105();
	this.instance_111.parent = this;

	this.instance_112 = new lib.sxxcl_yz0106();
	this.instance_112.parent = this;

	this.instance_113 = new lib.sxxcl_yz0107();
	this.instance_113.parent = this;

	this.instance_114 = new lib.sxxcl_yz0108();
	this.instance_114.parent = this;

	this.instance_115 = new lib.sxxcl_yz0109();
	this.instance_115.parent = this;

	this.instance_116 = new lib.sxxcl_yz0110();
	this.instance_116.parent = this;

	this.instance_117 = new lib.sxxcl_yz0111();
	this.instance_117.parent = this;

	this.instance_118 = new lib.sxxcl_yz0112();
	this.instance_118.parent = this;

	this.instance_119 = new lib.sxxcl_yz0113();
	this.instance_119.parent = this;

	this.instance_120 = new lib.sxxcl_yz0114();
	this.instance_120.parent = this;

	this.instance_121 = new lib.sxxcl_yz0115();
	this.instance_121.parent = this;

	this.instance_122 = new lib.sxxcl_yz0116();
	this.instance_122.parent = this;

	this.instance_123 = new lib.sxxcl_yz0117();
	this.instance_123.parent = this;

	this.instance_124 = new lib.sxxcl_yz0118();
	this.instance_124.parent = this;

	this.instance_125 = new lib.sxxcl_yz0119();
	this.instance_125.parent = this;

	this.instance_126 = new lib.sxxcl_yz0120();
	this.instance_126.parent = this;

	this.instance_127 = new lib.sxxcl_yz0121();
	this.instance_127.parent = this;

	this.instance_128 = new lib.sxxcl_yz0122();
	this.instance_128.parent = this;

	this.instance_129 = new lib.sxxcl_yz0123();
	this.instance_129.parent = this;

	this.instance_130 = new lib.sxxcl_yz0124();
	this.instance_130.parent = this;

	this.instance_131 = new lib.sxxcl_yz0125();
	this.instance_131.parent = this;

	this.instance_132 = new lib.sxxcl_yz0126();
	this.instance_132.parent = this;

	this.instance_133 = new lib.sxxcl_yz0127();
	this.instance_133.parent = this;

	this.instance_134 = new lib.sxxcl_yz0128();
	this.instance_134.parent = this;

	this.instance_135 = new lib.sxxcl_yz0129();
	this.instance_135.parent = this;

	this.instance_136 = new lib.sxxcl_yz0130();
	this.instance_136.parent = this;

	this.instance_137 = new lib.sxxcl_yz0131();
	this.instance_137.parent = this;

	this.instance_138 = new lib.sxxcl_yz0132();
	this.instance_138.parent = this;

	this.instance_139 = new lib.sxxcl_yz0133();
	this.instance_139.parent = this;

	this.instance_140 = new lib.sxxcl_yz0134();
	this.instance_140.parent = this;

	this.instance_141 = new lib.sxxcl_yz0135();
	this.instance_141.parent = this;

	this.instance_142 = new lib.sxxcl_yz0136();
	this.instance_142.parent = this;

	this.instance_143 = new lib.sxxcl_yz0137();
	this.instance_143.parent = this;

	this.instance_144 = new lib.sxxcl_yz0138();
	this.instance_144.parent = this;

	this.instance_145 = new lib.sxxcl_yz0139();
	this.instance_145.parent = this;

	this.instance_146 = new lib.sxxcl_yz0140();
	this.instance_146.parent = this;

	this.instance_147 = new lib.sxxcl_yz0141();
	this.instance_147.parent = this;

	this.instance_148 = new lib.sxxcl_yz0142();
	this.instance_148.parent = this;

	this.instance_149 = new lib.sxxcl_yz0143();
	this.instance_149.parent = this;

	this.instance_150 = new lib.sxxcl_yz0144();
	this.instance_150.parent = this;

	this.instance_151 = new lib.sxxcl_yz0145();
	this.instance_151.parent = this;

	this.instance_152 = new lib.sxxcl_yz0146();
	this.instance_152.parent = this;

	this.instance_153 = new lib.sxxcl_yz0147();
	this.instance_153.parent = this;

	this.instance_154 = new lib.sxxcl_yz0148();
	this.instance_154.parent = this;

	this.instance_155 = new lib.sxxcl_yz0149();
	this.instance_155.parent = this;

	this.instance_156 = new lib.sxxcl_yz0150();
	this.instance_156.parent = this;

	this.instance_157 = new lib.sxxcl_yz0151();
	this.instance_157.parent = this;

	this.instance_158 = new lib.sxxcl_yz0152();
	this.instance_158.parent = this;

	this.instance_159 = new lib.sxxcl_yz0153();
	this.instance_159.parent = this;

	this.instance_160 = new lib.sxxcl_yz0154();
	this.instance_160.parent = this;

	this.instance_161 = new lib.sxxcl_yz0155();
	this.instance_161.parent = this;

	this.instance_162 = new lib.sxxcl_yz0156();
	this.instance_162.parent = this;

	this.instance_163 = new lib.sxxcl_yz0157();
	this.instance_163.parent = this;

	this.instance_164 = new lib.sxxcl_yz0158();
	this.instance_164.parent = this;

	this.instance_165 = new lib.sxxcl_yz0159();
	this.instance_165.parent = this;

	this.instance_166 = new lib.sxxcl_yz0160();
	this.instance_166.parent = this;

	this.instance_167 = new lib.sxxcl_yz0161();
	this.instance_167.parent = this;

	this.instance_168 = new lib.sxxcl_yz0162();
	this.instance_168.parent = this;

	this.instance_169 = new lib.sxxcl_yz0163();
	this.instance_169.parent = this;

	this.instance_170 = new lib.sxxcl_yz0164();
	this.instance_170.parent = this;

	this.instance_171 = new lib.sxxcl_yz0165();
	this.instance_171.parent = this;

	this.instance_172 = new lib.sxxcl_yz0166();
	this.instance_172.parent = this;

	this.instance_173 = new lib.sxxcl_yz0167();
	this.instance_173.parent = this;

	this.instance_174 = new lib.sxxcl_yz0168();
	this.instance_174.parent = this;

	this.instance_175 = new lib.sxxcl_yz0169();
	this.instance_175.parent = this;

	this.instance_176 = new lib.sxxcl_yz0170();
	this.instance_176.parent = this;

	this.instance_177 = new lib.sxxcl_yz0171();
	this.instance_177.parent = this;

	this.instance_178 = new lib.sxxcl_yz0172();
	this.instance_178.parent = this;

	this.instance_179 = new lib.sxxcl_yz0173();
	this.instance_179.parent = this;

	this.instance_180 = new lib.sxxcl_yz0174();
	this.instance_180.parent = this;

	this.instance_181 = new lib.sxxcl_yz0175();
	this.instance_181.parent = this;

	this.instance_182 = new lib.sxxcl_yz0176();
	this.instance_182.parent = this;

	this.instance_183 = new lib.sxxcl_yz0177();
	this.instance_183.parent = this;

	this.instance_184 = new lib.sxxcl_yz0178();
	this.instance_184.parent = this;

	this.instance_185 = new lib.sxxcl_yz0179();
	this.instance_185.parent = this;

	this.instance_186 = new lib.sxxcl_yz0180();
	this.instance_186.parent = this;

	this.instance_187 = new lib.sxxcl_yz0181();
	this.instance_187.parent = this;

	this.instance_188 = new lib.sxxcl_yz0182();
	this.instance_188.parent = this;

	this.instance_189 = new lib.sxxcl_yz0183();
	this.instance_189.parent = this;

	this.instance_190 = new lib.sxxcl_yz0184();
	this.instance_190.parent = this;

	this.instance_191 = new lib.sxxcl_yz0185();
	this.instance_191.parent = this;

	this.instance_192 = new lib.sxxcl_yz0186();
	this.instance_192.parent = this;

	this.instance_193 = new lib.sxxcl_yz0187();
	this.instance_193.parent = this;

	this.instance_194 = new lib.sxxcl_yz0188();
	this.instance_194.parent = this;

	this.instance_195 = new lib.sxxcl_yz0189();
	this.instance_195.parent = this;

	this.instance_196 = new lib.sxxcl_yz0190();
	this.instance_196.parent = this;

	this.instance_197 = new lib.sxxcl_yz0191();
	this.instance_197.parent = this;

	this.instance_198 = new lib.sxxcl_yz0192();
	this.instance_198.parent = this;

	this.instance_199 = new lib.sxxcl_yz0193();
	this.instance_199.parent = this;

	this.instance_200 = new lib.sxxcl_yz0194();
	this.instance_200.parent = this;

	this.instance_201 = new lib.sxxcl_yz0195();
	this.instance_201.parent = this;

	this.instance_202 = new lib.sxxcl_yz0196();
	this.instance_202.parent = this;

	this.instance_203 = new lib.sxxcl_yz0197();
	this.instance_203.parent = this;

	this.instance_204 = new lib.sxxcl_yz0198();
	this.instance_204.parent = this;

	this.instance_205 = new lib.sxxcl_yz0199();
	this.instance_205.parent = this;

	this.instance_206 = new lib.sxxcl_yz0200();
	this.instance_206.parent = this;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170,this.instance_171,this.instance_172,this.instance_173,this.instance_174,this.instance_175,this.instance_176,this.instance_177,this.instance_178,this.instance_179,this.instance_180,this.instance_181,this.instance_182,this.instance_183,this.instance_184,this.instance_185,this.instance_186,this.instance_187,this.instance_188,this.instance_189,this.instance_190,this.instance_191,this.instance_192,this.instance_193,this.instance_194,this.instance_195,this.instance_196,this.instance_197,this.instance_198,this.instance_199,this.instance_200,this.instance_201,this.instance_202,this.instance_203,this.instance_204,this.instance_205,this.instance_206];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,26.4,527.8,530);


(lib.mlBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzA7IAAgEIABgUIAAgvIgBgSQAFABAQAAIAUAAIAEgRIggAAIgXAAIgBAAIAAgMIABABIAXAAIBNAAIAXAAIABgBIAAANIgBAAIgXgBIghAAIgFARIAdAAQASAAAFgCQgCAFAAAQIAAAtIABAWIABABIgPAAIABgJIhOAAQgBAIACACgAAVAoIASAAIAAg7IgSAAgAgLAoIAWAAIAAgQIgWAAgAgnAoIARAAIAAg7IgRAAgAgLAQIAWAAIAAgOIgWAAgAgLgFIAWAAIAAgOIgWAAg");
	this.shape.setTransform(13.5,-41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGAiIAHgJIApAXIgJAKQgTgOgUgKgAg5AwQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABAAQA7AAgGg4IAPACIgDAIQgFAbgFAHQgIANgmAKQgGgIgCgBgAgpAcIAAgBIACgQIAAgbIgBgPIAQABIASAAIADgQIgjAAIgUABIAAgNIAUABIBMAAIAWgBIAAANIgWgBIgcAAIgGAQIAXAAIANAAIACgBIAAAPIAAAZQgBAHACALIgNAAIAAgIIAAgIIAAgeIg6AAIAAAdIABASg");
	this.shape_1.setTransform(-0.6,-41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBAQACgHAAgNIAAguIgCgMIAAgEIALAAIAFABIgBACQgCADAAAGIAAAyQAAANABAHgAhAgDQAsgTAPgpIANAFIgBACIgCACQAPAiAtAKQgGADgGAJQgogRgNggQgOAcgmAYQgHgFgFgDg");
	this.shape_2.setTransform(-14.7,-41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjAGIhEAAIgbABIAAgNIAaABIBEAAIAbgBIAAANIgagBg");
	this.shape_3.setTransform(-28.6,-41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA6IhPAAIgOAAIgJAAIAAgLIAXABIAeAAIAAhdIAAgCIAAgLQAOABABACIgBADIgCAFIAAAeIAWAAQAUABAIgCIAAANIgcgBIgWAAIAAA2IAkAAQATAAAGgBIAAALQgGgBgSABg");
	this.shape_4.setTransform(-42.6,-41.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AApA6IAAgHIABgEIhSAAIAAALIgNAAIABgWIAAhKIgBgRIAAgCQAGACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBSAAIAAhSIhSAAgAAKATIgUAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAPABIAQAAIAPgBIACAAIAAAQIAAAQIAAARIgPgBgAgNAKIAbAAIAAgdIgbAAg");
	this.shape_5.setTransform(-56.5,-41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXA5IgWgBQgRgBgHgEIgEgCQgKgFgDABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAFAAIAKgBIgBAKIAAArQAQALAtAAIAIAAIAMgBIAPgCQgDAFgEAIIghgBgAgJAfQAQgFAQgMQgMgLgLgIIAJgGIATARQAGgLADgMIgmAAQABAhgSAXQgGgDgGgCQASgOAAgmIAAgUIgBgHIAAgGQANABARgCQASgCAMgDIAHAMQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEAAIgGAAQgeADgOgBIAAARIAlAAIAPgBQgEAagKAOIASATIgKAIQgEgIgLgLQgKAKgRAKIgLgKgAg0g2IANgDQAEALAGAQIgOADQgDgPgGgMg");
	this.shape_6.setTransform(-70.6,-41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiAxQAjgGAPgYQALgRABg3IgBgEIAAgCQASACgBACIgBACIgBAHQgEAugIATIAdAaIgLAJIgDgDIAAgBIgFgFIgPgSQgQAWgfALQgFgHgHgEgAg6ApIACgDQAEgEAAgEIAAhFIgBgGIAAgIQAOACABABIgBAEIgCAEIAABFIAQgSIAGgGQABAHAGAFQgTAQgRAVgAgZglIAKgJQANAMALARIgKAIQgNgUgLgIg");
	this.shape_7.setTransform(-84.3,-41.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAHAsQATADAAgGIAAhWIg+AAIgbAAIAAgMIAMABIAPAAIBQAAIAUgBIAAANIgUgBIgFAAIAABdQgCAKgYAAQgBgHgFgHgAgtAkIAAgGIABgGIAAgpIAAgGIgBgGIANABIAZAAIANgBIAAAMIAAAjIAAALIgNAAIABgLIgaAAIAAAEQAAAJACAFgAggAHIAbAAIAAgZIgbAAg");
	this.shape_8.setTransform(83.4,-58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAyIAAgNIgBgMIAPABIgBACQgCAEAAAFIAAAKQgCAFAMAAIAMAAQARACAAgQQAFAHAJACQgFAKgFADQgDACgMAAIgVAAIgDABQgSAAADgNgAg6A1QAJgJADgSIAOADIgBABIgEAFIgJAXIgMgFgAAeAbIAKgGIAYAbIgNAHQgGgMgPgQgAgEAZIAJgEQAIAJADAJIgLAFQgEgKgFgJgAAEATQgBgGgDgHQAOAEgBgKIAAgVIAAgJIAKAAIAFABIgCACQgCAEAAAFIAAAWQADAPgWAAIgBAAgAgsATIACgTIAAgaIgJANIgEAEQgDgFgFgFQATgPAKgaQAPAGgCABIgBABQgEADgFAIIAAApQgBANACAGgAAegKIAIgHQALAIALALIgKAIQgIgKgMgKgAgZAGQANgJAHgPIAKAGIgBACQgEACgCADIgFAIIgGAHIgMgEgAgagZQASgKANgbQAKAFACACIgBABQgEACgHAJIAeAAIAagBIgLAZIgMgDQAEgFAEgHIguAAIgLANIgEADIgLgHg");
	this.shape_9.setTransform(69.3,-58.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAgA+QABgCAAgHIgxAAIgdABIABgHIAAgUIAAgRIAKABIAEABIgBACIgBAGIAAAYIAbAAIAAgrIgeAAIgZABIAAgLQAEACAWgBIAdAAIAAgTIgRAAIgTAAIgHAAIAAgMQABABAZAAIARAAIAAgMIgBgGIAAgFIANACIgBACQgCADABAEIAAAMIARAAQAaAAADgBIAAAMIgJAAIgUAAIgRAAIAAATIAgAAQARABAHgCIAAALIgYgBIggAAIAAArIAcAAIAAgVIAAgFIAAgGIAOACIgBABQgCADABACIAAAXQgBAQACADg");
	this.shape_10.setTransform(55.4,-58.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag+A7QAMgMAEgQQAKADADACIgBACIgEAFIgMAVQgHgEgFgBgAAhAiIAMgEIASAaIgOAGQgFgNgLgPgAgXAlIANgCIAGAZIgOABQgBgMgEgMgAAEAkIANgDIAJAaIgOABQgCgNgGgLgAAjAZIgRgBIgeAAIgUABIgKAAQACgBAAgVIgBgNIgBgIQAJACARgBIAIAAIAAgkIgBgKQAQABgBABIgBACQgCADAAAFIAAAIIAaAAIARAAIAKgCIAAANIgIAAIgTgBIgaAAIAAAQIAOAAIAbgBQgBAFAAAQIgBAOIACAJIgJgBgAgdAOIA8AAIAAgVIg8AAg");
	this.shape_11.setTransform(41.2,-58.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaA+QgRgBgMgCQgSgFgJgFIgHgEQgFABgIAPIgKgIQACgDADgDQAJgIAFgDIAAglIgVABIAAgMQAQACAQgCQgBAEAAAHIAAAmQAQAKATADQAaABAhgDQgEAHgBAHIgOAAIgSAAgAAQArQgBgIgDgFQAMABADgEIABgIIAAgrIgeAAIgUABIAAgMIAUACIAeAAIAAgSIgCgKIAKAAIAFABIgBAEIgBAFIAAASIADAAQAKAAAKgBIAAALIgUgBIgDAAIAAApIgBASQgEAIgQAAIgCAAgAgKgJIALgDIAMAYIgMAFQgFgRgGgJgAg5gwIALgHQALANAIAMIgMAIQgHgOgLgMg");
	this.shape_12.setTransform(27.5,-58.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIA6QgIgBgNgGIgLgDQgFAAgIALIgKgKIASgLIAAgpIgPABIAAgMIAKABIARgBIAAAAIgBARIAAAjQAOAJAWADIAcgBQASAAAQgDQgGAFgBAJIgVAAQgYAAgUgCgAAeAfQAIACADgDIAAgKIgUAAIAAAHIAAAPIgKAAIAAgPIAAgHIgTAAIAAAKQAAAIABAEIgMAAIAAgDIABgIIAAgxIgBgHIAAgCQAAABALgBIARAAQgFgFgFgEIAIgHIAKAKQAHgEAHgIIgiAAIgRAAIAAgLQADABAOAAIArAAQAJAAAHgBQgPASgTALIAUAAQAHABAEgBQgBABABAIIAAASQAAApgCgBQgEAEgNAAQgBgGgDgHgAAVAMIAVAAIAAgLIgVAAgAgIAMIATAAIAAgLIgTAAgAAVgHIAUAAIAAgLIgUAAgAgIgHIATAAIAAgLIgTAAgAg0g1IAKgGIAOAaIgNAGQgFgOgGgMg");
	this.shape_13.setTransform(13.3,-58.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAMQAIgDAAgIIgJAAIAAgUIATAAIAAAUQgCASgQABg");
	this.shape_14.setTransform(-4.1,-53.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgpA7IgFgHIABgCQAEgEABgCIAAgbIgFAAIgRABIAAgLIAQABIAGAAIAAgPIgNABIAAgHIgFAGQgCgEgFgEQARgPAIgfQAPADgBABIgBACIgDAFIgDADIgDAIIAHAAQAKAAAIgCIAAAMIgSgBIgLAAIgDADIgHALQACABAJAAIAJAAIARgBIAAAKIgRgBIAAAPIAFAAIAPgBIAAALIgHAAIgIgBIgFAAIAAAZIAQgQIAEALQgZATgDAEIgBACIgCgDgAgOArIAUABIADgpIgKABIgGAAIAAgLIARABIADgjIgNAAIgHACIAAgNQAGABAOAAIAPAAQAQAAALgCIgBADIgBAXIgEBHQAKgBAHgBIAAALIgIAAIgKAAIgnAAIgXABgAAQAsIAVAAIADgpIgTAAgAAWgGIATAAIABgjIgSAAg");
	this.shape_15.setTransform(-14.6,-58.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAzQAXgCAQgLIgagKIAMgUIgCAAIgQABIAAgKIAQABIAFAAQAFgJADgPQAOAFgBACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDADIgFAKIgBACIAfAAQAJAAAIgBIAAAKIgRgBIgDAAQgEAPgIANIAcAOIgJALQgKgKgPgIQgOANgcAHQgCgHgFgFgAAEAWIANAGIAGADQAHgKADgNIgVAAIgIAOgAg4AxQAMABADgCIAAggQgPAIgEABIgDgMIAWgIIAAgaIgDAAIgJAAIgJAAIAAgLIAJABIAJAAIADAAIAAgUIgCgKQAOABAAABIgBADIgBAEIAAAVIACAAIAGAAIAFgBIAAALIgFAAIgGAAIgCAAIAAAWIANgEIAAAKIgNAFIAAApQAAAHgUACQgBgIgEgFgAgPgPIABgMIAAgDIgBgGIAAgGIANABIAwAAIAIAAIAGgBIgBAGIAAAGIAAACIABANIgMAAIABgQIg1AAIABAQgAALg8IAMgCIAGASIgMABQgDgKgDgHg");
	this.shape_16.setTransform(-28.7,-58.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBEQAVgdAAglIAAgDQgDgkgPgeIAgAAIAACHg");
	this.shape_17.setTransform(-43.7,-58.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AApA6IAAgHIABgEIhSAAIAAALIgNAAIABgWIAAhKIgBgRIAAgCQAGACANAAIBFAAQALAAAHgCIAAACIAAALIAABRIAAAVgAgoAlIBSAAIAAhSIhSAAgAAKATIgUAAIgPABIABgRIAAgQIgBgPIAAgBIACAAIAPABIAQAAIAPgBIACAAIAAAQIAAAQIAAARIgPgBgAgNAKIAbAAIAAgdIgbAAg");
	this.shape_18.setTransform(-56.5,-58.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXA5IgWgBQgRgBgHgEIgEgCQgKgFgDABQgCAAgHAIIgEAFIgJgJIASgOIAAgpIgDAAIgNACIAAgMIANABIAFAAIAKgBIgBAKIAAArQAQALAtAAIAIAAIAMgBIAPgCQgDAFgEAIIghgBgAgJAfQAQgFAQgMQgMgLgLgIIAJgGIATARQAGgLADgMIgmAAQABAhgSAXQgGgDgGgCQASgOAAgmIAAgUIgBgHIAAgGQANABARgCQASgCAMgDIAHAMQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEAAIgGAAQgeADgOgBIAAARIAlAAIAPgBQgEAagKAOIASATIgKAIQgEgIgLgLQgKAKgRAKIgLgKgAg0g2IANgDQAEALAGAQIgOADQgDgPgGgMg");
	this.shape_19.setTransform(-70.6,-58.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQBEIAAiHIAfAAQgQAegDAkIAAADQABAlAVAdg");
	this.shape_20.setTransform(-83.5,-58.4);

	this.instance = new lib.shuomingBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-97,-74.2);

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


(lib.baozhaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAsQARACAAgHIAAgzIggAAIgYAAIAAgMIAZABIBJAAIAVgBIAAANIgVgBIgfAAIAAAzQABASgYAAQgCgIgDgFgAg9AnQAQgOAPgWIAMAFIgDAEIgGAHIgVAZQgFgDgIgCgAAXAHIALgFIAcAiIgOAHQgNgWgMgOgAAdgtIg3AAIgRABIAAgMIARAAIA3AAIARAAIAAAMIgRgBg");
	this.shape.setTransform(29.2,-40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA0IACgCQAEgDABgCIAAgeIgRAAQgEAbgJAPQgGgFgGAAQAKgKAEgaIACgdQABgRgBgeQAFABARAAIA8AAQAPAAAEgBIgBAPIAAACQgBAOABABIgFAAIgLgBIgHAAIAAANIAGAAIAQgBIACAAIAAALIgDAAIgOgBIgHAAIAAAMIAPAAIAPAAIAEgBIAAALIgDAAIgQAAIghAAQAEAKAIAHQAFgDAKgMQAKAEACADIgBABQgIADgLAKQANAHAUABQgIAGgBAHQgtgNgHgfIgOAAIAAAdIAQgKIACALQgXAMgEADIgBABgAgCAFIAWAAIAAgMIgWAAgAglAFIAZAAIAAgMIgCAAIgQABIgBAAIAAgLIABAAIAPABIADAAIAAgNIgYAAIgBAigAgCgQIAWAAIAAgNIgWAAgAgkgmIBOAAIAAgMIhOAAg");
	this.shape_1.setTransform(15,-40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA8IABgKIAAgiIgBAAQgJAUgkAQQgEgFgHgFQAagFAVgWIgcAAIgPABIAAgLQALACAEgBIAmAAIAAgJIgeAAIgJAAIABgPIAAgeIgBgKIANABIA+AAIAQgCIgBALIAAAkIAAAJIgKAAIgeAAIAAAKIAkAAIATgBIAAALIgHgBIgFAAIgHAAIgZAAQAOATAgAFQgIAGgBAFQgigJgMgaIgCAAIAAAhIAAAGIABAFgAAFgMIAdAAIAAgOIgdAAgAgggMIAbAAIAAgOIgbAAgAAFgiIAdAAIAAgOIgdAAgAgggiIAbAAIAAgOIgbAAg");
	this.shape_2.setTransform(1.1,-40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA+QgEgGgGgDQAVgEAQgQQgFgIgIgaIALgDQADANAGAQQAKgYAAgZIgSAAIgJAQQgFgEgGgBQAPgVAHgdQAPAEAAABIgBACIgDADIgCAEIgHAQIAbAAIAOgCIAAAMIgNgBIgDAAQgCAlgMAUQAKANAVAHQgHACgEAIQgVgNgGgIQgKAIgXANIgBgBgAg5A4QgEgEgEgCQAUgHAPgSQgKgKgKgGIAJgHIAGAGIALAIIAGgSQANAEgBACIgBABIgCADIgDAFIgFALIARAQIgLAHIgMgOQgKAOgVAMIgDgDgAhAACQAOgMAKgPIAKAGQgRAWgIAFQgDgDgGgDgAgYgTIAJgGIAVAVIgJAGQgJgLgMgKgAgPgdIgZAAQgMgBgGACIAAgLIASABIAZAAIALAAIAJgBIAAALIgUgBgAghg7IALgCIAHAQIgMACQgDgIgDgIg");
	this.shape_3.setTransform(-12.8,-40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAHA/IABgOIAAhKIgPAcQgEgDgIgDQAVgTAKgoIAOAGIgBABIgDADIgEAFIgEAJIAgAAIAQAAIAAALIgQgCIgbAAIAAAWIATAAIASAAIAAAJIgGAAIgMAAIgTAAIAAAVIAbAAIAQgBIAAAKIgIAAIgIAAIgbAAIAAARIABAOgAg9A2QATgQADgfIABghIgBgjIALABIAEABIgBABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBARAAARIAPgTIAKAJIgBABIgGADIgKAIIgIAIIgBAVQAIAJATAOIgKAJQgKgNgJgJQgFAVgMASQgGgEgHgCgAg9AEQAFgLAAgZQALAAABABIgBABQgBACAAAEIgCAcIgNAAg");
	this.shape_4.setTransform(-26.8,-40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AACA0QAJABACgCIABgGIAAgEIgEACQgTAIgFADQgBgDgFgFIAVgGIgHgJIAIgEIABACIAFAHIACAAIAEgCIAAgLIgBgIQALABABABIAAABIgBADIAAAKIAHADQAEgCAEgGIAIAGIgIAGIATALIgIAIQgNgLgNgGIAAAIIAAABQADALgUADQgBgGgEgFgAhAAxQAWgUgCgqIAAgjIgBgOIAPABIAAABQgCADAAACQgCANABAQQAHgHAEgHIAIAJIgBABIgEACIgPANIAAAHIAAAHIAAAGQALAIAFAGIgJAHIgJgLQgGAZgKAOQgGgEgGgBgAgeAeQAVgHAJgOIgJAAIgOABIAAgJQABABAOgBIAIAAIAAgHIgDAAIgPABIAAgKIAPABIADAAIAAgHIgOABIABgJIAAgUIgBgMIAOABIApAAQAIABAGgCQgCAEABAHIAAATIABALIgNgBIgDAAIAAAHIADAAIAOgBIAAAKIgOgBIgDAAIAAAHIAIAAIAPgBIAAALIgPgCIgNAAQAKALAVAFQgFAFgCAGQgVgKgMgRIgPAAQgKARgTALQgEgEgHgDgAAJABIAUAAIAAgHIgUAAgAAKgOIATAAIAAgHIgTAAgAgDgdIAuAAIAAgIIguAAgAgDgsIAuAAIAAgHIguAAgAg/ABIACgRIAAgRIAMABIAAABIgBAGIgCAaIgLAAg");
	this.shape_5.setTransform(-40.8,-40.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfA+IABgKIgzAAIABAKIgNAAIAAgGIAAgTIAAgaQgGAIgSANQgCgFgHgFQAagNAOgTIgQAAIgUABIAAgMIAUABIAUAAIAFgIIgJAAIgVABIAAgLIAIAAIAOABIALAAIABgFIABgFQgKACgcgBIgGgMQAVADAdAAQAbgBAYgFQAIAMgBABIgLABIgqAAIgDAKIAYAAIANAAIAKgBIAAALIgKAAIgNAAIgaAAIgCAGIgBABIAvAAIAMAAIANgBIAAAMIgZgBIg0AAIgFAHIAPABIAWAAIANAAIALgBIACABIAAABIgCASIAAAWQAAAPACAIgAgTAtIAzAAIAAgIIgzAAgAgTAeIAzAAIAAgJIgzAAgAgTAOIAzAAIAAgJIgzAAg");
	this.shape_6.setTransform(-54.9,-40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZAyIAAgpQgCAegkAUQgGgGgGgEQAbgKAIgPQAIgOgBgpIAKAAIAEABIgBADIgBAEIgBAGIgDAaQAMABACACIgCADIgBABIAAAVQgCAOAKgCQALACgBgOQAGAGAGABQgEALgDABQgDADgMAAIgDAAQgSAAACgJgAhBAlQAVgOAJgUQgJgLgNgOIAKgGIARAVQAEgQACgRIgiABIAAgLIAVABIAZgBQgFAhgGATIAPAWIgKAGQgFgLgFgGIAAgBQgMAVgMAMQgFgEgIgEgAgGANIABgTIAAggIgBgTQAGABAGgBIAfAAQANABAFgCIgBANIAAAuQAAAHABAFIgNAAIAAgGIABgHIAAgwIglAAIAAAqQgBAOABAFg");
	this.shape_7.setTransform(-68.8,-40.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAxQAjgGAPgYQALgRABg3IgBgEIAAgCQASACgBACIgBACIgBAHQgEAugIATIAdAaIgLAJIgDgDIAAgBIgFgFIgPgSQgQAWgfALQgFgHgHgEgAg6ApIACgDQAEgEAAgEIAAhFIgBgGIAAgIQAOACABABIgBAEIgCAEIAABFIAQgSIAGgGQABAHAGAFQgTAQgRAVgAgZglIAKgJQANAMALARIgKAIQgNgUgLgIg");
	this.shape_8.setTransform(-82.5,-40.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHAsQATADAAgGIAAhWIg+AAIgbAAIAAgMIAMABIAPAAIBQAAIAUgBIAAANIgUgBIgFAAIAABdQgCAKgYAAQgBgHgFgHgAgtAkIAAgGIABgGIAAgpIAAgGIgBgGIANABIAZAAIANgBIAAAMIAAAjIAAALIgNAAIABgLIgaAAIAAAEQAAAJACAFgAggAHIAbAAIAAgZIgbAAg");
	this.shape_9.setTransform(85.2,-57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAyIAAgNIgBgMIAPABIgBACQgCAEAAAFIAAAKQgCAFAMAAIAMAAQARACAAgQQAFAHAJACQgFAKgFADQgDACgMAAIgVAAIgDABQgSAAADgNgAg6A1QAJgJADgSIAOADIgBABIgEAFIgJAXIgMgFgAAeAbIALgGIAXAbIgNAHQgGgMgPgQgAgEAZIAJgEQAIAJADAJIgLAFQgEgKgFgJgAAEATQgBgGgDgHQAOAEgBgKIAAgVIAAgJIAKAAIAFABIgCACQgCAEAAAFIAAAWQADAPgWAAIgBAAgAgsATIACgTIAAgaIgJANIgEAEQgDgFgFgFQATgPAKgaQAPAGgCABIgBABQgEADgFAIIAAApQgBANABAGgAAegKIAIgHQALAIALALIgKAIQgIgKgMgKgAgZAGQANgJAHgPIAKAGIgBACQgEACgCADIgFAIIgGAHIgMgEgAgagZQASgKAMgbQALAFACACIgBABQgEACgHAJIAeAAIAagBIgLAZIgMgDQAEgFAEgHIguAAIgLANIgEADIgLgHg");
	this.shape_10.setTransform(71.1,-57.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAgA+QABgCAAgHIgxAAIgdABIABgHIAAgUIAAgRIAKABIAEABIgBACIgBAGIAAAYIAbAAIAAgrIgeAAIgZABIAAgLQAEACAWgBIAdAAIAAgTIgRAAIgTAAIgHAAIAAgMQABABAZAAIARAAIAAgMIgBgGIAAgFIANACIgBACQgCADABAEIAAAMIARAAQAaAAADgBIAAAMIgJAAIgUAAIgRAAIAAATIAgAAQARABAHgCIAAALIgYgBIggAAIAAArIAcAAIAAgVIAAgFIAAgGIAOACIgBABQgCADABACIAAAXQgBAQACADg");
	this.shape_11.setTransform(57.2,-57.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag+A7QAMgMAEgQQAKADADACIgBACIgEAFIgMAVQgHgEgFgBgAAhAiIAMgEIASAaIgOAGQgFgNgLgPgAgXAlIANgCIAGAZIgOABQgBgMgEgMgAAEAkIANgDIAJAaIgOABQgCgNgGgLgAAjAZIgRgBIgeAAIgUABIgKAAQACgBAAgVIgBgNIgBgIQAJACARgBIAIAAIAAgkIgBgKQAQABgBABIgBACQgCADAAAFIAAAIIAaAAIARAAIAKgCIAAANIgIAAIgTgBIgaAAIAAAQIAOAAIAbgBQgBAFAAAQIgBAOIACAJIgJgBgAgdAOIA8AAIAAgVIg8AAg");
	this.shape_12.setTransform(43,-57.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaA+QgRgBgMgCQgSgFgJgFIgHgEQgFABgIAPIgKgIQACgDADgDQAJgIAFgDIAAglIgVABIAAgMQAQACAQgCQgBAEABAHIgBAmQAQAKATADQAaABAhgDQgEAHgBAHIgOAAIgSAAgAAQArQgBgIgDgFQAMABADgEIABgIIAAgrIgeAAIgUABIAAgMIAUACIAeAAIAAgSIgCgKIAKAAIAEABIAAAEIgBAFIAAASIADAAQAKAAAKgBIAAALIgUgBIgDAAIAAApIgBASQgEAIgQAAIgCAAgAgKgJIALgDIAMAYIgMAFQgFgRgGgJgAg5gwIALgHQALANAIAMIgMAIQgHgOgLgMg");
	this.shape_13.setTransform(29.3,-57.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIA6QgIgBgNgGIgLgDQgFAAgIALIgKgKIASgLIAAgpIgPABIAAgMIAKABIARgBIAAAAIgBARIAAAjQAOAJAWADIAcgBQASAAAQgDQgGAFgBAJIgVAAQgYAAgUgCgAAeAfQAIACADgDIAAgKIgUAAIAAAHIAAAPIgKAAIAAgPIAAgHIgTAAIAAAKQAAAIABAEIgMAAIAAgDIABgIIAAgxIgBgHIAAgCQAAABALgBIARAAQgFgFgFgEIAIgHIAKAKQAHgEAHgIIgiAAIgRAAIAAgLQADABAOAAIArAAQAJAAAHgBQgPASgTALIAUAAQAHABAEgBQgBABABAIIAAASQAAApgCgBQgEAEgNAAQgBgGgDgHgAAVAMIAVAAIAAgLIgVAAgAgIAMIATAAIAAgLIgTAAgAAVgHIAUAAIAAgLIgUAAgAgIgHIATAAIAAgLIgTAAgAg0g1IAKgGIAOAaIgNAGQgFgOgGgMg");
	this.shape_14.setTransform(15.1,-57.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAMQAIgDAAgIIgJAAIAAgUIATAAIAAAUQgCASgQABg");
	this.shape_15.setTransform(-2.3,-52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpA7IgFgHIABgCQAEgEABgCIAAgbIgFAAIgRABIAAgLIAQABIAGAAIAAgPIgNABIAAgHIgFAGQgCgEgFgEQARgPAIgfQAPADgBABIgBACIgDAFIgDADIgDAIIAHAAQAKAAAIgCIAAAMIgSgBIgLAAIgDADIgHALQACABAJAAIAJAAIARgBIAAAKIgRgBIAAAPIAFAAIAPgBIAAALIgHAAIgIgBIgFAAIAAAZIAQgQIAEALQgZATgDAEIgBACIgCgDgAgOArIAUABIADgpIgKABIgGAAIAAgLIARABIADgjIgNAAIgHACIAAgNQAGABAOAAIAPAAQAQAAALgCIgBADIgBAXIgEBHQAKgBAHgBIAAALIgIAAIgKAAIgnAAIgXABgAAQAsIAVAAIADgpIgTAAgAAWgGIATAAIABgjIgSAAg");
	this.shape_16.setTransform(-12.8,-57.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAzQAXgCAQgLIgagKIAMgUIgCAAIgQABIAAgKIAQABIAFAAQAFgJADgPQAOAFgBACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDADIgFAKIgBACIAfAAQAJAAAIgBIAAAKIgRgBIgDAAQgEAPgIANIAcAOIgJALQgKgKgPgIQgOANgcAHQgCgHgFgFgAAEAWIANAGIAGADQAHgKADgNIgVAAIgIAOgAg4AxQAMABADgCIAAggQgPAIgEABIgDgMIAWgIIAAgaIgDAAIgJAAIgJAAIAAgLIAJABIAJAAIADAAIAAgUIgCgKQAOABAAABIgBADIgBAEIAAAVIACAAIAGAAIAFgBIAAALIgFAAIgGAAIgCAAIAAAWIANgEIAAAKIgNAFIAAApQAAAHgUACQgBgIgEgFgAgPgPIABgMIAAgDIgBgGIAAgGIANABIAwAAIAIAAIAGgBIgBAGIAAAGIAAACIABANIgMAAIABgQIg1AAIABAQgAALg8IAMgCIAGASIgMABQgDgKgDgHg");
	this.shape_17.setTransform(-26.9,-57.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRBEQAVgdAAglIAAgDQgDgkgPgeIAgAAIAACHg");
	this.shape_18.setTransform(-41.9,-57.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAIA/IAAgOIAAhKIgPAcQgFgDgGgDQATgTALgoIAOAGIgBABIgDADIgEAFIgEAJIAgAAIAQAAIAAALIgQgCIgbAAIAAAWIATAAIASAAIAAAJIgGAAIgMAAIgTAAIAAAVIAbAAIAQgBIAAAKIgIAAIgIAAIgbAAIAAARIABAOgAg9A2QATgQADgfIABghIgBgjIALABIAEABIgBABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBARAAARIAOgTIALAJIgCABIgFADIgKAIIgIAIIgBAVQAIAJATAOIgKAJQgKgNgJgJQgFAVgMASQgGgEgHgCgAg9AEQAFgLAAgZQAKAAACABIgBABQgBACAAAEIgCAcIgNAAg");
	this.shape_19.setTransform(-54.8,-57.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACA0QAJABACgCIABgGIAAgEIgEACQgTAIgFADQgBgDgFgFIAVgGIgHgJIAIgEIABACIAFAHIACAAIAEgCIAAgLIgBgIQALABABABIAAABIgBADIAAAKIAHADQAEgCAEgGIAIAGIgIAGIATALIgIAIQgNgLgNgGIAAAIIAAABQADALgUADQgBgGgEgFgAhAAxQAWgUgCgqIAAgjIgBgOIAPABIAAABQgCADAAACQgCANABAQQAHgHAEgHIAIAJIgBABIgEACIgPANIAAAHIAAAHIAAAGQALAIAFAGIgJAHIgJgLQgGAZgKAOQgGgEgGgBgAgeAeQAVgHAJgOIgJAAIgOABIAAgJQABABAOgBIAIAAIAAgHIgDAAIgPABIAAgKIAPABIADAAIAAgHIgOABIABgJIAAgUIgBgMIAOABIApAAQAIABAGgCQgCAEABAHIAAATIABALIgNgBIgDAAIAAAHIADAAIAOgBIAAAKIgOgBIgDAAIAAAHIAIAAIAPgBIAAALIgPgCIgNAAQAKALAVAFQgFAFgCAGQgVgKgMgRIgPAAQgKARgTALQgEgEgHgDgAAJABIAUAAIAAgHIgUAAgAAKgOIATAAIAAgHIgTAAgAgDgdIAuAAIAAgIIguAAgAgDgsIAuAAIAAgHIguAAgAg/ABIACgRIAAgRIAMABIAAABIgBAGIgCAaIgLAAg");
	this.shape_20.setTransform(-68.8,-57.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQBEIAAiHIAfAAQgQAegDAkIAAADQABAlAVAdg");
	this.shape_21.setTransform(-81.7,-57.5);

	this.instance = new lib.shuomingBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-95.2,-73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// 图层 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333F48").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E7485").s().p("Ah4B4QgxgyAAhGQAAhFAxgzQAzgxBFAAQBGAAAyAxQAyAzAABFQAABGgyAyQgyAyhGAAQhFAAgzgyg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E7485").s().p("AjLDLQhUhUAAh3QAAh1BUhWQBWhUB1AAQB3AABUBUQBVBWAAB1QAAB3hVBUQhUBVh3AAQh1AAhWhVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.page19_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_106 = function() {
		this.stop();
		
		if (modelAction) modelAction.dispatchEvent("complete");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(56).call(this.frame_106).wait(1));

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape.setTransform(786.9,185.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858C91").s().p("AhEBDIAAgQIA/AAIAAgJIgrAAIAAgOIgJAKIgOgKQAOgRAJgQIgIAAIAAg9IBzAAIAAA9IgsAAIAAAIIAzAAIAAAPIgzAAIAAAJIAvAAIAAAPIgvAAIAAAJIA5AAIAAAQgAgvAbIAqAAIAAgJIgkAAIgGAJgAgdgCIgDAFIAbAAIAAgIIggAAgAgjgWIBKAAIAAgIIhKAAgAgjgqIBKAAIAAgIIhKAAg");
	this.shape_1.setTransform(771.7,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858C91").s().p("AgFA0IAXABQALAAAAgMIAAgpIgqAAIAAgTIBWAAIAAATIgXAAIAAAuQAAAMgGAGQgFAHgKAAIgdABIgFgUgAgyBHIAAg1IgOAMIgIgUQAWgTASgYIARALIgOATIAABKgAhIgmQAZgSAMgPIARANQgPARgZAVQgGgIgIgKgAgJgqIAAgTIBMAAIAAATg");
	this.shape_2.setTransform(756.8,185.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858C91").s().p("Ag5A2QAGgFAAgMIAAggIgUAAIAAgSIAUAAIAAg7IAUAAIAAA7IBkAAIAAASIg4AAQASAeApAMIgPAUQgugTgRgrIgZAAIAAApIAmgNIgBATQgrAOgIAHgAgUgkQAmgSAXgRIAPATQgeARgiAPg");
	this.shape_3.setTransform(741.9,185.6);

	this.instance = new lib.tabMC();
	this.instance.parent = this;
	this.instance.setTransform(762.9,319.7,0.534,0.534,0,0,0,0,0.1);

	this.instance_1 = new lib.tabMC();
	this.instance_1.parent = this;
	this.instance_1.setTransform(490.2,373.4,0.534,0.534,0,0,0,0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_4.setTransform(502,263.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858C91").s().p("AhCBFIAAiJIA0AAIAAAOIgLApQANAOgBAYQABANgIAGQgGAGgQAAQgBgMgDgKIAGABQAIAAAAgHQAAgTgNgOIALgoIgNAAIAAB4gAAvBFIAAgKIgkAAIAAAKIgUAAIAAiHIBMAAIAACHgAALAoIAkAAIAAgjIgkAAgAALgNIAkAAIAAgjIgkAAg");
	this.shape_5.setTransform(486.9,264.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858C91").s().p("AhIA0QAzgdAGgpIg3AAIAAgUIA6AAQACgPAAgSIAVAAIgCAhIA9AAIAAAUIg6AAQAQAxAtATIgRAVQgngYgRgwQgKAlgtAkIgRgUgAgSAqIANgLIAVAXIgQANIgSgZg");
	this.shape_6.setTransform(472,263.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858C91").s().p("AgoAwIAUABQALAAAAgMIAAhrIAVAAIAABuQAAAPgEAGQgFAHgGABQgHACgZAAIgFgXgAhIAeQANggAJgkIAWAFQgKAngMAggAAagfIAUgHQAOAgANAiIgXAJQgMglgMgfg");
	this.shape_7.setTransform(457,263.8);

	this.instance_2 = new lib.tabMC();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1096.8,334.8,0.534,0.534,0,0,0,0,0.1);

	this.instance_3 = new lib.tabMC();
	this.instance_3.parent = this;
	this.instance_3.setTransform(969.1,338.8,0.534,0.534,0,0,0,0,0.1);

	this.instance_4 = new lib.tabMC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(839.6,354.8,0.534,0.534,0,0,0,0,0.1);

	this.instance_5 = new lib.tabMC();
	this.instance_5.parent = this;
	this.instance_5.setTransform(635.4,347.8,0.534,0.534,0,0,0,0,0.1);

	this.instance_6 = new lib.tabMC();
	this.instance_6.parent = this;
	this.instance_6.setTransform(381.4,349.9,0.534,0.534,0,0,0,0,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858C91").s().p("AAwBFIAAgGIhfAAIAAAGIgSAAIAAiJICDAAIAACJgAgvAwIBfAAIAAgpIgHAJQgKgDgIgHQgBAMgBADIgFAEQgDACgSgBIgEgKIAJAAIAFAAQACgBAAgFIgVAAIAAAPQAAAGAHABIAXAAQAEgBADgCQACgDABgJIAQAFQgDAKgCAEQgDAEgEACQgGABgIAAIgdAAQgRABAAgRIAAgNIgLAGIgGgHgAgvAFQAOgGAJgHIgUAAIAAgMIAeAAIADgGIgeAAIAAgLIALAAIgHgIIAPgFIAJANIAFAAIACgNIAPAAIgBANIAHAAIAIgMIARADIgJAJIAMAAIAAALIgmAAIgCAGIApAAIAAAMIgUAAQALAIANABIAAg2IhfAAgAgLAAIAaAAIgIgIIgLAAIgHAIg");
	this.shape_8.setTransform(1094.4,175.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858C91").s().p("AArBIIAAgFIhoAAIAAhHIAUAAIAAAeQAjgOAAgYIhBAAIAAgRIAUAAIAAgiIAUAAIAAAiIAZAAIAAgqIATAAIAAANIAwAAIAAARIgwAAIAAAMIA7AAIAAARIg7AAQgBAJgCAGIAhAUIAAgbIAVAAIAABMgAgpAyIBUAAIAAgXIgKAPIgfgYQgJANgWAMIgMgRg");
	this.shape_9.setTransform(1079.4,175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AgKBIIAAgmQgSAWgjAOQgEgJgFgIQAbgJATgRIgrAAIAAgQIA7AAIAAgLIAVAAIAAALIA8AAIAAAQIguAAQASAQAeAJQgFAJgFAJQghgMgTgYIAAAmgAhIgGQATgPACgWIgQAAIAAgQIASAAIAAgMIASAAIgBAMIAfAAQAAAtgCAFQgDAFgEADQgDACgYAAIgEgPQgHAMgKAHQgGgFgIgGgAgogPIANAAQAEAAACgDQABgDAAgWIgNAAQgDASgEAKgAAHgEIAAg6IA5AAIAAA6gAAagTIATAAIAAgbIgTAAg");
	this.shape_10.setTransform(981.8,183.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AhEBDIAAgQIA/AAIAAgJIgrAAIAAgPIgJALIgOgLQAOgQAJgQIgIAAIAAg9IBzAAIAAA9IgsAAIAAAIIAzAAIAAAPIgzAAIAAAJIAvAAIAAAPIgvAAIAAAJIA5AAIAAAQgAgvAbIAqAAIAAgJIgkAAIgGAJgAgdgCIgDAFIAbAAIAAgIIggAAgAgjgVIBKAAIAAgJIhKAAgAgjgqIBKAAIAAgIIhKAAg");
	this.shape_11.setTransform(966.7,183.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AgFA0IAXABQALAAAAgMIAAgpIgrAAIAAgTIBXAAIAAATIgXAAIAAAuQAAAMgFAGQgGAHgKAAIgdABIgFgUgAgyBHIAAg1IgOAMIgIgUQAXgTAQgYIARALIgNATIAABKgAhIgmQAZgSAMgPIASANQgQARgaAVQgEgIgJgKgAgJgqIAAgTIBLAAIAAATg");
	this.shape_12.setTransform(951.8,183.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_13.setTransform(659,216.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("AhEBDIAAgPIA/AAIAAgKIgrAAIAAgPIgJALIgOgLQAOgQAJgRIgIAAIAAg8IBzAAIAAA8IgsAAIAAAIIAzAAIAAAQIgzAAIAAAJIAvAAIAAAPIgvAAIAAAKIA5AAIAAAPgAgvAbIAqAAIAAgJIgkAAIgGAJgAgdgCIgDAEIAbAAIAAgIIggAAgAgjgVIBKAAIAAgIIhKAAgAgjgqIBKAAIAAgIIhKAAg");
	this.shape_14.setTransform(643.9,216.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AgFA0IAXABQALAAAAgMIAAgpIgrAAIAAgTIBXAAIAAATIgXAAIAAAuQAAAMgFAGQgGAHgKAAIgdABIgFgUgAgyBHIAAg1IgOAMIgIgUQAXgTAQgYIARALIgOATIAABKgAhHgmQAYgSAMgPIASANQgQARgaAVQgFgIgHgKgAgIgqIAAgTIBKAAIAAATg");
	this.shape_15.setTransform(629,216.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AhIA4QAUgRAEgiIgXAAIAAgQIAYAAIAAgaIgGAAIgIAVQgFgJgGgGQAIgQAFgYIAPACIgDAPIAfAAIAAARIgNAAIAAAaIASAAIAAAQIgTAAIgCARIAGgFIAUAWIgOAMIgPgTQgFAYgPAQIgRgQgAgTBFIAAgRIAYAAQgFgOgGgLIAQgHIAOAZIgQAHIAYAAQAIgPAHgQIAUAIIgOAXIAUAAIAAARgAgHASIAAg1IBJAAIAAA1gAALACIAjAAIAAgUIgjAAgAgLgvIAAgRIBSAAIAAARg");
	this.shape_16.setTransform(614,216.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_17.setTransform(861.4,274.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AhBBFIAAiJIAzAAIAAAOIgMApQANAOABAYQAAANgHAGQgHAGgRAAQgBgMgCgKIAGABQAIAAAAgHQAAgTgNgOIALgoIgNAAIAAB4gAAvBFIAAgKIglAAIAAAKIgTAAIAAiHIBMAAIAACHgAAKAoIAlAAIAAgjIglAAgAAKgNIAlAAIAAgjIglAAg");
	this.shape_18.setTransform(846.3,275.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AhIA0QAygdAHgpIg2AAIAAgUIA5AAQABgPAAgSIAWAAIgBAhIA8AAIAAAUIg6AAQAPAxAvATIgSAVQgngYgQgwQgKAlgvAkIgQgUgAgSAqIANgLIAVAXIgQANIgSgZg");
	this.shape_19.setTransform(831.4,274.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("AhIA1QA1gYAGgrIg4AAIAAgUIA6AAQABgQgBgVIAWAAIgBAlIA8AAIAAAUIg6AAQAMAwAxARIgRAUQgogTgQgpQgLAmgsAXIgRgTg");
	this.shape_20.setTransform(816.3,274.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858C91").s().p("AA0BIIAAgHIgtAAIAAAHIgRAAIAAh0IAfAAIAAgbIASAAIAAAbIAfAAIAAB0gAAnAvIANAAIAAgcIgNAAgAAHAvIAOAAIAAgcIgOAAgAAnABIANAAIAAgcIgNAAgAAHABIAOAAIAAgcIgOAAgAgrBIIAAgaIgaACIAAgSIAagBIAAgOIgZAAIAAgTQAFgOAEgSIgKAAIAAgRIAOAAIADgSIATACIgEAQIAYAAIAAARIgcAAIgKAjIAIAAIAAgaIASAAIAAAaIALAAIAAAQIgLAAIAAANIAMgBIAAASIgMAAIAAAbg");
	this.shape_21.setTransform(393.8,191.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_22.setTransform(379.1,191.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858C91").s().p("AhEBDIAAgQIA/AAIAAgJIgrAAIAAgOIgJAKIgOgKQAOgRAJgQIgIAAIAAg9IBzAAIAAA9IgsAAIAAAIIAzAAIAAAPIgzAAIAAAJIAvAAIAAAPIgvAAIAAAJIA5AAIAAAQgAgvAbIAqAAIAAgJIgkAAIgGAJgAgdgCIgDAFIAbAAIAAgIIggAAgAgjgWIBKAAIAAgIIhKAAgAgjgqIBKAAIAAgIIhKAAg");
	this.shape_23.setTransform(363.9,191.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858C91").s().p("AgFA0IAXABQALAAAAgMIAAgpIgqAAIAAgTIBWAAIAAATIgXAAIAAAuQAAAMgGAGQgFAHgKAAIgdABIgFgUgAgyBHIAAg1IgOAMIgIgUQAWgTASgYIAQALIgNATIAABKgAhIgmQAZgSAMgPIARANQgPARgZAVQgGgIgIgKgAgJgqIAAgTIBMAAIAAATg");
	this.shape_24.setTransform(349,191.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("EA32gLmIAAPVADrp+IAANWAPcDRIAAEuEAj1gKfIAAPWEg31gKHIAAR4Egm4ACFIAAJiAwPllIAANW");
	this.shape_25.setTransform(739.4,267.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("EgnjADHIAuAAIAlAAIgoCAgAOzggIAsAAIAnAAIgpCAgAwzgtIAnAAIArAAIgoB+gEg4igAtIAwAAIAjAAIgoB+gEAjPgDoIApAAIAqAAIgpCAgEA3PgEwIAqAAIApAAIgnCAgADGlGIAoAAIArAAIgoCAg");
	this.shape_26.setTransform(739.1,322.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},45).to({state:[]},9).wait(53));

	// 图层 2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333F48").s().p("AhaCBIAAhvQgLAbgPAZIgJgvQAUgeAMgnIgdAAIAAgfIAgAAIAAgzIAiAAIAAAzIAZAAIAAAOQAWgdALgjIAkACIgKAaIBiAAIAABkIgCBFQgBAagLAOQgLAOgRABQgRACgpgBQgEgVgEgQQAdACASABQALAAAHgGQAGgGABgUIgSAJIgFgLQg/AEgdAHIgLgfQAUgPAehJIAhANIgpBGIAvgDIgTghIAbgPQAPAXAPAbIAAhiIhRAAQgMAXgRAUQgLgOgLgJIgPAAIAAAQIAkAgIgXAWIgNgTIAAB8g");
	this.shape_27.setTransform(346.1,61.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333F48").s().p("ABVCDIAAgQIhKAAIAAAQIgjAAIAAhyICQAAIAABygAALBTIBKAAIAAghIhKAAgAiBBQIBhgNIgBAlIhaANgAh+AfQAQgPAXgiIgiAEIgKgeQAVgZAZg9IAjANQgVAngVAfIAZgBIAQgbIARAJIAAgdIA/AAIAAgiIAkAAIAAAiIBCAAIAAAfIhCAAIAAAcIA6AAIAAAgIiVAAIAAggIA3AAIAAgcIg6AAIAJAEQghAygXAeIApgFIgDAiQg5AGgVAFg");
	this.shape_28.setTransform(319.3,61.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333F48").s().p("AgmB+IAAgPIhVANIgHgjQAvgFAygIIgBAQIAOAAIAAiWQgdAxgbAlIAvgGIgEAgQhDAHgNAEIgNggQANgHAcgoQgaABgJAEIgLggQAPgJAjhLIAhANQgWAngTAfIAWgBIARggIAeAPIAAg0ICHAAIAADMIARAAIAAAigAAQBcIA+AAIAAgkIg+AAgAAQAXIA+AAIAAghIg+AAgAAQgrIA+AAIAAgjIg+AAg");
	this.shape_29.setTransform(292,61);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_30.setTransform(264.9,61.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333F48").s().p("ABNCCIAAgKIi8AAIAAiBIAlAAIAAA4QA/gZgBgrIh1AAIAAgfIAkAAIAAg9IAlAAIAAA9IAsAAIAAhNIAlAAIAAAYIBVAAIAAAeIhVAAIAAAXIBoAAIAAAfIhqAAQgBAOgDAMQAeASAcASIAAgyIAmAAIAACLgAhKBZICXAAIAAgoIgSAbQgcgXgcgUQgQAYgnAUIgWgdg");
	this.shape_31.setTransform(237.5,61.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333F48").s().p("Ah7B5IAAgcIByAAIAAgRIhOAAIAAgaIgQATQgKgJgQgKQAbgeAOgfIgNAAIAAhtIDQAAIAABtIhQAAIAAAPIBbAAIAAAcIhbAAIAAARIBUAAIAAAbIhUAAIAAARIBnAAIAAAcgAhWAxIBNAAIAAgRIhCAAIgLARgAg0gFIgGAJIAxAAIAAgPIg6AAgAhAgoICHAAIAAgOIiHAAgAhAhNICHAAIAAgOIiHAAg");
	this.shape_32.setTransform(210,61.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333F48").s().p("AgJBdIAqACQATAAAAgVIAAhKIhNAAIAAgjICdAAIAAAjIgqAAIAABTQAAAWgKALQgKALgSABIg0ACQgEgSgFgTgAhbCBIAAhiIgZAXIgOgkQAogiAegsIAfAUQgMARgNAQIAACIgAiBhEQAsgiAVgbIAgAXQgcAgguAlQgJgPgOgQgAgRhMIAAgiICIAAIAAAig");
	this.shape_33.setTransform(182.9,61.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333F48").s().p("AAzBIQgZAcgiAWQgMgSgMgPQAjgWAZgdQgagsgIg6IAigHQAIApARAgQAWgmAFgyIhbAAIAAgjICDAAQgCBegqBBQAXAdAhAWIgdAhQgegXgWgbgAiDBUQAfgdAUgmIgvhMIAcgTIAjA2QAJgdADghIhLAAIAAgjIBwAAQAABNgXA6IAcAsIggAXIgQgbQgWAkggAdIgTgjg");
	this.shape_34.setTransform(155.6,62.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA4BjIAAgiIgrgrIgIAAIAAAiIAQAAIAAArIgqAAIAAgrIAPAAIAAgiIgIAAIgoAqIAAAjIgsAAIAAgrIAjAAIAqgqIAAgJIghAAIAAARIgsAAIAAgqIAsAAIAAAQIAhAAIAAgHIgsgrIghAAIAAgsIAsAAIAAAkIAqAqIAGAAIAAgiIgPAAIAAgsIAqAAIAAAsIgQAAIAAAiIAIAAIArgrIAAgjIArAAIAAAsIghAAIgtAqIAAAIIAjAAIAAgQIArAAIAAAqIgrAAIAAgRIgjAAIAAAKIAqApIAkAAIAAArg");
	this.shape_35.setTransform(1253.1,681.5);

	this.backBtn = new lib.mlBtn();
	this.backBtn.parent = this;
	this.backBtn.setTransform(1253.3,681.7);
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.mlBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backBtn},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(107));

	// 图层 4
	this.instance_7 = new lib.sxxclbz("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(87.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(107));

	// 图层 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EhqtAKPIAA0dMDVbAAAIAAUdg");
	this.shape_36.setTransform(683,702.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0F9F6").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_37.setTransform(0.2,384,1,1,0,0,0,-682.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36}]}).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


(lib.page19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s19.mp3"
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

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAWIAAgqIApAAIAAAqg");
	this.shape.setTransform(1259.1,687.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIArAAIAAAqg");
	this.shape_1.setTransform(1253.4,687.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIAqAAIAAAqg");
	this.shape_2.setTransform(1247.7,687.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAWIAAgqIApAAIAAAqg");
	this.shape_3.setTransform(1259.1,682.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIArAAIAAAqg");
	this.shape_4.setTransform(1253.4,682.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAWIAAgqIAqAAIAAAqg");
	this.shape_5.setTransform(1247.7,682.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_6.setTransform(1259.1,676.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAVIAAgpIArAAIAAApg");
	this.shape_7.setTransform(1253.4,676.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAVIAAgpIAqAAIAAApg");
	this.shape_8.setTransform(1247.7,676.4);

	this.prevBtn = new lib.fanBtn();
	this.prevBtn.parent = this;
	this.prevBtn.setTransform(1215.4,682.3,1,1,180);
	new cjs.ButtonHelper(this.prevBtn, 0, 1, 1);

	this.nextBtn = new lib.fanBtn();
	this.nextBtn.parent = this;
	this.nextBtn.setTransform(1289.9,681.3);
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 1);

	this.baozhaBtn = new lib.baozhaBtn();
	this.baozhaBtn.parent = this;
	this.baozhaBtn.setTransform(1253.3,681.7);
	new cjs.ButtonHelper(this.baozhaBtn, 0, 1, 2, false, new lib.baozhaBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.baozhaBtn},{t:this.nextBtn},{t:this.prevBtn},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// 图层 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgYAtIgZAMQgDgHgEgHQAQgFAPgHIAIAKIgGADIANABQAFAAAAgFIAAgJIgUAAIgKAAIAAgKIgOAJIgIgNIANgGIgFgGIAJgHIAGAGIAFgEIgHgFIAJgHIAGAGIAHgIIgRAAQgIAIgKAHIgJgKQASgKALgQIAMAFIgEAFIAVAAIAAAMIgLANIAbAAQgLgMgFgQIALgEIADAGIAlAAIAAALIgOARQAJAHANAEIgJANIgMgGIAAALIgcAAIAAAOQAAAFgDADQgCAEgEABIgWAAIgDgNgAAlASQgJgFgHgIIAAAHIgmAAIAAgGQgHAHgIAFIBFAAIAAAAgAAbgGIAIgJIgPAAIAHAJgAASArIAGgLIAhALIgHANIgggNgAgKAtIgNgBIAGgDIgIgKIAUAAIAAAJQAAAFgFAAIAAAAgAgZAfgAg1gbIAAgUIAuAAIgDgIIAQgCIAEAKIAtAAIAAATIgPAAIAAgHIhOAAIAAAIg");
	this.shape_9.setTransform(1297.5,608.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgWAqQAWgLAHgPQAGgPAAghIAPAAQABAYgEAQIAIAAIAAAaQAAAFAFAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQACgDABgOIAOAHQgCAUgFADQgFADgFAAIgJAAQgOAAAAgOIAAgMQgJARgVAMIgLgOgAg6AfQALgMAGgOIgPgcIAMgGIAKASQAEgLABgNIgbAAIAAgPIAqAAQgBAfgKAYIAOAZIgNAIIgIgRQgIAOgKALIgIgPgAgKAQIAAhHIA+AAIAABHIgQAAIAAg4IggAAIAAA4g");
	this.shape_10.setTransform(1285.5,609.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgmAtQATAAAPgFQgKgGgIgLIgHAAIAAgNIBMAAIAAANQgKAKgJAHQANACASABIgHAOQgagDgQgGQgPAGgZAEIgIgNgAALAjQALgFAHgHIgiAAQAGAIAKAEgAg6AvQAKgSAAgjIAAgoIAuAAIgDgIIASgEIAFAMIAoAAIAAAMIhbAAIAAAeQAAAsgMASIgNgLgAgSAEIAAgSIgNAAIAAgMIANAAIAAgFIAPAAIAAAFIAcAAIAAgFIAPAAIAAAFIAQAAIAAAMIgQAAIAAASgAgDgHIAcAAIAAgHIgcAAg");
	this.shape_11.setTransform(1273.5,608.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgfABQgBgWAJgNQAJgMAPAAQAgAAAAAuQAAAXgJAMQgJAMgPAAQgfAAAAgugAgMABQAAAgAMAAQAOAAAAghQgBgggNAAQgNAAABAhg");
	this.shape_12.setTransform(1263.9,608.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgWAkQgJgLABgUQAAgWAKgPQALgOASAAQAKAAAGACIAAARQgHgEgIgBQgKAAgGAJQgGAIAAAOIABAAQAGgKAMAAQAMgBAGAIQAHAHAAANQAAANgJAJQgJAJgOAAQgOAAgIgLgAgIAGQgDADAAAHQAAAGADAFQAEAFAEABQAGAAAEgFQADgFAAgGQAAgQgNAAQgEAAgEAFg");
	this.shape_13.setTransform(1256.6,608.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgbArIAAgRQAIAHAMAAQAHAAAEgEQAFgDAAgHQAAgGgFgEQgFgDgJAAIgIAAIAAgOIAHAAQARABABgMQAAgNgOAAQgJABgJAFIAAgPQAKgFANAAQALAAAJAGQAHAGABAKQgBATgRAEIAAABQAJAAAGAGQAFAFAAAIQAAANgJAIQgKAHgOAAQgOAAgIgEg");
	this.shape_14.setTransform(1249.2,608.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgKAwIAGgHIghADQgGAAgEACIgIgOQAHgFAJgfIgQAAIAAgOIA3AAIAAAOIgWAAIgMAgIATgBIgIgVIANgFIALAdQAJgOgBgmIgLAAIAAgPIALAAIAAgUIAQAAIAAAUIAeAAIgBBBIgBARQAAAEgDACQgDACgEACQgDABgRAAIgFgSIANABQADAAACgCIACgDIACgSIAAgmIgQAAQAAAZgBAMQgCALgFALQgFAMgHAJIgOgKgAgxghIAAgPIAtAAIAAAPg");
	this.shape_15.setTransform(1239.1,608.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag5AqIAIABQAEAAABgFIAAgXIgNAFIgBgRIAOgDIAAgTIgNAAIAAgPIANAAIAAgWIAOAAIAAAWIAKAAIAAAJQAMgOAFgSIAPADIgFAKIAwAAIAAAOIg2AAIgIAOIAHAAIAAAJIALgCIAAgSIAPAAIAAAPIAagGIgCAhQAAAFgDACQgDADgNABIgEgPQAKABABgCIAAgLIgMACIAAAkIgPAAIAAghIgLACIAAAeQAAAHAHAAIAYAAQAEAAADgCIADgDIACgNIAPAGQgDAQgEAEQgFAEgIABIgjAAQgRAAAAgSIAAgcIgEABIgDgNIAHgCIAAgKIgHgFIgJAAIAAAPIAJgDIAAAPIgJADIAAAhQAAAGgCADQgCADgEABIgPABQgBgHgDgJg");
	this.shape_16.setTransform(1227.4,608.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgCAjIASABQAKAAAAgJIAAhAIhSAAIAAgQIBxAAIAAAQIgNAAIAABHQAAAIgDAEQgEAEgGACQgGABgXAAIgEgSgAgsAfIAAg4IA2AAIAAAxIglAAIAAAHgAgbAKIAWAAIAAgVIgWAAg");
	this.shape_17.setTransform(1215.4,609.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7A7A7A").s().p("Ag5BHIA6giIA5AiIg5AigAAFAjIA3ghIA6AiIg4AggAh0AlIA7gjIA2AhIg5AhgAiyAAIA6ghIA6AhIg6AigABBAAIA5ggIA5AgIg5AhgAg2AAIA3ggIA3AgIg3AggAAFgiIA5giIAGAEIACACIAeARIAQAJIABABIg5AhgAh0gjIADgCIAAgBIA1geIA5AiIg2AggAg4hGIA5giIA5AiIg5Aig");
	this.shape_18.setTransform(1254.6,579.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AhZBZIA7giIAABCIg7AigAgaA0IA2ggIAABCIgyAfIgBAAIgDACgAAhASIA4ghIAABBIg4AigAhZAUIA7ghIAAA/Ig7AigAgagPIA2ggIAAA+Ig2AggAhZgyIA7giIAABDIg7AhgAAhgyIA4ghIAABAIg4AggAgahWIA2ggIAABCIg2AggAAhh5IA4ghIAABCIg4Aig");
	this.shape_19.setTransform(1245.4,563.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9C9C9C").s().p("AAfB5IAAhCIA7AiIAABCgAAaB2IgQgJIgcgRIgCgCIgIgEIAAhCIA3AgIAABCgAAfAyIAAg/IA7AhIAABAgAhZAyIAAhBIA6AhIAABCgAgcAPIAAg+IA3AgIAAA+gAAfgRIAAhDIA7AiIAABCgAhZgTIAAhAIA6AhIAAA/gAgcg0IAAhCIA3AgIAABCgAhZhYIAAhCIA6AhIAABDg");
	this.shape_20.setTransform(1263.8,563.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333F48").s().p("AhaCBIAAhvQgLAbgPAZIgJgvQAUgeAMgnIgdAAIAAgfIAgAAIAAgzIAiAAIAAAzIAZAAIAAAOQAWgdALgjIAkACIgKAaIBiAAIAABkIgCBFQgBAagLAOQgLAOgRABQgRACgpgBQgEgVgEgQQAdACASABQALAAAHgGQAGgGABgUIgSAJIgFgLQg/AEgdAHIgLgfQAUgPAehJIAhANIgpBGIAvgDIgTghIAbgPQAPAXAPAbIAAhiIhRAAQgMAXgRAUQgLgOgLgJIgPAAIAAAQIAkAgIgXAWIgNgTIAAB8g");
	this.shape_21.setTransform(346.1,61.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333F48").s().p("ABVCDIAAgQIhKAAIAAAQIgjAAIAAhyICQAAIAABygAALBTIBKAAIAAghIhKAAgAiBBQIBhgNIgBAlIhaANgAh+AfQAQgPAXgiIgiAEIgKgeQAVgZAZg9IAjANQgVAngVAfIAZgBIAQgbIARAJIAAgdIA/AAIAAgiIAkAAIAAAiIBCAAIAAAfIhCAAIAAAcIA6AAIAAAgIiVAAIAAggIA3AAIAAgcIg6AAIAJAEQghAygXAeIApgFIgDAiQg5AGgVAFg");
	this.shape_22.setTransform(319.3,61.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333F48").s().p("AgmB+IAAgPIhVANIgHgjQAvgFAygIIgBAQIAOAAIAAiWQgdAxgbAlIAvgGIgEAgQhDAHgNAEIgNggQANgHAcgoQgaABgJAEIgLggQAPgJAjhLIAhANQgWAngTAfIAWgBIARggIAeAPIAAg0ICHAAIAADMIARAAIAAAigAAQBcIA+AAIAAgkIg+AAgAAQAXIA+AAIAAghIg+AAgAAQgrIA+AAIAAgjIg+AAg");
	this.shape_23.setTransform(292,61);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_24.setTransform(264.9,61.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333F48").s().p("ABNCCIAAgKIi8AAIAAiBIAlAAIAAA4QA/gZgBgrIh1AAIAAgfIAkAAIAAg9IAlAAIAAA9IAsAAIAAhNIAlAAIAAAYIBVAAIAAAeIhVAAIAAAXIBoAAIAAAfIhqAAQgBAOgDAMQAeASAcASIAAgyIAmAAIAACLgAhKBZICXAAIAAgoIgSAbQgcgXgcgUQgQAYgnAUIgWgdg");
	this.shape_25.setTransform(237.5,61.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333F48").s().p("Ah7B5IAAgcIByAAIAAgRIhOAAIAAgaIgQATQgKgJgQgKQAbgeAOgfIgNAAIAAhtIDQAAIAABtIhQAAIAAAPIBbAAIAAAcIhbAAIAAARIBUAAIAAAbIhUAAIAAARIBnAAIAAAcgAhWAxIBNAAIAAgRIhCAAIgLARgAg0gFIgGAJIAxAAIAAgPIg6AAgAhAgoICHAAIAAgOIiHAAgAhAhNICHAAIAAgOIiHAAg");
	this.shape_26.setTransform(210,61.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333F48").s().p("AgJBdIAqACQATAAAAgVIAAhKIhNAAIAAgjICdAAIAAAjIgqAAIAABTQAAAWgKALQgKALgSABIg0ACQgEgSgFgTgAhbCBIAAhiIgZAXIgOgkQAogiAegsIAfAUQgMARgNAQIAACIgAiBhEQAsgiAVgbIAgAXQgcAgguAlQgJgPgOgQgAgRhMIAAgiICIAAIAAAig");
	this.shape_27.setTransform(182.9,61.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333F48").s().p("AAzBIQgZAcgiAWQgMgSgMgPQAjgWAZgdQgagsgIg6IAigHQAIApARAgQAWgmAFgyIhbAAIAAgjICDAAQgCBegqBBQAXAdAhAWIgdAhQgegXgWgbgAiDBUQAfgdAUgmIgvhMIAcgTIAjA2QAJgdADghIhLAAIAAgjIBwAAQAABNgXA6IAcAsIggAXIgQgbQgWAkggAdIgTgjg");
	this.shape_28.setTransform(155.6,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(15));

	// 图层 6
	this.dragBtn = new lib.dragBtn();
	this.dragBtn.parent = this;
	this.dragBtn.setTransform(530.4,166.7,0.86,0.912);
	new cjs.ButtonHelper(this.dragBtn, 0, 1, 2, false, new lib.dragBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dragBtn).wait(15));

	// 图层 5
	this.model = new lib.sxxcl();
	this.model.parent = this;
	this.model.setTransform(500.1,155.2,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.model).wait(15));

	// 图层 3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EhqtAKPIAA0dMDVbAAAIAAUdg");
	this.shape_29.setTransform(683,702.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1F9F7").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_30.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(582.9,-474.6,3000.2,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3d3/sxxcl_bzt_zk0000.jpg", id:"sxxcl_bzt_zk0000"},
		{src:"images/3d3/sxxcl_bzt_zk0001.jpg", id:"sxxcl_bzt_zk0001"},
		{src:"images/3d3/sxxcl_bzt_zk0002.jpg", id:"sxxcl_bzt_zk0002"},
		{src:"images/3d3/sxxcl_bzt_zk0003.jpg", id:"sxxcl_bzt_zk0003"},
		{src:"images/3d3/sxxcl_bzt_zk0004.jpg", id:"sxxcl_bzt_zk0004"},
		{src:"images/3d3/sxxcl_bzt_zk0005.jpg", id:"sxxcl_bzt_zk0005"},
		{src:"images/3d3/sxxcl_bzt_zk0006.jpg", id:"sxxcl_bzt_zk0006"},
		{src:"images/3d3/sxxcl_bzt_zk0007.jpg", id:"sxxcl_bzt_zk0007"},
		{src:"images/3d3/sxxcl_bzt_zk0008.jpg", id:"sxxcl_bzt_zk0008"},
		{src:"images/3d3/sxxcl_bzt_zk0009.jpg", id:"sxxcl_bzt_zk0009"},
		{src:"images/3d3/sxxcl_bzt_zk0010.jpg", id:"sxxcl_bzt_zk0010"},
		{src:"images/3d3/sxxcl_bzt_zk0011.jpg", id:"sxxcl_bzt_zk0011"},
		{src:"images/3d3/sxxcl_bzt_zk0012.jpg", id:"sxxcl_bzt_zk0012"},
		{src:"images/3d3/sxxcl_bzt_zk0013.jpg", id:"sxxcl_bzt_zk0013"},
		{src:"images/3d3/sxxcl_bzt_zk0014.jpg", id:"sxxcl_bzt_zk0014"},
		{src:"images/3d3/sxxcl_bzt_zk0015.jpg", id:"sxxcl_bzt_zk0015"},
		{src:"images/3d3/sxxcl_bzt_zk0016.jpg", id:"sxxcl_bzt_zk0016"},
		{src:"images/3d3/sxxcl_bzt_zk0017.jpg", id:"sxxcl_bzt_zk0017"},
		{src:"images/3d3/sxxcl_bzt_zk0018.jpg", id:"sxxcl_bzt_zk0018"},
		{src:"images/3d3/sxxcl_bzt_zk0019.jpg", id:"sxxcl_bzt_zk0019"},
		{src:"images/3d3/sxxcl_bzt_zk0020.jpg", id:"sxxcl_bzt_zk0020"},
		{src:"images/3d3/sxxcl_bzt_zk0021.jpg", id:"sxxcl_bzt_zk0021"},
		{src:"images/3d3/sxxcl_bzt_zk0022.jpg", id:"sxxcl_bzt_zk0022"},
		{src:"images/3d3/sxxcl_bzt_zk0023.jpg", id:"sxxcl_bzt_zk0023"},
		{src:"images/3d3/sxxcl_bzt_zk0024.jpg", id:"sxxcl_bzt_zk0024"},
		{src:"images/3d3/sxxcl_bzt_zk0025.jpg", id:"sxxcl_bzt_zk0025"},
		{src:"images/3d3/sxxcl_bzt_zk0026.jpg", id:"sxxcl_bzt_zk0026"},
		{src:"images/3d3/sxxcl_bzt_zk0027.jpg", id:"sxxcl_bzt_zk0027"},
		{src:"images/3d3/sxxcl_bzt_zk0028.jpg", id:"sxxcl_bzt_zk0028"},
		{src:"images/3d3/sxxcl_bzt_zk0029.jpg", id:"sxxcl_bzt_zk0029"},
		{src:"images/3d3/sxxcl_bzt_zk0030.jpg", id:"sxxcl_bzt_zk0030"},
		{src:"images/3d3/sxxcl_bzt_zk0031.jpg", id:"sxxcl_bzt_zk0031"},
		{src:"images/3d3/sxxcl_bzt_zk0032.jpg", id:"sxxcl_bzt_zk0032"},
		{src:"images/3d3/sxxcl_bzt_zk0033.jpg", id:"sxxcl_bzt_zk0033"},
		{src:"images/3d3/sxxcl_bzt_zk0034.jpg", id:"sxxcl_bzt_zk0034"},
		{src:"images/3d3/sxxcl_bzt_zk0035.jpg", id:"sxxcl_bzt_zk0035"},
		{src:"images/3d3/sxxcl_bzt_zk0036.jpg", id:"sxxcl_bzt_zk0036"},
		{src:"images/3d3/sxxcl_bzt_zk0037.jpg", id:"sxxcl_bzt_zk0037"},
		{src:"images/3d3/sxxcl_bzt_zk0038.jpg", id:"sxxcl_bzt_zk0038"},
		{src:"images/3d3/sxxcl_bzt_zk0039.jpg", id:"sxxcl_bzt_zk0039"},
		{src:"images/3d3/sxxcl_bzt_zk0040.jpg", id:"sxxcl_bzt_zk0040"},
		{src:"images/3d3/sxxcl_bzt_zk0041.jpg", id:"sxxcl_bzt_zk0041"},
		{src:"images/3d3/sxxcl_bzt_zk0042.jpg", id:"sxxcl_bzt_zk0042"},
		{src:"images/3d3/sxxcl_bzt_zk0043.jpg", id:"sxxcl_bzt_zk0043"},
		{src:"images/3d3/sxxcl_bzt_zk0044.jpg", id:"sxxcl_bzt_zk0044"},
		{src:"images/3d3/sxxcl_bzt_zk0045.jpg", id:"sxxcl_bzt_zk0045"},
		{src:"images/3d3/sxxcl_bzt_zk0046.jpg", id:"sxxcl_bzt_zk0046"},
		{src:"images/3d3/sxxcl_bzt_zk0047.jpg", id:"sxxcl_bzt_zk0047"},
		{src:"images/3d3/sxxcl_bzt_zk0048.jpg", id:"sxxcl_bzt_zk0048"},
		{src:"images/3d3/sxxcl_bzt_zk0049.jpg", id:"sxxcl_bzt_zk0049"},
		{src:"images/3d3/sxxcl_bzt_zk0050.jpg", id:"sxxcl_bzt_zk0050"},
		{src:"images/3d3/sxxcl_yz0000.jpg", id:"sxxcl_yz0000"},
		{src:"images/3d3/sxxcl_yz0001.jpg", id:"sxxcl_yz0001"},
		{src:"images/3d3/sxxcl_yz0002.jpg", id:"sxxcl_yz0002"},
		{src:"images/3d3/sxxcl_yz0003.jpg", id:"sxxcl_yz0003"},
		{src:"images/3d3/sxxcl_yz0004.jpg", id:"sxxcl_yz0004"},
		{src:"images/3d3/sxxcl_yz0005.jpg", id:"sxxcl_yz0005"},
		{src:"images/3d3/sxxcl_yz0006.jpg", id:"sxxcl_yz0006"},
		{src:"images/3d3/sxxcl_yz0007.jpg", id:"sxxcl_yz0007"},
		{src:"images/3d3/sxxcl_yz0008.jpg", id:"sxxcl_yz0008"},
		{src:"images/3d3/sxxcl_yz0009.jpg", id:"sxxcl_yz0009"},
		{src:"images/3d3/sxxcl_yz0010.jpg", id:"sxxcl_yz0010"},
		{src:"images/3d3/sxxcl_yz0011.jpg", id:"sxxcl_yz0011"},
		{src:"images/3d3/sxxcl_yz0012.jpg", id:"sxxcl_yz0012"},
		{src:"images/3d3/sxxcl_yz0013.jpg", id:"sxxcl_yz0013"},
		{src:"images/3d3/sxxcl_yz0014.jpg", id:"sxxcl_yz0014"},
		{src:"images/3d3/sxxcl_yz0015.jpg", id:"sxxcl_yz0015"},
		{src:"images/3d3/sxxcl_yz0016.jpg", id:"sxxcl_yz0016"},
		{src:"images/3d3/sxxcl_yz0017.jpg", id:"sxxcl_yz0017"},
		{src:"images/3d3/sxxcl_yz0018.jpg", id:"sxxcl_yz0018"},
		{src:"images/3d3/sxxcl_yz0019.jpg", id:"sxxcl_yz0019"},
		{src:"images/3d3/sxxcl_yz0020.jpg", id:"sxxcl_yz0020"},
		{src:"images/3d3/sxxcl_yz0021.jpg", id:"sxxcl_yz0021"},
		{src:"images/3d3/sxxcl_yz0022.jpg", id:"sxxcl_yz0022"},
		{src:"images/3d3/sxxcl_yz0023.jpg", id:"sxxcl_yz0023"},
		{src:"images/3d3/sxxcl_yz0024.jpg", id:"sxxcl_yz0024"},
		{src:"images/3d3/sxxcl_yz0025.jpg", id:"sxxcl_yz0025"},
		{src:"images/3d3/sxxcl_yz0026.jpg", id:"sxxcl_yz0026"},
		{src:"images/3d3/sxxcl_yz0027.jpg", id:"sxxcl_yz0027"},
		{src:"images/3d3/sxxcl_yz0028.jpg", id:"sxxcl_yz0028"},
		{src:"images/3d3/sxxcl_yz0029.jpg", id:"sxxcl_yz0029"},
		{src:"images/3d3/sxxcl_yz0030.jpg", id:"sxxcl_yz0030"},
		{src:"images/3d3/sxxcl_yz0031.jpg", id:"sxxcl_yz0031"},
		{src:"images/3d3/sxxcl_yz0032.jpg", id:"sxxcl_yz0032"},
		{src:"images/3d3/sxxcl_yz0033.jpg", id:"sxxcl_yz0033"},
		{src:"images/3d3/sxxcl_yz0034.jpg", id:"sxxcl_yz0034"},
		{src:"images/3d3/sxxcl_yz0035.jpg", id:"sxxcl_yz0035"},
		{src:"images/3d3/sxxcl_yz0036.jpg", id:"sxxcl_yz0036"},
		{src:"images/3d3/sxxcl_yz0037.jpg", id:"sxxcl_yz0037"},
		{src:"images/3d3/sxxcl_yz0038.jpg", id:"sxxcl_yz0038"},
		{src:"images/3d3/sxxcl_yz0039.jpg", id:"sxxcl_yz0039"},
		{src:"images/3d3/sxxcl_yz0040.jpg", id:"sxxcl_yz0040"},
		{src:"images/3d3/sxxcl_yz0041.jpg", id:"sxxcl_yz0041"},
		{src:"images/3d3/sxxcl_yz0042.jpg", id:"sxxcl_yz0042"},
		{src:"images/3d3/sxxcl_yz0043.jpg", id:"sxxcl_yz0043"},
		{src:"images/3d3/sxxcl_yz0044.jpg", id:"sxxcl_yz0044"},
		{src:"images/3d3/sxxcl_yz0045.jpg", id:"sxxcl_yz0045"},
		{src:"images/3d3/sxxcl_yz0046.jpg", id:"sxxcl_yz0046"},
		{src:"images/3d3/sxxcl_yz0047.jpg", id:"sxxcl_yz0047"},
		{src:"images/3d3/sxxcl_yz0048.jpg", id:"sxxcl_yz0048"},
		{src:"images/3d3/sxxcl_yz0049.jpg", id:"sxxcl_yz0049"},
		{src:"images/3d3/sxxcl_yz0050.jpg", id:"sxxcl_yz0050"},
		{src:"images/3d3/sxxcl_yz0051.jpg", id:"sxxcl_yz0051"},
		{src:"images/3d3/sxxcl_yz0052.jpg", id:"sxxcl_yz0052"},
		{src:"images/3d3/sxxcl_yz0053.jpg", id:"sxxcl_yz0053"},
		{src:"images/3d3/sxxcl_yz0054.jpg", id:"sxxcl_yz0054"},
		{src:"images/3d3/sxxcl_yz0055.jpg", id:"sxxcl_yz0055"},
		{src:"images/3d3/sxxcl_yz0056.jpg", id:"sxxcl_yz0056"},
		{src:"images/3d3/sxxcl_yz0057.jpg", id:"sxxcl_yz0057"},
		{src:"images/3d3/sxxcl_yz0058.jpg", id:"sxxcl_yz0058"},
		{src:"images/3d3/sxxcl_yz0059.jpg", id:"sxxcl_yz0059"},
		{src:"images/3d3/sxxcl_yz0060.jpg", id:"sxxcl_yz0060"},
		{src:"images/3d3/sxxcl_yz0061.jpg", id:"sxxcl_yz0061"},
		{src:"images/3d3/sxxcl_yz0062.jpg", id:"sxxcl_yz0062"},
		{src:"images/3d3/sxxcl_yz0063.jpg", id:"sxxcl_yz0063"},
		{src:"images/3d3/sxxcl_yz0064.jpg", id:"sxxcl_yz0064"},
		{src:"images/3d3/sxxcl_yz0065.jpg", id:"sxxcl_yz0065"},
		{src:"images/3d3/sxxcl_yz0066.jpg", id:"sxxcl_yz0066"},
		{src:"images/3d3/sxxcl_yz0067.jpg", id:"sxxcl_yz0067"},
		{src:"images/3d3/sxxcl_yz0068.jpg", id:"sxxcl_yz0068"},
		{src:"images/3d3/sxxcl_yz0069.jpg", id:"sxxcl_yz0069"},
		{src:"images/3d3/sxxcl_yz0070.jpg", id:"sxxcl_yz0070"},
		{src:"images/3d3/sxxcl_yz0071.jpg", id:"sxxcl_yz0071"},
		{src:"images/3d3/sxxcl_yz0072.jpg", id:"sxxcl_yz0072"},
		{src:"images/3d3/sxxcl_yz0073.jpg", id:"sxxcl_yz0073"},
		{src:"images/3d3/sxxcl_yz0074.jpg", id:"sxxcl_yz0074"},
		{src:"images/3d3/sxxcl_yz0075.jpg", id:"sxxcl_yz0075"},
		{src:"images/3d3/sxxcl_yz0076.jpg", id:"sxxcl_yz0076"},
		{src:"images/3d3/sxxcl_yz0077.jpg", id:"sxxcl_yz0077"},
		{src:"images/3d3/sxxcl_yz0078.jpg", id:"sxxcl_yz0078"},
		{src:"images/3d3/sxxcl_yz0079.jpg", id:"sxxcl_yz0079"},
		{src:"images/3d3/sxxcl_yz0080.jpg", id:"sxxcl_yz0080"},
		{src:"images/3d3/sxxcl_yz0081.jpg", id:"sxxcl_yz0081"},
		{src:"images/3d3/sxxcl_yz0082.jpg", id:"sxxcl_yz0082"},
		{src:"images/3d3/sxxcl_yz0083.jpg", id:"sxxcl_yz0083"},
		{src:"images/3d3/sxxcl_yz0084.jpg", id:"sxxcl_yz0084"},
		{src:"images/3d3/sxxcl_yz0085.jpg", id:"sxxcl_yz0085"},
		{src:"images/3d3/sxxcl_yz0086.jpg", id:"sxxcl_yz0086"},
		{src:"images/3d3/sxxcl_yz0087.jpg", id:"sxxcl_yz0087"},
		{src:"images/3d3/sxxcl_yz0088.jpg", id:"sxxcl_yz0088"},
		{src:"images/3d3/sxxcl_yz0089.jpg", id:"sxxcl_yz0089"},
		{src:"images/3d3/sxxcl_yz0090.jpg", id:"sxxcl_yz0090"},
		{src:"images/3d3/sxxcl_yz0091.jpg", id:"sxxcl_yz0091"},
		{src:"images/3d3/sxxcl_yz0092.jpg", id:"sxxcl_yz0092"},
		{src:"images/3d3/sxxcl_yz0093.jpg", id:"sxxcl_yz0093"},
		{src:"images/3d3/sxxcl_yz0094.jpg", id:"sxxcl_yz0094"},
		{src:"images/3d3/sxxcl_yz0095.jpg", id:"sxxcl_yz0095"},
		{src:"images/3d3/sxxcl_yz0096.jpg", id:"sxxcl_yz0096"},
		{src:"images/3d3/sxxcl_yz0097.jpg", id:"sxxcl_yz0097"},
		{src:"images/3d3/sxxcl_yz0098.jpg", id:"sxxcl_yz0098"},
		{src:"images/3d3/sxxcl_yz0099.jpg", id:"sxxcl_yz0099"},
		{src:"images/3d3/sxxcl_yz0100.jpg", id:"sxxcl_yz0100"},
		{src:"images/3d3/sxxcl_yz0101.jpg", id:"sxxcl_yz0101"},
		{src:"images/3d3/sxxcl_yz0102.jpg", id:"sxxcl_yz0102"},
		{src:"images/3d3/sxxcl_yz0103.jpg", id:"sxxcl_yz0103"},
		{src:"images/3d3/sxxcl_yz0104.jpg", id:"sxxcl_yz0104"},
		{src:"images/3d3/sxxcl_yz0105.jpg", id:"sxxcl_yz0105"},
		{src:"images/3d3/sxxcl_yz0106.jpg", id:"sxxcl_yz0106"},
		{src:"images/3d3/sxxcl_yz0107.jpg", id:"sxxcl_yz0107"},
		{src:"images/3d3/sxxcl_yz0108.jpg", id:"sxxcl_yz0108"},
		{src:"images/3d3/sxxcl_yz0109.jpg", id:"sxxcl_yz0109"},
		{src:"images/3d3/sxxcl_yz0110.jpg", id:"sxxcl_yz0110"},
		{src:"images/3d3/sxxcl_yz0111.jpg", id:"sxxcl_yz0111"},
		{src:"images/3d3/sxxcl_yz0112.jpg", id:"sxxcl_yz0112"},
		{src:"images/3d3/sxxcl_yz0113.jpg", id:"sxxcl_yz0113"},
		{src:"images/3d3/sxxcl_yz0114.jpg", id:"sxxcl_yz0114"},
		{src:"images/3d3/sxxcl_yz0115.jpg", id:"sxxcl_yz0115"},
		{src:"images/3d3/sxxcl_yz0116.jpg", id:"sxxcl_yz0116"},
		{src:"images/3d3/sxxcl_yz0117.jpg", id:"sxxcl_yz0117"},
		{src:"images/3d3/sxxcl_yz0118.jpg", id:"sxxcl_yz0118"},
		{src:"images/3d3/sxxcl_yz0119.jpg", id:"sxxcl_yz0119"},
		{src:"images/3d3/sxxcl_yz0120.jpg", id:"sxxcl_yz0120"},
		{src:"images/3d3/sxxcl_yz0121.jpg", id:"sxxcl_yz0121"},
		{src:"images/3d3/sxxcl_yz0122.jpg", id:"sxxcl_yz0122"},
		{src:"images/3d3/sxxcl_yz0123.jpg", id:"sxxcl_yz0123"},
		{src:"images/3d3/sxxcl_yz0124.jpg", id:"sxxcl_yz0124"},
		{src:"images/3d3/sxxcl_yz0125.jpg", id:"sxxcl_yz0125"},
		{src:"images/3d3/sxxcl_yz0126.jpg", id:"sxxcl_yz0126"},
		{src:"images/3d3/sxxcl_yz0127.jpg", id:"sxxcl_yz0127"},
		{src:"images/3d3/sxxcl_yz0128.jpg", id:"sxxcl_yz0128"},
		{src:"images/3d3/sxxcl_yz0129.jpg", id:"sxxcl_yz0129"},
		{src:"images/3d3/sxxcl_yz0130.jpg", id:"sxxcl_yz0130"},
		{src:"images/3d3/sxxcl_yz0131.jpg", id:"sxxcl_yz0131"},
		{src:"images/3d3/sxxcl_yz0132.jpg", id:"sxxcl_yz0132"},
		{src:"images/3d3/sxxcl_yz0133.jpg", id:"sxxcl_yz0133"},
		{src:"images/3d3/sxxcl_yz0134.jpg", id:"sxxcl_yz0134"},
		{src:"images/3d3/sxxcl_yz0135.jpg", id:"sxxcl_yz0135"},
		{src:"images/3d3/sxxcl_yz0136.jpg", id:"sxxcl_yz0136"},
		{src:"images/3d3/sxxcl_yz0137.jpg", id:"sxxcl_yz0137"},
		{src:"images/3d3/sxxcl_yz0138.jpg", id:"sxxcl_yz0138"},
		{src:"images/3d3/sxxcl_yz0139.jpg", id:"sxxcl_yz0139"},
		{src:"images/3d3/sxxcl_yz0140.jpg", id:"sxxcl_yz0140"},
		{src:"images/3d3/sxxcl_yz0141.jpg", id:"sxxcl_yz0141"},
		{src:"images/3d3/sxxcl_yz0142.jpg", id:"sxxcl_yz0142"},
		{src:"images/3d3/sxxcl_yz0143.jpg", id:"sxxcl_yz0143"},
		{src:"images/3d3/sxxcl_yz0144.jpg", id:"sxxcl_yz0144"},
		{src:"images/3d3/sxxcl_yz0145.jpg", id:"sxxcl_yz0145"},
		{src:"images/3d3/sxxcl_yz0146.jpg", id:"sxxcl_yz0146"},
		{src:"images/3d3/sxxcl_yz0147.jpg", id:"sxxcl_yz0147"},
		{src:"images/3d3/sxxcl_yz0148.jpg", id:"sxxcl_yz0148"},
		{src:"images/3d3/sxxcl_yz0149.jpg", id:"sxxcl_yz0149"},
		{src:"images/3d3/sxxcl_yz0150.jpg", id:"sxxcl_yz0150"},
		{src:"images/3d3/sxxcl_yz0151.jpg", id:"sxxcl_yz0151"},
		{src:"images/3d3/sxxcl_yz0152.jpg", id:"sxxcl_yz0152"},
		{src:"images/3d3/sxxcl_yz0153.jpg", id:"sxxcl_yz0153"},
		{src:"images/3d3/sxxcl_yz0154.jpg", id:"sxxcl_yz0154"},
		{src:"images/3d3/sxxcl_yz0155.jpg", id:"sxxcl_yz0155"},
		{src:"images/3d3/sxxcl_yz0156.jpg", id:"sxxcl_yz0156"},
		{src:"images/3d3/sxxcl_yz0157.jpg", id:"sxxcl_yz0157"},
		{src:"images/3d3/sxxcl_yz0158.jpg", id:"sxxcl_yz0158"},
		{src:"images/3d3/sxxcl_yz0159.jpg", id:"sxxcl_yz0159"},
		{src:"images/3d3/sxxcl_yz0160.jpg", id:"sxxcl_yz0160"},
		{src:"images/3d3/sxxcl_yz0161.jpg", id:"sxxcl_yz0161"},
		{src:"images/3d3/sxxcl_yz0162.jpg", id:"sxxcl_yz0162"},
		{src:"images/3d3/sxxcl_yz0163.jpg", id:"sxxcl_yz0163"},
		{src:"images/3d3/sxxcl_yz0164.jpg", id:"sxxcl_yz0164"},
		{src:"images/3d3/sxxcl_yz0165.jpg", id:"sxxcl_yz0165"},
		{src:"images/3d3/sxxcl_yz0166.jpg", id:"sxxcl_yz0166"},
		{src:"images/3d3/sxxcl_yz0167.jpg", id:"sxxcl_yz0167"},
		{src:"images/3d3/sxxcl_yz0168.jpg", id:"sxxcl_yz0168"},
		{src:"images/3d3/sxxcl_yz0169.jpg", id:"sxxcl_yz0169"},
		{src:"images/3d3/sxxcl_yz0170.jpg", id:"sxxcl_yz0170"},
		{src:"images/3d3/sxxcl_yz0171.jpg", id:"sxxcl_yz0171"},
		{src:"images/3d3/sxxcl_yz0172.jpg", id:"sxxcl_yz0172"},
		{src:"images/3d3/sxxcl_yz0173.jpg", id:"sxxcl_yz0173"},
		{src:"images/3d3/sxxcl_yz0174.jpg", id:"sxxcl_yz0174"},
		{src:"images/3d3/sxxcl_yz0175.jpg", id:"sxxcl_yz0175"},
		{src:"images/3d3/sxxcl_yz0176.jpg", id:"sxxcl_yz0176"},
		{src:"images/3d3/sxxcl_yz0177.jpg", id:"sxxcl_yz0177"},
		{src:"images/3d3/sxxcl_yz0178.jpg", id:"sxxcl_yz0178"},
		{src:"images/3d3/sxxcl_yz0179.jpg", id:"sxxcl_yz0179"},
		{src:"images/3d3/sxxcl_yz0180.jpg", id:"sxxcl_yz0180"},
		{src:"images/3d3/sxxcl_yz0181.jpg", id:"sxxcl_yz0181"},
		{src:"images/3d3/sxxcl_yz0182.jpg", id:"sxxcl_yz0182"},
		{src:"images/3d3/sxxcl_yz0183.jpg", id:"sxxcl_yz0183"},
		{src:"images/3d3/sxxcl_yz0184.jpg", id:"sxxcl_yz0184"},
		{src:"images/3d3/sxxcl_yz0185.jpg", id:"sxxcl_yz0185"},
		{src:"images/3d3/sxxcl_yz0186.jpg", id:"sxxcl_yz0186"},
		{src:"images/3d3/sxxcl_yz0187.jpg", id:"sxxcl_yz0187"},
		{src:"images/3d3/sxxcl_yz0188.jpg", id:"sxxcl_yz0188"},
		{src:"images/3d3/sxxcl_yz0189.jpg", id:"sxxcl_yz0189"},
		{src:"images/3d3/sxxcl_yz0190.jpg", id:"sxxcl_yz0190"},
		{src:"images/3d3/sxxcl_yz0191.jpg", id:"sxxcl_yz0191"},
		{src:"images/3d3/sxxcl_yz0192.jpg", id:"sxxcl_yz0192"},
		{src:"images/3d3/sxxcl_yz0193.jpg", id:"sxxcl_yz0193"},
		{src:"images/3d3/sxxcl_yz0194.jpg", id:"sxxcl_yz0194"},
		{src:"images/3d3/sxxcl_yz0195.jpg", id:"sxxcl_yz0195"},
		{src:"images/3d3/sxxcl_yz0196.jpg", id:"sxxcl_yz0196"},
		{src:"images/3d3/sxxcl_yz0197.jpg", id:"sxxcl_yz0197"},
		{src:"images/3d3/sxxcl_yz0198.jpg", id:"sxxcl_yz0198"},
		{src:"images/3d3/sxxcl_yz0199.jpg", id:"sxxcl_yz0199"},
		{src:"images/3d3/sxxcl_yz0200.jpg", id:"sxxcl_yz0200"}
	],
	preloads: []
};




})(lib3d3 = lib3d3||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3d3, images, createjs, ss, AdobeAn;