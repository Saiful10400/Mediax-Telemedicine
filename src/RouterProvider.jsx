import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Components/Root";
import Authentication from "./Components/Authentication/Authentication";
import DoctorSignup from "./Components/Authentication/DoctorSignup";
import PatientSignup from "./Components/Authentication/PatientSignup";
import DoctorDashboard from "./Components/Doctor dashboard/DoctorDashboard";
import DoctorProfile from "./Components/Doctor dashboard/components/doctor profile dashboard/DoctorProfile";
import DoctorBasicInfo from "./Components/Doctor dashboard/components/doctor profile dashboard/DoctorBasicInfo";
import DoctorEducationQualification from "./Components/Doctor dashboard/components/doctor profile dashboard/DoctorEducationQualification";
import DoctorWorkExperience from "./Components/Doctor dashboard/components/doctor profile dashboard/DoctorWorkExperience";
import DashboardRoute from "./Components/Doctor dashboard/components/Dashboard route nested/DashboardRoute";
import AllDoctor from "./Components/All doctors/AllDoctor";

export const router=createBrowserRouter([{
    path:"/",
    element:<Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/doctor-dashboard",
            element:<DoctorDashboard></DoctorDashboard>,
            children:[
                {
                    path:"/doctor-dashboard",
                    element:<DashboardRoute></DashboardRoute>
                },
                {
                    path:"/doctor-dashboard/Profile",
                    element:<DoctorProfile></DoctorProfile>,
                    children:[
                        {
                            path:"/doctor-dashboard/Profile",
                            element:<DoctorBasicInfo></DoctorBasicInfo>
                        },
                        {
                            path:"/doctor-dashboard/Profile/Educational-Qualification",
                            element:<DoctorEducationQualification></DoctorEducationQualification>
                        }
                        ,
                        {
                            path:"/doctor-dashboard/Profile/Work-Experiance",
                            element:<DoctorWorkExperience></DoctorWorkExperience>
                        }
                    ]
                }
            ]
        },
        {
            path:"/login",
            element:<Authentication></Authentication>
        },
        {
            path:"/sign-up",
            element:<Authentication></Authentication>
        },
        {
            path:"/sign-up/doctor",
            element:<DoctorSignup></DoctorSignup>
        },
        {
            path:"/sign-up/patient",
            element:<PatientSignup></PatientSignup>
        },
        {
            path:"/all-doctors",
            element:<AllDoctor></AllDoctor>
        }

    ]
}])