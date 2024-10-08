import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function HomeBrandSection() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
   <section className="flex max-lg:flex-col justify-center py-5 items-center mx-auto w-[100%] xlg:w-[95%] min-h-screen h-fit ">
    <figure className="relative w-[80%] m-5 lg:w-[40%]" data-aos="fade-left">
      <img src="https://mkpmobility.com/wp-content/uploads/2020/05/brands-1-610x433.jpg" alt="" className="h-[300px] md:h-[350px] lg:h-[500px] w-full relative z-10" />
      <div className="absolute top-[30px] left-[30px] w-full h-full bg-black"></div>
    </figure>

    <div className="flex max-lg:mt-[40px] flex-col justify-center w-[90%] max-lg:mx-auto lg:w-[60%] xlg:w-[55%] gap-1 sm:gap-3 text-[17px] pl-2 sm:pl-10" data-aos="fade-right">
      <p className="text-[17px] sm:text-[20px] uppercase font-semibold text-blue-500">Building strategic partnerships with industry leaders.</p>
      <h5 className="text-[25px] sm:text-[35px] font-bold">Our Brand Partners</h5>
      <p className="font-semibold p-2 max-sm:text-[15px]">
      With a proud legacy of 25 years in the automotive parts trade, adhyan Group has established itself as a beacon of excellence in the industry. 
      Our longstanding partnerships with Indias most reputable automotive OE brands enable us to offer genuine and premium quality products, 
      ensuring the safety and satisfaction of vehicle owners. As one of Indias leading auto parts distributors, we take pride in our unwavering 
      commitment to quality, reliability, and customer satisfaction.
      At adhyan Group, we have built a reputation for nurturing long-term relationships with our clients, 
      fostering trust and loyalty through our expertise and dedication. Our impressive portfolio boasts an array of esteemed clients across multiple verticals,
       a testament to our versatility and adaptability. With a deep understanding of the automotive landscape and a passion for innovation, we continue to push
        boundaries, setting new benchmarks in the industry.
      </p>
    </div>
   </section>
  )
}

export default HomeBrandSection