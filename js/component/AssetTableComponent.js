import { GridBorderDrawing } from "./../drawing/GridBorderDrawing.js";
import {
    GAME_SCREEN_ASSET_PERCENT_X,
    GAME_SCREEN_ASSET_PERCENT_Y,
    GAME_SCREEN_ASSET_PERCENT_W_ARRAY,
    GAME_SCREEN_ASSET_PERCENT_H_ARRAY,
    GAME_SCREEN_ASSET_PERCENT_BORDER,
    GAME_SCREEN_ASSET_COLOR
} from "./../configuration/GameConfiguration.js";

export class AssetTableComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new GridBorderDrawing(
            this.context,
            GAME_SCREEN_ASSET_PERCENT_X,
            GAME_SCREEN_ASSET_PERCENT_Y,
            GAME_SCREEN_ASSET_PERCENT_W_ARRAY,
            GAME_SCREEN_ASSET_PERCENT_H_ARRAY,
            GAME_SCREEN_ASSET_PERCENT_BORDER,
            GAME_SCREEN_ASSET_COLOR,
            GAME_SCREEN_ASSET_COLOR,
            true,
            true
        ).draw();
    }
}