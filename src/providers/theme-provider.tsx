import { type Theme, ThemeStoreProvider } from "@/lib/theme";

interface ThemeProviderProps extends React.PropsWithChildren {
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
}: ThemeProviderProps) {
  return (
    <ThemeStoreProvider defaultTheme={defaultTheme} storageKey={storageKey}>
      {children}
    </ThemeStoreProvider>
  );
}
