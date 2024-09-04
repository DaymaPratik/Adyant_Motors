import { MdDoubleArrow } from "react-icons/md";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
function CareersOpeningSection() {
  useEffect(()=>{
    AOS.init({duration:1000})
},[])
  return (
    <main className="min-h-[70vh] h-fit bg-fixed 
    bg-[url('https://images.unsplash.com/photo-1716635174919-e6aec2d1c45a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
    bg-center bg-cover bg-no-repeat py-10" >
    <h4 className="font-bold text-[35px] text-center my-10">Openings</h4>
    <section className="grid py-5 gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[95%] xlg:w-[85%] xl:w-[80%] mx-auto my-10 ">

    <div className="shadow-[0px_0px_3px_0px_black] flex flex-col gap-3 scale-up-105 max-sm:w-[95%] max-sm:mx-auto  py-2 p-4 bg-[#eceeff] hover:scale-110 hover:shadow-[0px_0px_20px_2px_black]  duration-200 ease-in-out" data-aos="fade-left" data-aos-delay="100">
     <p className="flex gap-5 justify-start items-center mx-auto w-[100%] "> 
        <span className="text-blue-500 border-[1px] border-blue-500 block  px-3 py-1">
             Full Time
        </span>
       <span className="block ">    
              Pune
        </span>      
    </p>
      <h5 className="font-bold text-[20px] xs:text-[25px] md:text-[30px]">Senior Accountant</h5>
      <p className="text-[12px] xs:text-[14px] md:text-[17px]">I wanted to take a moment to introduce myself and my company, [Company Name]. We specialize in
         [briefly describe what your company does or offers]. I would love the opportunity to connect 
         with you and discuss how we can potentially work together.</p>
         <Link to={'/contact-us'}>
         <button className="hover:text-white rounded-md hover:bg-blue-500 transition ease-in duration-100 mx-auto w-fit px-1 xs:px-3 py-1 text-[15px] sm:text-[17px] md:text-[20px] gap-2
          border-2 border-blue-500 text-blue-600 flex  cursor-pointer">
            Apply Now
            <span className="text-[25px] xs:text-[30px]">
                <MdDoubleArrow/>
            </span>
        </button>
         </Link>
     </div>




     <div className="shadow-[0px_0px_3px_0px_black] flex flex-col gap-3 scale-up-105 max-sm:w-[95%] max-sm:mx-auto  py-2 p-4 bg-[#eceeff] hover:scale-110 hover:shadow-[0px_0px_20px_2px_black]  duration-200 ease-in-out" data-aos="fade-left" data-aos-delay="100">
     <p className="flex gap-5 justify-start items-center mx-auto w-[100%] "> 
        <span className="text-blue-500 border-[1px] border-blue-500 block  px-3 py-1">
             Full Time
        </span>
       <span className="block ">    
              Pune
        </span>      
    </p>
      <h5 className="font-bold text-[20px] xs:text-[25px] md:text-[30px]">Senior Accountant</h5>
      <p className="text-[12px] xs:text-[14px] md:text-[17px]">I wanted to take a moment to introduce myself and my company, [Company Name]. We specialize in
         [briefly describe what your company does or offers]. I would love the opportunity to connect 
         with you and discuss how we can potentially work together.</p>
         <Link to={'/contact-us'}>
         <button className="hover:text-white rounded-md hover:bg-blue-500 transition ease-in duration-100 mx-auto w-fit px-1 xs:px-3 py-1 text-[15px] sm:text-[17px] md:text-[20px] gap-2
          border-2 border-blue-500 text-blue-600 flex  cursor-pointer">
            Apply Now
            <span className="text-[25px] xs:text-[30px]">
                <MdDoubleArrow/>
            </span>
        </button>
         </Link>
     </div>
     <div className="shadow-[0px_0px_3px_0px_black] flex flex-col gap-3 scale-up-105 max-sm:w-[95%] max-sm:mx-auto  py-2 p-4 bg-[#eceeff] hover:scale-110 hover:shadow-[0px_0px_20px_2px_black]  duration-200 ease-in-out" data-aos="fade-left" data-aos-delay="100">
     <p className="flex gap-5 justify-start items-center mx-auto w-[100%] "> 
        <span className="text-blue-500 border-[1px] border-blue-500 block  px-3 py-1">
             Full Time
        </span>
       <span className="block ">    
              Pune
        </span>      
    </p>
      <h5 className="font-bold text-[20px] xs:text-[25px] md:text-[30px]">Senior Accountant</h5>
      <p className="text-[12px] xs:text-[14px] md:text-[17px]">I wanted to take a moment to introduce myself and my company, [Company Name]. We specialize in
         [briefly describe what your company does or offers]. I would love the opportunity to connect 
         with you and discuss how we can potentially work together.</p>
         <Link to={'/contact-us'}>
         <button className="hover:text-white rounded-md hover:bg-blue-500 transition ease-in duration-100 mx-auto w-fit px-1 xs:px-3 py-1 text-[15px] sm:text-[17px] md:text-[20px] gap-2
          border-2 border-blue-500 text-blue-600 flex  cursor-pointer">
            Apply Now
            <span className="text-[25px] xs:text-[30px]">
                <MdDoubleArrow/>
            </span>
        </button>
         </Link>
     </div>
    </section>
   
   </main>
  )
}

export default CareersOpeningSection