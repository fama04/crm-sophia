import { Component, OnInit, Input } from '@angular/core';
import { RowModel } from '../../models/row-model';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
@Input() listHeaders: String[];
@Input() lastRow :RowModel;

  constructor() { 
    console.log(this.listHeaders);
  }

  ngOnInit() {
  }

}
