import { Gameable } from "../../../../boot/base/Gameable.js";
import { insideRectangle } from "./../../../../boot/function/GameFunctions.js";
import { NextYearHandler } from "../../handler/NextYearHandler.js";
import { Constants } from "../../../../boot/constants/Constants.js";

export class NextYearComponent extends Gameable {
    constructor(context) {
        super(context);
        this.context.setClassAndClickSubscriber(this);
    }

    init() {
        this.nextX = this.getFullWidthPercent(Constants.NEXT_PERCENT_X) -
            this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_PERCENT_H);
        this.nextY = this.getFullHeightPercent(Constants.NEXT_PERCENT_Y);
        this.imageSw = this.getFullHeightPercent(Constants.NEXT_PERCENT_SH);
        this.imageSh = this.getFullHeightPercent(Constants.NEXT_PERCENT_SH);
        this.loaded = true;
        this.context.registerResizeConsumer(this);
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        this.context.getScreen().drawRectangle(
            this.onMouseOver(),
            this.nextX,
            this.nextY,
            this.imageSw,
            this.imageSh
        );
        this.context.getScreen().drawImage(
            this.context.getImage(Constants.NEXT_IMAGE_ID),
            0,
            0,
            Constants.NEXT_W,
            Constants.NEXT_H,
            this.nextX,
            this.nextY,
            this.imageSw,
            this.imageSh
        );
    }

    onMouseOver() {
        let mouseX = this.context.getMouseListener().mousePositionX;
        let mouseY = this.context.getMouseListener().mousePositionY;
        if (insideRectangle(mouseX, mouseY, this.nextX, this.nextY, this.imageSw, this.imageSh)) {
            return "green";
        }
        return "darkblue";
    }

    onClick(x, y) {
        if (insideRectangle(x, y, this.nextX, this.nextY, this.imageSw, this.imageSh)) {
            this.handler = new NextYearHandler(this.context);
            this.yearComponent = this.handler.next();
            this.context.setPopup(this.yearComponent);
        } else {
            this.context.setPopup(null);
        }
    }
}