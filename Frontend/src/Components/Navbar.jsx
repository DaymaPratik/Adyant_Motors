import { MdOutlineMenu } from "react-icons/md";
import { GiTireIronCross } from "react-icons/gi";
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import { Link } from "react-router-dom";
import AboutUsBar from "./AboutUsBar";
function Navbar() {
  const { showSideBar, setShowSideBar, setShowAboutUs, showAboutUs,aboutUsHover } =useContext(SideBarContext);
    const handleAboutUsMouseEnter = () => {
      setShowAboutUs(true);
  };

  const handleAboutUsMouseLeave = () => {
    setTimeout(()=>{
      if(!aboutUsHover){
        setShowAboutUs(false)
      }
    },1000)
  };
  return (
    <nav className="flex justify-between items-center w-[100%] bg-[#0d0d0da4] z-[1000] text-white py-1 px-[20px] min-[768px]:px-[50px] min-[1256px]:px-[70px]  fixed">
      <div>
        <img src="/logo.png" alt="" className="h-[60px] " />
      </div>
      <ul className="flex justify-center relative items-center gap-1 min-[1256px]:gap-5 px-5 text-[17px] min-[1256px]:text-[22px] font-semibold max-[1024px]:hidden">
        <Link to={"/"}>
          <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
            Home
          </li>
        </Link>

        <Link to={"/about-us"}  onMouseOver={handleAboutUsMouseEnter}
              onMouseOut={handleAboutUsMouseLeave}>
          <div className="relative">
            <li
              className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2"
             
            >
              About Us
            </li>
            {(showAboutUs ) && <AboutUsBar />}
          </div>
        </Link>

        <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
          Gallery
        </li>
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
      </ul>
      <div
        className="text-[40px] border-2 border-white hover:border-[#ff0000] hover:text-[#ff0000] transition ease-in duration-150 p-1 min-[1024px]:hidden"
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        {showSideBar ? <GiTireIronCross /> : <MdOutlineMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
