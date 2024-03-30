export class TextDrawing {
    constructor(
        context,
        text,
        percentX,
        percentY,
        font,
        color
    ) {
        this.context = context;
        this.text = text;
        this.percentX = percentX;
        this.percentY = percentY;
        this.font = font;
        this.color = color;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(
            this.text,
            this.context.getWidthPercent(this.percentX),
            this.context.getHeightPercent(this.percentY)
        );
    }
}