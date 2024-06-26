import { BaseExpense } from "./BaseExpense.js";

export class HouseMaintenance extends BaseExpense {
    constructor(value) {
        let HOUSE_COST_PER_YEAR = .03;
        super("FICA Taxes", HOUSE_COST_PER_YEAR * value);
    }

    nextYear() {
        return new HouseMaintenance(this.getValue());
    }
}