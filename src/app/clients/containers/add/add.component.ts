import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }
  public add(item :Client) : void{
    this.clientService.add(item);
    this.router.navigate(['clients']);
  }
}


