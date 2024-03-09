import { BaseLiability } from "./BaseLiability.js";

export class CarLoan extends BaseLiability {
    constructor(value) {
        super("Car Loan", value, 0, 0, 0);
    }
}