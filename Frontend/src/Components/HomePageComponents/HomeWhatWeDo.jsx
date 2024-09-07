import { TbBuildingFactory } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { LuStore } from "react-icons/lu";
import { GiSandsOfTime } from "react-icons/gi";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function HomeWhatWeDo() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const whatWeDoArray = [
        {
            no: "01",
            title: "Leading exporter of Genuine Automobile Spare Parts",
            icon: <TbBuildingFactory />
        },
        {
            no: "02",
            title: "Competitive pricing",
            icon: <FaDollarSign />
        },
        {
            no: "03",
            title: "High sourcing and stocking capabilities",
            icon: <LuStore />
        },
        {
            no: "04",
            title: "Quality packaging and timely delivery",
            icon: <GiSandsOfTime />
        }
    ];

    let delay = 100;

    return (
        
        <main className="min-h-[50vh] flex flex-col my-[50px] gap-5 justify-center items-center  h-fit text-center w-[95%] mx-auto">
            <h2 className="font-bold text-center text-[25px] sm:text-[30px] md:text-[40px]">What We Do?</h2>
            <p className="font-bold text-center text-[17px] sm:text-[20px] text-blue-800">Our Services</p>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full mx-auto place-items-center justify-items-center">
                {whatWeDoArray.map((item, idx) => {
                    delay += 50;
                    return (
                        <div key={idx} className="border-[1px] relative changeBg flex flex-col justify-between w-full gap-3 h-full border-black p-4" data-aos="fade-left" data-aos-delay={delay}>
                            <p className="text-[50px] sm:text-[80px] z-[10]">{item.no}</p>
                            <p className="block text-[50px] sm:text-[80px] z-[10] w-fit mx-auto">{item.icon}</p>
                            <p className="text-[15px] md:text-[20px] z-[10] font-semibold">{item.title}</p>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default HomeWhatWeDo;
