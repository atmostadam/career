export class LiabilityTableComponent {
    constructor(context) {
        this.context = context;
        //this.columnPercentWs = [16, 7];
        //this.rowPercentHs = splitToEqualPartsArray(36, 12);
    }

    update(tick) {
        this.tick = tick;
        let liabilities = this.context.getPlayer().getLiabilities();
    }

    draw() {

    }

}