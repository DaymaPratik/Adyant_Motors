import { TiTick } from "react-icons/ti";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function CareersBenifitsSection() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])

    let delay=100
    const benifitsArray=[
        {
            title:"Provident Fund",
            subject:""
        },
        {
            title:"Health Insurance",
            subject:""
        },
        {
            title:"Banking Support",
            subject:""
        },
        {
            title:"Paid Leaves",
            subject:"Available after 1 year service"
        },
        {
            title:"Associations",
            subject:"With Top Brands of the Country"
        },
        {
            title:"Oppurtunities",
            subject:"To gain Knowledge and Experience"
        },
        {
            title:"Ex-Gratia",
            subject:"Diwali Bonus & Performance Incentives"
        },
        {
            title:"Healty Working Enivironment",
            subject:""
        },
    ]
  return (
   <main className="min-h-[70vh] h-fit  text-center" >
    <h4 className="font-bold text-[30px] my-10" data-aos="fade-left">Benifits</h4>
    <section className="grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  xlg:grid-cols-4  w-[90%] md:w-[80%] mx-auto my-10" data-aos="fade-left">     
   
        {
            benifitsArray.map((item)=>{
                delay=delay+50;
                return(
                <div key={item.title} className="border-[1px] scale-up-105 border-[#9b9a9b]   text-center p-5 hover:text-white hover:border-none hover:shadow-[0px_0px_10px_3px_black] hover:bg-[#323c64]
              transition duration-[300ms] ease-in " data-aos="fade-left" data-aos-delay={delay}>
                    <div className="text-[25px] md:text-[30px] text-white  bg-[#000000] mx-auto w-fit text-center p-2 min-[768px]:p-3 rounded-[50%]" >
                       <TiTick />
                    </div>
                    <p className="py-3 md:py-5 font-semibold text-[16px] xs:text-[18px] md:text-[20px]" >{item.title}</p>
                    <p className="text-[13px] font-semibold md:text-[15px]">{item.subject}</p>
                </div>
                )
            })
        }
    </section>
   </main>
  )
}

export default CareersBenifitsSection