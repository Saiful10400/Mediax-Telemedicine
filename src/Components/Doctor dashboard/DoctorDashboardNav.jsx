import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./DoctorDashboardNav.css"
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import doctorAvatar from "../../../public/image/doctor dashboard/doctoravatar.webp"
import { dataProvider } from '../context api/ContextProvider';
import { axiosPublic } from '../../Custom hoocks/useAxiosPublic';

const DoctorDashboardNav = () => {
   





const {person,logoutHandle}=useContext(dataProvider)
    const[doctorData,setDoctorData]=useState(null)
    useEffect(()=>{
    if(person?.email){
        axiosPublic.post("/get-a-doctor-data",{email:person?.email})
    .then(res=>{
        setDoctorData(res.data)
    })
    }
    },[person])


    const li=<>
    <NavLink className={""} to={"/doctor-dashboard/Profile"}><li className='text-xl flex justify-center items-center gap-3'><FaUser /><span>Profile</span></li></NavLink>
    <NavLink className={""} to={"/doctor-dashboard"}><li className='text-xl flex justify-center items-center gap-3'><MdSpaceDashboard /> <span>Dashboard</span></li></NavLink>
    <button className='hover:text-[#164dc4] hover:font-bold transition-all duration-200' onClick={()=>logoutHandle()}  to={"/doctor-dashboard/logout"}><li className='text-xl flex justify-center items-center gap-3'><MdLogout /> <span>Logout</span></li></button>
     
    </>

 





    return (
        <div className='bg-[#f7f7f7] min-h-screen'>
            <div>
                <div className='w-[250px] h-[250px] mx-auto rounded-full overflow-hidden'>
                    <img className='w-full' src={doctorData?.profilePhoto?doctorData?.profilePhoto: doctorAvatar} alt="" />
                </div>
                <div className='text-center mt-3 text-[#023bbd]'>
                <h1 className='text-2xl font-bold'>{doctorData?.title+" "+doctorData?.firstName+" "+doctorData?.lastName}</h1>
                <h1 className='text-sm font-normal mt-2'>MBBS,FCPS-MD(Medicine),MCPS</h1>
                </div>

            </div>
            <ul className='flex flex-col justify-center items-start pl-9 gap-y-4 mt-40'>
                {li}
            </ul>
        </div>
    );
};

export default DoctorDashboardNav;