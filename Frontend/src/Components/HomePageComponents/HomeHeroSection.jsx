import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
function HomeHeroSection() {
  useEffect(()=>{
    AOS.init({ duration: 1000 })
},[])
  return (
   <main className="relative h-fit min-h-[70vh] max-xlg:pt-[100px] md:min-h-[100vh] w-[100%] flex flex-col justify-center items-center gap-1 text-center text-white
   bg-[url('https://images.unsplash.com/photo-1524214786335-66456317bde6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
   bg-no-repeat bg-center bg-cover">
    <p className="text-[15px] xs:text-[17px] md:text-[22px] font-bold  mb-[-10px]" data-aos="fade-left">Ensuring vehicles safety and owners safety by supplying</p>
    <h1 className="text-[25px] xxs:text-[28px] xs:text-[35px] md:text-[50px] font-extrabold " data-aos="fade-left">Authentic & Genuine <br /> Automative Parts</h1>
    <div className="text-[15px] xs:text-[20px] md:text-[25px]  font-semibold gap-5 xs:gap-10  p-3 flex justify-center items-center mt-5 xlg:mt-10" data-aos="fade-up">
        <Link to={"/about-us"}>
        <button className="p-2 px-3 hover:bg-[#181729d9] transition ease-in duration-150 rounded  bg-[#2f2b6fd9]">More About Us</button>
        </Link>
       <Link to={"/contact-us"}>  
       <button className="p-2 px-3 hover:bg-[#181729d9] transition ease-in duration-150 rounded bg-[#2f2b6fd9]">Contact Us</button>
       </Link>
    </div>
   </main>
  )
}

export default HomeHeroSection