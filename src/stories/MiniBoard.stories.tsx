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
    onClick: (event, boardId, squareId) => {},
    boardState: ["O", "", "", "", "X", "X", "", "O", "O"],
  },
};

export const Highlighted: Story = {
  args: {
    boardId: 0,
    onClick: (event, boardId, squareId) => {},
    boardState: ["O", "", "", "", "X", "X", "", "O", "O"],
    highlighted: true,
  },
};
