import React, { MouseEvent, useState } from "react";
import { makeBoard, range, whoWon } from "../helpers";
import { MiniBoardType, GameBoard, SquareType } from "../types";
import clsx from "clsx";
import { Circle, X } from "react-feather";
import MiniBoard from "./MiniBoard";

const Game: React.FC<{ initialGameState?: GameBoard }> = ({
  initialGameState,
}) => {
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [gameState, setGameState] = useState<GameBoard>(
    initialGameState ??
      makeBoard(() => ({ squares: makeBoard(() => undefined) }))
  );

  function updateGameState(
    event: MouseEvent,
    boardId: number,
    squareId: number
  ): void {
    event.preventDefault();
    const newGameState: GameBoard = [...gameState];
    const newBoard = newGameState[boardId];

    if (
      newBoard.squares[squareId] === undefined &&
      (newBoard.highlighted ||
        newGameState.filter((board) => board.highlighted === true).length === 0)
    ) {
      newBoard.squares[squareId] = turn; // set the square to "X" or "O"

      newGameState[boardId].highlighted = false; // un-highlight the previously highlighted board

      if (
        !whoWon(newBoard.squares, (x) => x) && // current board
        !whoWon(newGameState[squareId].squares, (x) => x) // sending board
      ) {
        newGameState[squareId].highlighted = true; // highlight the next board
      }
      setGameState(newGameState);

      turn === "X" ? setTurn("O") : setTurn("X");
    }
  }

  const whoWonGame = whoWon<MiniBoardType, SquareType>(
    gameState,
    (miniBoard) => {
      return whoWon(miniBoard.squares, (x) => x);
    }
  );

  return (
    <div className="relative grid place-items-center">
      <div
        className={clsx(
          "absolute text-lg",
          whoWonGame ? "block z-10" : "hidden"
        )}
      >
        {whoWonGame === "X" ? (
          <X className="w-[34rem] h-[34rem] text-cyan-900" />
        ) : (
          <Circle className="w-[30rem] h-[30rem] text-cyan-900" />
        )}
      </div>
      <div
        className={clsx(
          "bg-zinc-200 grid grid-cols-3 grid-rows-3 gap-3 max-w-fit place-items-center",
          whoWonGame && "blur-[2px]"
        )}
      >
        {range(0, 9).map((i) => (
          <MiniBoard
            key={i}
            boardId={i}
            boardInfo={gameState[i]}
            onClick={(event, boardId, squareId) => {
              updateGameState(event, boardId, squareId);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
