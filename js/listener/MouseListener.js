export class MouseListener {
    constructor(context) {
        this.mousePositionX = context.getWidth();
        this.mousePositionY = context.getHeight();

        window.addEventListener('mousedown', e => {
            var rect = context.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (null != context.getScreen()) {
                context.getScreen().onClick(x, y);
            }
        });

        window.addEventListener('mouseup', e => {
            var rect = context.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (null != context.getScreen()) {
                context.getScreen().onUnclick(x, y);
            }
        });

        window.addEventListener('mousemove', e => {
            var rect = context.getBoundingClientRect();
            this.mousePositionX = e.clientX - rect.left;
            this.mousePositionY = e.clientY - rect.top;
            if (null != context.getScreen()) {
                context.getScreen().onMouseOver(this.mousePositionX, this.mousePositionY);
            }
        });

        context.setMouseListener(this);
    }
}