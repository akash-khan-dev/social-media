import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const NotLoginUser = () => {
  const user = useSelector((state) => state.userInformation.userInfo);
  return user ? <Navigate to="/" /> : <Outlet />;
};
