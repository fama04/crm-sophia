import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakecollection } from './fakecollection';
import { State } from '../../shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // items: Observable<Prestation[]>;
  constructor(private afs: AngularFirestore,
  private http :HttpClient) {
    // this.collection = fakecollection;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        const tab = [];
        data.forEach((obj) => {
          tab.push(new Prestation(obj));
        });
        return tab;
      }));
      // this.collection$ = this.http.get<Prestation[]>('url_api/prestations').pipe(
      //   map((data) => {
      //     const tab = [];
      //     data.forEach((obj) => {
      //       tab.push(new Prestation(obj));
      //     });
      //     return tab;
      //   }));
      // this.collection$ = this.http.get<Prestation[]>('url_api/prestations')
  }
  //get collection
  getColletion(): Observable<Prestation[]> {
    return this.collection$;
  }
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }
 

    // add presta
    add(item: Prestation): Promise<any> {
      const id = this.afs.createId();
      const prestation = { id, ...item };
      return this.itemsCollection.doc(id).set(prestation).catch((e) => {
        console.log(e);
      });
      // return this.http.post('urlapi/prestations', item);
    }

    update(item: Prestation, option?: State): Promise<any> {
      const presta  = {...item};
      if (option) {
        presta.state = option;
      }
      return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
        console.log(e);
      });
      // return this.http.patch('urlapi/prestations/'+item.id, presta);
    }
  
    public delete(item: Prestation): Promise<any> {
      return this.itemsCollection.doc(item.id).delete().catch((e) => {
        console.log(e);
      });
      // return this.http.delete(`urlapi/prestations/${item.id}`);
    }
  // modify collection

  // ad item in collection 
  // delete item in collection 
  // maj item in collection 
  // recup item by id
}
