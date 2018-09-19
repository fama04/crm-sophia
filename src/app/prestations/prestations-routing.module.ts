import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
const appRoutes: Routes = [
  {
    path: '',
    component : ListPrestationsComponent,
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
