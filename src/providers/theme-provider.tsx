import { createContext, useEffect, useRef } from "react";
import { createStore, useStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps extends React.PropsWithChildren {
  defaultTheme?: Theme;
  storageKey?: string;
}

export interface ThemeStoreState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

function createThemeStore(defaultTheme: Theme, storageKey: string) {
  return createStore<ThemeStoreState>()(
    devtools(
      persist(
        (set) => ({
          theme: defaultTheme,
          setTheme: (theme: Theme) => {
            set({ theme });
          },
        }),
        {
          name: storageKey,
          partialize: (state) => ({ theme: state.theme }),
          storage: createJSONStorage(() => localStorage),
        },
      ),
    ),
  );
}

export const ThemeStoreContext = createContext<ReturnType<
  typeof createThemeStore
> | null>(null);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
}: ThemeProviderProps) {
  const themeStoreRef = useRef<ReturnType<typeof createThemeStore>>();
  if (!themeStoreRef.current) {
    themeStoreRef.current = createThemeStore(defaultTheme, storageKey);
  }

  const theme = useStore(themeStoreRef.current, (state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)")
        .matches
        ? "light"
        : "dark";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeStoreContext.Provider value={themeStoreRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  );
}
