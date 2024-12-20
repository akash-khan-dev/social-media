/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  const InputRef = useRef(null);
  const [searchIconVisible, setSearchIconVisible] = useState(true);
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  return (
    <>
      <div className=" w-[335px] p-7 shadow-md min-h-[400px] max-h-[70vh] rounded-lg bg-white">
        <div className=" flex items-center gap-2 border-2 border-line_color py-2 px-3 rounded-full ">
          <div onClick={() => InputRef.current.focus()}>
            {searchIconVisible && <IoSearch />}
          </div>
          <div>
            <input
              className="w-full focus:outline-none placeholder:font-gilroyNormal font-gilroyMedium text-lg"
              type="text"
              ref={InputRef}
              onFocus={() => setSearchIconVisible(false)}
              onBlur={() => setSearchIconVisible(true)}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="mt-3">
          <p className="font-gilroySemibold text-sm text-black">
            Recent Search
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
