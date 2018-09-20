import { ClientI } from "../interfaces/client-i.model";

export class Client implements ClientI {
    id : string;
    nom : string;
    adresse : string;
    codePostal : string;
    ville : string;
    tjm_ht : number

    constructor(fields?: Partial<Client>) {
        if (fields) {
            Object.assign(this, fields)
        }
    }
}
