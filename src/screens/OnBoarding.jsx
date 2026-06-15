import { FaAndroid } from "react-icons/fa";

function OnBoarding({
  step,
  nextStep,
  finishOnboarding,
}) {
  const screens = [
    {
      title: "Turning Ideas Into Android Apps",
      subtitle: "Kotlin • Firebase • Android Studio",
      icon: "📱",
    },
    {
      title: "Building Real World Projects",
      subtitle:
        "Library App • Event Planner • Lost & Found",
      icon: "🚀",
    },
    {
      title: "Welcome To My Portfolio",
      subtitle:
        "Explore Projects, Skills & Experience",
      icon: "👨‍💻",
    },
  ];

  const current = screens[step - 1];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#3B82F6,#60A5FA)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          marginBottom: "25px",
          boxShadow:
            "0 0 30px rgba(59,130,246,0.5)",
        }}
      >
        {current.icon}
      </div>

      <h2>{current.title}</h2>

      <p
        style={{
          color: "#94A3B8",
          marginTop: "10px",
        }}
      >
        {current.subtitle}
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "30px",
        }}
      >
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            style={{
              width: step === dot ? "30px" : "10px",
              height: "6px",
              borderRadius: "20px",
              background:
                step === dot
                  ? "#3B82F6"
                  : "#475569",
            }}
          />
        ))}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <button
          onClick={finishOnboarding}
          style={{
            background: "transparent",
            border: "none",
            color: "#94A3B8",
            cursor: "pointer",
          }}
        >
          Skip
        </button>

        <button
          onClick={() => {
            if (step < 3) {
              nextStep();
            } else {
              finishOnboarding();
            }
          }}
          style={{
            background: "#3B82F6",
            border: "none",
            color: "white",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {step === 3 ? "Start" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default OnBoarding;