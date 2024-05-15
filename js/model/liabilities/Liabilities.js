import { CarLoan } from "./CarLoan.js";
import { CreditCardBalance } from "./CreditCardBalance.js";
import { HomeEquityLoan } from "./HomeEquityLoan.js";
import { Mortgage } from "./Mortgage.js";
import { StudentLoan } from "./StudentLoan.js";

export class Liabilities {
    constructor() {
        this.carLoan = new CarLoan(0);
        this.creditCardBalance = new CreditCardBalance(0);
        this.homeEquityLoan = new HomeEquityLoan(0);
        this.mortgage = new Mortgage(0);
        this.studentLoan = new StudentLoan(0);
    }

    update() {

    }

    draw() {

    }

    asSortedArray() {

    }

    getCarLoan() {
        return this.carLoan;
    }

    getCreditCardBalance() {
        return this.creditCardBalance;
    }

    getHomeEquityLoan() {
        return this.homeEquityLoan;
    }

    getMortgage() {
        return this.mortgage;
    }

    getStudentLoan() {
        return this.studentLoan;
    }
}