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
// helper functions:

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


(lib.Loadjindu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A18AtIAAhZMAr5AAAIAABZg");
	this.shape.setTransform(140.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.1,9);


(lib.LoadingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// 图层 1
	this.instance = new lib.Loadjindu("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1,-0.5,0.01,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,x:0,y:0},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,2.8,9);


(lib.loadingViewAssets3d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgEArIABgOIAAgRIgXAAIABAHIgKAAQABgEAAgNIAAgJIgBgRQAEABAPAAIANAAIgBgTIAKABIgBACIgBAEQAAAGAAAGIANAAIAKAAIAKgBIgBAJIgBAJIAAAJIABAJIABAGIgLAAIAAgDIABgDIgXAAIAAARIAAAIIABAGgAAEAFIAXAAIAAgWIgXAAgAgaAFIAXAAIAAgWIgXAAg");
	this.shape.setTransform(166.3,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AATAcQgFAGgMAKQgCgEgGgBQAKgFAMgMQgGgMAAgWIgaAAIAFACIgBABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIgDADIALAAQAIABADgBIAAAGIgEgBIgHAAIgPAAIgIALIAMAAIgBgJIAHAAIADABIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAADIADAAIAJAAIABgBIAAAIIgBAAIgJgBIgDAAIAAAHQAKgBAEgBQgCACAAAFIgGABIgGAAIAAAFIABAIIgJAAIABgIIAAgEIgWADIgCgJQADACAOgBIAHgBIAAgIIgMAAIgHACIgEgIQAGAAAHgLIgDAAIgJABIAAgGIABAAQAEABAFgBIAFAAIAEgIIgNAAIgKAAIAAgIQACABAIAAIAQAAIAAgHIgIAAIgLAAIAAgHIACAAQAEABAFAAIAIAAIAAgCIgBgDIAAgFIAKABIgBABIgBAGIAAACIAGAAQAFAAAEgBIAAAHIgDAAIgGAAIgGAAIAAAHIAUAAIAAgMIAAgMIALACIgBABQgCABAAAFIgBAPIAOAAQAIAAAFgBIAAAIIgNAAIgOAAQABAOADANQAFgMACgJIAKAFIgBAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBADIgKATQAHALADAAQACAAABgIQADAFAEABQgDALgEABQgKgBgIgPgAAcgaIgFgIIAHgDIAIAKIgIAEIgCgDg");
	this.shape_1.setTransform(156.6,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgpAjQASgLAAgnIgBAAIgNAAIAAgIIAGABIAGAAIACAAIAAgKIAAgJQAKAAAAACIgBABIAAADQgCAGABAHIAHAAQAIAAAFgBIgCAeQgCAbgBAAQgCADgNACIgEgKQALADACgFQABAAABggIABgKIgMAAQAAAngTASQgCgEgFgDgAALAkIAAgJIAAguIAAgIIAIABIAOAAIAJgBQgBAFAAADIAAAuQAAAGABACIgKAAIABgIIgOAAIABAJgAATAUIAOAAIAAgnIgOAAg");
	this.shape_2.setTransform(146.8,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AABAiIAAgBQAKACABgEIAAgTIgEAAIgKAAIAAAAIAAgFIAAgFIAAgPIAAgIIAAAAIAIAAIADAAIACgKIgTAAIAAAUQAAAggNAUIgCgCQgDgEgDgBQANgNABgdIAAgVIgBgIIAAgBIAKAAIAiAAIAMAAIAAAIIgFAAIgHgBIgIAAIgEAKIAKAAIAJAAQgBACABAGIAAAPIAAAKIgCAAIgJAAIgEAAIAAAUQgBAGgCABQgCACgLABIgDgIgAAFAFIAXAAIAAgHIgXAAgAAFgIIAXAAIAAgHIgXAAgAgoAhQAFgLADgXIAIAEQgDARgFASgAgNAhQAJgJAEgJIAIAEQgIANgFAEQgEgCgEgBgAAXAUIAGgEIAOAQIgIADIgMgPgAgqgMIAEgIIARAJIgFAIQgGgEgKgFgAgmgjIAFgGIALAHIAFADIgGAGQgHgGgIgEg");
	this.shape_3.setTransform(137.5,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AACAeIAFgHQAOAFAQAJIgGAHQgPgJgOgFgAgnAjQAmABgBgZIAJABIgBABIgCACQAAAYgmAEQgCgEgDgEgAgaAbIAAgBIABgMIgBgKIAAgEIARAAIAYAAIAOAAIgBAOIABALIAAABIgKAAQABgCAAgJIAAgJIglAAIAAAIQAAANABAAgAgkADIgFgHQANgGALgIIACAHIgUANIgBABIAAAAgAALgUQgDANgPAHQgDgDgFgDQASgCAFgSIgKAAIgGAIQgBgBgHgCQAJgJAHgOIAHAEIgBABQgDADgCAEIAYAAIAOgBIgEAPIgIgBIADgHIgPAAQADAQAYAEIgCACIgEAGQgUgGgFgQgAglghIAFgGIAPALIgGAGQgGgFgIgGg");
	this.shape_4.setTransform(127.8,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgcAiIAAhDIAcAAQAbABACAgQgCAigbAAgAgSAaIASAAQASAAABgaQgBgZgTgBIgRAAg");
	this.shape_5.setTransform(119.7,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgMAgQgKgEAAgPIAIAAQABAPANAAQANgBABgMQAAgNgOAAIgEAAIAAgGIAEAAQALAAABgLQgBgKgLAAQgMAAgBAOIgIAAQAAgWAVAAQATABABAQQAAALgIAEIAAAAQALACAAAMQgBAVgWAAQgIAAgEgCg");
	this.shape_6.setTransform(113.5,16.2);

	this.bar = new lib.LoadingMC();
	this.bar.parent = this;
	this.bar.setTransform(177.1,16.2,0.278,0.2,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.loadingViewAssets3d, new cjs.Rectangle(109.2,9.3,68.9,14), null);


(lib.loadingViewAssets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(27,35,50,0.537)").ss(1,1,1).p("AFQpRQgGgEgHgDQg2geg8gTQhjgfhuAAQgCAAgCAAQgBAAgCAAQgCAAgBAAQgCAAgBAAIgHAAQAAAAgBAAQgCAAgCAAIgbACQhSAFhKAYQg8ATg2AeQgHADgGAEQgnAWgkAcQgCACgCACQgUAQgUARQgFAFgGAGIAAAAQgIAHgHAIQgEADgDAEQgRARgPARQgWAagTAbQgdAogVAsQAAAAgBAAQgGAMgFALQgGAOgGAOQgVA3gMA7QgMBCAABHQAABIAMBCQAPBKAeBEQAIAQAHAPQAVAnAaAlQAJANAJAMQAPAUASATQAKAMAMAMQADADAEAEQAVAVAWATQALAJAMAJQAZAVAbARQATAMAVAMQASAJARAJQBtAzB+AJQADAAAEAAQAWABAXAAQAAAAABAAQAQAAAQAAQACgBADAAQBYgEBRgZQApgNAngSQASgJASgJQAUgMAUgMQAbgRAZgVQAMgJALgJQAWgTAVgVQAEgEADgDQAegfAZggQAJgMAJgNQAaglAVgnQAHgPAIgQQAehEAPhKQAMhCAAhIQAAhHgMhCQgMg7gVg3QgGgOgGgOQgFgLgHgMQgVgrgdgpQgTgbgWgaQgPgRgRgRQgDgEgEgDQgHgIgIgHQAAAAgBAAQgYgYgagUQgCgCgCgCQgkgcgngWgAERoNQAYANAXAPQABABACABQAwAgAsAsQABABACABQAHAHAHAIQAMAMALANQAFAHAFAGIABABQALAOAKAOAHAlLQgIgKgIgJQgGgHgFgGQgDgDgDgDQgKgMgLgLQgigiglgbQgCgBgBgBQgNgJgNgJIjLHIIgtAAIhbAAIgtAAIjLnIQgNAJgNAJQgBABgCABQglAbgiAiQgLALgKAMQgJAJgIAKQgEAFgEAFQgEAFgEAEIgngEQAKgPALgOQAGgGAFgHQALgNAMgMQAHgIAHgHQACgBABgBQAsgsAwggQACgBABgBQAXgPAYgNAD2H2IgUAvQARgHAQgIQAggQAggVQAwggAsgsQABgBACgCQAHgHAHgHQAMgNALgMQASgWAPgWQAIgMAIgMQAFgHAFgIQAdgyASg2QAehaAAhmQAAhlgehZQgCgHgDgGIgVAvQAVBKAABSQAAB3gqBlQgMAagOAZQgFAKgGAJQgLARgLAQQgLAPgMAOQgIAKgJAJQgKAMgLALQgiAiglAbQggAXggARQgGADgHAEgAHAlLIAngEAiXoYQAJgCALgDQAmgJApgDQAIgBAHAAQARgBAQgBQACAAACAAQBFAAA/APQAKADAKACIiYFXIiXlXIgOggQAQgFASgDQAmgJApgDQAYgCAYAAQACAAACAAQBFAAA/AOQASADAQAFIgOAgAgwANIBhAAICRFBIElqdAHAlLIj/I1IhijdIguAAAgwANIguAAIhiDdIj/o1ACaIZQgKADgMADQguAKgwADQgDAAgCAAQgRABgQAAIAAAAQgXAAgWgBQgEgBgDAAQgpgDgmgJQgMgDgLgDIgOAgQATAFASAEQAmAIApAEQAHAAAGABQAUABATAAQAAAAAAAAQASAAAQgBQABAAADAAQAwgDAugKQASgEATgFgAiaIZICalbICaFbAj1H2QgHgEgGgDQghgRgfgXQglgbgigiQgLgLgKgMQgJgJgIgKQgMgOgLgPQgLgQgLgRQgGgJgFgKQgBgCgBgBQgNgYgLgYQgqhjgBh1QAAgCAAgCQAAhSAWhKIEhKSIAUAvQgRgHgQgIQgggQgggVQgwgggsgsQgBgBgCgCQgHgHgHgHQgMgNgLgMQgSgWgPgWQgIgMgIgMQgEgFgCgFQgCgCgCgDQgdgygSg2QgdhYgBhkQAAgCAAgCQAAhlAehZQACgHADgGIAVAvAnmlPIElKdICRlBAIXicIkhKS");
	this.shape.setTransform(697,287.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A19FA4","#F8F8F6"],[0.086,0.557],4.2,1.8,-7.9,-5.2).s().p("AhGA9IBhjcIAtAAIiPE/g");
	this.shape_1.setTransform(684.9,305);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8B8788","#A19FA4","#F8F8F6"],[0.02,0.212,0.702],0.2,0.6,12.3,-6.4).s().p("AhHifIAtAAIBhDcIABBjg");
	this.shape_2.setTransform(709.1,305);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A19FA4","#F8F8F6"],[0.086,0.557],-10.1,5,8.9,-10.5).s().p("AiSlOIAnAFID+I1IgBBjg");
	this.shape_3.setTransform(663,287.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B2B0").s().p("ABOD+IjJnHIAVg0IDiH7g");
	this.shape_4.setTransform(680,260.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A09FA4").s().p("Ah7D+IDin7IAVA0IjJHHg");
	this.shape_5.setTransform(714,260.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6F6F6").s().p("AiSDsID+o1IAngFIkkKdg");
	this.shape_6.setTransform(731,287.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#524E4F","#E7E5E6"],[0.106,1],-21.2,-55.2,51.3,31.8).s().p("AAAJQIgngBIgNgBQgogEgngIIglgKIAPgfIAWAFQAnAKAoADIAHABQAWABAXAAIAAAAIAhgBIAEAAQAygDAtgLIAWgFIAPAfIglAKQgtAKgyADIgDAAIgiABIAAAAgAD2H2IANgHQAggSAggWQAkgbAjgiIAVgXIARgTIAWgdQANgQAKgSIALgSQAOgZALgaQArhlABh3QAAhSgWhKIAWgwIAEAOQAeBZAABlQAABmgeBZQgSA3geAyIgJAPIgQAYQgQAWgSAVIgWAZIgOAPIgDADQgrArgxAgQggAWggAQQgRAIgQAGgAkCIWQgggQgggWQgxgggrgrIgDgDIgOgPIgXgZQgSgVgPgWIgQgYIgHgKIgCgFQgegygSg3QgdhYgBhjIAAgEQAAhlAehZIAEgOIAVAwQgVBKAABSIAAAEQABB1ArBjQAKAYANAYIACADIALASQALASALAQIAXAdIARATIAVAXQAjAiAkAbQAfAWAhASIANAHIAUAuQgRgGgQgIgAGwlfIgLgMIgGgHIgVgXQgjghgkgbIgDgDIgagSIgVgzQAYANAXAPIADACQAxAgArArIADADIAOAOIAWAZIAMAOIAAABIAVAcIgnAEIgQgUgAnmlPIAVgdIALgOIAXgZIAOgOIADgDQArgrAxggIADgCQAXgPAYgNIgVAzIgaASIgDADQgkAbgjAhIgVAXIgRATIgIALIgIAJgACEodQg/gPhFAAIgEAAIggABIgQACQgoADgnAJIgUAFIgPggQARgFASgEQAngIAogDQAYgCAYgBIAEAAQBEAABAAOQARAEARAFIgOAgIgUgFg");
	this.shape_7.setTransform(697,287.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D2D0D1","#A7A6AA","#959499","#A4A4A8","#DCDCDC","#F8F8F6"],[0.086,0.169,0.227,0.278,0.373,0.557],0,68.1,0,-68.1).s().p("AAAKpIgtgBIgHAAQh+gJhtgzIgjgSIgogYQgbgRgZgVIgXgSQgWgTgVgVIgHgHIgXgYQgQgTgPgUIgTgZQgaglgVgnIgOgfQgfhEgOhKQgOhCAAhIQAAhHAOhCQALg7AVg3IANgcIAKgXIAAAAQAWgsAdgoQATgbAWgaQAPgRARgRIAHgHIAPgPIAAAAIALgLQATgRAVgQIAEgEQAkgcAngWIANgHQA3geA7gTQBKgYBSgFIAbgCIAEAAIABAAIAHAAIADAAIADAAIADAAIAEAAQBvAABiAfQA7ATA3AeIANAHQAmAWAlAcIAEAEQAaAUAZAYIAAAAIAPAPIAHAHIAgAiQAWAaATAbQAdApAWArIAKAXIAMAcQAWA3ALA7QAOBCAABHQAABIgOBCQgOBKgfBEIgPAfQgUAngaAlIgTAZQgZAggdAfIgHAHQgVAVgWATIgXASQgZAVgbARIgoAYIgkASQgnASgpANQhRAZhZAEIgEABIggAAIgBAAgAiZIZIgPAgIAlAJQAnAIAoAEIANABIAnABIAAAAIAigBIADAAQAygDAtgKIAlgJIgPggIialbgAIXicIkhKSIgUAvQAQgHARgIQAggQAggVQAxggArgsIADgDIAOgOIAWgZQASgWAQgWIAQgYIAJgPQAegyASg2QAehaAAhmQAAhlgehZIgEgNgAowi+QgeBZAABlIAAAEQABBkAdBYQASA2AeAyIACAFIAHAKIAQAYQAPAWASAWIAXAZIAOAOIADADQArAsAxAgQAgAVAgAQQAQAIARAHIgUgvIkiqSIgVgvIgEANgAAxANICQFBIEmqdIgVgcIAAgBIgMgNIgWgZIgOgPIgDgCQgrgsgxggIgDgCQgXgPgYgNIjjH8IhbAAIjjn8QgYANgXAPIgDACQgxAggrAsIgDACIgOAPIgXAZIgLANIgVAdIElKdICRlBgAg0pMQgoADgnAJQgSADgRAFIAPAgICXFXICYlXIAOggQgRgFgRgDQhAgOhEAAIgEAAQgYAAgYACg");
	this.shape_8.setTransform(697,287.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,26,60,0.518)").s().p("AAAKcIgtgCIgGAAQh7gJhqgxIgjgSQgVgLgSgNQgbgQgZgVIgWgSQgWgTgUgUIgHgHIgWgYQgRgSgPgTIgSgYIAAgBQgagkgUgmIgOgfQgehCgOhJQgNhBAAhGQAAhFANhCQALg5AVg2IAMgbIALgXIAAAAQAVgqAcgpQATgaAWgZIAfgiIAHgHIAOgOIAAgBIAMgKQASgRAUgPIAEgEQAkgbAmgWIANgHQA1geA6gSQBJgXBQgGIAagBIAFgBIABAAIAHAAIACAAIADAAIAEAAIADAAQBtABBgAeQA6ASA1AeIAOAHQAlAWAkAbIAEAEQAaAUAYAWIAAABIAPAOIAGAHIAgAiQAVAZATAaQAcAoAWArIAKAXIALAbQAWA2ALA5QANBCAABFQAABGgNBBQgOBJgeBCIgPAfQgTAmgaAkIAAABIgTAYQgYAfgdAeIgGAHQgVAUgWATIgWASQgZAVgaAQQgTANgVALIgjASQglARgpANQhPAZhYAEIgDAAIggABIgBAAgAiWIOIAWAFQAmAKAnADIAGABQAXABAWAAIAAAAIAggBIAEAAQAwgDAugLIAWgFIiYlUgADyHrIALgGQAhgRAegWQAlgbAgghIAWgWIAQgTIAXgcIAVghIALgSQAOgZALgaQArhiAAh1QAAhQgVhJgAjxHrIkbqEQgUBJAABQIAAAEQAAByAqBhQAKAYANAXIACAEIAKASIAXAhIAVAcIARATIAVAWQAhAhAlAbQAeAWAhARIALAGgABcANIBgDZID7orIgQgSIgLgNIgFgGIgWgWQgggiglgaIgCgCQgNgJgNgIIjGG+IizAAIjGm+QgNAIgNAJIgCACQglAaghAiIgVAWIgRATIgIAKIgHAIID6IrIBhjZgAgkofIgPAAQgnAEgmAJIgUAFICUFQICVlQIgTgFQg+gOhEAAIgDAAIghABg");
	this.shape_9.setTransform(700.4,288.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(27,35,50,0.537)").ss(1,1,1,3,true).p("AgCAAQACAAADAA");
	this.shape_10.setTransform(698,220.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(34,39,60,0.718)").ss(1,1,1,3,true).p("AKKAAQAAENi/C+QiDCEipApQhMAShTAAQjgAAiqiEQgigbgfggQi/i+AAkNQAAkECyi5QAGgHAHgHQAzgzA5gmQCbhlDEAAQENAAC+C+QBdBcAwBwQAjBSALBdQAEAoAAAogAMrAAQAAFQjuDuQihCgjOA0QhiAZhsAAQkmAAjai2QgfgagegdQjtjuAAlQQAAkxDFjgQATgXAVgVQA4g3A9grQDHiLEBAAQFQAADtDtQBuBuA7CDQAwBrAPB4QAGA0AAA1gANMAAQAAFdj3D4QirCrjcA1QhiAXhsAAQkkAAjcisQgsgigogpQj4j4AAldQAAlRDnjyQAIgJAJgJQBChCBKgxQDJiDD/AAQFeAAD3D2QB4B4A+CRQAuBrANB4QAGA0AAA1g");
	this.shape_11.setTransform(699.2,288.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#F6F6F8","#A6A4A9"],[0.141,1],-68.7,-46.3,0,-68.7,-46.3,168).s().p("AoAKgQgsgigogpQj3j3AAleQAAlRDmjyIARgRQBDhDBJgxQDJiED/AAQFeABD3D3QB4B4A+CQQAuBrANB5QAGAzABA1QAAFej4D3QirCrjbA0QhjAYhsAAQkjAAjdisgAnIqfQg9Aqg4A5QgVAVgTAVQjFDhAAExQAAFQDtDtQAeAeAfAaQDbC2ElAAQBsAABjgZQDOg0ChihQDtjtAAlQQAAg1gGgzQgOh5gxhrQg6iDhuhtQjujulQAAQkAAAjICLg");
	this.shape_12.setTransform(699.2,288.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#76A6D4","#4885BC","#004C88","#01265B"],[0.118,0.286,0.533,0.898],-50.1,-53.8,0,-50.1,-53.8,155.3).s().p("AmKIGQghgbgggfQi+i/AAkNQAAkDCxi6IANgOQA0gzA5glQCahmDEAAQEOAAC+C+QBcBdAwBvQAjBSALBdQAEAoAAAoQAAENi+C/QiDCDiqApQhLAShUAAQjgAAiqiEg");
	this.shape_13.setTransform(699.1,288.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#76A6D4","#34669B","#002F63","#00275E"],[0.141,0.365,0.592,1],-50.2,-53.9,0,-50.2,-53.9,155.3).s().p("AoAJ1QgfgagegeQjtjtAAlQQAAkxDFjhQATgVAVgVQA4g5A9gqQDIiLEAAAQFQAADuDuQBuBtA6CDQAxBrAOB5QAGAzAAA1QAAFQjtDtQihChjOA0QhjAZhsAAQklAAjbi2gAleokQg5Amg0AzIgNAOQixC5AAEEQAAENC+C+QAgAgAhAbQCqCEDgAAQBUAABLgSQCqgpCDiEQC+i+AAkNQAAgogEgoQgLhdgjhSQgwhvhchdQi/i+kNgBQjEABiaBlgAgHqqIgHAAIAHAAg");
	this.shape_14.setTransform(699.2,288.7);

	// this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#404040").s().p("AAXBRIg+iFIgBAAIAACFIggAAIAAihIA0AAIA7B/IACgBIAAh+IAgAAIAAChg");
	this.shape_15.setTransform(801.5,456.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#404040").s().p("Ag2BRIAAihIBrAAIAAAcIhJAAIAAAlIBEAAIAAAaIhEAAIAAArIBMAAIAAAbg");
	this.shape_16.setTransform(785.9,456.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#404040").s().p("AhLACQAChPBKgGQBMAAgBA1IglAAQAAgbggAAQgsABgBA6QABA6AsAAQANAAARgDQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAgjIgfAAIAAgaIBBAAIAABRQgRAFgTAAQgOABgWABQhKgEgChOg");
	this.shape_17.setTransform(770.1,456);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#404040").s().p("AArBRIgMgiIg/AAIgMAiIghAAIA6ihIApAAIA4ChgAgXAUIAtAAIgVhFIgBAAg");
	this.shape_18.setTransform(753.6,456.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#404040").s().p("AAdBRIgch7IgeB7IgoAAIgnihIAkAAIAYB5IAfh5IAnAAIAcB5IABAAIAah5IAgAAIgpChg");
	this.shape_19.setTransform(734.4,456.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#404040").s().p("AhBAeIAjAAQAAAdAbABQAfAAABgVQAAgQgegHIgGgCQg2gMABgfQACgyBAgEQA1AEACAvIghAAQgBgZgZAAQgZACAAATQgBAQAZAGIAEABIAFAAQA4AMAAAgQgCAzhDACQg+AAAAg2g");
	this.shape_20.setTransform(715.6,456);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#404040").s().p("AAYBRIg3hRIAABRIgjAAIAAihIAjAAIAABGIA1hGIAoAAIg7BJIBABYg");
	this.shape_21.setTransform(701.6,456.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#404040").s().p("AgzBRIAAihIAiAAIAACGIBFAAIAAAbg");
	this.shape_22.setTransform(687.7,456.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#404040").s().p("AhNACQADhTBKgCQBLACADBTQgDBQhLACQhLgCgChQgAgoACQAAA6AoAAQAoAAAAg6QAAg7goAAQgoAAAAA7g");
	this.shape_23.setTransform(672.3,456);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#404040").s().p("AgSBRIg7ihIAlAAIApB/IABAAIAqh/IAiAAIg7Chg");
	this.shape_24.setTransform(655.5,456.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#404040").s().p("AhDACQADhRBAgEQBAABAEA4IglAAQgCgegdgBQgcACgCA5QACA5AcABQAeAAABgeIAlAAQgDA1hBABQhBgCgChQg");
	this.shape_25.setTransform(633.9,456);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#404040").s().p("AgRBRIAAihIAiAAIAAChg");
	this.shape_26.setTransform(623.3,456.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#404040").s().p("AArBRIgMgiIg/AAIgMAiIghAAIA6ihIApAAIA4ChgAgXAUIAtAAIgVhFIgBAAg");
	this.shape_27.setTransform(612.1,456.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#404040").s().p("AhBAeIAjAAQABAdAbABQAeAAABgVQAAgQgegHIgGgCQg2gMAAgfQAEgyA/gEQA0AEADAvIghAAQgBgZgaAAQgXACgBATQAAAQAYAGIAEABIAEAAQA6AMgBAgQgCAzhCACQhAAAABg2g");
	this.shape_28.setTransform(596.5,456);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#404040").s().p("AhQDFQB6hBgKiRIAAgfIBBAAQhDgkglhBQgvA/g7AmQAlAAAKACQAIAAAAAIQAAANgEAVIgCAWQAqAnAgArQgPAIglAgQgSgggWgXQgdBQhNBFQgSgXglgUQBBgnAYg7QAXg0AEhTQglAZgkAMQgRgbgYgcQBNgWAvgrQAvgnAchRIAfAGQAZAEAQAEQAEAEgCAFIgIAMQAlA/AwAcQAtAbBNAIQgeAggMArQgxgQgjgVIAAAuQAEBqCHA/QgbAUgQAtQhPgzgrhHQgjBJhIA1QgagdgagQg");
	this.shape_29.setTransform(790,417.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#404040").s().p("AjvCzQC4hFAKiaIi1AAIAAg9IC7AAIAAiEIAuAAQAoAAgEAEIAAAKQgDAPAAASIAABVIC1AAIAAA9Ii0AAQATCeC0AwQgmAjgOAnQiLg5guh2QgqBsiUBFQgSghgigag");
	this.shape_30.setTransform(730.3,417.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#404040").s().p("ABcC6QgWgdAChFIAAguIiTAAIAAg2IDcAAQgMBKAAAoIAAANQACAqAeACQAIAAADgmIAAgKQAjAOAeAAQgFBngsAJQg/gDglgwgAikDeIhCggQABgCAEgCQAkhBAehyQAVAQAiATQgQAsgiByIgHAUQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgCgBgAjwhBIAlg5QA7AlAaAYIgpA1QgggdgxgcgAhsgrQA1hJARh4QAWAAA1AMIACAFQgLASgHASIDCAAIAAA3IjWAAQgBAIgIAOIgEAMIC5AAIAAAzIjQAAQgFAMgGAHQgXgLgngIgAjPi5IAwgzQA2AtAYAeIgxAvQgqgxgjgWg");
	this.shape_31.setTransform(671.5,417.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#404040").s().p("AjlDaIAAg3ICyAAIAAl8IAlAAQAmgBABAHQAAAEgBAGQgEAOgBAUIAABPIClAAIAAA+IilAAIAAC9IDUAAIAAA3g");
	this.shape_32.setTransform(612.3,416.6);

	this.bar = new lib.LoadingMC();
	this.bar.parent = this;
	this.bar.setTransform(586.4,473.5,0.8,0.8);

	// this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.loadingViewAssets, new cjs.Rectangle(584.4,203.3,240.2,277.4), null);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(792.2,393.3,715.3,471.4);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;