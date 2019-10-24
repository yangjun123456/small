import {
    Component,
    Input,
    Output,
    OnInit,
    HostListener,
    Directive,
    ElementRef,
    Renderer,
    EventEmitter,
    DoCheck,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
/*
 * 指令
 * 设置元素的自定义属性，动态传值方式差值表达式不能添加到自定义属性上
 */
@Directive({
    selector: '[addText]'
})
export class AddTextDirective implements OnInit {
    @Input('addText') addText;
    constructor(private element: ElementRef, private renderer: Renderer) {
    }
    ngOnInit() {
        console.log(this.addText);
        console.log(/left/.test(this.addText[0]['answerID']))
        if (this.addText[1] === 'left' && /left/.test(this.addText[0]['answerID'])) {
            this.element.nativeElement.innerHTML = this.addText[0]['answer'];
        } else if (this.addText[1] === 'right' && /right/.test(this.addText[0]['answerID'])) {
            this.element.nativeElement.innerHTML = this.addText[0]['answer'];
        }
    }
}

