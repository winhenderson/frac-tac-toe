import { Board, SquareType } from "./types";

export const range = (start: number, end: number, step: number = 1) => {
  let output: number[] = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const gameIsWon = (gameArray: Array<Board>): SquareType => {
  const winsArray = gameArray.map((board) => board.won);
  const game = [
    winsArray.slice(0, 3),
    winsArray.slice(3, 6),
    winsArray.slice(6),
  ];

  // rows
  if (areEqual(game[0]) || areEqual(game[1]) || areEqual(game[2])) {
    return game[0][0];
  }

  // columns
  for (let i = 0; i < 3; i++) {
    if (areEqual([game[0][i], game[1][i], game[2][i]])) {
      return game[0][0];
    }
  }

  //diagonals
  if (areEqual([game[0][0], game[1][1], game[2][2]])) {
    return game[0][0];
  }
  return undefined;
};

export const boardIsWon = (boardArray: Array<SquareType>): boolean => {
  const board = [
    boardArray.slice(0, 3),
    boardArray.slice(3, 6),
    boardArray.slice(6),
  ];

  // rows
  if (areEqual(board[0]) || areEqual(board[1]) || areEqual(board[2])) {
    return true;
  }

  // columns
  for (let i = 0; i < 3; i++) {
    if (areEqual([board[0][i], board[1][i], board[2][i]])) {
      return true;
    }
  }

  //diagonals
  if (areEqual([board[0][0], board[1][1], board[2][2]])) {
    return true;
  }
  return false;
};

const areEqual = ([x, y, z]: Array<SquareType>): boolean => {
  if (x === y && y === z && x !== undefined) {
    return true;
  }
  return false;
};
