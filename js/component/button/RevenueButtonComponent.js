import { CircleSolidDrawing } from "../../drawing/CircleSolidDrawing.js";
import { CircleOutlineDrawing } from "../../drawing/CircleOutlineDrawing.js";
import {
    REVENUE_BUTTON_IMAGE_SRC,
    MENU_BUTTON_IMAGE_WH,
    REVENUE_BUTTON_COMPONENT_PERCENT_Y,
    MENU_BUTTON_COMPONENT_PERCENT_X,
    MENU_BUTTON_COMPONENT_PERCENT_R,
    MENU_BUTTON_COMPONENT_PERCENT_BORDER,
    MENU_BUTTON_COMPONENT_BORDER_COLOR,
    NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR,
    NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR,
    REVENUE_SCREEN
} from "../../configuration/GameConfiguration.js";
import { loadImage } from "./../../context/GameContext.js";
import { SquareImageDrawing } from "../../drawing/SquareImageDrawing.js";
import { insideRectangle } from "./../../function/MathFunctions.js";

await loadImage(REVENUE_BUTTON_IMAGE_SRC);

export class RevenueButtonComponent {
    constructor(context) {
        this.context = context;
        this.backgroundColor = NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
        this.pressed = false;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new CircleSolidDrawing(
            this.context,
            MENU_BUTTON_COMPONENT_PERCENT_X,
            REVENUE_BUTTON_COMPONENT_PERCENT_Y,
            MENU_BUTTON_COMPONENT_PERCENT_R,
            this.backgroundColor
        )
            .draw();
        new CircleOutlineDrawing(
            this.context,
            MENU_BUTTON_COMPONENT_PERCENT_X,
            REVENUE_BUTTON_COMPONENT_PERCENT_Y,
            MENU_BUTTON_COMPONENT_PERCENT_R,
            MENU_BUTTON_COMPONENT_PERCENT_BORDER,
            MENU_BUTTON_COMPONENT_BORDER_COLOR
        )
            .draw();
        let wh = MENU_BUTTON_COMPONENT_PERCENT_R * 1.6;
        let x = MENU_BUTTON_COMPONENT_PERCENT_X - (MENU_BUTTON_COMPONENT_PERCENT_R * 0.35);
        let y = REVENUE_BUTTON_COMPONENT_PERCENT_Y - (MENU_BUTTON_COMPONENT_PERCENT_R * .85);
        new SquareImageDrawing(
            this.context,
            REVENUE_BUTTON_IMAGE_SRC,
            0,
            0,
            MENU_BUTTON_IMAGE_WH,
            x,
            y,
            wh)
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
        let expectX = this.context.getWidthPercent(MENU_BUTTON_COMPONENT_PERCENT_X) - this.context.getHeightPercent(MENU_BUTTON_COMPONENT_PERCENT_R);
        let expectY = this.context.getHeightPercent(REVENUE_BUTTON_COMPONENT_PERCENT_Y - + (MENU_BUTTON_COMPONENT_PERCENT_R * 0.45));
        let expectW = this.context.getHeightPercent(MENU_BUTTON_COMPONENT_PERCENT_R * 2);
        let expectH = this.context.getHeightPercent(MENU_BUTTON_COMPONENT_PERCENT_R * 2.5);
        if (!insideRectangle(x, y, expectX, expectY, expectW, expectH)) {
            this.backgroundColor = NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
            this.pressed = false;
            return;
        }
        if (this.pressed == true && pressed == false) {
            this.context.setScreen(REVENUE_SCREEN);
        }
        this.pressed = pressed;
        if (pressed) {
            this.backgroundColor = NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR;
        } else {
            this.backgroundColor = NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR;
        }
    }
}