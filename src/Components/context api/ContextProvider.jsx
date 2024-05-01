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

// connect socket io server.
const socket=io("http://localhost:5000")




export const dataProvider=createContext(null)




const ContextProvider = ({children}) => {



const[person,setPerson]=useState(null)
// for patient.
const[personData,setPerosnData]=useState(null)
// for doctor
const[doctorData,setDoctordata]=useState(null)
const[loading,setLoading]=useState(true)
// invalid for him,who are not doctor but trying ot signin as a doctor.
const[invalid,setInvalid]=useState(false)
// chat show or not.
const[chatShow,setChatShow]=useState(false)
// notification show or not.
const[notishow,setNotishow]=useState(false)
// user type.
const[userType,setType]=useState(null)



// state for refetch data again.
const[refire,setRefire]=useState(false)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
              
              setPerson(user)
              //  check patient.
              axiosPublic.post("/get-a-patient-with-email",{email:user?.email})
              .then(res=>{
   
                if(res.data){
                  setPerosnData(res.data.data)
                  // CONNECT SCKET SERVER as a patient.
                  if(res.data.data){
                    setType("patient")
                    socket.emit("connection",{email:res.data?.data?.email,photoUrl:res.data?.data?.profilePhoto,type:"patient"})
                  }
                }
              })
              // Check doctor.
              axiosPublic.post("/get-a-doctor-data",{email:user?.email})
              .then(res=>{
                if(res.data){
                  setDoctordata(res.data)
                  setLoading(false)
                 if(res.data.publish){
                   // connect socket server as a doctor.
                   setType("doctor")
                  socket.emit("connection",{email:res.data?.email,photoUrl:res.data?.profilePhoto,type:"doctor"})
                 }
                 
                  
                }
              })
            }else{
              setInvalid(true)
              setLoading(false)
            }
             
        })
        return ()=>unsubscribe
    },[refire])


// function for reload state change.
const refetch=()=>{
  setRefire(prev=>!prev)
}

// #### authentication related functions. ####

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



  // socket io related events handle. ####

  // get connected doctors.
  const[activeAccounts,setActiveDoctors]=useState([])
  useEffect(()=>{
    socket.on("activeAccounts",(data)=>setActiveDoctors(data))
  },[socket])


  // ## triggar chat conversation when a user is connected with a doctor.
  const[chatRefetch,setChatRefetch]=useState(false)
  const[conversation,SetUserConversaion]=useState(null)
  useEffect(()=>{
    if(person){
      axiosPublic.post("/get-a-user-chat",{email:person.email})
      .then(res=>SetUserConversaion(res.data))
      socket.on("chatConnected",data=>SetUserConversaion(data))
    }
  },[person,socket,chatRefetch])

console.log(conversation)

  // change chat show or not.
const setchat=()=>{ 
  if(person){
    axiosPublic.post("/modify-a-user-chat-view",{email:person.email})
    .then(()=>setChatRefetch(prev=>!prev))
  }
  setChatShow(prev=>!prev)
  setNotishow(false)
}
 
// change noti show or not.

const setNoti=()=>{
  setNotishow(prev=>!prev)
  setChatShow(false)
}

    const contextData={
        logoutHandle,emailAndPasswordsignup,setNoti,notishow,loginWithEmail,userType,person,socket,personData,doctorData,loading,invalid,refetch,setchat,chatShow,activeAccounts,conversation
    }
    return (
       <dataProvider.Provider value={contextData}>
        {children}
       </dataProvider.Provider>
    );
};

export default ContextProvider;