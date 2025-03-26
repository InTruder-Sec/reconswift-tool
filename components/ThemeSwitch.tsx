"use client";
import { Classic, Within } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Classic.css";
import { useEffect } from "react";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  setTheme(localStorage.getItem("theme") || "dark");

  return (
    <>
      <Classic
        duration={1000}
        placeholder="Toggle theme"
        reversed
        className={className}
        onToggle={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        toggled={theme === "dark"}
      />
    </>
  );
};

export default ThemeSwitch;
