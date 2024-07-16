import { Helmet } from "react-helmet-async";
import HomeMiddle from "../../components/pageComponents/Home/HomeMiddle";
import AgainVerification from "../../components/againVerification";
import { useSelector } from "react-redux";

const Home = () => {
  const userInfo = useSelector((state) => state.registration.userInfo);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {!userInfo.verified && <AgainVerification />}

      <div className="mt-5 container">
        <div>
          <HomeMiddle />
        </div>
      </div>
    </>
  );
};

export default Home;
