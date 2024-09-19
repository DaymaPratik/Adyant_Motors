import ContactForm from "./ContactFrom"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function ContactFormBox() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <>
    <main className='flex justify-end my-10 items-center w-[90%] min-h-[100vh] h-fit mx-auto relative '>
    <figure className='max-md:hidden w-[70%] lg:w-[55%] absolute top-0 left-0' data-aos="fade-right">
        <img src="contact1.jpg" alt="" 
        className='h-[100vh] w-full'/>
    </figure>
    <section className="max-md:mx-auto w-[95%] sm:w-[75%] md:w-[70%] lg:w-[55%] z-10  rounded-md relative 
    bg-[url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat" data-aos="fade-left">
        <ContactForm/>      
    </section>
   </main>
   <p className="text-center font-semibold py-2 text-[17px] sm:text-[20px] lg:text-[25px] mb-5">We will get back to you soon or call us <span className="text-blue-700 font-bold">+919876543210</span>   </p>
    </>
  )
}

export default ContactFormBox