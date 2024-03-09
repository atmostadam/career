import { BaseRevenue } from "./BaseRevenue.js";

export class Salary extends BaseRevenue {
    constructor(value) {
        super("Salary", value);
    }
}