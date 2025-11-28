// Dashboard.js
import React from "react";
import { useTheme } from "./ThemeContext";

function Dashboard() {
  const { mode } = useTheme();

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "20px",
      backgroundColor: mode === "light" ? "#f5f5f5" : "#000",
      color: mode === "light" ? "#000" : "#fff",
    },
    card: {
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "12px",
      backgroundColor: mode === "light" ? "#fff" : "#1e1e1e",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.page}>
      <h2>Welcome, KL Student</h2>
      <div style={styles.card}>
        <h3>Today’s Classes</h3>
        <p>• OS Lab</p>
        <p>• Web Development</p>
      </div>
      <div style={styles.card}>
        <h3>Notifications</h3>
        <p>Lab external exam theme switcher working successfully ✅</p>
      </div>
    </div>
  );
}

export default Dashboard;
