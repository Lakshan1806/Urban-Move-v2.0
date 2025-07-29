import { useContext } from "react";
import { UserContext } from "../auth/UserContext";
import SignIn from "../pages/SignIn";
import { Navigate } from "react-router-dom";

function AuthContainer() {
  const { user } = useContext(UserContext);

  return  <SignIn />;
}

export default AuthContainer;
