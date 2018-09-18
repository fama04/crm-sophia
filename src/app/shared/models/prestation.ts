import { State } from "../enums/state.enum";

export class Prestation {
   
        id :string;
        typePresta : string;
        client : string;
        nb_jours = 0;
        tjm_ht = 0;
        taux_tva =20;
        state = State.CONFIRME;

        constructor(fields?: Partial<Prestation>){
            if(fields){
                Object.assign(this, fields)
            }
    }

    total_HT(){
        if (this.tjm_ht){
            return this.tjm_ht
        }
    }
    
    total_TTC(tva ?: number){
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