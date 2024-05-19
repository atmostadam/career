import { RectangleOutlineDrawing } from "../drawing/RectangleOutlineDrawing.js";
import {
    GAME_SCREEN_ASSET_IMAGE_PERCENT_X,
    GAME_SCREEN_ASSET_IMAGE_PERCENT_Y,
    GAME_SCREEN_ASSET_IMAGE_PERCENT_W,
    GAME_SCREEN_ASSET_IMAGE_PERCENT_H,
    GAME_SCREEN_ASSET_IMAGE_PERCENT_BORDER,
    GAME_SCREEN_ASSET_IMAGE_COLOR
} from "./../configuration/GameConfiguration.js";

export class AssetImageComponent {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new RectangleOutlineDrawing(
            this.context,
            GAME_SCREEN_ASSET_IMAGE_PERCENT_X,
            GAME_SCREEN_ASSET_IMAGE_PERCENT_Y,
            GAME_SCREEN_ASSET_IMAGE_PERCENT_W,
            GAME_SCREEN_ASSET_IMAGE_PERCENT_H,
            GAME_SCREEN_ASSET_IMAGE_PERCENT_BORDER,
            GAME_SCREEN_ASSET_IMAGE_COLOR)
            .draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}