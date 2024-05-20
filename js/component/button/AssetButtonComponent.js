import { CircleSolidDrawing } from "./../../drawing/CircleSolidDrawing.js";
import { CircleOutlineDrawing } from "./../../drawing/CircleOutlineDrawing.js";
import {
    ASSET_BUTTON_IMAGE_SRC,
    ASSET_BUTTON_COMPONENT_PERCENT_Y,
    MENU_BUTTON_IMAGE_WH,
    MENU_BUTTON_COMPONENT_PERCENT_X,
    MENU_BUTTON_COMPONENT_PERCENT_R,
    MENU_BUTTON_COMPONENT_COLOR,
    MENU_BUTTON_COMPONENT_PERCENT_BORDER,
    MENU_BUTTON_COMPONENT_BORDER_COLOR
} from "./../../configuration/GameConfiguration.js";
import { loadImage } from "./../../context/GameContext.js";
import { SquareImageDrawing } from "../../drawing/SquareImageDrawing.js";

await loadImage(ASSET_BUTTON_IMAGE_SRC);

export class AssetButtonComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new CircleSolidDrawing(
            this.context,
            MENU_BUTTON_COMPONENT_PERCENT_X,
            ASSET_BUTTON_COMPONENT_PERCENT_Y,
            MENU_BUTTON_COMPONENT_PERCENT_R,
            MENU_BUTTON_COMPONENT_COLOR
        )
            .draw();
        new CircleOutlineDrawing(
            this.context,
            MENU_BUTTON_COMPONENT_PERCENT_X,
            ASSET_BUTTON_COMPONENT_PERCENT_Y,
            MENU_BUTTON_COMPONENT_PERCENT_R,
            MENU_BUTTON_COMPONENT_PERCENT_BORDER,
            MENU_BUTTON_COMPONENT_BORDER_COLOR
        )
            .draw();
        let wh = MENU_BUTTON_COMPONENT_PERCENT_R * 1.6;
        let x = MENU_BUTTON_COMPONENT_PERCENT_X - (MENU_BUTTON_COMPONENT_PERCENT_R * 0.35);
        let y = ASSET_BUTTON_COMPONENT_PERCENT_Y - (MENU_BUTTON_COMPONENT_PERCENT_R * .85);
        new SquareImageDrawing(
            this.context,
            ASSET_BUTTON_IMAGE_SRC,
            0,
            0,
            MENU_BUTTON_IMAGE_WH,
            x,
            y,
            wh)
            .draw();
    }
}