import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { btnStyle } from "../Authentication/Authentication";

const Contact = () => {
  const inputStyle =
    "w-full focus:outline-none border-[#a8bbf1] py-3 px-2 rounded-md border";
  return (
    <div className="flex items-center lg:w-[1400px] mx-auto my-8 overflow-hidden">
      <div data-aos-duration="1000" data-aos="fade-right" className="lg:w-[50%]">
        <h1 className="text-base text-[#00cab3] font-bold">Contact Us</h1>
        <h1 className="text-4xl font-bold my-5">
          Contact Our Specialist Doctor At Any Time For Any Of Your Ailments
        </h1>
        <p className="text-[15px] font-semibold w-[92%]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority haven't in humour, or randomised words which don't look
          even slightly believable.
        </p>
      </div>
      <div data-aos-duration="1000" data-aos="fade-left" className="lg:w-[50%]">
        <div className="flex items-center gap-x-5" >
          <input className={inputStyle} type="number" placeholder="Phone" />
          <input className={inputStyle} type="text" placeholder="Subject" />
        </div>
        <div className="flex items-center gap-x-5 mt-6" >
          <input className={inputStyle} type="text" placeholder="Name" />
          <input className={inputStyle} type="email" placeholder="Email" />
        </div>
        <textarea  placeholder="Message" className={inputStyle+" "+"mt-5"} cols="30" rows="3"></textarea>
        <button className={btnStyle+" "+"w-full mt-3"}>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
