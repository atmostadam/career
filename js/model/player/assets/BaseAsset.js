export class BaseAsset {
    constructor(label, value, historicRateOfReturn, minRateOfReturn, maxRateOfReturn) {
        this._label = label;
        this._value = value;
        this._historicRateOfReturn = historicRateOfReturn;
        this._minRateOfReturn = minRateOfReturn;
        this._maxRateOfReturn = maxRateOfReturn;
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

    get historicRateOfReturn() {
        return this._historicRateOfReturn;
    }

    set historicRateOfReturn(historicRateOfReturn) {
        this._historicRateOfReturn = historicRateOfReturn;
        return this;
    }

    get minRateOfReturn() {
        return this._minRateOfReturn;
    }

    set minRateOfReturn(minRateOfReturn) {
        this._minRateOfReturn = minRateOfReturn;
        return this;
    }

    get maxRateOfReturn() {
        return this._maxRateOfReturn;
    }

    set maxRateOfReturn(maxRateOfReturn) {
        this._maxRateOfReturn = maxRateOfReturn;
        return this;
    }

    compound() {
        let interest = this._value * (this._historicRateOfReturn / 100);
        this.increase(interest);
        return interest;
    }
}