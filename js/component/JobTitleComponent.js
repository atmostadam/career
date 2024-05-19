import { TextDrawing } from "../drawing/TextDrawing.js";
import {
    GAME_SCREEN_JOB_TITLE_TEXT_PERCENT_X,
    GAME_SCREEN_JOB_TITLE_TEXT_PERCENT_Y,
    GAME_SCREEN_JOB_TITLE_TEXT_TYPE,
    GAME_SCREEN_JOB_TITLE_TEXT_COLOR,
    GAME_SCREEN_JOB_TITLE_SALARY_TEXT_PERCENT_X,
    GAME_SCREEN_JOB_TITLE_SALARY_TEXT_PERCENT_Y,
    GAME_SCREEN_JOB_TITLE_SALARY_TEXT_TYPE,
    GAME_SCREEN_JOB_TITLE_SALARY_TEXT_COLOR
} from "./../configuration/GameConfiguration.js";


export class JobTitleComponent {
    constructor(context) {
        this.context = context;
    }

    update(tick) {
        this.tick = tick;
    }

    onMouseOver(x, y) {

    }

    onClick(x, y) {

    }

    onUnclick(x, y) {

    }

    draw() {
        new TextDrawing(
            this.context,
            this.context.getPlayer().getJob().getTitle(),
            GAME_SCREEN_JOB_TITLE_TEXT_PERCENT_X,
            GAME_SCREEN_JOB_TITLE_TEXT_PERCENT_Y,
            GAME_SCREEN_JOB_TITLE_TEXT_TYPE,
            GAME_SCREEN_JOB_TITLE_TEXT_COLOR
        )
            .draw();
        new TextDrawing(
            this.context,
            "$" + this.context.getPlayer().getJob().getSalary(),
            GAME_SCREEN_JOB_TITLE_SALARY_TEXT_PERCENT_X,
            GAME_SCREEN_JOB_TITLE_SALARY_TEXT_PERCENT_Y,
            GAME_SCREEN_JOB_TITLE_SALARY_TEXT_TYPE,
            GAME_SCREEN_JOB_TITLE_SALARY_TEXT_COLOR
        )
            .draw();
    }
}