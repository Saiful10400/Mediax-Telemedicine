import React from "react";
import logo from "../../../public/image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const li = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
        <NavLink to={"/doctor-dashboard"}>Doctor Dashboard</NavLink>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
      </li>
      <li>
        <NavLink to={"/all-doctors"}>All Doctors</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:w-[1600px]  mx-auto py-3 flex justify-between">
      <div className="flex justify-start gap-7 items-center w-[60%]">
        <div>
          <img className="w-[139px]" src={logo} alt="" />
        </div>

        <ul className="flex items-center lg:text-lg text-gray-400 lg:font-normal gap-4">
          {li}
        </ul>
      </div>
      <div className="w-[40%] flex justify-end ">
        <Link to={"/login"} className="btn text-[16px] font-semibold rounded-full px-8 bg-gradient-to-r from-[#4842f4] text-white to-[#4cddf2]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
