import { useContext, useEffect } from "react"
import AboutUsBar from "../Components/AboutUsBar"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import { AdminContext } from "../Context/AdminContextProvider";
import { useNavigate } from "react-router-dom";
import DashboardBox from "../Components/DashboardBox";


function AdminDashboardPage() {
    const {showSideBar,aboutUsBar}=useContext(SideBarContext);
    const {admin}=useContext(AdminContext);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!admin.isLogin){
            navigate("/")
        }
    },[])
  return (
    <div className="max-w-screen h-fit overflow-x-hidden relative">
      {showSideBar
       &&  
         <SideBar/>
       }
       {
        aboutUsBar && <AboutUsBar/>
       }
       
       <DashboardBox/>
      </div>
  )
}

export default AdminDashboardPage