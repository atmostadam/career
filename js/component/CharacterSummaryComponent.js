import { Constants } from "../../../../boot/constants/Constants.js";
import { Gameable } from "./../../../../boot/base/Gameable.js";
import { MultiLineText } from "./../../../../boot/canvas/model/text/MultiLineText.js";

export class CharacterSummaryComponent extends Gameable {
    constructor(context) {
        super(context);
        this.context.setClassAndClickSubscriber(this);
        console.log("New instance of [CharacterSummaryComponent] object.", this);
    }

    init() {
        this.rectangleX = this.getFullWidthPercent(Constants.CHARACTER_SUMMARY_PERCENT_X);
        this.rectangleY = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_PERCENT_Y);
        this.rectangleW = this.getFullWidthPercent(Constants.CHARACTER_SUMMARY_PERCENT_W);
        this.rectangleH = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_PERCENT_H);

        this.imageSw = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_PERCENT_H);
        this.imageSh = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_PERCENT_H);
        this.imageX = this.getFullWidthPercent(Constants.CHARACTER_SUMMARY_IMAGE_PERCENT_X);
        this.imageY = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_IMAGE_PERCENT_Y);

        this.nameX = this.getFullWidthPercent(Constants.CHARACTER_SUMMARY_NAME_PERCENT_X);
        this.nameY = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_NAME_PERCENT_Y);
        this.nameTextSize = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_NAME_PERCENT_TEXT_SIZE);

        this.ageX = this.getFullWidthPercent(Constants.CHARACTER_SUMMARY_AGE_X);
        this.ageY = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_AGE_Y);
        this.ageTextSize = this.getFullHeightPercent(Constants.CHARACTER_SUMMARY_AGE_PERCENT_TEXT_SIZE);

        this.jobTitleX = this.getFullWidthPercent(Constants.JOB_SUMMARY_TITLE_PERCENT_X);
        this.jobTitleY = this.getFullHeightPercent(Constants.JOB_SUMMARY_TITLE_PERCENT_Y);
        this.jobTitleSize = this.getFullHeightPercent(Constants.JOB_SUMMARY_TITLE_TEXT_SIZE_PERCENT);

        this.jobResponsibilitiesX = this.getFullWidthPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_PERCENT_X);
        this.jobResponsibilitiesY = this.getFullHeightPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_PERCENT_Y);
        this.jobResponsibilitiesSize = this.getFullHeightPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_TEXT_SIZE_PERCENT);
        this.jobResponsibilitiesSpacing = this.getFullHeightPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_SPACING_PERCENT);

        this.loaded = true;
        this.context.registerResizeConsumer(this);
        console.log("[CharacterSummaryComponent] object has been loaded.", this);
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        this.context.getScreen().drawImage(
            this.context.getImage(this.getCharacter().imageId),
            this.getCharacter().ix,
            this.getCharacter().iy,
            this.getCharacter().w,
            this.getCharacter().h,
            this.imageX,
            this.imageY,
            this.imageSw,
            this.imageSh
        );

        this.context.getScreen().drawText(
            this.getCharacter().name,
            this.nameTextSize + "pt " + Constants.CHARACTER_SUMMARY_TEXT_FONT,
            Constants.CHARACTER_SUMMARY_TEXT_COLOR,
            this.nameX,
            this.nameY
        );

        new MultiLineText(
            this.context,
            [
                this.getJob().title,
                "Software Engineer",
                this.getCharacter().age + " Years Old"
            ],
            this.context.getScreen().getWidthPercent(Constants.JOB_SUMMARY_TITLE_PERCENT_X),
            this.context.getScreen().getHeightPercent(Constants.JOB_SUMMARY_TITLE_PERCENT_Y),
            this.context.getScreen().getHeightPercent(Constants.JOB_SUMMARY_TITLE_SPACING_PERCENT),
            Constants.CHARACTER_SUMMARY_TEXT_COLOR,
            this.context.getScreen().getHeightPercent(Constants.JOB_SUMMARY_TITLE_TEXT_SIZE_PERCENT),
            Constants.CHARACTER_SUMMARY_TEXT_FONT).draw();

        for (let i = 0; i < this.getJob().responsibilities.length; i++) {
            this.context.getScreen().drawText(
                this.getJob().responsibilities[i],
                this.jobResponsibilitiesSize + "pt Helvetica",
                "white",
                this.jobResponsibilitiesX,
                this.jobResponsibilitiesY + (i * this.jobResponsibilitiesSpacing)
            )
        }

        this.context.getScreen().drawRectangleOutlined(
            Constants.CHARACTER_SUMMARY_BORDER_SIZE,
            Constants.CHARACTER_SUMMARY_BORDER_COLOR,
            this.rectangleX,
            this.rectangleY,
            this.rectangleW,
            this.rectangleH
        );
    }

    onMouseOver() {

    }

    onClick(x, y) {

    }
}