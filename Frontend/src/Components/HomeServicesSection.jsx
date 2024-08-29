
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
function HomeServicesSection() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <main className="flex justify-center items-center w-[100%] mx-auto h-fit min-h-screen ">
      <section className="w-[100%] max-[1024px]:text-white 
      max-[1024px]:bg-[url('https://images.unsplash.com/photo-1533666834526-903b11416fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center max-[1024px]:mx-auto min-[1024px]:w-[50%] font-semibold text-[20px]  pl-[20px]">
        <div  data-aos="fade-right" className="flex flex-col mb-5 gap-2 p-3">
        <p className="font-bold uppercase">Building the future,preserving the past</p>
        <h5 className="font-bold text-[35px]"> Genuine Products and  <br />Top-Notch Infrastructure</h5>
        <p className='text-[18px] pr-10'>
          Our Group of companies is one of the largest automobile spare parts
          distributors in India. we sell over 50,000 SKUs and cater to over
          3,000 customers across the globe. Sophisticated warehousing facilities
          with state of the art IT infrastructure enables smooth procurement and
          deliveries.
        </p>
        </div>

       
        <ul className="p-3 pl-5"  data-aos="fade-right">
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Minimal Fan Fatigue</li>
        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Minimal Parts Movement</li>

        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Specialised Material Handling Equipment</li>

        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Modern Racking. Built To Suit</li>

        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Own Fleet Of Delivery Vehicles</li>
           
        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Scientifically Designed Layout</li>
           
        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Sensor Lighting</li>

        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Rain Water Harvesting</li>

        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Organic Farming & Tree Plantations</li>
        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Skylights</li>
        </div>
        <div className='flex justify-start items-center gap-1'>
            <IoCheckmarkDoneSharp/>
            <li>Wind-Driven Roof Ventilator</li>
        </div>
           
            
            
          </ul>
        
      </section>
      <figure className="max-[1024px]:hidden w-[50%] h-[100%]">
        <img src="/gear.avif" alt="" className="h-[100%]" data-aos="fade-left"/>
      </figure>
    </main>
  );
}

export default HomeServicesSection;
