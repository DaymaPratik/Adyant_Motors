import { useContext, useEffect } from "react"
import AboutUsBar from "../Components/AboutUsBar"
import SideBar from "../Components/SideBar"
import { SideBarContext } from "../Context/SideBarContextProvider"
import { AdminContext } from "../Context/AdminContextProvider";
import { useNavigate } from "react-router-dom";
import DashboardBox from "../Components/DashboardBox";
import {BounceLoader} from "react-spinners"


function AdminDashboardPage() {
    const {showSideBar,setShowSideBar,loading,setLoading,aboutUsBar}=useContext(SideBarContext);
    const {admin}=useContext(AdminContext);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!admin.isLogin){
            navigate("/")
        }
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