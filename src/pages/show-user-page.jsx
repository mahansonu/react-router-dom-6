import React from "react";
import { Link, useParams } from "react-router-dom";

const ShowUserPage = () => {
  const {userId, userName} = useParams();
  return (
    <>
      <h1>this is individual page.</h1>
      <p>Passed userId is: {userId}</p>
      <p>Passed userName is: {userName}</p>
      <Link to="/users" className="underline text-blue-800">Go to Users Listing</Link>
    </>
  )
}

export default ShowUserPage;