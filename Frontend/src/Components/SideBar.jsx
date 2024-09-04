import 'aos/dist/aos.css';
import AOS from 'aos';
import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";import { CiCircleChevDown } from "react-icons/ci";
import { SideBarContext } from '../Context/SideBarContextProvider';
import AboutUsSideBar from './AboutUsSideBar';
import { GiCrossMark } from "react-icons/gi";
function SideBar() {  
  const {setShowAboutUs,showAboutUs}=useContext(SideBarContext)
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <ul 
    data-aos="fade-left" 
    className={`fixed top-[90px] left-0 min-[1024px]:hidden text-[20px] font-semibold w-fit px-10 h-fit bg-white  p-5 z-[9999] `}
  >
    
    <Link to={"/"}>
       <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">Home</li>
       </Link>
       
        <li  className="border-2 flex  justify-end items-center relative border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
         <Link to={"/about-us"}>
         <span> About Us</span>  
         </Link>
         {showAboutUs ?
          <span className='block ml-5 w-fit text-[25px] hover:scale-105 hover:bg-black p-1  rounded-[50%] transition  ease-in duration-200' onClick={()=>{setShowAboutUs(false)}}>
          <GiCrossMark className=''/> 
          </span>          
          :
          <span className='block ml-5 w-fit text-[30px] hover:scale-105 hover:bg-black p-1 rounded-[50%] transition  ease-in duration-200' onClick={()=>{setShowAboutUs(true)}}>
          <CiCircleChevDown className=''/> 
          </span>
           }
        </li>
       <li>
       {showAboutUs && <AboutUsSideBar/>}
       </li>
      <Link to={"/exports"}>
      <li  className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">Exports</li>
      </Link>
       <Link to={"/gallery"}>
       <li  className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">Gallery</li>
       </Link>
       <Link to={"/contact-us"}>
       <li  className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">Contact Us</li>
       </Link>
     <Link to={"/careers"}>
     <li  className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">Careers</li>
     </Link>
  </ul>
  )
}

export default SideBar