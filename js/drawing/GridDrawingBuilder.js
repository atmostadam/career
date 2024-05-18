import { GridDrawing } from "./GridDrawing.js";
import { RectangleOutlineDrawing } from "./RectangleOutlineDrawing.js";
import { RectangleSolidDrawing } from "./RectangleSolidDrawing.js";
import { TextDrawing } from "./TextDrawing.js";

export class GridDrawingBuilder {
    constructor(context, rowPercents, columnPercents) {
        this.context = context;
        this.grid = new GridDrawing(
            this.context,
            0,
            0,
            rowPercents,
            columnPercents);
    }

    addPercentX(percentX) {
        this.grid.setPercentX(percentX);
        return this;
    }

    addPercentY(percentY) {
        this.grid.setPercentY(percentY);
        return this;
    }

    addBorder(row, column, size, color) {
        this.grid.pushDrawing(
            row,
            column,
            new RectangleOutlineDrawing(
                this.context,
                this.grid.getCellPercentX(column),
                this.grid.getCellPercentY(row),
                this.grid.getCellPercentW(column),
                this.grid.getCellPercentH(row),
                size,
                color
            ));
        return this;
    }

    addBorderForAll(size, color) {
        for (let r = 0; r < this.grid.getNumberOfRows(); r++) {
            for (let c = 0; c < this.grid.getNumberOfColumns(); c++) {
                this.addBorder(r, c, size, color);
            }
        }
        return this;
    }

    addBackground(row, column, color) {
        this.grid.pushDrawing(
            row,
            column,
            new RectangleSolidDrawing(
                this.context,
                this.grid.getCellPercentX(column),
                this.grid.getCellPercentY(row),
                this.grid.getCellPercentW(column),
                this.grid.getCellPercentH(row),
                color
            ));
        return this;
    }

    addBackgroundForAll(color) {
        for (let r = 0; r < this.grid.getNumberOfRows(); r++) {
            for (let c = 0; c < this.grid.getNumberOfColumns(); c++) {
                this.addBackground(r, c, color);
            }
        }
        return this;
    }

    addBackgroundForFirstRow(color) {
        for (let c = 0; c < this.grid.getNumberOfColumns(); c++) {
            this.addBackground(0, c, color);
        }
        return this;
    }

    addBackgroundForLastRow(color) {
        for (let c = 0; c < this.grid.getNumberOfColumns(); c++) {
            this.addBackground(this.grid.getNumberOfRows() - 1, c, color);
        }
        return this;
    }

    addText(row, column, text, font, color, offsetPercentX, offsetPercentY) {
        this.grid.pushDrawing(
            row,
            column,
            new TextDrawing(
                this.context,
                text,
                this.grid.getCellPercentX(column) + offsetPercentX,
                this.grid.getCellPercentY(row) + offsetPercentY,
                font,
                color
            ));
        return this;
    }

    addRowText(row, textArray, font, color, offsetPercentX, offsetPercentY) {
        for (let i = 0; i < textArray.length; i++) {
            this.addText(row, i, textArray[i], font, color, offsetPercentX, offsetPercentY);
        }
        return this;
    }

    addGridText(startRow, textArrayOfArrays, font, color, offsetPercentX, offsetPercentY) {
        let numberOfRows = textArrayOfArrays.length + startRow;
        for (let r = startRow; r < numberOfRows; r++) {
            this.addRowText(r, textArrayOfArrays[r], font, color, offsetPercentX, offsetPercentY);
        }
        return this;
    }

    build() {
        return this.grid;
    }
}