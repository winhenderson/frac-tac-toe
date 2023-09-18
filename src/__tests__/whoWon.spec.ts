import { describe, test, expect } from "vitest";
import { BoardType, GameBoard, MiniBoardType, SquareType } from "../types";
import { makeBoard, whoWonGameBoard, whoWonMiniBoard } from "../helpers";

describe("whoWonMiniBoard()", () => {
  const cases: Array<[BoardType<"X" | "O" | "-">, SquareType]> = [
    [["-", "-", "-", "-", "-", "-", "-", "-", "-"], undefined],
    [["X", "-", "-", "-", "-", "-", "-", "-", "-"], undefined],
    [["X", "X", "X", "-", "-", "-", "-", "-", "-"], "X"],
    [["X", "-", "-", "-", "X", "-", "-", "-", "X"], "X"],
    [["O", "-", "-", "O", "-", "-", "O", "-", "-"], "O"],
  ];

  test.each(cases)(`correct return value`, (input, expected) => {
    const board = input.map((square) =>
      square === "-" ? undefined : square
    ) as MiniBoardType;
    expect(whoWonMiniBoard(board)).toBe(expected);
  });
});

describe("whoWonMiniBoard()", () => {
  const cases: Array<[GameBoard, SquareType]> = [
    [[U(), U(), U(), U(), U(), U(), U(), U(), U()], undefined],
    [[X(), U(), U(), U(), U(), U(), U(), U(), U()], undefined],
    [[X(), X(), X(), U(), U(), U(), U(), U(), U()], "X"],
    [[X(), U(), U(), U(), X(), U(), U(), U(), X()], "X"],
    [[O(), U(), U(), O(), U(), U(), O(), U(), U()], "O"],
  ];

  test.each(cases)(`correct return value`, (game, expected) => {
    expect(whoWonGameBoard(game)).toBe(expected);
  });
});

export function X(): MiniBoardType {
  return [
    "X",
    "X",
    "X",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
}

function O(): MiniBoardType {
  return [
    "O",
    "O",
    "O",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
}

function U(): MiniBoardType {
  return makeBoard(() => undefined);
}
