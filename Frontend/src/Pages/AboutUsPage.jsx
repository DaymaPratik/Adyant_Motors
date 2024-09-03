import { SideBarContext } from "../Context/SideBarContextProvider";
import SideBar from "../Components/SideBar";
import { useContext, useEffect } from "react";
import AboutUsHero from "../Components/AboutusComponents/AboutUsHero";
import MisssionVision from "../Components/MisssionVision";
import WhoWeAre from "../Components/AboutusComponents/WhoWeAre";
import HomeYearSection from "../Components/HomePageComponents/HomeYearSection";

function AboutUsPage() {
  const { showSideBar, setShowSideBar,setShowAboutUs } =
    useContext(SideBarContext);
  useEffect(() => {
    setShowSideBar(false);
    setShowAboutUs(false)
  }, []);
  return (
    <div className="max-w-screen overflow-x-hidden relative">
      {showSideBar && <SideBar />}

      
      <AboutUsHero />
      <MisssionVision />
      <WhoWeAre />
      <HomeYearSection />
      
    </div>
  );
}

export default AboutUsPage;
