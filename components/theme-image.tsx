"use client";

import { useTheme } from "next-themes";

const ThemeImage: React.FC = () => {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "dark" ? "./dark-dashboard.png" : "./dashboard.png"}
      alt="dashboard"
      className="w-full rounded-lg shadow-2xl dark:shadow-reconswiftThemeColorDark shadow-reconswiftThemeColor"
    />
  );
};

export default ThemeImage;
