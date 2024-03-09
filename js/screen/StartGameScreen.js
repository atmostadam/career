import { Gameable } from "../../../boot/base/Gameable.js";

export class StartGameScreen extends Gameable {
    constructor(context) {
        super(context);
        console.log("New instance of [StartGameScreen] object.", this);
    }

    init() {
        this.validateAndSetScreen();
        this.loaded = true;
        console.log("[StartGameScreen] object has been loaded.", this);
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        let character = this.getCharacter();
        this.screen.drawImage(
            this.context.getImage(character.imageId),
            this.getCharacter().ix,
            this.getCharacter().iy,
            this.getCharacter().w,
            this.getCharacter().h,
            this.screen.getLeft(),
            this.screen.getTop(),
            200,
            200
        );
        this.context.setCurrentScreen("MainScreen");
    }

    onClick(x, y) {

    }
}