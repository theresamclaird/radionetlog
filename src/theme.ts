import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "2rem",
    },
  },
});

export default responsiveFontSizes(theme);
