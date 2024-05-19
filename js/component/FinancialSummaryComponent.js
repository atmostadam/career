import { RectangleOutlineDrawing } from "../drawing/RectangleOutlineDrawing.js";
import {
    GAME_SCREEN_FINANCIALS_PERCENT_X,
    GAME_SCREEN_FINANCIALS_PERCENT_Y,
    GAME_SCREEN_FINANCIALS_PERCENT_W,
    GAME_SCREEN_FINANCIALS_PERCENT_H,
    GAME_SCREEN_FINANCIALS_PERCENT_BORDER,
    GAME_SCREEN_FINANCIALS_COLOR
} from "./../configuration/GameConfiguration.js";

export class FinancialSummaryComponent {
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

    onUnclick(x, y) {

    }

    draw() {
        new RectangleOutlineDrawing(
            this.context,
            GAME_SCREEN_FINANCIALS_PERCENT_X,
            GAME_SCREEN_FINANCIALS_PERCENT_Y,
            GAME_SCREEN_FINANCIALS_PERCENT_W,
            GAME_SCREEN_FINANCIALS_PERCENT_H,
            GAME_SCREEN_FINANCIALS_PERCENT_BORDER,
            GAME_SCREEN_FINANCIALS_COLOR)
            .draw();
    }
}