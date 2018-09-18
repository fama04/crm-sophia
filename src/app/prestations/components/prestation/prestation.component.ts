import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { State } from '../../../shared/enums/state.enum';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item :Prestation;
  public faTrashAlt = faTrashAlt;
  public states = Object.values(State);;

  constructor() { }

  ngOnInit() {
  }

}
