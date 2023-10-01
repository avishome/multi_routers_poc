import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParcelModule } from 'single-spa-angular/parcel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo3Component,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    ParcelModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
