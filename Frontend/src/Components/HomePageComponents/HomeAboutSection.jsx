
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import MisssionVision from '../MisssionVision';

function HomeAboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="h-fit min-h-screen w-full  flex flex-col justify-center items-center my-[50px]">
      <div className="max-md:text-center w-[95%] lg:w-[90%] xl:w-[85%] mx-auto">
        <span className="font-extrabold text-[15px] text-[#ff0000] block mb-0 md:mb-[-10px]">Since 1999</span>
        <h2 className="text-[27px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold">The industry leader in genuine automotive parts distribution.</h2>
      </div>
      <section className="max-[768px]:flex-col flex justify-center my-[50px]  items-center w-[100%] xlg:w-[90%] xl:w-[85%] mx-auto gap-[5%]">
        <p  className="max-md:text-center p-3 text-[15px] sm:text-[17px] lg:text-[20px] w-[90%] max-md:mx-auto md]:w-[60%] xlg:w-[50%] ">
          Adyant Automotives began its journey in 1999 as a small shop called Saket Auto Spares, specializing in two-wheeler spare parts. Over the years,
          the business has expanded significantly, branching out into multiple ventures within the automobile industry. This growth is a testament to the 
          company’s commitment to quality and customer service. Today, Adyant Automotives is a recognized name in the industry, with ambitions to further
          expand its reach by supplying genuine auto parts globally. The company’s evolution from a single shop to a multifaceted enterprise highlights 
          its resilience and dedication to excellence in the automotive sector.
        </p>
        <figure  className="w-[85%] max-md:mx-auto md:w-[30%] xlg:w-[40%] relative">
        <img src="/gear.avif" alt="" className="h-[330px] xlg:h-[400px] z-[10] relative" />
        <div className='absolute w-full h-full bg-black top-[10px] left-[-10px] lg:top-[35px] lg:left-[-35px] '>
        
        </div> 
        </figure>
      </section>

      <MisssionVision/>

    </main>
  );
}

export default HomeAboutSection;
