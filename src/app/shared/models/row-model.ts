import { RowI } from "../interfaces/row-i.model";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export class RowModel implements RowI{
    route : string;
    libelle :string;
    icon :IconDefinition;
    constructor(fields?: Partial<RowModel>) {
        if (fields) {
            Object.assign(this, fields)
        }
    }
}
