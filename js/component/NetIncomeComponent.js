import { TextDrawing } from "../drawing/TextDrawing.js";

export class NetIcomeComponent {
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
        let netIncome = this.context.getPlayer().getRevenue().getValue() - this.context.getPlayer().getExpenses().getValue();
        new TextDrawing(
            this.context,
            "$" + netIncome,
            42,
            82,
            "50pt Helvetica",
            netIncome > -1 ? "green" : "red"
        )
            .draw();
    }
}