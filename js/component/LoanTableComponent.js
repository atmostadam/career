import { GridDrawingBuilder } from "../drawing/GridDrawingBuilder.js";
import {
    LOAN_TABLE_COMPONENT_PERCENT_X,
    LOAN_TABLE_COMPONENT_PERCENT_Y,
    LOAN_TABLE_COMPONENT_PERCENT_W_ARRAY,
    LOAN_TABLE_COMPONENT_PERCENT_H_ARRAY,
    LOAN_TABLE_COMPONENT_PERCENT_BORDER,
    LOAN_TABLE_COMPONENT_COLOR,
    GAME_SCREEN_GRID_TITLE_TYPE,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "../configuration/GameConfiguration.js";

export class LoanTableComponent {
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
        // TODO: Borrow & Pay Off
        new GridDrawingBuilder(
            this.context,
            LOAN_TABLE_COMPONENT_PERCENT_H_ARRAY,
            LOAN_TABLE_COMPONENT_PERCENT_W_ARRAY)
            .addPercentX(LOAN_TABLE_COMPONENT_PERCENT_X)
            .addPercentY(LOAN_TABLE_COMPONENT_PERCENT_Y)
            .addBorderForAll(LOAN_TABLE_COMPONENT_PERCENT_BORDER, LOAN_TABLE_COMPONENT_COLOR)
            .addBackgroundForFirstRow(LOAN_TABLE_COMPONENT_COLOR)
            .addBackground(LOAN_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 1, LOAN_TABLE_COMPONENT_COLOR)
            .addBackground(LOAN_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 2, LOAN_TABLE_COMPONENT_COLOR)
            .addRowText(
                0,
                [
                    "LIABILITIES",
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
                    this.context.getPlayer().getLiabilities().getCarLoan().getId(),
                    "$" + this.context.getPlayer().getLiabilities().getCarLoan().getValue(),
                    "1%",
                    "10%",
                    "100%"
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
                    "1%",
                    "10%",
                    "100%"
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
                    "1%",
                    "10%",
                    "100%"
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
                    "1%",
                    "10%",
                    "100%"
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
                    "1%",
                    "10%",
                    "100%"
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
                    "$" + this.context.getPlayer().getLiabilities().getValue()
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