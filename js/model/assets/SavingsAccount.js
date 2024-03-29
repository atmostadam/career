import { BaseAsset } from "./BaseAsset.js";

export class SavingsAccount extends BaseAsset {
    constructor(value) {
        super("Savings Account", value, 0, 0, 0);
    }
}