import React, { useContext, useState } from 'react';
import { btnStyle, inputStyle } from '../../../Authentication/Authentication';
import { dataProvider } from '../../../context api/ContextProvider';
import WorkExperience from '../../../All doctors/DoctorPage common components/WorkExperience';
import { axiosPublic } from '../../../../Custom hoocks/useAxiosPublic';

const DoctorWorkExperience = () => {
const{doctorData}=useContext(dataProvider)
console.log(doctorData)
    const[current,setcurrent]=useState(false)
   
    // work submit.
    const workSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const instituteName=form.intName.value
        const department=form.depName.value
        const designation=form.dsgName.value
        const period={start:form.start.value,end:current?"present":form.end.value}
        const data={instituteName,department,designation,period}
        
        // let's post doctor work experience to database.(here id will be doctor email.)

        axiosPublic.post("/add-doctor-work-experience",{data})
        .then(res=>console.log(res.data))
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
            <div className="grid grid-cols-2 gap-x-3">
              {doctorData?.worked?.map((item, idx) => (
                <WorkExperience background="gray" data={item} key={idx}></WorkExperience>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default DoctorWorkExperience;