import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from './component/child2/child2.component';
import { Child3Component } from './component/child3/child3.component';

const routes: Routes = [
  {
    path: 'child2',
    component: Child2Component
  },
  {
    path: 'child3',
    component: Child3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
