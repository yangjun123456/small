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
    ])
  ],


);
