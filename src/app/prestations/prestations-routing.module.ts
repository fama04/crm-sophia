import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { AddComponent } from './containers/add/add.component';
const appRoutes: Routes = [
  {
    path: '',
    component : ListPrestationsComponent,
  },
  {
    path: 'add',
    component : AddComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports:[RouterModule]
})
export class PrestationsRoutingModule { }
