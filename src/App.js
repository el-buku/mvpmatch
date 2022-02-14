import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import theme, { GlobalStyle, Box } from "ui/base";
import { Navigation } from "ui/components";
import { DataProvider, ViewProvider } from "context";
import { Reports } from "./routes";
function App() {
  return (
    <ViewProvider>
      <DataProvider>
        <Router>
          <GlobalStyle />
          <Navigation>
            <Routes>
              <Route path="/" element={<Reports />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Navigation>
        </Router>
      </DataProvider>
    </ViewProvider>
  );
}

export default App;
