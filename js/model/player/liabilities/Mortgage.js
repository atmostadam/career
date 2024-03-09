import { BaseLiability } from "./BaseLiability.js";

export class Mortgage extends BaseLiability {
    constructor(value) {
        super("Mortgage", value, 0, 0, 0);
    }
}