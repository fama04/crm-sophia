import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import module
import { LoginModule } from './login/login.module';
// puis composant
import { AppComponent } from './app.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UiModule } from './ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // charger les modules au démarrage de l'appli
    BrowserModule, LoginModule, PageNotFoundModule, UiModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
