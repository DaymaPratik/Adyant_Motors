import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useContext, useEffect } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import { Link } from "react-router-dom";
import AboutUsBar from "./AboutUsBar";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { AdminContext } from "../Context/AdminContextProvider";
function Navbar() {
  const { showSideBar, setShowSideBar, setShowAboutUs, showAboutUs,aboutUsHover } =useContext(SideBarContext);
  const {admin}=useContext(AdminContext)
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);

const handleAboutUsMouseEnter = () => {
    setShowAboutUs(true);
};

const handleAboutUsMouseLeave =() => {
  setTimeout(()=>{
    const hover= aboutUsHover
    if (!hover) {
        setShowAboutUs(false);
    }
  },2000)
};

  return (
    <nav className="flex justify-between items-center w-[100%] bg-[#dee7eea1] z-[1000] text-black py-1 px-[20px] min-[768px]:px-[50px] min-[1256px]:px-[70px]  fixed">
      <div>
        <img src="/Adyant_Logo.png" alt="" className="h-[80px] " />
      </div>
      <ul className="flex justify-center relative items-center gap-1 min-[1256px]:gap-5 px-5 text-[17px] min-[1256px]:text-[22px] font-semibold max-[1024px]:hidden">
        <Link to={"/"}>
          <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
            Home
          </li>
        </Link>

        <Link to={"/about-us"} >
          <div className="relative"
           onMouseOver={handleAboutUsMouseEnter}
              onMouseOut={handleAboutUsMouseLeave}>
            <li
              className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2"
              
            >
              About Us
            </li>
            {(showAboutUs || aboutUsHover) && <AboutUsBar />}
          </div>
        </Link>
        <Link to={"/exports"}>
        <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
          Exports
        </li>
        </Link>
        <Link to={"/gallery"}>
        <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
          Gallery
        </li>
        </Link>
        <Link to={"/contact-us"}>
          <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
            Contact Us
          </li>
        </Link>
        <Link to={"/careers"}>
          <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
            Careers
          </li>
        </Link>
        {
      admin.isLogin &&
      <Link to={"/adminDashboard"}>
     <li  className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">Dashboard</li>
     </Link>
       }
      </ul>
      <div
        className="text-[40px] hover:cursor-pointer hover:border-[#ff0000] hover:text-[#ff0000] transition ease-in duration-150 p-1 min-[1024px]:hidden"
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        {showSideBar ? <MdClose /> : <MdOutlineMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
