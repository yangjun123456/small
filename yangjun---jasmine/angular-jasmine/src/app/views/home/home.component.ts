import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';
import {
  Router,
} from '@angular/router';

declare let $: any;
@Component({
  selector: 'yun-home',
  providers: [
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infoactive: string = '';
  constructor(
    public appService: AppService,
    private zone: NgZone,
    private router: Router,
  ) {
  }



  // 生命周期钩子函数
  ngOnInit() { }
}
