import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './conponents/header/header.component';
import { NavComponent } from './conponents/nav/nav.component';
import { FooterComponent } from './conponents/footer/footer.component';
import { PrestationsModule } from '../prestations/prestations.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule, RouterModule
  ],
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent]
})
export class UiModule { }
