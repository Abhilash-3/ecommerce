import { useState } from "react";
import LoginPage from "./LoginPage";
import MainScreen from "../mainScreen/MainScreen";
import "./LoginWithMain.css";

const LoginWithMain = () => {
  const [showMainScreen, setShowMainScreen] = useState(false);

  const scrollToMainScreen = () => {
    setShowMainScreen(true);
  };
  const scrollBackToLogin = () => {
    setShowMainScreen(false);
  };

  return (
    <div className="login-with-main-container">
      <div
        className={`content-wrapper ${
          showMainScreen ? "show-main" : "show-login"
        }`}
      >
        <div className="login-section">
          <LoginPage onLoginSuccess={scrollToMainScreen} />
        </div>
        <div className="main-section">
          <MainScreen onBackToLogin={scrollBackToLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginWithMain;
