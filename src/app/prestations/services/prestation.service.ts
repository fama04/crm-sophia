import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakecollection } from './fakecollection';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
private _collection: Prestation[];
  constructor() { 
    this.collection = fakecollection;
  }
  //get collection
  getColletion():Prestation[]{
    return this.collection;
  }
  get collection() : Prestation[] {
    return this._collection
  }
  set collection( col: Prestation[]){
    this._collection = col;
  }
  // modify collection
  
  // ad item in collection 
  // delete item in collection 
  // maj item in collection 
  // recup item by id
}
