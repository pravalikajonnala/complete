import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Branch1Component } from './branch1/branch1.component';

const routes: Routes = [
  {path:'branch1',component:Branch1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
