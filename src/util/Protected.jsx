import React from "react";
import { Navigate } from "react-router";

const Protected = ({ user_type, children }) => {
  if (user_type === "client") {
    return <Navigate to="/client_home" replace />;
  } else if (user_type === "talent") {
    return <Navigate to="/talent_home" replace />;
  } else {
    return children;
  }
};

export default Protected;
