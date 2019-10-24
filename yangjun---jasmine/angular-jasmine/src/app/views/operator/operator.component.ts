import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AppService } from '../../index/app.service';
import { DataResolverService } from '../../index/app.resolver';
import {
  Router,
} from '@angular/router';
declare const $: any;


@Component({
  selector: 'sgm-operator',
  providers: [AppService],
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']

})
export class OperatorComponent implements OnInit {

  constructor(
    public appService: AppService,
    private zone: NgZone,
    public dataResolverService: DataResolverService,
    private router: Router,
  ) {
  }

  ngOnInit() {


  }


}
