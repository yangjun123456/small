import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { checkConfig as dataMock } from './check.mock';
import { flyIn, halo } from '../../animations';
import { DataResolverService } from '../../index/app.resolver';
import {
  Router,
} from '@angular/router';
declare const $: any;

@Component({
  selector: 'sgm-check',
  providers: [AppService],
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  animations: [
    flyIn,
    halo,
  ],
})
export class CheckComponent implements OnInit, OnDestroy {

  constructor(
    public appService: AppService,
    private zone: NgZone,
    public dataResolverService: DataResolverService,
    private router: Router,
  ) {
  }
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}

