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
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppService } from './app.service';
// 视图模版组件

/**
 * 内部小组件
 */
import { CloseWindowComponent, CloseWindowService } from '../components/close_window';
import { ImageComponent } from '../components/image';
import { ImageMouseEnterComponent } from '../components/image_mouseEnter';
import { ButtonComponent } from '../components/button';
import { ButtonClickComponent } from '../components/buttonClick';
import { ButtonLeeComponent } from '../components/buttonLee';
import { ButtonTipComponent } from '../components/buttonTip';
import { TextComponent } from '../components/text';
import { LineComponent } from '../components/line';
import { OverlayComponent } from '../components/overlay';
import { ArrowComponent } from '../components/arrow';
import { PrompComponent } from '../components/promp';
import { SwiperComponent } from '../components/swiper';
import { InputComponent } from '../components/input';
import { JumpComponent } from '../components/jump';
import { HeaderComponent } from '../components/header';
import { SelectUpComponent } from '../components/selectUp';

import { CommonPromptComponent, CommonPromptService } from '../components/common_prompt';

import { PopupComponent, PopupService } from '../components/popup';
import { AudioComponent, AudioService } from '../components/audio';
import { ControlCenterComponent, ControlCenterService } from '../components/control_center';
import { SideBarToolComponent } from '../components/sidebar_tool';
import { HandleErrorComponent, HandleErrorService } from '../components/handle_error';
import { DashboardComponent, DashboardService } from '../components/dashboard';
import { GearPanelComponent, GearPanelService } from '../components/gear_panel';
import { SimulationService } from '../components/simulation';
import { ObdscanComponent, ObdscanService } from '../components/obdscan';
import { MultimeterComponent, MultimeterService } from '../components/multimeter';
import { CommunicationService } from '../components/communication';
/**
 * 指令
 */
import { XLargeDirective } from '../directives/x-large';
import { HaloDirective } from '../directives/halo';
import { FocusDirective } from '../directives/focus';
import { Ficker1Directive, Ficker2Directive } from '../directives/ficker';
import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';
import { CustomAttributeDirective } from '../directives/custom_attribute';
import { AddTextDirective } from '../directives/addText';

/**
 * 内部小组件
 */



// 应用的一些功能提供商
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppService,
  CloseWindowService,
  AudioService,
  PopupService,
  ControlCenterService,
  SimulationService,
  CommunicationService,
  GearPanelService,
  MultimeterService,
  ObdscanService,
  DashboardService,
  HandleErrorService,
  CloseWindowService,
  CommonPromptService,
];

type StoreType = {
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

    PopupComponent,
    AudioComponent,
    ControlCenterComponent,
    SideBarToolComponent,
    HandleErrorComponent,
    GearPanelComponent,
    DashboardComponent,
    ObdscanComponent,
    MultimeterComponent,
    CloseWindowComponent,


    ImageComponent,
    ImageMouseEnterComponent,
    ButtonComponent,
    ButtonClickComponent,
    ButtonLeeComponent,
    ButtonTipComponent,
    SwiperComponent,
    TextComponent,
    LineComponent,
    OverlayComponent,
    // PaginationComponent,
    CloseWindowComponent,
    InputComponent,
    JumpComponent,
    ObdscanComponent,
    DashboardComponent,
    CommonPromptComponent,
    HeaderComponent,
    SelectUpComponent,

    XLargeDirective,
    PerfectScrollbarDirective,
    // SwiperDirective,
    HaloDirective,
    ArrowComponent,
    PrompComponent,
    FocusDirective,
    Ficker1Directive,
    Ficker2Directive,
    CustomAttributeDirective,
    AddTextDirective,
  ],
  imports: [ // 引入angular模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserAnimationsModule,
    // MaterialModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {


}
