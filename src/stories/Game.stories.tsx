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

export const Default: Story = {
  args: {
    won: undefined,
  },
};

export const Won: Story = {
  args: {
    won: "X",
  },
};
