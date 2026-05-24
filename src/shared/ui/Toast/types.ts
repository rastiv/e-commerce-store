export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type ToastStatus = "success" | "error" | "warning" | "info";

export type ToastItem = {
  id: string;
  message: string;
  time: number;
  position: ToastPosition;
  offset: number;
  status: ToastStatus;
  hasIcon: boolean;
};

export type AddToastOptions = {
  message: string;
  time?: number;
  position?: ToastPosition;
  offset?: number;
  status?: ToastStatus;
  hasIcon?: boolean;
};
