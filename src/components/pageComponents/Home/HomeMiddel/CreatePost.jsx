import { IoSearch } from "react-icons/io5";
import SearchBox from "./SearchBox";
import { useState } from "react";

const CreatePost = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
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
          <div className="absolute top-[-28px] left-[-28px] bg-white">
            {showSearchBox && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
