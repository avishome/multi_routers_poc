import { Component , OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mountRootParcel } from 'single-spa';
declare const System: any;

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnDestroy {
  customProps: Record<string, unknown> = {updateUrl: this.updateUrl.bind(this,"app2")};
  customPropsDemo2: Record<string, unknown> = {updateUrl: this.updateUrl.bind(this,"app3")};
  sub: any;
  constructor(private router: Router, private route: ActivatedRoute){
    this.sub = this.route.queryParams.subscribe(v=>{
      this.customProps = {...this.customProps};
      this.customPropsDemo2 = {...this.customPropsDemo2};
      this.customProps['url'] = v['app2']; 
      this.customPropsDemo2['url'] = v['app3']; 
  })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  mountRootParcel = mountRootParcel;
  title = 'appContainer';
  async config() {
    return System.import('app2');
  }
  async configDemo2() {
    return System.import('app3');
  }
  updateUrl(app:string, url: string){
    this.router.navigate([],{queryParams: {[app]: url}, queryParamsHandling: 'merge', relativeTo: this.route})
  }
}
