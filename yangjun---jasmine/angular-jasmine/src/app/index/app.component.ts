
import {
  Router,
} from '@angular/router';
import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import Rx from 'rxjs/Rx';
class Hero {
  id: number;
  name: string;
}
require('./app.component.css');
declare var $: any;
@Component({
  selector: 'support-app',
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  intoNavPage: string = '';
  constructor(
    public appService: AppService,
    private router: Router,
  ) {
  }
  ngOnInit() {
  }
}


