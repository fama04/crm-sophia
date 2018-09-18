import { Prestation } from "../../shared/models/prestation";
import { State } from "../../shared/enums/state.enum";

export const fakecollection  = [
  new Prestation( {
id :'a1',
typePresta : 'formation',
client : 'Modis',

nb_jours : 2,
tjm_ht : 500,
taux_tva :20,
state : State.OPTION
    }),
    new Prestation( {
        id :'b1',
        typePresta : 'coaching',
        client : 'Synapsys',
        
        nb_jours : 20,
        tjm_ht : 700,
        taux_tva :20,
        state : State.CONFIRME
            }),

]