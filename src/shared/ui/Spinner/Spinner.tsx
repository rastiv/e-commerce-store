import { cn } from "@/shared/libs";

import styles from "./Spinner.module.scss";

type SpinerSize = "sm" | "md" | "lg";
type SppinnerTheme = "primary" | "secondary" | "tertiary";

type SpinnerProps = {
  size?: SpinerSize;
  theme?: SppinnerTheme;
};

const Spinner = ({ size = "md", theme = "primary" }: SpinnerProps) => {
  return <div className={cn(styles.spinner, styles[size], styles[theme])} />;
};

export default Spinner;
