import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Branch1Component } from './branch1/branch1.component';
import { Branch2Component } from './branch2/branch2.component';

const routes: Routes = [
  {path: 'branch1', component: Branch1Component},
  {path: 'branch2', component: Branch2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
