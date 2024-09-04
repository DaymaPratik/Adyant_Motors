
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
function HomeServicesSection() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <main className="flex justify-center items-center my-[50px] p-2 sm:p-5  w-[98%] mx-auto h-fit min-h-screen ">
      <section className="w-[100%] max-xlg:text-white 
      max-xlg:bg-[url('https://images.unsplash.com/photo-1533666834526-903b11416fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
       bg-no-repeat bg-cover bg-center max-xlg:mx-auto xlg:w-[50%] font-semibold py-[30px]    pl-[20px]">
        <div  data-aos="fade-right" className="flex flex-col mb-5 gap-2 p-3">
        <p className="font-bold uppercase text-blue-500 text-[16px] sm:text-[20px]">Building the future,preserving the past</p>
        <h5 className="font-bold text-[25px] sm:text-[30px] xlg:text-[35px]"> Genuine Products and  <br className='max-[1024px]:hidden'/>Top-Notch Infrastructure</h5>
        <p className='text-[14px] sm:text-[17px] pr-10'>
          Our Group of companies is one of the largest automobile spare parts
          distributors in India. we sell over 50,000 SKUs and cater to over
          3,000 customers across the globe. Sophisticated warehousing facilities
          with state of the art IT infrastructure enables smooth procurement and
          deliveries.
        </p>
        </div>

       
        <ul className="p-3 sm:pl-5"  data-aos="fade-right " >
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Minimal Fan Fatigue</li>
        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Minimal Parts Movement</li>

        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Specialised Material Handling Equipment</li>

        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Modern Racking. Built To Suit</li>

        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Own Fleet Of Delivery Vehicles</li>
           
        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Scientifically Designed Layout</li>
           
        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Sensor Lighting</li>

        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Rain Water Harvesting</li>

        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]' >
            <IoCheckmarkDoneSharp/>
            <li>Organic Farming & Tree Plantations</li>
        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Skylights</li>
        </div>
        <div className='flex justify-start items-center gap-1 text-[17px] sm:text-[23px]'>
            <IoCheckmarkDoneSharp/>
            <li>Wind-Driven Roof Ventilator</li>
        </div>
           
            
            
          </ul>
        
      </section>
      <figure className="max-xlg:hidden w-[50%] h-[600px]">
        <img src="/gear.avif" alt="" className="h-[100%]" data-aos="fade-left"/>
      </figure>
    </main>
  );
}

export default HomeServicesSection;
