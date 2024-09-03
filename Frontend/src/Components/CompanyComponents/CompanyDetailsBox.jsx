import { useEffect } from "react"
import 'aos/dist/aos.css';
import AOS from 'aos';

function CompanyDetailsBox() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    let companiesDetailsArray=[
        {
            title:"SAKET MOTORCYCLES",
            details:"All great achievements have a humble beginning. Our journey began with the birth of Saket Motorcycles in 1999.with a small retail shop in jalna ,Maharashtra, distributing reputable vendor brands like SWISS, MAYCO CLUB, NRB BEARING, DIAMOND CHAIN KITS, REMSON CABLE, and SAI. Through dedication and hard work, we expanded our reach across Maharashtra starting wholesale and distribution business, partnering with OEM and other vendor brands like bajaj,hero,royal enfield,sai,steelbird etc.",
            extraDetails1:"A significant milestone was saket motorcycle’s association with Honda Motorcycle and Scooter India, one of the world's largest two-wheeler manufacturers. Today, Saket Motorcycles proudly caters to:",
            extraDetails2:"in and around Maharashtra. Our growth is a testament to our commitment to excellence and customer satisfaction. We're proud of our journey and look forward to many more years of serving the two-wheeler community!",
            extraDetailsArr:["- 50 authorized dealerships","- 80 authorized workshops","- 800 retailers"]
        },
        {
            title:"ADYANT AUTOMOTIVES",
            details:"Founded in 2022, Adyant Automotives has rapidly ascended to become a premier export house, captivating a substantial clientele across 10+ countries globally. With a clear vision and unwavering dedication, our firm is driven to become the go-to export hub for all spare parts requirements overseas. Our mission is to establish ourselves as industry experts, renowned for our exceptional quality, reliability, and customer-centric approach.Through our unwavering commitment to excellence, we aim to bridge the gap between global markets and the vast array of spare parts needed to keep vehicles running smoothly. Adyant Automotives is poised to revolutionize the industry, fostering growth, and setting new benchmarks in the automotive export sector.",
            extraDetails1:"",
            extraDetails2:"",
            extraDetailsArr:"",
        },
        {
            title:"DEVAASHVA HONDA",
            details:"Our founders envisioned a partnership with a leading two-wheeler brand, and it was a natural fit to join forces with Honda Motorcycle and Scooter India, one of the worlds largest two-wheeler manufacturers. With a strong foundation laid by the Honda partnership, Devaashva Automotives rapidly expanded its presence as a leading two-wheeler dealership, serving customers through a comprehensive network of four showrooms and 30 sub-dealers.",
            extraDetails1:"",
            extraDetails2:"",
            extraDetailsArr:"",
        },
        {
            title:"KESARI AUTOMOTIVES",
            details:"Launched in 2018, Kesari Automotives has secured a strong foothold in the market as a trusted supplier of genuine Honda spare parts. With a network exceeding 500 active retailers throughout Maharashtra, the firm ensures widespread availability of essential parts for Honda vehicles.",
            extraDetails1:"",
            extraDetails2:"",
            extraDetailsArr:"",
        },
        
    ]
  return (
   <main className="min-h-screen h-fit grid grid-cols-1 min-[768px]:grid-cols-2 w-[100%] mx-auto p-5 min-[768px]:p-10 gap-10  bg-no-repeat bg-center bg-cover bg-fixed
   bg-[url('https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      {
        companiesDetailsArray.map((item,idx)=>{
            return(
                <div className=" flex flex-col py-2 px-5 bg-[#00000096] text-white transition ease-in duration-500 hover:shadow-[0px_0px_10px_5px_black] scale-up-105 rounded-md" key={idx} data-aos="fade-left">
                    <h4 className="text-[20px] min-[600px]:text-[25px] min-[1024px]:text-[30px] text-center font-bold my-1">{item.title}</h4>
                    <p className="text-center text-[13px] min-[600px]:text-[15px] font-semibold my-2 px-1">{item.details}</p>
                    <p className="text-center text-[11px] min-[600px]:text-[14px] px-1">{item.extraDetails1}</p>
                    <ul className="text-[14px] min-[600px]:text-[17px] font-bold my-2">
                        <li> {item.extraDetailsArr[0]}</li>
                        <li> {item.extraDetailsArr[1]}</li>
                        <li> {item.extraDetailsArr[2]}</li>
                    </ul>
                    <p className="text-center text-[11px] min-[600px]:text-[14px]  px-1 pb-5">{item.extraDetails2}</p>
                </div>
            )
        })
      }
   </main>
  )
}

export default CompanyDetailsBox