export class RectangleOutline {
    constructor(context, percentX, percentY, percentW, percentH, size, color) {
        this.context = context;
        this.percentX = percentX / 100;
        this.percentY = percentY / 100;
        this.percentW = percentW / 100;
        this.percentH = percentH / 100;
        this.size = size;
        this.color = color;
    }

    update(tick, parentX, parentY, parentW, parentH) {
        this.tick = tick;
        this.x = parentX * this.percentX;
        this.y = parentY * this.percentY;
        this.w = parentW * this.percentW;
        this.h = parentH * this.percentH;
    }

    draw() {
        let ctx = this.context.getCtx();
        ctx.beginPath();
        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    }
}

