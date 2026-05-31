import { Check, CircleAlert, CircleX, Info, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/shared/libs";

import styles from "./Toast.module.scss";
import type { ToastItem } from "./types";

export const EXIT_DURATION = 200;

type ToastProps = ToastItem & {
  onClose: () => void;
};

const Toast = ({ message, time, status, hasIcon, onClose }: ToastProps) => {
  const [leaving, setLeaving] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingRef = useRef(time);
  const startedAtRef = useRef<number | null>(null);
  const leavingRef = useRef(false);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  const handleClose = useCallback(() => {
    if (leavingRef.current) return;
    leavingRef.current = true;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setLeaving(true);
    setTimeout(() => onCloseRef.current(), EXIT_DURATION);
  }, []);

  const startTimer = useCallback(() => {
    if (leavingRef.current || remainingRef.current <= 0) return;
    startedAtRef.current = Date.now();
    timerRef.current = setTimeout(handleClose, remainingRef.current);
  }, [handleClose]);

  const pauseTimer = useCallback(() => {
    if (leavingRef.current || timerRef.current === null) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;

    if (startedAtRef.current !== null) {
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedAtRef.current),
      );
      startedAtRef.current = null;
    }
  }, []);

  useEffect(() => {
    remainingRef.current = time;
    if (time !== 0) {
      startTimer();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(styles.toast, styles[status], {
        [styles.leaving]: leaving,
        [styles.hasIcon]: hasIcon,
      })}
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
    >
      {hasIcon && (
        <div className={cn(styles.icon, styles[status])}>
          {status === "error" && <CircleX size={22} />}
          {status === "info" && <Info size={22} />}
          {status === "warning" && <CircleAlert size={22} />}
          {status === "success" && <Check size={18} />}
        </div>
      )}
      <p className={styles.message}>{message}</p>
      <button
        className={styles.closeBtn}
        onClick={handleClose}
        aria-label="Close toast"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;
