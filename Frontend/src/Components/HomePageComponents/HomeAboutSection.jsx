
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
      <div className="max-[768px]:text-center w-[95%] min-[1024px]:w-[90%] min-[1256px]:w-[85%] mx-auto">
        <span className="font-extrabold text-[15px] text-[#ff0000] block mb-0 min-[768px]:mb-[-10px]">Since 1999</span>
        <h2 className="text-[27px] min-[600px]:text-[30px] min-[768px]:text-[35px] min-[956px]:text-[40px] font-bold">The industry leader in genuine automotive parts distribution.</h2>
      </div>
      <section className="min-[768px]:flex justify-center my-[50px]  items-center w-[100%] min-[1024px]:w-[90%] min-[1256px]:w-[85%] mx-auto gap-[5%]">
        <p data-aos="fade-right" className="max-[768px]:text-center p-3 text-[15px] min-[500px]:text-[17px] min-[1024px]:text-[20px] w-[90%] max-[768px]:mx-auto min-[768px]:w-[60%] min-[1024px]:w-[50%] ">
          Adyant Automotives began its journey in 1999 as a small shop called Saket Auto Spares, specializing in two-wheeler spare parts. Over the years,
          the business has expanded significantly, branching out into multiple ventures within the automobile industry. This growth is a testament to the 
          company’s commitment to quality and customer service. Today, Adyant Automotives is a recognized name in the industry, with ambitions to further
          expand its reach by supplying genuine auto parts globally. The company’s evolution from a single shop to a multifaceted enterprise highlights 
          its resilience and dedication to excellence in the automotive sector.
        </p>
        <figure data-aos="fade-left" className="w-[85%] max-[768px]:mx-auto min-[768px]:w-[30%] min-[1024px]:w-[40%] relative">
        <img src="/gear.avif" alt="" className="h-[330px] min-[1024px]:h-[400px] z-[10] relative" />
        <div className='absolute w-full h-full bg-black top-[10px] left-[-10px] min-[956px]:top-[35px] min-[956px]:left-[-35px] '>
        
        </div> 
        </figure>
      </section>

      <MisssionVision/>

    </main>
  );
}

export default HomeAboutSection;
