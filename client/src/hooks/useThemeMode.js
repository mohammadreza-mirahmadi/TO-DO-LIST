import { useEffect, useMemo, useState } from "react";
import lightTheme from "../theme/lightThem";
import darkTheme from "../theme/darkTheme";

function useThemeMode() {
  const [mode, setMode] = useState("light");

  // get theme from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    // validation the value:
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  // set the theme in localStorage
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // change the value of mode state
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  // select theme for MUI
  const theme = useMemo(
    () => (mood === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return { theme, toggleTheme };
}

export default useThemeMode;
