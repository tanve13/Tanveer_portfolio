import { useTheme } from "../context/ThemeContext";

function StatusBar() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 18px",
        fontSize: "12px",
        color: theme === "dark" ? "#FFFFFF" : "#0F172A",
        fontWeight: "600",
      }}
    >
      <span>11:56</span>
      <span>📶 🔋 100%</span>
    </div>
  );
}

export default StatusBar;