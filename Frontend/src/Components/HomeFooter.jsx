
function HomeFooter() {
  return (
    <footer className="bg-black h-fit min-h-[60vh] px-[2%] jusitfy-iems-center py-10 grid grid-col-1 min-[500px]:grid-cols-2 min-[1024px]:grid-cols-4  
      text-white text-[16px] ">


        <section className="flex flex-col  max-[500px]:items-center  py-[20px] min-[600px]:py-[40px] w-[100%] min-[1024px]:py-[80px]  gap-5">
            <img src="/logo.png" alt="" className="h-[80px] block w-[80px] mx-auto"/>
            <p className="text-[25px] max-[350px]:text-[30px] text-center font-semibold">Adyant Motors</p>
        </section>

        <section  className="flex flex-col  max-[500px]:items-center  w-[100%] pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] p-[15px]  gap-3 ">
            <h6 className="text-red-400  text-[25px] font-bold ">Contact Us</h6>
            <p className=" text-[13px]  min-[1024px]:text-[14px] ">
            <span className="font-bold">
             Email : 
            </span>
            <span> Adyant123@gmail.com</span>
            </p>
            <p>
            <span className="font-bold">
             Phone : 9876543210
            </span>
            </p>
        </section>
        
        <section  className="flex flex-col  max-[500px]:items-center  w-[100%]   pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] p-[20px]    gap-3  ">
            <h6 className="text-red-400  text-[25px] font-bold ">Quick Links</h6>
            <ul className=" flex-col flex   gap-1">
                <li className="cursor-pointer   hover:text-[red] duration-200 w-fit ease-in border-2 border-transparent  hover:border-b-[red]">Awards & Recognization</li>
                <li className="cursor-pointer    hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Leadership Team</li>
                <li className="cursor-pointer  hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Investor Relation</li>
            </ul>
        </section>

        <section  className="flex flex-col  max-[500px]:items-center   w-[100%] pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] p-[15px]    gap-3">
            <h6 className="text-red-400  text-[25px] font-bold ">Loacte Us</h6>
            <address className="font-normal   max-[400px]:text-[12px]">
           <span className="font-bold text-[17px] ">
             Address :  
            </span>
             survey no. 45/46, Panchmukhi nagar, Plot no.11438, 66A, Jalna - Aurangabad Rd, behind satish motors, Jalna Industrial Area MIDC, Jalna, Maharashtra 431213
            </address>
        </section>

      
    </footer>
  )
}

export default HomeFooter