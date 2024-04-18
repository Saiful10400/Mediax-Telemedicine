import React from 'react';

const WorkExperience = ({data}) => {
    const{department,designation,experience,instituteName,period}=data
    return (
        <div className='bg-white rounded-xl px-4 py-2'>
            <h1 className='text-xl font-bold'>{instituteName}</h1>
            <div className='grid grid-cols-3 gap-y-3 mt-2'>
                <div>
                    <h1 className='font-bold text-md text-gray-400'>Designation</h1>
                    <h1 className="font-bold">{designation}</h1>
                </div>
                <div>
                    <h1 className='font-bold text-md text-gray-400'>Departmetn</h1>
                    <h1 className="font-bold">{department}</h1>
                </div>
                <div>
                    <h1 className='font-bold text-md text-gray-400'>Employment Period</h1>
                    <h1 className="font-bold">{period?.start+" "+"To"+" "+period?.end}</h1>
                </div>
                <div>
                    <h1 className='font-bold text-md text-gray-400'>Period</h1>
                    <h1 className="font-bold">{experience}</h1>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;