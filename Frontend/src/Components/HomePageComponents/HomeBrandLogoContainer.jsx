import { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function HomeBrandLogoContainer() {
  const [showArrows,setShowArrows]=useState(false);
  const sliderRef=useRef(null);
  const scrollLeft=()=>{
      if(sliderRef.current){
          sliderRef.current.scrollBy({left:-sliderRef.current.offsetWidth,behavior:'smooth'})
      }
  }
  const scrollRight=()=>{
      if(sliderRef.current){
          sliderRef.current.scrollBy({left:sliderRef.current.offsetWidth,behavior:'smooth'})
      }
  }
  return (
    <div className=" overflow-hidden w-[95%] mx-auto relative my-5 py-5" 
    onMouseLeave={()=>{setShowArrows(false)}}
    onMouseEnter={()=>{setShowArrows(true)}}
    >
        <div className=" flex gap-10 overflow-x-scroll hide-scrollbar text-center"  ref={sliderRef}> 
        <img src="/hero.png" alt=""  className="h-[60px] sm:h-[100px] "/>
        <img src="/honda.png" alt=""  className="h-[60px] sm:h-[100px] "/>
        <img src="/ngk.png" alt=""  className="h-[60px] sm:h-[100px] "/>
        <img src="/osram.jpeg" alt="" className="h-[60px] sm:h-[100px] "/>
        <img src="/pricol.jpg" alt="" className="h-[60px] sm:h-[100px] "/>
         <img src="/TVS.png" alt="" className="h-[60px] sm:h-[100px] "/>
         <img src="/uno-minda.png" alt="" className="h-[60px] sm:h-[100px] "/>
         <img src="/royalenfield.png" alt="" className="h-[60px] sm:h-[100px] "/>
         <img src="/ngk.png" alt=""  className="h-[60px] sm:h-[100px] "/>
        <img src="/osram.jpeg" alt="" className="h-[60px] sm:h-[100px] "/>
        <img src="/pricol.jpg" alt="" className="h-[60px] sm:h-[100px] "/>
         <img src="/TVS.png" alt="" className="h-[60px] sm:h-[100px] "/>
        </div>
        {
        showArrows && 
        <>
        <button 
        onClick={scrollLeft} 
        className='absolute top-[50%] -translate-y-1/2 left-1 min-[600px]:left-3 flex text-[25px] items-center p-2 justify-center   rounded-full
         bg-black text-white'><FaChevronLeft/></button>
        <button onClick={scrollRight} className='absolute top-[50%]  
         -translate-y-1/2 right-1 min-[600px]:right-3 flex items-center justify-center text-[25px] p-2 rounded-full
          bg-black text-white'><FaChevronRight/></button>
        </>
     }
    </div>
  )
}

export default HomeBrandLogoContainer