import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function SideBar() {
  
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <ul data-aos="fade-left" className=" text-[20px]  font-semibold absolute w-screen bg-white h-fit top-[90px] p-5 z-[222]">
    <li className=" p-1 cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Home</li>
    <li  className=" p-1 cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">About Us</li>
    <li  className=" p-1 cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Gallery</li>
    <li  className=" p-1 cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Newsroom</li>
    <li  className="p-1 cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Contact Us</li>
    <li  className=" p-1 cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Careers</li>
</ul>
  )
}

export default SideBar