export class SquareSolidDrawing {
    constructor(context, percentX, percentY, percentWH, color) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentWH;
        this.percentH = percentWH;
        this.color = color;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.context.getWidthPercent(this.percentX),
            this.context.getHeightPercent(this.percentY),
            this.context.getHeightPercent(this.percentW),
            this.context.getHeightPercent(this.percentH));
    }
}