import { FaGithub, FaMobileAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "TrackIt",
      desc: "Smart campus item recovery system with Admin & User panels.",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "Cloudinary", "OneSignal"],
      github: "https://github.com/tanve13/LostAndFoundCampusApp",
    },
    {
      name: "KeathAI",
      desc: "AI powered rubric-based answer evaluation platform.",
      tech: ["Jetpack Compose", "Firebase", "AI"],
      github: "https://github.com/tanve13/KotlinProject",
    },
    {
      name: "Elite Event",
      desc: "Manage events, guests, vendors and budgets.",
      tech: ["Kotlin", "XML", "Room DB"],
      github: "https://github.com/tanve13/Elite_Event_App",
    },
    {
      name: "HelpHive",
      desc: "Donate medicines, organs and funds through one platform.",
      tech: ["Firebase", "Maps", "QR"],
      github: "https://github.com/Vanshikagup2206/DonorApp",
    },
    {
      name: "FocusFlow",
      desc: "Productivity app using Pomodoro timer, tasks & habit tracking.",
      tech: ["Firebase", "OneSignal", "Jetpack Compose"],
      github: "https://github.com/tanve13/FocusFlow",
    },
  ];

  return (
    <div>
      <h2>📂 My Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          {/* TITLE */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaMobileAlt color="#3B82F6" size={20} />
            <h3 style={{ margin: 0 }}>{project.name}</h3>
          </div>

          {/* DESCRIPTION */}
          <p style={descStyle}>{project.desc}</p>

          {/* TECH STACK */}
          <div style={techContainer}>
            {project.tech.map((tech, i) => (
              <span key={i} style={techStyle}>
                {tech}
              </span>
            ))}
          </div>

          {/* GITHUB BUTTON */}
          <button
            onClick={() => window.open(project.github, "_blank")}
            style={btnStyle}
          >
            <FaGithub /> View GitHub
          </button>
        </div>
      ))}
    </div>
  );
}

/* 🎨 STYLES */

const cardStyle = {
  background: "#1E293B",
  borderRadius: "16px",
  padding: "18px",
  marginTop: "15px",
  border: "1px solid rgba(59,130,246,0.25)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
  transition: "0.3s",
};

const descStyle = {
  opacity: 0.8,
  fontSize: "13px",
  marginTop: "10px",
  lineHeight: "1.5",
};

const techContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "10px",
};

const techStyle = {
  background: "#334155",
  padding: "5px 10px",
  borderRadius: "8px",
  fontSize: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const btnStyle = {
  marginTop: "15px",
  width: "100%",
  padding: "10px",
  border: "1px solid rgba(59,130,246,0.4)",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #3B82F6, #2563eb)",
  color: "white",
  cursor: "pointer",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

export default Projects;