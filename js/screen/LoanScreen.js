import {
    LOAN_SCREEN
} from "./../configuration/GameConfiguration.js";

export class LoanScreen {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (LOAN_SCREEN != this.context.getScreen()) {
            return;
        }
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}