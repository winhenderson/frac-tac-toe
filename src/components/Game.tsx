import React, { MouseEvent, useState } from "react";
import MiniBoard from "./MiniBoard";
import { range } from "../helpers";
import { SquareState } from "../types";

const Board: React.FC = () => {
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [selectedBoard, setSelectedBoard] = useState<number | null>(null);
  const [gameState, setGameState] = useState<Array<Array<SquareState>>>([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);

  const updateGameState = (
    event: MouseEvent,
    boardId: number,
    squareId: number
  ) => {
    event.preventDefault();
    const newGameState = gameState;
    if (
      newGameState[boardId][squareId] === "" &&
      (selectedBoard === null || boardId === selectedBoard)
    ) {
      newGameState[boardId][squareId] = turn; // set the square to "X" or "O"
      setGameState(newGameState);
      turn === "X" ? setTurn("O") : setTurn("X");
      setSelectedBoard(squareId);
    }
  };

  return (
    <div className="bg-zinc-200 grid grid-cols-3 grid-rows-3 gap-3 max-w-fit place-items-center">
      {range(0, 9).map((i) => (
        <MiniBoard
          key={i}
          boardId={i}
          boardState={gameState[i]}
          onClick={updateGameState}
          highlighted={i === selectedBoard}
        />
      ))}
    </div>
  );
};

export default Board;
