import { ColorModeContext, useMode } from "./themes";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard";
import Team from "./scences/team";
import Contacts from "./scences/contacts";
import Invoices from "./scences/invoices";
import Form from "./scences/form";
import Calendar from "./scences/calendar";
import FAQ from "./scences/faq";
import Bar from "./scences/bar";
import Pie from "./scences/pie";
import Line from "./scences/line";
import Geography from "./scences/geography";
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
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
