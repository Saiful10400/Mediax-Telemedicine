import React, { createContext, useEffect, useState } from 'react';
import {io} from "socket.io-client"
import {
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    
    onAuthStateChanged,
    signInWithPopup,
    signInWithRedirect,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import { axiosPublic } from '../../Custom hoocks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const socket=io("http://localhost:5000")
export const dataProvider=createContext(null)



// socket io practice.







const ContextProvider = ({children}) => {



const[person,setPerson]=useState(null)
// for patient.
const[personData,setPerosnData]=useState(null)
// for doctor
const[doctorData,setDoctordata]=useState(null)
const[loading,setLoading]=useState(true)
// invalid for him,who are not doctor but trying ot signin as a doctor.
const[invalid,setInvalid]=useState(false)

// state for refetch data again.
const[refire,setRefire]=useState(false)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
              setPerson(user)
              //  check patient.
              axiosPublic.post("/get-a-patient-with-email",{email:user.email})
              .then(res=>{
                if(res.data){
                  setPerosnData(res.data)
                }
              })
              // Check doctor.
              axiosPublic.post("/get-a-doctor-data",{email:user.email})
              .then(res=>{
                if(res.data){
                  setDoctordata(res.data)
                  setLoading(false)
                }
              })
            }else{
              setInvalid(true)
              setLoading(false)
            }
             
        })
        return ()=>unsubscribe
    },[refire])
console.log({personData,doctorData,person})

// function for reload state change.
const refetch=()=>{
  setRefire(prev=>!prev)
}



 // all necessary login credentials is here.................

  // 1.logout handle.
  const logoutHandle = () => {
    return signOut(auth);
  };
  // 2.google login.
  const googleLoginHandle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithRedirect(auth, googleAuthProvider);
  };
  // 3.signup with e-mail and password.
  const emailAndPasswordsignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // 4.signin with email and password.
  const loginWithEmail=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }



    const contextData={
        logoutHandle,emailAndPasswordsignup,loginWithEmail,person,socket,personData,doctorData,loading,invalid,refetch
    }
    return (
       <dataProvider.Provider value={contextData}>
        {children}
       </dataProvider.Provider>
    );
};

export default ContextProvider;