import { AssetButtonComponent } from "../component/button/AssetButtonComponent.js";

export class AssetScreen {
    constructor(context) {
        this.context = context;
        this.assetButton = new AssetButtonComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        this.assetButton.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}