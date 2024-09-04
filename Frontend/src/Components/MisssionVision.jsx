
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


  
function MisssionVision() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section className='mx-auto my-[50px]  w-[95%] lg:w-[90%]'>
      <p className="font-bold text-center text-[17px] xs:text-[20px] text-blue-800 " data-aos="fade-left">Foundation</p>
      <h3 className="font-bold text-center text-[25px] xs:text-[30px] md:text-[40px] mb-10" data-aos="fade-left">Our Core Values</h3>
      <div className=" grid-cols-1 h-fit py-4 grid sm:grid-cols-2  text-[17px] md:text-[23px] gap-5 ">
        <div data-aos="fade-up" className="mx-auto hover:shadow-[0px_0px_5px_1px_black] scale-up-105 transition duration-300 ease-in
         w-[90%] text-center sm:w-[95%] h-[100%] py-4 p-2 border-none bg-[#f1f6fa] rounded-lg drop-shadow-xl">
          <h3 className="text-[30px] font-semibold">Vision</h3>
          <p className='h-full p-2'>Delivering authentic, high-quality automotive spare parts to maintain vehicle integrity and enhanced its profomance for customer satisfaction.</p>
        </div>
        <div data-aos="fade-up" className="mx-auto w-[90%] scale-up-105  hover:shadow-[0px_0px_5px_1px_black] h-[100%] transition duration-300 ease-in text-center min-[550px]:w-[95%] py-4  p-2 border-none bg-[#f1f6fa] 
        rounded-lg drop-shadow-xl">
          <h3 className="text-[30px] font-semibold">Mission</h3>
          <p className='h-full p-2'>To be the leading provider of genuine automotive spare parts, setting the industry standard for quality, reliability, and customer service all over world.</p>
        </div>
      </div>
      </section>
  )
}

export default MisssionVision