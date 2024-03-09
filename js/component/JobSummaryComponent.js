import { Gameable } from "../../../../boot/base/Gameable.js";
import { Constants } from "./../../../../boot/constants/Constants.js";

export class JobSummaryComponent extends Gameable {
    constructor(context) {
        super(context);
    }

    init() {
        this.rectangleX = this.getFullWidthPercent(Constants.JOB_SUMMARY_BORDER_PERCENT_X);
        this.rectangleY = this.getFullHeightPercent(Constants.JOB_SUMMARY_BORDER_PERCENT_Y);
        this.rectangleW = this.getFullWidthPercent(Constants.JOB_SUMMARY_BORDER_PERCENT_W);
        this.rectangleH = this.getFullHeightPercent(Constants.JOB_SUMMARY_BORDER_PERCENT_H);
        this.jobTitleX = this.getFullWidthPercent(Constants.JOB_SUMMARY_TITLE_PERCENT_X);
        this.jobTitleY = this.getFullHeightPercent(Constants.JOB_SUMMARY_TITLE_PERCENT_Y);
        this.jobTitleSize = this.getFullHeightPercent(Constants.JOB_SUMMARY_TITLE_TEXT_SIZE_PERCENT);
        this.jobResponsibilitiesX = this.getFullWidthPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_PERCENT_X);
        this.jobResponsibilitiesY = this.getFullHeightPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_PERCENT_Y);
        this.jobResponsibilitiesSize = this.getFullHeightPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_TEXT_SIZE_PERCENT);
        this.jobResponsibilitiesSpacing = this.getFullHeightPercent(Constants.JOB_SUMMARY_RESPONSIBILITIES_SPACING_PERCENT);
        this.jobImageX = this.getFullWidthPercent(Constants.JOB_SUMMARY_IMAGE_X);
        this.jobImageY = this.getFullHeightPercent(Constants.JOB_SUMMARY_IMAGE_Y);
        this.jobImageSh = this.getFullHeightPercent(Constants.JOB_SUMMARY_IMAGE_SH);
        this.jobImageSw = this.jobImageSh * (this.getJob().jobImageW / this.getJob().jobImageH);
        this.context.registerResizeConsumer(this);
        this.loaded = true;
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        this.context.getScreen().drawText(
            this.getJob().title,
            this.jobTitleSize + "pt Helvetica",
            "white",
            this.jobTitleX,
            this.jobTitleY
        );
        for (let i = 0; i < this.getJob().responsibilities.length; i++) {
            this.context.getScreen().drawText(
                this.getJob().responsibilities[i],
                this.jobResponsibilitiesSize + "pt Helvetica",
                "white",
                this.jobResponsibilitiesX + (this.rectangleW * .28),
                this.jobResponsibilitiesY + (i * this.jobResponsibilitiesSpacing)
            )
        }
        this.context.getScreen().drawImage(
            this.context.getImage(this.getJob().jobImageId),
            0,
            0,
            this.getJob().jobImageW,
            this.getJob().jobImageH,
            this.jobImageX,
            this.jobImageY,
            this.jobImageSw,
            this.jobImageSh
        );
        this.context.getScreen().drawRectangleOutlined(
            Constants.JOB_SUMMARY_BORDER_SIZE,
            Constants.JOB_SUMMARY_BORDER_COLOR,
            this.rectangleX,
            this.rectangleY,
            this.rectangleW,
            this.rectangleH
        );
    }
}