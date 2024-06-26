import { BaseExpense } from "./BaseExpense.js";

export class StateIncomeTax extends BaseExpense {
    constructor(value) {
        let MARGINAL_TAX_RATE = .04;
        super("IncomeTax", MARGINAL_TAX_RATE * value);
    }

    nextYear() {
        return new StateIncomeTax(this.getValue());
    }
}