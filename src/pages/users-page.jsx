import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await users.json();
  return {
    users
  }
}

const UsersPage = () => {
  const {users} = useLoaderData();
  return (
    <>
      <h1 className="block text-xl font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex gap-4">
            <Link to={`/users/${user.id}/${user.username}`} className="underline text-blue-800"><span>{user.name}</span></Link>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.website}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UsersPage;