import {
  Router,
} from '@angular/router';
import { Component, ViewEncapsulation, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { flyIn } from '../animations/index';
import { ObdscanService } from '../components/obdscan/index';
import { DashboardService } from '../components/dashboard/index';
import { GearPanelService } from '../components/gear_panel/index';
import { MultimeterService } from '../components/multimeter/index';
import { SimulationService } from '../components/simulation';
import { CommunicationService } from '../components/communication';
import { HandleErrorService } from '../components/handle_error';
import { ajax } from '../../AJAX/index';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/fromEvent';
// import Rx from 'rxjs/Rx';


declare var $: any;
declare const io: any;


require('./app.component.css');

@Component({
  selector: 'support-app',
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html',
  animations: [
    flyIn
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  rightNavIsShow: boolean = false; // 右侧导航显示
  rightNavAnimation: string = ''; // 右侧导航动画
  holdAllFlag: boolean = false;  // 工具箱子内容
  controlCenterFlag: boolean = false; // 控制中心下面的子内容
  indexBgFlag: boolean = true; // 首页显示
  loginFlag: boolean = false; // 登录也显示
  promptInfoName: string = ''; // 注册姓名提示信息
  promptInfoUserName: string = ''; // 注册身份证提示信息
  promptInfoPassWord: string = ''; // 注册密码提示信息
  promptInfoCompany: string = ''; // 注册单位提示信息
  promptInfoPosition: string = ''; // 注册职位提示信息
  promptInfoDubPassWord: string = ''; // 两次输入的密码是否一致提示信息
  loginPromptInfoUserName: string = ''; // 登录身份证号码提示信息
  loginPromptInfoPassWord: string = ''; // 登录密码提示信息

  promptInfoNameFlag: boolean = false; // 注册姓名标志
  promptInfoUserNameFlag: boolean = false; // 注册身份证标志
  promptInfoPassWordFlag: boolean = false; // 注册密码提示标志
  promptInfoDubPassWordFlag: boolean = false; // 注册第二次密码提示标志

  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, public obdscanService: ObdscanService, public dashboardService: DashboardService, public gearPanelService: GearPanelService, public multimeterService: MultimeterService, public appService: AppService, private simulationService: SimulationService, private communicationService: CommunicationService, public handleErrorService: HandleErrorService) { }
  ngOnInit() {
    this.loginFlag = this.appService.loginFlag;
    $('.scene').css({ 'borderBottomColor': 'red' });
    if (this.simulationService.init()) {
      this.simulationService.init();
    }
    this.communicationService.init();
    this.indexBgFlag = false;
    this.appService.loginFlag = true;
    // this.getSession();
  }
  ngOnDestroy() {
    // 根组件消失解锁所有设备
    let socket = io.connect('ws://10.0.1.50:1818');
    ajax({
      url: 'http://10.0.1.50:1818/lock/AllUnLock',
      method: 'get',
    }).then((res) => {
      if (JSON.parse(res).code === 1) {
        this.appService.destructionAndLocking.map((item, index) => {
          item.map((a, b) => {
            a['isCurrent'] = false;
            socket.emit('unLock', item);
          });
        });
      }
    });
  }
  // 每次刷新页面获取session，查看是否为登录状态
  getSession() {
    ajax({
      url: 'http://10.0.1.50:1818/teacherUser/getSession',
      method: 'get',
    }).then(res => {
      if (JSON.parse(res).code === 14) {
        setTimeout(() => {
          this.indexBgFlag = false;
          this.appService.loginFlag = true;
        }, 2000);
      } else {
        this.indexBgFlag = false;
        this.appService.loginFlag = false;
        this.appService.userInfo = JSON.parse(res);
      }
    }).catch(err => {
      console.log(err);
    });

  }
  // 登录
  login(userID, passwordID) {
    if (userID && passwordID) {
      let user = { userNameID: userID, passWordID: passwordID };
      ajax({
        url: 'http://10.0.1.50:1818/teacherUser/signin',
        method: 'post',
        data: user,
      }).then((res) => {
        if (JSON.parse(res).code === 11) {
          this.handleErrorService.handleError({ 'message': '用户【' + JSON.parse(res)['user'] + '】没有注册！' });
        } else if (JSON.parse(res).code === 1) {
          this.appService.loginFlag = false;
          this.appService.userInfo = JSON.parse(res).info;
        } else if (JSON.parse(res).code === 15) {
          this.handleErrorService.handleError({ 'message': '用户【' + JSON.parse(res)['user'] + '】已登录！' });
        } else if (JSON.parse(res).code === 17) {
          this.handleErrorService.handleError({ 'message': '用户【' + JSON.parse(res)['user'] + '】密码不正确！' });
        } else {
          console.log(JSON.parse(res));
        }
      });
    } else if (!userID) {
      this.loginPromptInfoUserName = '身份证号码不能为空！';
      setTimeout(() => {
        this.loginPromptInfoUserName = '';
      }, 2000);
    } else if (!passwordID) {
      this.loginPromptInfoPassWord = '密码不能为空！';
      setTimeout(() => {
        this.loginPromptInfoPassWord = '';
      }, 2000);
    }
  }
  // 注册
  register(name, company, position, password, userNameID, avatar) {
    let self = this;
    // if (name && company && position && password && userNameID && this.promptInfoNameFlag && this.promptInfoUserNameFlag && this.promptInfoPassWordFlag) {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('company', company);
    formData.append('position', position);
    formData.append('passWordID', password);
    formData.append('userNameID', userNameID);
    avatar.files[0] ? formData.append('avatar', avatar.files[0]) : formData.append('avatar', '');
    $.ajax({
      async: false,
      url: 'http://10.0.1.50:1818/teacherUser/signup',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function (res) {
        if (res.code === 12) {
          self.handleErrorService.getError(res.code);
        } else if (res.code === 1) {
          self.appService.registerFlag = false;
          self.appService.loginFlag = true;
          self.appService.upLoadAvatar = '';
        } else {
          console.log(res);
        }
      },
      error: function (err) {
        console.log(err);
      }
    });
    // } else if (!name) {
    //   this.promptInfoName = '请填写姓名！';
    //   setTimeout(() => {
    //     this.promptInfoName = '';
    //   }, 1000);
    //   return;
    // } else if (!this.promptInfoNameFlag) {
    //   console.log('sasasasasasas');
    //   this.promptInfoName = '姓名格式不正确！';
    //   setTimeout(() => {
    //     this.promptInfoName = '';
    //   }, 2000);
    //   return;
    // } else if (!company) {
    //   this.promptInfoCompany = '请填写单位名称！';
    //   setTimeout(() => {
    //     this.promptInfoCompany = '';
    //   }, 1000);
    //   return;
    // } else if (!position) {
    //   this.promptInfoPosition = '请填写职位名称！';
    //   setTimeout(() => {
    //     this.promptInfoPosition = '';
    //   }, 1000);
    //   return;
    // } else if (!password) {
    //   this.promptInfoPassWord = '请填写密码！';
    //   setTimeout(() => {
    //     this.promptInfoPassWord = '';
    //   }, 1000);
    //   return;
    // } else if (!this.promptInfoPassWordFlag) {
    //   this.promptInfoPassWord = '密码格式不正确！';
    //   setTimeout(() => {
    //     this.promptInfoPassWord = '';
    //   }, 2000);
    //   return;
    // } else if (!userNameID) {
    //   this.promptInfoUserName = '请填写身份证号码！';
    //   setTimeout(() => {
    //     this.promptInfoUserName = '';
    //   }, 1000);
    //   return;
    // } else if (!this.promptInfoUserNameFlag) {
    //   this.promptInfoUserName = '身份证号码格式不正确！';
    //   setTimeout(() => {
    //     this.promptInfoUserName = '';
    //   }, 2000);
    // }
  }
  // 修改密码
  ModifyPassword(usernameID, passwordID, confirmPassWordID) {
    // if (usernameID && passwordID && confirmPassWordID && this.promptInfoUserNameFlag && this.promptInfoPassWordFlag&&this.promptInfoDubPassWordFlag) {
    let user = { username: usernameID, password: passwordID }
    ajax({
      url: 'http://10.0.1.50:1818/teacherUser/ModifyPassword',
      method: 'post',
      data: user,
    }).then(res => {
      if (JSON.parse(res).code === 11) {
        this.handleErrorService.handleError({ 'message': '用户【' + JSON.parse(res)['user'] + '】没有注册！' });
      } else if (JSON.parse(res).code === 1) {
        this.appService.forgetPassword = false;
        this.appService.loginFlag = true;
      }
    }).catch(err => {
      console.log(err);
    })
    // } else if (!usernameID) {
    //   this.promptInfoUserName = '身份证号码不能为空！';
    //   setTimeout(() => {
    //     this.promptInfoUserName = '';
    //   }, 2000);
    //   return;
    // } else if (!this.promptInfoUserNameFlag) {
    //   this.promptInfoUserName = '身份证号码格式不正确！';
    //   setTimeout(() => {
    //     this.promptInfoUserName = '';
    //   }, 2000);
    //   return;
    // } else if (!passwordID) {
    //   this.promptInfoPassWord = '密码不能为空！';
    //   setTimeout(() => {
    //     this.promptInfoPassWord = '';
    //   }, 2000);
    //   return;
    // } else if (!this.promptInfoPassWordFlag) {
    //   this.promptInfoDubPassWord = '密码格式不正确！';
    //   setTimeout(() => {
    //     this.promptInfoDubPassWord = '';
    //   }, 2000);
    // } else if (!confirmPassWordID) {
    //   this.promptInfoDubPassWord = '密码不能为空！';
    //   setTimeout(() => {
    //     this.promptInfoDubPassWord = '';
    //   }, 2000);
    //   return;
    // } else if (!this.promptInfoDubPassWordFlag) {
    //   this.promptInfoPassWord = '密码格式不正确！';
    //   setTimeout(() => {
    //     this.promptInfoPassWord = '';
    //   }, 2000);
    //   return;
    // }
  }
  // 上传头像
  upLoad(avatar) {
    let _this = this;
    // 获取上传的文件信息
    let pic = avatar.files[0];

    // 创建FileReader对象
    let reader = new FileReader();

    // 编码成Data URL (这一步最为关键)
    reader.readAsDataURL(pic);

    // 监听上传完成
    reader.onload = function () {
      // 拿到base64的路径
      let src = reader.result;
      // 改变img的src属性值
      _this.appService.upLoadAvatar = src;
    };
  }

  // 验证注册格式
  verificationRegister(info, str, passwordInfo) {
      // switch (str) {
      //   case 'name':
      //     if (info.value) {
      //       if (/^([\u4e00-\u9fa5]){2,4}$/.test(info.value)) {
      //         this.promptInfoNameFlag = true;
      //         return;
      //       }
      //       this.promptInfoNameFlag = false;
      //       this.promptInfoName = '姓名格式不正确！';
      //       setTimeout(() => {
      //         this.promptInfoName = '';
      //       }, 2000);
      //     } else {
      //       this.promptInfoName = '姓名不能为空！';
      //       setTimeout(() => {
      //         this.promptInfoName = '';
      //       }, 2000);
      //     }
      //     break;
      //   case 'password':
      //     if (info.value) {
      //       if (/^([a-zA-Z0-9]){8,12}$/.test(info.value)) {
      //         this.promptInfoPassWordFlag = true;
      //         return;
      //       }
      //       this.promptInfoPassWordFlag = false;
      //       this.promptInfoPassWord = '密码格式不正确！';
      //       setTimeout(() => {
      //         this.promptInfoPassWord = '';
      //       }, 2000);
      //     } else {
      //       this.promptInfoPassWord = '密码不能为空！';
      //       setTimeout(() => {
      //         this.promptInfoPassWord = '';
      //       }, 2000);
      //     }
      //     break;
      //   case 'username':
      //     if (info.value) {
      //       if (/^(\d{18}$|^\d{17}(\d|X|x))$/.test(info.value)) {
      //         this.promptInfoUserNameFlag = true;
      //         return;
      //       }
      //       this.promptInfoUserNameFlag = false;
      //       this.promptInfoUserName = '身份证号码格式不正确！';
      //       setTimeout(() => {
      //         this.promptInfoUserName = '';
      //       }, 2000);
      //     } else {
      //       this.promptInfoUserName = '身份证号码不能为空！';
      //       setTimeout(() => {
      //         this.promptInfoUserName = '';
      //       }, 2000);
      //     }
      //     break;
      //   case 'dubPassword':
      //     if (info.value) {
      //       if (passwordInfo.value == info.value) {
      //         this.promptInfoDubPassWordFlag = true;
      //         return;
      //       }
      //       this.promptInfoDubPassWordFlag = false;
      //       this.promptInfoDubPassWord = '两次输入的密码不一样！'
      //       info.value = '';
      //       setTimeout(() => {
      //         this.promptInfoDubPassWord = '';
      //       }, 2000);
      //     } else {
      //       this.promptInfoDubPassWord = '密码不能为空！'
      //     }
      //     break;
      //   default:
      //     return;
      // }
  }
  // 进入注册页面
  registerPage() {
    this.appService.loginFlag = false;
    this.appService.registerFlag = true;
  }
  // 关闭注册页面
  back() {
    this.appService.registerFlag = false;
    this.appService.loginFlag = true;
    this.promptInfoNameFlag = false;
    this.promptInfoUserNameFlag = false;
    this.promptInfoPassWordFlag = false;
    this.promptInfoDubPassWordFlag = false;
  }
  // 进入忘记密码页面
  forgetPasswordPage() {
    this.appService.loginFlag = false;
    this.appService.forgetPassword = true;
  }
  // 关闭忘记密码页面
  forgetPasswordBack() {
    this.appService.loginFlag = true;
    this.appService.forgetPassword = false;
    this.promptInfoNameFlag = false;
    this.promptInfoUserNameFlag = false;
    this.promptInfoPassWordFlag = false;
    this.promptInfoDubPassWordFlag = false;
  }
  // 点击出现右导航
  rightNavShow() {
    $('.arrowR').hide();
    this.rightNavAnimation = 'left';
    this.rightNavIsShow = true;
  }
  // 点击关闭右导航
  closeRightNav() {
    $('.arrowR').show(800);
    setTimeout(() => {
      this.rightNavIsShow = false;
    }, 100);
    this.rightNavAnimation = 'right';
    this.holdAllFlag = false;
    this.controlCenterFlag = false;
  }
  // 切换路由
  routeNav(routeJump) {
    this.router.navigate([routeJump]);
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.closemultimeter();


    switch (routeJump) {
      case 'scene':
        console.log(this.appService.sceneProgress, '5555555');
        this.appService.progressData.describeFlag
          = this.appService.sceneProgress;
        if (this.appService.sceneIsPass) {
          this.appService.progressData.describeFlag = 1;
        }
        break;
      case 'knowledge':
        this.appService.progressData.describeFlag
          = this.appService.knowledgeProgress;
        if (this.appService.knowledgeIsPass) {
          this.appService.progressData.describeFlag = 4;
        }
        break;
      case 'skill':
        this.appService.progressData.describeFlag = this.appService.skillProgress;
        if (this.appService.skillIsPass) {
          this.appService.progressData.describeFlag = 11;
        }
        break;
      case 'examination':
        this.appService.progressData.describeFlag = this.appService.examProgress;
        if (this.appService.examIsPass) {
          this.appService.progressData.describeFlag = 20;
        }
        break;
      default:
        return;
    };
    $('.nav').find('li').find('span').css({ 'borderBottomColor': 'rgb(80,80,80)' });
    $('.' + routeJump).css({ 'borderBottomColor': 'red' });
  }
  // 工具箱子内容显示
  holdAllShow() {
    this.holdAllFlag = !this.holdAllFlag;
  }
  // 控制中心下面的子内容
  dashboardShow() {
    this.controlCenterFlag = !this.controlCenterFlag;
  }
  // 根据传进的不同参数显示不同的工具
  toolShow(str) {
    switch (str) {
      case 'instrument':
        this.obdscanService.Zdata.obdscanStatus = true;
        break;
      case 'multimeter':
        this.multimeterService.Mdata.multimeterStatus = true;
        break;
      case 'oscilloscope':
        break;
      case 'Meter':
        this.dashboardService.dashboardShowFlag = true;
        break;
      case 'pedal':
        this.gearPanelService.pedalShowFlag = true;

        break;
      default:
        return;
    }
  }



}


