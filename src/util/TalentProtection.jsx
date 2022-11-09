import React from "react";
import { Navigate } from "react-router";

const TalentProtection = ({ user_type, children }) => {
  if (user_type === "client") {
    return <Navigate to="/client_home" replace />;
  } else {
    return children;
  }
};

export default TalentProtection;
