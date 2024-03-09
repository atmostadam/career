import { Grid } from "../../../../boot/canvas/model/grid/Grid.js";
import { Gameable } from "../../../../boot/base/Gameable.js";
import { insideRectangle } from "./../../../../boot/function/GameFunctions.js";
import { Constants } from "./../../../../boot/constants/Constants.js"

export class ActionComponent extends Gameable {
    constructor(context) {
        super(context);
        this.context.addClickSubscriber(this);
        console.log("New instance of [ActionComponent] object.", this);
    }

    init() {
        this.validateAndSetScreen();

        this.columnPercentWs = this.splitToEqualPartsArray(Constants.ACTION_GRID_PERCENT_W, Constants.ACTION_GRID_NUMBER_OF_COLUMNS, 0);
        this.rowPercentHs = this.splitToEqualPartsArray(Constants.ACTION_GRID_PERCENT_H, Constants.ACTION_GRID_NUMBER_OF_ROWS, 0);

        this.grid = new Grid(
            this.context,
            this.getFullWidthPercent(Constants.ACTION_GRID_PERCENT_X),
            this.getFullHeightPercent(Constants.ACTION_GRID_PERCENT_Y),
            this.columnPercentWs,
            this.rowPercentHs)
            .addGridCircle(0, 0, 80, "purple")
            .addGridCircle(0, 1, 80, "purple")
            .addGridCircle(0, 2, 80, "purple")
            .addGridCircle(1, 0, 80, "purple")
            .addGridCircle(1, 1, 80, "purple")
            .addGridCircle(1, 2, 80, "purple")
            .addGridCircle(2, 0, 80, "purple")
            .addGridCircle(2, 1, 80, "purple")
            .addGridCircleOutlined(0, 0, 80, 3, "white")
            .addGridCircleOutlined(0, 1, 80, 3, "white")
            .addGridCircleOutlined(0, 2, 80, 3, "white")
            .addGridCircleOutlined(1, 0, 80, 3, "white")
            .addGridCircleOutlined(1, 1, 80, 3, "white")
            .addGridCircleOutlined(1, 2, 80, 3, "white")
            .addGridCircleOutlined(2, 0, 80, 3, "white")
            .addGridCircleOutlined(2, 1, 80, 3, "white")
            .addGridImage(0, 0, "money", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(0, 1, "credit-card", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(0, 2, "house", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(1, 0, "chart", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(1, 1, "school", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(1, 2, "family", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(2, 0, "phone", 0, 0, 512, 512, 128, 128, 15, 15)
            .addGridImage(2, 1, "drivers-license", 0, 0, 512, 512, 128, 128, 15, 15)
        this.loaded = true;
        this.context.registerResizeConsumer(this);
        console.log("[ActionComponent] object has been loaded.", this);
    }

    update(tick) {
        super.update(tick);
        this.grid.update(this.tick);
        for (let row = 0; row < this.grid.getNumberOfRows(); row++) {
            for (let column = 0; column < this.grid.getNumberOfColumns(); column++) {
                var color = "purple";
                if (this.grid.mouseOver(row, column)) {
                    color = "green";
                }
                this.grid.get(row, column).setCircleColor(color);
            }
        }
    }

    draw() {
        this.grid.draw();
    }

    onMouseOver(row, column) {
        let x = this.context.getMouseListener().mousePositionX;
        let y = this.context.getMouseListener().mousePositionY;
        let expectX = this.grid.findCellX(column);
        let expectY = this.grid.findCellY(row);
        let w = this.getFullWidthPercent(this.columnPercentWs[column]);
        let h = this.getFullHeightPercent(this.rowPercentHs[row]);
        if (insideRectangle(x, y, expectX, expectY, w, h)) {
            return "green";
        }
        return "purple";
    }

    onClick(x, y) { }
}