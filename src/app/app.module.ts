import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { 
  HeaderComponent,
  DeviceThumbnailComponent } from './component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeviceThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
