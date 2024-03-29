import { randomInt } from "./../../../../function/MathFunctions.js";
import { SoftwareEngineerI } from "./SoftwareEngineerI.js";

/* https://www.salary.com/research/salary/posting/junior-programmer-salary/atlanta-ga */
export class JuniorSoftwareEngineer {
    constructor() {
        this.title = "Junior";
        this.salary = 53594;
        this.performanceBonus = 2000;
        this.stockOptions = 0;
        this.responsibilities = [];
        this.responsibilities.push("• Learns - Software and Analysis Design");
        this.responsibilities.push("• Learns - Software Methodologies, Meetings, Standups");
        this.responsibilities.push("• Junior - Writes and Debugs Basic Software Code");
        this.responsibilities.push("• Junior - Basic Software Unit Testing");
        this.responsibilities.push("• Junior- Basic Software Troubleshooting");
        this.responsibilities.push("• Reports To - Lead or Senior Software Engineer");
        this.responsibilities.push("• Qualifications - Associate of Computer Science");
        this.jobImageId = "JuniorSoftwareEngineerImage";
        this.jobImageW = 1024;
        this.jobImageH = 768;
        this.jobLevel = 1;
        this.promotionChance = 60;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    get performanceBonus() {
        return this._performanceBonus;
    }

    set performanceBonus(performanceBonus) {
        this._performanceBonus = performanceBonus;
    }

    get stockOptions() {
        return this._stockOptions;
    }

    set stockOptions(stockOptions) {
        this._stockOptions = stockOptions;
    }

    get responsibilities() {
        return this._responsibilities;
    }

    set responsibilities(responsibilities) {
        this._responsibilities = responsibilities;
    }

    get jobImageId() {
        return this._jobImageId;
    }

    set jobImageId(jobImageId) {
        this._jobImageId = jobImageId;
    }

    get jobImageW() {
        return this._jobImageW;
    }

    set jobImageW(jobImageW) {
        this._jobImageW = jobImageW;
    }

    get jobImageH() {
        return this._jobImageH;
    }

    set jobImageH(jobImageH) {
        this._jobImageH = jobImageH;
    }

    get jobLevel() {
        return this._jobLevel;
    }

    set jobLevel(jobLevel) {
        this._jobLevel = jobLevel;
    }

    applyForPromotion() {
        if (randomInt(0, 100) <= this._promotionChance) {
            return new SoftwareEngineerI();
        }
        return this;
    }
}