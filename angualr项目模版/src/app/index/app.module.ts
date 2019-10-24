import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
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
import { AppService, InternalStateType } from './app.service';
import { ApiService } from '../apiservice/api.service';
import { HttpService } from '../apiservice/http.service';
// 视图模版组件

import { HomeComponent } from '../views/home';
// import { Rxjs01Component } from './../views/rxjs/rxjs01.component';

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
  ApiService,
  HttpService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};
/**
 * `AppModule 主入口
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    XLargeDirective,
    PerfectScrollbarDirective,
    HaloDirective,
    HomeComponent,
    // Rxjs01Component,
  ],
  imports: [ // 引入angular模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // AppRoutingModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {


}
