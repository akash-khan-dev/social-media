import { Helmet } from "react-helmet-async";
import Profile from "../../components/pageComponents/Home/HomeLeft/Profile";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="grid grid-cols-[1fr,3fr,1fr] mx-5">
        <div className="">
          <Profile />
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  );
};

export default Home;
