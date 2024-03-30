import { GridBorderDrawing } from "./../drawing/GridBorderDrawing.js";
import {
    GAME_SCREEN_LIABILITY_PERCENT_X,
    GAME_SCREEN_LIABILITY_PERCENT_Y,
    GAME_SCREEN_LIABILITY_PERCENT_W_ARRAY,
    GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY,
    GAME_SCREEN_LIABILITY_PERCENT_BORDER,
    GAME_SCREEN_LIABILITY_COLOR
} from "./../configuration/GameConfiguration.js";

export class LiabilityTableComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new GridBorderDrawing(
            this.context,
            GAME_SCREEN_LIABILITY_PERCENT_X,
            GAME_SCREEN_LIABILITY_PERCENT_Y,
            GAME_SCREEN_LIABILITY_PERCENT_W_ARRAY,
            GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY,
            GAME_SCREEN_LIABILITY_PERCENT_BORDER,
            GAME_SCREEN_LIABILITY_COLOR,
            GAME_SCREEN_LIABILITY_COLOR,
            true,
            true
        ).draw();
    }
}