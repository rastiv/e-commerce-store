import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

import FormField from "./FormField";

const meta = {
  title: "shared/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: "Email",
    children: <Input id="email" placeholder="Enter your email" />,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    helper: "Must be at least 3 characters long.",
    children: <Input id="username" placeholder="Enter your username" />,
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    error: "Password is required.",
    children: <Input id="password" type="password" value="wrong" />,
  },
};

export const WithTextarea: Story = {
  args: {
    label: "Message",
    helper: "Max 500 characters.",
    children: (
      <Textarea
        id="message"
        placeholder="Write your message here..."
        rows={4}
      />
    ),
  },
};

export const WithTextareaError: Story = {
  args: {
    label: "Description",
    error: "Description cannot be empty.",
    children: (
      <Textarea
        id="description"
        placeholder="Enter a description..."
        rows={4}
      />
    ),
  },
};
