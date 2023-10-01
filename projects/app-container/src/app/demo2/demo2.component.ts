import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

declare const System: any;

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  customPropsDemo2: Record<string, unknown> = {};
  mountRootParcel = mountRootParcel;

  async configDemo2() {
    return System.import('app4');
  }
}
