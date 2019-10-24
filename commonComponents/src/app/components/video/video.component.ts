import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: [],
  animations: []
})
export class VideoComponent implements OnInit, OnDestroy {
  videojsScriptNum = 0;
  @Input() data: any;
  constructor() { }
  ngOnInit() {

    // console.log($('body script'));
    // Array.from($('body script')).filter((i, iIndex) => {
    //   const iClass = $(i).attr('class');
    //   return iClass && iClass.indexOf('videojsScript') !== -1;
    // }).map((k, kIndex) => {
    //   this.videojsScriptNum++;
    // });
    // $('body').append(`<script class="videojsScript${this.videojsScriptNum}" src="./assets/videojs/video.min.js"></script>`);
    $(`.videojsScript`).remove();
    $('body').append(`<script class="videojsScript" src="./assets/videojs/video.min.js"></script>`);
    // console.log(this.videojsScriptNum);
  }
  ngOnDestroy() {
    // $(`.videojsScript${this.videojsScriptNum}`).remove();
    if ($('body video').length === 0) {
      $(`.videojsScript`).remove();
    }
  }

}
