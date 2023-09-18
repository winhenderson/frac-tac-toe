import { describe, test, expect } from "vitest";
import { makeBoard } from "../helpers";
import { MiniBoardType, SquareType } from "../types";
import { State, updateState } from "../updateState";

describe("updateState", () => {
  test("click in top left top left sets correct", () => {
    const initialState = emptyState();

    const nextState = updateState(initialState, 0, 0);
    expect(nextState.board[0][0]).toBe("X");
    expect(nextState.turn).toBe("O");
  });

  test("click already clicked square doesn't set anything", () => {
    let state = updateState(emptyState(), 0, 0);

    state = updateState(state, 0, 0);
    expect(state.board[0][0]).not.toBe("O");
    expect(state.turn).toBe("O");
  });
});

function emptyState(): State {
  return {
    turn: "X",
    board: makeBoard(() => makeBoard(() => undefined)),
  };
}
