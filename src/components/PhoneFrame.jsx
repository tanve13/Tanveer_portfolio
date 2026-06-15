import StatusBar from "./StatusBar";
import { useTheme } from "../context/ThemeContext";

function PhoneFrame({ children, bottomNav }) {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "#0F172A" : "#F1F5F9";
  const frameColor = theme === "dark" ? "#1E293B" : "#FFFFFF";

  return (
    <div
      style={{
        backgroundColor: "#0a0f1a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "360px",
          height: "720px",
          backgroundColor: frameColor,
          borderRadius: "35px",
          border: "8px solid #334155",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StatusBar />

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            backgroundColor: bgColor,
            color: theme === "dark" ? "#FFFFFF" : "#0F172A",
            padding: "16px",
          }}
        >
          {children}
        </div>

        {bottomNav}
      </div>
    </div>
  );
}

export default PhoneFrame;