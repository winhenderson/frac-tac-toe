import { whoWonGameBoard, whoWonMiniBoard } from "./helpers";
import { State, ZeroToNine } from "./types";

export function updateState(
  gameState: State,
  boardId: ZeroToNine,
  squareId: ZeroToNine
): State {
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
  newState.lastSquarePlayed = whoWonGameBoard(newState.board)
    ? undefined
    : squareId;

  return newState;
}
