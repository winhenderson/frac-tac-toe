import React from "react";
import { SquareType } from "../types";

type Props = {
  turn: SquareType;
  winner: SquareType;
  playAnywhere: boolean;
};

const InfoBox: React.FC<Props> = ({ turn, winner, playAnywhere }) => {
  return (
    <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 border-2 border-cyan-800 rounded-md w-full h-16 flex justify-around shadow shadow-zinc-400">
      <p className={`text-lg text-zinc-50 w-1/4`}>
        {winner && (
          <span className={`font-comfortaa text-md`}>{winner} Won!</span>
        )}
        {playAnywhere && !winner && "Play Anywhere"}
      </p>
      <header className="text-4xl text-cyan-300 self-center">
        Frac Tac Toe
      </header>
      <p
        className={`text-lg text-zinc-50 w-1/4 text-right ${
          winner && "invisible"
        }`}
      >
        <span className="font-comfortaa text-md tracking-widest ">{turn}</span>
        's Turn
      </p>
    </div>
  );
};

export default InfoBox;
