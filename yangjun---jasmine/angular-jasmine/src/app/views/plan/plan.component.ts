import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import {
  Router,
} from '@angular/router';
declare const $: any;

@Component({
  providers: [AppService
  ],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit, OnDestroy {
  constructor(
    public appService: AppService,
    private zone: NgZone,
    private router: Router,
  ) {
  }
  ngOnInit() {

  }
  ngOnDestroy() {
  }

}
