import { AssetTableComponent } from "../component/AssetTableComponent.js";
import { LiabilityTableComponent } from "../component/LiabilityTableComponent.js";
import { RevenueTableComponent } from "../component/RevenueTableComponent.js";
import { ExpenseTableComponent } from "../component/ExpenseTableComponent.js";

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
    }
    /*

    drawLiabilityTable() {
        new GridBorderDrawing(
            this.context,
            GAME_SCREEN_LIABILITY_PERCENT_X,
            GAME_SCREEN_LIABILITY_PERCENT_Y,
            GAME_SCREEN_LIABILITY_PERCENT_W_ARRAY,
            GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY,
            GAME_SCREEN_LIABILITY_PERCENT_BORDER,
            GAME_SCREEN_LIABILITY_BORDER_COLOR
        ).draw();
    }

    drawRevenueTable() {
        new GridBorderDrawing(
            this.context,
            GAME_SCREEN_REVENUE_PERCENT_X,
            GAME_SCREEN_REVENUE_PERCENT_Y,
            GAME_SCREEN_REVENUE_PERCENT_W_ARRAY,
            GAME_SCREEN_REVENUE_PERCENT_H_ARRAY,
            GAME_SCREEN_REVENUE_PERCENT_BORDER,
            GAME_SCREEN_REVENUE_BORDER_COLOR
        ).draw();
    }

    drawExpenseTable() {
        new GridBorderDrawing(
            this.context,
            GAME_SCREEN_EXPENSE_PERCENT_X,
            GAME_SCREEN_EXPENSE_PERCENT_Y,
            GAME_SCREEN_EXPENSE_PERCENT_W_ARRAY,
            GAME_SCREEN_EXPENSE_PERCENT_H_ARRAY,
            GAME_SCREEN_EXPENSE_PERCENT_BORDER,
            GAME_SCREEN_EXPENSE_BORDER_COLOR
        ).draw();
    }
    */




    /*
    let numberOfRows = GAME_SCREEN_ASSET_PERCENT_H_ARRAY.length;
    let numberOfColumns = GAME_SCREEN_ASSET_PERCENT_W_ARRAY.length
    for (let r = 0; r < numberOfRows; r++) {
        for (let c = 0; c < numberOfColumns; c++) {
            let offSetX = sumArr(GAME_SCREEN_ASSET_PERCENT_W_ARRAY, c);
            let offSetY = sumArr(GAME_SCREEN_ASSET_PERCENT_H_ARRAY, r);
            let outlineX = GAME_SCREEN_ASSET_PERCENT_X + offSetX;
            let outlineY = GAME_SCREEN_ASSET_PERCENT_Y + offSetY;
            let outlineW = GAME_SCREEN_ASSET_PERCENT_W_ARRAY[c];
            let outlineH = GAME_SCREEN_ASSET_PERCENT_H_ARRAY[r];
            let outline = new RectangleOutlineDrawing(
                this.context,
                outlineX,
                outlineY,
                outlineW,
                outlineH,
                GAME_SCREEN_ASSET_PERCENT_BORDER,
                GAME_SCREEN_ASSET_COLOR
            );
            outline.update(this.tick)
            outline.draw();
        }
    }
    */
}

/*
init() {
    this.assetSummaryComponent = new AssetSummaryComponent(this.context);
    this.liabilitySummaryComponent = new LiabilitySummaryComponent(this.context);
    this.revenueSummaryComponent = new RevenueSummaryComponent(this.context);
    this.expenseSummaryComponent = new ExpenseSummaryComponent(this.context);
    this.characterSummaryComponent = new CharacterSummaryComponent(this.context);
    this.nextYearComponent = new NextYearComponent(this.context);
    this.buttons = new ActionComponent(this.context);
    this.loaded = true;
    this.context.registerResizeConsumer(this);
    console.log("[MainScreen] object has been loaded.", this);
}

update(tick) {
    super.update(tick);
    this.nextYearComponent.update(this.tick);
    this.assetSummaryComponent.update(this.tick);
    this.liabilitySummaryComponent.update(this.tick);
    this.revenueSummaryComponent.update(this.tick);
    this.expenseSummaryComponent.update(this.tick);
    this.characterSummaryComponent.update(this.tick);
    this.buttons.update(this.tick);
}

draw() {
    this.nextYearComponent.draw();
    this.assetSummaryComponent.draw();
    this.liabilitySummaryComponent.draw();
    this.revenueSummaryComponent.draw();
    this.expenseSummaryComponent.draw();
    this.characterSummaryComponent.draw();
    this.buttons.draw();
}

onClick(x, y) {
    this.buttons.onClick(x, y);
}
*/