import { useState , useEffect} from "react"
import 'aos/dist/aos.css';
import AOS from 'aos';
function HomeYearSection() {
    const [showYear,setShowYear]=useState([true,false,false,false]);
    useEffect(()=>{
        AOS.init({duration:1000})
    },[showYear])
  return (
    <main className={`w-[100%] bg-[#000000] mx-auto mt-[50px] flex justify-end items-end h-fit min-h-screen text-[12px] md:text-[17px] font-semibold  gap-1 text-white relative 
        
    `} >
       {showYear[0] && 
        <section className={`absolute  bg-no-repeat bg-center bg-cover transititon duration-300 ease-in h-full w-full bg-fixed
            bg-[url('https://images.unsplash.com/photo-1464979209783-2e8c3e2a5538?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
              
             `} data-aos="fade-left"></section>
       }
         {
            showYear[1] && 
            <section className={`absolute  bg-no-repeat bg-center bg-cover transititon duration-300 ease-in h-full w-full bg-fixed
                bg-[url('https://images.unsplash.com/photo-1587906092407-0a93af0100a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                 `} data-aos="fade-left"></section>
         }
        {
            showYear[2] && 
            <section className={`absolute  bg-no-repeat bg-center bg-cover transititon duration-300 ease-in h-full w-full bg-fixed
                bg-[url('https://images.unsplash.com/photo-1633059170528-25950f7a1223?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                `} data-aos="fade-left"></section>
        }
         {
            showYear[3] && 
            <section className={`absolute  bg-no-repeat bg-center bg-cover transititon duration-300 ease-in h-full w-full bg-fixed
                bg-[url('https://images.unsplash.com/photo-1587906249071-4d9307be2648?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                `} data-aos="fade-left"></section>
         }
        <section className="grid grid-cols-1 md:grid-cols-4 items-end  relative h-fit bottom-0 left-0">
        <div className={`border-[1px] border-white p-2 md:p-4 h-fit ${showYear[0] ?  'bg-blue-400 border-none' :  'bg-[#0000005e]'} transititon duration-150 ease-in`}>
            <h3 className="text-[30px] md:text-[40px] font-bold cursor-pointer" onClick={()=>{setShowYear([true,false,false,false])}}>1999</h3>
            <p className={`${showYear[0] ? 'visible': 'hidden'} w-full px-2`}>we founded saket motorcycles in 1999 offering a comprehensive range of genuine spare parts. By 2015, through dedication and customer focus,
                 we had risen to become one of India’s leading genuine spare parts dealers with largest infrasctucture available in all over maharashtra state.</p>
        </div>
        <div className={`border-[1px] border-white p-2 md:p-4 h-fit ${showYear[1] ?  'bg-blue-400  border-none' :  'bg-[#0000005e]'} transititon duration-150 ease-in`}>
            <h3 className="text-[30px] md:text-[40px] font-bold cursor-pointer" onClick={()=>{setShowYear([false,true,false,false])}}>2010</h3>
            <p className={`${showYear[1] ? 'visible': 'hidden'} w-full px-2`}>In 2010, we became an authorized HMSI Honda two-wheeler dealer in our respective district Jalna of state Maharasthra.Till now alomsot customers are satisfied</p>
        </div>
        <div className={`border-[1px] border-white p-2 md:p-4 h-fit ${showYear[2] ?  'bg-blue-400  border-none' :  'bg-[#0000005e]'} transititon duration-150 ease-in`}>
            <h3 className="text-[30px] md:text-[40px] font-bold cursor-pointer" onClick={()=>{setShowYear([false,false,true,false])}}>2018</h3>
            <p className={`${showYear[2] ? 'visible': 'hidden'} px-2 w-full`}> With an unwavering focus on growth, we expanded our operations to include the Honda genuine spare parts distributorship, establishing a strong foothold across Maharashtra.</p>
        </div>
        <div className={`border-[1px] border-white p-2 md:p-4 h-fit ${showYear[3] ?  'bg-blue-400 border-none' :  'bg-[#0000005e]'} transititon duration-150 ease-in`}>
            <h3 className="text-[30px] md:text-[40px] font-bold cursor-pointer" onClick={()=>{setShowYear([false,false,false,true])}}>2021</h3>
            <p className={`${showYear[3] ? 'visible': 'hidden'} px-2 w-full`}>With two decades of experience in the automotive industry, the Group has cultivated an extensive distribution system by the name of adyant automotives reaching customers worldwide.</p>
        </div>
        </section>

    </main>
  )
}
export default HomeYearSection
