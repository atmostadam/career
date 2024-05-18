export class SquareOutlineDrawing {
    constructor(context, percentX, percentY, percentWH, percentBorderSize, color) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentWH;
        this.percentH = percentWH;
        this.percentBorderSize = percentBorderSize;
        this.color = color;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.beginPath();
        ctx.lineWidth = this.context.getHeightPercent(this.percentBorderSize);
        ctx.strokeStyle = this.color;
        ctx.rect(
            this.context.getWidthPercent(this.percentX),
            this.context.getHeightPercent(this.percentY),
            this.context.getHeightPercent(this.percentW),
            this.context.getHeightPercent(this.percentH));
        ctx.stroke();
    }
}