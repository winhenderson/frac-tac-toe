import type { Meta, StoryObj } from "@storybook/react";

import MiniBoard from "../components/MiniBoard";

const meta = {
  title: "Components/MiniBoard",
  component: MiniBoard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MiniBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    squares: [
      "O",
      undefined,
      undefined,
      undefined,
      "X",
      "X",
      undefined,
      "O",
      "O",
    ],
    highlighted: false,
  },
};

export const Highlighted: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    squares: [
      "O",
      undefined,
      undefined,
      undefined,
      "X",
      "X",
      undefined,
      "O",
      "O",
    ],
    highlighted: true,
  },
};

export const XWonMiddleColumn: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    squares: [
      undefined,
      "X",
      undefined,
      undefined,
      "X",
      undefined,
      undefined,
      "X",
      undefined,
    ],
    highlighted: false,
  },
};

export const XWon: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    squares: ["X", "O", "O", "O", "X", undefined, "X", undefined, "X"],
    highlighted: false,
  },
};

export const OWon: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    squares: ["O", "X", "X", "X", "O", undefined, "O", undefined, "O"],
    highlighted: false,
  },
};
