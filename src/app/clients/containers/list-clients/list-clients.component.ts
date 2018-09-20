import { Component, OnInit } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { RowModel } from '../../../shared/models/row-model';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../../services/client.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
public collection$ : Observable<Client[]>;
public headers : String[];
public row: RowModel;
public faTrashAlt= faTrashAlt;

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.collection$ =this.clientService._collection$;
    this.headers = [
      'nom',
      'adresse',
      'codePostal',
      'ville',
      'tjm_ht',
      'Delete'
    ];

    this.row = {
      route: 'add',
      libelle: 'Ajouter une prestation',
      icon: faPlusCircle
    }

  }

}
