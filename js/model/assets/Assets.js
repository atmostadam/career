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
    constructor() {
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
        return new Assets(
            this.bankAccount.nextYear(),
            this.car.nextYear(),
            this.certificateOfDeposit.nextYear(),
            this.corporateBond.nextYear(),
            this.house.nextYear(),
            this.junkBond.nextYear(),
            this.nasdaqIndex.nextYear(),
            this.nyseIndex.nextYear(),
            this.savingsAccount.nextYear(),
            this.snp500Index.nextYear(),
            this.treasuryBill.nextYear()
        );
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

    getCar() {
        return this.car;
    }

    getCertificateOfDeposit() {
        return this.certificateOfDeposit;
    }

    getCorporateBond() {
        return this.corporateBond;
    }

    getHouse() {
        return this.house;
    }

    getJunkBond() {
        return this.junkBond;
    }

    getNasdaqIndex() {
        return this.nasdaqIndex;
    }

    getNyseIndex() {
        return this.nyseIndex;
    }

    getSavingsAccount() {
        return this.savingsAccount;
    }

    getSnp500Index() {
        return this.snp500Index;
    }

    getTreasuryBill() {
        return this.treasuryBill;
    }
}