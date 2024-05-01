import React, { useContext } from 'react';
import { dataProvider } from '../context api/ContextProvider';

const Notification = () => {
    const {notishow}=useContext(dataProvider)
    return (
        <div className={`rounded-xl h-[700px] w-[400px] absolute top-[120%] bg-[#edf3ff] bg-green-400 z-10 ${!notishow&&"hidden"}`}>
            hi noti
        </div>
    );
};

export default Notification;