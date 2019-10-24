import { Component } from '@angular/core';
import { ObdscanService } from './obdscan.service';
import { CommunicationService } from '../communication';
import { AppService } from '../../index/app.service';

declare var $: any;
@Component({
  selector: 'obdscan',
  styleUrls: ['./obdscan.component.scss'],
  templateUrl: './obdscan.component.html',
  providers: []
})
/**
 * 处理错误的组件
 */

export class ObdscanComponent {
  obdscanServiceZdata = this.obdscanService.Zdata;
  constructor(
    public obdscanService: ObdscanService,
    private communicationService: CommunicationService,
    public appService: AppService,
  ) {

  }
  ngOnInit(): void {
    console.log('111');
    // setInterval(() => {
    //     console.log(this.obdscanService.Mout.Out1Mot_Gear_Signal_x_x);

    // }, 1000);
    setTimeout(() => {
      this.dragDiv();
    }, 10)
    this.obdscanService.Zdata.monixunlian01fault01 = 0;
    this.obdscanService.Zdata.monixunlian02fault01 = 0;
    this.obdscanService.Zdata.isPower = false;

  }
  dragDiv(): void {
    // 给新面板加上拖拽事件
    $('.obdscan').draggable({
      containment: '.dashboardTask',
      cursor: 'move',
      drag: () => {
        console.log($('.obdscan').css('left'), $('.obdscan').css('top'));
        let top = $('.obdscan').css('top');
        let left = $('.obdscan').css('left');
        this.appService.obdscanPosition(top, left);
      }
    })
  };



  obdscan() {
    this.obdscanService.Zdata.obdscan();

  };
  //动作测试弹出层的拖动
  ationTestPop() {
    this.obdscanService.Zdata.ationTestPop();


  };
  //关闭动作测试里面的弹出层
  colsedPoplayer(name) {
    this.obdscanService.Zdata.colsedPoplayer(name);

  };
  //关闭诊断仪
  closedobdscan() {
    this.appService.connectSocketZdy('ZDY&closedobdscan()');
    this.obdscanService.Zdata.closedobdscan();
  };



  /*诊断仪的菜单操作*/
  changeTemplate(type, page, clear, whicha, personTest) {
    this.appService.connectSocketZdy("ZDY&changeTemplate(" + type + "#" + page + "#" + clear + ")");
    // console.log(11);

    this.obdscanService.Zdata.changeTemplate(type, page, clear, whicha, personTest);

  };

  //诊断仪的返回
  obdscanReturn() {
    this.appService.connectSocketZdy('ZDY&obdscanReturn()');
    this.obdscanService.Zdata.obdscanReturn();

  };

  //诊断仪的加电
  obdscanPower() {
    this.appService.connectSocketZdy('ZDY&obdscanPower()');
    this.obdscanService.Zdata.obdscanPower();

  };
  actionTest(type, layer) {
    this.obdscanService.Zdata.actionTest(type, layer);

  };
  //设置Service参数
  setServiceData() {
    this.appService.connectSocketZdy('ZDY&setServiceData()');
    this.obdscanService.Zdata.setServiceData();


  };
  //弹出层调节器
  leftAdjust(tmep: any, cs: any) {
    if (tmep === 'tmp1') {
      this.appService.connectSocketZdy('ZDY&leftAdjust("tmp1")');
    } else if (tmep === 'tmp2') {
      this.appService.connectSocketZdy('ZDY&leftAdjust("tmp2")');
    }
    this.obdscanService.Zdata.leftAdjust(tmep, cs);

  };
  rightAdjust(temp, cs) {
    if (temp === 'tmp1') {
      this.appService.connectSocketZdy('ZDY&rightAdjust("tmp1")');
    } else if (temp === 'tmp2') {
      this.appService.connectSocketZdy('ZDY&rightAdjust("tmp2")');
    }
    this.obdscanService.Zdata.rightAdjust(temp, cs);

  };




  adjustData(num) {
    switch (num) {
      case '-12.5':
        this.appService.connectSocketZdy('ZDY&adjustData("-12.5")');
        break;
      case '0':
        this.appService.connectSocketZdy('ZDY&adjustData("-12.5")');
        break;
      case '12.5':
        this.appService.connectSocketZdy('ZDY&adjustData("-12.5")');
        break;
    }
    this.obdscanService.Zdata.adjustData(num);

  };

  switchBtn(type, str) {
    if (type == 'tk3' && str == 'off') {
      this.appService.connectSocketZdy('ZDY&switchBtn("tk3#off")');
    } else if (type == 'tk3' && str == 'on') {
      this.appService.connectSocketZdy('ZDY&switchBtn("tk3#on")');
    } else if (type == 'tk4' && str == 'off') {
      this.appService.connectSocketZdy('ZDY&switchBtn("tk4#off")');
    } else if (type == 'tk4' && str == 'on') {
      this.appService.connectSocketZdy('ZDY&switchBtn("tk4#on")');
    }
    this.obdscanService.Zdata.switchBtn(type, str);

  };
}
function changeTemplate() {
  // console
}
