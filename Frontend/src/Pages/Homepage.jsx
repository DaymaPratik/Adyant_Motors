import { useContext, useEffect } from "react"
import HomeAboutSection from "../Components/HomePageComponents/HomeAboutSection"
import HomeBrandLogoContainer from "../Components/HomePageComponents/HomeBrandLogoContainer"
import HomeBrandSection from "../Components/HomePageComponents/HomeBrandSection"
import HomeHeroSection from "../Components/HomePageComponents/HomeHeroSection"
import HomeYearSection from "../Components/HomePageComponents/HomeYearSection"
import { SideBarContext } from "../Context/SideBarContextProvider"
import SideBar from "../Components/SideBar"
import HomeWhatWeDo from "../Components/HomePageComponents/HomeWhatWeDo"
import {BounceLoader} from "react-spinners"

function Homepage() {
  const {showSideBar,setShowSideBar,loading,setLoading}=useContext(SideBarContext)
  useEffect(()=>{
    window.scrollTo(0, 0);
    setShowSideBar(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])

  return (
    loading 
    ?
    <div className="min-h-[100vh] flex justify-center items-center">
  {/* <video className="w-[200px] h-[200px]" autoPlay>
    <source src="/Gear.mp4" type="video/mp4" />
    </video> */}
    <BounceLoader/>
    </div>
    :
    <div className="max-w-screen overflow-x-hidden relative">
    {showSideBar
  &&  
    <SideBar/>
   }
    <HomeHeroSection/>
 <HomeAboutSection/>
 <HomeWhatWeDo/>
 <HomeBrandSection/>
 <HomeBrandLogoContainer/>
 <HomeYearSection/>
 </div>
  )
     
    

   
} 

export default Homepage