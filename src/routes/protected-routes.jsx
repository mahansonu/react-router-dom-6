import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const ProtectedRoutes = () => {
  const {token} = useAuth();
  if(!token) return <Navigate to="/login" />
  return <Outlet />
}

export default ProtectedRoutes;