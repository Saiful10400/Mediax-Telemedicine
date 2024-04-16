import React, { useContext, useRef, useState } from "react";
import authimg from "../../../public/image/login/login.svg";
import { Link, useLocation } from "react-router-dom";
import { dataProvider } from "../context api/ContextProvider";
import { axiosPublic } from './../../Custom hoocks/useAxiosPublic';
import { swal } from 'sweetalert';
export const inputStyle =
  "w-full focus:outline-none py-3 px-2 rounded-lg font-bold";
  export const btnStyle="btn bg-[#00ca99] text-white hover:bg-[#40e7c3] hover:text-gray-100 rounded-full px-4"
const Authentication = () => {
  const { pathname } = useLocation();
  const login = pathname === "/login" ? true : false;
const {loginWithEmail}=useContext(dataProvider)

const formSubmitHandle=(e)=>{
  e.preventDefault()
  const form=e.target
  const email=form.email.value
  const password=form.password.value

  loginWithEmail(email,password)
  .then(res=>{
    swal("Login success", "", "success")
  })
}
  return (
    <div className="w-[1400px] mx-auto  h-[80vh] flex justify-center items-center">
      <div className="bg-[#f0f7f8] w-[95%] flex justify-center items-center rounded-3xl overflow-hidden">
        <div className="w-[60%]">
          <img src={authimg} className="w-full" alt="" />
        </div>
        <div className="w-[40%] h-[600px]  flex justify-center items-center flex-col">
          <div className={login?"w-full  flex justify-center items-center flex-col":"hidden"}>
            <div className="mb-10">
              <h1 className="text-5xl font-bold">Login</h1>
            </div>
            <form onSubmit={formSubmitHandle} className="flex  justify-center items-center flex-col gap-y-4 w-[60%]">
              <input
                className={inputStyle}
                type="email"
                name="email"
                placeholder="Your email"
              />
              <input
                className={inputStyle}
                type="password"
                name="password"
                placeholder="Your password"
              />
              <button className={btnStyle+" "+"w-full"}>
                Login
              </button>
            </form>
            
          </div>
          <div className={!login?"block":"hidden"}>
          <h1 className="text-5xl font-bold text-center">Sign up</h1>
          <div className="mt-14 flex justify-center items-center gap-5">
            <Link to={"/sign-up/patient"} className={btnStyle}>As Patient</Link>
            <Link to={"/sign-up/doctor"} className={btnStyle}>As Doctor</Link>
          </div>
          </div>
          <h1 className="flex gap-3 mt-10 font-bold text-gray-500">
              {!login ? "Have an account?" : "Haven't any account?"}
              <Link
                to={login ? "/sign-up" : "/login"}
                className="text-[#00ca99] font-bold"
              >
                {login ? "Sign up" : "Login"}
              </Link>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
