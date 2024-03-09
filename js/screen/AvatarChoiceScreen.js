import { Grid } from "../../../boot/canvas/model/grid/Grid.js";
import { Jeff } from "../model/character/Jeff.js";
import { Sarah } from "../model/character/Sarah.js";
import { Mike } from "../model/character/Mike.js";
import { Laura } from "../model/character/Laura.js";
import { Dwayne } from "../model/character/Dwayne.js";
import { Karen } from "../model/character/Karen.js";
import { Trump } from "../model/character/Trump.js";
import { Gloria } from "../model/character/Gloria.js";
import { Iylan } from "../model/character/Iylan.js";
import { Evelyn } from "../model/character/Evelyn.js";
import { Kali } from "../model/character/Kali.js";
import { Cogsworth } from "../model/character/Cogsworth.js";
import { Lumiere } from "../model/character/Lumiere.js";
import { Gaston } from "../model/character/Gaston.js";

export class AvatarChoiceScreen {
    constructor(context) {
        super(context);
        this.offsetX = 20;
        this.offsetY = 20;
        this.columnPercentWs = this.splitToEqualPartsArray(90, 5, 0);
        this.rowPercentHs = this.splitToEqualPartsArray(90, 3, 0);
        this.components = [];
    }

    init() {
        let jeff = new Jeff(this.context, this.calculateX(0), this.calculateY(0));
        let sarah = new Sarah(this.context, this.calculateX(1), this.calculateY(0));
        let mike = new Mike(this.context, this.calculateX(2), this.calculateY(0));
        let laura = new Laura(this.context, this.calculateX(3), this.calculateY(0));
        let lumiere = new Lumiere(this.context, this.calculateX(4), this.calculateY(0));

        let dwayne = new Dwayne(this.context, this.calculateX(0), this.calculateY(1));
        let karen = new Karen(this.context, this.calculateX(1), this.calculateY(1));
        let trump = new Trump(this.context, this.calculateX(2), this.calculateY(1));
        let gloria = new Gloria(this.context, this.calculateX(3), this.calculateY(1));
        let gaston = new Gaston(this.context, this.calculateX(4), this.calculateY(1));

        let iylan = new Iylan(this.context, this.calculateX(0), this.calculateY(2));
        let evelyn = new Evelyn(this.context, this.calculateX(1), this.calculateY(2));
        let kali = new Kali(this.context, this.calculateX(2), this.calculateY(2));
        let cogsworth = new Cogsworth(this.context, this.calculateX(3), this.calculateY(2));

        this.grid = new Grid(
            this.context,
            this.offsetX,
            this.offsetY,
            this.columnPercentWs,
            this.rowPercentHs)
            .addCenterAlignedGridCharacter(0, 0, jeff, true, false)
            .addCenterAlignedGridCharacter(0, 1, sarah, true, false)
            .addCenterAlignedGridCharacter(0, 2, mike, true, false)
            .addCenterAlignedGridCharacter(0, 3, laura, true, false)
            .addCenterAlignedGridCharacter(0, 4, lumiere, true, false)
            .addCenterAlignedGridCharacter(1, 0, dwayne, true, false)
            .addCenterAlignedGridCharacter(1, 1, karen, true, false)
            .addCenterAlignedGridCharacter(1, 2, trump, true, false)
            .addCenterAlignedGridCharacter(1, 3, gloria, true, false)
            .addCenterAlignedGridCharacter(1, 4, gaston, true, false)
            .addCenterAlignedGridCharacter(2, 0, iylan, true, false)
            .addCenterAlignedGridCharacter(2, 1, evelyn, true, false)
            .addCenterAlignedGridCharacter(2, 2, kali, true, false)
            .addCenterAlignedGridCharacter(2, 3, cogsworth, true, false)
            .addBorderForAll(1, "green");

        this.loaded = true;
        this.context.registerResizeConsumer(this);
        console.log("[AvatarChoiceScreen] object has been loaded.", this);
    }

    update(tick) {
        super.update(tick);
        this.grid.update(this.tick);
    }

    draw() {
        this.grid.draw();
    }

    onClick(x, y) {
        this.isNumber(x)
        this.isNumber(y)
        let row = this.grid.getRowIndex(y);
        let column = this.grid.getColumnIndex(x);
        let cell = this.grid.get(row, column);
        this.getPlayer().character = cell.getGridCharacter();
        this.context.setCurrentScreen("CareerChoiceScreen");
    }

    calculateX(column) {
        this.x = this.offsetX + this.getFullWidthPercent(
            this.sumArray(this.columnPercentWs, 0, column));
        return this.x;
    }

    calculateY(row) {
        this.y = this.offsetY + this.getFullHeightPercent(
            this.sumArray(this.rowPercentHs, 0, row));
        return this.y;
    }
}