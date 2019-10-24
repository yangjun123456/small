import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { appConfig as confMock } from '../../app-config.mock';

// import { Resources } from './in_memory_data.service';
import 'rxjs/add/operator/toPromise';

import { Resource } from '../../interface/resources';
// declare const $;
// import { appConfig } from '../../app-config';

import { DataResolver } from './data.resolver';
// import './assets/js/socket.io.js';

declare const $;
declare const io: any;


@Injectable()
export class AppService {
  currentRoute = 'scene';

  progressData: any = {
    describeFlag: 1,
  };
  upLoadAvatar: string = ''; //上传的头像显示
  userInfo: any = ''; //当前登录账号信息
  loginFlag: boolean = false; // 登录页面显示
  loginOutFlag: boolean = false; //退出登录弹出框
  cancellationFlag: boolean = false; //注销页显示 
  isFirstRefresh: boolean = true; //锁定页面判断是否为第一次刷新
  isFirstRefreshAsync: boolean = true; // 同步页面判断是否为第一次刷新
  destructionAndLocking: any = []; //获取在线学员锁定状态
  registerFlag: boolean = false; // 注册页显示
  forgetPassword: boolean = false; // 忘记密码页面显示



  sceneProgress: number = 1;
  knowledgeProgress: number = 1;
  skillProgress: number = 1;
  examProgress: number = 1;
  sceneIsPass: boolean = true;
  knowledgeIsPass: boolean = true;
  skillIsPass: boolean = true;
  examIsPass: boolean = true;

  skillFault01IsGood = '10';
  skillFault02IsGood = '10';
  examFault01IsGood = '10';

  courseParams = {
    prevRouter: '', // 保存上一个路由 
    indexShow: true,
  }

  constructor(
    private http: Http,
    private router: Router,
  ) {

  }
  // 建立socket连接
  socket = io.connect('ws://10.0.1.50:1818');
  connectSocket(num) {
    console.log(num, '12121212121');
    this.socket.emit('synchronization', num)
  };
  // 诊断仪同步事件
  connectSocketZdy(num) {
    this.socket.emit('synchronizationZDY', num)
  }
  // 踏板同步事件
  connectSocketTB(num) {
    this.socket.emit('synchronizationTB', num)
  }
  // 仪表板同步事件
  connectSocketYBB(num) {
    this.socket.emit('synchronizationYBB', num)
  }
  // 万用表同步事件
  connectSocketWYB(num) {
    this.socket.emit('synchronizationWYB', num)
  }
  // 只连接课件根组件socket
  connectSocketPage(num) {
    this.socket.emit('synchronizationpage', num)
  }
  // 滚动条的同步事件
  getCurrentScroll(id) {
    let _this = this;
    let setScrollTop = (top) => {
      $('.' + id).scrollTop(top);
    };
    setTimeout(() => {
      $('.' + id).scroll(function () {
        _this.connectSocket("EXAM&setScrollTop(" + $('.' + id).scrollTop() + ")");
      })
    }, 100);

  }
  // 诊断仪工具的拖动控制
  obdscanPosition(top, left) {
    let _this = this;
    this.connectSocketZdy("ZDY&setObdscanPosition(" + top + "#" + left + ")")
  }



  routerTurn() {
    if (this.courseParams.prevRouter && /courseprepare/.test(this.courseParams.prevRouter)) {
      this.router.navigate([this.courseParams.prevRouter]);
      return;
    }
    this.courseParams.prevRouter = '';
    this.router.navigate(['home']);
  }

  setTextAnimate(status, fun) {
    switch (status) {
      case 'open': this.dotestAnimate = fun; break;
      case 'close': this.closetestAnimate = fun; break;
    }
  }

  // setPrincipleAnimate(fun){
  //   this.InitializePrinciple = fun;
  // }
  // InitializePrinciple(){
  // }
  dotestAnimate() {

  }
  closetestAnimate() {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
