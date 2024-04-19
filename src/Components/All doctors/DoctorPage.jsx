import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaInfo } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import WorkExperience from "./DoctorPage common components/WorkExperience";
import DoctorReview from "./DoctorPage common components/DoctorReview";
import FormInput from "../../Common component/FormInput";
import "./doctorPage.css";
import { dataProvider } from "../context api/ContextProvider";
const DoctorPage = () => {
  const { data } = useLoaderData();
  console.log(data);

  // get patient data.
  const{personData}=useContext(dataProvider)
  console.log(personData)

  // doctor eudcation degree handle.
  let educaiton = [];
  data?.education?.map((item) =>
    educaiton.push(`${item?.degreeName}(${item?.subject})`)
  );
  educaiton = educaiton.join(", ");

  //    Hanle doctor current work place.
  let currentWorkPlace = data?.worked?.find(
    (item) => item?.period?.end === "present"
  );

  //   handle website joine date.
  let joinedDate = data?.joinedDate;
  joinedDate = new Date(joinedDate)?.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="lg:w-[1600px] mx-auto">
      {/* main div,which contain doctor data and other stuf. */}
      <div className=" bg-[#f8f7f7] px-[30px] py-[30px] mt-20 rounded-xl">
        <div className="flex gap-x-4">
          <div className="w-[15%]">
            <div className="bg-[#e3e3e3] w-[180px] h-[180px] overflow-hidden rounded-xl">
              <img
                className="object-cover w-full h-full"
                src={data?.profilePhoto}
                alt="doctor Profile Photo."
              />
            </div>
          </div>
          <div className="w-[60%]">
            <div className="flex items-center gap-x-3">
              <h1 className="font-bold text-2xl">
                {data?.title + " " + data?.firstName + " " + data?.lastName}
              </h1>{" "}
              <span className="bg-[#34c300] text-white rounded-lg text-xs font-semibold px-2 py-1">
                Online
              </span>{" "}
              <span className="text-[#e07b7b] text-2xl">
                <FaRegHeart />
              </span>
            </div>
            <h1 className="font-semibold my-1">{educaiton}</h1>
            <h1 className="inline-block text-white bg-[#2563eb] text-base font-medium rounded-md px-2">
              {data?.speciality}
            </h1>
            <h1 className="mt-1">
              Working at{" "}
              <span className="font-bold">
                {currentWorkPlace?.instituteName}
              </span>
            </h1>
          </div>
          <div className="w-[25%] text-center">
            <h1 className="font-bold text-xl">Consultation Fee</h1>
            <h1 className="font-bold">
              <span className="text-2xl text-[#136afb]">
                ৳ {data?.appointmentData?.firstFee}
              </span>{" "}
              (incl. VAT)
            </h1>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn mt-5 text-white font-bold text-lg rounded-full bg-[#34c300]"
            >
              <span>
                <FaVideo />
              </span>
              See Doctor
            </button>
          </div>
        </div>
        {/* contain doctor experience,id,rating etc */}
        <div className="flex gap-x-16 mt-8">
          <div>
            <h1 className="text-xl font-medium text-gray-500">
              Total Experience
            </h1>
            <h1 className="font-bold text-lg">{data?.experience}+ Years</h1>
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-500">BMDC Number</h1>
            <h1 className="font-bold text-lg">{data?.regNo}</h1>
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-500">Joined Mediax</h1>
            <h1 className="font-bold text-lg">{joinedDate}</h1>
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-500">
              Total Rating(100)
            </h1>
            <h1 className="font-bold text-lg flex items-center gap-x-2">
              <span className="text-yellow-500 text-2xl">
                <TiStarFullOutline />
              </span>{" "}
              4.3
            </h1>
          </div>
        </div>
      </div>

      {/* doctor data display with tab. */}
      <div className="bg-[#f8f7f7] px-[30px] py-[30px] mt-5 rounded-xl">
        <Tabs>
          <TabList>
            <Tab>
              <span className="flex text-md font-bold items-center gap-x-[6px]">
                <FaInfo></FaInfo> Info
              </span>
            </Tab>
            <Tab>
              <span className="flex text-md font-bold items-center gap-x-[6px]">
                <MdWork></MdWork> Experience
              </span>
            </Tab>
            <Tab>
              <span className="flex text-md font-bold items-center gap-x-[6px]">
                <MdRateReview></MdRateReview> Reviews
              </span>
            </Tab>
          </TabList>

          <TabPanel>
            {/* doctor details like bio and appointment credentials. */}
            <div className="flex gap-x-6">
              <div className="w-[50%] bg-white p-4 rounded-lg">
                {/* doctor bio. */}
                <h1 className="font-bold text-xl">
                  {data?.title + " " + data?.firstName + " " + data?.lastName} -{" "}
                  <span className="text-lg font-medium">{educaiton}</span>
                </h1>
                <p className="mt-3 font-normal text-lg text-gray-600">
                  {data?.bio}
                </p>
              </div>
              <div className="w-[50%]">
                <div className="bg-white p-2 rounded-lg">
                  <h1 className="font-bold text-lg">Availability</h1>
                  <div className="border-l-2 pl-2 border-[#4285f4] mt-3 py-1">
                    <h1 className="font-bold text-md text-gray-400">
                      Week days
                    </h1>
                    <div className="grid grid-cols-2 w-[60%] gap-y-4">
                      {data?.appointmentData?.appointmentSchedule?.map(
                        (item, idx) => {
                          return (
                            <h1 className="font-bold text-md" key={idx}>
                              {item?.dayName}{" "}
                              {`(${item?.start + "-" + item?.end})`}
                            </h1>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg mt-3">
                  <h1 className="font-bold text-lg">At a Glance</h1>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-l-2 pl-2 border-[#4285f4] mt-3 py-1">
                      <h1 className="font-bold text-md text-gray-400">
                        Consultation Fee
                      </h1>
                      <div>
                        <h1 className="font-bold">
                          <span className="text-lg">
                            ৳ {data?.appointmentData?.firstFee}
                          </span>{" "}
                          (incl. VAT)
                        </h1>
                      </div>
                    </div>

                    <div className="border-l-2 pl-2 border-[#4285f4] mt-3 py-1">
                      <h1 className="font-bold text-md text-gray-400">
                        Follow-up Fee
                      </h1>
                      <div>
                        <h1 className="font-bold">
                          <span className="text-lg">
                            ৳ {data?.appointmentData?.followupFee}
                          </span>{" "}
                          (incl. VAT)
                        </h1>
                        <h1 className="font-semibold">(with in 14 days)</h1>
                      </div>
                    </div>

                    <div className="border-l-2 pl-2 border-[#4285f4] mt-3 py-1">
                      <h1 className="font-bold text-md text-gray-400">
                        Patient Attended
                      </h1>
                      <div>
                        <h1 className="font-bold">200</h1>
                      </div>
                    </div>
                    <div className="border-l-2 pl-2 border-[#4285f4] mt-3 py-1">
                      <h1 className="font-bold text-md text-gray-400">
                        Doctor Code
                      </h1>
                      <div>
                        <h1 className="font-bold">{data?._id.slice(0, 6)}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 gap-x-3">
              {data?.worked?.map((item, idx) => (
                <WorkExperience data={item} key={idx}></WorkExperience>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-2 gap-3">
              <DoctorReview></DoctorReview>
              <DoctorReview></DoctorReview>
              <DoctorReview></DoctorReview>
              <DoctorReview></DoctorReview>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* appoinement reservation form modal. */}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div id="modal_container" className="modal-box max-w-[700px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* main container. */}
          <div>
            <div className="flex justify-between items-end border-b-4 border-[#8eb9b3] pb-4">
              <div className="w-[50%]">
                <h1 className="text-2xl font-bold">
                  Doctor Appointment <br /> Request Form
                </h1>
              </div>
              <div className="w-[50%] text-end">
                <h1 className="text-xl font-bold mb-1">
                  {data?.title + " " + data?.firstName + " " + data?.lastName}
                </h1>
                <h1 className="text-xs font-semibold">{educaiton}</h1>
                <h1 className="mt-2 font-bold">{data?.phoneNumber}</h1>
                <h1 className="font-bold">{data?.email}</h1>
              </div>
            </div>
            {/* form start form here. */}
            <form className=" mt-4">


              <div className="grid grid-cols-2 gap-x-4">
              <FormInput
                defaultValue={`${personData?.firstName} ${personData?.lastName}`}
                name="name"
                type="text"
                title="Patient Name"
              ></FormInput>
              <FormInput
                defaultValue={personData?.email}
                name="email"
                type="email"
                title="Patient Email"
              ></FormInput>
              <FormInput
                name="phone"
                type="number"
                title="Patient Phone"
              ></FormInput>
              <FormInput
                name="gender"
                type="text"
                title="Patient Gender"
              ></FormInput>
              <FormInput
                name="age"
                type="number"
                title="Patient Age"
              ></FormInput>
              <FormInput
                name="height"
                type="number"
                title="Patient height (c.m)"
              ></FormInput>
              <FormInput
                name="weight"
                type="number"
                title="Patient weight (k.m)"
              ></FormInput>
              <FormInput
                name="appDate"
                type="date"
                title="Appointment Date"
              ></FormInput>
              <FormInput
                name="appTime"
                type="time"
                title="Appointment Time"
              ></FormInput>
              <FormInput
                name="appFor"
                type="text"
                title="Appointment For"
              ></FormInput>
              <FormInput
                name="mainProblem"
                type="text"
                title="Patient Main Problem"
              ></FormInput>
              <FormInput
                name="otherProblems"
                type="text"
                title="Patient otherProblems (write with comma)"
              ></FormInput>
              </div>
              <FormInput
                name="documents"
                type="file"
                title="Upload Necessary Files"
              ></FormInput>
             


            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DoctorPage;
