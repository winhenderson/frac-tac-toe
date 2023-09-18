import { whoWonMiniBoard } from "./helpers";
import { BoardType, SquareType, ZeroToNine } from "./types";

export type State = {
  turn: SquareType;
  board: BoardType<BoardType<SquareType>>;
  lastSquarePlayed?: ZeroToNine;
};

export function updateState(
  gameState: State,
  boardId: ZeroToNine,
  squareId: ZeroToNine
): State {
  if (gameState.board[boardId][squareId]) {
    return gameState;
  }

  if (
    (gameState.lastSquarePlayed !== boardId &&
      gameState.lastSquarePlayed !== undefined &&
      !whoWonMiniBoard(gameState.board[gameState.lastSquarePlayed])) ||
    gameState.board[boardId][squareId] != undefined
  ) {
    return gameState;
  }
  const newState: State = JSON.parse(JSON.stringify(gameState));

  newState.board[boardId][squareId] = gameState.turn;
  newState.turn = newState.turn === "X" ? "O" : "X";
  newState.lastSquarePlayed = squareId;

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
