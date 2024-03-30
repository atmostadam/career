import { DEFAULT_GRID_DRAWING_PRIORITY } from "./DrawingConstants.js";
import { sumArr } from "./DrawingFunctions.js";

export class GridDrawing {
    constructor(context, percentX, percentY, rowPercents, columnPercents) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.priorties = DEFAULT_GRID_DRAWING_PRIORITY;
        this.numberOfPriorities = DEFAULT_GRID_DRAWING_PRIORITY.length;
        this.setEmptyGrid(rowPercents, columnPercents);
    }

    update(tick) {
        this.tick = tick;
        for (let p = 0; p < this.numberOfPriorities; p++) {
            for (let r = 0; r < this.numberOfRows; r++) {
                for (let c = 0; c < this.numberOfColumns; c++) {
                    for (let a = 0; a < this.grid[r][c].length; a++) {
                        if (this.grid[r][c][a] instanceof this.priorties[p]) {
                            this.grid[r][c][a].update(this.tick);
                        }
                    }
                }
            }
        }
    }

    draw() {
        for (let p = 0; p < this.numberOfPriorities; p++) {
            for (let r = 0; r < this.numberOfRows; r++) {
                for (let c = 0; c < this.numberOfColumns; c++) {
                    for (let a = 0; a < this.grid[r][c].length; a++) {
                        if (this.grid[r][c][a] instanceof this.priorties[p]) {
                            this.grid[r][c][a].draw();
                        }
                    }
                }
            }
        }
    }

    getCellDrawings(row, column) {
        return this.grid[row][column];
    }

    pushDrawing(row, column, drawing) {
        this.grid[row][column].push(drawing);
    }

    getNumberOfRows() {
        return this.numberOfRows;
    }

    getNumberOfColumns() {
        return this.numberOfColumns;
    }

    setPercentX(percentX) {
        this.percentX = percentX;
    }

    setPercentY(percentY) {
        this.percentY = percentY;
    }

    getCellPercentX(column) {
        return this.percentX + sumArr(this.columnPercents, column);
    }

    getCellPercentY(row) {
        return this.percentY + sumArr(this.rowPercents, row);
    }

    getCellPercentW(column) {
        return this.columnPercents[column];
    }

    getCellPercentH(row) {
        return this.rowPercents[row];
    }

    setEmptyGrid(rowPercents, columnPercents) {
        this.rowPercents = rowPercents;
        this.columnPercents = columnPercents;
        this.numberOfRows = rowPercents.length;
        this.numberOfColumns = columnPercents.length;
        this.grid = [];
        for (let r = 0; r < this.numberOfRows; r++) {
            let row = []
            for (let c = 0; c < this.numberOfColumns; c++) {
                row.push([]);
            }
            this.grid.push(row);
        }
    }

    isEmpty() {
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                if (!this.grid[r][c].isEmpty()) {
                    return false;
                }
            }
        }
        return true;
    }

    asArrayOfArrays() {
        return this.grid;
    }
}