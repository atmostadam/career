export class RectangleSolidDrawing {
    constructor(context, percentX, percentY, percentW, percentH, color) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
        this.color = color;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.context.getWidthPercent(this.percentX),
            this.context.getHeightPercent(this.percentY),
            this.context.getWidthPercent(this.percentW),
            this.context.getHeightPercent(this.percentH));
    }
}

