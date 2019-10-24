import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

/*
 * 平台和环境引入
 */
import { ENV_PROVIDERS } from '../environment';
import { ROUTES } from './app.routes';
// 最外层的组件
import { AppComponent } from './app.component';
import { DataResolverService } from './app.resolver';
import { AppService } from './app.service';
// 视图模版组件
import { CheckComponent } from '../views/check';

import { HomeComponent } from '../views/home';
import { FirstNavComponent } from '../views/firstPageNav';

import { InfoComponent } from '../views/info';
import { OperatorComponent } from '../views/operator';
import { PlanComponent } from '../views/plan';

import { LeadInComponent } from '../views/leadin';

import { MainContentComponent, MainContentService } from '../views/main_content';

/**
 * 指令
 */
import { XLargeDirective } from '../directives/x-large';
import { HaloDirective } from '../directives/halo';
import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';


// 应用的一些功能提供商
const APP_PROVIDERS = [
  DataResolverService,
  AppService,
  MainContentService,
];

/**
 * `AppModule 主入口
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    FirstNavComponent,
    AppComponent,
    CheckComponent,
    HomeComponent,
    InfoComponent,
    OperatorComponent,
    PlanComponent,
    LeadInComponent,
    MainContentComponent,
    XLargeDirective,
    PerfectScrollbarDirective,
    HaloDirective,
  ],
  imports: [ // 引入angular模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {


}
