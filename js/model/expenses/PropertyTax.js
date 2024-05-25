import { BaseExpense } from "./BaseExpense.js";

export class PropertyTax extends BaseExpense {
    constructor(value) {
        let MARGINAL_TAX_RATE = .015;
        super("Property Tax", MARGINAL_TAX_RATE * value);
    }

    nextYear() {
        return new PropertyTax(this.getValue());
    }
}