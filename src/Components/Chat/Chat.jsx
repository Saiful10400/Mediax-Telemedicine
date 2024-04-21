import React, { useContext } from 'react';
import { dataProvider } from '../context api/ContextProvider';

const   Chat = ({show}) => {
    const{chatShow}=useContext(dataProvider)
    return (
        <div className={`rounded-xl h-[700px] w-[400px] absolute top-[120%] bg-[#edf3ff] z-10 ${!chatShow&&"hidden"}`}>
            
        </div>
    );
};

export default Chat;