import type { createThemeStore } from "./theme-store";

export type Theme = "dark" | "light" | "system";

export interface ThemeStoreState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export type CreateThemeStoreReturnType = ReturnType<typeof createThemeStore>;
