import { CarMaintenance } from "./CarMaintenance.js";
import { CarTax } from "./CarTax.js";
import { College } from "./College.js";
import { CostPerChild } from "./CostPerChild.js";
import { EmployerFicaTax } from "./EmployerFicaTax.js";
import { FicaTax } from "./FicaTax.js";
import { Gas } from "./Gas.js";
import { Groceries } from "./Groceries.js";
import { HouseMaintenance } from "./HouseMaintenance.js";
import { IncomeTax } from "./IncomeTax.js";
import { MortgagePayment } from "./MortgagePayment.js";
import { PropertyTax } from "./PropertyTax.js";
import { StateIncomeTax } from "./StateIncomeTax.js";
import { Utilities } from "./Utilities.js";

export class Expenses {
    constructor() {
        this.carMaintenance = new CarMaintenance(0);
        this.carTax = new CarTax(0);
        this.college = new College(0);
        this.costPerChild = new CostPerChild(0);
        this.employerFicaTax = new EmployerFicaTax(0);
        this.ficaTax = new FicaTax(0);
        this.gas = new Gas(0);
        this.groceries = new Groceries(0);
        this.houseMaintenance = new HouseMaintenance(0);
        this.incomeTax = new IncomeTax(0);
        this.mortgagePayment = new MortgagePayment(0);
        this.propertyTax = new PropertyTax(0);
        this.stateIncomeTax = new StateIncomeTax(0);
        this.utilities = new Utilities(0);
    }

    update() {

    }

    draw() {

    }

    asSortedArray() {

    }

    getValue() {
        return this.carMaintenance.getValue() +
            this.carTax.getValue() +
            this.college.getValue() +
            this.costPerChild.getValue() +
            this.employerFicaTax.getValue() +
            this.ficaTax.getValue() +
            this.gas.getValue() +
            this.groceries.getValue() +
            this.houseMaintenance.getValue() +
            this.incomeTax.getValue() +
            this.mortgagePayment.getValue() +
            this.propertyTax.getValue() +
            this.stateIncomeTax.getValue() +
            this.utilities.getValue();
    }

    getCarMaintenance() {
        return this.carMaintenance;
    }

    getCarTax() {
        return this.carTax;
    }

    getCollege() {
        return this.college;
    }

    getCostPerChild() {
        return this.costPerChild;
    }

    getEmployerFicaTax() {
        return this.employerFicaTax;
    }

    getFicaTax() {
        return this.ficaTax;
    }

    getGas() {
        return this.gas;
    }

    getGroceries() {
        return this.groceries;
    }

    getHouseMaintenance() {
        return this.houseMaintenance;
    }

    getIncomeTax() {
        return this.incomeTax;
    }

    getMortgagePayment() {
        return this.mortgagePayment;
    }

    getPropertyTax() {
        return this.propertyTax;
    }

    getStateIncomeTax() {
        return this.stateIncomeTax;
    }

    getUtilities() {
        return this.utilities;
    }
}