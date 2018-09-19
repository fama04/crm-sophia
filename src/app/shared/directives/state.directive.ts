import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState : State;
  // hotBindin c'est td
  @HostBinding('class') nomClass : string;


  constructor() { 
    //le js à appliquer sur les balises 
   
    console.log("js state directive executed");
  }

  ngOnChanges(){
    this.nomClass = this.formatClass(this.appState)
    console.log("this.app State");
    // si isNgTemplate.state vaut option 
    // creer une chaine state-option 
    // binder l'attribut class du htmlElement td sur lequel on applique cette directive

  }
  formatClass(state: State): string
{
  // supprimer les epaces et les accent
return `state-${state.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()}`;
}
}
