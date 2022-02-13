import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle, Box } from "ui/base";
import { Navigation } from "ui/components";
import { DataProvider } from "context";
import { Reports } from "./routes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        <Router>
          <Navigation>
            <Routes>
              <Route path="/" element={<Reports />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Navigation>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
