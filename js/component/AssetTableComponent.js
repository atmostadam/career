import {
    ASSET_TABLE_COMPONENT_PERCENT_X,
    ASSET_TABLE_COMPONENT_PERCENT_Y,
    ASSET_TABLE_COMPONENT_PERCENT_W_ARRAY,
    ASSET_TABLE_COMPONENT_PERCENT_H_ARRAY,
    ASSET_TABLE_COMPONENT_PERCENT_BORDER,
    ASSET_TABLE_COMPONENT_COLOR,
    GAME_SCREEN_GRID_TITLE_COLOR,
    GAME_SCREEN_GRID_TEXT_TYPE,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
    GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
} from "./../configuration/GameConfiguration.js";
import { GridDrawingBuilder } from "./../drawing/GridDrawingBuilder.js";

export class AssetTableComponent {
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
            ASSET_TABLE_COMPONENT_PERCENT_H_ARRAY,
            ASSET_TABLE_COMPONENT_PERCENT_W_ARRAY)
            .addPercentX(ASSET_TABLE_COMPONENT_PERCENT_X)
            .addPercentY(ASSET_TABLE_COMPONENT_PERCENT_Y)
            .addBorderForAll(ASSET_TABLE_COMPONENT_PERCENT_BORDER, ASSET_TABLE_COMPONENT_COLOR)
            .addBackgroundForFirstRow(ASSET_TABLE_COMPONENT_COLOR)
            .addBackground(ASSET_TABLE_COMPONENT_PERCENT_H_ARRAY.length - 1, 1, ASSET_TABLE_COMPONENT_COLOR)
            .addRowText(
                0,
                [
                    "ASSETS",
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
                    "$" + this.context.getPlayer().getAssets().getCertificateOfDeposit().getValue()
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
                    "$" + this.context.getPlayer().getAssets().getCorporateBond().getValue()
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
                    "$" + this.context.getPlayer().getAssets().getNasdaqIndex().getValue()
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
                    "$" + this.context.getPlayer().getAssets().getNyseIndex().getValue()
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
                    "$" + this.context.getPlayer().getAssets().getSavingsAccount().getValue()
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
                    "$" + this.context.getPlayer().getAssets().getSnp500Index().getValue()
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
                    "$" + this.context.getPlayer().getAssets().getTreasuryBill().getValue()
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