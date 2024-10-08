import Profile from "../pageComponents/Home/HomeLeft";
import { Outlet } from "react-router-dom";
import Header from "../pageComponents/Home/HomeMiddle/Header";
import RightHome from "../pageComponents/Home/HomeRight";
// eslint-disable-next-line react/prop-types
const LayOut = () => {
  return (
    <>
      <div className="container">
        <div className="lg:grid lg:grid-cols-[70px,4fr,1fr] xl:grid-cols-[1fr,3fr,1fr] mx-2 md:mx-5 gap-x-7 mt-6 md:mt-10 ">
          <div className="hidden lg:block">
            <Profile />
          </div>
          <div>
            <div>
              <Header />
            </div>
            <Outlet />
          </div>
          <div className="hidden lg:block">
            <RightHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
