import type { Meta, StoryObj } from "@storybook/react";

import { FeaturedCard } from "./";

const meta: Meta<typeof FeaturedCard> = {
  title: "FeaturedCard",
  component: FeaturedCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedCard>;

export const Default: Story = {
  args: {
    iconUrl: "/icons/conversion.svg",
    altText: "Conversion focused design",
    title: "Conversion focused design",
    text: "Designs that drive conversions and deliver measurable results for businesses.",
  },
};
