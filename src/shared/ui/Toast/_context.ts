import { createContext } from "react";

import type { AddToastOptions } from "./types";

export type ToastContextValue = {
  addToast: (options: AddToastOptions) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);
