import { BaseAsset } from "./BaseAsset.js";

export class JunkBond extends BaseAsset {
    constructor(value) {
        super("Junk Bonds", value, 0, 0, 0);
    }
}