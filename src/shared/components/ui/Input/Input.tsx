import { Eye, EyeOff } from "lucide-react";
import { useState, forwardRef } from "react";
import type { ChangeEvent } from "react";

import { cn } from "@/shared/utils";
import { Button } from "@/shared/components/ui";

import styles from "./Input.module.scss";

type HTMLInputType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;

type InputProps = {
  className?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  rounded?: boolean;
  disabled?: boolean;
  error?: string;
} & HTMLInputType;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      value,
      icon,
      onChange,
      rounded = false,
      disabled = false,
      type = "text",
      error,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    const handleFocus = () => {
      setFocus(true);
    };

    const handleBlur = () => {
      setFocus(false);
    };

    return (
      <div
        className={cn(styles.inputContainer, className, {
          [styles.rounded]: rounded,
          [styles.disabled]: disabled,
          [styles.focus]: focus,
          [styles.error]: !!error,
        })}
      >
        {icon}
        <input
          {...rest}
          ref={ref as React.Ref<HTMLInputElement>}
          value={value}
          disabled={disabled}
          type={showPassword && type === "password" ? "text" : type}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(styles.input, {
            [styles.rounded]: rounded,
            [styles.disabled]: disabled,
            [styles.error]: !!error,
          })}
        />

        {type === "password" && (
          <Button theme="ghost" type="button" onClick={toggleShowPassword}>
            {showPassword ? (
              <EyeOff className={styles.icon} />
            ) : (
              <Eye className={styles.icon} />
            )}
          </Button>
        )}
      </div>
    );
  },
);

export default Input;
