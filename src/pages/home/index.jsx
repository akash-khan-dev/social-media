/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import HomeMiddle from "../../components/pageComponents/Home/HomeMiddle";
import AgainVerification from "../../components/againVerification";
import { useSelector } from "react-redux";
import ShowPost from "../../components/pageComponents/Home/HomeMiddle/ShowPost";

const Home = ({ post, setPostPopupVisible }) => {
  const userInfo = useSelector((state) => state.registration.userInfo);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {!userInfo.verified && <AgainVerification />}

      <div className="mt-5 container">
        <div>
          <HomeMiddle post={post} setPostPopupVisible={setPostPopupVisible} />
        </div>
        <div>
          {post.data.map((item) => (
            <ShowPost key={item._id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
