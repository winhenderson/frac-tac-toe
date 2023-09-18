import { describe, test, expect } from "vitest";
import { BoardType, SquareType } from "../types";
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
    let board = input.map((square) =>
      square === "-" ? undefined : square
    ) as BoardType<SquareType>;
    expect(whoWonMiniBoard(board)).toBe(expected);
  });
});

describe("whoWonMiniBoard()", () => {
  const cases: Array<[BoardType<BoardType<SquareType>>, SquareType]> = [
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

function X(): BoardType<SquareType> {
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

function O(): BoardType<SquareType> {
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

function U(): BoardType<SquareType> {
  return makeBoard(() => undefined);
}
