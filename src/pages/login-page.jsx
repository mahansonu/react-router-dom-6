import React from "react";
import { useAuth } from "../contexts/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {setToken} = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    setToken('login');
    navigate("/auth", {replace: true})
  }
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <button className="bg-black px-4 py-2 rounded text-white font-bold" onClick={handleLogin}>Press to Login</button>
      <Link to="/" className="underline text-blue-800 font-bold">Back to Home</Link>
    </div>
  )
}

export default Login;