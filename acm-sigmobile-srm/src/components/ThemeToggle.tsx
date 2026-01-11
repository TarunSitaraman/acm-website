"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-scale container">
      <input
        type="checkbox"
        id="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox" className="label"></label>
    </div>
  );
}