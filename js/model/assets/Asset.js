export class Asset {
    constructor(id, value, historicRateOfReturn, minRateOfReturn, maxRateOfReturn) {
        this.id = id;
        this.value = value;
        this.historicRateOfReturn = historicRateOfReturn;
        this.minRateOfReturn = minRateOfReturn;
        this.maxRateOfReturn = maxRateOfReturn;
    }

    getId() {
        return this.id;
    }

    getValue() {
        return this.value;
    }

    getHistoricRateOfReturn() {
        return this.historicRateOfReturn;
    }

    getMinRateOfReturn() {
        return this.value;
    }

    getMaxRateOfReturn() {
        return this.value;
    }

    increase(amount) {
        this._value += amount;
    }

    decrease(amount) {
        this._value -= amount;
        return this;
    }

    compound() {
        let interest = this._value * (this._historicRateOfReturn / 100);
        this.increase(interest);
        return interest;
    }
}