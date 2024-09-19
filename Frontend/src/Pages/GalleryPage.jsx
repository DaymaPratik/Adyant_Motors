import { useContext, useEffect,useState } from "react"
import GalleryHero from "../Components/GalleryComponents/GalleryHero"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import GalleryImageBox from "../Components/GalleryComponents/GalleryImageBox"
import {BounceLoader} from "react-spinners"

function GalleryPage() {
    const {showSideBar,setShowSideBar,setShowAboutUs,loading,setLoading}=useContext(SideBarContext);
    const [large,setLarge]=useState(false);
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
        <GalleryHero/>
        <GalleryImageBox/>
    </div>
  )
}

export default GalleryPage