import Profile from "../components/pageComponents/Home/HomeLeft/Profile";
import { Outlet } from "react-router-dom";
import CreatePost from "../components/pageComponents/Home/HomeMiddle/CreatePost";

// eslint-disable-next-line react/prop-types
const LayOut = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[1fr,3fr,1fr] mx-5 gap-x-7  mt-10">
          <div>
            <Profile />
          </div>
          <div>
            <div>
              <CreatePost />
            </div>
            <Outlet />
          </div>
          <div>3</div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
