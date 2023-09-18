import {
  BoardType,
  GameBoard,
  MiniBoardType,
  SquareType,
  State,
} from "./types";

export function findIfAnyHighlighted(game: GameBoard): boolean {
  // const highlightedBoards = game.filter((board) => board.highlighted === true);
  // return highlightedBoards.length > 0;
}

export function range(start: number, end: number, step: number = 1) {
  const output: number[] = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
}

export function whoWonMiniBoard(board: MiniBoardType): SquareType {
  return whoWon(board, (x) => x);
}

export function whoWonGameBoard(gameBoard: GameBoard): SquareType {
  return whoWon(gameBoard, whoWonMiniBoard);
}

export function whoWon<T, K>(
  inputBoard: BoardType<T>,
  extract: (value: T) => K
): K | undefined {
  const board = inputBoard.map(extract) as BoardType<K>;

  if (
    areEqual([board[3], board[4], board[5]]) ||
    areEqual([board[1], board[4], board[7]]) ||
    areEqual([board[0], board[4], board[8]]) ||
    areEqual([board[2], board[4], board[6]])
  ) {
    return board[4];
  }
  if (
    areEqual([board[0], board[1], board[2]]) ||
    areEqual([board[0], board[3], board[6]])
  ) {
    return board[0];
  }
  if (
    areEqual([board[6], board[7], board[8]]) ||
    areEqual([board[2], board[5], board[8]])
  ) {
    return board[8];
  }
}

function areEqual<T>([x, y, z]: [T, T, T]): boolean {
  if (x === y && y === z && z != undefined) {
    return true;
  }
  return false;
}

// clean up a bunch of the arrow function wrappers
export function makeBoard<T>(value: () => T | T): BoardType<T> {
  return [
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
    typeof value === "function" ? value() : value,
  ];
}

export function emptyState(): State {
  return {
    turn: "X",
    board: makeBoard(() => makeBoard(() => undefined)),
  };
}
