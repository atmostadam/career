import { SquareSolidDrawing } from "./SquareSolidDrawing.js";

export class CircleSolidDrawing {
    constructor(context, percentX, percentY, percentR, color) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentR = percentR;
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
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}