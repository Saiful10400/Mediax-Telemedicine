import React, { useContext, useState } from "react";
import { formInputStyle } from "./DoctorSignup";
import { btnStyle } from "./Authentication";
import { Link } from "react-router-dom";
import authimg from "../../../public/image/login/login.svg";
import useImgUpload from './../../Custom hoocks/useImgbb';
import avatar from "./../../../public/image/login/uploadAvatar.png"
import { axiosPublic } from "../../Custom hoocks/useAxiosPublic";
import { dataProvider } from "../context api/ContextProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import swal from "sweetalert";
const PatientSignup = () => {

    let [uploadLoader,setUploadLoader]=useState(false)
    let [profile, setProfile] = useState({ file: undefined, string: undefined });
    let[imgbbPhotoUrl,setimgbbUrl]=useState(null)

    const imgbb = useImgUpload();
    const{emailAndPasswordsignup,person}=useContext(dataProvider)
    console.log(person)

    const profilePhoto = (e) => {
        const uploadedfile = e.target.files[0];
        
        const reader = new FileReader();
        reader.onload = () => {
          setProfile({ file: uploadedfile, string: reader.result });
        };
        reader.readAsDataURL(uploadedfile);
        setUploadLoader(true)
        imgbb(uploadedfile)
          .then((res) => res.json())
          .then((data) => {
            setUploadLoader(false)
            // user.photoUrl=data.data.url
            setimgbbUrl(data.data.url)
            
          });
      };
      console.log(profile)

      // signup form handle.
      const formSubmitHandle=(e)=>{
        e.preventDefault()
       if(imgbbPhotoUrl){
        const form=e.target
        const data={
          firstName:form.firstName.value,
          lastName:form.lastName.value,
          gender:form.gender.value,
          email:form.email.value,
          password:form.password.value,
          birthDay:form.dateofBirth.value,
          userType:"patient",
          profilePhoto:imgbbPhotoUrl
        }
        axiosPublic.post("/add-a-new-patient",{...data})
        .then(res=>{
          
          if(res.data.insertedId){
            emailAndPasswordsignup(data.email,data.password)
            .then(res=>{
              updateProfile(auth.currentUser,{
                displayName: data.firstName+" "+data.lastName, photoURL: imgbbPhotoUrl
              })
              .then(res=>{
                 swal("Success", "You registered successfully.", "success")
              })
            })
          }
 

        })
       }
       else{
        swal("You haven't upload your profile photo yet.", "", "warning")
       }
      }

  return (
    <div className="w-[1400px] mx-auto  h-[90vh] flex justify-center items-center">
      <div className="bg-[#f0f7f8] w-[95%] h-[90%] flex justify-center items-center rounded-3xl overflow-hidden">
        <div className="w-[40%]">
          <img src={authimg} className="w-full" alt="" />
        </div>
        <div className="w-[60%] h-full flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mb-20">Sign Up</h1>

          <div className="mb-4">
                  <label htmlFor="profile">
                    <div className="border h-[150px] cursor-pointer w-[150px] rounded-full relative overflow-hidden">
                      <span
                        className={`bg-gray-200 absolute bottom-0 left-0 w-full text-center h-[30px] font-bold ${
                          profile.string ? "hidden" : "block"
                        }`}
                      >
                        upload
                      </span>
                      <img
                        className="w-full h-full object-cover"
                        src={
                        profile?.string?profile?.string:avatar
                        }
                        alt="nothing"
                      />
                      <div className={`absolute ${uploadLoader?"flex": "hidden"} top-0 left-0 h-full flex-col gap-2 justify-center items-center bg-[#ffffffc0] w-full`}><span className="loading loading-spinner text-primary"></span><span className="font-medium text-gray-800">Uploading</span></div>
                    </div>
                    
                  </label>
                  <input  accept="image/png, image/jpeg" disabled={uploadLoader}
                    onInput={profilePhoto}
                    id="profile"
                    type="file"
                    className="hidden"
                  />
                </div>

          <form onSubmit={formSubmitHandle} className="px-10">
            <div className="flex justify-center items-center gap-x-10">
              <input required
                className={formInputStyle}
                type="text"
                name="firstName"
                
                placeholder="First Name"
              />
              <input required
                className={formInputStyle}
                type="text"
                name="lastName"
                
                placeholder="Last Name"
              />
            </div>
            <input required
              type="date"
              name="dateofBirth"
              placeholder="date of birth"
              className={formInputStyle}
               
            />
            <select className={formInputStyle} name="gender" id="">
              <option defaultChecked>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <input required
              type="email"
              name="email"
              className={formInputStyle}
              placeholder="Email"
            />
            <input required
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

export default PatientSignup;
