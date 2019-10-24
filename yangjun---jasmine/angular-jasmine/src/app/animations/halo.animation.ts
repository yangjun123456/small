import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
} from '@angular/core';


export const halo = trigger('haloless',

  [
    transition('* => void',
      [
        animate('1s linear', keyframes([
          style({ opacity: 1, }),
          style({ opacity: 0.2, }),
        ])),
        animate('1s linear', keyframes([
          style({ opacity: 0.2, }),
          style({ opacity: 1, }),
        ])),
      ]
    ),
  ],
);
export const open = trigger('open',

  [
    transition('void => *',
      [
        animate('1s linear', keyframes([
          style({ width: '0px', }),
          style({ width: '500px', }),
        ])),
      ]
    ),
  ],
);
export const close = trigger('close',

  [
    transition('void=> *',
      [
        animate('1s linear', keyframes([
          style({ width: '500px', }),
          style({ width: '0px', }),
        ])),
      ]
    ),
  ],
);

export const wendujiHeight = trigger('wendujiHeight',


  [
    state('wendujiHeight', style({ height: '157px', })),
    state('wendujiHeight2', style({ height: '134px', })),

    transition('* => wendujiHeight', animate('10s ease-in')),
    transition('* => wendujiHeight2', animate('10s ease-in')),

    // transition('* => wendujiHeight',
    //   [
    //     animate('10s linear', keyframes([
    //       style({ height: '184px', }),
    //       style({ height: '157px', }),
    //     ])),
    //   ]
    // ),
    // transition('* => wendujiHeight2',
    //   [
    //     animate('10s linear', keyframes([
    //       style({ height: '184px', }),
    //       style({ height: '134px', }),
    //     ])),
    //   ]
    // ),
    transition('* => wendujiHeight3',
      [
        animate('15s linear', keyframes([
          style({ height: '203px' }),
          style({ height: '129px' }),
        ])),
      ]
    ),
    transition('* => wendujiHeight4',
      [
        animate('15s linear', keyframes([
          style({ height: '193px' }),
          style({ height: '141px' }),
        ])),
      ]
    ),
    transition('* => wendujiHeight5',
      [
        animate('15s linear', keyframes([
          style({ height: '203px' }),
          style({ height: '129px' }),
        ])),
      ]
    ),
  ],
);

export const xuanniu = trigger('xuanniu',

  [
    transition('* => ToMax',
      [
        animate('1s linear', keyframes([
          style({ transform: 'rotate(-65deg)', }),
          style({ transform: 'rotate(200deg)', }),
        ])),
      ]
    ),
    transition('* => ToMin',
      [
        animate('1s linear', keyframes([
          style({ transform: 'rotate(200deg)', }),
          style({ transform: 'rotate(-65deg)', }),
        ])),
      ]
    ),
  ],
);


export const greenFlash = trigger('greenFlash',

  [
    transition('* => grow',
      [
        animate('800 linear', keyframes([
          style({
            borderColor: '#393',
            boxShadow: '0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #fff'
          }),
          style({
            borderColor: '#6f6',
            boxShadow: '0 0 20px rgba(0,255,0,.7), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #fff'
          }),
        ]))
      ]
    ),
  ],
);
