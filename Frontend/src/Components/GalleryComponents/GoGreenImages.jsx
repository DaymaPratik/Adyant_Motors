import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState} from 'react';
import LargeImageBox from './LargeImageBox';
function GoGreenImages({large,setLarge,settingLarge}) {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
    
    const [largeImgSrc,setLargeImgSrc]=useState("")
    const handleLarge=(e)=>{
        setLarge(true)
        console.log(e.target.src);
        setLargeImgSrc(e.target.src);
    }
   
  return (
   <>
     <section onClick={settingLarge}  className='grid relative grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 p-2 md:p-5 w-[98%] md:w-[80%] mx-auto'  data-aos="fade-left">
   
     <img src="/gogreen/ggimg.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
  <img src="/gogreen/ggimg1.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg2.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg3.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg4.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg5.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg7.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg8.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg9.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg10.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg11.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
    <img src="/gogreen/ggimg12.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg13.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
    <img src="/gogreen/ggimg14.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="/gogreen/ggimg15.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
    


   

</section>
{large && (
   <LargeImageBox setLarge={setLarge} setLargeImgSrc={setLargeImgSrc} largeImgSrc={largeImgSrc}/>
)}
   </>
  )
}

export default GoGreenImages