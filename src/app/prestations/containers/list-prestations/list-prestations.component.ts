import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection :Prestation[];
  public faTrashAlt = faTrashAlt;
  constructor(private prestationService : PrestationService) { }


  ngOnInit() {
  this.collection = this.prestationService.collection;
  }

}
