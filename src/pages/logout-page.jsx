import React from "react";
import { useAuth } from "../contexts/auth";
import { useNavigate, Link } from "react-router-dom";

const LogoutPage = () => {
  const {setToken} = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken("");
    navigate("/", {replace: true});
  }

  setTimeout(() => handleLogout(),3000)

  return <>Logout Page</>
}

export default LogoutPage;