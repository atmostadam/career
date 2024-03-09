import { BaseLiability } from "./BaseLiability.js";

export class HomeEquityLoan extends BaseLiability {
    constructor(value) {
        super("Home Equity Loan", value, 0, 0, 0);
    }
}