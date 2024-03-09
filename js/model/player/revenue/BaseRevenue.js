export class BaseRevenue {
    constructor(label, value) {
        this._label = label;
        this._value = value;
    }

    get value() {
        return this._value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        return this;
    }

    collect() {
        return this._value;
    }
}