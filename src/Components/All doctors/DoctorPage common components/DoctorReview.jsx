import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";
const DoctorReview = () => {
    return (
        <div className='bg-white rounded-lg px-3 py-2'>
            <div className='flex justify-evenly  items-center gap-x-4 border-b-4 border-dotted pb-3'>
                <div className='w-[10%]'>
                    <img className='w-[70px] h-[70px] rounded-full object-cover' src="../../../../public/image/doctor dashboard/doctoravatar.webp" alt="" />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-lg font-bold'>Hasanul Kabir</h1>
                    <h1 className='text-lg font-normal text-gray-500'>Apr 18,2024</h1>
                </div>
                <div className='flex justify-center items-end flex-col gap-x-3 w-[40%]'>
                    <span className='text-xl font-bold'>5</span>
                    <span className='text-xl font-bold flex justify-center gap-x-3 text-yellow-500'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></span>
                </div>
            </div>
            <h1 className='mt-4 text-lg font-medium text-gray-500'>He is really a exelent man.</h1>
        </div>
    );
};

export default DoctorReview;