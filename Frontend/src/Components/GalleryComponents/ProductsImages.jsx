import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState} from 'react';
import LargeImageBox from './LargeImageBox';
function ProductsImages() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
    const [large,setLarge]=useState(false);
    const [largeImgSrc,setLargeImgSrc]=useState("")
    const handleLarge=(e)=>{
        setLarge(true)
        console.log(e.target.src);
        setLargeImgSrc(e.target.src);
    }
  return (
   <>
     <section className='grid relative grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 p-2 min-[768px]:p-5 w-[98%] min-[768px]:w-[90%] mx-auto'  data-aos="fade-left">
   
   <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge}  className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
    <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  
   className='block h-[200px] min-[400px]:h-[300px] w-full' onClick={handleLarge}/> 
   <img src="https://plus.unsplash.com/premium_photo-1672423156600-7046441ff048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNzcnxlbnwwfHwwfHx8MA%3D%3D"
    alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://plus.unsplash.com/premium_photo-1664013683829-b9fb1d79e5f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://plus.unsplash.com/premium_photo-1672574474189-38a824d676c4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt=""  onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://plus.unsplash.com/premium_photo-1684769161409-f6de69d3f274?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""  onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""  onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
   <img src="https://images.unsplash.com/photo-1522071834198-118cc083b3f7?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   alt="" onClick={handleLarge} className='block h-[200px] min-[400px]:h-[300px] w-full'/>
    


   

</section>
{large && (
 <LargeImageBox setLarge={setLarge} setLargeImgSrc={setLargeImgSrc} largeImgSrc={largeImgSrc}/>
)}
   </>
  )
}

export default ProductsImages