export class BaseSoftwareEngineer {
    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
        return this;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
        return this;
    }

    get performanceBonus() {
        return this._performanceBonus;
    }

    set performanceBonus(performanceBonus) {
        this._performanceBonus = performanceBonus;
    }

    get stockOptions() {
        return this._stockOptions;
    }

    set stockOptions(stockOptions) {
        this._stockOptions = stockOptions;
    }

    get jobLevel() {
        return this._jobLevel;
    }

    set jobLevel(jobLevel) {
        this._jobLevel = jobLevel;
    }
}