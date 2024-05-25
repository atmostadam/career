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

    nextYear() {
        return new Expenses()
            .setCarMaintenance(this.getCarMaintenance().nextYear())
            .setCarTax(this.getCarTax().nextYear())
            .setCollege(this.getCollege().nextYear())
            .setCostPerChild(this.getCostPerChild().nextYear())
            .setEmployerFicaTax(this.getEmployerFicaTax().nextYear())
            .setFicaTax(this.getFicaTax().nextYear())
            .setGas(this.getGas().nextYear())
            .setGroceries(this.getGroceries().nextYear())
            .setHouseMaintenance(this.getHouseMaintenance().nextYear())
            .setIncomeTax(this.getIncomeTax().nextYear())
            .setMortgagePayment(this.getMortgagePayment().nextYear())
            .setPropertyTax(this.getPropertyTax().nextYear())
            .setStateIncomeTax(this.getStateIncomeTax().nextYear())
            .setUtilities(this.getUtilities().nextYear());
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

    setCarMaintenance(carMaintenance) {
        this.carMaintenance = carMaintenance;
        return this;
    }

    getCarTax() {
        return this.carTax;
    }

    setCarTax(carTax) {
        this.carTax = carTax;
        return this;
    }

    getCollege() {
        return this.college;
    }

    setCollege(college) {
        this.college = college;
        return this;
    }

    getCostPerChild() {
        return this.costPerChild;
    }

    setCostPerChild(costPerChild) {
        this.costPerChild = costPerChild;
        return this;
    }

    getEmployerFicaTax() {
        return this.employerFicaTax;
    }

    setEmployerFicaTax(employerFicaTax) {
        this.employerFicaTax = employerFicaTax;
        return this;
    }

    getFicaTax() {
        return this.ficaTax;
    }

    setFicaTax(ficaTax) {
        this.ficaTax = ficaTax;
        return this;
    }

    getGas() {
        return this.gas;
    }

    setGas(gas) {
        this.gas = gas;
        return this;
    }

    getGroceries() {
        return this.groceries;
    }

    setGroceries(groceries) {
        this.groceries = groceries;
        return this;
    }

    getHouseMaintenance() {
        return this.houseMaintenance;
    }

    setHouseMaintenance(houseMaintenance) {
        this.houseMaintenance = houseMaintenance
        return this;
    }

    getIncomeTax() {
        return this.incomeTax;
    }

    setIncomeTax(incomeTax) {
        this.incomeTax = incomeTax;
        return this;
    }

    getMortgagePayment() {
        return this.mortgagePayment;
    }

    setMortgagePayment(mortgagePayment) {
        this.mortgagePayment = mortgagePayment;
        return this;
    }

    getPropertyTax() {
        return this.propertyTax;
    }

    setPropertyTax(propertyTax) {
        this.propertyTax = propertyTax;
        return this;
    }

    getStateIncomeTax() {
        return this.stateIncomeTax;
    }

    setStateIncomeTax(stateIncomeTax) {
        this.stateIncomeTax = stateIncomeTax
        return this;
    }

    getUtilities() {
        return this.utilities;
    }

    setUtilities(utilities) {
        this.utilities = utilities;
        return this;
    }
}