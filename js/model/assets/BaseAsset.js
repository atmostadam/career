export class BaseAsset {
    constructor(id, value, historicRateOfReturn, minRateOfReturn, maxRateOfReturn) {
        this.id = id;
        this.value = value;
        this.historicRateOfReturn = historicRateOfReturn;
        this.minRateOfReturn = minRateOfReturn;
        this.maxRateOfReturn = maxRateOfReturn;
    }

    increase(amount) {
        this.value += amount;
    }

    decrease(amount) {
        this.value -= amount;
    }

    compound() {
        let interest = this.value * (this.historicRateOfReturn / 100);
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

    getHistoricRateOfReturn() {
        return this.historicRateOfReturn;
    }

    setHistoricalRateOfReturn(historicalRateOfReturn) {
        this.historicalRateOfReturn = istoricalRateOfReturn;
    }

    getMinRateOfReturn() {
        return this.minRateOfReturn;
    }

    setMinRateOfReturn(minRateOfReturn) {
        this.minRateOfReturn = minRateOfReturn;
    }

    getMaxRateOfReturn() {
        return this.maxRateOfReturn;
    }

    setMaxRateOfReturn(maxRateOfReturn) {
        this.maxRateOfReturn = maxRateOfReturn;
    }
}