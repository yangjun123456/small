import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
// import { HttpService, ApiService } from './../service/index';

@NgModule({
    imports: [
        CommonModule,
        // NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        // TranslateModule
    ],
    declarations: [
        LayoutComponent,
    ],
    providers: [
        // HttpService,
        // ApiService
    ]
})
export class LayoutModule { }
