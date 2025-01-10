import FriendsCard from "../../components/friendsCard";
import { useGetAllFriendsListQuery } from "../../StateFeature/api/authApi";

const Friends = () => {
  const { data: friendsData } = useGetAllFriendsListQuery();
  console.log(friendsData);

  return (
    <>
      <div>
        <h1 className="border-b border-line_color pb-2 text-base font-gilroyMedium text-black">
          All Friends
        </h1>
        <div className="bg-gray-100  p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FriendsCard />
            <FriendsCard />
            <FriendsCard />
            <FriendsCard />
          </div>
        </div>
      </div>
      <div>
        <h1 className="border-b border-line_color pb-2 text-base font-gilroyMedium text-black">
          Friends Request
        </h1>
        <div className="bg-gray-100 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FriendsCard />
            <FriendsCard />
            <FriendsCard />
            <FriendsCard />
          </div>
        </div>
      </div>
      <div>
        <h1 className="border-b border-line_color pb-2 text-base font-gilroyMedium text-black">
          Send Request
        </h1>
        <div className="bg-gray-100 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FriendsCard />
            <FriendsCard />
            <FriendsCard />
            <FriendsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
