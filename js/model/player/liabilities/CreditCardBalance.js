import { BaseLiability } from "./BaseLiability.js";

export class CreditCardBalance extends BaseLiability {
    constructor(value) {
        super("Credit Card Balance", value, 0, 0, 0);
    }
}