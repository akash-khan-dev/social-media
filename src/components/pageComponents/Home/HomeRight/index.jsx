import { useGetAllFriendsListQuery } from "../../../../StateFeature/api/authApi";
import RightFriends from "./RightFriends";
import Stories from "./Stories";

const RightHome = () => {
  const { data: friendsData } = useGetAllFriendsListQuery();
  return (
    <>
      <div>
        <RightFriends friendsData={friendsData} />
      </div>
      <div>
        <Stories />
      </div>
    </>
  );
};

export default RightHome;
