import { ColorModeContext, useMode } from "./themes";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard";
import Team from "./scences/team";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              {/*<Route path="/context" element={}/>
              <Route path="/invoices" element={}/>
              <Route path="/form" element={}/>
              <Route path="/bar" element={}/>
              <Route path="/pie" element={}/>
              <Route path="/line" element={}/>
              <Route path="/faq" element={}/>
              <Route path="/geography" element={}/>
              <Route path="/calendar" element={}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
