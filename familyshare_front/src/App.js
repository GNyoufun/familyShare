import { Route, Routes } from "react-router";

import { CssBaseline } from "@mui/material";
import dTheme from "./style/theme";

import {
  Dashboard,
  Setting
} from "./page/index"

function App() {
  return (
    <ThemeProvider theme={dTheme}>
      <CssBaseline />
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard />} 
        />
        <Route
          path="/Setting"
          element={<Setting />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
