import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Http, Headers, Jsonp } from '@angular/http';
// import {
//     NgbCarouselModule,
//     NgbAlertModule
// } from '@ng-bootstrap/ng-bootstrap';

import { FirstPageRoutingModule } from './firstPage-routing.module';
import { FirstPageComponent } from './firstPage.component';

// import { FirstPageService } from './firstPage.service';

@NgModule({
    imports: [
        CommonModule,
        // NgbCarouselModule.forRoot(),
        // NgbAlertModule.forRoot(),
        FirstPageRoutingModule,
        // StatModule,
        FormsModule
    ],
    declarations: [
        FirstPageComponent,
    ],
    providers: [
    ]
})
export class FirstPageModule { }
