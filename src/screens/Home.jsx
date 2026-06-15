import { FaEye, FaDownload } from "react-icons/fa";
function Home() {
  return (
    <div>
      <p
        style={{
          color: "#3B82F6",
          marginBottom: "4px",
          fontSize: "14px",
        }}
      >
        Hello, I'm 👋
      </p>

      <h1
        style={{
          fontSize: "28px",
          margin: 0,
        }}
      >
        TANVEER KAUR
      </h1>

      <h3
        style={{
          color: "#3B82F6",
          marginTop: "5px",
        }}
      >
        Android Developer
      </h3>

      {/* Profile Card */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "20px",
        }}
      >
        <h3>📱 Portfolio Overview</h3>

        <p
          style={{
            fontSize: "13px",
            opacity: 0.8,
          }}
        >
          B.Tech CSE Graduate passionate about
          Android development using Kotlin,
          Firebase and modern UI design.
        </p>
      </div>

      {/* Dashboard Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#1E293B",
            padding: "20px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          📂
          <p>Projects</p>
        </div>

        <div
          style={{
            background: "#1E293B",
            padding: "20px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          ⭐
          <p>Skills</p>
        </div>

        <div
          style={{
            background: "#1E293B",
            padding: "20px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          💻
          <p>GitHub</p>
        </div>

        <div
          style={{
            background: "#1E293B",
            padding: "20px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          👤
          <p>About</p>
        </div>
      </div>

      {/* Resume Button */}

      {/* <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          borderRadius: "12px",
          border: "none",
          background: "#3B82F6",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        📄 Download Resume
      </button> */}
      {/* Resume Buttons */}

<div
  style={{
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  }}
>
  {/* View Resume */}

  <button
    onClick={() => window.open("/Tanveer%20Kaur%20Resume.pdf", "_blank")}
    style={{
      flex: 1,
      padding: "12px",
      borderRadius: "14px",
      border: "none",
      background: "#3B82F6",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
    }}
  >
    <FaEye size={16} />
    View Resume
  </button>

  {/* Download Resume */}

  <button
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/Tanveer%20Kaur%20Resume.pdf";
      link.download = "Tanveer_Kaur_Resume.pdf";
      link.click();
    }}
    style={{
      flex: 1,
      padding: "12px",
      borderRadius: "14px",
      border: "1px solid #3B82F6",
      background: "#1E293B",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    }}
  >
    <FaDownload size={16} />
    Download
  </button>
</div>
    </div>
  );
}

export default Home;