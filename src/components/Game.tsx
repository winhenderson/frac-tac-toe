import React, { MouseEvent, useState } from "react";
import MiniBoard from "./MiniBoard";
import { range } from "../helpers";
import { SquareState } from "../types";

const Board: React.FC = () => {
  const [turn, setTurn] = useState<"X" | "O">("X");
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
    if (newGameState[boardId][squareId] === "") {
      newGameState[boardId][squareId] = turn;
      setGameState(newGameState);
      turn === "X" ? setTurn("O") : setTurn("X");
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
        />
      ))}
    </div>
  );
};

export default Board;
