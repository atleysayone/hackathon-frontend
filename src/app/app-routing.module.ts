import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewListComponent }  from './products/list.component';




const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
      path: 'list',
      component: NewListComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
