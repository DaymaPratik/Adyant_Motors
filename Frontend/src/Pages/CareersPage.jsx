import { useContext, useEffect } from "react"
import CareersBenifitsSection from "../Components/CareersPageComponent/CareersBenifitsSection"
import CareersHeroSection from "../Components/CareersPageComponent/CareersHeroSection"
import CareersIntroSection from "../Components/CareersPageComponent/CareersIntroSection"
import CareersOpeningSection from "../Components/CareersPageComponent/CareersOpeningSection"

import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import {BounceLoader} from "react-spinners"

function CareersPage() {
  const {showSideBar,setShowSideBar,setShowAboutUs,loading,setLoading}=useContext(SideBarContext)
  useEffect(()=>{
    window.scrollTo(0, 0);
    setShowSideBar(false);
    setShowAboutUs(false);
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  return (
    loading
    ?
    <div className="min-h-[100vh] flex justify-center items-center">
      <BounceLoader/>
    </div>
    :
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