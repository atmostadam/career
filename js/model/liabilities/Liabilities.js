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

    nextYear() {
        return new Liabilities()
            .setCarLoan(this.getCarLoan().nextYear())
            .setCreditCardBalance(this.getCreditCardBalance().nextYear())
            .setHomeEquityLoan(this.getHomeEquityLoan().nextYear())
            .setMortgage(this.getMortgage().nextYear())
            .setStudentLoan(this.getStudentLoan().nextYear());
    }

    asSortedArray() {

    }

    getValue() {
        return this.carLoan.getValue() +
            this.creditCardBalance.getValue() +
            this.homeEquityLoan.getValue() +
            this.mortgage.getValue() +
            this.studentLoan.getValue();
    }

    getCarLoan() {
        return this.carLoan;
    }

    setCarLoan(carLoan) {
        this.carLoan = carLoan;
        return this;
    }

    getCreditCardBalance() {
        return this.creditCardBalance;
    }

    setCreditCardBalance(creditCardBalance) {
        this.creditCardBalance = creditCardBalance;
        return this;
    }

    getHomeEquityLoan() {
        return this.homeEquityLoan;
    }

    setHomeEquityLoan(homeEquityLoan) {
        this.homeEquityLoan = homeEquityLoan;
        return this;
    }

    getMortgage() {
        return this.mortgage;
    }

    setMortgage(mortgage) {
        this.mortgage = mortgage;
        return this;
    }

    getStudentLoan() {
        return this.studentLoan;
    }

    setStudentLoan(studentLoan) {
        this.studentLoan = studentLoan;
        return this;
    }
}