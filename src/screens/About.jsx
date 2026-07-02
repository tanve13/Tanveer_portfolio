import { FaAward } from "react-icons/fa";
function About() {
  return (
    <div>
      <h2>👩 About Me</h2>

      {/* Profile Card */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "20px",
          marginTop: "15px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#3B82F6",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "35px",
          }}
        >
          👩‍💻
        </div>

        <h3 style={{ marginTop: "15px" }}>
          Tanveer Kaur
        </h3>

        <p style={{ color: "#3B82F6" }}>
          Android Developer
        </p>

        <p
          style={{
            fontSize: "13px",
            opacity: 0.8,
            lineHeight: "1.6",
          }}
        >
          Passionate Android Developer focused on
          building modern, scalable and user-friendly
          mobile applications using Kotlin,
          Jetpack Compose and Firebase.
        </p>
      </div>

      {/* Quick Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "18px",
        }}
      >
        <div
          style={{
            background: "#1E293B",
            padding: "15px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h3>9.3</h3>
          <p>CGPA</p>
        </div>

        <div
          style={{
            background: "#1E293B",
            padding: "15px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h3>2026</h3>
          <p>Graduation</p>
        </div>

        <div
          style={{
            background: "#1E293B",
            padding: "15px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h3>5+</h3>
          <p>Projects</p>
        </div>

        <div
          style={{
            background: "#1E293B",
            padding: "15px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h3>2</h3>
          <p>Trainings</p>
        </div>
      </div>

      {/* Education */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "18px",
        }}
      >
        <h3>🎓 Education</h3>

        <p>
          <strong>B.Tech Computer Science</strong>
        </p>

        <p>DAV University</p>

        <p>Graduating: 2026</p>

        <p>CGPA: 9.3</p>
      </div>

      {/* Career Goal */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "18px",
        }}
      >
        <h3>🚀 Career Goal</h3>

        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.7",
            opacity: 0.85,
          }}
        >
          My goal is to become a professional
          Android Developer and build innovative
          mobile applications that solve real-world
          problems while delivering exceptional user
          experiences.
        </p>
      </div>

      {/* Experience */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "18px",
        }}
      >
        <h3>💼 Experience</h3>
        <p>
          • Freelance Android Development Projects
        </p>

        <p>
          • Developed AI-based applications for
          clients and received project payments
        </p>

        <p>
          • Participated in Hackathons and built
          innovative Android solutions
        </p>

        <p>
          • 45 Days Android Development Training
        </p>

        <p>
          • 2 Months Mobile Application Development
          Training
        </p>
      </div>

      {/* Technologies */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "18px",
        }}
      >
        <h3>💻 Technologies</h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {[
            "Kotlin",
            "Jetpack Compose",
            "Firebase",
            "Android Studio",
            "XML",
            "Room DB",
            "GitHub",
            "Cloudinary",
            "OneSignal",
            "Google Maps",
          ].map((tech) => (
            <span
              key={tech}
              style={{
                background: "#334155",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
<div
  style={{
    background: "#1E293B",
    borderRadius: "16px",
    padding: "18px",
    marginTop: "18px",
  }}
>
  <h3>🏆 Achievements & Certifications</h3>

  {[
    {
      title: "Google Hackathon Participation",
      desc: "Participated in Google Hackathon and gained experience in teamwork, innovation and problem solving.",
      image: "/google_hackathon.jpeg",
    },
     {
      title: "2 Months Mobile App Training",
      desc: "Completed advanced mobile application development training with real-world project implementation.",
       image: "/training2months.jpeg",
    },
     {
      title: "Donor App Hackathon Project",
      desc: "Developed Multi Donation App during hackathon featuring Firebase, Maps Integration and QR-based donations.",
       image: "/donorapp.jpeg",
      },
    {
      title: "45 Days Android Training",
      desc: "Successfully completed 45 days Android Development Training focusing on Kotlin and Android fundamentals.",
      image: "/training45.jpg",
    },

  ].map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        marginTop: "18px",
        paddingBottom: "15px",
        borderBottom:
          index !== 3 ? "1px solid #334155" : "none",
      }}
    >
      {/* Left Content */}

      <div style={{ flex: 1 }}>
        <h4
          style={{
            margin: 0,
            marginBottom: "8px",
            color: "#3B82F6",
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.6",
            opacity: 0.85,
            margin: 0,
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Right Image */}

      {item.image ? (
  <img
    src={item.image}
    alt={item.title}
    onClick={() => window.open(item.image, "_blank")}
    style={{
      width: "85px",
      height: "85px",
      objectFit: "cover",
      borderRadius: "12px",
      cursor: "pointer",
      border: "2px solid #3B82F6",
    }}
  />
) : (
  <div
    style={{
      width: "85px",
      height: "85px",
      borderRadius: "12px",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#94a3b8",
      flexDirection: "column",
      gap: "4px",
      border: "1px solid #334155",
    }}
  >
    <FaAward size={18} />
    <span style={{ fontSize: "10px" }}>No Image</span>
  </div>
)}
    </div>
  ))}
</div>

      {/* Interests */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "18px",
        }}
      >
        <h3>❤️ Interests</h3>

        <p>
          Mobile App Development • UI/UX Design •
          Artificial Intelligence • Open Source •
          Problem Solving
        </p>
      </div>

      {/* Fun Facts */}

      <div
        style={{
          background: "#1E293B",
          borderRadius: "16px",
          padding: "18px",
          marginTop: "18px",
          marginBottom: "20px",
        }}
      >
        <h3>✨ Fun Facts</h3>

        <p>📱 Built 5+ Android Applications</p>

        <p>☁️ Worked on Firebase-Powered Apps</p>

        <p>🚀 Participated in Multiple Hackathons</p>

        <p>💡 Love Turning Ideas Into Apps</p>
      </div>
    </div>
  );
}

export default About;