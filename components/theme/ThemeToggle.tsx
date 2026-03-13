"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Icon } from "@/components/shared/Icon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center transition-colors duration-200">
        <Icon name="sun" size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-lg bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-all duration-200 hover:scale-105 text-primary"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Icon name="sun" size={18} />
      ) : (
        <Icon name="moon" size={18} />
      )}
    </button>
  );
}
