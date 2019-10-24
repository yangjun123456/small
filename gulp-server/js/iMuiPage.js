/*--------------------------------------------------------------------*
    * iMuiPage v2016-7-7
    * 只加载页面中body标签内的部分,等同$(document.body).html()
    * window._iMuiAct 当前显示页的 iMuiPage 对象
    * window._iMuiMshDv 加载等待的dom jq对象
    * window._iMuiPageObj[] 所有iMuiPage 对象数组
    * window._impEvent 当前加载页dom的jq对象,  dom创建时刷新
    * 加载页事件定义 
    * init事件 dom创建完成后触发
    * show事件 显示完成后触发
    * hide事件 隐藏完成后触发
    * body尾部加上下面的js
    * _impEvent.on('init[show|hide]',function(event,imp){this...});
    * 参数: event window的event对象,imp iMuiPage对象, this 加载页dom对象 
    *---------------------------------------------------------------------*/
var iMuiPage=function(opts, pel){
    var qp=$(pel);
    var pi=qp[0]?qp[0]:null; //页对象 不存在则创建
    //pel 初始页dom对象或jq筛选条件
    //opts 参数
    var df = {
        url:null, //页面地址
        data:null, //页面提交数据{....}
        id: null,  //页面id  默认页对象id 若无则为页面url
        save:1,   //是否缓存,不缓存隐藏后即销毁dom
        setdf:0, //设为根页, 即 window._iMuiPageObj[0]
        reload:0,   //是否每次重新加载, 缓存时有效
        refresh:0,   //强制重新加载, 重载后该值恢复为0
        autoshow:1, //是否加载完成显示
        waithtml:'<div class="waiticon">'
                +'<div class="bounce1"></div><div class="bounce2"></div>'
                +'<div class="bounce3"></div></div>', //等待提示内容
        error:function(){}, //错误处理
        hide:function(){}, //隐藏前处理,可与事件并用, 在hide事件前调用
        show: function() {}, //显示前处理,可与事件并用, 在show事件前调用
        loaded: function() {} //加载前成处理,可与事件并用, 在init事件前调用
    };
    var pms = {}; opts = opts || {};
    for (var k in df)  pms[k] = opts[k]==undefined? df[k] : opts[k];
    if(!pms.url) return null;

    //获取或创建等待dom
    function gMsgdv(){
        var g=window._iMuiMshDv;
        if(!g || !g[0]){
            g=$(document.createElement('div'))
                .attr('class','loadmsgdv');
            $(document.body).append(g);
            g.hide();
        }
        window._iMuiMshDv=g.html(pms.waithtml);
        return g;
    };

    //获取当前页id, 即此新开页的返回id
    function gbackid(){
        if(pms.setdf) return pms.id;
        if(!window._iMuiAct) return '';
        return window._iMuiAct.pm.id; 
    };
    //截取body内容
    function exBody(str) {
        if (!str) return '';
        var ar = str.match(/<body.*?>([\s\S]+)<\/body>/i);
        return (ar&&ar.length > 1) ? ar[1] : '';
    };
    //根据页id获取iMuiPage原型对象
    var _gimp=function(id){
        var g=null;
        $.each(window._iMuiPageObj, function(i,o){
            if(o && o.pm.id==id){
                g=o; return;
            }
        });
        return g;
    },
    _code= function(s){return encodeURIComponent(s)},
    _uncode= function(s){return decodeURIComponent(s)};

    //iMuiPage原型即c属性方法
    var c={
        el:pi, //当前页面dom对象 pi._imp=this iMuiPage原型
        index:0, //页面索引
        backid:'', //返回页id
        pm:pms,//原始参数
        mark:null,//遮罩
        gimp:_gimp,//根据页id获取原型对象
        code :_code,//编码
        uncode : _uncode,//解码
        showwait:function(open){
            if(!pms.autoshow&&!open) return;
            this.mark= mui.createMask(function(){return false});
            this.mark.show();
            gMsgdv().show();
            return this;
        },
        hidewait:function(open){
            if(!pms.autoshow&&!open) return;
            gMsgdv().hide(); this.mark._remove();  
            return this;
        },
        hide:function(){
            var p=window._iMuiAct;
            if(p && p.pm.id==pms.id) window._iMuiAct=null;
            if($.isFunction(pms.hide)) pms.hide(this);
            qp.fadeOut(500).trigger('hide',this);
            if(!pms.save) this.die();
            return this;
        },
        show:function(){
            //本页显示前设置返回页id
            if(!this.backid) this.backid=gbackid(); 
            var act=window._iMuiAct;
            if(act && act.pm.id!=pms.id) window._iMuiAct.hide();
            if($.isFunction(pms.show)) pms.show(this);
            qp.fadeIn(500); window._iMuiAct=this;
            qp.trigger('show',this);
            return this;
        },
        back:function(){
            if(this.index==0) return this;
            var p=_gimp(this.backid) || window._iMuiPageObj[0];
            if(!p) return this;
            this.hide(); 
            if(p.pm.reload) return p.load();
            return p.show();
        },
        clear:function(){
            var r=this.back();
            this.die(); return r;
        },
        test:function(){
            if(!console){alert('iMuiPage.test ...'); return;}
        },
        //销毁dom
        die:function (){
                var p=window._iMuiPageObj[this.index];
                if(p) window._iMuiPageObj[this.index]=null;
                if(!p.el) return;
                $(p.el).remove(); p=null;
        }
    };

    //加载或重载url
    c.load=function(){
        this.showwait();
        $.ajax({url: pms.url, data: pms.data,
            cache: false, dataType: 'html', context: this, //回传this
            success:function(str,status){
                this.hidewait();
                //this.backid=gbackid(); //show中定义了 本页显示前设置
                window._impEvent=qp;
                if($.isFunction(pms.loaded)) pms.loaded(this);
                qp.off('tap'); //销毁前定义事件, 防止重复
                var htm=exBody(str),
                    wback=qp.html(htm).find('.w-back')[0];
                if(wback) wback._imp=this;
                qp.trigger('init', this);
                if(pms.autoshow) this.show();
            },
            error:function(ajx,status){
                if($.isFunction(pms.error)) pms.error(ajx,status,this);
            }
        });
        return this;
    }
    // 初始化方法
    c.init = function() {
        if(!window._iMuiPageObj){
            window._iMuiPageObj=[];
            $(window).resize(function(){
                this._wh=document.documentElement.clientHeight;
            });
        }

        if(pi) pms.id=qp.attr('id');
        pms.id=pms.id || _code(pms.url);
        var cx=_gimp(pms.id);   
        if(!pi){//无页对象创建
            if(!cx){//检查无重名对象, 创建
                pi=document.createElement('div');
                qp=$(pi).attr({id:pms.id, class:'w-page w-page1','data-id':pms.id});
                $(document.body).append(pi);
                qp.hide();
            }else{
                pi=cx.el; qp=$(pi);
            }
        }
        pi._imp=this;
        this.el=pi;
        if(cx){//已存在
            if(pms.setdf){//设置为根页
                if(cx.index!=0){
                    window._iMuiPageObj[cx.index]=null;
                    cx.index=0; this.save=1; this.backid=pms.id;
                }
            }
            this.index=cx.index;
            this.backid=cx.backid;
            window._iMuiPageObj[cx.index]=this;
            if(cx.pm.url==pms.url){
                if(pms.reload||!pms.save||pms.refresh){pms.refresh=0;return this.load()};
                return this.show();
            }
        }else{
            qp.css('height',window._wh+'px');
            if(pms.setdf){//设置为根页,并销毁原根页dom
                if(window._iMuiPageObj[0]) window._iMuiPageObj[0].die();
                this.index=0; this.save=1; this.backid=pms.id;
                window._iMuiPageObj[0]=this;
            }else  this.index=window._iMuiPageObj.push(this)-1;
        }
        if(pel && this.index==0) return this;
        return this.load();
    };
    return c.init();
}
/*初始化事件*/
function iMuiPageInit(){
    if(window._iMuiPageObj) return;
    var de=$('.w-page')[0]; if(!de) return;
    var u=document.location.pathname+document.location.search;
    window._iMuiAct=iMuiPage({save:1,setdf:1,url:u},de);
    $('.w-back').off('tap').on('tap',function(){
        if(!this._imp) return;
        this._imp.back();
    });
    //iMuiPage({url:'welcome.htm',save:0});
}
$(function(){ 
    window._wh=document.documentElement.clientHeight;
    iMuiPageInit();
});