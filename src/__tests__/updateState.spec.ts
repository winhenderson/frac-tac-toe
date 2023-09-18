import { describe, test, expect } from "vitest";
import { makeBoard } from "../helpers";
import { State, updateState } from "../updateState";
import { X } from "./whoWon.spec";

describe("updateState", () => {
  test("click in top left top left sets correct", () => {
    let state = emptyState();

    state = updateState(state, 0, 0);
    expect(state.board[0][0]).toBe("X");
    expect(state.turn).toBe("O");
  });

  test("click already clicked square doesn't set anything", () => {
    let state = updateState(emptyState(), 0, 0);

    state = updateState(state, 0, 0);
    expect(state.board[0][0]).not.toBe("O");
    expect(state.turn).toBe("O");
  });

  test("sets lastSquarePlayed correctly", () => {
    let state = emptyState();
    expect(state.lastSquarePlayed).toBeUndefined();

    state = updateState(state, 0, 0);
    expect(state.lastSquarePlayed).toBe(0);
  });

  test("only allows moves on board = lastSquarePlayed", () => {
    const state = updateState(emptyState(), 0, 0);

    let nextState = updateState(state, 1, 0);
    expect(nextState).toEqual(state);
    nextState = updateState(nextState, 0, 2);
    expect(nextState).not.toEqual(state);
  });

  test("sends to any board if sent to a won board", () => {
    let state = emptyState();
    state.board[0] = X();
    state.lastSquarePlayed = 2;

    const state2 = updateState(state, 2, 0);
    const state3 = updateState(state2, 5, 2);

    expect(state2).not.toEqual(state3);
  });
});

function emptyState(): State {
  return {
    turn: "X",
    board: makeBoard(() => makeBoard(() => undefined)),
  };
}
