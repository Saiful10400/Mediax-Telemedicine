import React, { useState } from 'react';
import { btnStyle, inputStyle } from '../../../Authentication/Authentication';

const DoctorWorkExperience = () => {

    const[current,setcurrent]=useState(false)
    // work submit.
    const workSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const instituteName=form.intName.value
        const department=form.dptName.value
        const designation=form.dsg.value
        const period={start:form.start.value,end:current?"present":form.end.value}
        const data={instituteName,department,designation,period,data}
        console.log(data)
    }
    return (
      <div>
        <div>
          <div>
            <h1 className="text-[#164dc4] text-lg mt-5 font-bold border-b-2 mb-8">
              Add work experience
            </h1>
            <form
              onSubmit={workSubmit}
              className="bg-[#eceffd] w-[60%] grid grid-cols-2  gap-4 py-5 px-3 rounded-xl"
            >
              <label htmlFor="intName">
                <h1 className="font-bold text-[#164dc4] mb-2">
                  Institute Name
                </h1>
                <input
                  required
                  type="text"
                  id="intName"
                  className={inputStyle + " " + "border-2"}
                  name="intName"
                  placeholder=""
                />
              </label>
              <label htmlFor="Subject">
                <h1 className="font-bold text-[#164dc4] mb-2">Department</h1>
                <input
                  type="text"
                  id="Subject"
                  className={inputStyle + " " + "border-2"}
                  name="depName"
                  placeholder=""
                />
              </label>
              <label htmlFor="dsgName">
                <h1 className="font-bold text-[#164dc4] mb-2">Designation</h1>
                <input
                  type="text"
                  id="dsgName"
                  className={inputStyle + " " + "border-2"}
                  name="dsgName"
                  placeholder=""
                />
              </label>
              <div className="flex gap-x-10 items-center">
                <label className="w-full" htmlFor="degree start">
                  <h1 className="font-bold text-[#164dc4] mb-2">
                    Period Start
                  </h1>
                  <input
                    required
                    type="date"
                    id="degree start"
                    className={inputStyle + " " + "border-2"}
                    name="start"
                    placeholder=""
                  />
                </label>

                <label className="w-full" htmlFor="degree end">
                  <div>
                    <div className={current&&"hidden"}>
                    <h1 className="font-bold text-[#164dc4] mb-2">
                      Period End
                    </h1>
                    <input
                      
                      type="date"
                      id="degree end"
                      className={inputStyle + " " + "border-2"}
                      name="end"
                      placeholder=""
                    />
                    </div>

                    <div className="form-control ">
                      <label className="label cursor-pointer">
                        <span className="label-text font-bold">Current</span>
                        <input onClick={(e)=>setcurrent(!current)}
                          type="checkbox"
                         
                          className="checkbox checkbox-sm checkbox-primary"
                        />
                      </label>
                    </div>


                  </div>
                </label>
              </div>

              <button className={btnStyle + " " + "px-6"}>Add</button>
            </form>

            <h1 className="text-[#164dc4]  text-lg font-bold border-b-2 mt-5 mb-2">
              All work experience
            </h1>
            {/* <div className="grid grid-cols-4 gap-5">
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
        </div> */}
          </div>
        </div>
      </div>
    );
};

export default DoctorWorkExperience;