import { BaseButtonComponent } from "./BaseButtonComponent.js";

export class BuyInvestmentButtonComponent extends BaseButtonComponent {
    constructor(context, percentX, percentY, percentW, percentH, rangeSlider, investment) {
        super(
            context,
            percentX,
            percentY,
            percentW,
            percentH
        );
        this.rangeSlider = rangeSlider;
        this.investment = investment;
    }

    draw() {

    }

    onButtonPush() {
        this.cash = this.context.getPlayer().getAssets().getBankAccount().getValue();
        this.price = this.investment.getPrice();
    }
}