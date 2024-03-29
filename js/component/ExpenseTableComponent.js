export class ExpenseTableComponent {
    constructor(context) {
        this.context = context;
        //this.columnPercentWs = [16, 7];
        //this.rowPercentHs = splitToEqualPartsArray(36, 12);
    }

    update(tick) {
        this.tick = tick;
        let expenses = this.context.getPlayer().getExpenses();
    }

    draw() {

    }

}