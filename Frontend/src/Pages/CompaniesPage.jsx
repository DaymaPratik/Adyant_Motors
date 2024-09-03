import { useContext, useEffect } from "react"
import HomeFooter from "../Components/HomeFooter"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import CompanyHero from "../Components/CompanyComponents/CompanyHero"
import CompaniesIntro from "../Components/CompanyComponents/CompaniesIntro"
import AboutUsBar from "../Components/AboutUsBar"
import CompanyDetailsBox from "../Components/CompanyComponents/CompanyDetailsBox"

function CompaniesPage() {
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
       <CompanyHero/>
       <CompaniesIntro/>
       <CompanyDetailsBox/>
      <HomeFooter/>
      </div>
    )
  }

export default CompaniesPage