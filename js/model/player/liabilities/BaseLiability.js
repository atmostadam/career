export class BaseLiability {
    constructor(label, value, interestRate, currentYear, totalYears) {
        this._label = label;
        this._value = value;
        this._interestRate = interestRate;
        this._currentYear = currentYear;
        this._totalYears = totalYears;
    }

    get label() {
        return this._label;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        return this;
    }

    increase(amount) {
        this._value += amount;
    }

    decrease(amount) {
        this._value -= amount;
        return this;
    }

    get interestRate() {
        return this._interestRate;
    }

    set interestRate(interestRate) {
        this._interestRate = interestRate;
        return this;
    }

    get currentYear() {
        return this._currentYear;
    }

    set currentYear(currentYear) {
        this._currentYear = currentYear;
        return this;
    }

    get totalYears() {
        return this._totalYears;
    }

    set totalYears(totalYears) {
        this._totalYears = totalYears;
        return this;
    }

    compound() {
        let interest = this._value * (this._interestRate / 100);
        this.increase(interest);
        return interest;
    }
}