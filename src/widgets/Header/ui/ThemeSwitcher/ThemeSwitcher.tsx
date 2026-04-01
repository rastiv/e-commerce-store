import { useTheme } from "@/shares/config";
import { AppIcon, Button } from "@/shares/ui";
import CircleIcon from "@/shares/assets/icons/Circle.svg?react";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme="ghost" onClick={toggleTheme}>
      <AppIcon Icon={CircleIcon} filled />
    </Button>
  );
};

export default ThemeSwitcher;
