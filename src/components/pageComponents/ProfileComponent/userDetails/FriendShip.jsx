/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import OutSideClick from "../../../../utils/Click";
import { IoIosCheckmarkCircleOutline, IoMdPersonAdd } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import {
  useAcceptRequestMutation,
  useAddFriendMutation,
  useCancelRequestMutation,
  useDeleteRequestMutation,
  useFollowMutation,
  useUnFollowMutation,
  useUnFriendMutation,
} from "../../../../StateFeature/api/authApi";
export const FriendShip = ({ profileId, friendShips }) => {
  const [friendShip, setFriendShip] = useState(friendShips);
  const [friendMenu, setFriendMenu] = useState(false);
  const [responseMenu, setResponseMenu] = useState(false);
  const friendRef = useRef(null);
  const responseRef = useRef(null);

  const [addFriend] = useAddFriendMutation();
  const [cancelRequest] = useCancelRequestMutation();
  const [follow] = useFollowMutation();
  const [unFollow] = useUnFollowMutation();
  const [acceptRequest] = useAcceptRequestMutation();
  const [unFriend] = useUnFriendMutation();
  const [deleteRequest] = useDeleteRequestMutation();

  OutSideClick(friendRef, () => {
    setFriendMenu(false);
  });
  OutSideClick(responseRef, () => {
    setResponseMenu(false);
  });
  const handleAddRequest = async () => {
    try {
      await addFriend(profileId).unwrap();
      setFriendShip({ ...friendShip, following: true, request: true });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleCancelRequest = async () => {
    try {
      await cancelRequest(profileId).unwrap();
      setFriendShip({ ...friendShip, following: false, request: false });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFollow = async () => {
    try {
      await follow(profileId).unwrap();
      setFriendShip({ ...friendShip, following: true });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUnfollow = async () => {
    try {
      await unFollow(profileId).unwrap();
      setFriendShip({ ...friendShip, following: false });
      setFriendMenu(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleAcceptRequest = async () => {
    try {
      await acceptRequest(profileId).unwrap();
      setFriendShip({
        ...friendShip,
        friend: true,
        following: true,
        request: false,
        requestReceived: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUnfriend = async () => {
    try {
      await unFriend(profileId).unwrap();
      setFriendShip({
        ...friendShip,
        friend: false,
        following: false,
        request: false,
        requestReceived: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeleteRequest = async () => {
    try {
      await deleteRequest(profileId).unwrap();
      setFriendShip({
        ...friendShip,
        friend: false,
        following: false,
        request: false,
        requestReceived: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setFriendShip(friendShips);
  }, [friendShips]);

  return (
    <>
      {friendShip?.friend ? (
        <div className="relative">
          <div
            onClick={() => setFriendMenu(!friendMenu)}
            className="cursor-pointer font-gilroyMedium flex bg-white shadow-sm text-black px-3 py-2 items-center gap-x-2 rounded-md"
          >
            <RiUserFollowFill />
            <button className="">Friends</button>
          </div>
          <div>
            {friendMenu && (
              <div
                ref={friendRef}
                className="absolute top-10 right-0 bg-white rounded-md shadow-md"
              >
                <div
                  onClick={handleUnfriend}
                  className="flex items-center px-5 py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300"
                >
                  <RiUserUnfollowFill />
                  <span className="font-gilroyMedium text-black text-base">
                    Unfriend
                  </span>
                </div>
                <div
                  onClick={handleUnfollow}
                  className="flex items-center  px-5 py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300"
                >
                  <RiUserUnfollowFill />
                  <span className="font-gilroyMedium text-black text-base">
                    Unfollow
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        !friendShip?.request &&
        !friendShip?.requestReceived && (
          <div
            onClick={handleAddRequest}
            className="cursor-pointer font-gilroyMedium flex bg-blue text-white px-3 py-1 lg:py-2 items-center gap-x-2 rounded-md"
          >
            <IoMdPersonAdd />
            <button className="text-sm">Add Friend</button>
          </div>
        )
      )}
      {/* request part start */}
      {friendShip?.request ? (
        <div
          onClick={handleCancelRequest}
          className="cursor-pointer font-gilroyMedium flex bg-white text-black px-3 lg:px-2 py-2 items-center gap-x-2 rounded-md"
        >
          <RiUserUnfollowFill />
          <button className="text-sm 2xl:text-md">Cancel Request</button>
        </div>
      ) : (
        friendShip?.requestReceived && (
          <div className="relative">
            <div
              onClick={() => setResponseMenu(!responseMenu)}
              className="cursor-pointer font-gilroyMedium flex bg-white text-black px-3 py-1 md:py-2 items-center gap-x-2 rounded-md"
            >
              <RiUserFollowFill />
              <button className="text-sm 2xl:text-md">Response</button>
            </div>
            {responseMenu && (
              <div
                ref={responseRef}
                className="absolute top-10 right-0 bg-white rounded-md shadow-md"
              >
                <div
                  onClick={handleAcceptRequest}
                  className="flex items-center px-5 py-1 md:py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300"
                >
                  <IoIosCheckmarkCircleOutline />
                  <button className="text-sm 2xl:text-md">Confirm</button>
                </div>
                <div
                  onClick={handleDeleteRequest}
                  className="flex items-center  px-5 py-1 md:py-2 cursor-pointer gap-x-2 hover:bg-white_100 transition duration-300"
                >
                  <MdOutlineCancel />
                  <button className="text-sm 2xl:text-md">Delete</button>
                </div>
              </div>
            )}
          </div>
        )
      )}
      {friendShip?.following ? (
        <div
          onClick={handleUnfollow}
          className="cursor-pointer font-gilroyMedium flex bg-white text-black px-3 py-1 md:py-2 items-center gap-x-2 rounded-md"
        >
          <RiUserFollowFill />
          <button className="text-sm 2xl:text-md">Following</button>
        </div>
      ) : (
        <div
          onClick={handleFollow}
          className="cursor-pointer font-gilroyMedium flex bg-blue text-white px-3 py-1 md:py-2 items-center gap-x-2 rounded-md"
        >
          <RiUserFollowFill />
          <button className="text-sm 2xl:text-md">Follow</button>
        </div>
      )}
    </>
  );
};
