import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AuthChoice from "./pages/auth/AuthChoice";
import Login from "./pages/auth/Login";
import ClientSignup from "./pages/auth/ClientSignup";
import TalentSignup from "./pages/auth/TalentSignup";
import ClientHome from "./pages/client/ClientHome";
import TalentHome from "./pages/talent/TalentHome";
import EmailVerify from "./pages/EmailVerify";

import Protected from "./util/Protected";
import LogoutSuccess from "./pages/LogoutSuccess";
import ClientProtection from "./util/ClientProtection";
import TalentProtection from "./util/TalentProtection";
import { GlobalProvider } from "./store/Context";
import GettingStarted from "./pages/client/job_posting_process/GettingStarted";
import JobTitle from "./pages/client/job_posting_process/JobTitle";
import Skills from "./pages/client/job_posting_process/Skills";
import Scope from "./pages/client/job_posting_process/Scope";
import Budget from "./pages/client/job_posting_process/Budget";
import ReviewPost from "./pages/client/job_posting_process/ReviewPost";
import TalentGetStarted from "./pages/talent/TalentGetStarted";
import TalentProjects from "./pages/talent/TalentProjects";
import TalentClients from "./pages/talent/TalentClients";
import TalentActivities from "./pages/talent/TalentActivities";
import TalentPayment from "./pages/talent/TalentPayment";
import TalentSettings from "./pages/talent/TalentSettings";

const App = () => {
  const user_type = localStorage.getItem("hiresset_user_type");

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Protected user_type={user_type}>
                <Landing />
              </Protected>
            }
          />
          <Route path="/register-as" element={<AuthChoice />} />
          <Route
            path="/login"
            element={
              <Protected user_type={user_type}>
                <Login />
              </Protected>
            }
          />
          <Route
            path="/client_signup"
            element={
              <Protected user_type={user_type}>
                <ClientSignup />
              </Protected>
            }
          />
          <Route
            path="/talent_signup"
            element={
              <Protected user_type={user_type}>
                <TalentSignup />
              </Protected>
            }
          />
          <Route
            path="/client_home"
            element={
              <ClientProtection user_type={user_type}>
                <ClientHome />
              </ClientProtection>
            }
          />
          <Route
            path="/talent_home"
            element={
              <TalentProtection user_type={user_type}>
                <TalentHome />
              </TalentProtection>
            }
          />
          <Route path="/email_verify" element={<EmailVerify />} />
          <Route path="/logout_success" element={<LogoutSuccess />} />
          <Route path="/getting_started" element={<GettingStarted />} />
          <Route path="/title" element={<JobTitle />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/review_job_post" element={<ReviewPost />} />
          <Route path="/talent_get_started" element={<TalentGetStarted />} />
          <Route path="/talent_projects" element={<TalentProjects />} />
          <Route path="/talent_clients" element={<TalentClients />} />
          <Route path="/talent_activity" element={<TalentActivities />} />
          <Route path="/talent_payment" element={<TalentPayment />} />
          <Route path="/talent_settings" element={<TalentSettings />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
