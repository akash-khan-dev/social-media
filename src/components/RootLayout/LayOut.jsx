import Profile from "../pageComponents/Home/HomeLeft";
import { Outlet } from "react-router-dom";
import Header from "../pageComponents/Home/HomeMiddle/Header";
import RightHome from "../pageComponents/Home/HomeRight";
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
              <Header />
            </div>
            <Outlet />
          </div>
          <div>
            <RightHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
