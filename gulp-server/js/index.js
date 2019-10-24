var promptData = {
    'xueyuan': {
        'course': ['视频课程', '所有课程'],
        'courseClass': ['shipinCourse', 'allCourse'],
        'hudong': ['测评', '问卷', '小组打分', '[ ] 扫一扫'],
        'hudongClass': ['ceping', 'wenjuan', 'xiaozudafen', 'saoyisao'],
        'gerenzhongxin': ['个人信息', '我的课程', '考试练习', '我的提醒', '学习记录']
    },
};
// 点击我的课程事件
// alert('123123123');
$(".mycourse").on("touchend", course);
// document.getElementsByClassName('mycourse')[0].addEventListener('touchend', course, false);
function course() {
    if ($('.prompt-select').css('display') === 'none') {
        $('.prompt-select').show();
    } else {
        if (document.getElementsByClassName('course-class')[0]) {
            $('.prompt-select').hide();
        }
    }
    $('.prompt-select').empty();
    var DIV = document.createElement('div');
    var UL = document.createElement('ul');
    DIV.className = 'prompt-content col-xs-3 col-xs-offset-3 course-class';
    document.getElementsByClassName('prompt-select')[0].appendChild(DIV);
    DIV.appendChild(UL);
    for (var i = 0; i < promptData['xueyuan']['course'].length; i++) {
        var li = document.createElement('li');
        li.textContent = promptData['xueyuan']['course'][i];
        li.className = promptData['xueyuan']['courseClass'][i];
        UL.appendChild(li);
    }

    // //  添加点击视频课程事件
    document.getElementsByClassName('shipinCourse')[0].addEventListener('touchend', shipinCourse, false);

    function shipinCourse() {
        var shiPinDIV = document.createElement('div');
        shiPinDIV.innerHTML =
            `
                    <div class='shipin-course' style='margin:20px 0; padding:10px;'>
                    <span class='touxiang col-xs-2' style='margin:0 10px;display:inline-block;padding:0;width:5rem;'>asdfasdf</span>
                    <div class='course-introduce' style='background-color:#fff;display:inline-block;padding:10px;width:67%;'>
                        <span class='shipincourse-time'>更新于 9:15</span>
                        <hr/>
                        <p>视频课程</p>
                        <img src="./images/u28.jpg" width='100%' alt="">
                        <div class='course-introduce-content'>
                            <p>视频课程视频课程视频课程视频课程视频课程</p>
                        </div>
                    </div>
                </div>
            `;
        document.getElementsByClassName('content-main')[0].appendChild(shiPinDIV);
        $('.prompt-select').hide();
    }

    // 添加点击所有课程事件
    document.getElementsByClassName('allCourse')[0].addEventListener('touchend', allCourse, false);

    function allCourse() {
        var allShiPinDIV = document.createElement('div');
        allShiPinDIV.innerHTML =
            `
            <div class='all-course' style='margin:20px 0;padding:10px;'>
                <span class='touxiang col-xs-2' style='margin:0 10px;display:inline-block;padding:0;width:5rem;'>asdfasdf</span>
                <div class='course-introduce' style='background-color:#fff;display:inline-block;padding:10px;width:67%;'>
                    <span class='shipincourse-time'>更新于 9:45</span>
                    <hr/>
                    <p>所有课程</p>
                    <img src="./images/u28.jpg" width='100%' alt="">
                    <div class='course-introduce-content'>
                        <p>所有课程所有课程所有课程所有课程所有课程所有课程所有课程所有课程所有课程所有课程所有课程所有课程</p>
                    </div>
                </div>
            </div>
        `;
        document.getElementsByClassName('content-main')[0].appendChild(allShiPinDIV);
        $('.prompt-select').hide();
    }
}




// 点击我的互动事件
document.getElementsByClassName('hudong')[0].addEventListener('touchend', hudong, false);

function hudong() {

    if ($('.prompt-select').css('display') === 'none') {
        $('.prompt-select').show();
    } else {
        if (document.getElementsByClassName('hudong-class')[0]) {
            $('.prompt-select').hide();

        }
    }
    $('.prompt-select').empty();
    var DIV = document.createElement('div');
    var UL = document.createElement('ul');
    DIV.className = 'prompt-content col-xs-3 col-xs-offset-6 hudong-class';
    document.getElementsByClassName('prompt-select')[0].appendChild(DIV);
    DIV.appendChild(UL);
    for (var i = 0; i < promptData['xueyuan']['hudong'].length; i++) {
        var li = document.createElement('li');
        li.textContent = promptData['xueyuan']['hudong'][i];
        li.className = promptData['xueyuan']['hudongClass'][i];
        UL.appendChild(li);
    }

    // 扫一扫事件
    document.getElementsByClassName('saoyisao')[0].addEventListener('touchend', saoyisao, false);

    function saoyisao() {
        if (document.getElementsByClassName('all-course')[0]) {
            $('.all-course').hide();
        }
        if (document.getElementsByClassName('shipin-course')[0]) {
            $('.shipin-course').hide();
        }
        var saoYiSaoDIV = document.createElement('div');
        saoYiSaoDIV.innerHTML =
            `<div class='saoyisao-outer' style='padding:15px;'>
                    <div class='saoyisao-content' style='padding:10px;background:#fff;'>
                        <span class='title' style='display:block;'>课后测评</span>
                        <span class='time' style='display:block;color:#cccccc;padding:5px 0;'>08月08日</span>
                        <img src="./images/u28.jpg" width='100%' alt="">
                        <p>课后测评课后测评课后测评课后测评课后测评课后测评课后测评课后测评课后测评</p>
                        <hr style='color:#000;'／>
                        <div style='height:2rem;'>
                            <p style='float:left;'>阅读全文</p>
                            <span style='float:right;' class='icon-angle-right icon-large'></span>
                        </div>
                    </div>
                </div>
            `;
        document.getElementsByClassName('content-main')[0].appendChild(saoYiSaoDIV);
        $('.prompt-select').hide();
        $('.menu-bar,.weixintitle,.return2').hide();
        $('.return1').show();
        $('.content').css('bottom', '0px');
    }
    // 测评事件
    document.getElementsByClassName('ceping')[0].addEventListener('touchend', ceping, false);

    function ceping() {
        if (document.getElementsByClassName('all-course')[0]) {
            $('.all-course').hide();
        }
        if (document.getElementsByClassName('shipin-course')[0]) {
            $('.shipin-course').hide();
        }
        var saoYiSaoDIV = document.createElement('div');
        saoYiSaoDIV.innerHTML =
            `<div class='ceping-outer' style='padding:10px;'>
                    <span class='ceping-title'>课后测评</span>
                    <div class='ceping-introduce' style='margin:5px 0 15px 0;'>
                        <span>2017-08-08</span>
                        <span>张教授</span>
                        <span>医学情报林</span>
                    </div>
                    <p class='ceping-course-introduce'>课后测评课后测评课后测评课后测评课后测评课后测评课后测评课后测评课后测评</p>
                    <div class='evaluate-bar' style='padding:20px;border:1px solid #ccc;'>
                        <span class='xuhaoandname'>1.课后测评课后测评课后测评课后测评</span>
                        <hr style='border-top-color:#7d7d7d;'/>
                        <span style='display:block;color:#000;'>
                            <input type="radio" name='pingjia-select'>满意
                        </span>
                        <span style='display:block;color:#000;'>
                            <input type="radio" name='pingjia-select'>一般
                        </span>
                        <span style='display:block;color:#000;'>
                            <input type="radio" name='pingjia-select'>不满意
                        </span>
                    </div>
                </div>
            `;
        document.getElementsByClassName('content-main')[0].appendChild(saoYiSaoDIV);
        $('.prompt-select').hide();
        $('.menu-bar,.weixintitle,.return1').hide();
        $('.return2').show();
        $('.content').css({
            'bottom': '0px',
            'backgroundColor': '#fff'
        });
    }


}
document.getElementsByClassName('return1')[0].addEventListener('touchend', return1, false);

function return1() {
    if (document.getElementsByClassName('saoyisao-outer')[0]) {
        $('.saoyisao-outer').hide();
    }
    if (document.getElementsByClassName('ceping-outer')[0]) {
        $('.ceping-outer').hide();
    }
    if (document.getElementsByClassName('all-course')[0]) {
        $('.all-course').show();
    }
    if (document.getElementsByClassName('shipin-course')[0]) {
        $('.shipin-course').show();
    }
    $('.content').css('bottom', '4rem');
    $('.return1,.return2').hide();
    $('.weixintitle,.menu-bar').show();
}

document.getElementsByClassName('return2')[0].addEventListener('touchend', return2, false);

function return2() {
    if (document.getElementsByClassName('saoyisao-outer')[0]) {
        $('.saoyisao-outer').hide();
    }
    if (document.getElementsByClassName('ceping-outer')[0]) {
        $('.ceping-outer').hide();
    }
    if (document.getElementsByClassName('all-course')[0]) {
        $('.all-course').show();
    }
    if (document.getElementsByClassName('shipin-course')[0]) {
        $('.shipin-course').show();
    }
    $('.content').css({
        'bottom': '4rem',
        'backgroundColor': '#e5e5e5'
    });
    $('.return1,.return2').hide();
    $('.weixintitle,.menu-bar').show();
}



// 点击个人中心事件
document.getElementsByClassName('gerenzhongxin')[0].addEventListener('touchend', gerenzhongxin, false);

function gerenzhongxin() {
    if ($('.prompt-select').css('display') === 'none') {
        $('.prompt-select').show();
    } else {
        if (document.getElementsByClassName('gerenzhongxin-class')[0]) {
            $('.prompt-select').hide();
            return;
        }
    }
    $('.prompt-select').empty();
    var DIV = document.createElement('div');
    var UL = document.createElement('ul');
    DIV.className = 'prompt-content col-xs-3 col-xs-offset-9 gerenzhongxin-class';
    document.getElementsByClassName('prompt-select')[0].appendChild(DIV);
    DIV.appendChild(UL);
    for (var i = 0; i < promptData['xueyuan']['gerenzhongxin'].length; i++) {
        var li = document.createElement('li');
        li.textContent = promptData['xueyuan']['gerenzhongxin'][i];
        UL.appendChild(li);
    }
}

// document.getElementsByClassName('toggleInput')[0].addEventListener('touchend', toggleInput, false);

// function toggleInput() {
//     $('.input').show();
//     $('.toggleInput').css('border-right','1px solid #000');
//     $('.mycourse,.hudong,.gerenzhongxin').hide();
// }