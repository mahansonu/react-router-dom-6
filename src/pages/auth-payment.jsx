import React from "react";
import { Link } from "react-router-dom";
const AuthPayment = () => {
  return (
    <>
      <h1>This is Payment page.</h1>
      <Link to="/" className="underline text-blue-800 font-bold">Back to Home</Link>
    </>
    
  )
}

export default AuthPayment;