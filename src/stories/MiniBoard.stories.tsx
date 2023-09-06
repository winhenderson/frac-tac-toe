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
    boardState: ["O", "", "", "", "X", "X", "", "O", "O"],
  },
};
