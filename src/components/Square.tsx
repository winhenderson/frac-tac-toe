import React, { MouseEvent } from "react";
import { X, Circle } from "react-feather";
import { SquareState } from "../types";

type Props = {
  onClick(event: MouseEvent, squareId: number): void;
  id: number;
  state: SquareState;
};

const Square: React.FC<Props> = ({ state, id, onClick }) => {
  return (
    <div
      onClick={(event) => onClick(event, id)}
      className="bg-white shadow-md w-[50px] h-[50px] flex justify-center items-center"
    >
      <span>{state === "X" ? <X /> : state === "O" ? <Circle /> : ""}</span>
    </div>
  );
};

export default Square;
