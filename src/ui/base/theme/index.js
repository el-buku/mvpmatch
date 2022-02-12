import { GlobalStyle } from "./GlobalStyle";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 8, 10, 20, 36, 100],
  sizes: [0, 24, 32, 40, 80, 100],
  fontSizes: [14, 16, 24],
  fontWeights: [400, 700],
  radii: [0, 5],
  align: {
    center: "center",
  },
  colors: {
    blue: "#07c",
    red: "#e10",
    lightBlue: "#F1FAFE",
    lightGray: "#F3F6F9",
    secondary: "#1BC5BD",
    primary: "#005B96",
    textSecondary: "#7E8299",
    textPrimary: "#011F4B",
    accent: "#F6CA65",
  },
};

theme.sizes.auto = "auto";
theme.space.auto = "auto";

theme.breakpoints.small = theme.breakpoints[0];
theme.breakpoints.medium = theme.breakpoints[1];
theme.breakpoints.large = theme.breakpoints[2];

export { GlobalStyle };
export default theme;
