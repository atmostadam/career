export function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}

export function isNumber(value) {
    if (value == null || isNaN(value)) {
        throw new GameException("Value [" + value + "] is not a Number!", this);
    }
    return value;
}

export function splitToEqualPartsArray(value, parts, offset) {
    isNumber(value);
    isNumber(parts);
    let arr = [];
    for (let i = 0; i < parts; i++) {
        arr.push((value / parts) + (offset ? offset : 0));
    }
    return arr;
}