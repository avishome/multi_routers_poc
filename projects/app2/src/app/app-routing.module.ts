import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2Page1Component } from './app2-page1/app2-page1.component';
import { App2Page2Component } from './app2-page2/app2-page2.component';

const routes: Routes = [
  {path: 'app2page1', component: App2Page1Component},
  {path: 'app2page2', component: App2Page2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
