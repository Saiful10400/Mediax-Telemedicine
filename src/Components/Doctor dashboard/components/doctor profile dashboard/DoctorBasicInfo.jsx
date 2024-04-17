import React, { useContext, useEffect, useState } from "react";
import avatar from "../../../../../public/image/doctor dashboard/doctoravatar.webp";
import useImgUpload from "../../../../Custom hoocks/useImgbb";
import { btnStyle } from "../../../Authentication/Authentication";
import { axiosPublic } from "../../../../Custom hoocks/useAxiosPublic";
import { dataProvider } from "../../../context api/ContextProvider";
import FormInput from "../../../../Common component/FormInput";
import Activeschedule from "../../../../Common component/doctor Dahsboard basic info/Activeschedule";

const DoctorBasicInfo = () => {
  let [uploadLoader, setUploadLoader] = useState(false);
  let [profile, setProfile] = useState({ file: undefined, string: undefined });
  let [imgbbPhotoUrl, setimgbbUrl] = useState(null);
  const inputStyle =
    "w-full focus:outline-none border py-3 px-2 rounded-lg mt-3";
  const { person } = useContext(dataProvider);

  useEffect(() => {
    if (imgbbPhotoUrl && person?.email) {
      axiosPublic
        .post("/upload-doctor-photo", {
          email: person?.email,
          profilePhoto: imgbbPhotoUrl,
        })
        .then((res) => console.log(res.data));
    }
  }, [imgbbPhotoUrl, person]);

  const [doctorData, setDoctorData] = useState(null);
  useEffect(() => {
    if (person?.email) {
      axiosPublic
        .post("/get-a-doctor-data", { email: person?.email })
        .then((res) => {
          setDoctorData(res.data);
        });
    }
  }, [person]);

  // profile photo handle.

  const imgbb = useImgUpload();
  const profilePhoto = (e) => {
    const uploadedfile = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setProfile({ file: uploadedfile, string: reader.result });
    };
    reader.readAsDataURL(uploadedfile);
    setUploadLoader(true);
    imgbb(uploadedfile)
      .then((res) => res.json())
      .then((data) => {
        setUploadLoader(false);
        // user.photoUrl=data.data.url
        setimgbbUrl(data.data.url);
      });
  };

  // bio submint handle.
  const biosubmitHandle = (e) => {
    e.preventDefault();
    const bio = e.target.bio.value;
    if (person) {
      axiosPublic
        .post("/doctor-post-bio", { bio, person: person?.email })
        .then((res) => console.log(res));
    }
  };

  // name and email submit handle.
  const nameEmailSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.password.value);
  };

  // important auxilary data for appointment info form.
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // appointment info form submit handle.
  const appointmentHandle=(e)=>{
    e.preventDefault()
    const form=e.target
    const firstFee=form.firstFee.value
    const followupFee=form.followupFee.value
    // get weeks all day time.
    const appointmentSchedule=[]
    weekDays.map(item=>{
      let day={}
      day.dayName=item
      day.start=form[item+"start"].value
      day.end=form[item+"end"].value
      
      if(day.start && day.end){
        appointmentSchedule.push(day)
        
      }

    })
    if(person.email){
      axiosPublic.post("/update-appointment-data",{email:person.email,appointmentData:{firstFee,followupFee,appointmentSchedule}})
      .then(res=>console.log(res.data))

    }
  }

  return (
    <div>
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
                profile?.string
                  ? profile?.string
                  : doctorData?.profilePhoto
                  ? doctorData?.profilePhoto
                  : avatar
              }
              alt="nothing"
            />
            <div
              className={`absolute ${
                uploadLoader ? "flex" : "hidden"
              } top-0 left-0 h-full flex-col gap-2 justify-center items-center bg-[#ffffffc0] w-full`}
            >
              <span className="loading loading-spinner text-primary"></span>
              <span className="font-medium text-gray-800">Uploading</span>
            </div>
          </div>
        </label>
        <input
          accept="image/png, image/jpeg"
          disabled={uploadLoader}
          onInput={profilePhoto}
          id="profile"
          type="file"
          className="hidden"
        />
      </div>

      <div className="mt-10">
        <form onSubmit={nameEmailSubmit} className=" flex gap-x-6 items-end">
          <div className="grid grid-cols-2 gap-y-4 gap-x-11 w-[80%]">
            <FormInput
              defaultValue={doctorData?.firstName}
              name="firstName"
              type="text"
              title="First Name"
            ></FormInput>
            <FormInput
              defaultValue={doctorData?.lastName}
              name="lastName"
              type="text"
              title="Last Name"
            ></FormInput>
            <FormInput
              defaultValue={doctorData?.email}
              name="email"
              type="email"
              title="Email"
            ></FormInput>
            <FormInput
              defaultValue={doctorData?.password}
              name="password"
              type="password"
              title="Password"
            ></FormInput>
          </div>
          <button className={btnStyle}>Update</button>
        </form>
      </div>

      <div className="mt-10">
        <h1 className="text-[#1b4a9a] font-bold text-lg">Biography</h1>
        <form onSubmit={biosubmitHandle} className="flex gap-x-6">
          <div className="w-[80%] flex items-end">
            <textarea
              placeholder="Write your bio."
              defaultValue={doctorData?.bio && doctorData?.bio}
              className={inputStyle}
              name="bio"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-start items-end">
            <button className={btnStyle}>
              {doctorData?.biography ? "Update" : "Post"}
            </button>
          </div>
        </form>
      </div>


      <div className="mt-10">
        <h1 className="text-[#1b4a9a] font-bold text-lg mb-4">
          Appointment Related Info
        </h1>
        <form onSubmit={appointmentHandle} className="flex gap-x-6 items-end">
          <div className="w-[80%]">
            <div className="grid grid-cols-4 w-full gap-7  my-5">
              {weekDays?.map((item, idx) => (
                <Activeschedule key={idx} day={item}></Activeschedule>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-11 w-full ">
              <FormInput
                defaultValue={0}
                name="firstFee"
                type="number"
                title="At a Glance Fee (Tk)"
              ></FormInput>
              <FormInput
                defaultValue={0}
                name="followupFee"
                type="number"
                title="Follow-up Fee (Tk)"
              ></FormInput>
            </div>
          </div>
          <button className={btnStyle}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorBasicInfo;
