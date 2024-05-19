export class RectangleImageDrawing {
    constructor(context, imageSrc, ix, iy, w, h, percentX, percentY, percentW, percentH) {
        this.context = context;
        this.imageSrc = imageSrc;
        this.ix = ix;
        this.iy = iy;
        this.w = w;
        this.h = h;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
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
            this.context.getWidthPercent(this.percentW),
            this.context.getHeightPercent(this.percentH)
        );
    }
}