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

export const Default: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    boardInfo: {
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
    },
  },
};

export const Highlighted: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    boardInfo: {
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
  },
};

export const Won: Story = {
  args: {
    boardId: 0,
    onClick: (_event, _boardId, _squareId) => {},
    boardInfo: {
      squares: ["O", "X", "X", "X", "O", undefined, "O", undefined, "O"],
      won: "X",
    },
  },
};
