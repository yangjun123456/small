import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import {
  Router,
} from '@angular/router';
declare const $: any;

@Component({
  selector: 'main-content',
  providers: [
  ],
  templateUrl: './mainContent.component.html',
  styleUrls: ['./mainContent.component.scss']
})

export class MainContentComponent implements OnInit, OnDestroy {
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
