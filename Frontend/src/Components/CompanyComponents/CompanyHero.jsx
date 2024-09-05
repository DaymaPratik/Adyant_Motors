
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CompanyHero() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])

  return (
    <main className="relative bg-fixed h-fit min-h-[70vh] max-xlg:pt-[100px] md:min-h-[90vh] w-[100%] flex flex-col justify-center items-center gap-1 text-center text-white
   bg-[url('https://images.unsplash.com/photo-1495837139561-4a6359962783?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
   bg-no-repeat bg-center bg-cover">

    <h1 className="text-[35px] md:text-[50px] font-extrabold " data-aos="fade-left">Our Companies</h1>
    <div className="text-[20px] md:text-[25px]  font-semibold  mt-5" data-aos="fade-up">
    <p>
        <Link to={"/"}> <span className='border-b-2 border-[#ff0000]' >Home </span></Link>
          <span className='text-[#ff0000] text-[30px] font-extrabold'> &gt; </span> 
        <Link to={"/about-us"}> <span  className='border-b-2 border-[#ff0000]'> About Us </span></Link>
         <span className='text-[#ff0000] text-[30px] font-extrabold'> &gt; </span> 
         <span> Our Companies</span>
      </p>
    </div>
   </main>
  )
}

export default CompanyHero