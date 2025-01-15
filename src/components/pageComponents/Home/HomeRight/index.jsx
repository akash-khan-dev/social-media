import { useGetAllFriendsListQuery } from "../../../../StateFeature/api/authApi";
import FriendsContact from "../../../FriendsContact";
import RightFriends from "./RightFriends";
import Stories from "./Stories";

const RightHome = () => {
  const { data: friendsData, refetch } = useGetAllFriendsListQuery();
  console.log(friendsData);

  return (
    <>
      <div>
        <RightFriends friendsData={friendsData?.request} refetch={refetch} />
      </div>
      <div>
        <Stories />
      </div>
      <div>
        <FriendsContact friendsData={friendsData?.friends} />
      </div>
    </>
  );
};

export default RightHome;
