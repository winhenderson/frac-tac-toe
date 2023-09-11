import { MiniBoardType, BoardType, SquareType } from "./types";

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

export function topThree<T>(a: () => T, b: () => T): BoardType<T> {
  const board = makeBoard(b);
  board[0] = a();
  board[1] = a();
  board[2] = a();
  return board;
}

export function whoWon<T, K>(
  board: BoardType<T>,
  extractor: (value: T) => K
): K | undefined {
  const rows = [board.slice(0, 3), board.slice(3, 6), board.slice(6)];

  // rows
  // cols
  for (const i in range(0, 3)) {
    if (areEqual<T>([rows[0][i], rows[1][i], rows[2][i]])) {
      return extractor(rows[0][i]);
    } else if (areEqual<T>(rows[i])) {
      return extractor(rows[i][0]);
    }
  }

  // diagonals
  if (
    areEqual<T>([rows[0][0], rows[1][1], rows[2][2]]) ||
    areEqual<T>([rows[0][2], rows[1][1], rows[2][0]])
  ) {
    return extractor(rows[1][1]);
  }
}

export function gameIsWon<T>(board: BoardType<T>): boolean {
  return whoWon(board, (x) => x) !== undefined;
}

export function xWins(): MiniBoardType {
  return {
    squares: [
      "X",
      undefined,
      undefined,
      undefined,
      "X",
      undefined,
      undefined,
      undefined,
      "X",
    ],
  };
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

// export const gameIsWon = (gameArray: Array<Board>): SquareType => {
//   const winsArray = gameArray.map((board) => board.won);
//   const game = [
//     winsArray.slice(0, 3),
//     winsArray.slice(3, 6),
//     winsArray.slice(6),
//   ];

//   // rows
//   if (areEqual(game[0]) || areEqual(game[1]) || areEqual(game[2])) {
//     return game[0][0];
//   }

//   // columns
//   for (let i = 0; i < 3; i++) {
//     if (areEqual([game[0][i], game[1][i], game[2][i]])) {
//       return game[0][i];
//     }
//   }

//   //diagonals
//   if (areEqual([game[0][0], game[1][1], game[2][2]])) {
//     return game[0][0];
//   }
//   if (areEqual([game[0][0], game[1][1], game[2][2]])) {
//     return game[0][0];
//   }
//   return undefined;
// };

// export const boardIsWon = (boardArray: Array<SquareType>): boolean => {
//   const board = [
//     boardArray.slice(0, 3),
//     boardArray.slice(3, 6),
//     boardArray.slice(6),
//   ];

//   // rows
//   if (areEqual(board[0]) || areEqual(board[1]) || areEqual(board[2])) {
//     return true;
//   }

//   // columns
//   for (let i = 0; i < 3; i++) {
//     if (areEqual([board[0][i], board[1][i], board[2][i]])) {
//       return true;
//     }
//   }

//   //diagonals
//   if (areEqual([board[0][0], board[1][1], board[2][2]])) {
//     return true;
//   }
//   return false;
// };

function areEqual<T>([x, y, z]: Array<T>): boolean {
  if (x === y && y === z && x !== undefined) {
    return true;
  }
  return false;
}
