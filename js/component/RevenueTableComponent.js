import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";
import {
    REVENUE_TABLE_COMPONENT_PERCENT_X,
    REVENUE_TABLE_COMPONENT_PERCENT_Y,
    REVENUE_TABLE_COMPONENT_PERCENT_W_ARRAY,
    REVENUE_TABLE_COMPONENT_PERCENT_H_ARRAY,
    REVENUE_TABLE_COMPONENT_PERCENT_BORDER,
    REVENUE_TABLE_COMPONENT_COLOR,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";

export class RevenueTableComponent {
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
            REVENUE_TABLE_COMPONENT_PERCENT_H_ARRAY,
            REVENUE_TABLE_COMPONENT_PERCENT_W_ARRAY)
            .addPercentX(REVENUE_TABLE_COMPONENT_PERCENT_X)
            .addPercentY(REVENUE_TABLE_COMPONENT_PERCENT_Y)
            .addBorderForAll(REVENUE_TABLE_COMPONENT_PERCENT_BORDER, REVENUE_TABLE_COMPONENT_COLOR)
            .addBackgroundForFirstRow(REVENUE_TABLE_COMPONENT_COLOR)
            .addBackground(REVENUE_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 1, REVENUE_TABLE_COMPONENT_COLOR)
            .addRowText(
                0,
                [
                    "REVENUE",
                    "$"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                1,
                [
                    "Salary",
                    "$" + this.context.getPlayer().getRevenue().getSalary()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                2,
                [
                    "Performance Bonus",
                    "$" + this.context.getPlayer().getRevenue().getPerformanceBonus()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                3,
                [
                    "Stock Options",
                    "$" + this.context.getPlayer().getRevenue().getStockOptions()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                11,
                [
                    "TOTAL",
                    "$" + this.context.getPlayer().getRevenue().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .build()
            .draw();
    }
}