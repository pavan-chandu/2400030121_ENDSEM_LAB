// App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
