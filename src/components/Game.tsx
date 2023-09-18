import React, { useState } from "react";
import { emptyState, range, whoWonGameBoard } from "../helpers";
import { State, ZeroToNine } from "../types";
import clsx from "clsx";
import { Circle, X } from "react-feather";
import MiniBoard from "./MiniBoard";
import InfoBox from "./InfoBox";
import { updateState } from "../updateState";

const Game: React.FC<{ initialGameState?: State }> = ({ initialGameState }) => {
  const [state, setState] = useState<State>(initialGameState ?? emptyState());

  const whoWonGame = whoWonGameBoard(state.board);

  return (
    <div className="mx-auto mb-auto mt-6 grid grid-flow-row place-content-center gap-6">
      <InfoBox
        turn={state.turn}
        winner={whoWonGame}
        playAnywhere={false} // TODO fix this
      />
      <div className="place-self-center">
        <div className="relative grid place-items-center">
          <div
            className={clsx(
              "absolute text-lg",
              whoWonGame ? "block z-10" : "hidden"
            )}
          >
            {whoWonGame === "X" ? (
              <X className="w-[45rem] h-[45rem] text-cyan-950" />
            ) : (
              <Circle className="w-[30rem] h-[30rem] text-cyan-950" />
            )}
          </div>
          <div
            className={clsx(
              "bg-zinc-200 grid grid-cols-3 grid-rows-3 gap-3 max-w-fit place-items-center",
              whoWonGame && "blur-[2px]"
            )}
          >
            {range(0, 9).map((i) => (
              <MiniBoard
                key={i}
                boardId={i as ZeroToNine}
                squares={state.board[i]}
                onClick={(event, boardId, squareId) => {
                  event.preventDefault();
                  setState(updateState(state, boardId, squareId));
                }}
                highlighted={i === state.lastSquarePlayed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
