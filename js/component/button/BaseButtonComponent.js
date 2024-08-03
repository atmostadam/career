export class BaseButtonComponent {
    constructor(context, percentX, percentY, percentW, percentH) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
        this.defaultBackgroundColor = NEXT_YEAR_BUTTON_DEFAULT_BACKGROUND_COLOR;
        this.onClickBackgroundColor = NEXT_YEAR_BUTTON_ON_CLICK_BACKGROUND_COLOR;
        this.onMouseOverBackgroundColor = NEXT_YEAR_BUTTON_ON_MOUSE_OVER_BACKGROUND_COLOR;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {

    }

    onMouseOver(x, y) {
        this.setBackgroundColor(this.pressed, x, y);
    }

    onClick(x, y) {
        this.setBackgroundColor(true, x, y);
    }

    onUnclick(x, y) {
        this.setBackgroundColor(false, x, y);
    }

    onButtonPush() {

    }

    setBackgroundColor(pressed, x, y) {
        let expectX = this.context.getWidthPercent(this.percentX);
        let expectY = this.context.getHeightPercent(this.percentY);
        let expectW = this.context.getWidthPercent(this.percentW);
        let expectH = this.context.getHeightPercent(this.percentH);
        if (!insideRectangle(x, y, expectX, expectY, expectW, expectH)) {
            this.backgroundColor = this.defaultBackgroundColor;
            this.pressed = false;
            return;
        }
        if (this.pressed == true && pressed == false) {
            this.onButtonPush();
        }
        this.pressed = pressed;
        if (pressed) {
            this.backgroundColor = this.onClickBackgroundColor;
        } else {
            this.backgroundColor = this.onMouseOverBackgroundColor;
        }
    }
}