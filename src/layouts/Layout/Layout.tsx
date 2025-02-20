import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Box, useTheme } from "@mui/material";

const Layout = () => {
  const {
    palette: { background },
  } = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: background.default,
        minWidth: "100vw",
      }}
    >
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
