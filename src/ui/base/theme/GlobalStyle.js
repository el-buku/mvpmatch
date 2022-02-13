import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; font-family:Roboto; font-display:block;position:relative }
`;
