import { BaseAsset } from "./BaseAsset.js";

export class NyseIndex extends BaseAsset {
    constructor(value) {
        super("NYSE Index", value, 0, 0, 0);
    }
}