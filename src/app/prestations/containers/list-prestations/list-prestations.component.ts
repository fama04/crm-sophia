import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { RowModel } from '../../../shared/models/row-model';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit , OnDestroy{

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: String[];
  public row: RowModel;
  //private sub :Subscription;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
  //  this.sub =  this.prestationService.collection$.subscribe((data) =>{
  //     this.collection = data;
  //     console.log("data",data);
  //   });
    
   this.collection$ = this.prestationService.collection$;
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action',
      'Delete'
    ];
    this.row = {
      route: 'add',
      libelle: 'Ajouter une prestation',
      icon: faPlusCircle
    }
  }
ngOnDestroy(){
  //this.sub.unsubscribe();
}
}
