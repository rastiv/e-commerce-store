import CircleIcon from "@/shared/assets/icons/Circle.svg?react";
import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme="ghost" onClick={toggleTheme}>
      <AppIcon Icon={CircleIcon} filled />
    </Button>
  );
};

export default ThemeSwitcher;
