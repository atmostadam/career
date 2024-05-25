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

    nextYear() {
        return new Revenue()
            .setPerformanceBonus(this.getPerformanceBonus().nextYear())
            .setSalary(this.getSalary().nextYear())
            .setStockOptions(this.getStockOptions().nextYear());
    }

    asSortedArray() {

    }

    getValue() {
        return this.performanceBonus.getValue() +
            this.salary.getValue() +
            this.stockOptions.getValue();
    }

    getPerformanceBonus() {
        return this.performanceBonus;
    }

    setPerformanceBonus(performanceBonus) {
        this.performanceBonus = performanceBonus;
        return this;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
        return this;
    }

    getStockOptions() {
        return this.stockOptions;
    }

    setStockOptions(stockOptions) {
        this.stockOptions = stockOptions;
        return this;
    }
}