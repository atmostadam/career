import { ProfileButtonComponent } from "./../component/button/ProfileButtonComponent.js";
import { RevenueButtonComponent } from "./../component/button/RevenueButtonComponent.js";
import { ExpenseButtonComponent } from "./../component/button/ExpenseButtonComponent.js";
import { AssetButtonComponent } from "./../component/button/AssetButtonComponent.js";
import { InvestmentButtonComponent } from "./../component/button/InvestmentButtonComponent.js";
import { LiabilityButtonComponent } from "./../component/button/LiabilityButtonComponent.js";
import { LoanButtonComponent } from "./../component/button/LoanButtonComponent.js";
import { LastYearButtonComponent } from "./../component/button/LastYearButtonComponent.js";

export class Menu {
    constructor(context) {
        this.context = context;
        this.profileButton = new ProfileButtonComponent(this.context);
        this.revenueButton = new RevenueButtonComponent(this.context);
        this.expenseButton = new ExpenseButtonComponent(this.context);
        this.assetButton = new AssetButtonComponent(this.context);
        this.investmentScreen = new InvestmentButtonComponent(this.context);
        this.liabilityScreen = new LiabilityButtonComponent(this.context);
        this.loanScreen = new LoanButtonComponent(this.context);
        this.lastYearScreen = new LastYearButtonComponent(this.context);
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        this.profileButton.draw();
        this.revenueButton.draw();
        this.expenseButton.draw();
        this.assetButton.draw();
        this.investmentScreen.draw();
        this.liabilityScreen.draw();
        this.loanScreen.draw();
        this.lastYearScreen.draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}