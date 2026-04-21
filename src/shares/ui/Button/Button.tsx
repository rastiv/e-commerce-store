import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

import { cn } from "@/shares/libs";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonForm = "rounded" | "pill" | "circle";
type ButtonTheme = "primary" | "secondary" | "tertiary" | "outline" | "ghost";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  form?: ButtonForm;
  theme?: ButtonTheme;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  size = "md",
  form = "pill",
  theme = "primary",
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        styles.button,
        className,
        styles[size],
        styles[form],
        styles[theme],
        {
          [styles.disabled]: disabled,
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
