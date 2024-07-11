import { Helmet } from "react-helmet-async";
import HomeMiddle from "../../components/pageComponents/Home/HomeMiddle";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="mt-5">
        <div>
          <HomeMiddle />
        </div>
      </div>
    </>
  );
};

export default Home;
