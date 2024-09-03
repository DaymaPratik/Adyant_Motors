import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function BrandsIntro() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section className="flex max-[956px]:flex-col gap-5 justify-center py-5 items-center mx-auto w-[100%] min-[1024px]:w-[95%] min-h-screen h-fit ">
  

    <div className="flex max-[956px]:mt-[20px] flex-col justify-center w-[90%] max-[956px]:mx-auto min-[956px]:w-[60%] min-[1024px]:w-[55%] gap-1 min-[600px]:gap-3 text-[17px] pl-2 min-[600px]:pl-10" data-aos="fade-right">
      <p className="text-[20px] uppercase font-semibold text-blue-500">Building strategic partnerships with industry leaders.</p>
      <h5 className="text-[30px] font-bold">Our Brand Partners</h5>
      <p className="font-semibold p-2 max-[500px]:text-[15px]">
      With a proud legacy of 25 years in the automotive parts trade, adhyan Group has established itself as a beacon of excellence in the industry. 
      Our longstanding partnerships with Indias most reputable automotive OE brands enable us to offer genuine and premium quality products, 
      ensuring the safety and satisfaction of vehicle owners. As one of Indias leading auto parts distributors, we take pride in our unwavering 
      commitment to quality, reliability, and customer satisfaction. <br /> <br />
      At adhyan Group, we have built a reputation for nurturing long-term relationships with our clients, 
      fostering trust and loyalty through our expertise and dedication. Our impressive portfolio boasts an array of esteemed clients across multiple verticals,
       a testament to our versatility and adaptability. With a deep understanding of the automotive landscape and a passion for innovation, we continue to push
        boundaries, setting new benchmarks in the industry.
      </p>
    </div>
    <div className="flex max-[956px]:mt-[20px] flex-col py-[60px] text-white justify-center w-[90%] max-[956px]:mx-auto min-[956px]:w-[60%] min-[1024px]:w-[55%] gap-1 
    min-[600px]:gap-3 text-[17px] pl-2 min-[600px]:pl-10 bg-center bg-no-repeat bg-cover 
    bg-[url('https://images.unsplash.com/photo-1500220621438-7f1c548f639a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" 
    data-aos="fade-left">
        <h5 className="text-[30px] font-bold">Our legacy is built on the pillars of:</h5>
        <ul className="font-semibold p-2 max-[500px]:text-[15px]" >
            <li>- Unwavering commitment to quality and safety</li>
            <li>- Continuous innovation and improvement</li>
            <li>- Long-term relationships with a diverse client base</li>
            <li>- Expertise in multiple verticals, ensuring comprehensive solutions</li>
            <li>- Robust partnerships with leading automotive OE brands</li>
        </ul>
    </div>
   </section>
  )
}

export default BrandsIntro