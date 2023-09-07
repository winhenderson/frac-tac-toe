import React, { MouseEvent } from "react";
import { range } from "../helpers";
import Square from "./Square";
import { SquareState } from "../types";

type Props = {
  onClick(event: MouseEvent, boardId: number, squareId: number): void;
  boardId: number;
  boardState: Array<SquareState>;
  highlighted?: boolean;
};

const MiniBoard: React.FC<Props> = ({
  boardState,
  boardId,
  onClick,
  highlighted = false,
}) => (
  <div
    className={`bg-zinc-200 grid shadow-md grid-cols-3 grid-rows-3 gap-[2px] rounded-md ${
      highlighted && "ring ring-cyan-400 ring-offset-4 ring-offset-cyan-50"
    }`}
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
);

export default MiniBoard;
