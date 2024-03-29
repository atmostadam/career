import { BaseLiability } from "./BaseLiability.js";

export class StudentLoan extends BaseLiability {
    constructor(value) {
        super("Student Loan", value, 0, 0, 0);
    }
}