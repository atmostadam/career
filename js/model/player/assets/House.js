import { BaseAsset } from "./BaseAsset.js";

export class House extends BaseAsset {
    constructor(value) {
        super("House", value, 0, 0, 0);
    }
}