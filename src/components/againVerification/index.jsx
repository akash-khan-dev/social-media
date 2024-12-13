import { useSelector } from "react-redux";
import { useAgainVerificationMutation } from "../../StateFeature/api/authApi";
import { ToastError } from "../../utils/ToastError";
import { ToastSuccess } from "../../utils/ToastSuccess";
import { ToastContainer } from "react-toastify";

const AgainVerification = () => {
  const [againVerification] = useAgainVerificationMutation();
  const userInfo = useSelector((state) => state.userInformation.userInfo);
  const aginVerifiedCode = async () => {
    try {
      const result = await againVerification({ token: userInfo.token });
      ToastSuccess(result?.data?.message);
    } catch (error) {
      ToastError(error?.data?.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="w-3/4 mx-auto bg-white p-4 shadow-md mt-5 rounded-md">
        <h4 className="text-black font-gilroyNormal text-lg">
          Your account is not verified. Please verify your account before it
          gets delete after an hour of creating
        </h4>
        <button
          onClick={aginVerifiedCode}
          className="font-gilroyNormal text-blue text-base hover:underline"
        >
          Click here to again send verification link
        </button>
      </div>
    </>
  );
};

export default AgainVerification;
