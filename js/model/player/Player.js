import { JuniorSoftwareEngineer } from "./../jobs/software/engineer/JuniorSofwareEngineer.js";

export class Player {
    constructor(context) {
        this.context = context;
        this.assets = [];
        this.liabilites = [];
        this.revenue = [];
        this.expenses = [];
        this.job = new JuniorSoftwareEngineer(context);
    }
}