import 'aos/dist/aos.css';
import AOS from 'aos';
import {  useEffect } from 'react'
function HomeWhatWeDo2() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
    let whatWeDoArray=[
        {
         src:"https://plus.unsplash.com/premium_photo-1661881497978-f1f376fa7490?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         details:"Loading"
        },
        {
           src:"https://images.unsplash.com/photo-1718176623295-a76bfb18de37?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           details:"Packing"
        },
        {
           src:"https://images.unsplash.com/photo-1530907487668-af02f65b4afe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",            
             details:"Exporting"
        },
    ]
    let delay=100;
  return (
   <main className="min-h-[60vh] flex flex-col my-[50px] gap-5 justify-center items-center h-fit text-center w-[95%] mx-auto">
    <h2 className="font-bold text-center text-[25px] xs:text-[30px] md:text-[40px] ">Packing And Loading</h2>
    <p className="font-bold text-center text-[17px] xs:text-[20px] text-blue-800 ">Services</p>
    <section className="grid grid-cols-1 sm:grid-cols-2 my-5 md:grid-cols-3 h-fit gap-5 lg:gap-10 w-[100%] mx-auto place-items-center justify-items-center" data-aos="fade-left" >
    {
        whatWeDoArray?.map((item,idx)=>{
            delay += 50;
            return( 
            <div key={idx} className="h-[350px] md:h-[400px] xlg:h-[600px] scale-up-105 relative hover:shadow-[0px_0px_10px_1px_#ff0000] w-full" data-aos-delay={delay} data-aos="fade-left">
                  <img src={item.src} alt="" className="h-full w-full"/>
                  <div className="absolute top-0 left-0 w-full h-full bg-[#f83939c4]  opacity-0 hover:opacity-100 transition ease-in duration-[300ms] flex items-center justify-center text-white p-4">
                    <p className="text-[25px] font-semibold md:text-[35px]  p-1 md:p-2 ">
                     {item.details}
                    </p>
                  </div>
            </div>
            )
        })
       }
        
    </section>
   </main>
  )
}

export default HomeWhatWeDo2