export class Grid {
    constructor(context, grid, percentX, percentY, percentW, percentH) {
        this.context = context;
        this.grid = grid;
        this.percentX = percentX;
        this.percentY = percentY;
        this.percentW = percentW;
        this.percentH = percentH;
        this.numberOfRows = this.grid.length;
        this.numberOfColumns = this.grid[0].length;
    }

    update(tick, parentX, parentY, parentW, parentH) {
        this.tick = tick;
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                for (let a = 0; a < this.grid[r][c].length; a++) {
                    this.grid[r][c][a]
                        .update(
                            tick,
                            parentX * (this.percentW * c),
                            parentY * (this.percentH * r),
                            parentW * this.percentW,
                            parentH * this.percentH);
                }
            }
        }
    }

    draw() {
        for (let r = 0; r < this.numberOfRows; r++) {
            for (let c = 0; c < this.numberOfColumns; c++) {
                for (let a = 0; a < this.grid[r][c].length; a++) {
                    this.grid[r][c][a].draw();
                }
            }
        }
    }

    get(row, column) {
        return this.grid[row][column];
    }

    set(row, column, instance) {
        this.grid[row][column].push(instance);
    }

    /*
    createGrid() {
        let grid = [];
        for (let r = 0; r < this.numberOfRows; r++) {
            let row = [];
            for (let c = 0; c < this.numberOfColumns; c++) {
                row.push(
                    new Cell(
                        this.context,
                        this.percentW * c,
                        this.percentH * r,
                        this.percentW,
                        this.percentH
                    )
                );
            }
            grid.push(row);
        }
        return grid;
    }

    getNumberOfRows() {
        return this.numberOfRows;
    }

    getNumberOfColumns() {
        return this.numberOfColumns;
    }
        */
}