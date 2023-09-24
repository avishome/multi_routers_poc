import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App3page1Component } from './app3page1/app3page1.component';
import { App3page2Component } from './app3page2/app3page2.component';

const routes: Routes = [
  {path: 'app3page1', component: App3page1Component},
  {path: 'app3page2', component: App3page2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
