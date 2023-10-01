import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { SpyLocation } from '@angular/common/testing';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';


@Component({
  selector: 'app4-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnDestroy {
  constructor(public location:SpyLocation, private router:Router, private contexts: ChildrenOutletContexts){
    this.subs.push(singleSpaPropsSubject.subscribe(({updateUrl})=>{this.updateUrl = updateUrl}));
    this.location.onUrlChange(value=>
      {
        this.url = value;
        this.updateUrl && this.updateUrl(value);
      });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  url: string = ""; 
  updateUrl: any;
  subs: any = [];

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
