import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { 
  HeaderComponent,
  DeviceThumbnailComponent } from './component';

import { DeviceService } from './service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeviceThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DeviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
