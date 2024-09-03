import { useContext, useEffect } from "react"
import ExportHero from "../Components/ExportsComponents/ExportHero"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import Exportintro from "../Components/ExportsComponents/Exportintro"
import ExportMap from "../Components/ExportsComponents/ExportMap"

function ExportsPage() {
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
        <ExportHero/>
        <Exportintro/>
        <ExportMap/>
    
    </div>
  )
}

export default ExportsPage