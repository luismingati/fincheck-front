import { Navigate, Outlet } from "react-router-dom";

interface authGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({isPrivate}: authGuardProps) {
  const signedIn = false;

  if(!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if(signedIn && !isPrivate) {
    return <Navigate to="/" replace />

  }

  return <Outlet />
}