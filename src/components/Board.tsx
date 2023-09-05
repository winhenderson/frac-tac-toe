import React from "react";
import MiniBoard from "./MiniBoard";
import { range } from "../helpers";

const Board: React.FC = () => {
  return (
    <div className="bg-zinc-200 drop-shadow-2xl grid grid-cols-3 grid-rows-3 gap-2 max-w-fit place-items-center">
      {range(0, 9).map((i) => (
        <MiniBoard key={i} />
      ))}
    </div>
  );
};

export default Board;
