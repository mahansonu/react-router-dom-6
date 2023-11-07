import React from "react";
import { Link } from "react-router-dom";
const AuthProfile = () => {
  return (
    <>
      <h1>This is Profile page page.</h1>
      <Link to="/" className="underline text-blue-800 font-bold">Back to Home</Link>
    </>
  )
}

export default AuthProfile;