import React, { MouseEvent } from "react";
import { X, Circle } from "react-feather";
import { SquareType } from "../types";

type Props = {
  onClick(event: MouseEvent, squareId: number): void;
  id: number;
  state: SquareType;
};

const Square: React.FC<Props> = ({ state, id, onClick }) => {
  return (
    <div
      onClick={(event) => onClick(event, id)}
      className="bg-white shadow-md w-[60px] h-[60px] flex justify-center items-center text-zinc-700"
    >
      <span>
        {state === "X" ? (
          <X className="w-12 h-12" />
        ) : state === "O" ? (
          <Circle className="w-12 h-12" />
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default Square;
