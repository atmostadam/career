export class CircleOutlineDrawing {
    constructor(context, percentX, percentY, percentR, percentBorderSize, color) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentR = percentR;
        this.percentBorderSize = percentBorderSize;
        this.color = color;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.beginPath();
        ctx.arc(
            this.context.getWidthPercent(this.percentX),
            this.context.getHeightPercent(this.percentY),
            this.context.getHeightPercent(this.percentR),
            0,
            2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.context.getHeightPercent(this.percentBorderSize);
        ctx.stroke();
    }
}