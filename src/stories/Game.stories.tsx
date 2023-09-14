import type { Meta, StoryObj } from "@storybook/react";

import Game from "../components/Game";

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

export const XWins: Story = {
  args: {
    initialGameState: [
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
      },
      {
        squares: [
          undefined,
          "X",
          undefined,
          undefined,
          "X",
          undefined,
          "O",
          "X",
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "O",
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          "O",
          undefined,
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          "X",
          "X",
          "X",
          undefined,
          undefined,
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
          "X",
          "O",
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
          "X",
          "X",
          "X",
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "O",
          undefined,
        ],
        highlighted: false,
      },
    ],
  },
};

export const XAboutToWin: Story = {
  args: {
    initialGameState: [
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
      },
      {
        squares: [
          undefined,
          "X",
          undefined,
          undefined,
          "X",
          undefined,
          "O",
          "X",
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "O",
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          "O",
          undefined,
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          "X",
          "X",
          "X",
          undefined,
          undefined,
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
          "X",
          "O",
          undefined,
        ],
        highlighted: false,
      },
      {
        squares: [
          undefined,
          "O",
          undefined,
          undefined,
          undefined,
          undefined,
          "X",
          "X",
          undefined,
        ],
        highlighted: true,
      },
      {
        squares: [
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "O",
          undefined,
        ],
        highlighted: false,
      },
    ],
  },
};
