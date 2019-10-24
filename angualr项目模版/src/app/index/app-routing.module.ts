import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../views/home';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'rxjs01', component: Rxjs01Component },

    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    {
        path: 'layout',
        loadChildren: '../layout/layout.module#LayoutModule',
        // canActivate: [AuthGuard]
    },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            useHash: true,
            // enableTracing: true
        })],   // 静态使用
    // imports: [RouterModule.forRoot(routes)],                   // 服务器使用
    // declarations: [Test01Component],
    exports: [RouterModule],
    // providers: [AuthGuard]

})
export class AppRoutingModule { }
