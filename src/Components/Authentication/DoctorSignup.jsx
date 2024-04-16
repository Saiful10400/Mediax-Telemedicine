import React, { useContext } from "react";
import authimg from "../../../public/image/login/login.svg";
import { btnStyle, inputStyle } from "./Authentication";
import { Link } from "react-router-dom";
import { DoctorSpeciality } from "../CommonData";
import { dataProvider } from "../context api/ContextProvider";
import { axiosPublic } from "../../Custom hoocks/useAxiosPublic";
import swal from 'sweetalert';
export const formInputStyle =
  "w-full py-2 mb-4 px-5 rounded-xl focus:outline-none";
const DoctorSignup = () => {
  const { person, emailAndPasswordsignup } = useContext(dataProvider);
  console.log(person);
  const formHandle = (e) => {
    e.preventDefault();
    const form = e.target;
 
    const data = {
      title: form.title.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      birthDay: form.birthDate.value,
      gender: form.gender.value,
      regNo: form.regNo.value,
      idNO: form.idNo.value,
      doctorType: form.doctorType.value,
      speciality: form.speciality.value,
      phoneNumber: form.phoneNumber.value,
      email: form.email.value,
      password: form.password.value,
      userType:"doctor",
      publish:false
    };
    
    

    axiosPublic.post("/add-a-new-doctor",{data})
    .then(res=>{
      if(res.data.insertedId){
        emailAndPasswordsignup(data.email, data.password).then((res) =>
        swal("Success", "You registered successfully.", "success")
    );
      }
    })
    
    
  };
  return (
    <div className="w-[1400px] mx-auto  h-[90vh] flex justify-center items-center">
      <div className="bg-[#f0f7f8] w-[95%] h-[90%] flex justify-center items-center rounded-3xl overflow-hidden">
        <div className="w-[40%]">
          <img src={authimg} className="w-full" alt="" />
        </div>
        <div className="w-[60%] h-full flex justify-center items-center flex-col">
          <h1 className="font-bold text-2xl mt-3 mb-5">Doctor Registration</h1>

          <form onSubmit={formHandle} className="px-4">
            <select className={formInputStyle} name="title">
              <option defaultChecked>Title</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof. Dr.">Prof. Dr.</option>
              <option value="Assoc. Prof. Dr.">Assoc. Prof. Dr.</option>
              <option value="Asst. Prof. Dr.">Asst. Prof. Dr.</option>
            </select>
            <div className="flex justify-center items-center gap-x-10">
              <input
                className={formInputStyle}
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className={formInputStyle}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <input name="birthDate" type="date" className={formInputStyle} />
            <select className={formInputStyle} name="gender" id="">
              <option defaultChecked>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <div className="flex justify-center items-center gap-x-10">
              <input
                name="regNo"
                type="text"
                className={formInputStyle}
                placeholder="Registration Number (BMDC)"
              />
              <input
                name="idNo"
                type="text"
                className={formInputStyle}
                placeholder="National ID / Passport Number"
              />
            </div>
            <div className="flex items-center  gap-x-10">
              <select className={formInputStyle} name="doctorType">
                <option defaultChecked>Doctor Type</option>
                <option value="Medical">Medical</option>
                <option value="Dental">Dental</option>
                <option value="Veterinary">Veterinary</option>
              </select>
              <select className={formInputStyle} name="speciality">
                <option defaultChecked>Speciality</option>
                {DoctorSpeciality.map((item, idx) => {
                  return (
                    <option key={idx} value={item.title}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="number"
              name="phoneNumber"
              className={formInputStyle}
              placeholder="Mobile Number"
            />
            <input
              type="email"
              name="email"
              className={formInputStyle}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className={formInputStyle}
              placeholder="Password"
            />
            <div className="flex items-center justify-start gap-7">
              <button className={btnStyle + " " + "px-32"}>Sign Up</button>
              <h1 className="flex gap-2   font-bold text-gray-500">
                Have an account?{" "}
                <Link to={"/login"} className="text-[#00ca99] font-bold">
                  Login
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
