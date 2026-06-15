function Splash() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "70px",
          marginBottom: "20px",
        }}
      >
        🤖
      </div>

      <h1
        style={{
          fontSize: "32px",
          marginBottom: "8px",
          letterSpacing: "2px",
        }}
      >
        TANVEER KAUR
      </h1>

      <p
        style={{
          color: "#3B82F6",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Android Developer
      </p>

      <p
        style={{
          marginTop: "10px",
          color: "#94A3B8",
          fontSize: "14px",
        }}
      >
        Kotlin • Firebase • Android Studio
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "8px",
        }}
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Splash;