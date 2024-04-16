import React from "react";
import "./banner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import bannerCahrector from "../../../public/image/banner/banner-charector.png"
const Banner = () => {
  return (
    <div className="bannerContainer h-[80vh] overflow-hidden">
      <div className="lg:w-[1350px]  mx-auto h-full flex items-end">
        <div data-aos-duration="1000" data-aos="fade-down" className="w-[55%] h-full ">
         <div className="flex flex-col justify-center h-full">
         <h1 className="text-base text-[#00ca99] font-bold mb-[37px]">Start your journey</h1>
          <h1 className="lg:text-[72px] bannerTitle leading-tight font-semibold mb-[57px]">
            We provide Remote <br /> Health Care Services
          </h1>
          <p className="text-[18px] font-normal">
            Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere
            blandit. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
         </div>
        </div>
        <div className="w-[45%]">
            <div data-aos-duration="1000" data-aos="fade-left" className="bannerImage w-full  h-[500px]">
                <img className="w-full relative bottom-[175px]" src={bannerCahrector} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
