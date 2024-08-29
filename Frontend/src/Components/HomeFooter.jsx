
function HomeFooter() {
  return (
    <footer className="bg-black h-fit min-h-[50vh] max-[600px]:place-items-start max-[1024px]:place-items-center py-10 grid grid-col-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-2   text-white text-[16px] ">

        <section className="flex flex-col  pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] pl-[20px] gap-5 ">
            <img src="../public/logo.png" alt="" className="h-[80px] min-[600px]:mx-auto w-[80px] "/>
            <p className="text-[20px] min-[600px]:text-center">A Leading Distributor Of Genuine & Dependable Automotive Parts</p>
        </section>

        <section  className="flex flex-col pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] pl-[20px]    gap-5  ">
            <h6 className="text-red-400  text-[25px] font-bold">Quick Links</h6>
            <ul>
                <li className="cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Awards & Recognization</li>
                <li className="cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Leadership Team</li>
                <li className="cursor-pointer hover:text-[red] duration-200 ease-in border-2 border-transparent w-fit hover:border-b-[red]">Investor Relation</li>
            </ul>
        </section>

        <section  className="flex flex-col pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] pl-[20px]   gap-5">
            <h6 className="text-red-400  text-[25px] font-bold">Loacte Us</h6>
            <address className="font-normal">
           <span className="font-bold text-[17px]">
             Address :  
            </span>
             survey no. 45/46, Panchmukhi nagar, Plot no.11438, 66A, Jalna - Aurangabad Rd, behind satish motors, Jalna Industrial Area MIDC, Jalna, Maharashtra 431213
            </address>
        </section>

        <section  className="flex flex-col pt-[20px] min-[600px]:pt-[40px] min-[1024px]:pt-[80px] pl-[20px]  gap-1 ">
            <h6 className="text-red-400  text-[25px] font-bold">Contact Us</h6>
            <p>
            <span className="font-bold">
             Email : 
            </span>
            Adyant123@gmail.com
            </p>
            <p>
            <span className="font-bold">
             Phone : 9876543210
            </span>
            </p>
        </section>
    </footer>
  )
}

export default HomeFooter