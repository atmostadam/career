import { CircleSolidDrawing } from "../drawing/CircleSolidDrawing";
import { RectangleSolidDrawing } from "../drawing/RectangleSolidDrawing";
import { TextDrawing } from "../drawing/TextDrawing";

export class RangeSliderComponent {
    constructor(context, percentX, percentY, percentW, percentH) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
        this.position = 0;
    }

    update(tick) {
        this.tick = tick;
    }

    draw(pricePerUnit, cash) {
        new RectangleSolidDrawing(
            this.context,
            this.percentX,
            this.percentY,
            this.percentW,
            this.percentH,
            "white"
        )
            .draw();
        let positionX = this.percentX + (this.position * (this.percentW / 10));
        let positionY = (this.percentY + this.percentH) / 2;
        new CircleSolidDrawing(
            this.context,
            positionX,
            positionY,
            1,
            "white"
        )
            .draw();
        new TextDrawing(
            this.context,
        ) {

        }
    }
}