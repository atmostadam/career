export class Grid {
    constructor(context, percentX, percentY, percentWArray, percentHArray) {
        this.context = context;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentWArray = percentWArray;
        this.percentHArray = percentHArray;
        this.numberOfRows = percentHArray.length;
        this.numberOfColumns = percentWArray.length;
    }
}