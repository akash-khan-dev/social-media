/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { IoCloseCircleOutline, IoSearch } from "react-icons/io5";
import {
  useAddSearchHistoryMutation,
  useGetSearchHistoryQuery,
  useSearchQueryMutation,
} from "../../../../StateFeature/api/authApi";
import { Link } from "react-router-dom";
import avatar from "../../../../../public/postBackgrounds/man.jpg";

const SearchBox = () => {
  const InputRef = useRef(null);
  const [searchIconVisible, setSearchIconVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery] = useSearchQueryMutation();
  const [addSearchHistory] = useAddSearchHistoryMutation();
  const { data: getSearchHistory = [] } = useGetSearchHistoryQuery();

  useEffect(() => {
    InputRef.current.focus();
  }, []);
  const handleSearch = async () => {
    if (searchTerm === "") {
      setSearchTerm();
    } else {
      const response = await searchQuery(searchTerm).unwrap();
      setSearchResult(response);
    }
  };
  const handleAddSearchHistory = async (searchUser) => {
    const response = await addSearchHistory({ searchUser }).unwrap();
  };
  console.log(getSearchHistory?.search);

  return (
    <>
      <div className=" w-[335px] p-7 shadow-md min-h-[400px] max-h-[70vh] rounded-lg bg-white overflow-y-auto">
        <div className=" flex items-center gap-2 border-2 border-line_color py-2 px-3 rounded-full ">
          <div onClick={() => InputRef.current.focus()}>
            {searchIconVisible && <IoSearch />}
          </div>
          <div>
            <input
              className="w-full focus:outline-none placeholder:font-gilroyNormal font-gilroyMedium text-lg"
              type="text"
              ref={InputRef}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchIconVisible(false)}
              onBlur={() => setSearchIconVisible(true)}
              placeholder="Search"
              onKeyUp={handleSearch}
            />
          </div>
        </div>
        <div className="mt-3">
          {searchResult == "" && (
            <p className="font-gilroyMedium text-sm text-black">
              Recent Search
            </p>
          )}
          <div className="mt-3">
            {getSearchHistory.search && searchResult == "" && (
              <div>
                {getSearchHistory?.search
                  .slice()
                  ?.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  })
                  .map((singleUser) => (
                    <div
                      key={singleUser.user._id}
                      onClick={() =>
                        handleAddSearchHistory(singleUser.user._id)
                      }
                    >
                      <div className="flex justify-between items-center">
                        <div className="w-[95%] flex items-center gap-x-3 mt-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full">
                            <Link to={`/profile/${singleUser?.user?.username}`}>
                              {
                                <img
                                  src={
                                    singleUser?.user.profilePicture || avatar
                                  }
                                  className="w-full h-full object-cover"
                                  alt="profile"
                                />
                              }
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={`/profile/${singleUser?.user?.username}`}
                              className="font-gilroyMedium text-base text-black"
                            >
                              {singleUser?.user?.firstName +
                                " " +
                                singleUser?.user?.lastName}
                            </Link>
                          </div>
                        </div>
                        <div className="cursor-pointer w-[30px] h-[30px] text-secondary_color shadow-md  flex items-center justify-center rounded-full">
                          <IoCloseCircleOutline size={22} />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="mt-3 ">
            {searchResult
              ? searchResult?.map((result) => (
                  <div
                    key={result._id}
                    onClick={() => handleAddSearchHistory(result._id)}
                    className="flex w-full items-center gap-x-3 mt-3"
                  >
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <Link to={`/profile/${result.username}`}>
                        {
                          <img
                            src={result?.profilePicture || avatar}
                            className="w-full h-full object-cover"
                            alt="profile"
                          />
                        }
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/profile/${result.username}`}
                        className="font-gilroyMedium text-base text-black"
                      >
                        {result?.firstName + " " + result?.lastName}
                      </Link>
                    </div>
                  </div>
                ))
              : "no Search Result"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
