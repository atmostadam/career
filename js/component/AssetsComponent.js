import { splitToEqualPartsArray } from "./../function/MathFunctions.js";

export class AssetsComponent {
    constructor(context) {
        this.context = context;
        this.columnPercentWs = [16, 7];
        this.rowPercentHs = splitToEqualPartsArray(36, 12);
    }

    update(tick) {

    }

    draw() {

    }
}