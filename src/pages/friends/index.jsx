import { useEffect, useState } from "react";
import FriendsCard from "../../components/friendsCard";
import { useGetAllFriendsListQuery } from "../../StateFeature/api/authApi";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
const Friends = () => {
  const location = useLocation();
  const [count, setCount] = useState(4);
  const { data: friendsData, refetch } = useGetAllFriendsListQuery();
  useEffect(() => {
    if (location.pathname === "friends") {
      refetch();
    }
  }, [location.pathname, refetch]);

  console.log(friendsData);

  return (
    <>
      <Helmet>
        <title>Friends</title>
      </Helmet>
      <div>
        <div className="border-b border-line_color pb-2 flex items-center justify-between ">
          <h1 className=" text-base font-gilroyMedium text-black">
            All Friends
          </h1>
          {count < friendsData?.friends?.length && (
            <button
              onClick={() => setCount((prev) => prev + 4)}
              className="bg-blue text-white px-3 py-2 text-sm font-gilroyMedium rounded-md"
            >
              See All
            </button>
          )}
        </div>
        <div className="bg-gray-100  p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {friendsData?.friends?.slice(0, count).map((friend) => (
              <div key={friend._id}>
                <FriendsCard friend={friend} type="friend" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className=" border-b border-line_color pb-2 flex items-center justify-between ">
          <h1 className=" text-base font-gilroyMedium text-black">
            Friends Request
          </h1>
          {count < friendsData?.request?.length && (
            <button
              onClick={() => setCount((prev) => prev + 4)}
              className="bg-blue text-white px-3 py-2 text-sm font-gilroyMedium rounded-md"
            >
              See All
            </button>
          )}
        </div>
        <div className="bg-gray-100 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {friendsData?.request?.map((friend) => (
              <div key={friend._id}>
                <FriendsCard refetch={refetch} friend={friend} type="request" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="border-b border-line_color pb-2 flex items-center justify-between ">
          <h1 className="text-base font-gilroyMedium text-black">
            Send Request
          </h1>
          {count < friendsData?.userSendRequest?.length && (
            <button
              onClick={() => setCount((prev) => prev + 4)}
              className="bg-blue text-white px-3 py-2 text-sm font-gilroyMedium rounded-md"
            >
              See All
            </button>
          )}
        </div>
        <div className="bg-gray-100 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {friendsData?.userSendRequest?.map((friend) => (
              <div key={friend._id}>
                <FriendsCard
                  refetch={refetch}
                  friend={friend}
                  type="sendRequest"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
