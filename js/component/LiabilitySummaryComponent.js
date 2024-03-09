import { Grid } from "../../../../boot/canvas/model/grid/Grid.js";
import { Gameable } from "../../../../boot/base/Gameable.js"
import { Constants } from "../../../../boot/constants/Constants.js";

export class LiabilitySummaryComponent extends Gameable {
    constructor(context) {
        super(context);
        this.columnPercentWs = [16, 7];
        this.rowPercentHs = this.splitToEqualPartsArray(36, 12);
        console.log("New instance of [LiabilitySummaryComponent] object.", this);
    }

    init() {
        this.grid = new Grid(
            this.context,
            this.x,
            this.y,
            this.columnPercentWs,
            this.rowPercentHs)
            .addGridBackgroundColor(0, 0, "red")
            .addGridBackgroundColor(0, 1, "red")
            .addGridText(0, 0, ["Top 10 Liabilities"], 1.2, "Helvetica", "white", 1, 2.5, 4)
            .addGridText(0, 1, ["$"], 1.2, "Helvetica", "white", 1, 2.5, 4)
            .addBorderForAll(2, "red");
        var total = 0;
        for (let i = 0; i < 5; i++) {
            let liability = this.getLiabilities().liabilityList[i];
            this.grid.addGridText(i + 1, 0, [liability.label], 1, "Helvetica", "white", 1, 2.5, 4)
                .addGridText(i + 1, 1, [liability.value], 1, "Helvetica", "white", 1, 2.5, 4);
            total += liability.value;
        }
        this.grid.addGridText(11, 0, ["TOTAL"], 1, "Helvetica", "white", 1, 2.5, 4)
            .addGridText(11, 1, [total], 1, "Helvetica", "white", 1, 2.5, 4)
            .addGridBackgroundColor(11, 1, "red");
        this.loaded = true;
        this.context.registerResizeConsumer(this);
        console.log("[LiabilitySummaryComponent] object has been loaded.", this);
    }

    update(tick) {
        this.x = this.getFullWidthPercent(Constants.LIABILITY_SUMMARY_PERCENT_X);
        this.y = this.getFullHeightPercent(Constants.LIABILITY_SUMMARY_PERCENT_Y);
        super.update(tick);
        this.grid.get(1, 1).getGridText().setTexts([this.getLiabilities().get("Mortgage")]);
        this.grid.get(2, 1).getGridText().setTexts([this.getLiabilities().get("Car Loan")]);
        this.grid.get(3, 1).getGridText().setTexts([this.getLiabilities().get("Student Loan")]);
        this.grid.get(4, 1).getGridText().setTexts([this.getLiabilities().get("Credit Card Debt")]);
        this.grid.get(5, 1).getGridText().setTexts([this.getLiabilities().get("Home Equity Loan")]);
        this.grid.update(this.tick);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {

    }
}