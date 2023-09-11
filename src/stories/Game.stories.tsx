import type { Meta, StoryObj } from "@storybook/react";

import Game from "../components/Game";
import { makeBoard, topThree, xWins } from "../helpers";
import { MiniBoardType, BoardType, GameBoard, SquareType } from "../types";

const meta = {
  title: "Components/Game",
  component: Game,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Game>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};

export const XWon: Story = {
  args: {
    initialGameState: topThree(
      () => ({
        squares: topThree(
          () => "X",
          () => undefined
        ),
      }),
      () => ({ squares: makeBoard(() => undefined) })
    ),
  },
};

export const OWon: Story = {
  args: {},
};
