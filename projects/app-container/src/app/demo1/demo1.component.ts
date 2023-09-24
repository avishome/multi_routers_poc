import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

declare const System: any;

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  customProps: Record<string, unknown> = {};
  customPropsDemo2: Record<string, unknown> = {};

  mountRootParcel = mountRootParcel;
  title = 'appContainer';
  async config() {
    return System.import('app2');
  }
  async configDemo2() {
    return System.import('app1');
  }
  
  closeDialog(event: any, dialogRef:any){
    dialogRef.close();
    event.preventDefault();
  }
  
}
