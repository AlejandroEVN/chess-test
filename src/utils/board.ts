import { BOARD_SQUARES } from "@/constants";
import type { Coordinates } from "@/store/store";

function getSquareFromCoordinates({column, row}: Coordinates) {
  const squareColumn = BOARD_SQUARES.columns[column];
  const squareRow = BOARD_SQUARES.rows[row];
  return `${squareColumn}${squareRow}`;
}

export {
  getSquareFromCoordinates
}