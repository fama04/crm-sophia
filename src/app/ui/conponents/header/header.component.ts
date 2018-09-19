import { Component, OnInit, OnChanges } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  public faBars = faBars;
  public faUser = faUser;
  public title = 'my crm';
  public open = true;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    console.log('open', this.open);
    this.open = !this.open;
  }

  ngOnChanges() {
    console.log('open', this.open);

  }
}
