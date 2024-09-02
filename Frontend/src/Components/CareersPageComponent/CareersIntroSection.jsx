import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function CareersIntroSection() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
   <main className="flex justify-center text-center items-center gap-5 flex-col min-h-[70vh] h-fit">
     <p className="font-bold text-[17px] min-[400px]:text-[20px] text-blue-800 " data-aos="fade-left">Work With Us !</p>
    <h3 className="font-bold text-[25px] min-[400px]:text-[30px] min-[768px]:text-[40px]" data-aos="fade-left">A passion for work and <br className='max-[400px]:hidden'/>
    good at what you do ?</h3>
    <p className="text-[15px] min-[400px]:text-[17px] min-[768px]:text-[20px] w-[85%] min-[600px]:w-[70%] mx-auto" data-aos="fade-left">MKP Mobility has an ocean of opportunities. Our proactive environment nurtures employees to be their best selves and deliver results. 
        What we look at is your merit,drive & ambition and do everything in our power to catalyse your growth. At MKP Mobility,
         your career possibilities are limitless and dynamic.</p>
   </main>
  )
}

export default CareersIntroSection