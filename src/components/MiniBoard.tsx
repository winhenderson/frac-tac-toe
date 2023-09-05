import React from "react";
import { range } from "../helpers";

const MiniBoard: React.FC = () => (
  <div className="bg-zinc-200 grid shadow-md grid-cols-3 grid-rows-3 gap-[2px]">
    {range(0, 9).map((i) => (
      <div key={i} className="bg-white shadow-md w-[50px] h-[50px]" />
    ))}
  </div>
);

export default MiniBoard;
