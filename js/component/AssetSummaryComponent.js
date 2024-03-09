import { Grid } from "../../../../boot/canvas/model/grid/Grid.js";
import { Gameable } from "../../../../boot/base/Gameable.js";
import { Constants } from "../../../../boot/constants/Constants.js";

export class AssetSummaryComponent extends Gameable {
    constructor(context) {
        super(context);
        this.columnPercentWs = [16, 7];
        this.rowPercentHs = this.splitToEqualPartsArray(36, 12);
        console.log("New instance of [AssetSummaryComponent] object.", this);
    }

    init() {
        this.grid = new Grid(
            this.context,
            this.x,
            this.y,
            this.columnPercentWs,
            this.rowPercentHs)
            .addGridBackgroundColor(0, 0, "green")
            .addGridBackgroundColor(0, 1, "green")
            .addGridBackgroundColor(11, 1, "green")
            .addGridText(0, 0, ["Top 10 Assets"], 1.2, "Helvetica", "white", 1, 2.5, 4)
            .addGridText(0, 1, ["$"], 1.2, "Helvetica", "white", 1, 2.5, 4)
            .addBorderForAll(2, "green");
        var total = 0;
        for (let i = 0; i < 10; i++) {
            let asset = this.getAssets().assetList[i];
            this.grid.addGridText(i + 1, 0, [asset.label], 1, "Helvetica", "white", 1, 2.5, 4)
                .addGridText(i + 1, 1, [asset.value], 1, "Helvetica", "white", 1, 2.5, 4);
            total += asset.value;
        }
        this.grid.addGridText(11, 0, ["TOTAL"], 1, "Helvetica", "white", 1, 2.5, 4)
            .addGridText(11, 1, [total], 1, "Helvetica", "white", 1, 2.5, 4)
            .addGridBackgroundColor(11, 1, "green");
        this.loaded = true;
        this.context.registerResizeConsumer(this);
        console.log("[AssestSummaryComponent] object has been loaded.", this);
    }

    update(tick) {
        this.x = this.getFullWidthPercent(Constants.ASSET_SUMMARY_PERCENT_X);
        this.y = this.getFullHeightPercent(Constants.ASSET_SUMMARY_PERCENT_Y);
        super.update(tick);
        this.grid.get(1, 1).getGridText().setTexts([this.getAssets().savingsAccount]);
        this.grid.get(2, 1).getGridText().setTexts([this.getAssets().checkingAccount]);
        this.grid.get(3, 1).getGridText().setTexts([this.getAssets().cds]);
        this.grid.get(4, 1).getGridText().setTexts([this.getAssets().stocks]);
        this.grid.get(5, 1).getGridText().setTexts([this.getAssets().bonds]);
        this.grid.get(6, 1).getGridText().setTexts([this.getAssets().indexFunds]);
        this.grid.get(7, 1).getGridText().setTexts([this.getAssets().house]);
        this.grid.get(8, 1).getGridText().setTexts([this.getAssets().car]);
        this.grid.update(this.tick);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {

    }
}