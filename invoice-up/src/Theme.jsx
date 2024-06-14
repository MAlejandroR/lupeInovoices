import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    light_primary: "#a5a1ea",
    primary: "#6c63ff",
    secondary: "#4f49cc",
    light_accent: "#f2c4a2",
    accent: "#F78B38",
    dark_accent: "#F2791D",
    light_text: "#fff",
    dark_text: "#000",
    grey: "#F4F4F4",
  },
  fontSizes: {
    xlarge: "clamp(2.5rem, 1.9783rem + 2.7826vw, 4.5rem);",
    large: "clamp(1.8rem, 1.5391rem + 1.3913vw, 2.8rem);",
    normal: "clamp(2rem, 1.9478rem + 0.2783vw, 2.2rem);",
    small: "1.8rem",
    xsmall: "1.6rem",
  },
  fonts: {
    titleFont: "Comfortaa",
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
