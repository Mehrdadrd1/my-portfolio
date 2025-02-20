import { createTheme, PaletteMode } from "@mui/material";
import { typography } from "./typography";
import { darkPalette, lightPalette } from "./palette";

const getPalette = (mode: PaletteMode) =>
  mode === "dark" ? darkPalette : lightPalette;

const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...getPalette(mode),
    },
    typography,
    components: {
      MuiTypography: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary, // ✅ Now it's theme-aware
          }),
        },
      },
    },
  });

export default createAppTheme;
