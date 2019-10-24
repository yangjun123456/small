import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { infoConfig as dataMock } from './info.mock';
import { DataResolverService } from '../../index/app.resolver';
import {
  Router,
} from '@angular/router';
import { parse } from 'path';
declare const $: any;

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [AppService],
})
export class InfoComponent implements OnInit {

  constructor(
    public appService: AppService,
    private zone: NgZone,
    public dataResolverService: DataResolverService,
    private router: Router,
  ) {
  }
  // 页面加载显示上次浏览进度
  ngOnInit() {
  }

}
