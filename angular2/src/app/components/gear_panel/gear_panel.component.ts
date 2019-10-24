import { Component } from '@angular/core';
import { HandleErrorService } from '../handle_error';
import { GearPanelService } from './gear_panel.service';
import { DashboardService } from '../dashboard';
import { CommunicationService } from '../communication';
import { AppService } from '../../index/app.service';

declare let $: any,
  stallsRAnimate: any,
  stallsDAnimate: any;

@Component({
  selector: 'gear-panel',
  styleUrls: ['./gear_panel.component.scss'],
  templateUrl: './gear_panel.component.html',
  providers: []
})
/**
 * 处理错误的组件
 */
export class GearPanelComponent {
  timeout = null;
  rightStopPrev = 0;
  leftStopPrev = 0;

  rightXCurrent = false;
  leftXCurrent = false;

  speedArrRight = [0];
  panduanDragStop = [];
  speedArrLeftGet = [];
  speedArrLeft = {
    '16': 49,
    '17': 50.2,
    '18': 51.4,
    '19': 52.6,
    '20': 53.8,
    '21': 55,
    '22': 56.2,
    '23': 57.4,
    '24': 58.6,
    '25': 59.8,
    '26': 61,
    '27': 62.2,
    '28': 63.4,
    '29': 64.6,
    '30': 65.8,
    '31': 67,
    '32': 68.2,
    '33': 69.4,
    '34': 70.6,
    '35': 71.8,
    '36': 73,
    '37': 74.2,
    '38': 75.4,
    '39': 76.6,
    '40': 77.8,
    '41': 79,
    '42': 80.2,
    '43': 81.4,
    '44': 82.6,
    '45': 83.8,
    '46': 85,
    '47': 86.19999999999999,
    '48': 87.4,
    '49': 88.6,
    '50': 89.8,
    '51': 91,
    '52': 92.19999999999999,
    '53': 93.4,
    '54': 94.6,
    '55': 95.8,
    '56': 97,
    '57': 98.19999999999999,
    '58': 99.4,
    '59': 100.6,
    '60': 101.8,
    '61': 103,
    '62': 104.19999999999999,
    '63': 105.4,
    '64': 106.6,
    '65': 107.8,
    '66': 109,
    '67': 110.19999999999999,
    '68': 111.4,
    '69': 112.6,
    '70': 113.8,
    '71': 115,
    '72': 116.2,
    '73': 117.39999999999999,
    '74': 118.6,
    '75': 119.8,
    '76': 121,
    '77': 122.2,
    '78': 123.39999999999999,
    '79': 124.6,
    '80': 125.8,
    '81': 127,
    '82': 128.2,
    '83': 129.39999999999998,
    '84': 130.6,
    '85': 131.8,
    '86': 133,
    '87': 134.2,
    '88': 135.39999999999998,
    '89': 136.6,
    '90': 137.8,
    '91': 139,
    '92': 140.2,
    '93': 141.39999999999998,
    '94': 142.6,
    '95': 143.8,
    '96': 145,
    '97': 146.2,
    '98': 147.39999999999998,
    '99': 148.6,
    '100': 149.8
  };

  //档位开关是否隐藏
  gearPanelHidden: boolean = true;
  //是否踩下刹车踏板
  isBrake = 0;
  //是否在拖拽
  isDrag = 0;
  //控制中心的按钮在什么档位，1、2、3分别代表r、n、d
  controlStalls = 0;
  //档位在lock档
  stalls = 0;
  constructor(
    private gearPanelService: GearPanelService,
    private appService: AppService,
    private dashboardService: DashboardService,
    private handleErrorService: HandleErrorService,
    private communicationService: CommunicationService,
  ) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.dragAcc();
      this.dragDiv();
    }, 2000);

    this.getValue();
  }

  /*
   *
   * 面板拖拽
   *
   * */
  dragDiv() {
    // 给新面板加上拖拽事件
    $('.dragSource').draggable({
      containment: '.container',
      cursor: 'move',
      drag: () => {
        let top = $('.dragSource').css('top');
        let left = $('.dragSource').css('left');
        this.appService.connectSocketTB('TB&setGearSourcePosition(' + top + '#' + left + ')');
      }
    });
  }

  /*
   *
   * 点开面板
   *
   * */

  openSwitchPanel(val: number): void {
    this.appService.connectSocketTB('TB&openSwitchPanel(' + val + ')');
    let zIndex = 14;
    //打开门控开关
    if (val == 1) {
      $(".wifi-switch-panel,.key-switch-panel").css("z-index", (zIndex - 1));
      $(".gear-wrap").removeClass("hide-important").css("z-index", "16");
      $(".door-switch").parent().addClass("active");
    }
    //打遥控器
    if (val == 2) {
      $(".door-switch-panel,.key-switch-panel").css("z-index", (zIndex - 1));
      $(".wifi-switch-panel").removeClass("hide-important").css("z-index", "16");
      $(".wifi-switch").parent().addClass("active");
    }
    //打开车门锁
    if (val == 3) {
      $(".wifi-switch-panel,.door-switch-panel").css("z-index", (zIndex - 1));
      $(".key-switch-panel").removeClass("hide-important").css("z-index", "16");
      $(".key-switch").parent().addClass("active");
    }
    this.gearPanelService.pedalShowFlag = false;
  }


  /*
   *
   * 关闭面板
   *
   * */

  closeSwitchPanel(val) {
    this.appService.connectSocketTB('TB&closeSwitchPanel(' + val + ')');

    //关闭门控开关
    if (val == 1) {
      $(".gear-wrap").addClass("hide-important");
      $(".door-switch").parent().removeClass("active");
    }
    //关闭遥控器
    if (val == 2) {
      $(".wifi-switch-panel").addClass("hide-important");
      $(".wifi-switch").parent().removeClass("active");
    }
    //关闭门锁
    if (val == 3) {
      $(".key-switch-panel").addClass("hide-important");
      $(".key-switch").parent().removeClass("active");
    }
    this.gearPanelService.pedalShowFlag = false;
  }
  /*
   *
   * 控制面板刹车点击
   *
   * */

  brakeOn(_obj) {
    this.appService.connectSocketTB('TB&brakeOn(' + _obj + '#)');
    let tireSpeed = 1;
    let _top = parseInt($(_obj).css("top"));
    if (_top == 35) {
      console.log(12121212);
      this.gearPanelService.isBrake = 1;

      this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = '1';

      $(_obj).css("top", "94px");

      $(".circuit-brake").attr({ "stroke": "#E50012" });
      $(".circuit-switch3").attr({ "stroke": "#E50012", "x2": "589.988" });
      if (this.gearPanelService.pressBrakeFun()) {
        this.gearPanelService.pressBrakeFun();
      }
      //进度记录
      this.communicationService.setAction({ id: 'ver010', flag: '', sub: '', value: undefined });

    } else {
      this.gearPanelService.isBrake = 0;

      this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = '0';

      $(_obj).css("top", "35px");

      $(".circuit-brake").attr({ "stroke": "#231815" });

      $(".circuit-switch3").attr({ "stroke": "#231815", "x2": "598.233" });
      if (this.gearPanelService.loosenBrakeFun()) {
        this.gearPanelService.loosenBrakeFun();
      }
      //松开刹车动画
      this.releaseBrake();
    }
  };

  /*
  *
  * 加速踏板松开动画
  *
  * */
  accRelease(): void {
    this.appService.connectSocketTB('TB&accRelease()');
    if (this.gearPanelService.loosenAcceleratorFun()) {
      this.gearPanelService.loosenAcceleratorFun()
    }
    //页面动画控制
    //松开就改变动画方向
    // console.log(this.dashboardService.stalls);
    if ((this.gearPanelService.controlStalls == 1 || this.gearPanelService.controlStalls == 3) && this.dashboardService.stalls == 1 && this.gearPanelService.isBrake == 0) {
      $(".block-slide1").show();
      $(".block-slide2").hide();
      //流向动力电池
      $(".line-flow1").hide();
      $(".line-flow2").show();
      //页面动画控制

      //r
      if (this.gearPanelService.controlStalls == 1) {

        // stallsRAnimate(1);

      } else if (this.gearPanelService.controlStalls == 3) {

        // stallsDAnimate(1)

      }
    }



  }
  /*
   *
   * 面板拖拽事件，加速
   *
   * */

  dragAcc(): void {
    var _this = this;
    //给新面板加上拖拽事件
    $(".accelerator").draggable({
      containment: ".gear-accelerator",
      cursor: "move",
      start: function () {
        console.log('start');
        _this.appService.connectSocketTB('TB&dragStartAccelerator()');
        let _left = parseInt($('.accelerator').css('top'), 10);
        let oldLeft = $('.data-show').html();
        let newLeft = Math.floor(_left * (176 / 129)) + 16;
        let speed = newLeft + 10;
        {
          let linshi = _this.speedArrRight[0];
          if (_this.speedArrRight.length >= 1) {
            _this.rightStopPrev = linshi;
            if (_this.rightStopPrev < speed) {
              _this.speedArrRight = [];
            }
            _this.speedArrRight.push(linshi);
          }
          if (_this.rightStopPrev > 0) {
            _this.rightXCurrent = true;
          }
        }
        {
          let linshi = _this.speedArrLeftGet[0];
          if (_this.speedArrLeftGet.length >= 1) {
            _this.leftStopPrev = linshi;
            if (_this.leftStopPrev < speed) {
              _this.speedArrLeftGet = [];
            }
            _this.speedArrLeftGet.push(linshi);
          }
          if (_this.leftStopPrev > 0) {
            _this.leftXCurrent = true;
          }
        }
      },
      drag: function () {
        let top = $('.accelerator').css('top');
        let left = $('.accelerator').css('left');
        _this.appService.connectSocketTB('TB&dragDragAccelerator(' + top + '#' + left + ')');
        _this.gearPanelService.isDrag = 1;
        let _left = parseInt($(".accelerator").css("top"));
        let oldLeft = $(".data-show").html();
        let newLeft = Math.floor(_left * (176 / 129)) + 16;

        //控制中d心档位在r和d档

        console.log(_this.gearPanelService.controlStalls, _this.gearPanelService.controlStalls, _this.gearPanelService.isBrake, '12312312zxcv3');

        if ((_this.gearPanelService.controlStalls == 1 || _this.gearPanelService.controlStalls == 3) && _this.gearPanelService.isBrake == 1) {
          _this.handleErrorService.handleError({ message: "请松开刹车踏板" });
          return;
        }

        //加速踏板拖拽动画

        _this.gearPanelService.accDrag(newLeft, oldLeft);

        _this.dashboardService.Mint.In1NER_APP_NO1_x_x = newLeft + '';
        $(".data-show").html(newLeft);

        let speed = newLeft + 10;

        if (_this.rightStopPrev >= 2) {
          if (_this.rightStopPrev < speed) {
            if (_this.rightXCurrent) {
              _this.speedArrRight = [];
              _this.speedArrLeftGet = [];
            }
            _this.rightXCurrent = false;
            _this.speedArrRight.push(speed);
            _this.speedArrLeftGet.push(newLeft);
          } else {
            if (_this.speedArrRight[0] <= speed) {
              _this.speedArrRight = [];
              _this.speedArrLeftGet = [];
            }
            _this.speedArrRight.push(speed);
            _this.speedArrLeftGet.push(newLeft);
          }
        } else {
          _this.speedArrRight.push(speed);
          _this.speedArrLeftGet.push(newLeft);
        }

        clearTimeout(_this.timeout);

        _this.timeout = setTimeout(() => {
          // let speedArrRightLast = _this.speedArrRight[_this.speedArrRight.length - 1];
          // let speedArrLeftGetLast = _this.speedArrLeftGet[_this.speedArrLeftGet.length - 1];
          {
            let linshi = _this.speedArrRight[0];
            _this.rightStopPrev = linshi;
            _this.speedArrRight = [];
            _this.speedArrRight.push(linshi);
            if (_this.rightStopPrev > speed) {
              for (let i = linshi; i > speed; i--) {
                _this.speedArrRight.push(i);
              }
            } else {
              for (let i = linshi; i < speed; i++) {
                _this.speedArrRight.push(i);
              }
            }
          }
          {
            let linshi = _this.speedArrLeftGet[0];
            _this.leftStopPrev = linshi;
            _this.speedArrLeftGet = [];
            _this.speedArrLeftGet.push(linshi);
            if (_this.leftStopPrev > newLeft) {
              for (let i = linshi; i > newLeft; i--) {
                _this.speedArrLeftGet.push(i);
              }
            } else {
              for (let i = newLeft; i < linshi; i++) {
                _this.speedArrLeftGet.push(i);
              }
            }
          }
          // _this.speedArrRight.push(speedArrRightLast);
          // _this.speedArrLeftGet.push(speedArrLeftGetLast);
          console.log('停止了');
        }, 1500);


      },
      stop: function () {
        clearTimeout(_this.timeout);
        _this.appService.connectSocketTB('TB&dragStopAccelerator(0#0)');
        //控制中心档位在r和d档
        if ((_this.gearPanelService.controlStalls == 1 || _this.gearPanelService.controlStalls == 3) && _this.gearPanelService.isBrake == 1) {
          _this.handleErrorService.handleError({ message: "请松开刹车踏板" });

        }
        $(".accelerator").css("top", "0");

        _this.dashboardService.Mint.In1NER_APP_NO1_x_x = '16';

        $(".data-show").html("16");

        {
          let linshi = _this.speedArrRight[_this.speedArrRight.length - 1];
          _this.speedArrRight = [];
          for (let i = linshi; i >= 0; i--) {
            _this.speedArrRight.push(i);
          }
        }
        {
          let linshi = _this.speedArrLeftGet[_this.speedArrLeftGet.length - 1];
          _this.speedArrLeftGet = [];
          for (let i = linshi; i >= 16; i--) {
            _this.speedArrLeftGet.push(i);
          }
        }

        //加速踏板松开动画
        _this.accRelease();
        _this.gearPanelService.isDrag = 2;
        //进度记录
        _this.communicationService.setAction({ id: 'ver011', flag: '', sub: '', value: undefined });

        //if(speedListener){$interval.cancel(speedListener);}
        //clearInterval( pageTimer['speed']);

      }
    })
  };

  getValue() {
    let _this = this;
    function rotate() {
      _this.dashboardService.Mout.Out1DrMotor_x_Power_x_x = _this.speedArrLeft[_this.speedArrLeftGet[0]];
      _this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x = _this.speedArrRight[0];
      if (_this.speedArrLeftGet.length > 1) {
        _this.speedArrLeftGet.shift();
      }
      if (_this.speedArrRight.length > 1) {
        _this.speedArrRight.shift();
      }
    }
    setInterval(() => {
      rotate();
    }, 80);
  }

  /*
   *
   * 档位事件
   *
   * */
  switchGear(id, obj) {
    console.log(obj, id, 'klklkl');
    this.appService.connectSocketTB('TB&switchGear(' + id + '#' + obj + ')');
    // console.log(dashboardService.Mint.In1Mot_Gear_Signal_x_x +",,,,"+id)

    if (this.dashboardService.Mint.In1Mot_Gear_Signal_x_x == id) {
      return;
    }

    // console.log(this.dashboardService.stalls);
    if (this.dashboardService.stalls == 1) {
      if (id == 1) {

        if (this.gearPanelService.isBrake == 0) {

          this.handleErrorService.handleError({ message: "请确认刹车踏板已踩下" });
          return;
        }
        this.gearPanelService.controlStalls = 1;

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '1';

        $(".gear-switch").css("transform", "rotate(-90deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-r").attr("stroke", "#28C2FF");

        $(".gear-stalls").html("R");
        //进度记录
        this.communicationService.setAction({ id: 'ver012', flag: '', sub: '', value: undefined });
        if (this.gearPanelService.reverseFun()) {
          this.gearPanelService.reverseFun()
        }

      } else if (id == 2) {
        if (this.gearPanelService.isBrake == 0) {
          this.handleErrorService.handleError({ message: "请确认刹车踏板已踩下" });
          return;
        }
        this.gearPanelService.controlStalls = 2;

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '2';

        $(".gear-switch").css("transform", "rotate(-44deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-n").attr("stroke", "#28C2FF");

        $(".gear-stalls").html("N");

        this.gearPanelService.stopanimate();
        if (this.gearPanelService.neutralFun()) {
          this.gearPanelService.neutralFun()
        }

      } else if (id == 3) {
        console.log('asasasasasa');
        if (this.gearPanelService.isBrake == 0) {
          this.handleErrorService.handleError({ message: "请确认刹车踏板已踩下" });
          return;
        }
        this.gearPanelService.controlStalls = 3;

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = '3';

        $(".gear-switch").css("transform", "rotate(0deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-d").attr("stroke", "#28C2FF");

        $(".gear-stalls").html("D");

        //进度记录
        this.communicationService.setAction({ id: 'ver012', flag: '', sub: '', value: undefined });
        if (this.gearPanelService.driveFun()) {
          this.gearPanelService.driveFun()
        }
      }

      //页面动画先初始化一下
      //stallsInit();
      //circuitInit();

      //按钮样式
      $(".state-wrap span").removeClass("active");

      $(obj).addClass("active");


    }


  }

  /*
   *
   * 松开刹车动画
   *
   * */
  releaseBrake() {
    this.appService.connectSocketTB('TB&releaseBrake()');
    let pageTimer = {
      "mask": null
    };

    //松开刹车
    //r
    // console.log(this.dashboardService.stalls);
    if (this.gearPanelService.controlStalls == 1 && this.dashboardService.stalls == 1) {
      //stallsRAnimate(1);
      $(".block-slide2").show();
      $(".block-slide1").hide();
      //流向控制电机
      $(".line-flow1").show();
      $(".line-flow2").hide();
      clearInterval(pageTimer["mask"]);

      pageTimer["mask"] = setInterval(function () {
        if ($(".line-mask4").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").hide();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask3").css("display") == "none") {
          $(".line-mask1,.line-mask2").hide();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask1").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        } else {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        }
      }, 300)

    } else if (this.gearPanelService.controlStalls == 3 && this.dashboardService.stalls == 1) {

      //stallsDAnimate(1);

      $(".block-slide2").show();
      $(".block-slide1").hide();
      //流向控制电机
      $(".line-flow1").show();
      $(".line-flow2").hide();

      clearInterval(pageTimer["mask"]);

      pageTimer["mask"] = setInterval(function () {
        if ($(".line-mask4").css("display") == "none") {
          $(".line-mask1,.line-mask2").hide();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask1").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").hide();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask3").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        } else {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        }
      }, 300)
    }
  }

  /*
*
* 加速踏板拖动动画
*
* */


  // accDrag(newLeft, oldLeft) {
  //   let speedListener = 0;
  //   let times = 0;
  //   //console.log("------------------------------------");
  //   //如果是往上滑动，就是减速，减速动画改变
  //   if ((this.gearPanelService.controlStalls == 1 || this.gearPanelService.controlStalls == 3) && this.dashboardService.stalls == 1 && this.gearPanelService.isBrake == 0 && this.gearPanelService.isDrag == 1) {
  //     if (newLeft == oldLeft) {
  //       if (this.gearPanelService.rackAcceleratorFun()) {
  //         this.gearPanelService.rackAcceleratorFun()
  //       }

  //       //return false;
  //     } else {
  //       if (oldLeft > newLeft) {
  //         if (this.gearPanelService.minusAcceleratorFun()) {
  //           this.gearPanelService.minusAcceleratorFun()
  //         }
  //         $(".block-slide1").show();
  //         $(".block-slide2").hide();
  //         //流向动力电池
  //         $(".line-flow1").hide();
  //         $(".line-flow2").show();
  //       } else {
  //         if (this.gearPanelService.addAcceleratorFun()) {
  //           this.gearPanelService.addAcceleratorFun()
  //         }
  //         $(".block-slide1").hide();
  //         $(".block-slide2").show();
  //         //流向动力电池
  //         $(".line-flow1").show();
  //         $(".line-flow2").hide();
  //       }
  //     }


  //   }
  // }


}
