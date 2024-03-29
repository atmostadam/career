import { BaseAsset } from "./BaseAsset.js";

export class CorporateBond extends BaseAsset {
    constructor(value) {
        super("Corporate Bonds", value, 0, 0, 0);
    }
}