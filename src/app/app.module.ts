import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import module
import { LoginModule } from './login/login.module';
// puis composant
import { AppComponent } from './app.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UiModule } from './ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPrestationsComponent } from './prestations/containers/list-prestations/list-prestations.component';
import { LoginComponent } from './login/containers/login/login.component';
import { PageNotFoundComponent } from './page-not-found/containers/page-not-found/page-not-found.component';
import { Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // charger les modules au démarrage de l'appli
    BrowserModule, NgbModule.forRoot(),UiModule,LoginModule, AppRoutingModule,PageNotFoundModule
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { 


// the second parameter 'fr' is optional
   // Diagnostic only: inspect router configuration
   constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
}
}
