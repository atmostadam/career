import { TextDrawing } from "../drawing/TextDrawing.js";
import {
    GAME_SCREEN_SALARY_TITLE_TEXT_PERCENT_X,
    GAME_SCREEN_SALARY_TITLE_TEXT_PERCENT_Y,
    GAME_SCREEN_SALARY_TITLE_TEXT_TYPE,
    GAME_SCREEN_SALARY_TITLE_TEXT_COLOR,
    GAME_SCREEN_SALARY_TEXT_PERCENT_X,
    GAME_SCREEN_SALARY_TEXT_PERCENT_Y,
    GAME_SCREEN_SALARY_TEXT_TYPE,
    GAME_SCREEN_SALARY_TEXT_COLOR,
    GAME_SCREEN_BONUS_TITLE_TEXT_PERCENT_X,
    GAME_SCREEN_BONUS_TITLE_TEXT_PERCENT_Y,
    GAME_SCREEN_BONUS_TITLE_TEXT_TYPE,
    GAME_SCREEN_BONUS_TITLE_TEXT_COLOR,
    GAME_SCREEN_BONUS_TEXT_PERCENT_X,
    GAME_SCREEN_BONUS_TEXT_PERCENT_Y,
    GAME_SCREEN_BONUS_TEXT_TYPE,
    GAME_SCREEN_BONUS_TEXT_COLOR,
    GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_PERCENT_X,
    GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_PERCENT_Y,
    GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_TYPE,
    GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_COLOR,
    GAME_SCREEN_STOCK_OPTIONS_TEXT_PERCENT_X,
    GAME_SCREEN_STOCK_OPTIONS_TEXT_PERCENT_Y,
    GAME_SCREEN_STOCK_OPTIONS_TEXT_TYPE,
    GAME_SCREEN_STOCK_OPTIONS_TEXT_COLOR
} from "./../configuration/GameConfiguration.js";

export class SalaryComponent {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    draw() {
        new TextDrawing(
            this.context,
            "Salary:",
            GAME_SCREEN_SALARY_TITLE_TEXT_PERCENT_X,
            GAME_SCREEN_SALARY_TITLE_TEXT_PERCENT_Y,
            GAME_SCREEN_SALARY_TITLE_TEXT_TYPE,
            GAME_SCREEN_SALARY_TITLE_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "$" + this.context.getPlayer().getJob().getSalary(),
            GAME_SCREEN_SALARY_TEXT_PERCENT_X,
            GAME_SCREEN_SALARY_TEXT_PERCENT_Y,
            GAME_SCREEN_SALARY_TEXT_TYPE,
            GAME_SCREEN_SALARY_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "Bonus:",
            GAME_SCREEN_BONUS_TITLE_TEXT_PERCENT_X,
            GAME_SCREEN_BONUS_TITLE_TEXT_PERCENT_Y,
            GAME_SCREEN_BONUS_TITLE_TEXT_TYPE,
            GAME_SCREEN_BONUS_TITLE_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "$" + this.context.getPlayer().getJob().getBonus(),
            GAME_SCREEN_BONUS_TEXT_PERCENT_X,
            GAME_SCREEN_BONUS_TEXT_PERCENT_Y,
            GAME_SCREEN_BONUS_TEXT_TYPE,
            GAME_SCREEN_BONUS_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "Stock Options:",
            GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_PERCENT_X,
            GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_PERCENT_Y,
            GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_TYPE,
            GAME_SCREEN_STOCK_OPTIONS_TITLE_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "$" + this.context.getPlayer().getJob().getStockOptions(),
            GAME_SCREEN_STOCK_OPTIONS_TEXT_PERCENT_X,
            GAME_SCREEN_STOCK_OPTIONS_TEXT_PERCENT_Y,
            GAME_SCREEN_STOCK_OPTIONS_TEXT_TYPE,
            GAME_SCREEN_STOCK_OPTIONS_TEXT_COLOR
        )
            .draw();
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }
}