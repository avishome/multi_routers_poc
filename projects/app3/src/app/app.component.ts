import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { Location } from '@angular/common';

@Component({
  selector: 'app3-root',
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

  title = 'app3';

}