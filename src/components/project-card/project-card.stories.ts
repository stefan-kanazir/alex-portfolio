import type { Meta, StoryObj } from "@storybook/react";

import { ProjectCard } from "./";

const meta: Meta<typeof ProjectCard> = {
  title: "ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: "Sailor Jewelry",
    imageUrl: "/images/sailor-jewelry.jpg",
    altText: "Project - Sailor Jewelry",
    text: "Redesigning a product page for an eCommerce jewelry store in Serbia.",
    categories: ["eCommerce", "Jewelry", "Conceptual"],
  },
};
