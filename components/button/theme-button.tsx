"use client";

//* Libraries imports
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

//* Components imports
import { Button } from "@/components/ui/button";

type ThemeOptions = "system" | "light" | "dark";

const themeConfig = {
  system: {
    icon: LaptopIcon,
    label: "Sistema",
    next: "light" as ThemeOptions,
  },
  light: {
    icon: SunIcon,
    label: "Claro",
    next: "dark" as ThemeOptions,
  },
  dark: {
    icon: MoonIcon,
    label: "Escuro",
    next: "system" as ThemeOptions,
  },
};

export function ThemeButton() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = (
    theme === "system" ? "system" : resolvedTheme
  ) as ThemeOptions;
  const config = themeConfig[currentTheme] || themeConfig.system;
  const IconComponent = config.icon;

  const handleToggle = () => {
    setTheme(config.next);
  };

  // Avoid hydration mismatch: theme is undefined on the server
  if (!mounted) {
    return (
      <div className="group">
        <Button
          id="theme-button"
          aria-label="Alternar tema"
          variant="ghost"
          size="icon"
          disabled
        >
          <LaptopIcon className="size-4 flex-shrink-0" />
        </Button>
      </div>
    );
  }

  return (
    <div className="group">
      <Button
        id="theme-button"
        aria-label={`Alternar tema. Atual: ${config.label}`}
        variant="ghost"
        onClick={handleToggle}
        size="icon"
      >
        <IconComponent className="size-4 flex-shrink-0" />
      </Button>
    </div>
  );
}
