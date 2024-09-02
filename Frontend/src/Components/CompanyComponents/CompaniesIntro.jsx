import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function CompaniesIntro() {
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <main className="flex justify-center py-[50px] text-center items-center gap-5 flex-col min-h-[60vh] h-fit">
   <h3 className="font-bold text-[25px] min-[400px]:text-[30px] min-[768px]:text-[40px]" data-aos="fade-left">Who We are ?</h3>
   <p className="text-[15px] min-[400px]:text-[17px] min-[768px]:text-[20px] w-[85%] min-[600px]:w-[70%] mx-auto" data-aos="fade-left">
   Founded in 1999 in Jalna, Maharashtra, Adyant Automotives began its journey as Saket Motorcycles, operating from a small basement office. Initially
   a distributor for select Indian component manufacturers, the company embarked on a grassroots approach, visiting villages and shops across the region. Through unwavering dedication and strategic partnerships, Adyant has evolved into one of 
   India most respected names in automotive parts distribution.
Leveraging its strong foundation of business acumen and industry relationships, Adyant has redefined the distribution landscape. Today, the company proudly represents top automotive brands including Honda, 
Bajaj, Motul, TVS, Royal Enfield, CEAT, Steelbird, and many others.
Adyant Automotives is a company deeply rooted in integrity and trust, embodying the universal spirit of Vasudhaiva Kutumbakam – the world is one family.</p>
  </main>
  )
}

export default CompaniesIntro