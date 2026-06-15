import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import PhoneFrame from "./components/PhoneFrame";
import BottomNav from "./components/BottomNav";
import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  const [stage, setStage] = useState("splash");
  const [activeTab, setActiveTab] = useState("home");
const [onboardingStep, setOnboardingStep] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => setStage("onboarding"), 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <PhoneFrame
        bottomNav={
          stage === "app" ? (
            <BottomNav active={activeTab} setActive={setActiveTab} />
          ) : null
   
        }
      >
        {stage === "splash" && <Splash />}
       {stage === "onboarding" && (
  <OnBoarding
    step={onboardingStep}
    nextStep={() =>
      setOnboardingStep(onboardingStep + 1)
    }
    finishOnboarding={() => setStage("app")}
  />
)}
        {stage === "app" && renderScreen()}
      </PhoneFrame>
    </ThemeProvider>
  );
}

export default App;