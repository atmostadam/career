import {
    INVESTMENT_SCREEN
} from "./../configuration/GameConfiguration.js";
import { InvestmentTableComponent } from "../component/InvestmentTableComponent.js";

export class InvestmentScreen {
    constructor(context) {
        this.context = context;
        this.investmentTable = new InvestmentTableComponent(this.context);
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
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}