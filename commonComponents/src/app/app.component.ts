import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import 'jquery.nicescroll';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  videoShow = ''; // 当前显示的是哪一个视频组件----切换视频时使用
  currentShowComponent = 'rxjs'; // 当前显示的是哪一个类型组件，video还是iframe还是rxjs
  ngOnInit() { }
  ngAfterViewInit() {
    this.niceScroll();
  }

  niceScroll() {
    $('.detail').niceScroll({
      cursorcolor: 'black',
      cursoropacitymax: 1,
      touchbehavior: false,
      cursorwidth: '3px',
      cursorborder: '0',
      cursorborderradius: '5px'
    });
  }

  currentShowVideo(param) {
    console.log(param);
    this.videoShow = param;
  }
  /**
   * @param param 当前显示的是哪一个组件，没有使用路由
   */
  switchShowComponent(param) {
    this.currentShowComponent = param;
  }
}
