import { Circle } from "lucide-react";

import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme="ghost" onClick={toggleTheme}>
      <AppIcon Icon={Circle} filled />
    </Button>
  );
};

export default ThemeSwitcher;
