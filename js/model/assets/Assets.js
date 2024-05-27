import { BankAccount } from "./BankAccount.js";
import { Car } from "./Car.js";
import { CertificateOfDeposit } from "./CertificateOfDeposit.js";
import { CorporateBond } from "./CorporateBond.js";
import { House } from "./House.js";
import { JunkBond } from "./JunkBond.js";
import { NasdaqIndex } from "./NasdaqIndex.js";
import { NyseIndex } from "./NyseIndex.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { Snp500Index } from "./Snp500Index.js";
import { TreasuryBill } from "./TreasuryBill.js";

export class Assets {
    constructor(context) {
        this.context = context;
        this.bankAccount = new BankAccount(0);
        this.car = new Car(0);
        this.certificateOfDeposit = new CertificateOfDeposit(0);
        this.corporateBond = new CorporateBond(0);
        this.house = new House(0);
        this.junkBond = new JunkBond(0);
        this.nasdaqIndex = new NasdaqIndex(0);
        this.nyseIndex = new NyseIndex(0);
        this.savingsAccount = new SavingsAccount(0);
        this.snp500Index = new Snp500Index(0);
        this.treasuryBill = new TreasuryBill(0);
    }

    nextYear() {
        let oldBankAccount = new BankAccount(0);
        let oldCar = new Car(0);
        let oldCertificateOfDeposit = new CertificateOfDeposit(0);
        let oldCorporateBond = new CorporateBond(0);
        let oldHouse = new House(0);
        let oldJunkBond = new JunkBond(0);
        let oldNasdaqIndex = new NasdaqIndex(0);
        let oldNyseIndex = new NyseIndex(0);
        let oldSavingsAccount = new SavingsAccount(0);
        let oldSnp500Index = new Snp500Index(0);
        let oldTreasuryBill = new TreasuryBill(0);

        let oldAssets = new Assets(this.context);
        oldAssets.setBankAccount(oldBankAccount);
        oldAssets.setCar(oldCar);
        oldAssets.setCertificateOfDeposit(oldCertificateOfDeposit);
        oldAssets.setCorporateBond(oldCorporateBond);
        oldAssets.setHouse(oldHouse);
        oldAssets.setJunkBond(oldJunkBond);
        oldAssets.setNasdaqIndex(oldNasdaqIndex);
        oldAssets.setNyseIndex(oldNyseIndex);
        oldAssets.setSavingsAccount(oldSavingsAccount);
        oldAssets.setSnp500Index(oldSnp500Index);
        oldAssets.setTreasuryBill(oldTreasuryBill);

        return oldAssets;
    }

    getValue() {
        return this.bankAccount.getValue() +
            this.car.getValue() +
            this.certificateOfDeposit.getValue() +
            this.corporateBond.getValue() +
            this.house.getValue() +
            this.junkBond.getValue() +
            this.nasdaqIndex.getValue() +
            this.nyseIndex.getValue() +
            this.savingsAccount.getValue() +
            this.snp500Index.getValue() +
            this.treasuryBill.getValue();
    }

    getBankAccount() {
        return this.bankAccount;
    }

    setBankAccount(bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }

    getCar() {
        return this.car;
    }

    setCar(car) {
        this.car = car;
        return this;
    }

    getCertificateOfDeposit() {
        return this.certificateOfDeposit;
    }

    setCertificateOfDeposit(certificateOfDeposit) {
        this.certificateOfDeposit = certificateOfDeposit;
        return this;
    }

    getCorporateBond() {
        return this.corporateBond;
    }

    setCorporateBond(corporateBond) {
        this.corporateBond = corporateBond
        return this;
    }

    getHouse() {
        return this.house;
    }

    setHouse(house) {
        this.house = house;
        return this;
    }

    getJunkBond() {
        return this.junkBond;
    }

    setJunkBond(junkBond) {
        this.junkBond = junkBond;
        return this;
    }

    getNasdaqIndex() {
        return this.nasdaqIndex;
    }

    setNasdaqIndex(nasdaqIndex) {
        this.nasdaqIndex = nasdaqIndex;
        return this;
    }

    getNyseIndex() {
        return this.nyseIndex;
    }

    setNyseIndex(nyseIndex) {
        this.nyseIndex = nyseIndex;
        return this;
    }

    getSavingsAccount() {
        return this.savingsAccount;
    }

    setSavingsAccount(savingsAccount) {
        this.savingsAccount = savingsAccount;
        return this;
    }

    getSnp500Index() {
        return this.snp500Index;
    }

    setSnp500Index(snp500Index) {
        this.snp500Index = snp500Index;
        return this;
    }

    getTreasuryBill() {
        return this.treasuryBill;
    }

    setTreasuryBill(treasuryBill) {
        this.treasuryBill = treasuryBill;
        return this;
    }
}