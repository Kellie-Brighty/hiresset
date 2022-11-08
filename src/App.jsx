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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register-as" element={<AuthChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client_signup" element={<ClientSignup />} />
        <Route path="/talent_signup" element={<TalentSignup />} />
        <Route path="/client_home" element={<ClientHome />} />
        <Route path="/talent_home" element={<TalentHome />} />
        <Route path="/email_verify" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
};

export default App;
