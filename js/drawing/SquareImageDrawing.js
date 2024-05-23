import { SquareSolidDrawing } from "./SquareSolidDrawing.js";

export class SquareImageDrawing {
    constructor(context, imageSrc, ix, iy, wh, percentX, percentY, percentWH) {
        this.context = context;
        this.imageSrc = imageSrc;
        this.ix = ix;
        this.iy = iy;
        this.w = wh;
        this.h = wh;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentWH;
        this.percentH = percentWH;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.drawImage(
            this.context.getImage(this.imageSrc),
            this.ix,
            this.iy,
            this.w,
            this.h,
            this.context.getWidthPercent(this.percentX),
            this.context.getHeightPercent(this.percentY),
            this.context.getHeightPercent(this.percentW),
            this.context.getHeightPercent(this.percentH)
        );
    }
}