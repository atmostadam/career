import { BaseAsset } from "./BaseAsset.js";

export class BankAccount extends BaseAsset {
    constructor(value) {
        super("Bank Account", value, 0, 0, 0);
    }
}