
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function HomeAboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="h-fit min-h-screen w-full  flex flex-col justify-center items-center my-5">
      <div className="max-[768px]:text-center w-[95%] min-[1024px]:w-[90%] min-[1256px]:w-[85%] mx-auto">
        <span className="font-extrabold text-[15px] text-[#ff0000] block mb-[-10px]">Since 1999</span>
        <h2 className="text-[35px] min-[956px]:text-[40px] font-bold">The industry leader in genuine automotive parts distribution.</h2>
      </div>
      <section className="min-[768px]:flex justify-center mt-10  items-center w-[100%] min-[1024px]:w-[90%] min-[1256px]:w-[85%] mx-auto gap-[5%]">
        <p data-aos="fade-right" className="max-[768px]:text-center p-3 text-[17px] min-[1024px]:text-[20px] w-[90%] max-[768px]:mx-auto min-[768px]:w-[60%] min-[1024px]:w-[50%] ">
          Adyant Automotives began its journey in 1999 as a small shop called Saket Auto Spares, specializing in two-wheeler spare parts. Over the years,
          the business has expanded significantly, branching out into multiple ventures within the automobile industry. This growth is a testament to the 
          company’s commitment to quality and customer service. Today, Adyant Automotives is a recognized name in the industry, with ambitions to further
          expand its reach by supplying genuine auto parts globally. The company’s evolution from a single shop to a multifaceted enterprise highlights 
          its resilience and dedication to excellence in the automotive sector.
        </p>
        <figure data-aos="fade-left" className="w-[90%] max-[768px]:mx-auto min-[768px]:w-[30%] min-[1024px]:w-[40%] relative">
        <img src="../public/gear.avif" alt="" className="h-[350px] min-[1024px]:h-[400px] z-[10] relative" />
        <div className='absolute w-full h-full bg-black top-[20px] left-[-20px] min-[956px]:top-[50px] min-[956px]:left-[-50px] '>
        
        </div> 
        </figure>
      </section>

      <section className="  max-[550px]:flex-col flex justify-center items-center text-[17px] min-[768px]:text-[23px] gap-5 mx-auto my-[100px]  w-[95%] min-[956px]:w-[85%]">
        <div data-aos="fade-up" className="max-[550px]:mx-auto w-[90%] text-center min-[550px]:w-[45%] h-fit min-[768px]:min-h-[250px] p-2 border-none bg-[#f1f6fa] rounded-lg drop-shadow-xl">
          <h3 className="text-[30px] font-semibold">Vision</h3>
          <p>Delivering authentic, high-quality automotive spare parts to maintain vehicle integrity and enhance customer satisfaction.</p>
        </div>
        <div data-aos="fade-up" className="max-[550px]:mx-auto w-[90%] text-center min-[550px]:w-[45%] h-fit min-[768px]:min-h-[250px] p-2 border-none bg-[#f1f6fa] rounded-lg drop-shadow-xl">
          <h3 className="text-[30px] font-semibold">Mission</h3>
          <p>To be the leading provider of genuine automotive spare parts, setting the industry standard for quality, reliability, and customer service.</p>
        </div>
      </section>

    </main>
  );
}

export default HomeAboutSection;
