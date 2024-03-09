import { Grid } from "../../../../boot/canvas/model/grid/Grid.js";
import { Gameable } from "../../../../boot/base/Gameable.js"
import { Constants } from "../../../../boot/constants/Constants.js";

export class ExpenseSummaryComponent extends Gameable {
    constructor(context) {
        super(context);
        this.columnPercentWs = [16, 7];
        this.rowPercentHs = this.splitToEqualPartsArray(36, 12);
        console.log("New instance of [ExpenseSummaryComponent] object.", this);
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
            .addGridText(0, 0, ["Top 10 Expense"], 1.2, "Helvetica", "white", 1, 2.5, 4)
            .addGridText(0, 1, ["$"], 1.2, "Helvetica", "white", 1, 2.5, 4)
            .addBorderForAll(2, "red");
        var total = 0;
        for (let i = 0; i < 10; i++) {
            let expense = this.getExpenses().expenseList[i];
            this.grid.addGridText(i + 1, 0, [expense.label], 1, "Helvetica", "white", 1, 2.5, 4)
                .addGridText(i + 1, 1, [expense.value], 1, "Helvetica", "white", 1, 2.5, 4);
            total += expense.value;
        }
        this.grid.addGridText(11, 0, ["TOTAL"], 1, "Helvetica", "white", 1, 2.5, 4)
            .addGridText(11, 1, [total], 1, "Helvetica", "white", 1, 2.5, 4)
            .addGridBackgroundColor(11, 1, "red");
        this.loaded = true;
        this.context.registerResizeConsumer(this);
        console.log("[ExpenseSummaryComponent] object has been loaded.", this);
    }

    update(tick) {
        this.x = this.getFullWidthPercent(Constants.EXPENSE_SUMMARY_PERCENT_X);
        this.y = this.getFullHeightPercent(Constants.EXPENSE_SUMMARY_PERCENT_Y);
        super.update(tick);
        //this.grid.get(1, 1).getGridText().setTexts([this.getExpenses().mortgagePayment]);
        //this.grid.get(2, 1).getGridText().setTexts([this.getExpenses().incomeTax]);
        this.grid.update(this.tick);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {

    }
}