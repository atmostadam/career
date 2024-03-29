import { BaseAsset } from "./BaseAsset.js";

export class Car extends BaseAsset {
    constructor(value) {
        super("Car", value, 0, 0, 0);
    }
}