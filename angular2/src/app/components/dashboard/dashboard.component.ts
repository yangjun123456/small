import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { GearPanelService } from '../gear_panel';
import { ObdscanService } from '../obdscan';
import { CommunicationService } from '../communication';
import { AppService } from '../../index/app.service';


declare let $: any;
@Component({
  selector: 'dashboard',
  providers: [
  ],
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  timerDashBoardPointer;
  dashboardShowFlag: boolean = false;
  constructor(
    public obdscanService: ObdscanService,
    public dashboardService: DashboardService,
    public gearPanelService: GearPanelService,
    private communicationService: CommunicationService,
    private appService: AppService,

  ) {

  }
  ngOnInit() {
    // this.dashboardService.setGearsFun('on', () => {  return this.onGearFun() })
    setTimeout(() => {
      this.dragDiv();
    }, 5000);
  }
  // onGearFun() {
  //     if(this.dashboardService.onGearContinue){
  //         this.dashboardService.onGearContinue=false;
  //         return false;
  //     }
  //      this.dashboardService.onGearContinue=true;
  //     console.log("heheh");
  // }
  dragDiv(): void {
    // 给新面板加上拖拽事件
    $('.dashboard-body').draggable({
      containment: '.container',
      cursor: 'move',
      drag: () => {
        let top = $('.dashboard-body').css('top');
        let left = $('.dashboard-body').css('left');
        this.appService.connectSocketYBB('YBB&setDashboard(' + top + '#' + left + ')');
      }
    });
  };

  /*
  *
  *仪表的打开和关闭
  *
  * */

  dashboardShowOrHide(param) {
    this.appService.connectSocketYBB('YBB&dashboardShowOrHide(' + param + ')');
    if (param == 1) {
      $('.dashboard-body').show();
      $('.ignition-switch').hide();
    } else {
      // $('.ignition-switch').show();
      // $('.dashboard-body').hide();
      this.dashboardService.dashboardShowFlag = false;
    }
  }

  stallsAngle(val) {
    this.appService.connectSocketYBB('YBB&stallsAngle(' + val + ')');
    if (val == (this.dashboardService.stalls + 1)) {
      return false
    }
    if (val == 1) {
      if (this.dashboardService.lockGearFun()) {
        this.dashboardService.lockGearFun();
        return this.dashboardService.lockGearContinue
      }

      if (this.dashboardService.lockGearContinue) {
        if (this.timerDashBoardPointer) { clearInterval(this.timerDashBoardPointer); }


        this.obdscanService.Zdata.obdscanOpen = false;
        //模型通讯
        this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = '1';
        this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = '0';
        //按钮旋转
        $('.ignition').css('transform', 'rotate(0deg)');
        $('.dashborad-screen').show();

        //转速指针旋转
        $('.pointer-right').css({ 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)' });
        $('.pointer-left').css({ 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)' });


        //诊断仪断开
        if (!this.obdscanService.Zdata.obdscanOpen) {
          this.obdscanService.Zdata.url = 'guzhang';
          if ($.inArray('obdscan2', this.obdscanService.Zdata.memory) != -1) {
            this.obdscanService.Zdata.memory.pop();
          }
        }
        //档位信号
        this.gearPanelService.controlStalls = 0;
        //档位信号
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '0';
        // 按钮样式
        $('.gear-switch').css('transform', 'rotate(-44deg)');
        $('.state-wrap span').removeClass('active');
        this.dashboardService.stalls = 0;
      }
    } else if (val == 2) {

      if (this.dashboardService.onGearFun()) {
        this.dashboardService.onGearFun();
        return false;
      }
      if (this.dashboardService.onGearContinue) {
        let _this: any = this;
        this.obdscanService.Zdata.obdscanOpen = true;
        // 模型通讯
        this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = '0';
        this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = '1';
        // 按钮旋转
        $('.ignition').css('transform', 'rotate(90deg)');
        $('.dashborad-screen').hide();
        $('.pointer-left').css({ 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)' });
        if (this.timerDashBoardPointer) { clearInterval(this.timerDashBoardPointer); }
        //实时改变车速和速率
        if ((this.appService.progressData.describeFlag !== 11 &&
          this.appService.progressData.describeFlag !== 12 &&
          this.appService.progressData.describeFlag !== 13 &&
          this.appService.progressData.describeFlag !== 15 &&
          this.appService.progressData.describeFlag !== 16 &&
          this.appService.progressData.describeFlag !== 17 &&
          this.appService.progressData.describeFlag !== 21 &&
          this.appService.progressData.describeFlag !== 22 &&
          this.appService.progressData.describeFlag !== 23 &&
          this.appService.progressData.describeFlag !== 2) &&
          (this.appService.progressData.describeFlag == 1 ||
            this.appService.progressData.describeFlag == 3 ||
            this.appService.progressData.describeFlag == 4 ||
            this.appService.progressData.describeFlag == 5 ||
            this.appService.progressData.describeFlag == 6 ||
            this.appService.progressData.describeFlag == 7 ||
            this.appService.progressData.describeFlag == 8 ||
            this.appService.progressData.describeFlag == 9 ||
            this.appService.progressData.describeFlag == 10 ||
            (this.appService.progressData.describeFlag == 14 && this.appService.skillFault01IsGood == "1") ||
            (this.appService.progressData.describeFlag == 18 && this.appService.skillFault02IsGood == "1") ||
            this.appService.progressData.describeFlag == 19 ||
            this.appService.progressData.describeFlag == 20 ||
            (this.appService.progressData.describeFlag == 24 && this.appService.examFault01IsGood == "1"))) {
          this.timerDashBoardPointer = setInterval(function () {
            var angle = _this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x * 1.1125;
            let angle1 = _this.dashboardService.Mout.Out1DrMotor_x_Power_x_x * 1.1125;
            //转速指针旋转
            $('.pointer-right').css({ 'transform': 'rotate(' + '-' + angle + 'deg)', '-ms-transform': 'rotate(' + '-' + angle + 'deg)', '-moz-transform': 'rotate(' + '-' + angle + 'deg)', '-webkit-transform': 'rotate(' + '-' + angle + 'deg)' });
            $('.pointer-left').css({ 'transform': 'rotate(' + angle1 + 'deg)', '-ms-transform': 'rotate(' + angle1 + 'deg)', '-moz-transform': 'rotate(' + angle1 + 'deg)', '-webkit-transform': 'rotate(' + angle1 + 'deg)' });
          }, 100);
        } else {
          console.log(123123111);
          $('.pointer-left').css({ 'transform': 'rotate(50deg)', '-ms-transform': 'rotate(50deg)', '-moz-transform': 'rotate(50deg)', '-webkit-transform': 'rotate(50deg)' });

        }

        let obj = this.obdscanService.Zdata.memory.pop();
        if (obj) {
          this.obdscanService.Zdata.url = obj;

        }
        this.gearPanelService.controlStalls = 2;

        // 档位在on档
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '2';

        // 按钮样式

        $('.gear-stalls').html('N');
        $('.state-wrap .stateN').addClass('active');

        this.dashboardService.stalls = 1;

        // 记录进度点
        this.communicationService.setAction({ id: 'ver008', flag: '', sub: '', value: undefined });
      }
    }
  }

}
