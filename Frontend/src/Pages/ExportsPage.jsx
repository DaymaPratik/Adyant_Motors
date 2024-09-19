import { useContext, useEffect } from "react"
import ExportHero from "../Components/ExportsComponents/ExportHero"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import Exportintro from "../Components/ExportsComponents/Exportintro"
import ExportMap from "../Components/ExportsComponents/ExportMap"
import {BounceLoader} from "react-spinners"
import HomeWhatWeDo2 from "../Components/HomePageComponents/HomeWhatWeDo2"
function ExportsPage() {
    const {showSideBar,setShowSideBar,setShowAboutUs,loading,setLoading}=useContext(SideBarContext)
    useEffect(()=>{
      window.scrollTo(0, 0);
      setShowSideBar(false);
      setShowAboutUs(false);
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
       <ExportHero/>
       <Exportintro/>
       <HomeWhatWeDo2/>
       <ExportMap/>
   
   </div>
  )
}

export default ExportsPage