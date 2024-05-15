export class BaseLiability {
    constructor(id, value, interestRate, currentYear, totalYears) {
        this.id = id;
        this.value = value;
        this.interestRate = interestRate;
        this.currentYear = currentYear;
        this.totalYears = totalYears;
    }

    increase(amount) {
        this._value += amount;
    }

    decrease(amount) {
        this._value -= amount;
        return this;
    }

    compound() {
        let interest = this._value * (this._interestRate / 100);
        this.increase(interest);
        return interest;
    }

    getId() {
        return this.id;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

    getInterestRate() {
        return this.interestRate;
    }

    setInterestRate(interestRate) {
        this.interestRate = interestRate;
    }

    getCurrentYear() {
        return this._currentYear;
    }

    setCurrentYear(currentYear) {
        this.currentYear = currentYear;
    }

    getTotalYears() {
        return this.totalYears;
    }

    setTotalYears(totalYears) {
        this.totalYears = totalYears;
    }
}