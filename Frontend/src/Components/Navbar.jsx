import { MdOutlineMenu } from "react-icons/md";
import { GiTireIronCross } from "react-icons/gi";
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
function Navbar() {
  const {showSideBar,setShowSideBar}=useContext(SideBarContext)
  return (
   <nav className="flex justify-between items-center w-[100%] bg-[#0d0d0da4] z-[10] text-white py-1 px-[20px] min-[768px]:px-[50px] min-[1256px]:px-[100px] border-2 border-black fixed">
    <div>
       <img src="/logo.png" alt="" className="h-[80px] "/>
    </div>
    <ul className="flex justify-center  items-center gap-2 min-[]1256px:gap-5 px-5 text-[23px] min-[1256px]:text-[25px] font-semibold max-[1024px]:hidden">
        <li className="border-2 border-blue-400 p-2">Home</li>
        <li  className="border-2 border-blue-400 p-2">About Us</li>
        <li  className="border-2 border-blue-400 p-2">Gallery</li>
        <li  className="border-2 border-blue-400 p-2">Newsroom</li>
        <li  className="border-2 border-blue-400 p-2">Contact Us</li>
        <li  className="border-2 border-blue-400 p-2">Careers</li>
    </ul>
    <div className="text-[40px] border-2 border-white hover:border-[#ff0000] hover:text-[#ff0000] transition ease-in duration-150 p-1 min-[1024px]:hidden" onClick={()=>{setShowSideBar(!showSideBar)}}>
      {showSideBar ? <GiTireIronCross/> : <MdOutlineMenu/> }
    </div>

   </nav>
  )
}

export default Navbar