import { Client } from "../../shared/models/client";

export const fakecollection = [
    new Client({
        id: 'a1',
        nom: 'Fabien',
        adresse: '70 rue des Cons',

        codePostal: 6600,
        ville: 'Antibes',
        tjm_ht: 20,
    }),    new Client({
        id: 'a1',
        nom: 'Damien',
        adresse: '70 rue des Cons',
        codePostal: 6600,
        ville: 'Antibes',
        tjm_ht: 20,
    })
]