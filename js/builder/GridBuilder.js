import { RectangleOutline } from "./../drawing/RectangleOutline.js";
import { Grid } from "./../model/grid/Grid.js";
import { sumArr } from "../function/MathFunctions.js";

export class GridBuilder {
    constructor(context, columnPercentWs, rowPercentHs, percentX, percentY, percentW, percentH) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
        this.columnPercentWs = columnPercentWs;
        this.rowPercentHs = rowPercentHs;
        this.grid = GridBuilder.emptyGrid(
            this.columnPercentWs.length,
            this.rowPercentHs.length);
    }

    addBorder(row, column, size, color) {
        this.grid[row][column].push(
            new RectangleOutline(
                this.context,
                sumArr(this.rowPercentHs, column),
                sumArr(this.columnPercentWs, row),
                this.rowPercentHs[column],
                this.columnPercentWs[row],
                size,
                color));
        return this;
    }

    build() {
        return new Grid(
            this.context,
            this.grid,
            this.percentX,
            this.percentY,
            this.percentW,
            this.percentH);
    }

    static emptyGrid(numberOfRows, numberOfColumns) {
        let grid = [];
        for (let r = 0; r < numberOfRows; r++) {
            let row = [];
            for (let c = 0; c < numberOfColumns; c++) {
                row.push([]);
            }
            grid.push(row);
        }
        return grid;
    }
}