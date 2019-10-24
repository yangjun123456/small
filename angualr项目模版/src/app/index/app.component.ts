
import {
  Router,
} from '@angular/router';
import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ApiService } from '../apiservice/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import Rx from 'rxjs/Rx';


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
    public apiservice: ApiService

  ) {
  }

  ngOnInit() {
    this.apiservice.getHeroes();
    // 始  ajax get

    // $.ajax({
    //   type: 'get',
    //   url: 'app/apiservice/test.json',
    //   data: 'username = " + $("#TxtUserName").val().toString() + "& pwd=" + $("#TxtPassword").val().toString()',
    //   dataType: 'json',
    //   success: function (data) {
    //     console.log(data);
    //   },
    //   error: function () {
    //     alert('1');
    //   }
    // });

    // 终
    const _this = this;

    // 始 ajax  jsonp
    //   $.ajax({
    //     type: 'get',
    //     url: 'http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=关键字&bk_length=600',
    //     data: 'username = " + "& pwd=" ',
    //     dataType: 'jsonp',
    //     callback: 'jsonpCallbackT1',
    //     success: function (json, data) {

    //     },
    //     error: function () {
    //       alert('1');
    //     }
    //   });

    // }
    // jsonpCallbackT1(json, data) {
    //   console.log(json, data);
    // }
    // 终


    // $("button").click(function () {
    //   $.post("http://www.runoob.com/try/ajax/jsonp.php",
    //     {
    //       name: "Donald Duck",
    //       city: "Duckburg"
    //     },
    //     function (data, status) {
    //       alert("Data: " + data + "\nStatus: " + status);
    //     });
    // });

    // $.getJSON("http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?", function (data) {
    //   console.log(data);
    // });

    // async () => {
    //   try {
    //     let response = await fetch("http://www.runoob.com/try/ajax/jsonp.php");
    //     let data = await response.json()
    //     //文章中这里漏了await，因为response.json()后需要.then才能接收data
    //     alert(1);
    //     console.log(data);
    //   } catch (e) {
    //     alert(2);
    //     console.log("Oops, error", e);
    //   }
    // }

    this.abc();
  }

  async abc() {
    fetch("app/apiservice/test.json").then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log(data);
    }).catch(function (e) {
      // console.log("Oops, error");
    });
  }



}





