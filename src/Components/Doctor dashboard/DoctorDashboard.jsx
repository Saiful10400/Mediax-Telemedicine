import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DoctorDashboardNav from './DoctorDashboardNav';
import { IoNotifications } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
const DoctorDashboard = () => {
    const url=useLocation()
   
    
    


    return (
        <div className='flex justify-center items-center gap-x-10 w-[1800px] mx-auto'>
            <div className='w-[15%] border min-h-screen'>
                <DoctorDashboardNav></DoctorDashboardNav>
            </div>
            <div className='w-[85%]  min-h-screen'>
                <div className='h-[100px] w-full rounded-lg bg-[#f7f7f7] flex justify-between items-center px-10'>
                    <h1 className='text-4xl font-bold'>{url.pathname.split("/")[url.pathname.split("/").length-1]}</h1>
                    <div className='flex justify-center items-center gap-x-5'>
                    <button className='text-2xl'><TfiEmail></TfiEmail></button>
                        <button className='text-2xl'><IoNotifications></IoNotifications></button>
                    </div>
                </div>


                <div className='p-4'><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default DoctorDashboard;