import {
    GAME_SCREEN_ASSET_PERCENT_X,
    GAME_SCREEN_ASSET_PERCENT_Y,
    GAME_SCREEN_ASSET_PERCENT_W_ARRAY,
    GAME_SCREEN_ASSET_PERCENT_H_ARRAY,
    GAME_SCREEN_ASSET_PERCENT_BORDER,
    GAME_SCREEN_ASSET_COLOR,
    GAME_SCREEN_GRID_TITLE_TYPE,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_COLOR,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";
import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";

export class AssetTableComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new GridDrawingBuilder(
            this.context,
            GAME_SCREEN_ASSET_PERCENT_H_ARRAY,
            GAME_SCREEN_ASSET_PERCENT_W_ARRAY)
            .addPercentX(GAME_SCREEN_ASSET_PERCENT_X)
            .addPercentY(GAME_SCREEN_ASSET_PERCENT_Y)
            .addBorderForAll(GAME_SCREEN_ASSET_PERCENT_BORDER, GAME_SCREEN_ASSET_COLOR)
            .addBackgroundForFirstRow(GAME_SCREEN_ASSET_COLOR)
            .addBackground(GAME_SCREEN_ASSET_PERCENT_H_ARRAY.length - 1, 1, GAME_SCREEN_ASSET_COLOR)
            .addText(
                0,
                0,
                "ASSETS",
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y
            )
            .addRowText(
                1,
                [
                    this.context.getPlayer().getAssets().getBankAccount().getId(),
                    "$" + this.context.getPlayer().getAssets().getBankAccount().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
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
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                3,
                [
                    this.context.getPlayer().getAssets().getCertificateOfDeposit().getId(),
                    "$" + this.context.getPlayer().getAssets().getCertificateOfDeposit().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                4,
                [
                    this.context.getPlayer().getAssets().getCorporateBond().getId(),
                    "$" + this.context.getPlayer().getAssets().getCorporateBond().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
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
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                6,
                [
                    this.context.getPlayer().getAssets().getNasdaqIndex().getId(),
                    "$" + this.context.getPlayer().getAssets().getNasdaqIndex().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                7,
                [
                    this.context.getPlayer().getAssets().getNyseIndex().getId(),
                    "$" + this.context.getPlayer().getAssets().getNyseIndex().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                8,
                [
                    this.context.getPlayer().getAssets().getSavingsAccount().getId(),
                    "$" + this.context.getPlayer().getAssets().getSavingsAccount().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                9,
                [
                    this.context.getPlayer().getAssets().getSnp500Index().getId(),
                    "$" + this.context.getPlayer().getAssets().getSnp500Index().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                10,
                [
                    this.context.getPlayer().getAssets().getTreasuryBill().getId(),
                    "$" + this.context.getPlayer().getAssets().getTreasuryBill().getValue()
                ],
                GAME_SCREEN_GRID_TITLE_TYPE,
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
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .build()
            .draw();
    }
}