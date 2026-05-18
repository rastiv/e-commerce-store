import { useState } from "react";
import type { ChangeEvent } from "react";

import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";
import { cn } from "@/shared/libs";

import Button from "../Button/Button";

import styles from "./Input.module.scss";

type HTMLInputType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;

type InputProps = {
  className?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
  rounded?: boolean;
  disabled?: boolean;
  error?: boolean;
  label?: string;
} & HTMLInputType;

const Input = ({
  className,
  value,
  icon,
  onChange,
  rounded = false,
  disabled = false,
  type = "text",
  error = false,
  label,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <>
      {label && (
        <label className={cn(styles.label, { [styles.error]: error })}>
          {label}
        </label>
      )}
      <div
        className={cn(styles.inputContainer, className, {
          [styles.rounded]: rounded,
          [styles.disabled]: disabled,
          [styles.focus]: focus,
          [styles.error]: error,
        })}
      >
        {icon}
        <input
          {...rest}
          value={value}
          disabled={disabled}
          type={showPassword && type === "password" ? "text" : type}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(styles.input, {
            [styles.rounded]: rounded,
            [styles.disabled]: disabled,
            [styles.error]: error,
          })}
        />

        {type === "password" && (
          <Button
            theme="ghost"
            type="button"
            className={styles.toggleVisibility}
            onClick={toggleShowPassword}
          >
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </Button>
        )}
      </div>
    </>
  );
};

export default Input;
