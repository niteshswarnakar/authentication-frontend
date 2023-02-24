import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRouteSecond = () => {
  const [isLoggedIn] = useState(Boolean(localStorage.getItem("email")));

  return isLoggedIn ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRouteSecond;
