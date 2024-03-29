import { BaseAsset } from "./BaseAsset.js";

export class Snp500Index extends BaseAsset {
    constructor(value) {
        super("S&P 500 Index", value, 0, 0, 0);
    }
}