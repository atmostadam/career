import { randomInt } from "./../../../../function/MathFunctions.js";
import { SoftwareEngineerI } from "./SoftwareEngineerI.js";

/* https://www.salary.com/research/salary/posting/junior-programmer-salary/atlanta-ga */
export class JuniorSoftwareEngineer {
    constructor() {
        this.title = "Junior Software Engineer";
        this.salary = 53594;
        this.bonus = 2000;
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

    nextYear() {

    }

    getTitle() {
        return this.title;
    }

    getSalary() {
        return this.salary;
    }

    getBonus() {
        return this.bonus
    }

    getStockOptions() {
        return this.stockOptions;
    }

    getResponsibilities() {
        return this.responsibilities;
    }

    applyForPromotion() {
        if (randomInt(0, 100) <= this._promotionChance) {
            return new SoftwareEngineerI();
        }
        return this;
    }
}