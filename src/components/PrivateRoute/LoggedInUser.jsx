import { useSelector } from "react-redux";
import Login from "../pages/login";
import { Outlet } from "react-router-dom";

export const LoggedInUser = () => {
  const user = useSelector((state) => state.registration.userInfo);

  return user ? <Outlet /> : <Login />;
};
