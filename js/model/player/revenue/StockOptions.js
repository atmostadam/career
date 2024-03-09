import { BaseRevenue } from "./BaseRevenue.js";

export class StockOptions extends BaseRevenue {
    constructor(value) {
        super("Stock Options", value);
    }
}