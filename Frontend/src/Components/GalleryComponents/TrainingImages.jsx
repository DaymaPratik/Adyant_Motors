import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState} from 'react';
import LargeImageBox from './LargeImageBox';
function TrainingImages({large,setLarge,settingLarge}) {
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
    <section onClick={settingLarge} className='grid relative grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 p-2 md:p-5 w-[98%] md:w-[80%] mx-auto'  data-aos="fade-left">
   
   <img src="./training/train1.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="./training/train2.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="./training/train3.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="./training/train4.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="./training/train5.jpeg" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
  


   

</section>
{large && (
   <LargeImageBox setLarge={setLarge} setLargeImgSrc={setLargeImgSrc} largeImgSrc={largeImgSrc}/>
)}
   </>
  )
}

export default TrainingImages