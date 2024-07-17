import { useState } from "react";
import FindAccount from "../../components/ForgotPassword/FindAccount";
import ResetPassword from "../../components/ForgotPassword/ResetPassword";
import OtpCode from "../../components/ForgotPassword/OtpCode";
import ChangePassword from "../../components/ForgotPassword/ChangePassword";

const ForgotPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(0);
  const [user, setUser] = useState();

  const renderComponent = () => {
    switch (visible) {
      case 0: {
        return <FindAccount setVisible={setVisible} setUser={setUser} />;
      }
      case 1: {
        if (user) {
          return (
            <ResetPassword
              user={user}
              setUser={setUser}
              setVisible={setVisible}
            />
          );
        }
        return null;
      }
      case 2: {
        if (user) {
          return (
            <OtpCode user={user} setUser={setUser} setVisible={setVisible} />
          );
        }
        return null;
      }
      case 3: {
        if (user) {
          return <ChangePassword />;
        }
        return null;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-purple-100 to-pink-100 via-cyan-100 flex items-center justify-center">
        {renderComponent()}
      </div>
    </>
  );
};

export default ForgotPassword;
