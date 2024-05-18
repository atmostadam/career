import { SquareOutlineDrawing } from "../drawing/SquareOutlineDrawing.js";
import { ImageSquareDrawing } from "../drawing/ImageSquareDrawing.js";
import {
    IMAGE_FACE_RASPBERRY_SRC,
    IMAGE_FACE_RASPBERRY_WH,
    IMAGE_FACE_RASPBERRY_PERCENT_X,
    IMAGE_FACE_RASPBERRY_PERCENT_Y,
    IMAGE_FACE_RASPBERRY_PERCENT_WH,
    GAME_SCREEN_PROFILE_PICTURE_PERCENT_X,
    GAME_SCREEN_PROFILE_PICTURE_PERCENT_Y,
    GAME_SCREEN_PROFILE_PICTURE_PERCENT_WH,
    GAME_SCREEN_PROFILE_PICTURE_PERCENT_BORDER,
    GAME_SCREEN_PROFILE_PICTURE_COLOR
} from "./../configuration/GameConfiguration.js";
import { loadImage } from "./../context/GameContext.js";

await loadImage(IMAGE_FACE_RASPBERRY_SRC);

export class ProfilePictureComponent {
    constructor(context) {
        this.context = context;
    }

    draw() {
        new ImageSquareDrawing(
            this.context,
            IMAGE_FACE_RASPBERRY_SRC,
            0,
            0,
            IMAGE_FACE_RASPBERRY_WH,
            IMAGE_FACE_RASPBERRY_PERCENT_X,
            IMAGE_FACE_RASPBERRY_PERCENT_Y,
            IMAGE_FACE_RASPBERRY_PERCENT_WH)
            .draw();
        new SquareOutlineDrawing(
            this.context,
            GAME_SCREEN_PROFILE_PICTURE_PERCENT_X,
            GAME_SCREEN_PROFILE_PICTURE_PERCENT_Y,
            GAME_SCREEN_PROFILE_PICTURE_PERCENT_WH,
            GAME_SCREEN_PROFILE_PICTURE_PERCENT_BORDER,
            GAME_SCREEN_PROFILE_PICTURE_COLOR)
            .draw();
    }
}