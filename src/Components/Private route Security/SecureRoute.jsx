import React, { useContext } from 'react';
import { dataProvider } from '../context api/ContextProvider';

const SecureRoute = ({children}) => {
    const{doctorData,loading,invalid}=useContext(dataProvider)

    if(loading){
        return <div className='w-full h-screen flex justify-center items-center'><img src="https://i.gifer.com/ZZ5H.gif" alt="" /></div>
    } else if(doctorData){
        return children
    }
    else if(invalid){
        return <h1>You are not a doctor.</h1>
    }
};

export default SecureRoute;