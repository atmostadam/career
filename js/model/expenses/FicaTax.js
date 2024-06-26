import { BaseExpense } from "./BaseExpense.js";

export class FicaTax extends BaseExpense {
    constructor(value) {
        let MARGINAL_TAX_RATE = .0765;
        super("FICA Taxes", MARGINAL_TAX_RATE * value);
    }

    nextYear() {
        return new FicaTax(this.getValue());
    }
}