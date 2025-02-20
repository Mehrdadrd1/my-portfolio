import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { PaletteMode } from "@mui/material/styles";

const ThemeContext = createContext<{
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
}>({
  mode: "light", // Default to light mode
  setMode: () => {},
});

// Theme provider component
export const ThemeProviderComponent = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  // Persist mode to localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode as PaletteMode);
    }
  }, []);

  useEffect(() => {
    // Store the selected mode in localStorage
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useThemeContext = () => useContext(ThemeContext);
