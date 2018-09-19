import { State } from "../enums/state.enum";

export interface PrestationI {
    id: String;
    typePresta: String;
    client: String;
    nb_jours: Number;
    tjm_ht: Number;
    taux_tva: Number;
    state: State;
}
