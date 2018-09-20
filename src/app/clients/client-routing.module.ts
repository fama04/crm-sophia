import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { AddComponent } from './containers/add/add.component';
const appRoutes: Routes = [
  {
    path: '',
    component :ListClientsComponent ,
  },{
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
export class ClientRoutingModule { }
