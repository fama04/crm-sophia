import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/containers/login/login.component';
import { ListPrestationsComponent } from './prestations/containers/list-prestations/list-prestations.component';
import { PageNotFoundComponent } from './page-not-found/containers/page-not-found/page-not-found.component';
const appRoutes: Routes = [
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: PreloadAllModules
      } // <-- debugging purposes only
    )
  ],
})
export class AppRoutingModule { }
