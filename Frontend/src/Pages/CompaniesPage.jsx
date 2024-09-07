import { useContext, useEffect } from "react"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import CompanyHero from "../Components/CompanyComponents/CompanyHero"
import CompaniesIntro from "../Components/CompanyComponents/CompaniesIntro"
import AboutUsBar from "../Components/AboutUsBar"
import CompanyDetailsBox from "../Components/CompanyComponents/CompanyDetailsBox"
import {BounceLoader} from "react-spinners"
function CompaniesPage() {
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
       <CompanyHero/>
       <CompaniesIntro/>
       <CompanyDetailsBox/>
      
      </div>
    )
  }

export default CompaniesPage