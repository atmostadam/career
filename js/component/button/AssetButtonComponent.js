import { CircleSolidDrawing } from "./../../drawing/CircleSolidDrawing.js";
import {
    ASSET_BUTTON_COMPONENT_PERCENT_X,
    ASSET_BUTTON_COMPONENT_PERCENT_Y,
    ASSET_BUTTON_COMPONENT_PERCENT_R,
    ASSET_BUTTON_COMPONENT_COLOR,
    ASSET_BUTTON_COMPONENT_PERCENT_BORDER,
    ASSET_BUTTON_COMPONENT_BORDER_COLOR
} from "./../../configuration/GameConfiguration.js";


export class AssetButtonComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new CircleSolidDrawing(
            this.context,
            ASSET_BUTTON_COMPONENT_PERCENT_X,
            ASSET_BUTTON_COMPONENT_PERCENT_Y,
            ASSET_BUTTON_COMPONENT_PERCENT_R,
            ASSET_BUTTON_COMPONENT_COLOR
        )
            .draw();
        new CircleSolidDrawing(
            this.context,
            ASSET_BUTTON_COMPONENT_PERCENT_X,
            ASSET_BUTTON_COMPONENT_PERCENT_Y,
            ASSET_BUTTON_COMPONENT_PERCENT_R,
            ASSET_BUTTON_COMPONENT_PERCENT_BORDER,
            ASSET_BUTTON_COMPONENT_BORDER_COLOR
        )
            .draw();
    }
}