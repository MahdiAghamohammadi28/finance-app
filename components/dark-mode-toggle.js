"use client";

import useDarkMode from "@/hooks/useDarkMode";
import Button from "./button";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

export default function DarkModeToggle({ defaultMode = "light" }) {
  const { theme, toggleTheme } = useDarkMode(defaultMode);

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
}
