import { useContext, useEffect } from "react"
import CareersBenifitsSection from "../Components/CareersPageComponent/CareersBenifitsSection"
import CareersHeroSection from "../Components/CareersPageComponent/CareersHeroSection"
import CareersIntroSection from "../Components/CareersPageComponent/CareersIntroSection"
import CareersOpeningSection from "../Components/CareersPageComponent/CareersOpeningSection"

import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"

function CareersPage() {
  const {showSideBar,setShowSideBar,setShowAboutUs}=useContext(SideBarContext)
  useEffect(()=>{
    setShowSideBar(false);
    setShowAboutUs(false)
  },[])
  return (
    <div className="max-w-screen overflow-x-hidden relative">
    {showSideBar
     &&  
       <SideBar/>
     }
        <CareersHeroSection/>
        <CareersIntroSection/>
        <CareersBenifitsSection/>
        <CareersOpeningSection/>
       
    </div>
  )
}

export default CareersPage