import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item :Prestation;
  public faTrashAlt = faTrashAlt;
  public states = Object.values(State);;

  constructor(
    private prestationService: PrestationService,
    private router : Router
  ) { }

  ngOnInit() {
  }
public update(event):void{
  const state = event.target.value;
this.prestationService.update(this.item, state).then(()=>{
  this.item.state= state;
});
}

public delete():void{
this.prestationService.delete(this.item).then((data)=>{
  // display message or redirect to a route
})
}
public getPrestation(id: string): Observable<Prestation> {
 // return this.itemsCollection.doc<Prestation>(id).valueChanges();
  //return this.http.get(`urlaspi/prestations/${id}`);
  return null;
}
public edit(){
this.router.navigate(['prestation/edit', this.item.id]);
}
}
