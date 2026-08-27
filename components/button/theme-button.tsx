"use client";

//* Libraries imports
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
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = (
    theme === "system" ? "system" : resolvedTheme
  ) as ThemeOptions;
  const config = themeConfig[currentTheme] || themeConfig.system;
  const IconComponent = config.icon;

  const handleToggle = () => {
    setTheme(config.next);
  };
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
        {/* <span className="max-w-0 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-data-[collapsible=icon]:group-hover:max-w-0 group-data-[collapsible=icon]:group-hover:opacity-0 pl-2">
          {config.label}
        </span> */}
      </Button>
    </div>
  );
}
