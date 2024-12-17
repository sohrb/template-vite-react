import type { Theme } from "./types";

export function applyTheme(theme: Theme) {
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
}
