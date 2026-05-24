import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/shared/ui";

import Toast from "./Toast";
import { ToastProvider } from "./ToastContext";
import { useToast } from "./useToast";

const meta = {
  title: "shared/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    id: "story-id",
    message: "This is a toast notification message.",
    time: 0,
    position: "bottom-center",
    offset: 8,
    status: "info",
    hasIcon: true,
    onClose: () => {},
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { status: "info" },
};

export const Success: Story = {
  args: {
    status: "success",
    message: "Your changes have been saved successfully!",
  },
};

export const Error: Story = {
  args: {
    status: "error",
    message: "Something went wrong. Please try again.",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    message: "Please review your information before continuing.",
  },
};

export const WithoutIcon: Story = {
  args: {
    status: "info",
    hasIcon: false,
    message: "This toast has no status icon.",
  },
};

const InteractiveDemo = () => {
  const { addToast } = useToast();

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        maxWidth: "480px",
        justifyContent: "center",
      }}
    >
      <Button
        theme="primary"
        onClick={() =>
          addToast({
            message: "Changes saved successfully!",
            status: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        theme="outline"
        onClick={() =>
          addToast({
            message: "Something went wrong. Please retry.",
            status: "error",
          })
        }
      >
        Error
      </Button>
      <Button
        theme="secondary"
        onClick={() =>
          addToast({
            message: "Please check your input before submitting.",
            status: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        theme="tertiary"
        onClick={() =>
          addToast({
            message: "System maintenance scheduled for tonight.",
            status: "info",
          })
        }
      >
        Info
      </Button>
      <Button
        theme="ghost"
        onClick={() =>
          addToast({
            message: "I stay open until you close me.",
            status: "info",
            time: 0,
          })
        }
      >
        Persistent (time: 0)
      </Button>
      <Button
        theme="tertiary"
        onClick={() =>
          addToast({
            message: "No icon on this one.",
            status: "info",
            hasIcon: false,
          })
        }
      >
        Without Icon
      </Button>
      <Button
        theme="primary"
        onClick={() => {
          addToast({
            message: "Top left corner!",
            position: "top-left",
            status: "success",
          });
          addToast({
            message: "Top right corner!",
            position: "top-right",
            status: "error",
          });
          addToast({
            message: "Bottom left corner!",
            position: "bottom-left",
            status: "warning",
          });
          addToast({
            message: "Bottom right corner!",
            position: "bottom-right",
            status: "info",
          });
        }}
      >
        All Corners
      </Button>
      <Button
        theme="secondary"
        onClick={() => {
          addToast({
            message: "First toast — stacks above.",
            status: "success",
          });
          addToast({ message: "Second toast — middle.", status: "warning" });
          addToast({
            message: "Third toast — closest to bottom edge.",
            status: "error",
          });
        }}
      >
        Stack 3 Toasts
      </Button>
    </div>
  );
};

export const Interactive: Story = {
  render: () => (
    <ToastProvider>
      <InteractiveDemo />
    </ToastProvider>
  ),
};
