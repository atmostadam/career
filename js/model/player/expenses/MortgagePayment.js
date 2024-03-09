import { BaseExpense } from "./BaseExpense.js";

export class MortgagePayment extends BaseExpense {
    constructor(value) {
        super("Mortgage Payment", value);
    }
}