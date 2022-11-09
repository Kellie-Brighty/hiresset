import React from "react";
import { Navigate } from "react-router";

const ClientProtection = ({ user_type, children }) => {
  if (user_type === "talent") {
    return <Navigate to="/talent_home" replace />;
  } else {
    return children;
  }
};

export default ClientProtection;
