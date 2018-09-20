import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule }   from '@angular/forms';
import { AddComponent } from './containers/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule , PrestationsRoutingModule, FontAwesomeModule, SharedModule , FormsModule, ReactiveFormsModule
  ],
  declarations: [ListPrestationsComponent, PrestationComponent, FormComponent, AddComponent],
})
export class PrestationsModule { }
