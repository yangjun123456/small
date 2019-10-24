import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeComponent } from './iframe.component';
import { IframeService } from './iframe.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [IframeComponent],
    providers: [IframeService],
    exports: [IframeComponent]
})
export class IframeModule { }
