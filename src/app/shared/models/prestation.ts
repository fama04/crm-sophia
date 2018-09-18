import { State } from "../enums/state.enum";
import { Input } from "@angular/core";

export class Prestation {
        id :string;
        typePresta : string;
        client : string;
        nb_jours = 0;
        tjm_ht = 0;
        taux_tva =20;
        state = State.CONFIRME;
        @Input() item : Prestation;

        constructor(fields?: Partial<Prestation>){
            if(fields){
                Object.assign(this, fields)
            }
    }

    total_HT(){
            return this.tjm_ht * this.nb_jours;
            console.log('total hors taxe call');
    }
    
    total_TTC(tva ?: number){
        console.log('total  ttc call');

        const totalHt = this.total_HT();
        if(!tva){
            return totalHt + (this.taux_tva + totalHt/100);
        }
        if(tva && tva <=0){
            return totalHt;
        }
        if(tva){
            return totalHt + (tva * totalHt/100);
        }

    }
}