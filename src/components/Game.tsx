import React, { MouseEvent, useState } from "react";
import MiniBoard from "./MiniBoard";
import { boardIsWon, gameIsWon, range } from "../helpers";
import { Board, SquareType } from "../types";
import clsx from "clsx";
import { Circle, X } from "react-feather";

const Game: React.FC<{ won: SquareType }> = ({ won }) => {
  // let won: SquareType = undefined;
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [gameState, setGameState] = useState<Array<Board>>([
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
    {
      squares: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    },
  ]);

  const updateGameState = (
    event: MouseEvent,
    boardId: number,
    squareId: number
  ): void => {
    event.preventDefault();
    const newGameState = [...gameState];
    const newBoard = newGameState[boardId];
    const winner = gameIsWon(gameState);
    if (winner) {
      won = winner;
      return;
    }

    if (
      newBoard.squares[squareId] === undefined &&
      (newBoard.highlighted ||
        newGameState.filter((board) => board.highlighted === true).length === 0)
    ) {
      newBoard.squares[squareId] = turn; // set the square to "X" or "O"

      if (boardIsWon(newBoard.squares)) {
        newBoard.won = turn;
      }

      newGameState[boardId].highlighted = false; // un-highlight the previously highlighted board
      if (newGameState[squareId].won === undefined) {
        newGameState[squareId].highlighted = true; // highlight the next board
      }

      setGameState(newGameState);

      turn === "X" ? setTurn("O") : setTurn("X");
    }
  };

  return (
    <div className="relative grid place-items-center">
      <div className={clsx("absolute text-lg", won ? "block z-10" : "hidden")}>
        {won === "X" ? (
          <X className="w-[34rem] h-[34rem] text-cyan-900" />
        ) : (
          <Circle className="w-[30rem] h-[30rem] text-cyan-900" />
        )}
      </div>
      <div
        className={clsx(
          "bg-zinc-200 grid grid-cols-3 grid-rows-3 gap-3 max-w-fit place-items-center",
          won && "blur-[2px]"
        )}
      >
        {range(0, 9).map((i) => (
          <MiniBoard
            key={i}
            boardId={i}
            boardInfo={gameState[i]}
            onClick={updateGameState}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
