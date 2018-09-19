import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, ClientRoutingModule,SharedModule, FontAwesomeModule
  ],
  declarations: [ListClientsComponent, ClientsComponent]
})
export class ClientsModule { }
