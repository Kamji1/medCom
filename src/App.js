import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import React from "react";
import Home from "./home/mhome";
// ADMIN
import AdminSignIn from "./My_admin/admin";
import AdminPortal from "./My_admin/admin_port";
import AdminHomePage from "./My_admin/home";
import AdminReportPage from "./My_admin/report";
import PostPage from "./My_admin/post";

//patient
import PatientSignUp from "./patient/signup";
import PatientSignIn from "./patient/signin";
import AppointmentPage from "./patient/send_appoint";
import ReportPage from "./patient/report";

//doctor
import ProfessionalSignUp from "./doctor/signup";
import ProfessionalSignIn from "./doctor/signin";
import AppointPage from "./doctor/appoint";

// chat
import Chat from "./chat/chat_env";
import MainComponent from "./chat/comp";

// import Admin_Signin from "./admin/signin";
// import Admin_Dashboard from "./admin/dashboard";
// import Doctors from "./admin/doctors";
// import Patients from "./admin/patients";
// import Create_Post from "./admin/create_post";
// import Latest_Updates from "./admin/latest_updates";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ADMIN */}
          <Route path="/AdminSignIn" element={<AdminSignIn />} />
          <Route path="/AdminPortal" element={<AdminPortal />} />
          <Route path="/AdminHomePage" element={<AdminHomePage />} />
          <Route path="/AdminReportPage" element={<AdminReportPage />} />
          <Route path="/PostPage" element={<PostPage />} />


          {/* PATIENT */}
          <Route path="/PatientSignUp" element={<PatientSignUp />} />
          <Route path="/PatientSignIn" element={<PatientSignIn />} />
          <Route path="/AppointmentPage" element={<AppointmentPage />} />
          <Route path="/ReportPage" element={<ReportPage />} />

          {/* DOCTOR */}
          <Route path="/ProfessionalSignUp" element={<ProfessionalSignUp />} />
          <Route path="/ProfessionalSignIn" element={<ProfessionalSignIn />} />
          <Route path="/AppointPage" element={<AppointPage />} />

          {/* CHAT */}
          <Route path="/Chat" element={<Chat />} />
          <Route path="/MainComponent" element={<MainComponent />} />


          {/* ADMIN ROUTE 
          <Route
            exact
            path="/admin/dashboard"
            component={Admin_Dashboard}
          />
          <Route exact path="/doctors" component={Doctors} />
          
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/create_post" component={Create_Post} />
          <Route
            exact
            path="/latest_updates"
            component={Latest_Updates}
          />

          <Route exact path="/admin_signin" component={Admin_Signin} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
