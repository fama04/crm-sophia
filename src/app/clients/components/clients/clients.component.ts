import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @Input() item :Client;
  public faTrashAlt = faTrashAlt;

  constructor(
    private prestationService: ClientService
  ) { }

  ngOnInit() {
  }

}
