import { Component, OnInit, NgZone, Input } from '@angular/core';
import { AppService } from '../../index/app.service';
import {
  Router,
} from '@angular/router';
@Component({
  selector: 'first-nav',
  providers: [
  ],
  templateUrl: './firstNav.component.html',
  styleUrls: ['./firstNav.component.scss']
})
export class FirstNavComponent implements OnInit {
  constructor(
    public appService: AppService,
    private zone: NgZone,
    private router: Router,
  ) {
  }
  ngOnInit() {

  }
}
