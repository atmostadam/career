import { GridBorderDrawing } from "./../drawing/GridBorderDrawing.js";
import {
    GAME_SCREEN_REVENUE_PERCENT_X,
    GAME_SCREEN_REVENUE_PERCENT_Y,
    GAME_SCREEN_REVENUE_PERCENT_W_ARRAY,
    GAME_SCREEN_REVENUE_PERCENT_H_ARRAY,
    GAME_SCREEN_REVENUE_PERCENT_BORDER,
    GAME_SCREEN_REVENUE_COLOR
} from "./../configuration/GameConfiguration.js";

export class RevenueTableComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new GridBorderDrawing(
            this.context,
            GAME_SCREEN_REVENUE_PERCENT_X,
            GAME_SCREEN_REVENUE_PERCENT_Y,
            GAME_SCREEN_REVENUE_PERCENT_W_ARRAY,
            GAME_SCREEN_REVENUE_PERCENT_H_ARRAY,
            GAME_SCREEN_REVENUE_PERCENT_BORDER,
            GAME_SCREEN_REVENUE_COLOR,
            GAME_SCREEN_REVENUE_COLOR,
            true,
            true
        ).draw();
    }
}