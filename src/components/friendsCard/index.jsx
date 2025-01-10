/* eslint-disable react/prop-types */
import profile from "../../../public/postBackgrounds/man.jpg";
import {
  useAcceptRequestMutation,
  useCancelRequestMutation,
  useDeleteRequestMutation,
} from "../../StateFeature/api/authApi";
const FriendsCard = ({ friend, type, refetch }) => {
  const [cancelRequest] = useCancelRequestMutation();
  const [acceptRequest] = useAcceptRequestMutation();
  const [deleteRequest] = useDeleteRequestMutation();
  const handleCancelRequest = async (profileId) => {
    try {
      const response = await cancelRequest(profileId).unwrap();
      if (response.message === "Cancel Request") {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAcceptRequest = async (profileId) => {
    try {
      const response = await acceptRequest(profileId).unwrap();
      if (response.message === "Request friend") {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteRequest = async (profileId) => {
    try {
      let response = await deleteRequest(profileId).unwrap();
      if (response.message === "Request Delete") {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md flex flex-col items-center">
        <img
          src={friend?.profilePicture || profile}
          alt="Profile"
          className="w-full h-[200px] lg:h-[150px] mb-4 mx-auto"
        />
        {/* Profile Info */}
        <h2 className="font-bold text-gray-800 text-center pb-3">
          {friend?.firstName + " " + friend?.lastName}
        </h2>
        {/* <p className="text-sm text-gray-500 text-center">
          {friend.mutualFriends} mutual friends
        </p> */}
        {/* Buttons */}
        {type === "request" ? (
          <div className="mt-2 flex flex-col text-center mb-3">
            <button
              onClick={() => handleAcceptRequest(friend._id)}
              className="bg-blue text-white text-sm py-2 px-4 font-gilroyMedium  rounded-lg hover:bg-blue-600"
            >
              Accept
            </button>
            <button
              onClick={() => handleDeleteRequest(friend._id)}
              className="bg-white_100 mt-2 text-black font-gilroyMedium text-sm py-2 px-4 rounded-lg "
            >
              Remove
            </button>
          </div>
        ) : type == "sendRequest" ? (
          <div
            onClick={() => handleCancelRequest(friend._id)}
            className="mt-4 flex flex-col text-center mb-3"
          >
            <button className="bg-blue text-white text-sm py-2 px-4 font-gilroyMedium  rounded-lg hover:bg-blue-600">
              Cancel Request
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FriendsCard;
