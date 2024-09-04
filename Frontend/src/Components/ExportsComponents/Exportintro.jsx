import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function Exportintro() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="flex max-lg:flex-col justify-center py-5 items-center mx-auto w-[100%] xlg:w-[95%] min-h-screen h-fit ">
      <figure
        className="relative w-[80%] m-5 lg:w-[40%]"
        data-aos="fade-left"
      >
        <img
          src="https://images.unsplash.com/photo-1598194501777-edbff942e501?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[300px] md:h-[350px] lg:h-[500px] w-full relative z-10"
        />
        <div className="absolute top-[30px] left-[30px] w-full h-full bg-black"></div>
      </figure>

      <div
        className="flex max-lg:mt-[40px] flex-col justify-center w-[90%] max-lg:mx-auto lg:w-[60%] xlg:w-[55%] gap-1 sm:gap-3 text-[17px] pl-2 sm:pl-10"
        data-aos="fade-right"
      >
        <p className="text-[17px] sm:text-[20px] uppercase font-semibold text-blue-500">
          Exports
        </p>
        <h5 className="text-[25px] sm:text-[35px] font-bold">Serving Customers Worldwide</h5>
        <p className="font-semibold p-2 max-sm:text-[15px]">
          Building on a 30-year automotive heritage, our Group has refined a
          global distribution system, setting industry benchmarks for
          operational excellence. We have developed a high-performance partner
          network with over 7 international companies, driving continuous
          improvement and customer-centric solutions. Our dedicated
          international business team leverages data-driven insights and
          industry expertise to optimize global trade operations, ensuring
          precision, speed, and sustained business growth. <br /> <br />
          Headquartered in Jalna city is advantageous for the Group as it is a
          well-known hub for export because of its dry port and its proximity to
          the Mumbai port enables quick & efficient supply with low
          transportation cost. The company makes sure that it supplies genuine
          automotive parts that are of the highest quality whilst maintaining
          competitive prices.
        </p>
      </div>
    </section>
  );
}

export default Exportintro;
