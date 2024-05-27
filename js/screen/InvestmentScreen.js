import {
    INVESTMENT_SCREEN,
    RANGE_SLIDER_X,
    RANGE_SLIDER_Y,
    RANGE_SLIDER_W,
    RANGE_SLIDER_H
} from "./../configuration/GameConfiguration.js";
import { InvestmentTableComponent } from "../component/InvestmentTableComponent.js";
import { RangeSliderComponent } from "../component/RangeSliderComponent.js";

export class InvestmentScreen {
    constructor(context) {
        this.context = context;
        this.investmentTable = new InvestmentTableComponent(this.context);
        this.rangeSlider = new RangeSliderComponent(this.context);
        this.trading = true;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        if (INVESTMENT_SCREEN != this.context.getScreen()) {
            return;
        }
        this.investmentTable.draw();
        if (this.trading) {
            this.rangeSlider.draw();
        }
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}