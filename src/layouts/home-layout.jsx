import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";
const resourceLinks = [
  {
    label: 'Users',
    link: 'users'
  },
  {
    label: 'Posts',
    link: 'posts'
  },
  {
    label: 'ToDo',
    link: 'todos'
  },
  {
    label: 'Comments',
    link: 'comments'
  }
]

const protectedLinks = [
  {
    label: 'Dashboard',
    link: '/auth'
  },
  {
    label: 'Profile',
    link: '/auth/profile'
  },
  {
    label: 'Payment',
    link: '/auth/payment'
  }
]
export default function HomeLayout() {
  const {token} = useAuth();
  return (
    <div>
      <div className="fixed w-[160px]">
        <ul>
          {resourceLinks.map((url) => (
            <li key={url.link}><Link to={url.link}>{url.label}</Link></li>
          ))}
        </ul>
        {!token && <Link to="/login" className="text-green-600 bg-green-100 px-2 rounded">Login</Link>}
        <h1 className="text-xl font-bold my-4">Protected Routes</h1>
        <ul>
          {protectedLinks.map((url) => (
            <li key={url.link}><Link to={url.link}>{url.label}</Link></li>
          ))}
        </ul>
        {token && <Link to="/logout" className="text-red-300 font-bold text-center">Logout</Link>}
      </div>
      <main className="flex ml-[160px] flex-col">
        <Outlet />
      </main>
    </div>
  )
}