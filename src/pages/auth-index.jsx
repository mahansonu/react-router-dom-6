import React from "react";
import { Link } from "react-router-dom";
const AuthIndex = () => {
  return (
    <>
      <h1>This is Dashboard page.</h1>
      <Link to="/" className="underline text-blue-800 font-bold">Back to Home</Link>
    </>
  )
}

export default AuthIndex;