import React, { useContext, useEffect, useState } from 'react';
import DoctorProfileNav from './DoctorProfileNav';
import { Outlet } from 'react-router-dom';
import { axiosPublic } from '../../../../Custom hoocks/useAxiosPublic';
import { dataProvider } from '../../../context api/ContextProvider';

const DoctorProfile = () => {
    const {person}=useContext(dataProvider)
    const[doctorData,setDoctorData]=useState(null)
    useEffect(()=>{
        if(person?.email){
            axiosPublic.post("/get-a-doctor-data",{email:person?.email})
        .then(res=>{
            setDoctorData(res.data)
        })
        }
        },[person])
  
    return (
       <div>
         <div>
            <DoctorProfileNav></DoctorProfileNav>
        </div>
        <div className='mt-7'>
            <Outlet></Outlet>
        </div>
       </div>
    );
};

export default DoctorProfile;