import type { Meta, StoryObj } from "@storybook/react-vite";

import SearchIcon from "@/shared/assets/icons/Search.svg?react";

import { AppIcon } from "./AppIcon";

const meta = {
  title: "components/ui/AppIcon",
  component: AppIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    Icon: SearchIcon,
    theme: "clean",
    size: 24,
    filled: false,
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["clean", "background"],
    },
    size: {
      control: { type: "number", min: 12, max: 80, step: 2 },
    },
    Icon: { control: false },
  },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const BackgroundTheme: Story = {
  args: {
    theme: "background",
  },
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const Small: Story = {
  args: {
    size: 16,
  },
};

export const Large: Story = {
  args: {
    size: 40,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "custom-icon-story",
  },
};
