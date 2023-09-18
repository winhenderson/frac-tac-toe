import { BoardType, SquareType } from "./types";

export type State = {
  turn: SquareType;
  board: BoardType<BoardType<SquareType>>;
};

export function updateState(
  gameState: State,
  boardId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
  squareId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
): State {
  if (gameState.board[boardId][squareId]) {
    return gameState;
  }
  const newState: State = JSON.parse(JSON.stringify(gameState));

  newState.board[boardId][squareId] = gameState.turn;
  newState.turn = newState.turn === "X" ? "O" : "X";

  return newState;
  // // const newGameState: GameBoard = [...gameState];
  // // const newBoard = state[boardId];

  // if (
  //   newState[boardId].squares[squareId] === undefined &&
  //   (newBoard[boardId].highlighted || !findIfAnyHighlighted(newGameState))
  // ) {
  //   newBoard.squares[squareId] = turn; // set the square to "X" or "O"

  //   newGameState[boardId].highlighted = false; // un-highlight the previously highlighted board

  //   if (
  //     !whoWon(newBoard.squares, (x) => x) && // current board
  //     !whoWon(newGameState[squareId].squares, (x) => x) // sending board
  //   ) {
  //     newGameState[squareId].highlighted = true; // highlight the next board
  //   }
  //   setGameState(newGameState);

  //   turn === "X" ? setTurn("O") : setTurn("X");
  // }
}
