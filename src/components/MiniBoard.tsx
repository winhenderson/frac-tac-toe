import React, { MouseEvent } from "react";
import Square from "./Square";
import { MiniBoardType, SquareType } from "../types";
import clsx from "clsx";
import { Circle, X } from "react-feather";
import { whoWon } from "../helpers";

type Props = {
  onClick(event: MouseEvent, boardId: number, squareId: number): void;
  boardId: number;
  boardInfo: MiniBoardType;
};

const MiniBoard: React.FC<Props> = ({
  boardId,
  onClick,
  boardInfo: { squares, highlighted },
}) => {
  const boardIsWon = whoWon<SquareType, SquareType>(squares, (x) => x);
  return (
    <div className="relative grid place-items-center">
      <div
        className={clsx(
          "absolute text-xl",
          boardIsWon ? "block z-10" : "hidden"
        )}
      >
        {boardIsWon === "X" ? (
          <X className="w-44 h-44 text-cyan-900" />
        ) : (
          <Circle className="w-36 h-36 text-cyan-900" />
        )}
      </div>
      <div
        className={clsx(
          "bg-zinc-200 grid shadow-md grid-cols-3 grid-rows-3 gap-[2px] rounded-md",
          highlighted &&
            !boardIsWon &&
            "ring ring-cyan-400 ring-offset-4 ring-offset-cyan-50",
          boardIsWon && "blur-[2px]"
        )}
      >
        {squares.map((square, i) => (
          <Square
            key={i}
            id={i}
            state={square}
            onClick={(event, squareId) => onClick(event, boardId, squareId)}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniBoard;
