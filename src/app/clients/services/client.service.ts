import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client';
import { fakecollection } from './fakecollection';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: Client[];
  constructor() {
    this.collection = fakecollection;
  }
  //get collection
  getColletion(): Client[] {
    return this.collection;
  }
  get collection(): Client[] {
    return this._collection
  }
  set collection(col: Client[]) {
    this._collection = col;
  }
}
