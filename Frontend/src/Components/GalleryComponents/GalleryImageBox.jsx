import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import InfraImages from './InfraImages';
import ProductsImages from './ProductsImages';
import CsrImages from './CsrImages';
import AwardsImages from './AwardsImages';
import TrainingImages from './TrainingImages';
import GoGreenImages from './GoGreenImages';
import EmployeeImages from './EmployeeImages';

function GalleryImageBox() {

    const [type,setType]=useState("Infrastructure")
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    },[])
  return (
    <main className="flex justify-center my-10 text-center items-center gap-5 flex-col min-h-[60vh] h-fit">
    <p className="font-bold text-[17px] xs:text-[20px] text-blue-800 " data-aos="fade-left">A Glance At!</p>
   <h3 className="font-bold text-[25px] xs:text-[30px] md:text-[40px]" data-aos="fade-left">Some Snapshots ?</h3>
    <div className='flex flex-wrap gap-2 sm:gap-4 md:gap-7 text-[13px] xs:text-[17px] md:text-[20px] lg:text-[25px] font-semibold w-[100%] 
    items-center justify-center py-2 '>
        <p onClick={()=>{setType("Infrastructure")}} className={`${type === "Infrastructure" && "border-b-[3px] border-[#0000ff]"} hover:cursor-pointer duration-150  ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>Infrastructure</p>
        <p onClick={()=>{setType("Products")}} className={`${type === "Products" && "border-b-[3px] border-[#0000ff]"}  hover:cursor-pointer duration-150 ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>Products</p>
        <p onClick={()=>{setType("CRS")}} className={`${type === "CRS" && "border-b-[3px] border-[#0000ff]"}  hover:cursor-pointer duration-150 ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>CRS</p>
        <p onClick={()=>{setType("Awards")}} className={`${type === "Awards" && "border-b-[3px] border-[#0000ff]"}  hover:cursor-pointer duration-150 ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>Awards</p>
        <p onClick={()=>{setType("Training")}} className={`${type === "Training" && "border-b-[3px] border-[#0000ff]"}  hover:cursor-pointer duration-150 ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>Training</p>
        <p onClick={()=>{setType("Go Green")}} className={`${type === "Go Green" && "border-b-[3px] border-[#0000ff]"}  hover:cursor-pointer duration-150 ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>Go Green</p>
        <p onClick={()=>{setType("Employee Motivation")}} className={`${type === "Employee Motivation" && "border-b-[3px] border-[#0000ff]"}  hover:cursor-pointer duration-150 ease-in hover:border-b-[3px] hover:border-[#ff0000] hover:text-[#ff0000]`}>Employee Motivation</p>
    </div>

   {type === "Infrastructure"  &&  <InfraImages/>}
    {type === "Products"  &&  <ProductsImages/>}
    {type === "CRS"  &&  <CsrImages/>}
    {type === "Awards"  &&  <AwardsImages/>}
    {type === "Training"  &&  <TrainingImages/>}
    {type === "Go Green"  &&  <GoGreenImages/>}
    {type === "Employee Motivation"  &&  <EmployeeImages/>}
 

  </main>
  )
}

export default GalleryImageBox