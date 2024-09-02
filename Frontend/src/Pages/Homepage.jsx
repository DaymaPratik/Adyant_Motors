import { useContext, useEffect } from "react"
import HomeAboutSection from "../Components/HomePageComponents/HomeAboutSection"
import HomeBrandLogoContainer from "../Components/HomePageComponents/HomeBrandLogoContainer"
import HomeBrandSection from "../Components/HomePageComponents/HomeBrandSection"
import HomeFooter from "../Components/HomeFooter"
import HomeHeroSection from "../Components/HomePageComponents/HomeHeroSection"
import HomeServicesSection from "../Components/HomePageComponents/HomeServicesSection"
import HomeYearSection from "../Components/HomePageComponents/HomeYearSection"
import { SideBarContext } from "../Context/SideBarContextProvider"
import SideBar from "../Components/SideBar"

function Homepage() {
  const {showSideBar,setShowSideBar}=useContext(SideBarContext)
  useEffect(()=>{
    setShowSideBar(false);
  },[])

  return (
    <div className="max-w-screen overflow-x-hidden relative">
    {showSideBar
     &&  
       <SideBar/>
     }
    <HomeHeroSection/>
    <HomeAboutSection/>
    <HomeServicesSection/>
    <HomeBrandSection/>
    <HomeBrandLogoContainer/>
    <HomeYearSection/>
    <HomeFooter/>
    </div>
  )
}

export default Homepage