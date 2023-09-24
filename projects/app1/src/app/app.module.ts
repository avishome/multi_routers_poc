import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy, SpyLocation, provideLocationMocks } from '@angular/common/testing';
import { App1Page1Component } from './app1-page1/app1-page1.component';
import { App1Page2Component } from './app1-page2/app1-page2.component'
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    App1Page1Component,
    App1Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SpyLocation,
    {provide: Location, useExisting: SpyLocation},
    {provide: LocationStrategy, useClass: MockLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
