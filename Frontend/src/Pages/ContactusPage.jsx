import { useContext, useEffect } from "react"
import { SideBarContext } from "../Context/SideBarContextProvider"
import SideBar from "../Components/SideBar"
import ContactPageHero from "../Components/ConatctPageComponents/ContactPageHero"
import ContactIframeBox from "../Components/ConatctPageComponents/ContactIframeBox"
import ContactFormBox from "../Components/ConatctPageComponents/ContactFormBox"

function ContactusPage() {
    const {showSideBar,setShowSideBar,setShowAboutUs}=useContext(SideBarContext)
    useEffect(()=>{
      setShowSideBar(false);
      setShowAboutUs(false)
    },[])
  return (
    <div className="max-w-screen overflow-hidden relative">
   {showSideBar
    &&  
      <SideBar/>
    }
  <ContactPageHero/>
  <ContactIframeBox/>
  <ContactFormBox/>
   
   </div>
  )
}

export default ContactusPage