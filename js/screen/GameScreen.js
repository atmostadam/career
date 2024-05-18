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

export class GameScreen {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new AssetTableComponent(this.context).draw();
        new LiabilityTableComponent(this.context).draw();
        new RevenueTableComponent(this.context).draw();
        new ExpenseTableComponent(this.context).draw();
        new FinancialSummaryComponent(this.context).draw();
        new NextYearButtonComponent(this.context).draw();
        new ProfilePictureComponent(this.context).draw();
        new LastYearRevenueTableComponent(this.context).draw();
        new LastYearExpenseTableComponent(this.context).draw();
        new LastYearNetIncomeComponent(this.context).draw();
    }
}