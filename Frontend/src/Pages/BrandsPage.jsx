import { useContext, useEffect } from "react"
import HomeFooter from "../Components/HomeFooter"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import BrandsHero from "../Components/BrandsComponents/BrandsHero"
import BrandsBox from "../Components/BrandsComponents/BrandsBox"
import AboutUsBar from "../Components/AboutUsBar"

function BrandsPage() {
    const {showSideBar,setShowSideBar,aboutUsBar}=useContext(SideBarContext)
    useEffect(()=>{
      setShowSideBar(false);
    },[])
  
    return (
      <div className="max-w-screen overflow-x-hidden relative">
      {showSideBar
       &&  
         <SideBar/>
       }
       {
        aboutUsBar && <AboutUsBar/>
       }
       <BrandsHero/>
       <BrandsBox/>
      <HomeFooter/>
      </div>
    )
  }
  export default BrandsPage
