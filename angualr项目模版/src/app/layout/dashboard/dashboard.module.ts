import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
    ],
    // providers: [AuthGuard]
})
export class DashboardModule { }
