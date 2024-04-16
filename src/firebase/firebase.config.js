// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaybuBM9scK6LIsqAHCNNs8icTkkRvqZA",
  authDomain: "telemedicine-5fa0b.firebaseapp.com",
  projectId: "telemedicine-5fa0b",
  storageBucket: "telemedicine-5fa0b.appspot.com",
  messagingSenderId: "1050436547268",
  appId: "1:1050436547268:web:4e1a3facf44167b46b0f91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)