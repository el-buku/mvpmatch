import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle, Box } from "ui/base";
import { Navigation } from "ui/components";
import { DataProvider } from "./context";
// import { Reports } from "./routes";

const Reports = () => <></>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        <Router>
          <Navigation>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            <Box height={4}>TEXT</Box>
            {/* <Routes>
          <Route path="/">
            <Reports />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
        </Routes> */}
          </Navigation>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
