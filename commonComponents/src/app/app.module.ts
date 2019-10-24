import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IframeModule } from './components/iframe/iframe.module';
import { RXjsModule } from './components/rxjs/rxjs.module';



import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/index';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    IframeModule,
    RXjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
