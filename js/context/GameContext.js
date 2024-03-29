import { MouseListener } from "./../listener/MouseListener.js";
import { Player } from "./../model/player/Player.js";
import { GameScreen } from "./../screen/GameScreen.js";

const images = new Map();

export async function loadImage(url) {
    new Promise(
        response => {
            let image = new Image();
            image.onload = (() => response(image));
            image.src = url;
        }
    )
        .then(response => images.set(url, response))
        .catch(e => console.error(e));
}

/**
 * The context for the game in reference to Inversion of Control, Shared Map Key/Values and Singleton
 * class lookup.
 */
export class GameContext {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = new Map();
        this.clear();
        this.mouseListener = new MouseListener(this);
        this.player = new Player(this);
        this.screens = [
            new GameScreen(this)
        ]
        this.screen = this.screens[0];

        this.BOTTOM_BROWSER_BUFFER = 100;
    }

    putImage(url, image) {
        images.set(url, image);
    }

    getImage(url) {
        return images.get(url);
    }

    getMouseListener() {
        return this.mouseListener;
    }

    setMouseListener(mouseListener) {
        this.mouseListener = mouseListener;
    }

    getGrid() {
        return this.grid;
    }

    setGrid(grid) {
        this.grid = grid;
    }

    getPlayer() {
        return this.player;
    }

    setPlayer(player) {
        this.player = player;
    }

    getScreens() {
        return this.screens;
    }

    setScreens(screens) {
        this.screens = screens;
    }

    getScreen() {
        return this.screen;
    }

    setScreen(screen) {
        this.screen = screen;
    }

    clear() {
        let canvasW = this.canvas.width;
        let canvasH = this.canvas.height - this.BOTTOM_BROWSER_BUFFER;
        let clientW = this.canvas.getBoundingClientRect().width;
        let clientH = this.canvas.getBoundingClientRect().height - this.BOTTOM_BROWSER_BUFFER;

        if (canvasW != clientW || canvasH != clientH) {
            this.canvas.width = clientW;
            this.canvas.height = clientH;
            this.width = clientW;
            this.height = clientH;
        }

        let ctx = this.getCtx();
        ctx.clearRect(0, 0, this.getWidth(), this.getHeight() + this.BOTTOM_BROWSER_BUFFER);

    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getLeft() {
        return this.canvas.getBoundingClientRect().left;
    }

    getRight() {
        return this.getWidth();
    }

    getTop() {
        return this.canvas.getBoundingClientRect().top;
    }

    getBottom() {
        return this.getHeight();
    }

    getWidthPercent(percent) {
        return this.getWidth() * (percent / 100);
    }

    getHeightPercent(percent) {
        return this.getHeight() * (percent / 100);
    }

    getCtx() {
        return this.ctx;
    }

    getBoundingClientRect() {
        return this.canvas.getBoundingClientRect();
    }
}