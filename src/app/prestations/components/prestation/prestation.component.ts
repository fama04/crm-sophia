import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';


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
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
  }
public update(event):void{
  const state = event.target.value;
this.prestationService.update(this.item, state);
}
}
