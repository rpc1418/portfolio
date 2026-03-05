import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import Popup from "../components/popupRes/Popup"; // Import the Popup component
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import ScrollToTopButton from "./topbutton/Top";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => setIsDark(!isDark);
  // const openPopup = () => setIsPopupOpen(true);
  // const closePopup = () => setIsPopupOpen(false);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark, changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            {/* <Header openPopup={openPopup} />
            <Greeting openPopup={openPopup} /> */}
            <Header />
            <Greeting />
            <Skills />
            <Education />
            <StackProgress />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Profile />
            <ScrollToTopButton />
          </>
        )}
        {/* Show popup if isPopupOpen is true */}
        {/* {isPopupOpen && <Popup closePopup={closePopup} />} */}
      </StyleProvider>
    </div>
  );
};

export default Main;
