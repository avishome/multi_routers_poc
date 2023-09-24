import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParcelModule } from 'single-spa-angular/parcel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo1Component } from './demo1/demo1.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo3Component,
    Demo1Component
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
