import { Link } from "react-router-dom";
function HomeFooter() {
  return (
    <footer className="bg-black py-20 h-fit grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-4  text-white text-base">
      <section className="flex flex-col items-center sm:pl-8 py-5 sm:py-10 w-full gap-5 ">
        <img src="/Adyant_Logo.png" alt="Logo" className="h-20 w-20 mx-auto" />
        <p className="text-2xl xxs:text-3xl font-semibold text-center">Adyant Motors</p>
      </section>

      <section className="flex flex-col items-center xlg:items-start w-full pt-5 sm:pt-10 p-4 gap-3 ">
        <h6 className="text-red-400 text-2xl font-bold">Contact Us</h6>
        <p className="text-[15px] xlg:text-lg">
          <span className="font-bold">Email:</span> Adyant123@gmail.com
        </p>
        <p>
          <span className="font-bold">Phone:</span> 9876543210
        </p>
      </section>

      <section className="flex flex-col items-center xlg:items-start w-full pt-5 sm:pt-10 p-4 gap-3 ">
        <h6 className="text-red-400 text-2xl font-bold">Quick Links</h6>
        <div className="flex flex-col items-center xlg:items-start gap-1">
          <Link to={"/about-us/brands"}>
          <p className="cursor-pointer hover:text-red-500 duration-200 w-fit">Our Brands</p>
          </Link>
         <Link to={"/about-us/leadership"}>
         <p className="cursor-pointer hover:text-red-500 duration-200 w-fit">Leadership Team</p>
         </Link>
          <Link to={"/about-us/companies"}>
          <p className="cursor-pointer hover:text-red-500 duration-200 w-fit">Our Comapnies</p>
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center xlg:items-start w-full pt-5 sm:pt-10 p-4 gap-3 ">
        <h6 className="text-red-400 text-2xl font-bold">Locate Us</h6>
        <address className="font-normal max-sm:text-center text-sm xlg:text-base">
          <span className="font-bold text-lg">Address:</span>
          <br />
          Survey No. 45/46, Panchmukhi Nagar, Plot No. 11438, 66A, Jalna - Aurangabad Rd, Behind Satish Motors, Jalna Industrial Area MIDC, Jalna, Maharashtra 431213
        </address>
      </section>
    </footer>
  );
}

export default HomeFooter;
