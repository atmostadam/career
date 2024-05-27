import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";
import {
    GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_X,
    GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_Y,
    GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_W_ARRAY,
    GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_H_ARRAY,
    GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_BORDER,
    GAME_SCREEN_LAST_YEAR_REVENUE_COLOR,
    GAME_SCREEN_LAST_YEAR_GRID_TITLE_TYPE,
    GAME_SCREEN_LAST_YEAR_GRID_TITLE_COLOR,
    GAME_SCREEN_LAST_YEAR_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_LAST_YEAR_GRID_TITLE_PERCENT_OFFSET_Y,
    GAME_SCREEN_LAST_YEAR_GRID_TEXT_TYPE,
    GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";

export class LastYearRevenueTableComponent {
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
        new GridDrawingBuilder(
            this.context,
            GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_H_ARRAY,
            GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_W_ARRAY)
            .addPercentX(GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_X)
            .addPercentY(GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_Y)
            .addBorderForAll(GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_BORDER, GAME_SCREEN_LAST_YEAR_REVENUE_COLOR)
            .addBackgroundForFirstRow(GAME_SCREEN_LAST_YEAR_REVENUE_COLOR)
            .addBackground(GAME_SCREEN_LAST_YEAR_REVENUE_PERCENT_H_ARRAY.length - 1, 1, GAME_SCREEN_LAST_YEAR_REVENUE_COLOR)
            .addText(
                0,
                0,
                "REVENUE",
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_TYPE,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_COLOR,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_PERCENT_OFFSET_X,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_PERCENT_OFFSET_Y
            )
            .addRowText(
                1,
                [
                    "Salary",
                    "$" + this.context.getPlayer().getRevenue().getSalary()
                ],
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_TYPE,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_COLOR,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                2,
                [
                    "Performance Bonus",
                    "$" + this.context.getPlayer().getRevenue().getPerformanceBonus()
                ],
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_TYPE,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_COLOR,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                3,
                [
                    "Stock Options",
                    "$" + this.context.getPlayer().getRevenue().getStockOptions()
                ],
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_TYPE,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_COLOR,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                11,
                [
                    "TOTAL",
                    "$" + this.context.getPlayer().getRevenue().getValue()
                ],
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_TYPE,
                GAME_SCREEN_LAST_YEAR_GRID_TITLE_COLOR,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_LAST_YEAR_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .build()
            .draw();
    }
}