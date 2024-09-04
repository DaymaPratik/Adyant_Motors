import 'aos/dist/aos.css';
import AOS from 'aos';
import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { SideBarContext } from '../Context/SideBarContextProvider';

function AboutUsBar() {
    const {setShowAboutUs,  setAboutUsHover}=useContext(SideBarContext)
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <ul
    data-aos="fade-down"
    className={`fixed top-[90px] text-[20px] text-black font-semibold w-fit p-3 h-fit bg-white  z-[9999] `}
    onMouseOver={ () => { setAboutUsHover(true);setShowAboutUs(true) }}
    onMouseOut={ () => { setShowAboutUs(false); setAboutUsHover(false)}}
  >
    <Link to={"/about-us/companies"}>
      <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
       Our Companies
      </li>
    </Link>
    <Link to={"/about-us/leadership"}>
      <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
        LeaderShip Team
      </li>
    </Link>

    <Link to={"/about-us/brands"}>
      <li className="border-2 border-transparent hover:text-[#ff0000] cursor-pointer hover:border-b-[#ff0000] transition duration-150 ease-in p-2">
        Our Brands
      </li>
    </Link>
  </ul>
  )
}

export default AboutUsBar