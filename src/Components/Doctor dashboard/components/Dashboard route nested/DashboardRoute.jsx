import React, { useContext } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import avatar from "../../../../../public/image/doctor dashboard/doctoravatar.webp";
import { dataProvider } from "../../../context api/ContextProvider";
import { FaVideo } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
const DashboardRoute = () => {
  const today = new Date().toDateString().split(" ");
  const todayDatestring = `${today[2]} ${today[1]}-${today[3]} `;



  // get doctor this doctro who is logged in ,data form mongodb.
  const{doctorData}=useContext(dataProvider)
  

  // fielte data from today,next and request appointment.

  // appointment request.
  const appointmentRequest=doctorData?.appReq.filter(item=>item.accept===false)
  const appReqtoShow=appointmentRequest.slice(0,3)
  
  
 
  

  // today appointment.
  const allAcceptReq=doctorData?.appReq.filter(item=>item.accept===true)
 
   // #today date.
   let dateobj=new Date()
   let todayDate=`${dateobj.getFullYear()}-${String(dateobj.getMonth()+1).padStart(2,"0")}-${dateobj.getDate().toString().padStart(2,"0")}`
   let todayAppointment=allAcceptReq.filter(item=>item.AppointmentDate===todayDate)
   const todayAppreqToShow=todayAppointment.slice(0,3)
   

  //  next appointment.
  const currentAppointment=todayAppointment[0]

  console.log(currentAppointment)


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
            <h1>{todayDatestring}</h1>{" "}
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
            <h1>{todayDatestring}</h1>{" "}
          </div>
        </div>
      </div>

   




{/* toady appointment. */}
        <div className="grid grid-cols-3 gap-x-14 mt-8 ">
          




          
   {/* today appointmetns. */}
          <div className="bg-[#eceffd] h-[350px] rounded-3xl p-6 w-full">
            <h1 className="font-bold text-[#2955c7] mb-1">Today Appointment ({todayAppointment.length})</h1>

            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>Name/Diagonosis</th>
                      <th>Time</th>
                      <th>contact</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      todayAppreqToShow?.map((item,key)=>{
                        return(
                          <tr key={key}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.ptientPhoto}
                              />
                            </div>
                          </div>
                          
                        </div>
                      </td>
                      <td>
                      <div>
                            <div className="font-bold text-[#5479d4]">{item.name.slice(0,12)}</div>
                            <div className="text-xs font-normal">
                              {item.appoinmentSubject}
                            </div>
                          </div>
                      </td>
                      <td><span className="bg-[#cdd7f4] p-1 rounded-md ">{item.AppointmentTime}</span></td>
                      <td className="flex items-center justify-center gap-x-2"><Link className="text-lg bg-[#0b44c0] text-white p-2 rounded-md"><IoChatboxEllipses/></Link><Link className="text-lg bg-[#0b44c0] text-white p-2 rounded-md"><FaVideo/></Link></td>
                    </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>





          {/*next patient.  */}
          <div className="bg-[#eceffd] h-[350px] w-full rounded-3xl p-6">
            <h1 className="font-bold text-[#2955c7] mb-2">Current Patient Details</h1>
            <div className="flex items-center justify-between ">
              <img
                className="w-[50px] rounded-full h-[50px]"
                src={currentAppointment?currentAppointment.ptientPhoto:avatar}
                alt=""
              />
              <div>
                <h1 className="font-bold">{currentAppointment?currentAppointment.name:""}</h1>
                <h1 className="text-xs">{currentAppointment?currentAppointment.mainProblem:""}</h1>
              </div>
              <div>
                <h1 className="font-bold">PatientID</h1>
                <h1>{currentAppointment?currentAppointment.id.slice(0,11):""}</h1>
              </div>
            </div>

            {/* patietn other details. */}
            <div className="grid grid-cols-3 items-center gap-y-4 gap-x-16 mt-4">
              
              <div className="text-sm">
                <h1 className="font-bold">Age</h1>
                <h1>{currentAppointment.age} years</h1>
              </div>
              <div className="text-sm">
                <h1 className="font-bold">Gender</h1>
                <h1>{currentAppointment.gender}</h1>
              </div>
              <div className="text-sm">
                <h1 className="font-bold">Height</h1>
                <h1>{currentAppointment.height} cm</h1>
              </div>
              <div className="text-sm">
                <h1 className="font-bold">Weight</h1>
                <h1>{currentAppointment.weight} kg</h1>
              </div>
              <div className="text-sm">
                <h1 className="font-bold">Patient Type</h1>
                <h1>New</h1>
              </div>
              <div className="text-sm">
                <h1 className="font-bold">Reg Date</h1>
                <h1>10 Apr 2024</h1>
              </div>



            </div>

            {/* patient history. */}
            <div className="flex justify-between mt-6 items-center">
            {
              currentAppointment?.previousDissage.slice(0,3).map((item,idx) =>{
                return(<span className="bg-[#a9bceb] text-[#0b43c0] px-2 py-1 rounded-md" key={idx}>{item.toUpperCase()}</span>)
              })
            }
            </div>

            {/* necessary buttons. */}
            <div className="flex items-center mt-5 justify-between">
              <button className="flex items-center gap-x-2 text-white bg-[#0b3ca4] p-1 rounded-md"><IoCallSharp /> <span>{currentAppointment.phone}</span></button>
              <button className="flex items-center gap-x-2 border border-[#0b3ca4] text-[#0b3ca4] p-1 rounded-md"><FaFolder /> <span>Documents</span></button>
              <button className="flex items-center gap-x-2 border border-[#0b3ca4] text-[#0b3ca4] p-1 rounded-md"><AiFillFileText /> <span>Details</span></button>
            </div>
          </div>



          {/* appointment request. */}
          <div className="bg-[#eceffd] h-[350px] w-full rounded-3xl p-6 ">
         
            <h1 className="font-bold text-[#2955c7] mb-1">Appointment Requast ({appointmentRequest.length})</h1>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                
                <tbody>
                    
                    {
                      appReqtoShow?.map((item,key)=>{
                        return(
                          <tr key={key}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.ptientPhoto}
                              />
                            </div>
                          </div>
                          
                        </div>
                      </td>
                      <td>
                      <div>
                            <div className="font-bold text-[#5479d4]">{item.name.slice(0,12)}</div>
                            <div className="text-xs font-normal">
                              {item.appoinmentSubject}
                            </div>
                          </div>
                      </td>
                      <td><span className="bg-[#cdd7f4] p-1 rounded-md">On Going</span></td>
                    </tr>
                        )
                      })
                    }
                    
                  </tbody>
              </table>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default DashboardRoute;
