import { useContext, useEffect } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import SideBar from "../Components/SideBar";
import ContactPageHero from "../Components/ConatctPageComponents/ContactPageHero";
import ContactIframeBox from "../Components/ConatctPageComponents/ContactIframeBox";
import ContactFormBox from "../Components/ConatctPageComponents/ContactFormBox";
import {BounceLoader} from "react-spinners"
import "react-toastify/dist/ReactToastify.css";

function ContactusPage() {
  const { showSideBar, setShowSideBar, setShowAboutUs ,loading,setLoading} =
    useContext(SideBarContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSideBar(false);
    setShowAboutUs(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
   loading
   ?
   <div className="min-h-[100vh] flex justify-center items-center">
   <BounceLoader/>
 </div>
   :
   <div className="max-w-screen overflow-hidden relative">
     
   {showSideBar && <SideBar />}
   <ContactPageHero />
   <ContactIframeBox />
   <ContactFormBox />
 </div>
  );
}

export default ContactusPage;
