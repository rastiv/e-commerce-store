import type { FunctionComponent, SVGProps } from "react";

import { cn } from "@/shared/libs";

import styles from "./AppIcon.module.scss";

type AppIconTheme = "clean" | "background";

type AppIconProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
  theme?: AppIconTheme;
  size?: number;
  filled?: boolean;
};

const AppIcon = ({
  Icon,
  className,
  theme = "clean",
  size = 24,
  filled = false,
}: AppIconProps) => {
  const AppIcon = (
    <Icon
      width={size}
      height={size}
      className={cn(styles.icon, className, {
        [styles.filled]: theme === "clean" && filled,
      })}
    />
  );
  if (theme === "background") {
    return <div className={styles.wrapper}>{AppIcon}</div>;
  }

  return AppIcon;
};

export default AppIcon;
