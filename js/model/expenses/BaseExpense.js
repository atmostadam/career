export class BaseExpense {
    constructor(label, value) {
        this._label = label;
        this._value = value;
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

    pay() {
        return this._value;
    }
}