import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { useThemeContext } from "./context";
import { routes } from "./routes";
import createAppTheme from "./styles/theme/theme";

const App = () => {
  const { mode } = useThemeContext();

  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
