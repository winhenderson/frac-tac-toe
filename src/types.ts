export type SquareType = "X" | "O" | undefined;

export type Board = {
  squares: Array<SquareType>;
  won?: "X" | "O";
  highlighted?: boolean;
};
