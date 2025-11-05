import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C4DFF",
      light: "rgba(179, 136, 255, 0.1)",
      dark: "#651FFF",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFCA28",
      light: "#FFE082",
      dark: "#FFB300",
      contrastText: "#333",
    },
    success: { main: "#A5D6A7", contrastText: "#1a1a1a" },
    warning: { main: "#FFCA28", contrastText: "#1a1a1a" },
    error: { main: "#E53935", light: "#FF8A80", contrastText: "#ffffff" },
    background: { default: "#E9F0F8", paper: "#F6F8FB" },
    text: { primary: "#2B2D42", secondary: "#6B7082" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    h1: { fontSize: "1.25rem", fontWeight: 600 },
    h2: { fontSize: "1.1rem", fontWeight: 600 },
    h3: { fontSize: "1rem", fontWeight: 600 },
    h4: { fontSize: "0.9rem", fontWeight: 500 },
    h5: { fontSize: "0.8rem", fontWeight: 500 },
    h6: { fontSize: "0.7rem", fontWeight: 500 },
    body1: { fontSize: "0.8rem", lineHeight: 1.6 },
    body2: { fontSize: "0.7rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600, fontSize: "0.7rem" },
    caption: { fontSize: "0.75rem", color: "#757575" },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
});

export default lightTheme;
