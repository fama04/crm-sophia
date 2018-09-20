import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private prestationService : PrestationService, private router :Router) { }

  ngOnInit() {
  }
  
  public add(item :Prestation) : void{
    this.prestationService.add(item).then(()=>{
      this.router.navigate(['prestations']);
    });
  }
}
