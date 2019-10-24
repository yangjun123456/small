/**
 * Created by Administrator on 2017/4/14.
 */
function registerFun(){//登录注册弹层函数，页面必须有mistake_bg错误弹层
    //<button class="">注册</button>
    var $html = $('<div class="bg"><div class="register_tier"><h2 class="logo"><img src="images/logo.png"></h2><ul class="login_list"><li><img src="images/month-4-25-1.png" /><input type="text" placeholder="请输入手机号" name="" id="" /></li><li><img src="images/month-4-25-2.png" /><input type="password" placeholder="请输入密码" name="" id="" /></li></ul><button class="login_btn">登录</button><h3 class="forgetbtn">忘记密码？</h3><h3 class="register_btn">新用户注册</h3></div></div>');

    var $button = $('<button class="register hidden">注册</button>');

    var $forget = $('<button class="forget">提交</button>');

    $('body').append($html);
    $('.register_tier').append($button);

    $('.login_btn').on('click',function(){//登录按钮
        var phone = $('.login_list li:first-child input').val();//手机号
        var pass = $('.login_list li:last-child input').val();//密码
        if(phone == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入手机号');
            return false;
        }
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入手机号');
            return false;
        }
        if(pass == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入密码');
            return false;
        }
//            $.ajax({
//                url: ,
//                data: ,
//                success: function(data){
//
//                }
//            });
    });
    $('.register_btn').on('click',function(){//注册内容展示
        var $html1 = $('<h2 class="logo"><img src="images/logo.png"></h2><ul class="register_list"><li><img src="images/month-4-25-1.png" /><input type="text" placeholder="请输入手机号" name="" id="" /></li><li><img src="images/month-4-25-3.png" /><input type="text" placeholder="请输入验证码" name="" id="" /><span data-check="0" data-url="" id="tc">获取验证码</span></li><li><img src="images/month-4-25-2.png" /><input type="password" placeholder="请输入密码" name="" id="" /></li></ul>');
        $('.logo').remove();
        $('.forgetbtn').hide();
        $('.login_list').hide();
        $('.register_tier .register,.login').removeClass('hidden');
        $('.register_tier').prepend($html1);
        $('.login_btn,.register_btn').hide();
    });
    //获取验证码
    $('.register_tier').on('click','#tc',function(){
        var phone = $('.register_list li:first-child input').val();//手机号
        if(phone == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入手机号');
            return false;
        }
        //获取验证码

    });
    //注册
    $('.register').on('click',function(){
        var phone = $('.register_list li:first-child input').val();//手机号
        var pass = $('.register_list li:last-child input').val();//密码
        var yan = $('.register_list li:nth-of-type(2) input').val();//验证码
        if(phone == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入手机号');
            return false;
        }
        if(yan == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入验证码');
            return false;
        }
        if(pass == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入密码');
            return false;
        }
//            $.ajax({
//                url: ,
//                data: ,
//                success: function(data){
//
//                }
//            });
    });
    //已有账号，登录
    $('.register_tier').on('click','.login',function(){
        $('.login_list').show();
        $('.register_list').hide();
        $('.register_tier .register,.login').addClass('hidden');
        $('.login_btn,.register_btn').show();
    });
    $('.bg').click(function(){
        $('.bg').hide();
    });
    $('.register_tier,.mistake_bg').on('click',function(event){
        event.stopPropagation();
    });
    //忘记密码
    $('.forgetbtn').on('click',function(){//注册内容展示
        var $html1 = $('<h2 class="logo"><img src="images/logo.png"></h2><ul class="forget_list"><li><img src="images/month-4-25-1.png" /><input type="text" placeholder="请输入手机号" name="" id="" /></li><li><img src="images/month-4-25-3.png" /><input type="text" placeholder="请输入验证码" name="" id="" /><span data-check="0" data-url="" id="tc1">获取验证码</span></li><li><img src="images/month-4-25-2.png" /><input type="password" placeholder="请输入密码" name="" id="" /></li></ul>');
        $('.logo').remove();
        $('.login_list,.register,.forgetbtn').hide();
        $('.register_tier').prepend($forget);
        $('.register_tier .register,.login').removeClass('hidden');
        $('.register_tier').prepend($html1);
        $('.login_btn,.register_btn').hide();
    });
    //获取验证码
    $('.register_tier').on('click','#tc1',function(){
        var phone = $('.forget_list li:first-child input').val();//手机号
        if(phone == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入手机号');
            return false;
        }
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入正确号码');
            return false;
        }
        //获取验证码

    });
    //提交
    $('.register_tier').on('click','.forget',function(){
        var phone = $('.forget_list li:first-child input').val();//手机号
        var pass = $('.forget_list li:last-child input').val();//密码
        var yan = $('.forget_list li:nth-of-type(2) input').val();//验证码
        if(phone == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入手机号');
            return false;
        }
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入正确号码');
            return false;
        }
        if(yan == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入验证码');
            return false;
        }
        if(pass == ""){
            $('.mistake_bg').removeClass('hidden');
            $('.mistake_bg p').text('请输入密码');
            return false;
        }
        //$.ajax({
        //    url: ,
        //    data: ,
        //    success: function(data){
        //
        //    }
        //});
    });
}
