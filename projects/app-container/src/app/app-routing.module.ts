import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo3Component } from './demo3/demo3.component';
import { Demo1Component } from './demo1/demo1.component';


const routes: Routes = [
  {path: 'demo3', component: Demo3Component},
  {path: 'demo1', component: Demo1Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
