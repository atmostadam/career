import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";
import {
    GAME_SCREEN_REVENUE_PERCENT_X,
    GAME_SCREEN_REVENUE_PERCENT_Y,
    GAME_SCREEN_REVENUE_PERCENT_W_ARRAY,
    GAME_SCREEN_REVENUE_PERCENT_H_ARRAY,
    GAME_SCREEN_REVENUE_PERCENT_BORDER,
    GAME_SCREEN_REVENUE_COLOR,
    GAME_SCREEN_GRID_TITLE_TYPE,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";

export class RevenueTableComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new GridDrawingBuilder(
            this.context,
            GAME_SCREEN_REVENUE_PERCENT_H_ARRAY,
            GAME_SCREEN_REVENUE_PERCENT_W_ARRAY)
            .addPercentX(GAME_SCREEN_REVENUE_PERCENT_X)
            .addPercentY(GAME_SCREEN_REVENUE_PERCENT_Y)
            .addBorderForAll(GAME_SCREEN_REVENUE_PERCENT_BORDER, GAME_SCREEN_REVENUE_COLOR)
            .addBackgroundForFirstRow(GAME_SCREEN_REVENUE_COLOR)
            .addBackground(GAME_SCREEN_REVENUE_PERCENT_H_ARRAY.length - 1, 1, GAME_SCREEN_REVENUE_COLOR)
            .addText(
                0,
                0,
                "REVENUE",
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y
            )
            .build()
            .draw();
    }
}