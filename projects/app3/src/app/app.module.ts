import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App3page1Component } from './app3page1/app3page1.component';
import { App3page2Component } from './app3page2/app3page2.component';
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing';
import { LocationStrategy } from '@angular/common';
import { Location } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    App3page1Component,
    App3page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: Location, useClass: SpyLocation},
    {provide: LocationStrategy, useClass: MockLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
