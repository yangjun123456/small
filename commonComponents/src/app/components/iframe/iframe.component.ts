import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $;
@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html'
})

export class IframeComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit() {
        const getId = (id): any => {
            const frame = document.getElementById(id);
            return frame;
        };
        $('.prev')[0].addEventListener('click', () => {
            console.log(getId('frame'));
            getId('frame').contentWindow.postMessage({ 'eventType': 'prev' }, 'http://localhost:8888');
        });
        $('.next')[0].addEventListener('click', () => {
            console.log(getId('frame'));
            getId('frame').contentWindow.postMessage({ 'eventType': 'next' }, 'http://localhost:8888');
        });
    }
}
