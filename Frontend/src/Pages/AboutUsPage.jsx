import { SideBarContext } from "../Context/SideBarContextProvider";
import SideBar from "../Components/SideBar";
import { useContext, useEffect } from "react";
import AboutUsHero from "../Components/AboutusComponents/AboutUsHero";
import MisssionVision from "../Components/MisssionVision";
import WhoWeAre from "../Components/AboutusComponents/WhoWeAre";
import HomeYearSection from "../Components/HomePageComponents/HomeYearSection";
import {BounceLoader} from "react-spinners"
import HomeServicesSection from "../Components/HomePageComponents/HomeServicesSection"

function AboutUsPage() {
  const { showSideBar, setShowSideBar,setShowAboutUs,loading,setLoading } =
    useContext(SideBarContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSideBar(false);
    setShowAboutUs(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
   loading
   ?
   <div className="min-h-[100vh] flex justify-center items-center">
      <BounceLoader/>
    </div>
   :
   <div className="max-w-screen overflow-x-hidden relative">
   {showSideBar && <SideBar />}

   
   <AboutUsHero />
   <MisssionVision />
   <WhoWeAre />
   <HomeServicesSection/>
   <HomeYearSection />
   
 </div>
  );
}

export default AboutUsPage;
