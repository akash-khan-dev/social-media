import { Helmet } from "react-helmet-async";
import LoginForm from "../../components/authentication/LoginForm";

import AuthLeft from "../../components/authentication/AuthLeft";
import LoginIcon from "../../svg/LoginIcon";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="relative">
        <div className=" hidden lg:block w-[400px] h-[400px] bg-purple-100 rounded-full absolute -top-40 -left-40"></div>
        <div className="flex gap-x-6 items-center justify-center h-screen">
          <div className="w-[50%] mt-20 hidden md:block">
            <AuthLeft
              icon={<LoginIcon />}
              title={"Login for Access"}
              description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                 distinctio asperiores saepe natus id earum. Nesciunt ut voluptate`}
            />
          </div>
          <div className="w-full md:w-[40%] ">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
