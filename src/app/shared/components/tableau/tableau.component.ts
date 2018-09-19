import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RowModel } from '../../models/row-model';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  // supprimer le shadowDom
  encapsulation : ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
@Input() listHeaders: String[];
@Input() lastRow :RowModel;
@Input() center;

  constructor() { 
    console.log(this.listHeaders);
  }

  ngOnInit() {
  }

}
