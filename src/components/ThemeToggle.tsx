"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 rounded dark:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}