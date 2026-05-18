import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/libs";

import Spinner from "../Spinner/Spinner";

import styles from "./Button.module.scss";

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
  fullWidth?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  size = "md",
  form = "pill",
  theme = "primary",
  disabled = false,
  fullWidth = false,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      className={cn(
        styles.button,
        className,
        styles[size],
        styles[form],
        styles[theme],
        {
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth,
          [styles.isLoading]: isLoading,
        },
      )}
    >
      {isLoading ? <Spinner size="sm" theme="secondary" /> : children}
    </button>
  );
};

export default Button;
