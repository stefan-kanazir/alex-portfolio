import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    intent: "primary",
    href: "#",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    href: "#",
    children: "Secondary Button",
  },
};
