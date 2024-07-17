import { useState } from "react";
import FindAccount from "../../components/ForgotPassword/FindAccount";
import ResetPassword from "../../components/ForgotPassword/ResetPassword";
import OtpCode from "../../components/ForgotPassword/OtpCode";
import ChangePassword from "../../components/ForgotPassword/ChangePassword";

const ForgotPassword = () => {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(3);

  const renderComponent = () => {
    switch (visible) {
      case 0: {
        return <FindAccount />;
      }
      case 1: {
        return <ResetPassword />;
      }
      case 2: {
        return <OtpCode />;
      }
      case 3: {
        return <ChangePassword />;
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
