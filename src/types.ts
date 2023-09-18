export type SquareType = "X" | "O" | undefined;

export type BoardType<T> = [T, T, T, T, T, T, T, T, T];

export type MiniBoardType = BoardType<SquareType>;

export type GameBoard = BoardType<MiniBoardType>;

export type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type State = {
  turn: SquareType;
  board: GameBoard;
  lastSquarePlayed?: ZeroToNine;
};
