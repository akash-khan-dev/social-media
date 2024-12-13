import { Helmet } from "react-helmet-async";
import HomeMiddle from "../../components/pageComponents/Home/HomeMiddle";
import Activate from "./Activate";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useVerifiedUserMutation } from "../../StateFeature/api/authApi";
import { loggedInUser } from "../../StateFeature/Slice/authSlice";

const ActivatePage = () => {
  const [verifiedUser] = useVerifiedUserMutation();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const userInfo = useSelector((state) => state.userInformation.userInfo);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    activateUser();
  }, []);

  const activateUser = async () => {
    try {
      const result = await verifiedUser({
        token: token,
        userToken: userInfo.token,
      }).unwrap();
      setSuccess(result.message);
      setError("");
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ ...userInfo, verified: true })
      );
      dispatch(loggedInUser({ ...userInfo, verified: true }));

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      setError(error.data.message);
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };
  return (
    <>
      <>
        <Helmet>
          <title>Activate</title>
        </Helmet>
        <div>
          {success && (
            <Activate
              type={"success"}
              heading="Account Successfully Active"
              message={success}
              loading={loading}
            />
          )}
          {error && (
            <Activate
              type={"error"}
              heading="Account Activation Failed"
              message={error}
              loading={loading}
            />
          )}
        </div>
        <div className="mt-5 container">
          <div>
            <HomeMiddle />
          </div>
        </div>
      </>
    </>
  );
};

export default ActivatePage;
