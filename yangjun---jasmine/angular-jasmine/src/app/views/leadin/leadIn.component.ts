import { Component, OnInit, NgZone, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn, halo } from '../../animations';
import { DataResolverService } from '../../index/app.resolver';
import { leadInConfig as dataMock } from './leadin.mock';
import {
  Router,
} from '@angular/router';
declare const $: any;


@Component({
  providers: [AppService
  ],
  templateUrl: './leadIn.component.html',
  styleUrls: ['./leadIn.component.scss'],
  animations: [
    flyIn,
    halo,
  ],
})




export class LeadInComponent implements OnInit, OnDestroy {
  isOn = false;
  title = 'yang';

  @Input() hero;
  @Output() selected = new EventEmitter();
  click() { this.selected.emit(this.hero); }

  constructor(
    private appService: AppService,
    private router: Router,
  ) {
  }
  ngOnInit() {

  }
  ngOnDestroy() {
  }
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
