import React, { useContext } from "react";
import "./footer.css";
import { FaPlus } from "react-icons/fa6";
import logo from "../../../public/image/lightLogo.svg";
import { btnStyle } from "../Authentication/Authentication";
import { Link } from "react-router-dom";

// footer image import.

import foot1 from "../../../public/image/Footer/footer image/foot1.jpg";
import foot2 from "../../../public/image/Footer/footer image/foot2.jpg";
import foot3 from "../../../public/image/Footer/footer image/foot3.jpg";
import foot4 from "../../../public/image/Footer/footer image/foot4.jpg";
import foot5 from "../../../public/image/Footer/footer image/foot5.jpg";
import foot6 from "../../../public/image/Footer/footer image/foot6.jpg";
import { FaInstagram } from "react-icons/fa6";
import { dataProvider } from "../context api/ContextProvider";
const Footer = () => {

  const{socket}=useContext(dataProvider)

  const subscribeFormHandle=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    console.log(email)
    socket.emit("message",email)

  }


  return (
    <div id="footerId" className="min-h-[50vh] pt-28 ">
      <div className="lg:w-[1400px] mx-auto flex justify-center items-center gap-x-20 overflow-hidden">
        <div data-aos-duration="1000"  data-aos-delay="300" data-aos="fade-up" className="w-[30%] ">
          <img src={logo} alt="logo" />
          <p className="text-white text-base font-normal py-8">
            Subscribe to out newsletter today to receive latest news
            administrate cost effective for tactical data.
          </p>
          <form onSubmit={subscribeFormHandle} className=" border border-white rounded-full flex items-center">
            <input
              className="focus:outline-none w-full text-white bg-transparent  font-semibold text-lg py-[10px]  px-3"
              type="email" name="email"
              placeholder="Your Email"
            />
            <button
              className={
                btnStyle + " " + "  border-none border border-[#00ca99]"
              }
            >
              Subscribe
            </button>
          </form>
        </div>
        <div  data-aos-duration="1000" data-aos-delay="400" data-aos="fade-up" className="w-[40%] flex justify-between gap-x-3  items-start">
          <div>
            <h1 className="text-[20px] text-white font-bold ">Quick Link</h1>
            <ul className="flex flex-col text-gray-300 mt-6">
              <Link className="flex items-center gap-2 mt-2">
                <FaPlus />
                Appoinment
              </Link>
              <Link className="flex items-center gap-2 mt-2">
                <FaPlus />
                About Us
              </Link>
              <Link className="flex items-center gap-2 mt-2">
                <FaPlus />
                Privacy & Policy
              </Link>
              <Link className="flex items-center gap-2 mt-2">
                <FaPlus />
                Terms & Condition
              </Link>
              <Link className="flex items-center gap-2 mt-2">
                <FaPlus />
                Portfolio
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] text-white font-bold ">Quick Link</h1>
            <div className="mt-6">
              <h1 className="text-white">
                <span className="text-base font-semibold text-[#00ca99]">
                  Address:{" "}
                </span>
                House 15, Road No: 20, Street Address, USA
              </h1>
              <h1 className="text-white my-5">
                <span className="text-base font-semibold text-[#00ca99]">
                  Phone:{" "}
                </span>
                (+2 321-654-0987)
              </h1>
              <h1 className="text-white">
                <span className="text-base font-semibold text-[#00ca99]">
                  Email:{" "}
                </span>
                info@mediax.com
              </h1>
            </div>
          </div>
        </div>
        <div  data-aos-duration="1000" data-aos-delay="500" data-aos="fade-up" className="w-[30%]">
          <h1 className="text-[20px] text-white font-bold ">Instagram</h1>
          <div className="mt-6 grid grid-cols-3 gap-y-7">



            <div className=" w-[90px] h-[70px] group overflow-hidden rounded-xl relative">
              <div className="glass flex justify-center items-center w-full scale-125 h-full z-30  opacity-0 group-hover:opacity-100 transition-all duration-300  absolute top-0 left-0">
                <FaInstagram className="w-[18px] h-[18px] text-[#00ca99]" />
              </div>
              <img
                className="w-full relative h-full object-cover group-hover:scale-150 transition-all duration-300"
                src={foot1}
                alt="footer image"
              />
            </div>
            <div className=" w-[90px] h-[70px] group overflow-hidden rounded-xl relative">
              <div className="glass flex justify-center items-center w-full scale-125 h-full z-30  opacity-0 group-hover:opacity-100 transition-all duration-300  absolute top-0 left-0">
                <FaInstagram className="w-[18px] h-[18px] text-[#00ca99]" />
              </div>
              <img
                className="w-full relative h-full object-cover group-hover:scale-150 transition-all duration-300"
                src={foot2}
                alt="footer image"
              />
            </div>
            <div className=" w-[90px] h-[70px] group overflow-hidden rounded-xl relative">
              <div className="glass flex justify-center items-center w-full scale-125 h-full z-30  opacity-0 group-hover:opacity-100 transition-all duration-300  absolute top-0 left-0">
                <FaInstagram className="w-[18px] h-[18px] text-[#00ca99]" />
              </div>
              <img
                className="w-full relative h-full object-cover group-hover:scale-150 transition-all duration-300"
                src={foot3}
                alt="footer image"
              />
            </div>
            <div className=" w-[90px] h-[70px] group overflow-hidden rounded-xl relative">
              <div className="glass flex justify-center items-center w-full scale-125 h-full z-30  opacity-0 group-hover:opacity-100 transition-all duration-300  absolute top-0 left-0">
                <FaInstagram className="w-[18px] h-[18px] text-[#00ca99]" />
              </div>
              <img
                className="w-full relative h-full object-cover group-hover:scale-150 transition-all duration-300"
                src={foot4}
                alt="footer image"
              />
            </div>
            <div className=" w-[90px] h-[70px] group overflow-hidden rounded-xl relative">
              <div className="glass flex justify-center items-center w-full scale-125 h-full z-30  opacity-0 group-hover:opacity-100 transition-all duration-300  absolute top-0 left-0">
                <FaInstagram className="w-[18px] h-[18px] text-[#00ca99]" />
              </div>
              <img
                className="w-full relative h-full object-cover group-hover:scale-150 transition-all duration-300"
                src={foot5}
                alt="footer image"
              />
            </div>
            <div className=" w-[90px] h-[70px] group overflow-hidden rounded-xl relative">
              <div className="glass flex justify-center items-center w-full scale-125 h-full z-30  opacity-0 group-hover:opacity-100 transition-all duration-300  absolute top-0 left-0">
                <FaInstagram className="w-[18px] h-[18px] text-[#00ca99]" />
              </div>
              <img
                className="w-full relative h-full object-cover group-hover:scale-150 transition-all duration-300"
                src={foot6}
                alt="footer image"
              />
            </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
