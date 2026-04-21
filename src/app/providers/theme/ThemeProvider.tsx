import { useEffect, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "@/shares/config";
import type { ThemeType } from "@/shares/config";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.PINK;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  useEffect(() => {
    document.body.className = `${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
