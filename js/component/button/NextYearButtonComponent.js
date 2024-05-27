import { RectangleOutlineDrawing } from "./../../drawing/RectangleOutlineDrawing.js";
import { SquareImageDrawing } from "./../../drawing/SquareImageDrawing.js";
import { insideRectangle } from "./../../function/MathFunctions.js";
import { TextDrawing } from "./../../drawing/TextDrawing.js";
import {
    NEXT_YEAR_BUTTON_PERCENT_X,
    NEXT_YEAR_BUTTON_PERCENT_Y,
    NEXT_YEAR_BUTTON_PERCENT_W,
    NEXT_YEAR_BUTTON_PERCENT_H,
    NEXT_YEAR_BUTTON_PERCENT_BORDER,
    NEXT_YEAR_BUTTON_COLOR,
    NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_TEXT,
    NEXT_YEAR_BUTTON_TEXT_PERCENT_X,
    NEXT_YEAR_BUTTON_TEXT_PERCENT_Y,
    NEXT_YEAR_BUTTON_TEXT_FONT,
    NEXT_YEAR_BUTTON_TEXT_COLOR,
    IMAGE_PLAY_SRC,
    IMAGE_PLAY_WH,
    IMAGE_PLAY_PERCENT_X,
    IMAGE_PLAY_PERCENT_Y,
    IMAGE_PLAY_PERCENT_WH,
    LAST_YEAR_SCREEN
} from "./../../configuration/GameConfiguration.js";
import { loadImage } from "./../../context/GameContext.js";
import { RectangleSolidDrawing } from "./../../drawing/RectangleSolidDrawing.js";
import { NextYearController } from "../../controller/NextYearController.js";

await loadImage(IMAGE_PLAY_SRC);

export class NextYearButtonComponent {
    constructor(context) {
        this.context = context;
        this.backgroundColor = NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
        this.pressed = false;
        this.controller = new NextYearController(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new RectangleSolidDrawing(
            this.context,
            NEXT_YEAR_BUTTON_PERCENT_X,
            NEXT_YEAR_BUTTON_PERCENT_Y,
            NEXT_YEAR_BUTTON_PERCENT_W,
            NEXT_YEAR_BUTTON_PERCENT_H,
            this.backgroundColor)
            .draw();
        new SquareImageDrawing(
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
            NEXT_YEAR_BUTTON_PERCENT_X,
            NEXT_YEAR_BUTTON_PERCENT_Y,
            NEXT_YEAR_BUTTON_PERCENT_W,
            NEXT_YEAR_BUTTON_PERCENT_H,
            NEXT_YEAR_BUTTON_PERCENT_BORDER,
            NEXT_YEAR_BUTTON_COLOR)
            .draw();
        new TextDrawing(
            this.context,
            NEXT_YEAR_BUTTON_TEXT,
            NEXT_YEAR_BUTTON_TEXT_PERCENT_X,
            NEXT_YEAR_BUTTON_TEXT_PERCENT_Y,
            NEXT_YEAR_BUTTON_TEXT_FONT,
            NEXT_YEAR_BUTTON_TEXT_COLOR)
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
        let expectX = this.context.getWidthPercent(NEXT_YEAR_BUTTON_PERCENT_X)
        let expectY = this.context.getHeightPercent(NEXT_YEAR_BUTTON_PERCENT_Y);
        let expectW = this.context.getWidthPercent(NEXT_YEAR_BUTTON_PERCENT_W);
        let expectH = this.context.getHeightPercent(NEXT_YEAR_BUTTON_PERCENT_H);
        if (!insideRectangle(x, y, expectX, expectY, expectW, expectH)) {
            this.backgroundColor = NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
            this.pressed = false;
            return;
        }
        if (this.pressed == true && pressed == false) {
            this.controller.nextYear();
            this.context.setScreen(LAST_YEAR_SCREEN);
        }
        this.pressed = pressed;
        if (pressed) {
            this.backgroundColor = NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR;
        } else {
            this.backgroundColor = NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR;
        }
    }
}