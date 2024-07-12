import { IoSearch } from "react-icons/io5";
import SearchBox from "./SearchBox";
import { useRef, useState } from "react";
import OutSideClick from "../../../../utils/Click";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const outsideClick = useRef(null);

  // for search box off if click outside
  OutSideClick(outsideClick, () => {
    setShowSearchBox(false);
  });

  return (
    <>
      <div className="flex items-center justify-between ">
        <div>
          <h3 className="font-gilroyBold text-xl text-black">Feeds</h3>
        </div>
        <div className="w-[32%] relative">
          <div
            className=" flex items-center gap-2 border-2 border-line_color py-2 px-3 rounded-full"
            onClick={() => setShowSearchBox(true)}
          >
            <div>
              <IoSearch />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none placeholder:font-gilroyNormal font-gilroyMedium text-lg "
              />
            </div>
          </div>
          <div
            className="absolute top-[-28px] left-[-28px] bg-white"
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
