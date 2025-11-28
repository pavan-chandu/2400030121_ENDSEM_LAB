// Navbar.js
import React from "react";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { mode, toggleTheme } = useTheme();

  const styles = {
    navbar: {
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: mode === "light" ? "#1976d2" : "#121212",
      color: "#fff",
    },
    button: {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: mode === "light" ? "#fff" : "#333",
      color: mode === "light" ? "#000" : "#fff",
    },
  };

  return (
    <div style={styles.navbar}>
      <span>KL Student Portal</span>
      <button style={styles.button} onClick={toggleTheme}>
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Navbar;
