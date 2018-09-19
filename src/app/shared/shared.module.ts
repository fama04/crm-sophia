import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule, RouterModule
  ],
  declarations: [TotalPipe, TableauComponent],
  exports :[TotalPipe, TableauComponent]
})
export class SharedModule { }
