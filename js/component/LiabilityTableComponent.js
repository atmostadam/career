import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";
import {
    GAME_SCREEN_LIABILITY_PERCENT_X,
    GAME_SCREEN_LIABILITY_PERCENT_Y,
    GAME_SCREEN_LIABILITY_PERCENT_W_ARRAY,
    GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY,
    GAME_SCREEN_LIABILITY_PERCENT_BORDER,
    GAME_SCREEN_LIABILITY_COLOR,
    GAME_SCREEN_GRID_TITLE_TYPE,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";

export class LiabilityTableComponent {
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
        new GridDrawingBuilder(
            this.context,
            GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY,
            GAME_SCREEN_LIABILITY_PERCENT_W_ARRAY)
            .addPercentX(GAME_SCREEN_LIABILITY_PERCENT_X)
            .addPercentY(GAME_SCREEN_LIABILITY_PERCENT_Y)
            .addBorderForAll(GAME_SCREEN_LIABILITY_PERCENT_BORDER, GAME_SCREEN_LIABILITY_COLOR)
            .addBackgroundForFirstRow(GAME_SCREEN_LIABILITY_COLOR)
            .addBackground(GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY.length - 1, 1, GAME_SCREEN_LIABILITY_COLOR)
            .addBackground(GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY.length - 1, 2, GAME_SCREEN_LIABILITY_COLOR)
            .addText(
                0,
                0,
                "LIABILITIES",
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y
            )
            .addRowText(
                1,
                [
                    this.context.getPlayer().getLiabilities().getCarLoan().getId(),
                    "$" + this.context.getPlayer().getLiabilities().getCarLoan().getValue(),
                    "PAY"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                2,
                [
                    this.context.getPlayer().getLiabilities().getCreditCardBalance().getId(),
                    "$" + this.context.getPlayer().getLiabilities().getCreditCardBalance().getValue(),
                    "PAY"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                3,
                [
                    this.context.getPlayer().getLiabilities().getHomeEquityLoan().getId(),
                    "$" + this.context.getPlayer().getLiabilities().getHomeEquityLoan().getValue(),
                    "PAY"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                4,
                [
                    this.context.getPlayer().getLiabilities().getMortgage().getId(),
                    "$" + this.context.getPlayer().getLiabilities().getMortgage().getValue(),
                    "PAY"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                5,
                [
                    this.context.getPlayer().getLiabilities().getStudentLoan().getId(),
                    "$" + this.context.getPlayer().getLiabilities().getStudentLoan().getValue(),
                    "PAY"
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
                    "$" + this.context.getPlayer().getLiabilities().getValue(),
                    "PAY"
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