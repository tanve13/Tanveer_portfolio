function Skills() {
  const technicalSkills = [
    { name: "Kotlin", level: 90 },
    { name: "Jetpack Compose", level: 85 },
    { name: "Firebase", level: 85 },
    { name: "Android Studio", level: 90 },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Adaptability",
  ];

  return (
    <div>
      <h2>🚀 Skills</h2>

      {/* Technical Skills */}

      <h3 style={{ marginTop: "20px" }}>
        Technical Skills
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        {technicalSkills.map((skill) => (
          <div
            key={skill.name}
            style={{
              background: "#1E293B",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "6px solid #3B82F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {skill.level}%
            </div>

            <p
              style={{
                marginTop: "12px",
                fontSize: "14px",
              }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Other Tech */}

      <h3 style={{ marginTop: "25px" }}>
        Tools & Technologies
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {[
          "XML","Jetpack Compose","Room DB",
          "GitHub","Android Studio",
          "Cloudinary",
          "OneSignal",
          "Google Maps",
        ].map((tech) => (
          <span
            key={tech}
            style={{
              background: "#334155",
              padding: "8px 14px",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Soft Skills */}

      <h3 style={{ marginTop: "25px" }}>
        Soft Skills
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {softSkills.map((skill) => (
          <span
            key={skill}
            style={{
              background: "#1E293B",
              padding: "10px 14px",
              borderRadius: "20px",
              border: "1px solid #3B82F6",
              fontSize: "13px",
            }}
          >
            ⭐ {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;