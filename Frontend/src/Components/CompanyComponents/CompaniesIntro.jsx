import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function CompaniesIntro() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <main className="flex justify-center py-[50px] text-center items-center gap-5 flex-col min-h-[60vh] h-fit">
   <h3 className="font-bold text-[25px] min-[400px]:text-[30px] min-[768px]:text-[40px]" data-aos="fade-left">Who We are ?</h3>
   <p className="text-[17px] min-[400px]:text-[20px] min-[768px]:text-[25px] w-[85%] min-[600px]:w-[70%] mx-auto" data-aos="fade-left">
   Our group is a national enterprise comprising five firms, strategically positioned across
    the automotive sector,  each bringing unique strengths, specialized expertise, and 
    a shared dedication to quality, innovation, and customer satisfaction
   </p>
  </main>
  )
}

export default CompaniesIntro