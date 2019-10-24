import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
} from '@angular/core';

export const flyIn = trigger('flyIn',
  [
    state('speed700', style({
      transform: 'rotate(33deg)'
    })),
    transition('* => speed700', animate('1s ease-in')),

    state('watercenter', style({
      transform: 'rotate(100deg)'
    })),
    transition('* => watercenter', animate('1s linear')),

    state('oilcenter', style({
      transform: 'rotate(90deg)'
    })),
    transition('* => oilcenter', animate('1s linear')),



    transition('* => fadeIn', [
      animate('500ms linear', keyframes([
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),

    transition('* => fadeInTwo', [
      animate('2s linear', keyframes([
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),

    transition('* => fadeOut', [
      animate('500ms linear', keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
      ])),
    ]),


    transition('* => 25du', [
      animate('2000ms linear', keyframes([
        style({ height: '210px', }),
        style({ height: '178px', }),
      ])),
    ]),

    transition('* => 12du', [
      animate('500ms linear', keyframes([
        style({ height: 210, }),
        style({ opacity: 151, }),
      ])),
    ])
  ],


);
