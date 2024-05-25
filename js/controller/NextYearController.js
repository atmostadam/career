import { Year } from "./../model/year/Year.js";
import {
    LAST_YEAR_SCREEN
} from "./../configuration/GameConfiguration.js";
import { JuniorSoftwareEngineer } from "./../model/jobs/software/engineer/JuniorSofwareEngineer.js";

export class NextYearController {
    constructor(context) {
        this.context = context;
    }

    nextYear() {
        let lastYear = this.context.getPlayer().nextYear();

        let newJob = this.nextYearJob(lastYear.getJob());
        let newAssets = this.nextYearAssets(lastYear.getAssets());
        let newLiabilities = this.nextYearLiabilities(lastYear.getLiabilities());
        let newRevenue = this.nextYearRevenue(lastYear.getRevenue());
        let newExpenses = this.nextYearExpenses(lastYear.getExpenses());

        this.context.getPlayer().setJob(newJob);
        this.context.getPlayer().setAssets(newAssets);
        this.context.getPlayer().setLiabilities(newLiabilities);
        this.context.getPlayer().setRevenue(newRevenue);
        this.context.getPlayer().setExpenses(newExpenses);

        this.context.setScreen(LAST_YEAR_SCREEN);
    }

    nextYearJob(oldJob) {
        if (oldJob.getTitle()) {

        }
        return oldJob.nextYear();
    }

    nextYearAssets(oldAssets) {
        return oldAssets.nextYear();
    }

    nextYearLiabilities(oldLiabilities) {
        return oldLiabilities.nextYear();
    }

    nextYearRevenue(oldRevenue) {
        return oldRevenue.nextYear();
    }

    nextYearExpenses(oldRevenue) {
        return oldRevenue.nextYear();
    }
}