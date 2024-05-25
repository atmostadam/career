import { Assets } from "../assets/Assets.js";
import { Liabilities } from "../liabilities/Liabilities.js";
import { Revenue } from "../revenue/Revenue.js";
import { Expenses } from "../expenses/Expenses.js";
import { Year } from "../year/Year.js";

export class Player {
    constructor(context, job, age) {
        this.context = context;
        this.job = job;
        this.startingAge = age;
        this.age = age;
        this.assets = new Assets();
        this.liabilites = new Liabilities();
        this.revenue = new Revenue();
        this.expenses = new Expenses();
        this.years = [];
    }

    nextYear() {
        this.age++;
        let year = new Year(
            this.job.nextYear(),
            this.assets.nextYear(),
            this.liabilites.nextYear(),
            this.revenue.nextYear(),
            this.expenses.nextYear()
        );
        this.years.push(year);
        return year;
    }

    getAssets() {
        return this.assets;
    }

    getLiabilities() {
        return this.liabilites;
    }

    getRevenue() {
        return this.revenue;
    }

    getExpenses() {
        return this.expenses;
    }

    getJob() {
        return this.job;
    }

    setJob(job) {
        this.job = job;
        return this;
    }

    getAge() {
        return this.age;
    }

    getStartingAge() {
        return this.startingAge;
    }

    getYears() {
        return this.years;
    }

    getLastYear() {
        return this.years[this.years.length - 1];
    }
}