import { SpyLocation } from '@angular/common/testing';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'app1';
  url: string = ""; 
  updateUrl: any;
  subs: any = [];
  constructor(public location:SpyLocation, private router:Router){
    this.subs.push(singleSpaPropsSubject.subscribe(({updateUrl})=>{this.updateUrl = updateUrl}));
    this.location.onUrlChange(value=>
      {
        this.url = value;
        this.updateUrl && this.updateUrl(value);
      });
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub: any) => {
      sub && sub.unsubscribe()
    });
  }
  nav(url?: string){
    this.router.navigateByUrl(url as string);
  }
  back(){
    this.location.back();
  }
  forward(){
    this.location.forward();
  }
}
