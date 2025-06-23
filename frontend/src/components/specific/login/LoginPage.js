import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLoginSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  const switchToSignUp = () => {
    setIsLoginView(false);
  };

  const switchToLogin = () => {
    setIsLoginView(true);
  };

  const handleForgotPassword = () => {
    // Add forgot password logic here later
    console.log("Forgot password clicked");
  };

  const handleSignUp = () => {
    // Add sign up logic here
    console.log("Sign up clicked");
    // After successful signup, scroll to main screen
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleLogin = () => {
    // Add login logic here
    console.log("Login clicked");
    // After successful login, scroll to main screen
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="login-page">
      <div id="background">
        <div className="background-Right"></div>
        <div className="background-Left"></div>
      </div>

      <div id="slide" className={isLoginView ? "show-login" : "show-signup"}>
        <div className="top">
          <div className="left">
            <div className="neumorphic-card">
              <div className="card-title">Sign Up</div>
              <div className="card-subtitle">Create New Account</div>
              <div className="input-fields">
                <div className="input-group">
                  <span className="input-label">Email or Phone Number</span>
                  <input type="text" placeholder="Enter your email or phone" />
                </div>
                <div className="input-group">
                  <span className="input-label">Password</span>
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>
              <button className="neumorphic-button" onClick={handleSignUp}>
                Create Account
              </button>
              <div className="card-links">
                <span onClick={switchToLogin} style={{ cursor: "pointer" }}>
                  Already have an account?
                </span>{" "}
                <span onClick={switchToLogin} className="link-text-right">
                  Login
                </span>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="neumorphic-card">
              <div className="card-title">Login</div>
              <div className="card-subtitle">Welcome Back</div>
              <div className="input-fields">
                <div className="input-group">
                  <span className="input-label">Email or Phone Number</span>
                  <input type="text" placeholder="Enter your email or phone" />
                </div>
                <div className="input-group">
                  <span className="input-label">Password</span>
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>
              <button className="neumorphic-button" onClick={handleLogin}>
                LogIn
              </button>
              <div className="card-links">
                <span
                  onClick={handleForgotPassword}
                  className="link-text-right"
                >
                  Forgot password?
                </span>{" "}
                or{" "}
                <span onClick={switchToSignUp} className="link-text-right">
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
