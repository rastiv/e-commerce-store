import { cloneElement } from "react";

import { cn } from "@/shared/utils";

import styles from "./FormField.module.scss";

type FormFieldChildProps = {
  error?: string;
  id?: string;
};

type FormFieldProps = {
  label: string;
  helper?: string;
  error?: string;
  className?: string;
  children: React.ReactElement<FormFieldChildProps>;
};

const FormField = ({
  label,
  helper,
  error,
  className,
  children,
}: FormFieldProps) => {
  const child = cloneElement(children, {
    error: error || children.props.error,
  });

  return (
    <div className={cn(styles.field, className)}>
      {label && (
        <label className={styles.label} htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {child}
      <div className={cn(styles.helper, { [styles.error]: !!error })}>
        {error || helper || "\u00A0"}
      </div>
    </div>
  );
};

export default FormField;
