import {
    LAST_YEAR_SCREEN
} from "./../configuration/GameConfiguration.js";

export class LastYearScreen {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (LAST_YEAR_SCREEN != this.context.getScreen()) {
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