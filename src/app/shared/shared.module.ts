import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { StateDirective } from './directives/state.directive';
import { CodePostalPipe } from './pipes/code-postal.pipe';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule, RouterModule
  ],
  declarations: [TotalPipe, TableauComponent, StateDirective, CodePostalPipe],
  exports :[TotalPipe, TableauComponent, StateDirective]
})
export class SharedModule { }
