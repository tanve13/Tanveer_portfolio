import { FaHome, FaFolder, FaStar, FaUser, FaPhone } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function BottomNav({ active, setActive }) {
  const { theme } = useTheme();

  const tabs = [
    { name: "home", icon: <FaHome />, label: "Home" },
    { name: "projects", icon: <FaFolder />, label: "Projects" },
    { name: "skills", icon: <FaStar />, label: "Skills" },
    { name: "about", icon: <FaUser />, label: "About" },
    { name: "contact", icon: <FaPhone />, label: "Contact" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        borderTop: `1px solid ${theme === "dark" ? "#334155" : "#E2E8F0"}`,
        backgroundColor: theme === "dark" ? "#1E293B" : "#FFFFFF",
        flexShrink: 0,
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.name}
          onClick={() => setActive(tab.name)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: active === tab.name ? "#3B82F6" : "#94A3B8",
            fontSize: "11px",
          }}
        >
          <div style={{ fontSize: "18px" }}>{tab.icon}</div>
          <span>{tab.label}</span>
        </div>
      ))}
    </div>
  );
}

export default BottomNav;