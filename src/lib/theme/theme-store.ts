import { createStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import type { Theme, ThemeStoreState } from "./types";

export function createThemeStore(defaultTheme: Theme, storageKey: string) {
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
          storage: createJSONStorage(() => localStorage, {
            replacer: (_, value) => {
              return (value as { state: { theme: Theme } }).state.theme;
            },
            reviver: (_, value) => {
              return { state: { theme: value as Theme } };
            },
          }),
        },
      ),
    ),
  );
}
