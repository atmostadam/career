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
            .addGridText(
                0,
                this.context.getPlayer().asArrayOfArraysAssets(),
                GAME_SCREEN_GRID_TEXT_TYPE,
                GAME_SCREEN_GRID_TEXT_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .addRowText(
                11,
                ["TOTAL", 7777],
                GAME_SCREEN_GRID_TITLE_TYPE,
                GAME_SCREEN_GRID_TITLE_COLOR,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X,
                GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y
            )
            .build()
            .draw();
    }
}