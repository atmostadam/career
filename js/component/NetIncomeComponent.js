import { TextDrawing } from "../drawing/TextDrawing.js";
import {
    GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_PERCENT_X,
    GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_PERCENT_Y,
    GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_TYPE,
    GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_POSITIVE_COLOR,
    GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_NEGATIVE_COLOR
} from "./../configuration/GameConfiguration.js";

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

    onUnclick(x, y) {

    }

    draw() {
        let netIncome = this.context.getPlayer().getRevenue().getValue() - this.context.getPlayer().getExpenses().getValue();
        new TextDrawing(
            this.context,
            "$" + netIncome,
            GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_PERCENT_X,
            GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_PERCENT_Y,
            GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_TYPE,
            netIncome > -1 ? GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_POSITIVE_COLOR : GAME_SCREEN_LAST_YEAR_NET_INCOME_TEXT_NEGATIVE_COLOR
        )
            .draw();
    }
}