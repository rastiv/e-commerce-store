import { useMemo } from "react";
import { createPortal } from "react-dom";

import Toast from "./Toast";
import styles from "./ToastContainer.module.scss";
import type { ToastItem, ToastPosition } from "./types";

type ToastContainerProps = {
  toasts: ToastItem[];
  onRemove: (id: string) => void;
};

const positionClassMap: Record<ToastPosition, string> = {
  "top-left": styles.topLeft,
  "top-center": styles.topCenter,
  "top-right": styles.topRight,
  "bottom-left": styles.bottomLeft,
  "bottom-center": styles.bottomCenter,
  "bottom-right": styles.bottomRight,
};

const isTopPosition = (position: ToastPosition): boolean =>
  position.startsWith("top");

export const ToastContainer = ({ toasts, onRemove }: ToastContainerProps) => {
  const grouped = useMemo(() => {
    const map = new Map<ToastPosition, ToastItem[]>();
    toasts.forEach((toast) => {
      const existing = map.get(toast.position) ?? [];
      map.set(toast.position, [...existing, toast]);
    });
    return map;
  }, [toasts]);

  return createPortal(
    <>
      {Array.from(grouped.entries()).map(([position, items]) => {
        const latestOffset = items[items.length - 1].offset;
        const isTop = isTopPosition(position);
        const offsetStyle = isTop
          ? { top: latestOffset }
          : { bottom: latestOffset };

        // top-* : newest first (closest to top edge)
        // bottom-*: oldest first → newest last (closest to bottom edge)
        const orderedItems = isTop ? [...items].reverse() : items;

        return (
          <div
            key={position}
            className={`${styles.container} ${positionClassMap[position]}`}
            style={offsetStyle}
          >
            {orderedItems.map((toast) => (
              <Toast
                key={toast.id}
                {...toast}
                onClose={() => onRemove(toast.id)}
              />
            ))}
          </div>
        );
      })}
    </>,
    document.body,
  );
};
