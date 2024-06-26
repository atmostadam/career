import {
    INVESTMENT_TABLE_COMPONENT_PERCENT_X,
    INVESTMENT_TABLE_COMPONENT_PERCENT_Y,
    INVESTMENT_TABLE_COMPONENT_PERCENT_W_ARRAY,
    INVESTMENT_TABLE_COMPONENT_PERCENT_H_ARRAY,
    INVESTMENT_TABLE_COMPONENT_PERCENT_BORDER,
    INVESTMENT_TABLE_COMPONENT_COLOR,
    GAME_SCREEN_GRID_TITLE_TYPE,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "../configuration/GameConfiguration.js";
import { GridDrawingBuilder } from "../drawing/GridDrawingBuilder.js";

export class InvestmentTableComponent {
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
        // TODO: Buy & Sell
        new GridDrawingBuilder(
            this.context,
            INVESTMENT_TABLE_COMPONENT_PERCENT_H_ARRAY,
            INVESTMENT_TABLE_COMPONENT_PERCENT_W_ARRAY)
            .addPercentX(INVESTMENT_TABLE_COMPONENT_PERCENT_X)
            .addPercentY(INVESTMENT_TABLE_COMPONENT_PERCENT_Y)
            .addBorderForAll(INVESTMENT_TABLE_COMPONENT_PERCENT_BORDER, INVESTMENT_TABLE_COMPONENT_COLOR)
            .addBackgroundForFirstRow(INVESTMENT_TABLE_COMPONENT_COLOR)
            .addBackground(INVESTMENT_TABLE_COMPONENT_PERCENT_W_ARRAY.length - 1, 1, INVESTMENT_TABLE_COMPONENT_COLOR)
            .addBackground(INVESTMENT_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 2, INVESTMENT_TABLE_COMPONENT_COLOR)
            .addRowText(
                0,
                [
                    "ASSETS",
                    "$",
                    "PPS",
                    "#",
                    "BUY",
                    "",
                    "",
                    "SELL"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                1,
                [
                    this.context.getPlayer().getAssets().getBankAccount().getId(),
                    "$" + this.context.getPlayer().getAssets().getBankAccount().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                2,
                [
                    this.context.getPlayer().getAssets().getCar().getId(),
                    "$" + this.context.getPlayer().getAssets().getCar().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                3,
                [
                    this.context.getPlayer().getAssets().getCertificateOfDeposit().getId(),
                    "$" + this.context.getPlayer().getAssets().getCertificateOfDeposit().getValue(),
                    "$" + this.context.getPlayer().getAssets().getCertificateOfDeposit().getPrice(),
                    this.context.getPlayer().getAssets().getCertificateOfDeposit().getAmount(),
                    "1%",
                    "10%",
                    "100%",
                    "1%",
                    "10%",
                    "100%"
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y,
                "+1"
            )
            .addRowText(
                4,
                [
                    this.context.getPlayer().getAssets().getCorporateBond().getId(),
                    "$" + this.context.getPlayer().getAssets().getCorporateBond().getValue(),
                    "$" + this.context.getPlayer().getAssets().getCorporateBond().getPrice(),
                    this.context.getPlayer().getAssets().getCorporateBond().getAmount(),
                    "1%",
                    "10%",
                    "100%",
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
                    this.context.getPlayer().getAssets().getHouse().getId(),
                    "$" + this.context.getPlayer().getAssets().getHouse().getValue()
                ],
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                6,
                [
                    this.context.getPlayer().getAssets().getNasdaqIndex().getId(),
                    "$" + this.context.getPlayer().getAssets().getNasdaqIndex().getValue(),
                    "$" + this.context.getPlayer().getAssets().getNasdaqIndex().getPrice(),
                    this.context.getPlayer().getAssets().getNasdaqIndex().getAmount(),
                    "1%",
                    "10%",
                    "100%",
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
                7,
                [
                    this.context.getPlayer().getAssets().getNyseIndex().getId(),
                    "$" + this.context.getPlayer().getAssets().getNyseIndex().getValue(),
                    "$" + this.context.getPlayer().getAssets().getNyseIndex().getPrice(),
                    this.context.getPlayer().getAssets().getNyseIndex().getAmount(),
                    "1%",
                    "10%",
                    "100%",
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
                8,
                [
                    this.context.getPlayer().getAssets().getSavingsAccount().getId(),
                    "$" + this.context.getPlayer().getAssets().getSavingsAccount().getValue(),
                    "$" + this.context.getPlayer().getAssets().getSavingsAccount().getPrice(),
                    this.context.getPlayer().getAssets().getSavingsAccount().getAmount(),
                    "1%",
                    "10%",
                    "100%",
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
                9,
                [
                    this.context.getPlayer().getAssets().getSnp500Index().getId(),
                    "$" + this.context.getPlayer().getAssets().getSnp500Index().getValue(),
                    "$" + this.context.getPlayer().getAssets().getSnp500Index().getPrice(),
                    this.context.getPlayer().getAssets().getSnp500Index().getAmount(),
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
                10,
                [
                    this.context.getPlayer().getAssets().getTreasuryBill().getId(),
                    "$" + this.context.getPlayer().getAssets().getTreasuryBill().getValue(),
                    "$" + this.context.getPlayer().getAssets().getTreasuryBill().getPrice(),
                    this.context.getPlayer().getAssets().getTreasuryBill().getAmount(),
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
                    "$" + this.context.getPlayer().getAssets().getValue()
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