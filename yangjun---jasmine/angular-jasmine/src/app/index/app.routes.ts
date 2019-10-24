import { Routes } from '@angular/router';
import { InfoComponent } from '../views/info';
import { OperatorComponent } from '../views/operator';
import { PlanComponent } from '../views/plan';
import { CheckComponent } from '../views/check';
import { LeadInComponent } from '../views/leadin';

export const ROUTES: Routes = [
  { path: 'leadIn', component: LeadInComponent },
  { path: 'info', component: InfoComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'operator', component: OperatorComponent },
  { path: 'check', component: CheckComponent },
  { path: '', redirectTo: 'leadIn' , pathMatch: 'full'},
];
