import { BaseAsset } from "./BaseAsset.js";

export class TreasuryBill extends BaseAsset {
    constructor(value) {
        super("T-Bills", value, 0, 0, 0);
    }
}