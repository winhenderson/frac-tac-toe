export type SquareType = "X" | "O" | undefined;

export type BoardType<T> = [T, T, T, T, T, T, T, T, T];

export type MiniBoardType = {
  squares: BoardType<SquareType>;
  won?: "X" | "O";
  highlighted?: boolean;
};

export type GameBoard = BoardType<MiniBoardType>;
