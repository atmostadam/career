import {
    INVESTMENT_SCREEN
} from "./../configuration/GameConfiguration.js";
import { AssetImageComponent } from "./../component/AssetImageComponent.js"

export class InvestmentScreen {
    constructor(context) {
        this.context = context;
        this.assetImage = new AssetImageComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (INVESTMENT_SCREEN != this.context.getScreen()) {
            return;
        }
        this.assetImage.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}