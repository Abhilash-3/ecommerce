import AboutUs from "../aboutPage/AboutUs";
import TopNavBar from "../navigation/TopNavBar";
import HomePage from "../home/HomePage";
import "./MainScreen.css";

const MainScreen = ({ onBackToLogin }) => {
  return (
    <div className="main-screen-container">
      <TopNavBar onBackToLogin={onBackToLogin} />
      <HomePage />
      <AboutUs />
    </div>
  );
};

export default MainScreen;
