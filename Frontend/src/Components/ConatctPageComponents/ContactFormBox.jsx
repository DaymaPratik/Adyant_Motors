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
    <figure className='max-[768px]:hidden w-[70%] .in-[956px]:w-[55%] absolute top-0 left-0' data-aos="fade-right">
        <img src="https://plus.unsplash.com/premium_vector-1724125271400-1a4647e26389?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
        className='h-[100vh] w-full'/>
    </figure>
    <section className="max-[768px]:mx-auto w-[100%] min-[600px]:w-[85%] min-[768px]:w-[70%] min-[956px]:w-[55%] z-10  rounded-md relative 
    bg-[url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat" data-aos="fade-left">
        <ContactForm/>      
    </section>
   </main>
   <p className="text-center font-semibold py-2 text-[17px] min-[600px]:text-[20px] min-[956px]:text-[25px] mb-5">We will get back to you soon or call us <span className="text-blue-700 font-bold">+919876543210</span>   </p>
    </>
  )
}

export default ContactFormBox