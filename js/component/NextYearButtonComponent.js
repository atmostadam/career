import { RectangleOutlineDrawing } from "../drawing/RectangleOutlineDrawing.js";
import { ImageSquareDrawing } from "../drawing/ImageSquareDrawing.js";
import { insideRectangle } from "./../function/MathFunctions.js";
import { TextDrawing } from "../drawing/TextDrawing.js";
import {
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_X,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_Y,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_W,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_H,
    GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_BORDER,
    GAME_SCREEN_NEXT_YEAR_BUTTON_COLOR,
    GAME_SCREEN_NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR,
    GAME_SCREEN_NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR,
    GAME_SCREEN_NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR,
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
import { RectangleSolidDrawing } from "../drawing/RectangleSolidDrawing.js";

await loadImage(IMAGE_PLAY_SRC);

export class NextYearButtonComponent {
    constructor(context) {
        this.context = context;
        this.backgroundColor = GAME_SCREEN_NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
        this.pressed = false;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new RectangleSolidDrawing(
            this.context,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_X,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_Y,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_W,
            GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_H,
            this.backgroundColor)
            .draw();
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

    onMouseOver(x, y) {
        this.setBackgroundColor(this.pressed, x, y);
    }

    onClick(x, y) {
        this.setBackgroundColor(true, x, y);
    }

    onUnclick(x, y) {
        this.setBackgroundColor(false, x, y);
    }

    setBackgroundColor(pressed, x, y) {
        this.pressed = pressed;
        let expectX = this.context.getWidthPercent(GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_X)
        let expectY = this.context.getHeightPercent(GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_Y);
        let expectW = this.context.getWidthPercent(GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_W);
        let expectH = this.context.getHeightPercent(GAME_SCREEN_NEXT_YEAR_BUTTON_PERCENT_H);
        if (pressed) {
            this.backgroundColor = GAME_SCREEN_NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR;
        } else if (insideRectangle(x, y, expectX, expectY, expectW, expectH)) {
            this.backgroundColor = GAME_SCREEN_NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR;
        } else {
            this.backgroundColor = GAME_SCREEN_NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
        }
    }
}