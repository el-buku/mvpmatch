import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle, MenuWrapper, Box } from "ui";
// import { Reports } from "./routes";

const Reports = () => <></>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <MenuWrapper>
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
        </MenuWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
