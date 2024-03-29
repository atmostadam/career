import { BaseAsset } from "./BaseAsset.js";

export class CertificateOfDeposit extends BaseAsset {
    constructor(value) {
        super("CDs", value, 0, 0, 0);
    }
}