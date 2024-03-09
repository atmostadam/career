import { BaseAsset } from "./BaseAsset.js";

export class NasdaqIndex extends BaseAsset {
    constructor(value) {
        super("Nasdaq Index", value, 0, 0, 0);
    }
}