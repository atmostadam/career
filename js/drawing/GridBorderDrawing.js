import { RectangleOutlineDrawing } from "./RectangleOutlineDrawing.js";
import { sumArr } from "./DrawingFunctions.js";
import { RectangleSolidDrawing } from "./RectangleSolidDrawing.js";

export class GridBorderDrawing {
    constructor(
        context,
        percentX,
        percentY,
        percentWArray,
        percentHArray,
        borderPercent,
        borderColor,
        backgroundColor,
        backgroundOnTop,
        backgroundOnBottom
    ) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentWArray = percentWArray;
        this.percentHArray = percentHArray;
        this.borderPercent = borderPercent;
        this.borderColor = borderColor;
        this.backgroundColor = backgroundColor;
        this.backgroundOnTop = backgroundOnTop ? backgroundOnTop : false;
        this.backgroundOnBottom = backgroundOnBottom ? backgroundOnBottom : false;
        this.numberOfRows = percentHArray.length;
        this.numberOfColumns = percentWArray.length;
    }

    draw() {
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                if (this.backgroundColor) {
                    if ((!this.backgroundOnTop && !this.backgroundOnBottom) ||
                        (this.backgroundOnTop && r == 0) ||
                        (this.backgroundOnBottom && r == this.numberOfRows - 1)) {
                        new RectangleSolidDrawing(
                            this.context,
                            this.percentX + sumArr(this.percentWArray, c),
                            this.percentY + sumArr(this.percentHArray, r),
                            this.percentWArray[c],
                            this.percentHArray[r],
                            this.backgroundColor
                        ).draw();
                    }

                }
                new RectangleOutlineDrawing(
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

/*
        for (let r = 0; r < this.numberOfRows; r++) {
    for (let c = 0; c < this.numberOfColumns; c++) {
        let offSetX = sumArr(this.percentWArray, c);
        let offSetY = sumArr(GAME_SCREEN_ASSET_PERCENT_H_ARRAY, r);
        let outlinePercentX = GAME_SCREEN_ASSET_PERCENT_X + offSetX;
        let outlinePercentY = GAME_SCREEN_ASSET_PERCENT_Y + offSetY;
        let outlinePercentW = GAME_SCREEN_ASSET_PERCENT_W_ARRAY[c];
        let outlinePercentH = GAME_SCREEN_ASSET_PERCENT_H_ARRAY[r];
        let outline = new RectangleOutlineDrawing(
            this.context,
            outlinePercentX,
            outlinePercentY,
            outlinePercentW,
            outlinePercentH,
            this.borderPercent,
            GAME_SCREEN_ASSET_COLOR
        );
        outline.update(this.tick)
        outline.draw();
    }
}
}
}
*/