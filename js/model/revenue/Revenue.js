import { PerformanceBonus } from "./PerformanceBonus.js";
import { Salary } from "./Salary.js";
import { StockOptions } from "./StockOptions.js";

export class Revenue {
    constructor() {
        this.performanceBonus = new PerformanceBonus(0);
        this.salary = new Salary(0);
        this.stockOptions = new StockOptions(0);
    }

    update() {

    }

    draw() {

    }

    asSortedArray() {

    }

    getPerformanceBonus() {
        return this.performanceBonus;
    }
    getSalary() {
        return this.salary;
    }

    getStockOptions() {
        return this.stockOptions;
    }
}