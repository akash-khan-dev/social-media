import { useEffect } from "react";
import FriendsCard from "../../components/friendsCard";
import { useGetAllFriendsListQuery } from "../../StateFeature/api/authApi";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
const Friends = () => {
  const location = useLocation();
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
        <h1 className="border-b border-line_color pb-2 text-base font-gilroyMedium text-black">
          All Friends
        </h1>
        <div className="bg-gray-100  p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {friendsData?.friends?.map((friend) => (
              <div key={friend._id}>
                <FriendsCard friend={friend} type="friend" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="border-b border-line_color pb-2 text-base font-gilroyMedium text-black">
          Friends Request
        </h1>
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
        <h1 className="border-b border-line_color pb-2 text-base font-gilroyMedium text-black">
          Send Request
        </h1>
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
