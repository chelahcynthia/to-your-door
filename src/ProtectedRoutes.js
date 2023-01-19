import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
  if (localStorage.getItem("token") && localStorage.getItem("user")) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;