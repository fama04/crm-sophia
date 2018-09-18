import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection :Prestation[];
  public headers : String[];

  constructor(private prestationService : PrestationService) { }


  ngOnInit() {
  this.collection = this.prestationService.collection;
  this.headers = [
'Type',
'Client',
'Nb Jours',
'Tjm HT',
'Total HT',
'Total TTC',
'Action',
'Delete'
  ]
  }

}
