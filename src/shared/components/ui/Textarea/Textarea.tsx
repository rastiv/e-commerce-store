import { forwardRef } from "react";
import type { ChangeEvent } from "react";

import { cn } from "@/shared/utils";

import styles from "./Textarea.module.scss";

type HTMLTextareaType = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange"
>;

type TextareaProps = {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: string;
} & HTMLTextareaType;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      value,
      onChange,
      disabled = false,
      error,
      ...rest
    }: TextareaProps,
    ref,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
    };

    return (
      <textarea
        {...rest}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={cn(styles.textarea, className, {
          [styles.disabled]: disabled,
          [styles.error]: !!error,
        })}
      />
    );
  },
);

export default Textarea;
