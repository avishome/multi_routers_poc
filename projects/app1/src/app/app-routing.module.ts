import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Page1Component } from './app1-page1/app1-page1.component';
import { App1Page2Component } from './app1-page2/app1-page2.component';

const routes: Routes = [
  {path: 'app1page1', component: App1Page1Component},
  {path: 'app1page2', component: App1Page2Component},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
