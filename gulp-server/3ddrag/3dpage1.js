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



(lib.bsxwk0000 = function() {
	this.initialize(img.bsxwk0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0001 = function() {
	this.initialize(img.bsxwk0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0002 = function() {
	this.initialize(img.bsxwk0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0003 = function() {
	this.initialize(img.bsxwk0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0004 = function() {
	this.initialize(img.bsxwk0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0005 = function() {
	this.initialize(img.bsxwk0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0006 = function() {
	this.initialize(img.bsxwk0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0007 = function() {
	this.initialize(img.bsxwk0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0008 = function() {
	this.initialize(img.bsxwk0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0009 = function() {
	this.initialize(img.bsxwk0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0010 = function() {
	this.initialize(img.bsxwk0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0011 = function() {
	this.initialize(img.bsxwk0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0012 = function() {
	this.initialize(img.bsxwk0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0013 = function() {
	this.initialize(img.bsxwk0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0014 = function() {
	this.initialize(img.bsxwk0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0015 = function() {
	this.initialize(img.bsxwk0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0016 = function() {
	this.initialize(img.bsxwk0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0017 = function() {
	this.initialize(img.bsxwk0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0018 = function() {
	this.initialize(img.bsxwk0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0019 = function() {
	this.initialize(img.bsxwk0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0020 = function() {
	this.initialize(img.bsxwk0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0021 = function() {
	this.initialize(img.bsxwk0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0022 = function() {
	this.initialize(img.bsxwk0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0023 = function() {
	this.initialize(img.bsxwk0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0024 = function() {
	this.initialize(img.bsxwk0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0025 = function() {
	this.initialize(img.bsxwk0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0026 = function() {
	this.initialize(img.bsxwk0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0027 = function() {
	this.initialize(img.bsxwk0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0028 = function() {
	this.initialize(img.bsxwk0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0029 = function() {
	this.initialize(img.bsxwk0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0030 = function() {
	this.initialize(img.bsxwk0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0031 = function() {
	this.initialize(img.bsxwk0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0032 = function() {
	this.initialize(img.bsxwk0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0033 = function() {
	this.initialize(img.bsxwk0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0034 = function() {
	this.initialize(img.bsxwk0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0035 = function() {
	this.initialize(img.bsxwk0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0036 = function() {
	this.initialize(img.bsxwk0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0037 = function() {
	this.initialize(img.bsxwk0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0038 = function() {
	this.initialize(img.bsxwk0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0039 = function() {
	this.initialize(img.bsxwk0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0040 = function() {
	this.initialize(img.bsxwk0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0041 = function() {
	this.initialize(img.bsxwk0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0042 = function() {
	this.initialize(img.bsxwk0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0043 = function() {
	this.initialize(img.bsxwk0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0044 = function() {
	this.initialize(img.bsxwk0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0045 = function() {
	this.initialize(img.bsxwk0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0046 = function() {
	this.initialize(img.bsxwk0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0047 = function() {
	this.initialize(img.bsxwk0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0048 = function() {
	this.initialize(img.bsxwk0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0049 = function() {
	this.initialize(img.bsxwk0049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0050 = function() {
	this.initialize(img.bsxwk0050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0051 = function() {
	this.initialize(img.bsxwk0051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0052 = function() {
	this.initialize(img.bsxwk0052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0053 = function() {
	this.initialize(img.bsxwk0053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0054 = function() {
	this.initialize(img.bsxwk0054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0055 = function() {
	this.initialize(img.bsxwk0055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0056 = function() {
	this.initialize(img.bsxwk0056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0057 = function() {
	this.initialize(img.bsxwk0057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0058 = function() {
	this.initialize(img.bsxwk0058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0059 = function() {
	this.initialize(img.bsxwk0059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0060 = function() {
	this.initialize(img.bsxwk0060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0061 = function() {
	this.initialize(img.bsxwk0061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0062 = function() {
	this.initialize(img.bsxwk0062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0063 = function() {
	this.initialize(img.bsxwk0063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0064 = function() {
	this.initialize(img.bsxwk0064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0065 = function() {
	this.initialize(img.bsxwk0065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0066 = function() {
	this.initialize(img.bsxwk0066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0067 = function() {
	this.initialize(img.bsxwk0067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0068 = function() {
	this.initialize(img.bsxwk0068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0069 = function() {
	this.initialize(img.bsxwk0069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0070 = function() {
	this.initialize(img.bsxwk0070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0071 = function() {
	this.initialize(img.bsxwk0071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0072 = function() {
	this.initialize(img.bsxwk0072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0073 = function() {
	this.initialize(img.bsxwk0073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0074 = function() {
	this.initialize(img.bsxwk0074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0075 = function() {
	this.initialize(img.bsxwk0075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0076 = function() {
	this.initialize(img.bsxwk0076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0077 = function() {
	this.initialize(img.bsxwk0077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0078 = function() {
	this.initialize(img.bsxwk0078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0079 = function() {
	this.initialize(img.bsxwk0079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0080 = function() {
	this.initialize(img.bsxwk0080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0081 = function() {
	this.initialize(img.bsxwk0081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0082 = function() {
	this.initialize(img.bsxwk0082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0083 = function() {
	this.initialize(img.bsxwk0083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0084 = function() {
	this.initialize(img.bsxwk0084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0085 = function() {
	this.initialize(img.bsxwk0085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0086 = function() {
	this.initialize(img.bsxwk0086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0087 = function() {
	this.initialize(img.bsxwk0087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0088 = function() {
	this.initialize(img.bsxwk0088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0089 = function() {
	this.initialize(img.bsxwk0089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0090 = function() {
	this.initialize(img.bsxwk0090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0091 = function() {
	this.initialize(img.bsxwk0091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0092 = function() {
	this.initialize(img.bsxwk0092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0093 = function() {
	this.initialize(img.bsxwk0093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0094 = function() {
	this.initialize(img.bsxwk0094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0095 = function() {
	this.initialize(img.bsxwk0095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0096 = function() {
	this.initialize(img.bsxwk0096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0097 = function() {
	this.initialize(img.bsxwk0097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0098 = function() {
	this.initialize(img.bsxwk0098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0099 = function() {
	this.initialize(img.bsxwk0099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0100 = function() {
	this.initialize(img.bsxwk0100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0101 = function() {
	this.initialize(img.bsxwk0101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0102 = function() {
	this.initialize(img.bsxwk0102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0103 = function() {
	this.initialize(img.bsxwk0103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0104 = function() {
	this.initialize(img.bsxwk0104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0105 = function() {
	this.initialize(img.bsxwk0105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0106 = function() {
	this.initialize(img.bsxwk0106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0107 = function() {
	this.initialize(img.bsxwk0107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0108 = function() {
	this.initialize(img.bsxwk0108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0109 = function() {
	this.initialize(img.bsxwk0109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0110 = function() {
	this.initialize(img.bsxwk0110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0111 = function() {
	this.initialize(img.bsxwk0111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0112 = function() {
	this.initialize(img.bsxwk0112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0113 = function() {
	this.initialize(img.bsxwk0113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0114 = function() {
	this.initialize(img.bsxwk0114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0115 = function() {
	this.initialize(img.bsxwk0115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0116 = function() {
	this.initialize(img.bsxwk0116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0117 = function() {
	this.initialize(img.bsxwk0117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0118 = function() {
	this.initialize(img.bsxwk0118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0119 = function() {
	this.initialize(img.bsxwk0119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0120 = function() {
	this.initialize(img.bsxwk0120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0121 = function() {
	this.initialize(img.bsxwk0121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0122 = function() {
	this.initialize(img.bsxwk0122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0123 = function() {
	this.initialize(img.bsxwk0123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0124 = function() {
	this.initialize(img.bsxwk0124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0125 = function() {
	this.initialize(img.bsxwk0125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0126 = function() {
	this.initialize(img.bsxwk0126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0127 = function() {
	this.initialize(img.bsxwk0127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0128 = function() {
	this.initialize(img.bsxwk0128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0129 = function() {
	this.initialize(img.bsxwk0129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0130 = function() {
	this.initialize(img.bsxwk0130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0131 = function() {
	this.initialize(img.bsxwk0131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0132 = function() {
	this.initialize(img.bsxwk0132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0133 = function() {
	this.initialize(img.bsxwk0133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0134 = function() {
	this.initialize(img.bsxwk0134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0135 = function() {
	this.initialize(img.bsxwk0135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0136 = function() {
	this.initialize(img.bsxwk0136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0137 = function() {
	this.initialize(img.bsxwk0137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0138 = function() {
	this.initialize(img.bsxwk0138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0139 = function() {
	this.initialize(img.bsxwk0139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0140 = function() {
	this.initialize(img.bsxwk0140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0141 = function() {
	this.initialize(img.bsxwk0141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0142 = function() {
	this.initialize(img.bsxwk0142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0143 = function() {
	this.initialize(img.bsxwk0143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0144 = function() {
	this.initialize(img.bsxwk0144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0145 = function() {
	this.initialize(img.bsxwk0145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0146 = function() {
	this.initialize(img.bsxwk0146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0147 = function() {
	this.initialize(img.bsxwk0147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0148 = function() {
	this.initialize(img.bsxwk0148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0149 = function() {
	this.initialize(img.bsxwk0149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.bsxwk0150 = function() {
	this.initialize(img.bsxwk0150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,558);


(lib.modelMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_452 = function() {
		this.gotoAndPlay(379);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(452).call(this.frame_452).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpZApaMAAAhSzMBSzAAAMAAABSzg");
	mask.setTransform(265,265);

	// 图层 6
	this.instance = new lib.bsxwk0000();
	this.instance.parent = this;
	this.instance.setTransform(-48,-17);

	this.instance_1 = new lib.bsxwk0001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48,-17);

	this.instance_2 = new lib.bsxwk0002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-48,-17);

	this.instance_3 = new lib.bsxwk0003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-48,-17);

	this.instance_4 = new lib.bsxwk0004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-48,-17);

	this.instance_5 = new lib.bsxwk0005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-48,-17);

	this.instance_6 = new lib.bsxwk0006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-48,-17);

	this.instance_7 = new lib.bsxwk0007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-48,-17);

	this.instance_8 = new lib.bsxwk0008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-48,-17);

	this.instance_9 = new lib.bsxwk0009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-48,-17);

	this.instance_10 = new lib.bsxwk0010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-48,-17);

	this.instance_11 = new lib.bsxwk0011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-48,-17);

	this.instance_12 = new lib.bsxwk0012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-48,-17);

	this.instance_13 = new lib.bsxwk0013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-48,-17);

	this.instance_14 = new lib.bsxwk0014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-48,-17);

	this.instance_15 = new lib.bsxwk0015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-48,-17);

	this.instance_16 = new lib.bsxwk0016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-48,-17);

	this.instance_17 = new lib.bsxwk0017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-48,-17);

	this.instance_18 = new lib.bsxwk0018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-48,-17);

	this.instance_19 = new lib.bsxwk0019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-48,-17);

	this.instance_20 = new lib.bsxwk0020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-48,-17);

	this.instance_21 = new lib.bsxwk0021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-48,-17);

	this.instance_22 = new lib.bsxwk0022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-48,-17);

	this.instance_23 = new lib.bsxwk0023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-48,-17);

	this.instance_24 = new lib.bsxwk0024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-48,-17);

	this.instance_25 = new lib.bsxwk0025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-48,-17);

	this.instance_26 = new lib.bsxwk0026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-48,-17);

	this.instance_27 = new lib.bsxwk0027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-48,-17);

	this.instance_28 = new lib.bsxwk0028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-48,-17);

	this.instance_29 = new lib.bsxwk0029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-48,-17);

	this.instance_30 = new lib.bsxwk0030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-48,-17);

	this.instance_31 = new lib.bsxwk0031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-48,-17);

	this.instance_32 = new lib.bsxwk0032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-48,-17);

	this.instance_33 = new lib.bsxwk0033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-48,-17);

	this.instance_34 = new lib.bsxwk0034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-48,-17);

	this.instance_35 = new lib.bsxwk0035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-48,-17);

	this.instance_36 = new lib.bsxwk0036();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-48,-17);

	this.instance_37 = new lib.bsxwk0037();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-48,-17);

	this.instance_38 = new lib.bsxwk0038();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-48,-17);

	this.instance_39 = new lib.bsxwk0039();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-48,-17);

	this.instance_40 = new lib.bsxwk0040();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-48,-17);

	this.instance_41 = new lib.bsxwk0041();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-48,-17);

	this.instance_42 = new lib.bsxwk0042();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-48,-17);

	this.instance_43 = new lib.bsxwk0043();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-48,-17);

	this.instance_44 = new lib.bsxwk0044();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-48,-17);

	this.instance_45 = new lib.bsxwk0045();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-48,-17);

	this.instance_46 = new lib.bsxwk0046();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-48,-17);

	this.instance_47 = new lib.bsxwk0047();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-48,-17);

	this.instance_48 = new lib.bsxwk0048();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-48,-17);

	this.instance_49 = new lib.bsxwk0049();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-48,-17);

	this.instance_50 = new lib.bsxwk0050();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-48,-17);

	this.instance_51 = new lib.bsxwk0051();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-48,-17);

	this.instance_52 = new lib.bsxwk0052();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-48,-17);

	this.instance_53 = new lib.bsxwk0053();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-48,-17);

	this.instance_54 = new lib.bsxwk0054();
	this.instance_54.parent = this;
	this.instance_54.setTransform(-48,-17);

	this.instance_55 = new lib.bsxwk0055();
	this.instance_55.parent = this;
	this.instance_55.setTransform(-48,-17);

	this.instance_56 = new lib.bsxwk0056();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-48,-17);

	this.instance_57 = new lib.bsxwk0057();
	this.instance_57.parent = this;
	this.instance_57.setTransform(-48,-17);

	this.instance_58 = new lib.bsxwk0058();
	this.instance_58.parent = this;
	this.instance_58.setTransform(-48,-17);

	this.instance_59 = new lib.bsxwk0059();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-48,-17);

	this.instance_60 = new lib.bsxwk0060();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-48,-17);

	this.instance_61 = new lib.bsxwk0061();
	this.instance_61.parent = this;
	this.instance_61.setTransform(-48,-17);

	this.instance_62 = new lib.bsxwk0062();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-48,-17);

	this.instance_63 = new lib.bsxwk0063();
	this.instance_63.parent = this;
	this.instance_63.setTransform(-48,-17);

	this.instance_64 = new lib.bsxwk0064();
	this.instance_64.parent = this;
	this.instance_64.setTransform(-48,-17);

	this.instance_65 = new lib.bsxwk0065();
	this.instance_65.parent = this;
	this.instance_65.setTransform(-48,-17);

	this.instance_66 = new lib.bsxwk0066();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-48,-17);

	this.instance_67 = new lib.bsxwk0067();
	this.instance_67.parent = this;
	this.instance_67.setTransform(-48,-17);

	this.instance_68 = new lib.bsxwk0068();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-48,-17);

	this.instance_69 = new lib.bsxwk0069();
	this.instance_69.parent = this;
	this.instance_69.setTransform(-48,-17);

	this.instance_70 = new lib.bsxwk0070();
	this.instance_70.parent = this;
	this.instance_70.setTransform(-48,-17);

	this.instance_71 = new lib.bsxwk0071();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-48,-17);

	this.instance_72 = new lib.bsxwk0072();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-48,-17);

	this.instance_73 = new lib.bsxwk0073();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-48,-17);

	this.instance_74 = new lib.bsxwk0074();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-48,-17);

	this.instance_75 = new lib.bsxwk0075();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-48,-17);

	this.instance_76 = new lib.bsxwk0076();
	this.instance_76.parent = this;
	this.instance_76.setTransform(-48,-17);

	this.instance_77 = new lib.bsxwk0077();
	this.instance_77.parent = this;
	this.instance_77.setTransform(-48,-17);

	this.instance_78 = new lib.bsxwk0078();
	this.instance_78.parent = this;
	this.instance_78.setTransform(-48,-17);

	this.instance_79 = new lib.bsxwk0079();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-48,-17);

	this.instance_80 = new lib.bsxwk0080();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-48,-17);

	this.instance_81 = new lib.bsxwk0081();
	this.instance_81.parent = this;
	this.instance_81.setTransform(-48,-17);

	this.instance_82 = new lib.bsxwk0082();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-48,-17);

	this.instance_83 = new lib.bsxwk0083();
	this.instance_83.parent = this;
	this.instance_83.setTransform(-48,-17);

	this.instance_84 = new lib.bsxwk0084();
	this.instance_84.parent = this;
	this.instance_84.setTransform(-48,-17);

	this.instance_85 = new lib.bsxwk0085();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-48,-17);

	this.instance_86 = new lib.bsxwk0086();
	this.instance_86.parent = this;
	this.instance_86.setTransform(-48,-17);

	this.instance_87 = new lib.bsxwk0087();
	this.instance_87.parent = this;
	this.instance_87.setTransform(-48,-17);

	this.instance_88 = new lib.bsxwk0088();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-48,-17);

	this.instance_89 = new lib.bsxwk0089();
	this.instance_89.parent = this;
	this.instance_89.setTransform(-48,-17);

	this.instance_90 = new lib.bsxwk0090();
	this.instance_90.parent = this;
	this.instance_90.setTransform(-48,-17);

	this.instance_91 = new lib.bsxwk0091();
	this.instance_91.parent = this;
	this.instance_91.setTransform(-48,-17);

	this.instance_92 = new lib.bsxwk0092();
	this.instance_92.parent = this;
	this.instance_92.setTransform(-48,-17);

	this.instance_93 = new lib.bsxwk0093();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-48,-17);

	this.instance_94 = new lib.bsxwk0094();
	this.instance_94.parent = this;
	this.instance_94.setTransform(-48,-17);

	this.instance_95 = new lib.bsxwk0095();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-48,-17);

	this.instance_96 = new lib.bsxwk0096();
	this.instance_96.parent = this;
	this.instance_96.setTransform(-48,-17);

	this.instance_97 = new lib.bsxwk0097();
	this.instance_97.parent = this;
	this.instance_97.setTransform(-48,-17);

	this.instance_98 = new lib.bsxwk0098();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-48,-17);

	this.instance_99 = new lib.bsxwk0099();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-48,-17);

	this.instance_100 = new lib.bsxwk0100();
	this.instance_100.parent = this;
	this.instance_100.setTransform(-48,-17);

	this.instance_101 = new lib.bsxwk0101();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-48,-17);

	this.instance_102 = new lib.bsxwk0102();
	this.instance_102.parent = this;
	this.instance_102.setTransform(-48,-17);

	this.instance_103 = new lib.bsxwk0103();
	this.instance_103.parent = this;
	this.instance_103.setTransform(-48,-17);

	this.instance_104 = new lib.bsxwk0104();
	this.instance_104.parent = this;
	this.instance_104.setTransform(-48,-17);

	this.instance_105 = new lib.bsxwk0105();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-48,-17);

	this.instance_106 = new lib.bsxwk0106();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-48,-17);

	this.instance_107 = new lib.bsxwk0107();
	this.instance_107.parent = this;
	this.instance_107.setTransform(-48,-17);

	this.instance_108 = new lib.bsxwk0108();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-48,-17);

	this.instance_109 = new lib.bsxwk0109();
	this.instance_109.parent = this;
	this.instance_109.setTransform(-48,-17);

	this.instance_110 = new lib.bsxwk0110();
	this.instance_110.parent = this;
	this.instance_110.setTransform(-48,-17);

	this.instance_111 = new lib.bsxwk0111();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-48,-17);

	this.instance_112 = new lib.bsxwk0112();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-48,-17);

	this.instance_113 = new lib.bsxwk0113();
	this.instance_113.parent = this;
	this.instance_113.setTransform(-48,-17);

	this.instance_114 = new lib.bsxwk0114();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-48,-17);

	this.instance_115 = new lib.bsxwk0115();
	this.instance_115.parent = this;
	this.instance_115.setTransform(-48,-17);

	this.instance_116 = new lib.bsxwk0116();
	this.instance_116.parent = this;
	this.instance_116.setTransform(-48,-17);

	this.instance_117 = new lib.bsxwk0117();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-48,-17);

	this.instance_118 = new lib.bsxwk0118();
	this.instance_118.parent = this;
	this.instance_118.setTransform(-48,-17);

	this.instance_119 = new lib.bsxwk0119();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-48,-17);

	this.instance_120 = new lib.bsxwk0120();
	this.instance_120.parent = this;
	this.instance_120.setTransform(-48,-17);

	this.instance_121 = new lib.bsxwk0121();
	this.instance_121.parent = this;
	this.instance_121.setTransform(-48,-17);

	this.instance_122 = new lib.bsxwk0122();
	this.instance_122.parent = this;
	this.instance_122.setTransform(-48,-17);

	this.instance_123 = new lib.bsxwk0123();
	this.instance_123.parent = this;
	this.instance_123.setTransform(-48,-17);

	this.instance_124 = new lib.bsxwk0124();
	this.instance_124.parent = this;
	this.instance_124.setTransform(-48,-17);

	this.instance_125 = new lib.bsxwk0125();
	this.instance_125.parent = this;
	this.instance_125.setTransform(-48,-17);

	this.instance_126 = new lib.bsxwk0126();
	this.instance_126.parent = this;
	this.instance_126.setTransform(-48,-17);

	this.instance_127 = new lib.bsxwk0127();
	this.instance_127.parent = this;
	this.instance_127.setTransform(-48,-17);

	this.instance_128 = new lib.bsxwk0128();
	this.instance_128.parent = this;
	this.instance_128.setTransform(-48,-17);

	this.instance_129 = new lib.bsxwk0129();
	this.instance_129.parent = this;
	this.instance_129.setTransform(-48,-17);

	this.instance_130 = new lib.bsxwk0130();
	this.instance_130.parent = this;
	this.instance_130.setTransform(-48,-17);

	this.instance_131 = new lib.bsxwk0131();
	this.instance_131.parent = this;
	this.instance_131.setTransform(-48,-17);

	this.instance_132 = new lib.bsxwk0132();
	this.instance_132.parent = this;
	this.instance_132.setTransform(-48,-17);

	this.instance_133 = new lib.bsxwk0133();
	this.instance_133.parent = this;
	this.instance_133.setTransform(-48,-17);

	this.instance_134 = new lib.bsxwk0134();
	this.instance_134.parent = this;
	this.instance_134.setTransform(-48,-17);

	this.instance_135 = new lib.bsxwk0135();
	this.instance_135.parent = this;
	this.instance_135.setTransform(-48,-17);

	this.instance_136 = new lib.bsxwk0136();
	this.instance_136.parent = this;
	this.instance_136.setTransform(-48,-17);

	this.instance_137 = new lib.bsxwk0137();
	this.instance_137.parent = this;
	this.instance_137.setTransform(-48,-17);

	this.instance_138 = new lib.bsxwk0138();
	this.instance_138.parent = this;
	this.instance_138.setTransform(-48,-17);

	this.instance_139 = new lib.bsxwk0139();
	this.instance_139.parent = this;
	this.instance_139.setTransform(-48,-17);

	this.instance_140 = new lib.bsxwk0140();
	this.instance_140.parent = this;
	this.instance_140.setTransform(-48,-17);

	this.instance_141 = new lib.bsxwk0141();
	this.instance_141.parent = this;
	this.instance_141.setTransform(-48,-17);

	this.instance_142 = new lib.bsxwk0142();
	this.instance_142.parent = this;
	this.instance_142.setTransform(-48,-17);

	this.instance_143 = new lib.bsxwk0143();
	this.instance_143.parent = this;
	this.instance_143.setTransform(-48,-17);

	this.instance_144 = new lib.bsxwk0144();
	this.instance_144.parent = this;
	this.instance_144.setTransform(-48,-17);

	this.instance_145 = new lib.bsxwk0145();
	this.instance_145.parent = this;
	this.instance_145.setTransform(-48,-17);

	this.instance_146 = new lib.bsxwk0146();
	this.instance_146.parent = this;
	this.instance_146.setTransform(-48,-17);

	this.instance_147 = new lib.bsxwk0147();
	this.instance_147.parent = this;
	this.instance_147.setTransform(-48,-17);

	this.instance_148 = new lib.bsxwk0148();
	this.instance_148.parent = this;
	this.instance_148.setTransform(-48,-17);

	this.instance_149 = new lib.bsxwk0149();
	this.instance_149.parent = this;
	this.instance_149.setTransform(-48,-17);

	this.instance_150 = new lib.bsxwk0150();
	this.instance_150.parent = this;
	this.instance_150.setTransform(-48,-17);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101,this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106,this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120,this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148,this.instance_149,this.instance_150];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_48}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_50}]},3).to({state:[{t:this.instance_51}]},3).to({state:[{t:this.instance_52}]},3).to({state:[{t:this.instance_53}]},3).to({state:[{t:this.instance_54}]},3).to({state:[{t:this.instance_55}]},3).to({state:[{t:this.instance_56}]},3).to({state:[{t:this.instance_57}]},3).to({state:[{t:this.instance_58}]},3).to({state:[{t:this.instance_59}]},3).to({state:[{t:this.instance_60}]},3).to({state:[{t:this.instance_61}]},3).to({state:[{t:this.instance_62}]},3).to({state:[{t:this.instance_63}]},3).to({state:[{t:this.instance_64}]},3).to({state:[{t:this.instance_65}]},3).to({state:[{t:this.instance_66}]},3).to({state:[{t:this.instance_67}]},3).to({state:[{t:this.instance_68}]},3).to({state:[{t:this.instance_69}]},3).to({state:[{t:this.instance_70}]},3).to({state:[{t:this.instance_71}]},3).to({state:[{t:this.instance_72}]},3).to({state:[{t:this.instance_73}]},3).to({state:[{t:this.instance_74}]},3).to({state:[{t:this.instance_75}]},3).to({state:[{t:this.instance_76}]},3).to({state:[{t:this.instance_77}]},3).to({state:[{t:this.instance_78}]},3).to({state:[{t:this.instance_79}]},3).to({state:[{t:this.instance_80}]},3).to({state:[{t:this.instance_81}]},3).to({state:[{t:this.instance_82}]},3).to({state:[{t:this.instance_83}]},3).to({state:[{t:this.instance_84}]},3).to({state:[{t:this.instance_85}]},3).to({state:[{t:this.instance_86}]},3).to({state:[{t:this.instance_87}]},3).to({state:[{t:this.instance_88}]},3).to({state:[{t:this.instance_89}]},3).to({state:[{t:this.instance_90}]},3).to({state:[{t:this.instance_91}]},3).to({state:[{t:this.instance_92}]},3).to({state:[{t:this.instance_93}]},3).to({state:[{t:this.instance_94}]},3).to({state:[{t:this.instance_95}]},3).to({state:[{t:this.instance_96}]},3).to({state:[{t:this.instance_97}]},3).to({state:[{t:this.instance_98}]},3).to({state:[{t:this.instance_99}]},3).to({state:[{t:this.instance_100}]},3).to({state:[{t:this.instance_101}]},3).to({state:[{t:this.instance_102}]},3).to({state:[{t:this.instance_103}]},3).to({state:[{t:this.instance_104}]},3).to({state:[{t:this.instance_105}]},3).to({state:[{t:this.instance_106}]},3).to({state:[{t:this.instance_107}]},3).to({state:[{t:this.instance_108}]},3).to({state:[{t:this.instance_109}]},3).to({state:[{t:this.instance_110}]},3).to({state:[{t:this.instance_111}]},3).to({state:[{t:this.instance_112}]},3).to({state:[{t:this.instance_113}]},3).to({state:[{t:this.instance_114}]},3).to({state:[{t:this.instance_115}]},3).to({state:[{t:this.instance_116}]},3).to({state:[{t:this.instance_117}]},3).to({state:[{t:this.instance_118}]},3).to({state:[{t:this.instance_119}]},3).to({state:[{t:this.instance_120}]},3).to({state:[{t:this.instance_121}]},3).to({state:[{t:this.instance_122}]},3).to({state:[{t:this.instance_123}]},3).to({state:[{t:this.instance_124}]},3).to({state:[{t:this.instance_125}]},3).to({state:[{t:this.instance_126}]},3).to({state:[{t:this.instance_127}]},3).to({state:[{t:this.instance_128}]},3).to({state:[{t:this.instance_129}]},3).to({state:[{t:this.instance_130}]},3).to({state:[{t:this.instance_131}]},3).to({state:[{t:this.instance_132}]},3).to({state:[{t:this.instance_133}]},3).to({state:[{t:this.instance_134}]},3).to({state:[{t:this.instance_135}]},3).to({state:[{t:this.instance_136}]},3).to({state:[{t:this.instance_137}]},3).to({state:[{t:this.instance_138}]},3).to({state:[{t:this.instance_139}]},3).to({state:[{t:this.instance_140}]},3).to({state:[{t:this.instance_141}]},3).to({state:[{t:this.instance_142}]},3).to({state:[{t:this.instance_143}]},3).to({state:[{t:this.instance_144}]},3).to({state:[{t:this.instance_145}]},3).to({state:[{t:this.instance_146}]},3).to({state:[{t:this.instance_147}]},3).to({state:[{t:this.instance_148}]},3).to({state:[{t:this.instance_149}]},3).to({state:[{t:this.instance_150}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530,530);


(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		createjs.Sound.removeAllSounds();
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", handleComplete, this);
		queue.loadFile({
			id: "sound",
			src: "sounds/s1.mp3"
		});
		
		function handleComplete() {
			createjs.Sound.play("sound");
		
		}
	}
	this.frame_154 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(133).call(this.frame_154).wait(1));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("EAicAWjIAAsDMBCCAAAIAAMDg");
	var mask_graphics_6 = new cjs.Graphics().p("EAicAWtIAAsXMBCCAAAIAAMXg");
	var mask_graphics_7 = new cjs.Graphics().p("EAicAW2IAAspMBCCAAAIAAMpg");
	var mask_graphics_8 = new cjs.Graphics().p("EAicAXAIAAs9MBCCAAAIAAM9g");
	var mask_graphics_9 = new cjs.Graphics().p("EAicAXJIAAtPMBCCAAAIAANPg");
	var mask_graphics_10 = new cjs.Graphics().p("EAicAXTIAAtjMBCCAAAIAANjg");
	var mask_graphics_11 = new cjs.Graphics().p("EAicAXdIAAt2MBCCAAAIAAN2g");
	var mask_graphics_12 = new cjs.Graphics().p("EAicAXmIAAuJMBCCAAAIAAOJg");
	var mask_graphics_13 = new cjs.Graphics().p("EAicAXwIAAudMBCCAAAIAAOdg");
	var mask_graphics_14 = new cjs.Graphics().p("EAicAX5IAAuvMBCCAAAIAAOvg");
	var mask_graphics_15 = new cjs.Graphics().p("EAicAYDIAAvDMBCCAAAIAAPDg");
	var mask_graphics_16 = new cjs.Graphics().p("EAicAYNIAAvWMBCCAAAIAAPWg");
	var mask_graphics_17 = new cjs.Graphics().p("EAicAYWIAAvpMBCCAAAIAAPpg");
	var mask_graphics_18 = new cjs.Graphics().p("EAicAYgIAAv8MBCCAAAIAAP8g");
	var mask_graphics_19 = new cjs.Graphics().p("EAicAYpIAAwPMBCCAAAIAAQPg");
	var mask_graphics_20 = new cjs.Graphics().p("EAicAYzIAAwiMBCCAAAIAAQig");
	var mask_graphics_21 = new cjs.Graphics().p("EAicAY8IAAw1MBCCAAAIAAQ1g");
	var mask_graphics_22 = new cjs.Graphics().p("EAicAZGIAAxJMBCCAAAIAARJg");
	var mask_graphics_23 = new cjs.Graphics().p("EAicAZQIAAxcMBCCAAAIAARcg");
	var mask_graphics_24 = new cjs.Graphics().p("EAicAZZIAAxvMBCCAAAIAARvg");
	var mask_graphics_25 = new cjs.Graphics().p("EAicAZjIAAyCMBCCAAAIAASCg");
	var mask_graphics_26 = new cjs.Graphics().p("EAicAZsIAAyVMBCCAAAIAASVg");
	var mask_graphics_27 = new cjs.Graphics().p("EAicAZ2IAAyoMBCCAAAIAASog");
	var mask_graphics_28 = new cjs.Graphics().p("EAicAaAIAAy8MBCCAAAIAAS8g");
	var mask_graphics_29 = new cjs.Graphics().p("EAicAaJIAAzOMBCCAAAIAATOg");
	var mask_graphics_30 = new cjs.Graphics().p("EAicAaTIAAziMBCCAAAIAATig");
	var mask_graphics_31 = new cjs.Graphics().p("EAicAacIAAz1MBCCAAAIAAT1g");
	var mask_graphics_32 = new cjs.Graphics().p("EAicAamIAA0IMBCCAAAIAAUIg");
	var mask_graphics_33 = new cjs.Graphics().p("EAicAawIAA0cMBCCAAAIAAUcg");
	var mask_graphics_34 = new cjs.Graphics().p("EAicAa5IAA0uMBCCAAAIAAUug");
	var mask_graphics_35 = new cjs.Graphics().p("EAicAbDIAA1CMBCCAAAIAAVCg");
	var mask_graphics_36 = new cjs.Graphics().p("EAicAbMIAA1UMBCCAAAIAAVUg");
	var mask_graphics_37 = new cjs.Graphics().p("EAicAbWIAA1oMBCCAAAIAAVog");
	var mask_graphics_38 = new cjs.Graphics().p("EAicAbgIAA18MBCCAAAIAAV8g");
	var mask_graphics_39 = new cjs.Graphics().p("EAicAbpIAA2OMBCCAAAIAAWOg");
	var mask_graphics_40 = new cjs.Graphics().p("EAicAbzIAA2iMBCCAAAIAAWig");
	var mask_graphics_41 = new cjs.Graphics().p("EAicAb8IAA20MBCCAAAIAAW0g");
	var mask_graphics_42 = new cjs.Graphics().p("EAicAcGIAA3IMBCCAAAIAAXIg");
	var mask_graphics_43 = new cjs.Graphics().p("EAicAcPIAA3aMBCCAAAIAAXag");
	var mask_graphics_44 = new cjs.Graphics().p("EAicAcZIAA3uMBCCAAAIAAXug");
	var mask_graphics_45 = new cjs.Graphics().p("EAicAcjIAA4BMBCCAAAIAAYBg");
	var mask_graphics_46 = new cjs.Graphics().p("EAicAcsIAA4UMBCCAAAIAAYUg");
	var mask_graphics_47 = new cjs.Graphics().p("EAicAc2IAA4oMBCCAAAIAAYog");
	var mask_graphics_48 = new cjs.Graphics().p("EAicAc/IAA46MBCCAAAIAAY6g");
	var mask_graphics_49 = new cjs.Graphics().p("EAicAdJIAA5OMBCCAAAIAAZOg");
	var mask_graphics_50 = new cjs.Graphics().p("EAicAdTIAA5hMBCCAAAIAAZhg");
	var mask_graphics_51 = new cjs.Graphics().p("EAicAdcIAA50MBCCAAAIAAZ0g");
	var mask_graphics_52 = new cjs.Graphics().p("EAicAdmIAA6HMBCCAAAIAAaHg");
	var mask_graphics_53 = new cjs.Graphics().p("EAicAdvIAA6aMBCCAAAIAAaag");
	var mask_graphics_54 = new cjs.Graphics().p("EAicAd5IAA6uMBCCAAAIAAaug");
	var mask_graphics_55 = new cjs.Graphics().p("EAicAeDIAA7BMBCCAAAIAAbBg");
	var mask_graphics_56 = new cjs.Graphics().p("EAicAeMIAA7UMBCCAAAIAAbUg");
	var mask_graphics_57 = new cjs.Graphics().p("EAicAeWIAA7nMBCCAAAIAAbng");
	var mask_graphics_58 = new cjs.Graphics().p("EAicAefIAA76MBCCAAAIAAb6g");
	var mask_graphics_59 = new cjs.Graphics().p("EAicAepIAA8NMBCCAAAIAAcNg");
	var mask_graphics_60 = new cjs.Graphics().p("EAicAezIAA8hMBCCAAAIAAchg");
	var mask_graphics_61 = new cjs.Graphics().p("EAicAe8IAA8zMBCCAAAIAAczg");
	var mask_graphics_62 = new cjs.Graphics().p("EAicAfGIAA9HMBCCAAAIAAdHg");
	var mask_graphics_63 = new cjs.Graphics().p("EAicAfPIAA9aMBCCAAAIAAdag");
	var mask_graphics_64 = new cjs.Graphics().p("EAicAfZIAA9tMBCCAAAIAAdtg");
	var mask_graphics_65 = new cjs.Graphics().p("EAicAfiIAA+AMBCCAAAIAAeAg");
	var mask_graphics_66 = new cjs.Graphics().p("EAicAfsIAA+TMBCCAAAIAAeTg");
	var mask_graphics_67 = new cjs.Graphics().p("EAicAf2IAA+nMBCCAAAIAAeng");
	var mask_graphics_68 = new cjs.Graphics().p("EAicAf/IAA+5MBCCAAAIAAe5g");
	var mask_graphics_69 = new cjs.Graphics().p("EAicAgJIAA/NMBCCAAAIAAfNg");
	var mask_graphics_70 = new cjs.Graphics().p("EAicAgSIAA/gMBCCAAAIAAfgg");
	var mask_graphics_71 = new cjs.Graphics().p("EAicAgcIAA/zMBCCAAAIAAfzg");
	var mask_graphics_72 = new cjs.Graphics().p("EAicAgmMAAAggHMBCCAAAMAAAAgHg");
	var mask_graphics_73 = new cjs.Graphics().p("EAicAgvMAAAggZMBCCAAAMAAAAgZg");
	var mask_graphics_74 = new cjs.Graphics().p("EAicAg5MAAAggtMBCCAAAMAAAAgtg");
	var mask_graphics_75 = new cjs.Graphics().p("EAicAhCMAAAgg/MBCCAAAMAAAAg/g");
	var mask_graphics_76 = new cjs.Graphics().p("EAicAhMMAAAghSMBCCAAAMAAAAhSg");
	var mask_graphics_77 = new cjs.Graphics().p("EAicAhWMAAAghlMBCCAAAMAAAAhlg");
	var mask_graphics_78 = new cjs.Graphics().p("EAicAhfMAAAgh4MBCCAAAMAAAAh4g");
	var mask_graphics_79 = new cjs.Graphics().p("EAicAhpMAAAgiMMBCCAAAMAAAAiMg");
	var mask_graphics_80 = new cjs.Graphics().p("EAicAhyMAAAgieMBCCAAAMAAAAieg");
	var mask_graphics_81 = new cjs.Graphics().p("EAicAh8MAAAgiyMBCCAAAMAAAAiyg");
	var mask_graphics_82 = new cjs.Graphics().p("EAicAiGMAAAgjFMBCCAAAMAAAAjFg");
	var mask_graphics_83 = new cjs.Graphics().p("EAicAiPMAAAgjYMBCCAAAMAAAAjYg");
	var mask_graphics_84 = new cjs.Graphics().p("EAicAiZMAAAgjrMBCCAAAMAAAAjrg");
	var mask_graphics_85 = new cjs.Graphics().p("EAicAiiMAAAgj+MBCCAAAMAAAAj+g");
	var mask_graphics_86 = new cjs.Graphics().p("EAicAisMAAAgkSMBCCAAAMAAAAkSg");
	var mask_graphics_87 = new cjs.Graphics().p("EAicAi1MAAAgkkMBCCAAAMAAAAkkg");
	var mask_graphics_88 = new cjs.Graphics().p("EAicAi/MAAAgk4MBCCAAAMAAAAk4g");
	var mask_graphics_89 = new cjs.Graphics().p("EAicAjJMAAAglLMBCCAAAMAAAAlLg");
	var mask_graphics_90 = new cjs.Graphics().p("EAicAjSMAAAgleMBCCAAAMAAAAleg");
	var mask_graphics_91 = new cjs.Graphics().p("EAicAjcMAAAglxMBCCAAAMAAAAlxg");
	var mask_graphics_92 = new cjs.Graphics().p("EAicAjlMAAAgmEMBCCAAAMAAAAmEg");
	var mask_graphics_93 = new cjs.Graphics().p("EAicAjvMAAAgmXMBCCAAAMAAAAmXg");
	var mask_graphics_94 = new cjs.Graphics().p("EAicAj5MAAAgmrMBCCAAAMAAAAmrg");
	var mask_graphics_95 = new cjs.Graphics().p("EAicAkCMAAAgm+MBCCAAAMAAAAm+g");
	var mask_graphics_96 = new cjs.Graphics().p("EAicAkMMAAAgnRMBCCAAAMAAAAnRg");
	var mask_graphics_97 = new cjs.Graphics().p("EAicAkVMAAAgnkMBCCAAAMAAAAnkg");
	var mask_graphics_98 = new cjs.Graphics().p("EAicAkfMAAAgn3MBCCAAAMAAAAn3g");
	var mask_graphics_99 = new cjs.Graphics().p("EAicAkpMAAAgoLMBCCAAAMAAAAoLg");
	var mask_graphics_100 = new cjs.Graphics().p("EAicAkyMAAAgodMBCCAAAMAAAAodg");
	var mask_graphics_101 = new cjs.Graphics().p("EAicAk8MAAAgoxMBCCAAAMAAAAoxg");
	var mask_graphics_102 = new cjs.Graphics().p("EAicAlFMAAAgpDMBCCAAAMAAAApDg");
	var mask_graphics_103 = new cjs.Graphics().p("EAicAlPMAAAgpXMBCCAAAMAAAApXg");
	var mask_graphics_104 = new cjs.Graphics().p("EAicAlZMAAAgprMBCCAAAMAAAAprg");
	var mask_graphics_105 = new cjs.Graphics().p("EAicAliMAAAgp9MBCCAAAMAAAAp9g");
	var mask_graphics_106 = new cjs.Graphics().p("EAicAlsMAAAgqRMBCCAAAMAAAAqRg");
	var mask_graphics_107 = new cjs.Graphics().p("EAicAl1MAAAgqjMBCCAAAMAAAAqjg");
	var mask_graphics_108 = new cjs.Graphics().p("EAicAl/MAAAgq3MBCCAAAMAAAAq3g");
	var mask_graphics_109 = new cjs.Graphics().p("EAicAmJMAAAgrKMBCCAAAMAAAArKg");
	var mask_graphics_110 = new cjs.Graphics().p("EAicAmSMAAAgrdMBCCAAAMAAAArdg");
	var mask_graphics_111 = new cjs.Graphics().p("EAicAmcMAAAgrxMBCCAAAMAAAArxg");
	var mask_graphics_112 = new cjs.Graphics().p("EAicAmlMAAAgsDMBCCAAAMAAAAsDg");
	var mask_graphics_113 = new cjs.Graphics().p("EAicAmtMAAAgsWMBCCAAAMAAAAsWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:643.1,y:144.3}).wait(1).to({graphics:mask_graphics_6,x:643.1,y:145.3}).wait(1).to({graphics:mask_graphics_7,x:643.1,y:146.2}).wait(1).to({graphics:mask_graphics_8,x:643.1,y:147.2}).wait(1).to({graphics:mask_graphics_9,x:643.1,y:148.1}).wait(1).to({graphics:mask_graphics_10,x:643.1,y:149.1}).wait(1).to({graphics:mask_graphics_11,x:643.1,y:150.1}).wait(1).to({graphics:mask_graphics_12,x:643.1,y:151}).wait(1).to({graphics:mask_graphics_13,x:643.1,y:152}).wait(1).to({graphics:mask_graphics_14,x:643.1,y:152.9}).wait(1).to({graphics:mask_graphics_15,x:643.1,y:153.9}).wait(1).to({graphics:mask_graphics_16,x:643.1,y:154.9}).wait(1).to({graphics:mask_graphics_17,x:643.1,y:155.8}).wait(1).to({graphics:mask_graphics_18,x:643.1,y:156.8}).wait(1).to({graphics:mask_graphics_19,x:643.1,y:157.7}).wait(1).to({graphics:mask_graphics_20,x:643.1,y:158.7}).wait(1).to({graphics:mask_graphics_21,x:643.1,y:159.6}).wait(1).to({graphics:mask_graphics_22,x:643.1,y:160.6}).wait(1).to({graphics:mask_graphics_23,x:643.1,y:161.6}).wait(1).to({graphics:mask_graphics_24,x:643.1,y:162.5}).wait(1).to({graphics:mask_graphics_25,x:643.1,y:163.5}).wait(1).to({graphics:mask_graphics_26,x:643.1,y:164.4}).wait(1).to({graphics:mask_graphics_27,x:643.1,y:165.4}).wait(1).to({graphics:mask_graphics_28,x:643.1,y:166.4}).wait(1).to({graphics:mask_graphics_29,x:643.1,y:167.3}).wait(1).to({graphics:mask_graphics_30,x:643.1,y:168.3}).wait(1).to({graphics:mask_graphics_31,x:643.1,y:169.2}).wait(1).to({graphics:mask_graphics_32,x:643.1,y:170.2}).wait(1).to({graphics:mask_graphics_33,x:643.1,y:171.2}).wait(1).to({graphics:mask_graphics_34,x:643.1,y:172.1}).wait(1).to({graphics:mask_graphics_35,x:643.1,y:173.1}).wait(1).to({graphics:mask_graphics_36,x:643.1,y:174}).wait(1).to({graphics:mask_graphics_37,x:643.1,y:175}).wait(1).to({graphics:mask_graphics_38,x:643.1,y:176}).wait(1).to({graphics:mask_graphics_39,x:643.1,y:176.9}).wait(1).to({graphics:mask_graphics_40,x:643.1,y:177.9}).wait(1).to({graphics:mask_graphics_41,x:643.1,y:178.8}).wait(1).to({graphics:mask_graphics_42,x:643.1,y:179.8}).wait(1).to({graphics:mask_graphics_43,x:643.1,y:180.7}).wait(1).to({graphics:mask_graphics_44,x:643.1,y:181.7}).wait(1).to({graphics:mask_graphics_45,x:643.1,y:182.7}).wait(1).to({graphics:mask_graphics_46,x:643.1,y:183.6}).wait(1).to({graphics:mask_graphics_47,x:643.1,y:184.6}).wait(1).to({graphics:mask_graphics_48,x:643.1,y:185.5}).wait(1).to({graphics:mask_graphics_49,x:643.1,y:186.5}).wait(1).to({graphics:mask_graphics_50,x:643.1,y:187.5}).wait(1).to({graphics:mask_graphics_51,x:643.1,y:188.4}).wait(1).to({graphics:mask_graphics_52,x:643.1,y:189.4}).wait(1).to({graphics:mask_graphics_53,x:643.1,y:190.3}).wait(1).to({graphics:mask_graphics_54,x:643.1,y:191.3}).wait(1).to({graphics:mask_graphics_55,x:643.1,y:192.3}).wait(1).to({graphics:mask_graphics_56,x:643.1,y:193.2}).wait(1).to({graphics:mask_graphics_57,x:643.1,y:194.2}).wait(1).to({graphics:mask_graphics_58,x:643.1,y:195.1}).wait(1).to({graphics:mask_graphics_59,x:643.1,y:196.1}).wait(1).to({graphics:mask_graphics_60,x:643.1,y:197.1}).wait(1).to({graphics:mask_graphics_61,x:643.1,y:198}).wait(1).to({graphics:mask_graphics_62,x:643.1,y:199}).wait(1).to({graphics:mask_graphics_63,x:643.1,y:199.9}).wait(1).to({graphics:mask_graphics_64,x:643.1,y:200.9}).wait(1).to({graphics:mask_graphics_65,x:643.1,y:201.8}).wait(1).to({graphics:mask_graphics_66,x:643.1,y:202.8}).wait(1).to({graphics:mask_graphics_67,x:643.1,y:203.8}).wait(1).to({graphics:mask_graphics_68,x:643.1,y:204.7}).wait(1).to({graphics:mask_graphics_69,x:643.1,y:205.7}).wait(1).to({graphics:mask_graphics_70,x:643.1,y:206.6}).wait(1).to({graphics:mask_graphics_71,x:643.1,y:207.6}).wait(1).to({graphics:mask_graphics_72,x:643.1,y:208.6}).wait(1).to({graphics:mask_graphics_73,x:643.1,y:209.5}).wait(1).to({graphics:mask_graphics_74,x:643.1,y:210.5}).wait(1).to({graphics:mask_graphics_75,x:643.1,y:211.4}).wait(1).to({graphics:mask_graphics_76,x:643.1,y:212.4}).wait(1).to({graphics:mask_graphics_77,x:643.1,y:213.4}).wait(1).to({graphics:mask_graphics_78,x:643.1,y:214.3}).wait(1).to({graphics:mask_graphics_79,x:643.1,y:215.3}).wait(1).to({graphics:mask_graphics_80,x:643.1,y:216.2}).wait(1).to({graphics:mask_graphics_81,x:643.1,y:217.2}).wait(1).to({graphics:mask_graphics_82,x:643.1,y:218.2}).wait(1).to({graphics:mask_graphics_83,x:643.1,y:219.1}).wait(1).to({graphics:mask_graphics_84,x:643.1,y:220.1}).wait(1).to({graphics:mask_graphics_85,x:643.1,y:221}).wait(1).to({graphics:mask_graphics_86,x:643.1,y:222}).wait(1).to({graphics:mask_graphics_87,x:643.1,y:222.9}).wait(1).to({graphics:mask_graphics_88,x:643.1,y:223.9}).wait(1).to({graphics:mask_graphics_89,x:643.1,y:224.9}).wait(1).to({graphics:mask_graphics_90,x:643.1,y:225.8}).wait(1).to({graphics:mask_graphics_91,x:643.1,y:226.8}).wait(1).to({graphics:mask_graphics_92,x:643.1,y:227.7}).wait(1).to({graphics:mask_graphics_93,x:643.1,y:228.7}).wait(1).to({graphics:mask_graphics_94,x:643.1,y:229.7}).wait(1).to({graphics:mask_graphics_95,x:643.1,y:230.6}).wait(1).to({graphics:mask_graphics_96,x:643.1,y:231.6}).wait(1).to({graphics:mask_graphics_97,x:643.1,y:232.5}).wait(1).to({graphics:mask_graphics_98,x:643.1,y:233.5}).wait(1).to({graphics:mask_graphics_99,x:643.1,y:234.5}).wait(1).to({graphics:mask_graphics_100,x:643.1,y:235.4}).wait(1).to({graphics:mask_graphics_101,x:643.1,y:236.4}).wait(1).to({graphics:mask_graphics_102,x:643.1,y:237.3}).wait(1).to({graphics:mask_graphics_103,x:643.1,y:238.3}).wait(1).to({graphics:mask_graphics_104,x:643.1,y:239.3}).wait(1).to({graphics:mask_graphics_105,x:643.1,y:240.2}).wait(1).to({graphics:mask_graphics_106,x:643.1,y:241.2}).wait(1).to({graphics:mask_graphics_107,x:643.1,y:242.1}).wait(1).to({graphics:mask_graphics_108,x:643.1,y:243.1}).wait(1).to({graphics:mask_graphics_109,x:643.1,y:244.1}).wait(1).to({graphics:mask_graphics_110,x:643.1,y:245}).wait(1).to({graphics:mask_graphics_111,x:643.1,y:246}).wait(1).to({graphics:mask_graphics_112,x:643.1,y:246.9}).wait(1).to({graphics:mask_graphics_113,x:643.1,y:247.7}).wait(42));

	// nr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#858C91").s().p("AARBIIAAgvIguAAIAAgTIAuAAIAAgbIgTAAQgEAOgFAKIgSgIQAJgXAIgiIASAFIgDARIAOAAIAAgfIAWAAIAAAfIAeAAIAAATIgeAAIAAAbIAiAAIAAATIgiAAIAAAvgAg3BIIAAhDIgLAUIgGgaQAPgdAMgpIAVAGIgLAdIAABsg");
	this.shape.setTransform(1087.9,464.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#858C91").s().p("AhIAzQAkgSACglIgkAAIAAgVICNAAIAAAVIgrAAIAAAoQAAAKAJAAIAFAAQAEABACgEQACgEACgTIAVAHIgFAYQgDAIgGADQgGADgJAAIgOAAQgXABAAgWIAAgwIgUAAQgCA0gpAUIgQgRgAg6gvIAAgUIB1AAIAAAUg");
	this.shape_1.setTransform(1072.9,465);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858C91").s().p("AhHA0IAIABQAGAAABgCIABgFIAAgZIgMAFIgDgVIAPgEIAAgcIgOAAIAAgTIAOAAIAAgYIATAAIAAAYIANAAIAAATIgNAAIAAAXIAOgDIAAASIgOAEIAAAlQAAAKgFAFQgEAFgVAAIgFgUgAAxBHIAAgHIhKAAIAAgSIBKAAIAAgSIhBAAIAAgSIBBAAIAAgRIhEAAIAAgSIAfAAIAAgtIATAAIAAAtIAlAAIAABggAAigmQAMgOAKgOIAQAKIgYAdgAgag4IAOgKIAUAbIgOALIgUgcg");
	this.shape_2.setTransform(1057.7,464.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858C91").s().p("AghA2QAhgHAIgQIgoAAIAAgRIAMAAIAAgoIgHgEQAUgXAHgTIAVADIgGAKIAqAAIAAAQIgLAOIASAAIAAArIAJAAIAAARIgnAAQALAQAcAFIgMAUQgagIgNgVQgLATggALQgFgJgHgKgAAeAOIAQAAIAAgaIgPAAIgBAagAgCAOIAOAAIABgaIgPAAgAgEgdIAbAAIALgOIgcAAIgKAOgAhHA0IAKAAQAFAAAAgGIAAgdIgPAFIgBgVIAQgDIAAgXIgOAAIAAgTIAOAAIAAgaIASAAIAAAaIALAAIAAAOIAAAFIgLAAIAAARIAMgDIgBASIgLAEIAAArQAAAHgCAEQgDAEgFABIgTABIgEgTg");
	this.shape_3.setTransform(1042.9,464.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#858C91").s().p("AgLBHIAAhYIAWAAIAABYgAhIgIQAqgZAWglIAWAAIgCAEQAUAiApAWIgOATQgogWgTgiQgRAggpAaIgOgTg");
	this.shape_4.setTransform(1027.9,464.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858C91").s().p("AhIBCIAAgSIAeAAIAJgwIgdAAIAAgRIAfAAIAGgeIgpAAIAAgSICEAAIAAASIhFAAIgGAeIA7AAIAABBIAXAAIAAASgAgUAwIAxAAIAAgwIgpAAg");
	this.shape_5.setTransform(1013,464.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#858C91").s().p("AAGA0IAXABQAIAAAAgIIAAgDIg9AAIAAAeIgVAAIAAhBIgVAUIgFgXQAWgSANgXIgiAAIAAgTIAsAAIAFgPIAXADIgEAMIBKAAIAAATIhUAAIgGALIBMAAIAABOQAAAJgEAFQgEAFgIABQgIABgXAAIgFgVgAgYAbIA9AAIAAgLIg9AAgAgYABIA9AAIAAgLIg9AAg");
	this.shape_6.setTransform(997.8,464.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#858C91").s().p("AhIA2QAYgPAUgXIARANQgXAZgXAQgAANAdIAOgNQAaATATATIgQAPIgrgogAg3ALIAAhQIBwAAIAABQgAgigGIBFAAIAAgtIhFAAg");
	this.shape_7.setTransform(982.9,464.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
	this.shape_8.setTransform(967.9,464.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
	this.shape_9.setTransform(952.9,464.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#858C91").s().p("AhIA2QAegEAXgHQgOgMgKgPIgKAAIAAgQIBmAAIAAAQQgKAPgRAMQAWAGAdACIgMAVQgjgEgagNQgZAMgkAGQgFgJgGgKgAABAiQAOgHALgLIgwAAQAKALANAHgAAdgVIAKgNQAQAJASAOIgNANIgfgXgAhIgNQASgKAPgMIANANQgQAMgTALIgLgOgAAIgDIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgSIA6AAIgFgLIAUgGIAHARIA5AAIAAASIgqAAIAAAig");
	this.shape_10.setTransform(937.9,464.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
	this.shape_11.setTransform(922.9,464.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#858C91").s().p("AhIA6QAagdAPgfIAVAKQgVAlgXAbgAAKAHIASgKQAfAmAOAXIgVANQgMgWgegqgAhGgPIAAgUIBDAAQgGgOgJgNIAVgJIAPAbIgSAJIBIAAIAAAUg");
	this.shape_12.setTransform(907.9,464.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#858C91").s().p("Ag4BIIAAgxIgKAKIgGgYQATgOAQgaIAQANIgQAUIAABGgAAHA0IATABQAJAAgBgJIAAgJIgiAAIAMAOIgQALQgHgMgHgHIAIgGIgTAAIAAgPIA/AAIAAgIIg6AAIAAgOIBdAAIAAAOIgPAAIAAAIIATAAIAAAPIgTAAIAAAPQAAAJgFAFQgFAGgKABIgWAAIgFgTgAgTgKIAAg4IBTAAIAAA4gAAAgYIAtAAIAAgHIgtAAgAAAgsIAtAAIAAgIIgtAAgAhGgmQASgPAMgTIARANQgRAYgYATQgCgIgEgOg");
	this.shape_13.setTransform(892.9,464.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858C91").s().p("AgjA4QATgFAKgEQgKgIgIgKIAMgKIgOAAIAAgxIAjAAIAAgKIgnAAIAAgSIAnAAIAAgOIAUAAIAAAOIApAAIAAASIgpAAIAAAKIAkAAIAAA3IgTAAIAAgGIgSAAQgBAPgDAIQAUAIAdAAIgLAVQgdgDgWgKQgLAHgYAIIgLgRgAAGAiQACgFABgKIgUAAQAHAJAKAGgAAdADIARAAIAAgQIgRAAgAgHADIAQAAIAAgQIgQAAgAg4BJIAAhFIgLATIgFgaQARgfAIglIATAFIgKAgIAABrg");
	this.shape_14.setTransform(1257.7,440.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#858C91").s().p("AhIAxIASgOIAAgjIgQAAIAAgUIAlAAIAAA7QAMAKASABIAUAAIA4gBIgHAUIgzgBQgYAAgIAAQgIgCgHgDQgIgEgEgGIgTATgAgcAaQAWgJANgLIgbgXIANgNIAdAYQAJgLADgOIg9AAIAAgSIAkAAIgGgRIAVgGIAJAXIAkAAIAAASIgOAAQgFAUgNAQIAdAXIgRAQIgagXQgQAOgXAKIgMgTgAhDg8IARgKIATAcIgRALIgTgdg");
	this.shape_15.setTransform(1242.5,440.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#858C91").s().p("AgOAUIAJgnIATAAIgLAng");
	this.shape_16.setTransform(1223.2,445.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#858C91").s().p("AAiBJIAAgHIhEAAIAAAHIgUAAIAAhFIBsAAIAABFgAgiAvIBEAAIAAgYIhEAAgAhIgWQAtgXASgbIAbAAIgFAHQAVAaAnARIgNARIgSgKIAAAIIhSAAIAAgIIgTALQgGgJgHgJgAgbgZIA1AAQgPgLgLgOQgKAMgRANg");
	this.shape_17.setTransform(1212.1,440.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#858C91").s().p("AgVBGIAAgIIgvAHIgEgTIA2gHIgBAIIAIAAIAAhTQgQAbgPAVIAZgEIgBASQglAEgIACIgHgRQAIgFAPgVQgPABgEABIgGgRQAHgFAUgqIASAHIgWAnIAMgBIAJgRIARAIIAAgdIBKAAIAABxIAKAAIAAATgAAIAzIAjAAIAAgTIgjAAgAAIANIAjAAIAAgSIgjAAgAAIgYIAjAAIAAgTIgjAAg");
	this.shape_18.setTransform(1196.9,440.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#858C91").s().p("AAJAxIAYABIAFgBIAFgCIACgEIABgSIAAgdIABgXIgaAAIgKAUQgHgEgJgFIAABWIgVAAIAAgKIgUAAIAAALIgUAAIAAh2IAPAAIAGgXIAVADIgGAUIAZAAIAAAdQALgUALggIATAFIgGATIAmAAIgCBTQgBAOgCAFQgBAGgFADQgDAEgIABQgGABgZAAQgCgNgEgJgAguApIAUAAIAAgZIgUAAgAgugDIAUAAIAAgZIgUAAgAAAACIARgLQALALALATIgSAMQgLgSgKgNg");
	this.shape_19.setTransform(1181.8,440.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#858C91").s().p("AgbBGIgEgUIAPABQAGAAACgCQACgBAAgDIAAgYQghACgRABIgGgSQAZgIAdgOQgdABgQACIgFgSQAQgFARgLIglABIgEgRQBHAAA7gGIACAQQgdADggABQgOAKgRAIIAvgCIAWgNIAOAOQgpAXgtAQIA+gDIgKgKIANgLIAkAhIgOAOIgKgLIgjABIAAAjQAAAHgFAEQgEADgIABIgXAAgAhIAzQATgKAQgQIAPAOQgRAPgTANIgOgQgAAYAlIAMgNQARALAUAQIgOAOQgPgOgUgOg");
	this.shape_20.setTransform(1166.5,440.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_21.setTransform(1151.4,440.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#858C91").s().p("AAYAzIARABQAGAAACgCQACgCAAgFIAAgPIgJAHIgOgYQgGAQgKAJIgKgHIAAArIgRAAIAAhjIgZAnIAUgDIgCARQgZAEgMADIgGgQQAHgHAMgSIgRACIgGgQQALgMAPglIASAHQgLAXgLARIALAAIAJgQIAMAFIAAgNIAgAAIAAgXIATAAIAAAXIAiAAIAABgQAAALgEAFQgEAFgIABQgJACgQAAIgFgVgAACASQAPgQAAggIgPAAgAAigMIARAbIAAgtIgQAAIgBASgAhFAtIAygGIAAATIguAIg");
	this.shape_22.setTransform(1135.8,440.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#858C91").s().p("AgOBIIAAhIIgGAJQgEgKgEgIQASgcAJgiIARAFIgHAWIAWAAIgLgUIAPgIIAOAWIgNAGIAiAAIAAAQIgZAAIAAAPIAYAAIAAAOIgYAAIAAAPIAYAAIAAAQIgYAAIAAAPIAbAAIAAAPIhDAAIAAAKgAAFAvIAVAAIAAgPIgVAAgAAFAQIAVAAIAAgPIgVAAgAAFgNIAVAAIAAgPIgVAAgAhHArQAVgCAfgGIgBAVIgwAIgAhEAOQAGgHAKgRIgOABIgFgPQAHgJAPgnIASAGIgVAoIAJgBIAJgTIAQAHQgPAfgLATIAVgDIgCARQgZADgNADg");
	this.shape_23.setTransform(1120.8,440.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#858C91").s().p("AhHA1IAKAAQAEAAACgBQACgCAAgDIAAgcIgSAEIgBgVIATgDIAAgYIgSAAIAAgTIASAAIAAgaIAUAAIAAAaIALAAIAAATIgLAAIAAAVIAPgDQgCAJAAAKIgNADIAAAmQAAAIgDAEQgEAFgGABIgVABIgEgTgAgYBDIAAgSIAyAAQAJgjAIgkIAVAFIgTBCIAcAAIAAASgAgNgOIARgGIAQA4IgUAGQgFgegIgagAgRgcIAAgSIAhAAIgIgTIAUgGIAKAWIgNADIArAAIAAASg");
	this.shape_24.setTransform(1105.7,440.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858C91").s().p("AAKAxIAWABIAHgBIAEgCIACgEIABgSIABgdIAAgXIgaAAIgKAUQgGgEgKgFIAABWIgUAAIAAgKIgVAAIAAALIgVAAIAAh2IAQAAIAGgXIAVADIgGAUIAZAAIAAAdQALgUAKggIAVAFIgHATIAlAAIgBBTQAAAOgCAFQgCAGgFADQgEAEgGABQgIABgYAAQgCgNgDgJgAguApIAVAAIAAgZIgVAAgAgugDIAVAAIAAgZIgVAAgAAAACIARgLQAKALAMATIgSAMQgLgSgKgNg");
	this.shape_25.setTransform(1090.6,440.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#858C91").s().p("AhGA3QAPgYAAglIAAg4QBFgCAqgGIAMATQgpAFg9ADIAAANIBqAAIAAAUIhqAAIAAAIQAAArgRAeIgTgQgAAqBFIAAgGIgvAAIAAAGIgVAAIAAhDIBZAAIAABDgAgFAsIAvAAIAAgXIgvAAg");
	this.shape_26.setTransform(1075.2,440.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#858C91").s().p("AgmA5IATgSIAAgsIgLAAIAAgRIAcAAIAAADQAJgLAGgNIgLAAIAAgPIARAAIAEgOIARACIgEAMIAgAAIAAAPIglAAIgEAJIAkAAIAAA+QAAAJgDAEQgDAEgGABIgSABIgDgQIALAAQAFAAAAgGIAAgCIgUAAIAAAZIgRAAIAAg3IgHAGIgEgIIAAAyQACAFAGACQAHADAHAAIAWABIAcgBIgGATQgsAAgMgCQgKgCgJgLIgPASgAAaAKIAUAAIAAgJIgUAAgAAagLIAUAAIAAgIIgUAAgAhGBIIAAiIIAsAAIAAAQIgLAkQAOAMAAAVQgBAJgDAFQgCAGgFACQgFACgLAAIgCgNIAAAogAg0AbIAGAAQAIAAAAgJQAAgOgOgPIALglIgLAAgAgZhCIAPgFIAKAdIgPAFIgKgdg");
	this.shape_27.setTransform(1060.5,440.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#858C91").s().p("AgCBGIgFgVIAdABQAPAAABgJQABgJABggIhaAAIAEhFIAWAAIgBAQIBfAAIAAATIhgAAIgBAQIBaAAIgDA7QAAAQgJAGQgIAIgOgBgAhFAjIAAgTIBkAAIAAATg");
	this.shape_28.setTransform(1044.8,440.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#858C91").s().p("AgVBGIAAgIIgvAHIgEgTIA2gHIgBAIIAIAAIAAhTQgQAbgPAVIAagEIgCASQgmAEgGACIgIgRQAIgFAPgVQgPABgFABIgFgRQAIgFATgqIASAHIgWAnIAMgBIAJgRIARAIIAAgdIBLAAIAABxIAJAAIAAATgAAJAzIAiAAIAAgTIgiAAgAAJANIAiAAIAAgSIgiAAgAAJgYIAiAAIAAgTIgiAAg");
	this.shape_29.setTransform(1029.7,440.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_30.setTransform(1014.6,440.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#858C91").s().p("AArBIIAAgFIhoAAIAAhHIAUAAIAAAeQAjgOAAgYIhBAAIAAgRIAUAAIAAgiIAUAAIAAAiIAZAAIAAgqIATAAIAAANIAwAAIAAARIgwAAIAAAMIA7AAIAAARIg7AAQAAAJgDAGIAhAUIAAgbIAVAAIAABMgAgpAyIBUAAIAAgXIgKAPIgfgYQgJANgVAMIgNgRg");
	this.shape_31.setTransform(999.3,440.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#858C91").s().p("AhEBDIAAgPIA/AAIAAgKIgrAAIAAgOIgJAKIgOgKQAOgRAJgRIgIAAIAAg8IBzAAIAAA8IgsAAIAAAIIAzAAIAAAQIgzAAIAAAJIAvAAIAAAPIgvAAIAAAKIA5AAIAAAPgAgvAbIAqAAIAAgJIgkAAIgGAJgAgdgCIgDAEIAbAAIAAgIIggAAgAgjgWIBKAAIAAgHIhKAAgAgjgqIBKAAIAAgIIhKAAg");
	this.shape_32.setTransform(984,440.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858C91").s().p("AgFA0IAXABQALAAAAgMIAAgpIgrAAIAAgTIBXAAIAAATIgXAAIAAAuQAAAMgGAGQgFAHgKAAIgdABIgFgUgAgyBHIAAg1IgOAMIgIgUQAXgTAQgYIARALIgNATIAABKgAhIgmQAZgSAMgPIARANQgPARgaAVQgEgIgJgKgAgIgqIAAgTIBKAAIAAATg");
	this.shape_33.setTransform(968.9,440.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#858C91").s().p("AgJBIIAAgVIg/AAIAAgTIA/AAIAAgJIgzAAIAAhIIAbAAIgLgPIASgHIAQARIgKAFIAcAAIARgXIAVAIIgMAPIAbAAIAABIIgzAAIAAAJIA+AAIAAATIg+AAIAAAVgAAKAGIAgAAIAAgLIggAAgAgoAGIAfAAIAAgLIgfAAgAAKgVIAgAAIAAgLIggAAgAgogVIAfAAIAAgLIgfAAg");
	this.shape_34.setTransform(953.7,440.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#858C91").s().p("AgLBHIAAhYIAWAAIAABYgAhIgIQAqgZAWglIAWAAIgCAEQAUAiApAWIgOATQgogWgTgiQgRAggpAaIgOgTg");
	this.shape_35.setTransform(938.5,440.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858C91").s().p("AhGALIAAgVICNAAIAAAVg");
	this.shape_36.setTransform(923.3,440.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858C91").s().p("AhIA6QARgPAIgcIgYAAIAAgQICPAAIAAAQIg9AAIAAAIIAyAAIAAAQIgyAAIAAAKIAYAAIAmAAIgGARIgmAAIgVgBQghAAgPgPQgHAMgIAJIgRgNgAgcAVIgEANQAJAKAPAEIAAghIgmAAgAg3gIIAAg9IBuAAIAAA9gAgigYIBFAAIAAgJIhFAAgAgigtIBFAAIAAgIIhFAAg");
	this.shape_37.setTransform(908.1,440.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#858C91").s().p("AgUBHQgNgBgHgGQgHgIAAgPIAAg1IgSAAIAAgnIA2AAIgEgOIAWgEIAGASIA1AAIAAAnIgVAAIAAgUIhZAAIAAAOIATAAIAAAXQAjgHAfgMIALASQgjAMgqAKIAAAMQAAANAMAAIAkAAQAGAAAEgCQAFgDABgFQABgEACgSIAXAJQgFAWgDAGQgCAHgHAEQgGAEgLAAg");
	this.shape_38.setTransform(892.9,440.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#858C91").s().p("AANBJIAAhQIgkAAIAAgUIAkAAIAAgtIAWAAIAAAtIAlAAIAAAUIglAAIAABQgAg8A3QADgFAAgHIAAgvIgOAAIAAgSIAiAAIAAA4IAVgNIACAWQgcASgHAIgAg/g9IARgLIATAbIgTAMQgHgNgKgPg");
	this.shape_39.setTransform(1147.9,392.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858C91").s().p("AgjA1QAVgEAPgIQgMgMgJgPIANgIIgQAAIAAgRIAKAAIgPgQQAQgKAAgUIAAgKIBAAAIAAAYQAAAGADAAIARABIgDASIgUAAQgRAAAAgPIAAgQIgZAAQAAAVgSARIBIAAIAAAQQgKAVgPAOQARAIAUADQgGAJgGALQgYgFgSgMQgTANgYAGQgEgKgHgKgAASAeQANgKAIgOIgpAAQAIAOAMAKgAg9A0QADgFABgHIAAgrIgPAAIAAgTIAiAAIAAA0IAOgOQABALADAMQgUARgKALgAhBg9IARgLQAMAOAIAMIgSANQgKgRgJgLg");
	this.shape_40.setTransform(1132.9,392.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#858C91").s().p("AgzBHIAAhGQgHAKgIAJIgGgZQAXgdANgkIAVAGQgHARgIAPIAABngAAaBGQgaAAAAgaIAAgUIgRALIgNgTQAQgJAOgJIAAhEIAVAAIAAAzQASgOAOgRIASAOQgVAYgdAUIAAAeQAAALAKAAIAGAAQAIAAACgFQACgFACgYIAWAHIgFAeQgCAJgHAEQgHAFgOAAg");
	this.shape_41.setTransform(1117.9,392.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#858C91").s().p("AhHBDIAAgKIA+AAIAAgGIg1AAIAAgKIA1AAIAAgGIgxAAIAAgpIB0AAIAAApIgxAAIAAAGIA3AAIAAAKIg3AAIAAAGIBAAAIAAAKgAAJAZIAeAAIAAgGIgeAAgAgnAZIAeAAIAAgGIgeAAgAAJAKIAeAAIAAgHIgeAAgAgnAKIAeAAIAAgHIgeAAgAhHgLIAAgLICQAAIAAALgAg5gbIAAgnIBzAAIAAAngAglglIBLAAIAAgFIhLAAgAglgzIBLAAIAAgFIhLAAg");
	this.shape_42.setTransform(1102.9,392.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#858C91").s().p("AgtBIIAAgaIgaACIgBgSIAbgBIAAgOIgaAAIAAgTQAEgLAFgVIgKAAIAAgRIANAAIAEgSIATABIgFARIAcAAIAAARIgfAAIgJAjIAIAAIAAgbIASAAIAAAbIAMAAIAAAQIgMAAIAAANIAOgBIgBASIgNAAIAAAbgAgQBEIAAgSIAhAAIAAgaIgaAAIAAgSIBKAAIAAASIgcAAIAAAaIAjAAIAAASgAAdgQQgQAMgUAIIgMgRQAkgNAUgVIgvAAIAAgSIBHAAIAAAQQgIALgJAKIAdAQIgLAQQgRgKgQgKg");
	this.shape_43.setTransform(1088,392.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#858C91").s().p("AhDA5QAMgQAAgpIAAhEIB6AAIAAByQABAJgFAFQgEAFgJABIgXABIgGgWIARABQAJAAAAgJIAAgNIgfAAIAAApIgUAAIAAgpIgfAAQgCAggLANQgIgHgLgFgAAQAFIAfAAIAAgRIgfAAgAgiAFIAeAAIAAgRIgeAAgAAQgfIAfAAIAAgSIgfAAgAgigfIAeAAIAAgSIgeAAg");
	this.shape_44.setTransform(1072.6,392.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#858C91").s().p("AgKBGIAAgwQgTAXgfASIgNgSQAdgMAVgWIguAAIAAgRIA7AAIAAgMIAHAAIgOgXIAMgGIg4ABIgFgSQBOgCAvgDIAHASIhCAEIANAVIgOAIIALAAIAAAMIA8AAIAAARIgwAAQAVAWAfAMQgHAHgGAKQghgRgSgXIAAAwgAg+ghIAPgLIAUAXIgQALIgTgXgAAWgWQAMgMAKgNIAQAKQgLANgNAOg");
	this.shape_45.setTransform(1057.9,392.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#858C91").s().p("AhIBCIAAgTIASAAIAAhwIBtAAIAABwIASAAIAAATgAghAvIBDAAIAAgTIhDAAgAghAJIBDAAIAAgRIhDAAgAghgaIBDAAIAAgUIhDAAg");
	this.shape_46.setTransform(1042.9,392.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#858C91").s().p("Ag/A8QAVgPAEgaIgiAAIAAgTIAjAAIAAgbIgbAAIAAgTIAhAAIgMgOIAQgMIATATIgKAHIAbAAIASgaIAVALIgNAPIAfAAIAAATIgXAAIAAAbIAdAAIAAATIgdAAIAAAzIgVAAIAAgzIgnAAQgDAkgXASIgUgNgAgRAAIAnAAIAAgbIgnAAg");
	this.shape_47.setTransform(1028,392.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#858C91").s().p("AANA0IAYABQAJgBAAgIIAAhaIg4AAIAAgSIBNAAIAABtQAAALgEAGQgDAGgIADQgHABgbABQgCgMgDgJgAhCBIIAAh8IAVAAIAAB8gAggAxIAAhUIBBAAIAABNIgvAAIAAAHgAgOAZIAcAAIAAgOIgcAAgAgOgEIAcAAIAAgOIgcAAgAgxhAIAUgHIANAYIgTAHIgOgYg");
	this.shape_48.setTransform(1012.9,392.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#858C91").s().p("AhGBFIAAgTIA8AAIAAgZIgmAAIAAgQIgOAHIgKgRQAfgMAVgRIANAOQgQANgUAJIBdAAIAAATIgoAAIAAAZIA9AAIAAATgAAHgPIALgQQAeAOAZAOIgKARQgbgPgdgOgAAxgUIAAgOIhgAAIAAAOIgVAAIAAghIA6AAIgDgMIAVgDIAFAPIA4AAIAAAhg");
	this.shape_49.setTransform(997.9,392);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#858C91").s().p("AAmBJIAAgIIhFAAIAAAIIgUAAIAAhJIgPADIgHgQQAugHAigNIgRAAIAAgnIAUAAIAAAmIAZgLIgLgGIAKgPIAoAXIgLAQIgbgRIAKAOIguARIA6AAIAABWgAgfAyIBFAAIAAgJIhFAAgAgfAeIBFAAIAAgJIhFAAgAgfAKIBFAAIAAgJIhFAAgAhFgpQAVgMASgNIAMAPQgUANgVANg");
	this.shape_50.setTransform(982.9,392.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#858C91").s().p("AggBIIAAhGIggAAIAAgSIB9AAIgDAvQgBAJgDAGQgEAFgHACQgHACggAAIgEgWIAYACQAFAAAEgDQADgCAAgFIABgXIguAAIAABGgAAPgZIAAgMIgdAAIAAAMIgVAAIAAgMIgkAAIAAgTIAkAAIAAgPIAVAAIAAAPIAdAAIAAgPIAWAAIAAAPIAjAAIAAATIgjAAIAAAMg");
	this.shape_51.setTransform(967.9,392.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#858C91").s().p("AgVgGIAOgOQAMAKARAQIgPAPQgKgMgSgPg");
	this.shape_52.setTransform(948.1,397.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#858C91").s().p("AgJBJIAAgWIg+AAIAAgSIA+AAIAAgLIgzAAIAAhHIAbAAIgKgOIARgIIAPASIgJAEIAdAAIAPgWIAXAIIgOAOIAcAAIAABHIgyAAIAAALIA+AAIAAASIg+AAIAAAWgAALAGIAeAAIAAgMIgeAAgAgoAGIAfAAIAAgMIgfAAgAALgUIAeAAIAAgMIgeAAgAgogUIAfAAIAAgMIgfAAg");
	this.shape_53.setTransform(937.9,392.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#858C91").s().p("Ag9BIIAAhZIATAAIAABZgAAYA3IgkAAIAAAHIgSAAIAAhDIBBAAIAAA6IAIgBQAAAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAQACgDgBgEIAAg5Ig9AAIAAgQIBRAAIAABMQAAALgEAHQgEAGgJABIgWABIgEgRgAgMApIAdAAIAAgJIgdAAgAgMASIAdAAIAAgJIgdAAgAgxgfIAPgHQAJAKAGAKIgQAJQgGgMgIgKgAhHgpQANgNALgRIAVAAIgHAKIAiAAIAAAOQAIgKAHgOIATAAIgFAKIAqAAIAAAOIgWAAIAFAKIgTAEIgFgOIgJAAIgLAOIgQgIIAFgGIgPAAIAHAJIgSAHIgJgQIgHAAQgJAMgMALIgIgRg");
	this.shape_54.setTransform(922.8,392.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#858C91").s().p("AgyBIIAAg+QgGAPgIAOIgFgaQALgRAGgVIgQAAIAAgRIASAAIAAgdIATAAIAAAdIAOAAIAAAIQAMgRAFgTIAVACIgGANIA3AAIAAA4IgBAmQgBAOgGAIQgGAHgKABQgJABgXAAIgEgUIAaABQAGAAAEgDQADgDAAgMIgJAFIgDgGQgjADgQADIgFgRQAKgIARgpIASAIIgXAnIAagCIgKgTIAPgIIAQAcIABg3IgtAAQgHANgJALIgNgMIgIAAIAAAJIAVARIgOAMIgHgKIAABFg");
	this.shape_55.setTransform(907.6,392.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#858C91").s().p("AAvBJIAAgJIgpAAIAAAJIgSAAIAAg/IBOAAIAAA/gAAGAuIApAAIAAgSIgpAAgAhIAtIA3gIIgBAVIgyAHgAhGARQAJgIAOgSIgUACIgFgRQALgOAOgiIAUAIQgMAVgMASIAOgBIAJgPIAKAFIAAgQIAiAAIAAgTIAUAAIAAATIAlAAIAAARIglAAIAAAQIAhAAIAAARIhTAAIAAgRIAeAAIAAgQIggAAIAGACIggAsIAXgCIgBASQghAEgLADg");
	this.shape_56.setTransform(892.9,392.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#858C91").s().p("AAJA2IAJgQIglAAIAJAQIgzASIgKgSQAcgIAXgIIgzAAIAAgSIAUAAIAAg7IgRAAIAAgSIARAAIAAgOIAUAAIAAAOIA+AAIAAgOIAUAAIAAAOIASAAIAAASIgSAAIAAA7IAVAAIAAASIg2AAQAeAIAYAIIgJASQgZgJgdgJgAgfAUIA+AAIAAgJIg+AAgAgfgFIA+AAIAAgJIg+AAgAgfgeIA+AAIAAgJIg+AAg");
	this.shape_57.setTransform(1257.5,368.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#858C91").s().p("AgNAUIAIgnIAUAAIgMAng");
	this.shape_58.setTransform(1238.1,373.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#858C91").s().p("AgbBGIgEgUIAPABQAGAAACgCQACgBAAgDIAAgYQghACgRACIgGgSQAZgJAdgPQgdACgQACIgFgSQAQgGARgJIglABIgEgSQBHAAA7gGIACAQQgdADggABQgOAKgRAIIAvgCIAWgNIAOAOQgpAWgtARIA+gEIgKgJIANgLIAkAiIgOAMIgKgKIgjABIAAAiQAAAHgFAEQgEAEgIABIgXAAgAhIAzQATgLAQgOIAPAMQgRAQgTANIgOgQgAAYAlIAMgNQARALAUAQIgOAOQgPgNgUgPg");
	this.shape_59.setTransform(1226.9,368.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#858C91").s().p("AgqBIIAAgZIgeABIAAgSIAegBIAAgOIgdAAIAAgRQAFgOAFgUIgLAAIAAgRIAPAAIADgSIAUACIgEAQIAdAAIAAARIghAAIgKAjIAKAAIAAgaIASAAIAAAaIANAAIAAAQIgNAAIAAANIAPgBIAAASIgPABIAAAagAAQBFQgSAAAAgVIAAg+IgHAHQgEgHgIgKQAYgTAOgcIAYAAIgDAFQANAXAWAPIgKATQgYgSgMgXQgMAUgPAOIARAAIAAAWQAPgIALgLIAPANQgTAPgWALIAAAQQAAAIAJAAIAJAAQAJAAABgGIADgVIATAHQgBAPgDAJQgDAPgWAAg");
	this.shape_60.setTransform(1211.7,368.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#858C91").s().p("AgWBFQAZgeAAgmQAAgmgZgfIATAAQAaAdAAAoQAAAogaAcg");
	this.shape_61.setTransform(1192,369.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#858C91").s().p("AgZApIAAhQIAYAAIAAAPQAFgQAPAAIAHABIAAAWQgFgDgGAAQgIAAgFAGQgDAHAAAJIAAAng");
	this.shape_62.setTransform(1185.8,369.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#858C91").s().p("AgbAfQgKgKAAgUQAAgSALgNQAMgMAQABQARAAAKAKQAJAKAAASIAAAJIg0AAQABAUAVgBQANABAKgHIAAASQgLAFgSAAQgSAAgLgLgAgIgVQgFAGgBAIIAeAAQAAgSgOAAQgFAAgFAEg");
	this.shape_63.setTransform(1177.5,369.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#858C91").s().p("AgLA8IAAhQIAXAAIAABQgAgJgmQgEgDAAgFQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEAEQgEADgGAAQgFAAgEgEg");
	this.shape_64.setTransform(1170.6,367.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#858C91").s().p("AgNAbIAAgmIgOAAIAAgRIAOAAIAAgSIAWgHIAAAZIATAAIAAARIgTAAIAAAiQAAAMAKAAQAEAAAFgCIAAASQgGADgKAAQgZAAAAgbg");
	this.shape_65.setTransform(1165,368.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#858C91").s().p("AgbAfQgKgKAAgUQAAgSALgNQAMgMAQABQARAAAKAKQAJAKAAASIAAAJIg0AAQABAUAVgBQANABAKgHIAAASQgLAFgSAAQgSAAgLgLgAgIgVQgFAGgBAIIAeAAQAAgSgOAAQgFAAgFAEg");
	this.shape_66.setTransform(1157.3,369.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#858C91").s().p("AgLA8IAAh3IAXAAIAAB3g");
	this.shape_67.setTransform(1150.4,367.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#858C91").s().p("AgLA8IAAh3IAXAAIAAB3g");
	this.shape_68.setTransform(1145.7,367.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#858C91").s().p("AgbAfQgKgKAAgUQAAgSALgNQAMgMAQABQARAAAKAKQAJAKAAASIAAAJIg0AAQABAUAVgBQANABAKgHIAAASQgLAFgSAAQgSAAgLgLgAgIgVQgFAGgBAIIAeAAQAAgSgOAAQgFAAgFAEg");
	this.shape_69.setTransform(1138.8,369.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#858C91").s().p("AgpA8IAAh1IAYAAIAAAMQAJgOARAAQAPAAAIALQAJAKAAATQAAATgKAMQgKANgQAAQgOAAgIgMIAAAvgAgNgjQgEAGAAAKIAAAHQgBAJAFAEQAFAGAIAAQAHAAAFgHQAFgGAAgNQAAgWgRAAQgHAAgGAGg");
	this.shape_70.setTransform(1129.4,371.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#858C91").s().p("AgbAfQgKgKAAgUQAAgSALgNQAMgMAQABQARAAAKAKQAJAKAAASIAAAJIg0AAQABAUAVgBQANABAKgHIAAASQgLAFgSAAQgSAAgLgLgAgIgVQgFAGgBAIIAeAAQAAgSgOAAQgFAAgFAEg");
	this.shape_71.setTransform(1119.5,369.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#858C91").s().p("AggA5IAAhxIAYAAIAABdIApAAIAAAUg");
	this.shape_72.setTransform(1111.2,367.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#858C91").s().p("AAEBFQgageAAgnQAAgoAagcIATAAQgZAfAAAlQAAAmAZAfg");
	this.shape_73.setTransform(1103.1,369.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#858C91").s().p("AAHA0IATABQAKAAAAgMIAAgTIgiAAIARATIgQALIgRgWIAKgIIgMAAIAAgRIA0AAIAAgJIAUAAIAAAJIAPAAIAAARIgPAAIAAAWQAAALgEAHQgEAGgIACQgHACgWAAIgEgUgAgvBIIAAgvIgWAGIgDgVIAZgEIAAgcIgJAAIgEAVIgMgHQAEgXACgcIAOACIgCAQIAHAAIAAgeIATAAIAAAeIAIAAIAAATIgIAAIAAAYIAJgCIAAAUIgJACIAAAygAgSgHIAAgRIAiAAIAAgMIgdAAIAAgSIAdAAIAAgRIAUAAIAAARIAeAAIAAASIgeAAIAAAMIAlAAIAAARg");
	this.shape_74.setTransform(1083.5,368.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#858C91").s().p("AgIA6QAGgGAAgKIAAhHQAggDAegGIAIARIgcAFIAEATIAUgKIAJAOIgXALQAJAWAOALIgOATQgdgfgHg1IgIABIAAA5IASgJIADASQgcAMgHAHgAgsA6QAPgUAAglIAAg7QArgCAygHIAGASQg4AHgYABIAAApQAAAWgEARQgDARgKAQIgRgOgAhIBBQAIgYAHghIATAHIgOA4IgUgGgAhIgSIAMgOQANAKALAKIgNAOgAhFg7IAMgMIAZATIgOAPQgLgMgMgKg");
	this.shape_75.setTransform(1068.2,368.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#858C91").s().p("AgJBIIAAgjQgTASghANIgLgSQAggIAUgPIgyAAIAAgRIAkAAIgSgNIAKgKIgVAAIAAgRIA2AAIAAgJIATAAIAAAJIA2AAIAAARIgWAAIALAJQgKAJgIAFIAkAAIAAARIgzAAQAUAPAhAGIgKATQgjgLgSgTIAAAjgAAKAKIASAAIgJgKIARgNIgaAAgAgRAAIgLAKIATAAIAAgXIgaAAIASANgAASgkIAAgIIgjAAIAAAIIgUAAIAAgIIghAAIAAgQIAhAAIAAgMIAUAAIAAAMIAjAAIAAgMIAUAAIAAAMIAiAAIAAAQIgiAAIAAAIg");
	this.shape_76.setTransform(1052.9,368.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#858C91").s().p("AhDA5QAMgQAAgpIAAhEIB6AAIAAByQABAJgFAFQgEAFgJABIgXABIgGgWIAQABQAKAAAAgJIAAgNIgeAAIAAApIgVAAIAAgpIgfAAQgCAggKANQgKgHgKgFgAARAFIAeAAIAAgRIgeAAgAgiAFIAeAAIAAgRIgeAAgAARgfIAeAAIAAgSIgeAAgAgigfIAeAAIAAgSIgeAAg");
	this.shape_77.setTransform(1037.2,368.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#858C91").s().p("AgjA3QATgEAKgFQgKgHgIgKIAMgKIgOAAIAAgxIAjAAIAAgLIgnAAIAAgRIAnAAIAAgNIAUAAIAAANIApAAIAAARIgpAAIAAALIAkAAIAAA3IgTAAIAAgGIgSAAQgBAPgDAJQAUAGAdABIgLAWQgdgEgWgLQgLAIgYAIIgLgSgAAGAjQACgHABgJIgUAAQAHAJAKAHgAAdACIARAAIAAgPIgRAAgAgHACIAQAAIAAgPIgQAAgAg4BJIAAhFIgLATIgFgbQARgeAIglIATAFIgKAgIAABrg");
	this.shape_78.setTransform(1022.3,368.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#858C91").s().p("AgHBJIAAhjIAPAAIgKgNQAKgLAKgWIAVAAIgFALIAlAAIAAAQIgaAAIAJAKIgMAJIAYAAIAABiIgTAAIAAgGIgkAAIAAAHgAALAyIAkAAIAAgLIgkAAgAALAYIAkAAIAAgJIgkAAgAALAAIAkAAIAAgJIgkAAgAAKgaIAcAAIgLgOIAIgFIgLAAQgGAKgIAJgAguBJIAAgwQgGAPgKAPQgDgLgFgLQAPgPAHgRIgSAAIAAgRIAUAAIAAgQIASAAIAAAQIARAAIAAARIgRAAIAAAHIAUAQIgKAPIgKgLIAAAtgAhGglQARgQAIgTIATAAIgFALIAgAAIAAAQIgQAAIAIALIgOAIQgGgKgGgHIAEgCIgLAAQgHAKgKAKQgGgHgHgFg");
	this.shape_79.setTransform(1006.8,368.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
	this.shape_80.setTransform(991.7,368.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#858C91").s().p("AhIA2QAegDAXgIQgOgMgKgPIgKAAIAAgQIBmAAIAAAQQgLAPgQAMQAVAGAeACIgLAVQglgEgZgNQgZAMgkAGQgEgJgHgKgAABAiQAOgHALgLIgwAAQAKALANAHgAAdgVIAKgNQAQAKASANIgNANIgfgXgAhIgNQASgKAPgMIANANQgQANgTAKIgLgOgAAIgDIAAgjIgPAAIAAAjIgTAAIAAgjIgrAAIAAgRIA7AAIgFgLIAUgGIAHARIA6AAIAAARIgrAAIAAAjg");
	this.shape_81.setTransform(976.4,368.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_82.setTransform(960.7,368.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#858C91").s().p("AAmBIIAAgJIhLAAIAAAJIgWAAIAAh9IApAAIAEgSIAYADIgGAPIA4AAIAAB9gAglAsIBLAAIAAgOIhLAAgAglAMIBLAAIAAgOIhLAAgAglgUIBLAAIAAgOIhLAAg");
	this.shape_83.setTransform(945.8,368.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#858C91").s().p("AgoACQAAgdALgPQALgQAUAAQAnAAAAA6QAAAcgLAPQgKAQgUAAQgoAAAAg5gAgQABQAAAoAQAAQARAAAAgpQAAgngQAAQgRAAAAAog");
	this.shape_84.setTransform(933.3,367.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#858C91").s().p("AgcAtQgKgOAAgZQAAgcANgSQAOgSAWAAQANAAAIADIAAAUQgJgEgKAAQgNAAgHAKQgIAKAAAQIAAAAQAJgMAOAAQAPAAAIAKQAJAJgBAPQAAARgLAMQgKALgRAAQgTAAgKgOgAgKAHQgEAFAAAHQAAAJAEAGQAFAHAGAAQAHAAAEgGQAEgGABgIQgBgTgQAAQgFAAgFAFg");
	this.shape_85.setTransform(923.9,367.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#858C91").s().p("AABA6IAAhYQgDADgIADIgOAFIAAgVQAUgGAOgLIAPAAIAABzg");
	this.shape_86.setTransform(913.5,367.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#858C91").s().p("AAZBBIgOgPQgJACgHAAQgYAAgQgQQgPgQAAgYQAAgbAQgQQAPgSAZABQAYAAAPAQQAOAQAAAZQAAAagPAQIgCACIAdAcgAgaghQgIALAAAQQAAAQAIAKQAHALAOAAQAOAAAHgKQAIgKAAgQQAAgSgIgKQgHgLgNAAQgOAAgIALg");
	this.shape_87.setTransform(903.7,368.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#858C91").s().p("AAdA5IgJgaIgoAAIgIAaIgaAAIAphxIAcAAIAoBxgAgCgbIgNAnIAeAAIgNgmIgCgKIAAAAIgCAJg");
	this.shape_88.setTransform(891,367.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#858C91").s().p("AhGBEIAAgVIA3AAIAAhyIAWAAIAAApIA2AAIAAAVIg2AAIAAA0IBAAAIAAAVg");
	this.shape_89.setTransform(1072.9,319.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#858C91").s().p("AgRBIIAAhmIAWAAIAAgRIgYAAIAAgSIBbAAIAAASIgZAAIAAARIAVAAIAABWQAAAOgMABIgQABIgDgSIAKABQAGAAAAgHIAAgMIgDAEIgJgQQgFARgIAMIgLgPQAMgVACgeIgKAAIgCANIAJAJIgIAQIgFgHQgEAPgIANIgFgLIAAAlgAgEAaQAHgQACgXIgJAAgAAtAFIAJANIAAgfIgHAAIgCASgAAVgeIALAAIAAgRIgLAAgAgvBIIAAgZIgXACIgBgTIAYgBIAAgPIgXAAIAAgRIAHggIgIAAIAAgRIALAAIADgTIARABIgEASIAXAAIAAARIgaAAIgIAgIAIAAIAAgZIARAAIAAAZIAIAAIAAARIgIAAIAAAOIAJgBIAAASIgJAAIAAAbg");
	this.shape_90.setTransform(1057.8,320.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#858C91").s().p("AgEBJIAAgcIhCAAIAAgSIBCAAIAAgPIg0AAIAAgQQAJgQAIgQIgbAAIAAgSIAjAAIAHgSIAWADIgHAPIBKAAIAAASIhTAAIgQAeIAeAAIAAgXIATAAIAAAXIAqAAIAAASIgqAAIAAAPIA4AAIAAASIg4AAIAAAcg");
	this.shape_91.setTransform(1042.9,320.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#858C91").s().p("AgIA5QARgPAIgSQAHgSAAgbIASAAIgBASQAFAnAbAQIgLAUQgVgQgIgbQgHAYgWAUIgMgQgAg4A/IgQgGQAFgMAEgTIARAFIgHAXQAKAAABgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgYIgfAAIAAgQIBLAAIAAAQIgZAAIAAALIAAATQAAAHgDAEQgCAEgFABQgFACgSAAIgCgJgAgVAjIANgKQAIAIAEAIIgMAKIgNgQgAhCABIAAgPIBAAAIAAAPgAAvgKIAFgYIgcAAIgJAaIgQgIQAKgXAGghIATADIgFARIApAAIAAARIgGAdgAhEgVIAAgPIAaAAIAAgKIgdAAIAAgQIAdAAIAAgKIATAAIAAAKIAbAAIAAAQIgbAAIAAAKIAWAAIAAAPg");
	this.shape_92.setTransform(1027.9,320.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#858C91").s().p("AhDA2QAegCAagIIgOgPQgMAGgPAFIgLgSQAugMAbgYQgdAOgoAJIgKgSQAagEAWgHIgOgOIgSAKQgFgIgIgIQAegLAVgVIAXAAIgIAJIA8AAIAAAPQgTAUgfAOIAYAAIgKALIAuAAIAAAOQgrA0hVAKQgEgKgFgJgAgJAVIAPAQQAVgKAQgPIgoAAIgMAJgAgUgsIARARQARgHASgMIgxAAIgDACg");
	this.shape_93.setTransform(1012.7,320.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#858C91").s().p("AgXA4QAogVgCg4IAUAAIgBAVQALAnAcAOIgPASQgVgOgKgbQgLAcgZAPIgOgRgAhIA0QAggWABgwIgWAMIgMgTQAvgTASgcIAYAAIgEAEQAUAaAqAPIgMAVQgngTgXgbQgMAQgXAPIAQAAQgBAQgCAMIAYAQIgMARIgQgOQgKAcgVARIgPgTg");
	this.shape_94.setTransform(997.9,320.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#858C91").s().p("AhHA1QA0gYAGgrIg4AAIAAgUIA6AAQABgQgBgVIAWAAIgBAlIA8AAIAAAUIg6AAQAMAwAxARIgRAUQgpgTgPgpQgLAmgsAXIgQgTg");
	this.shape_95.setTransform(982.9,320.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#858C91").s().p("AAmA8QgEgMAAgdIAAgKIg8AAIAAgQIBQAAIAAAXIABAaQABAHACAAQADAAACgXIAKAHQgCAYgEAIQgDAHgIAAQgMAAgGgMgAhHA/QALgbAIgeQAIAEALAEIgSA4IgUgHgAhIgTIAMgNQAOAJAMALIgNAOQgKgJgPgMgAgmggQARgUAIgUIAUAAIgFANIBBAAIAAARIhJAAIgEAJIBGAAIAAARIhJAAIAAgOIgNAUIgMgWgAhGg6IAMgNQARALAKAJIgNAOQgLgLgPgKg");
	this.shape_96.setTransform(967.9,320.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#858C91").s().p("AhGBEIAAgVIA2AAIAAhyIAXAAIAAApIA2AAIAAAVIg2AAIAAA0IBAAAIAAAVg");
	this.shape_97.setTransform(952.9,319.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#858C91").s().p("AgzBJIAAg1IgMALIgIgXQAWgTAOgYIggAAIAAgUIApAAIAFgRIAWACIgEAPIBLAAIAAAUIhTAAQgIASgNAQIAABKgAgbBCIAAgTIAoAAIAAghIggAAIAAgTIAgAAIAAgaIAUAAIAAAaIAhAAIAAATIghAAIAAAhIAnAAIAAATg");
	this.shape_98.setTransform(937.8,320.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#858C91").s().p("AhCA5QALgQAAgpIAAhEIB7AAIAAByQAAAJgFAFQgEAFgJABIgXABIgGgWIAQABQAKAAAAgJIAAgNIgeAAIAAApIgUAAIAAgpIggAAQgCAggKANQgKgHgJgFgAARAFIAeAAIAAgRIgeAAgAgjAFIAgAAIAAgRIggAAgAARgfIAeAAIAAgSIgeAAgAgjgfIAgAAIAAgSIggAAg");
	this.shape_99.setTransform(922.6,320.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#858C91").s().p("AhHA6QAMgUAAgtIAAguIA4AAIgFgOIAXgFIAHATIAyAAIAAASIhwAAIAAAeQAAA3gPAXIgQgPgAgqBBIAAgUIBFAAIAVhIIAUAFQgIAbgNAoIAZAAIAAAUgAgngQIASgIQANAbAKAeIgTAHQgJgbgNgdgAgDgYIASgGQAHAVAKAeIgUAGIgPgzg");
	this.shape_100.setTransform(907.8,320.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#858C91").s().p("Ag/A8QAVgPAEgaIgiAAIAAgTIAjAAIAAgbIgbAAIAAgTIAhAAIgMgOIAQgMIATATIgKAHIAbAAIASgaIAVALIgNAPIAfAAIAAATIgXAAIAAAbIAdAAIAAATIgdAAIAAAzIgVAAIAAgzIgnAAQgDAkgXASIgUgNgAgRAAIAnAAIAAgbIgnAAg");
	this.shape_101.setTransform(893,320.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#858C91").s().p("AgNAUIAIgnIATAAIgLAng");
	this.shape_102.setTransform(1253.3,301.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#858C91").s().p("AhHAyIAPgNIAAglIgNAAIAAgRIAgAAIAAA3QAMANAXAAIBKgBIgFATQg6AAgUgBQgVgBgNgMIgRARgAgTAqIAAgsIBQAAIAAAsgAAAAaIAqAAIAAgMIgqAAgAgegJIAAgQIATAAIAZAAIAAgMIgUAAIgFAMIAFgMIAUAAIAAAMIgZAAIgRgIQAIgPAHgVIAQAFIgDALIAOAAIAAgSIATAAIAAASIAgAAIAAAQIggAAIAAAMIAlAAIAAAQgAhCg8IAQgJIAUAbIgRALIgTgdg");
	this.shape_103.setTransform(1242.4,296.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#858C91").s().p("AggBJIAAgzIgNAAIAAApIgSAAIAAg6IAfAAIAAgKIgkAAIAAgRIAkAAIAAgMIgQAAIgEAMIgPgHQAGgRAEgUIAQADIgDAMIAMAAIAAgUIATAAIAAAUIAcAAIAAARIgcAAIAAAMIAhAAIAAARIghAAIAAAKIAdAAIAAApQAAAHgDAFQgDAFgIAAIgKABIgEgTIAHABQAFgBgBgFIAAgSIgMAAIAAAzgAAYAzIASAAQAIAAAAgJIAAhxIATAAIAAB4QAAALgFAGQgFAFgJAAIgVABIgFgVgAAYAlIAAhhIASAAIAABhg");
	this.shape_104.setTransform(1227.1,296.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#858C91").s().p("AAQA2IAQAAQANAAAAgMIAAgaIgEAFIgMgHIAAAlIgnAAIAAAGIgSAAIAAgpIgJAHIgHgIIAAA4IgTAAIAAhjIAdAAIgIgKIAYAAIAIAKIAVAAIAJgKIAYAAIgJAKIAdAAIAABKQAAAKgDAGQgFAGgGACQgIABgXABIgDgSgAgKAjIAWAAIAAgMIgWAAgAAUAIIgNgIIAJgLIAdAQIAAgSIhZAAIAAAUIAcgTIALAMIgMAIIAlAAgAhFgqIAAgRIA6AAIgDgMIAXAAIACAMIA7AAIAAARg");
	this.shape_105.setTransform(1212.4,296.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#858C91").s().p("AhHAyIAPgNIAAglIgNAAIAAgRIAgAAIAAA3QAMANAXAAIBKgBIgFATQg6AAgUgBQgVgBgNgMIgRARgAgTAqIAAgsIBQAAIAAAsgAAAAaIAqAAIAAgMIgqAAgAgegJIAAgQIATAAIAZAAIAAgMIgUAAIgFAMIgRgIQAIgPAHgVIAQAFIgDALIAOAAIAAgSIATAAIAAASIAgAAIAAAQIggAAIAAAMIAlAAIAAAQgAgLgZIAFgMIAUAAIAAAMgAgLgZgAhCg8IAQgJIAUAbIgRALIgTgdg");
	this.shape_106.setTransform(1197.4,296.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#858C91").s().p("AggBJIAAgzIgNAAIAAApIgSAAIAAg6IAfAAIAAgKIgkAAIAAgRIAkAAIAAgMIgQAAIgEAMIgPgHQAGgRAEgUIAQADIgDAMIAMAAIAAgUIATAAIAAAUIAcAAIAAARIgcAAIAAAMIAhAAIAAARIghAAIAAAKIAdAAIAAApQAAAHgDAFQgDAFgIAAIgKABIgEgTIAHABQAFgBgBgFIAAgSIgMAAIAAAzgAAYAzIASAAQAIAAAAgJIAAhxIATAAIAAB4QAAALgFAGQgFAFgJAAIgVABIgFgVgAAYAlIAAhhIASAAIAABhg");
	this.shape_107.setTransform(1182.1,296.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#858C91").s().p("AAuBFIAAgGIgYAAIAAAFIgRAAIAAgvIAfAAQgZgFgLgNQgKAMgdAGIAiAAIAAAwIgRAAIAAgGIgXAAIAAAGIgRAAIAAgtIgHAAIgDgOQAtgCAKgKIg1AAIAAgPIA8AAIABgHIATAAIgBAHIAUAAIgCgGIASgCIAEAIIAWAAIAAAPIg6AAQAQALAsABIgEAPIgGgBIAAAtgAAWAwIAYAAIAAgMIgYAAgAgtAwIAXAAIAAgMIgXAAgAAFgbIAAgpIA6AAIAAApgAAXgpIAWAAIAAgMIgWAAgAg+gbIAAgpIA5AAIAAApgAgtgpIAWAAIAAgMIgWAAg");
	this.shape_108.setTransform(1167.4,296.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJIASAdIgSAKIgQgeg");
	this.shape_109.setTransform(1152.4,296.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#858C91").s().p("AhIA2QAegDAXgJQgOgKgKgQIgKAAIAAgQIBmAAIAAAQQgLAPgQALQAVAHAeABIgLAWQglgEgZgNQgZANgkAFQgFgJgGgKgAABAiQAOgIALgKIgwAAQAKAKANAIgAAdgVIAKgNQAQAJASANIgNAOIgfgXgAhIgNQASgKAPgMIANANQgRAMgSAMIgLgPgAAIgEIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgRIA6AAIgFgMIAUgFIAHARIA5AAIAAARIgqAAIAAAig");
	this.shape_110.setTransform(1137.4,296.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#858C91").s().p("AgWBGQAZggAAgmQAAgkgZghIATAAQAaAfAAAmQAAApgaAdg");
	this.shape_111.setTransform(1118,297.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#858C91").s().p("AAZA5IguhJIgGgJIAAASIAABAIgXAAIAAhxIAbAAIAuBHIAFAJIAAAAIgBgQIAAhAIAYAAIAABxg");
	this.shape_112.setTransform(1108.5,295.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#858C91").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_113.setTransform(1099.6,295.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#858C91").s().p("AglA0IAAgYQAOAMARAAQAJAAAFgEQAFgDAAgGQAAgEgEgEQgEgEgQgHQgbgLAAgVQAAgQANgJQALgJATAAQARAAALAFIAAAWQgLgHgQAAQgHAAgFADQgGADAAAGQAAAEAEAEQAEADANAHQAQAHAHAHQAGAIABALQgBARgMAIQgLAJgUAAQgTAAgNgHg");
	this.shape_114.setTransform(1092.7,295.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#858C91").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_115.setTransform(1085.6,295.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#858C91").s().p("AAdA5IgJgaIgoAAIgIAaIgaAAIAphxIAcAAIAoBxgAgCgbIgNAnIAeAAIgNgmIgCgKIAAAAIgCAJg");
	this.shape_116.setTransform(1077.4,295.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#858C91").s().p("AAEBGQgagfAAgnQAAgoAagdIATAAQgZAgAAAlQAAAmAZAgg");
	this.shape_117.setTransform(1068.6,297.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#858C91").s().p("AAsBIIAAgHIgvAAIAAAHIgUAAIAAg3IBXAAIAAA3gAgDAwIAvAAIAAgOIgvAAgAg5BIIAAhAIgKASIgFgbQANgZANgtIATAGIgLAgIAABpgAgXAJIAAgPIBXAAIAAAPgAgXgOIAAgPIBXAAIAAAPgAgdglIAAgRIAmAAIgGgOIAWgEIAIASIAoAAIAAARg");
	this.shape_118.setTransform(1049.2,296.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#858C91").s().p("Ag0A3IgJAIIgLgRQAYgSANgZIghAAIAAgOIAnAAIADgIIAUAAIgDAIIBQAAIAAAOIhVAAIgEAHIBNAAIAAANQgNANgQAJQATAFAYAAIgKATQgfgDgZgKQgVAJgdAGIgJgQgAgyA2QAUgEARgFQgJgGgIgIQgJAMgLALgAAIAlQANgGAKgIIgtAAQAKAJAMAFgAAvgPIAAgIIhbAAIAAAIIgVAAIAAgXIATAAIgFgIIAOgGIgZAAIgFgQQA0ABBOgDIAEAPIgUABIALAGIgJAKIASAAIAAAXgAAHg1IAJAPIALAAIAMgQgAghg0IAJAOIAUAAIgGgLIAMgEg");
	this.shape_119.setTransform(1034.2,296.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#858C91").s().p("AAqBHIAAgJIhSAAIAAAJIgWAAIAAh2IA0AAIAAgXIAVAAIAAAXIA0AAIAAB2gAALAqIAfAAIAAgbIgfAAgAgoAqIAeAAIAAgbIgeAAgAALgDIAfAAIAAgZIgfAAgAgogDIAeAAIAAgZIgeAAg");
	this.shape_120.setTransform(1019.2,296.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#858C91").s().p("AgHBJIAAhjIAPAAIgKgNQAKgLAKgWIAVAAIgFALIAlAAIAAAQIgaAAIAJAKIgMAJIAYAAIAABiIgTAAIAAgGIgkAAIAAAHgAALAyIAkAAIAAgLIgkAAgAALAYIAkAAIAAgJIgkAAgAALAAIAkAAIAAgJIgkAAgAAKgaIAcAAIgLgOIAIgFIgLAAQgGAKgIAJgAguBJIAAgwQgGAPgKAPQgDgLgFgLQAPgPAHgRIgSAAIAAgRIAUAAIAAgQIASAAIAAAQIARAAIAAARIgRAAIAAAHIAUAQIgKAPIgKgLIAAAtgAhGglQARgQAIgTIATAAIgFALIAgAAIAAAQIgQAAIAIALIgOAIQgGgKgGgHIAEgCIgLAAQgHAKgKAKQgGgHgHgFg");
	this.shape_121.setTransform(1004.1,296.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#858C91").s().p("AhIAzIAOgMIAAgoIgNAAIAAgTIAfAAIAAA7QAJAMAXAAQAcABA1gBIgHASIhOAAQgXAAgNgPIgQATgAAJAwIAAgYQgMAOgRAIIgMgRQAUgGAPgOIgcAAIAAgpIAiAAIAAgJIgnAAIAAgSIAnAAIAAgNIATAAIAAANIAoAAIAAASIgoAAIAAAJIAiAAIAAApIgiAAIAAALIAGgKIAlAUIgJAPIgigUIAAAXgAAcgFIASAAIAAgMIgSAAgAgIgFIARAAIAAgMIgRAAgAhEg/IAQgJQALAQAHANIgSAKIgQgeg");
	this.shape_122.setTransform(989.3,296.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#858C91").s().p("AhIA2QAegDAXgJQgOgKgKgQIgKAAIAAgQIBmAAIAAAQQgKAPgRALQAVAHAeABIgMAWQgjgEgagNQgZANgkAFQgFgJgGgKgAABAiQAOgIALgKIgwAAQAJAKAOAIgAAdgVIALgNQAPAJASANIgNAOIgfgXgAhIgNQASgKAPgMIAMANQgQAMgSAMIgLgPgAAIgEIAAgiIgPAAIAAAiIgTAAIAAgiIgqAAIAAgRIA6AAIgFgMIAUgFIAIARIA4AAIAAARIgqAAIAAAig");
	this.shape_123.setTransform(974.3,296.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#858C91").s().p("AgNA8IAIgJIgoAEQgKABgEACIgKgSQAIgGALgnIgSAAIAAgTIBEAAIAAATIgcAAIgPAoIAYgBIgKgbIAQgGIAPAlQAKgSAAgvIgOAAIAAgUIAOAAIAAgZIAUAAIgBAZIAnAAIgCBSIgBAVQgBAEgDADQgDAEgFABQgFACgWAAIgFgWIAQAAQAEAAADgBQACgCAAgDIABgXIABguIgTAAQgBAfgCAOQgCAOgGAPQgGAOgKAMQgHgHgKgGgAg+gqIAAgTIA5AAIAAATg");
	this.shape_124.setTransform(958.9,296.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#858C91").s().p("AAmBIIAAgJIhLAAIAAAJIgWAAIAAh9IApAAIAEgSIAYADIgGAPIA4AAIAAB9gAglAsIBLAAIAAgOIhLAAgAglAMIBLAAIAAgOIhLAAgAglgUIBLAAIAAgOIhLAAg");
	this.shape_125.setTransform(944.3,296.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#858C91").s().p("AgoACQAAgdALgPQALgQAUAAQAnAAAAA6QAAAcgLAPQgKAQgUAAQgoAAAAg5gAgQABQAAAoAQAAQARAAAAgpQAAgngQAAQgRAAAAAog");
	this.shape_126.setTransform(932.1,295.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#858C91").s().p("AgcAtQgLgOABgZQAAgcANgSQAOgSAWAAQANAAAIADIAAAUQgJgEgKAAQgNAAgHAKQgIAKAAAQIAAAAQAJgMAOAAQAPAAAIAKQAJAJgBAPQAAARgLAMQgKALgRAAQgTAAgKgOgAgKAHQgEAFAAAHQAAAJAEAGQAFAHAGAAQAHAAAEgGQAEgGABgIQgBgTgQAAQgFAAgFAFg");
	this.shape_127.setTransform(923,295.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#858C91").s().p("AABA6IAAhYQgDAEgIADIgOADIAAgUQAUgGAOgLIAPAAIAABzg");
	this.shape_128.setTransform(912.9,295.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#858C91").s().p("AAZBCIgPgQQgHACgIAAQgZAAgPgQQgPgQAAgYQAAgbAPgQQAQgRAagBQAXAAAPARQAPAQAAAaQAAAZgQAQIgBADIAcAcgAgbghQgHAKgBASQABAPAHALQAJAKAOAAQAMAAAIgKQAJgKgBgQQABgSgJgKQgHgLgNAAQgOAAgJALg");
	this.shape_129.setTransform(903.4,296.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#858C91").s().p("AAdA5IgJgaIgoAAIgIAaIgaAAIAphxIAcAAIAoBxgAgCgbIgNAnIAeAAIgNgmIgCgKIAAAAIgCAJg");
	this.shape_130.setTransform(891,295.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(150));

	// 图层 2
	this.instance = new lib.modelMC();
	this.instance.parent = this;
	this.instance.setTransform(231,178.3,0.85,0.85,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// 图层 4
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333F48").s().p("AiOBkIAdgZIAAhVIgfAAIAAglIBFAAIAAB6QAXAZAwAAQCAAAAVgCQgIAXgEAQIhcABIguAAQgcAAgWgHQgWgHgPgOIgiAigAARBbIAAhdQgZAmgfAfIgegeQAygkAegzIhDAAIAAgjIBJAAIAAg6IAnAAIAAA6IArAAIghgcIAZgYIAmAjIgTARIAZAAIAAAjIhPAAIAAAiIAWgSIBDBFIgdAaIg8hGIAABkgAiFh4IAfgTQAWAcASAaIgiAXQgSgfgTgbg");
	this.shape_131.setTransform(933,232.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333F48").s().p("AgJB4QAVgRAQgWIgRALIgFgLQgjAZgQASIgXgaQALgKAAgUIAAhGIgKAYIgMgMIAACEIgiAAIAAh4QgKAjgMAZIgKgzQARgjAMgzIgZAAIAAgkIAcAAIAAg1IAiAAIAAA1IARAAIAAAkIgRAAIAAAbIAWAQIAAh3IBPAAIAACRIgxAAIAAA0IATgOIgLgVIAZgNQARAaANAaQAVgdAHgfIglAAIAIhfIAcAAIgEA/IAMAAQAFgfAAguIgrAAIAAghIBnAAIAAAhIgaAAQAAApgGAkIAlAAIAAAgIgrAAIgFASIAQAAIAABAQAAAKAFAAQAFAAACgLQACgMAAgWIAXAMQAABHgiAAIgIAAQgdAAAAgsIAAgWQgVApggAeIgfgZgAgbgOIAVAAIAAgeIgVAAgAgbhIIAVAAIAAgeIgVAAg");
	this.shape_132.setTransform(901.9,232.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333F48").s().p("AgNCCIAAixIAcAAIgTgXQATgVARgnIAmAAIgKAUIBEAAIAAAcIguAAIAQATIgXAQIAsAAIAACxIgiAAIAAgLIhBAAIAAALgAAUBaIBBAAIAAgTIhBAAgAAUAsIBBAAIAAgRIhBAAgAAUAAIBBAAIAAgQIhBAAgAASgvIAyAAQgJgNgKgMIAPgKIgTAAQgMASgPARgAhTCCIAAhVQgLAbgTAcQgFgUgIgWQAagaAOgeIghAAIAAggIAkAAIAAgcIAgAAIAAAcIAeAAIAAAgIgeAAIAAANQASAOATAPIgTAbIgSgVIAABQgAh+hEQAegcAOgiIAjAAIgJAUIA6AAIAAAcIgdAAIAOAUIgaAOQgKgRgLgOIAHgDIgTAAQgOATgSARQgJgMgNgKg");
	this.shape_133.setTransform(356.6,61.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333F48").s().p("AiCBcIAZgWIAAhJIgXAAIAAgiIA4AAIAABrQAQAWApAAQA0ACBegCIgNAhQhNAAhAgBQgoAAgXgaIgdAhgAAQBXIAAgsQgWAZgeAPQgJgOgNgQQAkgLAcgaIgzAAIAAhLIA9AAIAAgQIhGAAIAAggIBGAAIAAgWIAiAAIAAAWIBIAAIAAAgIhIAAIAAAQIA/AAIAABLIg/AAIAAAUIALgSQAjASAgASIgQAbQgigUgcgPIAAApgAAygKIAhAAIAAgVIghAAgAgQgKIAgAAIAAgVIggAAgAh7hyIAegQQASAcAOAYIghARQgNgbgQgag");
	this.shape_134.setTransform(329.7,61.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333F48").s().p("AiCBhQA2gGApgPQgZgTgSgbIgSAAIAAgfIC5AAIAAAdQgTAcgeAUQAnAMA0ADIgUAmQhAgHgvgXQguAWhBALQgHgRgMgSgAABA9QAagOAUgRIhWAAQAQASAYANgAAzgnIAUgXQAcARAgAXIgWAZQgcgUgegWgAiCgYQAggTAbgVIAWAXQgcAXgiAUQgJgOgKgMgAAPgHIAAg9IgdAAIAAA9IghAAIAAg9IhNAAIAAgfIBqAAIgJgWIAlgKIANAgIBnAAIAAAfIhNAAIAAA9g");
	this.shape_135.setTransform(302.3,61.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333F48").s().p("AgYBtQAIgIAGgJIhJAGQgQACgJAEIgQggQAOgLAUhHIghAAIAAgiIB6AAIAAAiIgzAAQgMAlgOAkIArgCIgSgxIAdgKIAbBDQASghAAhWIgaAAIAAgjIAaAAIABgtIAjAAIgBAtIBFAAIgDCUQAAAegCAIQgCAHgFAGQgGAGgJADQgJACgmABQgEgUgGgUIAdABQAIAAAEgDQAEgDABgFIACgpIABhVIgiAAQgBA6gEAZQgEAagLAaQgLAagRAUQgOgMgSgKgAhwhMIAAgiIBlAAIAAAig");
	this.shape_136.setTransform(274.5,61.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333F48").s().p("ABFCCIAAgQIiJAAIAAAQIgmAAIAAjjIBJAAIAIggIAqAGIgKAaIBkAAIAADjgAhEBQICJAAIAAgaIiJAAgAhEAVICJAAIAAgZIiJAAgAhEglICJAAIAAgZIiJAAg");
	this.shape_137.setTransform(247.8,61.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333F48").s().p("AhIADQAAgzAUgdQATgcAjAAQBHAAAABpQAAAygTAcQgTAcgjAAQhIAAAAhngAgdACQAABHAdAAQAdAAAAhJQAAhIgcAAQgeAAAABKg");
	this.shape_138.setTransform(225.7,60.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333F48").s().p("Ag0BQQgSgZAAgsQAAgzAYggQAYghAqAAQAXAAAOAGIAAAkQgQgJgSAAQgXAAgOASQgOATAAAdIABAAQAOgWAcAAQAaAAAPASQAPARAAAcQAAAegUAVQgTATgfABQgigBgTgZgAgTAMQgIAJAAAOQAAAQAIALQAIALAMAAQANAAAIgLQAHgKAAgPQAAgigcAAQgMAAgIAJg");
	this.shape_139.setTransform(208.9,60.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333F48").s().p("AACBoIAAifQgHAGgOAGQgNAFgMACIAAglQAkgKAagUIAbAAIAADPg");
	this.shape_140.setTransform(190.4,60.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333F48").s().p("AAtB1IgbgbQgNADgPABQgsgBgcgcQgbgdAAgtQAAgvAcgeQAcgfAuAAQArAAAbAeQAaAcAAAvQAAAugcAeIgDAEIA0AxgAgwg8QgPATAAAeQAAAdAOATQAPATAZAAQAYAAAOgSQAPgSAAgeQAAgggOgSQgOgTgYAAQgaAAgOATg");
	this.shape_141.setTransform(173.1,62);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333F48").s().p("AA0BmIgPgvIhJAAIgPAvIgwAAIBLjLIAyAAIBKDLgAgEgwIgXBFIA1AAIgXhFQgCgHgBgLIAAAAQgBAJgDAJg");
	this.shape_142.setTransform(150.5,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]}).wait(155));

	// bg
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2F8F8").s().p("Eg9oA8AMAAAh3/MB7RAAAMAAAB3/g");
	this.shape_143.setTransform(394.5,384);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_144.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143}]}).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


// stage content:
(lib._3dpage1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(569.9,-475.2,1366,768);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#F1F9F7",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/3dpage1/bsxwk0000.jpg", id:"bsxwk0000"},
		{src:"images/3dpage1/bsxwk0001.jpg", id:"bsxwk0001"},
		{src:"images/3dpage1/bsxwk0002.jpg", id:"bsxwk0002"},
		{src:"images/3dpage1/bsxwk0003.jpg", id:"bsxwk0003"},
		{src:"images/3dpage1/bsxwk0004.jpg", id:"bsxwk0004"},
		{src:"images/3dpage1/bsxwk0005.jpg", id:"bsxwk0005"},
		{src:"images/3dpage1/bsxwk0006.jpg", id:"bsxwk0006"},
		{src:"images/3dpage1/bsxwk0007.jpg", id:"bsxwk0007"},
		{src:"images/3dpage1/bsxwk0008.jpg", id:"bsxwk0008"},
		{src:"images/3dpage1/bsxwk0009.jpg", id:"bsxwk0009"},
		{src:"images/3dpage1/bsxwk0010.jpg", id:"bsxwk0010"},
		{src:"images/3dpage1/bsxwk0011.jpg", id:"bsxwk0011"},
		{src:"images/3dpage1/bsxwk0012.jpg", id:"bsxwk0012"},
		{src:"images/3dpage1/bsxwk0013.jpg", id:"bsxwk0013"},
		{src:"images/3dpage1/bsxwk0014.jpg", id:"bsxwk0014"},
		{src:"images/3dpage1/bsxwk0015.jpg", id:"bsxwk0015"},
		{src:"images/3dpage1/bsxwk0016.jpg", id:"bsxwk0016"},
		{src:"images/3dpage1/bsxwk0017.jpg", id:"bsxwk0017"},
		{src:"images/3dpage1/bsxwk0018.jpg", id:"bsxwk0018"},
		{src:"images/3dpage1/bsxwk0019.jpg", id:"bsxwk0019"},
		{src:"images/3dpage1/bsxwk0020.jpg", id:"bsxwk0020"},
		{src:"images/3dpage1/bsxwk0021.jpg", id:"bsxwk0021"},
		{src:"images/3dpage1/bsxwk0022.jpg", id:"bsxwk0022"},
		{src:"images/3dpage1/bsxwk0023.jpg", id:"bsxwk0023"},
		{src:"images/3dpage1/bsxwk0024.jpg", id:"bsxwk0024"},
		{src:"images/3dpage1/bsxwk0025.jpg", id:"bsxwk0025"},
		{src:"images/3dpage1/bsxwk0026.jpg", id:"bsxwk0026"},
		{src:"images/3dpage1/bsxwk0027.jpg", id:"bsxwk0027"},
		{src:"images/3dpage1/bsxwk0028.jpg", id:"bsxwk0028"},
		{src:"images/3dpage1/bsxwk0029.jpg", id:"bsxwk0029"},
		{src:"images/3dpage1/bsxwk0030.jpg", id:"bsxwk0030"},
		{src:"images/3dpage1/bsxwk0031.jpg", id:"bsxwk0031"},
		{src:"images/3dpage1/bsxwk0032.jpg", id:"bsxwk0032"},
		{src:"images/3dpage1/bsxwk0033.jpg", id:"bsxwk0033"},
		{src:"images/3dpage1/bsxwk0034.jpg", id:"bsxwk0034"},
		{src:"images/3dpage1/bsxwk0035.jpg", id:"bsxwk0035"},
		{src:"images/3dpage1/bsxwk0036.jpg", id:"bsxwk0036"},
		{src:"images/3dpage1/bsxwk0037.jpg", id:"bsxwk0037"},
		{src:"images/3dpage1/bsxwk0038.jpg", id:"bsxwk0038"},
		{src:"images/3dpage1/bsxwk0039.jpg", id:"bsxwk0039"},
		{src:"images/3dpage1/bsxwk0040.jpg", id:"bsxwk0040"},
		{src:"images/3dpage1/bsxwk0041.jpg", id:"bsxwk0041"},
		{src:"images/3dpage1/bsxwk0042.jpg", id:"bsxwk0042"},
		{src:"images/3dpage1/bsxwk0043.jpg", id:"bsxwk0043"},
		{src:"images/3dpage1/bsxwk0044.jpg", id:"bsxwk0044"},
		{src:"images/3dpage1/bsxwk0045.jpg", id:"bsxwk0045"},
		{src:"images/3dpage1/bsxwk0046.jpg", id:"bsxwk0046"},
		{src:"images/3dpage1/bsxwk0047.jpg", id:"bsxwk0047"},
		{src:"images/3dpage1/bsxwk0048.jpg", id:"bsxwk0048"},
		{src:"images/3dpage1/bsxwk0049.jpg", id:"bsxwk0049"},
		{src:"images/3dpage1/bsxwk0050.jpg", id:"bsxwk0050"},
		{src:"images/3dpage1/bsxwk0051.jpg", id:"bsxwk0051"},
		{src:"images/3dpage1/bsxwk0052.jpg", id:"bsxwk0052"},
		{src:"images/3dpage1/bsxwk0053.jpg", id:"bsxwk0053"},
		{src:"images/3dpage1/bsxwk0054.jpg", id:"bsxwk0054"},
		{src:"images/3dpage1/bsxwk0055.jpg", id:"bsxwk0055"},
		{src:"images/3dpage1/bsxwk0056.jpg", id:"bsxwk0056"},
		{src:"images/3dpage1/bsxwk0057.jpg", id:"bsxwk0057"},
		{src:"images/3dpage1/bsxwk0058.jpg", id:"bsxwk0058"},
		{src:"images/3dpage1/bsxwk0059.jpg", id:"bsxwk0059"},
		{src:"images/3dpage1/bsxwk0060.jpg", id:"bsxwk0060"},
		{src:"images/3dpage1/bsxwk0061.jpg", id:"bsxwk0061"},
		{src:"images/3dpage1/bsxwk0062.jpg", id:"bsxwk0062"},
		{src:"images/3dpage1/bsxwk0063.jpg", id:"bsxwk0063"},
		{src:"images/3dpage1/bsxwk0064.jpg", id:"bsxwk0064"},
		{src:"images/3dpage1/bsxwk0065.jpg", id:"bsxwk0065"},
		{src:"images/3dpage1/bsxwk0066.jpg", id:"bsxwk0066"},
		{src:"images/3dpage1/bsxwk0067.jpg", id:"bsxwk0067"},
		{src:"images/3dpage1/bsxwk0068.jpg", id:"bsxwk0068"},
		{src:"images/3dpage1/bsxwk0069.jpg", id:"bsxwk0069"},
		{src:"images/3dpage1/bsxwk0070.jpg", id:"bsxwk0070"},
		{src:"images/3dpage1/bsxwk0071.jpg", id:"bsxwk0071"},
		{src:"images/3dpage1/bsxwk0072.jpg", id:"bsxwk0072"},
		{src:"images/3dpage1/bsxwk0073.jpg", id:"bsxwk0073"},
		{src:"images/3dpage1/bsxwk0074.jpg", id:"bsxwk0074"},
		{src:"images/3dpage1/bsxwk0075.jpg", id:"bsxwk0075"},
		{src:"images/3dpage1/bsxwk0076.jpg", id:"bsxwk0076"},
		{src:"images/3dpage1/bsxwk0077.jpg", id:"bsxwk0077"},
		{src:"images/3dpage1/bsxwk0078.jpg", id:"bsxwk0078"},
		{src:"images/3dpage1/bsxwk0079.jpg", id:"bsxwk0079"},
		{src:"images/3dpage1/bsxwk0080.jpg", id:"bsxwk0080"},
		{src:"images/3dpage1/bsxwk0081.jpg", id:"bsxwk0081"},
		{src:"images/3dpage1/bsxwk0082.jpg", id:"bsxwk0082"},
		{src:"images/3dpage1/bsxwk0083.jpg", id:"bsxwk0083"},
		{src:"images/3dpage1/bsxwk0084.jpg", id:"bsxwk0084"},
		{src:"images/3dpage1/bsxwk0085.jpg", id:"bsxwk0085"},
		{src:"images/3dpage1/bsxwk0086.jpg", id:"bsxwk0086"},
		{src:"images/3dpage1/bsxwk0087.jpg", id:"bsxwk0087"},
		{src:"images/3dpage1/bsxwk0088.jpg", id:"bsxwk0088"},
		{src:"images/3dpage1/bsxwk0089.jpg", id:"bsxwk0089"},
		{src:"images/3dpage1/bsxwk0090.jpg", id:"bsxwk0090"},
		{src:"images/3dpage1/bsxwk0091.jpg", id:"bsxwk0091"},
		{src:"images/3dpage1/bsxwk0092.jpg", id:"bsxwk0092"},
		{src:"images/3dpage1/bsxwk0093.jpg", id:"bsxwk0093"},
		{src:"images/3dpage1/bsxwk0094.jpg", id:"bsxwk0094"},
		{src:"images/3dpage1/bsxwk0095.jpg", id:"bsxwk0095"},
		{src:"images/3dpage1/bsxwk0096.jpg", id:"bsxwk0096"},
		{src:"images/3dpage1/bsxwk0097.jpg", id:"bsxwk0097"},
		{src:"images/3dpage1/bsxwk0098.jpg", id:"bsxwk0098"},
		{src:"images/3dpage1/bsxwk0099.jpg", id:"bsxwk0099"},
		{src:"images/3dpage1/bsxwk0100.jpg", id:"bsxwk0100"},
		{src:"images/3dpage1/bsxwk0101.jpg", id:"bsxwk0101"},
		{src:"images/3dpage1/bsxwk0102.jpg", id:"bsxwk0102"},
		{src:"images/3dpage1/bsxwk0103.jpg", id:"bsxwk0103"},
		{src:"images/3dpage1/bsxwk0104.jpg", id:"bsxwk0104"},
		{src:"images/3dpage1/bsxwk0105.jpg", id:"bsxwk0105"},
		{src:"images/3dpage1/bsxwk0106.jpg", id:"bsxwk0106"},
		{src:"images/3dpage1/bsxwk0107.jpg", id:"bsxwk0107"},
		{src:"images/3dpage1/bsxwk0108.jpg", id:"bsxwk0108"},
		{src:"images/3dpage1/bsxwk0109.jpg", id:"bsxwk0109"},
		{src:"images/3dpage1/bsxwk0110.jpg", id:"bsxwk0110"},
		{src:"images/3dpage1/bsxwk0111.jpg", id:"bsxwk0111"},
		{src:"images/3dpage1/bsxwk0112.jpg", id:"bsxwk0112"},
		{src:"images/3dpage1/bsxwk0113.jpg", id:"bsxwk0113"},
		{src:"images/3dpage1/bsxwk0114.jpg", id:"bsxwk0114"},
		{src:"images/3dpage1/bsxwk0115.jpg", id:"bsxwk0115"},
		{src:"images/3dpage1/bsxwk0116.jpg", id:"bsxwk0116"},
		{src:"images/3dpage1/bsxwk0117.jpg", id:"bsxwk0117"},
		{src:"images/3dpage1/bsxwk0118.jpg", id:"bsxwk0118"},
		{src:"images/3dpage1/bsxwk0119.jpg", id:"bsxwk0119"},
		{src:"images/3dpage1/bsxwk0120.jpg", id:"bsxwk0120"},
		{src:"images/3dpage1/bsxwk0121.jpg", id:"bsxwk0121"},
		{src:"images/3dpage1/bsxwk0122.jpg", id:"bsxwk0122"},
		{src:"images/3dpage1/bsxwk0123.jpg", id:"bsxwk0123"},
		{src:"images/3dpage1/bsxwk0124.jpg", id:"bsxwk0124"},
		{src:"images/3dpage1/bsxwk0125.jpg", id:"bsxwk0125"},
		{src:"images/3dpage1/bsxwk0126.jpg", id:"bsxwk0126"},
		{src:"images/3dpage1/bsxwk0127.jpg", id:"bsxwk0127"},
		{src:"images/3dpage1/bsxwk0128.jpg", id:"bsxwk0128"},
		{src:"images/3dpage1/bsxwk0129.jpg", id:"bsxwk0129"},
		{src:"images/3dpage1/bsxwk0130.jpg", id:"bsxwk0130"},
		{src:"images/3dpage1/bsxwk0131.jpg", id:"bsxwk0131"},
		{src:"images/3dpage1/bsxwk0132.jpg", id:"bsxwk0132"},
		{src:"images/3dpage1/bsxwk0133.jpg", id:"bsxwk0133"},
		{src:"images/3dpage1/bsxwk0134.jpg", id:"bsxwk0134"},
		{src:"images/3dpage1/bsxwk0135.jpg", id:"bsxwk0135"},
		{src:"images/3dpage1/bsxwk0136.jpg", id:"bsxwk0136"},
		{src:"images/3dpage1/bsxwk0137.jpg", id:"bsxwk0137"},
		{src:"images/3dpage1/bsxwk0138.jpg", id:"bsxwk0138"},
		{src:"images/3dpage1/bsxwk0139.jpg", id:"bsxwk0139"},
		{src:"images/3dpage1/bsxwk0140.jpg", id:"bsxwk0140"},
		{src:"images/3dpage1/bsxwk0141.jpg", id:"bsxwk0141"},
		{src:"images/3dpage1/bsxwk0142.jpg", id:"bsxwk0142"},
		{src:"images/3dpage1/bsxwk0143.jpg", id:"bsxwk0143"},
		{src:"images/3dpage1/bsxwk0144.jpg", id:"bsxwk0144"},
		{src:"images/3dpage1/bsxwk0145.jpg", id:"bsxwk0145"},
		{src:"images/3dpage1/bsxwk0146.jpg", id:"bsxwk0146"},
		{src:"images/3dpage1/bsxwk0147.jpg", id:"bsxwk0147"},
		{src:"images/3dpage1/bsxwk0148.jpg", id:"bsxwk0148"},
		{src:"images/3dpage1/bsxwk0149.jpg", id:"bsxwk0149"},
		{src:"images/3dpage1/bsxwk0150.jpg", id:"bsxwk0150"}
	],
	preloads: []
};




})(lib3dpage1 = lib3dpage1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3dpage1, images, createjs, ss, AdobeAn;