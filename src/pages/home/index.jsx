import { Helmet } from "react-helmet-async";
import Profile from "../../components/pageComponents/Home/HomeLeft/Profile";
import HomeMiddle from "../../components/pageComponents/Home/HomeMiddel";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="grid grid-cols-[1fr,3fr,1fr] mx-5 gap-x-7  mt-10">
        <div className="">
          <Profile />
        </div>
        <div>
          <HomeMiddle />
        </div>
        <div>3</div>
      </div>
    </>
  );
};

export default Home;
