import { RectangleOutlineDrawing } from "../drawing/RectangleOutlineDrawing.js";
import { ImageSquareDrawing } from "../drawing/ImageSquareDrawing.js";
import { TextDrawing } from "../drawing/TextDrawing.js";
import {
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_X,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_Y,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_W,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_H,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_BORDER,
    GAME_SCREEN_NEXT_YEAR_BUTTON_COLOR,
    GAME_SCREEN_NEXT_YEAR_BUTTON_BACKGROUND_COLOR,
    GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT,
    GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_PERCENT_X,
    GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_PERCENT_Y,
    GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_FONT,
    GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_COLOR,
    IMAGE_PLAY_SRC,
    IMAGE_PLAY_WH,
    IMAGE_PLAY_PERCENT_X,
    IMAGE_PLAY_PERCENT_Y,
    IMAGE_PLAY_PERCENT_WH
} from "./../configuration/GameConfiguration.js";
import { loadImage } from "./../context/GameContext.js";

await loadImage(IMAGE_PLAY_SRC);

export class NextYearButtonComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new ImageSquareDrawing(
            this.context,
            IMAGE_PLAY_SRC,
            0,
            0,
            IMAGE_PLAY_WH,
            IMAGE_PLAY_PERCENT_X,
            IMAGE_PLAY_PERCENT_Y,
            IMAGE_PLAY_PERCENT_WH)
            .draw();

        /*
    new RectangleSolidDrawing(
        this.context,
        GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_X,
        GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_Y,
        GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_W,
        GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_H,
        GAME_SCREEN_NEXT_YEAR_BUTTON_BACKGROUND_COLOR)
        .draw();
        */
        new RectangleOutlineDrawing(
            this.context,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_X,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_Y,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_W,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_H,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_BORDER,
            GAME_SCREEN_NEXT_YEAR_BUTTON_COLOR)
            .draw();
        new TextDrawing(
            this.context,
            GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT,
            GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_PERCENT_X,
            GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_PERCENT_Y,
            GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_FONT,
            GAME_SCREEN_NEXT_YEAR_BUTTON_TEXT_COLOR)
            .draw();
    }
}