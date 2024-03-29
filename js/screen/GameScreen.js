import { GridBuilder } from "../builder/GridBuilder.js";
import { AssetsComponent } from "./../component/AssetsComponent.js";

export class GameScreen {
    constructor(context) {
        this.context = context;
        this.components = [
            new AssetsComponent(this.context)
        ];
        this.grid = new GridBuilder(
            this.context,
            [50, 50],
            [50, 50],
            0,
            0,
            100,
            100
        )
            .addBorder(0, 0, 3, "Orange")
            .addBorder(0, 1, 3, "Orange")
            .addBorder(1, 0, 3, "Orange")
            .addBorder(1, 1, 3, "Orange")
            .build();
    }

    update(tick) {
        this.components.forEach(e => e.update(tick));
        this.grid.update(
            this.tick,
            0,
            0,
            this.context.get);
    }

    draw() {
        this.components.forEach(e => e.draw());
        this.grid.draw();
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
}