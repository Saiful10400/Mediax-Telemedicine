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

const socket=io("http://localhost:5000")
export const dataProvider=createContext(null)



// socket io practice.







const ContextProvider = ({children}) => {



const[person,setPerson]=useState(null)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setPerson(user)
             
        })
        return ()=>unsubscribe
    },[])

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
        logoutHandle,emailAndPasswordsignup,loginWithEmail,person,socket
    }
    return (
       <dataProvider.Provider value={contextData}>
        {children}
       </dataProvider.Provider>
    );
};

export default ContextProvider;