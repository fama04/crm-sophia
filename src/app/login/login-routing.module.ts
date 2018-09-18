import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]

})
export class LoginRoutingModule { }
