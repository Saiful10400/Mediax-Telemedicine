import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import avatar from "../../../../../public/image/doctor dashboard/doctoravatar.webp";
const DashboardRoute = () => {
  const today = new Date().toDateString().split(" ");
  const todayDate = `${today[2]} ${today[1]}-${today[3]} `;

  return (
    <div>
      <div className="grid grid-cols-3 gap-x-16 ">
        <div className="bg-[#eceffd] flex justify-evenly items-center h-[150px] rounded-3xl">
          <div className="text-[#0b43c0] text-6xl">
            <BsFillPeopleFill></BsFillPeopleFill>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl">Total Patient</h1>
            <h1 className="text-3xl font-bold my-2">200</h1>
            <h1>Till Today</h1>{" "}
          </div>
        </div>
        <div className="bg-[#eceffd] flex justify-evenly items-center h-[150px] rounded-3xl">
          <div className="text-[#0b43c0] text-6xl">
            <FaPerson></FaPerson>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl">Today Patient</h1>
            <h1 className="text-3xl font-bold my-2">20</h1>
            <h1>{todayDate}</h1>{" "}
          </div>
        </div>
        <div className="bg-[#eceffd] flex justify-evenly items-center h-[150px] rounded-3xl">
          <div className="text-[#0b43c0] text-6xl">
            <BsClockFill></BsClockFill>
          </div>
          <div>
            {" "}
            <h1 className="text-2xl">Today Appointments</h1>
            <h1 className="text-3xl font-bold my-2">8</h1>
            <h1>{todayDate}</h1>{" "}
          </div>
        </div>
      </div>

   
        <div className="grid grid-cols-3 gap-x-14 mt-8 ">
          
          <div className="bg-[#eceffd] h-[350px] rounded-3xl p-6 w-full">
            <h1 className="font-bold text-[#2955c7] mb-1">Today Appoinment</h1>

            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>Name/Diagonosis</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={avatar}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          
                        </div>
                      </td>
                      <td>
                      <div>
                            <div className="font-bold text-[#5479d4]">Hart Hagerty</div>
                            <div className="text-xs font-normal">
                              United States
                            </div>
                          </div>
                      </td>
                      <td><span className="bg-[#cdd7f4] p-1 rounded-md">On Going</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-[#eceffd] h-[350px] w-full rounded-3xl p-6">
            <h1 className="font-bold text-[#2955c7] mb-2">Next Patient Details</h1>
            <div className="flex items-center justify-between ">
              <img
                className="w-[50px] rounded-full h-[50px]"
                src={avatar}
                alt=""
              />
              <div>
                <h1>Sanath Deo</h1>
                <h1>Helth checkup</h1>
              </div>
              <div>
                <h1>PatientID</h1>
                <h1>41545421548</h1>
              </div>
            </div>
          </div>
          <div className="bg-[#eceffd] h-[350px] w-full rounded-3xl p-6 ">
         
            <h1 className="font-bold text-[#2955c7] mb-1">Appoinment Requast</h1>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                
                <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={avatar}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          
                        </div>
                      </td>
                      <td>
                      <div>
                            <div className="font-bold text-[#5479d4]">Hart Hagerty</div>
                            <div className="text-xs font-normal">
                              United States
                            </div>
                          </div>
                      </td>
                      <td><span className="bg-[#cdd7f4] p-1 rounded-md">On Going</span></td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default DashboardRoute;
