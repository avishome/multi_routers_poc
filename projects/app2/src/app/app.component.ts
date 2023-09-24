import { Component, OnDestroy, OnInit } from '@angular/core';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  updateUrl: any;
  url: any;
  subs: any = [];
  constructor(public location:Location, private router:Router){
    this.subs.push(singleSpaPropsSubject.subscribe(({updateUrl})=>{
      updateUrl && (this.updateUrl = updateUrl)}
    ));
    this.subs.push(singleSpaPropsSubject.subscribe(({url})=> {
      url && this.router.navigate([`/${url}`])
    }));
    (this.location.onUrlChange(value=>
      {
        this.url = value;
        this.updateUrl && this.updateUrl(value);
      }));
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub: any) => {
      sub && sub.unsubscribe()
    });
  }

  title = 'app2';

}
