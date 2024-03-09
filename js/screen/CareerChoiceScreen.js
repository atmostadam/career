

export class CareerChoiceScreen {
    constructor(context) {
        this.context = context;
        this.components = [
            new AssetsComponents(this)
        ];
    }

    update(tick) {
        this.tick = tick;

    }

    draw() {

    }
}