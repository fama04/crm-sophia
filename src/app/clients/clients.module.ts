import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './containers/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ClientRoutingModule,SharedModule, FontAwesomeModule, FormsModule ,ReactiveFormsModule
  ],
  declarations: [ListClientsComponent, ClientsComponent, FormComponent, FormComponent, AddComponent]
})
export class ClientsModule { }
