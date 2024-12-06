/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";
import SearchBox from "./SearchBox";
import { useRef, useState } from "react";
import OutSideClick from "../../../../utils/Click";
import LeftData from "../HomeLeft/LeftData";
import { ProfileData } from "../HomeLeft/Data";
import { useParams } from "react-router-dom";

const Header = ({ path }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const outsideClick = useRef(null);
  const { username } = useParams();

  // for search box off if click outside
  OutSideClick(outsideClick, () => {
    setShowSearchBox(false);
  });
  const SetTitle = () => {
    if (path === "/") {
      return "News Feeds";
    } else if (path === "/profile") {
      return "Profile";
    } else if (path === "/messages") {
      return "Messages";
    } else if (path === "/friends") {
      return "Friends";
    } else if (path.startsWith("/profile") && username) {
      return "Profile";
    }
  };

  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="hidden lg:block">
          <h3 className="font-gilroyBold text-xl text-black">{SetTitle()}</h3>
        </div>
        <div className="lg:hidden w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-black rounded-full "></div>
        <div className="w-[50%] md:w-[80%] lg:hidden flex gap-x-3 sm:gap-5 md:gap-x-7  items-center justify-center">
          {ProfileData.map((data, i) => (
            <LeftData key={i} data={data} />
          ))}
        </div>
        <div className="lg:w-[32%] relative">
          <div
            className="w-[40px] h-[40px] lg:w-full flex items-center justify-center gap-2 border-2 border-line_color py-4 px-4 rounded-full"
            onClick={() => setShowSearchBox(true)}
          >
            <div>
              <IoSearch />
            </div>
            <div className="hidden lg:block w-[90%]">
              <input
                type="text"
                placeholder="Search"
                className="w-full focus:outline-none placeholder:font-gilroyNormal font-gilroyMedium text-lg "
              />
            </div>
          </div>
          <div
            className="absolute -top-3 -right-2 lg:top-[-28px] lg:left-[-28px] bg-white z-10"
            ref={outsideClick}
          >
            {showSearchBox && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
