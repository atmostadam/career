import { CustomDrawing } from "./CustomDrawing.js";
import { RectangleOutlineDrawing } from "./RectangleOutlineDrawing.js";
import { RectangleSolidDrawing } from "./RectangleSolidDrawing.js";
import { TextDrawing } from "./TextDrawing.js";

export const DEFAULT_GRID_DRAWING_PRIORITY = [
    RectangleSolidDrawing,
    TextDrawing,
    RectangleOutlineDrawing,
    CustomDrawing
];