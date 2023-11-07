import React from "react";
import { useRouteError, Link } from "react-router-dom";

const MainErrorWrapper = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex gap-4 flex-col items-center justify-center w-full p-8">
      <h1 className="text-xl">Oops!</h1>
      <p>Sorry, an expected error has occured.</p>
      <p> {error.statusText || error.message}</p>
      <Link to="/" className=" underline text-blue-800">Go to Home</Link>
    </div>
  )
}

export default MainErrorWrapper;