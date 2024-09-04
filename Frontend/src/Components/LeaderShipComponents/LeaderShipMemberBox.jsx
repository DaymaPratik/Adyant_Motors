import 'aos/dist/aos.css';
import AOS from 'aos';
import {  useEffect } from 'react'
function LeaderShipMemberBox() {
  useEffect(()=>{
    AOS.init({ duration: 1000 })
},[])
     let leaderArray=[
        {
            name:"Santosh Tiwari",
            designation:"Founder",
            imageSrc:"/SantoshTiwari.png",
            details:"He is the founder of the Group. He started working at the very young age of 16 and has over 50 years of experience in the Automotive parts trade. His innate entrepreneurial potential was realised when he finished his graduation in BSC. His expertise and strong foundation of ethics have led the Group to its successful position today. Other than his business accomplishments, he is also a philanthropist and has authored many self-help books that is distributed at no cost. He believes that every member of the family must work and earn to reach a goal of continuous growth."
        }
        ,
        {
            name:"Rishikesh Navandar",
            designation:"Co-Founder",
            imageSrc:"/RishikeshNavandar.png",
            details:"Co-founder and backbone of the Group, she takes care of the Accounts and Finance Departments. With a masters in English Literature, she started working with no knowledge of accounting. Today, she is a self-taught master that knows her craft well and leads a team of twenty senior and junior accountants."
        },
        {
            name:"Rohit Tiwari",
            designation:"Managing Director",
            imageSrc:"/RohitTiwari.png",
            details:"He took the torch from his father and is the second generation of the Group. After he underwent training with his father, he has kept in tune with the ethos of the Group. He believes that a successful business can be built through strong relationships and ethics. Under his leadership, he has made MKP Mobility a respected name in the Automotive Industry. Further, he is behind the Group’s association with the top Automotive brands in the country like Hero, Maruti, Tata, Royal Enfield, TVS, Honda and the expansion of operations throughout the state of Maharashtra."
        },
        {
            name:"Santosh Tiwari",
            designation:"Director",
            imageSrc:"https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details:"Youngest businessman of the family, he has high dreams for the future of the company. His passion for automobiles and cars encouraged him to pursue racing as a hobby. Like the perfectionists in the family, he too has excelled and holds various ranks across India as well as a National Championship trophy in motorsports. He has completed his studies in B.Tech and aims to grow the company operations by diversifying into other sectors."
        },
        {
            name:"Rishiskesh Navandar",
            designation:"Director",
            imageSrc:"https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details:"Driven with passion and interest in Automobiles, he was eager to join the thriving family business. After completing his studies in BTech and Masters in Entrepreneurship from Babson College in Boston, he spent a year in Mumbai to learn the aspects of the Group’s operations and business in a practical environment. With his skills honed, he has become an indispensable part of the Group. He was a key player in bringing brands, Idemitsu and CEAT under the Group’s umbrella."
        }
             
    ]
    let delay=100;
    return (
      <main className="grid grid-cols-1  sm:grid-cols-2 xlg:grid-cols-3  gap-3 md:gap-5 w-[95%] xl:w-[80%] mx-auto py-10 min-h-screen h-fit">

       {
        leaderArray.map((item,idx)=>{
          delay=delay+ 50;
            return (
        <section key={idx} className=" duration-200 hover:shadow-[0px_0px_3px_0px_black] relative text-center w-full h-[500px] shadow-md" data-aos="fade-left" data-aos-delay={delay}>
        <div className="relative w-full h-[80%]">
          <img
            src={item.imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#161414c4] border-2 border-black opacity-0 hover:opacity-100 transition ease-in duration-[300ms] flex items-center justify-center text-white p-4">
                    <p className="text-[13px] scale-up-105 md:text-[15px]  p-1 md:p-2 ">
                     {item.details}
                    </p>
                  </div>
                </div>
                <h5 className="text-[20px] md:text-[25px] font-bold my-2">{item.designation}</h5>
                <p className="text-[17px] md:text-[20px] my-2 font-semibold">{item.name}</p>
              </section>
            )
        })
       }
      </main>
    );
  }
  
  export default LeaderShipMemberBox;
  