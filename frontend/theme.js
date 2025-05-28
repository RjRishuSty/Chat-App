import { createTheme } from "@mui/material/styles";

// Shared typography settings
const typography = {
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  h1: { fontSize: "3rem", fontWeight: 700 },
  h2: { fontSize: "2.5rem", fontWeight: 600 },
  h3: { fontSize: "2rem", fontWeight: 600 },
  h4: { fontSize: "1.5rem", fontWeight: 500 },
  h5: { fontSize: "1.25rem", fontWeight: 500 },
  h6: { fontSize: "1rem", fontWeight: 500 },
  body1: { fontSize: "1rem", lineHeight: 1.6 },
  body2: { fontSize: "0.875rem", lineHeight: 1.5 },
};

// Function to create theme dynamically
export const createAppTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#ECFAE5" : "#000000",
        primary: mode === "light" ? "#DDF6D2" : "#000",
        secondary: mode === "light" ? "#CAE8BD" : "#000",
        optional: mode === "light" ? "#B0DB9C" : "#000",
      },
      text: {
        default: mode === "light" ? "#fff" : "#000",
        primary: mode === "light" ? "#000" : "#000000",
        secondary: mode === "light" ? "rgb(71, 70, 70)" : "#ffffff",
      },
      icon: {
        default: mode === "light" ? "#B0DB9C" : "#ffffff",
        primary: mode === "light" ? "#6FE6FC" : "#000000",
        secondary: mode === "light" ? "#A8F1FF" : "#ffffff",
      },
      button: {
        default: mode === "light" ? "#00FF9C" : "#ffffff",
        primary: mode === "light" ? "#72BF78" : "#000000",
        secondary: mode === "light" ? "#A0D683" : "#ffffff",
      },
    },
    typography,
    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            marginBottom: "1rem",
          },
        },
      },
    },
  });
