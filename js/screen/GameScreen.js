import { AssetTableComponent } from "../component/AssetTableComponent.js";
import { LiabilityTableComponent } from "../component/LiabilityTableComponent.js";
import { RevenueTableComponent } from "../component/RevenueTableComponent.js";
import { ExpenseTableComponent } from "../component/ExpenseTableComponent.js";
import { FinancialSummaryComponent } from "../component/FinancialSummaryComponent.js";
import { NextYearButtonComponent } from "../component/NextYearButtonComponent.js";
import { ProfilePictureComponent } from "../component/ProfilePictureComponent.js";
import { LastYearRevenueTableComponent } from "../component/LastYearRevenueTableComponent.js";
import { LastYearExpenseTableComponent } from "../component/LastYearExpenseTableComponent.js";
import { LastYearNetIncomeComponent } from "../component/LastYearNetIncomeComponent.js";
import { JobTitleComponent } from "../component/JobTitleComponent.js";
import { NetIcomeComponent } from "../component/NetIncomeComponent.js";

export class GameScreen {
    constructor(context) {
        this.context = context;
        this.components = [
            new AssetTableComponent(this.context),
            new LiabilityTableComponent(this.context),
            new RevenueTableComponent(this.context),
            new ExpenseTableComponent(this.context),
            new FinancialSummaryComponent(this.context),
            new NextYearButtonComponent(this.context),
            new ProfilePictureComponent(this.context),
            new LastYearRevenueTableComponent(this.context),
            new LastYearExpenseTableComponent(this.context),
            new LastYearNetIncomeComponent(this.context),
            new JobTitleComponent(this.context),
            new NetIcomeComponent(this.context)
        ];
    }

    update(tick) {
        this.tick = tick;
        this.components.forEach(e => e.update(tick));
    }

    draw() {
        this.components.forEach(e => e.draw());
    }

    onMouseOver(x, y) {
        this.components.forEach(e => e.onMouseOver(x, y));
    }

    onClick(x, y) {
        this.components.forEach(e => e.onClick(x, y));
    }

    onUnclick(x, y) {
        this.components.forEach(e => e.onUnclick(x, y));
    }
}