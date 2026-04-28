/*
  React hooks:
  useState  -> manages component state
  useEffect -> runs side effects like localStorage access
*/
import { useEffect, useState } from "react";
/*
  Icons for theme toggle button
  Sun  -> shown in dark mode
  Moon -> shown in light mode
*/
import { Sun, Moon } from "lucide-react";

/*
  Utility function for merging class names
  Helps avoid Tailwind conflicts
*/
import { cn } from "@/lib/utils";

/*
  Theme toggle component
  Handles:
  - dark/light mode switching
  - theme persistence using localStorage
*/
export const ThemeToggle = () => {
  /*
    State variable to track current theme
    false = light mode
    true  = dark mode
  */
  const [isDarkMode, setIsDarkMode] = useState(false);

  /*
    Runs once when component mounts
    Checks previously saved theme from localStorage
  */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      /*
        Add 'dark' class to <html> element
        This activates dark theme styles from index.css
      */
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light"); //default theme = light
      setIsDarkMode(false);
    }
  }, []);

  //Toggles theme when button is clicked
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    // Button click triggers theme change
    /*
    Fixed position button at top-right corner
    z-50 ensures it stays above all elements
    */
    <button
      onClick={toggleTheme}
      className={cn(
        /*
        Base styles:
        fixed      → stays in same position on screen
        top-5      → distance from top
        right-5    → distance from right
        z-50       → highest stacking priority
        p-2        → padding
        rounded-full → circular button
      */
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        /*
        Accessibility improvement:
        Removes default browser focus outline
        */
        "focus:outline-none",
      )}
    >
      {/* Conditional rendering based on theme */}
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
