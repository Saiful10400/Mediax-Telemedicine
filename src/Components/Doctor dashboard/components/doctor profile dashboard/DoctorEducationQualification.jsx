import React, { useContext, useEffect, useState } from "react";
import { btnStyle, inputStyle } from "../../../Authentication/Authentication";
import { dataProvider } from "../../../context api/ContextProvider";
import { axiosPublic } from "../../../../Custom hoocks/useAxiosPublic";

const DoctorEducationQualification = () => {

    const{person}=useContext(dataProvider)
    const[reFetch,setRefetch]=useState(false)
    
  // degree submit handle.
  const degreeSubmit = (e) => {
    e.preventDefault();


    const DateFormate=(date)=>{
        const DateArray=date.split("-")
        return `${DateArray[2]+"-"+DateArray[1]+"-"+DateArray[0]}`
    }




    const form = e.target;
    const degreeName = form.degreeName.value;
    const subject = form.subject.value;
    const educationPeriod = {
      start: DateFormate(form.educatinStart.value),
      end: DateFormate(form.educationEnd.value),
    };
    const institute = form.instituteName.value;
    const data = { degreeName, subject, educationPeriod, institute };
    console.log(data)
    if(person){
        axiosPublic.post("/post-doctor-qualification",{email:person.email,data})
        .then(res=>console.log(res.data))
    }
  };

// fetch DoctorData.
const [doctorEducation,setDoctorData]=useState([])

useEffect(()=>{
if(person){
    axiosPublic.post("/get-a-doctor-data",{email:person?.email})
    .then(res=>{
        setDoctorData(res.data?.education)
        setRefetch(prev=>!prev)
    })
}
},[reFetch,person])

console.log(doctorEducation)


  return (
    <div>
      <div>
        <h1 className="text-[#164dc4] text-lg mt-5 font-bold border-b-2 mb-8">
          Add Educational Qualification
        </h1>
        <form
          onSubmit={degreeSubmit}
          className="bg-[#eceffd] w-[60%] grid grid-cols-2  gap-4 py-5 px-3 rounded-xl"
        >
          <label htmlFor="degree name">
            <h1 className="font-bold text-[#164dc4] mb-2">Degree Name</h1>
            <input
              required
              type="text"
              id="degree name"
              className={inputStyle + " " + "border-2"}
              name="degreeName"
              placeholder=""
            />
          </label>
          <label htmlFor="Subject">
            <h1 className="font-bold text-[#164dc4] mb-2">Subject</h1>
            <input
              
              type="text"
              id="Subject"
              className={inputStyle + " " + "border-2"}
              name="subject"
              placeholder=""
            />
          </label>
          <div className="flex gap-x-10 items-center">
            <label className="w-full" htmlFor="degree start">
              <h1 className="font-bold text-[#164dc4] mb-2">Education Start</h1>
              <input
                required
                type="date"
                id="degree start"
                className={inputStyle + " " + "border-2"}
                name="educatinStart"
                placeholder=""
              />
            </label>

            <label className="w-full" htmlFor="degree end">
              <h1 className="font-bold text-[#164dc4] mb-2">Education End</h1>
              <input
                required
                type="date"
                id="degree end"
                className={inputStyle + " " + "border-2"}
                name="educationEnd"
                placeholder=""
              />
            </label>
          </div>
          <label htmlFor="Institute Name">
            <h1 className="font-bold text-[#164dc4] mb-2">Institute Name</h1>
            <input
              
              type="text"
              id="Institute Name"
              className={inputStyle + " " + "border-2"}
              name="instituteName"
            />
          </label>

          <button className={btnStyle + " " + "px-6"}>Add</button>
        </form>

        <h1 className='text-[#164dc4]  text-lg font-bold border-b-2 mt-5 mb-2'>All Educational Qualification</h1>
        <div className="grid grid-cols-4 gap-5 mt-5">
            {
                doctorEducation?.map((item,idx)=>{
                    return(
                        <div key={idx} className="bg-[#eceffd] p-2 rounded-xl">
                            <h1 className="text-xl font-bold">{item.degreeName}</h1>
                            <div className="flex gap-5 justify-start items-center mt-4">
                                {
                                    item.subject &&<div className="flex justify-center items-center flex-col gap-1">
                                    <h1 className="text-lg font-normal">Subject</h1>
                                    <h1 className="font-bold">{item.subject}</h1>
                                </div>
                                }
                                {
                                    item.institute &&<div className="flex justify-center items-center flex-col gap-1">
                                    <h1 className="text-lg font-normal">Institute</h1>
                                    <h1 className="font-bold">{item.institute}</h1>
                                </div>
                                }
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default DoctorEducationQualification;
