import { useContext } from "react"
import HomeAboutSection from "../Components/HomeAboutSection"
import HomeBrandLogoContainer from "../Components/HomeBrandLogoContainer"
import HomeBrandSection from "../Components/HomeBrandSection"
import HomeFooter from "../Components/HomeFooter"
import HomeHeroSection from "../Components/HomeHeroSection"
import HomeServicesSection from "../Components/HomeServicesSection"
import HomeYearSection from "../Components/HomeYearSection"
import { SideBarContext } from "../Context/SideBarContextProvider"
import SideBar from "../Components/SideBar"

function Homepage() {
  const {showSideBar}=useContext(SideBarContext)

  return (
   <div className="max-w-screen overflow-hidden relative">
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