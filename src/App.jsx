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
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
