import { splitToEqualPartsArray } from "./../function/MathFunctions.js";

export const GAME_SCREEN = "GameScreen";

export const GAME_SCREEN_H_BORDER_PERCENT = 3;
export const GAME_SCREEN_TOP_BORDER_PERCENT = 3;
export const GAME_SCREEN_BOTTOM_BORDER_PERCENT = 3;

export const GAME_SCREEN_GRID_TITLE_TYPE = "18pt Helvetica";
export const GAME_SCREEN_GRID_TITLE_COLOR = "white";
export const GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_X = .3;
export const GAME_SCREEN_GRID_TITLE_PERCENT_OFFSET_Y = 2.5;
export const GAME_SCREEN_GRID_TEXT_TYPE = "16pt Helvetica";
export const GAME_SCREEN_GRID_TEXT_COLOR = "white";
export const GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_X = .3;
export const GAME_SCREEN_GRID_TEXT_PERCENT_OFFSET_Y = 2.5;

export const GAME_SCREEN_ASSET_PERCENT_X = 3;
export const GAME_SCREEN_ASSET_PERCENT_Y = 3;
export const GAME_SCREEN_ASSET_PERCENT_W_ARRAY = [16, 7];
export const GAME_SCREEN_ASSET_PERCENT_H_ARRAY = splitToEqualPartsArray(36, 12);
export const GAME_SCREEN_ASSET_PERCENT_BORDER = .2;
export const GAME_SCREEN_ASSET_COLOR = "green";

export const GAME_SCREEN_LIABILITY_PERCENT_X = 3;
export const GAME_SCREEN_LIABILITY_PERCENT_Y = 60;
export const GAME_SCREEN_LIABILITY_PERCENT_W_ARRAY = [16, 7];
export const GAME_SCREEN_LIABILITY_PERCENT_H_ARRAY = splitToEqualPartsArray(36, 12);
export const GAME_SCREEN_LIABILITY_PERCENT_BORDER = .2;
export const GAME_SCREEN_LIABILITY_COLOR = "red";

export const GAME_SCREEN_REVENUE_PERCENT_X = 56;
export const GAME_SCREEN_REVENUE_PERCENT_Y = 3;
export const GAME_SCREEN_REVENUE_PERCENT_W_ARRAY = [16, 7];
export const GAME_SCREEN_REVENUE_PERCENT_H_ARRAY = splitToEqualPartsArray(36, 12);
export const GAME_SCREEN_REVENUE_PERCENT_BORDER = .2;
export const GAME_SCREEN_REVENUE_COLOR = "green";

export const GAME_SCREEN_EXPENSE_PERCENT_X = 56;
export const GAME_SCREEN_EXPENSE_PERCENT_Y = 60;
export const GAME_SCREEN_EXPENSE_PERCENT_W_ARRAY = [16, 7];
export const GAME_SCREEN_EXPENSE_PERCENT_H_ARRAY = splitToEqualPartsArray(36, 12);
export const GAME_SCREEN_EXPENSE_PERCENT_BORDER = .2;
export const GAME_SCREEN_EXPENSE_COLOR = "red";