// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { ProjectCard } from "./";

const meta: Meta<typeof ProjectCard> = {
  title: "ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: "Sailor Jewelry",
    imageUrl: "/images/placeholder.jpg",
    altText: "Project - Sailor Jewelry",
    text: "Redesigning a product page for an eCommerce jewelry store in Serbia.",
    categories: ["eCommerce", "Jewelry", "Conceptual"],
  },
};
