import React from 'react';
import "./doctorProfileNav.css"
import { NavLink } from 'react-router-dom';
const DoctorProfileNav = () => {
    const li=<>
    <li>
        <NavLink to={"/doctor-dashboard/Profile"}>Basic Info</NavLink></li>
        <li> <NavLink   to={"/doctor-dashboard/Profile/Educational-Qualification"}>Educational Qualification</NavLink></li>
        <li>  <NavLink to={"/doctor-dashboard/Profile/Work-experiance"}>Work Experiance</NavLink></li>
      
    </>
    return (
        <div>
            <ul className='flex justify-start gap-x-14 items-center text-xl font-normal'>
                {li}
            </ul>
        </div>
    );
};

export default DoctorProfileNav;