import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./context/AuthContext";

import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Home />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Outlet />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
