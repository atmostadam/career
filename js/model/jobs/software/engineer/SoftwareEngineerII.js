import { randomInt } from "./../../../../function/MathFunctions.js";
import { SoftwareEngineerIII } from "./SoftwareEngineerIII.js";

/* https://www.salary.com/research/salary/benchmark/software-engineer-ii-salary/atlanta-ga */
export class SoftwareEngineerII {
    constructor() {
        this._title = "Level II";
        this._salary = 95882;
        this._performanceBonus = 10000;
        this._stockOptions = 8000;
        this._responsibilities = [];
        this._responsibilities.push("• Learns - Software and Analysis Design");
        this._responsibilities.push("• Learns - Software Methodologies, Meetings, Standups");
        this._responsibilities.push("• Junior - Writes and Debugs Basic Software Code");
        this._responsibilities.push("• Junior - Basic Software Unit Testing");
        this._responsibilities.push("• Junior- Basic Software Troubleshooting");
        this._responsibilities.push("• Reports To - Lead or Senior Software Engineer");
        this._responsibilities.push("• Qualifications - Associate of Computer Science");
        this._jobImageId = "JuniorSoftwareEngineerImage";
        this._jobImageW = 1024;
        this._jobImageH = 768;
        this._jobLevel = 3;
        this._promotionChance = 20;
    }

    nextYear() {

    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
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
            return new SoftwareEngineerIII();
        }
        return this;
    }
}