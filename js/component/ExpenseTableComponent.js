import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";
import {
    EXPENSE_TABLE_COMPONENT_PERCENT_X,
    EXPENSE_TABLE_COMPONENT_PERCENT_Y,
    EXPENSE_TABLE_COMPONENT_PERCENT_W_ARRAY,
    EXPENSE_TABLE_COMPONENT_PERCENT_H_ARRAY,
    EXPENSE_TABLE_COMPONENT_PERCENT_BORDER,
    EXPENSE_TABLE_COMPONENT_COLOR,
    GAME_SCREEN_GRID_TITLE_TYPE,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";

export class ExpenseTableComponent {
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
            EXPENSE_TABLE_COMPONENT_PERCENT_H_ARRAY,
            EXPENSE_TABLE_COMPONENT_PERCENT_W_ARRAY)
            .addPercentX(EXPENSE_TABLE_COMPONENT_PERCENT_X)
            .addPercentY(EXPENSE_TABLE_COMPONENT_PERCENT_Y)
            .addBorderForAll(EXPENSE_TABLE_COMPONENT_PERCENT_BORDER, EXPENSE_TABLE_COMPONENT_COLOR)
            .addBackgroundForFirstRow(EXPENSE_TABLE_COMPONENT_COLOR)
            .addBackground(EXPENSE_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 1, EXPENSE_TABLE_COMPONENT_COLOR)
            .addText(
                0,
                0,
                "EXPENSES",
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y
            )
            .addRowText(
                1,
                [
                    this.context.getPlayer().getExpenses().getCarMaintenance().getId(),
                    "$" + this.context.getPlayer().getExpenses().getCarMaintenance().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                2,
                [
                    this.context.getPlayer().getExpenses().getCarTax().getId(),
                    "$" + this.context.getPlayer().getExpenses().getCarTax().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                3,
                [
                    this.context.getPlayer().getExpenses().getCollege().getId(),
                    "$" + this.context.getPlayer().getExpenses().getCollege().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                4,
                [
                    this.context.getPlayer().getExpenses().getCostPerChild().getId(),
                    "$" + this.context.getPlayer().getExpenses().getCostPerChild().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                5,
                [
                    this.context.getPlayer().getExpenses().getEmployerFicaTax().getId(),
                    "$" + this.context.getPlayer().getExpenses().getEmployerFicaTax().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                6,
                [
                    this.context.getPlayer().getExpenses().getFicaTax().getId(),
                    "$" + this.context.getPlayer().getExpenses().getFicaTax().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                7,
                [
                    this.context.getPlayer().getExpenses().getGas().getId(),
                    "$" + this.context.getPlayer().getExpenses().getGas().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                8,
                [
                    this.context.getPlayer().getExpenses().getGroceries().getId(),
                    "$" + this.context.getPlayer().getExpenses().getGroceries().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                9,
                [
                    this.context.getPlayer().getExpenses().getHouseMaintenance().getId(),
                    "$" + this.context.getPlayer().getExpenses().getHouseMaintenance().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                10,
                [
                    this.context.getPlayer().getExpenses().getIncomeTax().getId(),
                    "$" + this.context.getPlayer().getExpenses().getIncomeTax().getValue()
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
                    "$" + this.context.getPlayer().getExpenses().getValue()
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