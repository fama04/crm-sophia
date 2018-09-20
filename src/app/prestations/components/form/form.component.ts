import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientState } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationI } from '../../../shared/interfaces/prestation-i.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
public states = Object.values(State);
public  newPresta = new Prestation();
public form: FormGroup;
@Output() nItem : EventEmitter<Prestation> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

private createForm(){
  this.form = this.fb.group({
    'typePresta':[this.newPresta.typePresta, Validators.compose([Validators.required,Validators.minLength(5)])],
    'client':[this.newPresta.typePresta, Validators.compose([Validators.required,Validators.minLength(5)])],
    'nb_jours':[this.newPresta.nb_jours],  
      'tjm_ht':[this.newPresta.tjm_ht],
      'state':[this.newPresta.state]
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
