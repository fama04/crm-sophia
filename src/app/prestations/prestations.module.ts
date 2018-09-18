import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule , PrestationsRoutingModule, FontAwesomeModule
  ],
  declarations: [ListPrestationsComponent],
})
export class PrestationsModule { }
