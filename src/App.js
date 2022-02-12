import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle, MenuWrapper } from "ui";
// import { Reports } from "./routes";

const Reports = () => <></>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <MenuWrapper>
          {/* <Routes>
          <Route path="/">
            <Reports />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
        </Routes> */}
        </MenuWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
