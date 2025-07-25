import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import PrimaryLoadingScreen from "../components/PrimaryLoadingScreen";

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <PrimaryLoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
