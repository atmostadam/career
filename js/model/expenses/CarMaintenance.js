import { BaseExpense } from "./BaseExpense.js";

export class CarMaintenance extends BaseExpense {
    constructor(value, yearsOld) {
        super("Car Maintenance", value);
        this._value = this.expenseAtYear(value, yearsOld);
        this._yearsOld = yearsOld;
    }

    expenseAtYear(value, yearsOld) {
        switch (yearsOld) {
            case 0:
                return value * .85;
            case 1:
                return value * .70;
            case 2:
                return value * .55;
            case 3:
                return value * .40;
            case 4:
                return value * .30;
            case 5:
                return value * .25;
        }
        return 3000;
    }

    get yearsOld() {
        return this._yearsOld;
    }

    set yearsOld(yearsOld) {
        this._yearsOld = yearsOld;
    }

    oneYearOlder() {
        this._yearsOld++;
    }
}