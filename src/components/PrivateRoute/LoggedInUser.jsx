import { useSelector } from "react-redux";
import Login from "../../pages/login/index";
import { Outlet } from "react-router-dom";

export const LoggedInUser = () => {
  const user = useSelector((state) => state.userInformation.userInfo);

  return user ? <Outlet /> : <Login />;
};
