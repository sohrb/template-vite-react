import { useContext } from "react";
import { useStore } from "zustand";

import { ThemeStoreContext, type ThemeStoreState } from "@/lib/theme";

export function useTheme<T>(selector: (state: ThemeStoreState) => T): T {
  const themeStore = useContext(ThemeStoreContext);
  if (!themeStore) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return useStore(themeStore, selector);
}
