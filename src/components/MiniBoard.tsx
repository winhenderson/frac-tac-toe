import React, { MouseEvent } from "react";
import { range } from "../helpers";
import Square from "./Square";
import { SquareState } from "../types";
import clsx from "clsx";
import { Circle, X } from "react-feather";

type Props = {
  onClick(event: MouseEvent, boardId: number, squareId: number): void;
  boardId: number;
  boardState: Array<SquareState>;
  highlighted?: boolean;
  isWon?: "X" | "O";
};

const MiniBoard: React.FC<Props> = ({
  boardState,
  boardId,
  onClick,
  highlighted = false,
  isWon,
}) => (
  <div className="relative grid place-items-center">
    <div className={clsx("absolute text-lg", isWon ? "block z-10" : "hidden")}>
      {isWon === "X" ? (
        <X className="w-44 h-44 text-cyan-900" />
      ) : (
        <Circle className="w-36 h-36 text-cyan-900" />
      )}
    </div>
    <div
      className={clsx(
        "bg-zinc-200 grid shadow-md grid-cols-3 grid-rows-3 gap-[2px] rounded-md",
        highlighted && "ring ring-cyan-400 ring-offset-4 ring-offset-cyan-50",
        isWon && "blur-[2px]"
      )}
    >
      {range(0, 9).map((i) => (
        <Square
          key={i}
          id={i}
          state={boardState[i]}
          onClick={(event, squareId) => onClick(event, boardId, squareId)}
        />
      ))}
    </div>
  </div>
);

export default MiniBoard;
