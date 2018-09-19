import { State } from "../enums/state.enum";
import { Input } from "@angular/core";
import { PrestationI } from "../interfaces/prestation-i.model";

export class Prestation implements PrestationI {
    id: string;
    typePresta: string;
    client: string;
    nb_jours = 0;
    tjm_ht = 0;
    taux_tva = 20;
    state = State.CONFIRME;
    @Input() item: Prestation;

    constructor(fields?: Partial<Prestation>) {
        if (fields) {
            Object.assign(this, fields)
        }
    }

    total_HT() {
        console.log('total hors taxe call');
        return this.tjm_ht * this.nb_jours;
    }

    total_TTC(tva?: number) {
        console.log('total  ttc call');

        const totalHt = this.total_HT();
        if (!tva) {
            return totalHt + (this.taux_tva + totalHt / 100);
        }
        if (tva && tva <= 0) {
            return totalHt;
        }
        if (tva) {
            return totalHt + (tva * totalHt / 100);
        }
    }
}