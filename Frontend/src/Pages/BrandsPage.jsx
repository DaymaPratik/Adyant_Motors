import { useContext, useEffect } from "react"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import BrandsHero from "../Components/BrandsComponents/BrandsHero"
import BrandsBox from "../Components/BrandsComponents/BrandsBox"
import AboutUsBar from "../Components/AboutUsBar"
import BrandsIntro from "../Components/BrandsComponents/BrandsIntro"
import {BounceLoader} from "react-spinners"
function BrandsPage() {
    const {showSideBar,setShowSideBar,loading,setLoading,aboutUsBar}=useContext(SideBarContext)
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
     <BounceLoader/>
   </div>
     :
     <div className="max-w-screen overflow-x-hidden relative">
     {showSideBar
      &&  
        <SideBar/>
      }
      {
       aboutUsBar && <AboutUsBar/>
      }
      <BrandsHero/>
      <BrandsIntro/>
      <BrandsBox/>
    
     </div>
    )
  }
  export default BrandsPage
