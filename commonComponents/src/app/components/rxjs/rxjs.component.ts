import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { map, take } from 'rxjs/operators';
@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
})

export class RXjsComponent implements OnInit {
    birthday = new Date(1988, 3, 15); // April 15, 1988
    constructor() { }
    ngOnInit() {
        // const button = document.querySelector('button');
        // Rx.Observable.fromEvent(button, 'click')
        //     .subscribe(() => console.log('Clicked!'));
    }
}
