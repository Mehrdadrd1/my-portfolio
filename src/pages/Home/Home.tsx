import { Box, Button, Typography } from "@mui/material";
import { useThemeContext } from "../../context";

const Home = () => {
  const { mode, setMode } = useThemeContext(); // Access the current mode and setMode function

  // Toggle the theme mode between light and dark
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box>
      <Box>
        <Typography variant="body1">Making the Web Beautiful!</Typography>
      </Box>
      <Box>
        <Button variant="contained" onClick={toggleTheme}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
