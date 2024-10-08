import { MdClose } from "react-icons/md";
// eslint-disable-next-line react/prop-types
function LargeImageBox({setLarge,setLargeImgSrc,largeImgSrc}) {
  return (
    <div className='centered-div '>
       <p onClick={() => {setLarge(false);setLargeImgSrc("")}} className='text-[40px] py-2 font-semibold text-center text-[#ff0000] '><MdClose className="block mx-auto"/></p>
       <img src={largeImgSrc} alt="" className='h-full w-full'/>
   </div>
  )
}

export default LargeImageBox