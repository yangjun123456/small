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



(lib.dxxcl_bzt_zk0000 = function() {
	this.initialize(img.dxxcl_bzt_zk0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0001 = function() {
	this.initialize(img.dxxcl_bzt_zk0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0002 = function() {
	this.initialize(img.dxxcl_bzt_zk0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0003 = function() {
	this.initialize(img.dxxcl_bzt_zk0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0004 = function() {
	this.initialize(img.dxxcl_bzt_zk0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0005 = function() {
	this.initialize(img.dxxcl_bzt_zk0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0006 = function() {
	this.initialize(img.dxxcl_bzt_zk0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0007 = function() {
	this.initialize(img.dxxcl_bzt_zk0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0008 = function() {
	this.initialize(img.dxxcl_bzt_zk0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0009 = function() {
	this.initialize(img.dxxcl_bzt_zk0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0010 = function() {
	this.initialize(img.dxxcl_bzt_zk0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0011 = function() {
	this.initialize(img.dxxcl_bzt_zk0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0012 = function() {
	this.initialize(img.dxxcl_bzt_zk0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0013 = function() {
	this.initialize(img.dxxcl_bzt_zk0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0014 = function() {
	this.initialize(img.dxxcl_bzt_zk0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0015 = function() {
	this.initialize(img.dxxcl_bzt_zk0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0016 = function() {
	this.initialize(img.dxxcl_bzt_zk0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0017 = function() {
	this.initialize(img.dxxcl_bzt_zk0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0018 = function() {
	this.initialize(img.dxxcl_bzt_zk0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0019 = function() {
	this.initialize(img.dxxcl_bzt_zk0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0020 = function() {
	this.initialize(img.dxxcl_bzt_zk0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0021 = function() {
	this.initialize(img.dxxcl_bzt_zk0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0022 = function() {
	this.initialize(img.dxxcl_bzt_zk0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0023 = function() {
	this.initialize(img.dxxcl_bzt_zk0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0024 = function() {
	this.initialize(img.dxxcl_bzt_zk0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0025 = function() {
	this.initialize(img.dxxcl_bzt_zk0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0026 = function() {
	this.initialize(img.dxxcl_bzt_zk0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0027 = function() {
	this.initialize(img.dxxcl_bzt_zk0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0028 = function() {
	this.initialize(img.dxxcl_bzt_zk0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0029 = function() {
	this.initialize(img.dxxcl_bzt_zk0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0030 = function() {
	this.initialize(img.dxxcl_bzt_zk0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0031 = function() {
	this.initialize(img.dxxcl_bzt_zk0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0032 = function() {
	this.initialize(img.dxxcl_bzt_zk0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0033 = function() {
	this.initialize(img.dxxcl_bzt_zk0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0034 = function() {
	this.initialize(img.dxxcl_bzt_zk0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0035 = function() {
	this.initialize(img.dxxcl_bzt_zk0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0036 = function() {
	this.initialize(img.dxxcl_bzt_zk0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0037 = function() {
	this.initialize(img.dxxcl_bzt_zk0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0038 = function() {
	this.initialize(img.dxxcl_bzt_zk0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0039 = function() {
	this.initialize(img.dxxcl_bzt_zk0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0040 = function() {
	this.initialize(img.dxxcl_bzt_zk0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0041 = function() {
	this.initialize(img.dxxcl_bzt_zk0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0042 = function() {
	this.initialize(img.dxxcl_bzt_zk0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0043 = function() {
	this.initialize(img.dxxcl_bzt_zk0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0044 = function() {
	this.initialize(img.dxxcl_bzt_zk0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0045 = function() {
	this.initialize(img.dxxcl_bzt_zk0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0046 = function() {
	this.initialize(img.dxxcl_bzt_zk0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0047 = function() {
	this.initialize(img.dxxcl_bzt_zk0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0048 = function() {
	this.initialize(img.dxxcl_bzt_zk0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0049 = function() {
	this.initialize(img.dxxcl_bzt_zk0049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_bzt_zk0050 = function() {
	this.initialize(img.dxxcl_bzt_zk0050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


(lib.dxxcl_yz_0000 = function() {
	this.initialize(img.dxxcl_yz_0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0001 = function() {
	this.initialize(img.dxxcl_yz_0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0002 = function() {
	this.initialize(img.dxxcl_yz_0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0003 = function() {
	this.initialize(img.dxxcl_yz_0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0004 = function() {
	this.initialize(img.dxxcl_yz_0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0005 = function() {
	this.initialize(img.dxxcl_yz_0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0006 = function() {
	this.initialize(img.dxxcl_yz_0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0007 = function() {
	this.initialize(img.dxxcl_yz_0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0008 = function() {
	this.initialize(img.dxxcl_yz_0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0009 = function() {
	this.initialize(img.dxxcl_yz_0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0010 = function() {
	this.initialize(img.dxxcl_yz_0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0011 = function() {
	this.initialize(img.dxxcl_yz_0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0012 = function() {
	this.initialize(img.dxxcl_yz_0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0013 = function() {
	this.initialize(img.dxxcl_yz_0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0014 = function() {
	this.initialize(img.dxxcl_yz_0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0015 = function() {
	this.initialize(img.dxxcl_yz_0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0016 = function() {
	this.initialize(img.dxxcl_yz_0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0017 = function() {
	this.initialize(img.dxxcl_yz_0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0018 = function() {
	this.initialize(img.dxxcl_yz_0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0019 = function() {
	this.initialize(img.dxxcl_yz_0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0020 = function() {
	this.initialize(img.dxxcl_yz_0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0021 = function() {
	this.initialize(img.dxxcl_yz_0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0022 = function() {
	this.initialize(img.dxxcl_yz_0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0023 = function() {
	this.initialize(img.dxxcl_yz_0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0024 = function() {
	this.initialize(img.dxxcl_yz_0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0025 = function() {
	this.initialize(img.dxxcl_yz_0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0026 = function() {
	this.initialize(img.dxxcl_yz_0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0027 = function() {
	this.initialize(img.dxxcl_yz_0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0028 = function() {
	this.initialize(img.dxxcl_yz_0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0029 = function() {
	this.initialize(img.dxxcl_yz_0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0030 = function() {
	this.initialize(img.dxxcl_yz_0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0031 = function() {
	this.initialize(img.dxxcl_yz_0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0032 = function() {
	this.initialize(img.dxxcl_yz_0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0033 = function() {
	this.initialize(img.dxxcl_yz_0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0034 = function() {
	this.initialize(img.dxxcl_yz_0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0035 = function() {
	this.initialize(img.dxxcl_yz_0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0036 = function() {
	this.initialize(img.dxxcl_yz_0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0037 = function() {
	this.initialize(img.dxxcl_yz_0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0038 = function() {
	this.initialize(img.dxxcl_yz_0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0039 = function() {
	this.initialize(img.dxxcl_yz_0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0040 = function() {
	this.initialize(img.dxxcl_yz_0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0041 = function() {
	this.initialize(img.dxxcl_yz_0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0042 = function() {
	this.initialize(img.dxxcl_yz_0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0043 = function() {
	this.initialize(img.dxxcl_yz_0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0044 = function() {
	this.initialize(img.dxxcl_yz_0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0045 = function() {
	this.initialize(img.dxxcl_yz_0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0046 = function() {
	this.initialize(img.dxxcl_yz_0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0047 = function() {
	this.initialize(img.dxxcl_yz_0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0048 = function() {
	this.initialize(img.dxxcl_yz_0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0049 = function() {
	this.initialize(img.dxxcl_yz_0049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0050 = function() {
	this.initialize(img.dxxcl_yz_0050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0051 = function() {
	this.initialize(img.dxxcl_yz_0051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0052 = function() {
	this.initialize(img.dxxcl_yz_0052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0053 = function() {
	this.initialize(img.dxxcl_yz_0053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0054 = function() {
	this.initialize(img.dxxcl_yz_0054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0055 = function() {
	this.initialize(img.dxxcl_yz_0055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0056 = function() {
	this.initialize(img.dxxcl_yz_0056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0057 = function() {
	this.initialize(img.dxxcl_yz_0057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0058 = function() {
	this.initialize(img.dxxcl_yz_0058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0059 = function() {
	this.initialize(img.dxxcl_yz_0059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0060 = function() {
	this.initialize(img.dxxcl_yz_0060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0061 = function() {
	this.initialize(img.dxxcl_yz_0061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0062 = function() {
	this.initialize(img.dxxcl_yz_0062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0063 = function() {
	this.initialize(img.dxxcl_yz_0063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0064 = function() {
	this.initialize(img.dxxcl_yz_0064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0065 = function() {
	this.initialize(img.dxxcl_yz_0065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0066 = function() {
	this.initialize(img.dxxcl_yz_0066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0067 = function() {
	this.initialize(img.dxxcl_yz_0067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0068 = function() {
	this.initialize(img.dxxcl_yz_0068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0069 = function() {
	this.initialize(img.dxxcl_yz_0069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0070 = function() {
	this.initialize(img.dxxcl_yz_0070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0071 = function() {
	this.initialize(img.dxxcl_yz_0071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0072 = function() {
	this.initialize(img.dxxcl_yz_0072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0073 = function() {
	this.initialize(img.dxxcl_yz_0073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0074 = function() {
	this.initialize(img.dxxcl_yz_0074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0075 = function() {
	this.initialize(img.dxxcl_yz_0075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0076 = function() {
	this.initialize(img.dxxcl_yz_0076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0077 = function() {
	this.initialize(img.dxxcl_yz_0077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0078 = function() {
	this.initialize(img.dxxcl_yz_0078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0079 = function() {
	this.initialize(img.dxxcl_yz_0079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0080 = function() {
	this.initialize(img.dxxcl_yz_0080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0081 = function() {
	this.initialize(img.dxxcl_yz_0081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0082 = function() {
	this.initialize(img.dxxcl_yz_0082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0083 = function() {
	this.initialize(img.dxxcl_yz_0083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0084 = function() {
	this.initialize(img.dxxcl_yz_0084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0085 = function() {
	this.initialize(img.dxxcl_yz_0085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0086 = function() {
	this.initialize(img.dxxcl_yz_0086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0087 = function() {
	this.initialize(img.dxxcl_yz_0087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0088 = function() {
	this.initialize(img.dxxcl_yz_0088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0089 = function() {
	this.initialize(img.dxxcl_yz_0089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0090 = function() {
	this.initialize(img.dxxcl_yz_0090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0091 = function() {
	this.initialize(img.dxxcl_yz_0091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0092 = function() {
	this.initialize(img.dxxcl_yz_0092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0093 = function() {
	this.initialize(img.dxxcl_yz_0093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0094 = function() {
	this.initialize(img.dxxcl_yz_0094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0095 = function() {
	this.initialize(img.dxxcl_yz_0095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0096 = function() {
	this.initialize(img.dxxcl_yz_0096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0097 = function() {
	this.initialize(img.dxxcl_yz_0097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0098 = function() {
	this.initialize(img.dxxcl_yz_0098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0099 = function() {
	this.initialize(img.dxxcl_yz_0099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0100 = function() {
	this.initialize(img.dxxcl_yz_0100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0101 = function() {
	this.initialize(img.dxxcl_yz_0101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0102 = function() {
	this.initialize(img.dxxcl_yz_0102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0103 = function() {
	this.initialize(img.dxxcl_yz_0103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0104 = function() {
	this.initialize(img.dxxcl_yz_0104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0105 = function() {
	this.initialize(img.dxxcl_yz_0105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0106 = function() {
	this.initialize(img.dxxcl_yz_0106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0107 = function() {
	this.initialize(img.dxxcl_yz_0107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0108 = function() {
	this.initialize(img.dxxcl_yz_0108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0109 = function() {
	this.initialize(img.dxxcl_yz_0109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0110 = function() {
	this.initialize(img.dxxcl_yz_0110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0111 = function() {
	this.initialize(img.dxxcl_yz_0111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0112 = function() {
	this.initialize(img.dxxcl_yz_0112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0113 = function() {
	this.initialize(img.dxxcl_yz_0113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0114 = function() {
	this.initialize(img.dxxcl_yz_0114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0115 = function() {
	this.initialize(img.dxxcl_yz_0115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0116 = function() {
	this.initialize(img.dxxcl_yz_0116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0117 = function() {
	this.initialize(img.dxxcl_yz_0117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0118 = function() {
	this.initialize(img.dxxcl_yz_0118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0119 = function() {
	this.initialize(img.dxxcl_yz_0119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0120 = function() {
	this.initialize(img.dxxcl_yz_0120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0121 = function() {
	this.initialize(img.dxxcl_yz_0121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0122 = function() {
	this.initialize(img.dxxcl_yz_0122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0123 = function() {
	this.initialize(img.dxxcl_yz_0123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0124 = function() {
	this.initialize(img.dxxcl_yz_0124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0125 = function() {
	this.initialize(img.dxxcl_yz_0125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0126 = function() {
	this.initialize(img.dxxcl_yz_0126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0127 = function() {
	this.initialize(img.dxxcl_yz_0127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0128 = function() {
	this.initialize(img.dxxcl_yz_0128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0129 = function() {
	this.initialize(img.dxxcl_yz_0129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0130 = function() {
	this.initialize(img.dxxcl_yz_0130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0131 = function() {
	this.initialize(img.dxxcl_yz_0131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0132 = function() {
	this.initialize(img.dxxcl_yz_0132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0133 = function() {
	this.initialize(img.dxxcl_yz_0133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0134 = function() {
	this.initialize(img.dxxcl_yz_0134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0135 = function() {
	this.initialize(img.dxxcl_yz_0135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0136 = function() {
	this.initialize(img.dxxcl_yz_0136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0137 = function() {
	this.initialize(img.dxxcl_yz_0137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0138 = function() {
	this.initialize(img.dxxcl_yz_0138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0139 = function() {
	this.initialize(img.dxxcl_yz_0139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0140 = function() {
	this.initialize(img.dxxcl_yz_0140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0141 = function() {
	this.initialize(img.dxxcl_yz_0141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0142 = function() {
	this.initialize(img.dxxcl_yz_0142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0143 = function() {
	this.initialize(img.dxxcl_yz_0143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0144 = function() {
	this.initialize(img.dxxcl_yz_0144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0145 = function() {
	this.initialize(img.dxxcl_yz_0145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0146 = function() {
	this.initialize(img.dxxcl_yz_0146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0147 = function() {
	this.initialize(img.dxxcl_yz_0147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0148 = function() {
	this.initialize(img.dxxcl_yz_0148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0149 = function() {
	this.initialize(img.dxxcl_yz_0149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0150 = function() {
	this.initialize(img.dxxcl_yz_0150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0151 = function() {
	this.initialize(img.dxxcl_yz_0151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0152 = function() {
	this.initialize(img.dxxcl_yz_0152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0153 = function() {
	this.initialize(img.dxxcl_yz_0153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0154 = function() {
	this.initialize(img.dxxcl_yz_0154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0155 = function() {
	this.initialize(img.dxxcl_yz_0155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0156 = function() {
	this.initialize(img.dxxcl_yz_0156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0157 = function() {
	this.initialize(img.dxxcl_yz_0157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0158 = function() {
	this.initialize(img.dxxcl_yz_0158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0159 = function() {
	this.initialize(img.dxxcl_yz_0159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0160 = function() {
	this.initialize(img.dxxcl_yz_0160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0161 = function() {
	this.initialize(img.dxxcl_yz_0161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0162 = function() {
	this.initialize(img.dxxcl_yz_0162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0163 = function() {
	this.initialize(img.dxxcl_yz_0163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0164 = function() {
	this.initialize(img.dxxcl_yz_0164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0165 = function() {
	this.initialize(img.dxxcl_yz_0165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0166 = function() {
	this.initialize(img.dxxcl_yz_0166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0167 = function() {
	this.initialize(img.dxxcl_yz_0167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0168 = function() {
	this.initialize(img.dxxcl_yz_0168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0169 = function() {
	this.initialize(img.dxxcl_yz_0169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0170 = function() {
	this.initialize(img.dxxcl_yz_0170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0171 = function() {
	this.initialize(img.dxxcl_yz_0171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0172 = function() {
	this.initialize(img.dxxcl_yz_0172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0173 = function() {
	this.initialize(img.dxxcl_yz_0173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0174 = function() {
	this.initialize(img.dxxcl_yz_0174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0175 = function() {
	this.initialize(img.dxxcl_yz_0175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0176 = function() {
	this.initialize(img.dxxcl_yz_0176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0177 = function() {
	this.initialize(img.dxxcl_yz_0177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0178 = function() {
	this.initialize(img.dxxcl_yz_0178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0179 = function() {
	this.initialize(img.dxxcl_yz_0179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0180 = function() {
	this.initialize(img.dxxcl_yz_0180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0181 = function() {
	this.initialize(img.dxxcl_yz_0181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0182 = function() {
	this.initialize(img.dxxcl_yz_0182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0183 = function() {
	this.initialize(img.dxxcl_yz_0183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0184 = function() {
	this.initialize(img.dxxcl_yz_0184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0185 = function() {
	this.initialize(img.dxxcl_yz_0185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0186 = function() {
	this.initialize(img.dxxcl_yz_0186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0187 = function() {
	this.initialize(img.dxxcl_yz_0187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0188 = function() {
	this.initialize(img.dxxcl_yz_0188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0189 = function() {
	this.initialize(img.dxxcl_yz_0189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0190 = function() {
	this.initialize(img.dxxcl_yz_0190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0191 = function() {
	this.initialize(img.dxxcl_yz_0191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0192 = function() {
	this.initialize(img.dxxcl_yz_0192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0193 = function() {
	this.initialize(img.dxxcl_yz_0193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0194 = function() {
	this.initialize(img.dxxcl_yz_0194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0195 = function() {
	this.initialize(img.dxxcl_yz_0195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0196 = function() {
	this.initialize(img.dxxcl_yz_0196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0197 = function() {
	this.initialize(img.dxxcl_yz_0197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0198 = function() {
	this.initialize(img.dxxcl_yz_0198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0199 = function() {
	this.initialize(img.dxxcl_yz_0199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.dxxcl_yz_0200 = function() {
	this.initialize(img.dxxcl_yz_0200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,586);


(lib.tabKuang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56646B").s().p("AFWCfIDQk9ICXAAIjRE9gAqvCfQgNAAAAgKIAAkpQAAgKANAAIDVAAIjQE9g");
	this.shape.setTransform(57.8,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F5158").s().p("AEkCfIDRk9IB0AAIjRE9gAkPCfIDQk9IByAAIjPE9gApoCfIDRk9IBlAAIjRE9g");
	this.shape_1.setTransform(51.1,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3A43").s().p("AJzCVIgEAAIj1AAIDQk+IA+AAQANAAAAAKIAAESIACAFIAiAygAlRCVIDQk+IHBAAIjRE+gAq4CVIDQk+ID0AAIjRE+g");
	this.shape_2.setTransform(69.3,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BD8228").s().p("ALzCvIhHgUIABAAIgDgBI2RAAQgTAAAAgPIAAkqQAAgPATAAIWqAAQATAAAAAPIAAETIACACIAjAyIAAACIgBADIgDACIgEAAgAr0ifIAAEqQAAAKANAAIAFAAIBlAAIDzAAIB0AAIHAAAIB0AAICXAAID1AAIAEABIBGAUIgigxIgCgFIAAkTQAAgJgNgBIg+AAIiXAAIhzAAInBAAIhzAAIj0AAIhlAAIjVAAQgNABAAAJg");
	this.shape_3.setTransform(63.4,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AMJC9IgBAAIhlgdIgDgBI2OAAIgFAAQgagCAAgXIAAkpQAAgZAfAAIWqAAQAeAAAAAZIAAEPQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABIAyBGIAAADIAAADIgDABIgCAAgALrCqIAEAAIAEgBIABgDIgBgDIgigxIgCgDIAAkSQAAgQgTAAI2qAAQgUAAAAAQIAAEpQAAAQAUAAIWQAAIADABIAAAAg");
	this.shape_4.setTransform(64.1,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF8D2C").s().p("AMFDCIhlgdI2PAAIgJAAQgdgDAAgcIAAkpQAAgfAmAAIWqAAQAnAAAAAfIAAEPIAzBHQABADAAADQgBAEgCACQgDADgEABIgCAAIgFgBgAsOijIAAEpQAAAXAbACIAEAAIWPAAIACAAIBmAeIAAAAIACAAIADgBIABgEIAAgCIgzhHQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAkPQAAgZgfAAI2qAAQgfAAAAAZg");
	this.shape_5.setTransform(64.2,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,0,158,39);


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


(lib.fanBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333F48").s().p("AhPiIICfCFIifCMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-13.6,16.1,27.3);


(lib.model2MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.dxxcl_bzt_zk0000();
	this.instance.parent = this;

	this.instance_1 = new lib.dxxcl_bzt_zk0001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.dxxcl_bzt_zk0002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.dxxcl_bzt_zk0003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.dxxcl_bzt_zk0004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.dxxcl_bzt_zk0005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.dxxcl_bzt_zk0006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.dxxcl_bzt_zk0007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.dxxcl_bzt_zk0008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.dxxcl_bzt_zk0009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.dxxcl_bzt_zk0010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.dxxcl_bzt_zk0011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.dxxcl_bzt_zk0012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.dxxcl_bzt_zk0013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.dxxcl_bzt_zk0014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.dxxcl_bzt_zk0015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.dxxcl_bzt_zk0016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.dxxcl_bzt_zk0017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.dxxcl_bzt_zk0018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.dxxcl_bzt_zk0019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.dxxcl_bzt_zk0020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.dxxcl_bzt_zk0021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.dxxcl_bzt_zk0022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.dxxcl_bzt_zk0023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.dxxcl_bzt_zk0024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.dxxcl_bzt_zk0025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.dxxcl_bzt_zk0026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.dxxcl_bzt_zk0027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.dxxcl_bzt_zk0028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.dxxcl_bzt_zk0029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.dxxcl_bzt_zk0030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.dxxcl_bzt_zk0031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.dxxcl_bzt_zk0032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.dxxcl_bzt_zk0033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.dxxcl_bzt_zk0034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.dxxcl_bzt_zk0035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.dxxcl_bzt_zk0036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.dxxcl_bzt_zk0037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.dxxcl_bzt_zk0038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.dxxcl_bzt_zk0039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.dxxcl_bzt_zk0040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.dxxcl_bzt_zk0041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.dxxcl_bzt_zk0042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.dxxcl_bzt_zk0043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.dxxcl_bzt_zk0044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.dxxcl_bzt_zk0045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.dxxcl_bzt_zk0046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.dxxcl_bzt_zk0047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.dxxcl_bzt_zk0048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.dxxcl_bzt_zk0049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.dxxcl_bzt_zk0050();
	this.instance_50.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,500);


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


(lib.modelMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BGIgDgNIATABQAKAAgBgJIAAgnIggAKIgEgMIAkgIIAAgYIAXgaIg0AAIAAgLIBDAAIAAALIgaAeIAAARIAdgIIgBALIgcAIIAAAsQAAARgSABIgTAAgAAhBFQgSAAAAgTIAAh3IAMAAIAAB0QAAAKAKAAIALAAQAJAAACgKIABgcIANAFIgEAeQgCAPgSAAg");
	this.shape.setTransform(236.7,304.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBIIAAh1IApAAIAAgaIALAAIAAAaIArAAIAAB0IgMAAIAAgJIhIAAIAAAKgAAcA0IAfAAIAAgoIgfAAgAgNA0IAeAAIAAgoIgeAAgAAcABIAfAAIAAgkIgfAAgAgNABIAeAAIAAgkIgeAAgAhCBCQAKgaAHgcIAMAGIgRA1gAhGgVIAHgJIAaAUIgJAKIgYgVgAg/g8IAHgIIAaAVIgJAJIgYgWg");
	this.shape_1.setTransform(221.2,304.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BJIAAg7IAwAAIAHgOIgyAAIAAgpIALAAIAAAhIBZAAIAAghIALAAIAAAvIgLAAIAAgGIgnAAIgGAOIA9AAIAAAqQAAAQgOAAIgQgBIgCgLIAOABQAHAAAAgHIAAgfIg3AAIgNATIAigBIgIgIIAHgGIAWAXIgHAHIgHgHIgnACIgPACIgDgKQAGgEAEgGIAHgLIggAAIAAAygAgngSIAegKIgbgJIAEgIIAiANQAPgGAOgHIAEAHIgVAKIAXAIIgEAJIgegMIgkANIgGgIgAhFgvIAAgKIBAAAIgHgKIAMgFIAIAPIA+AAIAAAKg");
	this.shape_2.setTransform(206.1,304.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEA/QAYgJALgRQAHgNACgUIgdAAIAAgLIBgAAIgCAwQgBAbgZABIgYgBIgCgNQALACANAAQAPAAACgRIABgkIgsAAQgBAYgJAPQgLAUgaAKIgIgKgAhJgLQAegWAWglIAKAGQgWAnggAYIgIgKgAAGhDIALgFQARAnAoAUQgHAHgCAEQgpgXgSgqg");
	this.shape_3.setTransform(190.8,304.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBDIAAgIIgfAAIAAAIIgKAAIAAgtIAuAAQgqgGgLgTIgBAAQgJAQgtAJIAvAAIAAAtIgKAAIAAgIIgfAAIAAAIIgLAAIAAgtIgIACIgFgKQAxgHAJgKIg1AAIAAgKIA7AAQADgFAAgHIAKABQgBAHgCAEIAhAAIgNgIIAGgHQAKAGAIAGIgDADIAbAAIAAAKIg5AAQARAPArAAIgGALIgHgBIAAAtgAASAyIAfAAIAAgTIgfAAgAgwAyIAfAAIAAgTIgfAAgAg7gWIAAgsIA0AAIAAArIgKAAIAAgFIggAAIAAAGgAgxglIAgAAIAAgUIggAAgAAxgWIAAgGIgfAAIAAAFIgKAAIAAgrIA0AAIAAAsgAASglIAfAAIAAgUIgfAAg");
	this.shape_4.setTransform(175.5,304.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBIIAAgKIhPAAIAAAKIgLAAIAAhCIBlAAIAABCgAgnAzIBPAAIAAgiIhPAAgAhIgQQAtgWAYggIAPAAIgEADQAZAgAoARIgHALQgMgGgLgGIAAAHIhVAAIAAgGIgXANIgHgLgAgmgWIBOAAQgXgPgQgVQgPAUgYAQg");
	this.shape_5.setTransform(160.2,304.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BJIAAg7IAwAAIAHgOIgyAAIAAgpIALAAIAAAhIBZAAIAAghIALAAIAAAvIgLAAIAAgGIgnAAIgGAOIA9AAIAAAqQAAAQgOAAIgQgBIgCgLIAOABQAHAAAAgHIAAgfIg3AAIgNATIAigBIgIgIIAHgGIAWAXIgHAHIgHgHIgnACIgOACIgEgKQAGgEAEgGIAHgLIggAAIAAAygAgngSIAegKIgbgJIAEgIIAiANQAPgGAOgHIAEAHIgVAKIAXAIIgEAJIgegMIgkANIgGgIgAhFgvIAAgKIBAAAIgHgKIAMgFIAIAPIA+AAIAAAKg");
	this.shape_6.setTransform(144.9,304.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBCIAAgMIAaAAIAAhcIANAAIAABcIAjAAIAAh3IAMAAIAAArIAxAAIAAALIgxAAIAABBIA5AAIAAAMg");
	this.shape_7.setTransform(129.6,303.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA/QAtgMACgjIAAgbIAMAAQAAAigDAJQAXAPAWAPIgIAJQgVgQgUgNQgNAVggAKIgHgKgAg3A5QAFgEgBgHIAAgfIgTAAIAAgKIATAAIAAgTIgKAAIAAgKIAmAAIAAAKIgRAAIAAATIAUAAIAAAKIgUAAIAAAiIAUgKIABAMIgXAMIgFAFgAA3AmIAAg5Ig7AAIAAA5IgLAAIAAhEIAiAAIAAgpIALAAIAAApIAkAAIAABEgAhIgbQAOgUAJgZIALADIgIATIAaAAIAAAKIggAAIgNAXIgHgKgAArgnQAKgNAIgMIALAGIgUAagAgTg6IAIgGQAKALAIAOIgJAGIgRgZg");
	this.shape_8.setTransform(114.3,304.5);

	this.instance = new lib.tabMC();
	this.instance.parent = this;
	this.instance.setTransform(264,266.9,0.534,0.534,0,0,0,0,0.1);

	this.instance_1 = new lib.tabKuang("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.9,323.2,1,1,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBIIAAgfIgdAEIgBgLIAegDIAAgbIgbAAIAAgJIANghIgPAAIAAgLIASAAIAHgWIALACIgHAUIAaAAIAAALIgdAAIgNAhIAQAAIAAgaIAKAAIAAAaIAOAAIAAAJIgOAAIAAAZIAQgCIgBALIgPABIAAAhgAA7BIIAAgKIg2AAIAAAKIgKAAIAAhyIAfAAIAAgbIALAAIAAAbIAgAAIAABygAAlA0IAWAAIAAglIgWAAgAAFA0IAVAAIAAglIgVAAgAAlAEIAWAAIAAgkIgWAAgAAFAEIAVAAIAAgkIgVAAg");
	this.shape_9.setTransform(446.1,221.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIA7QAvgeARhBQgMgSgLgIIAJgGQARAKASApQAcA8AgANIgKAMQgggSgcg9IgDgJQgRA5guAgIgJgKg");
	this.shape_10.setTransform(431.2,221.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBIIAAgfIgZADIgBgKIAagDIAAgWIgYAAIAAgJQAFgPAHgYIgOAAIAAgKIAQAAIAFgWIALACIgGAUIAbAAIAAAKIgdAAIgMAnIAOAAIAAgaIAJAAIAAAaIAOAAIAAAJIgOAAIAAAVIAQgDIgBAKIgPACIAAAhgAgSBIIAAhWIAmAAIAABIQAAAMgMAAIgKAAIgCgJIAKABQAEAAAAgGIAAgRIgTAAIAAAhgAgJAfIATAAIAAgOIgTAAgAgJAIIATAAIAAgNIgTAAgAAiBGIgCgLIAPABQAIAAgBgHIAAhFIAKAAIAABGQAAAQgNABIgRgBgAAgArIAAg0IAKAAIAAA0gAgcgcQAcgRARgZIAQAAIgCADQARAaAZALIgIAKQgJgGgJgHIAAAIIgxAAIAAgHIgSANIgIgJgAAAgjIAtAAQgMgKgKgPQgLAOgMALg");
	this.shape_11.setTransform(416,221.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA1BIIAAgIIgyAAIAAAIIgJAAIAAhgIBGAAIAABggAADA1IAyAAIAAgRIgyAAgAADAbIAyAAIAAgRIgyAAgAADABIAyAAIAAgPIgyAAgAgtBIIAAg5QgIAVgNARIgFgMQASgWAGgVIgUAAIAAgKIAWAAIAAgTIALAAIAAATIAUAAIAAAKIgUAAIAAAQIAEgFIATARIgIAHIgPgQIAAA3gAAcgpIAHgGIgOAAQgHALgHAIIgIgIQAMgMAJgXIAMAAIgHAOIAvAAIAAAKIgkAAQAIAHAFAIIgIAGQgGgJgHgGgAhHghQASgPALgXIAMAAQgEAIgEAGIAqAAIAAAKIggAAIANANIgIAGIgNgOIAHgFIgPAAQgJAMgLAJIgHgHg");
	this.shape_12.setTransform(400.5,221.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIA7IATgSIAAgwIgSAAIAAgLIAdAAIAAA+QAJAOAWAAQAjABAxgCIgEAMQgxABgigBQgYAAgKgRQgGAFgMAOgAAOA1IAAglQgQATgXANIgIgJQAagNASgTIgWAAIAAAEIgKAAIAAgoIAjAAIAAgPIgqAAIAAgKIAqAAIAAgQIALAAIAAAQIAuAAIAAAKIguAAIAAAPIAlAAIAAAoIgLAAIAAgEIgaAAIAAALIAEgHIAqAYIgHAKQgVgNgSgLIAAAggAAZgBIAaAAIAAgTIgaAAgAgLgBIAZAAIAAgTIgZAAgAhAg9IAJgHIAVAcIgLAHIgTgcg");
	this.shape_13.setTransform(385.3,221.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhIA+QAngHAXgKQgQgMgMgTIgRAAIAAgKIBjAAIAAAKQgOASgTANQAXAMAnACIgJANQgngFgZgQQgZANgnAJIgIgLgAAAAnQARgKANgPIg3AAQALAQAOAJgAhHgEQAPgNAOgRIAJAHQgPASgPANIgIgIgAAggbIAIgHQASARAMANIgJAHQgOgPgPgPgAALgCIAAgoIgWAAIAAAoIgLAAIAAgoIgvAAIAAgLIBDAAIgIgOIAKgFIAJAQIgGADIBDAAIAAALIgvAAIAAAog");
	this.shape_14.setTransform(370,221.4);

	this.instance_2 = new lib.tabMC();
	this.instance_2.parent = this;
	this.instance_2.setTransform(314.7,245.5,0.534,0.534,0,0,0,0,0.1);

	this.instance_3 = new lib.tabKuang("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(472.7,204,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEBJIAAguQgZAbgjAOIgIgKQAhgMAagWIg4AAIAAgKIBBAAIAAgPIAJAAIAAAPIBCAAIAAAKIg5AAQAXAXAkAIIgJALQgkgMgXgbIAAAugAhIgBQAWgRADgbIgUAAIAAgKIAUAAIABgRIALAAIgBARIAhAAIgBAhQgBANgFAFQgDAEgLAAIgMAAIgCgLIAOABQAIAAABgJIACgaIgXAAQgBAfgbAVIgIgIgAAzgBIAAgHIgfAAIAAAHIgLAAIAAg6IA1AAIAAA6gAAUgSIAfAAIAAgfIgfAAg");
	this.shape_15.setTransform(107.9,408);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBCIAAgKIBCAAIAAgPIgwAAIAAgKIAwAAIAAgOIgrAAQgIANgKAKIgJgIQARgRAMgVIALAEIgGAJIAkAAIAAgMIAKAAIAAAMIA4AAIAAAKIg4AAIAAAOIA0AAIAAAKIg0AAIAAAPIA+AAIAAAKgAAtgEIAAgFIhiAAIAAg4IBuAAIAAA9gAgqgTIBXAAIAAgNIhXAAgAgqgqIBXAAIAAgNIhXAAg");
	this.shape_16.setTransform(92.6,408);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBIIAAg+IgTASIgFgMQAXgRASgiIALAGQgIANgIAMIAABMgAABBGIgBgNIAWABQAKAAAAgKIAAg1IgzAAIAAgLIBcAAIAAALIgdAAIAAA5QAAASgSAAIgZAAgAhHgdQAXgSAOgYIALAGQgRAagZAVIgGgLgAgKgxIAAgLIBLAAIAAALg");
	this.shape_17.setTransform(77.3,407.9);

	this.instance_4 = new lib.tabMC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.4,435.6,0.534,0.534,0,0,0,0,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3F5158").s().p("AEkCfIDRk9IB0AAIjRE9gAkPCfIDQk9IByAAIjPE9gApoCfIDRk9IBlAAIjRE9g");
	this.shape_18.setTransform(81,409.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3A43").s().p("AJzCVIgEAAIj1AAIDQk+IA+AAQANAAAAAKIAAESIACAFIAiAygAlRCVIDQk+IHBAAIjRE+gAq4CVIDQk+ID0AAIjRE+g");
	this.shape_19.setTransform(99.2,410.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#56646B").s().p("AFWCfIDQk9ICXAAIjQE9gAqvCfQgNAAAAgKIAAkpQAAgKANAAIDVAAIjQE9g");
	this.shape_20.setTransform(87.7,409.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BD8228").s().p("ALzCvIhHgUIABAAIgDgBI2RAAQgTABAAgRIAAkpQAAgPATAAIWqAAQATAAAAAPIAAETIACACIAjAyIAAADIgBACIgDACIgEAAgAr0ifIAAEpQAAALANAAIAFAAIBlAAIDzAAIB0AAIHAAAIB0AAICXAAID1AAIAEABIBGAUIgigyIgCgEIAAkTQAAgJgNgBIg+AAIiXAAIhzAAInBAAIhzAAIj0AAIhlAAIjVAAQgNABAAAJg");
	this.shape_21.setTransform(93.3,410.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC00").s().p("AMJC9IgBAAIhlgdIgDgBI2OAAIgFAAQgagCAAgXIAAkpQAAgZAfAAIWqAAQAeAAAAAZIAAEPQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAyBHIAAADIAAADIgDABIgCAAgALrCqIAEAAIAEgBIABgDIgBgDIgigxIgCgDIAAkSQAAgQgTAAI2qAAQgUAAAAAQIAAEpQAAAQAUAAIWQAAIADABIAAAAg");
	this.shape_22.setTransform(94,410.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CF8D2C").s().p("AMFDCIhlgdI2PAAIgJAAQgdgDAAgcIAAkpQAAgfAmAAIWqAAQAnAAAAAfIAAEPIAzBHQABADAAADQgBAEgCACQgDADgEABIgCAAIgFgBgAsOijIAAEpQAAAXAbACIAEAAIWPAAIACAAIBmAeIAAAAIACAAIADgBIABgEIAAgCIgzhHQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAkPQAAgZgfAAI2qAAQgfAAAAAZg");
	this.shape_23.setTransform(94.1,410.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoBIIAAgfIgfAEIgBgLIAggEIAAgVIgcAAIAAgJIANgnIgPAAIAAgJIASAAIAGgYIAMADIgHAVIAgAAIAAAJIgkAAIgNAnIASAAIAAggIAKAAIAAAgIATAAIAAAJIgTAAIAAAUIAUgDIAAALIgUADIAAAggAARBEQgRAAAAgRIAAhCIALAAIAAAgQASgLARgPIAJAHQgXATgVALIAAATQAAAJAKAAIATAAQALABABgJQACgKABgMIALAEIgDAWQgCAQgTAAgAgVgSQAagVAPggIAOAAIgDAFQARAgAZANIgIAJQgYgOgRgdQgQAcgVARIgIgIg");
	this.shape_24.setTransform(145.4,146.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhBBEIAAiHIAuAAIAAAKIgNAoQALARACALQAEAcgSADQgHACgJgBIgDgMQAIABAGAAQALgCgEgTQgCgLgLgOIANgrIgXAAIAAB9gAA2BEIAAgJIg1AAIAAAJIgLAAIAAiGIBMAAIAACGgAABAwIA1AAIAAgwIg1AAgAABgKIA1AAIAAgtIg1AAg");
	this.shape_25.setTransform(130.1,147.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhIA8QA5geAIg1Ig+AAIAAgMIA/AAIAAgjIALAAIAAAjIBBAAIAAAMIhAAAQAPA6A0AWIgLAMQgvgbgPgzQgLAyg0AeIgJgLgAgQApIAKgHIATAXIgKAIIgTgYg");
	this.shape_26.setTransform(114.8,146.7);

	this.instance_5 = new lib.tabMC();
	this.instance_5.parent = this;
	this.instance_5.setTransform(227.8,174.3,0.534,0.534,0,0,0,0,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AMJC9IgBAAIhlgeIgDAAI2OAAIgFAAQgagCAAgXIAAkpQAAgZAfAAIWqAAQAeAAAAAZIAAEPQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIAyBHIAAACIAAAEIgDABIgCAAgALrCrIAEAAIAEgCIABgDIgBgDIgigyIgCgCIAAkSQAAgPgTAAI2qAAQgUAAAAAPIAAEpQAAAQAUAAIWQAAIADAAIAAAAg");
	this.shape_27.setTransform(131.5,149.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CF8D2C").s().p("AMFDCIhlgdI2PAAIgJAAQgdgDAAgcIAAkpQAAgfAmAAIWqAAQAnAAAAAfIAAEPIAzBHQABADAAADQgBAEgCACQgDADgEABIgCAAIgFgBgAsOijIAAEpQAAAXAbACIAEAAIWPAAIACAAIBmAeIAAAAIACAAIADgBIABgEIAAgCIgzhHQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAkPQAAgZgfAAI2qAAQgfAAAAAZg");
	this.shape_28.setTransform(131.5,149.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A3A43").s().p("AJzCVIgEAAIj1AAIDQk+IA+AAQANAAAAAKIAAESIACAFIAiAygAlRCVIDQk+IHBAAIjRE+gAq4CVIDQk+ID0AAIjRE+g");
	this.shape_29.setTransform(136.6,149.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3F5158").s().p("AEkCfIDRk9IB0AAIjRE9gAkPCfIDQk9IByAAIjPE9gApoCfIDRk9IBlAAIjRE9g");
	this.shape_30.setTransform(118.5,148.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#56646B").s().p("AFWCfIDQk9ICXAAIjQE9gAqvCfQgNAAAAgKIAAkpQAAgKANAAIDVAAIjRE9g");
	this.shape_31.setTransform(125.2,148.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BD8228").s().p("ALzCvIhHgUIABAAIgDAAI2RAAQgTgBAAgQIAAkpQAAgPATAAIWqAAQATAAAAAPIAAETIACACIAjAxIAAAEIgBACIgDACIgEAAgAr0ifIAAEpQAAALANAAIAFAAIBlAAIDzAAIB0AAIHAAAIB0AAICXAAID1AAIAEAAIBGAVIgigyIgCgEIAAkTQAAgKgNABIg+AAIiXAAIhzAAInBAAIhzAAIj0AAIhlAAIjVAAQgNgBAAAKg");
	this.shape_32.setTransform(130.7,149.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAxBFIABgIIhjAAIACAIIgQAAIAAgCIABgLIAAhrIgBgJIAAgIQAGABANgBIBaAAIASAAIgBAQIAABvIABAKgAgxAzIBjAAIAAgtIAAhAIhjAAgAAOAqIgVAAQgUABACgLIAAgZQgKAJgFADIgIgKQAPgFAOgOIgGAAIgHABIgNAAIAAgJQAFABAOgBIAMAAIAEgJIgRAAIgNAAIAAgJIAEABIAIAAIADAAIgKgNIAKgFIAKAMIgIAGIAPAAIABgIIAAgMIAMACQAAABABAAQAAAAAAAAQABABgBAAQAAABAAAAIgBADIgDAJIgBADIAIAAIABgBQAHgLADgGQAOAEgBACIgDADIgLAJIADAAIAIAAIAHgBIAAAJIgHAAIgIAAIgWAAIgDAJIAbAAIASAAIAAAJIgHAAIgLgBIgKAAQANAMAWAEQgGAFgDAGQgJgDgLgJQAAANgEAEQgEAEgMABIgEgLQAIACADgCQACgBAAgIIgYAAIAAATQgCAJANgCIANAAQARADAAgRIALAFQgCASgRAAIgEAAgAgSABIAhAAQgGgEgEgHIgNAAIgKALg");
	this.shape_33.setTransform(390.4,181.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAqBJIAAgJIhJAAIgUABQACgEAAgNIAAglIgBgHIAAgEIAMAAIAEABIgBADQgCADAAAFIAAApIBPAAIAAgpIgBgNIAIABIAIAAIgCACIgBAKIAAAqIABATgAgiAnQAYgRAIgeQAPADAAACIgBADQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgEAHIgBABQAXAPALAJIgLALQgGgHgVgSQgIANgNAOQgIgHgFAAgAA0gKIgEAAIhjAAIgNAAIgHABIAAgOIACAAQAJACAKgBIAIAAIAAgZQAAgIgCgFQATAAgBACIgBACQgDAEABAEIAAAaIAZAAIAAgmIgBgFIAAgHIALAAIAGACIgCACQgCADgBAEIAAAJIAeAAIAXgBIAAAOIgWgBIgfAAIAAASIAmAAQAKABAFgBIAMgBIAAAOIgUgBg");
	this.shape_34.setTransform(359.4,181);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgrA/QAPgFAMgPQgFgJgGgVIAMgBQABALAEALQACgLADgXQgKAAgJADIgEgJQAGgDADgGQAGgOAFgQQgKAAgIACIAAgLIAPABIAQgBIABABIgRAtIAJgCIAIgBIABABQgEAkgGASQAEAKAZACIAAgOIgDAAIgRABIAAgMIAIABQAGABADgBIADAAIAAgNIgCAAQgNAAgDABIAAgLIAIABIAIAAIACAAIAAgKIgCAAIgHAAQgFAAgDAAIAAgLIAPABIACAAIAAgMIgCAAIgXABIAAgMIAJACIANAAIADAAIAAgNIgCAAIgHABIgIAAIAAgMQAJACAGAAIACAAQABgKgCgHQALAAADACIgBACIgBAEIgBAJIAIAAIAJAAIAJgCIABACQgBAFAAAJIAAAHQAJABADgCIAAALIgGAAIgGgBIAAAFIAAAKIABAIIgBAAIgTAAIgGAAIAAAKIAIAAIACABQALAAAGgCIAAALIgIAAIgLgBIgIAAIAAANIAJAAIAEABQAMAAAFgBIAAALIgVgCIgJAAIAAAQIAPAAIAWgBQgFAEgEAKQg9gBgNgQQgJAKgMAJQgEgGgJgDgAAlgKIAOAAIAAgMIgOAAgAAlgfIAOAAIAAgNIgOAAgAg9A5IABgBIAHgEIAAgiIgCAAIgQABIAAgLQAFABALgBIACAAIAAgTIgGABIgEAAIAAgIIgFAGQgBgDgDgGIgBgDQASgVAHgaQANADACADIgBADIgDAEIgDADIgGAKIAEAAIAPgBIAAAMIgQgBIgHAAIgDAEIgHAKQACABAMgBIACAAIARgBIAAAMIgNgBIgDAAIAAATIADAAIANgBIAAALIgHAAIgGAAIgDAAIAAAaIAAAAIAAAAIAFgFIAKgJIAEALQgJAMgUAQg");
	this.shape_35.setTransform(193.7,258.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoBIIABgdIAAggIgGAFIgRAQQgDgHgHgGQAegTARgaIgEAAIAAgNIgPAAIgYAAIAAgNQAGACASgCIAPAAIAAgKIAAgJIABABQAOABAAACIAAACQgCACABAEIAAAHIAdAAIAAgKIAAgKQAQACAAACIgBADIgCAEIAAAJIATAAQACACAKgCIAMAAIAAANIgNAAIgLgBIgSAAQgBAIACAFIgPAAIAAgMIgdAAIAAAFIAAAIIgIAAQALAIABACIgDADIgDACIgKAKIAAAtQAAARACALgAAFA4IAAgWQgIAIgJADIgLgMIASgHIAKgGIAAgrQAPAAABADIgBACQgCADAAACIAAAbQAVgRAJgPIAMAJQAEADgHADIgCABQgSAQgTANIAAATQgDALARAAIAMAAQAOABAAgVQAIAHAHACQgEAXgRAAIgXAAIgCAAQgXAAABgNg");
	this.shape_36.setTransform(177.5,258.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAcA1QgTAKgfAHQgBgIgHgGQAYACAWgKIgUgIQgHgCAAgBIACgBIAKgQIgEAAIgLABIgKAAIAAgLIAFAAIAQAAIAIAAQAFgJABgFQAOAEACABIgCACIgGAHIAfAAIAPAAIAIgBIAAAMIgRgBIgFAAQgFAMgKANQAaALAIACIgIANQgSgMgQgGgAAFAgIAFADIAPAFQAEgEAJgOIABgCIgaAAgAhDA2QATAFgBgOIAAgfIgTAMIgEgQIAXgJIAAgdIgHAAIgOABIAAgOIAIABIAIAAIAFAAIAAgQQgBgKgBgEIASACIgBABQgEAGAAAVIAEAAIAOgBIAAANIgEAAIgKgCIgEAAIAAAbIAPgKIACANIgQAKIAAAoQAAALgEADQgDACgRACQgBgHgFgHgAgTgRQAGACARAAIAXAAQAGgMAEgOQANAEADADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgGAFgGAMIAJAAIAWgCIAAANIgMgBIgKAAIgsAAIgQABIgHABgAgEgiIAKgFIAJARIgKAFQgFgKgEgHgAgOg2IAJABIAKAAIAMAAQgBgGgFgJIAQgCIAEARIAMAAQATgBADAAIAAANIgWgCIgmAAIgHABIgGABIgGAAg");
	this.shape_37.setTransform(161.1,258.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAFBEQgPgBgNgGIgJgDQgHgEgEgBQgJACgHANIgMgJIAVgRIAAgqIgCAAIgPAAIgBAAIAAgOIAAABIAQABIAQgCQgBAGAAAKIAAAoQAVANATABQAXADAvgHQgHAHgBAJIgmAAIgWAAgAAOA0IAAgBQACgJAAgLIgVAAIgXABIAAgOIACAAIAUABIAWAAIAAgSIgJAAQgWABgIABIgCgNQAHADAOgdIgFAAIgRABIgDAAIAAgNIATABIALAAIAAgBIAHgUIARAFIgDADQgEAFgEAIIAbAAIAXgBIABAAIAAANIgCAAIgWgBIggAAIgMATIgEAIIAXAAQgBgNgBgGIAAgCIAMABIAFABIgBACQgCAHAAAKIAKAAIAVgBIADAAIAAAMIgEAAIgTgBIgLAAIAAASIAQAAIAVgBIACAAIAAAOIgCAAIgVgBIgQAAIAAAUIABABgAg7g4IAQgEIAJAeIgQADQgEgVgFgIg");
	this.shape_38.setTransform(144.8,258.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag3BGIABgKIAAgcQABgIgCgDQAFABAHAAIAZAAQAIAAAFgCQgCAFABAIIAAAbIABAJIgOAAIABgJIgZAAIABAKgAgrAzIAZAAIAAgTIgZAAgAAGBFIABgIIAAgdIgBgNQADADAJgBIAaAAQAKAAAEgBIAAAMIAAAcIABAJIgPAAIACgJIgcAAQAAAFABAEgAASAzIAcAAIAAgUIgcAAgAhJAIQAuABAQgOIgdAAIgZABIAAgNIALABIAOAAIAgAAIABgMQALABAEABIgBACQgCAEgBAEIAbAAIgJgIIAKgGIAIAGIADAEIgIAEIAIAAIAagBIAAANIgbgBIggAAQAIAGASADQATAEASgDQgFAHAAAIQg5gFgLgUQgLAUg2AHQgDgIgFgGgAA7AUIgBAAIABAAgAAvgeIgcAAIgIABIgEAAIABgLIAAgRIgBgMQAHACAFAAIAcAAIAOgCQgCAHAAAFIAAARQAAAHACAEIgOgBgAAUgoIAbAAIAAgRIgbAAgAgSgeIgaAAIgMABIABgLIAAgRIgBgMQAGACAFAAIAbAAQAKAAADgCIgBAMIAAARIABALIgNgBgAgsgoIAaAAIAAgRIgaAAg");
	this.shape_39.setTransform(128.4,258.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgxBJIABgPIAAgjIgBgOQAGABAIAAIBBAAIAJAAIAGgBQgBAFABALIAAAfIABAQIgRAAIABgGIAAgHIhBAAQAAAIABAGgAgjAxIBBAAIAAgcIhBAAgAhJgKQArgRAXgtQANACADADIgCACIgDACQAZAkAtAJQgHAEgFALQgsgSgUgiQgZAigiAVQgGgHgGgDgAAHgFIgSAAIgaABIAAgMIALABIAPAAIASAAIARgBQAIAAACgBIAAANIgbgBg");
	this.shape_40.setTransform(112.3,258.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAfA5QATAEgDgHIAAgfIgxAAIgTAUIAmgEIgIgIIALgEQAIAHAKAPIgLAGIgEgHQgtAEgHADIgFgOQAGgBAMgRIgeAAIAAAZIAAAWIgOAAIAAgJIABgOIAAgOIgBgQIAAgFIAaABIAYAAQAEgFACgHIgXAAIgZACIABgSIAAgIIgBgHIAAgFQAPAAABACIgBACQgBADAAADIAAARIBOAAIAAgcQANAAACACQgCAGAAAKIAAADQAAAJABAIIgMAAIgPgBIgcAAQAJADAAABIgBAEIgEAEIAeAAQAPAAAOgCIgCAXIAAAYQAAAJgDABQgDADgRABQgBgHgFgIgAgggSQAKgCARgGIgYgHIAFgJIAbAKQALgGAIgGQAHAEABAEIgDACIgDAAIgGAEIgFADQAIAEAGABIAFACIgGAKIgVgMQgOAHgPAFgAA5gtIgUgBIhOAAIgQABIgKAAIAAgNIAaABIAnAAQgCgGgFgGIAPgCIACAJIACAFIAbAAQAWAAAJgCIAAAOIgLAAg");
	this.shape_41.setTransform(95.9,258.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmA4QAAgeAagOIAOgJQAWgJgBgQQgCgTgUgBQgVAAgBAbIgOAAQAAgnAlgBQAiACACAgQABAWggAOIgKAHQgRAJgCAMIA8AAIAAANg");
	this.shape_42.setTransform(83.1,258.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARA5IgagqIgLALIAAAfIgOAAIAAhxIAOAAIAABBIAjgiIASAAIggAeIAiA0g");
	this.shape_43.setTransform(75,258.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_5},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_4},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3,p:{skewY:180,x:472.7,y:204}},{t:this.instance_2,p:{x:314.7,y:245.5}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1,p:{scaleX:1,rotation:0,skewX:180,x:112.9,y:323.2}},{t:this.instance,p:{x:264,y:266.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},4).to({state:[{t:this.instance_3,p:{skewY:0,x:75,y:240.4}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_2,p:{x:231.8,y:287.5}},{t:this.instance_1,p:{scaleX:0.73,rotation:180,skewX:0,x:419.2,y:198.5}},{t:this.shape_34},{t:this.shape_33},{t:this.instance,p:{x:297.4,y:155.9}}]},91).to({state:[]},21).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_5},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_4},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3,p:{skewY:180,x:472.7,y:204}},{t:this.instance_2,p:{x:314.7,y:245.5}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1,p:{scaleX:1,rotation:0,skewX:180,x:112.9,y:323.2}},{t:this.instance,p:{x:264,y:266.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},73).wait(12));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgzFApaMAAAhSzMBmLAAAMAAABSzg");
	mask.setTransform(265,265);

	// 图层 6
	this.instance_6 = new lib.dxxcl_yz_0000();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-101,-34);

	this.instance_7 = new lib.dxxcl_yz_0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-101,-34);

	this.instance_8 = new lib.dxxcl_yz_0002();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-101,-34);

	this.instance_9 = new lib.dxxcl_yz_0003();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-101,-34);

	this.instance_10 = new lib.dxxcl_yz_0004();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-101,-34);

	this.instance_11 = new lib.dxxcl_yz_0005();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-101,-34);

	this.instance_12 = new lib.dxxcl_yz_0006();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-101,-34);

	this.instance_13 = new lib.dxxcl_yz_0007();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-101,-34);

	this.instance_14 = new lib.dxxcl_yz_0008();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-101,-34);

	this.instance_15 = new lib.dxxcl_yz_0009();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-101,-34);

	this.instance_16 = new lib.dxxcl_yz_0010();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-101,-34);

	this.instance_17 = new lib.dxxcl_yz_0011();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-101,-34);

	this.instance_18 = new lib.dxxcl_yz_0012();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-101,-34);

	this.instance_19 = new lib.dxxcl_yz_0013();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-101,-34);

	this.instance_20 = new lib.dxxcl_yz_0014();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-101,-34);

	this.instance_21 = new lib.dxxcl_yz_0015();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-101,-34);

	this.instance_22 = new lib.dxxcl_yz_0016();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-101,-34);

	this.instance_23 = new lib.dxxcl_yz_0017();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-101,-34);

	this.instance_24 = new lib.dxxcl_yz_0018();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-101,-34);

	this.instance_25 = new lib.dxxcl_yz_0019();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-101,-34);

	this.instance_26 = new lib.dxxcl_yz_0020();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-101,-34);

	this.instance_27 = new lib.dxxcl_yz_0021();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-101,-34);

	this.instance_28 = new lib.dxxcl_yz_0022();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-101,-34);

	this.instance_29 = new lib.dxxcl_yz_0023();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-101,-34);

	this.instance_30 = new lib.dxxcl_yz_0024();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-101,-34);

	this.instance_31 = new lib.dxxcl_yz_0025();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-101,-34);

	this.instance_32 = new lib.dxxcl_yz_0026();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-101,-34);

	this.instance_33 = new lib.dxxcl_yz_0027();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-101,-34);

	this.instance_34 = new lib.dxxcl_yz_0028();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-101,-34);

	this.instance_35 = new lib.dxxcl_yz_0029();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-101,-34);

	this.instance_36 = new lib.dxxcl_yz_0030();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-101,-34);

	this.instance_37 = new lib.dxxcl_yz_0031();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-101,-34);

	this.instance_38 = new lib.dxxcl_yz_0032();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-101,-34);

	this.instance_39 = new lib.dxxcl_yz_0033();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-101,-34);

	this.instance_40 = new lib.dxxcl_yz_0034();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-101,-34);

	this.instance_41 = new lib.dxxcl_yz_0035();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-101,-34);

	this.instance_42 = new lib.dxxcl_yz_0036();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-101,-34);

	this.instance_43 = new lib.dxxcl_yz_0037();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-101,-34);

	this.instance_44 = new lib.dxxcl_yz_0038();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-101,-34);

	this.instance_45 = new lib.dxxcl_yz_0039();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-101,-34);

	this.instance_46 = new lib.dxxcl_yz_0040();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-101,-34);

	this.instance_47 = new lib.dxxcl_yz_0041();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-101,-34);

	this.instance_48 = new lib.dxxcl_yz_0042();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-101,-34);

	this.instance_49 = new lib.dxxcl_yz_0043();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-101,-34);

	this.instance_50 = new lib.dxxcl_yz_0044();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-101,-34);

	this.instance_51 = new lib.dxxcl_yz_0045();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-101,-34);

	this.instance_52 = new lib.dxxcl_yz_0046();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-101,-34);

	this.instance_53 = new lib.dxxcl_yz_0047();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-101,-34);

	this.instance_54 = new lib.dxxcl_yz_0048();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-101,-34);

	this.instance_55 = new lib.dxxcl_yz_0049();
	this.instance_55.parent = this;
	this.instance_55.setTransform(-101,-34);

	this.instance_56 = new lib.dxxcl_yz_0050();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-101,-34);

	this.instance_57 = new lib.dxxcl_yz_0051();
	this.instance_57.parent = this;
	this.instance_57.setTransform(-101,-34);

	this.instance_58 = new lib.dxxcl_yz_0052();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-101,-34);

	this.instance_59 = new lib.dxxcl_yz_0053();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-101,-34);

	this.instance_60 = new lib.dxxcl_yz_0054();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-101,-34);

	this.instance_61 = new lib.dxxcl_yz_0055();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-101,-34);

	this.instance_62 = new lib.dxxcl_yz_0056();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-101,-34);

	this.instance_63 = new lib.dxxcl_yz_0057();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-101,-34);

	this.instance_64 = new lib.dxxcl_yz_0058();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-101,-34);

	this.instance_65 = new lib.dxxcl_yz_0059();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-101,-34);

	this.instance_66 = new lib.dxxcl_yz_0060();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-101,-34);

	this.instance_67 = new lib.dxxcl_yz_0061();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-101,-34);

	this.instance_68 = new lib.dxxcl_yz_0062();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-101,-34);

	this.instance_69 = new lib.dxxcl_yz_0063();
	this.instance_69.parent = this;
	this.instance_69.setTransform(-101,-34);

	this.instance_70 = new lib.dxxcl_yz_0064();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-101,-34);

	this.instance_71 = new lib.dxxcl_yz_0065();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-101,-34);

	this.instance_72 = new lib.dxxcl_yz_0066();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-101,-34);

	this.instance_73 = new lib.dxxcl_yz_0067();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-101,-34);

	this.instance_74 = new lib.dxxcl_yz_0068();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-101,-34);

	this.instance_75 = new lib.dxxcl_yz_0069();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-101,-34);

	this.instance_76 = new lib.dxxcl_yz_0070();
	this.instance_76.parent = this;
	this.instance_76.setTransform(-101,-34);

	this.instance_77 = new lib.dxxcl_yz_0071();
	this.instance_77.parent = this;
	this.instance_77.setTransform(-101,-34);

	this.instance_78 = new lib.dxxcl_yz_0072();
	this.instance_78.parent = this;
	this.instance_78.setTransform(-101,-34);

	this.instance_79 = new lib.dxxcl_yz_0073();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-101,-34);

	this.instance_80 = new lib.dxxcl_yz_0074();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-101,-34);

	this.instance_81 = new lib.dxxcl_yz_0075();
	this.instance_81.parent = this;
	this.instance_81.setTransform(-101,-34);

	this.instance_82 = new lib.dxxcl_yz_0076();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-101,-34);

	this.instance_83 = new lib.dxxcl_yz_0077();
	this.instance_83.parent = this;
	this.instance_83.setTransform(-101,-34);

	this.instance_84 = new lib.dxxcl_yz_0078();
	this.instance_84.parent = this;
	this.instance_84.setTransform(-101,-34);

	this.instance_85 = new lib.dxxcl_yz_0079();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-101,-34);

	this.instance_86 = new lib.dxxcl_yz_0080();
	this.instance_86.parent = this;
	this.instance_86.setTransform(-101,-34);

	this.instance_87 = new lib.dxxcl_yz_0081();
	this.instance_87.parent = this;
	this.instance_87.setTransform(-101,-34);

	this.instance_88 = new lib.dxxcl_yz_0082();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-101,-34);

	this.instance_89 = new lib.dxxcl_yz_0083();
	this.instance_89.parent = this;
	this.instance_89.setTransform(-101,-34);

	this.instance_90 = new lib.dxxcl_yz_0084();
	this.instance_90.parent = this;
	this.instance_90.setTransform(-101,-34);

	this.instance_91 = new lib.dxxcl_yz_0085();
	this.instance_91.parent = this;
	this.instance_91.setTransform(-101,-34);

	this.instance_92 = new lib.dxxcl_yz_0086();
	this.instance_92.parent = this;
	this.instance_92.setTransform(-101,-34);

	this.instance_93 = new lib.dxxcl_yz_0087();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-101,-34);

	this.instance_94 = new lib.dxxcl_yz_0088();
	this.instance_94.parent = this;
	this.instance_94.setTransform(-101,-34);

	this.instance_95 = new lib.dxxcl_yz_0089();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-101,-34);

	this.instance_96 = new lib.dxxcl_yz_0090();
	this.instance_96.parent = this;
	this.instance_96.setTransform(-101,-34);

	this.instance_97 = new lib.dxxcl_yz_0091();
	this.instance_97.parent = this;
	this.instance_97.setTransform(-101,-34);

	this.instance_98 = new lib.dxxcl_yz_0092();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-101,-34);

	this.instance_99 = new lib.dxxcl_yz_0093();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-101,-34);

	this.instance_100 = new lib.dxxcl_yz_0094();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-101,-34);

	this.instance_101 = new lib.dxxcl_yz_0095();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-101,-34);

	this.instance_102 = new lib.dxxcl_yz_0096();
	this.instance_102.parent = this;
	this.instance_102.setTransform(-101,-34);

	this.instance_103 = new lib.dxxcl_yz_0097();
	this.instance_103.parent = this;
	this.instance_103.setTransform(-101,-34);

	this.instance_104 = new lib.dxxcl_yz_0098();
	this.instance_104.parent = this;
	this.instance_104.setTransform(-101,-34);

	this.instance_105 = new lib.dxxcl_yz_0099();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-101,-34);

	this.instance_106 = new lib.dxxcl_yz_0100();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-101,-34);

	this.instance_107 = new lib.dxxcl_yz_0101();
	this.instance_107.parent = this;
	this.instance_107.setTransform(-101,-34);

	this.instance_108 = new lib.dxxcl_yz_0102();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-101,-34);

	this.instance_109 = new lib.dxxcl_yz_0103();
	this.instance_109.parent = this;
	this.instance_109.setTransform(-101,-34);

	this.instance_110 = new lib.dxxcl_yz_0104();
	this.instance_110.parent = this;
	this.instance_110.setTransform(-101,-34);

	this.instance_111 = new lib.dxxcl_yz_0105();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-101,-34);

	this.instance_112 = new lib.dxxcl_yz_0106();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-101,-34);

	this.instance_113 = new lib.dxxcl_yz_0107();
	this.instance_113.parent = this;
	this.instance_113.setTransform(-101,-34);

	this.instance_114 = new lib.dxxcl_yz_0108();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-101,-34);

	this.instance_115 = new lib.dxxcl_yz_0109();
	this.instance_115.parent = this;
	this.instance_115.setTransform(-101,-34);

	this.instance_116 = new lib.dxxcl_yz_0110();
	this.instance_116.parent = this;
	this.instance_116.setTransform(-101,-34);

	this.instance_117 = new lib.dxxcl_yz_0111();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-101,-34);

	this.instance_118 = new lib.dxxcl_yz_0112();
	this.instance_118.parent = this;
	this.instance_118.setTransform(-101,-34);

	this.instance_119 = new lib.dxxcl_yz_0113();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-101,-34);

	this.instance_120 = new lib.dxxcl_yz_0114();
	this.instance_120.parent = this;
	this.instance_120.setTransform(-101,-34);

	this.instance_121 = new lib.dxxcl_yz_0115();
	this.instance_121.parent = this;
	this.instance_121.setTransform(-101,-34);

	this.instance_122 = new lib.dxxcl_yz_0116();
	this.instance_122.parent = this;
	this.instance_122.setTransform(-101,-34);

	this.instance_123 = new lib.dxxcl_yz_0117();
	this.instance_123.parent = this;
	this.instance_123.setTransform(-101,-34);

	this.instance_124 = new lib.dxxcl_yz_0118();
	this.instance_124.parent = this;
	this.instance_124.setTransform(-101,-34);

	this.instance_125 = new lib.dxxcl_yz_0119();
	this.instance_125.parent = this;
	this.instance_125.setTransform(-101,-34);

	this.instance_126 = new lib.dxxcl_yz_0120();
	this.instance_126.parent = this;
	this.instance_126.setTransform(-101,-34);

	this.instance_127 = new lib.dxxcl_yz_0121();
	this.instance_127.parent = this;
	this.instance_127.setTransform(-101,-34);

	this.instance_128 = new lib.dxxcl_yz_0122();
	this.instance_128.parent = this;
	this.instance_128.setTransform(-101,-34);

	this.instance_129 = new lib.dxxcl_yz_0123();
	this.instance_129.parent = this;
	this.instance_129.setTransform(-101,-34);

	this.instance_130 = new lib.dxxcl_yz_0124();
	this.instance_130.parent = this;
	this.instance_130.setTransform(-101,-34);

	this.instance_131 = new lib.dxxcl_yz_0125();
	this.instance_131.parent = this;
	this.instance_131.setTransform(-101,-34);

	this.instance_132 = new lib.dxxcl_yz_0126();
	this.instance_132.parent = this;
	this.instance_132.setTransform(-101,-34);

	this.instance_133 = new lib.dxxcl_yz_0127();
	this.instance_133.parent = this;
	this.instance_133.setTransform(-101,-34);

	this.instance_134 = new lib.dxxcl_yz_0128();
	this.instance_134.parent = this;
	this.instance_134.setTransform(-101,-34);

	this.instance_135 = new lib.dxxcl_yz_0129();
	this.instance_135.parent = this;
	this.instance_135.setTransform(-101,-34);

	this.instance_136 = new lib.dxxcl_yz_0130();
	this.instance_136.parent = this;
	this.instance_136.setTransform(-101,-34);

	this.instance_137 = new lib.dxxcl_yz_0131();
	this.instance_137.parent = this;
	this.instance_137.setTransform(-101,-34);

	this.instance_138 = new lib.dxxcl_yz_0132();
	this.instance_138.parent = this;
	this.instance_138.setTransform(-101,-34);

	this.instance_139 = new lib.dxxcl_yz_0133();
	this.instance_139.parent = this;
	this.instance_139.setTransform(-101,-34);

	this.instance_140 = new lib.dxxcl_yz_0134();
	this.instance_140.parent = this;
	this.instance_140.setTransform(-101,-34);

	this.instance_141 = new lib.dxxcl_yz_0135();
	this.instance_141.parent = this;
	this.instance_141.setTransform(-101,-34);

	this.instance_142 = new lib.dxxcl_yz_0136();
	this.instance_142.parent = this;
	this.instance_142.setTransform(-101,-34);

	this.instance_143 = new lib.dxxcl_yz_0137();
	this.instance_143.parent = this;
	this.instance_143.setTransform(-101,-34);

	this.instance_144 = new lib.dxxcl_yz_0138();
	this.instance_144.parent = this;
	this.instance_144.setTransform(-101,-34);

	this.instance_145 = new lib.dxxcl_yz_0139();
	this.instance_145.parent = this;
	this.instance_145.setTransform(-101,-34);

	this.instance_146 = new lib.dxxcl_yz_0140();
	this.instance_146.parent = this;
	this.instance_146.setTransform(-101,-34);

	this.instance_147 = new lib.dxxcl_yz_0141();
	this.instance_147.parent = this;
	this.instance_147.setTransform(-101,-34);

	this.instance_148 = new lib.dxxcl_yz_0142();
	this.instance_148.parent = this;
	this.instance_148.setTransform(-101,-34);

	this.instance_149 = new lib.dxxcl_yz_0143();
	this.instance_149.parent = this;
	this.instance_149.setTransform(-101,-34);

	this.instance_150 = new lib.dxxcl_yz_0144();
	this.instance_150.parent = this;
	this.instance_150.setTransform(-101,-34);

	this.instance_151 = new lib.dxxcl_yz_0145();
	this.instance_151.parent = this;
	this.instance_151.setTransform(-101,-34);

	this.instance_152 = new lib.dxxcl_yz_0146();
	this.instance_152.parent = this;
	this.instance_152.setTransform(-101,-34);

	this.instance_153 = new lib.dxxcl_yz_0147();
	this.instance_153.parent = this;
	this.instance_153.setTransform(-101,-34);

	this.instance_154 = new lib.dxxcl_yz_0148();
	this.instance_154.parent = this;
	this.instance_154.setTransform(-101,-34);

	this.instance_155 = new lib.dxxcl_yz_0149();
	this.instance_155.parent = this;
	this.instance_155.setTransform(-101,-34);

	this.instance_156 = new lib.dxxcl_yz_0150();
	this.instance_156.parent = this;
	this.instance_156.setTransform(-101,-34);

	this.instance_157 = new lib.dxxcl_yz_0151();
	this.instance_157.parent = this;
	this.instance_157.setTransform(-101,-34);

	this.instance_158 = new lib.dxxcl_yz_0152();
	this.instance_158.parent = this;
	this.instance_158.setTransform(-101,-34);

	this.instance_159 = new lib.dxxcl_yz_0153();
	this.instance_159.parent = this;
	this.instance_159.setTransform(-101,-34);

	this.instance_160 = new lib.dxxcl_yz_0154();
	this.instance_160.parent = this;
	this.instance_160.setTransform(-101,-34);

	this.instance_161 = new lib.dxxcl_yz_0155();
	this.instance_161.parent = this;
	this.instance_161.setTransform(-101,-34);

	this.instance_162 = new lib.dxxcl_yz_0156();
	this.instance_162.parent = this;
	this.instance_162.setTransform(-101,-34);

	this.instance_163 = new lib.dxxcl_yz_0157();
	this.instance_163.parent = this;
	this.instance_163.setTransform(-101,-34);

	this.instance_164 = new lib.dxxcl_yz_0158();
	this.instance_164.parent = this;
	this.instance_164.setTransform(-101,-34);

	this.instance_165 = new lib.dxxcl_yz_0159();
	this.instance_165.parent = this;
	this.instance_165.setTransform(-101,-34);

	this.instance_166 = new lib.dxxcl_yz_0160();
	this.instance_166.parent = this;
	this.instance_166.setTransform(-101,-34);

	this.instance_167 = new lib.dxxcl_yz_0161();
	this.instance_167.parent = this;
	this.instance_167.setTransform(-101,-34);

	this.instance_168 = new lib.dxxcl_yz_0162();
	this.instance_168.parent = this;
	this.instance_168.setTransform(-101,-34);

	this.instance_169 = new lib.dxxcl_yz_0163();
	this.instance_169.parent = this;
	this.instance_169.setTransform(-101,-34);

	this.instance_170 = new lib.dxxcl_yz_0164();
	this.instance_170.parent = this;
	this.instance_170.setTransform(-101,-34);

	this.instance_171 = new lib.dxxcl_yz_0165();
	this.instance_171.parent = this;
	this.instance_171.setTransform(-101,-34);

	this.instance_172 = new lib.dxxcl_yz_0166();
	this.instance_172.parent = this;
	this.instance_172.setTransform(-101,-34);

	this.instance_173 = new lib.dxxcl_yz_0167();
	this.instance_173.parent = this;
	this.instance_173.setTransform(-101,-34);

	this.instance_174 = new lib.dxxcl_yz_0168();
	this.instance_174.parent = this;
	this.instance_174.setTransform(-101,-34);

	this.instance_175 = new lib.dxxcl_yz_0169();
	this.instance_175.parent = this;
	this.instance_175.setTransform(-101,-34);

	this.instance_176 = new lib.dxxcl_yz_0170();
	this.instance_176.parent = this;
	this.instance_176.setTransform(-101,-34);

	this.instance_177 = new lib.dxxcl_yz_0171();
	this.instance_177.parent = this;
	this.instance_177.setTransform(-101,-34);

	this.instance_178 = new lib.dxxcl_yz_0172();
	this.instance_178.parent = this;
	this.instance_178.setTransform(-101,-34);

	this.instance_179 = new lib.dxxcl_yz_0173();
	this.instance_179.parent = this;
	this.instance_179.setTransform(-101,-34);

	this.instance_180 = new lib.dxxcl_yz_0174();
	this.instance_180.parent = this;
	this.instance_180.setTransform(-101,-34);

	this.instance_181 = new lib.dxxcl_yz_0175();
	this.instance_181.parent = this;
	this.instance_181.setTransform(-101,-34);

	this.instance_182 = new lib.dxxcl_yz_0176();
	this.instance_182.parent = this;
	this.instance_182.setTransform(-101,-34);

	this.instance_183 = new lib.dxxcl_yz_0177();
	this.instance_183.parent = this;
	this.instance_183.setTransform(-101,-34);

	this.instance_184 = new lib.dxxcl_yz_0178();
	this.instance_184.parent = this;
	this.instance_184.setTransform(-101,-34);

	this.instance_185 = new lib.dxxcl_yz_0179();
	this.instance_185.parent = this;
	this.instance_185.setTransform(-101,-34);

	this.instance_186 = new lib.dxxcl_yz_0180();
	this.instance_186.parent = this;
	this.instance_186.setTransform(-101,-34);

	this.instance_187 = new lib.dxxcl_yz_0181();
	this.instance_187.parent = this;
	this.instance_187.setTransform(-101,-34);

	this.instance_188 = new lib.dxxcl_yz_0182();
	this.instance_188.parent = this;
	this.instance_188.setTransform(-101,-34);

	this.instance_189 = new lib.dxxcl_yz_0183();
	this.instance_189.parent = this;
	this.instance_189.setTransform(-101,-34);

	this.instance_190 = new lib.dxxcl_yz_0184();
	this.instance_190.parent = this;
	this.instance_190.setTransform(-101,-34);

	this.instance_191 = new lib.dxxcl_yz_0185();
	this.instance_191.parent = this;
	this.instance_191.setTransform(-101,-34);

	this.instance_192 = new lib.dxxcl_yz_0186();
	this.instance_192.parent = this;
	this.instance_192.setTransform(-101,-34);

	this.instance_193 = new lib.dxxcl_yz_0187();
	this.instance_193.parent = this;
	this.instance_193.setTransform(-101,-34);

	this.instance_194 = new lib.dxxcl_yz_0188();
	this.instance_194.parent = this;
	this.instance_194.setTransform(-101,-34);

	this.instance_195 = new lib.dxxcl_yz_0189();
	this.instance_195.parent = this;
	this.instance_195.setTransform(-101,-34);

	this.instance_196 = new lib.dxxcl_yz_0190();
	this.instance_196.parent = this;
	this.instance_196.setTransform(-101,-34);

	this.instance_197 = new lib.dxxcl_yz_0191();
	this.instance_197.parent = this;
	this.instance_197.setTransform(-101,-34);

	this.instance_198 = new lib.dxxcl_yz_0192();
	this.instance_198.parent = this;
	this.instance_198.setTransform(-101,-34);

	this.instance_199 = new lib.dxxcl_yz_0193();
	this.instance_199.parent = this;
	this.instance_199.setTransform(-101,-34);

	this.instance_200 = new lib.dxxcl_yz_0194();
	this.instance_200.parent = this;
	this.instance_200.setTransform(-101,-34);

	this.instance_201 = new lib.dxxcl_yz_0195();
	this.instance_201.parent = this;
	this.instance_201.setTransform(-101,-34);

	this.instance_202 = new lib.dxxcl_yz_0196();
	this.instance_202.parent = this;
	this.instance_202.setTransform(-101,-34);

	this.instance_203 = new lib.dxxcl_yz_0197();
	this.instance_203.parent = this;
	this.instance_203.setTransform(-101,-34);

	this.instance_204 = new lib.dxxcl_yz_0198();
	this.instance_204.parent = this;
	this.instance_204.setTransform(-101,-34);

	this.instance_205 = new lib.dxxcl_yz_0199();
	this.instance_205.parent = this;
	this.instance_205.setTransform(-101,-34);

	this.instance_206 = new lib.dxxcl_yz_0200();
	this.instance_206.parent = this;
	this.instance_206.setTransform(-101,-34);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156,this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170,this.instance_171,this.instance_172,this.instance_173,this.instance_174,this.instance_175,this.instance_176,this.instance_177,this.instance_178,this.instance_179,this.instance_180,this.instance_181,this.instance_182,this.instance_183,this.instance_184,this.instance_185,this.instance_186,this.instance_187,this.instance_188,this.instance_189,this.instance_190,this.instance_191,this.instance_192,this.instance_193,this.instance_194,this.instance_195,this.instance_196,this.instance_197,this.instance_198,this.instance_199,this.instance_200,this.instance_201,this.instance_202,this.instance_203,this.instance_204,this.instance_205,this.instance_206];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,0,654,530);


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


(lib.page9_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
		
		if (modelAction) modelAction.dispatchEvent("complete");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(59).call(this.frame_109).wait(1));

	// 图层 6
	this.instance = new lib.tabMC();
	this.instance.parent = this;
	this.instance.setTransform(945.2,273.3,0.534,0.534,0,0,0,0,0.1);

	this.instance_1 = new lib.tabMC();
	this.instance_1.parent = this;
	this.instance_1.setTransform(866.6,271.9,0.534,0.534,0,0,0,0,0.1);

	this.instance_2 = new lib.tabMC();
	this.instance_2.parent = this;
	this.instance_2.setTransform(705.1,325.3,0.534,0.534,0,0,0,0,0.1);

	this.instance_3 = new lib.tabMC();
	this.instance_3.parent = this;
	this.instance_3.setTransform(499.8,277,0.534,0.534,0,0,0,0,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858C91").s().p("AhIA5QASgLANgNQgHgMgGgPIgJAQIgKgWQAQgaAJguIASADIgEAWIAjAAIAAASQAAAIgEATQgFASgKARQATAPAoABIAhgBIgHAVIgwgBQgNgCgMgFQgNgFgKgIQgMAOgRALIgOgQgAgqgUQADAWAJAOQALgSABgbIgWAAIgCAJgAAMAsIAAhzIAUAAIAABzgAAggcIAPgKQANAQAOATIgRAKQgLgQgOgTg");
	this.shape.setTransform(959.4,180.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858C91").s().p("AgfA3QAXgCAOgHIgZgKIAJgQIgPAAIAAgFIgLABIAAAlQAAAIgDAFQgEAEgHABIgRABQgBgKgEgJIAKAAQAFAAABgCQABgBAAgEIAAgaIgOADIgDgVIARgCIAAgZIgOAAIAAgSIAOAAIAAgcIATAAIAAAcIANAAIAAASIgNAAIAAAXIAMgCIAAAIIAWAAIAEgLIgbAAIAAgRIAVAAIgIgMIAMgFIgUAAIAAgRIAgAAIgFgKIAWgEIAFAOIAiAAIAAARIgWAAIAOAFIgKAMIAXAAIAAARIhCAAIAQAEIgFAHIA1AAIAAAQIgOAAQgFANgKAKIAdAMIgKARIgigQQgTAMgdAFIgKgSgAAEAdIAUAHQAIgHAEgJIgbAAgAARgcIgJAEIAUAAIALgRIgfAAIAJANg");
	this.shape_1.setTransform(944.4,180.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858C91").s().p("AhHAyIAPgMIAAglIgOAAIAAgRIAhAAIAAA2QALANAZAAQAzAAAWgCIgGAUIglABQgoAAgHgCIgOgEQgHgCgHgGIgRARgAAOAxIAAgRIgtAAIAAgQIAtAAIAAgPIgpAAIAAgOQAHgMAGgOIgOAAIAAgRIAVAAIAGgPIAUADIgFAMIA0AAIAAARIg8AAIgKAYIASAAIAAgSIAUAAIAAASIAfAAIAAAQIgfAAIAAAPIAkAAIAAAQIgkAAIAAARgAhCg7IAPgKIAUAbIgRAMIgSgdg");
	this.shape_2.setTransform(929.5,180.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
	this.shape_3.setTransform(969.3,160.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858C91").s().p("AAiBJIAAgIIhEAAIAAAIIgUAAIAAhFIBsAAIAABFgAgiAuIBEAAIAAgXIhEAAgAhIgWQAtgXASgaIAbAAIgFAGQAVAaAnAQIgNASIgSgKIAAAIIhSAAIAAgJIgTAMQgGgJgHgJgAgbgZIA1AAQgOgMgMgOQgKANgRANg");
	this.shape_4.setTransform(954.3,160.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAEgJIgwAAIAAgrIATAAIAAAeIBFAAIgcgMIghALIgFgMIAWgGIgTgHIAGgKIAdALQANgFAKgGIhgAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAJAAIAAgeIATAAIAAArIg0AAIgFAJIA/AAIAAAnQAAAJgDAFQgEAEgGABQgGABgXgBIgDgPIAHAAIgEgFQgpABgPADIgHgOQAGgCAJgMIgTAAIAAAtgAArAxIgLAIQAKAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAAgYIgXAAIAUAWgAgOAnIAbgBIgGgHIAGgEIgTAAIgIAMg");
	this.shape_5.setTransform(939.3,160);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858C91").s().p("AgjA1IAAgVQAMAJAPAAQAIAAAGgFQAGgEAAgIQAAgIgHgEQgGgEgMAAIgKAAIAAgSIAJAAQAWAAAAgPQAAgOgQAAQgMAAgKAHIAAgUQALgGAQAAQAPAAAKAIQAKAHAAANQAAAXgWAFIAAABQAMABAHAHQAHAHAAAKQAAARgMAJQgMAJgSAAQgSAAgLgGg");
	this.shape_6.setTransform(927.2,159.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858C91").s().p("AAQA5IgigyIgDgGIAAA4IgYAAIAAhxIAYAAIAAA2IAEgGIAfgwIAdAAIgpA2IAsA7g");
	this.shape_7.setTransform(918,159.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858C91").s().p("AhIA5QATgLALgOQgGgLgFgPIgJAPIgKgVQAQgaAHguIAUADIgFAWIAiAAIAAASQAAAIgDATQgEARgKARQARAQApAAIAgAAIgHAVIgvgCQgMgBgNgFQgNgFgJgIQgNAOgSALIgNgQgAgrgUQAEAWAIAOQAMgSABgbIgWAAIgDAJgAAMAsIAAhyIAUAAIAABygAAhgcIAOgKQANAPANAUIgRAKQgKgRgNgSg");
	this.shape_8.setTransform(872.1,183.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858C91").s().p("AgfA3QAXgCAOgHIgZgKIAJgQIgPAAIAAgFIgLABIAAAlQAAAIgDAFQgEAEgHABIgRABQgBgKgEgJIAKAAQAFAAABgCQABgBAAgEIAAgaIgOADIgDgVIARgCIAAgZIgOAAIAAgSIAOAAIAAgcIATAAIAAAcIANAAIAAASIgNAAIAAAXIAMgCIAAAIIAWAAIAEgLIgbAAIAAgRIAVAAIgIgMIAMgFIgUAAIAAgRIAgAAIgFgKIAWgEIAFAOIAiAAIAAARIgWAAIAOAFIgKAMIAXAAIAAARIhCAAIAQAEIgFAHIA1AAIAAAQIgOAAQgFANgKAKIAdAMIgKARIgigQQgTAMgdAFIgKgSgAAEAdIAUAHQAIgHAEgJIgbAAgAARgcIgJAEIAUAAIALgRIgfAAIAJANg");
	this.shape_9.setTransform(857.1,183.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AhHAzIAPgNIAAglIgOAAIAAgSIAhAAIAAA3QALANAZAAQAzAAAWgBIgGATIglABQgoAAgHgBIgOgFQgHgCgHgHIgRARgAAOAxIAAgQIgtAAIAAgRIAtAAIAAgPIgpAAIAAgOQAHgLAGgOIgOAAIAAgSIAVAAIAGgQIAUAEIgFAMIA0AAIAAASIg8AAIgKAXIASAAIAAgTIAUAAIAAATIAfAAIAAAQIgfAAIAAAPIAkAAIAAARIgkAAIAAAQgAhCg7IAPgKIAUAbIgRAMIgSgdg");
	this.shape_10.setTransform(842.2,183.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
	this.shape_11.setTransform(881.9,162.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AAjBIIAAgHIhEAAIAAAHIgUAAIAAhDIBsAAIAABDgAghAuIBEAAIAAgWIhEAAgAhIgVQAtgYATgbIAbAAIgGAHQAUAZAoARIgOASIgSgKIAAAIIhSAAIAAgJIgSAMQgGgKgHgHgAgagaIA0AAQgPgLgLgOQgKANgQAMg");
	this.shape_12.setTransform(866.9,162.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("Ag/BIIAAg7IAwAAIAFgJIgxAAIAAgrIAUAAIAAAeIBEAAIgcgMIghALIgFgMIAVgGIgTgHIAHgKIAdALQANgFALgGIhhAAIAAgPIA/AAIgEgKIAWgBIAEALIA8AAIAAAPIgvAAIAIAKIgQAHIATAIIgFALIAKAAIAAgeIASAAIAAArIg0AAIgGAJIA/AAIAAAnQAAAJgDAFQgCAEgHABQgGABgXgBIgEgPIAIAAIgEgFQgpABgPADIgHgOQAGgCAIgMIgSAAIAAAtgAArAxIgKAIQAJAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgYIgVAAIATAWgAgPAnIAdgBIgGgHIAFgEIgTAAIgJAMg");
	this.shape_13.setTransform(851.9,162.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("AABA6IAAhYQgDADgIAEIgOADIAAgUQAUgGAOgLIAPAAIAABzg");
	this.shape_14.setTransform(839,161.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AAQA5IgigyIgDgGIAAA4IgYAAIAAhxIAYAAIAAA2IAEgGIAfgwIAdAAIgpA2IAsA7g");
	this.shape_15.setTransform(830.7,162);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_16.setTransform(714,236.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AhCBFIAAiJIA0AAIAAAOIgLApQAMAOAAAYQABANgIAGQgGAGgQAAQgBgMgDgKIAGABQAIAAAAgHQAAgTgNgOIALgoIgNAAIAAB4gAAvBFIAAgKIgkAAIAAAKIgUAAIAAiHIBMAAIAACHgAALAoIAkAAIAAgjIgkAAgAALgNIAkAAIAAgjIgkAAg");
	this.shape_17.setTransform(698.9,236.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AhIA0QAzgdAGgpIg3AAIAAgUIA6AAQACgPAAgSIAVAAIgCAhIA9AAIAAAUIg6AAQAQAxAtATIgRAVQgngYgRgwQgKAlgtAkIgRgUgAgSAqIANgLIAVAXIgQANIgSgZg");
	this.shape_18.setTransform(684,236.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AAvBFIAAgGIhdAAIAAAGIgTAAIAAiJICDAAIAACJgAguAwIBdAAIAAgpIgFAJQgLgDgIgHQgBAMgCADIgEAEQgCACgUgBIgDgKIAJAAIAFAAQABgBABgFIgVAAIAAAPQAAAGAHABIAXAAQAFgBACgCQACgDABgJIAQAFQgCAKgDAEQgDAEgFACQgFABgIAAIgeAAQgQABAAgRIAAgNIgMAGIgEgHgAguAFQANgGAIgHIgTAAIAAgMIAeAAIADgGIgfAAIAAgLIAMAAIgGgIIAOgFIAJANIAFAAIABgNIAQAAIgBANIAHAAIAJgMIAPADIgHAJIALAAIAAALIglAAIgDAGIAqAAIAAAMIgUAAQAKAIAMABIAAg2IhdAAgAgLAAIAaAAIgHgIIgLAAIgIAIg");
	this.shape_19.setTransform(505.4,165);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("AArBIIAAgFIhoAAIAAhHIAVAAIAAAeQAigOAAgYIhBAAIAAgRIAUAAIAAgiIAUAAIAAAiIAZAAIAAgqIAUAAIAAANIAvAAIAAARIgvAAIAAAMIA6AAIAAARIg7AAQgBAJgBAGIAgAUIAAgbIAUAAIAABMgAgoAyIBTAAIAAgXIgKAPIgfgYQgJANgWAMIgLgRg");
	this.shape_20.setTransform(490.4,164.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AjACSIAAG6EAingGFIAAG8AWWmJIAAG7EgimgJLIAAK0");
	this.shape_21.setTransform(723.5,241.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AjcDkIAbAAIAaAAIgaBNgEgjAgD+IAaAAIAcAAIgaBNgAV5kxIA2AAIgaBOgEAiLgExIAbAAIAbAAIgaBOg");
	this.shape_22.setTransform(723.6,277.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},45).to({state:[]},11).wait(54));

	// 图层 3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333F48").s().p("AgmB+IAAgPIhVANIgGgjQAugFAygIIgBAQIAOAAIAAiWQgdAxgbAlIAvgGIgEAgQhEAHgMAEIgNggQAOgHAbgoQgaABgJAEIgKggQAOgJAjhLIAhANQgVAngVAfIAYgBIARggIAdAPIAAg0ICHAAIAADMIARAAIAAAigAAQBcIA+AAIAAgkIg+AAgAAQAXIA+AAIAAghIg+AAgAAQgrIA+AAIAAgjIg+AAg");
	this.shape_23.setTransform(286.4,61);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333F48").s().p("AhMCBIAAguIg2AEIgBgiIA3gBIAAgZIg1AAIAAggQAJgYAJgkIgUAAIAAggIAbAAIAGgfIAkACIgHAdIAzAAIAAAgIg7AAQgJAigJAcIATAAIAAguIAfAAIAAAuIAYAAIAAAeIgYAAIAAAYIAcgCIAAAfIgcACIAAAvgAAeB7QgiAAAAglIAAhwIgOANQgGgNgOgTQAsgiAYgxIAsAAIgGAJQAYApAoAaIgSAjQgsgggWgpQgVAigbAbIAeAAIAAAnQAbgOAVgUIAaAYQgiAcgoATIAAAcQAAAPAQAAIARAAQAQAAACgKQADgOACgYIAjAMQgDAbgFARQgFAZgoAAg");
	this.shape_24.setTransform(259.2,61.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333F48").s().p("ABOCCIAAgKIi9AAIAAiBIAlAAIAAA4QA/gZAAgrIh1AAIAAgfIAkAAIAAg9IAkAAIAAA9IAsAAIAAhNIAlAAIAAAYIBVAAIAAAeIhVAAIAAAXIBoAAIAAAfIhpAAQgCAOgEAMQAfASAdASIAAgyIAlAAIAACLgAhKBZICYAAIAAgoIgTAbQgbgXgdgUQgQAYgnAUIgWgdg");
	this.shape_25.setTransform(231.8,61.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333F48").s().p("Ah8B5IAAgcIBzAAIAAgRIhOAAIAAgaIgPATQgMgJgPgKQAageAPgfIgNAAIAAhtIDQAAIAABtIhQAAIAAAPIBbAAIAAAcIhbAAIAAARIBUAAIAAAbIhUAAIAAARIBnAAIAAAcgAhWAxIBNAAIAAgRIhCAAIgLARgAg1gFIgEAJIAwAAIAAgPIg5AAgAhAgoICHAAIAAgOIiHAAgAhAhNICHAAIAAgOIiHAAg");
	this.shape_26.setTransform(204.4,61.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333F48").s().p("AgKBdIAqACQAUAAAAgVIAAhKIhNAAIAAgjICcAAIAAAjIgpAAIAABTQAAAWgKALQgJALgTABIg0ACQgDgSgHgTgAhbCBIAAhiIgZAXIgOgkQAogiAfgsIAeAUQgLARgOAQIAACIgAiBhEQAsgiAVgbIAgAXQgcAgguAlQgKgPgNgQgAgRhMIAAgiICJAAIAAAig");
	this.shape_27.setTransform(177.2,61.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333F48").s().p("AgRCDIAAgoIhwAAIAAggIBwAAIAAgSIhbAAIAAiDIAwAAIgTgZIAggOIAbAgIgQAHIA0AAQAQgUAMgTIAoAOIgYAZIAyAAIAACDIhcAAIAAASIBxAAIAAAgIhxAAIAAAogAASAKIA5AAIAAgUIg5AAgAhJAKIA4AAIAAgUIg4AAgAASgmIA5AAIAAgUIg5AAgAhJgmIA4AAIAAgUIg4AAg");
	this.shape_28.setTransform(149.9,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(110));

	// 图层 2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA4BjIAAgiIgrgrIgIAAIAAAiIAQAAIAAArIgqAAIAAgrIAPAAIAAgiIgIAAIgoAqIAAAjIgsAAIAAgrIAjAAIAqgqIAAgJIghAAIAAARIgsAAIAAgqIAsAAIAAAQIAhAAIAAgHIgsgrIghAAIAAgsIAsAAIAAAkIAqAqIAGAAIAAgiIgPAAIAAgsIAqAAIAAAsIgQAAIAAAiIAIAAIArgrIAAgjIArAAIAAAsIghAAIgtAqIAAAIIAjAAIAAgQIArAAIAAAqIgrAAIAAgRIgjAAIAAAKIAqApIAkAAIAAArg");
	this.shape_29.setTransform(1253.1,681.5);

	this.backBtn = new lib.mlBtn();
	this.backBtn.parent = this;
	this.backBtn.setTransform(1253.3,681.7);
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2, false, new lib.mlBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backBtn},{t:this.shape_29}]}).wait(110));

	// 图层 4
	this.instance_4 = new lib.model2MC("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(294.6,137.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

	// 图层 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EhqtAKPIAA0dMDVbAAAIAAUdg");
	this.shape_30.setTransform(683,702.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0F9F6").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_31.setTransform(0.2,384,1,1,0,0,0,-682.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


(lib.page9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s9.mp3"
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
	this.shape_9.graphics.f("#999999").s().p("AgYAtIgZAMQgDgIgEgFQAQgGAPgIIAIALIgGAEIANAAQAFAAAAgFIAAgKIgUAAIgKAAIAAgJIgOAJIgIgMIANgHIgFgHIAJgGIAGAGIAFgDIgHgHIAJgHIAGAHIAHgIIgRAAQgIAJgKAGIgJgJQASgLALgPIAMAEIgEAFIAVAAIAAALIgLAOIAbAAQgLgMgFgPIALgFIADAGIAlAAIAAALIgOARQAJAHANAEIgJAOIgMgHIAAAKIgcAAIAAAPQAAAFgDAEQgCACgEABIgWABIgDgNgAAlATQgJgHgHgHIAAAHIgmAAIAAgGQgHAHgIAGIBFAAIAAAAgAAbgGIAIgJIgPAAIAHAJgAASArIAGgLIAhAMIgHAMIgggNgAgKAtIgNAAIAGgEIgIgLIAUAAIAAAKQAAAFgFAAIAAAAgAgZAegAg1gaIAAgVIAuAAIgDgIIAQgCIAEAKIAtAAIAAAUIgPAAIAAgIIhOAAIAAAJg");
	this.shape_9.setTransform(1289.7,604.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgWAqQAWgLAHgPQAGgPAAghIAPAAQABAYgEAQIAIAAIAAAaQAAAFAFAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQACgDABgOIAOAHQgCAUgFADQgFADgFAAIgJAAQgOAAAAgOIAAgMQgJARgVAMIgLgOgAg6AfQALgMAGgOIgPgcIAMgGIAKASQAEgLABgNIgbAAIAAgPIAqAAQgBAfgKAYIAOAZIgNAIIgIgRQgIAOgKALIgIgPgAgKAQIAAhHIA+AAIAABHIgQAAIAAg4IggAAIAAA4g");
	this.shape_10.setTransform(1277.7,604.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgmAtQATgBAPgDQgKgIgIgKIgHAAIAAgNIBMAAIAAANQgKALgJAGQANACASABIgHAPQgagEgQgFQgPAFgZAFIgIgOgAALAjQALgFAHgHIgiAAQAGAHAKAFgAg6AwQAKgTAAgiIAAgqIAuAAIgDgIIASgCIAFAKIAoAAIAAANIhbAAIAAAfQAAAqgMAUIgNgLgAgSAFIAAgSIgNAAIAAgNIANAAIAAgFIAPAAIAAAFIAcAAIAAgFIAPAAIAAAFIAQAAIAAANIgQAAIAAASgAgDgHIAcAAIAAgGIgcAAg");
	this.shape_11.setTransform(1265.6,604.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AggACQAAgXAJgMQAJgNAPAAQAfAAABAuQAAAWgJAMQgIANgQAAQgfAAgBgtgAgMABQgBAfANABQANgBAAggQAAgggNABQgMgBAAAhg");
	this.shape_12.setTransform(1256,604.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgWAkQgJgLAAgUQAAgWALgOQALgPASAAQAKAAAHACIAAAQQgIgDgIAAQgKAAgGAIQgGAIAAANIAAAAQAHgKAMAAQAMABAGAHQAHAHgBAMQABAOgJAJQgJAJgNAAQgPAAgIgLgAgIAFQgDAFAAAFQAAAIADAEQAEAGAFAAQAFgBAEgEQADgEAAgIQAAgOgMAAQgFAAgEADg");
	this.shape_13.setTransform(1248.7,604.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgcAqIAAgQQAJAGANABQAGgBAEgDQAFgDAAgGQAAgHgFgEQgFgDgJAAIgJAAIAAgOIAIAAQARAAAAgMQAAgMgMABQgKAAgIAFIAAgPQAJgFAMAAQAMAAAJAGQAHAGAAALQAAARgRAFIAAAAQAJABAGAFQAFAGABAJQAAAMgKAIQgJAHgPAAQgOAAgJgFg");
	this.shape_14.setTransform(1241.3,604.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgKAxIAGgIIggADQgIABgDABIgHgOQAFgFAJgeIgOAAIAAgQIA2AAIAAAQIgXAAIgLAfIATgBIgIgVIANgFIALAeQAJgPgBglIgLAAIAAgQIALAAIAAgUIAQAAIAAAUIAeAAIgBBBIgBARQgBADgCADQgDADgDAAQgEACgRAAIgFgRIANAAQADAAACgCIACgDIABgTIABgkIgPAAQgBAZgBALQgCALgFALQgFANgIAIIgNgJgAgxghIAAgPIAtAAIAAAPg");
	this.shape_15.setTransform(1231.3,604.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Ag5AqIAIABQAEAAAAgFIAAgXIgMAFIAAgRIAMgDIAAgTIgMAAIAAgPIAMAAIAAgWIAPAAIAAAWIAKAAIAAAJQALgOAGgSIAPADIgFAKIAvAAIAAAOIg1AAIgIAOIAHAAIAAAJIALgCIAAgSIAOAAIAAAPIAbgGIgCAhQgBAFgCACQgDADgNABIgEgPQAKABABgCIAAgLIgNACIAAAkIgOAAIAAghIgLACIAAAeQAAAHAHAAIAYAAQAFAAACgCIADgDIACgNIAPAGQgCAQgFAEQgFAEgHABIgjAAQgSAAAAgSIAAgcIgFABIgCgNIAHgCIAAgKIgHgFIgJAAIAAAPIAJgDIAAAPIgJADIAAAhQAAAGgCADQgCADgEABIgPABQgBgHgDgJg");
	this.shape_16.setTransform(1219.5,604.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgCAkIASAAQAKAAAAgJIAAhAIhSAAIAAgPIBxAAIAAAPIgNAAIAABHQAAAIgDAFQgEAEgGABQgGACgXAAIgEgSgAgsAfIAAg4IA2AAIAAAxIglAAIAAAHgAgbAKIAWAAIAAgVIgWAAg");
	this.shape_17.setTransform(1207.5,604.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7A7A7A").s().p("Ag4BHIA4giIA7AiIg7AigAAFAjIA3ghIA6AhIg4AigAh0AkIA7giIA3AhIg7AigAiyAAIA7ghIA5AhIg6AigABAAAIA6ghIA5AhIg5AigAg2AAIA2ggIA4AgIg4AggAAFgjIA5ghIAHAEIABACIAeARIAQAJIABABIg5AigAh0gjIADgCIAAAAIA1gfIA6AhIg3AhgAg4hHIA4ghIA6AiIg6Aig");
	this.shape_18.setTransform(1246.8,575.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AhZBZIA7giIAABCIg7AigAgaA0IA2ggIAABCIgzAfIAAAAIgDACgAAhASIA5ghIAABBIg5AigAhZAUIA7ghIAAA/Ig7AigAgagPIA2ggIAAA+Ig2AggAhZgyIA7giIAABDIg7AhgAAhgyIA5ghIAABAIg5AggAgahWIA2ggIAABCIg2AggAAhh5IA5ghIAABCIg5Aig");
	this.shape_19.setTransform(1237.6,559.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9C9C9C").s().p("AAfB5IAAhCIA7AiIAABCgAAaB2IgQgJIgcgRIgCgCIgIgEIAAhCIA3AgIAABCgAAfAyIAAg/IA7AhIAABAgAhZAyIAAhBIA6AhIAABCgAgcAPIAAg+IA3AgIAAA+gAAfgRIAAhDIA7AiIAABCgAhZgTIAAhAIA6AhIAAA/gAgcg0IAAhCIA3AgIAABCgAhZhYIAAhCIA6AhIAABDg");
	this.shape_20.setTransform(1255.9,559.7);

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
	this.shape_28.graphics.f("#333F48").s().p("AgRCDIAAgoIhxAAIAAggIBxAAIAAgSIhbAAIAAiDIAwAAIgTgZIAfgOIAcAgIgQAHIA0AAQAPgUANgTIAoAOIgYAZIAyAAIAACDIhbAAIAAASIBvAAIAAAgIhvAAIAAAogAATAKIA4AAIAAgUIg4AAgAhJAKIA4AAIAAgUIg4AAgAATgmIA4AAIAAgUIg4AAgAhJgmIA4AAIAAgUIg4AAg");
	this.shape_28.setTransform(155.6,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(15));

	// 图层 6
	this.dragBtn = new lib.dragBtn();
	this.dragBtn.parent = this;
	this.dragBtn.setTransform(473.3,152.7,0.841,0.841);
	new cjs.ButtonHelper(this.dragBtn, 0, 1, 2, false, new lib.dragBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dragBtn).wait(15));

	// 图层 5
	this.model = new lib.modelMC();
	this.model.parent = this;
	this.model.setTransform(384.7,126.3,0.85,0.85,0,0,0,-62,0.1);

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
(lib._3d2 = function(mode,startPosition,loop) {
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
		{src:"images/3d2/dxxcl_bzt_zk0000.jpg", id:"dxxcl_bzt_zk0000"},
		{src:"images/3d2/dxxcl_bzt_zk0001.jpg", id:"dxxcl_bzt_zk0001"},
		{src:"images/3d2/dxxcl_bzt_zk0002.jpg", id:"dxxcl_bzt_zk0002"},
		{src:"images/3d2/dxxcl_bzt_zk0003.jpg", id:"dxxcl_bzt_zk0003"},
		{src:"images/3d2/dxxcl_bzt_zk0004.jpg", id:"dxxcl_bzt_zk0004"},
		{src:"images/3d2/dxxcl_bzt_zk0005.jpg", id:"dxxcl_bzt_zk0005"},
		{src:"images/3d2/dxxcl_bzt_zk0006.jpg", id:"dxxcl_bzt_zk0006"},
		{src:"images/3d2/dxxcl_bzt_zk0007.jpg", id:"dxxcl_bzt_zk0007"},
		{src:"images/3d2/dxxcl_bzt_zk0008.jpg", id:"dxxcl_bzt_zk0008"},
		{src:"images/3d2/dxxcl_bzt_zk0009.jpg", id:"dxxcl_bzt_zk0009"},
		{src:"images/3d2/dxxcl_bzt_zk0010.jpg", id:"dxxcl_bzt_zk0010"},
		{src:"images/3d2/dxxcl_bzt_zk0011.jpg", id:"dxxcl_bzt_zk0011"},
		{src:"images/3d2/dxxcl_bzt_zk0012.jpg", id:"dxxcl_bzt_zk0012"},
		{src:"images/3d2/dxxcl_bzt_zk0013.jpg", id:"dxxcl_bzt_zk0013"},
		{src:"images/3d2/dxxcl_bzt_zk0014.jpg", id:"dxxcl_bzt_zk0014"},
		{src:"images/3d2/dxxcl_bzt_zk0015.jpg", id:"dxxcl_bzt_zk0015"},
		{src:"images/3d2/dxxcl_bzt_zk0016.jpg", id:"dxxcl_bzt_zk0016"},
		{src:"images/3d2/dxxcl_bzt_zk0017.jpg", id:"dxxcl_bzt_zk0017"},
		{src:"images/3d2/dxxcl_bzt_zk0018.jpg", id:"dxxcl_bzt_zk0018"},
		{src:"images/3d2/dxxcl_bzt_zk0019.jpg", id:"dxxcl_bzt_zk0019"},
		{src:"images/3d2/dxxcl_bzt_zk0020.jpg", id:"dxxcl_bzt_zk0020"},
		{src:"images/3d2/dxxcl_bzt_zk0021.jpg", id:"dxxcl_bzt_zk0021"},
		{src:"images/3d2/dxxcl_bzt_zk0022.jpg", id:"dxxcl_bzt_zk0022"},
		{src:"images/3d2/dxxcl_bzt_zk0023.jpg", id:"dxxcl_bzt_zk0023"},
		{src:"images/3d2/dxxcl_bzt_zk0024.jpg", id:"dxxcl_bzt_zk0024"},
		{src:"images/3d2/dxxcl_bzt_zk0025.jpg", id:"dxxcl_bzt_zk0025"},
		{src:"images/3d2/dxxcl_bzt_zk0026.jpg", id:"dxxcl_bzt_zk0026"},
		{src:"images/3d2/dxxcl_bzt_zk0027.jpg", id:"dxxcl_bzt_zk0027"},
		{src:"images/3d2/dxxcl_bzt_zk0028.jpg", id:"dxxcl_bzt_zk0028"},
		{src:"images/3d2/dxxcl_bzt_zk0029.jpg", id:"dxxcl_bzt_zk0029"},
		{src:"images/3d2/dxxcl_bzt_zk0030.jpg", id:"dxxcl_bzt_zk0030"},
		{src:"images/3d2/dxxcl_bzt_zk0031.jpg", id:"dxxcl_bzt_zk0031"},
		{src:"images/3d2/dxxcl_bzt_zk0032.jpg", id:"dxxcl_bzt_zk0032"},
		{src:"images/3d2/dxxcl_bzt_zk0033.jpg", id:"dxxcl_bzt_zk0033"},
		{src:"images/3d2/dxxcl_bzt_zk0034.jpg", id:"dxxcl_bzt_zk0034"},
		{src:"images/3d2/dxxcl_bzt_zk0035.jpg", id:"dxxcl_bzt_zk0035"},
		{src:"images/3d2/dxxcl_bzt_zk0036.jpg", id:"dxxcl_bzt_zk0036"},
		{src:"images/3d2/dxxcl_bzt_zk0037.jpg", id:"dxxcl_bzt_zk0037"},
		{src:"images/3d2/dxxcl_bzt_zk0038.jpg", id:"dxxcl_bzt_zk0038"},
		{src:"images/3d2/dxxcl_bzt_zk0039.jpg", id:"dxxcl_bzt_zk0039"},
		{src:"images/3d2/dxxcl_bzt_zk0040.jpg", id:"dxxcl_bzt_zk0040"},
		{src:"images/3d2/dxxcl_bzt_zk0041.jpg", id:"dxxcl_bzt_zk0041"},
		{src:"images/3d2/dxxcl_bzt_zk0042.jpg", id:"dxxcl_bzt_zk0042"},
		{src:"images/3d2/dxxcl_bzt_zk0043.jpg", id:"dxxcl_bzt_zk0043"},
		{src:"images/3d2/dxxcl_bzt_zk0044.jpg", id:"dxxcl_bzt_zk0044"},
		{src:"images/3d2/dxxcl_bzt_zk0045.jpg", id:"dxxcl_bzt_zk0045"},
		{src:"images/3d2/dxxcl_bzt_zk0046.jpg", id:"dxxcl_bzt_zk0046"},
		{src:"images/3d2/dxxcl_bzt_zk0047.jpg", id:"dxxcl_bzt_zk0047"},
		{src:"images/3d2/dxxcl_bzt_zk0048.jpg", id:"dxxcl_bzt_zk0048"},
		{src:"images/3d2/dxxcl_bzt_zk0049.jpg", id:"dxxcl_bzt_zk0049"},
		{src:"images/3d2/dxxcl_bzt_zk0050.jpg", id:"dxxcl_bzt_zk0050"},
		{src:"images/3d2/dxxcl_yz_0000.jpg", id:"dxxcl_yz_0000"},
		{src:"images/3d2/dxxcl_yz_0001.jpg", id:"dxxcl_yz_0001"},
		{src:"images/3d2/dxxcl_yz_0002.jpg", id:"dxxcl_yz_0002"},
		{src:"images/3d2/dxxcl_yz_0003.jpg", id:"dxxcl_yz_0003"},
		{src:"images/3d2/dxxcl_yz_0004.jpg", id:"dxxcl_yz_0004"},
		{src:"images/3d2/dxxcl_yz_0005.jpg", id:"dxxcl_yz_0005"},
		{src:"images/3d2/dxxcl_yz_0006.jpg", id:"dxxcl_yz_0006"},
		{src:"images/3d2/dxxcl_yz_0007.jpg", id:"dxxcl_yz_0007"},
		{src:"images/3d2/dxxcl_yz_0008.jpg", id:"dxxcl_yz_0008"},
		{src:"images/3d2/dxxcl_yz_0009.jpg", id:"dxxcl_yz_0009"},
		{src:"images/3d2/dxxcl_yz_0010.jpg", id:"dxxcl_yz_0010"},
		{src:"images/3d2/dxxcl_yz_0011.jpg", id:"dxxcl_yz_0011"},
		{src:"images/3d2/dxxcl_yz_0012.jpg", id:"dxxcl_yz_0012"},
		{src:"images/3d2/dxxcl_yz_0013.jpg", id:"dxxcl_yz_0013"},
		{src:"images/3d2/dxxcl_yz_0014.jpg", id:"dxxcl_yz_0014"},
		{src:"images/3d2/dxxcl_yz_0015.jpg", id:"dxxcl_yz_0015"},
		{src:"images/3d2/dxxcl_yz_0016.jpg", id:"dxxcl_yz_0016"},
		{src:"images/3d2/dxxcl_yz_0017.jpg", id:"dxxcl_yz_0017"},
		{src:"images/3d2/dxxcl_yz_0018.jpg", id:"dxxcl_yz_0018"},
		{src:"images/3d2/dxxcl_yz_0019.jpg", id:"dxxcl_yz_0019"},
		{src:"images/3d2/dxxcl_yz_0020.jpg", id:"dxxcl_yz_0020"},
		{src:"images/3d2/dxxcl_yz_0021.jpg", id:"dxxcl_yz_0021"},
		{src:"images/3d2/dxxcl_yz_0022.jpg", id:"dxxcl_yz_0022"},
		{src:"images/3d2/dxxcl_yz_0023.jpg", id:"dxxcl_yz_0023"},
		{src:"images/3d2/dxxcl_yz_0024.jpg", id:"dxxcl_yz_0024"},
		{src:"images/3d2/dxxcl_yz_0025.jpg", id:"dxxcl_yz_0025"},
		{src:"images/3d2/dxxcl_yz_0026.jpg", id:"dxxcl_yz_0026"},
		{src:"images/3d2/dxxcl_yz_0027.jpg", id:"dxxcl_yz_0027"},
		{src:"images/3d2/dxxcl_yz_0028.jpg", id:"dxxcl_yz_0028"},
		{src:"images/3d2/dxxcl_yz_0029.jpg", id:"dxxcl_yz_0029"},
		{src:"images/3d2/dxxcl_yz_0030.jpg", id:"dxxcl_yz_0030"},
		{src:"images/3d2/dxxcl_yz_0031.jpg", id:"dxxcl_yz_0031"},
		{src:"images/3d2/dxxcl_yz_0032.jpg", id:"dxxcl_yz_0032"},
		{src:"images/3d2/dxxcl_yz_0033.jpg", id:"dxxcl_yz_0033"},
		{src:"images/3d2/dxxcl_yz_0034.jpg", id:"dxxcl_yz_0034"},
		{src:"images/3d2/dxxcl_yz_0035.jpg", id:"dxxcl_yz_0035"},
		{src:"images/3d2/dxxcl_yz_0036.jpg", id:"dxxcl_yz_0036"},
		{src:"images/3d2/dxxcl_yz_0037.jpg", id:"dxxcl_yz_0037"},
		{src:"images/3d2/dxxcl_yz_0038.jpg", id:"dxxcl_yz_0038"},
		{src:"images/3d2/dxxcl_yz_0039.jpg", id:"dxxcl_yz_0039"},
		{src:"images/3d2/dxxcl_yz_0040.jpg", id:"dxxcl_yz_0040"},
		{src:"images/3d2/dxxcl_yz_0041.jpg", id:"dxxcl_yz_0041"},
		{src:"images/3d2/dxxcl_yz_0042.jpg", id:"dxxcl_yz_0042"},
		{src:"images/3d2/dxxcl_yz_0043.jpg", id:"dxxcl_yz_0043"},
		{src:"images/3d2/dxxcl_yz_0044.jpg", id:"dxxcl_yz_0044"},
		{src:"images/3d2/dxxcl_yz_0045.jpg", id:"dxxcl_yz_0045"},
		{src:"images/3d2/dxxcl_yz_0046.jpg", id:"dxxcl_yz_0046"},
		{src:"images/3d2/dxxcl_yz_0047.jpg", id:"dxxcl_yz_0047"},
		{src:"images/3d2/dxxcl_yz_0048.jpg", id:"dxxcl_yz_0048"},
		{src:"images/3d2/dxxcl_yz_0049.jpg", id:"dxxcl_yz_0049"},
		{src:"images/3d2/dxxcl_yz_0050.jpg", id:"dxxcl_yz_0050"},
		{src:"images/3d2/dxxcl_yz_0051.jpg", id:"dxxcl_yz_0051"},
		{src:"images/3d2/dxxcl_yz_0052.jpg", id:"dxxcl_yz_0052"},
		{src:"images/3d2/dxxcl_yz_0053.jpg", id:"dxxcl_yz_0053"},
		{src:"images/3d2/dxxcl_yz_0054.jpg", id:"dxxcl_yz_0054"},
		{src:"images/3d2/dxxcl_yz_0055.jpg", id:"dxxcl_yz_0055"},
		{src:"images/3d2/dxxcl_yz_0056.jpg", id:"dxxcl_yz_0056"},
		{src:"images/3d2/dxxcl_yz_0057.jpg", id:"dxxcl_yz_0057"},
		{src:"images/3d2/dxxcl_yz_0058.jpg", id:"dxxcl_yz_0058"},
		{src:"images/3d2/dxxcl_yz_0059.jpg", id:"dxxcl_yz_0059"},
		{src:"images/3d2/dxxcl_yz_0060.jpg", id:"dxxcl_yz_0060"},
		{src:"images/3d2/dxxcl_yz_0061.jpg", id:"dxxcl_yz_0061"},
		{src:"images/3d2/dxxcl_yz_0062.jpg", id:"dxxcl_yz_0062"},
		{src:"images/3d2/dxxcl_yz_0063.jpg", id:"dxxcl_yz_0063"},
		{src:"images/3d2/dxxcl_yz_0064.jpg", id:"dxxcl_yz_0064"},
		{src:"images/3d2/dxxcl_yz_0065.jpg", id:"dxxcl_yz_0065"},
		{src:"images/3d2/dxxcl_yz_0066.jpg", id:"dxxcl_yz_0066"},
		{src:"images/3d2/dxxcl_yz_0067.jpg", id:"dxxcl_yz_0067"},
		{src:"images/3d2/dxxcl_yz_0068.jpg", id:"dxxcl_yz_0068"},
		{src:"images/3d2/dxxcl_yz_0069.jpg", id:"dxxcl_yz_0069"},
		{src:"images/3d2/dxxcl_yz_0070.jpg", id:"dxxcl_yz_0070"},
		{src:"images/3d2/dxxcl_yz_0071.jpg", id:"dxxcl_yz_0071"},
		{src:"images/3d2/dxxcl_yz_0072.jpg", id:"dxxcl_yz_0072"},
		{src:"images/3d2/dxxcl_yz_0073.jpg", id:"dxxcl_yz_0073"},
		{src:"images/3d2/dxxcl_yz_0074.jpg", id:"dxxcl_yz_0074"},
		{src:"images/3d2/dxxcl_yz_0075.jpg", id:"dxxcl_yz_0075"},
		{src:"images/3d2/dxxcl_yz_0076.jpg", id:"dxxcl_yz_0076"},
		{src:"images/3d2/dxxcl_yz_0077.jpg", id:"dxxcl_yz_0077"},
		{src:"images/3d2/dxxcl_yz_0078.jpg", id:"dxxcl_yz_0078"},
		{src:"images/3d2/dxxcl_yz_0079.jpg", id:"dxxcl_yz_0079"},
		{src:"images/3d2/dxxcl_yz_0080.jpg", id:"dxxcl_yz_0080"},
		{src:"images/3d2/dxxcl_yz_0081.jpg", id:"dxxcl_yz_0081"},
		{src:"images/3d2/dxxcl_yz_0082.jpg", id:"dxxcl_yz_0082"},
		{src:"images/3d2/dxxcl_yz_0083.jpg", id:"dxxcl_yz_0083"},
		{src:"images/3d2/dxxcl_yz_0084.jpg", id:"dxxcl_yz_0084"},
		{src:"images/3d2/dxxcl_yz_0085.jpg", id:"dxxcl_yz_0085"},
		{src:"images/3d2/dxxcl_yz_0086.jpg", id:"dxxcl_yz_0086"},
		{src:"images/3d2/dxxcl_yz_0087.jpg", id:"dxxcl_yz_0087"},
		{src:"images/3d2/dxxcl_yz_0088.jpg", id:"dxxcl_yz_0088"},
		{src:"images/3d2/dxxcl_yz_0089.jpg", id:"dxxcl_yz_0089"},
		{src:"images/3d2/dxxcl_yz_0090.jpg", id:"dxxcl_yz_0090"},
		{src:"images/3d2/dxxcl_yz_0091.jpg", id:"dxxcl_yz_0091"},
		{src:"images/3d2/dxxcl_yz_0092.jpg", id:"dxxcl_yz_0092"},
		{src:"images/3d2/dxxcl_yz_0093.jpg", id:"dxxcl_yz_0093"},
		{src:"images/3d2/dxxcl_yz_0094.jpg", id:"dxxcl_yz_0094"},
		{src:"images/3d2/dxxcl_yz_0095.jpg", id:"dxxcl_yz_0095"},
		{src:"images/3d2/dxxcl_yz_0096.jpg", id:"dxxcl_yz_0096"},
		{src:"images/3d2/dxxcl_yz_0097.jpg", id:"dxxcl_yz_0097"},
		{src:"images/3d2/dxxcl_yz_0098.jpg", id:"dxxcl_yz_0098"},
		{src:"images/3d2/dxxcl_yz_0099.jpg", id:"dxxcl_yz_0099"},
		{src:"images/3d2/dxxcl_yz_0100.jpg", id:"dxxcl_yz_0100"},
		{src:"images/3d2/dxxcl_yz_0101.jpg", id:"dxxcl_yz_0101"},
		{src:"images/3d2/dxxcl_yz_0102.jpg", id:"dxxcl_yz_0102"},
		{src:"images/3d2/dxxcl_yz_0103.jpg", id:"dxxcl_yz_0103"},
		{src:"images/3d2/dxxcl_yz_0104.jpg", id:"dxxcl_yz_0104"},
		{src:"images/3d2/dxxcl_yz_0105.jpg", id:"dxxcl_yz_0105"},
		{src:"images/3d2/dxxcl_yz_0106.jpg", id:"dxxcl_yz_0106"},
		{src:"images/3d2/dxxcl_yz_0107.jpg", id:"dxxcl_yz_0107"},
		{src:"images/3d2/dxxcl_yz_0108.jpg", id:"dxxcl_yz_0108"},
		{src:"images/3d2/dxxcl_yz_0109.jpg", id:"dxxcl_yz_0109"},
		{src:"images/3d2/dxxcl_yz_0110.jpg", id:"dxxcl_yz_0110"},
		{src:"images/3d2/dxxcl_yz_0111.jpg", id:"dxxcl_yz_0111"},
		{src:"images/3d2/dxxcl_yz_0112.jpg", id:"dxxcl_yz_0112"},
		{src:"images/3d2/dxxcl_yz_0113.jpg", id:"dxxcl_yz_0113"},
		{src:"images/3d2/dxxcl_yz_0114.jpg", id:"dxxcl_yz_0114"},
		{src:"images/3d2/dxxcl_yz_0115.jpg", id:"dxxcl_yz_0115"},
		{src:"images/3d2/dxxcl_yz_0116.jpg", id:"dxxcl_yz_0116"},
		{src:"images/3d2/dxxcl_yz_0117.jpg", id:"dxxcl_yz_0117"},
		{src:"images/3d2/dxxcl_yz_0118.jpg", id:"dxxcl_yz_0118"},
		{src:"images/3d2/dxxcl_yz_0119.jpg", id:"dxxcl_yz_0119"},
		{src:"images/3d2/dxxcl_yz_0120.jpg", id:"dxxcl_yz_0120"},
		{src:"images/3d2/dxxcl_yz_0121.jpg", id:"dxxcl_yz_0121"},
		{src:"images/3d2/dxxcl_yz_0122.jpg", id:"dxxcl_yz_0122"},
		{src:"images/3d2/dxxcl_yz_0123.jpg", id:"dxxcl_yz_0123"},
		{src:"images/3d2/dxxcl_yz_0124.jpg", id:"dxxcl_yz_0124"},
		{src:"images/3d2/dxxcl_yz_0125.jpg", id:"dxxcl_yz_0125"},
		{src:"images/3d2/dxxcl_yz_0126.jpg", id:"dxxcl_yz_0126"},
		{src:"images/3d2/dxxcl_yz_0127.jpg", id:"dxxcl_yz_0127"},
		{src:"images/3d2/dxxcl_yz_0128.jpg", id:"dxxcl_yz_0128"},
		{src:"images/3d2/dxxcl_yz_0129.jpg", id:"dxxcl_yz_0129"},
		{src:"images/3d2/dxxcl_yz_0130.jpg", id:"dxxcl_yz_0130"},
		{src:"images/3d2/dxxcl_yz_0131.jpg", id:"dxxcl_yz_0131"},
		{src:"images/3d2/dxxcl_yz_0132.jpg", id:"dxxcl_yz_0132"},
		{src:"images/3d2/dxxcl_yz_0133.jpg", id:"dxxcl_yz_0133"},
		{src:"images/3d2/dxxcl_yz_0134.jpg", id:"dxxcl_yz_0134"},
		{src:"images/3d2/dxxcl_yz_0135.jpg", id:"dxxcl_yz_0135"},
		{src:"images/3d2/dxxcl_yz_0136.jpg", id:"dxxcl_yz_0136"},
		{src:"images/3d2/dxxcl_yz_0137.jpg", id:"dxxcl_yz_0137"},
		{src:"images/3d2/dxxcl_yz_0138.jpg", id:"dxxcl_yz_0138"},
		{src:"images/3d2/dxxcl_yz_0139.jpg", id:"dxxcl_yz_0139"},
		{src:"images/3d2/dxxcl_yz_0140.jpg", id:"dxxcl_yz_0140"},
		{src:"images/3d2/dxxcl_yz_0141.jpg", id:"dxxcl_yz_0141"},
		{src:"images/3d2/dxxcl_yz_0142.jpg", id:"dxxcl_yz_0142"},
		{src:"images/3d2/dxxcl_yz_0143.jpg", id:"dxxcl_yz_0143"},
		{src:"images/3d2/dxxcl_yz_0144.jpg", id:"dxxcl_yz_0144"},
		{src:"images/3d2/dxxcl_yz_0145.jpg", id:"dxxcl_yz_0145"},
		{src:"images/3d2/dxxcl_yz_0146.jpg", id:"dxxcl_yz_0146"},
		{src:"images/3d2/dxxcl_yz_0147.jpg", id:"dxxcl_yz_0147"},
		{src:"images/3d2/dxxcl_yz_0148.jpg", id:"dxxcl_yz_0148"},
		{src:"images/3d2/dxxcl_yz_0149.jpg", id:"dxxcl_yz_0149"},
		{src:"images/3d2/dxxcl_yz_0150.jpg", id:"dxxcl_yz_0150"},
		{src:"images/3d2/dxxcl_yz_0151.jpg", id:"dxxcl_yz_0151"},
		{src:"images/3d2/dxxcl_yz_0152.jpg", id:"dxxcl_yz_0152"},
		{src:"images/3d2/dxxcl_yz_0153.jpg", id:"dxxcl_yz_0153"},
		{src:"images/3d2/dxxcl_yz_0154.jpg", id:"dxxcl_yz_0154"},
		{src:"images/3d2/dxxcl_yz_0155.jpg", id:"dxxcl_yz_0155"},
		{src:"images/3d2/dxxcl_yz_0156.jpg", id:"dxxcl_yz_0156"},
		{src:"images/3d2/dxxcl_yz_0157.jpg", id:"dxxcl_yz_0157"},
		{src:"images/3d2/dxxcl_yz_0158.jpg", id:"dxxcl_yz_0158"},
		{src:"images/3d2/dxxcl_yz_0159.jpg", id:"dxxcl_yz_0159"},
		{src:"images/3d2/dxxcl_yz_0160.jpg", id:"dxxcl_yz_0160"},
		{src:"images/3d2/dxxcl_yz_0161.jpg", id:"dxxcl_yz_0161"},
		{src:"images/3d2/dxxcl_yz_0162.jpg", id:"dxxcl_yz_0162"},
		{src:"images/3d2/dxxcl_yz_0163.jpg", id:"dxxcl_yz_0163"},
		{src:"images/3d2/dxxcl_yz_0164.jpg", id:"dxxcl_yz_0164"},
		{src:"images/3d2/dxxcl_yz_0165.jpg", id:"dxxcl_yz_0165"},
		{src:"images/3d2/dxxcl_yz_0166.jpg", id:"dxxcl_yz_0166"},
		{src:"images/3d2/dxxcl_yz_0167.jpg", id:"dxxcl_yz_0167"},
		{src:"images/3d2/dxxcl_yz_0168.jpg", id:"dxxcl_yz_0168"},
		{src:"images/3d2/dxxcl_yz_0169.jpg", id:"dxxcl_yz_0169"},
		{src:"images/3d2/dxxcl_yz_0170.jpg", id:"dxxcl_yz_0170"},
		{src:"images/3d2/dxxcl_yz_0171.jpg", id:"dxxcl_yz_0171"},
		{src:"images/3d2/dxxcl_yz_0172.jpg", id:"dxxcl_yz_0172"},
		{src:"images/3d2/dxxcl_yz_0173.jpg", id:"dxxcl_yz_0173"},
		{src:"images/3d2/dxxcl_yz_0174.jpg", id:"dxxcl_yz_0174"},
		{src:"images/3d2/dxxcl_yz_0175.jpg", id:"dxxcl_yz_0175"},
		{src:"images/3d2/dxxcl_yz_0176.jpg", id:"dxxcl_yz_0176"},
		{src:"images/3d2/dxxcl_yz_0177.jpg", id:"dxxcl_yz_0177"},
		{src:"images/3d2/dxxcl_yz_0178.jpg", id:"dxxcl_yz_0178"},
		{src:"images/3d2/dxxcl_yz_0179.jpg", id:"dxxcl_yz_0179"},
		{src:"images/3d2/dxxcl_yz_0180.jpg", id:"dxxcl_yz_0180"},
		{src:"images/3d2/dxxcl_yz_0181.jpg", id:"dxxcl_yz_0181"},
		{src:"images/3d2/dxxcl_yz_0182.jpg", id:"dxxcl_yz_0182"},
		{src:"images/3d2/dxxcl_yz_0183.jpg", id:"dxxcl_yz_0183"},
		{src:"images/3d2/dxxcl_yz_0184.jpg", id:"dxxcl_yz_0184"},
		{src:"images/3d2/dxxcl_yz_0185.jpg", id:"dxxcl_yz_0185"},
		{src:"images/3d2/dxxcl_yz_0186.jpg", id:"dxxcl_yz_0186"},
		{src:"images/3d2/dxxcl_yz_0187.jpg", id:"dxxcl_yz_0187"},
		{src:"images/3d2/dxxcl_yz_0188.jpg", id:"dxxcl_yz_0188"},
		{src:"images/3d2/dxxcl_yz_0189.jpg", id:"dxxcl_yz_0189"},
		{src:"images/3d2/dxxcl_yz_0190.jpg", id:"dxxcl_yz_0190"},
		{src:"images/3d2/dxxcl_yz_0191.jpg", id:"dxxcl_yz_0191"},
		{src:"images/3d2/dxxcl_yz_0192.jpg", id:"dxxcl_yz_0192"},
		{src:"images/3d2/dxxcl_yz_0193.jpg", id:"dxxcl_yz_0193"},
		{src:"images/3d2/dxxcl_yz_0194.jpg", id:"dxxcl_yz_0194"},
		{src:"images/3d2/dxxcl_yz_0195.jpg", id:"dxxcl_yz_0195"},
		{src:"images/3d2/dxxcl_yz_0196.jpg", id:"dxxcl_yz_0196"},
		{src:"images/3d2/dxxcl_yz_0197.jpg", id:"dxxcl_yz_0197"},
		{src:"images/3d2/dxxcl_yz_0198.jpg", id:"dxxcl_yz_0198"},
		{src:"images/3d2/dxxcl_yz_0199.jpg", id:"dxxcl_yz_0199"},
		{src:"images/3d2/dxxcl_yz_0200.jpg", id:"dxxcl_yz_0200"}
	],
	preloads: []
};




})(lib3d2 = lib3d2||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3d2, images, createjs, ss, AdobeAn;