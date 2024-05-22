import { JuniorSoftwareEngineer } from "../model/jobs/software/engineer/JuniorSofwareEngineer.js";
import { MouseListener } from "./../listener/MouseListener.js";
import { Player } from "./../model/player/Player.js";
import { Menu } from "./../screen/Menu.js";
import { Header } from "./../screen/Header.js";
import { Footer } from "./../screen/Footer.js";
import { ProfileScreen } from "./../screen/ProfileScreen.js";
import { RevenueScreen } from "./../screen/RevenueScreen.js";
import { ExpenseScreen } from "../screen/ExpenseScreen.js";
import { AssetScreen } from "./../screen/AssetScreen.js";
import { InvestmentScreen } from "./../screen/InvestmentScreen.js";
import { LiabilityScreen } from "./../screen/LiabilityScreen.js";
import { LoanScreen } from "./../screen/LoanScreen.js";
import { LastYearScreen } from "./../screen/LastYearScreen.js";
import { MainScreen } from "../screen/MainScreen.js";
import {
    ASSET_SCREEN,
    EXPENSE_SCREEN,
    FOOTER,
    HEADER,
    INVESTMENT_SCREEN,
    LAST_YEAR_SCREEN,
    LIABILITY_SCREEN,
    LOAN_SCREEN,
    MAIN_SCREEN,
    MENU,
    PROFILE_SCREEN,
    REVENUE_SCREEN
} from "./../configuration/GameConfiguration.js";

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

export class GameContext {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.map = new Map();
        this.clear();
        this.mouseListener = new MouseListener(this);
        let job = new JuniorSoftwareEngineer(this);
        this.player = new Player(this, job, 22);
        this.player.getLiabilities().getStudentLoan().setValue(100000);
        this.player.getRevenue().getSalary().setValue(job.getSalary());
        this.player.getExpenses().getMortgagePayment().setValue(500);
        this.screens = new Map();
        this.screens.set(MENU, new Menu(this));
        this.screens.set(HEADER, new Header(this));
        this.screens.set(MAIN_SCREEN, new MainScreen(this));
        this.screens.set(FOOTER, new Footer(this));
        this.screens.set(PROFILE_SCREEN, new ProfileScreen(this));
        this.screens.set(REVENUE_SCREEN, new RevenueScreen(this));
        this.screens.set(EXPENSE_SCREEN, new ExpenseScreen(this));
        this.screens.set(ASSET_SCREEN, new AssetScreen(this));
        this.screens.set(INVESTMENT_SCREEN, new InvestmentScreen(this));
        this.screens.set(LIABILITY_SCREEN, new LiabilityScreen(this));
        this.screens.set(LOAN_SCREEN, new LoanScreen(this));
        this.screens.set(LAST_YEAR_SCREEN, new LastYearScreen(this));
        this.setScreen(PROFILE_SCREEN);
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

    getPlayer() {
        return this.player;
    }

    setPlayer(player) {
        this.player = player;
    }

    getScreens() {
        return this.screens;
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