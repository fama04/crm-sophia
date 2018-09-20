import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientState } from '../../../shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../../shared/models/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public states = Object.values(ClientState);
  public  newClient = new Client();
  public form: FormGroup;
  @Output() nItem : EventEmitter<Client> = new EventEmitter();
    constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

private createForm(){
  this.form = this.fb.group({
    'nom':[this.newClient.nom, Validators.compose([Validators.required,Validators.minLength(5)])],
    'adresse':[this.newClient.adresse, Validators.compose([Validators.required,Validators.minLength(5)])],
    'codePostal':[this.newClient.codePostal],  
      'ville':[this.newClient.ville],
      'tjm_ht':[this.newClient.tjm_ht]
  })
}


  public process(){
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }
isError(fcName: string){
  return this.form.get(fcName).invalid && this.form.touched;
}
}
