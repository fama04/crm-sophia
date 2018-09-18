import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  imports: [
    CommonModule , PrestationsRoutingModule, FontAwesomeModule
  ],
  declarations: [ListPrestationsComponent, PrestationComponent],
})
export class PrestationsModule { }
