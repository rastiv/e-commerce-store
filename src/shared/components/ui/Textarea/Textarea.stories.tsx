import type { Meta, StoryObj } from "@storybook/react-vite";

import Textarea from "./Textarea";

const meta = {
  title: "components/ui/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text here...",
    rows: 4,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "This is some pre-filled content inside the textarea.",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Write your message here...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "This textarea is disabled.",
  },
};

export const WithError: Story = {
  args: {
    error: "This field is required.",
    value: "Invalid input",
  },
};

export const LargeRows: Story = {
  args: {
    rows: 8,
    placeholder: "Write a detailed description...",
  },
};
