import { RectangleSolidDrawing } from "./RectangleSolidDrawing.js";

export class GridBackgroundDrawing {
    constructor(context, percentX, percentY, percentWArray, percentHArray, backgroundColor) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentWArray = percentWArray;
        this.percentHArray = percentHArray;
        this.backgroundColor = backgroundColor;
        this.numberOfRows = percentHArray.length;
        this.numberOfColumns = percentWArray.length;
    }

    draw() {
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                new RectangleSolidDrawing(
                    this.context,
                    this.percentX + sumArr(this.percentWArray, c),
                    this.percentY + sumArr(this.percentHArray, r),
                    this.percentWArray[c],
                    this.percentHArray[r],
                    this.borderPercent,
                    this.borderColor
                ).draw();
            }
        }
    }
}