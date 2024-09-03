import { useContext, useEffect } from "react"
import GalleryHero from "../Components/GalleryComponents/GalleryHero"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import GalleryImageBox from "../Components/GalleryComponents/GalleryImageBox"

function GalleryPage() {
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
        <GalleryHero/>
        <GalleryImageBox/>
    </div>
  )
}

export default GalleryPage