import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InfoBox from "../components/InfoBox";
import { SquareType } from "../types";

const WrappedInfoBox: React.FC<{
  turn: SquareType;
  winner: SquareType;
  playAnywhere: boolean;
}> = ({ turn, winner, playAnywhere }) => {
  return (
    <div className="w-[500px]">
      <InfoBox turn={turn} winner={winner} playAnywhere={playAnywhere} />
    </div>
  );
};

const meta = {
  title: "Components/InfoBox",
  component: WrappedInfoBox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WrappedInfoBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: { turn: "X", winner: undefined, playAnywhere: false },
};

export const PlayAnywhere: Story = {
  args: { turn: "X", winner: undefined, playAnywhere: true },
};

export const XWins: Story = {
  args: { turn: "O", winner: "X", playAnywhere: true },
};

export const OWins: Story = {
  args: { turn: "X", winner: "O", playAnywhere: true },
};
