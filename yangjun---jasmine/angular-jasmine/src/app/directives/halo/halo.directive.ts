import {
  Component,
  Input,
  Output,
  HostListener,
  Directive,
  ElementRef,
  Renderer,
  EventEmitter,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {animationOn} from '../../../app-config.animation';

@Directive({
  selector: '[halo]' // 用 [ ] 代表 属性
})
export class HaloDirective implements OnChanges {
  animation;
  @Input('halo')halo: any;
  @Output()cancelAnimation = new EventEmitter < void > ();
  constructor(private element: ElementRef, renderer: Renderer) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges'); console.log(changes);
    const chng = changes['halo'];
    let cur = chng.currentValue;
    let prev = chng.previousValue;
    // console.log(cur); console.log(prev);
    if (cur === prev) {
      // console.log('meiy');
      return;
    }
    if (this.halo) {
      setTimeout(() => {
        if (this.animation)
          this.animation.cancel();
        this.animation = this.startHalo(this.halo);
      }, 15);
    } else {
      if (this.animation)
        this.animation.cancel();
      };
  }
  private startHalo(halo: string) {
    const elem: any = this.element.nativeElement;
    if (animationOn[this.halo])
      return elem.animate(animationOn[this.halo].keyframes, animationOn[this.halo].options);
    }
  }
