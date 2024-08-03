export class Revenue {
    constructor(context) {
        this.context = context;
    }

    update() {

    }

    draw() {

    }

    nextYear() {
        return new Revenue(this.context);
    }

    asSortedArray() {

    }

    getPerformanceBonus() {
        return this.context.getPlayer().getJob().getPerformanceBonus();
    }

    getSalary() {
        return this.context.getPlayer().getJob().getSalary();
    }

    getStockOptions() {
        return this.context.getPlayer().getJob().getStockOptions();
    }

    getValue() {
        return this.getPerformanceBonus() +
            this.getSalary() +
            this.getStockOptions();
    }

    getRevenue(name) {
        return this.revenueMap.get(name);
    }
}