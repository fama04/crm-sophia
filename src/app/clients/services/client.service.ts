import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client';
import { fakecollection } from './fakecollection';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

   _collection$: Observable<Client[]>;
  itemsCollection: AngularFirestoreCollection<Client>;
  constructor(private afs: AngularFirestore ) {
   // this.collection = fakecollection;
   this.itemsCollection = afs.collection<Client>('clients');
 this._collection$ = this.itemsCollection.valueChanges().pipe(
     map((data) => {
       const tab = [];
       data.forEach((obj) => {
         tab.push(new Client(obj));
       });
       return tab;
     }));
  }
  //get collection
  getColletion(): Observable<Client[]> {
    return this._collection$;
  }
  get collection(): Observable<Client[]> {
    return this._collection$
  }
  set collection(col: Observable<Client[]>) {
    this._collection$ = col;
  }
  add(item:Client){
    console.log("service");

  }
}
