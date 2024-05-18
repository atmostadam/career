import { TextDrawing } from "../drawing/TextDrawing.js";

export class JobTitleComponent {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    draw() {
        new TextDrawing(
            this.context,
            this.context.getPlayer().getJob().getTitle(),
            42,
            20,
            "32pt Helvetica",
            "white"
        )
            .draw();
        new TextDrawing(
            this.context,
            "$" + this.context.getPlayer().getJob().getSalary(),
            42,
            26,
            "32pt Helvetica",
            "green"
        )
            .draw();
    }
}