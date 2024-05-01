import React, { useContext } from "react";
import logo from "../../../public/image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
import "./navbar.css"
import Chat from "../Chat/Chat";
import { dataProvider } from "../context api/ContextProvider";
import { IoMdNotifications } from "react-icons/io";
import Notification from "../Notification/Notification";
const Navbar = () => {

  // state for hide or show chat container.
  const{setchat,setNoti,personData,doctorData,conversation,userType}=useContext(dataProvider)
  
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

  // new connected user chat.

  const newChatCount=()=>{
    if(userType==="doctor"){
      return conversation?.filter(item=>item.doctorView===false)?.length
    }else if(userType==="patient"){
      
      return conversation?.filter(item=>item.patientView===false)?.length
    }
  }
console.log(conversation)

  // let newChatCount=conversation?.filter(item=>item.view===false)
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
      <div className="w-[40%] flex justify-end items-center gap-x-4 relative">
        {/* chat box */}

        
         {
          doctorData||personData?<>
           <button onClick={setNoti} className="text-2xl bg-[#e4e6eb] p-2 rounded-full relative"><IoMdNotifications /><span className={` text-base text-white bg-red-600 px-1 rounded-full -top-2 -right-2 ${newChatCount()?"absolute":"hidden"}`}>{newChatCount()}</span></button>
           <button onClick={setchat} className="text-2xl bg-[#e4e6eb] p-2 rounded-full relative"><BiMessageDetail /><span className={` text-base text-white bg-red-600 px-1 rounded-full -top-2 -right-2 ${newChatCount()?"absolute":"hidden"}`}>{newChatCount()}</span></button>
        
        {/* chatbar div. */}
        
          <Chat></Chat>
          <Notification></Notification>
          </>:""
         }
        




        <Link to={"/login"} className="btn text-[16px] font-semibold rounded-full px-8 bg-gradient-to-r from-[#4842f4] text-white to-[#4cddf2]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
