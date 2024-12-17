import { useEffect, useRef } from "react";
import { useStore } from "zustand";

import { applyTheme } from "./apply-theme";
import { createThemeStore } from "./theme-store";
import { ThemeStoreContext } from "./theme-store-context";
import type { CreateThemeStoreReturnType, Theme } from "./types";

interface ThemeStoreProviderProps extends React.PropsWithChildren {
  defaultTheme: Theme;
  storageKey: string;
}

export function ThemeStoreProvider({
  children,
  defaultTheme,
  storageKey,
}: ThemeStoreProviderProps) {
  const themeStoreRef = useRef<CreateThemeStoreReturnType>(
    createThemeStore(defaultTheme, storageKey),
  );
  const theme = useStore(themeStoreRef.current, (state) => state.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeStoreContext.Provider value={themeStoreRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  );
}
