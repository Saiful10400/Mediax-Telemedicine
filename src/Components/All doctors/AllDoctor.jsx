import React, { useContext, useEffect, useState } from "react";
import { axiosPublic } from "./../../Custom hoocks/useAxiosPublic";
import { PiIdentificationBadge } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineGppGood } from "react-icons/md";
const AllDoctor = () => {
  const [allDoctor, setAllDoctor] = useState([]);
  useEffect(() => {
    axiosPublic.get("/get-all-doctor").then((res) => setAllDoctor(res.data));
  }, [setAllDoctor]);
  console.log(allDoctor);
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-9 w-[1400px] mx-auto">
        {allDoctor?.map((item, idx) => {
          return (
            <div data-aos="zoom-out-up" key={idx} className="bg-[#f3f3f8] rounded-xl p-5">
              <div className="flex items-center">
                <div className="w-[50%] flex justify-center items-center">
                  <img
                    className="w-[150px] object-cover rounded-full h-[150px]"
                    src={item?.profilePhoto}
                    alt=""
                  />
                </div>
                <div className="w-[50%]">
                  <h1 className="font-bold h-[40px] text-lg text text-gray-500">
                    {item?.title + " " + item?.firstName + " " + item?.lastName}
                  </h1>
                  <div className="mt-5 flex flex-col justify-center items-start gap-6">
                    <div className="flex items-start gap-x-5">
                      <span className="bg-[#00ca99] text-white text-xl rounded-full p-2">
                        <FaUserDoctor />
                      </span>
                      <div>
                        <h1 className="text-md font-bold">Doctor type</h1>
                        <h1>{item?.doctorType}</h1>
                      </div>
                    </div>
                    <div className="flex items-start gap-x-5">
                      <span className="bg-[#00ca99] text-white text-xl rounded-full p-2">
                      <MdOutlineGppGood />
                      </span>
                      <div>
                        <h1 className="text-md font-bold">Specialist In</h1>
                        <h1>{item?.speciality}</h1>
                      </div>
                    </div>
                    <div className="flex items-start gap-x-5">
                      <span className="bg-[#00ca99] text-white text-xl rounded-full p-2">
                        <PiIdentificationBadge />
                      </span>
                      <div>
                        <h1 className="text-md font-bold">Registration No</h1>
                        <h1>{item?.regNo}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-evenly mt-7">
                <Link className="btn bg-[#00ca99] rounded-3xl text-white">View profile</Link>
                <Link className="btn bg-[#00ca99] rounded-3xl text-white">Book Appointment</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllDoctor;
