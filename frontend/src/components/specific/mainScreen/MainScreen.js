import AboutUs from "../aboutPage/AboutUs";
import TopNavBar from "../navigation/TopNavBar";
import HomePage from "../home/HomePage";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div>
      <TopNavBar />
      <HomePage />
      <AboutUs />
    </div>
  );
};

export default MainScreen;
