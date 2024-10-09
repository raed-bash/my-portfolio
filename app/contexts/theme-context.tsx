"use client";
import React, { createContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

export type defaultThemeContextValue = {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<defaultThemeContextValue>({
  themeMode: "light",
  setThemeMode: () => {},
  toggleTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";

    handleChangeThemeMode(newThemeMode);
  };

  const handleChangeThemeMode = (
    newThemeMode: ThemeMode,
    dontStore?: boolean
  ) => {
    const docElemClassList = document.documentElement.classList;

    if (docElemClassList.contains(themeMode)) {
      docElemClassList.replace(themeMode, newThemeMode);
    } else {
      docElemClassList.add(newThemeMode);
    }

    if (!dontStore) {
      localStorage.setItem("themeMode", newThemeMode);
    }

    setThemeMode(newThemeMode);
  };

  const handleMediaQueryChange = (matches: boolean) => {
    const isDarkMode = matches;

    const operSysThemeMode = isDarkMode ? "dark" : "light";

    const userThemeMode = (localStorage.getItem("themeMode") ||
      operSysThemeMode) as ThemeMode;

    handleChangeThemeMode(userThemeMode, true);
  };

  const handleMediaQueryChangeWithMatches = (event: MediaQueryListEvent) =>
    handleMediaQueryChange(event.matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    handleMediaQueryChange(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleMediaQueryChangeWithMatches);

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleMediaQueryChangeWithMatches
      );
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
