/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import profile from "../../../../../public/postBackgrounds/man.jpg";
import {
  useAcceptRequestMutation,
  useDeleteRequestMutation,
} from "../../../../StateFeature/api/authApi";
const RightFriends = ({ friendsData, refetch }) => {
  const navigate = useNavigate();
  const [acceptRequest] = useAcceptRequestMutation();
  const [deleteRequest] = useDeleteRequestMutation();
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

  const navigateProfile = (username) => {
    navigate(`/profile/${username}`);
  };
  return (
    <>
      <div className=" pr-4">
        <div className="flex items-center justify-between py-2 border-b border-line_color pb-3">
          <div>
            <h3 className="font-gilroySemibold text-lg text-black">
              Friends Request
            </h3>
          </div>
          <div>
            <Link
              to={"/friends"}
              className="block font-gilroySemibold text-md border border-black py-1 px-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              See All
            </Link>
          </div>
        </div>
        <div>
          {friendsData?.length > 0 ? (
            friendsData?.slice(0, 4).map((friend) => (
              <div key={friend._id} className="flex mt-4">
                <div className="w-[25%]">
                  <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                    <img src={friend.profilePicture || profile} alt="profile" />
                  </div>
                </div>
                <div className="w-[75%]">
                  <h4
                    onClick={() => navigateProfile(friend.username)}
                    className="font-gilroySemibold text-md cursor-pointer"
                  >
                    {friend.firstName + " " + friend.lastName}
                  </h4>
                  {/* <p className="font-gilroyNormal text-xs text-secondary_color">
                    1 hour ago
                  </p> */}
                  <div className="mt-3 flex gap-4">
                    <button
                      onClick={() => handleAcceptRequest(friend._id)}
                      className=" bg-black py-1 px-4 rounded-lg font-gilroyMedium text-white"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDeleteRequest(friend._id)}
                      className="bg-red py-1 px-4 rounded-lg font-gilroyMedium text-white"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <span className="font-bold text-lg text-red">
                No request available
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightFriends;
