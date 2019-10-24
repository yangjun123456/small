/**
 * Created by Administrator on 2017/5/8.
 */
var carbrand,//品牌
    carmodel,//型号
    cardisplace,//排量
    caryear,//年份
    cararea;//查询地区
/*
* http://chechebaby.iask.in/ccby/userCar/brand/queryVehicleBrand 汽车全部品牌
 http://chechebaby.iask.in/ccby/userCar/brand/findOneBrandByCarBrand?brand=奥迪  根据品牌查车辆型号
 http://chechebaby.iask.in/ccby/userCar/brand/findPaiLiangByProductID?productID=VE-ALFA07AA根据车型查车辆排量
 http://chechebaby.iask.in/ccby/userCar/brand/findNianByPaiLiang?productID=E-BMW-5&paiLiang=2.根据排量和型号查询年份
 */
var sheng;
function funcbrand(ctx){//品牌
	if(typeof(ctx) == 'undefined'){
		ctx = '../';
	}
    var html = '<div class="position_city carcity">'
                    +'<div class="header">'
                        +'<img src="/images/xiangzuojiantou.png">'
                        +'<span>车型选择</span>'
                    +'</div>'
                    +'<div class="position_search">'
                    	+'<p id="zimu"></p>'
                        +'<div class="search_city">'
                            +'<img src="/images/month-5-12-1.png">'
                            +'<input type="text" placeholder="请输入您的车型" name="car" id="car">'
                        +'</div>'
                    +'</div>'
                    +'<div class="carover">'
                        +'<h2>热门车型</h2>'
                        +'<ul class="hotcarlist clf" id="aa"></ul>'
                        +'<div id="wrapper">'
                            +'<div class="a" id="a1"><h2>A </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a2"><h2>B </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a3"><h2>C </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a4"><h2>D </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a5"><h2>E </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a6"><h2>F </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a7"><h2>G </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a8"><h2>H </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a9"><h2>I </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a10"><h2>J </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a11"><h2>K </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a12"><h2>L </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a13"><h2>M </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a14"><h2>N </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a15"><h2>O </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a16"><h2>P </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a17"><h2>Q </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a18"><h2>R </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a19"><h2>S </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a20"><h2>T </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a21"><h2>U </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a22"><h2>V </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a23"><h2>W </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a24"><h2>X </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a25"><h2>Y </h2><ul class="b"></ul></div>'
                            +'<div class="a" id="a26"><h2>Z </h2><ul class="b"></ul></div>'
                        +'</div>'
                        +'<ul class="allcity hidden"></ul>'
                    +'</div>'
                    +'<div class="search_jieguo hidden">'
	                    +'<h2 class="carser">搜索结果</h2>'
	                    +'<ul class="jieguo_city"></ul>'
                    +'</div>'
                    +'<div class="zimu">'
                        +'<a href="#aa">#</a><a href="#a1">A</a><a href="#a2">B</a><a href="#a3">C</a><a href="#a4">D</a><a href="#a5">E</a>'
                        +'<a href="#a6">F</a><a href="#a7">G</a><a href="#a8">H</a><a href="#a9">I</a><a href="#a10">J</a>'
                        +'<a href="#a11">K</a><a href="#a12">L</a><a href="#a13">M</a><a href="#a14">N</a><a href="#a15">O</a>'
                        +'<a href="#a16">P</a><a href="#a17">Q</a><a href="#a18">R</a><a href="#a19">S</a><a href="#a20">T</a>'
                        +'<a href="#a21">U</a><a href="#a22">V</a><a href="#a23">W</a><a href="#a24">X</a><a href="#a25">Y</a><a href="#a26">Z</a>'
                    +'</div>'
                +'</div>';
    $('body').append(html);
    var searcharr = []; 
    var h1 = parseInt($('.header').css('height'));
    var h2 = parseInt($('.position_search').css('height'));
    $('.carover').css({'height':$(window).height()-h1-h2,'overflow':'scroll'});
    
    
	searcharr.push(allcarlist);
	var Data = (allcarlist.data);
    for(var i = 0; i<Data.length; i++){
        var aa = Data[i].brand.split('-');
        $('<li data-id="'+Data[i].id+'"><img src="https://img1.tuhu.org'+Data[i].url+'">'+aa[1]+'</li>').appendTo($('.allcity'));
        for(var j = 0; j < $('#wrapper .a').length;j++){
        	if(aa[0] == $('#wrapper .a').eq(j).find('h2').text()){
        		var html1 = $('<li data-id="'+Data[i].id+'"><img src="https://img1.tuhu.org'+Data[i].url+'">'+aa[1]+'</li>');
        		html1.appendTo($('#wrapper .b').eq(j));
        	}
        }
        
    }
    //热门品牌
    var hotarr = [' 大众',' 福特',' 本田',' 丰田',' 别克',' 奥迪',' 现代',' 雪佛兰',' 奔驰',' 宝马'];
    $('.hotcarlist').empty();
    for(var m = 0; m < $('.allcity li').length; m++){
    	for(var n = 0; n < hotarr.length; n++){
    		if($('.allcity li').eq(m).text() === hotarr[n]){
    			var $id = $('.allcity li').eq(m).attr('data-id');
    			var hurl = $('.allcity li').eq(m).find('img').attr('src');
    			$('<li data-id="'+$id+'"><div><img src="'+hurl+'"></div>'+hotarr[n]+'</li>').appendTo($('.hotcarlist'));
    		}
    	}
    }
    /*搜索品牌*/
    $('.position_search #car').on('keyup',function(ev){
    	var ev = ev.which;
    	
    	var city = $(this).val();
        if(city == ""){
            $('.search_jieguo').addClass('hidden');
            $('.carover').show();
            $('.jieguo_city').empty();
        }else{
        	$('.search_jieguo').removeClass('hidden');
        	if(ev != 0 && ev != 8){
        		// onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 
        		//onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"
        		
    			var search = searcharr[0].data;
	            for(var i = 0; i < search.length;i++){
	            	var xiaox = (search[i].firstLetter).toLowerCase(); 
	            	if(xiaox.indexOf(city) >= 0){
	            		var aa = search[i].brand.split('-');
	            		$('<li><img src="https://img1.tuhu.org'+search[i].url+'">'+aa[1]+'</li>').appendTo($('.jieguo_city'));
	            	}
	            }
        		
        	}else if(ev == 0){
        		$('#zimu').text('汉字');
        		if(/^[\u4e00-\u9fa5]+$/gi.test(city)){
	        		var search = searcharr[0].data;
		            for(var i = 0; i < search.length;i++){
		            	if((search[i].brand).indexOf(city) >= 0){
		            		var aa = search[i].brand.split('-');
		            		$('<li><img src="https://img1.tuhu.org'+search[i].url+'">'+aa[1]+'</li>').appendTo($('.jieguo_city'));
		            	}
		            }
		        }else{
        			$('.position_search #car').val("");
        		}    
        	}
        	$('.carover').hide();
        }
    });
    $('.hotcarlist').on('click','li',function(){
    	var $indexId = $(this).attr('data-id');
    	pptoxh(this,ctx,$indexId);
    });
    $('.jieguo_city').on('click','li',function(){//搜索得到
    	var $indexId = $(this).attr('data-id');
    	pptoxh(this,ctx,$indexId);
    });
    $('#wrapper').on('click',' li',function(){//获取型号
    	var $indexId = $(this).attr('data-id');
    	pptoxh(this,ctx,$indexId);
    	try{
	    	if(window.injs.isshowtitle() == "0"){
	    		$(".carxing .header").addClass("hidden");
	    	}
    	}catch(err){
    		
    	}
    	
    	
    });
	//关闭品牌
	$('body').on('click','.carcity .header img',function(){
    	$('.carcity').remove();
    });
    //根据页面要求，选择合适的函数
    //$('.carmodellist li').on('touchend',function(){
    //    var carxh = $(this).attr('data-id');

    //    displacement();//获取排量

    //    return false;
    //});
}
var $url ;
//点击品牌获取型号
var $url ;
function pptoxh(obj,ctx,obj2){
	 $url = $(obj).find('img').attr('src');
	var $text = $(obj).text();
	var $html = '<div class="bg carxing">'
					+'<div class="header">'
				        +'<img src="'+ctx+'/images/xiangzuojiantou.png">'
				        +'<span>车型选择</span>'
				    +'</div>'
				    +'<div class="carxingbox">'
				    	+'<div class="carpai" ><div><img src="'+$url+'"></div><span>'+$text+'</span></div>'
				    	+'<div class="xinglilst"></div>'
				    +'</div>'
				    +'<div class="carxingyy"></div>'
				+'</div>';
	$('body').append($html);			
    carbrand = $(obj).text();
    var cararr = [],arrlist=[];
    
    var Data = (allcarlist.data);
    var onebrandarr = [];
    for(var i = 0; i < Data.length; i++){
    	if(Data[i].id == obj2){
    		onebrandarr.push(Data[i].oneBrand);
    		for(var j = 0; j < (Data[i].oneBrand).length; j++){
    			cararr.push((Data[i].oneBrand)[j].brandType);
    		}
    	}
    }
    for(var i=0;i<cararr.length;i++) {
	   var items=cararr[i];
	   //判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
	   if($.inArray(items,arrlist)==-1) {
		   arrlist.push(items);
	   }
	}
    for(var i = 0; i < arrlist.length;i++){
		var htmlul = $('<h2>'+arrlist[i]+'</h2><ul class="carmodellist"></ul>');
		$('.xinglilst').append(htmlul);
		$('.xinglilst').css({'overflow':'scroll','height':$(window).height()-parseInt($('.carxing .header').css('height'))-parseInt($('.carxing .carpai').css('height'))});
	}
    for(var i = 0; i < onebrandarr[0].length;i++){
		for(var j = 0; j < arrlist.length;j++){
			if((onebrandarr[0])[i].brandType == arrlist[j]){
			var htmlli = $('<li data-span="'+(onebrandarr[0])[i].id+'" data-id="'+(onebrandarr[0])[i].productID+'">'+(onebrandarr[0])[i].carName+'</li>')
				$('.carmodellist').eq(j).append(htmlli);
			}
		}
	}
	//关闭型号
	$('body').on('click','.carxing .header img,.carxing .carxingyy',function(){
		$('.carxing').remove();
	});
}
var areaindex1,areaindex2;
function funcararea(){//--------------------地区
    var html = '<div class="chose_city rulescity" style="z-index:100000;">'
                    +'<header>'
                        +'<a href="###><img src="'+ctx+'/images/xiangzuojiantou.png"></a>'
                        +'<h2>地区选择</h2>'
                    +'</header>'
                    +'<div style="width: 100%; height: 0.8rem;"></div>'
                        +'<div class="city_true">'
                        +'<ul class="chose_true">'
                        	+'<li data-key=""></li><li data-code=""></li>'
                        +'</ul>'
                        +'<button>确定</button>'
                    +'</div>'
                    +'<ul class="chose_city_list province"></ul>'
                    +'<ul class="chose_city_list province_city hidden"></ul>'
                +'</div>';
    $('body').append(html);
    

    var h = parseInt($('header').css('height'));
    var h2 = parseInt($('.chose_true li').css('height'));
    $('.province').css('height',$(window).height()-h);
    $('.province_city').css('height',$(window).height()-h-h2);
	
	
    $('.city_true li:first-child').html('<span></span>'+diwei[0]);
	$('.city_true li:last-child').html('<span></span>'+diwei[1]);
//	if(liclick == 1){
//		$('.city_true li:first-child').html('<span></span>'+diwei[0]);
//		$('.city_true li:last-child').html('<span></span>'+diwei[1]);
//		$('.province_city').removeClass('hidden');
//	}
    $.each(sheng,function(index,key){
    	if(key.province == diwei[0]){
    		$('.city_true li:first-child').attr('data-key',index);
    		for(var i = 0; i < key.citys.length; i++){
    			if((key.citys)[i].city_name == diwei[1]){
    				$('.city_true li:last-child').attr('data-code',(key.citys)[i].city_code);
                	continue;	
                }else{
                	var $li = $('<li data-code="'+(key.citys)[i].city_code+'">'+(key.citys)[i].city_name+'</li>');
                }
                $('.province_city').append($li);
                $('.province_city').removeClass('hidden');
                $('.province').addClass('hidden');
            }
    	}
    	var $pli = $('<li data-key="'+index+'">'+key.province+'</li>');
    	$('.province').append($pli);
    });
}
function oneareafun(){
	$.each(sheng,function(index,key){
    	if(key.province == diwei[0]){
    		$('.city_true li:first-child').attr('data-key',index);
    		for(var i = 0; i < key.citys.length; i++){
    			if((key.citys)[i].city_name == diwei[1]){
    				$('.city_true li:last-child').attr('data-code',(key.citys)[i].city_code);
    				$('.rule_info_zero li:last-child input:last-child').val((key.citys)[i].city_code);
                }
            }
    	}
    });
}
function displacement(obj1,obj2,ctx){//-----------------------排量
    carmodel = obj1;
    carname = obj2;
    var $html = '<div class="carpail">'
                    +'<header class="head">'
                        +'<a href="###"><img src="'+ctx+'/images/xiangzuojiantou.png"></a>'
                        +'<h2>选择排量</h2>'
                    +'</header>'
                    +'<div class="buchong" style="height:0.8rem;"></div>'
                    +'<div class="carpp">'+carbrand+' '+carname+'</div>'
                    +'<ul class="cardislist"></ul>'
                +'</div>';
    $('body').append($html);
    $('.cardislist').css('height',$(window).height()-parseInt($('header').css('height'))-parseInt($('.carpp').css('height')));
	//关闭排量
	$('body').on('click','.carpail header a',function(){
		$('.carpail').remove();
	});
}
function pailiangajax(ctx){
	$.ajax({
        url:ctx+'/userCar/brand/findPaiLiangByProductID?productID='+carmodel,
        type:'get',
        dataType:'json',
        success: function(data){
        	if((data.data.result).length != 0){
				$('.infocar li.plli').show();
            	$('.infocar li.nfli').show();
        		displacement(carmodel,carname,ctx);//获取排量
	            $('.carmodellist').remove();
	            var list = $('<ul class="cardislist"></ul>');
	            list.appendTo($('.position_city'));
	            for(var i = 0; i<(data.data.result).length; i++){
	                var li = $('<li data-span="'+(data.data.result)[i].vehicleID+'" data-id="'+(data.data.result)[i].id+'" >'+(data.data.result)[i].paiLiang+'</li>');
	                li.appendTo($('.cardislist'));
	            }
            }else{
            	$('.infocar li.plli').hide();
            	$('.infocar li.nfli').hide();
            	$('.infocar p').remove();
            }
        }
    });
}
function funtimelist(ctx){//*------------------年份*/
	var $html1 = '<div class="carpail carnian">'
                    +'<header class="head">'
                        +'<a href="javascript:history.go(-1)"><img src="'+ctx+'/images/xiangzuojiantou.png"></a>'
                        +'<h2>选择排量</h2>'
                    +'</header>'
                    +'<div class="buchong" style="height:0.8rem;"></div>'
                    +'<div class="carpp">'+carbrand+' '+carname+' - '+cardisplace+'</div>'
                    +'<ul class="cartimelist"></ul>'
                +'</div>';
    $('body').append($html1);
    $.ajax({
        url:ctx+'/userCar/brand/findNianByPaiLiang?productID='+carmodel+'&paiLiang='+cardisplace,
        type:'get',
        dataType:'json',
        success: function(data){
            for(var i = 0; i<(data.data.result).length; i++){
                var li = $('<li data-id="'+(data.data.result)[i].id+'">'+(data.data.result)[i].nian+'</li>');
                li.appendTo($('.cartimelist'));
            }
        }
    });
}
//本地存储
function saveloca(obj1,obj2,obj3){//保存
	var obj1 = localStorage.getItem(obj2);
    localStorage.setItem(obj2, obj3);
}
function getloca(obj){//获取
	localStorage.getItem(obj);
}
function removeloca(obj){//删除
	localStorage.clear(obj);
}


    