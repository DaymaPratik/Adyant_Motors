import { Link } from "react-router-dom"

function AboutUsSideBar() {
  return (
    <ul
    data-aos="fade-left"
    className={`text-[20px] text-black font-semibold w-fit py-3 h-fit bg-white  z-[9999] `}
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

export default AboutUsSideBar