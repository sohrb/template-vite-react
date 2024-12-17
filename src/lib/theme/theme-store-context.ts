import { createContext } from "react";

import type { CreateThemeStoreReturnType } from "./types";

export const ThemeStoreContext =
  createContext<CreateThemeStoreReturnType | null>(null);
