import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing';
import { LocationStrategy } from '@angular/common';
import { App2Page1Component } from './app2-page1/app2-page1.component';
import { App2Page2Component } from './app2-page2/app2-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Page1Component,
    App2Page2Component
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
