window.wx = {
    uploadFile: function (opt) {
        var self = this,
            opt = $.extend({
                H5Button: $("#upload-file"), //上传图片按钮元素
                imgLength : 1, //图片的数量 默认1张
                imgSize : 5, //图片大小 默认3M
                autoUploadImage : true, //安卓机型在选择了照片后，是否自动获取serverID,默认为 true 获取
                chooseImageSuccess : function(src){}, //选择照片后的回调函数 src可直接赋值给img显示图片
                uploadImageSuccess : function(serverId){} //上传照片回调函数，安卓需要用到该函数
            },opt||{});
        function uploadImage(){
            (function wx_uploadImg(localIds){
                var localId = localIds.pop();
                wx.uploadImage({
                    localId:localId,
                    isShowProgressTips:1,
                    success:function(res){
                        weixin.images.serverId.push(res.serverId); //返回的是服务器端图片的id

                        //执行上传成功回调函数 每上传成功一次，执行一次
                        opt.uploadImageSuccess(res.serverId);

                        //其他对serverId做处理的代码
                        if(localIds.length > 0){
                            wx_uploadImg(localIds);
                        }
                    },
                    error:function(res){
                        $('.load_img').addClass('hidden');
                    }
                })
            })(weixin.images.localId);
        }

        //如果是安卓手机的话
        if(self.isAndroid && self.isWeixin){
            //安卓使用微信API
            opt.H5Button.find("input[type='file']").remove();
            opt.H5Button.on('touchend',function(){
                wx.chooseImage({
                    count: opt.imgLength,
                    success: function (res) {
                        /**
                         * 保存本地图片的id(由微信客户端提供) 返回的是一个数组
                         * 数组中的内容可以直接赋值到img的src属性
                         **/
                        weixin.images.localId = res.localIds;

                        //执行选择照片后的回调函数
                        if(opt.imgLength > 1){
                            //如果上传多图
                            for(var i=0; i<res.localIds.length; i++){
                                opt.chooseImageSuccess(res.localIds[i]);
                            }
                        }else{
                            opt.chooseImageSuccess(res.localIds[0]);
                        }

                        //选择成功后是否自动开始上传，获取serverID
                        opt.autoUploadImage && uploadImage();
                    }
                });
            });
        }else{
            //IOS使用HTML原生上传 input file 多图
            //如果上传多图
            opt.imgLength > 1 && opt.H5Button.attr("multiple",true);

            opt.H5Button.find("input[type='file']").on('change',function (){
                var oFile = this.files,
                    rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i,
                    oReader = [];
                for(var i=0; i<oFile.length; i++){
                    if (!rFilter.test(oFile[i].type)) {
                        $("#dialog2 .weui_dialog_bd").html("选择的图片格式不正确 请重新选择");
                        $("#dialog2").show();
                        return;
                    }
                    if(oFile[i].size > opt.imgSize * 1024 * 1024){
                        $("#dialog2 .weui_dialog_bd").html("单张图片的大小不能大于3M");
                        $("#dialog2").show();
                        return;
                    }
                }

                for(var i=0; i<oFile.length; i++){
                    oReader[i] = new FileReader();
                    oReader[i].onload = function(e){
                        //执行选择照片后的回调函数
                        opt.chooseImageSuccess(e.target.result);
                    }
                    oReader[i].readAsDataURL(oFile[i]);
                }
            });
        }
    },
    flipImage : function (src,callback) {
        /**
         * 翻转图片
         * 修复手机拍的照片方向不对的问题
         **/
        this.includScript("http://static.sinreweb.com/common/js/plugs/exif.js",{
            ok : function () {
                var orientation;
                //EXIF js 可以读取图片的元信息 https://github.com/exif-js/exif-js
                var imgEle = new Image();
                imgEle.onload = function () {
                    EXIF.getData(this,function(){
                        orientation=EXIF.getTag(this,'Orientation');
                    });
                    getImgData(src,orientation,function(data){
                        //返回图片的base64
                        callback(data);
                    });
                }
                imgEle.src = src;
            }
        });

        // @param {string} img 图片的base64
        // @param {int} dir exif获取的方向信息
        // @param {function} next 回调方法，返回校正方向后的base64
        function getImgData(img,dir,next){
            var image=new Image();
            image.onload=function(){
                var degree=0,drawWidth,drawHeight,width,height;
                drawWidth=this.naturalWidth;
                drawHeight=this.naturalHeight;
                //以下改变一下图片大小
                var maxSide = Math.max(drawWidth, drawHeight);
                if (maxSide > 1024) {
                    var minSide = Math.min(drawWidth, drawHeight);
                    minSide = minSide / maxSide * 1024;
                    maxSide = 1024;
                    if (drawWidth > drawHeight) {
                        drawWidth = maxSide;
                        drawHeight = minSide;
                    } else {
                        drawWidth = minSide;
                        drawHeight = maxSide;
                    }
                }

                var canvas=document.createElement('canvas');
                canvas.width=width=drawWidth;
                canvas.height=height=drawHeight;
                var context=canvas.getContext('2d');
                //判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
                switch(dir){
                    //iphone横屏拍摄，此时home键在左侧
                    case 3:
                        degree=180;
                        drawWidth=-width;
                        drawHeight=-height;
                        break;
                    //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
                    case 6:
                        canvas.width=height;
                        canvas.height=width;
                        degree=90;
                        drawWidth=width;
                        drawHeight=-height;
                        break;
                    //iphone竖屏拍摄，此时home键在上方
                    case 8:
                        canvas.width=height;
                        canvas.height=width;
                        degree=270;
                        drawWidth=-width;
                        drawHeight=height;
                        break;
                }
                //使用canvas旋转校正
                context.rotate(degree*Math.PI/180);
                context.drawImage(this,0,0,drawWidth,drawHeight);
                //返回校正图片
                next(canvas.toDataURL("image/png"));
            }
            image.src=img;
        }
    },
    includScript : function(url, opt){
        /*
         * 加载js函数
         * opt{ok:加载成功回调函数,err:加载失败回调函数}
         **/
        opt = $.extend(opt || {},{
            dataType: "script",
            cache: true,
            url: url
        });

        return $.ajax(opt).done(function (data) {
            typeof opt.ok == "function" && opt.ok(data);
        }).fail(function () {
            typeof opt.err == "function" && opt.err();
        });
    }
}

