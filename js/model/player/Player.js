export class Player {
    constructor(context, job, age) {
        this.context = context;
        this.job = job;
        this.startingAge = age;
        this.age = age;
        this.assets = [];
        this.liabilites = [];
        this.revenue = [];
        this.expenses = [];
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
}