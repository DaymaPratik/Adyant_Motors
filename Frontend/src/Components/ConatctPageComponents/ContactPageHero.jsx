import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function ContactPageHero() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
  <>
    <main className="relative h-fit min-h-[70vh] max-[1024px]:pt-[100px] min-[756px]:min-h-[90vh] w-[100%] flex flex-col justify-center items-center gap-1 text-center text-white
   bg-[url('https://images.unsplash.com/photo-1524214786335-66456317bde6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
   bg-no-repeat bg-center bg-cover">

    <h1 className="text-[35px] min-[756px]:text-[50px] font-extrabold " data-aos="fade-left">Contact Us</h1>
    <div className="text-[20px] min-[756px]:text-[25px]  font-semibold  mt-5" data-aos="fade-up">
      <p>Home <span> &gt;</span> Contact Us</p>
    </div>
   </main>
  </>
  )
}

export default ContactPageHero