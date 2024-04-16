import React, { useState } from 'react';

const Activeschedule = ({day}) => {

    // toggle handle.
    const[visible,setVisible]=useState(false)
    const togleHandle=(e)=>{
        setVisible(e.target.checked)
    }

    return (
        <div className='bg-gray-300 pl-3 py-3 rounded-lg overflow-hidden relative'>
            <input onChange={togleHandle} type="checkbox" className="toggle toggle-sm absolute z-20 top-3 right-6"  />
            <div className={visible?"hidden":"w-full h-full absolute top-0 left-0 bg-[#e6e6e6af] z-0"}></div>
            <div className=''>
                <h1 className='mb-2 font-bold'>{day}</h1>
               <div> <input name={day+"start"} className='bg-transparent border-2 rounded-md' type="time" /> To <input name={day+"end"} className='bg-transparent border-2 rounded-md' type="time" /></div>
            </div>
        </div>
    );
};

export default Activeschedule;