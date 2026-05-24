import { useCallback, useState } from "react";
import type { ReactNode } from "react";

import { ToastContext } from "./_context";
import { ToastContainer } from "./ToastContainer";
import type { AddToastOptions, ToastItem } from "./types";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((options: AddToastOptions) => {
    const toast: ToastItem = {
      id: crypto.randomUUID(),
      message: options.message,
      time: options.time ?? 6000,
      position: options.position ?? "bottom-center",
      offset: options.offset ?? 8,
      status: options.status ?? "info",
      hasIcon: options.hasIcon ?? true,
    };
    setToasts((prev) => [...prev, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};
